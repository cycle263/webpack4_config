/*! hash:70737f938bda7e124749, chunkhash:3120559a55c683f22184, name:index, filebase:index.70737.js, query:, file:index.70737.js -- by Cycle */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "tjUo");
/******/ })
/************************************************************************/
/******/ ({

/***/ "4Vif":
/*!********************************!*\
  !*** ./src/component/app.less ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "DFOy":
/*!********************************!*\
  !*** ./src/component/first.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "q1tI");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "eO8H");

var _app = __webpack_require__(/*! ../assets/datas/app.json */ "qh5r");

var _map = __webpack_require__(/*! imagesPath/map.jpg */ "RVQV");

var _map2 = _interopRequireDefault(_map);

var _img = __webpack_require__(/*! imagesPath/img.png */ "f1NQ");

var _img2 = _interopRequireDefault(_img);

__webpack_require__(/*! ./app.less */ "4Vif");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // images 为别名config中的alias


var First = function (_React$Component) {
  _inherits(First, _React$Component);

  function First(props) {
    _classCallCheck(this, First);

    return _possibleConstructorReturn(this, (First.__proto__ || Object.getPrototypeOf(First)).call(this, props));
  }

  _createClass(First, [{
    key: 'generateList',
    value: function generateList() {
      return _app.base.map(function (item) {
        return _react2.default.createElement(
          'p',
          { key: item.name },
          item.name,
          ': ',
          item.age
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'ul',
          { className: 'footer' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { exact: true, to: '/', activeStyle: { color: '#4dc060' } },
              '\u9996\u9875'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { to: '/first', activeStyle: { color: '#4dc060' } },
              'First'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'test' },
          'Hello, First!'
        ),
        this.generateList()
      );
    }
  }]);

  return First;
}(_react2.default.Component);

exports.default = First;

/***/ }),

/***/ "EVdn":
/*!***************************************************************************************!*\
  !*** delegated ./node_modules/jquery/dist/jquery.js from dll-reference dev_lib_90128 ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dev_lib_90128 */ "gO/C"))("./node_modules/jquery/dist/jquery.js");

/***/ }),

/***/ "RVQV":
/*!***********************************!*\
  !*** ./src/assets/images/map.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./images/map.ce239.jpg";

/***/ }),

/***/ "eO8H":
/*!**********************************************************************************************!*\
  !*** delegated ./node_modules/react-router-dom/es/index.js from dll-reference dev_lib_90128 ***!
  \**********************************************************************************************/
/*! exports provided: BrowserRouter, HashRouter, Link, MemoryRouter, NavLink, Prompt, Redirect, Route, Router, StaticRouter, Switch, matchPath, withRouter */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dev_lib_90128 */ "gO/C"))("./node_modules/react-router-dom/es/index.js");

/***/ }),

/***/ "etsB":
/*!******************************!*\
  !*** ./src/component/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "q1tI");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "eO8H");

var _app = __webpack_require__(/*! ../assets/datas/app.json */ "qh5r");

var _map = __webpack_require__(/*! imagesPath/map.jpg */ "RVQV");

var _map2 = _interopRequireDefault(_map);

var _img = __webpack_require__(/*! imagesPath/img.png */ "f1NQ");

var _img2 = _interopRequireDefault(_img);

__webpack_require__(/*! ./app.less */ "4Vif");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // images 为别名config中的alias


var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: 'generateList',
    value: function generateList() {
      return _app.base.map(function (item) {
        return _react2.default.createElement(
          'p',
          { key: item.name },
          item.name,
          ': ',
          item.age
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'ul',
          { className: 'footer' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { exact: true, to: '/', activeStyle: { color: '#4dc060' } },
              '\u9996\u9875'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { to: '/first', activeStyle: { color: '#4dc060' } },
              'First'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'test' },
          'Hello, app!',
          _react2.default.createElement('img', { src: _img2.default, alt: 'file' })
        ),
        _react2.default.createElement('img', { src: _map2.default, alt: 'gif' }),
        this.generateList()
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),

/***/ "f1NQ":
/*!***********************************!*\
  !*** ./src/assets/images/img.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAQAAAACNCElAAABRUlEQVR4AWMYccBc3GSF8Qfj/8RDkz8m50xcsRpmfBiogHT401wLwygzRaDEeyt5UvziwGGyHKirEUPC1Aro7KOkBo1pKtCwWcPKMGNvk9PGn4HYm2LDjL2RYtCbQsNMTgPlqxx4TKqA9GlKXfbZ+L8DDzA58AC1f6a5y+gfZpixSad0NmqYmaXJPZPJ/xmpYJiJIbTcnUqxYeZaxq+BCveZfAeKd1FkmKWK8TOgss3GrCZexr+AMvVQjzsZPzSeZcxKgmHGcsYPgLw9Dhxg7wab/AFqKQaxjH+AK5JtxlxEGmYqYXwLyD7ixg0PvVjjf0BNS43/AsUXGr8CksdsBIkyzOQoUMEZY36UrJQBrdyqgV5VA7nb+DBxhm01OWImjJEz84yfmqZCQ1QaaOGW0exEsWGYzQMLBQqbB5Q3XKjZpBppAACG6ILR7K9q8gAAAABJRU5ErkJggg=="

/***/ }),

/***/ "gO/C":
/*!********************************!*\
  !*** external "dev_lib_90128" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dev_lib_90128;

/***/ }),

/***/ "i8i4":
/*!************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference dev_lib_90128 ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dev_lib_90128 */ "gO/C"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "q1tI":
/*!********************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dev_lib_90128 ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dev_lib_90128 */ "gO/C"))("./node_modules/react/index.js");

/***/ }),

/***/ "qh5r":
/*!***********************************!*\
  !*** ./src/assets/datas/app.json ***!
  \***********************************/
/*! exports provided: base, default */
/***/ (function(module) {

module.exports = {"base":[{"name":"Tom","age":24},{"name":"John","age":22}]};

/***/ }),

/***/ "tjUo":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "q1tI");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "i8i4");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "eO8H");

var _jquery = __webpack_require__(/*! jquery */ "EVdn");

var _jquery2 = _interopRequireDefault(_jquery);

var _app = __webpack_require__(/*! ./component/app */ "etsB");

var _app2 = _interopRequireDefault(_app);

var _first = __webpack_require__(/*! ./component/first */ "DFOy");

var _first2 = _interopRequireDefault(_first);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('' + "production");
_reactDom2.default.render(_react2.default.createElement(
  _reactRouterDom.BrowserRouter,
  { basename:  true ? '/webpack4_config/dist' : undefined },
  _react2.default.createElement(
    _reactRouterDom.Switch,
    null,
    _react2.default.createElement(_reactRouterDom.Route, { path: '/index', component: _app2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/first', component: _first2.default }),
    _react2.default.createElement(_reactRouterDom.Redirect, { from: '/', to: '/index' })
  )
), document.getElementById('react-content'));

/***/ })

/******/ });
//# sourceMappingURL=index.70737.js.map