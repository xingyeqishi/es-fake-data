import App from './App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import bodyParser from 'body-parser';
import faker from 'faker';
import fs from 'fs';

import { renderToString } from 'react-dom/server';
import { Client  } from '@elastic/elasticsearch';

const client = new Client({ node: 'http://192.168.100.177:9200'  })

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const router = express.Router();
const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .use(bodyParser.json())
  .get('/*', (req, res) => {
    const context = {};
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${
          assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ''
        }
        ${
          process.env.NODE_ENV === 'production'
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
    </head>
    <body>
        <div id="root">${markup}</div>
    </body>
</html>`
      );
    }
  });

server.use('/', router)

router.post('/query', async (req, res) => {
	const result = await client.search({
		index: req.body.index,
		body: JSON.parse(req.body.query)
	})
	if (result.body.hits.hits.length > 0) {
		res.send({
			data: result.body.hits.hits[0]
		})
	} else {
		res.send({data: null})
	}
})
function repeatData(data, change, repeat, total) {
	let arr = [];
	for (var t = 0; t < total / repeat; t++) {
		change.forEach((item) => {
			const [key, type] = item.split('#');
			data[key] = faker.internet[type]();
		})
		for (var i = 0; i < repeat; i++) {
			data = Object.assign({}, data);
			data.time = ++data.time;
			data.id = faker.random.uuid();
			arr.push(data);
		}
	}
	return arr;
}
router.post('/run', async (req, res, next) => {
	let source = JSON.parse(req.body.source);
	let change = req.body.change.split('\n');
	let control = req.body.control.split('\n');
	let controlObj = {};
	control.forEach((item) => {
		const [key, value] = item.split(':');
		controlObj[key] = isNaN(parseInt(value, 10)) ? value : parseInt(value, 10);
	})
	console.log(control);
	let dataArr = repeatData(source, change, controlObj.repeat || 1, controlObj.total || 1)
	let body = dataArr.flatMap(source => [
				{ index: { _index: controlObj.index, _type: "log", _id: source.id  }  },
				source
			]);
	fs.writeFileSync('./data', JSON.stringify(body));

	try {
		const result = await client.bulk({
			refresh: true,
			body
		})
		res.send(result);
	} catch(e) {
		res.send(e);
	}
})
export default server;
