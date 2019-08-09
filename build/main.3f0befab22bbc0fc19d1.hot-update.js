exports.id = "main";
exports.modules = {

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/applyDecoratedDescriptor */ "@babel/runtime/helpers/applyDecoratedDescriptor");
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _react_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./react.svg */ "./src/react.svg");
/* harmony import */ var _react_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_react_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var autobind_decorator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! autobind-decorator */ "autobind-decorator");
/* harmony import */ var autobind_decorator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(autobind_decorator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Home.css */ "./src/Home.css");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Home_css__WEBPACK_IMPORTED_MODULE_13__);









var _class,
    _temp,
    _jsxFileName = "/Users/xiji/workspace/fe-fake/src/Home.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var TextArea = antd__WEBPACK_IMPORTED_MODULE_11__["Input"].TextArea;
var Text = antd__WEBPACK_IMPORTED_MODULE_11__["Typography"].Text;
var Content = antd__WEBPACK_IMPORTED_MODULE_11__["Layout"].Content,
    Header = antd__WEBPACK_IMPORTED_MODULE_11__["Layout"].Header;

var Home = (_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Home, _React$Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", {
      source: '',
      change: ''
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Home, [{
    key: "changeSource",
    value: function changeSource(e) {
      this.setState({
        source: e.target.value
      });
    }
  }, {
    key: "changeVal",
    value: function changeVal(e) {
      this.setState({
        change: e.target.value
      });
    }
  }, {
    key: "createSample",
    value: function createSample() {
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.post('/run', _objectSpread({}, this.state)).then(function (res) {
        return console.log(res);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          source = _this$state.source,
          change = _this$state.change;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "Home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_11__["Layout"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Header, {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Text, {
        type: "warning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "\u9020\u6570\u636E")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Content, {
        style: {
          padding: '15px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        span: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TextArea, {
        autosize: {
          minRows: 8,
          maxRows: 50
        },
        value: source,
        onChange: this.changeSource,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        span: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TextArea, {
        autosize: {
          minRows: 8,
          maxRows: 20
        },
        onChange: this.changeVal,
        value: change,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        type: "primary",
        onClick: this.createSample,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, "\u751F\u6210\u6837\u4F8B"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        type: "danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "\u5F00\u59CB\u521B\u5EFA"))))));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component), _temp), (_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_7___default()(_class.prototype, "changeSource", [autobind_decorator__WEBPACK_IMPORTED_MODULE_12___default.a], Object.getOwnPropertyDescriptor(_class.prototype, "changeSource"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_7___default()(_class.prototype, "changeVal", [autobind_decorator__WEBPACK_IMPORTED_MODULE_12___default.a], Object.getOwnPropertyDescriptor(_class.prototype, "changeVal"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_7___default()(_class.prototype, "createSample", [autobind_decorator__WEBPACK_IMPORTED_MODULE_12___default.a], Object.getOwnPropertyDescriptor(_class.prototype, "createSample"), _class.prototype)), _class);
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

};
//# sourceMappingURL=main.3f0befab22bbc0fc19d1.hot-update.js.map