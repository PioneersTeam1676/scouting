/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{w as o}from"./p-7b30edcc.js";import{r as t}from"./p-b5839dc2.js";const r=(r,e,i)=>{let n;const s=()=>void 0!==e()&&void 0===r.label&&null!==i(),d=()=>{const t=e();if(void 0===t)return;if(!s())return void t.style.removeProperty("width");const c=i().scrollWidth;if(0===c&&null===t.offsetParent&&void 0!==o&&"IntersectionObserver"in o){if(void 0!==n)return;const o=n=new IntersectionObserver((t=>{1===t[0].intersectionRatio&&(d(),o.disconnect(),n=void 0)}),{threshold:.01,root:r});o.observe(t)}else t.style.setProperty("width",.75*c+"px")};return{calculateNotchWidth:()=>{s()&&t((()=>{d()}))},destroy:()=>{n&&(n.disconnect(),n=void 0)}}};export{r as c}