!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/packs/",n(n.s=40)}({40:function(e,t){self.addEventListener("install",(function(e){e.waitUntil(caches.open("v1::offline").then((function(e){return e.addAll(["/offline.html"])})))})),self.addEventListener("activate",(function(e){e.waitUntil(caches.keys().then((function(e){return Promise.all(e.filter((function(e){return 0!==key.indexOf("v1::")})).map((function(e){return caches.delete(e)})))})))})),self.addEventListener("fetch",(function(e){var t=e.request;t.url.match(/^https?:\/\/example.com/)&&"GET"===t.method&&e.respondWith(fetch(t).catch((function(){caches.match(t).then((function(e){e||caches.match("/offline.html")}))})))})),self.addEventListener("activate",(function(e){e.waitUntil(caches.keys().then((function(e){return Promise.all(e.filter((function(e){return 0!==key.indexOf("v1::")})).map((function(e){return caches.delete(e)})))})))})),navigator.serviceWorker&&navigator.serviceWorker.register("/serviceworker.js",{scope:"./"}).then((function(e){console.log("[Companion]","Service worker registered!")}))}});
//# sourceMappingURL=serviceworker-551da1a1d838d13923ee.js.map