!function(){var t=void 0,e=void 0;!function(){function e(n,r,i){function o(s,a){if(!r[s]){if(!n[s]){var c="function"==typeof t&&t;if(!a&&c)return c(s,!0);if(u)return u(s,!0);var f=new Error("Cannot find module '"+s+"'");throw f.code="MODULE_NOT_FOUND",f}var l=r[s]={exports:{}};n[s][0].call(l.exports,function(t){var e=n[s][1][t];return o(e||t)},l,l.exports,e,n,r,i)}return r[s].exports}for(var u="function"==typeof t&&t,s=0;s<i.length;s++)o(i[s]);return o}return e}()({1:[function(t,e,n){"use strict";function r(t){var e="animated"===a.auto_scroll;c(t.element,{duration:e?800:1,alignment:"middle"})}var i=function(t){return t&&t.__esModule?t:{default:t}}(t("./forms/conditional-elements.js")),o=window.mc4wp||{},u=t("gator"),s=t("./forms/forms.js"),a=window.mc4wp_forms_config||{},c=t("scroll-to-element");if(u(document.body).on("submit",".mc4wp-form",function(t){var e=s.getByElement(t.target||t.srcElement);s.trigger("submit",[e,t]),s.trigger(e.id+".submit",[e,t])}),u(document.body).on("focus",".mc4wp-form",function(t){var e=s.getByElement(t.target||t.srcElement);e.started||(s.trigger("started",[e,t]),s.trigger(e.id+".started",[e,t]),e.started=!0)}),u(document.body).on("change",".mc4wp-form",function(t){var e=s.getByElement(t.target||t.srcElement);s.trigger("change",[e,t]),s.trigger(e.id+".change",[e,t])}),i.default.init(),o.listeners){for(var f=o.listeners,l=0;l<f.length;l++)s.on(f[l].event,f[l].callback);delete o.listeners}if(o.forms=s,a.submitted_form){var h=a.submitted_form,d=document.getElementById(h.element_id);!function(t,e,n,i){var o=Date.now(),u=document.body.clientHeight;n&&t.setData(i),window.scrollY<=10&&a.auto_scroll&&r(t),window.addEventListener("load",function(){s.trigger("submitted",[t]),s.trigger(t.id+".submitted",[t]),n?(s.trigger("error",[t,n]),s.trigger(t.id+".error",[t,n])):(s.trigger("success",[t,i]),s.trigger(t.id+".success",[t,i]),s.trigger(e+"d",[t,i]),s.trigger(t.id+"."+e+"d",[t,i]));var c=Date.now()-o;a.auto_scroll&&c>1e3&&c<2e3&&document.body.clientHeight!=u&&r(t)})}(s.getByElement(d),h.action,h.errors,h.data)}window.mc4wp=o},{"./forms/conditional-elements.js":2,"./forms/forms.js":4,gator:12,"scroll-to-element":14}],2:[function(t,e,n){"use strict";function r(t){for(var e=!!t.getAttribute("data-show-if"),n=e?t.getAttribute("data-show-if").split(":"):t.getAttribute("data-hide-if").split(":"),r=n[0],i=(n.length>1?n[1]:"*").split("|"),o=function(t,e){for(var n=[],r=t.querySelectorAll('input[name="'+e+'"], select[name="'+e+'"], textarea[name="'+e+'"]'),i=0;i<r.length;i++){var o=r[i],u=o.getAttribute("type");("radio"!==u&&"checkbox"!==u||o.checked)&&n.push(o.value)}return n}(function(t){for(var e=t;e.parentElement;)if("FORM"===(e=e.parentElement).tagName)return e;return null}(t),r),u=!1,s=0;s<o.length;s++){var a=o[s];if(u=i.indexOf(a)>-1||i.indexOf("*")>-1&&a.length>0)break}t.style.display=e?u?"":"none":u?"none":"";var c=t.querySelectorAll("input, select, textarea");[].forEach.call(c,function(t){(u||e)&&t.getAttribute("data-was-required")&&(t.required=!0,t.removeAttribute("data-was-required")),u&&e||!t.required||(t.setAttribute("data-was-required","true"),t.required=!1)})}function i(){var t=document.querySelectorAll(".mc4wp-form [data-show-if], .mc4wp-form [data-hide-if]");[].forEach.call(t,r)}function o(t){if(t.target&&t.target.form&&!(t.target.form.className.indexOf("mc4wp-form")<0)){var e=t.target.form.querySelectorAll("[data-show-if], [data-hide-if]");[].forEach.call(e,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default={init:function(){document.addEventListener("keyup",o,!0),document.addEventListener("change",o,!0),document.addEventListener("mc4wp-refresh",i,!0),window.addEventListener("load",i),i()}}},{}],3:[function(t,e,n){"use strict";var r=t("form-serialize"),i=t("populate.js"),o=function(t,e){this.id=t,this.element=e||document.createElement("form"),this.name=this.element.getAttribute("data-name")||"Form #"+this.id,this.errors=[],this.started=!1};o.prototype.setData=function(t){try{i(this.element,t)}catch(t){console.error(t)}},o.prototype.getData=function(){return r(this.element,{hash:!0,empty:!0})},o.prototype.getSerializedData=function(){return r(this.element,{hash:!1,empty:!0})},o.prototype.setResponse=function(t){this.element.querySelector(".mc4wp-response").innerHTML=t},o.prototype.reset=function(){this.setResponse(""),this.element.querySelector(".mc4wp-form-fields").style.display="",this.element.reset()},e.exports=o},{"form-serialize":11,"populate.js":13}],4:[function(t,e,n){"use strict";function r(t,e){e=e||parseInt(t.getAttribute("data-id"))||0;var n=new o(e,t);return s.push(n),n}var i=t("wolfy87-eventemitter"),o=t("./form.js"),u=new i,s=[];e.exports={all:function(){return s},get:function(t){for(var e=0;e<s.length;e++)if(s[e].id==t)return s[e];return r(document.querySelector(".mc4wp-form-"+t),t)},getByElement:function(t){for(var e=t.form||t,n=0;n<s.length;n++)if(s[n].element==e)return s[n];return r(e)},on:u.on.bind(u),trigger:function(t,e){"submit"===t?u.trigger(t,e):window.setTimeout(function(){u.trigger(t,e)},1)},off:u.off.bind(u)}},{"./form.js":3,"wolfy87-eventemitter":16}],5:[function(t,e,n){function r(t){switch(i(t)){case"object":var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=r(t[n]));return e;case"array":e=new Array(t.length);for(var o=0,u=t.length;o<u;o++)e[o]=r(t[o]);return e;case"regexp":var s="";return s+=t.multiline?"m":"",s+=t.global?"g":"",s+=t.ignoreCase?"i":"",new RegExp(t.source,s);case"date":return new Date(t.getTime());default:return t}}var i;try{i=t("component-type")}catch(e){i=t("type")}e.exports=r},{"component-type":9,type:9}],6:[function(t,e,n){function r(t){if(t)return function(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}(t)}e.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},r.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var r,i=0;i<n.length;i++)if((r=n[i])===e||r.fn===e){n.splice(i,1);break}return this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n)for(var r=0,i=(n=n.slice(0)).length;r<i;++r)n[r].apply(this,e);return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},{}],7:[function(t,e,n){n=e.exports=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){var e=(new Date).getTime(),n=Math.max(0,16-(e-r)),i=setTimeout(t,n);return r=e,i};var r=(new Date).getTime(),i=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.clearTimeout;n.cancel=function(t){i.call(window,t)}},{}],8:[function(t,e,n){function r(t){if(!(this instanceof r))return new r(t);this._from=t,this.ease("linear"),this.duration(500)}var i=t("emitter"),o=t("clone"),u=t("type"),s=t("ease");e.exports=r,i(r.prototype),r.prototype.reset=function(){return this.isArray="array"===u(this._from),this._curr=o(this._from),this._done=!1,this._start=Date.now(),this},r.prototype.to=function(t){return this.reset(),this._to=t,this},r.prototype.duration=function(t){return this._duration=t,this},r.prototype.ease=function(t){if(!(t="function"==typeof t?t:s[t]))throw new TypeError("invalid easing function");return this._ease=t,this},r.prototype.stop=function(){return this.stopped=!0,this._done=!0,this.emit("stop"),this.emit("end"),this},r.prototype.step=function(){if(!this._done){var t=this._duration,e=Date.now();if(e-this._start>=t)return this._from=this._to,this._update(this._to),this._done=!0,this.emit("end"),this;var n=this._from,r=this._to,i=this._curr,o=(0,this._ease)((e-this._start)/t);if(this.isArray){for(var u=0;u<n.length;++u)i[u]=n[u]+(r[u]-n[u])*o;return this._update(i),this}for(var s in n)i[s]=n[s]+(r[s]-n[s])*o;return this._update(i),this}},r.prototype.update=function(t){return 0==arguments.length?this.step():(this._update=t,this)}},{clone:5,ease:10,emitter:6,type:9}],9:[function(t,e,n){var r=Object.prototype.toString;e.exports=function(t){switch(r.call(t)){case"[object Date]":return"date";case"[object RegExp]":return"regexp";case"[object Arguments]":return"arguments";case"[object Array]":return"array";case"[object Error]":return"error"}return null===t?"null":void 0===t?"undefined":t!=t?"nan":t&&1===t.nodeType?"element":typeof(t=t.valueOf?t.valueOf():Object.prototype.valueOf.apply(t))}},{}],10:[function(t,e,n){n.linear=function(t){return t},n.inQuad=function(t){return t*t},n.outQuad=function(t){return t*(2-t)},n.inOutQuad=function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},n.inCube=function(t){return t*t*t},n.outCube=function(t){return--t*t*t+1},n.inOutCube=function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},n.inQuart=function(t){return t*t*t*t},n.outQuart=function(t){return 1- --t*t*t*t},n.inOutQuart=function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},n.inQuint=function(t){return t*t*t*t*t},n.outQuint=function(t){return--t*t*t*t*t+1},n.inOutQuint=function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},n.inSine=function(t){return 1-Math.cos(t*Math.PI/2)},n.outSine=function(t){return Math.sin(t*Math.PI/2)},n.inOutSine=function(t){return.5*(1-Math.cos(Math.PI*t))},n.inExpo=function(t){return 0==t?0:Math.pow(1024,t-1)},n.outExpo=function(t){return 1==t?t:1-Math.pow(2,-10*t)},n.inOutExpo=function(t){return 0==t?0:1==t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},n.inCirc=function(t){return 1-Math.sqrt(1-t*t)},n.outCirc=function(t){return Math.sqrt(1- --t*t)},n.inOutCirc=function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},n.inBack=function(t){return t*t*(2.70158*t-1.70158)},n.outBack=function(t){return--t*t*(2.70158*t+1.70158)+1},n.inOutBack=function(t){return(t*=2)<1?t*t*(3.5949095*t-2.5949095)*.5:.5*((t-=2)*t*(3.5949095*t+2.5949095)+2)},n.inBounce=function(t){return 1-n.outBounce(1-t)},n.outBounce=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},n.inOutBounce=function(t){return t<.5?.5*n.inBounce(2*t):.5*n.outBounce(2*t-1)+.5},n["in-quad"]=n.inQuad,n["out-quad"]=n.outQuad,n["in-out-quad"]=n.inOutQuad,n["in-cube"]=n.inCube,n["out-cube"]=n.outCube,n["in-out-cube"]=n.inOutCube,n["in-quart"]=n.inQuart,n["out-quart"]=n.outQuart,n["in-out-quart"]=n.inOutQuart,n["in-quint"]=n.inQuint,n["out-quint"]=n.outQuint,n["in-out-quint"]=n.inOutQuint,n["in-sine"]=n.inSine,n["out-sine"]=n.outSine,n["in-out-sine"]=n.inOutSine,n["in-expo"]=n.inExpo,n["out-expo"]=n.outExpo,n["in-out-expo"]=n.inOutExpo,n["in-circ"]=n.inCirc,n["out-circ"]=n.outCirc,n["in-out-circ"]=n.inOutCirc,n["in-back"]=n.inBack,n["out-back"]=n.outBack,n["in-out-back"]=n.inOutBack,n["in-bounce"]=n.inBounce,n["out-bounce"]=n.outBounce,n["in-out-bounce"]=n.inOutBounce},{}],11:[function(t,e,n){function r(t,e,n){if(0===e.length)return t=n;var i=e.shift(),o=i.match(/^\[(.+?)\]$/);if("[]"===i)return t=t||[],Array.isArray(t)?t.push(r(null,e,n)):(t._values=t._values||[],t._values.push(r(null,e,n))),t;if(o){var u=o[1],s=+u;isNaN(s)?(t=t||{})[u]=r(t[u],e,n):(t=t||[])[s]=r(t[s],e,n)}else t[i]=r(t[i],e,n);return t}var i=/^(?:submit|button|image|reset|file)$/i,o=/^(?:input|select|textarea|keygen)/i,u=/(\[[^\[\]]*\])/g;e.exports=function(t,e){"object"!=typeof e?e={hash:!!e}:void 0===e.hash&&(e.hash=!0);for(var n=e.hash?{}:"",s=e.serializer||(e.hash?function(t,e,n){if(e.match(u)){var i=function(t){var e=[],n=new RegExp(u),r=/^([^\[\]]*)/.exec(t);for(r[1]&&e.push(r[1]);null!==(r=n.exec(t));)e.push(r[1]);return e}(e);r(t,i,n)}else{var o=t[e];o?(Array.isArray(o)||(t[e]=[o]),t[e].push(n)):t[e]=n}return t}:function(t,e,n){return n=n.replace(/(\r)?\n/g,"\r\n"),n=encodeURIComponent(n),n=n.replace(/%20/g,"+"),t+(t?"&":"")+encodeURIComponent(e)+"="+n}),a=t&&t.elements?t.elements:[],c=Object.create(null),f=0;f<a.length;++f){var l=a[f];if((e.disabled||!l.disabled)&&l.name&&o.test(l.nodeName)&&!i.test(l.type)){var h=l.name,d=l.value;if("checkbox"!==l.type&&"radio"!==l.type||l.checked||(d=void 0),e.empty){if("checkbox"!==l.type||l.checked||(d=""),"radio"===l.type&&(c[l.name]||l.checked?l.checked&&(c[l.name]=!0):c[l.name]=!1),void 0==d&&"radio"==l.type)continue}else if(!d)continue;if("select-multiple"!==l.type)n=s(n,h,d);else{d=[];for(var p=l.options,m=!1,v=0;v<p.length;++v){var g=p[v],y=e.empty&&!g.value,w=g.value||y;g.selected&&w&&(m=!0,n=e.hash&&"[]"!==h.slice(h.length-2)?s(n,h+"[]",g.value):s(n,h,g.value))}!m&&e.empty&&(n=s(n,h,""))}}}if(e.empty)for(var h in c)c[h]||(n=s(n,h,""));return n}},{}],12:[function(t,e,n){!function(){function t(e,n,r){if("_root"==n)return r;if(e!==r)return function(t){return u||(u=t.matches?t.matches:t.webkitMatchesSelector?t.webkitMatchesSelector:t.mozMatchesSelector?t.mozMatchesSelector:t.msMatchesSelector?t.msMatchesSelector:t.oMatchesSelector?t.oMatchesSelector:o.matchesSelector)}(e).call(e,n)?e:e.parentNode?(s++,t(e.parentNode,n,r)):void 0}function n(t,e,n,r){c[t.id]||(c[t.id]={}),c[t.id][e]||(c[t.id][e]={}),c[t.id][e][n]||(c[t.id][e][n]=[]),c[t.id][e][n].push(r)}function r(t,e,n,r){if(c[t.id])if(e)if(r||n)if(r){if(c[t.id][e][n])for(var i=0;i<c[t.id][e][n].length;i++)if(c[t.id][e][n][i]===r){c[t.id][e][n].splice(i,1);break}}else delete c[t.id][e][n];else c[t.id][e]={};else for(var o in c[t.id])c[t.id].hasOwnProperty(o)&&(c[t.id][o]={})}function i(e,i,u,a){function l(e){return function(n){!function(e,n,r){if(c[e][r]){var i,u,a=n.target||n.srcElement,l={},h=0,d=0;s=0;for(i in c[e][r])c[e][r].hasOwnProperty(i)&&(u=t(a,i,f[e].element))&&o.matchesEvent(r,f[e].element,u,"_root"==i,n)&&(s++,c[e][r][i].match=u,l[s]=c[e][r][i]);for(n.stopPropagation=function(){n.cancelBubble=!0},h=0;h<=s;h++)if(l[h])for(d=0;d<l[h].length;d++){if(!1===l[h][d].call(l[h].match,n))return void o.cancel(n);if(n.cancelBubble)return}}}(d,n,e)}}if(this.element){e instanceof Array||(e=[e]),u||"function"!=typeof i||(u=i,i="_root");var h,d=this.id;for(h=0;h<e.length;h++)a?r(this,e[h],i,u):(c[d]&&c[d][e[h]]||o.addEvent(this,e[h],l(e[h])),n(this,e[h],i,u));return this}}function o(t,e){if(!(this instanceof o)){for(var n in f)if(f[n].element===t)return f[n];return a++,f[a]=new o(t,a),f[a]}this.element=t,this.id=e}var u,s=0,a=0,c={},f={};o.prototype.on=function(t,e,n){return i.call(this,t,e,n)},o.prototype.off=function(t,e,n){return i.call(this,t,e,n,!0)},o.matchesSelector=function(){},o.cancel=function(t){t.preventDefault(),t.stopPropagation()},o.addEvent=function(t,e,n){var r="blur"==e||"focus"==e;t.element.addEventListener(e,n,r)},o.matchesEvent=function(){return!0},void 0!==e&&e.exports&&(e.exports=o),window.Gator=o}()},{}],13:[function(t,n,r){!function(t){var r=function(t,e,n){for(var i in e)if(e.hasOwnProperty(i)){var o=i,u=e[i];if(void 0===u&&(u=""),null===u&&(u=""),void 0!==n&&(o=n+"["+i+"]"),u.constructor===Array)o+="[]";else if("object"==typeof u){r(t,u,o);continue}var s=t.elements.namedItem(o);if(s){switch(s.type||s[0].type){default:s.value=u;break;case"radio":case"checkbox":for(var a=0;a<s.length;a++)s[a].checked=u.indexOf(s[a].value)>-1;break;case"select-multiple":for(var c=u.constructor==Array?u:[u],f=0;f<s.options.length;f++)s.options[f].selected|=c.indexOf(s.options[f].value)>-1;break;case"select":case"select-one":s.value=u.toString()||u;break;case"date":s.value=new Date(u).toISOString().split("T")[0]}}}};"function"==typeof e&&"object"==typeof e.amd&&e.amd?e(function(){return r}):void 0!==n&&n.exports?n.exports=r:t.populate=r}(this)},{}],14:[function(t,e,n){var r=t("scroll-to");e.exports=function(t,e){if(e=e||{},"string"==typeof t&&(t=document.querySelector(t)),t)return r(0,function(t,e,n){var r=document.body,i=document.documentElement,o=t.getBoundingClientRect(),u=i.clientHeight,s=Math.max(r.scrollHeight,r.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight);e=e||0;var a;a="bottom"===n?o.bottom-u:"middle"===n?o.bottom-u/2-o.height/2:o.top;var c=s-u;return Math.min(a+e+window.pageYOffset,c)}(t,e.offset,e.align),e)}},{"scroll-to":15}],15:[function(t,e,n){var r=t("tween"),i=t("raf");e.exports=function(t,e,n){function o(){i(o),s.update()}n=n||{};var u=function(){var t=window.pageYOffset||document.documentElement.scrollTop,e=window.pageXOffset||document.documentElement.scrollLeft;return{top:t,left:e}}(),s=r(u).ease(n.ease||"out-circ").to({top:e,left:t}).duration(n.duration||1e3);return s.update(function(t){window.scrollTo(0|t.left,0|t.top)}),s.on("end",function(){o=function(){}}),o(),s}},{raf:7,tween:8}],16:[function(t,n,r){!function(t){"use strict";function r(){}function i(t,e){for(var n=t.length;n--;)if(t[n].listener===e)return n;return-1}function o(t){return function(){return this[t].apply(this,arguments)}}function u(t){return"function"==typeof t||t instanceof RegExp||!(!t||"object"!=typeof t)&&u(t.listener)}var s=r.prototype,a=t.EventEmitter;s.getListeners=function(t){var e,n,r=this._getEvents();if(t instanceof RegExp){e={};for(n in r)r.hasOwnProperty(n)&&t.test(n)&&(e[n]=r[n])}else e=r[t]||(r[t]=[]);return e},s.flattenListeners=function(t){var e,n=[];for(e=0;e<t.length;e+=1)n.push(t[e].listener);return n},s.getListenersAsObject=function(t){var e,n=this.getListeners(t);return n instanceof Array&&((e={})[t]=n),e||n},s.addListener=function(t,e){if(!u(e))throw new TypeError("listener must be a function");var n,r=this.getListenersAsObject(t),o="object"==typeof e;for(n in r)r.hasOwnProperty(n)&&-1===i(r[n],e)&&r[n].push(o?e:{listener:e,once:!1});return this},s.on=o("addListener"),s.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},s.once=o("addOnceListener"),s.defineEvent=function(t){return this.getListeners(t),this},s.defineEvents=function(t){for(var e=0;e<t.length;e+=1)this.defineEvent(t[e]);return this},s.removeListener=function(t,e){var n,r,o=this.getListenersAsObject(t);for(r in o)o.hasOwnProperty(r)&&-1!==(n=i(o[r],e))&&o[r].splice(n,1);return this},s.off=o("removeListener"),s.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},s.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},s.manipulateListeners=function(t,e,n){var r,i,o=t?this.removeListener:this.addListener,u=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(r=n.length;r--;)o.call(this,e,n[r]);else for(r in e)e.hasOwnProperty(r)&&(i=e[r])&&("function"==typeof i?o.call(this,r,i):u.call(this,r,i));return this},s.removeEvent=function(t){var e,n=typeof t,r=this._getEvents();if("string"===n)delete r[t];else if(t instanceof RegExp)for(e in r)r.hasOwnProperty(e)&&t.test(e)&&delete r[e];else delete this._events;return this},s.removeAllListeners=o("removeEvent"),s.emitEvent=function(t,e){var n,r,i,o,u=this.getListenersAsObject(t);for(o in u)if(u.hasOwnProperty(o))for(n=u[o].slice(0),i=0;i<n.length;i++)!0===(r=n[i]).once&&this.removeListener(t,r.listener),r.listener.apply(this,e||[])===this._getOnceReturnValue()&&this.removeListener(t,r.listener);return this},s.trigger=o("emitEvent"),s.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},s.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},s._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},s._getEvents=function(){return this._events||(this._events={})},r.noConflict=function(){return t.EventEmitter=a,r},"function"==typeof e&&e.amd?e(function(){return r}):"object"==typeof n&&n.exports?n.exports=r:t.EventEmitter=r}(this||{})},{}]},{},[1])}();
//# sourceMappingURL=forms-api.min.js.map