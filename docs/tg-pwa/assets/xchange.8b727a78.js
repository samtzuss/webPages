import{s as y}from"./index.f7bf1ed9.js";import{_ as $,e as v,$ as g,o,c as n,b as c,F as d,k as f,C as _,d as x,t as p}from"./app.f26eaebf.js";const F=v({setup(){const t=y(),{t:r,locale:l}=g();return{t:r,locale:l,store:t}},mounted(){this.$i18n.locale=this.$lang,this.list_data=[{From:this.$t("xrate_usd"),To:this.$t("xrate_twd"),Rate:"1 : 27.5"},{From:this.$t("xrate_usd"),To:this.$t("xrate_vnd"),Rate:"1 : 20118.705"},{From:this.$t("xrate_twd"),To:this.$t("xrate_vnd"),Rate:"1 : 719.4245"}]},filters:{capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}},props:{heroes:{type:Array,default:()=>[{From:"\u7F8E\u91D1",To:"\u53F0\u5E63",Rate:"1 : 27.5"},{From:"\u7F8E\u91D1",To:"\u8D8A\u5357\u76FE",Rate:"1 : 20118.705"},{From:"\u53F0\u5E63",To:"\u8D8A\u5357\u76FE",Rate:"1 : 719.4245"}]},columns:{type:Array,default:()=>["From","To","Rate"]},filterKey:{type:String,default:""}},data:function(){const t={};return this.columns.forEach(function(r){t[r]=1}),{sortKey:"",sortOrders:t,list_data:[]}},computed:{filteredHeroes:function(){const t=this.sortKey,r=this.filterKey&&this.filterKey.toLowerCase(),l=this.sortOrders[t]||1;let a=this.list_data;return r&&(a=a.filter(function(e){return Object.keys(e).some(function(s){return String(e[s]).toLowerCase().indexOf(r)>-1})})),t&&(a=a.slice().sort(function(e,s){return e=e[t],s=s[t],(e===s?0:e>s?1:-1)*l})),a}},methods:{sortBy:function(t){this.sortKey=t,this.sortOrders[t]=this.sortOrders[t]*-1}}}),K={style:{display:"inline-block"}},C=["onClick"];function O(t,r,l,a,e,s){return o(),n("table",K,[c("thead",null,[c("tr",null,[(o(!0),n(d,null,f(t.columns,(i,u)=>(o(),n("th",{key:u,class:_({active:t.sortKey==i}),onClick:h=>t.sortBy(i)},[x(p(i)+" ",1),c("span",{class:_(["arrow",t.sortOrders[i]>0?"asc":"dsc"])},null,2)],10,C))),128))])]),c("tbody",null,[(o(!0),n(d,null,f(t.filteredHeroes,(i,u)=>(o(),n("tr",{key:u},[(o(!0),n(d,null,f(t.columns,(h,m)=>(o(),n("td",{key:m},p(i[h]),1))),128))]))),128))])])}var k=$(F,[["render",O],["__scopeId","data-v-0ded83bc"],["__file","xchange.vue"]]);export{k as default};
