import{_ as I}from"./pageTitle.95eb6349.js";import{f as x,r as u,g as v,h as p,c as b,b as L,a as t,n as m,i as s,t as o,l as a,o as D}from"./entry.e1c54084.js";import"./breadCrumbs.86a21415.js";const h={class:"rule"},g={class:"rule-wrap"},P={class:"rule__nav"},N=t("p",null,"이전 약관보기",-1),y=t("p",null,"다음 약관보기",-1),O={class:"rule__contents"},k={class:"rule__section"},C=["innerHTML"],H={__name:"privacy",setup(E){const l=x(),e=u({termIdx:1,termInfoList:[],termInfo:"",termDate:"",isPrevDisabled:!1,isNextDisabled:!0});v(()=>{d()});const d=()=>{p({method:"get",id:"개인정보처리방침 조회",endpoint:"/api/join/terms_privacy_policy",data:{},onResponse({data:r,status:n}){var i;console.log("data ",r),n===200&&(e.termInfoList=r,e.termInfo=r[0].term_desc,e.termPrevDate=(i=r[1])==null?void 0:i.term_title.substr(r[1].term_title.indexOf("(")),e.termNextDate="(-)")}})},_=()=>{e.termPrevDate=a.isEmpty(e.termInfoList[e.termIdx+1])?"(-)":e.termInfoList[e.termIdx+1].term_title.substr(e.termInfoList[e.termIdx+1].term_title.indexOf("(")),e.termNextDate=e.termInfoList[e.termIdx-1].term_title.indexOf("(")==-1?"(-)":e.termInfoList[e.termIdx-1].term_title.substr(e.termInfoList[e.termIdx-1].term_title.indexOf("(")),e.termIdx<e.termInfoList.length&&(e.isNextDisabled=!1,e.termInfo=e.termInfoList[e.termIdx].term_desc),e.termIdx++,e.termIdx===e.termInfoList.length&&(e.termIdx=e.termInfoList.length-1,e.isPrevDisabled=!0)},c=()=>{e.termIdx--,e.termPrevDate=e.termInfoList[e.termIdx+1].term_title.substr(e.termInfoList[e.termIdx+1].term_title.indexOf("(")),e.termNextDate=a.isEmpty(e.termInfoList[e.termIdx-1])||e.termInfoList[e.termIdx-1].term_title.indexOf("(")==-1?"(-)":e.termInfoList[e.termIdx-1].term_title.substr(e.termInfoList[e.termIdx-1].term_title.indexOf("(")),e.termIdx>=0&&(e.isPrevDisabled=!1,e.termInfo=e.termInfoList[e.termIdx].term_desc),e.termIdx===0&&(e.termIdx=1,e.isNextDisabled=!0,e.isPrevDisabled=!1)},f=()=>{l.push("/")};return(r,n)=>{const i=I;return D(),b("div",h,[L(i,{title:"개인정보 처리방침"}),t("div",g,[t("div",P,[t("a",{href:"javascript:void(0)",class:m(["rule__nav-item rule__nav-item-prev",{"rule__nav-item--disabled":s(e).isPrevDisabled}]),onClick:_},[N,t("span",null,o(s(e).termPrevDate),1)],2),t("a",{href:"javascript:void(0)",class:m(["rule__nav-item rule__nav-item-next",{"rule__nav-item--disabled":s(e).isNextDisabled}]),onClick:c},[y,t("span",null,[t("span",null,o(s(e).termNextDate),1)])],2)]),t("div",O,[t("div",k,[t("div",{innerHTML:s(e).termInfo},null,8,C)]),t("div",{class:"c-btn-group"},[t("button",{class:"c-btn c-btn-lg c-btn-primary",onClick:f}," 홈으로 ")])])])])}}};export{H as default};
