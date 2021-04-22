webpackHotUpdate_N_E("pages/menu",{

/***/ "./components/FoodItem.js":
/*!********************************!*\
  !*** ./components/FoodItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_benaiahvarner_Documents_Ghost_Grits_frontendd_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _queries_cartQuerie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queries/cartQuerie */ \"./components/queries/cartQuerie.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/cartState */ \"./lib/cartState.js\");\n\n\n\nvar _jsxFileName = \"/Users/benaiahvarner/Documents/Ghost-Grits/frontendd/components/FoodItem.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar FixedItem = function FixedItem(_ref) {\n  _s();\n\n  var food = _ref.food;\n\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"])(_queries_cartQuerie__WEBPACK_IMPORTED_MODULE_2__[\"ADD_FIXED_ITEM\"], {\n    variables: {\n      id: food.id\n    },\n    refetchQueries: [{\n      query: _queries_cartQuerie__WEBPACK_IMPORTED_MODULE_2__[\"FIXED_ITEM_QUERY\"]\n    }]\n  }),\n      _useMutation2 = Object(_Users_benaiahvarner_Documents_Ghost_Grits_frontendd_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useMutation, 2),\n      addToCart = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      data = _useMutation2$.data,\n      loading = _useMutation2$.loading,\n      error = _useMutation2$.error;\n\n  var _useCart = Object(_lib_cartState__WEBPACK_IMPORTED_MODULE_6__[\"useCart\"])(),\n      openCart = _useCart.openCart;\n\n  var handleClick = function handleClick() {\n    addToCart();\n    openCart();\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"menu-item\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: food.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: food.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      children: [\"$\", food.price]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: handleClick,\n      className: \"addToCart\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__[\"FontAwesomeIcon\"], {\n        className: \"icon\",\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__[\"faCartPlus\"]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this), \"Add To Cart\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(FixedItem, \"tY5H6RdbAwbyw6ekGADM+7GWwS8=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"], _lib_cartState__WEBPACK_IMPORTED_MODULE_6__[\"useCart\"]];\n});\n\n_c = FixedItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FixedItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"FixedItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb29kSXRlbS5qcz8zYTU1Il0sIm5hbWVzIjpbIkZpeGVkSXRlbSIsImZvb2QiLCJ1c2VNdXRhdGlvbiIsIkFERF9GSVhFRF9JVEVNIiwidmFyaWFibGVzIiwiaWQiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiRklYRURfSVRFTV9RVUVSWSIsImFkZFRvQ2FydCIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VDYXJ0Iiwib3BlbkNhcnQiLCJoYW5kbGVDbGljayIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiZmFDYXJ0UGx1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxxQkFDZ0JDLGtFQUFXLENBQUNDLGtFQUFELEVBQWlCO0FBQ3hFQyxhQUFTLEVBQUU7QUFDVEMsUUFBRSxFQUFFSixJQUFJLENBQUNJO0FBREEsS0FENkQ7QUFJeEVDLGtCQUFjLEVBQUUsQ0FBQztBQUFFQyxXQUFLLEVBQUVDLG9FQUFnQkE7QUFBekIsS0FBRDtBQUp3RCxHQUFqQixDQUQzQjtBQUFBO0FBQUEsTUFDdkJDLFNBRHVCO0FBQUE7QUFBQSxNQUNWQyxJQURVLGtCQUNWQSxJQURVO0FBQUEsTUFDSkMsT0FESSxrQkFDSkEsT0FESTtBQUFBLE1BQ0tDLEtBREwsa0JBQ0tBLEtBREw7O0FBQUEsaUJBUVRDLDhEQUFPLEVBUkU7QUFBQSxNQVF0QkMsUUFSc0IsWUFRdEJBLFFBUnNCOztBQVU5QixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCTixhQUFTO0FBQ1RLLFlBQVE7QUFDVCxHQUhEOztBQUtBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSw0QkFDRTtBQUFBLGdCQUFLYixJQUFJLENBQUNlO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBQSxnQkFBSWYsSUFBSSxDQUFDZ0I7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRTtBQUFBLHNCQUFRaEIsSUFBSSxDQUFDaUIsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQUlFO0FBQVEsYUFBTyxFQUFFSCxXQUFqQjtBQUE4QixlQUFTLEVBQUMsV0FBeEM7QUFBQSw4QkFDRSxxRUFBQyw4RUFBRDtBQUFpQixpQkFBUyxFQUFDLE1BQTNCO0FBQWtDLFlBQUksRUFBRUksNEVBQVVBO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVdELENBMUJEOztHQUFNbkIsUztVQUMwQ0UsMEQsRUFPekJXLHNEOzs7S0FSakJiLFM7QUE0QlNBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Gb29kSXRlbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFERF9GSVhFRF9JVEVNLCBGSVhFRF9JVEVNX1FVRVJZIH0gZnJvbSAnLi9xdWVyaWVzL2NhcnRRdWVyaWUnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFDYXJ0UGx1cyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSAnLi4vbGliL2NhcnRTdGF0ZSc7XG5cbmNvbnN0IEZpeGVkSXRlbSA9ICh7IGZvb2QgfSkgPT4ge1xuICBjb25zdCBbYWRkVG9DYXJ0LCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTXV0YXRpb24oQUREX0ZJWEVEX0lURU0sIHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlkOiBmb29kLmlkLFxuICAgIH0sXG4gICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBGSVhFRF9JVEVNX1FVRVJZIH1dLFxuICB9KTtcblxuICBjb25zdCB7IG9wZW5DYXJ0IH0gPSB1c2VDYXJ0KCk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgYWRkVG9DYXJ0KCk7XG4gICAgb3BlbkNhcnQoKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIj5cbiAgICAgIDxoMz57Zm9vZC5uYW1lfTwvaDM+XG4gICAgICA8cD57Zm9vZC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8c3Bhbj4ke2Zvb2QucHJpY2V9PC9zcGFuPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2xhc3NOYW1lPVwiYWRkVG9DYXJ0XCI+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPVwiaWNvblwiIGljb249e2ZhQ2FydFBsdXN9IC8+XG4gICAgICAgIEFkZCBUbyBDYXJ0XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpeGVkSXRlbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FoodItem.js\n");

/***/ })

})