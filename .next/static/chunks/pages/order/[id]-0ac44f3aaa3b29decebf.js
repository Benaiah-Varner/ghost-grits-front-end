_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"8lYe":function(e,t,n){"use strict";var i=n("nKUr"),r=n("7lEG"),c=n("IP2g"),o=n("8tEE");t.a=function(){return Object(i.jsxs)(r.a,{className:"footer-container",children:[Object(i.jsx)("div",{className:"border",children:Object(i.jsx)("h1",{})}),Object(i.jsxs)("div",{className:"footer-content",children:[Object(i.jsxs)("div",{className:"hours-location list",children:[Object(i.jsx)("h4",{children:" HOURS & LOCATION"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Mon-Sat: 10a to 8p"}),Object(i.jsx)("li",{children:"100 Wilton Rd"}),Object(i.jsx)("li",{children:"Wilton, CT"}),Object(i.jsx)("li",{children:"203-333-9999"})]})]}),Object(i.jsxs)("div",{className:"follow-us list",children:[Object(i.jsx)("h4",{children:"FOLLOW US"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)(c.a,{icon:o.c})}),Object(i.jsx)("li",{children:Object(i.jsx)(c.a,{icon:o.b})}),Object(i.jsx)("li",{children:Object(i.jsx)(c.a,{icon:o.a})})]})]})]}),Object(i.jsx)("div",{className:"copyright",children:"\xa9 2020 Ghost & Grits"})]})}},Ivv9:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/order/[id]",function(){return n("u6i0")}])},u6i0:function(e,t,n){"use strict";n.r(t);var i=n("vJKn"),r=n.n(i),c=n("nKUr"),o=n("rg98"),s=n("jT3O"),d=n("q1tI"),l=n("lTCR"),a=n.n(l),j=n("VX74"),h=n("8lYe"),b=n("vOnD").a.div.withConfig({displayName:"OrderStyled",componentId:"j8oh2m-0"})(["height:75%;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:'Montserrat',sans-serif;.order-reciept{margin-top:150px;margin-bottom:3%;border:1px solid pink;border-radius:20px;overflow:auto;padding:2%;h1{font-size:2.5rem;color:#662916;font-weight:100;position:relative;text-align:center;padding-bottom:3%;margin-bottom:2%;font-weight:400;}h1:before{content:' ';width:35%;position:absolute;z-index:2;top:1px;left:33%;right:1px;bottom:1px;border-bottom:2px solid #264327;transform:skewY(-1.5deg);}h1:after{content:' ';position:absolute;width:35%;z-index:2;top:0px;left:33%;right:0px;bottom:0px;border-bottom:2px solid #264327;transform:skewY(1deg);}h3{font-size:1.75rem;font-weight:300;margin:4% 0;color:#662916;}h4{font-size:1.25rem;font-weight:300;margin:4% 0;color:#e5426c;}p{color:#662916;}}button{align-content:center;width:auto;margin:3% auto;background-color:#e5426c;border:none;padding:1% 2%;font-size:1rem;font-weight:200;p{color:white;}}button:hover{opacity:0.7;}"]),u=n("6yR0"),x=n("YFqc"),O=n.n(x);function p(){var e=Object(s.a)(["\n  query SINGLE_ORDER_QUERY($id: ID!) {\n    Order(where: { id: $id }) {\n      id\n      firstName\n      lastName\n      charge\n      total\n      email\n      customItems {\n        id\n        choice_of_dressing\n        choice_of_two_toppings\n        name\n      }\n      fixedItems {\n        id\n        name\n        description\n      }\n    }\n  }\n"]);return p=function(){return e},e}var m=a()(p());t.default=function(e){var t=e.query,n=Object(j.useApolloClient)(),i=Object(d.useState)(),s=i[0],l=i[1];function a(){return(a=Object(o.a)(r.a.mark((function e(){var i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.query({query:m,variables:{id:t.id}});case 2:i=e.sent,l(i.data.Order);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(d.useEffect)((function(){!function(){a.apply(this,arguments)}()}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(u.a,{}),Object(c.jsxs)(b,{children:[Object(c.jsxs)("div",{className:"order-reciept",children:[Object(c.jsx)("h1",{children:"Order Reciept"}),Object(c.jsxs)("div",{className:"customer-details",children:[Object(c.jsx)("h3",{children:"Credit Card Info:"}),Object(c.jsx)("p",{children:null===s||void 0===s?void 0:s.charge}),Object(c.jsxs)("p",{children:["Subtotal: $",null===s||void 0===s?void 0:s.total]}),Object(c.jsx)("h3",{children:"Customer Info:"}),Object(c.jsxs)("p",{children:["First Name: ",null===s||void 0===s?void 0:s.firstName]}),Object(c.jsxs)("p",{children:["Last Name: ",null===s||void 0===s?void 0:s.lastName]}),Object(c.jsxs)("p",{children:["Email Address: ",null===s||void 0===s?void 0:s.email]})]}),Object(c.jsxs)("div",{className:"food-details",children:[Object(c.jsx)("h3",{children:"Order:"}),null===s||void 0===s?void 0:s.customItems.map((function(e,t){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h4",{children:e.name}),Object(c.jsxs)("p",{children:["Toppings - ",e.choice_of_two_toppings]}),Object(c.jsxs)("p",{children:["Dressing - ",e.choice_of_dressing]})]})})),Object(c.jsx)("br",{}),null===s||void 0===s?void 0:s.fixedItems.map((function(e,t){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h4",{children:e.name}),Object(c.jsx)("p",{children:e.description})]})}))]})]}),Object(c.jsx)("button",{children:Object(c.jsx)(O.a,{href:"/",children:Object(c.jsx)("p",{className:"return-home",children:"Return Home"})})})]}),Object(c.jsx)(h.a,{})]})}}},[["Ivv9",1,2,6,5,0,3,4]]]);