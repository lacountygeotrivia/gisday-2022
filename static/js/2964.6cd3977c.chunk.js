"use strict";(globalThis.webpackChunkth_v3=globalThis.webpackChunkth_v3||[]).push([[2964],{2964:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Y});var s=r(27366),o=r(44055),i=(r(94931),r(78451),r(34213),r(45130),r(49018),r(34999),r(79850),r(9014),r(40464)),a=r(76200),n=r(81608),p=r(10064),l=r(32718),d=r(92026),u=r(97642),y=r(66978),c=r(94172),h=r(35995),f=r(49861),m=(r(63780),r(93169),r(23879)),g=(r(25243),r(38511)),b=r(69912),v=r(25265),_=r(74184),I=r(27961),w=r(11936),C=r(6061),S=r(29598),F=r(56811),x=r(95731),L=r(96978),j=r(45948),T=r(87562),P=r(10536),A=r(34785),E=r(25610),O=r(52410),R=r(80031),D=r(34207),U=r(77748),q=r(85116),N=r(71065),M=r(46784);let Q=class extends M.wq{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};(0,s._)([(0,f.Cb)({type:String,json:{read:!0,write:!0}})],Q.prototype,"name",void 0),(0,s._)([(0,f.Cb)({type:String,json:{read:!0,write:!0}})],Q.prototype,"field",void 0),(0,s._)([(0,f.Cb)({type:[Number],json:{read:!0,write:!0}})],Q.prototype,"currentRangeExtent",void 0),(0,s._)([(0,f.Cb)({type:[Number],json:{read:!0,write:!0}})],Q.prototype,"fullRangeExtent",void 0),(0,s._)([(0,f.Cb)({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],Q.prototype,"type",void 0),Q=(0,s._)([(0,b.j)("esri.layers.support.RangeInfo")],Q);const Z=Q;var k=r(21371),G=r(21149),V=r(81085),W=r(81219);const $=["3DObject","Point"],B=l.Z.getLogger("esri.layers.SceneLayer"),K=(0,E.v)();let z=class extends((0,x.Vt)((0,w.Y)((0,C.q)((0,S.I)((0,F.M)((0,u.R)((0,I.V)(_.Z)))))))){constructor(){super(...arguments),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new n.Z,this.definitionExpression=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var r,s,o,i;const a=null==(r=this.getFeatureType(null==t?void 0:t.feature))||null==(s=r.domains)?void 0:s[e];return a&&"inherited"!==a.type?a:null!=(o=null==(i=this.getField(e))?void 0:i.domain)?o:null}getFeatureType(e){return e&&(0,d.pC)(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return(0,d.pC)(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return(0,d.pC)(this.associatedLayer)?this.associatedLayer.typeIdField:null}get formTemplate(){return(0,d.pC)(this.associatedLayer)?this.associatedLayer.formTemplate:null}get fieldsIndex(){return new O.Z(this.fields)}readNodePages(e,t,r){return"Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:D.U4.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get geometryType(){return J[this.profile]||"mesh"}set renderer(e){(0,R.YN)(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}get capabilities(){const e=(0,d.pC)(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:L.C,{query:t,editing:{supportsGlobalId:r,supportsRollbackOnFailure:s,supportsUploadWithItemId:o,supportsReturnServiceEditsInSourceSpatialReference:i},data:{supportsZ:a,supportsM:n,isVersioned:p,supportsAttachment:l},operations:{supportsEditing:u,supportsUpdate:y,supportsQuery:c,supportsQueryAttachments:h}}=e,f=e.operations.supportsChangeTracking;return{query:t,editing:{supportsGlobalId:r,supportsReturnServiceEditsInSourceSpatialReference:i,supportsRollbackOnFailure:s,supportsGeometryUpdate:!1,supportsUploadWithItemId:o},data:{supportsAttachment:l,supportsZ:a,supportsM:n,isVersioned:p},operations:{supportsQuery:c,supportsQueryAttachments:h,supportsEditing:u&&f,supportsAdd:!1,supportsDelete:!1,supportsUpdate:y&&f}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges}set editingEnabled(e){null!=e?this._override("editingEnabled",e):this._clearOverride("editingEnabled")}get defaultPopupTemplate(){return(0,d.pC)(this.associatedLayer)||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeOID"===t.type&&(e=t.name),!!e))),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e))),e||void 0}get displayField(){return(0,d.pC)(this.associatedLayer)?this.associatedLayer.displayField:null}readProfile(e,t){const r=t.store.profile;return null!=r&&H[r]?H[r]:(B.error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){const t=(0,d.pC)(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(y.r9).then((()=>this._fetchService(t))).then((()=>Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t)]))).then((()=>this._validateElevationInfo())).then((()=>this._applyAssociatedLayerOverrides())).then((()=>this._populateFieldUsageInfo())).then((()=>(0,k.y)(this,{origin:"service"},t))).then((()=>(0,R.YN)(this.renderer,this.fieldsIndex))).then((()=>this.finishLoadEditablePortalLayer(e)));return this.addResolvingPromise(r),Promise.resolve(this)}createQuery(){const e=new G.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=this,t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryAttachments(e,t)))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(B.error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return(0,V.eZ)(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return(0,d.pC)(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),(0,d.Wi)(this.associatedLayer))throw new p.Z("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new p.Z("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return null!=this.statisticsInfo&&this.statisticsInfo.some((t=>t.name===e))}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new p.Z("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new p.Z("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const s of this.statisticsInfo)if(s.name===r.name){const e=(0,h.v_)(this.parsedUrl.path,s.href);return(0,a.default)(e,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new p.Z("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(x.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(x.xp.SAVE,e)}async applyEdits(e,t){const s=await r.e(9887).then(r.bind(r,29887));if(await this.load(),(0,d.Wi)(this.associatedLayer))throw new p.Z(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),s.applyEdits(this,this.associatedLayer.source,e,t)}on(e,t){return super.on(e,t)}validateLayer(e){if(e.layerType&&-1===$.indexOf(e.layerType))throw new p.Z("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new p.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new p.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});!function(e,t){let r=!1,s=!1;if(null==e)r=!0,s=!0;else{const o=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":r=!0,s=o;break;case"vertex-reference-frame":r=!0,s=!o;break;default:r=!1}}if(!r)throw new p.Z("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!s)throw new p.Z("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new p.Z("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some((t=>t.name===e.name))),r=!!((0,d.pC)(this.associatedLayer)&&this.associatedLayer.fields&&this.associatedLayer.fields.some((t=>t&&e.name===t.name))),s={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||r,supportsLayerQuery:r};this._fieldUsageInfo[e.name]=s}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides()}_applyAssociatedLayerFieldsOverrides(){if((0,d.Wi)(this.associatedLayer)||!this.associatedLayer.fields)return;let e=null;for(const t of this.associatedLayer.fields){const r=this.getField(t.name);r?(!r.domain&&t.domain&&(r.domain=t.domain.clone()),r.editable=t.editable,r.nullable=t.nullable,r.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if((0,d.Wi)(this.associatedLayer))return;const e=["popupTemplate","popupEnabled"],t=(0,m.vw)(this);for(let r=0;r<e.length;r++){const s=e[r],o=this.originIdOf(s),i=this.associatedLayer.originIdOf(s);o<i&&(i===v.s3.SERVICE||i===v.s3.PORTAL_ITEM)&&t.setAtOrigin(s,this.associatedLayer[s],i)}}async _setAssociatedFeatureLayer(e){if(-1===["mesh-pyramids","points"].indexOf(this.profile))return;const t=new A.W(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedLayer=await t.fetch()}catch(r){(0,y.D_)(r)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await(0,c.N1)((()=>this.popupEnabled&&null!=this.popupTemplate));const e=`this SceneLayer: ${this.title}`;null==this.attributeStorageInfo?B.warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):B.info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}_validateElevationInfo(){const e=this.elevationInfo;e&&("mesh-pyramids"===this.profile&&"absolute-height"!==e.mode&&B.warn(".elevationInfo=","Mesh scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&B.warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}};(0,s._)([(0,f.Cb)({types:{key:"type",base:T.Z,typeMap:{selection:P.Z}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],z.prototype,"featureReduction",void 0),(0,s._)([(0,f.Cb)({type:[Z],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],z.prototype,"rangeInfos",void 0),(0,s._)([(0,f.Cb)({json:{read:!1}})],z.prototype,"associatedLayer",void 0),(0,s._)([(0,f.Cb)({type:["show","hide"]})],z.prototype,"listMode",void 0),(0,s._)([(0,f.Cb)({type:["ArcGISSceneServiceLayer"]})],z.prototype,"operationalLayerType",void 0),(0,s._)([(0,f.Cb)({json:{read:!1},readOnly:!0})],z.prototype,"type",void 0),(0,s._)([(0,f.Cb)({...K.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],z.prototype,"fields",void 0),(0,s._)([(0,f.Cb)()],z.prototype,"types",null),(0,s._)([(0,f.Cb)()],z.prototype,"typeIdField",null),(0,s._)([(0,f.Cb)()],z.prototype,"formTemplate",null),(0,s._)([(0,f.Cb)({readOnly:!0})],z.prototype,"fieldsIndex",null),(0,s._)([(0,f.Cb)({type:N.Z,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],z.prototype,"floorInfo",void 0),(0,s._)([(0,f.Cb)(K.outFields)],z.prototype,"outFields",void 0),(0,s._)([(0,f.Cb)({type:D.U4,readOnly:!0,json:{read:!1}})],z.prototype,"nodePages",void 0),(0,s._)([(0,g.r)("service","nodePages",["nodePages","pointNodePages"])],z.prototype,"readNodePages",null),(0,s._)([(0,f.Cb)({type:[D.QI],readOnly:!0})],z.prototype,"materialDefinitions",void 0),(0,s._)([(0,f.Cb)({type:[D.Yh],readOnly:!0})],z.prototype,"textureSetDefinitions",void 0),(0,s._)([(0,f.Cb)({type:[D.H3],readOnly:!0})],z.prototype,"geometryDefinitions",void 0),(0,s._)([(0,f.Cb)({readOnly:!0})],z.prototype,"serviceUpdateTimeStamp",void 0),(0,s._)([(0,f.Cb)({readOnly:!0})],z.prototype,"attributeStorageInfo",void 0),(0,s._)([(0,f.Cb)({readOnly:!0})],z.prototype,"statisticsInfo",void 0),(0,s._)([(0,f.Cb)({type:n.Z.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],z.prototype,"excludeObjectIds",void 0),(0,s._)([(0,f.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],z.prototype,"definitionExpression",void 0),(0,s._)([(0,f.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],z.prototype,"path",void 0),(0,s._)([(0,f.Cb)(j.PV)],z.prototype,"elevationInfo",null),(0,s._)([(0,f.Cb)({type:String})],z.prototype,"geometryType",null),(0,s._)([(0,f.Cb)(j.iR)],z.prototype,"labelsVisible",void 0),(0,s._)([(0,f.Cb)({type:[U.Z],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:q.r},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:q.r},write:!0}})],z.prototype,"labelingInfo",void 0),(0,s._)([(0,f.Cb)(j.rn)],z.prototype,"legendEnabled",void 0),(0,s._)([(0,f.Cb)({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){var r,s;if("number"==typeof e&&e>=0&&e<=1)return e;const o=null==(r=t.layerDefinition)||null==(s=r.drawingInfo)?void 0:s.transparency;return void 0!==o?(0,W.b)(o):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],z.prototype,"opacity",void 0),(0,s._)([(0,f.Cb)({types:i.o,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],z.prototype,"renderer",null),(0,s._)([(0,f.Cb)({json:{read:!1}})],z.prototype,"cachedDrawingInfo",void 0),(0,s._)([(0,g.r)("service","cachedDrawingInfo")],z.prototype,"readCachedDrawingInfo",null),(0,s._)([(0,f.Cb)({readOnly:!0,json:{read:!1}})],z.prototype,"capabilities",null),(0,s._)([(0,f.Cb)({type:Boolean,json:{read:!1}})],z.prototype,"editingEnabled",null),(0,s._)([(0,f.Cb)(j.C_)],z.prototype,"popupEnabled",void 0),(0,s._)([(0,f.Cb)({type:o.Z,json:{name:"popupInfo",write:!0}})],z.prototype,"popupTemplate",void 0),(0,s._)([(0,f.Cb)({readOnly:!0,json:{read:!1}})],z.prototype,"defaultPopupTemplate",null),(0,s._)([(0,f.Cb)({type:String,json:{read:!1}})],z.prototype,"objectIdField",void 0),(0,s._)([(0,g.r)("service","objectIdField",["objectIdField","fields"])],z.prototype,"readObjectIdField",null),(0,s._)([(0,f.Cb)({type:String,json:{read:!1}})],z.prototype,"globalIdField",void 0),(0,s._)([(0,g.r)("service","globalIdField",["globalIdField","fields"])],z.prototype,"readGlobalIdField",null),(0,s._)([(0,f.Cb)({readOnly:!0,type:String,json:{read:!1}})],z.prototype,"displayField",null),(0,s._)([(0,f.Cb)({type:String,json:{read:!1}})],z.prototype,"profile",void 0),(0,s._)([(0,g.r)("service","profile",["store.profile"])],z.prototype,"readProfile",null),(0,s._)([(0,f.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],z.prototype,"normalReferenceFrame",void 0),(0,s._)([(0,f.Cb)(j.YI)],z.prototype,"screenSizePerspectiveEnabled",void 0),z=(0,s._)([(0,b.j)("esri.layers.SceneLayer")],z);const H={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},J={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},Y=z},34785:(e,t,r)=>{r.d(t,{W:()=>d});var s=r(19545),o=r(76200),i=r(92026),a=r(66978),n=r(94990),p=r(70032),l=r(98995);class d{constructor(e,t,r,s){this.parsedUrl=e,this.portalItem=t,this.apiKey=r,this.signal=s,this.rootDocument=null;const o=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);o&&(this.urlParts={root:o[1],layerId:parseInt(o[2],10)})}async fetch(){var e;if(!this.urlParts)return null;const t=null!=(e=this.portalItem)?e:await this._portalItemFromServiceItemId();if((0,i.Wi)(t))return this._loadFromUrl();const r=await this._findAndLoadRelatedPortalItem(t);return(0,i.Wi)(r)?null:this._loadFeatureLayerFromPortalItem(r)}async fetchPortalItem(){var e;if(!this.urlParts)return null;const t=null!=(e=this.portalItem)?e:await this._portalItemFromServiceItemId();return(0,i.Wi)(t)?null:this._findAndLoadRelatedPortalItem(t)}async _fetchRootDocument(){if((0,i.pC)(this.rootDocument))return this.rootDocument;if((0,i.Wi)(this.urlParts))return this.rootDocument={},{};const e={query:{f:"json",token:this.apiKey},responseType:"json",signal:this.signal},t=`${this.urlParts.root}/SceneServer`;try{const r=await(0,o.default)(t,e);this.rootDocument=r.data}catch{this.rootDocument={}}return this.rootDocument}async _fetchServiceOwningPortalUrl(){var e;const t=null==(e=s.id)?void 0:e.findServerInfo(this.parsedUrl.path);if(null!=t&&t.owningSystemUrl)return t.owningSystemUrl;const r=this.parsedUrl.path.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const e=(await(0,o.default)(r,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(e)return e}catch(i){(0,a.r9)(i)}return null}async _findAndLoadRelatedPortalItem(e){try{return(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find((e=>"Feature Service"===e.type))||null}catch(t){return(0,a.r9)(t),null}}async _loadFeatureLayerFromPortalItem(e){await e.load({signal:this.signal});const t=await this._findMatchingAssociatedSublayerUrl(e.url);return new n.default({url:t,portalItem:e}).load({signal:this.signal})}async _loadFromUrl(){const e=await this._findMatchingAssociatedSublayerUrl(`${this.urlParts.root}/FeatureServer`);return new n.default({url:e}).load({signal:this.signal})}async _findMatchingAssociatedSublayerUrl(e){const t=e.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),r={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},s=this.urlParts.layerId,i=this._fetchRootDocument(),a=(0,o.default)(t,r),[n,p]=await Promise.all([a,i]),l=p&&p.layers,d=n.data&&n.data.layers;if(!Array.isArray(d))throw new Error("expected layers array");if(Array.isArray(l)){for(let o=0;o<Math.min(l.length,d.length);o++)if(l[o].id===s)return`${t}/${d[o].id}`}else if(s<d.length)return`${t}/${d[s].id}`;throw new Error("could not find matching associated sublayer")}async _portalItemFromServiceItemId(){const e=(await this._fetchRootDocument()).serviceItemId;if(!e)return null;const t=new l.default({id:e,apiKey:this.apiKey}),r=await this._fetchServiceOwningPortalUrl();(0,i.pC)(r)&&(t.portal=new p.Z({url:r}));try{return t.load({signal:this.signal})}catch(s){return(0,a.r9)(s),null}}}},34207:(e,t,r)=>{r.d(t,{H3:()=>g,QI:()=>u,U4:()=>p,Yh:()=>c});var s=r(27366),o=r(46784),i=r(49861),a=(r(63780),r(93169),r(25243),r(27135)),n=r(69912);let p=class extends o.wq{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,s._)([(0,i.Cb)({type:Number})],p.prototype,"nodesPerPage",void 0),(0,s._)([(0,i.Cb)({type:Number})],p.prototype,"rootIndex",void 0),(0,s._)([(0,i.Cb)({type:String})],p.prototype,"lodSelectionMetricType",void 0),p=(0,s._)([(0,n.j)("esri.layer.support.I3SNodePageDefinition")],p);let l=class extends o.wq{constructor(){super(...arguments),this.factor=1}};(0,s._)([(0,i.Cb)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],l.prototype,"id",void 0),(0,s._)([(0,i.Cb)({type:Number})],l.prototype,"factor",void 0),l=(0,s._)([(0,n.j)("esri.layer.support.I3SMaterialTexture")],l);let d=class extends o.wq{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,s._)([(0,i.Cb)({type:[Number]})],d.prototype,"baseColorFactor",void 0),(0,s._)([(0,i.Cb)({type:l})],d.prototype,"baseColorTexture",void 0),(0,s._)([(0,i.Cb)({type:l})],d.prototype,"metallicRoughnessTexture",void 0),(0,s._)([(0,i.Cb)({type:Number})],d.prototype,"metallicFactor",void 0),(0,s._)([(0,i.Cb)({type:Number})],d.prototype,"roughnessFactor",void 0),d=(0,s._)([(0,n.j)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],d);let u=class extends o.wq{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,s._)([(0,a.J)({opaque:"opaque",mask:"mask",blend:"blend"})],u.prototype,"alphaMode",void 0),(0,s._)([(0,i.Cb)({type:Number})],u.prototype,"alphaCutoff",void 0),(0,s._)([(0,i.Cb)({type:Boolean})],u.prototype,"doubleSided",void 0),(0,s._)([(0,a.J)({none:"none",back:"back",front:"front"})],u.prototype,"cullFace",void 0),(0,s._)([(0,i.Cb)({type:l})],u.prototype,"normalTexture",void 0),(0,s._)([(0,i.Cb)({type:l})],u.prototype,"occlusionTexture",void 0),(0,s._)([(0,i.Cb)({type:l})],u.prototype,"emissiveTexture",void 0),(0,s._)([(0,i.Cb)({type:[Number]})],u.prototype,"emissiveFactor",void 0),(0,s._)([(0,i.Cb)({type:d})],u.prototype,"pbrMetallicRoughness",void 0),u=(0,s._)([(0,n.j)("esri.layer.support.I3SMaterialDefinition")],u);let y=class extends o.wq{};(0,s._)([(0,i.Cb)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],y.prototype,"name",void 0),(0,s._)([(0,a.J)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],y.prototype,"format",void 0),y=(0,s._)([(0,n.j)("esri.layer.support.I3STextureFormat")],y);let c=class extends o.wq{constructor(){super(...arguments),this.atlas=!1}};(0,s._)([(0,i.Cb)({type:[y]})],c.prototype,"formats",void 0),(0,s._)([(0,i.Cb)({type:Boolean})],c.prototype,"atlas",void 0),c=(0,s._)([(0,n.j)("esri.layer.support.I3STextureSetDefinition")],c);let h=class extends o.wq{};(0,s._)([(0,a.J)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],h.prototype,"type",void 0),(0,s._)([(0,i.Cb)({type:Number})],h.prototype,"component",void 0),h=(0,s._)([(0,n.j)("esri.layer.support.I3SGeometryAttribute")],h);let f=class extends o.wq{};(0,s._)([(0,a.J)({draco:"draco"})],f.prototype,"encoding",void 0),(0,s._)([(0,i.Cb)({type:[String]})],f.prototype,"attributes",void 0),f=(0,s._)([(0,n.j)("esri.layer.support.I3SGeometryCompressedAttributes")],f);let m=class extends o.wq{constructor(){super(...arguments),this.offset=0}};(0,s._)([(0,i.Cb)({type:Number})],m.prototype,"offset",void 0),(0,s._)([(0,i.Cb)({type:h})],m.prototype,"position",void 0),(0,s._)([(0,i.Cb)({type:h})],m.prototype,"normal",void 0),(0,s._)([(0,i.Cb)({type:h})],m.prototype,"uv0",void 0),(0,s._)([(0,i.Cb)({type:h})],m.prototype,"color",void 0),(0,s._)([(0,i.Cb)({type:h})],m.prototype,"uvRegion",void 0),(0,s._)([(0,i.Cb)({type:h})],m.prototype,"featureId",void 0),(0,s._)([(0,i.Cb)({type:h})],m.prototype,"faceRange",void 0),(0,s._)([(0,i.Cb)({type:f})],m.prototype,"compressedAttributes",void 0),m=(0,s._)([(0,n.j)("esri.layer.support.I3SGeometryBuffer")],m);let g=class extends o.wq{};(0,s._)([(0,a.J)({triangle:"triangle"})],g.prototype,"topology",void 0),(0,s._)([(0,i.Cb)()],g.prototype,"geometryBuffers",void 0),g=(0,s._)([(0,n.j)("esri.layer.support.I3SGeometryDefinition")],g)},96978:(e,t,r)=>{r.d(t,{C:()=>s});const s={attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}}}]);
//# sourceMappingURL=2964.6cd3977c.chunk.js.map