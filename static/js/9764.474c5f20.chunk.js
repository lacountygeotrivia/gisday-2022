"use strict";(globalThis.webpackChunkth_v3=globalThis.webpackChunkth_v3||[]).push([[9764],{19583:(e,t,r)=>{r.r(t),r.d(t,{default:()=>V});var s=r(27366),i=r(76200),a=r(62044),o=r(10064),l=r(41691),n=r(93002),y=r(92026),p=r(97642),h=r(66978),u=r(49861),c=(r(63780),r(93169),r(25243)),m=r(38511),d=r(69912),b=r(31201),g=r(25265),f=r(53866),v=r(82582),S=r(74184),x=r(27961),_=r(6741),C=r(11936),O=r(6693),L=r(46671),w=r(6061),E=r(29598),I=r(71684),P=r(56811),D=r(18870),N=r(99063),M=r(45948),T=r(44041),J=r(77990),R=r(58132),j=r(26704);let F=class extends((0,O.h)((0,N.n)((0,P.M)((0,D.x)((0,_.O)((0,C.Y)((0,w.q)((0,E.I)((0,p.R)((0,I.Q)((0,x.V)((0,L.N)((0,l.p)(S.Z)))))))))))))){constructor(){super(...arguments),this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=(0,y.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(h.r9).then((()=>this._fetchService(t)))),Promise.resolve(this)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.indexOf("PNG32")>-1?"png32":"png24"}writeSublayers(e,t,r,s){if(!this.loaded||!e)return;const i=e.slice().reverse().flatten((e=>{let{sublayers:t}=e;return t&&t.toArray().reverse()})).toArray();let a=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e=(0,g.M9)(s.origin);if(e===g.s3.PORTAL_ITEM){const e=this.createSublayersForOrigin("service").sublayers;a=(0,R.QV)(i,e,g.s3.SERVICE)}else if(e>g.s3.PORTAL_ITEM){const e=this.createSublayersForOrigin("portal-item");a=(0,R.QV)(i,e.sublayers,(0,g.M9)(e.origin))}}const o=[],l={writeSublayerStructure:a,...s};let n=a;i.forEach((e=>{const t=e.write({},l);o.push(t),n=n||"user"===e.originOf("visible")})),o.some((e=>Object.keys(e).length>1))&&(t.layers=o),n&&(t.visibleLayers=i.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,t,r,s){const i=s&&s.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const a=new T.R({layer:this,floors:null==s?void 0:s.floors,scale:(0,v.yZ)({extent:e,width:t})*i}),o=a.toJSON();a.destroy();const l=!s||!s.rotation||this.version<10.3?{}:{rotation:-s.rotation},n=e&&e.spatialReference,y=n.wkid||JSON.stringify(n.toJSON());o.dpi*=i;const p={};if(null!=s&&s.timeExtent){const{start:e,end:t}=s.timeExtent.toJSON();p.time=e&&t&&e===t?""+e:`${null==e?"null":e},${null==t?"null":t}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(p.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:y,imageSR:y,size:t+","+r,...o,...l,...p}}async fetchImage(e,t,r,s){var a;const l={responseType:"image",signal:null!=(a=null==s?void 0:s.signal)?a:null,query:{...this.parsedUrl.query,...this.createExportImageParameters(e,t,r,s),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},n=this.parsedUrl.path+"/export";return null==l.query.dynamicLayers||this.capabilities.exportMap.supportsDynamicLayers?(0,i.default)(n,l).then((e=>e.data)).catch((e=>{if((0,h.D_)(e))throw e;throw new o.Z("mapimagelayer:image-fetch-error",`Unable to load image: ${n}`,{error:e})})):Promise.reject(new o.Z("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:l.query}))}async fetchRecomputedExtents(){const e={...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:t}=await(0,i.default)(this.url,e),{extent:r,fullExtent:s,timeExtent:o}=t,l=r||s;return{fullExtent:l&&f.Z.fromJSON(l),timeExtent:o&&a.Z.fromJSON({start:o[0],end:o[1]})}}loadAll(){return(0,n.G)(this,(e=>{e(this.allSublayers)}))}serviceSupportsSpatialReference(e){return(0,j.D)(this,e)}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:r}=await(0,i.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});r&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}};(0,s._)([(0,u.Cb)({type:Boolean})],F.prototype,"datesInUnknownTimezone",void 0),(0,s._)([(0,u.Cb)()],F.prototype,"dpi",void 0),(0,s._)([(0,u.Cb)()],F.prototype,"gdbVersion",void 0),(0,s._)([(0,u.Cb)()],F.prototype,"imageFormat",void 0),(0,s._)([(0,m.r)("imageFormat",["supportedImageFormatTypes"])],F.prototype,"readImageFormat",null),(0,s._)([(0,u.Cb)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],F.prototype,"imageMaxHeight",void 0),(0,s._)([(0,u.Cb)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],F.prototype,"imageMaxWidth",void 0),(0,s._)([(0,u.Cb)()],F.prototype,"imageTransparency",void 0),(0,s._)([(0,u.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],F.prototype,"isReference",void 0),(0,s._)([(0,u.Cb)({json:{read:!1,write:!1}})],F.prototype,"labelsVisible",void 0),(0,s._)([(0,u.Cb)({type:["ArcGISMapServiceLayer"]})],F.prototype,"operationalLayerType",void 0),(0,s._)([(0,u.Cb)({json:{read:!1,write:!1}})],F.prototype,"popupEnabled",void 0),(0,s._)([(0,u.Cb)()],F.prototype,"sourceJSON",void 0),(0,s._)([(0,u.Cb)({json:{write:{ignoreOrigin:!0}}})],F.prototype,"sublayers",void 0),(0,s._)([(0,b.c)("sublayers",{layers:{type:[J.Z]},visibleLayers:{type:[c.z8]}})],F.prototype,"writeSublayers",null),(0,s._)([(0,u.Cb)({type:["show","hide","hide-children"]})],F.prototype,"listMode",void 0),(0,s._)([(0,u.Cb)({json:{read:!1},readOnly:!0,value:"map-image"})],F.prototype,"type",void 0),(0,s._)([(0,u.Cb)(M.HQ)],F.prototype,"url",void 0),F=(0,s._)([(0,d.j)("esri.layers.MapImageLayer")],F);const V=F},44041:(e,t,r)=>{r.d(t,{R:()=>c});var s=r(27366),i=r(85015),a=r(41691),o=r(92026),l=r(49861),n=(r(63780),r(93169),r(25243),r(69912)),y=r(45948),p=r(58132),h=r(10141);const u={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let c=class extends((0,a.p)(i.Z)){constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const t=(0,h.ff)(this.floors,e);return e.toExportImageJSON(t)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,p.FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(u[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){var e;const t=!(null==(e=this.floors)||!e.length),r=this.visibleSublayers.filter((e=>null!=e.definitionExpression||t&&null!=e.floorInfo));return r.length?JSON.stringify(r.reduce(((e,t)=>{const r=(0,h.ff)(this.floors,t),s=(0,o.pC)(r)?(0,h.Hp)(r,t):t.definitionExpression;return e[t.id]=s,e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const t=this.layer.sublayers,r=t=>{const s=this.scale,i=0===s,a=0===t.minScale||s<=t.minScale,o=0===t.maxScale||s>=t.maxScale;t.visible&&(i||a&&o)&&(t.sublayers?t.sublayers.forEach(r):e.unshift(t))};t&&t.forEach(r);const s=this._get("visibleSublayers");return!s||s.length!==e.length||s.some(((t,r)=>e[r]!==t))?e:s}toJSON(){const e=this.layer;let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}};(0,s._)([(0,l.Cb)({readOnly:!0})],c.prototype,"dynamicLayers",null),(0,s._)([(0,l.Cb)()],c.prototype,"floors",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],c.prototype,"hasDynamicLayers",null),(0,s._)([(0,l.Cb)()],c.prototype,"layer",null),(0,s._)([(0,l.Cb)({readOnly:!0})],c.prototype,"layers",null),(0,s._)([(0,l.Cb)({readOnly:!0})],c.prototype,"layerDefs",null),(0,s._)([(0,l.Cb)({type:Number})],c.prototype,"scale",void 0),(0,s._)([(0,l.Cb)(y.qG)],c.prototype,"timeExtent",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],c.prototype,"version",null),(0,s._)([(0,l.Cb)({readOnly:!0})],c.prototype,"visibleSublayers",null),c=(0,s._)([(0,n.j)("esri.layers.mixins.ExportImageParameters")],c)}}]);
//# sourceMappingURL=9764.474c5f20.chunk.js.map