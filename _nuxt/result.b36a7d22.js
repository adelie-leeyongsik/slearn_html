import{_ as r,O as p,f as g,c as n,F as _,a as t,v as h,l as v,o as a,p as m,e as y,d as o}from"./entry.e1c54084.js";const s=e=>(m("data-v-a664819e"),e=e(),y(),e),f={class:"account"},k=s(()=>t("h1",null,"회원가입",-1)),Y=s(()=>t("div",{class:"account__body"},[t("div",{class:"account__title"},[o(" 이미 가입된 회원입니다."),t("br"),o(" 가입된 정보로 로그인 하세요. ")])],-1)),C=s(()=>t("strong",null,"로그인",-1)),N=[C],x=s(()=>t("div",{class:"account__body"},[t("div",{class:"account__title"},[o(" 탈퇴 회원입니다."),t("br"),o(" 회원탈퇴 후 6개월 이내 재가입이 불가합니다. ")])],-1)),I=s(()=>t("strong",null,"메인으로",-1)),j=[I],q=s(()=>t("div",{class:"account__body"},[t("div",{class:"account__title"},[o(" 서울런 가입 대상자가 아닙니다. "),t("br"),o(" 서울시에 거주하는 6세에서 24세의 청소년만 가입할 수 있습니다. ")])],-1)),S=s(()=>t("strong",null,"메인으로",-1)),B=[S],E=s(()=>t("div",{class:"account__body"},[t("div",{class:"account__title"},[o(" 서울런 가입 대상자입니다. "),t("br"),o(" 계속해서 회원 가입을 진행해 주세요. ")])],-1)),J=s(()=>t("strong",null,"확인",-1)),V=[J],F=s(()=>t("div",{class:"account__body"},[t("div",{class:"account__title"},[o(" 자동 검증 대상자가 아닙니다. "),t("br"),o(" 별도 증빙 자료를 제출하여 회원 가입을 진행하시겠습니까? ")])],-1)),L=s(()=>t("strong",null,"취소",-1)),M=[L],R=s(()=>t("strong",null,"확인",-1)),w=[R],D={__name:"result",props:{data:{default:null}},setup(e){const c=e,u=p(),l=g(),b=()=>{l.push("/login")},d=()=>{u.joinInfo=c.data,v.isEqual(c.data.qualYn,"Y")?l.push("/join/step02"):l.push("/join/step01")},i=()=>{l.push("/")};return(O,T)=>(a(),n("div",f,[k,c.data.juminNumDupYn==="Y"?(a(),n(_,{key:0},[Y,t("div",{class:"account__foot"},[t("div",{class:"c-btn-group"},[t("button",{type:"submit",class:"c-btn c-btn-lg c-btn-danger",onClick:b},N)])])],64)):c.data.retrYNWithin6M==="Y"?(a(),n(_,{key:1},[x,t("div",{class:"account__foot"},[t("div",{class:"c-btn-group"},[t("button",{type:"submit",class:"c-btn c-btn-lg c-btn-danger",onClick:i},j)])])],64)):c.data.seoulJuminYn==="N"||c.data.ageCondYn==="N"?(a(),n(_,{key:2},[q,t("div",{class:"account__foot"},[t("div",{class:"c-btn-group"},[t("button",{type:"submit",class:"c-btn c-btn-lg c-btn-danger",onClick:i},B)])])],64)):c.data.seoulJuminYn==="Y"&&c.data.qualYn==="Y"?(a(),n(_,{key:3},[E,t("div",{class:"account__foot"},[t("div",{class:"c-btn-group"},[t("button",{type:"submit",class:"c-btn c-btn-lg c-btn-danger",onClick:d},V)])])],64)):c.data.qualYn==="N"?(a(),n(_,{key:4},[F,t("div",{class:"account__foot"},[t("div",{class:"c-btn-group"},[t("button",{type:"submit",class:"c-btn c-btn-lg c-btn-blue",onClick:i},M),t("button",{type:"submit",class:"c-btn c-btn-lg c-btn-danger",onClick:d},w)])])],64)):h("",!0)]))}},z=r(D,[["__scopeId","data-v-a664819e"]]);export{z as default};
