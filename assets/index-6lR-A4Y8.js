import{m as L,c as ge,n as R,e as me,j as E,V as F,r as he,s as ye,d as Qe,u as _e,t as be,M as U,v as et,w as tt,x as nt,y as at,z as X,A as st,q as lt,B as ot}from"./ssrBoot-By7QjoM7.js";import{C as B,a3 as G,a4 as Se,a5 as z,p as P,F as pe,J as r,a6 as q,c as y,R as Z,a2 as we,U as p,Z as T,Y as _,V as Q,N as ee,W as xe,a1 as O,a7 as re,a8 as ke,G as M,j as it,s as V,r as te,w as A,a9 as rt,n as ut,H as Te,K as ue,M as ct,m as Ve,a as H,L as dt,S as Ce,_ as D,$ as K,a0 as J,aa as Be,O as $e,B as ft,E as vt,ab as gt,b as mt,v as ht,D as yt,u as _t,f as bt,ac as Pe}from"./index-DUIuuK_M.js";function St(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return B()({name:t??G(Se(e.replace(/__/g,"-"))),props:{tag:{type:String,default:l},...L()},setup(n,o){let{slots:i}=o;return()=>{var a;return z(n.tag,{class:[e,n.class],style:n.style},(a=i.default)==null?void 0:a.call(i))}}})}const pt=P({fluid:{type:Boolean,default:!1},...L(),...ge(),...R()},"VContainer"),ce=B()({name:"VContainer",props:pt(),setup(e,l){let{slots:t}=l;const{rtlClasses:n}=pe(),{dimensionStyles:o}=me(e);return E(()=>r(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},n.value,e.class],style:[o.value,e.style]},t)),{}}}),Ie=q.reduce((e,l)=>(e[l]={type:[Boolean,String,Number],default:!1},e),{}),Le=q.reduce((e,l)=>{const t="offset"+G(l);return e[t]={type:[String,Number],default:null},e},{}),Ne=q.reduce((e,l)=>{const t="order"+G(l);return e[t]={type:[String,Number],default:null},e},{}),de={col:Object.keys(Ie),offset:Object.keys(Le),order:Object.keys(Ne)};function wt(e,l,t){let n=e;if(!(t==null||t===!1)){if(l){const o=l.replace(e,"");n+=`-${o}`}return e==="col"&&(n="v-"+n),e==="col"&&(t===""||t===!0)||(n+=`-${t}`),n.toLowerCase()}}const xt=["auto","start","end","center","baseline","stretch"],kt=P({cols:{type:[Boolean,String,Number],default:!1},...Ie,offset:{type:[String,Number],default:null},...Le,order:{type:[String,Number],default:null},...Ne,alignSelf:{type:String,default:null,validator:e=>xt.includes(e)},...L(),...R()},"VCol"),W=B()({name:"VCol",props:kt(),setup(e,l){let{slots:t}=l;const n=y(()=>{const o=[];let i;for(i in de)de[i].forEach(s=>{const d=e[s],c=wt(i,s,d);c&&o.push(c)});const a=o.some(s=>s.startsWith("v-col-"));return o.push({"v-col":!a||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),o});return()=>{var o;return z(e.tag,{class:[n.value,e.class],style:e.style},(o=t.default)==null?void 0:o.call(t))}}}),ne=["start","end","center"],Ae=["space-between","space-around","space-evenly"];function ae(e,l){return q.reduce((t,n)=>{const o=e+G(n);return t[o]=l(),t},{})}const Tt=[...ne,"baseline","stretch"],Ee=e=>Tt.includes(e),je=ae("align",()=>({type:String,default:null,validator:Ee})),Vt=[...ne,...Ae],He=e=>Vt.includes(e),Re=ae("justify",()=>({type:String,default:null,validator:He})),Ct=[...ne,...Ae,"stretch"],ze=e=>Ct.includes(e),Oe=ae("alignContent",()=>({type:String,default:null,validator:ze})),fe={align:Object.keys(je),justify:Object.keys(Re),alignContent:Object.keys(Oe)},Bt={align:"align",justify:"justify",alignContent:"align-content"};function $t(e,l,t){let n=Bt[e];if(t!=null){if(l){const o=l.replace(e,"");n+=`-${o}`}return n+=`-${t}`,n.toLowerCase()}}const Pt=P({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Ee},...je,justify:{type:String,default:null,validator:He},...Re,alignContent:{type:String,default:null,validator:ze},...Oe,...L(),...R()},"VRow"),se=B()({name:"VRow",props:Pt(),setup(e,l){let{slots:t}=l;const n=y(()=>{const o=[];let i;for(i in fe)fe[i].forEach(a=>{const s=e[a],d=$t(i,a,s);d&&o.push(d)});return o.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),o});return()=>{var o;return z(e.tag,{class:["v-row",n.value,e.class],style:e.style},(o=t.default)==null?void 0:o.call(t))}}}),It=St("v-spacer","div","VSpacer"),Lt={name:"SocialLinks"},Nt=Z({...Lt,setup(e){const l=[{icon:"mdi-instagram",link:"https://www.instagram.com/tarowl404/"},{isThreads:!0,link:"https://www.threads.net/@tarowl404"},{isX:!0,link:"https://x.com/TarowlA27961"},{icon:"mdi-facebook",link:"https://www.facebook.com/profile.php?id=61571791611669"},{icon:"mdi-message-text",link:"https://tarowlai.featurebase.app/"},{icon:"mdi-email",link:"mailto:tarowl.app@gmail.com"}];return(t,n)=>{const o=we("font-awesome-icon");return p(),T(se,{justify:"center",class:"mb-32"},{default:_(()=>[(p(),Q(ee,null,xe(l,(i,a)=>r(W,{cols:"auto",key:a},{default:_(()=>[r(F,{href:i.link,target:"_blank",rel:"noopener noreferrer",icon:"",variant:"text",size:"x-large",class:"social-btn mx-2",color:"white"},{default:_(()=>[i.isThreads?(p(),T(o,{key:0,icon:["fab","threads"],class:"threads-icon"})):i.isX?(p(),T(o,{key:1,icon:["fab","x-twitter"],class:"x-icon"})):(p(),T(he,{key:2,icon:i.icon},null,8,["icon"]))]),_:2},1032,["href"])]),_:2},1024)),64))]),_:1})}}}),At=O(Nt,[["__scopeId","data-v-034079c1"]]),Et={name:"AppStoreButtons"};function jt(e,l,t,n,o,i){return p(),T(se,{justify:"center","no-gutters":""},{default:_(()=>[r(W,{cols:"12",sm:"auto",class:"mb-3 mb-sm-0"},{default:_(()=>[r(F,{href:"https://apps.apple.com/us/app/tarowl/id6737720810",target:"_blank",rel:"noopener noreferrer",variant:"outlined","prepend-icon":"mdi-apple",color:"white",class:"store-btn px-8 mx-sm-2",size:"large",block:"",height:e.$vuetify.display.xs?"56":"48"},{default:_(()=>l[0]||(l[0]=[re(" App Store ")])),_:1},8,["height"])]),_:1}),r(W,{cols:"12",sm:"auto"},{default:_(()=>[r(F,{href:"https://play.google.com/store/apps/details?id=com.tarowl.tarowl",target:"_blank",rel:"noopener noreferrer",variant:"outlined","prepend-icon":"mdi-google-play",color:"white",class:"store-btn px-8 mx-sm-2",size:"large",block:"",height:e.$vuetify.display.xs?"56":"48"},{default:_(()=>l[1]||(l[1]=[re(" Play Store ")])),_:1},8,["height"])]),_:1})]),_:1})}const Ht=O(Et,[["render",jt],["__scopeId","data-v-0e0be3e3"]]),Rt="/assets/logo-DI7av-on.png";function zt(e){return{aspectStyles:y(()=>{const l=Number(e.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const Ue=P({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...L(),...ge()},"VResponsive"),Y=B()({name:"VResponsive",props:Ue(),setup(e,l){let{slots:t}=l;const{aspectStyles:n}=zt(e),{dimensionStyles:o}=me(e);return E(()=>{var i;return r("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[o.value,e.style]},[r("div",{class:"v-responsive__sizer",style:n.value},null),(i=t.additional)==null?void 0:i.call(t),t.default&&r("div",{class:["v-responsive__content",e.contentClass]},[t.default()])])}),{}}});function Ot(e,l){if(!ke)return;const t=l.modifiers||{},n=l.value,{handler:o,options:i}=typeof n=="object"?n:{handler:n,options:{}},a=new IntersectionObserver(function(){var g;let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],d=arguments.length>1?arguments[1]:void 0;const c=(g=e._observe)==null?void 0:g[l.instance.$.uid];if(!c)return;const u=s.some(b=>b.isIntersecting);o&&(!t.quiet||c.init)&&(!t.once||u||c.init)&&o(u,s,d),u&&t.once?Fe(e,l):c.init=!0},i);e._observe=Object(e._observe),e._observe[l.instance.$.uid]={init:!1,observer:a},a.observe(e)}function Fe(e,l){var n;const t=(n=e._observe)==null?void 0:n[l.instance.$.uid];t&&(t.observer.unobserve(e),delete e._observe[l.instance.$.uid])}const Ut={mounted:Ot,unmounted:Fe},Ft=P({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...Ue(),...L(),...ye(),...Qe()},"VImg"),Me=B()({name:"VImg",directives:{intersect:Ut},props:Ft(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:t,slots:n}=l;const{backgroundColorClasses:o,backgroundColorStyles:i}=_e(M(e,"color")),{roundedClasses:a}=be(e),s=it("VImg"),d=V(""),c=te(),u=V(e.eager?"loading":"idle"),g=V(),b=V(),m=y(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),h=y(()=>m.value.aspect||g.value/b.value||0);A(()=>e.src,()=>{w(u.value!=="idle")}),A(h,(f,S)=>{!f&&S&&c.value&&C(c.value)}),rt(()=>w());function w(f){if(!(e.eager&&f)&&!(ke&&!f&&!e.eager)){if(u.value="loading",m.value.lazySrc){const S=new Image;S.src=m.value.lazySrc,C(S,null)}m.value.src&&ut(()=>{var S;t("loadstart",((S=c.value)==null?void 0:S.currentSrc)||m.value.src),setTimeout(()=>{var I;if(!s.isUnmounted)if((I=c.value)!=null&&I.complete){if(c.value.naturalWidth||N(),u.value==="error")return;h.value||C(c.value,null),u.value==="loading"&&$()}else h.value||C(c.value),v()})})}}function $(){var f;s.isUnmounted||(v(),C(c.value),u.value="loaded",t("load",((f=c.value)==null?void 0:f.currentSrc)||m.value.src))}function N(){var f;s.isUnmounted||(u.value="error",t("error",((f=c.value)==null?void 0:f.currentSrc)||m.value.src))}function v(){const f=c.value;f&&(d.value=f.currentSrc||f.src)}let k=-1;Te(()=>{clearTimeout(k)});function C(f){let S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const I=()=>{if(clearTimeout(k),s.isUnmounted)return;const{naturalHeight:oe,naturalWidth:ie}=f;oe||ie?(g.value=ie,b.value=oe):!f.complete&&u.value==="loading"&&S!=null?k=window.setTimeout(I,S):(f.currentSrc.endsWith(".svg")||f.currentSrc.startsWith("data:image/svg+xml"))&&(g.value=1,b.value=1)};I()}const j=y(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),Xe=()=>{var I;if(!m.value.src||u.value==="idle")return null;const f=r("img",{class:["v-img__img",j.value],style:{objectPosition:e.position},src:m.value.src,srcset:m.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:c,onLoad:$,onError:N},null),S=(I=n.sources)==null?void 0:I.call(n);return r(U,{transition:e.transition,appear:!0},{default:()=>[ue(S?r("picture",{class:"v-img__picture"},[S,f]):f,[[dt,u.value==="loaded"]])]})},Ke=()=>r(U,{transition:e.transition},{default:()=>[m.value.lazySrc&&u.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",j.value],style:{objectPosition:e.position},src:m.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),Je=()=>n.placeholder?r(U,{transition:e.transition,appear:!0},{default:()=>[(u.value==="loading"||u.value==="error"&&!n.error)&&r("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,Ye=()=>n.error?r(U,{transition:e.transition,appear:!0},{default:()=>[u.value==="error"&&r("div",{class:"v-img__error"},[n.error()])]}):null,Ze=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,le=V(!1);{const f=A(h,S=>{S&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{le.value=!0})}),f())})}return E(()=>{const f=Y.filterProps(e);return ue(r(Y,Ve({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!le.value},o.value,a.value,e.class],style:[{width:H(e.width==="auto"?g.value:e.width)},i.value,e.style]},f,{aspectRatio:h.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>r(ee,null,[r(Xe,null,null),r(Ke,null,null),r(Ze,null,null),r(Je,null,null),r(Ye,null,null)]),default:n.default}),[[ct("intersect"),{handler:w,options:e.options},null,{once:!0}]])}),{currentSrc:d,image:c,state:u,naturalWidth:g,naturalHeight:b}}}),Mt={class:"logo-container"},Dt={class:"text-h4 font-weight-bold mt-4"},Wt={class:"text-h6 font-weight-medium text-grey"},Gt=Z({__name:"Logo",setup(e){const{t:l}=Ce();return(t,n)=>(p(),Q("div",Mt,[r(Me,{height:t.$vuetify.display.xs?"120":"160",src:Rt,contain:"",class:"logo-image"},null,8,["height"]),D("p",Dt,K(J(l)("app.name")),1),D("p",Wt,K(J(l)("app.subtitle")),1)]))}}),qt=O(Gt,[["__scopeId","data-v-e6120aea"]]),Xt=[{icon:"mdi-instagram",url:"https://www.instagram.com/tarowl404/"},{isThreads:!0,url:"https://www.threads.net/@tarowl404"},{isX:!0,url:"https://x.com/TarowlA27961"},{icon:"mdi-facebook",url:"https://www.facebook.com/profile.php?id=61571791611669"},{icon:"mdi-message-text",url:"https://tarowlai.featurebase.app/"},{icon:"mdi-email",url:"mailto:tarowl.app@gmail.com"}],Kt={name:"AppHeader",setup(){return{socialLinks:Xt}}},Jt=P({text:String,...L(),...R()},"VToolbarTitle"),Yt=B()({name:"VToolbarTitle",props:Jt(),setup(e,l){let{slots:t}=l;return E(()=>{const n=!!(t.default||t.text||e.text);return r(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var o;return[n&&r("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(o=t.default)==null?void 0:o.call(t)])]}})}),{}}}),Zt=P({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function x(e,l,t){return B()({name:e,props:Zt({mode:t,origin:l}),setup(n,o){let{slots:i}=o;const a={onBeforeEnter(s){n.origin&&(s.style.transformOrigin=n.origin)},onLeave(s){if(n.leaveAbsolute){const{offsetTop:d,offsetLeft:c,offsetWidth:u,offsetHeight:g}=s;s._transitionInitialStyles={position:s.style.position,top:s.style.top,left:s.style.left,width:s.style.width,height:s.style.height},s.style.position="absolute",s.style.top=`${d}px`,s.style.left=`${c}px`,s.style.width=`${u}px`,s.style.height=`${g}px`}n.hideOnLeave&&s.style.setProperty("display","none","important")},onAfterLeave(s){if(n.leaveAbsolute&&(s!=null&&s._transitionInitialStyles)){const{position:d,top:c,left:u,width:g,height:b}=s._transitionInitialStyles;delete s._transitionInitialStyles,s.style.position=d||"",s.style.top=c||"",s.style.left=u||"",s.style.width=g||"",s.style.height=b||""}}};return()=>{const s=n.group?Be:$e;return z(s,{name:n.disabled?"":e,css:!n.disabled,...n.group?void 0:{mode:n.mode},...n.disabled?{}:a},i.default)}}})}function De(e,l){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return B()({name:e,props:{mode:{type:String,default:t},disabled:Boolean,group:Boolean},setup(n,o){let{slots:i}=o;const a=n.group?Be:$e;return()=>z(a,{name:n.disabled?"":e,css:!n.disabled,...n.disabled?{}:l},i.default)}})}function We(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",n=Se(`offset-${t}`);return{onBeforeEnter(a){a._parent=a.parentNode,a._initialStyle={transition:a.style.transition,overflow:a.style.overflow,[t]:a.style[t]}},onEnter(a){const s=a._initialStyle;a.style.setProperty("transition","none","important"),a.style.overflow="hidden";const d=`${a[n]}px`;a.style[t]="0",a.offsetHeight,a.style.transition=s.transition,e&&a._parent&&a._parent.classList.add(e),requestAnimationFrame(()=>{a.style[t]=d})},onAfterEnter:i,onEnterCancelled:i,onLeave(a){a._initialStyle={transition:"",overflow:a.style.overflow,[t]:a.style[t]},a.style.overflow="hidden",a.style[t]=`${a[n]}px`,a.offsetHeight,requestAnimationFrame(()=>a.style[t]="0")},onAfterLeave:o,onLeaveCancelled:o};function o(a){e&&a._parent&&a._parent.classList.remove(e),i(a)}function i(a){const s=a._initialStyle[t];a.style.overflow=a._initialStyle.overflow,s!=null&&(a.style[t]=s),delete a._initialStyle}}x("fab-transition","center center","out-in");x("dialog-bottom-transition");x("dialog-top-transition");x("fade-transition");x("scale-transition");x("scroll-x-transition");x("scroll-x-reverse-transition");x("scroll-y-transition");x("scroll-y-reverse-transition");const Qt=x("slide-x-transition");x("slide-x-reverse-transition");x("slide-y-transition");x("slide-y-reverse-transition");const Ge=De("expand-transition",We());De("expand-x-transition",We("",!0));const en=[null,"prominent","default","comfortable","compact"],qe=P({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>en.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...et(),...L(),...tt(),...ye(),...R({tag:"header"}),...ft()},"VToolbar"),ve=B()({name:"VToolbar",props:qe(),setup(e,l){var m;let{slots:t}=l;const{backgroundColorClasses:n,backgroundColorStyles:o}=_e(M(e,"color")),{borderClasses:i}=nt(e),{elevationClasses:a}=at(e),{roundedClasses:s}=be(e),{themeClasses:d}=vt(e),{rtlClasses:c}=pe(),u=V(!!(e.extended||(m=t.extension)!=null&&m.call(t))),g=y(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),b=y(()=>u.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return gt({VBtn:{variant:"text"}}),E(()=>{var N;const h=!!(e.title||t.title),w=!!(t.image||e.image),$=(N=t.extension)==null?void 0:N.call(t);return u.value=!!(e.extended||$),r(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},n.value,i.value,a.value,s.value,d.value,c.value,e.class],style:[o.value,e.style]},{default:()=>[w&&r("div",{key:"image",class:"v-toolbar__image"},[t.image?r(X,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):r(Me,{key:"image-img",cover:!0,src:e.image},null)]),r(X,{defaults:{VTabs:{height:H(g.value)}}},{default:()=>{var v,k,C;return[r("div",{class:"v-toolbar__content",style:{height:H(g.value)}},[t.prepend&&r("div",{class:"v-toolbar__prepend"},[(v=t.prepend)==null?void 0:v.call(t)]),h&&r(Yt,{key:"title",text:e.title},{text:t.title}),(k=t.default)==null?void 0:k.call(t),t.append&&r("div",{class:"v-toolbar__append"},[(C=t.append)==null?void 0:C.call(t)])])]}}),r(X,{defaults:{VTabs:{height:H(b.value)}}},{default:()=>[r(Ge,null,{default:()=>[u.value&&r("div",{class:"v-toolbar__extension",style:{height:H(b.value)}},[$])]})]})]})}),{contentHeight:g,extensionHeight:b}}}),tn=P({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function nn(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=l;let n=0,o=0;const i=te(null),a=V(0),s=V(0),d=V(0),c=V(!1),u=V(!1),g=y(()=>Number(e.scrollThreshold)),b=y(()=>mt((g.value-a.value)/g.value||0)),m=()=>{const h=i.value;if(!h||t&&!t.value)return;n=a.value,a.value="window"in h?h.pageYOffset:h.scrollTop;const w=h instanceof Window?document.documentElement.scrollHeight:h.scrollHeight;if(o!==w){o=w;return}u.value=a.value<n,d.value=Math.abs(a.value-g.value)};return A(u,()=>{s.value=s.value||a.value}),A(c,()=>{s.value=0}),ht(()=>{A(()=>e.scrollTarget,h=>{var $;const w=h?document.querySelector(h):window;w&&w!==i.value&&(($=i.value)==null||$.removeEventListener("scroll",m),i.value=w,i.value.addEventListener("scroll",m,{passive:!0}))},{immediate:!0})}),Te(()=>{var h;(h=i.value)==null||h.removeEventListener("scroll",m)}),t&&A(t,m,{immediate:!0}),{scrollThreshold:g,currentScroll:a,currentThreshold:d,isScrollActive:c,scrollRatio:b,isScrollingUp:u,savedScroll:s}}const an=P({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...qe(),...st(),...tn(),height:{type:[Number,String],default:64}},"VAppBar"),sn=B()({name:"VAppBar",props:an(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:t}=l;const n=te(),o=yt(e,"modelValue"),i=y(()=>{var k;const v=new Set(((k=e.scrollBehavior)==null?void 0:k.split(" "))??[]);return{hide:v.has("hide"),fullyHide:v.has("fully-hide"),inverted:v.has("inverted"),collapse:v.has("collapse"),elevate:v.has("elevate"),fadeImage:v.has("fade-image")}}),a=y(()=>{const v=i.value;return v.hide||v.fullyHide||v.inverted||v.collapse||v.elevate||v.fadeImage||!o.value}),{currentScroll:s,scrollThreshold:d,isScrollingUp:c,scrollRatio:u}=nn(e,{canScroll:a}),g=y(()=>i.value.hide||i.value.fullyHide),b=y(()=>e.collapse||i.value.collapse&&(i.value.inverted?u.value>0:u.value===0)),m=y(()=>e.flat||i.value.fullyHide&&!o.value||i.value.elevate&&(i.value.inverted?s.value>0:s.value===0)),h=y(()=>i.value.fadeImage?i.value.inverted?1-u.value:u.value:void 0),w=y(()=>{var C,j;if(i.value.hide&&i.value.inverted)return 0;const v=((C=n.value)==null?void 0:C.contentHeight)??0,k=((j=n.value)==null?void 0:j.extensionHeight)??0;return g.value?s.value<d.value||i.value.fullyHide?v+k:v:v+k});_t(y(()=>!!e.scrollBehavior),()=>{bt(()=>{g.value?i.value.inverted?o.value=s.value>d.value:o.value=c.value||s.value<d.value:o.value=!0})});const{ssrBootStyles:$}=lt(),{layoutItemStyles:N}=ot({id:e.name,order:y(()=>parseInt(e.order,10)),position:M(e,"location"),layoutSize:w,elementSize:V(void 0),active:o,absolute:M(e,"absolute")});return E(()=>{const v=ve.filterProps(e);return r(ve,Ve({ref:n,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...N.value,"--v-toolbar-image-opacity":h.value,height:void 0,...$.value},e.style]},v,{collapse:b.value,flat:m.value}),t)}),{}}}),ln={class:"d-flex align-center"};function on(e,l,t,n,o,i){const a=we("font-awesome-icon");return e.$vuetify.display.mdAndUp?(p(),T(sn,{key:0,flat:"",class:"px-4",height:"64",color:"transparent"},{default:_(()=>[r(It),r(Qt,null,{default:_(()=>[D("div",ln,[(p(!0),Q(ee,null,xe(n.socialLinks,(s,d)=>(p(),T(F,{key:d,href:s.url,target:"_blank",rel:"noopener noreferrer",icon:"",variant:"text",color:"white",class:"social-icon mx-1"},{default:_(()=>[s.isThreads?(p(),T(a,{key:0,icon:["fab","threads"],class:"threads-icon"})):s.isX?(p(),T(a,{key:1,icon:["fab","x-twitter"],class:"x-icon"})):(p(),T(he,{key:2,icon:s.icon},null,8,["icon"]))]),_:2},1032,["href"]))),128))])]),_:1})]),_:1})):Pe("",!0)}const rn=O(Kt,[["render",on],["__scopeId","data-v-192ca07c"]]),un={class:"text-body-1 text-medium-emphasis mt-8 mb-4 description-text"},cn=Z({__name:"index",setup(e){const{t:l}=Ce();return(t,n)=>{const o=rn,i=qt,a=Ht,s=At;return p(),T(ce,{class:"fill-height bg-background pa-0"},{default:_(()=>[r(o),r(Y,{class:"align-center text-center fill-height"},{default:_(()=>[r(se,{"no-gutters":"",justify:"center",align:"center",class:"fill-height"},{default:_(()=>[r(W,{cols:"12",sm:"10",md:"8",lg:"6"},{default:_(()=>[r(i),r(ce,{class:"px-4"},{default:_(()=>[r(a),D("p",un,K(J(l)("contact.description")),1),r(Ge,null,{default:_(()=>[t.$vuetify.display.smAndDown?(p(),T(s,{key:0,class:"mt-8"})):Pe("",!0)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),vn=O(cn,[["__scopeId","data-v-157b57da"]]);export{vn as default};
