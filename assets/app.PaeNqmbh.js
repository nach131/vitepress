import{v as s,ai as i,aj as u,ak as c,al as l,am as f,an as d,ao as m,ap as h,aq as A,ar as v,Y as g,d as P,u as w,j as y,z as C,as as R,at as _,au as E,av as b}from"./chunks/framework.NMmHTmUq.js";import{t as j}from"./chunks/theme.8WtSmAIQ.js";const D={extends:j};function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=p(D),T=P({name:"VitePressApp",setup(){const{site:e}=w();return y(()=>{C(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),e.value.router.prefetchLinks&&R(),_(),E(),o.setup&&o.setup(),()=>b(o.Layout)}});async function x(){const e=O(),a=L();a.provide(u,e);const t=c(e.route);return a.provide(l,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function L(){return h(T)}function O(){let e=s,a;return A(t=>{let n=v(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=g(()=>import(n),__vite__mapDeps([]))),s&&(e=!1),r},o.NotFound)}s&&x().then(({app:e,router:a,data:t})=>{a.go().then(()=>{i(a.route,t.site),e.mount("#app")})});export{x as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}