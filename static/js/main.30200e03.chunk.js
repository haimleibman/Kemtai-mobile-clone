(this["webpackJsonpkamtai-mobile"]=this["webpackJsonpkamtai-mobile"]||[]).push([[0],{15:function(e,a,t){e.exports={Container:"Trainer_Container__CNU3B",Trainer:"Trainer_Trainer__cEFIG",Image:"Trainer_Image__nOTmz",Details:"Trainer_Details__8gnxJ",Time:"Trainer_Time__2KpfE",Border:"Trainer_Border__1vA2q"}},29:function(e,a,t){e.exports={App:"App_App__mjOSE"}},30:function(e,a,t){e.exports={home:"Home_home__3Hjn3"}},35:function(e,a,t){e.exports={Progress:"ProgerssBar_Progress__1euKR"}},36:function(e,a,t){e.exports={Progress:"Progress_Progress__19Q0-"}},37:function(e,a,t){e.exports={Video:"SelfStream_Video__3D9xr"}},38:function(e,a,t){e.exports={Training:"Training_Training__2LKTQ"}},47:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var r=t(0),i=t.n(r),n=t(28),c=t.n(n),s=(t(47),t(29)),o=t.n(s),j=t(39),d=t(3),l=t.p+"static/media/Coach1.7853dd7e.jpg";const m=[{id:1,coachingArea:"Cardio",time:2,image:l},{id:2,coachingArea:"Strenght",time:1,image:l},{id:3,coachingArea:"Flexability",time:4,image:l}];var u=t(30),b=t.n(u),g=t(69),x=t(15),v=t.n(x),O=t(2);var h=function(e){const a=Object(d.g)();return Object(O.jsxs)("div",{className:v.a.Container,onClick:()=>{a.push("/training")},children:[Object(O.jsxs)("div",{className:v.a.Trainer,children:[Object(O.jsx)("img",{className:v.a.Image,src:e.Trainer.image,alt:""}),Object(O.jsxs)("div",{className:v.a.Details,children:[Object(O.jsxs)("p",{className:v.a.Time,children:[Object(O.jsx)(g.a,{}),e.Trainer.time," min"]}),Object(O.jsxs)("p",{children:[e.Trainer.coachingArea," "]})]})]}),Object(O.jsx)("div",{className:v.a.Border})]})},_=t.p+"static/media/logo.2195dd5e.svg";var p=function(){return Object(O.jsxs)("div",{className:b.a.home,children:[Object(O.jsx)("img",{src:_,alt:"Logo"}),Object(O.jsx)("header",{children:"Let's go!"}),Object(O.jsx)("div",{children:m.map((e=>Object(O.jsx)(h,{Trainer:e})))}),Object(O.jsx)("footer",{children:"Already Using Kemtai"})]})},T=t(70),f=t(35),N=t.n(f);var P=function(e){return Object(O.jsx)(T.a,{className:N.a.Progress,value:e.value,variant:"determinate"})},A=t(36),C=t.n(A);var B=function(){return Object(O.jsx)("div",{className:C.a.Progress,children:[50,70,40,70,80,100,70,90,90,60].map((e=>Object(O.jsx)(P,{value:e})))})},D=t(37),k=t.n(D);var y=function(){const e=Object(r.useRef)(null),a=Object(d.g)();Object(r.useLayoutEffect)((()=>((async()=>{navigator.mediaDevices.getUserMedia&&(null===e||void 0===e?void 0:e.current)&&(e.current.srcObject=await navigator.mediaDevices.getUserMedia({video:!0}),setTimeout((()=>{t(),a.push("/")}),9999999999))})(),t)),[e,a]);const t=()=>{var a,t;let r=null===e||void 0===e||null===(a=e.current)||void 0===a?void 0:a.srcObject;const i=null===(t=r)||void 0===t?void 0:t.getTracks();null===i||void 0===i||i.forEach((e=>e.stop())),r=null};return Object(O.jsx)("video",{className:k.a.Video,ref:e,autoPlay:!0,muted:!0})},E=t(38),F=t.n(E);var I=function(){return Object(O.jsxs)("div",{className:F.a.Training,children:[Object(O.jsx)(y,{}),Object(O.jsx)(B,{})]})};var L=function(){return Object(O.jsx)("div",{className:o.a.App,children:Object(O.jsx)(j.a,{basename:"/Kemtai-mobile-clone",children:Object(O.jsxs)(d.d,{children:[Object(O.jsx)(d.b,{path:"/training",children:Object(O.jsx)(I,{})}),Object(O.jsx)(d.b,{exact:!0,path:"/",children:Object(O.jsx)(p,{})}),Object(O.jsx)(d.b,{exact:!0,path:"/*",children:Object(O.jsx)(d.a,{to:"/"})})]})})})};var S=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,72)).then((({getCLS:a,getFID:t,getFCP:r,getLCP:i,getTTFB:n})=>{a(e),t(e),r(e),i(e),n(e)}))};c.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(L,{})}),document.getElementById("root")),S()}},[[54,1,2]]]);
//# sourceMappingURL=main.30200e03.chunk.js.map