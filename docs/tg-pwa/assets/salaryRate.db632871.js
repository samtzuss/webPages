var R=Object.defineProperty,N=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var m=(e,t,r)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&m(e,r,t[r]);if(_)for(var r of _(t))x.call(t,r)&&m(e,r,t[r]);return e},p=(e,t)=>N(e,C(t));import{_ as B,a3 as S,o,c as n,d as c,F as d,l as f,D as K,e as k,t as v}from"./app.5eb4fb52.js";import{s as A}from"./index.6e075660.js";const L={filters:{capitalize:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},props:{heroes:{type:Array,default:()=>[{Name:"\u672C\u4EBA",Rate:"40%"},{Name:"\u6885\u5E73\u5F37",Rate:"30%"},{Name:"\u90B1\u5B8F\u5FB7",Rate:"10%"},{Name:"Sam",Rate:"20%"}]},columns:{type:Array,default:()=>["Name","Rate"]},filterKey:{type:String,default:""}},data:function(){const e={};return this.columns.forEach(function(t){e[t]=1}),{sortKey:"",sortOrders:e}},mounted(){},computed:p(h({},S(A,["textVar"])),{filteredHeroes:function(){const e=this.sortKey,t=this.filterKey&&this.filterKey.toLowerCase(),r=this.sortOrders[e]||1;let l=this.heroes;return t&&(l=l.filter(function(a){return Object.keys(a).some(function(s){return String(a[s]).toLowerCase().indexOf(t)>-1})})),e&&(l=l.slice().sort(function(a,s){return a=a[e],s=s[e],(a===s?0:a>s?1:-1)*r})),l}}),methods:{sortBy:function(e){this.sortKey=e,this.sortOrders[e]=this.sortOrders[e]*-1}}},V={style:{display:"inline-block"}},w=["onClick"];function z(e,t,r,l,a,s){return o(),n("table",V,[c("thead",null,[c("tr",null,[(o(!0),n(d,null,f(r.columns,(i,u)=>(o(),n("th",{key:u,class:K({active:e.sortKey==i}),onClick:y=>s.sortBy(i)},[k(v(i)+" ",1),c("span",{class:K(["arrow",e.sortOrders[i]>0?"asc":"dsc"])},null,2)],10,w))),128))])]),c("tbody",null,[(o(!0),n(d,null,f(s.filteredHeroes,(i,u)=>(o(),n("tr",{key:u},[(o(!0),n(d,null,f(r.columns,(y,O)=>(o(),n("td",{key:O},v(i[y]),1))),128))]))),128))])])}var H=B(L,[["render",z],["__scopeId","data-v-76a33d67"],["__file","salaryRate.vue"]]);export{H as default};
