import{S as J,i as M,s as N,a as k,k as m,Y as U,h as p,c as S,l as g,m as b,n as v,b as q,J as u,X as L,O as X,q as O,r as P,u as y}from"../chunks/index.da3d1cc8.js";import{t as T}from"../chunks/config.44c7d6be.js";async function Y({fetch:c}){return{posts:await(await c("api/posts")).json()}}const H=Object.freeze(Object.defineProperty({__proto__:null,load:Y},Symbol.toStringTag,{value:"Module"}));function z(c,s,a){const o=c.slice();return o[1]=s[a],o}function A(c){let s,a,o=c[1].title+"",n,_,l,e,r=c[1].date+"",t,d,h,j=c[1].description+"",E,x;return{c(){s=m("li"),a=m("a"),n=O(o),l=k(),e=m("p"),t=O(r),d=k(),h=m("p"),E=O(j),x=k(),this.h()},l(f){s=g(f,"LI",{class:!0});var i=b(s);a=g(i,"A",{href:!0,class:!0});var w=b(a);n=P(w,o),w.forEach(p),l=S(i),e=g(i,"P",{class:!0});var C=b(e);t=P(C,r),C.forEach(p),d=S(i),h=g(i,"P",{class:!0});var I=b(h);E=P(I,j),I.forEach(p),x=S(i),i.forEach(p),this.h()},h(){v(a,"href",_=c[1].slug),v(a,"class","title svelte-1b7sxgj"),v(e,"class","date svelte-1b7sxgj"),v(h,"class","description svelte-1b7sxgj"),v(s,"class","post svelte-1b7sxgj")},m(f,i){q(f,s,i),u(s,a),u(a,n),u(s,l),u(s,e),u(e,t),u(s,d),u(s,h),u(h,E),u(s,x)},p(f,i){i&1&&o!==(o=f[1].title+"")&&y(n,o),i&1&&_!==(_=f[1].slug)&&v(a,"href",_),i&1&&r!==(r=f[1].date+"")&&y(t,r),i&1&&j!==(j=f[1].description+"")&&y(E,j)},d(f){f&&p(s)}}}function B(c){let s,a,o,n;document.title=s=T;let _=c[0].posts,l=[];for(let e=0;e<_.length;e+=1)l[e]=A(z(c,_,e));return{c(){a=k(),o=m("section"),n=m("ul");for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){U("svelte-mrkvkn",document.head).forEach(p),a=S(e),o=g(e,"SECTION",{});var t=b(o);n=g(t,"UL",{class:!0});var d=b(n);for(let h=0;h<l.length;h+=1)l[h].l(d);d.forEach(p),t.forEach(p),this.h()},h(){v(n,"class","posts svelte-1b7sxgj")},m(e,r){q(e,a,r),q(e,o,r),u(o,n);for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(n,null)},p(e,[r]){if(r&0&&s!==(s=T)&&(document.title=s),r&1){_=e[0].posts;let t;for(t=0;t<_.length;t+=1){const d=z(e,_,t);l[t]?l[t].p(d,r):(l[t]=A(d),l[t].c(),l[t].m(n,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=_.length}},i:L,o:L,d(e){e&&p(a),e&&p(o),X(l,e)}}}function D(c,s,a){let{data:o}=s;return c.$$set=n=>{"data"in n&&a(0,o=n.data)},[o]}class K extends J{constructor(s){super(),M(this,s,D,B,N,{data:0})}}export{K as component,H as universal};
