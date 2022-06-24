"use strict";(globalThis.webpackChunkth_v3=globalThis.webpackChunkth_v3||[]).push([[8423],{79347:(e,t,r)=>{r.d(t,{e:()=>o});var n,i,s,a={exports:{}};n=a,i=function(){function e(e,r,i){i=i||2;var s,a,o,c,u,h,v,d=r&&r.length,f=d?r[0]*i:e.length,p=t(e,0,f,i,!0),y=[];if(!p||p.next===p.prev)return y;if(d&&(p=l(e,r,p,i)),e.length>80*i){s=o=e[0],a=c=e[1];for(var x=i;x<f;x+=i)(u=e[x])<s&&(s=u),(h=e[x+1])<a&&(a=h),u>o&&(o=u),h>c&&(c=h);v=0!==(v=Math.max(o-s,c-a))?1/v:0}return n(p,y,i,s,a,v),y}function t(e,t,r,n,i){var s,a;if(i===T(e,t,r,n)>0)for(s=t;s<r;s+=n)a=L(s,e[s],e[s+1],a);else for(s=r-n;s>=t;s-=n)a=L(s,e[s],e[s+1],a);if(a&&g(a,a.next)){var o=a.next;M(a),a=o}return a}function r(e,t){if(!e)return e;t||(t=e);var r,n=e;do{if(r=!1,n.steiner||!g(n,n.next)&&0!==m(n.prev,n,n.next))n=n.next;else{var i=n.prev;if(M(n),(n=t=i)===n.next)break;r=!0}}while(r||n!==t);return t}function n(e,t,l,c,u,h,v){if(e){!v&&h&&d(e,c,u,h);for(var f,p,y=e;e.prev!==e.next;)if(f=e.prev,p=e.next,h?s(e,c,u,h):i(e))t.push(f.i/l),t.push(e.i/l),t.push(p.i/l),M(e),e=p.next,y=p.next;else if((e=p)===y){v?1===v?n(e=a(r(e),t,l),t,l,c,u,h,2):2===v&&o(e,t,l,c,u,h):n(r(e),t,l,c,u,h,1);break}}}function i(e){var t=e.prev,r=e,n=e.next;if(m(t,r,n)>=0)return!1;for(var i=e.next.next;i!==e.prev;){if(y(t.x,t.y,r.x,r.y,n.x,n.y,i.x,i.y)&&m(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function s(e,t,r,n){var i=e.prev,s=e,a=e.next;if(m(i,s,a)>=0)return!1;for(var o=i.x<s.x?i.x<a.x?i.x:a.x:s.x<a.x?s.x:a.x,l=i.y<s.y?i.y<a.y?i.y:a.y:s.y<a.y?s.y:a.y,c=i.x>s.x?i.x>a.x?i.x:a.x:s.x>a.x?s.x:a.x,u=i.y>s.y?i.y>a.y?i.y:a.y:s.y>a.y?s.y:a.y,h=f(o,l,t,r,n),v=f(c,u,t,r,n),d=e.prevZ,p=e.nextZ;d&&d.z>=h&&p&&p.z<=v;){if(d!==e.prev&&d!==e.next&&y(i.x,i.y,s.x,s.y,a.x,a.y,d.x,d.y)&&m(d.prev,d,d.next)>=0)return!1;if(d=d.prevZ,p!==e.prev&&p!==e.next&&y(i.x,i.y,s.x,s.y,a.x,a.y,p.x,p.y)&&m(p.prev,p,p.next)>=0)return!1;p=p.nextZ}for(;d&&d.z>=h;){if(d!==e.prev&&d!==e.next&&y(i.x,i.y,s.x,s.y,a.x,a.y,d.x,d.y)&&m(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;p&&p.z<=v;){if(p!==e.prev&&p!==e.next&&y(i.x,i.y,s.x,s.y,a.x,a.y,p.x,p.y)&&m(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function a(e,t,n){var i=e;do{var s=i.prev,a=i.next.next;!g(s,a)&&S(s,i,i.next,a)&&V(s,a)&&V(a,s)&&(t.push(s.i/n),t.push(i.i/n),t.push(a.i/n),M(i),M(i.next),i=e=a),i=i.next}while(i!==e);return r(i)}function o(e,t,i,s,a,o){var l=e;do{for(var c=l.next.next;c!==l.prev;){if(l.i!==c.i&&x(l,c)){var u=w(l,c);return l=r(l,l.next),u=r(u,u.next),n(l,t,i,s,a,o),void n(u,t,i,s,a,o)}c=c.next}l=l.next}while(l!==e)}function l(e,n,i,s){var a,o,l,u=[];for(a=0,o=n.length;a<o;a++)(l=t(e,n[a]*s,a<o-1?n[a+1]*s:e.length,s,!1))===l.next&&(l.steiner=!0),u.push(p(l));for(u.sort(c),a=0;a<u.length;a++)i=r(i=h(u[a],i),i.next);return i}function c(e,t){return e.x-t.x}function u(e){if(e.next.prev===e)return e;let t=e;for(;;){const r=t.next;if(r.prev===t||r===t||r===e)break;t=r}return t}function h(e,t){var n=function(e,t){var r,n=t,i=e.x,s=e.y,a=-1/0;do{if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){var o=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(o<=i&&o>a){if(a=o,o===i){if(s===n.y)return n;if(s===n.next.y)return n.next}r=n.x<n.next.x?n:n.next}}n=n.next}while(n!==t);if(!r)return null;if(i===a)return r;var l,c=r,u=r.x,h=r.y,d=1/0;n=r;do{i>=n.x&&n.x>=u&&i!==n.x&&y(s<h?i:a,s,u,h,s<h?a:i,s,n.x,n.y)&&(l=Math.abs(s-n.y)/(i-n.x),V(n,e)&&(l<d||l===d&&(n.x>r.x||n.x===r.x&&v(r,n)))&&(r=n,d=l)),n=n.next}while(n!==c);return r}(e,t);if(!n)return t;var i=w(n,e),s=r(n,n.next);let a=u(i);return r(a,a.next),s=u(s),u(t===n?s:t)}function v(e,t){return m(e.prev,e,t.prev)<0&&m(t.next,e,e.next)<0}function d(e,t,r,n){var i=e;do{null===i.z&&(i.z=f(i.x,i.y,t,r,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,function(e){var t,r,n,i,s,a,o,l,c=1;do{for(r=e,e=null,s=null,a=0;r;){for(a++,n=r,o=0,t=0;t<c&&(o++,n=n.nextZ);t++);for(l=c;o>0||l>0&&n;)0!==o&&(0===l||!n||r.z<=n.z)?(i=r,r=r.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:e=i,i.prevZ=s,s=i;r=n}s.nextZ=null,c*=2}while(a>1)}(i)}function f(e,t,r,n,i){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-r)*i)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-n)*i)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function p(e){var t=e,r=e;do{(t.x<r.x||t.x===r.x&&t.y<r.y)&&(r=t),t=t.next}while(t!==e);return r}function y(e,t,r,n,i,s,a,o){return(i-a)*(t-o)-(e-a)*(s-o)>=0&&(e-a)*(n-o)-(r-a)*(t-o)>=0&&(r-a)*(s-o)-(i-a)*(n-o)>=0}function x(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){var r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&S(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}(e,t)&&(V(e,t)&&V(t,e)&&function(e,t){var r=e,n=!1,i=(e.x+t.x)/2,s=(e.y+t.y)/2;do{r.y>s!=r.next.y>s&&r.next.y!==r.y&&i<(r.next.x-r.x)*(s-r.y)/(r.next.y-r.y)+r.x&&(n=!n),r=r.next}while(r!==e);return n}(e,t)&&(m(e.prev,e,t.prev)||m(e,t.prev,t))||g(e,t)&&m(e.prev,e,e.next)>0&&m(t.prev,t,t.next)>0)}function m(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function g(e,t){return e.x===t.x&&e.y===t.y}function S(e,t,r,n){var i=_(m(e,t,r)),s=_(m(e,t,n)),a=_(m(r,n,e)),o=_(m(r,n,t));return i!==s&&a!==o||!(0!==i||!b(e,r,t))||!(0!==s||!b(e,n,t))||!(0!==a||!b(r,e,n))||!(0!==o||!b(r,t,n))}function b(e,t,r){return t.x<=Math.max(e.x,r.x)&&t.x>=Math.min(e.x,r.x)&&t.y<=Math.max(e.y,r.y)&&t.y>=Math.min(e.y,r.y)}function _(e){return e>0?1:e<0?-1:0}function V(e,t){return m(e.prev,e,e.next)<0?m(e,t,e.next)>=0&&m(e,e.prev,t)>=0:m(e,t,e.prev)<0||m(e,e.next,t)<0}function w(e,t){var r=new z(e.i,e.x,e.y),n=new z(t.i,t.x,t.y),i=e.next,s=t.prev;return e.next=t,t.prev=e,r.next=i,i.prev=r,n.next=r,r.prev=n,s.next=n,n.prev=s,n}function L(e,t,r,n){var i=new z(e,t,r);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function M(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function z(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function T(e,t,r,n){for(var i=0,s=t,a=r-n;s<r;s+=n)i+=(e[a]-e[s])*(e[s+1]+e[a+1]),a=s;return i}return e.deviation=function(e,t,r,n){var i=t&&t.length,s=i?t[0]*r:e.length,a=Math.abs(T(e,0,s,r));if(i)for(var o=0,l=t.length;o<l;o++){var c=t[o]*r,u=o<l-1?t[o+1]*r:e.length;a-=Math.abs(T(e,c,u,r))}var h=0;for(o=0;o<n.length;o+=3){var v=n[o]*r,d=n[o+1]*r,f=n[o+2]*r;h+=Math.abs((e[v]-e[f])*(e[d+1]-e[v+1])-(e[v]-e[d])*(e[f+1]-e[v+1]))}return 0===a&&0===h?0:Math.abs((h-a)/a)},e.flatten=function(e){for(var t=e[0][0].length,r={vertices:[],holes:[],dimensions:t},n=0,i=0;i<e.length;i++){for(var s=0;s<e[i].length;s++)for(var a=0;a<t;a++)r.vertices.push(e[i][s][a]);i>0&&(n+=e[i-1].length,r.holes.push(n))}return r},e},void 0!==(s=i())&&(n.exports=s);const o=a.exports},71277:(e,t,r)=>{function n(e){return e=e||globalThis.location.hostname,c.some((t=>{var r;return null!=(null==(r=e)?void 0:r.match(t))}))}function i(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(s)||null!=t.match(o)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(a)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}r.d(t,{XO:()=>n,pJ:()=>i});const s=/^devext.arcgis.com$/,a=/^qaext.arcgis.com$/,o=/^[\w-]*\.mapsdevext.arcgis.com$/,l=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,s,a,/^jsapps.esri.com$/,o,l]},13200:(e,t,r)=>{r.d(t,{Or:()=>o,k3:()=>c,s5:()=>l,vX:()=>u});Number.POSITIVE_INFINITY;const n=Math.PI,i=128/n,s=1/Math.LN2;function a(e,t){return(e%=t)>=0?e:e+t}function o(e){return a(e*i,256)}function l(e){return a(.7111111111111111*e,256)}function c(e){return Math.log(e)*s}function u(e,t,r){return e>=t&&e<=r||e>=r&&e<=t}},38999:(e,t,r)=>{var n,i;function s(e){switch(e){case"left":return n.Left;case"right":return n.Right;case"center":case"justify":return n.Center}}function a(e){switch(e){case"top":return i.Top;case"middle":return i.Center;case"baseline":return i.Baseline;case"bottom":return i.Bottom}}function o(e){switch(e){case"above-left":case"esriServerPointLabelPlacementAboveLeft":return[n.Right,i.Bottom];case"above-center":case"above-along":case"esriServerPointLabelPlacementAboveCenter":case"esriServerLinePlacementAboveAlong":return[n.Center,i.Bottom];case"above-right":case"esriServerPointLabelPlacementAboveRight":return[n.Left,i.Bottom];case"center-left":case"esriServerPointLabelPlacementCenterLeft":return[n.Right,i.Center];case"center-center":case"center-along":case"esriServerPointLabelPlacementCenterCenter":case"esriServerLinePlacementCenterAlong":case"always-horizontal":case"esriServerPolygonPlacementAlwaysHorizontal":return[n.Center,i.Center];case"center-right":case"esriServerPointLabelPlacementCenterRight":return[n.Left,i.Center];case"below-left":case"esriServerPointLabelPlacementBelowLeft":return[n.Right,i.Top];case"below-center":case"below-along":case"esriServerPointLabelPlacementBelowCenter":case"esriServerLinePlacementBelowAlong":return[n.Center,i.Top];case"below-right":case"esriServerPointLabelPlacementBelowRight":return[n.Left,i.Top];default:return console.debug(`Found invalid placement type ${e}`),[n.Center,i.Center]}}function l(e){switch(e){case n.Right:return-1;case n.Center:return 0;case n.Left:return 1;default:return console.debug(`Found invalid horizontal alignment ${e}`),0}}function c(e){switch(e){case i.Top:return 1;case i.Center:return 0;case i.Bottom:case i.Baseline:return-1;default:return console.debug(`Found invalid vertical alignment ${e}`),0}}function u(e){switch(e){case"left":return n.Left;case"right":return n.Right;case"center":case"justify":return n.Center}}function h(e){switch(e){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}r.d(t,{Hd:()=>u,M7:()=>n,NS:()=>h,TR:()=>i,b7:()=>a,g:()=>l,kH:()=>s,qv:()=>o,tf:()=>c}),function(e){e[e.Left=-1]="Left",e[e.Center=0]="Center",e[e.Right=1]="Right"}(n||(n={})),function(e){e[e.Top=1]="Top",e[e.Center=0]="Center",e[e.Bottom=-1]="Bottom",e[e.Baseline=2]="Baseline"}(i||(i={}))},54815:(e,t,r)=>{r.d(t,{Gq:()=>y,a:()=>f,dk:()=>v,jj:()=>a,m2:()=>o,mE:()=>d,qr:()=>p});var n=r(10064),i=r(38999),s=r(80613);function a(e,t){switch(e){case s.LW.FILL:return v.from(t);case s.LW.LINE:return f.from(t);case s.LW.MARKER:return d.from(t);case s.LW.TEXT:return p.from(t);case s.LW.LABEL:return y.from(t);default:throw new Error(`Unable to createMaterialKey for unknown geometryType ${e}`)}}class o{constructor(e){this._data=0,this._data=e}static load(e){const t=this.shared;return t.data=e,t}set data(e){this._data=e}get data(){return this._data}get geometryType(){return this.bits(8,11)}set geometryType(e){this.setBits(e,8,11)}get mapAligned(){return!!this.bit(20)}set mapAligned(e){this.setBit(20,e)}get sdf(){return!!this.bit(11)}set sdf(e){this.setBit(11,e)}get pattern(){return!!this.bit(12)}set pattern(e){this.setBit(12,e)}get textureBinding(){return this.bits(0,8)}set textureBinding(e){this.setBits(e,0,8)}get geometryTypeString(){switch(this.geometryType){case s.LW.FILL:return"fill";case s.LW.MARKER:return"marker";case s.LW.LINE:return"line";case s.LW.TEXT:return"text";case s.LW.LABEL:return"label";default:throw new n.Z(`Unable to handle unknown geometryType: ${this.geometryType}`)}}setBit(e,t){const r=1<<e;t?this._data|=r:this._data&=~r}bit(e){return(this._data&1<<e)>>e}setBits(e,t,r){for(let n=t,i=0;n<r;n++,i++)this.setBit(n,0!=(e&1<<i))}bits(e,t){let r=0;for(let n=e,i=0;n<t;n++,i++)r|=this.bit(n)<<i;return r}hasVV(){return!1}setVV(e,t){}getVariation(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf}}getVariationHash(){return this._data&~(7&this.textureBinding)}}o.shared=new o(0);const l=e=>class extends e{get vvSizeMinMaxValue(){return 0!==this.bit(16)}set vvSizeMinMaxValue(e){this.setBit(16,e)}get vvSizeScaleStops(){return 0!==this.bit(17)}set vvSizeScaleStops(e){this.setBit(17,e)}get vvSizeFieldStops(){return 0!==this.bit(18)}set vvSizeFieldStops(e){this.setBit(18,e)}get vvSizeUnitValue(){return 0!==this.bit(19)}set vvSizeUnitValue(e){this.setBit(19,e)}hasVV(){return super.hasVV()||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}setVV(e,t){super.setVV(e,t);const r=function(e,t){const r=s.X.SIZE_FIELD_STOPS|s.X.SIZE_MINMAX_VALUE|s.X.SIZE_SCALE_STOPS|s.X.SIZE_UNIT_VALUE,n=(e&(s.mf.FIELD_TARGETS_OUTLINE|s.mf.MINMAX_TARGETS_OUTLINE|s.mf.SCALE_TARGETS_OUTLINE|s.mf.UNIT_TARGETS_OUTLINE))>>>4;return t.isOutline||t.isOutlinedFill?r&n:r&~n}(e,t)&e;this.vvSizeMinMaxValue=!!(r&s.X.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(r&s.X.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(r&s.X.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(r&s.X.SIZE_SCALE_STOPS)}},c=e=>class extends e{get vvRotation(){return 0!==this.bit(15)}set vvRotation(e){this.setBit(15,e)}hasVV(){return super.hasVV()||this.vvRotation}setVV(e,t){super.setVV(e,t),this.vvRotation=!t.isOutline&&!!(e&s.X.ROTATION)}},u=e=>class extends e{get vvColor(){return 0!==this.bit(13)}set vvColor(e){this.setBit(13,e)}hasVV(){return super.hasVV()||this.vvColor}setVV(e,t){super.setVV(e,t),this.vvColor=!t.isOutline&&!!(e&s.X.COLOR)}},h=e=>class extends e{get vvOpacity(){return 0!==this.bit(14)}set vvOpacity(e){this.setBit(14,e)}hasVV(){return super.hasVV()||this.vvOpacity}setVV(e,t){super.setVV(e,t),this.vvOpacity=!t.isOutline&&!!(e&s.X.OPACITY)}};class v extends(u(h(l(o)))){static load(e){const t=this.shared;return t.data=e,t}static from(e){const t=this.load(0);return t.geometryType=s.LW.FILL,t.dotDensity="dot-density"===e.stride.fill,t.simple="simple"===e.stride.fill,t.outlinedFill=e.isOutlinedFill,t.dotDensity||t.setVV(e.vvFlags,e),t.data}getVariation(){return{...super.getVariation(),dotDensity:this.dotDensity,outlinedFill:this.outlinedFill,simple:this.simple,vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}get dotDensity(){return!!this.bit(15)}set dotDensity(e){this.setBit(15,e)}get simple(){return!!this.bit(22)}set simple(e){this.setBit(22,e)}get outlinedFill(){return!!this.bit(21)}set outlinedFill(e){this.setBit(21,e)}}v.shared=new v(0);class d extends(u(h(c(l(o))))){static load(e){const t=this.shared;return t.data=e,t}static from(e){const t=this.load(0);return t.geometryType=s.LW.MARKER,t.setVV(e.vvFlags,e),t.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}d.shared=new d(0);class f extends(u(h(l(o)))){static load(e){const t=this.shared;return t.data=e,t}static from(e){const t=this.load(0);return t.geometryType=s.LW.LINE,t.setVV(e.vvFlags,e),t.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}f.shared=new f(0);class p extends(u(h(c(l(o))))){static load(e){const t=this.shared;return t.data=e,t}static from(e){const t=this.load(0);return t.geometryType=s.LW.TEXT,t.setVV(e.vvFlags,e),t.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}p.shared=new p(0);class y extends(l(o)){static load(e){const t=this.shared;return t.data=e,t}static from(e){const t=this.load(0);return t.geometryType=s.LW.LABEL,t.setVV(e.vvFlags,e),t.mapAligned=(0,i.NS)(e.placement),t.data}getVariation(){return{...super.getVariation(),vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}y.shared=new y(0)},81735:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(27366),i=r(41691),s=r(49861),a=(r(63780),r(93169),r(25243),r(69912));let o=class extends i.r{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};(0,n._)([(0,s.Cb)({readOnly:!0})],o.prototype,"supportsTileUpdates",null),(0,n._)([(0,s.Cb)({constructOnly:!0})],o.prototype,"remoteClient",void 0),(0,n._)([(0,s.Cb)({constructOnly:!0})],o.prototype,"service",void 0),(0,n._)([(0,s.Cb)()],o.prototype,"spatialReference",null),(0,n._)([(0,s.Cb)({constructOnly:!0})],o.prototype,"tileInfo",void 0),(0,n._)([(0,s.Cb)({constructOnly:!0})],o.prototype,"tileStore",void 0),o=(0,n._)([(0,a.j)("esri.views.2d.layers.features.processors.BaseProcessor")],o);const l=o},3561:(e,t,r)=>{r.r(t),r.d(t,{default:()=>V});var n=r(27366),i=r(75746),s=(r(10064),r(93169)),a=r(32718),o=r(92026),l=r(66978),c=(r(25243),r(63780),r(75366),r(69912)),u=r(48732),h=r(78952),v=r(84328),d=r(72774),f=r(74017),p=r(61909),y=r(69813),x=r(27301),m=r(81735);class g{constructor(e){this._remoteClient=e,this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null}destroy(){}async fetchResource(e,t){const r=this._resourceMap,n=r.get(e);if(n)return n;let i=this._inFlightResourceMap.get(e);if(i)return i;try{i=this._remoteClient.invoke("tileRenderer.fetchResource",{url:e},{...t}),this._inFlightResourceMap.set(e,i),i.then((t=>(this._inFlightResourceMap.delete(e),r.set(e,t),t)))}catch(s){return(0,l.D_)(s)?null:{width:0,height:0}}return i}getResource(e){var t;return null!=(t=this._resourceMap.get(e))?t:null}}function S(e,t){return(!e.minScale||e.minScale>=t)&&(!e.maxScale||e.maxScale<=t)}function b(e){const t=e.message,r={message:{data:{},tileKey:t.tileKey,tileKeyOrigin:t.tileKeyOrigin},transferList:new Array};for(const n in t.data){const e=t.data[n];if(r.message.data[n]=null,(0,o.pC)(e)){const t=e.stride,i=e.indices.slice(0),s=e.vertices.slice(0),a=e.records.slice(0),l={stride:t,indices:i,vertices:s,records:a,metrics:(0,o.yw)(e.metrics,(e=>e.slice(0)))};r.transferList.push(i,s,a),r.message.data[n]=l}}return r}a.Z.getLogger("esri.views.2d.layers.features.processors.SymbolProcessor");let _=class extends m.Z{constructor(){super(...arguments),this.type="symbol",this._matchers={feature:null,aggregate:null},this._bufferData=new Map,this._bufferIds=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]),this._resourceManagerProxy=new g(this.remoteClient)}destroy(){this._resourceManagerProxy.destroy()}get supportsTileUpdates(){return!0}forEachBufferId(e){this._bufferIds.forEach((t=>{t.forEach(e)}))}async update(e,t){const r=t.schema.processors[0];if("symbol"!==r.type)return;const n=(0,u.Hg)(this._schema,r);(0,u.uD)(n,"mesh")&&((0,s.Z)("esri-2d-update-debug")&&console.debug("Applying Update - Processor:",n),e.mesh=!0,e.why.mesh.push("Symbology changed"),this._schema=r,this._factory=this._createFactory(r),this._factory.update(r,this.tileStore.tileScheme.tileInfo))}onTileMessage(e,t,r,n){return(0,l.k_)(n),this._onTileData(e,t,r,n)}onTileClear(e){return this._bufferData.delete(e.key.id),this._bufferIds.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:{clear:!0}})}onTileError(e,t,r){const n=r.signal,i={tileKey:e.id,error:t};return this.remoteClient.invoke("tileRenderer.onTileError",i,{signal:n})}onTileUpdate(e){for(const t of e.removed)this._bufferData.has(t.key.id)&&this._bufferData.delete(t.key.id),this._bufferIds.has(t.key.id)&&this._bufferIds.delete(t.key.id);for(const t of e.added)this._bufferData.forEach((e=>{for(const r of e)r.message.tileKey===t.id&&this._updateTileMesh("append",t,b(r),[],!1,!1,null)}))}_addBufferData(e,t){this._bufferData.has(e)||this._bufferData.set(e,[]),this._bufferData.get(e).push(b(t))}_createFactory(e){const{geometryType:t,objectIdField:r,fields:n}=this.service,i={geometryType:t,fields:n,spatialReference:h.Z.fromJSON(this.spatialReference)},s=new p.Wr(((e,t)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",e,t)),this.tileStore.tileScheme.tileInfo),{matcher:a,aggregateMatcher:l}=e.mesh;return this._store=s,this._matchers.feature=(0,y.fL)(a,s,i,this._resourceManagerProxy),this._matchers.aggregate=(0,o.yw)(l,(e=>(0,y.fL)(e,s,i,this._resourceManagerProxy))),new f.j(t,r,s)}async _onTileData(e,t,r,n){(0,l.k_)(n);const{type:i,addOrUpdate:s,remove:a}=t,c=t.end,u=!!this._schema.mesh.sortKey;if(!s){const t={type:i,addOrUpdate:null,remove:a,clear:!1,end:c,sort:u};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},n)}const h=this._processFeatures(e,s,r,n);try{const r=await h;if((0,o.Wi)(r)){const t={type:i,addOrUpdate:null,remove:a,clear:!1,end:c,sort:u};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},n)}const s=[];for(const t of r){let r=!1;const n=t.message.bufferIds,i=e.key.id,a=t.message.tileKey;if(i!==a&&(0,o.pC)(n)){if(!this.tileStore.get(a)){this._addBufferData(i,t),s.push(t);continue}let e=this._bufferIds.get(a);e||(e=new Set,this._bufferIds.set(a,e));const o=Array.from(n);for(const t of o){if(e.has(t)){r=!0;break}e.add(t)}}r||(this._addBufferData(i,t),s.push(t))}await(0,l.$6)(s.map((r=>{const s=e.key.id===r.message.tileKey,a=s?t.remove:[],o=s&&t.end;return this._updateTileMesh(i,e,r,a,o,t.clear,n.signal)})))}catch(v){this._handleError(e,v,n)}}async _updateTileMesh(e,t,r,n,i,s,a){const c=e,u=r.message.tileKey,h=!!this._schema.mesh.sortKey;u!==t.key.id&&(i=!1);const v=(0,o.yw)(r,(e=>e.message)),d=(0,o.yw)(r,(e=>e.transferList))||[],f={type:c,addOrUpdate:v,remove:n,clear:!1,end:i,sort:h},p={transferList:(0,o.Wg)(d)||[],signal:a};return(0,l.k_)(p),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:u,data:f},p)}async _processFeatures(e,t,r,n){if((0,o.Wi)(t)||!t.hasFeatures)return null;const i={transform:e.transform,hasZ:!1,hasM:!1},s=this._factory,a={viewingMode:"",scale:e.scale},c=await this._matchers.feature,u=await this._matchers.aggregate;(0,l.k_)(n);const h=this._getLabelInfos(e,t);return await s.analyze(t.getCursor(),this._resourceManagerProxy,c,u,i,a),(0,l.k_)(n),this._writeFeatureSet(e,t,i,h,s,r)}_writeFeatureSet(e,t,r,n,i,s){const a=t.getSize(),l=new d._(e.key.id,{features:a,records:a,metrics:0},this._schema.mesh.matcher.stride,s,!0),c={viewingMode:"",scale:e.scale},u=t.getCursor();for(;u.next();)try{const t=u.getDisplayId(),s=(0,o.pC)(n)?n.get(t):null;i.writeCursor(l,u,r,c,e.level,s,this._resourceManagerProxy)}catch(v){}const h=e.tileInfoView.tileInfo.isWrappable;return l.serialize(h)}_handleError(e,t,r){if(!(0,l.D_)(t)){const n={tileKey:e.id,error:t.message};return this.remoteClient.invoke("tileRenderer.onTileError",n,{signal:r.signal})}}_getLabelingSchemaForScale(e){const t=this._schema.mesh.labels;if((0,o.Wi)(t))return null;if("subtype"===t.type){const r={type:"subtype",classes:{}};let n=!1;for(const i in t.classes){const s=t.classes[i].filter((t=>S(t,e.scale)));n=n||!!s.length,r.classes[i]=s}return n?r:null}const r=t.classes.filter((t=>S(t,e.scale)));return r.length?{type:"simple",classes:r}:null}_getLabels(e,t){if("subtype"===t.type){var r;const n=this.service.subtypeField,i=(0,o.s3)(n,"Expected to find subtype Field"),s=e.readAttribute(i);return null==s?[]:null!=(r=t.classes[s])?r:[]}return t.classes}_getLabelInfos(e,t){const r=this._getLabelingSchemaForScale(e);if((0,o.Wi)(r))return null;const n=new Map,s=t.getCursor();for(;s.next();){const e=s.getDisplayId(),t=[],a=(0,v.nE)(e),o=a&&1!==s.readAttribute("cluster_count")?"aggregate":"feature",l=this._getLabels(s,r);for(const r of l){if(r.target!==o)continue;const n=s.getStorage(),l=a&&"feature"===o?n.getComputedStringAtIndex(s.readAttribute("referenceId"),r.fieldIndex):n.getComputedStringAtIndex(e,r.fieldIndex);if(!l)continue;const c=(0,i.E)(l.toString()),u=c[0],h=c[1];this._store.getMosaicItem(r.symbol,(0,x._)(u)).then((e=>{t[r.index]={glyphs:e.glyphMosaicItems,rtl:h,index:r.index}}))}n.set(e,t)}return n}};_=(0,n._)([(0,c.j)("esri.views.2d.layers.features.processors.SymbolProcessor")],_);const V=_},98125:(e,t,r)=>{r.d(t,{xS:()=>m,B3:()=>x});var n=r(79815),i=r(80613),s=r(54815);const a={marker:i.LW.MARKER,fill:i.LW.FILL,line:i.LW.LINE,text:i.LW.TEXT};class o{constructor(e,t,r,n){const i={minScale:null==t?void 0:t.minScale,maxScale:null==t?void 0:t.maxScale},o=function(e){return e.minScale||e.maxScale?e.minScale+"-"+e.maxScale:""}(i);this.layers=e,this.data=t,this.hash=this._createHash()+o,this.rendererKey=r;const l={isOutline:!1,isOutlinedFill:!1,placement:null,stride:{fill:"default"},vvFlags:r};for(const c of e){const e=a[c.type];c.materialKey=(0,s.jj)(e,l),c.maxVVSize=n,c.scaleInfo=i,c.templateHash+=o}}get type(){return"expanded-cim"}_createHash(){let e="";for(const t of this.layers)e+=t.templateHash;return e}}var l=r(71277),c=r(10064),u=r(66978),h=r(35995),v=r(70032),d=r(53283),f=r(86423);async function p(e,t,r){if(!e.name)return Promise.reject(new c.Z("style-symbol-reference-name-missing","Missing name in style symbol reference"));if(e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName)return async function(e,t){const n=f.wm.replace(/\{SymbolName\}/gi,e.name);try{const e=await(0,f.EJ)(n,t);return(0,f.KV)(e.data)}catch(r){return(0,u.k_)(r),null}}(e,r);try{return async function(e,t,r,n){const i=e.data,s={portal:r&&r.portal||v.Z.getDefault(),url:(0,h.mN)(e.baseUrl),origin:"portal-item"},a=i.items.find((e=>e.name===t));if(!a)throw new c.Z("symbolstyleutils:symbol-name-not-found",`The symbol name '${t}' could not be found`,{symbolName:t});let o=(0,d.f)((0,f.v9)(a,"cimRef"),s);(0,l.XO)()&&(o=(0,l.pJ)(o));try{const e=await(0,f.EJ)(o,n);return(0,f.KV)(e.data)}catch(p){return(0,u.k_)(p),null}}(await(0,f.n2)(e,t,r),e.name,t,r)}catch(n){return(0,u.k_)(n),null}}const y=async(e,t,r)=>new o(await(0,n.c)(e.data,t,r),e.data,e.rendererKey,e.maxVVSize),x=async(e,t,r,n)=>{if(!e)return null;if("cim"===e.type)return y(e,t,r);if("web-style"===e.type){const i={type:"cim",data:await p(e,null,n),rendererKey:e.rendererKey,maxVVSize:e.maxVVSize};return y(i,t,r)}return e};function m(e){if(!e)return null;const{type:t,cim:r,url:n,materialHash:i}=e,s={cim:r,type:t,mosaicHash:i,url:n,size:null,dashTemplate:null,path:null,text:null,fontName:null};switch(t){case"marker":s.size=e.size,s.path=e.path;break;case"line":s.dashTemplate=e.dashTemplate;break;case"text":s.text=e.text,s.fontName=e.fontName}return s}}}]);
//# sourceMappingURL=8423.be17f88a.chunk.js.map