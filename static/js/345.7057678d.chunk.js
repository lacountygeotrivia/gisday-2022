"use strict";(globalThis.webpackChunkth_v3=globalThis.webpackChunkth_v3||[]).push([[345],{60345:(e,t,r)=>{r.r(t),r.d(t,{BufferObject:()=>s.f,FramebufferObject:()=>o.X,Program:()=>i.$,ProgramCache:()=>n.G,Renderbuffer:()=>c.r,ShaderCompiler:()=>a.B,Texture:()=>h.x,VertexArrayObject:()=>f.U,createContextOrErrorHTML:()=>_.sj,createProgram:()=>l.H,glslifyDefineMap:()=>u.K});var s=r(44070),o=r(53634),i=r(52714),n=r(66293),c=r(15880),a=r(56648),h=r(51378),f=r(45412),u=r(65706),l=r(96721),_=r(49800)},66293:(e,t,r)=>{r.d(t,{G:()=>n});var s=r(92026);class o{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){var r;return null==(r=this._outer.get(e))?void 0:r.get(t)}set(e,t,r){const s=this._outer.get(e);s?s.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}}var i=r(52714);class n{constructor(e){this._rctx=e,this._store=new o}dispose(){this._store.forEach((e=>e.forEach((e=>e.dispose())))),this._store.clear()}acquire(e,t,r,o){const n=this._store.get(e,t);if((0,s.pC)(n))return n.ref(),n;const c=new i.$(this._rctx,e,t,r,o);return c.ref(),this._store.set(e,t,c),c}get test(){let e=0;return this._store.forEach((t=>t.forEach((t=>e+=t.hasGLName?2:1)))),{cachedWebGLObjects:e}}}},65706:(e,t,r)=>{function s(e){let t="";for(const r in e){const s=e[r];if("boolean"==typeof s)s&&(t+=`#define ${r}\n`);else if("number"==typeof s)t+=`#define ${r} ${s.toFixed()}\n`;else if("object"==typeof s){const e=s.options;let o=0;for(const r in e)t+=`#define ${e[r]} ${(o++).toFixed()}\n`;t+=`#define ${r} ${e[s.value]}\n`}}return t}r.d(t,{K:()=>s})}}]);
//# sourceMappingURL=345.7057678d.chunk.js.map