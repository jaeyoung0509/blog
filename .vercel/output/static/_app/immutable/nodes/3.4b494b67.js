import{_ as U}from"../chunks/preload-helper.41c905a7.js";import{H as nt}from"../chunks/control.f5b05b5f.js";import{S as ot,i as rt,s as st,x as K,k as d,a as H,q as I,y as Q,Y as lt,l as h,h as _,c as M,m as P,r as O,z as it,n as p,J as c,b as B,A as W,u as F,d as X,f as ct,g as Z,O as ut,B as x,v as mt}from"../chunks/index.da3d1cc8.js";const _t=(n,e)=>{const o=n[e];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((r,u)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(u.bind(null,new Error("Unknown variable dynamic import: "+e)))})};function ft(n,e){return new nt(n,e)}new TextEncoder;async function pt({params:n}){try{const e=await _t(Object.assign({"../../posts/first-post.md":()=>U(()=>import("../chunks/first-post.7911e4bb.js"),["../chunks/first-post.7911e4bb.js","../chunks/index.da3d1cc8.js","../chunks/mdsvex.c7ff0795.js"],import.meta.url),"../../posts/second-post.md":()=>U(()=>import("../chunks/second-post.6cb1e9cf.js"),["../chunks/second-post.6cb1e9cf.js","../chunks/index.da3d1cc8.js","../chunks/mdsvex.c7ff0795.js"],import.meta.url),"../../posts/temporal.md":()=>U(()=>import("../chunks/temporal.e4737cd3.js"),["../chunks/temporal.e4737cd3.js","../chunks/index.da3d1cc8.js","../chunks/mdsvex.c7ff0795.js"],import.meta.url)}),`../../posts/${n.slug}.md`);return{content:e.default,meta:e.metadata}}catch{throw ft(404,`Could not find ${n.slug}`)}}const $t=Object.freeze(Object.defineProperty({__proto__:null,load:pt},Symbol.toStringTag,{value:"Module"}));function tt(n,e="medium",o="en"){return new Intl.DateTimeFormat(o,{dateStyle:e}).format(new Date(n))}function et(n,e,o){const r=n.slice();return r[1]=e[o],r}function at(n){let e,o,r=n[1]+"",u;return{c(){e=d("span"),o=I("#"),u=I(r),this.h()},l(f){e=h(f,"SPAN",{class:!0});var l=P(e);o=O(l,"#"),u=O(l,r),l.forEach(_),this.h()},h(){p(e,"class","surface-4 svelte-8uncrq")},m(f,l){B(f,e,l),c(e,o),c(e,u)},p(f,l){l&1&&r!==(r=f[1]+"")&&F(u,r)},d(f){f&&_(e)}}}function dt(n){let e,o,r,u,f,l,g,w,D=n[0].meta.title+"",k,S,E,V,A=tt(n[0].meta.date)+"",R,L,$,j,y,s,v;document.title=e=n[0].meta.title;let T=n[0].meta.categories,i=[];for(let t=0;t<T.length;t+=1)i[t]=at(et(n,T,t));var q=n[0].content;function G(t){return{}}return q&&(s=K(q,G())),{c(){o=d("meta"),r=d("meta"),f=H(),l=d("article"),g=d("hgroup"),w=d("h1"),k=I(D),S=H(),E=d("p"),V=I("Published at "),R=I(A),L=H(),$=d("div");for(let t=0;t<i.length;t+=1)i[t].c();j=H(),y=d("div"),s&&Q(s.$$.fragment),this.h()},l(t){const m=lt("svelte-ylbs26",document.head);o=h(m,"META",{property:!0,content:!0}),r=h(m,"META",{property:!0,content:!0}),m.forEach(_),f=M(t),l=h(t,"ARTICLE",{class:!0});var a=P(l);g=h(a,"HGROUP",{});var b=P(g);w=h(b,"H1",{class:!0});var J=P(w);k=O(J,D),J.forEach(_),S=M(b),E=h(b,"P",{class:!0});var C=P(E);V=O(C,"Published at "),R=O(C,A),C.forEach(_),b.forEach(_),L=M(a),$=h(a,"DIV",{class:!0});var N=P($);for(let z=0;z<i.length;z+=1)i[z].l(N);N.forEach(_),j=M(a),y=h(a,"DIV",{class:!0});var Y=P(y);s&&it(s.$$.fragment,Y),Y.forEach(_),a.forEach(_),this.h()},h(){p(o,"property","og:type"),p(o,"content","article"),p(r,"property","og:title"),p(r,"content",u=n[0].meta.title),p(w,"class","svelte-8uncrq"),p(E,"class","svelte-8uncrq"),p($,"class","tags svelte-8uncrq"),p(y,"class","prose"),p(l,"class","svelte-8uncrq")},m(t,m){c(document.head,o),c(document.head,r),B(t,f,m),B(t,l,m),c(l,g),c(g,w),c(w,k),c(g,S),c(g,E),c(E,V),c(E,R),c(l,L),c(l,$);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m($,null);c(l,j),c(l,y),s&&W(s,y,null),v=!0},p(t,[m]){if((!v||m&1)&&e!==(e=t[0].meta.title)&&(document.title=e),(!v||m&1&&u!==(u=t[0].meta.title))&&p(r,"content",u),(!v||m&1)&&D!==(D=t[0].meta.title+"")&&F(k,D),(!v||m&1)&&A!==(A=tt(t[0].meta.date)+"")&&F(R,A),m&1){T=t[0].meta.categories;let a;for(a=0;a<T.length;a+=1){const b=et(t,T,a);i[a]?i[a].p(b,m):(i[a]=at(b),i[a].c(),i[a].m($,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=T.length}if(m&1&&q!==(q=t[0].content)){if(s){mt();const a=s;X(a.$$.fragment,1,0,()=>{x(a,1)}),ct()}q?(s=K(q,G()),Q(s.$$.fragment),Z(s.$$.fragment,1),W(s,y,null)):s=null}},i(t){v||(s&&Z(s.$$.fragment,t),v=!0)},o(t){s&&X(s.$$.fragment,t),v=!1},d(t){_(o),_(r),t&&_(f),t&&_(l),ut(i,t),s&&x(s)}}}function ht(n,e,o){let{data:r}=e;return n.$$set=u=>{"data"in u&&o(0,r=u.data)},[r]}class yt extends ot{constructor(e){super(),rt(this,e,ht,dt,st,{data:0})}}export{yt as component,$t as universal};
