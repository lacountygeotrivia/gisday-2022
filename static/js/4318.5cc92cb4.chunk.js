"use strict";(globalThis.webpackChunkth_v3=globalThis.webpackChunkth_v3||[]).push([[4318],{48035:(t,i,s)=>{s.d(i,{b:()=>l,j:()=>r});var e=s(65905),h=s(93169);let n=null,x=null;async function r(){return n||(n=async function(){const t=(0,h.Z)("esri-csp-restrictions")?await s.e(5948).then(s.bind(s,5948)).then((t=>t.l)):await s.e(7069).then(s.bind(s,97069)).then((t=>t.l));x=await t.load({locateFile:()=>(0,e.V)("esri/core/libs/libtess/libtess.wasm")})}()),n}function l(t,i){const s=Math.max(t.length,128e3);return x.triangulate(t,i,s)}},60652:(t,i,s)=>{s.d(i,{E:()=>e,V:()=>h});class e{constructor(t,i){this.x=t,this.y=i}clone(){return new e(this.x,this.y)}equals(t,i){return t===this.x&&i===this.y}isEqual(t){return t.x===this.x&&t.y===this.y}setCoords(t,i){this.x=t,this.y=i}normalize(){const t=this.x,i=this.y,s=Math.sqrt(t*t+i*i);this.x/=s,this.y/=s}rightPerpendicular(){const t=this.x;this.x=this.y,this.y=-t}move(t,i){this.x+=t,this.y+=i}assign(t){this.x=t.x,this.y=t.y}assignAdd(t,i){this.x=t.x+i.x,this.y=t.y+i.y}assignSub(t,i){this.x=t.x-i.x,this.y=t.y-i.y}rotate(t,i){const s=this.x,e=this.y;this.x=s*t-e*i,this.y=s*i+e*t}scale(t){this.x*=t,this.y*=t}length(){const t=this.x,i=this.y;return Math.sqrt(t*t+i*i)}static distance(t,i){const s=i.x-t.x,e=i.y-t.y;return Math.sqrt(s*s+e*e)}static add(t,i){return new e(t.x+i.x,t.y+i.y)}static sub(t,i){return new e(t.x-i.x,t.y-i.y)}}var h;!function(t){t[t.Unknown=0]="Unknown",t[t.Point=1]="Point",t[t.LineString=2]="LineString",t[t.Polygon=3]="Polygon"}(h||(h={}))},91623:(t,i,s)=>{s.d(i,{I:()=>a,b:()=>y});var e,h,n=s(94109),x=s(60652),r=s(13200);class l{constructor(t,i,s){this.ratio=t,this.x=i,this.y=s}}class y{constructor(t,i,s){let e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:8,h=arguments.length>4&&void 0!==arguments[4]?arguments[4]:8;this.lines=[],this.starts=[],this.validateTessellation=!0,this.pixelRatio=e,this.pixelMargin=h,this.tileSize=n.I_*e,this.dz=t,this.yPos=i,this.xPos=s}setPixelMargin(t){t!==this.pixelMargin&&(this.pixelMargin=t,this.setExtent(this._extent))}setExtent(t){this._extent=t,this.finalRatio=this.tileSize/t*(1<<this.dz);let i=this.pixelRatio*this.pixelMargin;i/=this.finalRatio;const s=t>>this.dz;i>s&&(i=s),this.margin=i,this.xmin=s*this.xPos-i,this.ymin=s*this.yPos-i,this.xmax=this.xmin+s+2*i,this.ymax=this.ymin+s+2*i}reset(t){this.type=t,this.lines=[],this.starts=[],this.line=null,this.start=0}moveTo(t,i){this._pushLine(),this._prevIsIn=this._isIn(t,i),this._moveTo(t,i,this._prevIsIn),this._prevPt=new x.E(t,i),this._firstPt=new x.E(t,i),this._dist=0}lineTo(t,i){const s=this._isIn(t,i),e=new x.E(t,i),h=x.E.distance(this._prevPt,e);let n,r,y,a,o,u,c,m;if(s)this._prevIsIn?this._lineTo(t,i,!0):(n=this._prevPt,r=e,y=this._intersect(r,n),this.start=this._dist+h*(1-this._r),this._lineTo(y.x,y.y,!0),this._lineTo(r.x,r.y,!0));else if(this._prevIsIn)r=this._prevPt,n=e,y=this._intersect(r,n),this._lineTo(y.x,y.y,!0),this._lineTo(n.x,n.y,!1);else{const t=this._prevPt,i=e;if(t.x<=this.xmin&&i.x<=this.xmin||t.x>=this.xmax&&i.x>=this.xmax||t.y<=this.ymin&&i.y<=this.ymin||t.y>=this.ymax&&i.y>=this.ymax)this._lineTo(i.x,i.y,!1);else{const s=[];if((t.x<this.xmin&&i.x>this.xmin||t.x>this.xmin&&i.x<this.xmin)&&(a=(this.xmin-t.x)/(i.x-t.x),m=t.y+a*(i.y-t.y),m<=this.ymin?u=!1:m>=this.ymax?u=!0:s.push(new l(a,this.xmin,m))),(t.x<this.xmax&&i.x>this.xmax||t.x>this.xmax&&i.x<this.xmax)&&(a=(this.xmax-t.x)/(i.x-t.x),m=t.y+a*(i.y-t.y),m<=this.ymin?u=!1:m>=this.ymax?u=!0:s.push(new l(a,this.xmax,m))),(t.y<this.ymin&&i.y>this.ymin||t.y>this.ymin&&i.y<this.ymin)&&(a=(this.ymin-t.y)/(i.y-t.y),c=t.x+a*(i.x-t.x),c<=this.xmin?o=!1:c>=this.xmax?o=!0:s.push(new l(a,c,this.ymin))),(t.y<this.ymax&&i.y>this.ymax||t.y>this.ymax&&i.y<this.ymax)&&(a=(this.ymax-t.y)/(i.y-t.y),c=t.x+a*(i.x-t.x),c<=this.xmin?o=!1:c>=this.xmax?o=!0:s.push(new l(a,c,this.ymax))),0===s.length)o?u?this._lineTo(this.xmax,this.ymax,!0):this._lineTo(this.xmax,this.ymin,!0):u?this._lineTo(this.xmin,this.ymax,!0):this._lineTo(this.xmin,this.ymin,!0);else if(s.length>1&&s[0].ratio>s[1].ratio)this.start=this._dist+h*s[1].ratio,this._lineTo(s[1].x,s[1].y,!0),this._lineTo(s[0].x,s[0].y,!0);else{this.start=this._dist+h*s[0].ratio;for(let t=0;t<s.length;t++)this._lineTo(s[t].x,s[t].y,!0)}this._lineTo(i.x,i.y,!1)}}this._dist+=h,this._prevIsIn=s,this._prevPt=e}close(){if(this.line.length>2){const t=this._firstPt,i=this._prevPt;t.x===i.x&&t.y===i.y||this.lineTo(t.x,t.y);const s=this.line;let e=s.length;for(;e>=4&&(s[0].x===s[1].x&&s[0].x===s[e-2].x||s[0].y===s[1].y&&s[0].y===s[e-2].y);)s.pop(),s[0].x=s[e-2].x,s[0].y=s[e-2].y,--e}}result(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this._pushLine(),0===this.lines.length?null:(this.type===x.V.Polygon&&t&&o.simplify(this.tileSize,this.margin*this.finalRatio,this.lines),this.lines)}resultWithStarts(){if(this.type!==x.V.LineString)throw new Error("Only valid for lines");this._pushLine();const t=this.lines,i=t.length;if(0===i)return null;const s=[];for(let e=0;e<i;e++)s.push({line:t[e],start:this.starts[e]||0});return s}_isIn(t,i){return t>=this.xmin&&t<=this.xmax&&i>=this.ymin&&i<=this.ymax}_intersect(t,i){let s,e,h;if(i.x>=this.xmin&&i.x<=this.xmax)e=i.y<=this.ymin?this.ymin:this.ymax,h=(e-t.y)/(i.y-t.y),s=t.x+h*(i.x-t.x);else if(i.y>=this.ymin&&i.y<=this.ymax)s=i.x<=this.xmin?this.xmin:this.xmax,h=(s-t.x)/(i.x-t.x),e=t.y+h*(i.y-t.y);else{e=i.y<=this.ymin?this.ymin:this.ymax,s=i.x<=this.xmin?this.xmin:this.xmax;const n=(s-t.x)/(i.x-t.x),x=(e-t.y)/(i.y-t.y);n<x?(h=n,e=t.y+n*(i.y-t.y)):(h=x,s=t.x+x*(i.x-t.x))}return this._r=h,new x.E(s,e)}_pushLine(){this.line&&(this.type===x.V.Point?this.line.length>0&&(this.lines.push(this.line),this.starts.push(this.start)):this.type===x.V.LineString?this.line.length>1&&(this.lines.push(this.line),this.starts.push(this.start)):this.type===x.V.Polygon&&this.line.length>3&&(this.lines.push(this.line),this.starts.push(this.start))),this.line=[],this.start=0}_moveTo(t,i,s){this.type!==x.V.Polygon?s&&(t=Math.round((t-(this.xmin+this.margin))*this.finalRatio),i=Math.round((i-(this.ymin+this.margin))*this.finalRatio),this.line.push(new x.E(t,i))):(s||(t<this.xmin&&(t=this.xmin),t>this.xmax&&(t=this.xmax),i<this.ymin&&(i=this.ymin),i>this.ymax&&(i=this.ymax)),t=Math.round((t-(this.xmin+this.margin))*this.finalRatio),i=Math.round((i-(this.ymin+this.margin))*this.finalRatio),this.line.push(new x.E(t,i)),this._is_h=!1,this._is_v=!1)}_lineTo(t,i,s){let e,h;if(this.type!==x.V.Polygon)if(s){if(t=Math.round((t-(this.xmin+this.margin))*this.finalRatio),i=Math.round((i-(this.ymin+this.margin))*this.finalRatio),this.line.length>0&&(e=this.line[this.line.length-1],e.equals(t,i)))return;this.line.push(new x.E(t,i))}else this.line&&this.line.length>0&&this._pushLine();else if(s||(t<this.xmin&&(t=this.xmin),t>this.xmax&&(t=this.xmax),i<this.ymin&&(i=this.ymin),i>this.ymax&&(i=this.ymax)),t=Math.round((t-(this.xmin+this.margin))*this.finalRatio),i=Math.round((i-(this.ymin+this.margin))*this.finalRatio),this.line&&this.line.length>0){e=this.line[this.line.length-1];const s=e.x===t,n=e.y===i;if(s&&n)return;this._is_h&&s||this._is_v&&n?(e.x=t,e.y=i,h=this.line[this.line.length-2],h.x===t&&h.y===i?(this.line.pop(),this.line.length<=1?(this._is_h=!1,this._is_v=!1):(h=this.line[this.line.length-2],this._is_h=h.x===t,this._is_v=h.y===i)):(this._is_h=h.x===t,this._is_v=h.y===i)):(this.line.push(new x.E(t,i)),this._is_h=s,this._is_v=n)}else this.line.push(new x.E(t,i))}}class a{setExtent(t){this._ratio=4096===t?1:4096/t}get validateTessellation(){return this._ratio<1}reset(t){this.lines=[],this.line=null}moveTo(t,i){this.line&&this.lines.push(this.line),this.line=[];const s=this._ratio;this.line.push(new x.E(t*s,i*s))}lineTo(t,i){const s=this._ratio;this.line.push(new x.E(t*s,i*s))}close(){const t=this.line;t&&!t[0].isEqual(t[t.length-1])&&t.push(t[0])}result(){return this.line&&this.lines.push(this.line),0===this.lines.length?null:this.lines}}(h=e||(e={}))[h.sideLeft=0]="sideLeft",h[h.sideRight=1]="sideRight",h[h.sideTop=2]="sideTop",h[h.sideBottom=3]="sideBottom";class o{static simplify(t,i,s){if(!s)return;const h=-i,n=t+i,x=-i,r=t+i,l=[],y=[],a=s.length;for(let o=0;o<a;++o){const t=s[o];if(!t||t.length<2)continue;let i,a=t[0];const u=t.length;for(let s=1;s<u;++s)i=t[s],a.x===i.x&&(a.x<=h&&(a.y>i.y?(l.push(o),l.push(s),l.push(e.sideLeft),l.push(-1)):(y.push(o),y.push(s),y.push(e.sideLeft),y.push(-1))),a.x>=n&&(a.y<i.y?(l.push(o),l.push(s),l.push(e.sideRight),l.push(-1)):(y.push(o),y.push(s),y.push(e.sideRight),y.push(-1)))),a.y===i.y&&(a.y<=x&&(a.x<i.x?(l.push(o),l.push(s),l.push(e.sideTop),l.push(-1)):(y.push(o),y.push(s),y.push(e.sideTop),y.push(-1))),a.y>=r&&(a.x>i.x?(l.push(o),l.push(s),l.push(e.sideBottom),l.push(-1)):(y.push(o),y.push(s),y.push(e.sideBottom),y.push(-1)))),a=i}if(0===l.length||0===y.length)return;o.fillParent(s,y,l),o.fillParent(s,l,y);const u=[];o.calcDeltas(u,y,l),o.calcDeltas(u,l,y),o.addDeltas(u,s)}static fillParent(t,i,s){const h=s.length,n=i.length;for(let x=0;x<n;x+=4){const n=i[x],l=i[x+1],y=i[x+2],a=t[n][l-1],o=t[n][l];let u=8092,c=-1;for(let i=0;i<h;i+=4){if(s[i+2]!==y)continue;const h=s[i],n=s[i+1],x=t[h][n-1],l=t[h][n];switch(y){case e.sideLeft:case e.sideRight:if((0,r.vX)(a.y,x.y,l.y)&&(0,r.vX)(o.y,x.y,l.y)){const t=Math.abs(l.y-x.y);t<u&&(u=t,c=i)}break;case e.sideTop:case e.sideBottom:if((0,r.vX)(a.x,x.x,l.x)&&(0,r.vX)(o.x,x.x,l.x)){const t=Math.abs(l.x-x.x);t<u&&(u=t,c=i)}}}i[x+3]=c}}static calcDeltas(t,i,s){const e=i.length;for(let h=0;h<e;h+=4){const e=[],n=o.calcDelta(h,i,s,e);t.push(i[h]),t.push(i[h+1]),t.push(i[h+2]),t.push(n)}}static calcDelta(t,i,s,e){const h=i[t+3];if(-1===h)return 0;const n=e.length;return n>1&&e[n-2]===h?0:(e.push(h),o.calcDelta(h,s,i,e)+1)}static addDeltas(t,i){const s=t.length;let h=0;for(let e=0;e<s;e+=4){const i=t[e+3];i>h&&(h=i)}for(let n=0;n<s;n+=4){const s=i[t[n]],x=t[n+1],r=h-t[n+3];switch(t[n+2]){case e.sideLeft:s[x-1].x-=r,s[x].x-=r,1===x&&(s[s.length-1].x-=r),x===s.length-1&&(s[0].x-=r);break;case e.sideRight:s[x-1].x+=r,s[x].x+=r,1===x&&(s[s.length-1].x+=r),x===s.length-1&&(s[0].x+=r);break;case e.sideTop:s[x-1].y-=r,s[x].y-=r,1===x&&(s[s.length-1].y-=r),x===s.length-1&&(s[0].y-=r);break;case e.sideBottom:s[x-1].y+=r,s[x].y+=r,1===x&&(s[s.length-1].y+=r),x===s.length-1&&(s[0].y+=r)}}}}},82010:(t,i,s)=>{s.d(i,{z:()=>c});var e=s(48202),h=s(94109);function n(t,i){return t.x===i.x&&t.y===i.y}function x(t,i){return t.x=i.y,t.y=-i.x,t}function r(t,i){return t.x=-i.y,t.y=i.x,t}function l(t,i){return t.x=i.x,t.y=i.y,t}function y(t,i){return t.x=-i.x,t.y=-i.y,t}function a(t){return Math.sqrt(t.x*t.x+t.y*t.y)}function o(t,i){return t.x*i.x+t.y*i.y}function u(t,i,s,e){return t.x=i.x*s+i.y*e,t.y=i.x*e-i.y*s,t}class c{constructor(t,i,s){this.writeVertex=t,this.writeTriangle=i,this.canUseThinTessellation=s,this.prevNormal={x:void 0,y:void 0},this.nextNormal={x:void 0,y:void 0},this.textureNormalLeft={x:0,y:1},this.textureNormalRight={x:0,y:-1},this.textureNormal={x:void 0,y:void 0},this.joinNormal={x:void 0,y:void 0},this.inner={x:void 0,y:void 0},this.outer={x:void 0,y:void 0},this.roundStart={x:void 0,y:void 0},this.roundEnd={x:void 0,y:void 0},this.startBreak={x:void 0,y:void 0},this.endBreak={x:void 0,y:void 0},this.innerPrev={x:void 0,y:void 0},this.innerNext={x:void 0,y:void 0},this.bevelStart={x:void 0,y:void 0},this.bevelEnd={x:void 0,y:void 0},this.bevelMiddle={x:void 0,y:void 0}}tessellate(t,i){(function(t){if(!t)return;const i=t.length;if(i<=1)return;let s=0;for(let e=1;e<i;e++)n(t[e],t[s])||++s===e||(t[s]=t[e]);t.length=s+1})(t),this.canUseThinTessellation&&i.halfWidth<h.tQ&&!i.offset?this._tessellateThin(t,i):this._tessellate(t,i)}_tessellateThin(t,i){if(t.length<2)return;const s=i.wrapDistance||65535;let e=i.initialDistance||0,h=!1,n=t[0].x,x=t[0].y;const r=t.length;for(let l=1;l<r;++l){h&&(h=!1,e=0);let i=t[l].x,r=t[l].y,y=i-n,a=r-x,o=Math.sqrt(y*y+a*a);if(y/=o,a/=o,e+o>s){h=!0;const t=(s-e)/o;o=s-e,i=(1-t)*n+t*i,r=(1-t)*x+t*r,--l}const u=this.writeVertex(n,x,0,0,y,a,a,-y,0,-1,e),c=this.writeVertex(n,x,0,0,y,a,-a,y,0,1,e);e+=o;const m=this.writeVertex(i,r,0,0,y,a,a,-y,0,-1,e),d=this.writeVertex(i,r,0,0,y,a,-a,y,0,1,e);this.writeTriangle(u,c,m),this.writeTriangle(c,m,d),n=i,x=r}}_tessellate(t,i){const s=t[0],h=t[t.length-1],c=n(s,h),m=c?3:2;if(t.length<m)return;const d=i.pixelCoordRatio,p=null!=i.capType?i.capType:e.RL.BUTT,g=null!=i.joinType?i.joinType:e.AH.MITER,f=null!=i.miterLimit?Math.min(i.miterLimit,4):2,_=null!=i.roundLimit?Math.min(i.roundLimit,1.05):1.05,v=null!=i.halfWidth?i.halfWidth:2,w=!!i.textured;let T,R,E=null,b=null;const V=this.prevNormal,L=this.nextNormal;let M=-1,P=-1;const N=this.joinNormal;let k,I;const B=this.textureNormalLeft,D=this.textureNormalRight,A=this.textureNormal;let S=-1,U=-1;const H=i.wrapDistance||65535;let q=i.initialDistance||0;const z=this.writeVertex,O=this.writeTriangle,X=function(t,i,s,e,h,n){const x=z(T,R,k,I,s,e,t,i,h,n,q);return S>=0&&U>=0&&x>=0&&O(S,U,x),S=U,U=x,x};c&&(E=t[t.length-2],L.x=h.x-E.x,L.y=h.y-E.y,P=a(L),L.x/=P,L.y/=P);let j=!1;for(let n=0;n<t.length;++n){if(j&&(j=!1,q=0),E&&(V.x=-L.x,V.y=-L.y,M=P,q+M>H&&(j=!0)),j){const i=(H-q)/M;M=H-q,E={x:(1-i)*E.x+i*t[n].x,y:(1-i)*E.y+i*t[n].y},--n}else E=t[n];T=E.x,R=E.y;const i=n<=0&&!j,s=n===t.length-1;if(i||(q+=M),b=s?c?t[1]:null:t[n+1],b?(L.x=b.x-T,L.y=b.y-R,P=a(L),L.x/=P,L.y/=P):(L.x=void 0,L.y=void 0),!c){if(i){r(N,L),k=N.x,I=N.y,p===e.RL.SQUARE&&(X(-L.y-L.x,L.x-L.y,L.x,L.y,0,-1),X(L.y-L.x,-L.x-L.y,L.x,L.y,0,1)),p===e.RL.ROUND&&(X(-L.y-L.x,L.x-L.y,L.x,L.y,-1,-1),X(L.y-L.x,-L.x-L.y,L.x,L.y,-1,1)),p!==e.RL.ROUND&&p!==e.RL.BUTT||(X(-L.y,L.x,L.x,L.y,0,-1),X(L.y,-L.x,L.x,L.y,0,1));continue}if(s){x(N,V),k=N.x,I=N.y,p!==e.RL.ROUND&&p!==e.RL.BUTT||(X(V.y,-V.x,-V.x,-V.y,0,-1),X(-V.y,V.x,-V.x,-V.y,0,1)),p===e.RL.SQUARE&&(X(V.y-V.x,-V.x-V.y,-V.x,-V.y,0,-1),X(-V.y-V.x,V.x-V.y,-V.x,-V.y,0,1)),p===e.RL.ROUND&&(X(V.y-V.x,-V.x-V.y,-V.x,-V.y,1,-1),X(-V.y-V.x,V.x-V.y,-V.x,-V.y,1,1));continue}}let h,m,z=(W=L,-((C=V).x*W.y-C.y*W.x));if(Math.abs(z)<.01)o(V,L)>0?(N.x=V.x,N.y=V.y,z=1,h=Number.MAX_VALUE,m=!0):(r(N,L),z=1,h=1,m=!1);else{N.x=(V.x+L.x)/z,N.y=(V.y+L.y)/z,h=a(N);const t=(h-1)*v*d;m=h>4||t>M&&t>P}k=N.x,I=N.y;let O=g;switch(g){case e.AH.BEVEL:h<1.05&&(O=e.AH.MITER);break;case e.AH.ROUND:h<_&&(O=e.AH.MITER);break;case e.AH.MITER:h>f&&(O=e.AH.BEVEL)}switch(O){case e.AH.MITER:if(X(N.x,N.y,-V.x,-V.y,0,-1),X(-N.x,-N.y,-V.x,-V.y,0,1),s)break;if(w){const t=j?0:q;S=this.writeVertex(T,R,k,I,L.x,L.y,N.x,N.y,0,-1,t),U=this.writeVertex(T,R,k,I,L.x,L.y,-N.x,-N.y,0,1,t)}break;case e.AH.BEVEL:{const t=z<0;let i,e,h,n;if(t){const t=S;S=U,U=t,i=B,e=D}else i=D,e=B;if(m)h=t?r(this.innerPrev,V):x(this.innerPrev,V),n=t?x(this.innerNext,L):r(this.innerNext,L);else{const i=t?y(this.inner,N):l(this.inner,N);h=i,n=i}const a=t?x(this.bevelStart,V):r(this.bevelStart,V);X(h.x,h.y,-V.x,-V.y,i.x,i.y);const o=X(a.x,a.y,-V.x,-V.y,e.x,e.y);if(s)break;const c=t?r(this.bevelEnd,L):x(this.bevelEnd,L);if(m){const t=this.writeVertex(T,R,k,I,-V.x,-V.y,0,0,0,0,q);S=this.writeVertex(T,R,k,I,L.x,L.y,n.x,n.y,i.x,i.y,q),U=this.writeVertex(T,R,k,I,L.x,L.y,c.x,c.y,e.x,e.y,q),this.writeTriangle(o,t,U)}else{if(w){const t=this.bevelMiddle;t.x=(a.x+c.x)/2,t.y=(a.y+c.y)/2,u(A,t,-V.x,-V.y),X(t.x,t.y,-V.x,-V.y,A.x,A.y),u(A,t,L.x,L.y),S=this.writeVertex(T,R,k,I,L.x,L.y,t.x,t.y,A.x,A.y,q),U=this.writeVertex(T,R,k,I,L.x,L.y,n.x,n.y,i.x,i.y,q)}else{const t=S;S=U,U=t}X(c.x,c.y,L.x,L.y,e.x,e.y)}if(t){const t=S;S=U,U=t}break}case e.AH.ROUND:{const t=z<0;let i,e;if(t){const t=S;S=U,U=t,i=B,e=D}else i=D,e=B;const n=t?y(this.inner,N):l(this.inner,N);let a,c;m?(a=t?r(this.innerPrev,V):x(this.innerPrev,V),c=t?x(this.innerNext,L):r(this.innerNext,L)):(a=n,c=n);const d=t?x(this.roundStart,V):r(this.roundStart,V),p=t?r(this.roundEnd,L):x(this.roundEnd,L),g=X(a.x,a.y,-V.x,-V.y,i.x,i.y),f=X(d.x,d.y,-V.x,-V.y,e.x,e.y);if(s)break;const _=this.writeVertex(T,R,k,I,-V.x,-V.y,0,0,0,0,q);m||this.writeTriangle(S,U,_);const v=y(this.outer,n),E=this.writeVertex(T,R,k,I,L.x,L.y,p.x,p.y,e.x,e.y,q);let b,M;const P=h>2;if(P){let i;h!==Number.MAX_VALUE?(v.x/=h,v.y/=h,i=o(V,v),i=(h*(i*i-1)+1)/i):i=-1,b=t?x(this.startBreak,V):r(this.startBreak,V),b.x+=V.x*i,b.y+=V.y*i,M=t?r(this.endBreak,L):x(this.endBreak,L),M.x+=L.x*i,M.y+=L.y*i}u(A,v,-V.x,-V.y);const H=this.writeVertex(T,R,k,I,-V.x,-V.y,v.x,v.y,A.x,A.y,q);u(A,v,L.x,L.y);const O=w?this.writeVertex(T,R,k,I,L.x,L.y,v.x,v.y,A.x,A.y,q):H,j=_,C=w?this.writeVertex(T,R,k,I,L.x,L.y,0,0,0,0,q):_;let W=-1,Q=-1;if(P&&(u(A,b,-V.x,-V.y),W=this.writeVertex(T,R,k,I,-V.x,-V.y,b.x,b.y,A.x,A.y,q),u(A,M,L.x,L.y),Q=this.writeVertex(T,R,k,I,L.x,L.y,M.x,M.y,A.x,A.y,q)),w?P?(this.writeTriangle(j,f,W),this.writeTriangle(j,W,H),this.writeTriangle(C,O,Q),this.writeTriangle(C,Q,E)):(this.writeTriangle(j,f,H),this.writeTriangle(C,O,E)):P?(this.writeTriangle(_,f,W),this.writeTriangle(_,W,Q),this.writeTriangle(_,Q,E)):(this.writeTriangle(_,f,H),this.writeTriangle(_,O,E)),m?(S=this.writeVertex(T,R,k,I,L.x,L.y,c.x,c.y,i.x,i.y,q),U=E):(S=w?this.writeVertex(T,R,k,I,L.x,L.y,c.x,c.y,i.x,i.y,q):g,this.writeTriangle(S,C,E),U=E),t){const t=S;S=U,U=t}break}}}var C,W}}}}]);
//# sourceMappingURL=4318.5cc92cb4.chunk.js.map