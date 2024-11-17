import{v as xe,c as N,r as F,o as we,d as Z,a as ke,g as Re,b as re,e as _e,h as H,i as Pe,p as P,m as oe,f as Ie,j as $e,k as ae,u as Le,l as W,n as Ve,t as le,q as Fe,s as He,w as je,x as s,y as v,z as m,A as b,B as l,C as qe,F as We}from"./index-DxMCDg_p.js";let Y=[];const ze=new WeakMap;function Xe(){Y.forEach(e=>e(...ze.get(e))),Y=[]}function Je(e,...r){ze.set(e,r),!Y.includes(e)&&Y.push(e)===1&&requestAnimationFrame(Xe)}function Ue(e){if(typeof e=="number")return{"":e.toString()};const r={};return e.split(/ +/).forEach(t=>{if(t==="")return;const[n,i]=t.split(":");i===void 0?r[""]=n:r[n]=i}),r}function _(e,r){var t;if(e==null)return;const n=Ue(e);if(r===void 0)return n[""];if(typeof r=="string")return(t=n[r])!==null&&t!==void 0?t:n[""];if(Array.isArray(r)){for(let i=r.length-1;i>=0;--i){const o=r[i];if(o in n)return n[o]}return n[""]}else{let i,o=-1;return Object.keys(n).forEach(a=>{const d=Number(a);!Number.isNaN(d)&&r>=d&&d>=o&&(o=d,i=n[a])}),i}}function Qe(e){var r;const t=(r=e.dirs)===null||r===void 0?void 0:r.find(({dir:n})=>n===xe);return!!(t&&t.value===!1)}const Ye=typeof window<"u",Ze={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function Ke(e){return`(min-width: ${e}px)`}const L={};function et(e=Ze){if(!Ye)return N(()=>[]);if(typeof window.matchMedia!="function")return N(()=>[]);const r=F({}),t=Object.keys(e),n=(i,o)=>{i.matches?r.value[o]=!0:r.value[o]=!1};return t.forEach(i=>{const o=e[i];let a,d;L[o]===void 0?(a=window.matchMedia(Ke(o)),a.addEventListener?a.addEventListener("change",p=>{d.forEach(u=>{u(p,i)})}):a.addListener&&a.addListener(p=>{d.forEach(u=>{u(p,i)})}),d=new Set,L[o]={mql:a,cbs:d}):(a=L[o].mql,d=L[o].cbs),d.add(n),a.matches&&d.forEach(p=>{p(a,i)})}),we(()=>{t.forEach(i=>{const{cbs:o}=L[e[i]];o.has(n)&&o.delete(n)})}),N(()=>{const{value:i}=r;return t.filter(o=>i[o])})}function de(e,r){console.error(`[vueuc/${e}]: ${r}`)}var M=[],tt=function(){return M.some(function(e){return e.activeTargets.length>0})},st=function(){return M.some(function(e){return e.skippedTargets.length>0})},ce="ResizeObserver loop completed with undelivered notifications.",rt=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:ce}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=ce),window.dispatchEvent(e)},q;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(q||(q={}));var k=function(e){return Object.freeze(e)},nt=function(){function e(r,t){this.inlineSize=r,this.blockSize=t,k(this)}return e}(),Ee=function(){function e(r,t,n,i){return this.x=r,this.y=t,this.width=n,this.height=i,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,k(this)}return e.prototype.toJSON=function(){var r=this,t=r.x,n=r.y,i=r.top,o=r.right,a=r.bottom,d=r.left,p=r.width,u=r.height;return{x:t,y:n,top:i,right:o,bottom:a,left:d,width:p,height:u}},e.fromRect=function(r){return new e(r.x,r.y,r.width,r.height)},e}(),ne=function(e){return e instanceof SVGElement&&"getBBox"in e},Ce=function(e){if(ne(e)){var r=e.getBBox(),t=r.width,n=r.height;return!t&&!n}var i=e,o=i.offsetWidth,a=i.offsetHeight;return!(o||a||e.getClientRects().length)},ue=function(e){var r;if(e instanceof Element)return!0;var t=(r=e==null?void 0:e.ownerDocument)===null||r===void 0?void 0:r.defaultView;return!!(t&&e instanceof t.Element)},it=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},j=typeof window<"u"?window:{},X=new WeakMap,pe=/auto|scroll/,ot=/^tb|vertical/,at=/msie|trident/i.test(j.navigator&&j.navigator.userAgent),z=function(e){return parseFloat(e||"0")},I=function(e,r,t){return e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=!1),new nt((t?r:e)||0,(t?e:r)||0)},fe=k({devicePixelContentBoxSize:I(),borderBoxSize:I(),contentBoxSize:I(),contentRect:new Ee(0,0,0,0)}),Be=function(e,r){if(r===void 0&&(r=!1),X.has(e)&&!r)return X.get(e);if(Ce(e))return X.set(e,fe),fe;var t=getComputedStyle(e),n=ne(e)&&e.ownerSVGElement&&e.getBBox(),i=!at&&t.boxSizing==="border-box",o=ot.test(t.writingMode||""),a=!n&&pe.test(t.overflowY||""),d=!n&&pe.test(t.overflowX||""),p=n?0:z(t.paddingTop),u=n?0:z(t.paddingRight),E=n?0:z(t.paddingBottom),y=n?0:z(t.paddingLeft),x=n?0:z(t.borderTopWidth),B=n?0:z(t.borderRightWidth),O=n?0:z(t.borderBottomWidth),h=n?0:z(t.borderLeftWidth),w=y+u,f=p+E,c=h+B,C=x+O,R=d?e.offsetHeight-C-e.clientHeight:0,S=a?e.offsetWidth-c-e.clientWidth:0,T=i?w+c:0,$=i?f+C:0,A=n?n.width:z(t.width)-T-S,G=n?n.height:z(t.height)-$-R,D=A+w+S+c,Me=G+f+R+C,ie=k({devicePixelContentBoxSize:I(Math.round(A*devicePixelRatio),Math.round(G*devicePixelRatio),o),borderBoxSize:I(D,Me,o),contentBoxSize:I(A,G,o),contentRect:new Ee(y,p,A,G)});return X.set(e,ie),ie},Oe=function(e,r,t){var n=Be(e,t),i=n.borderBoxSize,o=n.contentBoxSize,a=n.devicePixelContentBoxSize;switch(r){case q.DEVICE_PIXEL_CONTENT_BOX:return a;case q.BORDER_BOX:return i;default:return o}},lt=function(){function e(r){var t=Be(r);this.target=r,this.contentRect=t.contentRect,this.borderBoxSize=k([t.borderBoxSize]),this.contentBoxSize=k([t.contentBoxSize]),this.devicePixelContentBoxSize=k([t.devicePixelContentBoxSize])}return e}(),Te=function(e){if(Ce(e))return 1/0;for(var r=0,t=e.parentNode;t;)r+=1,t=t.parentNode;return r},dt=function(){var e=1/0,r=[];M.forEach(function(a){if(a.activeTargets.length!==0){var d=[];a.activeTargets.forEach(function(u){var E=new lt(u.target),y=Te(u.target);d.push(E),u.lastReportedSize=Oe(u.target,u.observedBox),y<e&&(e=y)}),r.push(function(){a.callback.call(a.observer,d,a.observer)}),a.activeTargets.splice(0,a.activeTargets.length)}});for(var t=0,n=r;t<n.length;t++){var i=n[t];i()}return e},ve=function(e){M.forEach(function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach(function(i){i.isActive()&&(Te(i.target)>e?t.activeTargets.push(i):t.skippedTargets.push(i))})})},ct=function(){var e=0;for(ve(e);tt();)e=dt(),ve(e);return st()&&rt(),e>0},K,De=[],ut=function(){return De.splice(0).forEach(function(e){return e()})},pt=function(e){if(!K){var r=0,t=document.createTextNode(""),n={characterData:!0};new MutationObserver(function(){return ut()}).observe(t,n),K=function(){t.textContent="".concat(r?r--:r++)}}De.push(e),K()},ft=function(e){pt(function(){requestAnimationFrame(e)})},Q=0,vt=function(){return!!Q},mt=250,bt={attributes:!0,characterData:!0,childList:!0,subtree:!0},me=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],be=function(e){return e===void 0&&(e=0),Date.now()+e},ee=!1,ht=function(){function e(){var r=this;this.stopped=!0,this.listener=function(){return r.schedule()}}return e.prototype.run=function(r){var t=this;if(r===void 0&&(r=mt),!ee){ee=!0;var n=be(r);ft(function(){var i=!1;try{i=ct()}finally{if(ee=!1,r=n-be(),!vt())return;i?t.run(1e3):r>0?t.run(r):t.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var r=this,t=function(){return r.observer&&r.observer.observe(document.body,bt)};document.body?t():j.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var r=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),me.forEach(function(t){return j.addEventListener(t,r.listener,!0)}))},e.prototype.stop=function(){var r=this;this.stopped||(this.observer&&this.observer.disconnect(),me.forEach(function(t){return j.removeEventListener(t,r.listener,!0)}),this.stopped=!0)},e}(),se=new ht,he=function(e){!Q&&e>0&&se.start(),Q+=e,!Q&&se.stop()},gt=function(e){return!ne(e)&&!it(e)&&getComputedStyle(e).display==="inline"},yt=function(){function e(r,t){this.target=r,this.observedBox=t||q.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var r=Oe(this.target,this.observedBox,!0);return gt(this.target)&&(this.lastReportedSize=r),this.lastReportedSize.inlineSize!==r.inlineSize||this.lastReportedSize.blockSize!==r.blockSize},e}(),St=function(){function e(r,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=r,this.callback=t}return e}(),J=new WeakMap,ge=function(e,r){for(var t=0;t<e.length;t+=1)if(e[t].target===r)return t;return-1},U=function(){function e(){}return e.connect=function(r,t){var n=new St(r,t);J.set(r,n)},e.observe=function(r,t,n){var i=J.get(r),o=i.observationTargets.length===0;ge(i.observationTargets,t)<0&&(o&&M.push(i),i.observationTargets.push(new yt(t,n&&n.box)),he(1),se.schedule())},e.unobserve=function(r,t){var n=J.get(r),i=ge(n.observationTargets,t),o=n.observationTargets.length===1;i>=0&&(o&&M.splice(M.indexOf(n),1),n.observationTargets.splice(i,1),he(-1))},e.disconnect=function(r){var t=this,n=J.get(r);n.observationTargets.slice().forEach(function(i){return t.unobserve(r,i.target)}),n.activeTargets.splice(0,n.activeTargets.length)},e}(),xt=function(){function e(r){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof r!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");U.connect(this,r)}return e.prototype.observe=function(r,t){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!ue(r))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");U.observe(this,r,t)},e.prototype.unobserve=function(r){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!ue(r))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");U.unobserve(this,r)},e.prototype.disconnect=function(){U.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();class wt{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new(typeof window<"u"&&window.ResizeObserver||xt)(this.handleResize),this.elHandlersMap=new Map}handleResize(r){for(const t of r){const n=this.elHandlersMap.get(t.target);n!==void 0&&n(t)}}registerHandler(r,t){this.elHandlersMap.set(r,t),this.observer.observe(r)}unregisterHandler(r){this.elHandlersMap.has(r)&&(this.elHandlersMap.delete(r),this.observer.unobserve(r))}}const ye=new wt,Rt=Z({name:"ResizeObserver",props:{onResize:Function},setup(e){let r=!1;const t=Re().proxy;function n(i){const{onResize:o}=e;o!==void 0&&o(i)}re(()=>{const i=t.$el;if(i===void 0){de("resize-observer","$el does not exist.");return}if(i.nextElementSibling!==i.nextSibling&&i.nodeType===3&&i.nodeValue!==""){de("resize-observer","$el can not be observed (it may be a text node).");return}i.nextElementSibling!==null&&(ye.registerHandler(i.nextElementSibling,n),r=!0)}),we(()=>{r&&ye.unregisterHandler(t.$el.nextElementSibling)})},render(){return ke(this.$slots,"default")}}),Se=1,Ae=_e("n-grid"),Ge=1,zt={span:{type:[Number,String],default:Ge},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},g=Z({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:zt,setup(){const{isSsrRef:e,xGapRef:r,itemStyleRef:t,overflowRef:n,layoutShiftDisabledRef:i}=Pe(Ae),o=Re();return{overflow:n,itemStyle:t,layoutShiftDisabled:i,mergedXGap:N(()=>P(r.value||0)),deriveStyle:()=>{e.value;const{privateSpan:a=Ge,privateShow:d=!0,privateColStart:p=void 0,privateOffset:u=0}=o.vnode.props,{value:E}=r,y=P(E||0);return{display:d?"":"none",gridColumn:`${p??`span ${a}`} / span ${a}`,marginLeft:u?`calc((100% - (${a} - 1) * ${y}) / ${a} * ${u} + ${y} * ${u})`:""}}}},render(){var e,r;if(this.layoutShiftDisabled){const{span:t,offset:n,mergedXGap:i}=this;return H("div",{style:{gridColumn:`span ${t} / span ${t}`,marginLeft:n?`calc((100% - (${t} - 1) * ${i}) / ${t} * ${n} + ${i} * ${n})`:""}},this.$slots)}return H("div",{style:[this.itemStyle,this.deriveStyle()]},(r=(e=this.$slots).default)===null||r===void 0?void 0:r.call(e,{overflow:this.overflow}))}}),Et={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},Ne=24,te="__ssr__",Ct={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:Ne},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},V=Z({name:"Grid",inheritAttrs:!1,props:Ct,setup(e){const{mergedClsPrefixRef:r,mergedBreakpointsRef:t}=Le(e),n=/^\d+$/,i=F(void 0),o=et((t==null?void 0:t.value)||Et),a=W(()=>!!(e.itemResponsive||!n.test(e.cols.toString())||!n.test(e.xGap.toString())||!n.test(e.yGap.toString()))),d=N(()=>{if(a.value)return e.responsive==="self"?i.value:o.value}),p=W(()=>{var f;return(f=Number(_(e.cols.toString(),d.value)))!==null&&f!==void 0?f:Ne}),u=W(()=>_(e.xGap.toString(),d.value)),E=W(()=>_(e.yGap.toString(),d.value)),y=f=>{i.value=f.contentRect.width},x=f=>{Je(y,f)},B=F(!1),O=N(()=>{if(e.responsive==="self")return x}),h=F(!1),w=F();return re(()=>{const{value:f}=w;f&&f.hasAttribute(te)&&(f.removeAttribute(te),h.value=!0)}),Ve(Ae,{layoutShiftDisabledRef:le(e,"layoutShiftDisabled"),isSsrRef:h,itemStyleRef:le(e,"itemStyle"),xGapRef:u,overflowRef:B}),{isSsr:!Fe,contentEl:w,mergedClsPrefix:r,style:N(()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:P(e.xGap),rowGap:P(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${p.value}, minmax(0, 1fr))`,columnGap:P(u.value),rowGap:P(E.value)}),isResponsive:a,responsiveQuery:d,responsiveCols:p,handleResize:O,overflow:B}},render(){if(this.layoutShiftDisabled)return H("div",oe({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var r,t,n,i,o,a,d;this.overflow=!1;const p=Ie($e(this)),u=[],{collapsed:E,collapsedRows:y,responsiveCols:x,responsiveQuery:B}=this;p.forEach(c=>{var C,R,S,T,$;if(((C=c==null?void 0:c.type)===null||C===void 0?void 0:C.__GRID_ITEM__)!==!0)return;if(Qe(c)){const D=ae(c);D.props?D.props.privateShow=!1:D.props={privateShow:!1},u.push({child:D,rawChildSpan:0});return}c.dirs=((R=c.dirs)===null||R===void 0?void 0:R.filter(({dir:D})=>D!==xe))||null,((S=c.dirs)===null||S===void 0?void 0:S.length)===0&&(c.dirs=null);const A=ae(c),G=Number(($=_((T=A.props)===null||T===void 0?void 0:T.span,B))!==null&&$!==void 0?$:Se);G!==0&&u.push({child:A,rawChildSpan:G})});let O=0;const h=(r=u[u.length-1])===null||r===void 0?void 0:r.child;if(h!=null&&h.props){const c=(t=h.props)===null||t===void 0?void 0:t.suffix;c!==void 0&&c!==!1&&(O=Number((i=_((n=h.props)===null||n===void 0?void 0:n.span,B))!==null&&i!==void 0?i:Se),h.props.privateSpan=O,h.props.privateColStart=x+1-O,h.props.privateShow=(o=h.props.privateShow)!==null&&o!==void 0?o:!0)}let w=0,f=!1;for(const{child:c,rawChildSpan:C}of u){if(f&&(this.overflow=!0),!f){const R=Number((d=_((a=c.props)===null||a===void 0?void 0:a.offset,B))!==null&&d!==void 0?d:0),S=Math.min(C+R,x);if(c.props?(c.props.privateSpan=S,c.props.privateOffset=R):c.props={privateSpan:S,privateOffset:R},E){const T=w%x;S+T>x&&(w+=x-T),S+w+O>y*x?f=!0:w+=S}}f&&(c.props?c.props.privateShow!==!0&&(c.props.privateShow=!1):c.props={privateShow:!1})}return H("div",oe({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[te]:this.isSsr||void 0},this.$attrs),u.map(({child:c})=>c))};return this.isResponsive&&this.responsive==="self"?H(Rt,{onResize:this.handleResize},{default:e}):e()}}),Bt="/cvgvsm/pic.jpeg",Ot={class:"container mb5"},Dt=Z({__name:"Cv",setup(e){return re(()=>{document.title="CV. Guillermo Valentín Sánchez"}),(r,t)=>(He(),je(We,null,[s("div",Ot,[v(b(V),{class:"mt3",cols:"1 s:1 m:2 ","x-gap":"10",responsive:"screen"},{default:m(()=>[v(b(g),null,{default:m(()=>t[0]||(t[0]=[s("div",{class:"flex justify-end"},[s("img",{class:"pic",src:Bt})],-1)])),_:1}),v(b(g),{class:"letter"},{default:m(()=>t[1]||(t[1]=[s("div",null,[s("strong",null,"Guillermo Valentín Sánchez")],-1),s("p",{class:"mt0 mb0"},[s("strong",null,"Desarrollador front end senior")],-1),s("p",{class:"mt0 mb0"},[s("strong",null,"Diseñador gráfico")],-1),s("p",{class:"mt0"},"nacimiento: 1973",-1),s("p",{class:"text"},"Hola!, desde el año 1992 he trabajado en entornos de edición y publicidad, como diseñador gráfico, aunque ahora ya no ejerzo, definitivamente esa experiencia es muy útil para realizar de manera óptima mis tareas como maquetador web y desarrollador front-end.",-1),s("p",{class:"text"},[l("Soy entusiasta de las tecnologías y desarrollo de software y autodidacta, llevo codificando profesionalmente desde 2012. Transicioné el paso de jQuery para todo, a "),s("strong",null,"JavaScript moderno"),l(" en entornos profesionales. ")],-1),s("p",{class:"text"},[l("Soy una persona "),s("a",{target:"_blank",href:"https://es.wikipedia.org/wiki/Sensibilidad_de_procesamiento_sensorial"},"SPS"),l(" con altas capacidades, utilizo el proceso intensivo, capacidad de análisis, cuidado de los detalles... para prácticamente todo, puedo comprender, aprender y abordar temáticas complejas en todos los ámbitos en muy poco tiempo.")],-1),s("p",{class:"text"},[l("En los últimos años he sido partícipe en un porcentaje muy alto en un proyecto realmente grande para gestión de eventos donde he ideado y producido un editor web desde 0, totalmente operativo, esto me ha permitido llevar las tecnologías al límite y conocer los mejores métodos, técnicas y librerías para desarrollo front-end, además de habituarme al trabajo en equipo con "),s("strong",null,"Jira"),l(", "),s("strong",null,"Git Flow"),l(".")],-1),s("p",{class:"text"},[l("Desarrollo de grandes proyectos, apps nocode, podría decir que soy experto en "),s("strong",null,"Vue"),l(" 3, "),s("strong",null,"Typescript"),l(" y "),s("strong",null,"Nuxt"),l(" 3 al realizar una gran cantidad de proyectos profesionales en este ecosistema (también en las versiones 2). Podría crear y adaptarme con cierta facilidad proyectos de "),s("strong",null,"React"),l(" y "),s("strong",null,"Angular"),l(".")],-1),s("p",{class:"text"},[s("strong",null,"Reutilización de componentes"),l(", "),s("strong",null,"estudio de la arquitectura"),l(", "),s("strong",null,"buenas prácticas"),l(", "),s("strong",null,"código legible y mantenible"),l(", "),s("strong",null,"patrones de diseño"),l(", "),s("strong",null,"pruebas unitarias"),l(" y "),s("strong",null,"end to end"),l(". Configuración y manejo de "),s("strong",null,"Git"),l(", "),s("strong",null,"GitHub"),l(", "),s("strong",null,"Docker"),l(", "),s("strong",null,"IA para programa"),l("r. "),s("strong",null,"Usabilidad"),l(", "),s("strong",null,"interfaces gráficas"),l(", "),s("strong",null,"WYSIWYG"),l(", "),s("strong",null,"accesibilidad"),l(", "),s("strong",null,"multi idioma"),l(", "),s("strong",null,"CSS"),l(", "),s("strong",null,"SCSS"),l(" 12 años experiencia.")],-1),s("p",{class:"text"},"Desarrollo de aplicaciones completas, backend GO - Gin o en PHP - Laravel o Typescript - Adonis JS. Comercio electrónico, backoffices personalizados, aplicaciones móviles y de escritorio. Interesado en el la publicación de IA para usuario final, WASM y GO.",-1)])),_:1})]),_:1}),v(b(V),{class:"mt0",cols:"1 s:1 m:2 ","x-gap":"10",responsive:"screen"},{default:m(()=>[v(b(g),null,{default:m(()=>t[2]||(t[2]=[s("h3",{class:"mb0"},[s("strong",null,"Formación")],-1),s("p",{class:"mb0"},[s("b",null,"Centro de estudios de informática superior Alicante.")],-1),s("p",{class:"mt0"},"Programador de gestión - Analista programador 1990 – 1992. ",-1),s("p",{class:"mb0"},[s("b",null,"Cursando ChatGPT Prompt Engineering for Developers")],-1),s("p",{class:"mt0"},"Actualidad ",-1)])),_:1}),v(b(g),null,{default:m(()=>t[3]||(t[3]=[s("h3",{class:"mb2"},[s("strong",null,"Autodidacta")],-1),s("p",{class:"mt0"},"Mi formación se basa en el seguimiento, testeo y aprendizage mediante artículos, cursos, libros, etc... de todas las tecnologías susceptibles de mejorar la eficiencia en el desarrollo de software. ",-1),s("h3",{class:"mb0"},[s("strong",null,"Inglés")],-1),s("p",{class:"mb0"},"Leo y es escribo pero no hablo ni entiendo con facilidad.",-1)])),_:1})]),_:1}),t[13]||(t[13]=s("h3",{class:"mt3 mb0"},[s("strong",null,"Experiencia")],-1)),v(b(V),{class:"mt0",cols:"1 s:1 m:3 ","x-gap":"10",responsive:"screen"},{default:m(()=>[v(b(g),null,{default:m(()=>t[4]||(t[4]=[s("p",{class:"mb0"},[s("b",null,"Bmotion")],-1),s("p",{class:"mt0 mb0"},"Desarrollo aplicaciones nocode",-1),s("p",{class:"mt0 mb2"},"may.2022 • Actualidad • Madrid (remoto)",-1),s("p",{class:"mb0"},[s("b",null,"Indexeo Marketing")],-1),s("p",{class:"mt0 mb0"},"Desarrollo web, mantenimiento",-1),s("p",{class:"mt0 mb2"},"ene.2021 • mayo 2022 • Ibi (remoto)",-1),s("p",{class:"mb0"},[s("b",null,"Por cuenta propia")],-1),s("p",{class:"mt0 mb0"},"Desarrollo web, diseño gráfico/web",-1),s("p",{class:"mt0 mb2"},"ene.2020 • ene.2021 • Santa Pola",-1),s("p",{class:"mb0"},[s("b",null,"NovoSpain")],-1),s("p",{class:"mt0 mb0"},"Desarrollo web, diseño gráfico",-1),s("p",{class:"mt0 mb2"},"nov.2016 • ene.2020 • Elche",-1)])),_:1}),v(b(g),null,{default:m(()=>t[5]||(t[5]=[s("p",{class:"mb0 mt1"},[s("b",null,"3dids.com")],-1),s("p",{class:"mt0 mb0"},"Desarrollo front-end",-1),s("p",{class:"mt0 mb2"},"mar.2016 • nov.2016 • Alicante",-1),s("p",{class:"mb0"},[s("b",null,"Fractal Internet Consultancy")],-1),s("p",{class:"mt0 mb0"},"Desarrollo web y diseño gráfico/web",-1),s("p",{class:"mt0 mb2"},"jun.2012 • oct.2015 • Madrid (remoto)",-1),s("p",{class:"mb0"},[s("b",null,"Baluarte Comunicación, S.L.")],-1),s("p",{class:"mt0 mb0"},"Desarrollo web y diseño gráfico",-1),s("p",{class:"mt0 mb2"},"may.2009 • nov.2012 • Santa Pola",-1),s("p",{class:"mb0"},[s("b",null,"MASA International")],-1),s("p",{class:"mt0 mb0"},"Diseñador Gráfico (encargado dept.)",-1),s("p",{class:"mt0 mb2"},"jun.2005 • sept.2008 • Torrevieja",-1)])),_:1}),v(b(g),null,{default:m(()=>t[6]||(t[6]=[s("p",{class:"mb0 mt1"},[s("b",null,"Imprenta Hnos. Rastoll")],-1),s("p",{class:"mt0 mb0"},"Diseñador Gráfico, artefinalista",-1),s("p",{class:"mt0 mb2"},"dic.2003 • oct.2005 • Santa Pola",-1),s("p",{class:"mb0"},[s("b",null,"Cartel Rotulación, S.L.")],-1),s("p",{class:"mt0 mb0"},"Diseño para exteriores, rotulación e impresión",-1),s("p",{class:"mt0 mb2"},"feb.2000 • abr.2003 • Alicante",-1),s("p",{class:"mb0"},[s("b",null,"Rusan Copy, S.L (CopyFlash)")],-1),s("p",{class:"mt0 mb0"},"Diseño para exteriores, rotulación e impresión",-1),s("p",{class:"mt0 mb2"},"ene.1993 • ene.2000 • Alicante",-1)])),_:1})]),_:1}),t[14]||(t[14]=s("h3",{class:"mt3 mb0"},[s("strong",null,"Habilidades")],-1)),t[15]||(t[15]=s("h3",{class:"mb0"},[s("strong",null,"Frontend")],-1)),v(b(V),{class:"mt0",cols:"1 s:1 m:3 ","x-gap":"10",responsive:"screen"},{default:m(()=>[v(b(g),null,{default:m(()=>t[7]||(t[7]=[s("p",{class:"mb2 mt2"},"Código mantenible y legible, convenciones de código.",-1),s("p",{class:"mb2 mt2"},"Gestión de conexión, repositorios API, fetch, ofetch, axios..",-1),s("p",{class:"mb2 mt2"},"Internacionalización.",-1),s("p",{class:"mb2 mt2"},"Persistencia de datos. IndexDB, LocalStorage, Node fs ...",-1),s("p",{class:"mb2 mt2"},"Autenticación.",-1),s("p",{class:"mb2 mt2"},"Manejo y conversión de fechas.",-1),s("p",{class:"mb2 mt2"},"Creación programática y previsualización de PDF.",-1),s("p",{class:"mb2 mt2"},"Carruseles, galerías, modal y sliders responsive, tooltips, notificaciones, arrastrar y soltar, calendario interactivo.",-1),s("p",{class:"mb1 mt2"},"Validación front-end y back-end en vivo.",-1)])),_:1}),v(b(g),null,{default:m(()=>t[8]||(t[8]=[s("p",{class:"mb2 mt1"},"Marcado semántico.",-1),s("p",{class:"mb1 mt2"},"Web components, modularización, reutilización.",-1),s("p",{class:"mb2 mt2"},"Web App.",-1),s("p",{class:"mb2 mt2"},"Cookies.",-1),s("p",{class:"mb2 mt2"},"Canvas.",-1),s("p",{class:"mb2 mt2"},"Audio y video en la web.",-1),s("p",{class:"mb2 mt2"},"Pre-procesadores CSS.",-1),s("p",{class:"mb2 mt2"},"Desarrollo responsive, mobile first.",-1),s("p",{class:"mb2 mt2"},"Frameworks: Bulma, Naive-ui, Bootstrap, Fundation, Pure, UI-Kit, Skeleton...",-1),s("p",{class:"mb2 mt2"},"Tipografía web.",-1),s("p",{class:"mb2 mt2"},"Gráficos vectoriales (svg).",-1),s("p",{class:"mb1 mt2"},"Animaciones CSS.",-1)])),_:1}),v(b(g),null,{default:m(()=>t[9]||(t[9]=[s("p",{class:"mb2 mt1"},"Javascript orientado a objetos.",-1),s("p",{class:"mb2 mt2"},"Javascript asíncrono.",-1),s("p",{class:"mb2 mt2"},"Estructuras de datos Json.",-1),s("p",{class:"mb2 mt2"},"TypeScript.",-1),s("p",{class:"mb1 mt2"},"Arquitectura hexagonal.",-1),s("p",{class:"mb2 mt2"},"Motores de plantillas (pug, blade, liquid...).",-1),s("p",{class:"mb2 mt2"},"Gestión de estado, Pinia.. ",-1),s("p",{class:"mb2 mt2"},"Prototipado UI-UX.",-1),s("p",{class:"mb1 mt2"},"Flutter, Tauri, Electron, App híbrida, Cordova, Ionic. App nativo.",-1)])),_:1})]),_:1}),t[16]||(t[16]=s("h3",{class:"mb0"},[s("strong",null,"Backend")],-1)),v(b(V),{class:"mt0",cols:"1 s:1 m:3 ","x-gap":"10",responsive:"screen"},{default:m(()=>[v(b(g),null,{default:m(()=>t[10]||(t[10]=[s("p",{class:"mb2 mt1"},"Creación de backend API Rest o con plantillas con GO/Gin, TypeScript/Adonis, PHP/Laravel",-1),s("p",{class:"mb2 mt1"},"Creación, diseño y optimización de bases de datos relacionales MySql, MariaDB, Postgress...",-1),s("p",{class:"mb2 mt2"},"Migraciones y generación de datos de prueba.",-1),s("p",{class:"mb2 mt2"},"Login y registro seguro, encriptación.",-1),s("p",{class:"mb1 mt2"},"Gestión y proceso de ficheros desde el servidor, imagen, vectorial, excel, pdf ...",-1)])),_:1}),v(b(g),null,{default:m(()=>t[11]||(t[11]=[s("p",{class:"mb1 mt1"},"Paginación.",-1),s("p",{class:"mb2 mt2"},"Envío de correos automatizados.",-1),s("p",{class:"mb2 mt2"},"Creación de tareas periódicas.",-1),s("p",{class:"mb2 mt2"},"Caché en disco o memoria.",-1),s("p",{class:"mb1 mt2"},"Manejo de eventos y colas de eventos.",-1)])),_:1}),v(b(g),null,{default:m(()=>t[12]||(t[12]=[s("p",{class:"mb2 mt1"},"Uso de Linux.",-1),s("p",{class:"mb2 mt2"},"Gestión de dependencias.",-1),s("p",{class:"mb2 mt2"},"Test unitarios.",-1),s("p",{class:"mb2 mt2"},"ORM Gorm, Eloquent y Lucid.",-1)])),_:1})]),_:1})]),t[17]||(t[17]=qe('<div class="mb5"> </div><div class="mb5"> </div><div class="mb5"> </div><div class="mb5"> </div><div class="mb5"> </div><div class="mb5"> </div><div class="mb5"> </div><div class="mb5"> </div><div class="mb5"> </div><div class="mb5"> </div>',10))],64))}});export{Dt as default};