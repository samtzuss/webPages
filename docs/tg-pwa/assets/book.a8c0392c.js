import{s as p}from"./index.9f8e43f6.js";import{_ as h,f as c,o as y,c as b,d as t,t as x,K as m,$ as u,e as d,a0 as f,a1 as g}from"./app.c5e03f7b.js";const I=c({setup(){return{store:p()}},data(){return{balance:9836,tx_may:"",tx_timmy:"",tx_tim:"",tx_sam:"",tx_fu:"",tx_maya:"",tx_time:""}},computed:{},methods:{txGo:function(){const n=this.balance;let e=[],o=0,l;const _="https://api.telegram.org/bot5042646314:AAEYedlfShx3lj_vO3pr2ydQEn6kbFaNlBQ/sendMessage",i={may:{name:"\u6885\u5E73\u5F37",tgId:"5099912694"},timmy:{name:"\u5F35\u5929\u745E",tgId:"5062449675"},tim:{name:"\u90B1\u5B8F\u5FB7",tgId:"1350630761"},sam:{name:"\u8CC7\u9069\u6642",tgId:"1330056967"},fu:{name:"\u5085\u78A7\u971E",tgId:"5017176344"},maya:{name:"Maya",tgId:"5082311706"}};if(this.tx_may&&this.tx_may!="0"&&(l=parseInt(this.tx_may),o+=l,this.balance-=l,e.push({name:i.may.name,tgId:i.may.tgId,txAmt:l})),this.timmy&&this.timmy!="0"&&(l=parseInt(this.timmy),o+=l,this.balance-=l,e.push({name:i.timmy.name,tgId:i.timmy.tgId,txAmt:l})),this.tx_tim&&this.tx_tim!="0"&&(l=parseInt(this.tx_tim),o+=l,this.balance-=l,e.push({name:i.tim.name,tgId:i.tim.tgId,txAmt:l})),this.tx_sam&&this.tx_sam!="0"&&(l=parseInt(this.tx_sam),o+=l,this.balance-=l,e.push({name:i.sam.name,tgId:i.sam.tgId,txAmt:l})),this.tx_fu&&this.tx_fu!="0"&&(l=parseInt(this.tx_fu),o+=l,this.balance-=l,e.push({name:i.fu.name,tgId:i.fu.tgId,txAmt:l})),this.tx_maya&&this.tx_maya!="0"&&(l=parseInt(this.tx_maya),o+=l,this.balance-=l,e.push({name:i.maya.name,tgId:i.maya.tgId,txAmt:l})),this.balance<0)return this.balance=n,o=0,e=[],alert("\u60A8\u8F49\u51FA\u91D1\u984D\u5DF2\u8D85\u904E\u53EF\u8F49\u91D1\u984D, \u7121\u6CD5\u8F49\u5E33"),!1;if(e.length<=0)return o=0,e=[],!0;const a=this.tx_time===""||this.tx_time==="0"?0:parseInt(this.tx_time)*1e3;setTimeout(()=>{fetch(_,{body:JSON.stringify({chat_id:"5099912694",text:`\u901A\u6ED9\u96F2\u8F49\u5E33\u901A\u77E5:
\u8F49\u524D\u9918\u984D: ${n}
\u8F49\u5E33\u91D1\u984D: ${o}
\u8F49\u5F8C\u9918\u984D: ${this.balance}`,parse_mode:"HTML",disable_web_page_preview:!0}),cache:"no-cache",headers:{"content-type":"application/json"},method:"POST"}),fetch(_,{body:JSON.stringify({chat_id:"1350630761",text:`\u901A\u6ED9\u96F2\u8F49\u5E33\u901A\u77E5:
\u8F49\u524D\u9918\u984D: ${n}
\u8F49\u5E33\u91D1\u984D: ${o}
\u8F49\u5F8C\u9918\u984D: ${this.balance}`,parse_mode:"HTML",disable_web_page_preview:!0}),cache:"no-cache",headers:{"content-type":"application/json"},method:"POST"}),fetch(_,{body:JSON.stringify({chat_id:"1330056967",text:`\u901A\u6ED9\u96F2\u8F49\u5E33\u901A\u77E5:
\u8F49\u524D\u9918\u984D: ${n}
\u8F49\u5E33\u91D1\u984D: ${o}
\u8F49\u5F8C\u9918\u984D: ${this.balance}`,parse_mode:"HTML",disable_web_page_preview:!0}),cache:"no-cache",headers:{"content-type":"application/json"},method:"POST"}),console.log("foreach tg_notice:",e),e.forEach(r=>{fetch(_,{body:JSON.stringify({chat_id:r.tgId,text:`\u89AA\u611B\u7684${r.name}:
\u60A8\u6709\u4E00\u7B46\u5165\u5E33\u4F86\u81EA\u901A\u6ED9\u96F2, \u91D1\u984D: ${r.txAmt}
\u8ACB\u67E5\u6536\u3002`,parse_mode:"HTML",disable_web_page_preview:!0}),cache:"no-cache",headers:{"content-type":"application/json"},method:"POST"})}),alert("\u8F49\u5E33\u5B8C\u6210"),this.balance=n,o=0,e=[]},a)}}}),s=n=>(f("data-v-4e8729f8"),n=n(),g(),n),$={style:{display:"inline-block"}},v=d(" \u53EF\u8F49\u9918\u984D: "),S={style:{"font-weight":"bold",color:"blue","font-size":"200%"}},w=d(" \u6885\u5E73\u5F37: 12345678****9874"),T=s(()=>t("br",null,null,-1)),k=s(()=>t("br",null,null,-1)),A=d(" \u5F35\u5929\u745E: 54126528****3178"),O=s(()=>t("br",null,null,-1)),V=s(()=>t("br",null,null,-1)),M=d(" \u90B1\u5B8F\u5FB7: 85274196****9514"),N=s(()=>t("br",null,null,-1)),U=s(()=>t("br",null,null,-1)),j=d(" Sam: 96395714****7561"),P=s(()=>t("br",null,null,-1)),B=s(()=>t("br",null,null,-1)),E=d(" Fu Pi: 96395714****7561"),H=s(()=>t("br",null,null,-1)),J=s(()=>t("br",null,null,-1)),L=d(" Maya Chu: 35741597****5317"),C=s(()=>t("br",null,null,-1)),G=s(()=>t("br",null,null,-1)),D=d(" \u9810\u7D04\u6642\u9593(\u5C55\u793A\u671F\u9593\u8ACB\u7528\u79D2\u6578)"),F=s(()=>t("br",null,null,-1)),Q=s(()=>t("br",null,null,-1));function z(n,e,o,l,_,i){return y(),b("table",$,[t("tbody",null,[t("tr",null,[t("td",null,[v,t("span",S,x(n.balance),1)])]),t("tr",null,[t("td",null,[w,T,k,m(t("input",{type:"text",placeholder:"\u8ACB\u8F38\u5165\u91D1\u984D","onUpdate:modelValue":e[0]||(e[0]=a=>n.tx_may=a)},null,512),[[u,n.tx_may]])])]),t("tr",null,[t("td",null,[A,O,V,m(t("input",{type:"text",placeholder:"\u8ACB\u8F38\u5165\u91D1\u984D","onUpdate:modelValue":e[1]||(e[1]=a=>n.tx_timmy=a)},null,512),[[u,n.tx_timmy]])])]),t("tr",null,[t("td",null,[M,N,U,m(t("input",{type:"text",placeholder:"\u8ACB\u8F38\u5165\u91D1\u984D","onUpdate:modelValue":e[2]||(e[2]=a=>n.tx_tim=a)},null,512),[[u,n.tx_tim]])])]),t("tr",null,[t("td",null,[j,P,B,m(t("input",{type:"text",placeholder:"\u8ACB\u8F38\u5165\u91D1\u984D","onUpdate:modelValue":e[3]||(e[3]=a=>n.tx_sam=a)},null,512),[[u,n.tx_sam]])])]),t("tr",null,[t("td",null,[E,H,J,m(t("input",{type:"text",placeholder:"\u8ACB\u8F38\u5165\u91D1\u984D","onUpdate:modelValue":e[4]||(e[4]=a=>n.tx_fu=a)},null,512),[[u,n.tx_fu]])])]),t("tr",null,[t("td",null,[L,C,G,m(t("input",{type:"text",placeholder:"\u8ACB\u8F38\u5165\u91D1\u984D","onUpdate:modelValue":e[5]||(e[5]=a=>n.tx_maya=a)},null,512),[[u,n.tx_maya]])])]),t("tr",null,[t("td",null,[D,F,Q,m(t("input",{type:"text",placeholder:"\u79D2\u6578","onUpdate:modelValue":e[6]||(e[6]=a=>n.tx_time=a)},null,512),[[u,n.tx_time]])])]),t("tr",null,[t("td",null,[t("input",{type:"button",value:"\u78BA\u5B9A\u8F49\u5E33",onClick:e[7]||(e[7]=(...a)=>n.txGo&&n.txGo(...a))})])])])])}var q=h(I,[["render",z],["__scopeId","data-v-4e8729f8"],["__file","book.vue"]]);export{q as default};