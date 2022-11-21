import{_ as c,a as d}from"./SidebarRight.d4743080.mjs";import{a as b,o as w,e as g,f as e,h as s,w as a,l,k as t,i as y,p as m,j as v}from"./entry.24a91cb2.mjs";import{_ as r}from"./Downloadnow.fae3e589.mjs";const f=""+globalThis.__publicAssetsURL("images/portal-home-page.svg"),h=""+globalThis.__publicAssetsURL("images/webhook-page.svg"),k=""+globalThis.__publicAssetsURL("images/create-webhook-API.svg"),x=""+globalThis.__publicAssetsURL("images/New-Subscription-UX.svg"),A=""+globalThis.__publicAssetsURL("images/Traffic.svg");const P={return:{},components:{SidebarLeft:c,SidebarRight:d,Downloadnow:r}},i=n=>(m("data-v-a8e06ee7"),n=n(),v(),n),I={class:"container"},S=l('<div class="row gx-0" data-v-a8e06ee7><div class="col-3" data-v-a8e06ee7></div><div class="col-lg-6 col-md-auto" data-v-a8e06ee7><form class="d-flex pt-4" data-v-a8e06ee7><input class="form-control bg-blackBg text-white py-2 px-4" type="search" placeholder="Search..." aria-label="Search" data-v-a8e06ee7><button class="btn btn-btnsearch text-white px-4 py-2" type="submit" data-v-a8e06ee7> Search </button></form></div><div class="col-3" data-v-a8e06ee7></div></div>',1),T={class:"row gx-0"},C={class:"col-3"},L={class:"col-lg-6 col-md-auto"},R={class:"row"},U=i(()=>e("p",{class:"fw-bold display-10 pt-4"},"Get started fast",-1)),z=i(()=>e("p",{class:"fw-lighter display-5 py-3"}," The easiest way to evaluate webhookie is using docker. ",-1)),W={class:"fw-lighter display-5 py-3"},B=t(" Make sure you have "),N=t("docker"),M=t(" installed on your system. "),V=l('<p class="fw-lighter display-5 py-3" data-v-a8e06ee7> Download our docker-compose file and supporting keycloak files in this zip file. </p><button type="button" class="btn btn-primary fw-normal display-5 px-3 py-3 col-lg-7 col-md-auto" data-v-a8e06ee7> Download webhookie-w-mongodb-keycloak.zip </button><p class="fw-lighter display-5 py-4" data-v-a8e06ee7> Unpack the zip file to a new folder dedicated to webhookie. </p><div class="warningBox p-4" data-v-a8e06ee7><p class="fw-lighter display-5 lh-base" data-v-a8e06ee7><strong data-v-a8e06ee7>Note Apple M1 users:</strong> the standard keycloak image in the docker compose file does not yet support the Apple M1 ARM based architecture. Therefore you need to replace the keycloak image inside the docker-compose (docker-compose.yml) file with </p><p class="fw-lighter display-5" data-v-a8e06ee7><code class="text-white bg-blackBg display-7 fw-light" data-v-a8e06ee7>wizzn/keycloak:14</code> (instead of : <code class="text-white bg-blackBg display-7 fw-light" data-v-a8e06ee7>quay.io/keycloak/keycloak:14.0.0</code> ) </p></div><p class="fw-lighter display-5 mt-3" data-v-a8e06ee7> From the new folder issue the following command in your terminal. </p><p class="fw-lighter display-5 pt-3" data-v-a8e06ee7> Unpack the zip file to a new folder dedicated to <strong data-v-a8e06ee7>webhookie</strong>. </p><div class="bg-codesample py-4 px-2 my-3" data-v-a8e06ee7><code class="text-white fw-light display-7 px-5" data-v-a8e06ee7> docker compose up</code></div><p class="fw-lighter display-5 mt-4 mb-5" data-v-a8e06ee7> This will start the necessary containers to evaluate the product. </p>',8),D={class:"row"},E=i(()=>e("p",{class:"fw-bold display-10 my-4"},"Using webhookie",-1)),G={class:"fw-lighter display-5 pt-3 pb-1"},$=t(" In your browser go to the webhookie developer portal . "),q=t("http://localhost:4300"),H=l('<ul class="fw-lighter display-5 pt-3 pb-4 list-unstyled" data-v-a8e06ee7> An admin user has been set up for you with the following details: <li class="pt-3 ps-5" data-v-a8e06ee7><strong data-v-a8e06ee7>username:</strong> webhookie_admin </li><li class="pt-3 ps-5" data-v-a8e06ee7><strong data-v-a8e06ee7>password:</strong> passwd1</li></ul><p class="fw-lighter display-5 lh-base" data-v-a8e06ee7> Login to webhookie when the server health indicator is green. The health indicator is the dot next to login. This will become green when the server and its dependencies are up. </p><img src="'+f+'" class="mt-3 mb-3 pb-5" style="max-width:100%;" data-v-a8e06ee7>',3),F={class:"row"},X=i(()=>e("p",{class:"fw-bold display-3 pb-3"},"Create a webhook API",-1)),Y=i(()=>e("p",{class:"fw-lighter display-5"},[t(" In the "),e("strong",null,"Webhooks"),t(" section, you can create a new Webhook API. ")],-1)),j=i(()=>e("img",{src:h,class:"mt-2 mb-3 pb-4",style:{"max-width":"100%"}},null,-1)),Q={class:"fw-lighter display-5 lh-base"},O=t(" When you create a new Webhook API you will see a preloaded "),J=t("ASYNC API specification"),K=t(" called the Pet Store Events API. You can replace this or edit it to reflect your own Webhook API details. Alternatively, you can just publish the Pet Store Events API to get a feel for the product. "),Z=i(()=>e("img",{src:k,class:"mt-3 mb-3 pb-4",style:{"max-width":"100%"}},null,-1)),ee=i(()=>e("p",{class:"fw-lighter display-5 lh-base"},[t(" When you click "),e("strong",null,"Publish"),t(" , the API will be available, to discover and subscribe, to any users within the consumer groups you selected. ")],-1)),te=i(()=>e("img",{src:h,class:"mt-3 mb-3 pb-4",style:{"max-width":"100%"}},null,-1)),se={class:"fw-lighter display-5 mt-3 list-unstyled"},oe=t(" For more informaion: "),ae={class:"pt-3 ps-5"},ie=t(" Webhook APIs "),le={class:"pt-3 ps-5"},ne=t("Consumer Groups "),ce={class:"pt-3 ps-5 pb-5"},de=t("Provider Groups"),re={class:"row"},he=l('<p class="fw-bold display-3" data-v-a8e06ee7>Setup a subscription</p><p class="fw-lighter display-5 lh-base" data-v-a8e06ee7> Subscriptions are set up by your webhook consumers. They are self-managed subscriptions meaning that as an application provider you don\u2019t have to lift a finger to help your subscribers integrate. </p><img src="'+x+'" class="mt-3 mb-3 pb-4" style="max-width:100%;" data-v-a8e06ee7><ul class="fw-lighter display-5 list-unstyled" data-v-a8e06ee7> A subscription is created with the following steps <li class="pt-3 ps-5 lh-base" data-v-a8e06ee7> 1.Click <strong data-v-a8e06ee7>Subscribe</strong> on the webhook you want to subscribe to </li><li class="pt-3 ps-5 lh-base" data-v-a8e06ee7> 2.<strong data-v-a8e06ee7>Create Application</strong> \u2013 this application is a logical container for the callbacks associated with it. It should reflect the name of the application that hosts the callback. </li><li class="pt-3 ps-5 lh-base" data-v-a8e06ee7> 3.<strong data-v-a8e06ee7>Create Callback</strong> \u2013 this is the actual callback URL details. In CE you can choose to secure your callback with a HMAC signature (if you need a few more security options check out our Enterprise edition). </li><li class="pt-3 ps-5 lh-base" data-v-a8e06ee7> 4.<strong data-v-a8e06ee7>Save</strong> the Subscription </li><li class="pt-3 ps-5 lh-base" data-v-a8e06ee7> 5.<strong data-v-a8e06ee7>Test</strong> the Subscription \u2013 Webhookie will send the example request body to your callback. If you get a 2XX response from your callback then you are good to proceed. </li><li class="pt-3 ps-5 pb-3 lh-base" data-v-a8e06ee7> 6.<strong data-v-a8e06ee7>Activate</strong> the Subscription \u2013 your callback will now start receiving traffic when the events occur. </li></ul>',4),pe={class:"fw-lighter display-5 list-unstyled"},_e=t(" For more informaion: "),ue={class:"pt-3 ps-5"},be=t(" Subscriptions "),we={class:"pt-3 ps-5"},ge=t("Applications "),ye={class:"pt-3 ps-5 pb-5"},me=t("Callbacks"),ve={class:"row"},fe=i(()=>e("p",{class:"fw-bold display-3 pb-4"},"Publish an event",-1)),ke={class:"fw-lighter display-5 list-unstyled"},xe=t(" There are two options to integrate your product or system with webhookie. These are: "),Ae={class:"pt-3 ps-5 lh-base"},Pe=i(()=>e("strong",null,"AMQP",-1)),Ie=t(" \u2013 If you have RabbitMQ or any other message bus within your architecture you can use it to send events to webhookie. "),Se=t(" See AMQP Setup"),Te=t(". "),Ce={class:"pt-3 ps-5 pb-4 lh-base"},Le=i(()=>e("strong",null,"API",-1)),Re=t(" \u2013 If you don\u2019t have a message bus within your architecture then we have a simple REST API to post events to webhookie."),Ue=t(" See API integration"),ze=t(". "),We=l(`<p class="fw-lighter display-5 lh-base pb-3" data-v-a8e06ee7> If you want to quickly evaluate the product, without integrating, you can use an API client like Postman to publish events to webhookie. </p><ul class="fw-lighter display-5 list-unstyled lh-base" data-v-a8e06ee7> To publish an event to webhookie requires two steps. The first to get an access token and the second to post the event. <li class="pt-3 ps-5" data-v-a8e06ee7> 1.Get a token to publish events to webhookie <div class="text-white bg-codesample p-4 m-4" data-v-a8e06ee7><pre data-v-a8e06ee7>    POST /auth/realms/webhookie/protocol/openid-connect/token \r
    HTTP/1.1\r
    Host: localhost:8800\r
    Authorization: Basic d2ViaG9va2llX2NsaWVudDo=\r
    Content-Type: application/x-www-form-urlencoded\r
\r
    username=webhookie_admin&amp;password=passwd1&amp;grant_type=password\r
            </pre></div></li><li class="pt-3 ps-5" data-v-a8e06ee7> 2. Publish an event (<strong data-v-a8e06ee7>Note</strong>: we are publishing a <strong data-v-a8e06ee7>createdPet</strong> event \u2013 see the wh-topic header).1.Get a token to publish events to webhookie <div class="text-white bg-codesample p-4 m-4" data-v-a8e06ee7><pre data-v-a8e06ee7>    POST /ingress/event \r
    HTTP/1.1\r
    Host: localhost:8000\r
    wh-topic: createdPet\r
    wh-trace-id: 7b338cb9-bb17-4aee-9cc9-705af28a1cf9\r
    Content-Type: text/plain\r
    Authorization: Bearer\r
\r
    Your test message\r
            </pre></div></li></ul><p class="fw-lighter display-5 lh-base pb-3" data-v-a8e06ee7> You can download a Postman script with the above two API requests below (note: you must extract the json file from the zip file before you import it into Postman). </p><button type="button" class="btn btn-primary fw-normal display-5 px-3 py-2 mt-1 mb-5 col-lg-7 col-md-auto" data-v-a8e06ee7> Download webhookie-w-mongodb-keycloak.zip </button>`,4),Be=i(()=>e("div",{class:"row"},[e("p",{class:"fw-bold display-3 mt-5"},"View Traffic"),e("p",{class:"fw-lighter display-5 lh-base"}," If you navigate to Traffic in the webhookie developer portal you can see the traffic being sent to your subscription. "),e("img",{src:A,class:"mt-3 mb-3 pb-4",style:{"max-width":"100%"}})],-1)),Ne={class:"row container"},Me=i(()=>e("p",{class:"fw-bold display-3 mt-4"},"What\u2019s next?",-1)),Ve={class:"fw-lighter display-5 list-unstyled pt-3"},De=t(" For more informaion: "),Ee={class:"pt-3 ps-5"},Ge=t(" Understand the "),$e=t(" architecture and deployment "),qe=t(" options we support. "),He={class:"pt-3 ps-5"},Fe=t(" Learn how to . "),Xe=t("white label the developer portal "),Ye={class:"pt-3 ps-5"},je=t(" Learn how to Integrate webhookie with your own . "),Qe=t("identity platform"),Oe={class:"col-3"};function Je(n,Ke,Ze,et,tt,st){const p=c,o=y,_=d,u=r;return w(),g("div",null,[e("div",I,[S,e("div",T,[e("div",C,[s(p)]),e("div",L,[e("div",R,[U,z,e("p",W,[B,s(o,{to:"",class:"text-decoration-none link-btnsearch"},{default:a(()=>[N]),_:1}),M]),V]),e("div",D,[E,e("p",G,[$,s(o,{to:"http://localhost:4300",class:"text-decoration-none link-btnsearch"},{default:a(()=>[q]),_:1})]),H]),e("div",F,[X,Y,j,e("p",Q,[O,s(o,{to:"http://localhost:4300",class:"text-decoration-none link-btnsearch"},{default:a(()=>[J]),_:1}),K]),Z,ee,te,e("ul",se,[oe,e("li",ae,[s(o,{to:"",class:"text-decoration-none link-btnsearch"},{default:a(()=>[ie]),_:1})]),e("li",le,[s(o,{to:"",class:"text-decoration-none link-btnsearch"},{default:a(()=>[ne]),_:1})]),e("li",ce,[s(o,{to:"",class:"text-decoration-none link-btnsearch"},{default:a(()=>[de]),_:1})])])]),e("div",re,[he,e("ul",pe,[_e,e("li",ue,[s(o,{to:"",class:"text-decoration-none link-btnsearch"},{default:a(()=>[be]),_:1})]),e("li",we,[s(o,{to:"",class:"text-decoration-none link-btnsearch"},{default:a(()=>[ge]),_:1})]),e("li",ye,[s(o,{to:"",class:"text-decoration-none link-btnsearch"},{default:a(()=>[me]),_:1})])])]),e("div",ve,[fe,e("ul",ke,[xe,e("li",Ae,[Pe,Ie,s(o,{to:"",class:"text-decoration-none link-btnsearch"},{default:a(()=>[Se]),_:1}),Te]),e("li",Ce,[Le,Re,s(o,{to:"",class:"text-decoration-none link-btnsearch"},{default:a(()=>[Ue]),_:1}),ze])]),We]),Be,e("div",Ne,[Me,e("ul",Ve,[De,e("li",Ee,[Ge,s(o,{to:"",class:"text-decoration-none link-btnsearch"},{default:a(()=>[$e]),_:1}),qe]),e("li",He,[Fe,s(o,{to:"",class:"text-decoration-none link-btnsearch"},{default:a(()=>[Xe]),_:1})]),e("li",Ye,[je,s(o,{to:"",class:"text-decoration-none link-btnsearch"},{default:a(()=>[Qe]),_:1})])])])]),e("div",Oe,[s(_)])])]),s(u,{class:"my-5"})])}const lt=b(P,[["render",Je],["__scopeId","data-v-a8e06ee7"]]);export{lt as default};