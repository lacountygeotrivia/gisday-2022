"use strict";(globalThis.webpackChunkth_v3=globalThis.webpackChunkth_v3||[]).push([[6598],{27811:(e,t,i)=>{i.d(t,{QM:()=>n,hy:()=>a,uI:()=>r});var s=i(16889);const r=(()=>{if(!("document"in globalThis))return()=>null;const e=document.createElement("canvas"),t=e.getContext("2d");return e.height=512,e.width=1,i=>{t.clearRect(0,0,1,e.height);const s=t.createLinearGradient(0,0,0,e.height);for(const{ratio:e,color:t}of i)s.addColorStop(Math.max(e,.001),`rgba(${t.r}, ${t.g}, ${t.b}, ${t.a})`);return t.fillStyle=s,t.fillRect(0,0,1,e.height),t.getImageData(0,0,1,e.height).data}})();function n(e,t,i,s){const{blurRadius:r,fieldOffset:n,field:a}=t,o=new Float64Array(i*s),l=h(r),d=Math.round(3*r);let u,c=Number.NEGATIVE_INFINITY;const p=function(e,t){return null!=e?"string"==typeof t?t=>-1*+t.readAttribute(e):i=>+i.readAttribute(e)+t:e=>1}(a,n),g=new Set;for(const h of e){const e=h.getCursor();for(;e.next();){const t=e.getObjectId();if(g.has(t))continue;g.add(t);const r=e.readLegacyPointGeometry(),n=128;if(r.x<-n||r.x>=i+n||r.y<-n||r.y>s+n)continue;const a=+p(e),h=Math.round(r.x)-d,f=Math.round(r.y)-d,x=Math.max(0,h),m=Math.max(0,f),y=Math.min(s,Math.round(r.y)+d),_=Math.min(i,Math.round(r.x)+d);for(let e=m;e<y;e++){const t=l[e-f];for(let s=x;s<_;s++){const r=l[s-h];u=o[e*i+s]+=t*r*a,u>c&&(c=u)}}}}return{matrix:o.buffer,max:c}}function a(e,t,i,r,n,a){e.canvas.width=e.canvas.height=t,e.clearRect(0,0,t,t);const h=e.getImageData(0,0,t,t);i&&r&&h.data.set(new Uint8ClampedArray(function(e,t,i,r,n){const a=new Uint32Array(e*e),h="buffer"in t?t:new Float64Array(t),o="buffer"in i?new Uint32Array(i.buffer):new Uint32Array(new Uint8Array(i).buffer),l=o.length/(n-r);for(let d=0;d<h.length;d++){const e=h[d],t=Math.floor((e-r)*l);a[d]=o[(0,s.uZ)(t,0,o.length-1)]}return a.buffer}(t,i,r,n,a))),e.putImageData(h,0,0)}function h(e){const t=Math.round(3*e),i=2*e*e,s=new Float64Array(2*t+1);for(let r=0;r<=s.length;r++)s[r]=Math.exp(-((r-t)**2)/i)/Math.sqrt(2*Math.PI)*(e/2);return s}},45956:(e,t,i)=>{i.d(t,{eY:()=>c});var s=i(92026),r=i(22753),n=i(23588),a=i(15245),h=i(87422),o=i(10978),l=i(8548),d=i(51378);function u(e,t,i){const s={target:l.No.TEXTURE_2D,pixelFormat:l.VI.RGBA,internalFormat:l.VI.RGBA,dataType:l.Br.UNSIGNED_BYTE,wrapMode:l.e8.CLAMP_TO_EDGE};return t&&i&&(s.width=t,s.height=i),new d.x(e,s)}class c extends h.s{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(),this.requestRenderOnSourceChangedEnabled=i,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.blendFunction=t,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){this._source=e,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e.context)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}_createTransforms(){return{dvs:(0,n.c)()}}setTransform(e){const t=(0,r.b)(this.transforms.dvs),[i,s]=e.toScreenNoRotation([0,0],[this.x,this.y]),n=this.resolution/this.pixelRatio/e.resolution,h=n*this.width,o=n*this.height,l=Math.PI*this.rotation/180;(0,r.c)(t,t,(0,a.f)(i,s)),(0,r.c)(t,t,(0,a.f)(h/2,o/2)),(0,r.r)(t,t,-l),(0,r.c)(t,t,(0,a.f)(-h/2,-o/2)),(0,r.j)(t,t,(0,a.f)(h,o)),(0,r.m)(this.transforms.dvs,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}updateTexture(e){var t;if(!this.stage)return null==(t=this._texture)||t.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=u(e,this.sourceWidth,this.sourceHeight):this._texture=u(e));const i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),(r=i)&&"render"in r)if(i instanceof o.Z){const e=i.getRenderedRasterPixels();this._texture.setData((0,s.pC)(e)?e.renderedRasterPixels:null)}else this._texture.setData(function(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}(i));else(function(e){return e&&!("render"in e)})(i)&&this._texture.setData(i);this.ready()}else this._texture.setData(null);var r}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}},9849:(e,t,i)=>{i.d(t,{s:()=>u});var s=i(65156),r=i(23588),n=i(45956),a=i(72900);class h extends a.I{constructor(e,t,i,s,r){let a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;super(e,t,i,s,r),this.bitmap=new n.eY(a,"standard",!1),this.bitmap.coordScale=[s,r],this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){super.beforeRender(e),this.bitmap.beforeRender(e)}afterRender(e){super.afterRender(e),this.bitmap.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{dvs:(0,r.c)(),tileMat3:(0,r.c)()}}setTransform(e,t){super.setTransform(e,t),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}var o=i(75010),l=i(80613),d=i(55067);class u extends d.Z{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(e){const t=this._tileInfoView.getTileBounds((0,s.Ue)(),e),[i,r]=this._tileInfoView.tileInfo.size;return new h(e,t[0],t[3],i,r)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[o.U.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:l.jx.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===l.jx.MAP&&super.doRender(e)}}},10978:(e,t,i)=>{i.d(t,{Z:()=>r});var s=i(92026);class r{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.width:0}get height(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if((0,s.Wi)(t))return;const i=this.filter({pixelBlock:t});if((0,s.Wi)(i.pixelBlock))return;const r=i.pixelBlock.getAsRGBA(),n=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);n.data.set(r),e.putImageData(n,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return(0,s.Wi)(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}},55067:(e,t,i)=>{i.d(t,{Z:()=>l});var s=i(93169),r=i(80613),n=i(64510),a=i(60418),h=i(40655);const o=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class l extends n.Z{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(o),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,i=super.createRenderParams(e);return i.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,i.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),i}prepareRenderPasses(e){const t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[h.Z],drawPhase:r.jx.DEBUG|r.jx.MAP|r.jx.HIGHLIGHT,target:()=>this.getStencilTarget()})),(0,s.Z)("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[a.Z],drawPhase:r.jx.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}updateTransforms(e){for(const t of this.children){const i=this._tileInfoView.getTileResolution(t.key);t.setTransform(e,i)}}setStencilReference(e){let t=1;for(const i of this.children)i.stencilRef=t++}}},72900:(e,t,i)=>{i.d(t,{I:()=>a});var s=i(22753),r=i(87422),n=i(73828);class a extends r.s{constructor(e,t,i,s,r){let a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:s,h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:r;super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new n.Z(e),this.x=t,this.y=i,this.width=s,this.height=r,this.rangeX=a,this.rangeY=h}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(e,t){const i=t/(e.resolution*e.pixelRatio),r=this.transforms.tileMat3,[n,a]=e.toScreenNoRotation([0,0],[this.x,this.y]),h=this.width/this.rangeX*i,o=this.height/this.rangeY*i;(0,s.s)(r,h,0,0,0,o,0,n,a,1),(0,s.m)(this.transforms.dvs,e.displayViewMat3,r)}}},40639:(e,t,i)=>{i.d(t,{Z:()=>o});var s=i(27366),r=i(41691),n=i(49861),a=(i(63780),i(93169),i(25243),i(69912));let h=class extends r.r{constructor(e){super(e),this.tiles=new Map}destroy(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}get updating(){return this.isUpdating()}acquireTile(e){const t=this.createTile(e);return t.once("isReady",(()=>this.notifyChange("updating"))),this.tiles.set(e.id,t),t}forceAttributeTextureUpload(){}forEachTile(e){this.tiles.forEach(e)}releaseTile(e){this.tiles.delete(e.key.id),this.disposeTile(e)}isUpdating(){let e=!0;return this.tiles.forEach((t=>{e=e&&t.isReady})),!e}setHighlight(){}invalidateLabels(){}requestUpdate(){this.layerView.requestUpdate()}};(0,s._)([(0,n.Cb)()],h.prototype,"layer",void 0),(0,s._)([(0,n.Cb)()],h.prototype,"layerView",void 0),(0,s._)([(0,n.Cb)()],h.prototype,"tileInfoView",void 0),(0,s._)([(0,n.Cb)()],h.prototype,"updating",null),h=(0,s._)([(0,a.j)("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],h);const o=h},46598:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});var s=i(27366),r=(i(32718),i(25243),i(63780),i(93169),i(75366),i(69912)),n=i(27811),a=i(9849),h=i(40639);class o{constructor(){this.gradient=null,this.height=512,this.width=512}render(e){(0,n.hy)(e,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity)}}let l=class extends h.Z{constructor(e){super(e),this._intensityInfo={minPixelIntensity:0,maxPixelIntensity:0},this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new a.s(e.tileInfoView)}createTile(e){const t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}onConfigUpdate(){const e=this.layer.renderer;if("heatmap"===e.type){const{minPixelIntensity:t,maxPixelIntensity:i}=e;this._intensityInfo.minPixelIntensity=t,this._intensityInfo.maxPixelIntensity=i,this._gradient=(0,n.uI)(e.colorStops),this.tiles.forEach((e=>{const s=e.bitmap.source;s&&(s.minPixelIntensity=t,s.maxPixelIntensity=i,s.gradient=this._gradient,e.bitmap.invalidateTexture())}))}}hitTest(){return Promise.resolve([])}install(e){e.addChild(this._container)}uninstall(e){this._container.removeAllChildren(),e.removeChild(this._container)}disposeTile(e){this._container.removeChild(e),e.destroy()}supportsRenderer(e){return e&&"heatmap"===e.type}onTileData(e){const t=this.tiles.get(e.tileKey);if(!t)return;const i=e.intensityInfo,{minPixelIntensity:s,maxPixelIntensity:r}=this._intensityInfo,n=t.bitmap.source||new o;n.intensities=i&&i.matrix||null,n.minPixelIntensity=s,n.maxPixelIntensity=r,n.gradient=this._gradient,t.bitmap.source=n,this._container.addChild(t),this._container.requestRender(),this.requestUpdate()}onTileError(e){console.error(e)}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(e,t){return console.error(e),Promise.reject()}};l=(0,s._)([(0,r.j)("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],l);const d=l}}]);
//# sourceMappingURL=6598.21673475.chunk.js.map