import{a as x,b as v,o as l,e as i,f as t,F as a,r as d,h as p,t as c,w as S,i as A}from"./entry.24a91cb2.mjs";import{_ as h}from"./Downloadnow.fae3e589.mjs";import{a as r}from"./article.c447e381.mjs";console.log();const f={setup(){v();const _=r.filter(e=>e.tags.some(o=>o.name==="API")),n=r.filter(e=>e.tags.some(o=>o.name==="Company")),u=r.filter(e=>e.tags.some(o=>o.name==="useCases")),b=r.filter(e=>e.tags.some(o=>o.name==="Security"));return{api:_,company:n,UseCases:u,Secutiry:b}},computed:{},data(){return{myJson:r,SortedArray:r}},methods:{AllSORT(){this.SortedArray=this.myJson},APISORT(){this.SortedArray=this.api},COMPANYSORT(){this.SortedArray=this.company},UseSort(){this.SortedArray=this.UseCases},SecuritySort(){this.SortedArray=this.SecuritySort}},components:{Downloadnow:h}},w={class:"container"},C={class:"row gx-0 d-none d-lg-flex d-xl-flex",style:{"background-color":"#141b24",width:"100%"}},k=t("div",{class:"col-2"},null,-1),O={class:"col-8"},P={class:"row gx-0",style:{"background-color":"#141b24"}},T={class:"col"},R=["src"],D={class:"col"},U={class:"row"},B={class:"col-2"},I={type:"button",class:"btn blogbtn btn-sm text-icon ms-3 mt-5 px-2"},M={class:"fw-bold display-9 ps-3 mt-3"},N={class:"fw-lighter display-7 ps-3"},J=t("div",{class:"col-2"},null,-1),$={class:"row gx-0"},F=t("div",{class:"col-1"},null,-1),V={class:"col-lg-10 col-md-auto"},Y=t("div",{class:"col-1"},null,-1),E={class:"row"},L={class:"col-lg-4 col-md-6 my-3"},j=["src"],q={class:"row gx-0"},z={class:"col-2"},G={type:"button",class:"btn blogbtn btn-sm text-icon mt-1 mx-2"},H={class:"fw-bold display-9 mt-3"},K={class:"fw-lighter display-7"},Q={class:"fw-lighter display-5"};function W(_,n,u,b,e,o){const y=A,g=h;return l(),i("div",null,[t("div",w,[t("div",C,[k,(l(!0),i(a,null,d(e.myJson.slice(0,1),s=>(l(),i("div",O,[t("div",P,[t("div",T,[t("img",{src:s.ArticlePic,class:"mt-5 mb-3 pb-4 blogbox",style:{"max-width":"100%"}},null,8,R)]),t("div",D,[t("div",U,[(l(!0),i(a,null,d(s.tags,m=>(l(),i("div",B,[t("button",I,c(m.name),1)]))),256))]),t("p",M,c(s.MainTitle),1),t("p",N,c(s.Author)+" , "+c(s.ArticleDate),1)])])]))),256)),J]),t("div",$,[F,t("div",V,[t("button",{type:"button",class:"btn blogbtn btn-sm text-icon ms-2 mt-5 px-2",onClick:n[0]||(n[0]=s=>o.AllSORT())}," All "),t("button",{type:"button",class:"btn blogbtn btn-sm text-icon ms-2 mt-5 px-2",onClick:n[1]||(n[1]=s=>o.APISORT())}," API "),t("button",{type:"button",class:"btn blogbtn btn-sm text-icon ms-2 mt-5 px-2",onClick:n[2]||(n[2]=s=>o.COMPANYSORT())}," Company "),t("button",{type:"button",class:"btn blogbtn btn-sm text-icon ms-2 mt-5 px-2",onClick:n[3]||(n[3]=s=>o.UseSort())}," Use Case "),t("button",{type:"button",class:"btn blogbtn btn-sm text-icon ms-2 mt-5 px-2",onClick:n[4]||(n[4]=s=>o.SecuritySort())}," Security ")]),Y]),t("div",E,[(l(!0),i(a,null,d(e.SortedArray,s=>(l(),i("div",L,[(l(),i("div",{key:s.id},[p(y,{to:"/Blog/"+s.id,class:"nav-link link-white"},{default:S(()=>[t("div",null,[t("img",{src:s.ArticlePic,class:"mt-3 pb-2",style:{"max-width":"100%"}},null,8,j),t("div",q,[(l(!0),i(a,null,d(s.tags,m=>(l(),i("div",z,[t("button",G,c(m.name),1)]))),256))]),t("p",H,c(s.MainTitle),1),t("p",K,c(s.Author)+" "+c(s.ArticleDate),1),t("p",Q,c(s.CardDescription),1)])]),_:2},1032,["to"])]))]))),256))])]),p(g,{class:"my-5"})])}const st=x(f,[["render",W]]);export{st as default};
