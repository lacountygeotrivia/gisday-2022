"use strict";(globalThis.webpackChunkth_v3=globalThis.webpackChunkth_v3||[]).push([[6951,9200],{46951:(e,t,r)=>{r.r(t),r.d(t,{default:()=>he});var i=r(27366),l=r(76200),s=r(81608),o=r(10064),n=r(100),a=r(84652),u=r(97642),p=r(18202),c=r(66978),d=r(35995),h=r(49861),y=(r(25243),r(38511)),m=r(69912),f=r(31201),g=r(53866),v=r(74184),w=r(89200),x=r(6693),b=r(6061),S=r(29598),C=r(71684),M=r(56811),I=r(22824);class T{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.lods.length-1;this.tileInfo=e,this.minLOD=t,this.maxLOD=r}getAvailability(e,t,r){const i=this.tileInfo.lodAt(e);return!i||e<this.minLOD||e>this.maxLOD?"unavailable":i.cols&&i.rows?r>=i.cols[0]&&r<=i.cols[1]&&t>=i.rows[0]&&t<=i.rows[1]?"available":"unavailable":"available"}async fetchAvailability(e,t,r,i){return await(0,c.Yn)(i),this.getAvailability(e,t,r)}async fetchAvailabilityUpsample(e,t,r,i,l){await(0,c.Yn)(l),i.level=e,i.row=t,i.col=r;const s=this.tileInfo;for(s.updateTileInfo(i);;){const e=this.getAvailability(i.level,i.row,i.col);if("unavailable"!==e)return e;if(!s.upsampleTile(i))return"unavailable"}}}var _,L=r(4961),P=r(46784);r(63780),r(93169);let E=_=class extends P.wq{constructor(e){super(e),this.fullExtent=null,this.id=null,this.tileInfo=null}clone(){const e=new _;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e}};(0,i._)([(0,h.Cb)({type:g.Z,json:{read:{source:"fullExtent"}}})],E.prototype,"fullExtent",void 0),(0,i._)([(0,h.Cb)({type:String,json:{read:{source:"id"}}})],E.prototype,"id",void 0),(0,i._)([(0,h.Cb)({type:I.Z,json:{read:{source:"tileInfo"}}})],E.prototype,"tileInfo",void 0),E=_=(0,i._)([(0,m.j)("esri.layer.support.TileMatrixSet")],E);const R=E;var O;let Z=O=class extends P.wq{constructor(e){super(e),this.id=null,this.title=null,this.description=null,this.legendUrl=null}clone(){const e=new O;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}};(0,i._)([(0,h.Cb)({json:{read:{source:"id"}}})],Z.prototype,"id",void 0),(0,i._)([(0,h.Cb)({json:{read:{source:"title"}}})],Z.prototype,"title",void 0),(0,i._)([(0,h.Cb)({json:{read:{source:"abstract"}}})],Z.prototype,"description",void 0),(0,i._)([(0,h.Cb)({json:{read:{source:"legendUrl"}}})],Z.prototype,"legendUrl",void 0),(0,i._)([(0,h.Cb)({json:{read:{source:"isDefault"}}})],Z.prototype,"isDefault",void 0),(0,i._)([(0,h.Cb)({json:{read:{source:"keywords"}}})],Z.prototype,"keywords",void 0),Z=O=(0,i._)([(0,m.j)("esri.layer.support.WMTSStyle")],Z);const j=Z;var F;let A=F=class extends P.wq{constructor(e){super(e),this.fullExtent=null,this.fullExtents=null,this.imageFormats=null,this.id=null,this.layer=null,this.styles=null,this.tileMatrixSetId=null,this.tileMatrixSets=null}get description(){return this._get("description")}set description(e){this._set("description",e)}readFullExtent(e,t){return(e=t.fullExtent)?g.Z.fromJSON(e):null}readFullExtents(e,t){var r;return null!=(r=t.fullExtents)&&r.length?t.fullExtents.map((e=>g.Z.fromJSON(e))):t.tileMatrixSets.map((e=>g.Z.fromJSON(e.fullExtent))).filter((e=>e))}get imageFormat(){let e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e}set imageFormat(e){const t=this.imageFormats;e&&(e.indexOf("image/")>-1||t&&-1===t.indexOf(e))&&(-1===e.indexOf("image/")&&(e="image/"+e),t&&-1===t.indexOf(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}get styleId(){let e=this._get("styleId");return e||(e=this.styles&&this.styles.length?this.styles.getItemAt(0).id:""),e}set styleId(e){this._set("styleId",e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find((e=>e.id===this.tileMatrixSetId)):null}clone(){const e=new F;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=this.tileMatrixSets.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e}};(0,i._)([(0,h.Cb)()],A.prototype,"description",null),(0,i._)([(0,h.Cb)()],A.prototype,"fullExtent",void 0),(0,i._)([(0,y.r)("fullExtent",["fullExtent"])],A.prototype,"readFullExtent",null),(0,i._)([(0,h.Cb)({readOnly:!0})],A.prototype,"fullExtents",void 0),(0,i._)([(0,y.r)("fullExtents",["fullExtents","tileMatrixSets"])],A.prototype,"readFullExtents",null),(0,i._)([(0,h.Cb)()],A.prototype,"imageFormat",null),(0,i._)([(0,h.Cb)({json:{read:{source:"formats"}}})],A.prototype,"imageFormats",void 0),(0,i._)([(0,h.Cb)()],A.prototype,"id",void 0),(0,i._)([(0,h.Cb)()],A.prototype,"layer",void 0),(0,i._)([(0,h.Cb)()],A.prototype,"styleId",null),(0,i._)([(0,h.Cb)({type:s.Z.ofType(j),json:{read:{source:"styles"}}})],A.prototype,"styles",void 0),(0,i._)([(0,h.Cb)({value:null,json:{write:{ignoreOrigin:!0}}})],A.prototype,"title",null),(0,i._)([(0,h.Cb)()],A.prototype,"tileMatrixSetId",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],A.prototype,"tileMatrixSet",null),(0,i._)([(0,h.Cb)({type:s.Z.ofType(R),json:{read:{source:"tileMatrixSets"}}})],A.prototype,"tileMatrixSets",void 0),A=F=(0,i._)([(0,m.j)("esri.layers.support.WMTSSublayer")],A);const U=A;var V=r(92026),N=r(7882),D=r(92183),W=r(89093),k=r(86685),q=r(39098);const B=90.71428571428571;function K(e){return e.nodeType===Node.ELEMENT_NODE}function H(e,t){for(let r=0;r<t.childNodes.length;r++){const i=t.childNodes[r];if(K(i)&&i.nodeName===e)return i}return null}function $(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const l=t.childNodes[i];K(l)&&l.nodeName===e&&r.push(l)}return r}function J(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const l=t.childNodes[i];K(l)&&l.nodeName===e&&r.push(l)}return r.map((e=>e.textContent))}function z(e,t){return e.split(">").forEach((e=>{t&&(t=H(e,t))})),t&&t.textContent}function G(e,t,r,i){let l;return Array.prototype.slice.call(i.childNodes).some((i=>{if(i.nodeName.indexOf(e)>-1){const e=H(t,i),s=e&&e.textContent;if(s===r||r.split(":")&&r.split(":")[1]===s)return l=i,!0}return!1})),l}function Q(e,t,r,i,l){const s=z("Abstract",t),o=J("Format",t);return{id:e,fullExtent:ee(t),fullExtents:te(t),description:s,formats:o,styles:re(t,i),title:z("Title",t),tileMatrixSets:ie(l,t,r)}}function Y(e,t){var r;const i=[],l=null==(r=e.layerMap)?void 0:r.get(t);if(!l)return;const s=$("ResourceURL",l),o=$("Dimension",l);let n,a,u,p;return o.length&&(n=z("Identifier",o[0]),a=J("Default",o[0])||J("Value",o[0])),o.length>1&&(u=z("Identifier",o[1]),p=J("Default",o[1])||J("Value",o[1])),e.dimensionMap.set(t,{dimensions:a,dimensions2:p}),s.forEach((e=>{let t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(n&&a.length)if(t.indexOf("{"+n+"}")>-1)t=t.replace("{"+n+"}","{dimensionValue}");else{const e=t.toLowerCase().indexOf("{"+n.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue}"+t.substring(e+n.length+2))}if(u&&p.length)if(t.indexOf("{"+u+"}")>-1)t=t.replace("{"+u+"}","{dimensionValue2}");else{const e=t.toLowerCase().indexOf("{"+u.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue2}"+t.substring(e+u.length+2))}i.push({template:t,format:e.getAttribute("format"),resourceType:"tile"})}})),i}function X(e,t,r,i,l,s,o,n){var a,u;const p=function(e,t,r){const i=Y(e,t),l=i.filter((e=>e.format===r));return l.length?l:i}(e,t,i);if(!((null==p?void 0:p.length)>0))return"";const{dimensionMap:c}=e,d=null==(a=c.get(t).dimensions)?void 0:a[0],h=null==(u=c.get(t).dimensions2)?void 0:u[0];return p[o%p.length].template.replace(/\{Style\}/gi,l).replace(/\{TileMatrixSet\}/gi,r).replace(/\{TileMatrix\}/gi,s).replace(/\{TileRow\}/gi,""+o).replace(/\{TileCol\}/gi,""+n).replace(/\{dimensionValue\}/gi,d).replace(/\{dimensionValue2\}/gi,h)}function ee(e){const t=H("WGS84BoundingBox",e),r=t?z("LowerCorner",t).split(" "):["-180","-90"],i=t?z("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function te(e){const t=[];return(0,q.h)(e,{BoundingBox:e=>{if(!e.getAttribute("crs"))return;const r=e.getAttribute("crs").toLowerCase(),i=le(r),l=r.includes("epsg")&&(0,k.A)(i.wkid);let s,o,n,a;(0,q.h)(e,{LowerCorner:e=>{[s,o]=e.textContent.split(" ").map((e=>Number.parseFloat(e))),l&&([s,o]=[o,s])},UpperCorner:e=>{[n,a]=e.textContent.split(" ").map((e=>Number.parseFloat(e))),l&&([n,a]=[a,n])}}),t.push({xmin:s,ymin:o,xmax:n,ymax:a,spatialReference:i})}}),t}function re(e,t){return $("Style",e).map((e=>{const r=H("LegendURL",e),i=H("Keywords",e),l=i&&J("Keyword",i);let s=r&&r.getAttribute("xlink:href");return t&&(s=s&&s.replace(/^http:/i,"https:")),{abstract:z("Abstract",e),id:z("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:l,legendUrl:s,title:z("Title",e)}}))}function ie(e,t,r){return $("TileMatrixSetLink",t).map((t=>function(e,t,r){const i=H("TileMatrixSet",t).textContent,l=J("TileMatrix",t),s=r.find((e=>{const t=H("Identifier",e),r=t&&t.textContent;return!!(r===i||i.split(":")&&i.split(":")[1]===r)})),o=H("TileMatrixSetLimits",t),n=o&&$("TileMatrixLimits",o),a=new Map;if(null!=n&&n.length)for(const g of n){const e=H("TileMatrix",g).textContent,t=+H("MinTileRow",g).textContent,r=+H("MaxTileRow",g).textContent,i=+H("MinTileCol",g).textContent,l=+H("MaxTileCol",g).textContent;a.set(e,{minCol:i,maxCol:l,minRow:t,maxRow:r})}const u=z("SupportedCRS",s).toLowerCase(),p=function(e,t){return se(H("TileMatrix",e),t)}(s,u),c=p.spatialReference,d=H("TileMatrix",s),h=[parseInt(z("TileWidth",d),10),parseInt(z("TileHeight",d),10)],y=[];l.length?l.forEach(((e,t)=>{const r=G("TileMatrix","Identifier",e,s);y.push(ae(r,u,t,i,a))})):$("TileMatrix",s).forEach(((e,t)=>{y.push(ae(e,u,t,i,a))}));const m=function(e,t,r,i,l){const s=H("BoundingBox",t);let o,n,a,u,p,c;if(s&&(o=z("LowerCorner",s).split(" "),n=z("UpperCorner",s).split(" ")),o&&o.length>1&&n&&n.length>1)a=parseFloat(o[0]),p=parseFloat(o[1]),u=parseFloat(n[0]),c=parseFloat(n[1]);else{const e=H("TileMatrix",t),s=parseInt(z("MatrixWidth",e),10),o=parseInt(z("MatrixHeight",e),10);a=r.x,c=r.y,u=a+s*i[0]*l.resolution,p=c-o*i[1]*l.resolution}return function(e,t){return"1.0.0"===e&&(0,k.A)(t.wkid)}(e,r.spatialReference)?new g.Z(p,a,c,u,r.spatialReference):new g.Z(a,p,u,c,r.spatialReference)}(e,s,p,h,y[0]).toJSON(),f=new I.Z({dpi:96,spatialReference:c,size:h,origin:p,lods:y}).toJSON();return{id:i,fullExtent:m,tileInfo:f}}(e,t,r)))}function le(e){e=e.toLowerCase();let t=parseInt(e.split(":").pop(),10);900913!==t&&3857!==t||(t=102100);const r=function(e){return e.includes("crs84")||e.includes("crs:84")?oe.CRS84:e.includes("crs83")||e.includes("crs:83")?oe.CRS83:e.includes("crs27")||e.includes("crs:27")?oe.CRS27:null}(e);return(0,V.pC)(r)&&(t=r),{wkid:t}}function se(e,t){const r=le(t),[i,l]=z("TopLeftCorner",e).split(" ").map((e=>parseFloat(e))),s=t.includes("epsg")&&(0,k.A)(r.wkid);return new N.Z(s?{x:l,y:i,spatialReference:r}:{x:i,y:l,spatialReference:r})}var oe,ne;function ae(e,t,r,i,l){var s;const o=le(t),n=z("Identifier",e);let a=parseFloat(z("ScaleDenominator",e));const u=ue(o.wkid,a,i);a*=96/B;const p=+z("MatrixWidth",e),c=+z("MatrixHeight",e),{maxCol:d=p-1,maxRow:h=c-1,minCol:y=0,minRow:m=0}=null!=(s=l.get(n))?s:{},{x:f,y:g}=se(e,t);return{cols:[y,d],level:r,levelValue:n,origin:[f,g],scale:a,resolution:u,rows:[m,h]}}function ue(e,t,r){let i;return i=W.Z.hasOwnProperty(""+e)?W.Z.values[W.Z[e]]:"default028mm"===r?6370997*Math.PI/180:(0,D.e8)(e).metersPerDegree,7*t/25e3/i}(ne=oe||(oe={}))[ne.CRS84=4326]="CRS84",ne[ne.CRS83=4269]="CRS83",ne[ne.CRS27=4267]="CRS27";const pe={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},ce=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let de=class extends((0,x.h)((0,C.Q)((0,M.M)((0,b.q)((0,S.I)((0,u.R)(v.Z))))))){constructor(){super(...arguments),this._sublayersHandles=new n.Z,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.watch("activeLayer",((e,t)=>{t&&(t.layer=null),e&&(e.layer=this)}),!0),this.watch("sublayers",((e,t)=>{t&&(t.forEach((e=>{e.layer=null})),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach((e=>{e.layer=this})),this._sublayersHandles||(this._sublayersHandles=new n.Z),this._sublayersHandles.add([e.on("after-add",(e=>{let{item:t}=e;t.layer=this})),e.on("after-remove",(e=>{let{item:t}=e;t.layer=null}))]))}),!0)}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){if("KVP"===this.serviceMode||"RESTful"===this.serviceMode)return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(c.r9).then((()=>this._fetchService(e))).catch((e=>{throw(0,c.r9)(e),new o.Z("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),Promise.resolve(this);console.error("WMTS mode could only be 'KVP' or 'RESTful'")}get activeLayer(){return this._get("activeLayer")}set activeLayer(e){this._set("activeLayer",e)}readActiveLayerFromService(e,t,r){this.activeLayer||(this.activeLayer=new U);let i=t.layers.find((e=>e.id===this.activeLayer.id));return i||(i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:i}=t,l=r?this._getLowerCasedUrlParams(r):null,s=null==i?void 0:i.layerIdentifier;let o=null;const n=null==i?void 0:i.tileMatrixSet;n&&(Array.isArray(n)?n.length&&(o=n[0]):o=n);const a=null==l?void 0:l.format,u=null==l?void 0:l.style;return new U({id:s,imageFormat:a,styleId:u,tileMatrixSetId:o})}writeActiveLayer(e,t,r,i){const l=this.activeLayer;t.templateUrl=this.getUrlTemplate(l.id,l.tileMatrixSetId,l.imageFormat,l.styleId);const s=(0,p.hS)("tileMatrixSet.tileInfo",l);t.tileInfo=s?s.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:l.id,tileMatrixSet:l.tileMatrixSetId}}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){return this.activeLayer.fullExtents}readServiceMode(e,t){return t.templateUrl.indexOf("?")>-1?"KVP":"RESTful"}readSublayersFromService(e,t,r){return function(e,t){return e.map((e=>{const r=new U;return r.read(e,t),r}))}(t.layers,r)}get supportedSpatialReferences(){return this.activeLayer.tileMatrixSets.map((e=>e.tileInfo.spatialReference)).toArray()}get tilemapCache(){var e,t;const r=null==(e=this.activeLayer)||null==(t=e.tileMatrixSet)?void 0:t.tileInfo;return new T(r)}get title(){var e,t;return null!=(e=null==(t=this.activeLayer)?void 0:t.title)?e:"Layer"}set title(e){e?this._override("title",e):this._clearOverride("title")}get url(){return this._get("url")}set url(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId).tileInfo,i=e.fullExtent,l=new L.Z({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(l.customLayerParameters=this.customLayerParameters),this.customParameters&&(l.customParameters=this.customParameters),new w.default({fullExtent:i,urlTemplate:t,tileInfo:r,wmtsInfo:l})}fetchTile(e,t,r){const i=this.getTileUrl(e,t,r);return(0,l.default)(i,{responseType:"image"}).then((e=>e.data))}findSublayerById(e){return this.sublayers.find((t=>t.id===e))}getTileUrl(e,t,r){const i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId).tileInfo.lods[e],l=i?i.levelValue?i.levelValue:`${i.level}`:`${e}`;let s=this.resourceInfo?"":X({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,l,t,r);return s||(s=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,l).replace(/\{row\}/gi,`${t}`).replace(/\{col\}/gi,`${r}`)),s=this._appendCustomLayerParameters(s),s}getUrlTemplate(e,t,r,i){if(!this.resourceInfo){const r=function(e,t,r,i){const{dimensionMap:l}=e,s=Y(e,t);let o="";if(s&&s.length>0){const e=l.get(t).dimensions&&l.get(t).dimensions[0],n=l.get(t).dimensions2&&l.get(t).dimensions2[0];o=s[0].template,o.indexOf(".xxx")===o.length-4&&(o=o.slice(0,o.length-4)),o=o.replace(/\{Style\}/gi,i),o=o.replace(/\{TileMatrixSet\}/gi,r),o=o.replace(/\{TileMatrix\}/gi,"{level}"),o=o.replace(/\{TileRow\}/gi,"{row}"),o=o.replace(/\{TileCol\}/gi,"{col}"),o=o.replace(/\{dimensionValue\}/gi,e),o=o.replace(/\{dimensionValue2\}/gi,n)}return o}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(r)return r}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){let l="";return pe[r.toLowerCase()]&&(l=pe[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+l}return""}async _fetchService(e){let t;if(this.resourceInfo)"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.indexOf("?")>-1?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e)}catch{const i="KVP"===this.serviceMode?"RESTful":"KVP";try{t=await this._getCapabilities(i,e),this.serviceMode=i}catch(r){throw new o.Z("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:r})}}this.resourceInfo?t.data=function(e){return e.layers.forEach((e=>{e.tileMatrixSets.forEach((e=>{const t=e.tileInfo;96!==t.dpi&&(t.lods.forEach((r=>{r.scale=96*r.scale/t.dpi,r.resolution=ue(t.spatialReference.wkid,r.scale*B/96,e.id)})),t.dpi=96)}))})),e}(t.data):t.data=function(e,t){var r,i;e=e.replace(/ows:/gi,"");const l=(new DOMParser).parseFromString(e,"text/xml").documentElement,s=new Map,n=new Map,a=H("Contents",l);if(!a)throw new o.Z("wmtslayer:wmts-capabilities-xml-is-not-valid");const u=H("OperationsMetadata",l),p=null==u?void 0:u.querySelector("[name='GetTile']"),c=null==p?void 0:p.getElementsByTagName("Get"),d=c&&Array.prototype.slice.call(c),h=null!=(r=(null==t||null==(i=t.url)?void 0:i.indexOf("https"))>-1)&&r;let y,m,f=t.serviceMode,g=t&&t.url;if(d&&d.length&&d.some((e=>{const t=H("Constraint",e);return!t||G("AllowedValues","Value",f,t)?(g=e.attributes[0].nodeValue,!0):(!t||G("AllowedValues","Value","RESTful",t)||G("AllowedValues","Value","REST",t)?m=e.attributes[0].nodeValue:t&&!G("AllowedValues","Value","KVP",t)||(y=e.attributes[0].nodeValue),!1)})),!g)if(m)g=m,f="RESTful";else if(y)g=y,f="KVP";else{const e=H("ServiceMetadataURL",l);g=e&&e.getAttribute("xlink:href")}const v=g.indexOf("1.0.0/");-1===v&&"RESTful"===f?g+="/":v>-1&&(g=g.substring(0,v)),"KVP"===f&&(g+=v>-1?"":"?"),h&&(g=g.replace(/^http:/i,"https:"));const w=z("ServiceIdentification>ServiceTypeVersion",l),x=z("ServiceIdentification>AccessConstraints",l),b=$("Layer",a),S=$("TileMatrixSet",a),C=b.map((e=>{const t=z("Identifier",e);return s.set(t,e),Q(t,e,S,h,w)}));return{copyright:x,dimensionMap:n,layerMap:s,layers:C,serviceMode:f,tileUrl:g}}(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"})}async _getCapabilities(e,t){const r=this._getCapabilitiesUrl(e);return await(0,l.default)(r,{...t,responseType:"text"})}_getTileMatrixSetById(e){return this.findSublayerById(this.activeLayer.id).tileMatrixSets.find((t=>t.id===e))}_appendCustomParameters(e){return this._appendParameters(e,this.customParameters)}_appendCustomLayerParameters(e){return this._appendParameters(e,{...(0,a.d9)(this.customParameters),...this.customLayerParameters})}_appendParameters(e,t){const r=(0,d.mN)(e),i={...r.query,...t},l=(0,d.B7)(i);return""===l?r.path:`${r.path}?${l}`}_getCapabilitiesUrl(e){let t;return this.url=this.url.split("?")[0],"KVP"===e?t=this.url+"?request=GetCapabilities&service=WMTS&version="+this.version:"RESTful"===e&&(t=this.url+"/"+this.version+"/WMTSCapabilities.xml"),t=this._appendCustomParameters(t),t}_getLowerCasedUrlParams(e){if(!e)return null;const t=(0,d.mN)(e).query;if(!t)return null;const r={};return Object.keys(t).forEach((e=>{r[e.toLowerCase()]=t[e]})),r}_mergeParams(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const t=Object.keys(r);t.length&&(e=e?(0,a.d9)(e):{},t.forEach((t=>{e.hasOwnProperty(t)||ce.has(t)||(e[t]=r[t])})))}return e}};(0,i._)([(0,h.Cb)()],de.prototype,"dimensionMap",void 0),(0,i._)([(0,h.Cb)()],de.prototype,"layerMap",void 0),(0,i._)([(0,h.Cb)({type:U,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],de.prototype,"activeLayer",null),(0,i._)([(0,y.r)("service","activeLayer",["layers"])],de.prototype,"readActiveLayerFromService",null),(0,i._)([(0,y.r)(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],de.prototype,"readActiveLayerFromItemOrWebDoc",null),(0,i._)([(0,f.c)(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:I.Z},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],de.prototype,"writeActiveLayer",null),(0,i._)([(0,h.Cb)({type:String,value:"",json:{write:!0}})],de.prototype,"copyright",void 0),(0,i._)([(0,h.Cb)({type:["show","hide"]})],de.prototype,"listMode",void 0),(0,i._)([(0,h.Cb)({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],de.prototype,"customParameters",void 0),(0,i._)([(0,y.r)(["portal-item","web-document"],"customParameters")],de.prototype,"readCustomParameters",null),(0,i._)([(0,h.Cb)({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],de.prototype,"customLayerParameters",void 0),(0,i._)([(0,h.Cb)({type:g.Z,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],de.prototype,"fullExtent",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],de.prototype,"fullExtents",null),(0,i._)([(0,h.Cb)({type:["WebTiledLayer"]})],de.prototype,"operationalLayerType",void 0),(0,i._)([(0,h.Cb)()],de.prototype,"resourceInfo",void 0),(0,i._)([(0,h.Cb)()],de.prototype,"serviceMode",void 0),(0,i._)([(0,y.r)(["portal-item","web-document"],"serviceMode",["templateUrl"])],de.prototype,"readServiceMode",null),(0,i._)([(0,h.Cb)({type:s.Z.ofType(U)})],de.prototype,"sublayers",void 0),(0,i._)([(0,y.r)("service","sublayers",["layers"])],de.prototype,"readSublayersFromService",null),(0,i._)([(0,h.Cb)({readOnly:!0})],de.prototype,"supportedSpatialReferences",null),(0,i._)([(0,h.Cb)({readOnly:!0})],de.prototype,"tilemapCache",null),(0,i._)([(0,h.Cb)({json:{read:{source:"title"}}})],de.prototype,"title",null),(0,i._)([(0,h.Cb)({json:{read:!1},readOnly:!0,value:"wmts"})],de.prototype,"type",void 0),(0,i._)([(0,h.Cb)({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],de.prototype,"url",null),(0,i._)([(0,h.Cb)()],de.prototype,"version",void 0),de=(0,i._)([(0,m.j)("esri.layers.WMTSLayer")],de);const he=de},89200:(e,t,r)=>{r.r(t),r.d(t,{default:()=>T});var i=r(27366),l=(r(59486),r(76200)),s=r(10064),o=r(97642),n=r(643),a=r(35995),u=r(49861),p=(r(63780),r(93169),r(25243),r(38511)),c=r(69912),d=r(31201),h=r(74184),y=r(6693),m=r(6061),f=r(29598),g=r(71684),v=r(56811),w=r(59068),x=r(22824),b=r(4961),S=r(53866),C=r(78952),M=r(7882);let I=class extends((0,y.h)((0,g.Q)((0,v.M)((0,m.q)((0,f.I)((0,o.R)(h.Z))))))){constructor(){super(...arguments),this.copyright="",this.fullExtent=new S.Z(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,C.Z.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=C.Z.WebMercator,this.subDomains=null,this.tileInfo=new x.Z({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new M.Z({x:-20037508.342787,y:20037508.342787,spatialReference:C.Z.WebMercator}),spatialReference:C.Z.WebMercator,lods:[new w.Z({level:0,scale:591657527.591555,resolution:156543.033928}),new w.Z({level:1,scale:295828763.795777,resolution:78271.5169639999}),new w.Z({level:2,scale:147914381.897889,resolution:39135.7584820001}),new w.Z({level:3,scale:73957190.948944,resolution:19567.8792409999}),new w.Z({level:4,scale:36978595.474472,resolution:9783.93962049996}),new w.Z({level:5,scale:18489297.737236,resolution:4891.96981024998}),new w.Z({level:6,scale:9244648.868618,resolution:2445.98490512499}),new w.Z({level:7,scale:4622324.434309,resolution:1222.99245256249}),new w.Z({level:8,scale:2311162.217155,resolution:611.49622628138}),new w.Z({level:9,scale:1155581.108577,resolution:305.748113140558}),new w.Z({level:10,scale:577790.554289,resolution:152.874056570411}),new w.Z({level:11,scale:288895.277144,resolution:76.4370282850732}),new w.Z({level:12,scale:144447.638572,resolution:38.2185141425366}),new w.Z({level:13,scale:72223.819286,resolution:19.1092570712683}),new w.Z({level:14,scale:36111.909643,resolution:9.55462853563415}),new w.Z({level:15,scale:18055.954822,resolution:4.77731426794937}),new w.Z({level:16,scale:9027.977411,resolution:2.38865713397468}),new w.Z({level:17,scale:4513.988705,resolution:1.19432856685505}),new w.Z({level:18,scale:2256.994353,resolution:.597164283559817}),new w.Z({level:19,scale:1128.497176,resolution:.298582141647617}),new w.Z({level:20,scale:564.248588,resolution:.14929107082380833}),new w.Z({level:21,scale:282.124294,resolution:.07464553541190416}),new w.Z({level:22,scale:141.062147,resolution:.03732276770595208}),new w.Z({level:23,scale:70.5310735,resolution:.01866138385297604})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return"string"==typeof e?{urlTemplate:e,...t}:e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const t=new a.R9(this.urlTemplate);this.subDomains&&this.subDomains.length>0||-1===t.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new s.Z("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)}));return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&C.Z.fromJSON(t.fullExtent.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:r}=this,i=new a.R9(t),l=i.scheme?i.scheme+"://":"//",s=l+i.authority+"/";if(-1===i.authority.indexOf("{subDomain}"))e.push(s);else if(r&&r.length>0&&i.authority.split(".").length>1)for(const o of r)e.push(l+i.authority.replace(/\{subDomain\}/gi,o)+"/");return e.map((e=>("/"!==e.charAt(e.length-1)&&(e+="/"),e)))}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new a.R9(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){e&&(0,a.oC)(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=(0,a.Fv)(e)),t.templateUrl=e}fetchTile(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:s}=i,o=this.getTileUrl(e,t,r),n={responseType:"image",signal:s,query:{...this.refreshParameters}};return(0,l.default)(o,n).then((e=>e.data))}getTileUrl(e,t,r){const i=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+(0,n.gx)(this.urlPath,{level:i,z:i,col:r,x:r,row:t,y:t})}};(0,i._)([(0,u.Cb)({type:String,value:"",json:{write:!0}})],I.prototype,"copyright",void 0),(0,i._)([(0,u.Cb)({type:S.Z,json:{write:!0},nonNullable:!0})],I.prototype,"fullExtent",void 0),(0,i._)([(0,u.Cb)({readOnly:!0,json:{read:!1,write:!1}})],I.prototype,"legendEnabled",void 0),(0,i._)([(0,u.Cb)({type:["show","hide"]})],I.prototype,"listMode",void 0),(0,i._)([(0,u.Cb)()],I.prototype,"levelValues",null),(0,i._)([(0,u.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],I.prototype,"isReference",void 0),(0,i._)([(0,u.Cb)({type:["WebTiledLayer"],value:"WebTiledLayer"})],I.prototype,"operationalLayerType",void 0),(0,i._)([(0,u.Cb)({readOnly:!0,json:{read:!1,write:!1}})],I.prototype,"popupEnabled",void 0),(0,i._)([(0,u.Cb)({type:C.Z})],I.prototype,"spatialReference",void 0),(0,i._)([(0,p.r)("spatialReference",["spatialReference","fullExtent.spatialReference"])],I.prototype,"readSpatialReference",null),(0,i._)([(0,u.Cb)({type:[String],json:{write:!0}})],I.prototype,"subDomains",void 0),(0,i._)([(0,u.Cb)({type:x.Z,json:{write:!0}})],I.prototype,"tileInfo",void 0),(0,i._)([(0,u.Cb)({readOnly:!0})],I.prototype,"tileServers",null),(0,i._)([(0,u.Cb)({json:{read:!1}})],I.prototype,"type",void 0),(0,i._)([(0,u.Cb)()],I.prototype,"urlPath",null),(0,i._)([(0,u.Cb)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],I.prototype,"urlTemplate",void 0),(0,i._)([(0,p.r)("urlTemplate",["urlTemplate","templateUrl"])],I.prototype,"readUrlTemplate",null),(0,i._)([(0,d.c)("urlTemplate",{templateUrl:{type:String}})],I.prototype,"writeUrlTemplate",null),(0,i._)([(0,u.Cb)({type:b.Z,json:{write:!0}})],I.prototype,"wmtsInfo",void 0),I=(0,i._)([(0,c.j)("esri.layers.WebTileLayer")],I);const T=I},86685:(e,t,r)=>{r.d(t,{A:()=>l});const i=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function l(e){return i.some((t=>{let[r,i]=t;return e>=r&&e<=i}))}},39098:(e,t,r)=>{function i(e,t){for(const r of e.children)if(r.localName in t){const e=t[r.localName];if("function"==typeof e){const t=e(r);t&&i(r,t)}else i(r,e)}}function*l(e,t){for(const r of e.children)if(r.localName in t){const e=t[r.localName];"function"==typeof e?yield e(r):yield*l(r,e)}}r.d(t,{H:()=>l,h:()=>i})},4961:(e,t,r)=>{r.d(t,{Z:()=>p});var i,l=r(27366),s=r(46784),o=r(84652),n=r(49861),a=(r(25243),r(69912));let u=i=class extends s.wq{constructor(e){super(e)}clone(){return new i({customLayerParameters:(0,o.d9)(this.customLayerParameters),customParameters:(0,o.d9)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};(0,l._)([(0,n.Cb)({json:{type:Object,write:!0}})],u.prototype,"customLayerParameters",void 0),(0,l._)([(0,n.Cb)({json:{type:Object,write:!0}})],u.prototype,"customParameters",void 0),(0,l._)([(0,n.Cb)({type:String,json:{write:!0}})],u.prototype,"layerIdentifier",void 0),(0,l._)([(0,n.Cb)({type:String,json:{write:!0}})],u.prototype,"tileMatrixSet",void 0),(0,l._)([(0,n.Cb)({type:String,json:{write:!0}})],u.prototype,"url",void 0),u=i=(0,l._)([(0,a.j)("esri.layer.support.WMTSLayerInfo")],u);const p=u}}]);
//# sourceMappingURL=6951.3e2852f8.chunk.js.map