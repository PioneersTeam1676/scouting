/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{r as t,d as i,h as s,f as e,H as o}from"./p-ed7a529f.js";import{g as n}from"./p-2408c236.js";import{o as r,s as a}from"./p-b5839dc2.js";import{l as h,t as c,s as d,d as l,b as u,c as v}from"./p-21ca1f1c.js";import{b as f,c as m}from"./p-5d7e32ce.js";import{a as p}from"./p-a3f572a7.js";class w{constructor(t,i){this.component=t,this.params=i,this.state=1}async init(t){if(this.state=2,!this.element){const i=this.component;this.element=await p(this.delegate,t,i,["ion-page","ion-page-invisible"],this.params)}}_destroy(){r(3!==this.state,"view state must be ATTACHED");const t=this.element;t&&(this.delegate?this.delegate.removeViewFromDom(t.parentElement,t):t.remove()),this.nav=void 0,this.state=3}}const b=(t,i,s)=>!!t&&t.component===i&&a(t.params,s),g=(t,i)=>t?t instanceof w?t:new w(t,i):null,y=class{constructor(s){t(this,s),this.ionNavWillLoad=i(this,"ionNavWillLoad",7),this.ionNavWillChange=i(this,"ionNavWillChange",3),this.ionNavDidChange=i(this,"ionNavDidChange",3),this.transInstr=[],this.gestureOrAnimationInProgress=!1,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.didLoad=!1,this.delegate=void 0,this.swipeGesture=void 0,this.animated=!0,this.animation=void 0,this.rootParams=void 0,this.root=void 0}swipeGestureChanged(){this.gesture&&this.gesture.enable(!0===this.swipeGesture)}rootChanged(){void 0!==this.root&&!1!==this.didLoad&&(this.useRouter||void 0!==this.root&&this.setRoot(this.root,this.rootParams))}componentWillLoad(){if(this.useRouter=null!==document.querySelector("ion-router")&&null===this.el.closest("[no-router]"),void 0===this.swipeGesture){const t=f(this);this.swipeGesture=m.getBoolean("swipeBackEnabled","ios"===t)}this.ionNavWillLoad.emit()}async componentDidLoad(){this.didLoad=!0,this.rootChanged(),this.gesture=(await import("./p-cdc277a6.js")).createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged()}connectedCallback(){this.destroyed=!1}disconnectedCallback(){for(const t of this.views)h(t.element,l),t._destroy();this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=0,this.views.length=0,this.destroyed=!0}push(t,i,s,e){return this.insert(-1,t,i,s,e)}insert(t,i,s,e,o){return this.insertPages(t,[{component:i,componentProps:s}],e,o)}insertPages(t,i,s,e){return this.queueTrns({insertStart:t,insertViews:i,opts:s},e)}pop(t,i){return this.removeIndex(-1,1,t,i)}popTo(t,i,s){const e={removeStart:-1,removeCount:-1,opts:i};return"object"==typeof t&&t.component?(e.removeView=t,e.removeStart=1):"number"==typeof t&&(e.removeStart=t+1),this.queueTrns(e,s)}popToRoot(t,i){return this.removeIndex(1,-1,t,i)}removeIndex(t,i=1,s,e){return this.queueTrns({removeStart:t,removeCount:i,opts:s},e)}setRoot(t,i,s,e){return this.setPages([{component:t,componentProps:i}],s,e)}setPages(t,i,s){return null!=i||(i={}),!0!==i.animated&&(i.animated=!1),this.queueTrns({insertStart:0,insertViews:t,removeStart:0,removeCount:-1,opts:i},s)}setRouteId(t,i,s,e){const o=this.getActiveSync();if(b(o,t,i))return Promise.resolve({changed:!1,element:o.element});let n;const r=new Promise((t=>n=t));let a;const h={updateURL:!1,viewIsReady:t=>{let i;const s=new Promise((t=>i=t));return n({changed:!0,element:t,markVisible:async()=>{i(),await a}}),s}};if("root"===s)a=this.setRoot(t,i,h);else{const o=this.views.find((s=>b(s,t,i)));o?a=this.popTo(o,Object.assign(Object.assign({},h),{direction:"back",animationBuilder:e})):"forward"===s?a=this.push(t,i,Object.assign(Object.assign({},h),{animationBuilder:e})):"back"===s&&(a=this.setRoot(t,i,Object.assign(Object.assign({},h),{direction:"back",animated:!0,animationBuilder:e})))}return r}async getRouteId(){const t=this.getActiveSync();if(t)return{id:t.element.tagName,params:t.params,element:t.element}}async getActive(){return this.getActiveSync()}async getByIndex(t){return this.views[t]}async canGoBack(t){return this.canGoBackSync(t)}async getPrevious(t){return this.getPreviousSync(t)}getLength(){return this.views.length}getActiveSync(){return this.views[this.views.length-1]}canGoBackSync(t=this.getActiveSync()){return!(!t||!this.getPreviousSync(t))}getPreviousSync(t=this.getActiveSync()){if(!t)return;const i=this.views,s=i.indexOf(t);return s>0?i[s-1]:void 0}async queueTrns(t,i){var s,e;if(this.isTransitioning&&(null===(s=t.opts)||void 0===s?void 0:s.skipIfBusy))return!1;const o=new Promise(((i,s)=>{t.resolve=i,t.reject=s}));if(t.done=i,t.opts&&!1!==t.opts.updateURL&&this.useRouter){const i=document.querySelector("ion-router");if(i){const s=await i.canTransition();if(!1===s)return!1;if("string"==typeof s)return i.push(s,t.opts.direction||"back"),!1}}return 0===(null===(e=t.insertViews)||void 0===e?void 0:e.length)&&(t.insertViews=void 0),this.transInstr.push(t),this.nextTrns(),o}success(t,i){if(this.destroyed)this.fireError("nav controller was destroyed",i);else if(i.done&&i.done(t.hasCompleted,t.requiresTransition,t.enteringView,t.leavingView,t.direction),i.resolve(t.hasCompleted),!1!==i.opts.updateURL&&this.useRouter){const i=document.querySelector("ion-router");i&&i.navChanged("back"===t.direction?"back":"forward")}}failed(t,i){this.destroyed?this.fireError("nav controller was destroyed",i):(this.transInstr.length=0,this.fireError(t,i))}fireError(t,i){i.done&&i.done(!1,!1,t),i.reject&&!this.destroyed?i.reject(t):i.resolve(!1)}nextTrns(){if(this.isTransitioning)return!1;const t=this.transInstr.shift();return!!t&&(this.runTransition(t),!0)}async runTransition(t){try{this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(t);const i=this.getActiveSync(),s=this.getEnteringView(t,i);if(!i&&!s)throw new Error("no views in the stack to be removed");s&&1===s.state&&await s.init(this.el),this.postViewInit(s,i,t);const e=(t.enteringRequiresTransition||t.leavingRequiresTransition)&&s!==i;let o;e&&t.opts&&i&&("back"===t.opts.direction&&(t.opts.animationBuilder=t.opts.animationBuilder||(null==s?void 0:s.animationBuilder)),i.animationBuilder=t.opts.animationBuilder),o=e?await this.transition(s,i,t):{hasCompleted:!0,requiresTransition:!1},this.success(o,t),this.ionNavDidChange.emit()}catch(i){this.failed(i,t)}this.isTransitioning=!1,this.nextTrns()}prepareTI(t){var i,s,e;const o=this.views.length;if(null!==(i=t.opts)&&void 0!==i||(t.opts={}),null!==(s=(e=t.opts).delegate)&&void 0!==s||(e.delegate=this.delegate),void 0!==t.removeView){r(void 0!==t.removeStart,"removeView needs removeStart"),r(void 0!==t.removeCount,"removeView needs removeCount");const i=this.views.indexOf(t.removeView);if(i<0)throw new Error("removeView was not found");t.removeStart+=i}void 0!==t.removeStart&&(t.removeStart<0&&(t.removeStart=o-1),t.removeCount<0&&(t.removeCount=o-t.removeStart),t.leavingRequiresTransition=t.removeCount>0&&t.removeStart+t.removeCount===o),t.insertViews&&((t.insertStart<0||t.insertStart>o)&&(t.insertStart=o),t.enteringRequiresTransition=t.insertStart===o);const n=t.insertViews;if(!n)return;r(n.length>0,"length can not be zero");const a=n.map((t=>t instanceof w?t:"component"in t?g(t.component,null===t.componentProps?void 0:t.componentProps):g(t,void 0))).filter((t=>null!==t));if(0===a.length)throw new Error("invalid views to insert");for(const i of a){i.delegate=t.opts.delegate;const s=i.nav;if(s&&s!==this)throw new Error("inserted view was already inserted");if(3===i.state)throw new Error("inserted view was already destroyed")}t.insertViews=a}getEnteringView(t,i){const s=t.insertViews;if(void 0!==s)return s[s.length-1];const e=t.removeStart;if(void 0!==e){const s=this.views,o=e+t.removeCount;for(let t=s.length-1;t>=0;t--){const n=s[t];if((t<e||t>=o)&&n!==i)return n}}}postViewInit(t,i,s){var e,o,n;r(i||t,"Both leavingView and enteringView are null"),r(s.resolve,"resolve must be valid"),r(s.reject,"reject must be valid");const a=s.opts,{insertViews:c,removeStart:d,removeCount:f}=s;let m;if(void 0!==d&&void 0!==f){r(d>=0,"removeStart can not be negative"),r(f>=0,"removeCount can not be negative"),m=[];for(let s=d;s<d+f;s++){const e=this.views[s];void 0!==e&&e!==t&&e!==i&&m.push(e)}null!==(e=a.direction)&&void 0!==e||(a.direction="back")}const p=this.views.length+(null!==(o=null==c?void 0:c.length)&&void 0!==o?o:0)-(null!=f?f:0);if(r(p>=0,"final balance can not be negative"),0===p)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(c){let t=s.insertStart;for(const i of c)this.insertViewAt(i,t),t++;s.enteringRequiresTransition&&(null!==(n=a.direction)&&void 0!==n||(a.direction="forward"))}if(m&&m.length>0){for(const t of m)h(t.element,u),h(t.element,v),h(t.element,l);for(const t of m)this.destroyView(t)}}async transition(t,i,s){const e=s.opts,o=e.progressAnimation?t=>{void 0===t||this.gestureOrAnimationInProgress?this.sbAni=t:(this.gestureOrAnimationInProgress=!0,t.onFinish((()=>{this.gestureOrAnimationInProgress=!1}),{oneTimeCallback:!0}),t.progressEnd(0,0,0))}:void 0,n=f(this),r=t.element,a=i&&i.element,h=Object.assign(Object.assign({mode:n,showGoBack:this.canGoBackSync(t),baseEl:this.el,progressCallback:o,animated:this.animated&&m.getBoolean("animated",!0),enteringEl:r,leavingEl:a},e),{animationBuilder:e.animationBuilder||this.animation||m.get("navAnimation")}),{hasCompleted:d}=await c(h);return this.transitionFinish(d,t,i,e)}transitionFinish(t,i,s,e){const o=t?i:s;return o&&this.unmountInactiveViews(o),{hasCompleted:t,requiresTransition:!0,enteringView:i,leavingView:s,direction:e.direction}}insertViewAt(t,i){const s=this.views,e=s.indexOf(t);e>-1?(r(t.nav===this,"view is not part of the nav"),s.splice(e,1),s.splice(i,0,t)):(r(!t.nav,"nav is used"),t.nav=this,s.splice(i,0,t))}removeView(t){r(2===t.state||3===t.state,"view state should be loaded or destroyed");const i=this.views,s=i.indexOf(t);r(s>-1,"view must be part of the stack"),s>=0&&i.splice(s,1)}destroyView(t){t._destroy(),this.removeView(t)}unmountInactiveViews(t){if(this.destroyed)return;const i=this.views,s=i.indexOf(t);for(let t=i.length-1;t>=0;t--){const e=i[t],o=e.element;o&&(t>s?(h(o,l),this.destroyView(e)):t<s&&d(o,!0))}}canStart(){return!this.gestureOrAnimationInProgress&&!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.canGoBackSync()}onStart(){this.gestureOrAnimationInProgress=!0,this.pop({direction:"back",progressAnimation:!0})}onMove(t){this.sbAni&&this.sbAni.progressStep(t)}onEnd(t,i,s){if(this.sbAni){this.sbAni.onFinish((()=>{this.gestureOrAnimationInProgress=!1}),{oneTimeCallback:!0});let e=t?-.001:.001;t?e+=n([0,0],[.32,.72],[0,1],[1,1],i)[0]:(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),e+=n([0,0],[1,0],[.68,.28],[1,1],i)[0]),this.sbAni.progressEnd(t?1:0,e,s)}else this.gestureOrAnimationInProgress=!1}render(){return s("slot",{key:"654286a8a7ef03d4a22497eb51e781a9a8979774"})}get el(){return e(this)}static get watchers(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}};y.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}";const k=class{constructor(i){t(this,i),this.onClick=()=>((t,i,s,e,o)=>{const n=this.el.closest("ion-nav");if(n)if("forward"===i){if(void 0!==s)return n.push(s,e,{skipIfBusy:!0,animationBuilder:o})}else if("root"===i){if(void 0!==s)return n.setRoot(s,e,{skipIfBusy:!0,animationBuilder:o})}else if("back"===i)return n.pop({skipIfBusy:!0,animationBuilder:o});return Promise.resolve(!1)})(0,this.routerDirection,this.component,this.componentProps,this.routerAnimation),this.component=void 0,this.componentProps=void 0,this.routerDirection="forward",this.routerAnimation=void 0}render(){return s(o,{key:"a781794425ad0866705bc6691256184b93477a74",onClick:this.onClick})}get el(){return e(this)}};export{y as ion_nav,k as ion_nav_link}