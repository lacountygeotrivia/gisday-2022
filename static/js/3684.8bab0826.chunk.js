"use strict";(globalThis.webpackChunkth_v3=globalThis.webpackChunkth_v3||[]).push([[3684],{53684:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var s=i(27366),r=i(44055),n=i(81608),a=i(8537),l=(i(32718),i(25243),i(63780),i(93169),i(75366),i(69912)),o=i(34999),p=i(9014),h=i(49818),d=i(95986),u=i(75391),c=i(43634),y=i(67581);let v=class extends((0,d.y)(y.Z)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,t){if(!this.graphicsViews.length)return null;const i=this.graphicsViews.reverse().map((t=>t.hitTest(e)));return(await Promise.all(i)).flat().filter(((e,t)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[t]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))}update(e){if(this.graphicsViews)for(const t of this.graphicsViews)t.processUpdate(e)}attach(){this.handles.add([(0,a.S1)(this.layer,"featureCollections",(e=>{this._clear();for(const{popupInfo:t,featureSet:i,layerDefinition:s}of e){const e=h.default.fromJSON(i),a=new n.Z(e.features),l=s.drawingInfo,o=t?r.Z.fromJSON(t):null,d=(0,p.i)(l.renderer),y=new c.Z({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:a,renderer:d,container:new u.Z(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=y,this._popupTemplates.set(y,o),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=d.symbol):this.layer.lineSymbol=d.symbol:this.layer.polygonSymbol=d.symbol,this.graphicsViews.push(y),this.container.addChild(y.container)}})),(0,a.S1)(this.layer,"polygonSymbol",(e=>{this._graphicsViewMap.polygon.renderer=new o.Z({symbol:e})})),(0,a.S1)(this.layer,"lineSymbol",(e=>{this._graphicsViewMap.polyline.renderer=new o.Z({symbol:e})})),(0,a.S1)(this.layer,"pointSymbol",(e=>{this._graphicsViewMap.point.renderer=new o.Z({symbol:e})}))],"georsslayerview")}detach(){this.handles.remove("georsslayerview"),this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};v=(0,s._)([(0,l.j)("esri.views.2d.layers.GeoRSSLayerView2D")],v);const g=v},95986:(e,t,i)=>{i.d(t,{y:()=>q});var s=i(27366),r=i(81608),n=i(60354),a=i(10064),l=i(94172),o=i(49861),p=(i(63780),i(93169),i(25243),i(69912)),h=i(33624),d=i(46784);i(32718),i(75366);let u=class extends d.wq{};u=(0,s._)([(0,p.j)("esri.views.layers.support.ClipArea")],u);const c=u;var y;let v=y=class extends c{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new y({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],v.prototype,"left",void 0),(0,s._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],v.prototype,"right",void 0),(0,s._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],v.prototype,"top",void 0),(0,s._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],v.prototype,"bottom",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],v.prototype,"version",null),v=y=(0,s._)([(0,p.j)("esri.views.layers.support.ClipRect")],v);const g=v;i(59486);var b,w=i(32238),f=i(77981),m=i(53866),_=i(80885);const S={base:w.Z,key:"type",typeMap:{extent:m.Z,polygon:_.Z}};let C=b=class extends c{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new b({geometry:this.geometry.clone()})}};(0,s._)([(0,o.Cb)({types:S,json:{read:f.im,write:!0}})],C.prototype,"geometry",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],C.prototype,"version",null),C=b=(0,s._)([(0,p.j)("esri.views.layers.support.Geometry")],C);const R=C;let V=class extends c{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,o.Cb)({type:[[[Number]]],json:{write:!0}})],V.prototype,"path",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],V.prototype,"version",null),V=(0,s._)([(0,p.j)("esri.views.layers.support.Path")],V);const T=V,Z=r.Z.ofType({key:"type",base:c,typeMap:{rect:g,path:T,geometry:R}}),q=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new Z,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1}initialize(){var e,t,i,s;const r=null==(e=null==(t=this.view)?void 0:t.spatialReferenceLocked)||e;(null==(i=this.view)?void 0:i.spatialReference)&&r&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new a.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new h.W),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,l.YP)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),l.tX),(0,l.YP)((()=>{var e,t;return null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1}),(e=>{this.container&&(this.container.opacity=e)}),l.tX),(0,l.YP)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),l.tX),(0,l.YP)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),l.tX),(0,l.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}))]),null!=(s=this.view)&&s.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var e;const t=null==(e=this.view)?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}get updating(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null==(e=this.updatingHandles)||!e.updating))}get visibleAtCurrentScale(){return this.isVisibleAtScale(this.view.scale)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:i,maxScale:s}=t;return(0===i||e<=i)&&(0===s||e>=s)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}};return(0,s._)([(0,o.Cb)()],t.prototype,"attached",void 0),(0,s._)([(0,o.Cb)({type:Z,set(e){const t=(0,n.Z)(e,this._get("clips"),Z);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"container",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"moving",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,s._)([(0,o.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"updateRequested",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"updating",null),(0,s._)([(0,o.Cb)()],t.prototype,"view",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),t=(0,s._)([(0,p.j)("esri.views.2d.layers.LayerView2D")],t),t}},75391:(e,t,i)=>{i.d(t,{Z:()=>n});var s=i(80613),r=i(82022);class n extends r.Z{renderChildren(e){this.attributeView.bindTextures(e.context,!1),this.children.some((e=>e.hasData))&&(super.renderChildren(e),e.drawPhase===s.jx.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===s.jx.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}_renderHighlight(e){const{painter:t}=e,i=t.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}},67581:(e,t,i)=>{i.d(t,{Z:()=>y});var s=i(27366),r=i(85015),n=i(91505),a=i(41691),l=i(79056),o=i(32718),p=i(92026),h=i(67426),d=i(49861),u=(i(63780),i(93169),i(25243),i(69912));let c=class extends((0,a.p)((0,l.I)((0,h.v)(n.Z.EventedMixin(r.Z))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";throw o.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e),e}}))}get fullOpacity(){return(0,p.Pt)(this.get("layer.opacity"),1)*(0,p.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){var e;return!!(null!=(e=this.updatingHandles)&&e.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null==(e=this.layer)?void 0:e.visible)}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){var e,t,i;return this.visible&&(null==(e=this.layer)?void 0:e.loaded)&&!(null!=(t=this.parent)&&t.suspended)&&(null==(i=this.view)?void 0:i.ready)||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,s._)([(0,d.Cb)()],c.prototype,"fullOpacity",null),(0,s._)([(0,d.Cb)()],c.prototype,"layer",void 0),(0,s._)([(0,d.Cb)()],c.prototype,"parent",void 0),(0,s._)([(0,d.Cb)({readOnly:!0})],c.prototype,"suspended",null),(0,s._)([(0,d.Cb)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,s._)([(0,d.Cb)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,s._)([(0,d.Cb)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,s._)([(0,d.Cb)({readOnly:!0})],c.prototype,"updatingProgress",null),(0,s._)([(0,d.Cb)()],c.prototype,"visible",null),(0,s._)([(0,d.Cb)()],c.prototype,"view",void 0),c=(0,s._)([(0,u.j)("esri.views.layers.LayerView")],c);const y=c}}]);
//# sourceMappingURL=3684.8bab0826.chunk.js.map