"use strict";(globalThis.webpackChunkth_v3=globalThis.webpackChunkth_v3||[]).push([[3220],{27811:(e,t,r)=>{r.d(t,{QM:()=>s,hy:()=>a,uI:()=>o});var n=r(16889);const o=(()=>{if(!("document"in globalThis))return()=>null;const e=document.createElement("canvas"),t=e.getContext("2d");return e.height=512,e.width=1,r=>{t.clearRect(0,0,1,e.height);const n=t.createLinearGradient(0,0,0,e.height);for(const{ratio:e,color:t}of r)n.addColorStop(Math.max(e,.001),`rgba(${t.r}, ${t.g}, ${t.b}, ${t.a})`);return t.fillStyle=n,t.fillRect(0,0,1,e.height),t.getImageData(0,0,1,e.height).data}})();function s(e,t,r,n){const{blurRadius:o,fieldOffset:s,field:a}=t,l=new Float64Array(r*n),c=i(o),d=Math.round(3*o);let h,u=Number.NEGATIVE_INFINITY;const f=function(e,t){return null!=e?"string"==typeof t?t=>-1*+t.readAttribute(e):r=>+r.readAttribute(e)+t:e=>1}(a,s),y=new Set;for(const i of e){const e=i.getCursor();for(;e.next();){const t=e.getObjectId();if(y.has(t))continue;y.add(t);const o=e.readLegacyPointGeometry(),s=128;if(o.x<-s||o.x>=r+s||o.y<-s||o.y>n+s)continue;const a=+f(e),i=Math.round(o.x)-d,p=Math.round(o.y)-d,m=Math.max(0,i),w=Math.max(0,p),g=Math.min(n,Math.round(o.y)+d),M=Math.min(r,Math.round(o.x)+d);for(let e=w;e<g;e++){const t=c[e-p];for(let n=m;n<M;n++){const o=c[n-i];h=l[e*r+n]+=t*o*a,h>u&&(u=h)}}}}return{matrix:l.buffer,max:u}}function a(e,t,r,o,s,a){e.canvas.width=e.canvas.height=t,e.clearRect(0,0,t,t);const i=e.getImageData(0,0,t,t);r&&o&&i.data.set(new Uint8ClampedArray(function(e,t,r,o,s){const a=new Uint32Array(e*e),i="buffer"in t?t:new Float64Array(t),l="buffer"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer),c=l.length/(s-o);for(let d=0;d<i.length;d++){const e=i[d],t=Math.floor((e-o)*c);a[d]=l[(0,n.uZ)(t,0,l.length-1)]}return a.buffer}(t,r,o,s,a))),e.putImageData(i,0,0)}function i(e){const t=Math.round(3*e),r=2*e*e,n=new Float64Array(2*t+1);for(let o=0;o<=n.length;o++)n[o]=Math.exp(-((o-t)**2)/r)/Math.sqrt(2*Math.PI)*(e/2);return n}},81735:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(27366),o=r(41691),s=r(49861),a=(r(63780),r(93169),r(25243),r(69912));let i=class extends o.r{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};(0,n._)([(0,s.Cb)({readOnly:!0})],i.prototype,"supportsTileUpdates",null),(0,n._)([(0,s.Cb)({constructOnly:!0})],i.prototype,"remoteClient",void 0),(0,n._)([(0,s.Cb)({constructOnly:!0})],i.prototype,"service",void 0),(0,n._)([(0,s.Cb)()],i.prototype,"spatialReference",null),(0,n._)([(0,s.Cb)({constructOnly:!0})],i.prototype,"tileInfo",void 0),(0,n._)([(0,s.Cb)({constructOnly:!0})],i.prototype,"tileStore",void 0),i=(0,n._)([(0,a.j)("esri.views.2d.layers.features.processors.BaseProcessor")],i);const l=i},63220:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var n=r(27366),o=(r(93169),r(92026)),s=(r(32718),r(25243),r(63780),r(75366),r(69912)),a=r(48732),i=r(27811),l=r(94109),c=r(81735),d=r(35092);class h{constructor(e,t){this.offset=e,this.extent=t}}let u=class extends c.Z{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(e,t){const r=t.schema.processors[0];"heatmap"===r.type&&(0,a.Hg)(this._schema,r)&&(e.mesh=!0,this._schema=r)}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id)}onTileClear(e){return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:{clear:!0}})}async onTileMessage(e,t,r){this._tileKeyToFeatureSets.has(e.key.id)||this._tileKeyToFeatureSets.set(e.key.id,new Map);const n=this._tileKeyToFeatureSets.get(e.key.id);if((0,o.pC)(t.addOrUpdate)&&t.addOrUpdate.hasFeatures&&n.set(t.addOrUpdate.instance,t),t.end){const t=[],n=function(e){const t=e.key,r=new Map,n=256,o=l.I_,s=e.tileInfoView.tileInfo.isWrappable;return r.set((0,d.M)(t,-1,-1,s).id,new h([-o,-o],[o-n,o-n,o,o])),r.set((0,d.M)(t,0,-1,s).id,new h([0,-o],[0,o-n,o,o])),r.set((0,d.M)(t,1,-1,s).id,new h([o,-o],[0,o-n,n,o])),r.set((0,d.M)(t,-1,0,s).id,new h([-o,0],[o-n,0,o,o])),r.set((0,d.M)(t,1,0,s).id,new h([o,0],[0,0,n,o])),r.set((0,d.M)(t,-1,1,s).id,new h([-o,o],[o-n,0,o,n])),r.set((0,d.M)(t,0,1,s).id,new h([0,o],[0,0,o,n])),r.set((0,d.M)(t,1,1,s).id,new h([o,o],[0,0,n,n])),r}(e);this._tileKeyToFeatureSets.forEach(((r,s)=>{if(s===e.key.id)r.forEach((e=>(0,o.yw)(e.addOrUpdate,(e=>t.push(e)))));else if(n.has(s)){const e=n.get(s),[a,i]=e.offset;r.forEach((e=>(0,o.yw)(e.addOrUpdate,(e=>{const r=e.transform(a,i,1,1);t.push(r)}))))}}));const s=(0,i.QM)(t,this._schema.mesh,512,512),a={tileKey:e.key.id,intensityInfo:s},c=[s.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",a,{...r,transferList:c})}}onTileError(e,t,r){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},r)}};u=(0,n._)([(0,s.j)("esri.views.2d.layers.features.processors.HeatmapProcessor")],u);const f=u},35092:(e,t,r)=>{r.d(t,{M:()=>n});r(67906);function n(e,t,r,n){const o=e.clone(),s=1<<o.level,a=o.col+t,i=o.row+r;return n&&a<0?(o.col=a+s,o.world-=1):a>=s?(o.col=a-s,o.world+=1):o.col=a,o.row=i,o}}}]);
//# sourceMappingURL=3220.332e93e9.chunk.js.map