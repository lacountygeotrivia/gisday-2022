"use strict";(globalThis.webpackChunkth_v3=globalThis.webpackChunkth_v3||[]).push([[505,5164],{9997:(e,t,n)=>{n.d(t,{F:()=>y,M:()=>i});const i={Base64:0,Hex:1,String:2,Raw:3};function r(e,t){const n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function l(e){const t=[];for(let n=0,i=8*e.length;n<i;n+=8)t[n>>5]|=(255&e.charCodeAt(n/8))<<n%32;return t}function s(e){const t=[];for(let n=0,i=32*e.length;n<i;n+=8)t.push(String.fromCharCode(e[n>>5]>>>n%32&255));return t.join("")}function a(e){const t="0123456789abcdef",n=[];for(let i=0,r=4*e.length;i<r;i++)n.push(t.charAt(e[i>>2]>>i%4*8+4&15)+t.charAt(e[i>>2]>>i%4*8&15));return n.join("")}function o(e){const t=[];for(let n=0,i=4*e.length;n<i;n+=3){const i=(e[n>>2]>>n%4*8&255)<<16|(e[n+1>>2]>>(n+1)%4*8&255)<<8|e[n+2>>2]>>(n+2)%4*8&255;for(let r=0;r<4;r++)8*n+6*r>32*e.length?t.push("="):t.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i>>6*(3-r)&63))}return t.join("")}function u(e,t,n,i,l,s){return r(function(e,t){return e<<t|e>>>32-t}(r(r(t,e),r(i,s)),l),n)}function c(e,t,n,i,r,l,s){return u(t&n|~t&i,e,t,r,l,s)}function d(e,t,n,i,r,l,s){return u(t&i|n&~i,e,t,r,l,s)}function f(e,t,n,i,r,l,s){return u(t^n^i,e,t,r,l,s)}function p(e,t,n,i,r,l,s){return u(n^(t|~i),e,t,r,l,s)}function m(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;let n=1732584193,i=-271733879,l=-1732584194,s=271733878;for(let a=0;a<e.length;a+=16){const t=n,o=i,u=l,m=s;n=c(n,i,l,s,e[a+0],7,-680876936),s=c(s,n,i,l,e[a+1],12,-389564586),l=c(l,s,n,i,e[a+2],17,606105819),i=c(i,l,s,n,e[a+3],22,-1044525330),n=c(n,i,l,s,e[a+4],7,-176418897),s=c(s,n,i,l,e[a+5],12,1200080426),l=c(l,s,n,i,e[a+6],17,-1473231341),i=c(i,l,s,n,e[a+7],22,-45705983),n=c(n,i,l,s,e[a+8],7,1770035416),s=c(s,n,i,l,e[a+9],12,-1958414417),l=c(l,s,n,i,e[a+10],17,-42063),i=c(i,l,s,n,e[a+11],22,-1990404162),n=c(n,i,l,s,e[a+12],7,1804603682),s=c(s,n,i,l,e[a+13],12,-40341101),l=c(l,s,n,i,e[a+14],17,-1502002290),i=c(i,l,s,n,e[a+15],22,1236535329),n=d(n,i,l,s,e[a+1],5,-165796510),s=d(s,n,i,l,e[a+6],9,-1069501632),l=d(l,s,n,i,e[a+11],14,643717713),i=d(i,l,s,n,e[a+0],20,-373897302),n=d(n,i,l,s,e[a+5],5,-701558691),s=d(s,n,i,l,e[a+10],9,38016083),l=d(l,s,n,i,e[a+15],14,-660478335),i=d(i,l,s,n,e[a+4],20,-405537848),n=d(n,i,l,s,e[a+9],5,568446438),s=d(s,n,i,l,e[a+14],9,-1019803690),l=d(l,s,n,i,e[a+3],14,-187363961),i=d(i,l,s,n,e[a+8],20,1163531501),n=d(n,i,l,s,e[a+13],5,-1444681467),s=d(s,n,i,l,e[a+2],9,-51403784),l=d(l,s,n,i,e[a+7],14,1735328473),i=d(i,l,s,n,e[a+12],20,-1926607734),n=f(n,i,l,s,e[a+5],4,-378558),s=f(s,n,i,l,e[a+8],11,-2022574463),l=f(l,s,n,i,e[a+11],16,1839030562),i=f(i,l,s,n,e[a+14],23,-35309556),n=f(n,i,l,s,e[a+1],4,-1530992060),s=f(s,n,i,l,e[a+4],11,1272893353),l=f(l,s,n,i,e[a+7],16,-155497632),i=f(i,l,s,n,e[a+10],23,-1094730640),n=f(n,i,l,s,e[a+13],4,681279174),s=f(s,n,i,l,e[a+0],11,-358537222),l=f(l,s,n,i,e[a+3],16,-722521979),i=f(i,l,s,n,e[a+6],23,76029189),n=f(n,i,l,s,e[a+9],4,-640364487),s=f(s,n,i,l,e[a+12],11,-421815835),l=f(l,s,n,i,e[a+15],16,530742520),i=f(i,l,s,n,e[a+2],23,-995338651),n=p(n,i,l,s,e[a+0],6,-198630844),s=p(s,n,i,l,e[a+7],10,1126891415),l=p(l,s,n,i,e[a+14],15,-1416354905),i=p(i,l,s,n,e[a+5],21,-57434055),n=p(n,i,l,s,e[a+12],6,1700485571),s=p(s,n,i,l,e[a+3],10,-1894986606),l=p(l,s,n,i,e[a+10],15,-1051523),i=p(i,l,s,n,e[a+1],21,-2054922799),n=p(n,i,l,s,e[a+8],6,1873313359),s=p(s,n,i,l,e[a+15],10,-30611744),l=p(l,s,n,i,e[a+6],15,-1560198380),i=p(i,l,s,n,e[a+13],21,1309151649),n=p(n,i,l,s,e[a+4],6,-145523070),s=p(s,n,i,l,e[a+11],10,-1120210379),l=p(l,s,n,i,e[a+2],15,718787259),i=p(i,l,s,n,e[a+9],21,-343485551),n=r(n,t),i=r(i,o),l=r(l,u),s=r(s,m)}return[n,i,l,s]}function y(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.Hex;const n=t||i.Base64,r=m(l(e),8*e.length);switch(n){case i.Raw:return r;case i.Hex:return a(r);case i.String:return s(r);case i.Base64:return o(r)}}},71277:(e,t,n)=>{function i(e){return e=e||globalThis.location.hostname,u.some((t=>{var n;return null!=(null==(n=e)?void 0:n.match(t))}))}function r(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(l)||null!=t.match(a)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(s)||null!=t.match(o)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}n.d(t,{XO:()=>i,pJ:()=>r});const l=/^devext.arcgis.com$/,s=/^qaext.arcgis.com$/,a=/^[\w-]*\.mapsdevext.arcgis.com$/,o=/^[\w-]*\.mapsqa.arcgis.com$/,u=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,l,s,/^jsapps.esri.com$/,a,o]},58971:(e,t,n)=>{n.d(t,{G6:()=>V,Ie:()=>z,J9:()=>S,RF:()=>h,U1:()=>w,vY:()=>o,ym:()=>v});var i=n(92026),r=n(77981);const l=(e,t,n)=>[t,n],s=(e,t,n)=>[t,n,e[2]],a=(e,t,n)=>[t,n,e[2],e[3]];function o(e){return e?{originPosition:"upper-left"===e.originPosition?"upperLeft":"lower-left"===e.originPosition?"lowerLeft":e.originPosition,scale:e.tolerance?[e.tolerance,e.tolerance]:[1,1],translate:(0,i.pC)(e.extent)?[e.extent.xmin,e.extent.ymax]:[0,0]}:null}function u(e,t){let{scale:n,translate:i}=e;return Math.round((t-i[0])/n[0])}function c(e,t){let{scale:n,translate:i}=e;return Math.round((i[1]-t)/n[1])}function d(e,t,n){const i=[];let r,l,s,a;for(let o=0;o<n.length;o++){const d=n[o];o>0?(s=u(e,d[0]),a=c(e,d[1]),s===r&&a===l||(i.push(t(d,s-r,a-l)),r=s,l=a)):(r=u(e,d[0]),l=c(e,d[1]),i.push(t(d,r,l)))}return i.length>0?i:null}function f(e,t){let{scale:n,translate:i}=e;return t*n[0]+i[0]}function p(e,t){let{scale:n,translate:i}=e;return i[1]-t*n[1]}function m(e,t,n){const i=new Array(n.length);if(!n.length)return i;const[r,l]=e.scale;let s=f(e,n[0][0]),a=p(e,n[0][1]);i[0]=t(n[0],s,a);for(let o=1;o<n.length;o++){const e=n[o];s+=e[0]*r,a-=e[1]*l,i[o]=t(e,s,a)}return i}function y(e,t,n){const i=new Array(n.length);for(let r=0;r<n.length;r++)i[r]=m(e,t,n[r]);return i}function g(e,t,n,i,r){return t.points=function(e,t,n,i){return d(e,n?i?a:s:i?s:l,t)}(e,n.points,i,r),t}function h(e,t,n,i,r){return t.x=u(e,n.x),t.y=c(e,n.y),t!==n&&(i&&(t.z=n.z),r&&(t.m=n.m)),t}function b(e,t,n,i,r){const o=function(e,t,n,i){const r=[],o=n?i?a:s:i?s:l;for(let l=0;l<t.length;l++){const n=d(e,o,t[l]);n&&n.length>=3&&r.push(n)}return r.length?r:null}(e,n.rings,i,r);return o?(t.rings=o,t):null}function x(e,t,n,i,r){const o=function(e,t,n,i){const r=[],o=n?i?a:s:i?s:l;for(let l=0;l<t.length;l++){const n=d(e,o,t[l]);n&&n.length>=2&&r.push(n)}return r.length?r:null}(e,n.paths,i,r);return o?(t.paths=o,t):null}function v(e,t){return e&&t?(0,r.wp)(t)?h(e,{},t,!1,!1):(0,r.l9)(t)?x(e,{},t,!1,!1):(0,r.oU)(t)?b(e,{},t,!1,!1):(0,r.aW)(t)?g(e,{},t,!1,!1):(0,r.YX)(t)?function(e,t,n,i,r){return t.xmin=u(e,n.xmin),t.ymin=c(e,n.ymin),t.xmax=u(e,n.xmax),t.ymax=c(e,n.ymax),t!==n&&(i&&(t.zmin=n.zmin,t.zmax=n.zmax),r&&(t.mmin=n.mmin,t.mmax=n.mmax)),t}(e,{},t,!1,!1):null:null}function S(e,t,n,r,o){return(0,i.pC)(n)&&(t.points=function(e,t,n,i){return m(e,n?i?a:s:i?s:l,t)}(e,n.points,r,o)),t}function w(e,t,n,r,l){return(0,i.Wi)(n)||(t.x=f(e,n.x),t.y=p(e,n.y),t!==n&&(r&&(t.z=n.z),l&&(t.m=n.m))),t}function z(e,t,n,r,o){return(0,i.pC)(n)&&(t.rings=function(e,t,n,i){return y(e,n?i?a:s:i?s:l,t)}(e,n.rings,r,o)),t}function V(e,t,n,r,o){return(0,i.pC)(n)&&(t.paths=function(e,t,n,i){return y(e,n?i?a:s:i?s:l,t)}(e,n.paths,r,o)),t}},18745:(e,t,n)=>{n.d(t,{a:()=>o});var i=n(10064),r=n(32718),l=n(80613),s=n(46640);const a=r.Z.getLogger("esri.views.2d.engine.webgl");function o(e){return(0,s.hj)(e.minDataValue)&&(0,s.hj)(e.maxDataValue)&&null!=e.minSize&&null!=e.maxSize?l.X.SIZE_MINMAX_VALUE:(e.expression&&"view.scale"===e.expression||e.valueExpression&&"$view.scale"===e.valueExpression)&&Array.isArray(e.stops)?l.X.SIZE_SCALE_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&(Array.isArray(e.stops)||"levels"in e&&e.levels)?l.X.SIZE_FIELD_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&null!=e.valueUnit?l.X.SIZE_UNIT_VALUE:(a.error(new i.Z("mapview-bad-type","Found invalid size VisualVariable",e)),l.X.NONE)}},85164:(e,t,n)=>{n.r(t),n.d(t,{createSymbolSchema:()=>a});var i=n(80613),r=n(54815);function l(e){var t;return"line-marker"===e.type?{type:"line-marker",color:null==(t=e.color)?void 0:t.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function s(e){return hydrateKey(e)}function a(e,t,n){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return u(e,t,n);case"simple-marker":case"picture-marker":return d(e,t,n);case"simple-line":return c(e,t,n);case"text":return f(e,t,n);case"label":return o(e,t,n);case"cim":return{type:"cim",rendererKey:t.vvFlags,data:e.data,maxVVSize:t.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:t.vvFlags,data:e,maxVVSize:t.maxVVSize};case"web-style":return{...l(e),type:"web-style",hash:e.hash(),rendererKey:t.vvFlags,maxVVSize:t.maxVVSize};default:throw new Error(`symbol not supported ${e.type}`)}}function o(e,t,n){const l=e.toJSON(),a=(0,r.jj)(i.LW.LABEL,{...t,placement:l.labelPlacement});return{materialKey:n?s(a):a,hash:e.hash(),...l,labelPlacement:l.labelPlacement}}function u(e,t,n){const a=t.supportsOutlineFills,o=(0,r.jj)(i.LW.FILL,{...t,isOutlinedFill:a}),u=n?s(o):o,c=e.clone(),d=c.outline;t.supportsOutlineFills||(c.outline=null);const f={materialKey:u,hash:c.hash(),isOutlinedFill:!!t.supportsOutlineFills,...l(c)};if(t.supportsOutlineFills)return f;const p=[];if(p.push(f),d){const e=(0,r.jj)(i.LW.LINE,{...t,isOutline:!0}),a={materialKey:n?s(e):e,hash:d.hash(),...l(d)};p.push(a)}return{type:"composite-symbol",layers:p,hash:p.reduce(((e,t)=>t.hash+e),"")}}function c(e,t,n){const a=(0,r.jj)(i.LW.LINE,t),o=n?s(a):a,u=e.clone(),c=u.marker;u.marker=null;const d=[];if(d.push({materialKey:o,hash:u.hash(),...l(u)}),c){var f;const e=(0,r.jj)(i.LW.MARKER,t),a=n?s(e):e;c.color=null!=(f=c.color)?f:u.color,d.push({materialKey:a,hash:c.hash(),lineWidth:u.width,...l(c)})}return{type:"composite-symbol",layers:d,hash:d.reduce(((e,t)=>t.hash+e),"")}}function d(e,t,n){const a=(0,r.jj)(i.LW.MARKER,t),o=n?s(a):a,u=l(e);return{materialKey:o,hash:e.hash(),...u,angle:e.angle,maxVVSize:t.maxVVSize}}function f(e,t,n){const a=(0,r.jj)(i.LW.TEXT,t),o=n?s(a):a,u=l(e);return{materialKey:o,hash:e.hash(),...u,angle:e.angle,maxVVSize:t.maxVVSize}}},69534:(e,t,n)=>{n.d(t,{MD:()=>j,Ew:()=>E,q5:()=>z});var i=n(10064),r=n(93169),l=n(84652),s=n(32718),a=n(92026),o=n(17842),u=n(46640),c=n(80613),d=n(18745);var f=n(85164),p=(n(78915),n(691)),m=n(94109);n(95857),n(98125);function y(e){if(!("visualVariables"in e))return 0;if(!e.hasVisualVariables("size"))return 0;const t=e.getVisualVariablesForType("size");if(!t[0])return 0;const n=t[0];if("outline"===n.target)return 0;if("stops"===n.transformationType)return n.stops.map((e=>e.size)).reduce(g,0);if("clamped-linear"===n.transformationType){let e=-1/0,t=-1/0;return e="number"==typeof n.maxSize?n.maxSize:n.maxSize.stops.map((e=>e.size)).reduce(g,0),t="number"==typeof n.minSize?n.minSize:n.minSize.stops.map((e=>e.size)).reduce(g,0),Math.max(e,t)}return"real-world-size"===n.transformationType?30:void 0}m.eF.metrics,new p.Z(0,0,24,24);function g(e,t){return Math.max(e,t)}var h=n(91370),b=n(20478),x=n(31666);const v=s.Z.getLogger("esri.views.2d.layers.features.schemaUtils"),S="ValidationError",w={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function z(e){let t=0,n=0,i=!1,r=!0,l=!0;if((0,a.pC)(e)){if(n=y(e),"visualVariables"in e&&(t=function(e){if(!e)return c.X.NONE;let t=0;for(const n of e)if("size"===n.type){const e=(0,d.a)(n);t|=e,"outline"===n.target&&(t|=e<<4)}else"color"===n.type?t|=c.X.COLOR:"opacity"===n.type?t|=c.X.OPACITY:"rotation"===n.type&&(t|=c.X.ROTATION);return t}(e.visualVariables||[]),i="dot-density"===e.type),"dictionary"===e.type)return{maxVVSize:n,supportsOutlineFills:!1,vvFlags:t,stride:{fill:"default"}};if(!i){const t=e.getSymbols();"backgroundFillSymbol"in e&&e.backgroundFillSymbol&&t.push(e.backgroundFillSymbol);for(const e of t)if("cim"===e.type&&(r=!1),"simple-fill"===e.type||"picture-fill"===e.type){const t=e.outline;t&&"none"!==t.style&&"solid"!==t.style&&(l=!1);const n=t&&"none"!==t.style&&"solid"!==t.style,i="simple-fill"===e.type&&"none"!==e.style&&"solid"!==e.style;("picture-fill"===e.type||i||n)&&(r=!1)}}}return i&&(l=!1),{vvFlags:t,maxVVSize:n,supportsOutlineFills:l,stride:{fill:i?"dot-density":r?"simple":"default"}}}function V(e,t){const n=(0,l.d9)(e);return n.some((e=>function(e,t){const n=e.labelPlacement,r=w[t];if(!e.symbol)return v.warn("No ILabelClass symbol specified."),!0;if(!r)return v.error(new i.Z("mapview-labeling:unsupported-geometry-type",`Unable to create labels for Feature Layer, ${t} is not supported`)),!0;if(!r.some((e=>e===n))){const i=r[0];n&&v.warn(`Found invalid label placement type ${n} for ${t}. Defaulting to ${i}`),e.labelPlacement=i}return!1}(e,t)))?[]:n}function E(e){return(0,r.Z)("esri-2d-update-debug")&&console.debug("Created new schema",F(e,!0)),F(e)}function F(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{var n,i;const r=_(e,t),l={};return r.map((t=>T(l,e,t))),{source:{definitionExpression:e.definitionExpression,fields:e.fields.map((e=>e.toJSON())),gdbVersion:e.gdbVersion,historicMoment:null==(n=e.historicMoment)?void 0:n.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:null==(i=e.timeExtent)?void 0:i.toJSON(),customParameters:e.customParameters},attributes:{fields:{},indexCount:0},processors:r,targets:l}}catch(r){if(r.fieldName===S)return v.error(r),null;throw r}}function T(e,t,n){switch(n.target){case"feature":return void L(e,O(t),n);case"aggregate":{if(!("featureReduction"in t))return;const r=t.featureReduction;if("selection"===r.type)throw new i.Z(S,"Mapview does not support `selection` reduction type",r);return L(e,O(t),n),void function(e,t,n){e.aggregate||(e.aggregate={name:"aggregate",input:"feature",filters:null,attributes:{},params:{clusterRadius:(0,o.F2)(t.clusterRadius/2),clusterPixelBuffer:64*Math.ceil((0,o.F2)(t.clusterMaxSize)/64),fields:n.aggregateFields}}),I(e.aggregate,n.attributes.fields)}(e,r,n)}}}function I(e,t){for(const n in t){const i=t[n];if(i.target!==e.name)continue;const r=e.attributes[n];r?(r.context.mesh=r.context.mesh||i.context.mesh,r.context.storage=r.context.storage||i.context.storage):e.attributes[n]=i}return e}function O(e){var t,n,i,r,l;return[null!=(t=null==(n=(0,a.Wg)(e.filter))?void 0:n.toJSON())?t:null,null!=(i=null==(r=(0,a.Wg)(null==(l=(0,a.Wg)(e.featureEffect))?void 0:l.filter))?void 0:r.toJSON())?i:null]}function L(e,t,n){return e.feature||(e.feature={name:"feature",input:"source",filters:t,attributes:{}}),I(e.feature,n.attributes.fields),e}function N(e,t){return t.field?Z(e,{...t,type:"field",field:t.field}):t.valueExpression?Z(e,{...t,type:"expression",valueExpression:t.valueExpression}):{field:null,fieldIndex:null}}function Z(e,t){switch(t.type){case"expression":{const n=t.valueExpression;if(!e.fields[n]){const i=e.indexCount++;e.fields[n]={...t,name:n,fieldIndex:i}}return{fieldIndex:e.fields[n].fieldIndex}}case"label-expression":{const n=JSON.stringify(t.label);if(!e.fields[n]){const i=e.indexCount++;e.fields[n]={...t,name:n,fieldIndex:i}}return{fieldIndex:e.fields[n].fieldIndex}}case"field":{const n=t.field;return"aggregate"===t.target&&e.fields[n]||(e.fields[n]={...t,name:n}),{field:n}}case"statistic":return e.fields[t.name]={...t},{field:t.name}}}function _(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=new Array;let i=0;return n.push(R(e,i++,t)),n}function M(e,t,n,i,r){let l=arguments.length>5&&void 0!==arguments[5]&&arguments[5];const s=Z(t,{type:"label-expression",target:i,context:{mesh:!0},resultType:"string",label:{labelExpression:n.labelExpression,labelExpressionInfo:n.labelExpressionInfo?{expression:n.labelExpressionInfo.expression}:null,symbol:!!n.symbol,where:n.where}}),{fieldIndex:a}=s,o=z(e);return{...(0,f.createSymbolSchema)(n,o,l),fieldIndex:a,target:i,index:r}}function R(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const r={indexCount:0,fields:{}},l="featureReduction"in e&&e.featureReduction,s=l?"aggregate":"feature";if("sublayers"in e){const t={type:"subtype",subtypeField:e.subtypeField,renderers:{},stride:{fill:"default"}},l={type:"subtype",mapping:{},target:"feature"},o={type:"subtype",classes:{}},u={type:"symbol",target:"feature",aggregateFields:[],attributes:r,storage:l,mesh:{matcher:t,aggregateMatcher:null,labels:o,sortKey:null}},c=new Set;let d=0;for(const{renderer:f,subtypeCode:p,labelingInfo:m,labelsVisible:y}of e.sublayers){const e=j(r,s,f,n),u=P(r,s,f),g=y&&m;if("visualVariables"in f&&f.visualVariables&&f.visualVariables.length)throw new i.Z(S,"Visual variables are currently not supported for subtype layers");if("dictionary"===e.type)throw new i.Z(S,"Dictionary renderer is not supported in subtype layers");if("subtype"===e.type)throw new i.Z(S,"Nested subtype renderers is not supported");if((0,a.pC)(u)&&"subtype"===u.type)throw new i.Z(S,"Nested subtype storage is not supported");if((0,a.pC)(u)&&"dot-density"===u.type)throw new i.Z(S,"Dot density attributes are not supported in subtype layers");if(c.has(p))throw new i.Z(S,"Subtype codes for sublayers must be unique");c.add(p),t.renderers[p]=e,l.mapping[p]=u,g&&(o.classes[p]=g.map((e=>M(f,r,e,"feature",d++,n))))}return u}if("heatmap"===e.renderer.type){const{blurRadius:t,fieldOffset:n,field:i}=e.renderer;return{type:"heatmap",aggregateFields:[],attributes:r,target:s,storage:null,mesh:{blurRadius:t,fieldOffset:n,field:N(r,{target:s,field:i,resultType:"numeric"}).field}}}{const t=[],a="aggregate"===s?(0,b.S1)(t,e.renderer,l,null):e.renderer;k(r,t);const o=j(r,s,a,n);let u=null;const c=P(r,s,a),d=(0,x.oq)(e.geometryType);let p=e.labelsVisible&&e.labelingInfo||[],m=[];if(l){if("selection"===l.type)throw new i.Z(S,"Mapview does not support `selection` reduction type",l);if(l.symbol){const e=z(a);u={type:"simple",symbol:(0,f.createSymbolSchema)(l.symbol,e,n),stride:e.stride}}m=l&&l.labelsVisible&&l.labelingInfo||[]}p=V(p,d),m=V(m,d);let y=0;const g=[...p.map((e=>M(a,r,e,"feature",y++,n))),...m.map((e=>M(a,r,e,"aggregate",y++,n)))],h=C(r,e.orderBy);return{type:"symbol",target:s,attributes:r,aggregateFields:t,storage:c,mesh:{matcher:o,labels:{type:"simple",classes:g},aggregateMatcher:u,sortKey:h}}}}function C(e,t){if((0,a.Wi)(t)||!t.length)return null;t.length>1&&v.warn(`Layer rendering currently only supports ordering by 1 orderByInfo, but found ${t.length}. All but the first will be discarded`);const n=t[0],r="ascending"===n.order?"asc":"desc";return n.field?{field:n.field,order:r}:n.valueExpression?{fieldIndex:Z(e,{type:"expression",target:"feature",valueExpression:n.valueExpression,resultType:"numeric"}).fieldIndex,order:r}:(v.error(new i.Z(S,"Expected to find a field or valueExpression for OrderByInfo",n)),null)}function k(e,t){const n={mesh:!0,storage:!0};for(const i of t){const{name:t,outStatistic:r}=i,{statisticType:l,onStatisticField:s}=r;let a=null,o=null,u=null;const c="numeric",d="feature";"onStatisticValueExpression"in r?o=Z(e,{type:"expression",target:d,valueExpression:r.onStatisticValueExpression,resultType:c}).fieldIndex:"onStatisticNormalizationField"in r?(a=Z(e,{type:"field",target:d,field:s,resultType:c}).field,u=r.onStatisticNormalizationField):a=Z(e,{type:"field",target:d,field:s,resultType:c}).field,Z(e,{type:"statistic",target:"aggregate",name:t,context:n,inField:a,inNormalizationField:u,inFieldIndex:o,statisticType:l})}}function P(e,t,n){switch(n.type){case"dot-density":return function(e,t,n){return n&&n.length?{type:"dot-density",mapping:n.map(((n,i)=>{const{field:r,fieldIndex:l}=N(e,{valueExpression:n.valueExpression,field:n.field,resultType:"numeric",target:t});return{binding:i,field:r,fieldIndex:l}})),target:t}:{type:"dot-density",mapping:[],target:t}}(e,t,n.attributes);case"simple":case"class-breaks":case"unique-value":case"dictionary":return function(e,t,n){if(!n||!n.length)return{type:"visual-variable",mapping:[],target:t};const i={storage:!0},r="numeric";return{type:"visual-variable",mapping:(0,h.t)(n).map((n=>{var l;const s=(0,u.nU)(n.type),{field:a,fieldIndex:o}=N(e,{target:t,valueExpression:n.valueExpression,field:n.field,context:i,resultType:r});switch(n.type){case"size":return"$view.scale"===n.valueExpression?null:{type:"size",binding:s,field:a,fieldIndex:o,normalizationField:N(e,{target:t,field:n.normalizationField,context:i,resultType:r}).field,valueRepresentation:null!=(l=n.valueRepresentation)?l:null};case"color":return{type:"color",binding:s,field:a,fieldIndex:o,normalizationField:N(e,{target:t,field:n.normalizationField,context:i,resultType:r}).field};case"opacity":return{type:"opacity",binding:s,field:a,fieldIndex:o,normalizationField:N(e,{target:t,field:n.normalizationField,context:i,resultType:r}).field};case"rotation":return{type:"rotation",binding:s,field:a,fieldIndex:o}}})).filter((e=>e)),target:t}}(e,t,n.visualVariables);case"heatmap":return null}}function j(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const r=(0,a.Pt)(e,{indexCount:0,fields:{}});switch(n.type){case"simple":case"dot-density":return A(r,n,i);case"class-breaks":return $(r,t,n,i);case"unique-value":return K(r,t,n,i);case"dictionary":return W(r,n,i)}}function A(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const i=t.getSymbols(),r=i.length?i[0]:null,l=z(t);return{type:"simple",symbol:(0,f.createSymbolSchema)(r,l,n),stride:l.stride}}function $(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const r={mesh:!0,use:"renderer.field"},l=n.backgroundFillSymbol,{field:s,fieldIndex:a}=N(e,{target:t,field:n.field,valueExpression:n.valueExpression,resultType:"numeric",context:r}),o=n.normalizationType,u="log"===o?"esriNormalizeByLog":"percent-of-total"===o?"esriNormalizeByPercentOfTotal":"field"===o?"esriNormalizeByField":null,c=z(n),d=n.classBreakInfos.map((e=>({symbol:(0,f.createSymbolSchema)(e.symbol,c,i),min:e.minValue,max:e.maxValue}))).sort(((e,t)=>e.min-t.min));return{type:"interval",attributes:e.fields,field:s,fieldIndex:a,backgroundFillSymbol:(0,f.createSymbolSchema)(l,c,i),defaultSymbol:(0,f.createSymbolSchema)(n.defaultSymbol,c,i),intervals:d,normalizationField:n.normalizationField,normalizationTotal:n.normalizationTotal,normalizationType:u,isMaxInclusive:n.isMaxInclusive,stride:c.stride}}function K(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const l=[],s=n.backgroundFillSymbol,a={target:t,context:{mesh:!0},resultType:"string"};if(n.field&&"string"!=typeof n.field)throw new i.Z(S,"Expected renderer.field to be a string",n);const{field:o,fieldIndex:u}=N(e,{...a,field:n.field,valueExpression:n.valueExpression}),c=z(n);for(const i of n.uniqueValueInfos)l.push({value:""+i.value,symbol:(0,f.createSymbolSchema)(i.symbol,c,r)});return{type:"map",attributes:e.fields,field:o,fieldIndex:u,field2:N(e,{...a,field:n.field2}).field,field3:N(e,{...a,field:n.field3}).field,fieldDelimiter:n.fieldDelimiter,backgroundFillSymbol:(0,f.createSymbolSchema)(s,c),defaultSymbol:(0,f.createSymbolSchema)(n.defaultSymbol,c),map:l,stride:c.stride}}function W(e,t){const n=z(t);return{type:"dictionary",config:t.config,fieldMap:t.fieldMap,scaleExpression:t.scaleExpression,url:t.url,symbolOptions:n,stride:n.stride}}},91370:(e,t,n)=>{n.d(t,{a:()=>s,t:()=>a});var i=n(32718),r=n(17842);const l=i.Z.getLogger("esri.renderers.visualVariables.support.utils"),s=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e;const t=e.clone(),n=t.visualVariables.map((e=>o(e)?u(e):e));return t.visualVariables=n,t};function a(e){return e.map((e=>o(e)?u(e.clone()):e))}function o(e){return("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function u(e){return e.stops=function(e,t){return t.length<=8?t:(l.warn(`Found ${t.length} Visual Variable stops, but MapView only supports 8. Displayed stops will be simplified.`),t.length>16?function(e,t){const[n,...i]=t,l=i.pop(),s=i[0].value,a=i[i.length-1].value,o=(a-s)/6,u=[];for(let d=s;d<a;d+=o){let n=0;for(;d>=i[n].value;)n++;const l=i[n],s=t[n-1],a=d-s.value,o=l.value===s.value?1:a/(l.value-s.value);if("color"===e){const e=i[n],r=t[n-1],l=e.color.clone();l.r=c(r.color.r,l.r,o),l.g=c(r.color.g,l.g,o),l.b=c(r.color.b,l.b,o),l.a=c(r.color.a,l.a,o),u.push({value:d,color:l,label:e.label})}else if("size"===e){const e=i[n],l=t[n-1],s=(0,r.t_)(e.size),a=c((0,r.t_)(l.size),s,o);u.push({value:d,size:a,label:e.label})}else{const e=i[n],r=c(t[n-1].opacity,e.opacity,o);u.push({value:d,opacity:r,label:e.label})}}return[n,...u,l]}(e,t):function(e){const[t,...n]=e,i=n.pop();for(;n.length>6;){let e=0,t=0;for(let i=1;i<n.length;i++){const r=n[i-1],l=n[i],s=Math.abs(l.value-r.value);s>t&&(t=s,e=i)}n.splice(e,1)}return[t,...n,i]}(t))}(e.type,e.stops),e}function c(e,t,n){return(1-n)*e+n*t}},95857:(e,t,n)=>{n.d(t,{I_:()=>a,XA:()=>p,Zu:()=>u,ab:()=>c,eT:()=>f,y1:()=>o,yA:()=>d});n(75746);var i=n(92026),r=n(80885),l=n(65156),s=n(76335);n(38999),n(94109),n(47975);const a=512,o=50;function u(e,t){if(!t.isWrappable)return null;const[n,i]=(0,s.uS)(t);return e[2]>i?[(0,l.Ue)([e[0],e[1],i,e[3]]),(0,l.Ue)([n,e[1],n+e[2]-i,e[3]])]:e[0]<n?[(0,l.Ue)([n,e[1],e[2],e[3]]),(0,l.Ue)([i-(n-e[0]),e[1],i,e[3]])]:null}function c(e){return"text"===e||"esriTS"===e}function d(e){return"simple-marker"===e||"picture-marker"===e||"esriSMS"===e||"esriPMS"===e}function f(e){switch((0,i.Wg)(e.geometry).type){case"point":case"multipoint":return 0;case"polyline":return 1;case"polygon":case"extent":return 2}return 0}function p(e){if(!e)return null;const{xmin:t,ymin:n,xmax:i,ymax:l,spatialReference:s}=e;return new r.Z({rings:[[[t,n],[t,l],[i,l],[i,n],[t,n]]],spatialReference:s})}},98125:(e,t,n)=>{n.d(t,{xS:()=>b,B3:()=>h});var i=n(79815),r=n(80613),l=n(54815);const s={marker:r.LW.MARKER,fill:r.LW.FILL,line:r.LW.LINE,text:r.LW.TEXT};class a{constructor(e,t,n,i){const r={minScale:null==t?void 0:t.minScale,maxScale:null==t?void 0:t.maxScale},a=function(e){return e.minScale||e.maxScale?e.minScale+"-"+e.maxScale:""}(r);this.layers=e,this.data=t,this.hash=this._createHash()+a,this.rendererKey=n;const o={isOutline:!1,isOutlinedFill:!1,placement:null,stride:{fill:"default"},vvFlags:n};for(const u of e){const e=s[u.type];u.materialKey=(0,l.jj)(e,o),u.maxVVSize=i,u.scaleInfo=r,u.templateHash+=a}}get type(){return"expanded-cim"}_createHash(){let e="";for(const t of this.layers)e+=t.templateHash;return e}}var o=n(71277),u=n(10064),c=n(66978),d=n(35995),f=n(70032),p=n(53283),m=n(86423);async function y(e,t,n){if(!e.name)return Promise.reject(new u.Z("style-symbol-reference-name-missing","Missing name in style symbol reference"));if(e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName)return async function(e,t){const i=m.wm.replace(/\{SymbolName\}/gi,e.name);try{const e=await(0,m.EJ)(i,t);return(0,m.KV)(e.data)}catch(n){return(0,c.k_)(n),null}}(e,n);try{return async function(e,t,n,i){const r=e.data,l={portal:n&&n.portal||f.Z.getDefault(),url:(0,d.mN)(e.baseUrl),origin:"portal-item"},s=r.items.find((e=>e.name===t));if(!s)throw new u.Z("symbolstyleutils:symbol-name-not-found",`The symbol name '${t}' could not be found`,{symbolName:t});let a=(0,p.f)((0,m.v9)(s,"cimRef"),l);(0,o.XO)()&&(a=(0,o.pJ)(a));try{const e=await(0,m.EJ)(a,i);return(0,m.KV)(e.data)}catch(y){return(0,c.k_)(y),null}}(await(0,m.n2)(e,t,n),e.name,t,n)}catch(i){return(0,c.k_)(i),null}}const g=async(e,t,n)=>new a(await(0,i.c)(e.data,t,n),e.data,e.rendererKey,e.maxVVSize),h=async(e,t,n,i)=>{if(!e)return null;if("cim"===e.type)return g(e,t,n);if("web-style"===e.type){const r={type:"cim",data:await y(e,null,i),rendererKey:e.rendererKey,maxVVSize:e.maxVVSize};return g(r,t,n)}return e};function b(e){if(!e)return null;const{type:t,cim:n,url:i,materialHash:r}=e,l={cim:n,type:t,mosaicHash:r,url:i,size:null,dashTemplate:null,path:null,text:null,fontName:null};switch(t){case"marker":l.size=e.size,l.path=e.path;break;case"line":l.dashTemplate=e.dashTemplate;break;case"text":l.text=e.text,l.fontName=e.fontName}return l}},20478:(e,t,n)=>{n.d(t,{aV:()=>z,S1:()=>v,os:()=>S,yR:()=>V});var i,r=n(10064),l=n(93169),s=n(32718),a=n(92026),o=n(9997),u=n(17590),c=n(53896),d=n(27366),f=n(84652),p=n(49861),m=(n(25243),n(69912)),y=n(31201),g=n(80724);let h=i=class extends u.Z{writeLevels(e,t,n){for(const i in e){const e=this.levels[i];return void(t.stops=e)}}clone(){return new i({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:(0,g.iY)(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:(0,g.iY)(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map((e=>e.clone())),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone(),levels:(0,f.d9)(this.levels)})}};(0,d._)([(0,p.Cb)()],h.prototype,"levels",void 0),(0,d._)([(0,y.c)("levels")],h.prototype,"writeLevels",null),h=i=(0,d._)([(0,m.j)("esri.views.2d.engine.LevelDependentSizeVariable")],h);const b=s.Z.getLogger("esri.views.2d.layers.support.clusterUtils");l.Z.add("esri-cluster-arcade-enabled",!0);const x=(0,l.Z)("esri-cluster-arcade-enabled"),v=(e,t,n,i)=>{const r=t.clone();if(!V(r))return r;if(n.fields)for(const l of n.fields)E(e,l);if("visualVariables"in r){const t=(r.visualVariables||[]).filter((e=>"$view.scale"!==e.valueExpression)),l=S(t);t.forEach((t=>{"rotation"===t.type?t.field?t.field=T(e,t.field,"avg_angle"):t.valueExpression&&(t.field=F(e,t.valueExpression,"avg_angle"),t.valueExpression=null):t.normalizationField?(t.field=T(e,t.field,"norm",t.normalizationField),t.normalizationField=null):t.field?t.field=T(e,t.field,"avg"):(t.field=F(e,t.valueExpression,"avg"),t.valueExpression=null)})),(0,a.Wi)(l)&&!w(t)&&(t.push(z(n,i)),r.dynamicClusterSize=!0),r.visualVariables=t}switch(r.type){case"simple":break;case"unique-value":r.field?r.field=T(e,r.field,"mode"):r.valueExpression&&(r.field=F(e,r.valueExpression,"mode"),r.valueExpression=null);break;case"class-breaks":r.normalizationField?(r.field=T(e,r.field,"norm",r.normalizationField),r.normalizationField=null):r.field?r.field=T(e,r.field,"avg"):(r.field=F(e,r.valueExpression,"avg"),r.valueExpression=null)}return r},S=e=>{for(const t of e)if("size"===t.type)return t;return null},w=e=>{for(const t of e)if("cluster_count"===t.field)return!0;return!1},z=(e,t)=>{const n=[new c.Z({value:0,size:0}),new c.Z({value:1})];if((0,a.Wi)(t))return new u.Z({field:"cluster_count",stops:[...n,new c.Z({value:2,size:0})]});const i=Object.keys(t).reduce(((i,r)=>({...i,[r]:[...n,new c.Z({value:Math.max(2,t[r].minValue),size:e.clusterMinSize}),new c.Z({value:Math.max(3,t[r].maxValue),size:e.clusterMaxSize})]})),{});return new h({field:"cluster_count",levels:i})},V=e=>{const t=t=>b.error(new r.Z("Unsupported-renderer",t,{renderer:e}));if("unique-value"===e.type){if(e.field2||e.field3)return t("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1}else if("class-breaks"===e.type){if(e.normalizationField){const n=e.normalizationType;if("field"!==n)return t(`FeatureReductionCluster does not support a normalizationType of ${n}`),!1}}else if("simple"!==e.type)return t(`FeatureReductionCluster does not support renderers of type ${e.type}`),!1;if(!x){if("valueExpression"in e&&e.valueExpression)return t("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in e&&e.visualVariables||[]).some((e=>!(!("valueExpression"in e)||!e.valueExpression))))return t("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function E(e,t){const{name:n,outStatistic:i}=t,{onStatisticField:l,onStatisticValueExpression:s,statisticType:a}=i;if(s){const t=(0,o.F)(s.toLowerCase());e.push({name:n,outStatistic:{onStatisticField:t,onStatisticValueExpression:s,statisticType:a}})}else l?e.push({name:n,outStatistic:{onStatisticField:l,statisticType:a}}):b.error(new r.Z("mapview-unsupported-field","Unable to handle field",{field:t}))}function F(e,t,n){const i=(0,o.F)(t),r="mode"===n?`cluster_type_${i}`:`cluster_avg_${i}`;return e.some((e=>e.name===r))||e.push({name:r,outStatistic:{onStatisticField:i,onStatisticValueExpression:t,statisticType:n}}),r}function T(e,t,n,i){if("cluster_count"===t||e.some((e=>e.name===t)))return t;const r=function(e,t,n){switch(e){case"avg":case"avg_angle":return`cluster_avg_${t}`;case"mode":return`cluster_type_${t}`;case"norm":{const e=n,i="field",r=t.toLowerCase()+",norm:"+i+","+e.toLowerCase();return"cluster_avg_"+(0,o.F)(r)}}}(n,t,i);return e.some((e=>e.name===r))||("norm"===n?e.push({name:r,outStatistic:{onStatisticField:t,onStatisticNormalizationField:i,statisticType:n}}):e.push({name:r,outStatistic:{onStatisticField:t,statisticType:n}})),r}},31666:(e,t,n)=>{n.d(t,{JV:()=>l,oq:()=>r});const i=new(n(43404).X)({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function r(e){return i.toJSON(e)}function l(e){const{bandCount:t,attributeTable:n,colormap:i,pixelType:r}=e.rasterInfo;return 1===t&&(null!=n||null!=i||"u8"===r||"s8"===r)}}}]);
//# sourceMappingURL=505.25e8bdc7.chunk.js.map