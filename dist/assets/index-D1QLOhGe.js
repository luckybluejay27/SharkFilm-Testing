import{_ as m,o,c as t,a as s,F as u,r as v,b as S,t as k,d as C,e as w,f as $,g as r}from"./index-B3CzXvhw.js";import{_ as d,a as _}from"./MainNav-B86GsKfM.js";const x="/SharkFilm-Testing/assets/Carcinogen-Ds1psFLt.jpg",P="/SharkFilm-Testing/assets/Coffee%20_%20Magic-CZ_4a7S5.jpg",y={name:"Carousel",data(){return{projects:[{id:1,name:"Carcinogen",image:x,status:"in-progress"},{id:2,name:"Coffee & Magic",image:P,status:"completed"}]}}},F={class:"CarouselPromo"},M=["status"],N=["alt","src"],T={key:0,class:"status-overlay"};function E(a,e,i,c,l,g){return o(),t("div",F,[e[0]||(e[0]=s("h1",null,"Our Works",-1)),(o(!0),t(u,null,v(l.projects,n=>(o(),t("div",{key:n.id,class:"carousel-item"},[s("div",{class:"image-container",status:n.status},[s("img",{alt:n.name,src:n.image},null,8,N),n.status==="in-progress"?(o(),t("div",T," IN PROGRESS ")):S("",!0)],8,M),s("p",null,k(n.name),1)]))),128))])}const p=m(y,[["render",E]]),L="/SharkFilm-Testing/assets/SharkSplashTitle-CCRPb8yG.svg",O={name:"Home",components:{MainNav:d,CarouselPromo:p,Socials:_},setup(){const a=C(!1),e=()=>{const i=window.innerHeight-50;a.value=window.scrollY>=i};return w(()=>{window.addEventListener("scroll",e)}),$(()=>{window.removeEventListener("scroll",e)}),{isSticky:a}}},b={class:"page"};function B(a,e,i,c,l,g){const n=d,f=_,h=p;return o(),t(u,null,[r(n,{"is-prime-index":!0,"is-prime-stick":c.isSticky},null,8,["is-prime-stick"]),r(f),s("div",b,[e[0]||(e[0]=s("div",{class:"SharkSplash"},[s("img",{src:L}),s("h1",{class:"index-title"},"Animation: Untethered")],-1)),r(h),e[1]||(e[1]=s("div",{class:"OurMission"},[s("h1",null,"Our Mission"),s("p",null," To empower creation without external pressure, fostering an environment free from convention. Through collaboration, we support each other. ")],-1))])],64)}const V=m(O,[["render",B]]);export{V as default};
