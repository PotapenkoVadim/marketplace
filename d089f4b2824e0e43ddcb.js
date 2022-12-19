!function(){"use strict";var e,t={1139:function(e,t,a){var n=a(8661),o=a(7810),c={layout__header:"layout__header__dc4199b","layout__header-container":"layout__header-container__cc40276","layout__header-navigation":"layout__header-navigation__c313f21",layout__header__menu:"layout__header__menu__fd601f8",layout__content:"layout__content__e23e2f4",layout__logo:"layout__logo__d3084ba",layout__actions:"layout__actions__e035e9e",layout__footer:"layout__footer__f9bc63c","layout__footer-title":"layout__footer-title__ddd0579","layout__footer-container":"layout__footer-container__e2f9900","layout__footer-navigation":"layout__footer-navigation__f82ab5c",layout__col:"layout__col__bb984e2",layout_left:"layout_left__b8fc58e",layout__social:"layout__social__e09f06e","layout__header-navigation_open":"layout__header-navigation_open__ce60416",layout__header__bag:"layout__header__bag__b0dbb28"},r=a(6584);const i=e=>{let{className:t,children:a}=e;return(0,r.tZ)("div",{className:`container__fed4ae7 ${t??""}`,children:a})};var l=a.p+"assets/f405d24978b1732e3412.png",_=a.p+"assets/6d1e48099d4a89c9dd09.jpg",s=a.p+"assets/f827126217fb1c4bfc84.jpg",d=a.p+"assets/eced111ad71440060958.png";const u="/marketplace/",h={home:u,marketplace:`${u}market-place`,blog:`${u}blog`,pricing:`${u}pricing`,about:`${u}about`,contact:`${u}contact`},m={paths:h,routes:[{name:"Market Place",path:h.marketplace},{name:"Blog",path:h.blog},{name:"Pricing",path:h.pricing},{name:"About",path:h.about},{name:"Contact",path:h.contact}],additionalRoutes:[{name:"Our Mobile App",path:"#"},{name:"Frequently Asked Questions",path:"#"},{name:"Help Desk",path:"#"},{name:"Privacy Policy",path:"#"},{name:"Terms and Conditions",path:"#"}],header:{hidingClass:"header_hide"},homePage:{poster:d,sectionIDs:{topDeals:"topDeals",bestSelling:"bestSelling"}},user:{types:{admin:{role:"admin",avatar:s},customer:{role:"customer",avatar:l},guest:{role:"guest",avatar:_}}}},p=e=>{let{className:t}=e;return(0,r.tZ)("a",{className:`logo__d6411ff ${t??""}`,href:m.paths.home,children:(0,r.tZ)("span",{className:"logo__image__a9032c9"})})};var b={navigation:"navigation__b8d719e",navigation_row:"navigation_row__c908d8a",navigation_col:"navigation_col__d9ead3e"},f=a(5168);const g=e=>{let{children:t,to:a,onClick:n}=e;return(0,r.tZ)(f.rU,{onClick:n,className:"link__ff8d0dd",activeClassName:"link_active__c003a4f",href:a,children:t})},y=e=>{let{className:t,routes:a,direction:n="row",handleClick:o}=e;return(0,r.tZ)("nav",{className:`\n      ${b.navigation}\n      ${b[`navigation_${n}`]}\n      ${t??""}\n    `,children:a.length>0&&a.map((e=>{let{name:t,path:a}=e;return(0,r.tZ)(g,{onClick:o,to:a,children:t},t)}))})};var v={icon:"icon__e70c055",icon__bag:"icon__bag__bf49a12",icon__facebook:"icon__facebook__b578c02",icon__twitter:"icon__twitter__e55c6ee",icon__instagram:"icon__instagram__b5cae40",icon__linkedin:"icon__linkedin__f289852","icon__arrow-link":"icon__arrow-link__e52f875",icon__heart:"icon__heart__b3151fe",icon__menu:"icon__menu__be473db",icon__close:"icon__close__bbf47a5",icon_white:"icon_white__d566b4f",icon_black:"icon_black__ebc9286",icon_accent:"icon_accent__c248dbd","rounded-icon":"rounded-icon__d24620b","rounded-icon_small":"rounded-icon_small__bf5b9f3","rounded-icon_large":"rounded-icon_large__ca05dda","rounded-icon_accent":"rounded-icon_accent__c6321b1","rounded-icon_light":"rounded-icon_light__e38e259"};const Z=e=>{let{variant:t,color:a,className:n}=e;return(0,r.tZ)("span",{className:`\n      ${v.icon}\n      ${v[`icon__${t}`]}\n      ${v[`icon_${a}`]}\n      ${n??""}\n    `})},k=e=>{let{variant:t,color:a,size:n,className:o,onClick:c,background:i="accent"}=e;return(0,r.tZ)("div",{onClick:c,className:`\n      ${v["rounded-icon"]}\n      ${v[`rounded-icon_${n}`]}\n      ${v[`rounded-icon_${i}`]}\n      ${o??""}\n    `,children:(0,r.tZ)(Z,{variant:t,color:a})})},N=m.user.types,$=m.user.types;const w=e=>{let{children:t}=e;return(0,r.tZ)("span",{className:"dropdown__link__e03ffdc",children:t})},B=e=>{let{children:t,menu:a,isForciblyHide:o}=e;const c=(0,n.useRef)(null),[i,l]=(0,n.useState)(!1),_=e=>{const t=c.current.contains(e.target);c.current===e.target||t||o||l(!1)};return(0,n.useEffect)((()=>(document.body.addEventListener("click",_),()=>document.body.removeEventListener("click",_))),[]),(0,n.useEffect)((()=>{o&&l(!1)}),[o]),(0,r.BX)("div",{ref:c,className:"dropdown__aa13139",children:[(0,r.tZ)("div",{onClick:()=>{o||l(!i)},className:"dropdown__target__aa3ea77",children:t}),(0,r.tZ)("div",{className:`dropdown__content__be65ce0 ${!i&&"visually-hidden"}`,children:a.map((e=>(0,r.tZ)(w,{children:e.node},e.key)))})]})};const C=e=>{let{link:t,className:a}=e;return(0,r.tZ)("img",{className:`avatar__cd20bb3 ${a??""}`,loading:"lazy",src:t,alt:"user avatar"})};var X=a(6248),S=a(270);const E=m.user.types,P=(0,S.ZP)((e=>({user:E.guest,logIn:t=>e({user:t}),logOut:()=>e({user:E.guest})}))),O=e=>P(e,X.Z),x=m.user.types,L=e=>{let{isHideMenu:t}=e;const[a,o]=(0,n.useState)([]),{user:i,logIn:l,logOut:_}=O((e=>e)),s=function(e){const[t,a]=(0,n.useState)(!1);return(0,n.useEffect)((()=>a(e.role===N.admin.role)),[e]),t}(i),d=()=>l(x.admin),u=()=>l(x.customer),h=s?u:d;return(0,n.useEffect)((()=>{if(i.role!==x.guest.role){const e=s?x.customer:x.admin;o([{key:e.role,node:(0,r.BX)("span",{onClick:h,children:["Switch to ",e.role]})},{key:x.guest.role,node:(0,r.tZ)("span",{onClick:_,children:"Log out"})}])}else o([{key:x.admin.role,node:(0,r.tZ)("span",{onClick:d,children:"Log in as admin"})},{key:x.customer.role,node:(0,r.tZ)("span",{onClick:u,children:"Log in as customer"})}])}),[i,s]),(0,r.tZ)(B,{isForciblyHide:t,menu:a,children:(0,r.tZ)(C,{className:c.layout__avatar,link:i.avatar})})},T=m.routes,M=()=>{const e=(0,n.useRef)(null),[t,a]=(0,n.useState)(!1),o=function(e){const[t,a]=(0,n.useState)(!1);return(0,n.useEffect)((()=>a(e.role===$.customer.role)),[e]),t}(O((e=>e.user))),l=function(e){const[t,a]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{let t=0;const n=()=>window.pageYOffset||document.documentElement.scrollTop,o=()=>e.current.classList.contains(m.header.hidingClass);function c(){n()>t&&n()>100&&!o()?(e.current.classList.add(m.header.hidingClass),a(!0)):n()<t&&o()&&(e.current.classList.remove(m.header.hidingClass),a(!1)),t=n()}return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)}),[e]),t}(e);return(0,r.tZ)("header",{ref:e,className:c.layout__header,children:(0,r.BX)(i,{className:c["layout__header-container"],children:[(0,r.tZ)("div",{className:c.layout__logo,children:(0,r.tZ)(p,{})}),(0,r.tZ)(y,{handleClick:()=>{t&&a(!1)},routes:T,className:`\n            ${c["layout__header-navigation"]}\n            ${t?c["layout__header-navigation_open"]:""}\n          `}),(0,r.BX)("div",{className:c.layout__actions,children:[o&&(0,r.tZ)(k,{className:c.layout__header__bag,variant:"bag",color:"white",size:"large"}),(0,r.tZ)(L,{isHideMenu:l}),(0,r.tZ)(k,{onClick:()=>{a(!t)},className:c.layout__header__menu,variant:t?"close":"menu",color:"white",size:"large"})]})]})})},D=m.routes,z=m.additionalRoutes,j=()=>(0,r.tZ)("footer",{className:c.layout__footer,children:(0,r.BX)(i,{className:c["layout__footer-container"],children:[(0,r.BX)("div",{className:c.layout__col,children:[(0,r.tZ)("h3",{className:c["layout__footer-title"],children:"Your company"}),(0,r.tZ)("div",{children:"Our mission is to make gadjet purchase, accessible and affordable."})]}),(0,r.tZ)("div",{className:c.layout__col,children:(0,r.BX)("div",{className:c.layout_left,children:[(0,r.tZ)("h3",{className:c["layout__footer-title"],children:"Helpful Links"}),(0,r.tZ)(y,{className:c["layout__footer-navigation"],routes:D,direction:"col"})]})}),(0,r.BX)("div",{className:c.layout__col,children:[(0,r.tZ)("h3",{className:c["layout__footer-title"],children:"Site Map"}),(0,r.tZ)(y,{className:c["layout__footer-navigation"],routes:z,direction:"col"})]}),(0,r.BX)("div",{className:c.layout__col,children:[(0,r.tZ)("h3",{className:c["layout__footer-title"],children:"Contact Us"}),(0,r.BX)("div",{className:c.layout__social,children:[(0,r.tZ)(k,{variant:"facebook",color:"accent",size:"small",background:"light"}),(0,r.tZ)(k,{variant:"twitter",color:"accent",size:"small",background:"light"}),(0,r.tZ)(k,{variant:"instagram",color:"accent",size:"small",background:"light"}),(0,r.tZ)(k,{variant:"linkedin",color:"accent",size:"small",background:"light"})]}),(0,r.tZ)("div",{children:"hello@yourcompany.com"})]})]})}),H=e=>{let{children:t}=e;return(0,r.BX)("div",{className:c.layout,children:[(0,r.tZ)(M,{}),(0,r.tZ)("main",{className:c.layout__content,children:t}),(0,r.tZ)(j,{})]})};const A=e=>{let{source:t,className:a,alt:n="poster"}=e;return(0,r.tZ)("div",{className:`poster__eaa8fb3 ${a??""}`,children:(0,r.tZ)("img",{className:"poster__image__ff6b809",src:t,loading:"lazy",alt:n})})};var I={button:"button__e760ae0",button_primary:"button_primary__e82a0f9",button_large:"button_large__ad49bc9",button_small:"button_small__b4198e4","button-link":"button-link__c99a83c","button-link_primary":"button-link_primary__b620fbe","button-link_black":"button-link_black__a0ae79a","button-link__icon":"button-link__icon__c3ec040"};const F=e=>{let{children:t,className:a,onClick:n,variant:o="primary",size:c="small"}=e;return(0,r.tZ)("button",{onClick:n,className:`\n        ${I.button}\n        ${I[`button_${o}`]}\n        ${I[`button_${c}`]}\n        ${a??""}\n      `,children:t})},R=e=>{let{children:t,className:a,onClick:n,href:o,color:c="primary",iconVariant:i=null}=e;return(0,r.BX)("a",{href:o,onClick:n,className:`${I["button-link"]} ${I[`button-link_${c}`]} ${a??""}`,children:[(0,r.tZ)("span",{children:t}),i&&(0,r.tZ)(Z,{className:I["button-link__icon"],variant:i,color:c})]})},Y=m.homePage.poster,U=m.paths.marketplace,V=m.homePage.sectionIDs.topDeals,W=()=>(0,r.BX)("div",{className:"introduce__c4bb07e",children:[(0,r.BX)(i,{className:"introduce__info__c5c5eed",children:[(0,r.tZ)("div",{className:"introduce__subtitle__ca0b5fd",children:"WE’RE STILL"}),(0,r.BX)("h1",{className:"introduce__title__fef37a4",children:["Filling up",(0,r.tZ)("br",{}),"the spaces."]}),(0,r.BX)("div",{className:"introduce__actions__e6171e1",children:[(0,r.tZ)(F,{onClick:()=>{(0,o.BC)(U,!0)},variant:"primary",children:"Explore Marketplace"}),(0,r.tZ)(R,{href:`#${V}`,className:"introduce__link__c5355c9",children:"See Top Deals"})]})]}),(0,r.tZ)(A,{className:"introduce__poster__da3dac7",source:Y})]});var q={"product-list__header":"product-list__header__a7c9904","product-list__header-content":"product-list__header-content__fc610d3","product-list__content":"product-list__content__baed21f"},K={"title-invitation":"title-invitation__f66f97f"};const Q=e=>{let{title:t,textLink:a,link:n}=e;return(0,r.BX)("div",{className:K["title-invitation"],children:[(0,r.tZ)("span",{className:K["title-invitation__title"],children:t}),(0,r.tZ)(R,{color:"black",iconVariant:"arrow-link",children:a})]})};var G={badge:"badge__acdf330",badge_secondary:"badge_secondary__c9c561f",badge_primary:"badge_primary__f5f5b11"};const J=e=>{let{children:t,type:a="primary"}=e;return(0,r.tZ)("span",{className:`${G.badge} ${G[`badge_${a}`]}`,children:t})};var ee=a.p+"assets/b869cf21055bca5fb780.png";const te=()=>(0,r.BX)("div",{className:"products__item__da73047",children:[(0,r.BX)("div",{className:"products__item__header__cbd270c",children:[(0,r.tZ)(J,{type:"secondary",children:"-59%"}),(0,r.tZ)(k,{variant:"heart",color:"accent",size:"small",background:"light"})]}),(0,r.tZ)(A,{className:"products__item__poster__dc42420",source:ee}),(0,r.BX)("div",{className:"products__item__price__d10417e",children:[(0,r.tZ)(J,{children:"Audio Devices"}),(0,r.tZ)("span",{children:"₦600,000"})]}),(0,r.tZ)("div",{className:"products__item__title__c31739c",children:"Nokia Essential Wireless Headphones 120CM BLACK"}),(0,r.BX)("div",{className:"products__item__actions__c1c9752",children:[(0,r.tZ)(R,{children:"Add to Cart"}),(0,r.tZ)(F,{size:"large",variant:"primary",children:"Buy Now"})]})]}),ae=()=>(0,r.BX)("div",{className:"products__a5ff913",children:[(0,r.tZ)(te,{}),(0,r.tZ)(te,{}),(0,r.tZ)(te,{})]}),ne=e=>{let{title:t,id:a}=e;return(0,r.BX)("div",{id:a,className:q["product-list"],children:[(0,r.tZ)("div",{className:q["product-list__header"],children:(0,r.tZ)(i,{children:(0,r.tZ)(Q,{title:t,textLink:"Explore",link:"#"})})}),(0,r.tZ)(i,{children:(0,r.tZ)("div",{className:q["product-list__content"],children:(0,r.tZ)(ae,{})})})]})};const oe=e=>{let{textButton:t,className:a,placeholder:n}=e;return(0,r.BX)("div",{className:`button-field__d01aae4 ${a??""}`,children:[(0,r.tZ)("input",{className:"button-field__field__ccb958b",type:"text"}),(0,r.tZ)("button",{className:"button-field__button__c01ab2f",children:t}),(0,r.tZ)("span",{className:"button-field__placeholder__f23b1be",children:n})]})},ce=()=>(0,r.tZ)(i,{children:(0,r.BX)("div",{className:"subscribe__f3cabff",children:[(0,r.tZ)("h2",{className:"subscribe__title__cf83a80",children:"Subscribe to Our Newsletter"}),(0,r.tZ)("div",{className:"subscribe__subtitle__add0d93",children:"Don't miss out on our top deals! Dont worry we will not spam you."}),(0,r.tZ)(oe,{placeholder:"Enter your Email Here",textButton:"Subscribe",className:"subscribe__button-field__a5424ee"})]})}),{topDeals:re,bestSelling:ie}=m.homePage.sectionIDs,le=()=>(0,r.BX)(r.HY,{children:[(0,r.tZ)(W,{}),(0,r.tZ)(ne,{id:re,title:"Our Top Deals"}),(0,r.tZ)(ne,{id:ie,title:"Best Selling Product"}),(0,r.tZ)(ce,{})]}),_e=()=>(0,r.tZ)(i,{children:(0,r.tZ)("h1",{style:{marginTop:"100px"},children:"Marketplace Blog Page"})}),se=()=>(0,r.tZ)(i,{children:(0,r.tZ)("h1",{style:{marginTop:"100px"},children:"Marketplace About Page"})}),de=()=>(0,r.tZ)(i,{children:(0,r.tZ)("h1",{style:{marginTop:"100px"},children:"Marketplace Pricing Page"})}),ue=()=>(0,r.tZ)(i,{children:(0,r.tZ)("h1",{style:{marginTop:"100px"},children:"Marketplace Contact Page"})}),he=()=>(0,r.tZ)(i,{children:(0,r.tZ)("h1",{style:{marginTop:"100px"},children:"Marketplace Page"})}),me=m.paths;n.default.render((0,r.tZ)((()=>(0,r.tZ)(H,{children:(0,r.BX)(o.ZP,{children:[(0,r.tZ)(le,{default:!0,path:me.home}),(0,r.tZ)(se,{path:me.about}),(0,r.tZ)(_e,{path:me.blog}),(0,r.tZ)(de,{path:me.pricing}),(0,r.tZ)(ue,{path:me.contact}),(0,r.tZ)(he,{path:me.marketplace})]})})),{}),document.getElementById("root"))}},a={};function n(e){var o=a[e];if(void 0!==o)return o.exports;var c=a[e]={exports:{}};return t[e](c,c.exports,n),c.exports}n.m=t,e=[],n.O=function(t,a,o,c){if(!a){var r=1/0;for(s=0;s<e.length;s++){a=e[s][0],o=e[s][1],c=e[s][2];for(var i=!0,l=0;l<a.length;l++)(!1&c||r>=c)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(i=!1,c<r&&(r=c));if(i){e.splice(s--,1);var _=o();void 0!==_&&(t=_)}}return t}c=c||0;for(var s=e.length;s>0&&e[s-1][2]>c;s--)e[s]=e[s-1];e[s]=[a,o,c]},n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e}(),function(){var e={179:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,c,r=a[0],i=a[1],l=a[2],_=0;if(r.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(l)var s=l(n)}for(t&&t(a);_<r.length;_++)c=r[_],n.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return n.O(s)},a=self.webpackChunkmarketplace=self.webpackChunkmarketplace||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}(),n.O(void 0,[998],(function(){return n(6981)}));var o=n.O(void 0,[998],(function(){return n(1139)}));o=n.O(o)}();