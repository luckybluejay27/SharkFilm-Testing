import{_ as r,o,c as n,a as s,F as p,r as u,b as _,t as g,d as f}from"./index-CrhNUwCA.js";const C="/SharkFilm-Testing/assets/Carcinogen-Ds1psFLt.jpg",h="/SharkFilm-Testing/assets/Coffee%20_%20Magic-CZ_4a7S5.jpg",v={name:"CarouselPromo",data(){return{projects:[{id:1,name:"Carcinogen",image:C,status:"in-progress"},{id:2,name:"Coffee & Magic",image:h,status:"completed"}]}}},S={class:"CarouselPromo"},k={class:"carousel-container"},$={class:"carousel-wrapper"},y={class:"image-container"},F=["alt","src"],x={key:0,class:"status-overlay"},P={class:"project-title"};function T(c,e,l,m,a,d){return o(),n("div",S,[e[0]||(e[0]=s("h1",null,"Our Works",-1)),e[1]||(e[1]=s("div",{class:"break-line"},null,-1)),s("div",k,[s("div",$,[(o(!0),n(p,null,u(a.projects,t=>(o(),n("div",{key:t.id,class:"carousel-item"},[s("div",y,[s("img",{alt:t.name,class:"project-image",src:t.image},null,8,F),t.status==="in-progress"?(o(),n("div",x," IN PROGRESS ")):_("",!0)]),s("p",P,g(t.name),1)]))),128))])])])}const i=r(v,[["render",T]]),I="/SharkFilm-Testing/assets/SharkSplashTitle-CCRPb8yG.svg",M={name:"Home",components:{CarouselPromo:i}},N={class:"page"};function b(c,e,l,m,a,d){const t=i;return o(),n("div",N,[e[0]||(e[0]=s("div",{class:"SharkSplash"},[s("img",{src:I}),s("h1",{class:"index-title"},"Animation: Untethered")],-1)),f(t),e[1]||(e[1]=s("div",{class:"OurMission"},[s("p",null," Empower Creativity, Fund Ingenuity, Shape Tomorrow ")],-1))])}const B=r(M,[["render",b]]);export{B as default};
