(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4184:function(t,e){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var o=typeof n;if("string"===o||"number"===o)t.push(n);else if(Array.isArray(n)){if(n.length){var a=i.apply(null,n);a&&t.push(a)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var s in n)r.call(n,s)&&n[s]&&t.push(s);else t.push(n.toString())}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):void 0===(n=function(){return i}.apply(e,[]))||(t.exports=n)}()},5301:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3568)}])},8045:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(c){s=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(t,e)||s(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||s(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}e.default=function(t){var e=t.src,n=t.sizes,r=t.unoptimized,a=void 0!==r&&r,s=t.priority,d=void 0!==s&&s,m=t.loading,g=t.lazyBoundary,y=void 0===g?"200px":g,w=t.className,x=t.quality,j=t.width,A=t.height,S=t.objectFit,O=t.objectPosition,z=t.onLoadingComplete,I=t.loader,E=void 0===I?N:I,P=t.placeholder,R=void 0===P?"empty":P,C=t.blurDataURL,D=function(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}(t,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),q=n?"responsive":"intrinsic";"layout"in D&&(D.layout&&(q=D.layout),delete D.layout);var M="";if(function(t){return"object"===typeof t&&(v(t)||function(t){return void 0!==t.src}(t))}(e)){var L=v(e)?e.default:e;if(!L.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(L)));if(C=C||L.blurDataURL,M=L.src,(!q||"fill"!==q)&&(A=A||L.height,j=j||L.width,!L.height||!L.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(L)))}e="string"===typeof e?e:M;var $=_(j),B=_(A),W=_(x),T=!d&&("lazy"===m||"undefined"===typeof m);(e.startsWith("data:")||e.startsWith("blob:"))&&(a=!0,T=!1);b.has(e)&&(T=!1);0;var U,H=o(f.useIntersection({rootMargin:y,disabled:!T}),2),F=H[0],V=H[1],J=!T||V,X={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},G={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},K=!1,Q={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:S,objectPosition:O},Y="blur"===R?{filter:"blur(20px)",backgroundSize:S||"cover",backgroundImage:'url("'.concat(C,'")'),backgroundPosition:O||"0% 0%"}:{};if("fill"===q)X.display="block",X.position="absolute",X.top=0,X.left=0,X.bottom=0,X.right=0;else if("undefined"!==typeof $&&"undefined"!==typeof B){var Z=B/$,tt=isNaN(Z)?"100%":"".concat(100*Z,"%");"responsive"===q?(X.display="block",X.position="relative",K=!0,G.paddingTop=tt):"intrinsic"===q?(X.display="inline-block",X.position="relative",X.maxWidth="100%",K=!0,G.maxWidth="100%",U='<svg width="'.concat($,'" height="').concat(B,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===q&&(X.display="inline-block",X.position="relative",X.width=$,X.height=B)}else 0;var et={src:h,srcSet:void 0,sizes:void 0};J&&(et=k({src:e,unoptimized:a,layout:q,width:$,quality:W,sizes:n,loader:E}));var nt=e;0;var rt;0;var it=(i(rt={},"imagesrcset",et.srcSet),i(rt,"imagesizes",et.sizes),rt);return c.default.createElement("span",{style:X},K?c.default.createElement("span",{style:G},U?c.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(u.toBase64(U))}):null):null,c.default.createElement("img",Object.assign({},D,et,{decoding:"async","data-nimg":q,className:w,ref:function(t){F(t),function(t,e,n,r,i){if(!t)return;var o=function(){t.src!==h&&("decode"in t?t.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===r&&(t.style.filter="",t.style.backgroundSize="",t.style.backgroundImage="",t.style.backgroundPosition=""),b.add(e),i){var n=t.naturalWidth,o=t.naturalHeight;i({naturalWidth:n,naturalHeight:o})}}))};t.complete?o():t.onload=o}(t,nt,0,R,z)},style:p({},Q,Y)})),T&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},D,k({src:e,unoptimized:a,layout:q,width:$,quality:W,sizes:n,loader:E}),{decoding:"async","data-nimg":q,style:Q,className:w,loading:m||"lazy"}))),d?c.default.createElement(l.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+et.src+et.srcSet+et.sizes,rel:"preload",as:"image",href:et.srcSet?void 0:et.src},it))):null)};var c=g(n(7294)),l=g(n(5443)),u=n(6978),d=n(5809),f=n(7190);function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g(t){return t&&t.__esModule?t:{default:t}}function p(t){for(var e=arguments,n=function(n){var r=null!=e[n]?e[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),i.forEach((function(e){m(t,e,r[e])}))},r=1;r<arguments.length;r++)n(r);return t}var b=new Set,h=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var y=new Map([["default",function(t){var e=t.root,n=t.src,r=t.width,i=t.quality;0;return"".concat(e,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(t){var e=t.root,n=t.src,r=t.width,i=t.quality,o=new URL("".concat(e).concat(z(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(t){var e=t.root,n=t.src,r=t.width,i=t.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(e).concat(o).concat(z(n))}],["akamai",function(t){var e=t.root,n=t.src,r=t.width;return"".concat(e).concat(z(n),"?imwidth=").concat(r)}],["custom",function(t){var e=t.src;throw new Error('Image with src "'.concat(e,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function v(t){return void 0!==t.default}var w={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://tempo-bot.imgix.net/",loader:"imgix"}||d.imageConfigDefault,x=w.deviceSizes,j=w.imageSizes,A=w.loader,S=w.path,O=(w.domains,a(x).concat(a(j)));function k(t){var e=t.src,n=t.unoptimized,r=t.layout,i=t.width,o=t.quality,s=t.sizes,c=t.loader;if(n)return{src:e,srcSet:void 0,sizes:void 0};var l=function(t,e,n){if(n&&("fill"===e||"responsive"===e)){for(var r,i=/(^|\s)(1?\d?\d)vw/g,o=[];r=i.exec(n);r)o.push(parseInt(r[2]));if(o.length){var s,c=.01*(s=Math).min.apply(s,a(o));return{widths:O.filter((function(t){return t>=x[0]*c})),kind:"w"}}return{widths:O,kind:"w"}}return"number"!==typeof t||"fill"===e||"responsive"===e?{widths:x,kind:"w"}:{widths:a(new Set([t,2*t].map((function(t){return O.find((function(e){return e>=t}))||O[O.length-1]})))),kind:"x"}}(i,r,s),u=l.widths,d=l.kind,f=u.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:u.map((function(t,n){return"".concat(c({src:e,quality:o,width:t})," ").concat("w"===d?t:n+1).concat(d)})).join(", "),src:c({src:e,quality:o,width:u[f]})}}function _(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function N(t){var e=y.get(A);if(e)return e(p({root:S},t));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(A))}function z(t){return"/"===t[0]?t.slice(1):t}x.sort((function(t,e){return t-e})),O.sort((function(t,e){return t-e}))},7190:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(c){s=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(t){var e=t.rootMargin,n=t.disabled||!s,r=o.useRef(),l=i(o.useState(!1),2),u=l[0],d=l[1],f=o.useCallback((function(t){r.current&&(r.current(),r.current=void 0),n||u||t&&t.tagName&&(r.current=function(t,e,n){var r=function(t){var e=t.rootMargin||"",n=c.get(e);if(n)return n;var r=new Map,i=new IntersectionObserver((function(t){t.forEach((function(t){var e=r.get(t.target),n=t.isIntersecting||t.intersectionRatio>0;e&&n&&e(n)}))}),t);return c.set(e,n={id:e,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,a=r.elements;return a.set(t,e),o.observe(t),function(){a.delete(t),o.unobserve(t),0===a.size&&(o.disconnect(),c.delete(i))}}(t,(function(t){return t&&d(t)}),{rootMargin:e}))}),[n,e,u]);return o.useEffect((function(){if(!s&&!u){var t=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(t)}}}),[u]),[f,u]};var o=n(7294),a=n(9311),s="undefined"!==typeof IntersectionObserver;var c=new Map},6978:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.toBase64=function(t){return window.btoa(t)}},3568:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return z}});var r=n(5893),i=n(4184),o=n.n(i),a=n(7294);const s=["as","disabled"];function c({tagName:t,disabled:e,href:n,target:r,rel:i,onClick:o,tabIndex:a=0,type:s}){t||(t=null!=n||null!=r||null!=i?"a":"button");const c={tagName:t};if("button"===t)return[{type:s||"button",disabled:e},c];const l=r=>{(e||"a"===t&&function(t){return!t||"#"===t.trim()}(n))&&r.preventDefault(),e?r.stopPropagation():null==o||o(r)};return[{role:"button",disabled:void 0,tabIndex:e?void 0:a,href:"a"===t&&e?void 0:n,target:"a"===t?r:void 0,"aria-disabled":e||void 0,rel:"a"===t?i:void 0,onClick:l,onKeyDown:t=>{" "===t.key&&(t.preventDefault(),l(t))}},c]}const l=a.forwardRef(((t,e)=>{let{as:n,disabled:i}=t,o=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,s);const[a,{tagName:l}]=c(Object.assign({tagName:n,disabled:i},o));return(0,r.jsx)(l,Object.assign({},o,a,{ref:e}))}));l.displayName="Button";const u=a.createContext({prefixes:{}}),{Consumer:d,Provider:f}=u;function m(t,e){const{prefixes:n}=(0,a.useContext)(u);return t||n[e]||e}const g=a.forwardRef((({as:t,bsPrefix:e,variant:n,size:i,active:a,className:s,...l},u)=>{const d=m(e,"btn"),[f,{tagName:g}]=c({tagName:t,...l}),p=g;return(0,r.jsx)(p,{...l,...f,ref:u,className:o()(s,d,a&&"active",n&&`${d}-${n}`,i&&`${d}-${i}`,l.href&&l.disabled&&"disabled")})}));g.displayName="Button",g.defaultProps={variant:"primary",active:!1,disabled:!1};var p=g,b=n(2558),h=n.n(b),y=n(5675),v=function(){return(0,r.jsx)("div",{className:"d-flex justify-center align-center",children:(0,r.jsx)(y.default,{className:h().logo,src:"banner.png",height:640,width:1280})})},w=n(3146),x=n.n(w);const j=a.forwardRef((({bsPrefix:t,fluid:e,as:n="div",className:i,...a},s)=>{const c=m(t,"container"),l="string"===typeof e?`-${e}`:"-fluid";return(0,r.jsx)(n,{ref:s,...a,className:o()(i,e?`${c}${l}`:c)})}));j.displayName="Container",j.defaultProps={fluid:!1};var A=j;const S=["xxl","xl","lg","md","sm","xs"],O=a.forwardRef((({bsPrefix:t,className:e,as:n="div",...i},a)=>{const s=m(t,"row"),c=`${s}-cols`,l=[];return S.forEach((t=>{const e=i[t];let n;delete i[t],null!=e&&"object"===typeof e?({cols:n}=e):n=e;const r="xs"!==t?`-${t}`:"";null!=n&&l.push(`${c}${r}-${n}`)})),(0,r.jsx)(n,{ref:a,...i,className:o()(e,s,...l)})}));O.displayName="Row";var k=O,_=function(){return(0,r.jsx)("nav",{className:x().bar,children:(0,r.jsx)(A,{children:(0,r.jsx)(k,{children:(0,r.jsx)(y.default,{src:"logo.png",width:48,height:48})})})})},N=function(t){var e=t.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_,{}),e]})},z=function(){return(0,r.jsxs)(N,{children:[(0,r.jsx)(v,{}),(0,r.jsx)(p,{children:"Hey"})]})}},2558:function(t){t.exports={logo:"Header_logo__qeyda"}},3146:function(t){t.exports={bar:"Navbar_bar__pitud"}},5809:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.imageConfigDefault=e.VALID_LOADERS=void 0;e.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];e.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},5675:function(t,e,n){t.exports=n(8045)}},function(t){t.O(0,[774,888,179],(function(){return e=5301,t(t.s=e);var e}));var e=t.O();_N_E=e}]);