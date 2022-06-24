"use strict";(globalThis.webpackChunkth_v3=globalThis.webpackChunkth_v3||[]).push([[2922],{41978:(e,t,s)=>{s.d(t,{AM:()=>v});var i=s(27366),r=s(85015),n=s(93169),a=s(84652),l=s(32718),o=s(49861),h=(s(25243),s(69912)),c=s(85411),u=s(32551);const d=-1;let v=class extends r.Z{constructor(e){super(e),this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this.duration=(0,n.Z)("mapview-transitions-duration"),this.effects=[]}set effect(e){if(this._get("effect")!==(e=e||"")){this._set("effect",e);try{this._transitionTo(f(e))}catch(t){this._transitionTo([]),l.Z.getLogger(this.declaredClass).warn("Invalid Effect",{effect:e,error:t})}}}get hasEffects(){return this.transitioning||!!this.effects.length}set scale(e){this._updateForScale(e)}get transitioning(){return null!==this._to}canTransitionTo(e){try{return this.scale>0&&p(this._current,f(e),this.scale)}catch{return!1}}transitionStep(e,t){this._applyTimeTransition(e),this._updateForScale(t)}end(){this._applyTimeTransition(this.duration)}_transitionTo(e){this.scale>0&&p(this._current,e,this.scale)?(this._final=e,this._to=(0,a.d9)(e),function(e,t,s){var i,r;const n=e.length>t.length?e:t,a=e.length>t.length?t:e,l=a[a.length-1],o=null!=(i=null==l?void 0:l.scale)?i:s,h=null!=(r=null==l?void 0:l.effects)?r:[];for(let c=a.length;c<n.length;c++)a.push({scale:o,effects:[...h]});for(let c=0;c<n.length;c++)a[c].scale=a[c].scale===d?s:a[c].scale,n[c].scale=n[c].scale===d?s:n[c].scale,(0,u.uF)(a[c].effects,n[c].effects)}(this._current,this._to,this.scale),this._from=(0,a.d9)(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=e),this._set("effects",this._current[0]?(0,a.d9)(this._current[0].effects):[])}_applyTimeTransition(e){if(!(this._to&&this._from&&this._current&&this._final))return;this._time+=e;const t=Math.min(1,this._time/this.duration);for(let s=0;s<this._current.length;s++){const e=this._current[s],i=this._from[s],r=this._to[s];e.scale=_(i.scale,r.scale,t);for(let s=0;s<e.effects.length;s++){const n=e.effects[s],a=i.effects[s],l=r.effects[s];n.interpolate(a,l,t)}}1===t&&(this._current=this._final,this._set("effects",this._current[0]?(0,a.d9)(this._current[0].effects):[]),this._from=this._to=this._final=null)}_updateForScale(e){if(this._set("scale",e),0===this._current.length)return;const t=this._current,s=this._current.length-1;let i,r,n=1;if(1===t.length||e>=t[0].scale)r=i=t[0].effects;else if(e<=t[s].scale)r=i=t[s].effects;else for(let a=0;a<s;a++){const s=t[a],l=t[a+1];if(s.scale>=e&&l.scale<=e){n=(e-s.scale)/(l.scale-s.scale),i=s.effects,r=l.effects;break}}for(let a=0;a<this.effects.length;a++)this.effects[a].interpolate(i[a],r[a],n)}};function f(e){const t=(0,c.Q)(e)||[];return function(e){const t=e[0];return!!t&&"type"in t}(t)?[{scale:d,effects:t}]:t}function p(e,t,s){var i,r,n,a;return null==(i=e[0])||!i.effects||null==(r=t[0])||!r.effects||!(((null==(n=e[0])?void 0:n.scale)===d||(null==(a=t[0])?void 0:a.scale)===d)&&(e.length>1||t.length>1)&&s<=0)&&(0,u.AS)(e[0].effects,t[0].effects)}function _(e,t,s){return e+(t-e)*s}(0,i._)([(0,o.Cb)()],v.prototype,"_to",void 0),(0,i._)([(0,o.Cb)()],v.prototype,"duration",void 0),(0,i._)([(0,o.Cb)({value:""})],v.prototype,"effect",null),(0,i._)([(0,o.Cb)({readOnly:!0})],v.prototype,"effects",void 0),(0,i._)([(0,o.Cb)({readOnly:!0})],v.prototype,"hasEffects",null),(0,i._)([(0,o.Cb)({value:0})],v.prototype,"scale",null),(0,i._)([(0,o.Cb)({readOnly:!0})],v.prototype,"transitioning",null),v=(0,i._)([(0,h.j)("esri.layers.effects.EffectView")],v)},33624:(e,t,s)=>{s.d(t,{W:()=>a});var i=s(23588),r=s(41978),n=s(87422);class a extends n.s{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this.children=[],this._effectView=null}get blendMode(){return this._blendMode}set blendMode(e){this._blendMode=e,this.requestRender()}get clips(){return this._clips}set clips(e){this._clips=e,this.children.forEach((t=>t.clips=e))}get computedEffects(){var e,t;return null!=(e=null==(t=this._effectView)?void 0:t.effects)?e:null}get effect(){var e,t;return null!=(e=null==(t=this._effectView)?void 0:t.effect)?e:""}set effect(e){(this._effectView||e)&&(this._effectView||(this._effectView=new r.AM),this._effectView.effect=e,this.requestRender())}updateTransitionProperties(e,t){super.updateTransitionProperties(e,t),this._effectView&&(this._effectView.transitionStep(e,t),this._effectView.transitioning&&this.requestRender())}doRender(e){const t=this.createRenderParams(e);this.renderChildren(t)}addChild(e){return this.addChildAt(e,this.children.length)}addChildAt(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.children.length;if(!e)return e;if(this.contains(e))return e;this._needsSort=!0;const s=e.parent;return s&&s!==this&&s.removeChild(e),t>=this.children.length?this.children.push(e):this.children.splice(t,0,e),this._childrenSet.add(e),e.parent=this,e.stage=this.stage,this!==this.stage&&(e.clips=this.clips),this.requestRender(),e}contains(e){return this._childrenSet.has(e)}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const e of this.children)this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null;this.children.length=0}removeChild(e){return this.contains(e)?this.removeChildAt(this.children.indexOf(e)):e}removeChildAt(e){if(e<0||e>=this.children.length)return null;this._needsSort=!0;const t=this.children.splice(e,1)[0];return this._childrenSet.delete(t),this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null,t}sortChildren(e){this._needsSort&&(this.children.sort(e),this._needsSort=!1)}_createTransforms(){return{dvs:(0,i.c)()}}onAttach(){super.onAttach();const e=this.stage;for(const t of this.children)t.stage=e}onDetach(){super.onDetach();for(const e of this.children)e.stage=null}renderChildren(e){for(const t of this.children)t.beforeRender(e);for(const t of this.children)t.processRender(e);for(const t of this.children)t.afterRender(e)}createRenderParams(e){return{...e,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:e.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition}}}},87422:(e,t,s)=>{s.d(t,{s:()=>o});var i=s(91505),r=s(93169),n=s(92026),a=s(66978);const l=1/(0,r.Z)("mapview-transitions-duration");class o extends i.Z{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this._stage=null,this._visible=!0}get clips(){return this._clips}set clips(e){this._clips=e,this.requestRender()}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(e){this._opacity!==e&&(this._opacity=Math.min(1,Math.max(e,0)),this.requestRender())}get stage(){return this._stage}set stage(e){if(this._stage===e)return;const t=this._stage;this._stage=e,e?this._stage.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):t.trashDisplayObject(this)}get transforms(){return this._getTransforms()}_getTransforms(){return(0,n.Wi)(this._transforms)&&(this._transforms=this._createTransforms()),this._transforms}get visible(){return this._visible}set visible(e){this._visible!==e&&(this._visible=e,this.requestRender())}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=(0,a.hh)(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=(0,a.hh)(),this.requestRender()),this._fadeOutResolver.promise}beforeRender(e){this.updateTransitionProperties(e.deltaTime,e.state.scale)}afterRender(e){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&0===this.computedOpacity&&(this._fadeOutResolver(),this._fadeOutResolver=null)}remove(){var e;null==(e=this.parent)||e.removeChild(this)}setTransform(e){}processRender(e){this.stage&&this.computedVisible&&this.doRender(e)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.onDetach(),this.emit("detach")}updateTransitionProperties(e,t){if(this.fadeTransitionEnabled){const t=this._fadeOutResolver||!this.visible?0:this.opacity,s=this.computedOpacity;if(s===t)this.computedVisible=this.visible;else{const i=e*l;this.computedOpacity=s>t?Math.max(t,s-i):Math.min(t,s+i),this.computedVisible=this.computedOpacity>0;const r=t===this.computedOpacity;this.inFadeTransition=!r,r||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}onAttach(){}onDetach(){}doRender(e){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}},38999:(e,t,s)=>{var i,r;function n(e){switch(e){case"left":return i.Left;case"right":return i.Right;case"center":case"justify":return i.Center}}function a(e){switch(e){case"top":return r.Top;case"middle":return r.Center;case"baseline":return r.Baseline;case"bottom":return r.Bottom}}function l(e){switch(e){case"above-left":case"esriServerPointLabelPlacementAboveLeft":return[i.Right,r.Bottom];case"above-center":case"above-along":case"esriServerPointLabelPlacementAboveCenter":case"esriServerLinePlacementAboveAlong":return[i.Center,r.Bottom];case"above-right":case"esriServerPointLabelPlacementAboveRight":return[i.Left,r.Bottom];case"center-left":case"esriServerPointLabelPlacementCenterLeft":return[i.Right,r.Center];case"center-center":case"center-along":case"esriServerPointLabelPlacementCenterCenter":case"esriServerLinePlacementCenterAlong":case"always-horizontal":case"esriServerPolygonPlacementAlwaysHorizontal":return[i.Center,r.Center];case"center-right":case"esriServerPointLabelPlacementCenterRight":return[i.Left,r.Center];case"below-left":case"esriServerPointLabelPlacementBelowLeft":return[i.Right,r.Top];case"below-center":case"below-along":case"esriServerPointLabelPlacementBelowCenter":case"esriServerLinePlacementBelowAlong":return[i.Center,r.Top];case"below-right":case"esriServerPointLabelPlacementBelowRight":return[i.Left,r.Top];default:return console.debug(`Found invalid placement type ${e}`),[i.Center,r.Center]}}function o(e){switch(e){case i.Right:return-1;case i.Center:return 0;case i.Left:return 1;default:return console.debug(`Found invalid horizontal alignment ${e}`),0}}function h(e){switch(e){case r.Top:return 1;case r.Center:return 0;case r.Bottom:case r.Baseline:return-1;default:return console.debug(`Found invalid vertical alignment ${e}`),0}}function c(e){switch(e){case"left":return i.Left;case"right":return i.Right;case"center":case"justify":return i.Center}}function u(e){switch(e){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}s.d(t,{Hd:()=>c,M7:()=>i,NS:()=>u,TR:()=>r,b7:()=>a,g:()=>o,kH:()=>n,qv:()=>l,tf:()=>h}),function(e){e[e.Left=-1]="Left",e[e.Center=0]="Center",e[e.Right=1]="Right"}(i||(i={})),function(e){e[e.Top=1]="Top",e[e.Center=0]="Center",e[e.Bottom=-1]="Bottom",e[e.Baseline=2]="Baseline"}(r||(r={}))},54815:(e,t,s)=>{s.d(t,{Gq:()=>_,a:()=>f,dk:()=>d,jj:()=>a,m2:()=>l,mE:()=>v,qr:()=>p});var i=s(10064),r=s(38999),n=s(80613);function a(e,t){switch(e){case n.LW.FILL:return d.from(t);case n.LW.LINE:return f.from(t);case n.LW.MARKER:return v.from(t);case n.LW.TEXT:return p.from(t);case n.LW.LABEL:return _.from(t);default:throw new Error(`Unable to createMaterialKey for unknown geometryType ${e}`)}}class l{constructor(e){this._data=0,this._data=e}static load(e){const t=this.shared;return t.data=e,t}set data(e){this._data=e}get data(){return this._data}get geometryType(){return this.bits(8,11)}set geometryType(e){this.setBits(e,8,11)}get mapAligned(){return!!this.bit(20)}set mapAligned(e){this.setBit(20,e)}get sdf(){return!!this.bit(11)}set sdf(e){this.setBit(11,e)}get pattern(){return!!this.bit(12)}set pattern(e){this.setBit(12,e)}get textureBinding(){return this.bits(0,8)}set textureBinding(e){this.setBits(e,0,8)}get geometryTypeString(){switch(this.geometryType){case n.LW.FILL:return"fill";case n.LW.MARKER:return"marker";case n.LW.LINE:return"line";case n.LW.TEXT:return"text";case n.LW.LABEL:return"label";default:throw new i.Z(`Unable to handle unknown geometryType: ${this.geometryType}`)}}setBit(e,t){const s=1<<e;t?this._data|=s:this._data&=~s}bit(e){return(this._data&1<<e)>>e}setBits(e,t,s){for(let i=t,r=0;i<s;i++,r++)this.setBit(i,0!=(e&1<<r))}bits(e,t){let s=0;for(let i=e,r=0;i<t;i++,r++)s|=this.bit(i)<<r;return s}hasVV(){return!1}setVV(e,t){}getVariation(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf}}getVariationHash(){return this._data&~(7&this.textureBinding)}}l.shared=new l(0);const o=e=>class extends e{get vvSizeMinMaxValue(){return 0!==this.bit(16)}set vvSizeMinMaxValue(e){this.setBit(16,e)}get vvSizeScaleStops(){return 0!==this.bit(17)}set vvSizeScaleStops(e){this.setBit(17,e)}get vvSizeFieldStops(){return 0!==this.bit(18)}set vvSizeFieldStops(e){this.setBit(18,e)}get vvSizeUnitValue(){return 0!==this.bit(19)}set vvSizeUnitValue(e){this.setBit(19,e)}hasVV(){return super.hasVV()||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}setVV(e,t){super.setVV(e,t);const s=function(e,t){const s=n.X.SIZE_FIELD_STOPS|n.X.SIZE_MINMAX_VALUE|n.X.SIZE_SCALE_STOPS|n.X.SIZE_UNIT_VALUE,i=(e&(n.mf.FIELD_TARGETS_OUTLINE|n.mf.MINMAX_TARGETS_OUTLINE|n.mf.SCALE_TARGETS_OUTLINE|n.mf.UNIT_TARGETS_OUTLINE))>>>4;return t.isOutline||t.isOutlinedFill?s&i:s&~i}(e,t)&e;this.vvSizeMinMaxValue=!!(s&n.X.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(s&n.X.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(s&n.X.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(s&n.X.SIZE_SCALE_STOPS)}},h=e=>class extends e{get vvRotation(){return 0!==this.bit(15)}set vvRotation(e){this.setBit(15,e)}hasVV(){return super.hasVV()||this.vvRotation}setVV(e,t){super.setVV(e,t),this.vvRotation=!t.isOutline&&!!(e&n.X.ROTATION)}},c=e=>class extends e{get vvColor(){return 0!==this.bit(13)}set vvColor(e){this.setBit(13,e)}hasVV(){return super.hasVV()||this.vvColor}setVV(e,t){super.setVV(e,t),this.vvColor=!t.isOutline&&!!(e&n.X.COLOR)}},u=e=>class extends e{get vvOpacity(){return 0!==this.bit(14)}set vvOpacity(e){this.setBit(14,e)}hasVV(){return super.hasVV()||this.vvOpacity}setVV(e,t){super.setVV(e,t),this.vvOpacity=!t.isOutline&&!!(e&n.X.OPACITY)}};class d extends(c(u(o(l)))){static load(e){const t=this.shared;return t.data=e,t}static from(e){const t=this.load(0);return t.geometryType=n.LW.FILL,t.dotDensity="dot-density"===e.stride.fill,t.simple="simple"===e.stride.fill,t.outlinedFill=e.isOutlinedFill,t.dotDensity||t.setVV(e.vvFlags,e),t.data}getVariation(){return{...super.getVariation(),dotDensity:this.dotDensity,outlinedFill:this.outlinedFill,simple:this.simple,vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}get dotDensity(){return!!this.bit(15)}set dotDensity(e){this.setBit(15,e)}get simple(){return!!this.bit(22)}set simple(e){this.setBit(22,e)}get outlinedFill(){return!!this.bit(21)}set outlinedFill(e){this.setBit(21,e)}}d.shared=new d(0);class v extends(c(u(h(o(l))))){static load(e){const t=this.shared;return t.data=e,t}static from(e){const t=this.load(0);return t.geometryType=n.LW.MARKER,t.setVV(e.vvFlags,e),t.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}v.shared=new v(0);class f extends(c(u(o(l)))){static load(e){const t=this.shared;return t.data=e,t}static from(e){const t=this.load(0);return t.geometryType=n.LW.LINE,t.setVV(e.vvFlags,e),t.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}f.shared=new f(0);class p extends(c(u(h(o(l))))){static load(e){const t=this.shared;return t.data=e,t}static from(e){const t=this.load(0);return t.geometryType=n.LW.TEXT,t.setVV(e.vvFlags,e),t.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}p.shared=new p(0);class _ extends(o(l)){static load(e){const t=this.shared;return t.data=e,t}static from(e){const t=this.load(0);return t.geometryType=n.LW.LABEL,t.setVV(e.vvFlags,e),t.mapAligned=(0,r.NS)(e.placement),t.data}getVariation(){return{...super.getVariation(),vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}_.shared=new _(0)}}]);
//# sourceMappingURL=2922.28871b7a.chunk.js.map