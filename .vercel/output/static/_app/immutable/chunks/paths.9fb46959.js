import{X as c,s as g}from"./index.da3d1cc8.js";const e=[];function d(i,l=c){let n;const o=new Set;function r(t){if(g(i,t)&&(i=t,n)){const b=!e.length;for(const s of o)s[1](),e.push(s,i);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function a(t){r(t(i))}function _(t,b=c){const s=[t,b];return o.add(s),o.size===1&&(n=l(r)||c),t(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:a,subscribe:_}}var f;const h=((f=globalThis.__sveltekit_1gk396l)==null?void 0:f.base)??"";var u;const k=((u=globalThis.__sveltekit_1gk396l)==null?void 0:u.assets)??h;export{k as a,h as b,d as w};
