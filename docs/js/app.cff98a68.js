(function(e){function t(t){for(var r,a,c=t[0],i=t[1],u=t[2],l=0,f=[];l<c.length;l++)a=c[l],o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},s=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-a5d0f5f8":"a5919f73","chunk-22794cb2":"47832988","chunk-cd4e72f6":"a34f1329","chunk-b6459886":"157d087d"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-22794cb2":1,"chunk-cd4e72f6":1,"chunk-b6459886":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-a5d0f5f8":"31d6cfe0","chunk-22794cb2":"bbc5eff2","chunk-cd4e72f6":"93c14684","chunk-b6459886":"4807c93d"}[e]+".css",a=i.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===a))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){c=l[s],u=c.getAttribute("data-href");if(u===r||u===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.request=r,n(o)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=s);var u,l=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=c(e),u=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:f})},12e4);f.onerror=f.onload=u,l.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vUsers/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"navigation"}},[n("nav",{staticClass:"navbar navbar-default"},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-header"},[e._m(0),n("router-link",{staticClass:"navbar-brand",attrs:{to:"/about"}},[e._v("vUsers")])],1),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbar"}},[n("ul",{staticClass:"nav navbar-nav"},[n("li",[n("router-link",{attrs:{to:"/"}},[e._v("Users")])],1)])])])]),n("router-view")],1)])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar"}},[n("span",{staticClass:"sr-only"},[e._v("Toggle navigation")]),n("span",{staticClass:"icon-bar"}),n("span",{staticClass:"icon-bar"}),n("span",{staticClass:"icon-bar"})])}],s=n("2877"),c={},i=Object(s["a"])(c,a,o,!1,null,null,null);i.options.__file="App.vue";var u=i.exports,l=n("8c4f");r["a"].use(l["a"]);var f=new l["a"]({mode:"history",base:"/vUsers/",routes:[{path:"/",name:"users",component:function(){return Promise.all([n.e("chunk-a5d0f5f8"),n.e("chunk-22794cb2")]).then(n.bind(null,"ed81"))}},{path:"/user/:id",name:"user",component:function(){return Promise.all([n.e("chunk-a5d0f5f8"),n.e("chunk-cd4e72f6")]).then(n.bind(null,"1511"))}},{path:"/about",name:"about",component:function(){return n.e("chunk-b6459886").then(n.bind(null,"f820"))}}]}),d=n("7bb1"),p=n("9483");Object(p["a"])("".concat("/vUsers/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].use(d["a"]),r["a"].config.productionTip=!1,new r["a"]({router:f,render:function(e){return e(u)}}).$mount("#app")}});
//# sourceMappingURL=app.cff98a68.js.map