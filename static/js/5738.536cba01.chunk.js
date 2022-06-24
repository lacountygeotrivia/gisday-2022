"use strict";(globalThis.webpackChunkth_v3=globalThis.webpackChunkth_v3||[]).push([[5738],{5738:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var s=i(27366),l=i(32718),a=i(66978),r=i(49861),h=(i(63780),i(93169),i(25243),i(69912)),n=i(92975),u=i(4321),c=i(95986),o=i(34622),f=i(37995),d=i(73828),p=i(32344),_=i(85269),y=i(67581),w=i(13107);const g=[102113,102100,3857,3785,900913],m=[0,0],I=l.Z.getLogger("esri.views.2d.layers.WMTSLayerView2D");let S=class extends((0,w.y)((0,u.Y)((0,c.y)(y.Z)))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null}get tileMatrixSet(){const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){if(!this.tileMatrixSet)return;const{tileInfo:e}=this.tileMatrixSet;this._tileInfoView=new f.Z(e),this._fetchQueue=new p.Z({tileInfoView:this._tileInfoView,concurrency:16,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new _.Z({cachePolicy:"keep",resampling:!0,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.handles.add(this.watch(["layer.activeLayer.styleId","tileMatrixSet"],(()=>this._refresh())),this.declaredClass),super.attach()}detach(){var e,t;super.detach(),this.handles.remove(this.declaredClass),null==(e=this._tileStrategy)||e.destroy(),null==(t=this._fetchQueue)||t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate()}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(m,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}async doRefresh(){this.updateRequested||this.suspended||this._refresh()}isUpdating(){var e,t;return null!=(e=null==(t=this._fetchQueue)?void 0:t.updating)&&e}async fetchTile(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:s,resamplingLevel:l=0}=t;if(!i)return this._fetchImage(e,s);const r=new d.Z(0,0,0,0);let h;try{await i.fetchAvailabilityUpsample(e.level,e.row,e.col,r,{signal:s}),h=await this._fetchImage(r,s)}catch(n){if((0,a.D_)(n))throw n;if(l<3){const i=this._tileInfoView.getTileParentId(e.id);if(i){const s=new d.Z(i),a=await this.fetchTile(s,{...t,resamplingLevel:l+1});return(0,o.i)(this._tileInfoView,a,s,e)}}throw n}return(0,o.i)(this._tileInfoView,h,r,e)}canResume(){const e=super.canResume();return e?null!==this.tileMatrixSet:e}supportsSpatialReference(e){return this.layer.activeLayer.tileMatrixSets.some((t=>(0,n.fS)(t.tileInfo.spatialReference,e)))}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()))}catch(t){(0,a.D_)(t)||I.error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{signal:t})}_refresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>{if(!e.bitmap.source)return;const t={id:e.key.id,fulfilled:!1,promise:this._fetchQueue.push(e.key).then((t=>{e.bitmap.source=t})).catch((t=>{(0,a.D_)(t)||(e.bitmap.source=null)})).finally((()=>{e.requestRender(),t.fulfilled=!0}))};this._tileRequests.set(e,t)}))}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find((e=>(0,n.fS)(e.tileInfo.spatialReference,t)));return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find((e=>g.includes(e.tileInfo.spatialReference.wkid)))),i}};(0,s._)([(0,r.Cb)()],S.prototype,"_fetchQueue",void 0),(0,s._)([(0,r.Cb)({readOnly:!0})],S.prototype,"tileMatrixSet",null),S=(0,s._)([(0,h.j)("esri.views.2d.layers.WMTSLayerView2D")],S);const v=S}}]);
//# sourceMappingURL=5738.536cba01.chunk.js.map