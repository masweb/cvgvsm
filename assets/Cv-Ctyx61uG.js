import{v as Se,c as N,r as V,o as xe,d as Y,g as we,a as oe,b as ke,e as Ge,i as Ie,p as G,h as F,u as Pe,f as j,j as $e,t as re,k as Le,m as ae,l as Ve,n as Fe,q as le,s as He,w as s,x as f,y as v,z as h,F as qe,A as je,B as We,C as Z}from"./index-BisXKIUj.js";let Q=[];const Re=new WeakMap;function Xe(){Q.forEach(e=>e(...Re.get(e))),Q=[]}function Ue(e,...t){Re.set(e,t),!Q.includes(e)&&Q.push(e)===1&&requestAnimationFrame(Xe)}function Je(e){if(typeof e=="number")return{"":e.toString()};const t={};return e.split(/ +/).forEach(o=>{if(o==="")return;const[n,i]=o.split(":");i===void 0?t[""]=n:t[n]=i}),t}function k(e,t){var o;if(e==null)return;const n=Je(e);if(t===void 0)return n[""];if(typeof t=="string")return(o=n[t])!==null&&o!==void 0?o:n[""];if(Array.isArray(t)){for(let i=t.length-1;i>=0;--i){const r=t[i];if(r in n)return n[r]}return n[""]}else{let i,r=-1;return Object.keys(n).forEach(a=>{const l=Number(a);!Number.isNaN(l)&&t>=l&&l>=r&&(r=l,i=n[a])}),i}}function Qe(e){var t;const o=(t=e.dirs)===null||t===void 0?void 0:t.find(({dir:n})=>n===Se);return!!(o&&o.value===!1)}const Ye=typeof window<"u",Ze={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function Ke(e){return`(min-width: ${e}px)`}const $={};function et(e=Ze){if(!Ye)return N(()=>[]);if(typeof window.matchMedia!="function")return N(()=>[]);const t=V({}),o=Object.keys(e),n=(i,r)=>{i.matches?t.value[r]=!0:t.value[r]=!1};return o.forEach(i=>{const r=e[i];let a,l;$[r]===void 0?(a=window.matchMedia(Ke(r)),a.addEventListener?a.addEventListener("change",u=>{l.forEach(d=>{d(u,i)})}):a.addListener&&a.addListener(u=>{l.forEach(d=>{d(u,i)})}),l=new Set,$[r]={mql:a,cbs:l}):(a=$[r].mql,l=$[r].cbs),l.add(n),a.matches&&l.forEach(u=>{u(a,i)})}),xe(()=>{o.forEach(i=>{const{cbs:r}=$[e[i]];r.has(n)&&r.delete(n)})}),N(()=>{const{value:i}=t;return o.filter(r=>i[r])})}function ce(e,t){console.error(`[vueuc/${e}]: ${t}`)}var A=[],tt=function(){return A.some(function(e){return e.activeTargets.length>0})},st=function(){return A.some(function(e){return e.skippedTargets.length>0})},de="ResizeObserver loop completed with undelivered notifications.",ot=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:de}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=de),window.dispatchEvent(e)},q;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(q||(q={}));var M=function(e){return Object.freeze(e)},nt=function(){function e(t,o){this.inlineSize=t,this.blockSize=o,M(this)}return e}(),ze=function(){function e(t,o,n,i){return this.x=t,this.y=o,this.width=n,this.height=i,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,M(this)}return e.prototype.toJSON=function(){var t=this,o=t.x,n=t.y,i=t.top,r=t.right,a=t.bottom,l=t.left,u=t.width,d=t.height;return{x:o,y:n,top:i,right:r,bottom:a,left:l,width:u,height:d}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),ne=function(e){return e instanceof SVGElement&&"getBBox"in e},Ee=function(e){if(ne(e)){var t=e.getBBox(),o=t.width,n=t.height;return!o&&!n}var i=e,r=i.offsetWidth,a=i.offsetHeight;return!(r||a||e.getClientRects().length)},ue=function(e){var t;if(e instanceof Element)return!0;var o=(t=e==null?void 0:e.ownerDocument)===null||t===void 0?void 0:t.defaultView;return!!(o&&e instanceof o.Element)},it=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},H=typeof window<"u"?window:{},W=new WeakMap,pe=/auto|scroll/,rt=/^tb|vertical/,at=/msie|trident/i.test(H.navigator&&H.navigator.userAgent),w=function(e){return parseFloat(e||"0")},I=function(e,t,o){return e===void 0&&(e=0),t===void 0&&(t=0),o===void 0&&(o=!1),new nt((o?t:e)||0,(o?e:t)||0)},fe=M({devicePixelContentBoxSize:I(),borderBoxSize:I(),contentBoxSize:I(),contentRect:new ze(0,0,0,0)}),Ce=function(e,t){if(t===void 0&&(t=!1),W.has(e)&&!t)return W.get(e);if(Ee(e))return W.set(e,fe),fe;var o=getComputedStyle(e),n=ne(e)&&e.ownerSVGElement&&e.getBBox(),i=!at&&o.boxSizing==="border-box",r=rt.test(o.writingMode||""),a=!n&&pe.test(o.overflowY||""),l=!n&&pe.test(o.overflowX||""),u=n?0:w(o.paddingTop),d=n?0:w(o.paddingRight),R=n?0:w(o.paddingBottom),_=n?0:w(o.paddingLeft),y=n?0:w(o.borderTopWidth),E=n?0:w(o.borderRightWidth),C=n?0:w(o.borderBottomWidth),m=n?0:w(o.borderLeftWidth),S=_+d,p=u+R,c=m+E,z=y+C,x=l?e.offsetHeight-z-e.clientHeight:0,g=a?e.offsetWidth-c-e.clientWidth:0,B=i?S+c:0,P=i?p+z:0,O=n?n.width:w(o.width)-B-g,D=n?n.height:w(o.height)-P-x,T=O+S+g+c,Me=D+p+x+z,ie=M({devicePixelContentBoxSize:I(Math.round(O*devicePixelRatio),Math.round(D*devicePixelRatio),r),borderBoxSize:I(T,Me,r),contentBoxSize:I(O,D,r),contentRect:new ze(_,u,O,D)});return W.set(e,ie),ie},Be=function(e,t,o){var n=Ce(e,o),i=n.borderBoxSize,r=n.contentBoxSize,a=n.devicePixelContentBoxSize;switch(t){case q.DEVICE_PIXEL_CONTENT_BOX:return a;case q.BORDER_BOX:return i;default:return r}},lt=function(){function e(t){var o=Ce(t);this.target=t,this.contentRect=o.contentRect,this.borderBoxSize=M([o.borderBoxSize]),this.contentBoxSize=M([o.contentBoxSize]),this.devicePixelContentBoxSize=M([o.devicePixelContentBoxSize])}return e}(),Te=function(e){if(Ee(e))return 1/0;for(var t=0,o=e.parentNode;o;)t+=1,o=o.parentNode;return t},ct=function(){var e=1/0,t=[];A.forEach(function(a){if(a.activeTargets.length!==0){var l=[];a.activeTargets.forEach(function(d){var R=new lt(d.target),_=Te(d.target);l.push(R),d.lastReportedSize=Be(d.target,d.observedBox),_<e&&(e=_)}),t.push(function(){a.callback.call(a.observer,l,a.observer)}),a.activeTargets.splice(0,a.activeTargets.length)}});for(var o=0,n=t;o<n.length;o++){var i=n[o];i()}return e},ve=function(e){A.forEach(function(o){o.activeTargets.splice(0,o.activeTargets.length),o.skippedTargets.splice(0,o.skippedTargets.length),o.observationTargets.forEach(function(i){i.isActive()&&(Te(i.target)>e?o.activeTargets.push(i):o.skippedTargets.push(i))})})},dt=function(){var e=0;for(ve(e);tt();)e=ct(),ve(e);return st()&&ot(),e>0},K,Oe=[],ut=function(){return Oe.splice(0).forEach(function(e){return e()})},pt=function(e){if(!K){var t=0,o=document.createTextNode(""),n={characterData:!0};new MutationObserver(function(){return ut()}).observe(o,n),K=function(){o.textContent="".concat(t?t--:t++)}}Oe.push(e),K()},ft=function(e){pt(function(){requestAnimationFrame(e)})},J=0,vt=function(){return!!J},ht=250,mt={attributes:!0,characterData:!0,childList:!0,subtree:!0},he=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],me=function(e){return e===void 0&&(e=0),Date.now()+e},ee=!1,bt=function(){function e(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return e.prototype.run=function(t){var o=this;if(t===void 0&&(t=ht),!ee){ee=!0;var n=me(t);ft(function(){var i=!1;try{i=dt()}finally{if(ee=!1,t=n-me(),!vt())return;i?o.run(1e3):t>0?o.run(t):o.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var t=this,o=function(){return t.observer&&t.observer.observe(document.body,mt)};document.body?o():H.addEventListener("DOMContentLoaded",o)},e.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),he.forEach(function(o){return H.addEventListener(o,t.listener,!0)}))},e.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),he.forEach(function(o){return H.removeEventListener(o,t.listener,!0)}),this.stopped=!0)},e}(),se=new bt,be=function(e){!J&&e>0&&se.start(),J+=e,!J&&se.stop()},_t=function(e){return!ne(e)&&!it(e)&&getComputedStyle(e).display==="inline"},gt=function(){function e(t,o){this.target=t,this.observedBox=o||q.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var t=Be(this.target,this.observedBox,!0);return _t(this.target)&&(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),yt=function(){function e(t,o){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=o}return e}(),X=new WeakMap,_e=function(e,t){for(var o=0;o<e.length;o+=1)if(e[o].target===t)return o;return-1},U=function(){function e(){}return e.connect=function(t,o){var n=new yt(t,o);X.set(t,n)},e.observe=function(t,o,n){var i=X.get(t),r=i.observationTargets.length===0;_e(i.observationTargets,o)<0&&(r&&A.push(i),i.observationTargets.push(new gt(o,n&&n.box)),be(1),se.schedule())},e.unobserve=function(t,o){var n=X.get(t),i=_e(n.observationTargets,o),r=n.observationTargets.length===1;i>=0&&(r&&A.splice(A.indexOf(n),1),n.observationTargets.splice(i,1),be(-1))},e.disconnect=function(t){var o=this,n=X.get(t);n.observationTargets.slice().forEach(function(i){return o.unobserve(t,i.target)}),n.activeTargets.splice(0,n.activeTargets.length)},e}(),St=function(){function e(t){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof t!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");U.connect(this,t)}return e.prototype.observe=function(t,o){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!ue(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");U.observe(this,t,o)},e.prototype.unobserve=function(t){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!ue(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");U.unobserve(this,t)},e.prototype.disconnect=function(){U.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();class xt{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new(typeof window<"u"&&window.ResizeObserver||St)(this.handleResize),this.elHandlersMap=new Map}handleResize(t){for(const o of t){const n=this.elHandlersMap.get(o.target);n!==void 0&&n(o)}}registerHandler(t,o){this.elHandlersMap.set(t,o),this.observer.observe(t)}unregisterHandler(t){this.elHandlersMap.has(t)&&(this.elHandlersMap.delete(t),this.observer.unobserve(t))}}const ge=new xt,wt=Y({name:"ResizeObserver",props:{onResize:Function},setup(e){let t=!1;const o=we().proxy;function n(i){const{onResize:r}=e;r!==void 0&&r(i)}oe(()=>{const i=o.$el;if(i===void 0){ce("resize-observer","$el does not exist.");return}if(i.nextElementSibling!==i.nextSibling&&i.nodeType===3&&i.nodeValue!==""){ce("resize-observer","$el can not be observed (it may be a text node).");return}i.nextElementSibling!==null&&(ge.registerHandler(i.nextElementSibling,n),t=!0)}),xe(()=>{t&&ge.unregisterHandler(o.$el.nextElementSibling)})},render(){return ke(this.$slots,"default")}}),ye=1,De=Ge("n-grid"),Ne=1,Rt={span:{type:[Number,String],default:Ne},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},b=Y({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:Rt,setup(){const{isSsrRef:e,xGapRef:t,itemStyleRef:o,overflowRef:n,layoutShiftDisabledRef:i}=Ie(De),r=we();return{overflow:n,itemStyle:o,layoutShiftDisabled:i,mergedXGap:N(()=>G(t.value||0)),deriveStyle:()=>{e.value;const{privateSpan:a=Ne,privateShow:l=!0,privateColStart:u=void 0,privateOffset:d=0}=r.vnode.props,{value:R}=t,_=G(R||0);return{display:l?"":"none",gridColumn:`${u??`span ${a}`} / span ${a}`,marginLeft:d?`calc((100% - (${a} - 1) * ${_}) / ${a} * ${d} + ${_} * ${d})`:""}}}},render(){var e,t;if(this.layoutShiftDisabled){const{span:o,offset:n,mergedXGap:i}=this;return F("div",{style:{gridColumn:`span ${o} / span ${o}`,marginLeft:n?`calc((100% - (${o} - 1) * ${i}) / ${o} * ${n} + ${i} * ${n})`:""}},this.$slots)}return F("div",{style:[this.itemStyle,this.deriveStyle()]},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e,{overflow:this.overflow}))}}),zt={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},Ae=24,te="__ssr__",Et={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:Ae},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},L=Y({name:"Grid",inheritAttrs:!1,props:Et,setup(e){const{mergedClsPrefixRef:t,mergedBreakpointsRef:o}=Pe(e),n=/^\d+$/,i=V(void 0),r=et((o==null?void 0:o.value)||zt),a=j(()=>!!(e.itemResponsive||!n.test(e.cols.toString())||!n.test(e.xGap.toString())||!n.test(e.yGap.toString()))),l=N(()=>{if(a.value)return e.responsive==="self"?i.value:r.value}),u=j(()=>{var p;return(p=Number(k(e.cols.toString(),l.value)))!==null&&p!==void 0?p:Ae}),d=j(()=>k(e.xGap.toString(),l.value)),R=j(()=>k(e.yGap.toString(),l.value)),_=p=>{i.value=p.contentRect.width},y=p=>{Ue(_,p)},E=V(!1),C=N(()=>{if(e.responsive==="self")return y}),m=V(!1),S=V();return oe(()=>{const{value:p}=S;p&&p.hasAttribute(te)&&(p.removeAttribute(te),m.value=!0)}),$e(De,{layoutShiftDisabledRef:re(e,"layoutShiftDisabled"),isSsrRef:m,itemStyleRef:re(e,"itemStyle"),xGapRef:d,overflowRef:E}),{isSsr:!Le,contentEl:S,mergedClsPrefix:t,style:N(()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:G(e.xGap),rowGap:G(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${u.value}, minmax(0, 1fr))`,columnGap:G(d.value),rowGap:G(R.value)}),isResponsive:a,responsiveQuery:l,responsiveCols:u,handleResize:C,overflow:E}},render(){if(this.layoutShiftDisabled)return F("div",ae({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var t,o,n,i,r,a,l;this.overflow=!1;const u=Ve(Fe(this)),d=[],{collapsed:R,collapsedRows:_,responsiveCols:y,responsiveQuery:E}=this;u.forEach(c=>{var z,x,g,B,P;if(((z=c==null?void 0:c.type)===null||z===void 0?void 0:z.__GRID_ITEM__)!==!0)return;if(Qe(c)){const T=le(c);T.props?T.props.privateShow=!1:T.props={privateShow:!1},d.push({child:T,rawChildSpan:0});return}c.dirs=((x=c.dirs)===null||x===void 0?void 0:x.filter(({dir:T})=>T!==Se))||null,((g=c.dirs)===null||g===void 0?void 0:g.length)===0&&(c.dirs=null);const O=le(c),D=Number((P=k((B=O.props)===null||B===void 0?void 0:B.span,E))!==null&&P!==void 0?P:ye);D!==0&&d.push({child:O,rawChildSpan:D})});let C=0;const m=(t=d[d.length-1])===null||t===void 0?void 0:t.child;if(m!=null&&m.props){const c=(o=m.props)===null||o===void 0?void 0:o.suffix;c!==void 0&&c!==!1&&(C=Number((i=k((n=m.props)===null||n===void 0?void 0:n.span,E))!==null&&i!==void 0?i:ye),m.props.privateSpan=C,m.props.privateColStart=y+1-C,m.props.privateShow=(r=m.props.privateShow)!==null&&r!==void 0?r:!0)}let S=0,p=!1;for(const{child:c,rawChildSpan:z}of d){if(p&&(this.overflow=!0),!p){const x=Number((l=k((a=c.props)===null||a===void 0?void 0:a.offset,E))!==null&&l!==void 0?l:0),g=Math.min(z+x,y);if(c.props?(c.props.privateSpan=g,c.props.privateOffset=x):c.props={privateSpan:g,privateOffset:x},R){const B=S%y;g+B>y&&(S+=y-B),g+S+C>_*y?p=!0:S+=g}}p&&(c.props?c.props.privateShow!==!0&&(c.props.privateShow=!1):c.props={privateShow:!1})}return F("div",ae({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[te]:this.isSsr||void 0},this.$attrs),d.map(({child:c})=>c))};return this.isResponsive&&this.responsive==="self"?F(wt,{onResize:this.handleResize},{default:e}):e()}}),Ct="/cvguille/pic.jpeg",Bt={class:"container mb5"},Tt=s("div",{class:"flex justify-end"},[s("img",{class:"pic",src:Ct})],-1),Ot=s("div",null,[s("strong",null,"Guillermo Valentín Sánchez")],-1),Dt=s("p",{class:"mt0 mb0"},"Desarrollador front end. Diseñador gráfico.",-1),Nt=s("p",{class:"mt0"},"nacimiento: 1973",-1),At=s("p",{class:"text mt3"},[Z("Hola!, soy una persona con "),s("a",{target:"_blank",href:"https://es.wikipedia.org/wiki/Sensibilidad_de_procesamiento_sensorial"},"SPS"),Z(", utilizo el proceso intensivo para prácticamente todo, por lo que quizás posea "),s("a",{target:"_blank",href:"https://mariagomezpsicologia.com/altas-capacidades/que-relacion-hay-entre-alta-sensibilidad-y-altas-capacidades-lo-que-dicen-las-investigaciones/"},"altas capacidades"),Z(", ya que puedo aprender y abordar temáticas complejas en todos los ámbitos en muy poco tiempo.")],-1),Mt=s("p",{class:"text"},"Desde el año 1992 he trabajado en entornos de edición y publicidad. Entusiasta de las tecnologías y desarrollo de software, autodidacta, codificando profesionalmente desde 2012. Transicioné el paso de jQuery para todo a javascript moderno en entornos profesionales.",-1),kt=s("p",{class:"text"},"Desarrollo de grandes proyectos, apps nocode, podría decir que soy experto en Vue 3, Typescript y Nuxt 3 al realizar una gran cantidad de proyectos profesionales únicamente en este ecosistema (también en las versiones 2). ",-1),Gt=s("p",{class:"text"},"Reutilización de componentes, estudio de la arquitectura, buenas prácticas, código legible y mantenible, pruebas unitarias y end to end.",-1),It=s("p",{class:"text"},"Configuración y manejo de Git, GitHub, Docker, IA para programar.",-1),Pt=s("p",{class:"text"},"Usabilidad, interfaces gráficas, WYSIWYG, accesibilidad, multiidioma.",-1),$t=s("p",{class:"text"},"Desarrollo de aplicaciones completas, backend en PHP - Laravel o Typescript - Adonis JS.",-1),Lt=s("p",{class:"text"},"Comercio elecrónico, backoffices personalizados, aplicaciones de móviles y de escritorio. Interesado en el la publicación de IA para usuario final, WASM y Rust.",-1),Vt=s("h3",{class:"mb0"},[s("strong",null,"Formación")],-1),Ft=s("p",{class:"mb0"},[s("b",null,"Centro de estudios de informática superior Alicante.")],-1),Ht=s("p",{class:"mt0"},"Programador de gestión - Analista programador 1990 – 1992. ",-1),qt=s("p",{class:"mb0"},[s("b",null,"Cursando ChatGPT Prompt Engineering for Developers")],-1),jt=s("p",{class:"mt0"},"Actualidad ",-1),Wt=s("h3",{class:"mb2"},[s("strong",null,"Autodidacta")],-1),Xt=s("p",{class:"mt0"},"Mi formación se basa en el seguimiento, testeo y aprendizage mediante artículos, cursos, libros, etc... de todas las tecnologías susceptibles de mejorar la eficiencia en el desarrollo de software. ",-1),Ut=s("h3",{class:"mb0"},[s("strong",null,"Inglés")],-1),Jt=s("p",{class:"mb0"},"Leo y es escribo pero no hablo ni entiendo con facilidad.",-1),Qt=s("h3",{class:"mt3 mb0"},[s("strong",null,"Experiencia")],-1),Yt=s("p",{class:"mb0"},[s("b",null,"Bmotion")],-1),Zt=s("p",{class:"mt0 mb0"},"Desarrollo aplicaciones nocode",-1),Kt=s("p",{class:"mt0"},"may.2022 • Actualidad • Madrid (remoto)",-1),es=s("p",{class:"mb0"},[s("b",null,"Indexeo Marketing")],-1),ts=s("p",{class:"mt0 mb0"},"Desarrollo web, mantenimiento",-1),ss=s("p",{class:"mt0"},"ene.2021 • mayo 2022 • Ibi (remoto)",-1),os=s("p",{class:"mb0"},[s("b",null,"Por cuenta propia")],-1),ns=s("p",{class:"mt0 mb0"},"Desarrollo web, diseño gráfico/web",-1),is=s("p",{class:"mt0"},"ene.2020 • ene.2021 • Santa Pola",-1),rs=s("p",{class:"mb0"},[s("b",null,"NovoSpain")],-1),as=s("p",{class:"mt0 mb0"},"Desarrollo web, diseño gráfico",-1),ls=s("p",{class:"mt0 mb1"},"nov.2016 • ene.2020 • Elche",-1),cs=s("p",{class:"mb0 mt1"},[s("b",null,"3dids.com")],-1),ds=s("p",{class:"mt0 mb0"},"Desarrollo front-end",-1),us=s("p",{class:"mt0"},"mar.2016 • nov.2016 • Alicante",-1),ps=s("p",{class:"mb0"},[s("b",null,"Fractal Internet Consultancy")],-1),fs=s("p",{class:"mt0 mb0"},"Desarrollo web y diseño gráfico/web",-1),vs=s("p",{class:"mt0"},"jun.2012 • oct.2015 • Madrid (remoto)",-1),hs=s("p",{class:"mb0"},[s("b",null,"Baluarte Comunicación, S.L.")],-1),ms=s("p",{class:"mt0 mb0"},"Desarrollo web y diseño gráfico",-1),bs=s("p",{class:"mt0"},"may.2009 • nov.2012 • Santa Pola",-1),_s=s("p",{class:"mb0"},[s("b",null,"MASA International")],-1),gs=s("p",{class:"mt0 mb0"},"Diseñador Gráfico (encargado dept.)",-1),ys=s("p",{class:"mt0 mb1"},"jun.2005 • sept.2008 • Torrevieja",-1),Ss=s("p",{class:"mb0 mt1"},[s("b",null,"Imprenta Hnos. Rastoll")],-1),xs=s("p",{class:"mt0 mb0"},"Diseñador Gráfico, artefinalista",-1),ws=s("p",{class:"mt0"},"dic.2003 • oct.2005 • Santa Pola",-1),Rs=s("p",{class:"mb0"},[s("b",null,"Cartel Rotulación, S.L.")],-1),zs=s("p",{class:"mt0 mb0"},"Diseño para exteriores, rotulación e impresión",-1),Es=s("p",{class:"mt0"},"feb.2000 • abr.2003 • Alicante",-1),Cs=s("p",{class:"mb0"},[s("b",null,"Rusan Copy, S.L (CopyFlash)")],-1),Bs=s("p",{class:"mt0 mb0"},"Diseño para exteriores, rotulación e impresión",-1),Ts=s("p",{class:"mt0"},"ene.1993 • ene.2000 • Alicante",-1),Os=s("h3",{class:"mt3 mb0"},[s("strong",null,"Habilidades")],-1),Ds=s("h3",{class:"mb0"},[s("strong",null,"Frontend")],-1),Ns=s("p",{class:"mb2 mt2"},"Código mantenible y legible, convenciones de código.",-1),As=s("p",{class:"mb2 mt2"},"Gestión de conexión, repositorios API, fetch, ofetch, axios..",-1),Ms=s("p",{class:"mb2 mt2"},"Internacionalización.",-1),ks=s("p",{class:"mb2 mt2"},"Persistencia de datos. IndexDB, LocalStorage, Node fs ...",-1),Gs=s("p",{class:"mb2 mt2"},"Autenticación.",-1),Is=s("p",{class:"mb2 mt2"},"Manejo y conversión de fechas.",-1),Ps=s("p",{class:"mb2 mt2"},"Creación programática y previsualización de PDF.",-1),$s=s("p",{class:"mb2 mt2"},"Carruseles, galerías, modal y sliders responsive, tooltips, notificaciones, arrastrar y soltar, calendario interactivo.",-1),Ls=s("p",{class:"mb1 mt2"},"Validación front-end y back-end en vivo.",-1),Vs=s("p",{class:"mb2 mt1"},"Marcado semántico.",-1),Fs=s("p",{class:"mb1 mt2"},"Web components, modularización, reutilización.",-1),Hs=s("p",{class:"mb2 mt2"},"Web App.",-1),qs=s("p",{class:"mb2 mt2"},"Cookies.",-1),js=s("p",{class:"mb2 mt2"},"Canvas.",-1),Ws=s("p",{class:"mb2 mt2"},"Audio y video en la web.",-1),Xs=s("p",{class:"mb2 mt2"},"Pre-procesadores CSS.",-1),Us=s("p",{class:"mb2 mt2"},"Desarrollo responsive, mobile first.",-1),Js=s("p",{class:"mb2 mt2"},"Frameworks: Bulma, Naive-ui, Bootstrap, Fundation, Pure, UI-Kit, Skeleton...",-1),Qs=s("p",{class:"mb2 mt2"},"Tipografía web.",-1),Ys=s("p",{class:"mb2 mt2"},"Gráficos vectoriales (svg).",-1),Zs=s("p",{class:"mb1 mt2"},"Animaciones CSS.",-1),Ks=s("p",{class:"mb2 mt1"},"Javascript orientado a objetos.",-1),eo=s("p",{class:"mb2 mt2"},"Javascript asíncrono.",-1),to=s("p",{class:"mb2 mt2"},"Estructuras de datos Json.",-1),so=s("p",{class:"mb2 mt2"},"TypeScript.",-1),oo=s("p",{class:"mb1 mt2"},"Arquitectura hexagonal.",-1),no=s("p",{class:"mb2 mt2"},"Motores de plantillas (pug, blade, liquid...).",-1),io=s("p",{class:"mb2 mt2"},"Gestión de estado, Pinia.. ",-1),ro=s("p",{class:"mb2 mt2"},"Prototipado UI-UX.",-1),ao=s("p",{class:"mb1 mt2"},"Flutter, Tauri, Electron, App híbrida, Cordova, Ionic. App nativo.",-1),lo=s("h3",{class:"mb0"},[s("strong",null,"Backend")],-1),co=s("p",{class:"mb2 mt1"},"Creación, diseño y optimización de bases de datos relacionales MySql, MariaDB, Postgress...",-1),uo=s("p",{class:"mb2 mt2"},"Migraciones y generación de datos de prueba.",-1),po=s("p",{class:"mb2 mt2"},"Login y registro seguro.",-1),fo=s("p",{class:"mb1 mt2"},"Gestión y proceso de ficheros desde el servidor.",-1),vo=s("p",{class:"mb1 mt1"},"Paginación y pre-proceso de información e imágenes.",-1),ho=s("p",{class:"mb2 mt2"},"Envío de correos automatizados.",-1),mo=s("p",{class:"mb2 mt2"},"Creación de tareas periódicas.",-1),bo=s("p",{class:"mb2 mt2"},"Caché en disco o memoria.",-1),_o=s("p",{class:"mb1 mt2"},"Manejo de eventos y colas.",-1),go=s("p",{class:"mb2 mt1"},"Uso de Linux.",-1),yo=s("p",{class:"mb2 mt2"},"Gestión de dependencias con Composer.",-1),So=s("p",{class:"mb2 mt2"},"Test unitarios",-1),xo=s("p",{class:"mb2 mt2"},"ORM Eloquent y Lucid.",-1),wo=je('<div class="mb5"> </div><div class="mb5"> </div><div class="mb5"> </div><div class="mb5"> </div><div class="mb5"> </div><div class="mb5"> </div><div class="mb5"> </div><div class="mb5"> </div><div class="mb5"> </div><div class="mb5"> </div>',10),zo=Y({__name:"Cv",setup(e){return oe(()=>{document.title="CV. Guillermo Valentín Sánchez"}),(t,o)=>(We(),He(qe,null,[s("div",Bt,[f(h(L),{class:"mt3",cols:"1 s:1 m:2 ","x-gap":"10",responsive:"screen"},{default:v(()=>[f(h(b),null,{default:v(()=>[Tt]),_:1}),f(h(b),{class:"letter"},{default:v(()=>[Ot,Dt,Nt,At,Mt,kt,Gt,It,Pt,$t,Lt]),_:1})]),_:1}),f(h(L),{class:"mt0",cols:"1 s:1 m:2 ","x-gap":"10",responsive:"screen"},{default:v(()=>[f(h(b),null,{default:v(()=>[Vt,Ft,Ht,qt,jt]),_:1}),f(h(b),null,{default:v(()=>[Wt,Xt,Ut,Jt]),_:1})]),_:1}),Qt,f(h(L),{class:"mt0",cols:"1 s:1 m:3 ","x-gap":"10",responsive:"screen"},{default:v(()=>[f(h(b),null,{default:v(()=>[Yt,Zt,Kt,es,ts,ss,os,ns,is,rs,as,ls]),_:1}),f(h(b),null,{default:v(()=>[cs,ds,us,ps,fs,vs,hs,ms,bs,_s,gs,ys]),_:1}),f(h(b),null,{default:v(()=>[Ss,xs,ws,Rs,zs,Es,Cs,Bs,Ts]),_:1})]),_:1}),Os,Ds,f(h(L),{class:"mt0",cols:"1 s:1 m:3 ","x-gap":"10",responsive:"screen"},{default:v(()=>[f(h(b),null,{default:v(()=>[Ns,As,Ms,ks,Gs,Is,Ps,$s,Ls]),_:1}),f(h(b),null,{default:v(()=>[Vs,Fs,Hs,qs,js,Ws,Xs,Us,Js,Qs,Ys,Zs]),_:1}),f(h(b),null,{default:v(()=>[Ks,eo,to,so,oo,no,io,ro,ao]),_:1})]),_:1}),lo,f(h(L),{class:"mt0",cols:"1 s:1 m:3 ","x-gap":"10",responsive:"screen"},{default:v(()=>[f(h(b),null,{default:v(()=>[co,uo,po,fo]),_:1}),f(h(b),null,{default:v(()=>[vo,ho,mo,bo,_o]),_:1}),f(h(b),null,{default:v(()=>[go,yo,So,xo]),_:1})]),_:1})]),wo],64))}});export{zo as default};