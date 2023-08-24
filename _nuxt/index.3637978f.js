import{_ as T}from"./breadCrumbs.86a21415.js";import{_ as $}from"./title.fb65f11f.js";import{k as w,g as O,r as B,h,c as a,b as r,a as s,F as m,s as u,i as o,o as p,t as l,n as N,d as b,l as j,v as x}from"./entry.e1c54084.js";import z from"./_snb.5c7ca73e.js";import E from"./_snbTablet.5be258ab.js";import"./1.5c1c421a.js";const L={class:"mypage"},M={class:"mypage-report"},P={class:"mypage__wrap"},V={class:"mypage__contents"},D={class:"mypage__contents-head"},F={class:"mypage__contents-body"},U={class:"mypage-edu__list-head"},q={class:"mypage-edu__list-body"},A=["onClick"],R={href:"javascript:void(0)"},G={key:0},H={class:"mypage-edu__contents"},J={class:"lecture"},K={class:"lecture-list lecture-list--type03"},Q={class:"lecture-list__item-head"},W={class:"lecture-list__item-head-img"},X=["src","onClick"],Y={class:"lecture-list__item-title"},Z=["href"],ss={class:"lecture-list__item-type"},ts={class:"lecture-list__item-time"},es=["onClick"],ns=s("i",{class:"ico ico-copy"},"복사",-1),ds={__name:"index",setup(is){const v=w(),f=t=>{n.lp[t].isOpen=!n.lp[t].isOpen};O(async()=>{await y(),await g()});const n=B({lp:{sub:{isOpen:!1,sectionTitle:"교과 강좌 추천",items:[],count:0},nonSub:{isOpen:!1,sectionTitle:"전문 강좌 추천",items:[],count:0},read:{isOpen:!1,sectionTitle:"독서 추천",items:[],count:0},mentor:{isOpen:!1,sectionTitle:"멘토 추천 강좌",items:[],count:0}},data:{items:[],count:0}}),d=(t,i)=>t.cpId.split("_")[t.cpId.split("_").length-1]<i.cpId.split("_")[i.cpId.split("_").length-1]?-1:t.cpId.split("_")[t.cpId.split("_").length-1]>i.cpId.split("_")[i.cpId.split("_").length-1]?1:t.cpId.split("_")[t.cpId.split("_").length-1]===i.cpId.split("_")[i.cpId.split("_").length-1]?0:-1,y=async()=>{await h({id:"멘토 추천 강의 리스트 조회",endpoint:"/api/sq/my/rcmd/mentor/list",headers:"PUBLIC",onResponse({data:t}){return n.lp.mentor.items=t.mentor.sort((i,_)=>d(i,_)),n.lp.mentor.count=t.mentorSize,!0}})},g=async()=>{await h({id:"cp 추천 강의 리스트 조회",endpoint:"/api/sq/my/rcmd/cp/list",headers:"PUBLIC",onResponse({data:t}){return n.lp.nonSub.items=t.nonSub.sort((i,_)=>d(i,_)),n.lp.nonSub.count=t.nonSubSize,n.lp.read.items=t.read.sort((i,_)=>d(i,_)),n.lp.read.count=t.readSize,n.lp.sub.items=t.sub.sort((i,_)=>d(i,_)),n.lp.sub.count=t.subSize,!0}})},I=t=>{window.open(t)},k=async t=>{await window.navigator.clipboard.writeText(t).then(()=>{v.alert("알림","복사되었습니다.")})};return(t,i)=>{const _=T,C=$;return p(),a("div",L,[r(E),r(_),s("div",M,[s("div",P,[r(z),s("div",V,[s("div",D,[r(C,{title:"추천 강의",desc:`나의 활동과 학습에 대한 분석을 통해 맞춤 강의를 AI가 분석 하여\r
                추천해 드립니다.<br />\r
                도움이 필요하실 땐 서울런 고객센터(1533-0909)로 연락주세요!`})]),s("div",F,[s("div",U,[(p(!0),a(m,null,u(Object.keys(o(n).lp),c=>(p(),a("dl",null,[s("dt",null,l(o(n).lp[c].sectionTitle),1),s("dd",null,[s("span",null,l(o(n).lp[c].count),1)])]))),256))]),s("div",q,[(p(!0),a(m,null,u(Object.keys(o(n).lp),c=>(p(),a("dl",null,[s("dt",{onClick:e=>f(c)},[s("div",{class:N(["mypage-edu__title",{active:o(n).lp[c].isOpen}])},[s("a",R,[b(l(o(n).lp[c].sectionTitle)+" ",1),s("span",null,l(o(n).lp[c].count),1)])],2)],8,A),!("isEmpty"in t?t.isEmpty:o(j.isEmpty))(o(n).lp[c].items)&&o(n).lp[c].isOpen?(p(),a("dd",G,[s("div",H,[s("div",J,[s("div",K,[(p(!0),a(m,null,u(o(n).lp[c].items,e=>(p(),a("div",{class:"lecture-list__item",key:e},[s("div",Q,[s("div",W,[s("img",{src:`${e.nonActvLogoImgFilePath}`,alt:"로고",onClick:S=>I(e.url)},null,8,X)])]),s("div",Y,[s("p",null,[s("a",{href:`${e.url}`,target:"_blank"},l(e.courseName),9,Z)])]),s("div",ss,l(e.grade)+"과정 "+l(e.subject?` · ${e.subject}`:"")+" "+l(e.courseType?` · ${e.courseType}`:""),1),s("div",ts,[s("p",null,l(e.number_of_sessions?`총 ${e.number_of_sessions}차시`:"")+" "+l(e.number_of_sessions&&e.time_min?`, ${e.number_of_sessions*e.time_min}분`:"")+" "+l(!e.number_of_sessions&&e.time_min?`${e.time_min}분`:""),1),s("button",{class:"c-btn c-btn-sm c-btn-radius c-btn-outline",onClick:S=>k(e.courseName)},[ns,b("강의명 복사 ")],8,es)])]))),128))])])])])):x("",!0)]))),256))])])])])])])}}};export{ds as default};
