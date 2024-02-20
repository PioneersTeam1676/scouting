/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{g as t}from"./p-c61cc894.js";var i,s;!function(t){t.Heavy="HEAVY",t.Medium="MEDIUM",t.Light="LIGHT"}(i||(i={})),function(t){t.Success="SUCCESS",t.Warning="WARNING",t.Error="ERROR"}(s||(s={}));const n={getEngine(){const i=window.TapticEngine;if(i)return i;const s=t();return(null==s?void 0:s.isPluginAvailable("Haptics"))?s.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const i=t();return"web"!==(null==i?void 0:i.getPlatform())||"undefined"!=typeof navigator&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==t(),impact(t){const i=this.getEngine();if(!i)return;const s=this.isCapacitor()?t.style:t.style.toLowerCase();i.impact({style:s})},notification(t){const i=this.getEngine();if(!i)return;const s=this.isCapacitor()?t.type:t.type.toLowerCase();i.notification({type:s})},selection(){const t=this.isCapacitor()?i.Light:"light";this.impact({style:t})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},o=()=>n.available(),c=()=>{o()&&n.selection()},e=()=>{o()&&n.selectionStart()},a=()=>{o()&&n.selectionChanged()},r=()=>{o()&&n.selectionEnd()},h=t=>{o()&&n.impact(t)};export{i as I,e as a,a as b,c,h as d,r as h}