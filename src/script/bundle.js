parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"L7ge":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.showScore=exports.message=exports.resetMessage=void 0;var e=document.getElementById("message"),s=document.getElementById("message-text"),t=function(){e.style.display="none",e.classList.remove("message--end")};exports.resetMessage=t;var o=function(e){s.innerText="right"===e?"Right answer":"Wrong answer",n(e),setTimeout(function(){a(e)},1e3)};exports.message=o;var n=function(s){e.classList.add("message--".concat(s)),e.style.display="block"},a=function(s){e.style.display="none",e.classList.remove("message--".concat(s))},r=function(t){s.innerText="your score is ".concat(t),e.classList.add("message--end"),e.style.display="block"};exports.showScore=r;
},{}],"Focm":[function(require,module,exports) {
"use strict";var e,t,n,o=require("./message"),r=new Audio("wrong.mp3"),a=new Audio("right.mp3"),c=30,i=!1,d=document.getElementById("cont"),l=document.getElementById("score"),m=document.getElementById("contest"),u=document.querySelectorAll(".options"),s=document.getElementById("start");s&&s.addEventListener("click",function(t){t.preventDefault(),!0===i?location.reload():(s.innerText="New Game",(0,o.resetMessage)(),i=!0,e=0,l.innerText="Score: ".concat(e),f(),h())});var f=function(){var e=Math.floor(10*Math.random())+1,t=Math.floor(10*Math.random())+1;m.innerText="".concat(e," X ").concat(t),n=e*t;var o=Math.floor(4*Math.random())+1;document.getElementById("option-".concat(o)).innerText=n;for(var r=[n],a=1;a<5;a++)if(a!=o){var c=void 0;do{c=Math.floor(10*Math.random())+1+(Math.floor(10*Math.random())+1)}while(r.includes(c));document.getElementById("option-".concat(a)).innerText=c,r.push(c)}},h=function(){t=setInterval(function(){c-=1,d.innerText=" ".concat(c," Seconds Left"),0===c&&(i=!1,v(),d.innerText="time is over",(0,o.showScore)(e))},1e3)},v=function(){clearInterval(t),c=30};u&&u.forEach(function(t){t.addEventListener("click",function(c){c.preventDefault(),!0===i&&(t.innerText==n?(e++,a.play(),l.innerText="Score: ".concat(e),(0,o.message)("right"),f()):(r.play(),i=!1,v(),d.innerText="your game is over",(0,o.showScore)(e)))})});
},{"./message":"L7ge"}]},{},["Focm"], null)
//# sourceMappingURL=/bundle.js.map