import{j as r}from"./jsx-runtime.K1e75nIr.js";import{r as ee}from"./index.NEDEFKed.js";const te=({project:t})=>{const{title:e,description:i,imageUrl:n,host:s,demoUrl:o,githubUrl:a,status:f,technologiesUsed:u}=t;return r.jsxs("div",{className:"bg-Off-white flex flex-col pl-5 py-3 w-[300px]",children:[r.jsx("h3",{className:"min-h-[70px] flex flex-col-reverse pr-5 text-end text-slate-700 text-2xl leading-snug",children:e}),r.jsxs("div",{className:"mt-2",style:{height:"-webkit-fill-available"},children:[r.jsx("hr",{className:"h-3 border-t-0 bg-blue-900 rounded-l-lg"}),r.jsxs("div",{className:"mt-5 pr-5",children:[r.jsx("p",{className:"text-slate-500",children:i}),r.jsxs("div",{className:"mt-5",children:[r.jsx("p",{className:"font-extrabold text-slate-800",children:"Built with:"}),r.jsx("div",{className:"mt-1 flex flex-row flex-wrap gap-x-3 gap-y-1",children:u?.map((m,x)=>r.jsx("div",{className:"text-slate-800",children:m},x))})]})]})]}),r.jsxs("div",{className:"mt-5 pr-5 flex justify-between",children:[r.jsx("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"my-auto text-blue-500 hover:text-blue-700",children:"Live Demo"}),a!==void 0&&a!==""?r.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:r.jsx("div",{className:"btn btn-neutral flex gap-2 w-fit h-fit"})}):r.jsx(r.Fragment,{})]})]})};var b,I;b={__e:function(t,e,i,n){for(var s,o,a;e=e.__;)if((s=e.__c)&&!s.__)try{if((o=s.constructor)&&o.getDerivedStateFromError!=null&&(s.setState(o.getDerivedStateFromError(t)),a=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(t,n||{}),a=s.__d),a)return s.__E=s}catch(f){t=f}throw t}},I=function(t){return t!=null&&t.constructor==null},typeof Promise=="function"&&Promise.prototype.then.bind(Promise.resolve());var k,d,T,P,L=0,q=[],y=[],c=b,V=c.__b,E=c.__r,R=c.diffed,J=c.__c,O=c.unmount,B=c.__;function ie(t,e){c.__h&&c.__h(d,t,L||e),L=0;var i=d.__H||(d.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:y}),i.__[t]}function W(t,e){var i=ie(k++,7);return oe(i.__H,e)?(i.__V=t(),i.i=e,i.__h=t,i.__V):i.__}function re(){for(var t;t=q.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(j),t.__H.__h.forEach(H),t.__H.__h=[]}catch(e){t.__H.__h=[],c.__e(e,t.__v)}}c.__b=function(t){d=null,V&&V(t)},c.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),B&&B(t,e)},c.__r=function(t){E&&E(t),k=0;var e=(d=t.__c).__H;e&&(T===d?(e.__h=[],d.__h=[],e.__.forEach(function(i){i.__N&&(i.__=i.__N),i.__V=y,i.__N=i.i=void 0})):(e.__h.forEach(j),e.__h.forEach(H),e.__h=[],k=0)),T=d},c.diffed=function(t){R&&R(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(q.push(e)!==1&&P===c.requestAnimationFrame||((P=c.requestAnimationFrame)||ne)(re)),e.__H.__.forEach(function(i){i.i&&(i.__H=i.i),i.__V!==y&&(i.__=i.__V),i.i=void 0,i.__V=y})),T=d=null},c.__c=function(t,e){e.some(function(i){try{i.__h.forEach(j),i.__h=i.__h.filter(function(n){return!n.__||H(n)})}catch(n){e.some(function(s){s.__h&&(s.__h=[])}),e=[],c.__e(n,i.__v)}}),J&&J(t,e)},c.unmount=function(t){O&&O(t);var e,i=t.__c;i&&i.__H&&(i.__H.__.forEach(function(n){try{j(n)}catch(s){e=s}}),i.__H=void 0,e&&c.__e(e,i.__v))};var D=typeof requestAnimationFrame=="function";function ne(t){var e,i=function(){clearTimeout(n),D&&cancelAnimationFrame(e),setTimeout(t)},n=setTimeout(i,100);D&&(e=requestAnimationFrame(i))}function j(t){var e=d,i=t.__c;typeof i=="function"&&(t.__c=void 0,i()),d=e}function H(t){var e=d;t.__c=t.__(),d=e}function oe(t,e){return!t||t.length!==e.length||e.some(function(i,n){return i!==t[n]})}function N(){throw new Error("Cycle detected")}var se=Symbol.for("preact-signals");function F(){if(g>1)g--;else{for(var t,e=!1;_!==void 0;){var i=_;for(_=void 0,M++;i!==void 0;){var n=i.o;if(i.o=void 0,i.f&=-3,!(8&i.f)&&Q(i))try{i.c()}catch(s){e||(t=s,e=!0)}i=n}}if(M=0,g--,e)throw t}}var l=void 0,_=void 0,g=0,M=0,U=0;function G(t){if(l!==void 0){var e=t.n;if(e===void 0||e.t!==l)return e={i:0,S:t,p:l.s,n:void 0,t:l,e:void 0,x:void 0,r:e},l.s!==void 0&&(l.s.n=e),l.s=e,t.n=e,32&l.f&&t.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=l.s,e.n=void 0,l.s.n=e,l.s=e),e}}function h(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}h.prototype.brand=se;h.prototype.h=function(){return!0};h.prototype.S=function(t){this.t!==t&&t.e===void 0&&(t.x=this.t,this.t!==void 0&&(this.t.e=t),this.t=t)};h.prototype.U=function(t){if(this.t!==void 0){var e=t.e,i=t.x;e!==void 0&&(e.x=i,t.e=void 0),i!==void 0&&(i.e=e,t.x=void 0),t===this.t&&(this.t=i)}};h.prototype.subscribe=function(t){var e=this;return A(function(){var i=e.value,n=32&this.f;this.f&=-33;try{t(i)}finally{this.f|=n}})};h.prototype.valueOf=function(){return this.value};h.prototype.toString=function(){return this.value+""};h.prototype.toJSON=function(){return this.value};h.prototype.peek=function(){return this.v};Object.defineProperty(h.prototype,"value",{get:function(){var t=G(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(l instanceof p&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){M>100&&N(),this.v=t,this.i++,U++,g++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{F()}}}});function z(t){return new h(t)}function Q(t){for(var e=t.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function Y(t){for(var e=t.s;e!==void 0;e=e.n){var i=e.S.n;if(i!==void 0&&(e.r=i),e.S.n=e,e.i=-1,e.n===void 0){t.s=e;break}}}function K(t){for(var e=t.s,i=void 0;e!==void 0;){var n=e.p;e.i===-1?(e.S.U(e),n!==void 0&&(n.n=e.n),e.n!==void 0&&(e.n.p=n)):i=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=n}t.s=i}function p(t){h.call(this,void 0),this.x=t,this.s=void 0,this.g=U-1,this.f=4}(p.prototype=new h).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===U))return!0;if(this.g=U,this.f|=1,this.i>0&&!Q(this))return this.f&=-2,!0;var t=l;try{Y(this),l=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(i){this.v=i,this.f|=16,this.i++}return l=t,K(this),this.f&=-2,!0};p.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}h.prototype.S.call(this,t)};p.prototype.U=function(t){if(this.t!==void 0&&(h.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};p.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};p.prototype.peek=function(){if(this.h()||N(),16&this.f)throw this.v;return this.v};Object.defineProperty(p.prototype,"value",{get:function(){1&this.f&&N();var t=G(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function ae(t){return new p(t)}function X(t){var e=t.u;if(t.u=void 0,typeof e=="function"){g++;var i=l;l=void 0;try{e()}catch(n){throw t.f&=-2,t.f|=8,$(t),n}finally{l=i,F()}}}function $(t){for(var e=t.s;e!==void 0;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,X(t)}function le(t){if(l!==this)throw new Error("Out-of-order effect");K(this),l=t,this.f&=-2,8&this.f&&$(this),F()}function w(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}w.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.u=e)}finally{t()}};w.prototype.S=function(){1&this.f&&N(),this.f|=1,this.f&=-9,X(this),Y(this),g++;var t=l;return l=this,le.bind(this,t)};w.prototype.N=function(){2&this.f||(this.f|=2,this.o=_,_=this)};w.prototype.d=function(){this.f|=8,1&this.f||$(this)};function A(t){var e=new w(t);try{e.c()}catch(i){throw e.d(),i}return e.d.bind(e)}var C;function v(t,e){b[t]=e.bind(null,b[t]||function(){})}function S(t){C&&C(),C=t&&t.S()}function Z(t){var e=this,i=t.data,n=he(i);n.value=i;var s=W(function(){for(var o=e.__v;o=o.__;)if(o.__c){o.__c.__$f|=4;break}return e.__$u.c=function(){var a;!I(s.peek())&&((a=e.base)==null?void 0:a.nodeType)===3?e.base.data=s.peek():(e.__$f|=1,e.setState({}))},ae(function(){var a=n.value.value;return a===0?0:a===!0?"":a||""})},[]);return s.value}Z.displayName="_st";Object.defineProperties(h.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Z},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});v("__b",function(t,e){if(typeof e.type=="string"){var i,n=e.props;for(var s in n)if(s!=="children"){var o=n[s];o instanceof h&&(i||(e.__np=i={}),i[s]=o,n[s]=o.peek())}}t(e)});v("__r",function(t,e){S();var i,n=e.__c;n&&(n.__$f&=-2,(i=n.__$u)===void 0&&(n.__$u=i=function(s){var o;return A(function(){o=this}),o.c=function(){n.__$f|=1,n.setState({})},o}())),S(i),t(e)});v("__e",function(t,e,i,n){S(),t(e,i,n)});v("diffed",function(t,e){S();var i;if(typeof e.type=="string"&&(i=e.__e)){var n=e.__np,s=e.props;if(n){var o=i.U;if(o)for(var a in o){var f=o[a];f!==void 0&&!(a in n)&&(f.d(),o[a]=void 0)}else i.U=o={};for(var u in n){var m=o[u],x=n[u];m===void 0?(m=ce(i,u,x,s),o[u]=m):m.o(x,s)}}}t(e)});function ce(t,e,i,n){var s=e in t&&t.ownerSVGElement===void 0,o=z(i);return{o:function(a,f){o.value=a,n=f},d:A(function(){var a=o.value.value;n[e]!==a&&(n[e]=a,s?t[e]=a:a?t.setAttribute(e,a):t.removeAttribute(e))})}}v("unmount",function(t,e){if(typeof e.type=="string"){var i=e.__e;if(i){var n=i.U;if(n){i.U=void 0;for(var s in n){var o=n[s];o&&o.d()}}}}else{var a=e.__c;if(a){var f=a.__$u;f&&(a.__$u=void 0,f.d())}}t(e)});v("__h",function(t,e,i,n){(n<3||n===9)&&(e.__$f|=2),t(e,i,n)});function he(t){return W(function(){return z(t)},[])}const de=[{title:"Product preview card",description:r.jsxs(r.Fragment,{children:["This is a challenge from"," ",r.jsx("a",{href:"https://www.frontendmentor.io/",className:"underline underline-offset-4",target:"_blank",children:"Frontend Mentor"}),". Access the challenge from"," ",r.jsx("a",{href:"https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa",className:"underline underline-offset-4",target:"_blank",children:"here"})]}),imageUrl:"project1.jpg",host:"Vercel",demoUrl:"https://mrjays-product-preview-card-component-main.vercel.app/",githubUrl:"https://github.com/chungvuiloong/product-preview-card-component-main",category:"components",year:2023,status:"Completed",technologiesUsed:["HTML","TailwindCSS"]},{title:"Stats preview card",description:r.jsxs(r.Fragment,{children:["This is a challenge from"," ",r.jsx("a",{href:"https://www.frontendmentor.io/",className:"underline underline-offset-4",children:"Frontend Mentor"}),". Access the challenge from"," ",r.jsx("a",{href:"https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62",className:"underline underline-offset-4",children:"here"})]}),imageUrl:"project1.jpg",host:"Vercel",demoUrl:"https://mrjays-stats-preview-card-component.vercel.app/",githubUrl:"https://github.com/chungvuiloong/stats-preview-card-component",category:"components",year:2023,status:"Completed",technologiesUsed:["HTML","TailwindCSS","Javascript"]},{title:"3-column preview card",description:r.jsxs(r.Fragment,{children:["This is a challenge from"," ",r.jsx("a",{href:"https://www.frontendmentor.io/",className:"underline underline-offset-4",children:"Frontend Mentor"}),". Access the challenge from"," ",r.jsx("a",{href:"https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-",className:"underline underline-offset-4",children:"here"})]}),imageUrl:"project1.jpg",host:"Vercel",demoUrl:"https://mrjays-3-column-preview-card-component.vercel.app/",githubUrl:"https://github.com/chungvuiloong/3-column-preview-card-component",category:"components",year:2023,status:"Completed",technologiesUsed:["Next.js","React","TailwindCSS","HTML","Javascript"]},{title:"Single price grid",description:r.jsxs(r.Fragment,{children:["This is a challenge from"," ",r.jsx("a",{href:"https://www.frontendmentor.io/",className:"underline underline-offset-4",children:"Frontend Mentor"}),". Access the challenge from"," ",r.jsx("a",{href:"https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc",className:"underline underline-offset-4",children:"here"})]}),imageUrl:"project1.jpg",host:"Vercel",demoUrl:"https://mrjays-single-price-grid-component.vercel.app/",githubUrl:"https://github.com/chungvuiloong/single-price-grid-component",category:"components",year:2023,status:"Completed",technologiesUsed:["Next.js","React","TailwindCSS","HTML","Javascript"]},{title:"QR code",description:r.jsxs(r.Fragment,{children:["This is a challenge from"," ",r.jsx("a",{href:"https://www.frontendmentor.io/",className:"underline underline-offset-4",children:"Frontend Mentor"}),". Access the challenge from"," ",r.jsx("a",{href:"https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H",className:"underline underline-offset-4",children:"here"})]}),imageUrl:"project1.jpg",host:"Vercel",demoUrl:"https://mrjays-qrcode-component.vercel.app/",githubUrl:"https://github.com/chungvuiloong/qr-code-component",category:"components",year:2023,status:"Completed",technologiesUsed:["Next.js","React","TailwindCSS","Material Tailwind","HTML"]},{title:"Order Summary",description:r.jsxs(r.Fragment,{children:["This is a challenge from"," ",r.jsx("a",{href:"https://www.frontendmentor.io/",className:"underline underline-offset-4",children:"Frontend Mentor"}),". Access the challenge from"," ",r.jsx("a",{href:"https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj",className:"underline underline-offset-4",children:"here"})]}),imageUrl:"project1.jpg",host:"Vercel",demoUrl:"https://mrjays-order-summary-component.vercel.app/",githubUrl:"https://github.com/chungvuiloong/order-summary-component",category:"components",year:2023,status:"Completed",technologiesUsed:["TailwindCSS","Material Tailwind","HTML"]},{title:"Workit Landing Page",description:r.jsxs(r.Fragment,{children:["This is a challenge from"," ",r.jsx("a",{href:"https://www.frontendmentor.io/",className:"underline underline-offset-4",target:"_blank",children:"Frontend Mentor"}),". Access the challenge from"," ",r.jsx("a",{href:"https://www.frontendmentor.io/challenges/workit-landing-page-2fYnyle5lu",className:"underline underline-offset-4",target:"_blank",children:"here"})]}),imageUrl:"project1.jpg",host:"Vercel",demoUrl:"https://mrjays-workit-landing-page.vercel.app/",githubUrl:"",category:"web",year:2023,status:"Completed",technologiesUsed:["Next.js","TailwindCSS","Spline","HeyGen","HTML"]},{title:"EasyBank Landing Page",description:r.jsxs(r.Fragment,{children:["This is a challenge from"," ",r.jsx("a",{href:"https://www.frontendmentor.io/",className:"underline underline-offset-4",children:"Frontend Mentor"}),". Access the challenge from"," ",r.jsx("a",{href:"https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN",className:"underline underline-offset-4",children:"here"})]}),imageUrl:"project1.jpg",host:"Vercel",demoUrl:"https://mrjays-easybank-landing-page.vercel.app/",githubUrl:"https://github.com/chungvuiloong/easybank-landing-page",category:"web",year:2023,status:"Completed",technologiesUsed:["Next.js","DaisyUI","TailwindCSS","HTML"]},{title:"Huddle Landing Page",description:r.jsxs(r.Fragment,{children:["This is a challenge from"," ",r.jsx("a",{href:"https://www.frontendmentor.io/",className:"underline underline-offset-4",children:"Frontend Mentor"}),". Access the challenge from"," ",r.jsx("a",{href:"https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0",className:"underline underline-offset-4",children:"here"})]}),imageUrl:"project1.jpg",host:"Vercel",demoUrl:"https://mrjays-huddle-landing-page.vercel.app/",githubUrl:"https://github.com/chungvuiloong/huddle-landing-page",category:"web",year:2023,status:"Completed",technologiesUsed:["TailwindCSS","HTML"]},{title:"News Landing Page",description:r.jsxs(r.Fragment,{children:["This is a challenge from"," ",r.jsx("a",{href:"https://www.frontendmentor.io/",className:"underline underline-offset-4",children:"Frontend Mentor"}),". Access the challenge from"," ",r.jsx("a",{href:"https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl",className:"underline underline-offset-4",children:"here"})]}),imageUrl:"project1.jpg",host:"Vercel",demoUrl:"https://mrjays-news-landing-page.vercel.app/",githubUrl:"https://github.com/chungvuiloong/news-landing-page",category:"web",year:2023,status:"Completed",technologiesUsed:["Next.js","React","Javascript","TailwindCSS","HTML"]},{title:"Retink Media Landing Page",description:"This is the entry task for Retink Media.",imageUrl:"project1.jpg",host:"Vercel",demoUrl:"https://retink-landingpage.vercel.app/",githubUrl:"https://github.com/chungvuiloong/retink_landingpage",category:"web",year:2023,status:"Completed",technologiesUsed:["React","Javascript","HTML","Bootstrap"]},{title:"Liana Technologies Landing Page",description:"This is the entry task for Liana Technologies.",imageUrl:"project1.jpg",host:"Vercel",demoUrl:"https://lianatechnologylandingpage.vercel.app/",githubUrl:"https://github.com/chungvuiloong/landingpage_liana_tech",category:"web",year:2022,status:"Completed",technologiesUsed:["React","Javascript","HTML","Bootstrap","RSS"]},{title:"BMI",description:r.jsxs(r.Fragment,{children:["This is a premium challenge from"," ",r.jsx("a",{href:"https://www.frontendmentor.io/",className:"underline underline-offset-4",children:"Frontend Mentor"}),". Access the challenge from"," ",r.jsxs("a",{href:"https://www.frontendmentor.io/challenges/body-mass-index-calculator-brrBkfSz1T",className:"underline underline-offset-4",children:["here"," "]})]}),imageUrl:"",host:"Vercel",demoUrl:"https://mrjays-bmi-calculator.vercel.app/",githubUrl:"https://github.com/chungvuiloong/bmi_calculator",category:"web app",year:2023,status:"Completed",technologiesUsed:["Next.js","TailwindCSS","Javascript","HTML"]},{title:"Countries App",description:"A web app that display info about countries.",imageUrl:"project1.jpg",host:"Vercel",demoUrl:"https://countries-basic.vercel.app/",githubUrl:"https://github.com/jirimicvl/countriesBasic/",category:"web app",year:2022,status:"In redesigning progress",technologiesUsed:["React","Redux","Javascript","RESTful API"]},{title:"Simple Portfolio",description:"A simple portfolio to display all the work done.",imageUrl:"project1.jpg",host:"Vercel",demoUrl:"https://mrjays-simple-portfolio.vercel.app/",githubUrl:"",category:"personal",year:2022,status:"In redesigning progress",technologiesUsed:["React","TailwindCSS","Javascript","DaisyUI","HTML"]},{title:"Travel App",description:"Travel App - All in one app for your travel conveniences.",imageUrl:"project1.jpg",host:"Netlify",demoUrl:"https://mrjaytravelapp.netlify.app/",githubUrl:"",category:"personal",year:2022,status:"In redesigning progress",technologiesUsed:["React","Javascript","Material UI","Redux","Bootstrap","RESTful API"]}],fe=({categories:t,onChangeCategory:e,activeCategory:i})=>r.jsx("div",{className:"flex flex-col border-l-4 border-l-[#00224c]",children:t.map(n=>r.jsx("button",{className:`md:px-6 px-4 py-2 rounded-tl-none rounded-bl-none rounded-r-3xl text-left xl:text-xl lg:text-md text-xs ${i===n.id?"bg-[#00224c] text-white":"bg-inherit text-[#00224c]"}`,onClick:()=>e(n.id),children:n.label},n.id))}),me=()=>{const[t,e]=ee.useState("web"),i=[{id:"web",label:"Web Development"},{id:"web app",label:"Web Application"},{id:"components",label:"Components"},{id:"personal",label:"Personal Projects"}],n=de.filter(o=>o.category===t),s=o=>{e(o)};return r.jsx("section",{className:"py-24 sm:py-32 px-6 lg:px-10",style:{backgroundColor:"#00dcda"},children:r.jsxs("div",{className:"mx-auto container",children:[r.jsxs("div",{className:"mb-10 flex lg:items-center gap-10",children:[r.jsxs("h2",{className:`xl:text-[16rem] lg:text-[13rem] md:text-[10rem] text-[5rem] break-words
                        font-sans font-500 md:leading-[16rem] leading-[5rem] text-[#00224c] self-center tracking-tighter`,children:["Po",r.jsx("span",{className:"tracking-wider",children:"rt"}),r.jsx("span",{className:"sm:hidden",children:r.jsx("br",{})}),"folio"]}),r.jsx("div",{className:"self-center",children:r.jsx(fe,{categories:i,onChangeCategory:s,activeCategory:t})})]}),r.jsx("ul",{className:"flex flex-row flex-wrap justify-center mx-auto gap-10",children:n.map((o,a)=>r.jsx(te,{project:o},a))})]})})};export{me as default};
