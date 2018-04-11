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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Navbar = __webpack_require__(6);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Home = __webpack_require__(16);

var _Home2 = _interopRequireDefault(_Home);

var _User = __webpack_require__(18);

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	routes: [{
		path: '/',
		component: _Home2.default,
		exact: true
	}, {
		path: '/user',
		component: _User2.default,
		exact: true
	}],
	redirects: [{
		from: '/people',
		to: '/user',
		status: 301
	}]
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_Component) {
	_inherits(Navbar, _Component);

	function Navbar() {
		_classCallCheck(this, Navbar);

		return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
	}

	_createClass(Navbar, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'ul',
					null,
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							_reactRouterDom.Link,
							{ to: '/' },
							'Home'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							_reactRouterDom.Link,
							{ to: '/user' },
							'User'
						)
					)
				)
			);
		}
	}], [{
		key: 'fetchData',
		value: function fetchData() {
			console.log('test');
		}
	}]);

	return Navbar;
}(_react.Component);

exports.default = Navbar;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var Types = exports.Types = {
	UPDATE_NAME: 'UPDATE_NAME'
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _Redirect = __webpack_require__(17);

var _Redirect2 = _interopRequireDefault(_Redirect);

var _Navbar = __webpack_require__(6);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _routes = __webpack_require__(4);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
	_inherits(App, _Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			var routes = _routes2.default.routes.map(function (_ref, i) {
				var path = _ref.path,
				    component = _ref.component,
				    exact = _ref.exact;
				return _react2.default.createElement(_reactRouterDom.Route, { key: Math.random() + 'ROUTE_', exact: exact, path: path, component: component });
			});
			var redirects = _routes2.default.redirects.map(function (_ref2, i) {
				var from = _ref2.from,
				    to = _ref2.to,
				    status = _ref2.status;
				return _react2.default.createElement(_Redirect2.default, { key: Math.random() + 'REDIRECT_', from: from, to: to, status: status });
			});
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_Navbar2.default, null),
				_react2.default.createElement(
					_reactRouterDom.Switch,
					null,
					routes,
					redirects
				)
			);
		}
	}]);

	return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var customMiddleware = function customMiddleware(store) {
	return function (next) {
		return function (action) {
			return isFunction(action) ? action(store.dispatch, store.getState) : next(action);
		};
	};
};
var isFunction = function isFunction(action) {
	return typeof action === 'function';
};
exports.default = customMiddleware;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(2);

var _userReducer = __webpack_require__(20);

var _userReducer2 = _interopRequireDefault(_userReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
	user: _userReducer2.default
});

exports.default = reducers;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(11);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(13);

var _server2 = _interopRequireDefault(_server);

var _reactHelmet = __webpack_require__(1);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _App = __webpack_require__(8);

var _App2 = _interopRequireDefault(_App);

var _reactDom = __webpack_require__(12);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(2);

var _combine = __webpack_require__(10);

var _combine2 = _interopRequireDefault(_combine);

var _reactRouter = __webpack_require__(14);

var _thunk = __webpack_require__(9);

var _thunk2 = _interopRequireDefault(_thunk);

var _routes = __webpack_require__(4);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/dist', _express2.default.static('./dist'));

app.get('*', async function (req, res) {
	try {
		// create a new redux store for each request
		var store = (0, _redux.createStore)(_combine2.default, {}, (0, _redux.applyMiddleware)(_thunk2.default));

		var foundPath = null;

		// match the request url to router paths and render component

		var _ref = _routes2.default.routes.find(function (_ref2) {
			var path = _ref2.path,
			    exact = _ref2.exact;

			foundPath = (0, _reactRouter.matchPath)(req.url, {
				path: path,
				exact: exact,
				strict: false
			});
			return foundPath;
		}) || {},
		    path = _ref.path,
		    component = _ref.component;

		// return empty shell if component is invalid


		if (!component) {
			component = {};
		}

		// return empty promise for no fetchData function
		if (!component.fetchData) {
			component.fetchData = function () {
				return new Promise(function (resolve) {
					return resolve();
				});
			};
		}

		await component.fetchData({ store: store, params: foundPath ? foundPath.params : {} });
		// retrieve the store state
		var preloadedState = store.getState();
		// context used by router
		var context = {};

		var html = _server2.default.renderToString(_react2.default.createElement(
			_reactRedux.Provider,
			{ store: store },
			_react2.default.createElement(
				_reactRouter.StaticRouter,
				{ context: context, location: req.url },
				_react2.default.createElement(_App2.default, null)
			)
		));

		// render helmet data
		var helmetData = _reactHelmet2.default.renderStatic();

		// check context for url to redirect to
		if (context.url) {
			res.redirect(context.status, 'http://' + (req.header.host + context.url));
		} else if (foundPath && foundPath.path === '/404')
			// send customer 404 page
			res.status(404).send(renderFullPage, preloadedState, helmetData);else {
			res.send(renderFullPage(html, preloadedState, helmetData));
		}
	} catch (error) {
		res.status(400).send(renderFullPage('An error occured', {}, {}));
	}
});

var port = process.env.PORT || 8080;

app.listen(port, function () {
	return console.log('Listening on localhost:' + port);
});

function renderFullPage(html, preloadedState, helmet) {
	return '\n    <!doctype html>\n    <html>\n      <head>\n        <link rel="icon" href="/dist/favicon.ico" type="image/ico" />\n        ' + helmet.title.toString() + '\n        ' + helmet.meta.toString() + '\n        ' + helmet.link.toString() + '\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          // WARNING: See the following for security issues around embedding JSON in HTML:\n          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\n          window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n        </script>\n        <script src="/dist/assets/app.bundle.js"></script>\n      </body>\n    </html>\n    ';
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
	_inherits(Home, _Component);

	function Home() {
		_classCallCheck(this, Home);

		return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	}

	_createClass(Home, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_reactHelmet.Helmet,
					null,
					_react2.default.createElement('meta', { charSet: 'utf-8' }),
					_react2.default.createElement(
						'title',
						null,
						'Home'
					)
				),
				_react2.default.createElement(
					'strong',
					null,
					'Home'
				)
			);
		}
	}], [{
		key: 'fetchData',
		value: function fetchData(_ref) {
			var store = _ref.store;

			return new Promise(function (resolve) {
				return resolve();
			}); //default
		}
	}]);

	return Home;
}(_react.Component);

exports.default = Home;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RedirectWithStatus = function RedirectWithStatus(_ref) {
	var key = _ref.key,
	    from = _ref.from,
	    to = _ref.to,
	    status = _ref.status;
	return _react2.default.createElement(_reactRouterDom.Route, {
		render: function render(_ref2) {
			var staticContext = _ref2.staticContext;

			// there is no `staticContext` on the client, so
			// we need to guard against that here
			if (staticContext) staticContext.status = status;
			return _react2.default.createElement(_reactRouterDom.Redirect, { key: key, from: from, to: to });
		}
	});
};
exports.default = _reactRouterDom.Redirect;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(2);

var _reactHelmet = __webpack_require__(1);

var _userActions = __webpack_require__(19);

var actions = _interopRequireWildcard(_userActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_Component) {
	_inherits(User, _Component);

	function User() {
		_classCallCheck(this, User);

		return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
	}

	_createClass(User, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.getName(1);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_reactHelmet.Helmet,
					null,
					_react2.default.createElement('meta', { charSet: 'utf-8' }),
					_react2.default.createElement(
						'title',
						null,
						'User'
					)
				),
				_react2.default.createElement(
					'strong',
					null,
					'User page '
				),
				'Async data [ name: ',
				this.props.name,
				'email: ',
				this.props.email,
				']'
			);
		}
	}], [{
		key: 'fetchData',
		value: function fetchData(_ref) {
			var store = _ref.store;

			return store.dispatch(actions.getName(1));
		}
	}]);

	return User;
}(_react.Component);

function mapStateToProps(state) {
	return _extends({}, state.user);
}
function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)(actions, dispatch);
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(User);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getName = getName;

var _userTypes = __webpack_require__(7);

var _axios = __webpack_require__(21);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getName(id) {
	return async function (dispatch, getState) {
		var _ref = await getUserFromAPI(id),
		    data = _ref.data;

		dispatch({ type: _userTypes.Types.UPDATE_NAME, payload: data });
	};
}
function getUserFromAPI(id) {
	return _axios2.default.get('https://jsonplaceholder.typicode.com/users/' + id);
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = userReducer;

var _userTypes = __webpack_require__(7);

var initialState = {
	name: null,
	email: null
};

function userReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case _userTypes.Types.UPDATE_NAME:
			return _extends({}, state, { name: action.payload.name, email: action.payload.email });
		default:
			return state;
	}
}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map