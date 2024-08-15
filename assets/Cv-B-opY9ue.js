import{v as Se,c as A,r as V,o as xe,d as Z,g as we,a as ne,b as Me,e as ke,i as Pe,p as k,h as H,u as Ie,f as j,j as $e,t as re,k as Le,m as ae,l as Ve,n as He,q as le,s as Fe,w as s,x as f,y as v,z as h,F as qe,A as je,B as We,C as J}from"./index-sxnYWKoE.js";let Y=[];const Re=new WeakMap;function Xe(){Y.forEach(e=>e(...Re.get(e))),Y=[]}function Ue(e,...t){Re.set(e,t),!Y.includes(e)&&Y.push(e)===1&&requestAnimationFrame(Xe)}function Je(e){if(typeof e=="number")return{"":e.toString()};const t={};return e.split(/ +/).forEach(n=>{if(n==="")return;const[o,i]=n.split(":");i===void 0?t[""]=o:t[o]=i}),t}function M(e,t){var n;if(e==null)return;const o=Je(e);if(t===void 0)return o[""];if(typeof t=="string")return(n=o[t])!==null&&n!==void 0?n:o[""];if(Array.isArray(t)){for(let i=t.length-1;i>=0;--i){const r=t[i];if(r in o)return o[r]}return o[""]}else{let i,r=-1;return Object.keys(o).forEach(a=>{const l=Number(a);!Number.isNaN(l)&&t>=l&&l>=r&&(r=l,i=o[a])}),i}}function Qe(e){var t;const n=(t=e.dirs)===null||t===void 0?void 0:t.find(({dir:o})=>o===Se);return!!(n&&n.value===!1)}const Ye=typeof window<"u",Ze={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function Ke(e){return`(min-width: ${e}px)`}const $={};function et(e=Ze){if(!Ye)return A(()=>[]);if(typeof window.matchMedia!="function")return A(()=>[]);const t=V({}),n=Object.keys(e),o=(i,r)=>{i.matches?t.value[r]=!0:t.value[r]=!1};return n.forEach(i=>{const r=e[i];let a,l;$[r]===void 0?(a=window.matchMedia(Ke(r)),a.addEventListener?a.addEventListener("change",u=>{l.forEach(d=>{d(u,i)})}):a.addListener&&a.addListener(u=>{l.forEach(d=>{d(u,i)})}),l=new Set,$[r]={mql:a,cbs:l}):(a=$[r].mql,l=$[r].cbs),l.add(o),a.matches&&l.forEach(u=>{u(a,i)})}),xe(()=>{n.forEach(i=>{const{cbs:r}=$[e[i]];r.has(o)&&r.delete(o)})}),A(()=>{const{value:i}=t;return n.filter(r=>i[r])})}function ce(e,t){console.error(`[vueuc/${e}]: ${t}`)}var G=[],tt=function(){return G.some(function(e){return e.activeTargets.length>0})},st=function(){return G.some(function(e){return e.skippedTargets.length>0})},de="ResizeObserver loop completed with undelivered notifications.",nt=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:de}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=de),window.dispatchEvent(e)},q;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(q||(q={}));var N=function(e){return Object.freeze(e)},ot=function(){function e(t,n){this.inlineSize=t,this.blockSize=n,N(this)}return e}(),ze=function(){function e(t,n,o,i){return this.x=t,this.y=n,this.width=o,this.height=i,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,N(this)}return e.prototype.toJSON=function(){var t=this,n=t.x,o=t.y,i=t.top,r=t.right,a=t.bottom,l=t.left,u=t.width,d=t.height;return{x:n,y:o,top:i,right:r,bottom:a,left:l,width:u,height:d}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),oe=function(e){return e instanceof SVGElement&&"getBBox"in e},Ee=function(e){if(oe(e)){var t=e.getBBox(),n=t.width,o=t.height;return!n&&!o}var i=e,r=i.offsetWidth,a=i.offsetHeight;return!(r||a||e.getClientRects().length)},ue=function(e){var t;if(e instanceof Element)return!0;var n=(t=e==null?void 0:e.ownerDocument)===null||t===void 0?void 0:t.defaultView;return!!(n&&e instanceof n.Element)},it=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},F=typeof window<"u"?window:{},W=new WeakMap,pe=/auto|scroll/,rt=/^tb|vertical/,at=/msie|trident/i.test(F.navigator&&F.navigator.userAgent),w=function(e){return parseFloat(e||"0")},P=function(e,t,n){return e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=!1),new ot((n?t:e)||0,(n?e:t)||0)},fe=N({devicePixelContentBoxSize:P(),borderBoxSize:P(),contentBoxSize:P(),contentRect:new ze(0,0,0,0)}),Ce=function(e,t){if(t===void 0&&(t=!1),W.has(e)&&!t)return W.get(e);if(Ee(e))return W.set(e,fe),fe;var n=getComputedStyle(e),o=oe(e)&&e.ownerSVGElement&&e.getBBox(),i=!at&&n.boxSizing==="border-box",r=rt.test(n.writingMode||""),a=!o&&pe.test(n.overflowY||""),l=!o&&pe.test(n.overflowX||""),u=o?0:w(n.paddingTop),d=o?0:w(n.paddingRight),R=o?0:w(n.paddingBottom),_=o?0:w(n.paddingLeft),y=o?0:w(n.borderTopWidth),E=o?0:w(n.borderRightWidth),C=o?0:w(n.borderBottomWidth),m=o?0:w(n.borderLeftWidth),S=_+d,p=u+R,c=m+E,z=y+C,x=l?e.offsetHeight-z-e.clientHeight:0,g=a?e.offsetWidth-c-e.clientWidth:0,B=i?S+c:0,I=i?p+z:0,T=o?o.width:w(n.width)-B-g,D=o?o.height:w(n.height)-I-x,O=T+S+g+c,Ne=D+p+x+z,ie=N({devicePixelContentBoxSize:P(Math.round(T*devicePixelRatio),Math.round(D*devicePixelRatio),r),borderBoxSize:P(O,Ne,r),contentBoxSize:P(T,D,r),contentRect:new ze(_,u,T,D)});return W.set(e,ie),ie},Be=function(e,t,n){var o=Ce(e,n),i=o.borderBoxSize,r=o.contentBoxSize,a=o.devicePixelContentBoxSize;switch(t){case q.DEVICE_PIXEL_CONTENT_BOX:return a;case q.BORDER_BOX:return i;default:return r}},lt=function(){function e(t){var n=Ce(t);this.target=t,this.contentRect=n.contentRect,this.borderBoxSize=N([n.borderBoxSize]),this.contentBoxSize=N([n.contentBoxSize]),this.devicePixelContentBoxSize=N([n.devicePixelContentBoxSize])}return e}(),Oe=function(e){if(Ee(e))return 1/0;for(var t=0,n=e.parentNode;n;)t+=1,n=n.parentNode;return t},ct=function(){var e=1/0,t=[];G.forEach(function(a){if(a.activeTargets.length!==0){var l=[];a.activeTargets.forEach(function(d){var R=new lt(d.target),_=Oe(d.target);l.push(R),d.lastReportedSize=Be(d.target,d.observedBox),_<e&&(e=_)}),t.push(function(){a.callback.call(a.observer,l,a.observer)}),a.activeTargets.splice(0,a.activeTargets.length)}});for(var n=0,o=t;n<o.length;n++){var i=o[n];i()}return e},ve=function(e){G.forEach(function(n){n.activeTargets.splice(0,n.activeTargets.length),n.skippedTargets.splice(0,n.skippedTargets.length),n.observationTargets.forEach(function(i){i.isActive()&&(Oe(i.target)>e?n.activeTargets.push(i):n.skippedTargets.push(i))})})},dt=function(){var e=0;for(ve(e);tt();)e=ct(),ve(e);return st()&&nt(),e>0},K,Te=[],ut=function(){return Te.splice(0).forEach(function(e){return e()})},pt=function(e){if(!K){var t=0,n=document.createTextNode(""),o={characterData:!0};new MutationObserver(function(){return ut()}).observe(n,o),K=function(){n.textContent="".concat(t?t--:t++)}}Te.push(e),K()},ft=function(e){pt(function(){requestAnimationFrame(e)})},Q=0,vt=function(){return!!Q},ht=250,mt={attributes:!0,characterData:!0,childList:!0,subtree:!0},he=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],me=function(e){return e===void 0&&(e=0),Date.now()+e},ee=!1,bt=function(){function e(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return e.prototype.run=function(t){var n=this;if(t===void 0&&(t=ht),!ee){ee=!0;var o=me(t);ft(function(){var i=!1;try{i=dt()}finally{if(ee=!1,t=o-me(),!vt())return;i?n.run(1e3):t>0?n.run(t):n.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var t=this,n=function(){return t.observer&&t.observer.observe(document.body,mt)};document.body?n():F.addEventListener("DOMContentLoaded",n)},e.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),he.forEach(function(n){return F.addEventListener(n,t.listener,!0)}))},e.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),he.forEach(function(n){return F.removeEventListener(n,t.listener,!0)}),this.stopped=!0)},e}(),se=new bt,be=function(e){!Q&&e>0&&se.start(),Q+=e,!Q&&se.stop()},_t=function(e){return!oe(e)&&!it(e)&&getComputedStyle(e).display==="inline"},gt=function(){function e(t,n){this.target=t,this.observedBox=n||q.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var t=Be(this.target,this.observedBox,!0);return _t(this.target)&&(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),yt=function(){function e(t,n){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=n}return e}(),X=new WeakMap,_e=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1},U=function(){function e(){}return e.connect=function(t,n){var o=new yt(t,n);X.set(t,o)},e.observe=function(t,n,o){var i=X.get(t),r=i.observationTargets.length===0;_e(i.observationTargets,n)<0&&(r&&G.push(i),i.observationTargets.push(new gt(n,o&&o.box)),be(1),se.schedule())},e.unobserve=function(t,n){var o=X.get(t),i=_e(o.observationTargets,n),r=o.observationTargets.length===1;i>=0&&(r&&G.splice(G.indexOf(o),1),o.observationTargets.splice(i,1),be(-1))},e.disconnect=function(t){var n=this,o=X.get(t);o.observationTargets.slice().forEach(function(i){return n.unobserve(t,i.target)}),o.activeTargets.splice(0,o.activeTargets.length)},e}(),St=function(){function e(t){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof t!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");U.connect(this,t)}return e.prototype.observe=function(t,n){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!ue(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");U.observe(this,t,n)},e.prototype.unobserve=function(t){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!ue(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");U.unobserve(this,t)},e.prototype.disconnect=function(){U.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();class xt{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new(typeof window<"u"&&window.ResizeObserver||St)(this.handleResize),this.elHandlersMap=new Map}handleResize(t){for(const n of t){const o=this.elHandlersMap.get(n.target);o!==void 0&&o(n)}}registerHandler(t,n){this.elHandlersMap.set(t,n),this.observer.observe(t)}unregisterHandler(t){this.elHandlersMap.has(t)&&(this.elHandlersMap.delete(t),this.observer.unobserve(t))}}const ge=new xt,wt=Z({name:"ResizeObserver",props:{onResize:Function},setup(e){let t=!1;const n=we().proxy;function o(i){const{onResize:r}=e;r!==void 0&&r(i)}ne(()=>{const i=n.$el;if(i===void 0){ce("resize-observer","$el does not exist.");return}if(i.nextElementSibling!==i.nextSibling&&i.nodeType===3&&i.nodeValue!==""){ce("resize-observer","$el can not be observed (it may be a text node).");return}i.nextElementSibling!==null&&(ge.registerHandler(i.nextElementSibling,o),t=!0)}),xe(()=>{t&&ge.unregisterHandler(n.$el.nextElementSibling)})},render(){return Me(this.$slots,"default")}}),ye=1,De=ke("n-grid"),Ae=1,Rt={span:{type:[Number,String],default:Ae},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},b=Z({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:Rt,setup(){const{isSsrRef:e,xGapRef:t,itemStyleRef:n,overflowRef:o,layoutShiftDisabledRef:i}=Pe(De),r=we();return{overflow:o,itemStyle:n,layoutShiftDisabled:i,mergedXGap:A(()=>k(t.value||0)),deriveStyle:()=>{e.value;const{privateSpan:a=Ae,privateShow:l=!0,privateColStart:u=void 0,privateOffset:d=0}=r.vnode.props,{value:R}=t,_=k(R||0);return{display:l?"":"none",gridColumn:`${u??`span ${a}`} / span ${a}`,marginLeft:d?`calc((100% - (${a} - 1) * ${_}) / ${a} * ${d} + ${_} * ${d})`:""}}}},render(){var e,t;if(this.layoutShiftDisabled){const{span:n,offset:o,mergedXGap:i}=this;return H("div",{style:{gridColumn:`span ${n} / span ${n}`,marginLeft:o?`calc((100% - (${n} - 1) * ${i}) / ${n} * ${o} + ${i} * ${o})`:""}},this.$slots)}return H("div",{style:[this.itemStyle,this.deriveStyle()]},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e,{overflow:this.overflow}))}}),zt={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},Ge=24,te="__ssr__",Et={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:Ge},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},L=Z({name:"Grid",inheritAttrs:!1,props:Et,setup(e){const{mergedClsPrefixRef:t,mergedBreakpointsRef:n}=Ie(e),o=/^\d+$/,i=V(void 0),r=et((n==null?void 0:n.value)||zt),a=j(()=>!!(e.itemResponsive||!o.test(e.cols.toString())||!o.test(e.xGap.toString())||!o.test(e.yGap.toString()))),l=A(()=>{if(a.value)return e.responsive==="self"?i.value:r.value}),u=j(()=>{var p;return(p=Number(M(e.cols.toString(),l.value)))!==null&&p!==void 0?p:Ge}),d=j(()=>M(e.xGap.toString(),l.value)),R=j(()=>M(e.yGap.toString(),l.value)),_=p=>{i.value=p.contentRect.width},y=p=>{Ue(_,p)},E=V(!1),C=A(()=>{if(e.responsive==="self")return y}),m=V(!1),S=V();return ne(()=>{const{value:p}=S;p&&p.hasAttribute(te)&&(p.removeAttribute(te),m.value=!0)}),$e(De,{layoutShiftDisabledRef:re(e,"layoutShiftDisabled"),isSsrRef:m,itemStyleRef:re(e,"itemStyle"),xGapRef:d,overflowRef:E}),{isSsr:!Le,contentEl:S,mergedClsPrefix:t,style:A(()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:k(e.xGap),rowGap:k(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${u.value}, minmax(0, 1fr))`,columnGap:k(d.value),rowGap:k(R.value)}),isResponsive:a,responsiveQuery:l,responsiveCols:u,handleResize:C,overflow:E}},render(){if(this.layoutShiftDisabled)return H("div",ae({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var t,n,o,i,r,a,l;this.overflow=!1;const u=Ve(He(this)),d=[],{collapsed:R,collapsedRows:_,responsiveCols:y,responsiveQuery:E}=this;u.forEach(c=>{var z,x,g,B,I;if(((z=c==null?void 0:c.type)===null||z===void 0?void 0:z.__GRID_ITEM__)!==!0)return;if(Qe(c)){const O=le(c);O.props?O.props.privateShow=!1:O.props={privateShow:!1},d.push({child:O,rawChildSpan:0});return}c.dirs=((x=c.dirs)===null||x===void 0?void 0:x.filter(({dir:O})=>O!==Se))||null,((g=c.dirs)===null||g===void 0?void 0:g.length)===0&&(c.dirs=null);const T=le(c),D=Number((I=M((B=T.props)===null||B===void 0?void 0:B.span,E))!==null&&I!==void 0?I:ye);D!==0&&d.push({child:T,rawChildSpan:D})});let C=0;const m=(t=d[d.length-1])===null||t===void 0?void 0:t.child;if(m!=null&&m.props){const c=(n=m.props)===null||n===void 0?void 0:n.suffix;c!==void 0&&c!==!1&&(C=Number((i=M((o=m.props)===null||o===void 0?void 0:o.span,E))!==null&&i!==void 0?i:ye),m.props.privateSpan=C,m.props.privateColStart=y+1-C,m.props.privateShow=(r=m.props.privateShow)!==null&&r!==void 0?r:!0)}let S=0,p=!1;for(const{child:c,rawChildSpan:z}of d){if(p&&(this.overflow=!0),!p){const x=Number((l=M((a=c.props)===null||a===void 0?void 0:a.offset,E))!==null&&l!==void 0?l:0),g=Math.min(z+x,y);if(c.props?(c.props.privateSpan=g,c.props.privateOffset=x):c.props={privateSpan:g,privateOffset:x},R){const B=S%y;g+B>y&&(S+=y-B),g+S+C>_*y?p=!0:S+=g}}p&&(c.props?c.props.privateShow!==!0&&(c.props.privateShow=!1):c.props={privateShow:!1})}return H("div",ae({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[te]:this.isSsr||void 0},this.$attrs),d.map(({child:c})=>c))};return this.isResponsive&&this.responsive==="self"?H(wt,{onResize:this.handleResize},{default:e}):e()}}),Ct="/cvgvsm/pic.jpeg",Bt={class:"container mb5"},Ot=s("div",{class:"flex justify-end"},[s("img",{class:"pic",src:Ct})],-1),Tt=s("div",null,[s("strong",null,"Guillermo Valentín Sánchez")],-1),Dt=s("p",{class:"mt0 mb0"},"Desarrollador front end senior.",-1),At=s("p",{class:"mt0 mb0"},"Diseñador gráfico.",-1),Gt=s("p",{class:"mt0"},"nacimiento: 1973",-1),Nt=s("p",{class:"text mt3"},[J("Hola!, soy una persona con "),s("a",{target:"_blank",href:"https://es.wikipedia.org/wiki/Sensibilidad_de_procesamiento_sensorial"},"SPS"),J(", utilizo el proceso intensivo, capacidad de análisis, cuidado de los detalles... para prácticamente todo, por lo que quizás posea "),s("a",{target:"_blank",href:"https://mariagomezpsicologia.com/altas-capacidades/que-relacion-hay-entre-alta-sensibilidad-y-altas-capacidades-lo-que-dicen-las-investigaciones/"},"altas capacidades"),J(", ya que puedo aprender y abordar temáticas complejas en todos los ámbitos en muy poco tiempo.")],-1),Mt=s("p",{class:"text"},"Desde el año 1992 he trabajado en entornos de edición y publicidad. Entusiasta de las tecnologías y desarrollo de software, autodidacta, codificando profesionalmente desde 2012. Transicioné el paso de jQuery para todo a javascript moderno en entornos profesionales.",-1),kt=s("p",{class:"text"},"Desarrollo de grandes proyectos, apps nocode, podría decir que soy experto en Vue 3, Typescript y Nuxt 3 al realizar una gran cantidad de proyectos profesionales únicamente en este ecosistema (también en las versiones 2). Podría crear y adaptarme con cierta facilidad proyectos de ",-1),Pt=s("p",{class:"text"},"Reutilización de componentes, estudio de la arquitectura, buenas prácticas, código legible y mantenible, pruebas unitarias y end to end.",-1),It=s("p",{class:"text"},"Configuración y manejo de Git, GitHub, Docker, IA para programar.",-1),$t=s("p",{class:"text"},"Usabilidad, interfaces gráficas, WYSIWYG, accesibilidad, multiidioma.",-1),Lt=s("p",{class:"text"},"Desarrollo de aplicaciones completas, backend GO - Gin o en PHP - Laravel o Typescript - Adonis JS.",-1),Vt=s("p",{class:"text"},"Comercio elecrónico, backoffices personalizados, aplicaciones de móviles y de escritorio. Interesado en el la publicación de IA para usuario final, WASM y GO.",-1),Ht=s("h3",{class:"mb0"},[s("strong",null,"Formación")],-1),Ft=s("p",{class:"mb0"},[s("b",null,"Centro de estudios de informática superior Alicante.")],-1),qt=s("p",{class:"mt0"},"Programador de gestión - Analista programador 1990 – 1992. ",-1),jt=s("p",{class:"mb0"},[s("b",null,"Cursando ChatGPT Prompt Engineering for Developers")],-1),Wt=s("p",{class:"mt0"},"Actualidad ",-1),Xt=s("h3",{class:"mb2"},[s("strong",null,"Autodidacta")],-1),Ut=s("p",{class:"mt0"},"Mi formación se basa en el seguimiento, testeo y aprendizage mediante artículos, cursos, libros, etc... de todas las tecnologías susceptibles de mejorar la eficiencia en el desarrollo de software. ",-1),Jt=s("h3",{class:"mb0"},[s("strong",null,"Inglés")],-1),Qt=s("p",{class:"mb0"},"Leo y es escribo pero no hablo ni entiendo con facilidad.",-1),Yt=s("h3",{class:"mt3 mb0"},[s("strong",null,"Experiencia")],-1),Zt=s("p",{class:"mb0"},[s("b",null,"Bmotion")],-1),Kt=s("p",{class:"mt0 mb0"},"Desarrollo aplicaciones nocode",-1),es=s("p",{class:"mt0"},"may.2022 • Actualidad • Madrid (remoto)",-1),ts=s("p",{class:"mb0"},[s("b",null,"Indexeo Marketing")],-1),ss=s("p",{class:"mt0 mb0"},"Desarrollo web, mantenimiento",-1),ns=s("p",{class:"mt0"},"ene.2021 • mayo 2022 • Ibi (remoto)",-1),os=s("p",{class:"mb0"},[s("b",null,"Por cuenta propia")],-1),is=s("p",{class:"mt0 mb0"},"Desarrollo web, diseño gráfico/web",-1),rs=s("p",{class:"mt0"},"ene.2020 • ene.2021 • Santa Pola",-1),as=s("p",{class:"mb0"},[s("b",null,"NovoSpain")],-1),ls=s("p",{class:"mt0 mb0"},"Desarrollo web, diseño gráfico",-1),cs=s("p",{class:"mt0 mb1"},"nov.2016 • ene.2020 • Elche",-1),ds=s("p",{class:"mb0 mt1"},[s("b",null,"3dids.com")],-1),us=s("p",{class:"mt0 mb0"},"Desarrollo front-end",-1),ps=s("p",{class:"mt0"},"mar.2016 • nov.2016 • Alicante",-1),fs=s("p",{class:"mb0"},[s("b",null,"Fractal Internet Consultancy")],-1),vs=s("p",{class:"mt0 mb0"},"Desarrollo web y diseño gráfico/web",-1),hs=s("p",{class:"mt0"},"jun.2012 • oct.2015 • Madrid (remoto)",-1),ms=s("p",{class:"mb0"},[s("b",null,"Baluarte Comunicación, S.L.")],-1),bs=s("p",{class:"mt0 mb0"},"Desarrollo web y diseño gráfico",-1),_s=s("p",{class:"mt0"},"may.2009 • nov.2012 • Santa Pola",-1),gs=s("p",{class:"mb0"},[s("b",null,"MASA International")],-1),ys=s("p",{class:"mt0 mb0"},"Diseñador Gráfico (encargado dept.)",-1),Ss=s("p",{class:"mt0 mb1"},"jun.2005 • sept.2008 • Torrevieja",-1),xs=s("p",{class:"mb0 mt1"},[s("b",null,"Imprenta Hnos. Rastoll")],-1),ws=s("p",{class:"mt0 mb0"},"Diseñador Gráfico, artefinalista",-1),Rs=s("p",{class:"mt0"},"dic.2003 • oct.2005 • Santa Pola",-1),zs=s("p",{class:"mb0"},[s("b",null,"Cartel Rotulación, S.L.")],-1),Es=s("p",{class:"mt0 mb0"},"Diseño para exteriores, rotulación e impresión",-1),Cs=s("p",{class:"mt0"},"feb.2000 • abr.2003 • Alicante",-1),Bs=s("p",{class:"mb0"},[s("b",null,"Rusan Copy, S.L (CopyFlash)")],-1),Os=s("p",{class:"mt0 mb0"},"Diseño para exteriores, rotulación e impresión",-1),Ts=s("p",{class:"mt0"},"ene.1993 • ene.2000 • Alicante",-1),Ds=s("h3",{class:"mt3 mb0"},[s("strong",null,"Habilidades")],-1),As=s("h3",{class:"mb0"},[s("strong",null,"Frontend")],-1),Gs=s("p",{class:"mb2 mt2"},"Código mantenible y legible, convenciones de código.",-1),Ns=s("p",{class:"mb2 mt2"},"Gestión de conexión, repositorios API, fetch, ofetch, axios..",-1),Ms=s("p",{class:"mb2 mt2"},"Internacionalización.",-1),ks=s("p",{class:"mb2 mt2"},"Persistencia de datos. IndexDB, LocalStorage, Node fs ...",-1),Ps=s("p",{class:"mb2 mt2"},"Autenticación.",-1),Is=s("p",{class:"mb2 mt2"},"Manejo y conversión de fechas.",-1),$s=s("p",{class:"mb2 mt2"},"Creación programática y previsualización de PDF.",-1),Ls=s("p",{class:"mb2 mt2"},"Carruseles, galerías, modal y sliders responsive, tooltips, notificaciones, arrastrar y soltar, calendario interactivo.",-1),Vs=s("p",{class:"mb1 mt2"},"Validación front-end y back-end en vivo.",-1),Hs=s("p",{class:"mb2 mt1"},"Marcado semántico.",-1),Fs=s("p",{class:"mb1 mt2"},"Web components, modularización, reutilización.",-1),qs=s("p",{class:"mb2 mt2"},"Web App.",-1),js=s("p",{class:"mb2 mt2"},"Cookies.",-1),Ws=s("p",{class:"mb2 mt2"},"Canvas.",-1),Xs=s("p",{class:"mb2 mt2"},"Audio y video en la web.",-1),Us=s("p",{class:"mb2 mt2"},"Pre-procesadores CSS.",-1),Js=s("p",{class:"mb2 mt2"},"Desarrollo responsive, mobile first.",-1),Qs=s("p",{class:"mb2 mt2"},"Frameworks: Bulma, Naive-ui, Bootstrap, Fundation, Pure, UI-Kit, Skeleton...",-1),Ys=s("p",{class:"mb2 mt2"},"Tipografía web.",-1),Zs=s("p",{class:"mb2 mt2"},"Gráficos vectoriales (svg).",-1),Ks=s("p",{class:"mb1 mt2"},"Animaciones CSS.",-1),en=s("p",{class:"mb2 mt1"},"Javascript orientado a objetos.",-1),tn=s("p",{class:"mb2 mt2"},"Javascript asíncrono.",-1),sn=s("p",{class:"mb2 mt2"},"Estructuras de datos Json.",-1),nn=s("p",{class:"mb2 mt2"},"TypeScript.",-1),on=s("p",{class:"mb1 mt2"},"Arquitectura hexagonal.",-1),rn=s("p",{class:"mb2 mt2"},"Motores de plantillas (pug, blade, liquid...).",-1),an=s("p",{class:"mb2 mt2"},"Gestión de estado, Pinia.. ",-1),ln=s("p",{class:"mb2 mt2"},"Prototipado UI-UX.",-1),cn=s("p",{class:"mb1 mt2"},"Flutter, Tauri, Electron, App híbrida, Cordova, Ionic. App nativo.",-1),dn=s("h3",{class:"mb0"},[s("strong",null,"Backend")],-1),un=s("p",{class:"mb2 mt1"},"Creación de backend API Rest o con plantillas con GO/Gin, TypeScript/Adonis, PHP/Laravel",-1),pn=s("p",{class:"mb2 mt1"},"Creación, diseño y optimización de bases de datos relacionales MySql, MariaDB, Postgress...",-1),fn=s("p",{class:"mb2 mt2"},"Migraciones y generación de datos de prueba.",-1),vn=s("p",{class:"mb2 mt2"},"Login y registro seguro, encriptación.",-1),hn=s("p",{class:"mb1 mt2"},"Gestión y proceso de ficheros desde el servidor, imagen, vectorial, excel, pdf ...",-1),mn=s("p",{class:"mb1 mt1"},"Paginación.",-1),bn=s("p",{class:"mb2 mt2"},"Envío de correos automatizados.",-1),_n=s("p",{class:"mb2 mt2"},"Creación de tareas periódicas.",-1),gn=s("p",{class:"mb2 mt2"},"Caché en disco o memoria.",-1),yn=s("p",{class:"mb1 mt2"},"Manejo de eventos y colas de eventos.",-1),Sn=s("p",{class:"mb2 mt1"},"Uso de Linux.",-1),xn=s("p",{class:"mb2 mt2"},"Gestión de dependencias.",-1),wn=s("p",{class:"mb2 mt2"},"Test unitarios.",-1),Rn=s("p",{class:"mb2 mt2"},"ORM Gorm, Eloquent y Lucid.",-1),zn=je('<div class="mb5"> </div><div class="mb5"> </div><div class="mb5"> </div><div class="mb5"> </div><div class="mb5"> </div><div class="mb5"> </div><div class="mb5"> </div><div class="mb5"> </div><div class="mb5"> </div><div class="mb5"> </div>',10),Cn=Z({__name:"Cv",setup(e){return ne(()=>{document.title="CV. Guillermo Valentín Sánchez"}),(t,n)=>(We(),Fe(qe,null,[s("div",Bt,[f(h(L),{class:"mt3",cols:"1 s:1 m:2 ","x-gap":"10",responsive:"screen"},{default:v(()=>[f(h(b),null,{default:v(()=>[Ot]),_:1}),f(h(b),{class:"letter"},{default:v(()=>[Tt,Dt,At,Gt,Nt,Mt,kt,J(" React y Angular. "),Pt,It,$t,Lt,Vt]),_:1})]),_:1}),f(h(L),{class:"mt0",cols:"1 s:1 m:2 ","x-gap":"10",responsive:"screen"},{default:v(()=>[f(h(b),null,{default:v(()=>[Ht,Ft,qt,jt,Wt]),_:1}),f(h(b),null,{default:v(()=>[Xt,Ut,Jt,Qt]),_:1})]),_:1}),Yt,f(h(L),{class:"mt0",cols:"1 s:1 m:3 ","x-gap":"10",responsive:"screen"},{default:v(()=>[f(h(b),null,{default:v(()=>[Zt,Kt,es,ts,ss,ns,os,is,rs,as,ls,cs]),_:1}),f(h(b),null,{default:v(()=>[ds,us,ps,fs,vs,hs,ms,bs,_s,gs,ys,Ss]),_:1}),f(h(b),null,{default:v(()=>[xs,ws,Rs,zs,Es,Cs,Bs,Os,Ts]),_:1})]),_:1}),Ds,As,f(h(L),{class:"mt0",cols:"1 s:1 m:3 ","x-gap":"10",responsive:"screen"},{default:v(()=>[f(h(b),null,{default:v(()=>[Gs,Ns,Ms,ks,Ps,Is,$s,Ls,Vs]),_:1}),f(h(b),null,{default:v(()=>[Hs,Fs,qs,js,Ws,Xs,Us,Js,Qs,Ys,Zs,Ks]),_:1}),f(h(b),null,{default:v(()=>[en,tn,sn,nn,on,rn,an,ln,cn]),_:1})]),_:1}),dn,f(h(L),{class:"mt0",cols:"1 s:1 m:3 ","x-gap":"10",responsive:"screen"},{default:v(()=>[f(h(b),null,{default:v(()=>[un,pn,fn,vn,hn]),_:1}),f(h(b),null,{default:v(()=>[mn,bn,_n,gn,yn]),_:1}),f(h(b),null,{default:v(()=>[Sn,xn,wn,Rn]),_:1})]),_:1})]),zn],64))}});export{Cn as default};