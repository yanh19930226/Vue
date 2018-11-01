/**
 * vue-router v2.0.1
 * (c) 2016 Evan You
 * @license MIT
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.VueRouter=e()}(this,function(){"use strict";function t(t,e,n){if("/"===t.charAt(0))return t;if("?"===t.charAt(0)||"#"===t.charAt(0))return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var o=t.replace(/^\//,"").split("/"),i=0;i<o.length;i++){var a=o[i];"."!==a&&(".."===a?r.pop():r.push(a))}return""!==r[0]&&r.unshift(""),r.join("/")}function e(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var o=t.indexOf("?");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{path:t,query:n,hash:e}}function n(t){return t.replace(/\/\//g,"/")}function r(t,e){if(!t)throw new Error("[vue-router] "+e)}function o(t,e){t||"undefined"!=typeof console&&console.warn("[vue-router] "+e)}function i(t,e){if(void 0===e&&(e={}),t){var n;try{n=a(t)}catch(t){o(!1,t.message),n={}}for(var r in e)n[r]=e[r];return n}return e}function a(t){var e=Object.create(null);return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var n=t.replace(/\+/g," ").split("="),r=ct(n.shift()),o=n.length>0?ct(n.join("=")):null;void 0===e[r]?e[r]=o:Array.isArray(e[r])?e[r].push(o):e[r]=[e[r],o]}),e):e}function u(t){var e=t?Object.keys(t).sort().map(function(e){var n=t[e];if(void 0===n)return"";if(null===n)return ut(e);if(Array.isArray(n)){var r=[];return n.slice().forEach(function(t){void 0!==t&&(null===t?r.push(ut(e)):r.push(ut(e)+"="+ut(t)))}),r.join("&")}return ut(e)+"="+ut(n)}).filter(function(t){return t.length>0}).join("&"):null;return e?"?"+e:""}function c(t,e,n){var r={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:e.query||{},params:e.params||{},fullPath:p(e),matched:t?s(t):[]};return n&&(r.redirectedFrom=p(n)),Object.freeze(r)}function s(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function p(t){var e=t.path,n=t.query;void 0===n&&(n={});var r=t.hash;return void 0===r&&(r=""),(e||"/")+u(n)+r}function f(t,e){return e===st?t===e:!!e&&(t.path&&e.path?t.path.replace(pt,"")===e.path.replace(pt,"")&&t.hash===e.hash&&h(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&h(t.query,e.query)&&h(t.params,e.params)))}function h(t,e){void 0===t&&(t={}),void 0===e&&(e={});var n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&n.every(function(n){return String(t[n])===String(e[n])})}function l(t,e){return 0===t.path.indexOf(e.path)&&(!e.hash||t.hash===e.hash)&&d(t.query,e.query)}function d(t,e){for(var n in e)if(!(n in t))return!1;return!0}function y(n,r,o){var a="string"==typeof n?{path:n}:n;if(a.name||a._normalized)return a;var u=e(a.path||""),c=r&&r.path||"/",s=u.path?t(u.path,c,o):r&&r.path||"/",p=i(u.query,a.query),f=a.hash||u.hash;return f&&"#"!==f.charAt(0)&&(f="#"+f),{_normalized:!0,path:s,query:p,hash:f}}function v(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=v(e.children)))return e}}function m(t){m.installed||(m.installed=!0,Object.defineProperty(t.prototype,"$router",{get:function(){return this.$root._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this.$root._route}}),t.mixin({beforeCreate:function(){this.$options.router&&(this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current))}}),t.component("router-view",at),t.component("router-link",ht))}function g(t){for(var e,n=[],r=0,o=0,i="";null!=(e=bt.exec(t));){var a=e[0],u=e[1],c=e.index;if(i+=t.slice(o,c),o=c+a.length,u)i+=u[1];else{var s=t[o],p=e[2],f=e[3],h=e[4],l=e[5],d=e[6],y=e[7];i&&(n.push(i),i="");var v=null!=p&&null!=s&&s!==p,m="+"===d||"*"===d,g="?"===d||"*"===d,w=e[2]||"/",b=h||l||(y?".*":"[^"+w+"]+?");n.push({name:f||r++,prefix:p||"",delimiter:w,optional:g,repeat:m,partial:v,asterisk:!!y,pattern:E(b)})}}return o<t.length&&(i+=t.substr(o)),i&&n.push(i),n}function w(t){return k(g(t))}function b(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function x(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function k(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},a=r||{},u=a.pretty?b:encodeURIComponent,c=0;c<t.length;c++){var s=t[c];if("string"!=typeof s){var p,f=i[s.name];if(null==f){if(s.optional){s.partial&&(o+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(dt(f)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(p=u(f[h]),!e[c].test(p))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===h?s.prefix:s.delimiter)+p}}else{if(p=s.asterisk?x(f):u(f),!e[c].test(p))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+p+'"');o+=s.prefix+p}}else o+=s}return o}}function O(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function E(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function R(t,e){return t.keys=e,t}function j(t){return t.sensitive?"":"i"}function S(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return R(t,e)}function $(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(T(t[o],e,n).source);var i=new RegExp("(?:"+r.join("|")+")",j(n));return R(i,e)}function A(t,e,n){for(var r=g(t),o=_(r,n),i=0;i<r.length;i++)"string"!=typeof r[i]&&e.push(r[i]);return R(o,e)}function _(t,e){e=e||{};for(var n=e.strict,r=e.end!==!1,o="",i=t[t.length-1],a="string"==typeof i&&/\/$/.test(i),u=0;u<t.length;u++){var c=t[u];if("string"==typeof c)o+=O(c);else{var s=O(c.prefix),p="(?:"+c.pattern+")";c.repeat&&(p+="(?:"+s+p+")*"),p=c.optional?c.partial?s+"("+p+")?":"(?:"+s+"("+p+"))?":s+"("+p+")",o+=p}}return n||(o=(a?o.slice(0,-2):o)+"(?:\\/(?=$))?"),o+=r?"$":n&&a?"":"(?=\\/|$)",new RegExp("^"+o,j(e))}function T(t,e,n){return e=e||[],dt(e)?n||(n={}):(n=e,e=[]),t instanceof RegExp?S(t,e):dt(t)?$(t,e,n):A(t,e,n)}function q(t){var e=Object.create(null),n=Object.create(null);return t.forEach(function(t){C(e,n,t)}),{pathMap:e,nameMap:n}}function C(t,e,n,o,i){var a=n.path,u=n.name;r(null!=a,'"path" is required in a route configuration.');var c={path:P(a,o),components:n.components||{default:n.component},instances:{},name:u,parent:o,matchAs:i,redirect:n.redirect,beforeEnter:n.beforeEnter,meta:n.meta||{}};n.children&&n.children.forEach(function(n){C(t,e,n,c)}),n.alias&&(Array.isArray(n.alias)?n.alias.forEach(function(n){C(t,e,{path:n},o,c.path)}):C(t,e,{path:n.alias},o,c.path)),t[c.path]=c,u&&(e[u]=c)}function P(t,e){return t=t.replace(/\/$/,""),"/"===t[0]?t:null==e?t:n(e.path+"/"+t)}function U(t){function e(t,e,n){var r=y(t,e),o=r.name;if(o){var i=p[o];if(i)return r.path=V(i.path,r.params,'named route "'+o+'"'),a(i,r,n)}else if(r.path){r.params={};for(var u in s)if(L(u,r.params,r.path))return a(s[u],r,n)}return a(null,r)}function n(t,n){var i=t.redirect,u="function"==typeof i?i(c(t,n)):i;if("string"==typeof u&&(u={path:u}),!u||"object"!=typeof u)return o(!1,"invalid redirect option: "+JSON.stringify(u)),a(null,n);var s=u,f=s.name,h=s.path,l=n.query,d=n.hash,y=n.params;if(l=s.hasOwnProperty("query")?s.query:l,d=s.hasOwnProperty("hash")?s.hash:d,y=s.hasOwnProperty("params")?s.params:y,f){var v=p[f];return r(v,'redirect failed: named route "'+f+'" not found.'),e({_normalized:!0,name:f,query:l,hash:d,params:y},void 0,n)}if(h){var m=B(h,t),g=V(m,y,'redirect route with path "'+m+'"');return e({_normalized:!0,path:g,query:l,hash:d},void 0,n)}return o(!1,"invalid redirect option: "+JSON.stringify(u)),a(null,n)}function i(t,n,r){var o=V(r,n.params,'aliased route with path "'+r+'"'),i=e({_normalized:!0,path:o});if(i){var u=i.matched,c=u[u.length-1];return n.params=i.params,a(c,n)}return a(null,n)}function a(t,e,r){return t&&t.redirect?n(t,r||e):t&&t.matchAs?i(t,e,t.matchAs):c(t,e,r)}var u=q(t),s=u.pathMap,p=u.nameMap;return e}function L(t,e,n){var r,o,i=xt[t];i?(r=i.keys,o=i.regexp):(r=[],o=yt(t,r),xt[t]={keys:r,regexp:o});var a=n.match(o);if(!a)return!1;if(!e)return!0;for(var u=1,c=a.length;u<c;++u){var s=r[u-1],p="string"==typeof a[u]?decodeURIComponent(a[u]):a[u];s&&(e[s.name]=p)}return!0}function V(t,e,n){try{var o=kt[t]||(kt[t]=yt.compile(t));return o(e||{},{pretty:!0})}catch(t){return r(!1,"missing param for "+n+": "+t.message),""}}function B(e,n){return t(e,n.parent?n.parent.path:"/",!0)}function H(t,e,n){var r=function(o){o>=t.length?n():t[o]?e(t[o],function(){r(o+1)}):r(o+1)};r(0)}function I(t){if(!t)if(Ot){var e=document.querySelector("base");t=e?e.getAttribute("href"):"/"}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function M(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r&&t[n]===e[n];n++);return{activated:e.slice(n),deactivated:t.slice(n)}}function z(t){return D(t,function(t,e){var n=t&&t.beforeRouteLeave;if(n)return function(){return n.apply(e,arguments)}}).reverse()}function F(t,e,n){return D(t,function(t,r,o,i){var a=t&&t.beforeRouteEnter;if(a)return function(t,r,u){return a(t,r,function(t){u(t),"function"==typeof t&&e.push(function(){J(t,o.instances,i,n)})})}})}function J(t,e,n,r){e[n]?t(e[n]):r()&&setTimeout(function(){J(t,e,n,r)},16)}function N(t){return D(t,function(t,e,n,r){if("function"==typeof t&&!t.options)return function(e,i,a){var u=function(t){n.components[r]=t,a()},c=function(t){o(!1,"Failed to resolve async component "+r+": "+t),a(!1)},s=t(u,c);s&&"function"==typeof s.then&&s.then(u,c)}})}function D(t,e){return Array.prototype.concat.apply([],t.map(function(t){return Object.keys(t.components).map(function(n){return e(t.components[n],t.instances[n],t,n)})}))}function K(t){t&&window.sessionStorage.setItem(t,JSON.stringify({x:window.pageXOffset,y:window.pageYOffset}))}function X(t){if(t)return JSON.parse(window.sessionStorage.getItem(t))}function Y(t){var e=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{x:n.left-e.left,y:n.top-e.top}}function W(t){return Q(t.x)||Q(t.y)}function G(t){return{x:Q(t.x)?t.x:window.pageXOffset,y:Q(t.y)?t.y:window.pageYOffset}}function Q(t){return"number"==typeof t}function Z(t){var e=window.location.pathname;return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}function tt(t,e){var n=window.history;try{e?n.replaceState({key:St},"",t):(St=jt(),n.pushState({key:St},"",t)),K(St)}catch(n){window.location[e?"assign":"replace"](t)}}function et(t){tt(t,!0)}function nt(){var t=rt();return"/"===t.charAt(0)||(it("/"+t),!1)}function rt(){var t=window.location.href,e=t.indexOf("#");return e===-1?"":t.slice(e+1)}function ot(t){window.location.hash=t}function it(t){var e=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,e>=0?e:0)+"#"+t)}var at={name:"router-view",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,r=e.children,o=e.parent,i=e.data;i.routerView=!0;for(var a=o.$route,u=o._routerViewCache||(o._routerViewCache={}),c=0,s=!1;o;)o.$vnode&&o.$vnode.data.routerView&&c++,o._inactive&&(s=!0),o=o.$parent;i.routerViewDepth=c;var p=a.matched[c];if(!p)return t();var f=n.name,h=s?u[f]:u[f]=p.components[f];if(!s){var l=i.hook||(i.hook={});l.init=function(t){p.instances[f]=t.child},l.destroy=function(t){p.instances[f]===t.child&&(p.instances[f]=void 0)}}return t(h,i,r)}},ut=encodeURIComponent,ct=decodeURIComponent,st=c(null,{path:"/"}),pt=/\/$/,ft=[String,Object],ht={name:"router-link",props:{to:{type:ft,required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String},render:function(t){var e=this,r=this.$router,o=this.$route,i=y(this.to,o,this.append),a=r.match(i),u=a.redirectedFrom||a.fullPath,s=r.history.base,p=s?n(s+u):u,h={},d=this.activeClass||r.options.linkActiveClass||"router-link-active",m=i.path?c(null,i):a;h[d]=this.exact?f(o,m):l(o,m);var g={click:function(t){t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||0===t.button&&(t.preventDefault(),e.replace?r.replace(i):r.push(i))}},w={class:h};if("a"===this.tag)w.on=g,w.attrs={href:p};else{var b=v(this.$slots.default);if(b){var x=b.data||(b.data={});x.on=g;var k=x.attrs||(x.attrs={});k.href=p}else w.on=g}return t(this.tag,w,this.$slots.default)}},lt=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},dt=lt,yt=T,vt=g,mt=w,gt=k,wt=_,bt=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");yt.parse=vt,yt.compile=mt,yt.tokensToFunction=gt,yt.tokensToRegExp=wt;var xt=Object.create(null),kt=Object.create(null),Ot="undefined"!=typeof window,Et=Ot&&function(){var t=window.navigator.userAgent;return(t.indexOf("Android 2.")===-1&&t.indexOf("Android 4.0")===-1||t.indexOf("Mobile Safari")===-1||t.indexOf("Chrome")!==-1||t.indexOf("Windows Phone")!==-1)&&(window.history&&"pushState"in window.history)}(),Rt=function(t,e){this.router=t,this.base=I(e),this.current=st,this.pending=null};Rt.prototype.listen=function(t){this.cb=t},Rt.prototype.transitionTo=function(t,e){var n=this,r=this.router.match(t,this.current);this.confirmTransition(r,function(){n.updateRoute(r),e&&e(r),n.ensureURL()})},Rt.prototype.confirmTransition=function(t,e){var n=this,r=this.current;if(f(t,r))return void this.ensureURL();var o=M(this.current.matched,t.matched),i=o.deactivated,a=o.activated,u=[].concat(z(i),this.router.beforeHooks,a.map(function(t){return t.beforeEnter}),N(a));this.pending=t;var c=function(e,o){n.pending===t&&e(t,r,function(t){t===!1?n.ensureURL():"string"==typeof t||"object"==typeof t?n.push(t):o(t)})};H(u,c,function(){var r=[],o=F(a,r,function(){return n.current===t});H(o,c,function(){n.pending===t&&(n.pending=null,e(t),n.router.app.$nextTick(function(){r.forEach(function(t){return t()})}))})})},Rt.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach(function(n){n&&n(t,e)})};var jt=function(){return String(Date.now())},St=jt(),$t=function(t){function e(e,n){var r=this;t.call(this,e,n),this.transitionTo(Z(this.base));var o=e.options.scrollBehavior;window.addEventListener("popstate",function(t){St=t.state&&t.state.key;var e=r.current;r.transitionTo(Z(r.base),function(t){o&&r.handleScroll(t,e,!0)})}),o&&window.addEventListener("scroll",function(){K(St)})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t){var e=this,r=this.current;this.transitionTo(t,function(t){tt(n(e.base+t.fullPath)),e.handleScroll(t,r,!1)})},e.prototype.replace=function(t){var e=this,r=this.current;this.transitionTo(t,function(t){et(n(e.base+t.fullPath)),e.handleScroll(t,r,!1)})},e.prototype.ensureURL=function(){Z(this.base)!==this.current.fullPath&&et(n(this.base+this.current.fullPath))},e.prototype.handleScroll=function(t,e,n){var o=this.router;if(o.app){var i=o.options.scrollBehavior;i&&(r("function"==typeof i,"scrollBehavior must be a function"),o.app.$nextTick(function(){var r=X(St),o=i(t,e,n?r:null);if(o){var a="object"==typeof o;if(a&&"string"==typeof o.selector){var u=document.querySelector(o.selector);u?r=Y(u):W(o)&&(r=G(o))}else a&&W(o)&&(r=G(o));r&&window.scrollTo(r.x,r.y)}}))}},e}(Rt),At=function(t){function e(e,n,r){var o=this;t.call(this,e,n),r&&this.checkFallback()||(nt(),this.transitionTo(rt(),function(){window.addEventListener("hashchange",function(){o.onHashChange()})}))}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.checkFallback=function(){var t=Z(this.base);if(!/^\/#/.test(t))return window.location.replace(n(this.base+"/#"+t)),!0},e.prototype.onHashChange=function(){nt()&&this.transitionTo(rt(),function(t){it(t.fullPath)})},e.prototype.push=function(t){this.transitionTo(t,function(t){ot(t.fullPath)})},e.prototype.replace=function(t){this.transitionTo(t,function(t){it(t.fullPath)})},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(){rt()!==this.current.fullPath&&it(this.current.fullPath)},e}(Rt),_t=function(t){function e(e){t.call(this,e),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t){var e=this;this.transitionTo(t,function(t){e.stack=e.stack.slice(0,e.index+1).concat(t),e.index++})},e.prototype.replace=function(t){var e=this;this.transitionTo(t,function(t){e.stack=e.stack.slice(0,e.index).concat(t)})},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,function(){e.index=n,e.updateRoute(r)})}},e.prototype.ensureURL=function(){},e}(Rt),Tt=function(t){void 0===t&&(t={}),this.app=null,this.options=t,this.beforeHooks=[],this.afterHooks=[],this.match=U(t.routes||[]);var e=t.mode||"hash";this.fallback="history"===e&&!Et,this.fallback&&(e="hash"),Ot||(e="abstract"),this.mode=e},qt={currentRoute:{}};return qt.currentRoute.get=function(){return this.history&&this.history.current},Tt.prototype.init=function(t){var e=this;r(m.installed,"not installed. Make sure to call `Vue.use(VueRouter)` before creating root instance."),this.app=t;var n=this,o=n.mode,i=n.options,a=n.fallback;switch(o){case"history":this.history=new $t(this,i.base);break;case"hash":this.history=new At(this,i.base,a);break;case"abstract":this.history=new _t(this);break;default:r(!1,"invalid mode: "+o)}this.history.listen(function(t){e.app._route=t})},Tt.prototype.beforeEach=function(t){this.beforeHooks.push(t)},Tt.prototype.afterEach=function(t){this.afterHooks.push(t)},Tt.prototype.push=function(t){this.history.push(t)},Tt.prototype.replace=function(t){this.history.replace(t)},Tt.prototype.go=function(t){this.history.go(t)},Tt.prototype.back=function(){this.go(-1)},Tt.prototype.forward=function(){this.go(1)},Tt.prototype.getMatchedComponents=function(){return this.currentRoute?[].concat.apply([],this.currentRoute.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})})):[]},Object.defineProperties(Tt.prototype,qt),Tt.install=m,Ot&&window.Vue&&window.Vue.use(Tt),Tt});