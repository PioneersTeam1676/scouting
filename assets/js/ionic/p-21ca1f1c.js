/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{w as i,B as a}from"./p-ed7a529f.js";import{r as n}from"./p-b5839dc2.js";const e="ionViewWillEnter",o="ionViewDidEnter",s="ionViewWillLeave",t="ionViewDidLeave",r="ionViewWillUnload",c=a=>new Promise(((n,e)=>{i((()=>{p(a),w(a).then((i=>{i.animation&&i.animation.destroy(),d(a),n(i)}),(i=>{d(a),e(i)}))}))})),p=i=>{const a=i.enteringEl,n=i.leavingEl;k(a,n,i.direction),i.showGoBack?a.classList.add("can-go-back"):a.classList.remove("can-go-back"),j(a,!1),a.style.setProperty("pointer-events","none"),n&&(j(n,!1),n.style.setProperty("pointer-events","none"))},w=async i=>{const n=await l(i);return n&&a.isBrowser?m(n,i):v(i)},d=i=>{const a=i.enteringEl,n=i.leavingEl;a.classList.remove("ion-page-invisible"),a.style.removeProperty("pointer-events"),void 0!==n&&(n.classList.remove("ion-page-invisible"),n.style.removeProperty("pointer-events"))},l=async i=>{if(i.leavingEl&&i.animated&&0!==i.duration)return i.animationBuilder?i.animationBuilder:"ios"===i.mode?(await import("./p-30cd5e7b.js")).iosTransitionAnimation:(await import("./p-49aba878.js")).mdTransitionAnimation},m=async(i,a)=>{await u(a,!0);const n=i(a.baseEl,a);g(a.enteringEl,a.leavingEl);const e=await f(n,a);return a.progressCallback&&a.progressCallback(void 0),e&&y(a.enteringEl,a.leavingEl),{hasCompleted:e,animation:n}},v=async i=>{const a=i.enteringEl,n=i.leavingEl;return await u(i,!1),g(a,n),y(a,n),{hasCompleted:!0}},u=async(i,a)=>{(void 0!==i.deepWait?i.deepWait:a)&&await Promise.all([V(i.enteringEl),V(i.leavingEl)]),await b(i.viewIsReady,i.enteringEl)},b=async(i,a)=>{i&&await i(a)},f=(i,a)=>{const n=a.progressCallback,e=new Promise((a=>{i.onFinish((i=>a(1===i)))}));return n?(i.progressStart(!0),n(i)):i.play(),e},g=(i,a)=>{h(a,s),h(i,e)},y=(i,a)=>{h(i,o),h(a,t)},h=(i,a)=>{if(i){const n=new CustomEvent(a,{bubbles:!1,cancelable:!1});i.dispatchEvent(n)}},P=()=>new Promise((i=>n((()=>n((()=>i())))))),V=async i=>{const a=i;if(a){if(null!=a.componentOnReady){if(null!=await a.componentOnReady())return}else if(null!=a.__registerHost){const i=new Promise((i=>n(i)));return void await i}await Promise.all(Array.from(a.children).map(V))}},j=(i,a)=>{a?(i.setAttribute("aria-hidden","true"),i.classList.add("ion-page-hidden")):(i.hidden=!1,i.removeAttribute("aria-hidden"),i.classList.remove("ion-page-hidden"))},k=(i,a,n)=>{void 0!==i&&(i.style.zIndex="back"===n?"99":"101"),void 0!==a&&(a.style.zIndex="100")},C=i=>{if(i.classList.contains("ion-page"))return i;return i.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||i};export{e as L,o as a,s as b,t as c,r as d,V as e,C as g,h as l,j as s,c as t,P as w}