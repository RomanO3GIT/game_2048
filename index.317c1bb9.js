function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,void 0);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var n={startBtn:document.querySelector(".start"),fieldCells:document.querySelectorAll(".field-cell"),fieldRows:document.querySelectorAll(".field-row"),messageStart:document.querySelector(".message-start"),messageLose:document.querySelector(".message-lose"),messageWin:document.querySelector(".message-win"),score:document.querySelector(".game-score")},r=function(t){var r,l,a,f,u,d;r=t.key,(l=n.startBtn).classList.remove("start"),l.classList.add("restart"),l.textContent="Restart",a=n.fieldCells,f=n.fieldRows,d=(u="ArrowLeft"===r||"ArrowRight"===r?e(f):function(t){for(var e=t.length/4,n=[],r=0;r<4;r++){for(var o=[],i=0;i<e;i++){var l=4*i+r;o.push(t[l])}n.push({children:o})}return n}(a)).map(function(t){return e(t.children).map(function(t){return t.textContent})}).flat(),u.forEach(function(t){for(var o=("ArrowLeft"===r||"ArrowUp"===r?e(t.children):e(t.children).reverse()).filter(function(t){return""!==t.textContent}).map(function(t){return parseInt(t.textContent)}),i=1;i<o.length;i++)o[i]===o[i-1]&&(o[i-1]=2*o[i-1],function(t){var e=n.score,r=+e.textContent;e.textContent=r+t}(o[i-1]),o.splice(i,1),o.push(""));var l="ArrowLeft"===r||"ArrowUp"===r?e(o).concat(["","","",""]).slice(0,4):e(o).concat(["","","",""]).slice(0,4).reverse();e(t.children).forEach(function(t,r){var o=l[r];t.textContent=o?o.toString():"",e(t.classList).forEach(function(e){e.startsWith("field-cell--")&&t.classList.remove(e)}),o&&(t.classList.add("field-cell--".concat(o)),2048===o&&s(n.messageWin))})}),!function(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}(d,u.map(function(t){return e(t.children).map(function(t){return t.textContent})}).flat())&&c(o(),i()),e(n.fieldCells).some(function(t){return""===t.textContent})||function(){for(var t=n.fieldRows,e=0;e<t.length;e++)for(var r=0;r<t[e].children.length;r++){var o=t[e].children[r].textContent;if(t[e].children[r+1]&&o===t[e].children[r+1].textContent||t[e+1]&&o===t[e+1].children[r].textContent)return!0}return!1}()||s(n.messageLose)};function o(){var t=e(n.fieldCells).map(function(t,e){return""===t.textContent?e:-1}).filter(function(t){return -1!==t});if(0===t.length)return -1;var r=l(t.length);return t[r]}function i(){return 10>=l(100)?4:2}function l(t){return Math.floor(Math.random()*t)}function c(t,e){if(-1!==t){var r=n.fieldCells[t];r.classList.add("field-cell--".concat(e)),r.textContent=e}}function s(t){t.classList.remove("hidden"),window.removeEventListener("keydown",r)}n.startBtn.addEventListener("click",function(){var t,l,s,a,f;t=n.messageStart,l=n.messageLose,s=n.messageWin,a=n.score,f=n.fieldCells,a.textContent="0",[t,l,s].forEach(function(t){return t.classList.add("hidden")}),f.forEach(function(t){e(t.classList).forEach(function(e){e.startsWith("field-cell--")&&t.classList.remove(e)}),t.textContent=""}),c(o(),i()),c(o(),i()),window.addEventListener("keydown",r)});
//# sourceMappingURL=index.317c1bb9.js.map
