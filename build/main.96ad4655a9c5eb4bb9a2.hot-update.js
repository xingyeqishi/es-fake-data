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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _elastic_elasticsearch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @elastic/elasticsearch */ "@elastic/elasticsearch");
/* harmony import */ var _elastic_elasticsearch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_elastic_elasticsearch__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "/Users/xiji/workspace/fe-fake/src/server.js";








var client = new _elastic_elasticsearch__WEBPACK_IMPORTED_MODULE_9__["Client"]({
  node: 'http://192.168.100.177:9200'
});

var assets = __webpack_require__(/*! ./build/assets.json */ "./build/assets.json");

var router = express__WEBPACK_IMPORTED_MODULE_5___default.a.Router();
var server = express__WEBPACK_IMPORTED_MODULE_5___default()();
server.disable('x-powered-by').use(express__WEBPACK_IMPORTED_MODULE_5___default.a["static"]("/Users/xiji/workspace/fe-fake/public")).use(body_parser__WEBPACK_IMPORTED_MODULE_6___default.a.json()).get('/*', function (req, res) {
  var context = {};
  var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_8__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["StaticRouter"], {
    context: context,
    location: req.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  })));

  if (context.url) {
    res.redirect(context.url);
  } else {
    res.status(200).send("<!doctype html>\n    <html lang=\"\">\n    <head>\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n        <meta charset=\"utf-8\" />\n        <title>Welcome to Razzle</title>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        ".concat(assets.client.css ? "<link rel=\"stylesheet\" href=\"".concat(assets.client.css, "\">") : '', "\n        ").concat( false ? undefined : "<script src=\"".concat(assets.client.js, "\" defer crossorigin></script>"), "\n    </head>\n    <body>\n        <div id=\"root\">").concat(markup, "</div>\n    </body>\n</html>"));
  }
});
server.use('/', router);
router.post('/run',
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res, next) {
    var source, change, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            source = JSON.parse(req.body.source);
            change = req.body.change.split('\n');
            source.data = faker__WEBPACK_IMPORTED_MODULE_7___default.a.internet.url();
            console.log(source.data);
            console.log(change);
            source.id = faker__WEBPACK_IMPORTED_MODULE_7___default.a.random.uuid();
            _context.prev = 6;
            _context.next = 9;
            return client.bulk({
              body: [[{
                index: {
                  _index: 'tdp-2019-08-08',
                  _type: "log",
                  _id: source.id
                }
              }, source]]
            });

          case 9:
            result = _context.sent;
            console.log('--------', result);
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](6);
            console.error(_context.t0);

          case 16:
            res.send('ok');

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 13]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ })

};
//# sourceMappingURL=main.96ad4655a9c5eb4bb9a2.hot-update.js.map