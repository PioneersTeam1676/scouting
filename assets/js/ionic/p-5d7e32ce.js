/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{a as t,g as o,c as e}from"./p-ed7a529f.js";class n{constructor(){this.m=new Map}reset(t){this.m=new Map(Object.entries(t))}get(t,o){const e=this.m.get(t);return void 0!==e?e:o}getBoolean(t,o=!1){const e=this.m.get(t);return void 0===e?o:"string"==typeof e?"true"===e:!!e}getNumber(t,o){const e=parseFloat(this.m.get(t));return isNaN(e)?void 0!==o?o:NaN:e}set(t,o){this.m.set(t,o)}}const i=new n,r="ionic:",s="ionic-persist-config",a=t=>c(t),d=(t,o)=>("string"==typeof t&&(o=t,t=void 0),a(t).includes(o)),c=(t=window)=>{if(void 0===t)return[];t.Ionic=t.Ionic||{};let o=t.Ionic.platforms;return null==o&&(o=t.Ionic.platforms=u(t),o.forEach((o=>t.document.documentElement.classList.add(`plt-${o}`)))),o},u=t=>{const o=i.get("platform");return Object.keys(g).filter((e=>{const n=null==o?void 0:o[e];return"function"==typeof n?n(t):g[e](t)}))},l=t=>!!b(t,/iPad/i)||!(!b(t,/Macintosh/i)||!m(t)),p=t=>b(t,/android|sink/i),m=t=>w(t,"(any-pointer:coarse)"),v=t=>h(t)||f(t),h=t=>!!(t.cordova||t.phonegap||t.PhoneGap),f=t=>{const o=t.Capacitor;return!!(null==o?void 0:o.isNative)},b=(t,o)=>o.test(t.navigator.userAgent),w=(t,o)=>{var e;return null===(e=t.matchMedia)||void 0===e?void 0:e.call(t,o).matches},g={ipad:l,iphone:t=>b(t,/iPhone/i),ios:t=>b(t,/iPhone|iPod/i)||l(t),android:p,phablet:t=>{const o=t.innerWidth,e=t.innerHeight,n=Math.min(o,e),i=Math.max(o,e);return n>390&&n<520&&i>620&&i<800},tablet:t=>{const o=t.innerWidth,e=t.innerHeight,n=Math.min(o,e),i=Math.max(o,e);return l(t)||(t=>p(t)&&!b(t,/mobile/i))(t)||n>460&&n<820&&i>780&&i<1400},cordova:h,capacitor:f,electron:t=>b(t,/electron/i),pwa:t=>{var o;return!(!(null===(o=t.matchMedia)||void 0===o?void 0:o.call(t,"(display-mode: standalone)").matches)&&!t.navigator.standalone)},mobile:m,mobileweb:t=>m(t)&&!v(t),desktop:t=>!m(t),hybrid:v};let O;const y=t=>t&&o(t)||O,j=(o={})=>{if("undefined"==typeof window)return;const n=window.document,a=window,u=a.Ionic=a.Ionic||{},l={};o._ael&&(l.ael=o._ael),o._rel&&(l.rel=o._rel),o._ce&&(l.ce=o._ce),t(l);const p=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},(t=>{try{const o=t.sessionStorage.getItem(s);return null!==o?JSON.parse(o):{}}catch(t){return{}}})(a)),{persistConfig:!1}),u.config),(t=>{const o={};return t.location.search.slice(1).split("&").map((t=>t.split("="))).map((([t,o])=>[decodeURIComponent(t),decodeURIComponent(o)])).filter((([t])=>{return t.substr(0,(o=r).length)===o;var o})).map((([t,o])=>[t.slice(6),o])).forEach((([t,e])=>{o[t]=e})),o})(a)),o);i.reset(p),i.getBoolean("persistConfig")&&((t,o)=>{try{t.sessionStorage.setItem(s,JSON.stringify(o))}catch(t){return}})(a,p),c(a),u.config=i,u.mode=O=i.get("mode",n.documentElement.getAttribute("mode")||(d(a,"ios")?"ios":"md")),i.set("mode",O),n.documentElement.setAttribute("mode",O),n.documentElement.classList.add(O),i.getBoolean("_testing")&&i.set("animated",!1);const m=t=>{var o;return null===(o=t.tagName)||void 0===o?void 0:o.startsWith("ION-")},v=t=>["ios","md"].includes(t);e((t=>{for(;t;){const o=t.mode||t.getAttribute("mode");if(o){if(v(o))return o;m(t)&&console.warn('Invalid ionic mode: "'+o+'", expected: "ios" or "md"')}t=t.parentElement}return O}))};export{d as a,y as b,i as c,a as g,j as i}