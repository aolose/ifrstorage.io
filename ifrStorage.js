!function(e,s){"function"==typeof define&&define.amd?define(["exports"],s):"undefined"!=typeof exports?s(exports):(s(s={}),e.ifrStorage=s)}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:this,function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.stop=function(){t.forEach(function(e){window.removeEventListener("message",e)}),window.removeEventListener("message",s)};const t=[],c=[];const s=function(e){try{var s=JSON.parse(e.data);"iframeStorage.init"===s.type&&function(o,a){if(-1===c.indexOf(o)){c.push(o);const r={type:"iframeStorage.sync",localStorage:{},sessionStorage:{}},n=function(e){if(e.source===o)if(e.source.parent)try{var s=JSON.parse(e.data);if("iframeStorage.stop"===s.type)i();else if("iframeStorage"===s.name){const t=r[s.storage];switch(s.method){case"setItem":t[s.key]=s.value;break;case"removeItem":delete t[s.key];break;case"clear":Object.keys(t).forEach(function(e){delete t[e]})}a.scope&&(window[s.storage][a.scope]=JSON.stringify(t))}else"iframeStorage.sync"===s.type&&o.postMessage(JSON.stringify(r),"*")}catch(e){}else i()};if(t.push(n),window.addEventListener("message",n),a.localStorage)if(a.scope)try{Object.assign(r.localStorage,JSON.parse(localStorage[a.scope]))}catch(e){}else r.localStorage=localStorage;if(a.sessionStorage)if(a.scope)try{Object.assign(r.sessionStorage,JSON.parse(sessionStorage[a.scope]))}catch(e){}else r.sessionStorage=sessionStorage;o.postMessage(JSON.stringify(r),"*")}function i(){var e=t.indexOf(n);e!==-n&&(window.removeEventListener("message",n),t.splice(e,1));e=c.indexOf(o);-1!==e&&c.splice(e,1)}}(e.source,s)}catch(e){}};window.addEventListener("message",s)});