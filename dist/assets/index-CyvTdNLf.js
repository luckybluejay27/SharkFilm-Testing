import{_ as m,o,c as t,a as e,F as u,r as v,b as S,t as k,d as C,e as w,f as x,g as r}from"./index-CvM0AWTD.js";import{_ as d,a as _}from"./PrimeNav-D7woJB5U.js";const P="/SharkFilm-Testing/assets/Carcinogen-Ds1psFLt.jpg",$="/SharkFilm-Testing/assets/Coffee%20_%20Magic-CZ_4a7S5.jpg",y={name:"Carousel",data(){return{projects:[{id:1,name:"Carcinogen",image:P,status:"in-progress"},{id:2,name:"Coffee & Magic",image:$,status:"completed"}]}}},F={class:"CarouselPromo"},M=["status"],N=["alt","src"],T={key:0,class:"status-overlay"};function E(a,s,i,l,c,g){return o(),t("div",F,[s[0]||(s[0]=e("h1",null,"Our Works",-1)),(o(!0),t(u,null,v(c.projects,n=>(o(),t("div",{key:n.id,class:"carousel-item"},[e("div",{class:"image-container",status:n.status},[e("img",{alt:n.name,src:n.image},null,8,N),n.status==="in-progress"?(o(),t("div",T," IN PROGRESS ")):S("",!0)],8,M),e("p",null,k(n.name),1)]))),128))])}const p=m(y,[["render",E]]),L="/SharkFilm-Testing/assets/SharkSplashTitle-CCRPb8yG.svg",O={name:"Home",components:{PrimeNav:d,CarouselPromo:p,Socials:_},setup(){const a=C(!1),s=()=>{const i=window.innerHeight-50;a.value=window.scrollY>=i};return w(()=>{window.addEventListener("scroll",s)}),x(()=>{window.removeEventListener("scroll",s)}),{isSticky:a}}};function b(a,s,i,l,c,g){const n=d,f=_,h=p;return o(),t(u,null,[r(n,{"is-prime-index":!0,"is-prime-stick":l.isSticky},null,8,["is-prime-stick"]),r(f),r(h),s[0]||(s[0]=e("div",{class:"SharkSplash"},[e("img",{src:L}),e("h1",{class:"index-title"},"Animation: Untethered")],-1)),s[1]||(s[1]=e("div",{class:"OurMission"},[e("h1",null,"Our Mission"),e("p",null," To empower creation without external pressure, fostering an environment free from convention. Through collaboration, we support each other. ")],-1))],64)}const R=m(O,[["render",b]]);export{R as default};
