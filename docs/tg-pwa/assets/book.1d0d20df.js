import{s as p}from"./index.e6c6625f.js";import{_ as c,e as b,$ as y,o as $,c as f,b as e,d,t as m,J as h,a1 as u,a2 as x,a3 as g}from"./app.bb2ab747.js";const I=b({setup(){const t=p(),{t:n,locale:s}=y();return{t:n,locale:s,store:t}},data(){return{balance:9836,tx_may:"",tx_timmy:"",tx_tim:"",tx_sam:"",tx_fu:"",tx_maya:"",tx_time:""}},mounted(){this.$i18n.locale=this.$lang},computed:{},methods:{txGo:function(){const t=this.balance;let n=[],s=0,a;const _="https://api.telegram.org/bot5042646314:AAEYedlfShx3lj_vO3pr2ydQEn6kbFaNlBQ/sendMessage",o={may:{name:this.$t("name_may"),tgId:"5099912694"},timmy:{name:this.$t("name_timmy"),tgId:"5062449675"},tim:{name:this.$t("name_tim"),tgId:"1350630761"},sam:{name:this.$t("name_sam"),tgId:"1330056967"},fu:{name:this.$t("name_fu"),tgId:"5017176344"},maya:{name:this.$t("name_maya"),tgId:"5082311706"}};if(this.tx_may&&this.tx_may!="0"&&(a=parseInt(this.tx_may),s+=a,this.balance-=a,n.push({name:o.may.name,tgId:o.may.tgId,txAmt:a})),this.timmy&&this.timmy!="0"&&(a=parseInt(this.timmy),s+=a,this.balance-=a,n.push({name:o.timmy.name,tgId:o.timmy.tgId,txAmt:a})),this.tx_tim&&this.tx_tim!="0"&&(a=parseInt(this.tx_tim),s+=a,this.balance-=a,n.push({name:o.tim.name,tgId:o.tim.tgId,txAmt:a})),this.tx_sam&&this.tx_sam!="0"&&(a=parseInt(this.tx_sam),s+=a,this.balance-=a,n.push({name:o.sam.name,tgId:o.sam.tgId,txAmt:a})),this.tx_fu&&this.tx_fu!="0"&&(a=parseInt(this.tx_fu),s+=a,this.balance-=a,n.push({name:o.fu.name,tgId:o.fu.tgId,txAmt:a})),this.tx_maya&&this.tx_maya!="0"&&(a=parseInt(this.tx_maya),s+=a,this.balance-=a,n.push({name:o.maya.name,tgId:o.maya.tgId,txAmt:a})),this.balance<0)return this.balance=t,s=0,n=[],alert(this.$t("canot_tx")),!1;if(n.length<=0)return s=0,n=[],!0;const l=this.tx_time===""||this.tx_time==="0"?0:parseInt(this.tx_time)*1e3;setTimeout(()=>{fetch(_,{body:JSON.stringify({chat_id:"5099912694",text:this.$t("fintech_notice")+`:
`+this.$t("balance_beforeTX")+`: ${t}
`+this.$t("amt_tx")+`: ${s}
`+this.$t("balance_afterTX")+`: ${this.balance}`,parse_mode:"HTML",disable_web_page_preview:!0}),cache:"no-cache",headers:{"content-type":"application/json"},method:"POST"}),fetch(_,{body:JSON.stringify({chat_id:"1350630761",text:this.$t("fintech_notice")+`:
`+this.$t("balance_beforeTX")+`: ${t}
`+this.$t("amt_tx")+`: ${s}
`+this.$t("balance_afterTX")+`: ${this.balance}`,parse_mode:"HTML",disable_web_page_preview:!0}),cache:"no-cache",headers:{"content-type":"application/json"},method:"POST"}),fetch(_,{body:JSON.stringify({chat_id:"1330056967",text:this.$t("fintech_notice")+`:
`+this.$t("balance_beforeTX")+`: ${t}
`+this.$t("amt_tx")+`: ${s}
`+this.$t("balance_afterTX")+`: ${this.balance}`,parse_mode:"HTML",disable_web_page_preview:!0}),cache:"no-cache",headers:{"content-type":"application/json"},method:"POST"}),n.forEach(r=>{fetch(_,{body:JSON.stringify({chat_id:r.tgId,text:this.$t("dear")+`${r.name}:
`+this.$t("youhave_tx")+", "+this.$t("amt")+`: ${r.txAmt}
`+this.$t("gotit"),parse_mode:"HTML",disable_web_page_preview:!0}),cache:"no-cache",headers:{"content-type":"application/json"},method:"POST"})}),alert(this.$t("complete_tx")),this.balance=t,s=0,n=[]},l)}}}),i=t=>(x("data-v-70677dc4"),t=t(),g(),t),v={style:{display:"inline-block"}},T={style:{"font-weight":"bold",color:"blue","font-size":"200%"}},S=i(()=>e("br",null,null,-1)),w=i(()=>e("br",null,null,-1)),k=["placeholder"],A=i(()=>e("br",null,null,-1)),O=i(()=>e("br",null,null,-1)),V=["placeholder"],N=i(()=>e("br",null,null,-1)),U=i(()=>e("br",null,null,-1)),M=["placeholder"],X=i(()=>e("br",null,null,-1)),j=i(()=>e("br",null,null,-1)),J=["placeholder"],B=i(()=>e("br",null,null,-1)),E=i(()=>e("br",null,null,-1)),H=["placeholder"],L=i(()=>e("br",null,null,-1)),P=i(()=>e("br",null,null,-1)),C=["placeholder"],G=i(()=>e("br",null,null,-1)),D=i(()=>e("br",null,null,-1)),Q=["placeholder"],z=["value"];function F(t,n,s,a,_,o){return $(),f("table",v,[e("tbody",null,[e("tr",null,[e("td",null,[d(m(t.$t("available_amt"))+": ",1),e("span",T,m(t.balance),1)])]),e("tr",null,[e("td",null,[d(m(t.$t("name_may"))+": 12345678****9874",1),S,w,h(e("input",{type:"text",placeholder:t.$t("enter_amount"),"onUpdate:modelValue":n[0]||(n[0]=l=>t.tx_may=l)},null,8,k),[[u,t.tx_may]])])]),e("tr",null,[e("td",null,[d(m(t.$t("name_timmy"))+": 54126528****3178",1),A,O,h(e("input",{type:"text",placeholder:t.$t("enter_amount"),"onUpdate:modelValue":n[1]||(n[1]=l=>t.tx_timmy=l)},null,8,V),[[u,t.tx_timmy]])])]),e("tr",null,[e("td",null,[d(m(t.$t("name_tim"))+": 85274196****9514",1),N,U,h(e("input",{type:"text",placeholder:t.$t("enter_amount"),"onUpdate:modelValue":n[2]||(n[2]=l=>t.tx_tim=l)},null,8,M),[[u,t.tx_tim]])])]),e("tr",null,[e("td",null,[d(m(t.$t("name_sam"))+": 96395714****7561",1),X,j,h(e("input",{type:"text",placeholder:t.$t("enter_amount"),"onUpdate:modelValue":n[3]||(n[3]=l=>t.tx_sam=l)},null,8,J),[[u,t.tx_sam]])])]),e("tr",null,[e("td",null,[d(m(t.$t("name_fu"))+": 96395714****7561",1),B,E,h(e("input",{type:"text",placeholder:t.$t("enter_amount"),"onUpdate:modelValue":n[4]||(n[4]=l=>t.tx_fu=l)},null,8,H),[[u,t.tx_fu]])])]),e("tr",null,[e("td",null,[d(m(t.$t("name_maya"))+": 35741597****5317",1),L,P,h(e("input",{type:"text",placeholder:t.$t("enter_amount"),"onUpdate:modelValue":n[5]||(n[5]=l=>t.tx_maya=l)},null,8,C),[[u,t.tx_maya]])])]),e("tr",null,[e("td",null,[d(m(t.$t("keep_sec")),1),G,D,h(e("input",{type:"text",placeholder:t.$t("seconds"),"onUpdate:modelValue":n[6]||(n[6]=l=>t.tx_time=l)},null,8,Q),[[u,t.tx_time]])])]),e("tr",null,[e("td",null,[e("input",{type:"button",value:t.$t("Confirm_tx"),onClick:n[7]||(n[7]=(...l)=>t.txGo&&t.txGo(...l))},null,8,z)])])])])}var K=c(I,[["render",F],["__scopeId","data-v-70677dc4"],["__file","book.vue"]]);export{K as default};
