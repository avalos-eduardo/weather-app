(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([e.id,'*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody{\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    background: linear-gradient(180deg,rgb(68, 113, 137), rgb(179, 190, 191));\n}\n\n#title{\n    font-size: 4.5rem;\n    color: white;\n    font-family: "Inter", sans-serif;\n    letter-spacing: 3px;\n    margin: 2rem 0 0 0;\n}\n\n.weather-card{\n    display: flex;\n    flex-direction: column;\n    border-radius: 15px;\n    width: 40rem;\n    height: 28rem;\n    margin: 2rem 0 2rem 0;\n    background-color: rgba(150, 148, 148, 0.35);\n}\n\n.weather-card div{\n    border: 0px solid black;\n}\n\n#card-header{\n    display: flex;\n    flex: 1;\n    font-size: 2rem;\n    font-family: "Roboto", sans-serif;\n    font-style: italic;\n    align-items: center;\n    justify-content: center;\n    color: white;\n}\n\n#content{\n    display: flex;\n    flex: 5;\n}\n\n#weather-icon{\n    font-size: 12rem;\n    display: flex;\n    flex-direction: column;\n    padding-left: 3rem;\n    justify-content: center;\n    padding-top: 2rem;\n    flex: 1.2;\n}\n\n#weather-icon p{\n    color: white;\n    font-size: 2rem;\n    padding-left: 2rem;\n    position: relative;\n    top: -30px;\n}\n\n#temp{\n    font-size: 4rem;\n}\n\n#weather-data{\n    color: white;\n    font-style: italic;\n    font-family: "Roboto", sans-serif;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    flex: 2;\n}\n\n#city-input{\n    height: 2rem;\n    width: 30rem;\n    border-radius: 7px;\n    border: 1px solid grey;\n    padding: 0 0 0 .25rem;\n}\n\n#submit{\n    height: 2rem;\n    width: 5rem;\n    border-radius: 7px;\n    border: 1px solid grey;\n    background-color: rgb(81, 143, 53);\n    color: white;\n    cursor: pointer;\n}\n\n#clear{\n    height: 2rem;\n    width: 5rem;\n    border-radius: 7px;\n    border: 1px solid grey;\n    background-color: rgb(173, 49, 43);\n    color: white;\n    cursor: pointer;\n}\n\np{\n    letter-spacing: 1px;\n    font-weight: bold;\n    font-family: "Raleway", sans-serif;\n    margin-top: 1rem;\n    color: rgb(255, 0, 0);\n}',""]);const c=a},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),l=0;l<i.length;l++){var d=t(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,t.d({},{bB:()=>A,gJ:()=>C,_7:()=>M,Lq:()=>S,fN:()=>T,sD:()=>w,TT:()=>L});var r=t(72),o=t.n(r),i=t(825),a=t.n(i),c=t(659),s=t.n(c),l=t(56),d=t.n(l),u=t(540),p=t.n(u),f=t(113),m=t.n(f),h=t(208),y={};async function v(e){try{const n=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${e}?key=5S4ZEX5AP259Y7ABDQM4Z2Z53`,{mode:"cors"}),t=await n.json();return console.log(t),t}catch{C.innerHTML="Enter a valid location.",console.log("Enter a correct value.")}}async function g(e){const n=e.resolvedAddress,t=e.currentConditions.temp,r=e.currentConditions.feelslike,o=e.currentConditions.humidity,i=e.currentConditions.windspeed,a=e.currentConditions.datetime;T.innerHTML=`${n}`,w.innerHTML=`${t}°F`,M.innerHTML=`Feels Like: ${r}°F`,S.innerHTML=`Humidity: ${o}%`,L.innerHTML=`Wind Speed: ${i} mph`,a>="06:00:00"&&a<="18:00:00"?A.innerHTML=`☀️ <p>${a}</p>`:(console.log(a),A.innerHTML=`🌠 <p>${a}</p>`)}y.styleTagTransform=m(),y.setAttributes=d(),y.insert=s().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=p(),o()(h.A,y),h.A&&h.A.locals&&h.A.locals;const b=document.querySelector("#submit"),x=document.querySelector("#city-input"),w=document.querySelector("#temp"),T=document.querySelector("#card-header"),M=document.querySelector("#feels-like"),S=document.querySelector("#humidity"),L=document.querySelector("#wind"),C=document.querySelector("#error-message"),A=document.querySelector("#weather-icon");window.onload=async()=>{g(await v("Memphis, Tennessee"))},b.addEventListener("click",(async e=>{e.preventDefault();const n=x.value.trim();if(!n)return void(C.innerHTML="Please enter a location.");const t=await v(n);t&&(g(t),C.innerHTML="")}))})();