(this["webpackJsonpspeed-typing-game"]=this["webpackJsonpspeed-typing-game"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),i=(n(9),n(10),n(1));var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=Object(a.useState)(""),n=Object(i.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(e),u=Object(i.a)(c,2),l=u[0],s=u[1],m=Object(a.useState)(!1),d=Object(i.a)(m,2),f=d[0],h=d[1],g=Object(a.useState)(0),b=Object(i.a)(g,2),p=b[0],v=b[1],w=Object(a.useRef)(null);function j(e){o(e.target.value)}function O(e){return e.trim().split(" ").filter((function(e){return""!==e})).length}function E(){h(!0),s(e),v(0),o(""),console.log(w.current),w.current.disabled=!1,w.current.focus()}function C(){h(!1),v(O(r))}return Object(a.useEffect)((function(){f&&l>0&&setTimeout((function(){s((function(e){return e-1}))}),1e3),l<=0&&C()}),[l,f]),{text:r,isGameStarted:f,textareaRef:w,timeRemaining:l,wordCount:p,handleChange:j,startGame:E}};var l=function(){var e=u(),t=e.text,n=e.isGameStarted,a=e.textareaRef,o=e.timeRemaining,c=e.wordCount,i=e.handleChange,l=e.startGame;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"How fast do you type?"),r.a.createElement("textarea",{value:t,onChange:i,disabled:!n,ref:a}),r.a.createElement("h4",null,"Time remaining: ",o),r.a.createElement("button",{onClick:l,disabled:n},"Start"),r.a.createElement("h1",null,"Word Count: ",c))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(l,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.694bc7c9.chunk.js.map