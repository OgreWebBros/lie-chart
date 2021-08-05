(this["webpackJsonplie-builder"]=this["webpackJsonplie-builder"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),o=c(24),i=c.n(o),r=(c(39),c(40),c(20)),s=c(5),l=c(1),j=function(){return Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsx)(r.b,{className:"footer__link button",activeClassName:"active",to:"/lie-builder",children:"Get a Lie"}),Object(l.jsx)(r.b,{className:"footer__link button",activeClassName:"active",to:"/Liebrary",children:"Checkout the Liebrary"})]})},u=function(e){var t=e.block?"".concat(e.block):"",c=e.element?"__".concat(e.element):"",n=[];e.modifier&&e.modifier.forEach((function(e){var a="--".concat(e),o="".concat(t).concat(c).concat(a);n.push(o)}));var a=e.modifier?" ".concat(n.join(" ")):"";return"".concat(t).concat(c).concat(a&&a)},d=function(e){var t=e.block,c=e.modifier,n=e.size,a={block:t||"logo",element:t?"logo":null,modifier:c};return Object(l.jsx)("svg",{className:u(a),height:n,width:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"2.206 14.194 100 73.612",children:Object(l.jsx)("path",{d:"M52.043 63.576l.007-.012-5.398-11.87-.001.011v-.011c0-12.272-9.949-22.222-22.222-22.222S2.206 39.422 2.206 51.694c0 7.015 3.258 13.26 8.333 17.333v18.779H34.15v-8.333h2.778v-.002a8.333 8.333 0 008.333-8.333v-5.554l5.556-.002c.768 0 1.389-.621 1.389-1.389 0-.224-.066-.43-.163-.617zM39.706 57.25a2.778 2.778 0 110-5.557 2.778 2.778 0 010 5.557zM93.873 14.194H60.539a8.331 8.331 0 00-8.333 8.333V41.971a8.331 8.331 0 008.333 8.332l4.167.001-4.167 11.111 18.056-11.111 15.278-.001a8.331 8.331 0 008.333-8.332V22.529v-.001a8.332 8.332 0 00-8.333-8.334zm-6.37 24.425l-3.928 3.928-6.369-6.369-6.369 6.369-3.928-3.928 6.369-6.369-6.369-6.37 3.928-3.928 6.369 6.369 6.369-6.369 3.928 3.928-6.369 6.37 6.369 6.369z"})})},b=function(){return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)(d,{block:"header",size:"40"}),Object(l.jsx)("h2",{className:"header__title",children:"Morgan's Trusty Lie Builder"})]})},m=c(13),f=c.n(m),O=c(26),_=c(17),p=c(4),x=c(18),h=function(e){var t=e.action,c=e.text,n=e.block,a=e.modifier,o={block:n||"button",element:n?"button":null,modifier:void 0===a?[]:a};return Object(l.jsx)("button",{className:u(o),onClick:t,children:c})},v=function(e){return e[Math.floor(Math.random()*e.length)]},g=c(22),N=c(23),k=(c(50),{apiKey:"AIzaSyDLhF6Cvyh2BMPeDcHe5JJCiYe8JUVt1Cc",authDomain:"lie-builder.firebaseapp.com",projectId:"lie-builder",storageBucket:"lie-builder.appspot.com",messagingSenderId:"188809832678",appId:"1:188809832678:web:31773ff4cecb52c3af7327",measurementId:"G-ZV9PG604SX"}),y=(N.a.initializeApp(k),N.a.firestore()),w=function(){var e=Object(_.a)(f.a.mark((function e(){var t,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.collection("lieData").get();case 2:return t=e.sent,c=t.docs,e.abrupt("return",c.map((function(e){return Object(p.a)({},e.data())})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(n.useState)(),t=Object(x.a)(e,2),c=t[0],a=t[1],o=Object(n.useState)({tone:"_______",role:"_______",scene:"_____________________",indefinateArticle:" a"}),i=Object(x.a)(o,2),r=i[0],s=i[1],j=function(e){return["a","e","i","o","u","A","E","I","O","U"].includes(e[0])?" an":" a"},u=Object(n.useCallback)((function(){var e={tone:v(c.tones),role:v(c.roles),scene:v(c.scenes)};return Object(p.a)(Object(p.a)({},e),{},{indefinateArticle:j(e.tone)})}),[c]);Object(n.useEffect)((function(){Object(_.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,a.apply(void 0,Object(O.a)(t));case 4:case"end":return e.stop()}}),e)})))()}),[]),Object(n.useEffect)((function(){c&&s(u())}),[c,u]);var d="lie";return Object(l.jsx)("div",{className:"lie__wrapper content__wrapper",children:Object(l.jsxs)("div",{className:"lie",children:[Object(l.jsxs)("div",{className:"lie__actions",children:[Object(l.jsx)(h,{block:d,modifier:["tone"],text:"tone",action:function(){!function(){var e=v(c.tones);s(Object(p.a)(Object(p.a)({},r),{},{tone:e,indefinateArticle:j(e)}))}()}}),Object(l.jsx)(h,{block:d,modifier:["role"],text:"role",action:function(){!function(){var e=v(c.roles);s(Object(p.a)(Object(p.a)({},r),{},{role:e}))}()}}),Object(l.jsx)(h,{block:d,modifier:["scene"],text:"scene",action:function(){!function(){var e=v(c.scenes);s(Object(p.a)(Object(p.a)({},r),{},{scene:e}))}()}}),Object(l.jsx)(h,{block:d,text:"all",action:function(){s(u())}})]}),Object(l.jsxs)("span",{className:"lie__copy",children:["You are",r.indefinateArticle,Object(l.jsxs)("span",{className:"lie__tone",children:[" ",r.tone]}),Object(l.jsxs)("span",{className:"lie__role",children:[" ",r.role," "]}),"who",Object(l.jsxs)("span",{className:"lie__scene",children:[" ",r.scene]}),"."]})]})})},E=function(e){var t=e.children,c=document.getElementById("modal"),a=document.createElement("div");return Object(n.useEffect)((function(){c.appendChild(a)})),Object(n.useEffect)((function(){return function(){return c.removeChild(a)}})),Object(o.createPortal)(t,a)},F={block:"modal"},I=function(e){var t=e.children,c=e.toggle,n=e.open;return Object(l.jsx)(E,{children:n&&Object(l.jsxs)("div",{className:"modal__wrapper",children:[Object(l.jsxs)("div",{className:"modal__card",children:[Object(l.jsx)(h,Object(p.a)(Object(p.a)({},F),{},{text:"\u2716",modifier:["small","close"],action:function(){c()}})),t]}),Object(l.jsx)("div",{className:"modal__background",onClick:c})]})})},S=function(){var e=Object(n.useState)({roles:["_____"],tones:["_____"],scenes:["_____"]}),t=Object(x.a)(e,2),c=t[0],a=t[1],o=Object(n.useState)({open:!1}),i=Object(x.a)(o,2),r=i[0],s=i[1];Object(n.useEffect)((function(){Object(_.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,a.apply(void 0,Object(O.a)(t));case 4:case"end":return e.stop()}}),e)})))()}),[]);var j=function(e,t,n){var o=c;"add"===n?o[e].push(t):o[e]=o[e].filter((function(e){return e!==t})),a(o)},d=function(e,t){c[e].includes(t)?t||""!==t?alert("already got it"):alert("You got to enter something at least"):(j(e,t,"add"),function(e,t){var c=y.collection("lieData");c.doc("lies").get().then((function(n){c.doc("lies").update(Object(g.a)({},"".concat(e),N.a.firestore.FieldValue.arrayUnion(t)))})).catch((function(e){console.log("Error getting document:",e)}))}(e,t))},b=function(e,t){j(e,t,"remove"),function(e,t){var c=y.collection("lieData");c.doc("lies").get().then((function(n){c.doc("lies").update(Object(g.a)({},"".concat(e),N.a.firestore.FieldValue.arrayRemove(t)))})).catch((function(e){console.log("Error getting document:",e)}))}(e,t)},m=function(){s({open:!1})},v=function(e){var t={block:S,modifier:[e]};return Object(l.jsxs)("div",{className:u(Object(p.a)(Object(p.a)({},t),{},{element:"wrapper"})),children:[Object(l.jsxs)("div",{className:u(Object(p.a)(Object(p.a)({},t),{},{element:"title-bar"})),children:[Object(l.jsx)("h2",{className:u(Object(p.a)(Object(p.a)({},t),{},{element:"title"})),children:e}),Object(l.jsx)(h,Object(p.a)(Object(p.a)({},t),{},{action:function(){C(e)},text:"add"}))]}),Object(l.jsx)("ul",{className:u(Object(p.a)(Object(p.a)({},t),{},{element:"list"})),children:c[e].map((function(c,n){return Object(l.jsxs)("li",{className:u(Object(p.a)(Object(p.a)({},t),{},{element:"detail"})),children:[Object(l.jsx)("span",{className:u(Object(p.a)(Object(p.a)({},t),{},{element:"detail-text"})),children:c}),Object(l.jsx)(h,Object(p.a)(Object(p.a)({},t),{},{text:"\u2716",modifier:["small",e],action:function(){k(e,c)}}))]},"".concat(e,"-").concat(n))}))})]})},k=function(e,t){s({open:!0,contents:Object(l.jsx)(F,{type:e,detail:t}),type:e,targetDetail:t})},C=function(e){s({open:!0,contents:Object(l.jsx)(E,{type:e}),type:e})},E=function(e){var t=e.type;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("p",{className:"modal__text",children:[" Add to ",Object(l.jsx)("span",{className:"modal__text--".concat(t),children:t})]}),Object(l.jsx)("input",{className:"modal__input",id:"".concat(t,"-input}"),type:"text"}),Object(l.jsx)(h,{block:"modal",text:"add it",action:function(){!function(e,t){d(e,t),s({open:!1}),m()}(t,document.getElementById("".concat(t,"-input}")).value)}})]})},F=function(e){var t=e.type,c=e.detail;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("p",{className:"modal__text",children:[" You sure you want to remove ",Object(l.jsx)("span",{className:"modal__text--".concat(t),children:c})," from ",Object(l.jsx)("span",{className:"modal__text--".concat(t),children:t}),"? "]}),Object(l.jsx)(h,{block:"modal",text:"remove it",action:function(){!function(e,t){b(e,t),s({open:!1})}(t,c)}})]})},S="liebrary";return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"lie__wrapper content__wrapper",children:Object(l.jsxs)("div",{className:S,children:[v("tones"),v("roles"),v("scenes")]})}),r.open&&Object(l.jsx)(I,{open:r.open,toggle:function(){m()},children:r.contents})]})};c(48);var z=function(){return Object(l.jsx)(r.a,{children:Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(b,{}),Object(l.jsx)("div",{className:"motes motes--back"}),Object(l.jsx)("div",{className:"motes motes--mid"}),Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.a,{path:"/liebrary",render:function(){return Object(l.jsx)(S,{})}}),Object(l.jsx)(s.a,{exact:!0,path:"/lie-builder",render:function(){return Object(l.jsx)(C,{})}})]}),Object(l.jsx)("div",{className:"motes motes--front"}),Object(l.jsx)(j,{})]})})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),o(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(z,{})}),document.getElementById("root")),A()}},[[49,1,2]]]);
//# sourceMappingURL=main.d3a10a79.chunk.js.map