import{u as h,s as _,o as e,c as d,a as s,b as o,t as u,p as n,d as r,w as c,i as f,F as p,e as i}from"./index.1107b5b2.js";const b={class:"navbar navbar-expand-md bg-light"},g={class:"container-fluid"},k={key:0,class:"dropdown"},w=s("button",{class:"btn","data-bs-toggle":"dropdown"},[s("i",{class:"fas fa-user"})],-1),x={class:"dropdown-menu dropdown"},y={class:"dropdown-header"},C={class:"navbar-nav d-none d-md-flex"},B={class:"nav-item"},N={class:"nav-item"},V={class:"nav-item"},P=s("button",{class:"btn d-md-none","data-bs-toggle":"offcanvas","data-bs-target":"#bottombar"},[s("i",{class:"fas fa-bars"})],-1),S={id:"bottombar",class:"offcanvas offcanvas-lg offcanvas-bottom"},F={class:"offcanvas-header"},O={key:0,class:"ofcanvas-title"},D=s("button",{class:"btn-close","data-bs-dismiss":"offcanvas"},null,-1),E={class:"offcanvas-body d-md-none"},R={class:"list-group list-group-flush"},T={class:"container-fluid"},G={__name:"PrivatePage",setup(j){const t=h(),l=t.state.user,v=()=>{t.dispatch("signOut")};return(q,z)=>{const a=_("router-link"),m=_("router-view");return e(),d(p,null,[s("div",b,[s("div",g,[o(t).state.user?(e(),d("div",k,[w,s("div",x,[s("h6",y,u(o(l).name),1),s("a",{class:"dropdown-item",href:"#",onClick:v},"Salir")])])):n("",!0),s("nav",C,[s("li",B,[r(a,{class:"nav-link",to:"/competitions"},{default:c(()=>[i("Copeticiones")]),_:1})]),s("li",N,[o(t).state.user?(e(),f(a,{key:0,class:"nav-link",to:"/predictions"},{default:c(()=>[i("Prediciones")]),_:1})):n("",!0)]),s("li",V,[o(t).state.user?(e(),f(a,{key:0,class:"nav-link",to:"/ranking"},{default:c(()=>[i("Ranking")]),_:1})):n("",!0)])]),P]),s("div",S,[s("div",F,[o(t).state.user?(e(),d("h6",O,u(o(l).name),1)):n("",!0),D]),s("div",E,[s("ul",R,[r(a,{class:"list-group-item",to:"/competitions"},{default:c(()=>[i("Competiciones")]),_:1})])])])]),s("div",T,[r(m)])],64)}}};export{G as default};
