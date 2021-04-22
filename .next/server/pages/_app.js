module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.css":
/*!*****************!*\
  !*** ./app.css ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2FwcC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app.css\n");

/***/ }),

/***/ "./components/FutureLayout.js":
/*!************************************!*\
  !*** ./components/FutureLayout.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/benaiahvarner/Documents/Ghost-Grits/frontendd/components/FutureLayout.js\";\n\n\nconst FutureLayout = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({\n  displayName: \"FutureLayout\",\n  componentId: \"hpoys3-0\"\n})([\"width:100%;\"]);\nfunction Page({\n  children\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(FutureLayout, {\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 9\n  }, this);\n}\nPage.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Z1dHVyZUxheW91dC5qcz9lYTI1Il0sIm5hbWVzIjpbIkZ1dHVyZUxheW91dCIsInN0eWxlZCIsImRpdiIsIlBhZ2UiLCJjaGlsZHJlbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxZQUFZLEdBQUdDLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsbUJBQWxCO0FBS2UsU0FBU0MsSUFBVCxDQUFlO0FBQUNDO0FBQUQsQ0FBZixFQUEyQjtBQUN0QyxzQkFDSSxxRUFBQyxZQUFEO0FBQUEsY0FDS0E7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSDtBQUVERCxJQUFJLENBQUNFLFNBQUwsR0FBaUI7QUFDYkQsVUFBUSxFQUFFRSxpREFBUyxDQUFDQztBQURQLENBQWpCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9GdXR1cmVMYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IEZ1dHVyZUxheW91dCA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IDEwMCU7XG5gO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UgKHtjaGlsZHJlbn0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8RnV0dXJlTGF5b3V0PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0Z1dHVyZUxheW91dD5cbiAgICApXG59XG5cblBhZ2UucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FutureLayout.js\n");

/***/ }),

/***/ "./components/styles/nprogress.css":
/*!*****************************************!*\
  !*** ./components/styles/nprogress.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc3R5bGVzL25wcm9ncmVzcy5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/styles/nprogress.css\n");

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: endpoint, prodEndpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"endpoint\", function() { return endpoint; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prodEndpoint\", function() { return prodEndpoint; });\nconst endpoint = `https://ghost-grits-server.herokuapp.com/admin/api`; // export const endpoint = `http://localhost:3000/admin/api`;\n\nconst prodEndpoint = `https://ghost-grits-server.herokuapp.com/admin/api`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcuanM/YTFiYyJdLCJuYW1lcyI6WyJlbmRwb2ludCIsInByb2RFbmRwb2ludCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUEsUUFBUSxHQUFJLG9EQUFsQixDLENBQ1A7O0FBQ08sTUFBTUMsWUFBWSxHQUFJLG9EQUF0QiIsImZpbGUiOiIuL2NvbmZpZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBlbmRwb2ludCA9IGBodHRwczovL2dob3N0LWdyaXRzLXNlcnZlci5oZXJva3VhcHAuY29tL2FkbWluL2FwaWA7XG4vLyBleHBvcnQgY29uc3QgZW5kcG9pbnQgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FkbWluL2FwaWA7XG5leHBvcnQgY29uc3QgcHJvZEVuZHBvaW50ID0gYGh0dHBzOi8vZ2hvc3QtZ3JpdHMtc2VydmVyLmhlcm9rdWFwcC5jb20vYWRtaW4vYXBpYDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config.js\n");

/***/ }),

/***/ "./lib/cartState.js":
/*!**************************!*\
  !*** ./lib/cartState.js ***!
  \**************************/
/*! exports provided: CartStateProvider, useCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartStateProvider\", function() { return CartStateProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useCart\", function() { return useCart; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/benaiahvarner/Documents/Ghost-Grits/frontendd/lib/cartState.js\";\n\nconst LocalStateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])();\nconst LocalStateProvider = LocalStateContext.Provider;\n\nfunction CartStateProvider({\n  children\n}) {\n  const {\n    0: cartOpen,\n    1: setCartOpen\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n\n  function toggleCart() {\n    setCartOpen(!cartOpen);\n  }\n\n  function closeCart() {\n    setCartOpen(false);\n  }\n\n  function openCart() {\n    setCartOpen(true);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(LocalStateProvider, {\n    value: {\n      cartOpen,\n      setCartOpen,\n      toggleCart,\n      closeCart,\n      openCart\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, this);\n}\n\nfunction useCart() {\n  const all = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(LocalStateContext);\n  return all;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY2FydFN0YXRlLmpzPzdhNDQiXSwibmFtZXMiOlsiTG9jYWxTdGF0ZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiTG9jYWxTdGF0ZVByb3ZpZGVyIiwiUHJvdmlkZXIiLCJDYXJ0U3RhdGVQcm92aWRlciIsImNoaWxkcmVuIiwiY2FydE9wZW4iLCJzZXRDYXJ0T3BlbiIsInVzZVN0YXRlIiwidG9nZ2xlQ2FydCIsImNsb3NlQ2FydCIsIm9wZW5DYXJ0IiwidXNlQ2FydCIsImFsbCIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsaUJBQWlCLGdCQUFHQywyREFBYSxFQUF2QztBQUNBLE1BQU1DLGtCQUFrQixHQUFHRixpQkFBaUIsQ0FBQ0csUUFBN0M7O0FBRUEsU0FBU0MsaUJBQVQsQ0FBMkI7QUFBRUM7QUFBRixDQUEzQixFQUF5QztBQUN2QyxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLHNEQUFRLENBQUMsS0FBRCxDQUF4Qzs7QUFFQSxXQUFTQyxVQUFULEdBQXNCO0FBQ3BCRixlQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFYO0FBQ0Q7O0FBRUQsV0FBU0ksU0FBVCxHQUFxQjtBQUNuQkgsZUFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNEOztBQUVELFdBQVNJLFFBQVQsR0FBb0I7QUFDbEJKLGVBQVcsQ0FBQyxJQUFELENBQVg7QUFDRDs7QUFFRCxzQkFDRSxxRUFBQyxrQkFBRDtBQUNFLFNBQUssRUFBRTtBQUNMRCxjQURLO0FBRUxDLGlCQUZLO0FBR0xFLGdCQUhLO0FBSUxDLGVBSks7QUFLTEM7QUFMSyxLQURUO0FBQUEsY0FTR047QUFUSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRDs7QUFFRCxTQUFTTyxPQUFULEdBQW1CO0FBQ2pCLFFBQU1DLEdBQUcsR0FBR0Msd0RBQVUsQ0FBQ2QsaUJBQUQsQ0FBdEI7QUFDQSxTQUFPYSxHQUFQO0FBQ0QiLCJmaWxlIjoiLi9saWIvY2FydFN0YXRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IExvY2FsU3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuY29uc3QgTG9jYWxTdGF0ZVByb3ZpZGVyID0gTG9jYWxTdGF0ZUNvbnRleHQuUHJvdmlkZXI7XG5cbmZ1bmN0aW9uIENhcnRTdGF0ZVByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbY2FydE9wZW4sIHNldENhcnRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBmdW5jdGlvbiB0b2dnbGVDYXJ0KCkge1xuICAgIHNldENhcnRPcGVuKCFjYXJ0T3Blbik7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZUNhcnQoKSB7XG4gICAgc2V0Q2FydE9wZW4oZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gb3BlbkNhcnQoKSB7XG4gICAgc2V0Q2FydE9wZW4odHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMb2NhbFN0YXRlUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGNhcnRPcGVuLFxuICAgICAgICBzZXRDYXJ0T3BlbixcbiAgICAgICAgdG9nZ2xlQ2FydCxcbiAgICAgICAgY2xvc2VDYXJ0LFxuICAgICAgICBvcGVuQ2FydCxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTG9jYWxTdGF0ZVByb3ZpZGVyPlxuICApO1xufVxuXG5mdW5jdGlvbiB1c2VDYXJ0KCkge1xuICBjb25zdCBhbGwgPSB1c2VDb250ZXh0KExvY2FsU3RhdGVDb250ZXh0KTtcbiAgcmV0dXJuIGFsbDtcbn1cbmV4cG9ydCB7IENhcnRTdGF0ZVByb3ZpZGVyLCB1c2VDYXJ0IH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/cartState.js\n");

/***/ }),

/***/ "./lib/withData.js":
/*!*************************!*\
  !*** ./lib/withData.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_link_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/link-error */ \"@apollo/link-error\");\n/* harmony import */ var _apollo_link_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_link_error__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_react_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-ssr */ \"@apollo/react-ssr\");\n/* harmony import */ var _apollo_react_ssr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_ssr__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-upload-client */ \"apollo-upload-client\");\n/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-with-apollo */ \"next-with-apollo\");\n/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ \"./config.js\");\n\n\n\n\n\n\n\nfunction createClient({\n  headers,\n  initialState\n}) {\n  return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"ApolloClient\"]({\n    link: _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"ApolloLink\"].from([Object(_apollo_link_error__WEBPACK_IMPORTED_MODULE_1__[\"onError\"])(({\n      graphQLErrors,\n      networkError\n    }) => {\n      if (graphQLErrors) graphQLErrors.forEach(({\n        message,\n        locations,\n        path\n      }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));\n      if (networkError) console.log(`[Network error]: ${networkError}. Backend is unreachable. Is it running?`);\n    }), // this uses apollo-link-http under the hood, so all the options here come from that package\n    Object(apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__[\"createUploadLink\"])({\n      uri: true ? _config__WEBPACK_IMPORTED_MODULE_5__[\"endpoint\"] : undefined,\n      fetchOptions: {\n        credentials: 'include'\n      },\n      // pass the headers along from this request. This enables SSR with logged in state\n      headers\n    })]),\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"InMemoryCache\"]({\n      typePolicies: {\n        Query: {\n          fields: {}\n        }\n      }\n    }).restore(initialState || {})\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default()(createClient, {\n  getDataFromTree: _apollo_react_ssr__WEBPACK_IMPORTED_MODULE_2__[\"getDataFromTree\"]\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvd2l0aERhdGEuanM/ZGJmMSJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJoZWFkZXJzIiwiaW5pdGlhbFN0YXRlIiwiQXBvbGxvQ2xpZW50IiwibGluayIsIkFwb2xsb0xpbmsiLCJmcm9tIiwib25FcnJvciIsImdyYXBoUUxFcnJvcnMiLCJuZXR3b3JrRXJyb3IiLCJmb3JFYWNoIiwibWVzc2FnZSIsImxvY2F0aW9ucyIsInBhdGgiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlVXBsb2FkTGluayIsInVyaSIsImVuZHBvaW50IiwicHJvZEVuZHBvaW50IiwiZmV0Y2hPcHRpb25zIiwiY3JlZGVudGlhbHMiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJ0eXBlUG9saWNpZXMiLCJRdWVyeSIsImZpZWxkcyIsInJlc3RvcmUiLCJ3aXRoQXBvbGxvIiwiZ2V0RGF0YUZyb21UcmVlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxDQUFzQjtBQUFFQyxTQUFGO0FBQVdDO0FBQVgsQ0FBdEIsRUFBaUQ7QUFDL0MsU0FBTyxJQUFJQywyREFBSixDQUFpQjtBQUN0QkMsUUFBSSxFQUFFQyx5REFBVSxDQUFDQyxJQUFYLENBQWdCLENBQ3BCQyxrRUFBTyxDQUFDLENBQUM7QUFBRUMsbUJBQUY7QUFBaUJDO0FBQWpCLEtBQUQsS0FBcUM7QUFDM0MsVUFBSUQsYUFBSixFQUNFQSxhQUFhLENBQUNFLE9BQWQsQ0FBc0IsQ0FBQztBQUFFQyxlQUFGO0FBQVdDLGlCQUFYO0FBQXNCQztBQUF0QixPQUFELEtBQ3BCQyxPQUFPLENBQUNDLEdBQVIsQ0FDRyw2QkFBNEJKLE9BQVEsZUFBY0MsU0FBVSxXQUFVQyxJQUFLLEVBRDlFLENBREY7QUFLRixVQUFJSixZQUFKLEVBQ0VLLE9BQU8sQ0FBQ0MsR0FBUixDQUNHLG9CQUFtQk4sWUFBYSwwQ0FEbkM7QUFHSCxLQVhNLENBRGEsRUFhcEI7QUFDQU8saUZBQWdCLENBQUM7QUFDZkMsU0FBRyxFQUFFLE9BQXlDQyxnREFBekMsR0FBb0RDLFNBRDFDO0FBRWZDLGtCQUFZLEVBQUU7QUFDWkMsbUJBQVcsRUFBRTtBQURELE9BRkM7QUFLZjtBQUNBcEI7QUFOZSxLQUFELENBZEksQ0FBaEIsQ0FEZ0I7QUF3QnRCcUIsU0FBSyxFQUFFLElBQUlDLDREQUFKLENBQWtCO0FBQ3ZCQyxrQkFBWSxFQUFFO0FBQ1pDLGFBQUssRUFBRTtBQUNMQyxnQkFBTSxFQUFFO0FBREg7QUFESztBQURTLEtBQWxCLEVBT0pDLE9BUEksQ0FPSXpCLFlBQVksSUFBSSxFQVBwQjtBQXhCZSxHQUFqQixDQUFQO0FBaUNEOztBQUVjMEIsc0hBQVUsQ0FBQzVCLFlBQUQsRUFBZTtBQUFFNkIsb0ZBQWVBO0FBQWpCLENBQWYsQ0FBekIiLCJmaWxlIjoiLi9saWIvd2l0aERhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIEFwb2xsb0xpbmssIEluTWVtb3J5Q2FjaGUgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgeyBvbkVycm9yIH0gZnJvbSAnQGFwb2xsby9saW5rLWVycm9yJztcbmltcG9ydCB7IGdldERhdGFGcm9tVHJlZSB9IGZyb20gJ0BhcG9sbG8vcmVhY3Qtc3NyJztcbmltcG9ydCB7IGNyZWF0ZVVwbG9hZExpbmsgfSBmcm9tICdhcG9sbG8tdXBsb2FkLWNsaWVudCc7XG5pbXBvcnQgd2l0aEFwb2xsbyBmcm9tICduZXh0LXdpdGgtYXBvbGxvJztcbmltcG9ydCB7IGVuZHBvaW50LCBwcm9kRW5kcG9pbnQgfSBmcm9tICcuLi9jb25maWcnO1xuXG5mdW5jdGlvbiBjcmVhdGVDbGllbnQoeyBoZWFkZXJzLCBpbml0aWFsU3RhdGUgfSkge1xuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgbGluazogQXBvbGxvTGluay5mcm9tKFtcbiAgICAgIG9uRXJyb3IoKHsgZ3JhcGhRTEVycm9ycywgbmV0d29ya0Vycm9yIH0pID0+IHtcbiAgICAgICAgaWYgKGdyYXBoUUxFcnJvcnMpXG4gICAgICAgICAgZ3JhcGhRTEVycm9ycy5mb3JFYWNoKCh7IG1lc3NhZ2UsIGxvY2F0aW9ucywgcGF0aCB9KSA9PlxuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgIGBbR3JhcGhRTCBlcnJvcl06IE1lc3NhZ2U6ICR7bWVzc2FnZX0sIExvY2F0aW9uOiAke2xvY2F0aW9uc30sIFBhdGg6ICR7cGF0aH1gXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgaWYgKG5ldHdvcmtFcnJvcilcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIGBbTmV0d29yayBlcnJvcl06ICR7bmV0d29ya0Vycm9yfS4gQmFja2VuZCBpcyB1bnJlYWNoYWJsZS4gSXMgaXQgcnVubmluZz9gXG4gICAgICAgICAgKTtcbiAgICAgIH0pLFxuICAgICAgLy8gdGhpcyB1c2VzIGFwb2xsby1saW5rLWh0dHAgdW5kZXIgdGhlIGhvb2QsIHNvIGFsbCB0aGUgb3B0aW9ucyBoZXJlIGNvbWUgZnJvbSB0aGF0IHBhY2thZ2VcbiAgICAgIGNyZWF0ZVVwbG9hZExpbmsoe1xuICAgICAgICB1cmk6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gZW5kcG9pbnQgOiBwcm9kRW5kcG9pbnQsXG4gICAgICAgIGZldGNoT3B0aW9uczoge1xuICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHBhc3MgdGhlIGhlYWRlcnMgYWxvbmcgZnJvbSB0aGlzIHJlcXVlc3QuIFRoaXMgZW5hYmxlcyBTU1Igd2l0aCBsb2dnZWQgaW4gc3RhdGVcbiAgICAgICAgaGVhZGVycyxcbiAgICAgIH0pLFxuICAgIF0pLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSh7XG4gICAgICB0eXBlUG9saWNpZXM6IHtcbiAgICAgICAgUXVlcnk6IHtcbiAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KS5yZXN0b3JlKGluaXRpYWxTdGF0ZSB8fCB7fSksXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKGNyZWF0ZUNsaWVudCwgeyBnZXREYXRhRnJvbVRyZWUgfSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/withData.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/withData */ \"./lib/withData.js\");\n/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/cartState */ \"./lib/cartState.js\");\n/* harmony import */ var _components_FutureLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FutureLayout */ \"./components/FutureLayout.js\");\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.css */ \"./app.css\");\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/styles/nprogress.css */ \"./components/styles/nprogress.css\");\n/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _jsxFileName = \"/Users/benaiahvarner/Documents/Ghost-Grits/frontendd/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\nnext_router__WEBPACK_IMPORTED_MODULE_7___default.a.events.on('routeChangeStart', () => nprogress__WEBPACK_IMPORTED_MODULE_8___default.a.start());\nnext_router__WEBPACK_IMPORTED_MODULE_7___default.a.events.on('routeChangeComplete', () => nprogress__WEBPACK_IMPORTED_MODULE_8___default.a.done());\nnext_router__WEBPACK_IMPORTED_MODULE_7___default.a.events.on('routeChangeError', () => nprogress__WEBPACK_IMPORTED_MODULE_8___default.a.done());\n\nfunction MyApp({\n  Component,\n  pageProps,\n  apollo\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"ApolloProvider\"], {\n    client: apollo,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_lib_cartState__WEBPACK_IMPORTED_MODULE_3__[\"CartStateProvider\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_FutureLayout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, this);\n}\n\nMyApp.getInitialProps = async function ({\n  Component,\n  ctx\n}) {\n  let pageProps = {};\n\n  if (Component.getInitialProps) {\n    pageProps = await Component.getInitialProps(ctx);\n  }\n\n  pageProps.query = ctx.query;\n  return {\n    pageProps\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_lib_withData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(MyApp));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiUm91dGVyIiwiZXZlbnRzIiwib24iLCJOUHJvZ3Jlc3MiLCJzdGFydCIsImRvbmUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImFwb2xsbyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInF1ZXJ5Iiwid2l0aERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLGtEQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixrQkFBakIsRUFBcUMsTUFBTUMsZ0RBQVMsQ0FBQ0MsS0FBVixFQUEzQztBQUNBSixrREFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIscUJBQWpCLEVBQXdDLE1BQU1DLGdEQUFTLENBQUNFLElBQVYsRUFBOUM7QUFDQUwsa0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQyxNQUFNQyxnREFBUyxDQUFDRSxJQUFWLEVBQTNDOztBQUdBLFNBQVNDLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDLFdBQWI7QUFBd0JDO0FBQXhCLENBQWYsRUFBaUQ7QUFDL0Msc0JBQ0UscUVBQUMsNkRBQUQ7QUFBZ0IsVUFBTSxFQUFFQSxNQUF4QjtBQUFBLDJCQUNFLHFFQUFDLGdFQUFEO0FBQUEsNkJBQ0EscUVBQUMsZ0VBQUQ7QUFBQSwrQkFDRSxxRUFBQyxTQUFELG9CQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztBQUVERixLQUFLLENBQUNJLGVBQU4sR0FBd0IsZ0JBQWdCO0FBQUVILFdBQUY7QUFBYUk7QUFBYixDQUFoQixFQUFvQztBQUMxRCxNQUFJSCxTQUFTLEdBQUcsRUFBaEI7O0FBQ0EsTUFBSUQsU0FBUyxDQUFDRyxlQUFkLEVBQStCO0FBQzdCRixhQUFTLEdBQUcsTUFBTUQsU0FBUyxDQUFDRyxlQUFWLENBQTBCQyxHQUExQixDQUFsQjtBQUNEOztBQUNESCxXQUFTLENBQUNJLEtBQVYsR0FBa0JELEdBQUcsQ0FBQ0MsS0FBdEI7QUFDQSxTQUFPO0FBQUVKO0FBQUYsR0FBUDtBQUNELENBUEQ7O0FBU2VLLDRIQUFRLENBQUNQLEtBQUQsQ0FBdkIiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgd2l0aERhdGEgZnJvbSAnLi4vbGliL3dpdGhEYXRhJztcbmltcG9ydCB7IENhcnRTdGF0ZVByb3ZpZGVyIH0gZnJvbSAnLi4vbGliL2NhcnRTdGF0ZSc7XG5pbXBvcnQgUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL0Z1dHVyZUxheW91dCc7XG5pbXBvcnQgJy4uL2FwcC5jc3MnXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvc3R5bGVzL25wcm9ncmVzcy5jc3MnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcblxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsICgpID0+IE5Qcm9ncmVzcy5zdGFydCgpKTtcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcblxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzLCBhcG9sbG8gfSkge1xuICByZXR1cm4gKFxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2Fwb2xsb30+XG4gICAgICA8Q2FydFN0YXRlUHJvdmlkZXI+XG4gICAgICA8UGFnZT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9QYWdlPlxuICAgICAgPC9DYXJ0U3RhdGVQcm92aWRlcj5cbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICApO1xufVxuXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoeyBDb21wb25lbnQsIGN0eCB9KSB7XG4gIGxldCBwYWdlUHJvcHMgPSB7fTtcbiAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gIH1cbiAgcGFnZVByb3BzLnF1ZXJ5ID0gY3R4LnF1ZXJ5O1xuICByZXR1cm4geyBwYWdlUHJvcHMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhKE15QXBwKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "@apollo/link-error":
/*!*************************************!*\
  !*** external "@apollo/link-error" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/link-error\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2xpbmstZXJyb3JcIj9kMjU3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBhcG9sbG8vbGluay1lcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vbGluay1lcnJvclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/link-error\n");

/***/ }),

/***/ "@apollo/react-ssr":
/*!************************************!*\
  !*** external "@apollo/react-ssr" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/react-ssr\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LXNzclwiPzEyMzQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9yZWFjdC1zc3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL3JlYWN0LXNzclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/react-ssr\n");

/***/ }),

/***/ "apollo-upload-client":
/*!***************************************!*\
  !*** external "apollo-upload-client" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-upload-client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tdXBsb2FkLWNsaWVudFwiP2VlYWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXBvbGxvLXVwbG9hZC1jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tdXBsb2FkLWNsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-upload-client\n");

/***/ }),

/***/ "next-with-apollo":
/*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-with-apollo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXdpdGgtYXBvbGxvXCI/YmE1YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LXdpdGgtYXBvbGxvLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC13aXRoLWFwb2xsb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-with-apollo\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nprogress\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIj8xNTViIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5wcm9ncmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///nprogress\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });