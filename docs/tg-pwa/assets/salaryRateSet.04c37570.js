import{s as r}from"./index.91f1e751.js";import{_ as d,e as p,$ as i,o as y,c as m,b as e,t as n,J as s,a1 as o,a2 as f,a3 as R}from"./app.95ed437d.js";const v=p({setup(){const t=r(),{t:l,locale:u}=i();return{t:l,locale:u,store:t}},mounted(){this.$i18n.locale=this.$lang},filters:{capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}},props:{},data:function(){return{salaryRate:[40,30,10,20]}},computed:{},methods:{salaryRateSet:()=>{alert(globalThis.$t("done"))}}}),S=t=>(f("data-v-08cc8ff5"),t=t(),R(),t),$={style:{display:"inline-block"}},b=S(()=>e("td",null,null,-1)),_=["value"];function h(t,l,u,I,U,V){return y(),m("table",$,[e("thead",null,[e("tr",null,[e("th",null,n(t.t("name")),1),e("th",null,n(t.t("rate")),1)])]),e("tbody",null,[e("tr",null,[e("td",null,n(t.t("name_maya")),1),e("td",null,[s(e("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=a=>t.salaryRate[0]=a)},null,512),[[o,t.salaryRate[0]]])])]),e("tr",null,[e("td",null,n(t.t("name_may")),1),e("td",null,[s(e("input",{type:"text","onUpdate:modelValue":l[1]||(l[1]=a=>t.salaryRate[1]=a)},null,512),[[o,t.salaryRate[1]]])])]),e("tr",null,[e("td",null,n(t.t("name_tim")),1),e("td",null,[s(e("input",{type:"text","onUpdate:modelValue":l[2]||(l[2]=a=>t.salaryRate[2]=a)},null,512),[[o,t.salaryRate[2]]])])]),e("tr",null,[e("td",null,n(t.t("name_sam")),1),e("td",null,[s(e("input",{type:"text","onUpdate:modelValue":l[3]||(l[3]=a=>t.salaryRate[3]=a)},null,512),[[o,t.salaryRate[3]]])])]),e("tr",null,[b,e("td",null,[e("input",{type:"button",value:t.$t("submit"),onClick:l[4]||(l[4]=(...a)=>t.salaryRateSet&&t.salaryRateSet(...a))},null,8,_)])])])])}var B=d(v,[["render",h],["__scopeId","data-v-08cc8ff5"],["__file","salaryRateSet.vue"]]);export{B as default};