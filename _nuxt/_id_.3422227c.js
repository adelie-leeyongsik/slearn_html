import{_ as I}from"./breadCrumbs.ffbcaef2.js";import{k as N,f as U,j as g,au as M,V as k,r as R,g as $,h as y,aS as S,c as r,b as _,i as e,a as t,d as i,t as o,n as w,aR as B,o as u,ag as v}from"./entry.e1c54084.js";import O from"./_snb.5c7ca73e.js";import V from"./_snbTablet.5be258ab.js";import{T as x}from"./index.e40167c5.js";import"./ko-kr.09136cbc.js";import"./1.5c1c421a.js";const A={class:"mypage"},L={class:"mypage-edu__list"},P={class:"mypage__wrap"},G={class:"mypage__contents"},j=t("div",{class:"mypage__contents-head"},[t("div",{class:"c-text-title-lg"},"멘토 교육"),t("div",{class:"c-text-title-sub"},[t("p",null,[i(" 사전 필수교육을 완료 하셔야 멘토링이 가능합니다. "),t("br"),i(" 도움이 필요하실 땐 서울런 고객센터"),t("br",{class:"c-mo"}),i("(1533-0909)로 연락주세요! ")])])],-1),q={class:"mypage__contents-body"},z={class:"mypage__board"},F={class:"mypage__board-title"},H=t("span",null,"[온라인]",-1),J=t("div",{class:"mypage__board-title-writer"},[t("p",null,"2023.03.01")],-1),K={class:"mypage__board-contents"},Q={class:"mypage__board-contents-head"},W={class:"mypage__board-contents-head-list"},X=t("dt",null,"필수 여부",-1),Z=t("dt",null,"교육 시간",-1),tt=t("dl",null,[t("dt",null,"교육 형태"),t("dd",null,"온라인")],-1),et=t("dt",null,"수강 기간",-1),st={key:0},nt={key:1},ot=t("dl",null,[t("dt",null,"교육 인원"),t("dd",null,"-")],-1),at=t("dt",null,"수료 기준",-1),dt={class:"c-btn-group"},lt=["disabled"],bt={__name:"[id]",setup(it){const m=N(),p=U();g();const{MENTORING:{MENTORING_EDU_DETAIL_INFO:f,MENTORING_EDU_APPLY:D}}=M(),{params:{id:h,segment:c}}=g(),a=B(),b=k(null),s=R({slcIdx:"",courseName:"",requireYn:"",recruitStart:"",recruitEnd:"",summary:""});let d=!1;$(async()=>{await T()});const T=async()=>{await y({id:"멘토교육 상세 정보 조회",endpoint:S(f,{slcIdx:h}),headers:"PUBLIC",onResponse({data:n,status:l}){l===200&&(Object.assign(s,n),d=s.courseStatus!=="Y"&&s.courseAvailYn==="Y",a.el=b.value,a.viewer=!0,a.initialValue=s.summary,x.factory(a))}})},Y=()=>{p.push(`/mypage/edu/${c}`)},C=async()=>{m.confirm("알림","신청하시겠습니까?",async()=>{await y({id:"멘토교육 신청",method:"post",endpoint:D,headers:"PUBLIC",data:{slcIdx:h},onResponse({data:n,status:l}){l===200&&(d=!1,m.alert("알림","신청이 완료되었습니다.<br/>수강중 교육 메뉴에서 수강을 진행해주세요.",()=>{p.push("/mypage/edu/ing")}))}})})};return(n,l)=>{const E=I;return u(),r("div",A,[_(V,{currentUrl:`/mypage/edu/${e(c)}`},null,8,["currentUrl"]),_(E),t("div",L,[t("div",P,[_(O,{currentUrl:`/mypage/edu/${e(c)}`},null,8,["currentUrl"]),t("div",G,[j,t("div",q,[t("div",z,[t("div",F,[t("p",null,[H,i(o(e(s).courseName),1)]),J]),t("div",K,[t("div",Q,[t("div",W,[t("dl",null,[X,t("dd",null,o(e(s).requireYn==="Y"?"필수":"선택"),1)]),t("dl",null,[Z,t("dd",null,o(!e(s).eduTime||e(s).eduTime==="-"?"-":`${e(s).eduTime}분`),1)]),tt,t("dl",null,[et,e(s).recruitEnd?(u(),r("dd",nt,o(`${("uConvertDateTime"in n?n.uConvertDateTime:e(v))(e(s).recruitStart,"YYYY.MM.DD")} ~ ${("uConvertDateTime"in n?n.uConvertDateTime:e(v))(e(s).recruitEnd,"YYYY.MM.DD")}`),1)):(u(),r("dd",st,"제한없음"))]),ot,t("dl",null,[at,t("dd",null,o(`진도율 ${e(s).completetionCriterion||""}% 이상`),1)])])]),t("div",{ref_key:"editorDiv",ref:b},null,512)]),t("div",dt,[t("button",{class:"c-btn c-btn-lg c-btn-blue",onClick:Y},"목록으로"),t("button",{class:w(["c-btn c-btn-lg c-btn-danger",{"c-btn-inactive":!e(d)}]),disabled:!e(d),onClick:C},"신청하기",10,lt)])])])])])])])}}};export{bt as default};
