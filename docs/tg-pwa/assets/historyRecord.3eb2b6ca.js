import{_ as p,o as s,c as o,b as l,F as d,k as f,C as h,d as x,t as y}from"./app.bb2ab747.js";const C={filters:{capitalize:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},props:{heroes:{type:Array,default:()=>[{Name:"Chuck Norris",Txtime:"2021-12-21 15:39",Amount:"3295"},{Name:"Bruce Lees",Txtime:"2021-10-07 10:54",Amount:"9000"},{Name:"Jackie Chan",Txtime:"2022-01-13 19:05",Amount:"7000"},{Name:"Jet Li",Txtime:"2021-06-19 09:34",Amount:"8000"}]},columns:{type:Array,default:()=>["Name","Txtime","Amount"]},filterKey:{type:String,default:""}},data:function(){const e={};return this.columns.forEach(function(a){e[a]=1}),{sortKey:"",sortOrders:e}},computed:{filteredHeroes:function(){const e=this.sortKey,a=this.filterKey&&this.filterKey.toLowerCase(),c=this.sortOrders[e]||1;let n=this.heroes;return a&&(n=n.filter(function(r){return Object.keys(r).some(function(t){return String(r[t]).toLowerCase().indexOf(a)>-1})})),e&&(n=n.slice().sort(function(r,t){return r=r[e],t=t[e],(r===t?0:r>t?1:-1)*c})),n}},methods:{sortBy:function(e){this.sortKey=e,this.sortOrders[e]=this.sortOrders[e]*-1}}},K={style:{display:"inline-block"}},v=["onClick"];function A(e,a,c,n,r,t){return s(),o("table",K,[l("thead",null,[l("tr",null,[(s(!0),o(d,null,f(c.columns,(i,u)=>(s(),o("th",{key:u,class:h({active:e.sortKey==i}),onClick:m=>t.sortBy(i)},[x(y(i)+" ",1),l("span",{class:h(["arrow",e.sortOrders[i]>0?"asc":"dsc"])},null,2)],10,v))),128))])]),l("tbody",null,[(s(!0),o(d,null,f(t.filteredHeroes,(i,u)=>(s(),o("tr",{key:u},[(s(!0),o(d,null,f(c.columns,(m,_)=>(s(),o("td",{key:_},y(i[m]),1))),128))]))),128))])])}var O=p(C,[["render",A],["__scopeId","data-v-20c0c67a"],["__file","historyRecord.vue"]]);export{O as default};