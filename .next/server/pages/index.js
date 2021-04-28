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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/8Gu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/styles/CartStyles.js

const CartStyles = external_styled_components_default.a.div.withConfig({
  displayName: "CartStyles",
  componentId: "sc-72uupd-0"
})(["*{margin:0;padding:0;box-sizing:border-box;font-family:'Montserrat',sans-serif;}padding:20px;position:relative;background:white;position:fixed;top:0%;right:0;width:30%;min-width:400px;bottom:0;transform:translateX(100%);transition:all 0.3s;box-shadow:0 0 10px 3px rgba(0,0,0,0.2);z-index:5;display:grid;grid-template-rows:auto 1fr auto;height:100%;", ";ul{z-index:-5;}.cart-header{display:flex;justify-content:space-between;align-items:center;}h1{color:#662916;font-weight:400;text-align:center;}.cartItem{margin:5% 0;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;*{margin:0;padding:0;}h3{font-size:1.5rem;font-weight:300;font-family:'Montserrat',sans-serif;color:#e5426c;}h4{color:white;font-size:1.5rem;background-color:#264327;padding:0 5px;}p{font-size:1rem;color:#662916;margin:2% 0;}.order-item{width:100%;display:flex;justify-content:space-between;align-items:center;text-align:center;}}footer{margin-bottom:10%;form{display:flex;flex-wrap:no-wrap;flex-direction:column;.names{display:flex;input{margin:1%;width:50%;}}.email{display:flex;input{margin:1%;width:100%;}}}}@media(max-width:420px){min-width:350px;.cartItem{h3{font-size:1.25rem;font-weight:300;font-family:'Montserrat',sans-serif;color:#e5426c;}p{text-align:center;font-size:0.9rem;}}}"], props => props.open && `transform: translateX(0);`);
/* harmony default export */ var styles_CartStyles = (CartStyles);
// CONCATENATED MODULE: ./components/styles/CloseButton.js

const CloseButton = external_styled_components_default.a.button.withConfig({
  displayName: "CloseButton",
  componentId: "zgi5ou-0"
})(["background:white;color:#662916;font-size:3rem;border:0;"]);
/* harmony default export */ var styles_CloseButton = (CloseButton);
// EXTERNAL MODULE: ./components/queries/cartQuerie.js
var cartQuerie = __webpack_require__("GUJk");

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__("z+8S");

// CONCATENATED MODULE: ./components/CustomItem.js





const CustomItem = ({
  item
}) => {
  const [deleteFromCart, {
    data,
    error,
    loading
  }] = Object(client_["useMutation"])(cartQuerie["d" /* DELETE_CUSTOM_ITEM */], {
    variables: {
      id: item.id
    },
    refetchQueries: [{
      query: cartQuerie["c" /* CUSTOM_ITEM_QUERY */]
    }]
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "menu-item",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
      onClick: deleteFromCart,
      children: "\xD7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        children: item.salad.name
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        children: ["Dressing: ", item.salad.choice_of_dressing]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        children: ["Toppings: ", item.salad.choice_of_two_toppings]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
      children: ["$", item.salad.price]
    })]
  });
};

/* harmony default export */ var components_CustomItem = (CustomItem);
// CONCATENATED MODULE: ./components/FixedItem.js





const FixedItem = ({
  item
}) => {
  const [deleteFromCart, {
    data,
    loading,
    error
  }] = Object(client_["useMutation"])(cartQuerie["e" /* DELETE_FIXED_ITEM */], {
    variables: {
      id: item.id
    },
    refetchQueries: [{
      query: cartQuerie["f" /* FIXED_ITEM_QUERY */]
    }]
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "order-item",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
      onClick: deleteFromCart,
      children: "\xD7"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        children: item.food.name
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: item.food.description
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
      children: ["$", item.food.price]
    })]
  });
};

/* harmony default export */ var components_FixedItem = (FixedItem);
// EXTERNAL MODULE: ./lib/cartState.js
var cartState = __webpack_require__("ekTP");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./components/queries/orderQuerie.js

const CREATE_ORDER = external_graphql_tag_default.a`
  mutation(
    $fixedItems: [FixedOrderItemWhereUniqueInput]!
    $customItems: [CustomOrderItemWhereUniqueInput]!
    $firstName: String!
    $lastName: String!
    $email: String!
    $charge: String
    $total: Int!
  ) {
    createOrder(
      data: {
        fixedItems: { connect: $fixedItems }
        customItems: { connect: $customItems }
        firstName: $firstName
        lastName: $lastName
        email: $email
        charge: $charge
        total: $total
      }
    ) {
      id
      firstName
      lastName
      email
      charge
      fixedItems {
        id
        name
        description
      }
      customItems {
        id
        name
        description
        choice_of_dressing
        choice_of_two_toppings
      }
    }
  }
`;
const CREATE_FIXED_ORDER_ITEM = external_graphql_tag_default.a`
  mutation($fixedItems: [FixedOrderItemsCreateInput]!) {
    createFixedOrderItems(data: $fixedItems) {
      id
      name
      description
    }
  }
`;
const CREATE_CUSTOM_ORDER_ITEM = external_graphql_tag_default.a`
  mutation($customItems: [CustomOrderItemsCreateInput]!) {
    createCustomOrderItems(data: $customItems) {
      id
      name
      description
      choice_of_dressing
      choice_of_two_toppings
    }
  }
`;
const DELETE_FIXED_ITEMS = external_graphql_tag_default.a`
  mutation($ids: [ID!]) {
    deleteFoodCartItems(ids: $ids) {
      id
    }
  }
`;
const DELETE_CUSTOM_ITEMS = external_graphql_tag_default.a`
  mutation($ids: [ID!]) {
    deleteSaladCartItems(ids: $ids) {
      id
    }
  }
`;
// EXTERNAL MODULE: external "@stripe/stripe-js"
var stripe_js_ = __webpack_require__("RkzC");

// EXTERNAL MODULE: external "@stripe/react-stripe-js"
var react_stripe_js_ = __webpack_require__("z5ly");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/styles/CheckoutStyled.js

const CheckoutStyled = external_styled_components_default.a.div.withConfig({
  displayName: "CheckoutStyled",
  componentId: "sc-172enng-0"
})(["z-index:10;background:white;position:absolute;left:0;width:100%;bottom:0;height:auto;transform:translateY(86%);transition:all 0.3s;", ";display:flex;justify-content:center;align-items:center;flex-direction:column;.checkout-button{align-content:center;width:25%;margin:3% auto;background-color:#e5426c;color:white;border:none;padding:2% 3%;font-size:1.25rem;font-weight:200;}.checkout-button:hover{opacity:0.7;}.orderDet{width:100%;margin-top:4%;box-shadow:0 0 10px 3px rgba(0,0,0,0.2);height:100%;p{font-size:1rem;color:#662916;margin:2% 0;}input{border:none;border-bottom:1px solid #662916;padding:2% 2%;}.total{display:flex;justify-content:space-between;align-items:center;margin:5% 1%;h3,span{font-size:1.5rem;color:#662916;margin-top:5%;}}.card{margin:1% 1%;padding:2% 0;border-bottom:1px solid #662916;}.total-date{margin:4% 5%;}.date-time{width:100%;display:flex;justify-content:space-between;.select-container{text-align:center;margin:3% 1%;width:100%;h3{margin-bottom:5%;color:#264327;padding:0 2%;}.icon{margin:0 4%;}}}.checkout-button{width:40%;}}@media(max-width:420px){.checkout-button{padding:2% 3%;font-size:1rem;}.orderDet{.total-date{margin:4% 0;}}}"], props => props.open && `transform: translateY(0%);`);
// CONCATENATED MODULE: ./lib/calcTotalPrice.js
function calcTotalPrice(fixed, custom) {
  const fixedPrices = [];

  const foodPrice = () => {
    var _fixed$allFoodCartIte;

    fixed === null || fixed === void 0 ? void 0 : (_fixed$allFoodCartIte = fixed.allFoodCartItems) === null || _fixed$allFoodCartIte === void 0 ? void 0 : _fixed$allFoodCartIte.map((tally, item) => {
      fixedPrices.push(tally.food.price);
    });
    return fixedPrices;
  };

  const customPrices = [];

  const saladPrice = () => {
    var _custom$allSaladCartI;

    custom === null || custom === void 0 ? void 0 : (_custom$allSaladCartI = custom.allSaladCartItems) === null || _custom$allSaladCartI === void 0 ? void 0 : _custom$allSaladCartI.map((tally, item) => {
      customPrices.push(tally.salad.price);
    });
    return customPrices;
  };

  const fixedFoodPrice = foodPrice().reduce((tally, item) => tally + item, 0);
  const customFoodPrice = saladPrice().reduce((tally, item) => tally + item, 0);
  return fixedFoodPrice + customFoodPrice;
}
// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__("vtRj");
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: external "@fortawesome/free-regular-svg-icons"
var free_regular_svg_icons_ = __webpack_require__("s7eq");

// CONCATENATED MODULE: ./components/Checkout.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const stripeLib = Object(stripe_js_["loadStripe"])("pk_test_51IT6IKB4kjA7hzYpTbVNkb5Pj8qmkpq4cxXjmYe51yeKiZTry6dA1U8bjiKPTrHMWXDJUtggjQhSkYK20UIKVJwN00XliYyezw");

const CheckoutForm = ({
  fixedItems,
  customItems
}) => {
  var _fixedItems$allFoodCa2, _customItems$allSalad2;

  const {
    closeCart
  } = Object(cartState["b" /* useCart */])();
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])();
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: orderForm,
    1: setOrderForm
  } = Object(external_react_["useState"])({
    firstName: '',
    lastName: '',
    email: ''
  });
  const {
    0: checkoutOpen,
    1: setCheckoutOpen
  } = Object(external_react_["useState"])(false);
  const [deleteFixedItems] = Object(client_["useMutation"])(DELETE_FIXED_ITEMS);
  const [deleteCustomItems] = Object(client_["useMutation"])(DELETE_CUSTOM_ITEMS);
  const [createCustomOrderItem] = Object(client_["useMutation"])(CREATE_CUSTOM_ORDER_ITEM);
  const [createFixedOrderItem] = Object(client_["useMutation"])(CREATE_FIXED_ORDER_ITEM);
  const [createOrder] = Object(client_["useMutation"])(CREATE_ORDER);
  const router = Object(router_["useRouter"])();
  const stripe = Object(react_stripe_js_["useStripe"])();
  const elements = Object(react_stripe_js_["useElements"])();

  const handleChange = e => {
    setOrderForm(_objectSpread(_objectSpread({}, orderForm), {}, {
      [e.target.name]: e.target.value
    }));
  };

  const fixedPrices = [];

  const foodPrice = () => {
    var _fixedItems$allFoodCa;

    fixedItems === null || fixedItems === void 0 ? void 0 : (_fixedItems$allFoodCa = fixedItems.allFoodCartItems) === null || _fixedItems$allFoodCa === void 0 ? void 0 : _fixedItems$allFoodCa.map(item => {
      fixedPrices.push(item.food.price);
    });
    return fixedPrices;
  };

  const customPrices = [];

  const saladPrice = () => {
    var _customItems$allSalad;

    customItems === null || customItems === void 0 ? void 0 : (_customItems$allSalad = customItems.allSaladCartItems) === null || _customItems$allSalad === void 0 ? void 0 : _customItems$allSalad.map(item => {
      customPrices.push(item.salad.price);
    });
    return customPrices;
  };

  const fixedFoodPrice = foodPrice().reduce((tally, item) => tally + item, 0);
  const customFoodPrice = saladPrice().reduce((tally, item) => tally + item, 0);
  const fixedOrderItem = fixedItems === null || fixedItems === void 0 ? void 0 : (_fixedItems$allFoodCa2 = fixedItems.allFoodCartItems) === null || _fixedItems$allFoodCa2 === void 0 ? void 0 : _fixedItems$allFoodCa2.map((item, key) => {
    const orderItem = {
      data: {
        name: item.food.name,
        description: item.food.description
      }
    };
    return orderItem;
  });
  const customOrderItem = customItems === null || customItems === void 0 ? void 0 : (_customItems$allSalad2 = customItems.allSaladCartItems) === null || _customItems$allSalad2 === void 0 ? void 0 : _customItems$allSalad2.map((item, key) => {
    const orderItem = {
      data: {
        name: item.salad.name,
        description: item.salad.description,
        choice_of_dressing: item.salad.choice_of_dressing,
        choice_of_two_toppings: item.salad.choice_of_two_toppings
      }
    };
    return orderItem;
  });

  async function convertFixedItems() {
    const fixedOrder = await createFixedOrderItem({
      variables: {
        fixedItems: fixedOrderItem
      }
    });
    return fixedOrder;
  }

  async function convertCustomItems() {
    const customOrder = await createCustomOrderItem({
      variables: {
        customItems: customOrderItem
      }
    });
    return customOrder;
  }

  async function handleSubmit(e) {
    var _paymentMethod$card, _paymentMethod$card2, _paymentMethod$card3, _fixedOrder$createFix, _customOrder$createCu, _fixedItems$allFoodCa3, _customItems$allSalad3;

    e.preventDefault();
    setLoading(true);
    const {
      error,
      paymentMethod
    } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(react_stripe_js_["CardElement"])
    });

    if (error) {
      setError(error);
    }

    const charge = `Brand: ${paymentMethod === null || paymentMethod === void 0 ? void 0 : (_paymentMethod$card = paymentMethod.card) === null || _paymentMethod$card === void 0 ? void 0 : _paymentMethod$card.brand}, Type: ${paymentMethod === null || paymentMethod === void 0 ? void 0 : (_paymentMethod$card2 = paymentMethod.card) === null || _paymentMethod$card2 === void 0 ? void 0 : _paymentMethod$card2.funding}, Last 4 digits: ${paymentMethod === null || paymentMethod === void 0 ? void 0 : (_paymentMethod$card3 = paymentMethod.card) === null || _paymentMethod$card3 === void 0 ? void 0 : _paymentMethod$card3.last4}`;
    const {
      data: customOrder
    } = await convertCustomItems();
    const {
      data: fixedOrder
    } = await convertFixedItems();
    const customId = [];
    const fixedId = [];
    fixedOrder === null || fixedOrder === void 0 ? void 0 : (_fixedOrder$createFix = fixedOrder.createFixedOrderItems) === null || _fixedOrder$createFix === void 0 ? void 0 : _fixedOrder$createFix.map(item => {
      fixedId.push({
        id: item.id
      });
    });
    customOrder === null || customOrder === void 0 ? void 0 : (_customOrder$createCu = customOrder.createCustomOrderItems) === null || _customOrder$createCu === void 0 ? void 0 : _customOrder$createCu.map(item => {
      customId.push({
        id: item.id
      });
    });
    const {
      data: order
    } = await createOrder({
      variables: {
        fixedItems: fixedId,
        customItems: customId,
        firstName: orderForm.firstName,
        lastName: orderForm.lastName,
        email: orderForm.email,
        charge,
        total: fixedFoodPrice + customFoodPrice
      }
    });
    const deleteCustom = [];
    const deleteFixed = [];
    fixedItems === null || fixedItems === void 0 ? void 0 : (_fixedItems$allFoodCa3 = fixedItems.allFoodCartItems) === null || _fixedItems$allFoodCa3 === void 0 ? void 0 : _fixedItems$allFoodCa3.map(item => {
      deleteFixed.push(item.id);
    });
    customItems === null || customItems === void 0 ? void 0 : (_customItems$allSalad3 = customItems.allSaladCartItems) === null || _customItems$allSalad3 === void 0 ? void 0 : _customItems$allSalad3.map(item => {
      deleteCustom.push(item.id);
    });
    await deleteCustomItems({
      variables: {
        ids: deleteCustom
      }
    });
    await deleteFixedItems({
      variables: {
        ids: deleteFixed
      }
    });
    closeCart();
    router.push(`/order/${order.createOrder.id}`);
  }

  const options = [{
    label: 'Tue, April 20th',
    value: 'Tue, April 20th'
  }, {
    label: 'Wed, April 21st',
    value: 'Wed, April 21th'
  }, {
    label: 'Thur, April 22nd',
    value: 'Thur, April 22nd'
  }, {
    label: 'Fri, April 23rd',
    value: 'Fri, April 23rd'
  }];
  const timeOptions = [{
    label: '9:00 AM',
    value: '9:00 AM'
  }, {
    label: '10:00 AM',
    value: '10:00 AM'
  }, {
    label: '11:00 AM',
    value: '11:00 AM'
  }, {
    label: '12:00 AM',
    value: '12:00 AM'
  }, {
    label: '1:00 PM',
    value: '1:00 PM'
  }, {
    label: '2:00 PM',
    value: '2:00 PM'
  }, {
    label: '3:00 PM',
    value: '3:00 PM'
  }, {
    label: '4:00 PM',
    value: '4:00 PM'
  }, {
    label: '5:00 PM',
    value: '5:00 PM'
  }];
  const customStyles = {
    dropdownIndicator: () => ({
      color: '#e5426c',
      fontsize: '1rem'
    }),
    option: () => ({
      color: '#e5426c'
    }),
    control: () => ({
      border: '2px solid #e5426c',
      borderRadius: '5px',
      display: 'flex'
    }),
    placeholder: () => ({
      color: '#e5426c'
    }),
    singleValue: () => ({
      color: '#e5426c'
    })
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(CheckoutStyled, {
    open: checkoutOpen,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      onClick: () => setCheckoutOpen(!checkoutOpen),
      className: "checkout-button",
      children: checkoutOpen ? 'Close' : 'Checkout'
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "orderDet",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "total-date",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "total",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
            children: "Order Subtotal:"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
            children: ["$", calcTotalPrice(fixedItems, customItems)]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "date-time",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "select-container",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                className: "icon",
                icon: free_regular_svg_icons_["faCalendar"]
              }), "Pick Up Date"]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_select_default.a, {
              options: options,
              styles: customStyles,
              placeholder: 'Tue, April 20th'
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "select-container",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                className: "icon",
                icon: free_solid_svg_icons_["faClock"]
              }), "Pick Up Time"]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_select_default.a, {
              options: timeOptions,
              styles: customStyles,
              placeholder: '9:00 AM'
            })]
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "names",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            placeholder: "First Name",
            type: "text",
            name: "firstName",
            onChange: handleChange,
            value: orderForm.firstName
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            placeholder: "Last Name",
            type: "text",
            name: "lastName",
            onChange: handleChange,
            value: orderForm.lastName
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "email",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            placeholder: "Email Address",
            type: "email",
            name: "email",
            onChange: handleChange,
            value: orderForm.email
          })
        }), error && /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: error.message
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_stripe_js_["CardElement"], {
          className: "card"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          className: "checkout-button",
          children: "Checkout Now"
        })]
      })]
    })]
  });
};

function Checkout({
  fixedItems,
  customItems
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_stripe_js_["Elements"], {
    stripe: stripeLib,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CheckoutForm, {
      fixedItems: fixedItems,
      customItems: customItems
    })
  });
}

/* harmony default export */ var components_Checkout = (Checkout);
// CONCATENATED MODULE: ./components/Cart.js











const Cart = () => {
  var _custom$allSaladCartI, _fixed$allFoodCartIte;

  const {
    cartOpen,
    closeCart
  } = Object(cartState["b" /* useCart */])();
  const {
    data: fixed,
    loading: fixedLoading,
    error: fixedError
  } = Object(client_["useQuery"])(cartQuerie["f" /* FIXED_ITEM_QUERY */]);
  const {
    data: custom,
    loading: customLoading,
    error: customError
  } = Object(client_["useQuery"])(cartQuerie["c" /* CUSTOM_ITEM_QUERY */]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_CartStyles, {
    open: cartOpen,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "cart-header",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        children: "Order Summary"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_CloseButton, {
        onClick: closeCart,
        children: "\xD7"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
      children: [custom === null || custom === void 0 ? void 0 : (_custom$allSaladCartI = custom.allSaladCartItems) === null || _custom$allSaladCartI === void 0 ? void 0 : _custom$allSaladCartI.map((item, ind) => {
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "cartItem",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_CustomItem, {
            item: item
          })
        }, ind);
      }), fixed === null || fixed === void 0 ? void 0 : (_fixed$allFoodCartIte = fixed.allFoodCartItems) === null || _fixed$allFoodCartIte === void 0 ? void 0 : _fixed$allFoodCartIte.map((item, key) => {
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "cartItem",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_FixedItem, {
            item: item
          })
        }, key);
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("footer", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Checkout, {
        fixedItems: fixed,
        customItems: custom
      })
    })]
  });
};

/* harmony default export */ var components_Cart = __webpack_exports__["a"] = (Cart);

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "6yR0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./components/NavLinks.js



const StyledLinks = external_styled_components_default.a.div.withConfig({
  displayName: "NavLinks__StyledLinks",
  componentId: "cao6k8-0"
})(["display:flex;justify-content:space-evenly;align-items:center;width:100%;position:fixed;background:#f0f0f0;transition:all 0.2s ease-in-out;transform:", ";height:12%;.menu-link{cursor:pointer;}.link-coming{font-size:.75rem;color:#333;}.nav-link{color:#662916;line-height:1.5;font-size:16px;font-family:'Montserrat',sans-serif;}@media(max-width:468px){transform:", ";flex-direction:column;height:auto;.nav-link{padding:2% 0;}}"], ({
  open
}) => open ? 'translateY(-100%)' : 'translateY(85%)', ({
  open
}) => open ? 'translateY(-100%)' : 'translateY(68%)');

const NavLinks = ({
  open
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(StyledLinks, {
    open: open,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "nav-link",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: "/menu",
        className: "menu-link",
        children: "Menu"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "nav-link",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        children: "Artisanal Store"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: "link-coming",
        children: "(coming soon)"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "nav-link",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        children: "Meal Program"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: "link-coming",
        children: "(coming soon)"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "nav-link",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        children: "About"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: "link-coming",
        children: "(coming soon)"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "nav-link",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        children: "Contact"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: "link-coming",
        children: "(coming soon)"
      })]
    })]
  });
};

/* harmony default export */ var components_NavLinks = (NavLinks);
// EXTERNAL MODULE: ./lib/cartState.js
var cartState = __webpack_require__("ekTP");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/NavBar.js









const HeaderStyled = external_styled_components_default.a.div.withConfig({
  displayName: "NavBar__HeaderStyled",
  componentId: "sc-1hnhtjj-0"
})(["width:100%;background:#f0f0f0;position:fixed;z-index:5;height:10%;display:flex;flex-direction:column;justify-content:center;align-items:center;.logo-menu{display:flex;justify-content:center;align-items:center;width:100%;}.logo{cursor:pointer;}img{height:70px;object-fit:contain;}.navCluster{position:absolute;right:0;margin-right:1%;width:5%;font-size:2rem;display:flex;justify-content:space-between;align-items:center;.cartButton{cursor:pointer;padding-right:5%;}}@media(max-width:1600px){.navCluster{width:10%;justify-content:space-around;.cartButton{padding-right:5%;}}}@media(max-width:868px){.navCluster{width:15%;justify-content:space-around;}img{height:60px;object-fit:contain;}}@media(max-width:468px){.navCluster{width:20%;justify-content:space-around;}.logo-menu{margin-left:1%;display:flex;justify-content:space-between;align-items:center;width:100%;}img{height:50px;object-fit:contain;}}"]);
const StyledBurger = external_styled_components_default.a.div.withConfig({
  displayName: "NavBar__StyledBurger",
  componentId: "sc-1hnhtjj-1"
})(["cursor:pointer;width:2rem;height:2rem;display:flex;flex-flow:column nowrap;justify-content:space-around;transform-origin:1px;div{transition:all 0.2s linear;border-bottom:3px solid black;border-radius:10px;&:nth-child(1){transform:", ";}&:nth-child(2){opacity:", ";}&:nth-child(3){transform:", ";}}"], ({
  open
}) => open ? 'rotate(45deg) translateY(15px)' : 'rotate(0deg)', ({
  open
}) => open ? '0%' : '100%', ({
  open
}) => open ? 'rotate(-45deg) translateY(-15px)' : 'rotate(0deg)');

const Header = () => {
  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(false);

  const onOpen = () => {
    setOpen(!open);
  };

  const {
    openCart
  } = Object(cartState["b" /* useCart */])();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(HeaderStyled, {
    className: "header",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "logo-menu",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "logo",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/Images/logo-ghost-grits-horz-tag.png",
            alt: ""
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "navCluster",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "cartOpen",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
            className: "cartButton",
            onClick: openCart,
            icon: free_solid_svg_icons_["faShoppingCart"]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(StyledBurger, {
          onClick: onOpen,
          open: open,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {})]
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_NavLinks, {
      open: !open
    })]
  });
};

/* harmony default export */ var NavBar = __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "7lEG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Footer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "FooterStyles__Footer",
  componentId: "e34a29-0"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;.border{text-align:center;width:100%;}.border h1{width:50%;margin:0 auto;}.border h1:before{content:' ';margin:0 auto;width:35%;border-bottom:2px solid #662916;transform:skewY(-1.5deg);}.border h1:after{content:' ';position:absolute;margin:0 auto;border-bottom:2px solid #662916;transform:skewY(1deg);}.footer-content{width:75%;display:flex;justify-content:space-around;align-items:center;ul{list-style:none;line-height:1.5;color:#662916;font-size:16px;font-family:'Montserrat',sans-serif;}}.footer-content h4{padding:20px;color:#662916;font-size:18px;font-weight:300;}.list{margin:48px 0px;display:flex;justify-content:center;align-items:center;flex-direction:column;}.follow-us ul{display:flex;flex-direction:row;}.follow-us ul li{margin:0px 10px;font-size:40px;color:#efd85a;}.copyright{text-align:center;width:100%;background:#efd85a;color:white;padding:20px;}"]);
/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "GUJk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CUSTOM_ITEM_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FIXED_ITEM_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_CUSTOM_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_FIXED_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DELETE_FIXED_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DELETE_CUSTOM_ITEM; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const CUSTOM_ITEM_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query CUSTOM_ITEM_QUERY {
    allSaladCartItems {
      id
      salad {
        price
        name
        description
        choice_of_dressing
        choice_of_two_toppings
      }
    }
  }
`;
const FIXED_ITEM_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query FIXED_ITEM_QUERY {
  allFoodCartItems {
    id
    quantity
    food {
      name
      description
      price
      id
    }
  }
}
`;
const ADD_CUSTOM_ITEM = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation ADD_CUSTOM_ITEM($toppings: String, $dressing: String ) {
  createSaladCartItem(data: {salad: { create: {
    name: "Build Your Own Salad"
    description: "Romaine Leaves, Spring Mix Greens, Swiss Char"
    choice_of_dressing: $dressing
    choice_of_two_toppings: $toppings
    category: {connect: {
      id: "60646e47feccff0850f951e7"
    }}
    price: 10
  } } }) {
    salad {
      name
      description
      choice_of_dressing
      choice_of_two_toppings
      category {
        id
      }
      price
    } 
  }
}
`;
const ADD_FIXED_ITEM = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation($id: ID!) {
  createFoodCartItem(data: {quantity: 1, food: { connect: { id: $id } }}) {
    quantity
    food {
      id
      name
      description
      price
    }
  }
}
`;
const DELETE_FIXED_ITEM = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation DELETE_FIXED_ITEM($id: ID!) {
  deleteFoodCartItem(id: $id) {
    id
  }
}
`;
const DELETE_CUSTOM_ITEM = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation DELETE_FIXED_ITEM($id: ID!) {
  deleteSaladCartItem(id: $id) {
    id
  }
}
`;

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "NwYP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
 // 2491 total height of homepage rows

const Layout = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Layout",
  componentId: "syw0ic-0"
})(["width:100%;*{font-weight:100;}h1,h2,h3,h4,h5,h6{font-family:'Montserrat',sans-serif;font-size:1.9rem;color:#662916;letter-spacing:12px;font-weight:100;position:relative;padding:8% 40px;}position:relative;h1:before{content:' ';width:35%;position:absolute;z-index:2;top:1px;left:40px;right:1px;bottom:1px;border-bottom:2px solid #662916;transform:skewY(-1.5deg);}h1:after{content:' ';position:absolute;width:35%;z-index:2;top:0px;left:40px;right:0px;bottom:0px;border-bottom:2px solid #662916;transform:skewY(1deg);}p{color:#662916;line-height:1.5;font-size:1.2rem;font-family:'Montserrat',sans-serif;padding:8% 40px;}.home-container{position:absolute;top:80px;}.one{margin-right:16px;}@media(max-width:1480px){h1{font-size:1.5rem;}}@media(max-width:700px){p{font-size:1.1rem;}}"]);

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Home; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/styles/ContentRow.js

const ContentRow = external_styled_components_default.a.div.withConfig({
  displayName: "ContentRow",
  componentId: "sc-19jnu5z-0"
})(["height:473px;margin-top:16px;display:flex;.image{height:473px;flex:2;img{height:inherit;width:100%;object-fit:cover;}}.content{flex:1;background:#efd85a;}@media(max-width:420px){margin:0;flex-direction:column;height:auto;justify-content:center;align-items:center;}"]);
// CONCATENATED MODULE: ./components/styles/Tile1.js

const Tile1 = external_styled_components_default.a.div.withConfig({
  displayName: "Tile1",
  componentId: "sc-102qsoy-0"
})(["background:red;background:url('/Images/bass.jpg') no-repeat center center/cover;height:500px;position:relative;.eatery{opacity:90%;position:absolute;top:0;left:0;width:33%;height:100%;background:#efd85a;}.menu{display:flex;justify-content:center;align-items:center;position:absolute;left:20%;top:400px;background:white;border:none;font-size:20px;font-family:'Montserrat',sans-serif;position:absolute;right:58px;opacity:none;padding:0.5% 1%;cursor:pointer;p{margin:0;padding:0 5%;color:black;}}.menu:hover{transition:background 2s ease-out;color:white;background:linear-gradient(to right,#e3c634,#e56e6b);p{color:white;}}.menu-link{color:black;}@media(max-width:850px){.eatery{width:60%;}}@media(max-width:420px){.eatery{width:100%;opacity:1;}}"]);
// CONCATENATED MODULE: ./components/styles/Artisanal.js

const Artisanal = external_styled_components_default.a.div.withConfig({
  displayName: "Artisanal",
  componentId: "sc-1nciaw1-0"
})(["background:url('/Images/bass.jpg') no-repeat center center/cover;height:473px;position:relative;.eatery{position:absolute;top:0;left:0;width:33%;height:100%;opacity:90%;}.coming-soon{margin:30px 40px;color:#662916;border-bottom:4px solid #df735a;font-family:'Montserrat',sans-serif;font-size:15px;font-weight:bold;}.email-input{width:60%;margin-top:2%;margin-left:40px;input{padding:2% 1%;padding-right:5%;}button{padding:2.3%;background:#df735a;border:none;color:white;font-family:'Montserrat',sans-serif;letter-spacing:1.5px;}}@media(max-width:420px){width:100%;.email-input{width:90%;margin-bottom:1%;}}"]);
// EXTERNAL MODULE: ./components/styles/FooterStyles.js
var FooterStyles = __webpack_require__("7lEG");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__("JVe5");

// CONCATENATED MODULE: ./components/styles/ImageRow.js

const ImageRow = external_styled_components_default.a.div.withConfig({
  displayName: "ImageRow",
  componentId: "i31sid-0"
})(["margin:16px 0px;display:flex;height:365px;img{height:100%;width:100%;object-fit:cover;}.item1{flex:1;}.item2{flex:2;}.one{margin-right:16px;}"]);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/HomePage.js












const HomePage = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "home-container",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Tile1, {
      className: "column row-1",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "eatery",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          children: "EATERY"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "We are uniquely driven by Chef - Farmer partnerships offering Breakfast, Midday and main seasonal meals lorem ipsum meals and breakfast lunch"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
        className: "menu",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          icon: free_solid_svg_icons_["faUtensils"]
        }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/menu",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: "Menu"
          })
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ContentRow, {
      className: "column row-2",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "image one",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "/Images/gg-01.jpg",
          alt: "food"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Artisanal, {
        className: "content",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          children: "ARTISANAL STORE"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
          children: ["Find whole spice blends, sauces, and condiments, pickles, preserves and vinegars.", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "Rejuvenate your body with our signature kombuchas, specialty tea and coffee."]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: "coming-soon",
          children: "COMING SOON"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "email-input",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            type: "text",
            placeholder: "Your Email"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            children: "Get Notified"
          })]
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ImageRow, {
      className: "column row-3",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "item1 one",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "/Images/gg-06.jpg",
          alt: "Squid in a jar"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "item2 two",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "/Images/gg-09.jpg",
          alt: "Chicken"
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ContentRow, {
      className: "column row-4",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "image one",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "/Images/bottom.jpeg",
          alt: ""
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Artisanal, {
        className: "content",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          children: "MEAL PROGRAM"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
          children: ["Find whole spice blends, sauces, and condiments, pickles, preserves and vinegars.", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "Rejuvenate your body with our signature kombuchas, specialty tea and coffee."]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: "coming-soon",
          children: "COMING SOON"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "email-input",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            type: "text",
            placeholder: "Your Email"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            children: "Get Notified"
          })]
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ImageRow, {
      className: "column row-5",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "item2 one",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "/Images/gg-08.jpg",
          alt: ""
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "item1 two",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "/Images/bowl.jpeg",
          alt: ""
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(FooterStyles["a" /* default */], {
      className: "footer-container",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "border",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {})
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "footer-content",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "hours-location list",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
            children: " HOURS & LOCATION"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              children: "Mon-Sat: 10a to 8p"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              children: "100 Wilton Rd"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              children: "Wilton, CT"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              children: "203-333-9999"
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "follow-us list",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
            children: "FOLLOW US"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                icon: free_brands_svg_icons_["faTwitter"]
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                icon: free_brands_svg_icons_["faInstagram"]
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                icon: free_brands_svg_icons_["faFacebook"]
              })
            })]
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "copyright",
        children: "\xA9 2020 Ghost & Grits"
      })]
    })]
  });
};

/* harmony default export */ var components_HomePage = (HomePage);
// EXTERNAL MODULE: ./components/NavBar.js + 1 modules
var NavBar = __webpack_require__("6yR0");

// EXTERNAL MODULE: ./components/styles/Layout.js
var Layout = __webpack_require__("NwYP");

// EXTERNAL MODULE: ./components/Cart.js + 8 modules
var Cart = __webpack_require__("/8Gu");

// CONCATENATED MODULE: ./pages/index.js







function Home() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Layout["a" /* Layout */], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(NavBar["a" /* default */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_HomePage, {})]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Cart["a" /* default */], {})]
  });
}

/***/ }),

/***/ "RkzC":
/***/ (function(module, exports) {

module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "ekTP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartStateProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useCart; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const LocalStateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({
  children
}) {
  const {
    0: cartOpen,
    1: setCartOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  function closeCart() {
    setCartOpen(false);
  }

  function openCart() {
    setCartOpen(true);
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(LocalStateProvider, {
    value: {
      cartOpen,
      setCartOpen,
      toggleCart,
      closeCart,
      openCart
    },
    children: children
  });
}

function useCart() {
  const all = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(LocalStateContext);
  return all;
}



/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "s7eq":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-regular-svg-icons");

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "vtRj":
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "z+8S":
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "z5ly":
/***/ (function(module, exports) {

module.exports = require("@stripe/react-stripe-js");

/***/ })

/******/ });