"use strict";(globalThis.webpackChunkth_v3=globalThis.webpackChunkth_v3||[]).push([[7331],{48202:(e,n,t)=>{var r,i,o,a,c,s,u,l,f,d,T,p,h,g,S,L,E,C,m,A,R,I,N,O,y,B,M,P,U,D,_,F,v,w,W,x,G,H,b,k,Z,Y,X,z,J,V,K,q,$,Q,j,ee,ne,te,re,ie,oe,ae,ce,se;t.d(n,{$y:()=>R,AH:()=>i,CS:()=>V,DD:()=>l,Dd:()=>P,Em:()=>A,JS:()=>z,Ky:()=>f,Lh:()=>K,Qb:()=>ie,RL:()=>r,RS:()=>ae,TF:()=>m,Tx:()=>c,UR:()=>L,UX:()=>re,bj:()=>J,eZ:()=>u,id:()=>O,kP:()=>W,r4:()=>b,sj:()=>x,v2:()=>o,zQ:()=>M,zV:()=>S}),function(e){e[e.BUTT=0]="BUTT",e[e.ROUND=1]="ROUND",e[e.SQUARE=2]="SQUARE",e[e.UNKNOWN=4]="UNKNOWN"}(r||(r={})),function(e){e[e.BEVEL=0]="BEVEL",e[e.ROUND=1]="ROUND",e[e.MITER=2]="MITER",e[e.UNKNOWN=4]="UNKNOWN"}(i||(i={})),function(e){e[e.SCREEN=0]="SCREEN",e[e.MAP=1]="MAP"}(o||(o={})),function(e){e[e.Tint=0]="Tint",e[e.Ignore=1]="Ignore",e[e.Multiply=99]="Multiply"}(a||(a={})),function(e){e.Both="Both",e.JustBegin="JustBegin",e.JustEnd="JustEnd",e.None="None"}(c||(c={})),function(e){e[e.Mosaic=0]="Mosaic",e[e.Centered=1]="Centered"}(s||(s={})),function(e){e[e.Normal=0]="Normal",e[e.Superscript=1]="Superscript",e[e.Subscript=2]="Subscript"}(u||(u={})),function(e){e[e.MSSymbol=0]="MSSymbol",e[e.Unicode=1]="Unicode"}(l||(l={})),function(e){e[e.Unspecified=0]="Unspecified",e[e.TrueType=1]="TrueType",e[e.PSOpenType=2]="PSOpenType",e[e.TTOpenType=3]="TTOpenType",e[e.Type1=4]="Type1"}(f||(f={})),function(e){e[e.Display=0]="Display",e[e.Map=1]="Map"}(d||(d={})),function(e){e[e.Z=0]="Z",e[e.X=1]="X",e[e.Y=2]="Y"}(T||(T={})),function(e){e[e.XYZ=0]="XYZ",e[e.ZXY=1]="ZXY",e[e.YXZ=2]="YXZ"}(p||(p={})),function(e){e[e.Rectangle=0]="Rectangle",e[e.RoundedRectangle=1]="RoundedRectangle",e[e.Oval=2]="Oval"}(h||(h={})),function(e){e[e.None=0]="None",e[e.Alpha=1]="Alpha",e[e.Screen=2]="Screen",e[e.Multiply=3]="Multiply",e[e.Add=4]="Add"}(g||(g={})),function(e){e[e.TTB=0]="TTB",e[e.RTL=1]="RTL",e[e.BTT=2]="BTT"}(S||(S={})),function(e){e[e.None=0]="None",e[e.SignPost=1]="SignPost",e[e.FaceNearPlane=2]="FaceNearPlane"}(L||(L={})),function(e){e[e.Float=0]="Float",e[e.String=1]="String",e[e.Boolean=2]="Boolean"}(E||(E={})),function(e){e[e.Intersect=0]="Intersect",e[e.Subtract=1]="Subtract"}(C||(C={})),function(e){e.OpenEnded="OpenEnded",e.Block="Block",e.Crossed="Crossed"}(m||(m={})),function(e){e.FullGeometry="FullGeometry",e.PerpendicularFromFirstSegment="PerpendicularFromFirstSegment",e.ReversedFirstSegment="ReversedFirstSegment",e.PerpendicularToSecondSegment="PerpendicularToSecondSegment",e.SecondSegmentWithTicks="SecondSegmentWithTicks",e.DoublePerpendicular="DoublePerpendicular",e.OppositeToFirstSegment="OppositeToFirstSegment",e.TriplePerpendicular="TriplePerpendicular",e.HalfCircleFirstSegment="HalfCircleFirstSegment",e.HalfCircleSecondSegment="HalfCircleSecondSegment",e.HalfCircleExtended="HalfCircleExtended",e.OpenCircle="OpenCircle",e.CoverageEdgesWithTicks="CoverageEdgesWithTicks",e.GapExtentWithDoubleTicks="GapExtentWithDoubleTicks",e.GapExtentMidline="GapExtentMidline",e.Chevron="Chevron",e.PerpendicularWithArc="PerpendicularWithArc",e.ClosedHalfCircle="ClosedHalfCircle",e.TripleParallelExtended="TripleParallelExtended",e.ParallelWithTicks="ParallelWithTicks",e.Parallel="Parallel",e.PerpendicularToFirstSegment="PerpendicularToFirstSegment",e.ParallelOffset="ParallelOffset",e.OffsetOpposite="OffsetOpposite",e.OffsetSame="OffsetSame",e.CircleWithArc="CircleWithArc",e.DoubleJog="DoubleJog",e.PerpendicularOffset="PerpendicularOffset",e.LineExcludingLastSegment="LineExcludingLastSegment",e.MultivertexArrow="MultivertexArrow",e.CrossedArrow="CrossedArrow",e.ChevronArrow="ChevronArrow",e.ChevronArrowOffset="ChevronArrowOffset",e.PartialFirstSegment="PartialFirstSegment",e.Arch="Arch",e.CurvedParallelTicks="CurvedParallelTicks",e.Arc90Degrees="Arc90Degrees"}(A||(A={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square",e.TrueBuffer="TrueBuffer"}(R||(R={})),function(e){e.ClosePath="ClosePath",e.ConvexHull="ConvexHull",e.RectangularBox="RectangularBox"}(I||(I={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(N||(N={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square"}(O||(O={})),function(e){e.Fast="Fast",e.Accurate="Accurate"}(y||(y={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(B||(B={})),function(e){e.Sinus="Sinus",e.Square="Square",e.Triangle="Triangle",e.Random="Random"}(M||(M={})),function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Force=2]="Force"}(P||(P={})),function(e){e[e.Buffered=0]="Buffered",e[e.Left=1]="Left",e[e.Right=2]="Right",e[e.AlongLine=3]="AlongLine"}(U||(U={})),function(e){e[e.Linear=0]="Linear",e[e.Rectangular=1]="Rectangular",e[e.Circular=2]="Circular",e[e.Buffered=3]="Buffered"}(D||(D={})),function(e){e[e.Discrete=0]="Discrete",e[e.Continuous=1]="Continuous"}(_||(_={})),function(e){e[e.AcrossLine=0]="AcrossLine",e[e.AloneLine=1]="AloneLine"}(F||(F={})),function(e){e[e.Left=0]="Left",e[e.Right=1]="Right",e[e.Center=2]="Center",e[e.Justify=3]="Justify"}(v||(v={})),function(e){e[e.Base=0]="Base",e[e.MidPoint=1]="MidPoint",e[e.ThreePoint=2]="ThreePoint",e[e.FourPoint=3]="FourPoint",e[e.Underline=4]="Underline",e[e.CircularCW=5]="CircularCW",e[e.CircularCCW=6]="CircularCCW"}(w||(w={})),function(e){e.Butt="Butt",e.Round="Round",e.Square="Square"}(W||(W={})),function(e){e.NoConstraint="NoConstraint",e.HalfPattern="HalfPattern",e.HalfGap="HalfGap",e.FullPattern="FullPattern",e.FullGap="FullGap",e.Custom="Custom"}(x||(x={})),function(e){e[e.None=-1]="None",e[e.Custom=0]="Custom",e[e.Circle=1]="Circle",e[e.OpenArrow=2]="OpenArrow",e[e.ClosedArrow=3]="ClosedArrow",e[e.Diamond=4]="Diamond"}(G||(G={})),function(e){e[e.ExtraLeading=0]="ExtraLeading",e[e.Multiple=1]="Multiple",e[e.Exact=2]="Exact"}(H||(H={})),function(e){e.Bevel="Bevel",e.Round="Round",e.Miter="Miter"}(b||(b={})),function(e){e[e.Default=0]="Default",e[e.String=1]="String",e[e.Numeric=2]="Numeric"}(k||(k={})),function(e){e[e.InsidePolygon=0]="InsidePolygon",e[e.PolygonCenter=1]="PolygonCenter",e[e.RandomlyInsidePolygon=2]="RandomlyInsidePolygon"}(Z||(Z={})),function(e){e[e.Tint=0]="Tint",e[e.Replace=1]="Replace",e[e.Multiply=2]="Multiply"}(Y||(Y={})),function(e){e[e.ClipAtBoundary=0]="ClipAtBoundary",e[e.RemoveIfCenterOutsideBoundary=1]="RemoveIfCenterOutsideBoundary",e[e.DoNotTouchBoundary=2]="DoNotTouchBoundary",e[e.DoNotClip=3]="DoNotClip"}(X||(X={})),function(e){e.NoConstraint="NoConstraint",e.WithMarkers="WithMarkers",e.WithFullGap="WithFullGap",e.WithHalfGap="WithHalfGap",e.Custom="Custom"}(z||(z={})),function(e){e.Fixed="Fixed",e.Random="Random",e.RandomFixedQuantity="RandomFixedQuantity"}(J||(J={})),function(e){e.LineMiddle="LineMiddle",e.LineBeginning="LineBeginning",e.LineEnd="LineEnd",e.SegmentMidpoint="SegmentMidpoint"}(V||(V={})),function(e){e.OnPolygon="OnPolygon",e.CenterOfMass="CenterOfMass",e.BoundingBoxCenter="BoundingBoxCenter"}(K||(K={})),function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High"}(q||(q={})),function(e){e[e.MarkerCenter=0]="MarkerCenter",e[e.MarkerBounds=1]="MarkerBounds"}($||($={})),function(e){e[e.None=0]="None",e[e.PropUniform=1]="PropUniform",e[e.PropNonuniform=2]="PropNonuniform",e[e.DifUniform=3]="DifUniform",e[e.DifNonuniform=4]="DifNonuniform"}(Q||(Q={})),function(e){e.Tube="Tube",e.Strip="Strip",e.Wall="Wall"}(j||(j={})),function(e){e[e.Random=0]="Random",e[e.Increasing=1]="Increasing",e[e.Decreasing=2]="Decreasing",e[e.IncreasingThenDecreasing=3]="IncreasingThenDecreasing"}(ee||(ee={})),function(e){e[e.Relative=0]="Relative",e[e.Absolute=1]="Absolute"}(ne||(ne={})),function(e){e[e.Normal=0]="Normal",e[e.LowerCase=1]="LowerCase",e[e.Allcaps=2]="Allcaps"}(te||(te={})),function(e){e[e.LTR=0]="LTR",e[e.RTL=1]="RTL"}(re||(re={})),function(e){e.Draft="Draft",e.Picture="Picture",e.Text="Text"}(ie||(ie={})),function(e){e[e.Top=0]="Top",e[e.Center=1]="Center",e[e.Baseline=2]="Baseline",e[e.Bottom=3]="Bottom"}(oe||(oe={})),function(e){e[e.Right=0]="Right",e[e.Upright=1]="Upright"}(ae||(ae={})),function(e){e[e.Small=0]="Small",e[e.Medium=1]="Medium",e[e.Large=2]="Large"}(ce||(ce={})),function(e){e[e.Calm=0]="Calm",e[e.Rippled=1]="Rippled",e[e.Slight=2]="Slight",e[e.Moderate=3]="Moderate"}(se||(se={}))},46640:(e,n,t)=>{t.d(n,{mR:()=>Z,C$:()=>v,e2:()=>w,Jq:()=>ue,wO:()=>k,Mk:()=>Y,cM:()=>$,Z_:()=>Q,ws:()=>G,xV:()=>H,Ub:()=>se,UK:()=>J,Yw:()=>z,$_:()=>y,Gr:()=>ne,nU:()=>b,Ll:()=>ie,$K:()=>W,DQ:()=>te,HX:()=>ee,hj:()=>x,iw:()=>re,TB:()=>ae,sG:()=>j,Gg:()=>oe,js:()=>ce,Y8:()=>F});var r=t(10064),i=t(32718),o=(t(16889),t(48202)),a=(t(65800),t(80613)),c=t(13005);class s{constructor(){this.color=[0,0,0,0],this.haloColor=[0,0,0,0],this.haloSize=0,this.size=12,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}acquire(e,n,t,r,i,o,a,c,s){this.color=e,this.haloColor=n,this.haloSize=t,this.size=r,this.angle=i,this.offsetX=o,this.offsetY=a,this.hAnchor=c,this.vAnchor=s}release(){this.color[0]=this.color[1]=this.color[2]=this.color[3]=0,this.haloColor[0]=this.haloColor[1]=this.haloColor[2]=this.haloColor[3]=0,this.haloSize=0,this.size=0,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}}s.pool=new c.Z(s);var u=t(8548),l=(t(51378),t(61109));const f=i.Z.getLogger("esri.views.2d.engine.webgl.Utils"),d="geometry",T=[{name:d,strideInBytes:32}],p=[{name:d,strideInBytes:20}],h=[{name:d,strideInBytes:12}],g=[{name:d,strideInBytes:40}],S=[{name:d,strideInBytes:36}],L=[{name:d,strideInBytes:36}];function E(e){const n={};for(const t of e)n[t.name]=t.strideInBytes;return n}const C=E([{name:d,strideInBytes:36}]),m=E(T),A=E(p),R=E(h),I=E(g),N=E(S),O=E(L);function y(e,n){let{fill:t}=n;switch(e){case a.LW.MARKER:return C;case a.LW.FILL:return"dot-density"===t?R:"simple"===t?A:m;case a.LW.LINE:return I;case a.LW.TEXT:return N;case a.LW.LABEL:return O}}const B=[d],M=[d],P=[d],U=[d],D=[d];function _(e){switch(e){case a.LW.MARKER:return B;case a.LW.FILL:return M;case a.LW.LINE:return P;case a.LW.TEXT:return U;case a.LW.LABEL:return D}}function F(e){switch(e%4){case 0:case 2:return 4;case 1:case 3:return 1}}function v(e,n){switch(n%4){case 0:case 2:return new Uint32Array(Math.floor(e*n/4));case 1:case 3:return new Uint8Array(e*n)}}function w(e,n){switch(n%4){case 0:case 2:return new Uint32Array(e);case 1:case 3:return new Uint8Array(e)}}function W(e){return null!=e}function x(e){return"number"==typeof e}function G(e){switch(e){case"butt":return o.RL.BUTT;case"round":return o.RL.ROUND;case"square":return o.RL.SQUARE;default:return f.error(new r.Z("mapview-invalid-type",`Cap type ${e} is not a valid option. Defaulting to round`)),o.RL.ROUND}}function H(e){switch(e){case"miter":return o.AH.MITER;case"bevel":return o.AH.BEVEL;case"round":return o.AH.ROUND;default:return f.error(new r.Z("mapview-invalid-type",`Join type ${e} is not a valid option. Defaulting to round`)),o.AH.ROUND}}function b(e){switch(e){case"opacity":return a.pc.OPACITY;case"color":return a.pc.COLOR;case"rotation":return a.pc.ROTATION;case"size":return a.pc.SIZE;default:return f.error(`Cannot interpret unknown vv: ${e}`),null}}function k(e,n,t,r,i,o,a){for(const s in o){const n=o[s].stride,r=F(n),a=o[s].data,c=t[s].data,u=n*i.vertexCount/r,l=n*e/r,f=n*i.vertexFrom/r;for(let e=0;e<u;++e)c[e+l]=a[e+f]}const c=i.indexCount;for(let s=0;s<c;++s)r[s+n]=a[s+i.indexFrom]-i.vertexFrom+e}const Z={[d]:u.l1.STATIC_DRAW};function Y(e,n){const t=[];for(let r=0;r<5;++r){const i=_(r),o={};for(const e of i)o[e]={data:n(r,e)};t.push({data:e(r),buffers:o})}return t}function X(e){switch(e){case u.g.BYTE:case u.g.UNSIGNED_BYTE:return 1;case u.g.SHORT:case u.g.UNSIGNED_SHORT:return 2;case u.g.FLOAT:case u.g.INT:case u.g.UNSIGNED_INT:return 4}}function z(e){switch(e){case u.Br.UNSIGNED_BYTE:return 1;case u.Br.UNSIGNED_SHORT_4_4_4_4:return 2;case u.Br.FLOAT:return 4;default:return void f.error(new r.Z("webgl-utils",`Unable to handle type ${e}`))}}function J(e){switch(e){case u.Br.UNSIGNED_BYTE:return Uint8Array;case u.Br.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case u.Br.FLOAT:return Float32Array;default:return void f.error(new r.Z("webgl-utils",`Unable to handle type ${e}`))}}const V=e=>{const n=new Map;for(const t in e)for(const r of e[t])n.set(r.name,r.location);return n},K=e=>{const n={};for(const t in e){const r=e[t];n[t]=r.length?r[0].stride:0}return n},q=new Map,$=(e,n)=>{if(!q.has(e)){const t=function(e){const n={};for(const t in e){const r=e[t];let i=0;n[t]=r.map((e=>{const n=new l.G(e.name,e.count,e.type,i,0,e.normalized||!1);return i+=e.count*X(e.type),n})),n[t].forEach((e=>e.stride=i))}return n}(n),r={strides:K(t),bufferLayouts:t,attributes:V(n)};q.set(e,r)}return q.get(e)};function Q(e){e(a.LW.FILL),e(a.LW.LINE),e(a.LW.MARKER),e(a.LW.TEXT),e(a.LW.LABEL)}const j=e=>"path"in e&&le(e.path),ee=e=>"url"in e&&e.url||"imageData"in e&&e.imageData,ne=e=>"imageData"in e&&e.imageData&&"contentType"in e&&e.contentType?`data:${e.contentType};base64,${e.imageData}`:"url"in e?e.url:null,te=e=>"url"in e&&e.url&&e.url.includes(".gif")||"contentType"in e&&"image/gif"===e.contentType||"imageData"in e&&e.imageData.includes("data:image/gif"),re=e=>"url"in e&&e.url&&e.url.includes(".png")||"contentType"in e&&"image/png"===e.contentType||"imageData"in e&&e.imageData.includes("data:image/png"),ie=e=>e.type&&-1!==e.type.toLowerCase().indexOf("3d");function oe(e){switch(e.type){case"line":{const n=e;return"CIMSolidStroke"===n.cim.type&&!n.dashTemplate}case"fill":return"CIMSolidFill"===e.cim.type;case"esriSFS":return"esriSFSSolid"===e.style||"esriSFSNull"===e.style;case"esriSLS":return"esriSLSSolid"===e.style||"esriSLSNull"===e.style;default:return!1}}const ae=e=>e.includes("data:image/svg+xml");function ce(e){switch("cim"in e?e.cim.type:e.type){case"esriSMS":case"esriPMS":case"CIMPointSymbol":case"CIMVectorMarker":case"CIMPictureMarker":case"CIMCharacterMarker":return!1;default:return!0}}function se(e){const n="maxVVSize"in e&&e.maxVVSize,t="width"in e&&e.width||"size"in e&&e.size||0;return n||t}function ue(e){const n=[];for(let t=0;t<e.length;t++)n.push(e.charCodeAt(t));return n}const le=e=>!!e&&(e=e.trim(),!!(/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(e)&&/[\dz]$/i.test(e)&&e.length>4))},65800:(e,n,t)=>{t.d(n,{aH:()=>a,pr:()=>i,t2:()=>o});var r=t(73271);function i(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const r=e[n+3];return e[n+0]*=r,e[n+1]*=r,e[n+2]*=r,t||(e[n+3]*=255),e}function o(e){if(!e)return 0;const{r:n,g:t,b:i,a:o}=e;return(0,r.Jz)(n*o,t*o,i*o,255*o)}function a(e){if(!e)return 0;const[n,t,i,o]=e;return(0,r.Jz)(n*(o/255),t*(o/255),i*(o/255),o)}},94109:(e,n,t)=>{t.d(n,{$0:()=>a,AI:()=>r,Al:()=>d,CQ:()=>k,CU:()=>v,D3:()=>f,Ex:()=>s,I_:()=>o,Ic:()=>T,Ij:()=>g,Ip:()=>G,Iw:()=>u,Jw:()=>C,MI:()=>H,QU:()=>E,SD:()=>J,Tz:()=>Z,Uh:()=>b,V4:()=>F,XJ:()=>x,Xj:()=>L,Zd:()=>P,_5:()=>R,_6:()=>z,a:()=>w,aK:()=>O,dn:()=>_,e0:()=>X,eF:()=>l,f2:()=>S,fL:()=>W,iJ:()=>p,iV:()=>U,kF:()=>m,lK:()=>y,m4:()=>B,nM:()=>h,oK:()=>Y,pU:()=>N,ru:()=>i,tQ:()=>D,uG:()=>M,xl:()=>I,xm:()=>c,yP:()=>A});const r=1e-30,i=4294967295,o=512,a=8,c=29,s=24,u=8,l={metrics:{width:15,height:17,left:0,top:-7,advance:14}},f=0,d=0,T=0,p=1,h=2,g=3,S=4,L=12,E=5,C=6,m=5,A=6,R=0,I=1,N=2,O=3,y=4,B=2,M=1,P=2,U=4,D=1.05,_=3,F=5,v=6,w=1.15,W=2,x=8,G=500,H=10,b=2,k=0,Z=1,Y=4,X=8,z=4,J=1},80613:(e,n,t)=>{var r,i,o,a,c,s,u;t.d(n,{LW:()=>r,Un:()=>u,X:()=>c,jx:()=>o,mf:()=>s,pc:()=>a}),function(e){e[e.FILL=0]="FILL",e[e.LINE=1]="LINE",e[e.MARKER=2]="MARKER",e[e.TEXT=3]="TEXT",e[e.LABEL=4]="LABEL"}(r||(r={})),function(e){e[e.SUCCEEDED=0]="SUCCEEDED",e[e.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY"}(i||(i={})),function(e){e[e.NONE=0]="NONE",e[e.MAP=1]="MAP",e[e.LABEL=2]="LABEL",e[e.LABEL_ALPHA=4]="LABEL_ALPHA",e[e.HITTEST=8]="HITTEST",e[e.HIGHLIGHT=16]="HIGHLIGHT",e[e.CLIP=32]="CLIP",e[e.DEBUG=64]="DEBUG",e[e.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(o||(o={})),function(e){e[e.SIZE=0]="SIZE",e[e.COLOR=1]="COLOR",e[e.OPACITY=2]="OPACITY",e[e.ROTATION=3]="ROTATION"}(a||(a={})),function(e){e[e.NONE=0]="NONE",e[e.OPACITY=1]="OPACITY",e[e.COLOR=2]="COLOR",e[e.ROTATION=4]="ROTATION",e[e.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",e[e.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",e[e.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",e[e.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE"}(c||(c={})),function(e){e[e.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",e[e.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",e[e.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",e[e.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(s||(s={})),function(e){e[e.SPRITE=0]="SPRITE",e[e.GLYPH=1]="GLYPH"}(u||(u={}))},73271:(e,n,t)=>{t.d(n,{Au:()=>i,Jz:()=>a,UJ:()=>o});const r=new Float32Array(1);new Uint32Array(r.buffer);function i(e){return[255&e,(65280&e)>>>8,(16711680&e)>>>16,(4278190080&e)>>>24]}function o(e,n){return 65535&e|n<<16}function a(e,n,t,r){return 255&e|(255&n)<<8|(255&t)<<16|r<<24}},61109:(e,n,t)=>{t.d(n,{G:()=>r});class r{constructor(e,n,t,r,i){let o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;this.name=e,this.count=n,this.type=t,this.offset=r,this.stride=i,this.normalized=o,this.divisor=a}}}}]);
//# sourceMappingURL=7331.87149f11.chunk.js.map