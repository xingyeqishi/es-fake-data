exports.id = "main";
exports.modules = {

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _elastic_elasticsearch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @elastic/elasticsearch */ "@elastic/elasticsearch");
/* harmony import */ var _elastic_elasticsearch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_elastic_elasticsearch__WEBPACK_IMPORTED_MODULE_11__);



var _jsxFileName = "/Users/xiji/workspace/fe-fake/src/server.js";









var client = new _elastic_elasticsearch__WEBPACK_IMPORTED_MODULE_11__["Client"]({
  node: 'http://192.168.100.177:9200'
});

var assets = __webpack_require__(/*! ./build/assets.json */ "./build/assets.json");

var router = express__WEBPACK_IMPORTED_MODULE_6___default.a.Router();
var server = express__WEBPACK_IMPORTED_MODULE_6___default()();
server.disable('x-powered-by').use(express__WEBPACK_IMPORTED_MODULE_6___default.a["static"]("/Users/xiji/workspace/fe-fake/public")).use(body_parser__WEBPACK_IMPORTED_MODULE_7___default.a.json()).get('/*', function (req, res) {
  var context = {};
  var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_10__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["StaticRouter"], {
    context: context,
    location: req.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  })));

  if (context.url) {
    res.redirect(context.url);
  } else {
    res.status(200).send("<!doctype html>\n    <html lang=\"\">\n    <head>\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n        <meta charset=\"utf-8\" />\n        <title>Welcome to Razzle</title>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        ".concat(assets.client.css ? "<link rel=\"stylesheet\" href=\"".concat(assets.client.css, "\">") : '', "\n        ").concat( false ? undefined : "<script src=\"".concat(assets.client.js, "\" defer crossorigin></script>"), "\n    </head>\n    <body>\n        <div id=\"root\">").concat(markup, "</div>\n    </body>\n</html>"));
  }
});
server.use('/', router);
router.post('/query',
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(req, res) {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return client.search({
              index: req.body.index,
              body: JSON.parse(req.body.query)
            });

          case 2:
            result = _context.sent;

            if (result.body.hits.hits.length > 0) {
              res.send({
                data: result.body.hits.hits[0]
              });
            } else {
              res.send({
                data: null
              });
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

function repeatData(data, change, repeat, total) {
  var arr = [];

  for (var t = 0; t < total / repeat; t++) {
    change.forEach(function (item) {
      var _item$split = item.split('#'),
          _item$split2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_item$split, 2),
          key = _item$split2[0],
          type = _item$split2[1];

      data[key] = faker__WEBPACK_IMPORTED_MODULE_8___default.a.internet[type]();
    });

    for (var i = 0; i < repeat; i++) {
      data = Object.assign({}, data);
      data.input_time = ++data.input_time;
      data.id = faker__WEBPACK_IMPORTED_MODULE_8___default.a.random.uuid();
      arr.push(data);
    }
  }

  return arr;
}

router.post('/run',
/*#__PURE__*/
function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(req, res, next) {
    var source, change, control, controlObj, dataArr, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            source = JSON.parse(req.body.source);
            change = req.body.change.split('\n');
            control = req.body.control.split('\n');
            controlObj = {};
            control.forEach(function (item) {
              var _item$split3 = item.split(':'),
                  _item$split4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_item$split3, 2),
                  key = _item$split4[0],
                  value = _item$split4[1];

              controlObj[key] = parseInt(value, 10);
            });
            dataArr = repeatData(source, change, control.repeat || 1, control.total || 1);
            fs__WEBPACK_IMPORTED_MODULE_9___default.a.writeFileSync('./data', JSON.stringify(dataArr));
            _context2.prev = 7;
            _context2.next = 10;
            return client.bulk({
              body: dataArr.flatMap(function (source) {
                return [{
                  index: {
                    _index: control.index,
                    _type: "log",
                    _id: source.id
                  }
                }, source];
              })
            });

          case 10:
            result = _context2.sent;
            console.log(result);
            console.log('--------', result.body.errors);
            _context2.next = 17;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](7);

          case 17:
            res.send('ok');

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[7, 15]]);
  }));

  return function (_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}());
/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ })

};
//# sourceMappingURL=main.a9a18702eee2dfa87129.hot-update.js.map