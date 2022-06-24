"use strict";(globalThis.webpackChunkth_v3=globalThis.webpackChunkth_v3||[]).push([[1378],{51378:(_,t,E)=>{E.d(t,{x:()=>N});E(93169);var e=E(16889),T=E(92026),R=E(37825),A=E(49800),i=E(8548),r=E(30308);class N{constructor(_,t){let E=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(this._context=_,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,_.instanceCounter.increment(i._g.Texture,this),this._descriptor={target:i.No.TEXTURE_2D,samplingMode:i.cw.LINEAR,wrapMode:i.e8.REPEAT,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,isImmutable:!1,...t},_.type!==A.zO.WEBGL2&&(this._descriptor.isImmutable&&(this._descriptor.isImmutable=!1),n(this._descriptor.target)))throw new Error("3D and array textures are not supported in WebGL1");this._descriptor.target===i.No.TEXTURE_CUBE_MAP?this._setDataCubeMap(E):this.setData(E)}get glName(){return this._glName}get descriptor(){return this._descriptor}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._context.gl&&this._glName&&(this._context.unbindTextureAllUnits(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(i._g.Texture,this))}release(){this.dispose()}resize(_,t){const E=this._descriptor;if(E.width!==_||E.height!==t){if(this._wasImmutablyAllocated)throw new Error("Immutable textures can't be resized!");E.width=_,E.height=t,this._descriptor.target===i.No.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(){let _=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;for(let t=i.No.TEXTURE_CUBE_MAP_POSITIVE_X;t<=i.No.TEXTURE_CUBE_MAP_NEGATIVE_Z;t++)this._setData(_,t)}setData(_){this._setData(_)}_setData(_,t){if(!this._context||!this._context.gl)return;const E=this._context.gl;this._glName||(this._glName=E.createTexture()),void 0===_&&(_=null);const e=this._descriptor;null!=t||(t=e.target);const A=n(t);var s;null===_&&(e.width=e.width||4,e.height=e.height||4,A&&(e.depth=null!=(s=e.depth)?s:1));const S=this._context.bindTexture(this,N.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(N.TEXTURE_UNIT_FOR_UPDATES),N._validateTexture(this._context,e),this._configurePixelStorage();const C=e.pixelFormat;let O=e.internalFormat?e.internalFormat:this._deriveInternalFormat(C,e.dataType);if(a(_)){let T=_.width,i=_.height;const r=1;_ instanceof HTMLVideoElement&&(T=_.videoWidth,i=_.videoHeight),e.width&&e.height,A&&e.depth,e.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(t,O,e.hasMipmap,T,i,r),this._texImage(t,0,O,T,i,r,_),(0,R.zu)(E),e.hasMipmap&&this.generateMipmap(),void 0===e.width&&(e.width=T),void 0===e.height&&(e.height=i),A&&void 0===e.depth&&(e.depth=r)}else{const{width:N,height:a,depth:n}=e;if(null!=N&&null!=a||console.error("Width and height must be specified!"),A&&null==n&&console.error("Depth must be specified!"),e.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(t,O,e.hasMipmap,N,a,n),E.DEPTH24_STENCIL8&&O===E.DEPTH_STENCIL&&(O=E.DEPTH24_STENCIL8),o(_)){const T=_.levels,R=I(t,N,a,n),A=Math.min(R-1,T.length-1);(0,r.Z)(E)?E.texParameteri(e.target,E.TEXTURE_MAX_LEVEL,A):e.hasMipmap=e.hasMipmap&&R===T.length;const o=O;if(!function(_){return _ in i.q_}(o))throw new Error("Attempting to use compressed data with an umcompressed format!");this._forEachMipmapLevel(((_,E,e,R)=>{const A=T[Math.min(_,T.length-1)];this._compressedTexImage(t,_,o,E,e,R,A)}),A)}else(0,T.pC)(_)?(this._texImage(t,0,O,N,a,n,_),(0,R.zu)(E),e.hasMipmap&&this.generateMipmap()):this._forEachMipmapLevel(((_,e,T,A)=>{this._texImage(t,_,O,e,T,A,null),(0,R.zu)(E)}))}N._applySamplingMode(E,this._descriptor),N._applyWrapMode(E,this._descriptor),N._applyAnisotropicFilteringParameters(this._context,this._descriptor),(0,R.zu)(E),this._context.bindTexture(S,N.TEXTURE_UNIT_FOR_UPDATES)}updateData(_,t,E,e,T,R){R||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const A=this._context.gl,i=this._descriptor,{pixelFormat:r,internalFormat:n,dataType:I,isImmutable:s,target:S}=i;if(s&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");const C=this._context.bindTexture(this,N.TEXTURE_UNIT_FOR_UPDATES);(t<0||E<0||e>i.width||T>i.height||t+e>i.width||E+T>i.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),a(R)?A.texSubImage2D(S,_,t,E,r,I,R):o(R)?A.compressedTexSubImage2D(S,_,t,E,e,T,n,R.levels[_]):A.texSubImage2D(S,_,t,E,e,T,r,I,R),this._context.bindTexture(C,N.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(_,t,E,e,T,R,A,i){i||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const a=this._context.gl;if(!(0,r.Z)(a))throw new Error("3D textures are not supported in WebGL1");const I=this._descriptor,{pixelFormat:s,dataType:S,isImmutable:C,target:O,internalFormat:M}=I;if(C&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");n(O)||console.warn("Attempting to set 3D texture data on a non-3D texture");const D=this._context.bindTexture(this,N.TEXTURE_UNIT_FOR_UPDATES);if(this._context.setActiveTexture(N.TEXTURE_UNIT_FOR_UPDATES),(t<0||E<0||e<0||T>I.width||R>I.height||A>I.depth||t+T>I.width||E+R>I.height||e+A>I.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),o(i))i=i.levels[_],a.compressedTexSubImage3D(O,_,t,E,e,T,R,A,M,i);else{const r=i;a.texSubImage3D(O,_,t,E,e,T,R,A,s,S,r)}this._context.bindTexture(D,N.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const _=this._descriptor;if(!_.hasMipmap){if(this._wasImmutablyAllocated)throw new Error("Cannot add mipmaps to immutable texture after allocation");_.hasMipmap=!0,this._samplingModeDirty=!0,N._validateTexture(this._context,_)}_.samplingMode===i.cw.LINEAR?(this._samplingModeDirty=!0,_.samplingMode=i.cw.LINEAR_MIPMAP_NEAREST):_.samplingMode===i.cw.NEAREST&&(this._samplingModeDirty=!0,_.samplingMode=i.cw.NEAREST_MIPMAP_NEAREST);const t=this._context.bindTexture(this,N.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(N.TEXTURE_UNIT_FOR_UPDATES),this._context.gl.generateMipmap(_.target),this._context.bindTexture(t,N.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(_){_!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=_,this._samplingModeDirty=!0)}setWrapMode(_){_!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=_,N._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const _=this._context.gl,t=this._descriptor;this._samplingModeDirty&&(N._applySamplingMode(_,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(N._applyWrapMode(_,t),this._wrapModeDirty=!1)}_deriveInternalFormat(_,t){if(this._context.type===A.zO.WEBGL1)return _;switch(t){case i.Br.FLOAT:switch(_){case i.VI.RGBA:return i.lP.RGBA32F;case i.VI.RGB:return i.lP.RGB32F;default:throw new Error("Unable to derive format")}case i.Br.UNSIGNED_BYTE:switch(_){case i.VI.RGBA:return i.lP.RGBA8;case i.VI.RGB:return i.lP.RGB8}default:return _}}_configurePixelStorage(){const _=this._context.gl,{unpackAlignment:t,flipped:E,preMultiplyAlpha:e}=this._descriptor;_.pixelStorei(_.UNPACK_ALIGNMENT,t),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,E?1:0),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,e?1:0)}_texStorage(_,t,E,e,T,R){const A=this._context.gl;if(!(0,r.Z)(A))throw new Error("Immutable textures are not supported in WebGL1");if(!function(_){return _ in i.lP}(t))throw new Error("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const N=E?I(_,e,T,R):1;n(_)?A.texStorage3D(_,N,t,e,T,R):A.texStorage2D(_,N,t,e,T),this._wasImmutablyAllocated=!0}_texImage(_,t,E,e,R,i,r){const N=this._context.gl;let o=null;const I=this._context.type===A.zO.WEBGL2,s=n(_),{isImmutable:S,pixelFormat:C,dataType:O}=this._descriptor;if(I&&(o=N),I||!a(r))if(S){if((0,T.pC)(r)){const E=r;s?o.texSubImage3D(_,t,0,0,0,e,R,i,C,O,E):N.texSubImage2D(_,t,0,0,e,R,C,O,E)}}else{const A=(0,T.Wg)(r);s?o.texImage3D(_,t,E,e,R,i,0,C,O,A):N.texImage2D(_,t,E,e,R,0,C,O,A)}else N.texImage2D(_,0,E,C,O,r)}_compressedTexImage(_,t,E,e,R,i,r){const N=this._context.gl;let o=null;const a=n(_),I=this._descriptor.isImmutable;if(a){if(this._context.type!==A.zO.WEBGL2)throw new Error("3D textures are not supported in WebGL1");o=N}I?(0,T.pC)(r)&&(a?o.compressedTexSubImage3D(_,t,0,0,0,e,R,i,E,r):N.compressedTexSubImage2D(_,t,0,0,e,R,E,r)):a?o.compressedTexImage3D(_,t,E,e,R,i,0,r):N.compressedTexImage2D(_,t,E,e,R,0,r)}_forEachMipmapLevel(_){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0,{width:E,height:e,depth:T,hasMipmap:R,target:A}=this._descriptor;const r=A===i.No.TEXTURE_3D;for(let i=0;_(i,E,e,T),R&&(1!==E||1!==e||r&&1!==T)&&!(i>=t);++i)E=Math.max(1,E>>1),e=Math.max(1,e>>1),r&&(T=Math.max(1,T>>1))}static _validateTexture(_,t){(t.width<0||t.height<0||t.depth<0)&&console.error("Negative dimension parameters are not allowed!");const E=(0,r.Z)(_.gl),T=(0,e.wt)(t.width)&&(0,e.wt)(t.height);E||!t.isImmutable&&!n(t.target)||console.error("Immutable and 3D-like textures are not supported in WebGL1!"),E||T||("number"==typeof t.wrapMode?t.wrapMode!==i.e8.CLAMP_TO_EDGE&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):t.wrapMode.s===i.e8.CLAMP_TO_EDGE&&t.wrapMode.t===i.e8.CLAMP_TO_EDGE||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(_,t){let E=t.samplingMode,e=t.samplingMode;E===i.cw.LINEAR_MIPMAP_NEAREST||E===i.cw.LINEAR_MIPMAP_LINEAR?(E=i.cw.LINEAR,t.hasMipmap||(e=i.cw.LINEAR)):E!==i.cw.NEAREST_MIPMAP_NEAREST&&E!==i.cw.NEAREST_MIPMAP_LINEAR||(E=i.cw.NEAREST,t.hasMipmap||(e=i.cw.NEAREST)),_.texParameteri(t.target,_.TEXTURE_MAG_FILTER,E),_.texParameteri(t.target,_.TEXTURE_MIN_FILTER,e)}static _applyWrapMode(_,t){"number"==typeof t.wrapMode?(_.texParameteri(t.target,_.TEXTURE_WRAP_S,t.wrapMode),_.texParameteri(t.target,_.TEXTURE_WRAP_T,t.wrapMode)):(_.texParameteri(t.target,_.TEXTURE_WRAP_S,t.wrapMode.s),_.texParameteri(t.target,_.TEXTURE_WRAP_T,t.wrapMode.t))}static _applyAnisotropicFilteringParameters(_,t){var E;const e=_.capabilities.textureFilterAnisotropic;e&&_.gl.texParameterf(t.target,e.TEXTURE_MAX_ANISOTROPY,null!=(E=t.maxAnisotropy)?E:1)}}function o(_){return(0,T.pC)(_)&&"type"in _&&"compressed"===_.type}function a(_){return(0,T.pC)(_)&&!o(_)&&!function(_){return(0,T.pC)(_)&&"byteLength"in _}(_)}function n(_){return _===i.No.TEXTURE_3D||_===i.No.TEXTURE_2D_ARRAY}function I(_,t,E){let e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,T=Math.max(t,E);return _===i.No.TEXTURE_3D&&(T=Math.max(T,e)),Math.round(Math.log(T)/Math.LN2)+1}N.TEXTURE_UNIT_FOR_UPDATES=0},30308:(_,t,E)=>{function e(_){return window.WebGL2RenderingContext&&_ instanceof window.WebGL2RenderingContext}E.d(t,{Z:()=>e})},37825:(_,t,E)=>{E.d(t,{CG:()=>r,hZ:()=>i,zu:()=>N});var e=E(10064),T=E(93169);const R=E(32718).Z.getLogger("esri/views/webgl");const A=!!(0,T.Z)("enable-feature:webgl-debug");function i(){return A}function r(){return A}function N(_){if(i()){const t=_.getError();if(t){const E=function(_,t){switch(t){case _.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case _.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case _.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case _.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case _.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case _.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(_,t),T=(new Error).stack;R.error(new e.Z("webgl-error","WebGL error occured",{message:E,stack:T}))}}}},8548:(_,t,E)=>{var e,T,R,A,i,r,N,o,a,n,I,s,S,C,O,M,D,L,P,U,l,c;E.d(t,{Br:()=>M,Ho:()=>P,LR:()=>r,Ld:()=>h,Lm:()=>l,Lu:()=>G,MX:()=>T,No:()=>S,OU:()=>c,Se:()=>m,Tg:()=>D,V7:()=>x,VI:()=>C,VY:()=>p,Wf:()=>N,Y5:()=>g,_g:()=>u,cw:()=>I,db:()=>A,e8:()=>s,g:()=>o,l1:()=>L,lP:()=>O,lk:()=>e,q_:()=>d,qi:()=>U,w0:()=>i,wb:()=>a,xS:()=>n,zi:()=>R}),function(_){_[_.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",_[_.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",_[_.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(e||(e={})),function(_){_[_.POINTS=0]="POINTS",_[_.LINES=1]="LINES",_[_.LINE_LOOP=2]="LINE_LOOP",_[_.LINE_STRIP=3]="LINE_STRIP",_[_.TRIANGLES=4]="TRIANGLES",_[_.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",_[_.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(T||(T={})),function(_){_[_.ZERO=0]="ZERO",_[_.ONE=1]="ONE",_[_.SRC_COLOR=768]="SRC_COLOR",_[_.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",_[_.SRC_ALPHA=770]="SRC_ALPHA",_[_.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",_[_.DST_ALPHA=772]="DST_ALPHA",_[_.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",_[_.DST_COLOR=774]="DST_COLOR",_[_.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",_[_.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",_[_.CONSTANT_COLOR=32769]="CONSTANT_COLOR",_[_.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",_[_.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",_[_.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(R||(R={})),function(_){_[_.ADD=32774]="ADD",_[_.SUBTRACT=32778]="SUBTRACT",_[_.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(A||(A={})),function(_){_[_.ARRAY_BUFFER=34962]="ARRAY_BUFFER",_[_.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",_[_.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",_[_.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",_[_.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",_[_.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",_[_.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"}(i||(i={})),function(_){_[_.FRONT=1028]="FRONT",_[_.BACK=1029]="BACK",_[_.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(r||(r={})),function(_){_[_.CW=2304]="CW",_[_.CCW=2305]="CCW"}(N||(N={})),function(_){_[_.BYTE=5120]="BYTE",_[_.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",_[_.SHORT=5122]="SHORT",_[_.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",_[_.INT=5124]="INT",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.FLOAT=5126]="FLOAT"}(o||(o={})),function(_){_[_.NEVER=512]="NEVER",_[_.LESS=513]="LESS",_[_.EQUAL=514]="EQUAL",_[_.LEQUAL=515]="LEQUAL",_[_.GREATER=516]="GREATER",_[_.NOTEQUAL=517]="NOTEQUAL",_[_.GEQUAL=518]="GEQUAL",_[_.ALWAYS=519]="ALWAYS"}(a||(a={})),function(_){_[_.ZERO=0]="ZERO",_[_.KEEP=7680]="KEEP",_[_.REPLACE=7681]="REPLACE",_[_.INCR=7682]="INCR",_[_.DECR=7683]="DECR",_[_.INVERT=5386]="INVERT",_[_.INCR_WRAP=34055]="INCR_WRAP",_[_.DECR_WRAP=34056]="DECR_WRAP"}(n||(n={})),function(_){_[_.NEAREST=9728]="NEAREST",_[_.LINEAR=9729]="LINEAR",_[_.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",_[_.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",_[_.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",_[_.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(I||(I={})),function(_){_[_.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",_[_.REPEAT=10497]="REPEAT",_[_.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(s||(s={})),function(_){_[_.TEXTURE_2D=3553]="TEXTURE_2D",_[_.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",_[_.TEXTURE_3D=32879]="TEXTURE_3D",_[_.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",_[_.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",_[_.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",_[_.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",_[_.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",_[_.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",_[_.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(S||(S={})),function(_){_[_.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",_[_.DEPTH_STENCIL=34041]="DEPTH_STENCIL",_[_.ALPHA=6406]="ALPHA",_[_.RGB=6407]="RGB",_[_.RGBA=6408]="RGBA",_[_.LUMINANCE=6409]="LUMINANCE",_[_.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",_[_.RED=6403]="RED",_[_.RG=33319]="RG",_[_.RED_INTEGER=36244]="RED_INTEGER",_[_.RG_INTEGER=33320]="RG_INTEGER",_[_.RGB_INTEGER=36248]="RGB_INTEGER",_[_.RGBA_INTEGER=36249]="RGBA_INTEGER"}(C||(C={})),function(_){_[_.RGBA4=32854]="RGBA4",_[_.R16F=33325]="R16F",_[_.RG16F=33327]="RG16F",_[_.RGB32F=34837]="RGB32F",_[_.RGBA16F=34842]="RGBA16F",_[_.R32F=33326]="R32F",_[_.RG32F=33328]="RG32F",_[_.RGBA32F=34836]="RGBA32F",_[_.R11F_G11F_B10F=35898]="R11F_G11F_B10F",_[_.RGB8=32849]="RGB8",_[_.RGBA8=32856]="RGBA8",_[_.RGB5_A1=32855]="RGB5_A1",_[_.R8=33321]="R8",_[_.RG8=33323]="RG8",_[_.R8I=33329]="R8I",_[_.R8UI=33330]="R8UI",_[_.R16I=33331]="R16I",_[_.R16UI=33332]="R16UI",_[_.R32I=33333]="R32I",_[_.R32UI=33334]="R32UI",_[_.RG8I=33335]="RG8I",_[_.RG8UI=33336]="RG8UI",_[_.RG16I=33337]="RG16I",_[_.RG16UI=33338]="RG16UI",_[_.RG32I=33339]="RG32I",_[_.RG32UI=33340]="RG32UI",_[_.RGB16F=34843]="RGB16F",_[_.RGB9_E5=35901]="RGB9_E5",_[_.SRGB8=35905]="SRGB8",_[_.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",_[_.RGB565=36194]="RGB565",_[_.RGBA32UI=36208]="RGBA32UI",_[_.RGB32UI=36209]="RGB32UI",_[_.RGBA16UI=36214]="RGBA16UI",_[_.RGB16UI=36215]="RGB16UI",_[_.RGBA8UI=36220]="RGBA8UI",_[_.RGB8UI=36221]="RGB8UI",_[_.RGBA32I=36226]="RGBA32I",_[_.RGB32I=36227]="RGB32I",_[_.RGBA16I=36232]="RGBA16I",_[_.RGB16I=36233]="RGB16I",_[_.RGBA8I=36238]="RGBA8I",_[_.RGB8I=36239]="RGB8I",_[_.R8_SNORM=36756]="R8_SNORM",_[_.RG8_SNORM=36757]="RG8_SNORM",_[_.RGB8_SNORM=36758]="RGB8_SNORM",_[_.RGBA8_SNORM=36759]="RGBA8_SNORM",_[_.RGB10_A2=32857]="RGB10_A2",_[_.RGB10_A2UI=36975]="RGB10_A2UI"}(O||(O={})),function(_){_[_.FLOAT=5126]="FLOAT",_[_.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",_[_.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",_[_.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",_[_.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",_[_.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",_[_.BYTE=5120]="BYTE",_[_.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",_[_.SHORT=5122]="SHORT",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.INT=5124]="INT",_[_.HALF_FLOAT=5131]="HALF_FLOAT",_[_.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",_[_.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",_[_.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",_[_.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(M||(M={})),function(_){_[_.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",_[_.STENCIL_INDEX8=36168]="STENCIL_INDEX8",_[_.DEPTH_STENCIL=34041]="DEPTH_STENCIL",_[_.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",_[_.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",_[_.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",_[_.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(D||(D={})),function(_){_[_.STATIC_DRAW=35044]="STATIC_DRAW",_[_.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",_[_.STREAM_DRAW=35040]="STREAM_DRAW",_[_.STATIC_READ=35045]="STATIC_READ",_[_.DYNAMIC_READ=35049]="DYNAMIC_READ",_[_.STREAM_READ=35041]="STREAM_READ",_[_.STATIC_COPY=35046]="STATIC_COPY",_[_.DYNAMIC_COPY=35050]="DYNAMIC_COPY",_[_.STREAM_COPY=35042]="STREAM_COPY"}(L||(L={})),function(_){_[_.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",_[_.VERTEX_SHADER=35633]="VERTEX_SHADER"}(P||(P={})),function(_){_[_.FRAMEBUFFER=36160]="FRAMEBUFFER",_[_.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",_[_.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(U||(U={})),function(_){_[_.TEXTURE=0]="TEXTURE",_[_.RENDER_BUFFER=1]="RENDER_BUFFER",_[_.CUBEMAP=2]="CUBEMAP"}(l||(l={})),function(_){_[_.NONE=0]="NONE",_[_.DEPTH_RENDER_BUFFER=1]="DEPTH_RENDER_BUFFER",_[_.STENCIL_RENDER_BUFFER=2]="STENCIL_RENDER_BUFFER",_[_.DEPTH_STENCIL_RENDER_BUFFER=3]="DEPTH_STENCIL_RENDER_BUFFER",_[_.DEPTH_STENCIL_TEXTURE=4]="DEPTH_STENCIL_TEXTURE"}(c||(c={}));const h=33984;var u,p;!function(_){_[_.Texture=0]="Texture",_[_.Buffer=1]="Buffer",_[_.VAO=2]="VAO",_[_.Shader=3]="Shader",_[_.Program=4]="Program",_[_.Framebuffer=5]="Framebuffer",_[_.Renderbuffer=6]="Renderbuffer",_[_.Sync=7]="Sync",_[_.COUNT=8]="COUNT"}(u||(u={})),function(_){_[_.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",_[_.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",_[_.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",_[_.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",_[_.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",_[_.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",_[_.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",_[_.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",_[_.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",_[_.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",_[_.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",_[_.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",_[_.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",_[_.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",_[_.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",_[_.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(p||(p={}));const G=33306;var d,m,B,F,g,x,f;!function(_){_[_.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",_[_.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",_[_.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",_[_.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",_[_.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",_[_.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",_[_.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",_[_.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",_[_.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",_[_.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",_[_.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(d||(d={})),function(_){_[_.FLOAT=5126]="FLOAT",_[_.FLOAT_VEC2=35664]="FLOAT_VEC2",_[_.FLOAT_VEC3=35665]="FLOAT_VEC3",_[_.FLOAT_VEC4=35666]="FLOAT_VEC4",_[_.INT=5124]="INT",_[_.INT_VEC2=35667]="INT_VEC2",_[_.INT_VEC3=35668]="INT_VEC3",_[_.INT_VEC4=35669]="INT_VEC4",_[_.BOOL=35670]="BOOL",_[_.BOOL_VEC2=35671]="BOOL_VEC2",_[_.BOOL_VEC3=35672]="BOOL_VEC3",_[_.BOOL_VEC4=35673]="BOOL_VEC4",_[_.FLOAT_MAT2=35674]="FLOAT_MAT2",_[_.FLOAT_MAT3=35675]="FLOAT_MAT3",_[_.FLOAT_MAT4=35676]="FLOAT_MAT4",_[_.SAMPLER_2D=35678]="SAMPLER_2D",_[_.SAMPLER_CUBE=35680]="SAMPLER_CUBE",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",_[_.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",_[_.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",_[_.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",_[_.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",_[_.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",_[_.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",_[_.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",_[_.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",_[_.SAMPLER_3D=35679]="SAMPLER_3D",_[_.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",_[_.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",_[_.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",_[_.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",_[_.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",_[_.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",_[_.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",_[_.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",_[_.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",_[_.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",_[_.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",_[_.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(m||(m={})),function(_){_[_.OBJECT_TYPE=37138]="OBJECT_TYPE",_[_.SYNC_CONDITION=37139]="SYNC_CONDITION",_[_.SYNC_STATUS=37140]="SYNC_STATUS",_[_.SYNC_FLAGS=37141]="SYNC_FLAGS"}(B||(B={})),function(_){_[_.UNSIGNALED=37144]="UNSIGNALED",_[_.SIGNALED=37145]="SIGNALED"}(F||(F={})),function(_){_[_.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",_[_.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",_[_.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",_[_.WAIT_FAILED=37149]="WAIT_FAILED"}(g||(g={})),function(_){_[_.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(x||(x={})),function(_){_[_.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(f||(f={}))}}]);
//# sourceMappingURL=1378.cfad93fc.chunk.js.map