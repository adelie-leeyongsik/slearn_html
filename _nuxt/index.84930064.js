import{_ as S}from"./breadCrumbs.86a21415.js";import{f,r as w,g as x,h as b,c as d,b as l,i as s,a as t,t as i,n as m,d as a,y as _,N as c,v as u,o as p,l as r}from"./entry.e1c54084.js";import E from"./_snb.5c7ca73e.js";import k from"./_snbTablet.5be258ab.js";import h from"./itemList.d6649c94.js";import"./1.5c1c421a.js";import"./videoModal.6c4a8359.js";const L={class:"mypage"},N={class:"mypage-report"},$={class:"mypage__wrap"},z={class:"mypage__contents"},B=t("div",{class:"mypage__contents-head"},[t("div",{class:"c-text-title-lg"},"관심추천 내역"),t("div",{class:"c-text-title-sub"},[t("p",null,[a(" 내가 관심있는 컨텐츠를 확인한 내역입니다. 클릭하시면 다시 확인이 가능합니다."),t("br"),a(" 도움이 필요하실 땐 서울런 고객센터(1533-0909)로 연락주세요! ")])])],-1),V={class:"mypage__contents-body"},j={class:"mypage-edu__list-head"},D=t("dt",null,"바로 만나는 컨텐츠",-1),R=t("dt",null,"체험형 컨텐츠",-1),q=t("dt",null,"도움이 되는 정보",-1),M={class:"mypage-edu__list-body"},T={href:"javascript:void(0)"},A={key:0,class:"mypage-edu__contents"},F={href:"javascript:void(0)"},G={key:0,class:"mypage-edu__contents"},H={href:"javascript:void(0)"},I={key:0,class:"mypage-edu__contents"},J={class:"c-btn-group"},Z={__name:"index",setup(K){const y=f(),e=w({immCnt:0,immContents:[],immShow:!1,expCnt:0,expContents:[],expShow:!1,helpCnt:0,helpContents:[],helpShow:!1});x(()=>{C()});const C=async()=>{await b({id:"마이페이지 관심추천 내역 조회",endpoint:"/api/sq/my/rcmd/course/list",data:{},onResponse({data:n}){console.log("data >> ",n),e.immCnt=n.onSize,e.immContents=n.on,e.expCnt=n.ofSize,e.expContents=n.of,e.helpCnt=n.suSize,e.helpContents=n.su}})};return(n,o)=>{const g=S;return p(),d("div",L,[l(s(k)),l(g),t("div",N,[t("div",$,[l(s(E)),t("div",z,[B,t("div",V,[t("div",j,[t("dl",null,[D,t("dd",null,[t("span",null,i(s(e).immCnt),1)])]),t("dl",null,[R,t("dd",null,[t("span",null,i(s(e).expCnt),1)])]),t("dl",null,[q,t("dd",null,[t("span",null,i(s(e).helpCnt),1)])])]),t("div",M,[t("dl",null,[t("dt",{onClick:o[0]||(o[0]=v=>s(e).immShow=!s(e).immShow)},[t("div",{class:m(["mypage-edu__title",{active:s(e).immShow===!0}])},[t("a",T,[a("바로 만나는 컨텐츠 "),t("span",null,i(s(e).immCnt),1)])],2)]),_(t("dd",null,[("isEmpty"in n?n.isEmpty:s(r.isEmpty))(s(e).immContents)?u("",!0):(p(),d("div",A,[l(s(h),{dataList:s(e).immContents},null,8,["dataList"])]))],512),[[c,s(e).immShow==!0]])]),t("dl",null,[t("dt",{onClick:o[1]||(o[1]=v=>s(e).expShow=!s(e).expShow)},[t("div",{class:m(["mypage-edu__title",{active:s(e).expShow===!0}])},[t("a",F,[a("체험형 컨텐츠 "),t("span",null,i(s(e).expCnt),1)])],2)]),_(t("dd",null,[("isEmpty"in n?n.isEmpty:s(r.isEmpty))(s(e).expContents)?u("",!0):(p(),d("div",G,[l(s(h),{dataList:s(e).expContents},null,8,["dataList"])]))],512),[[c,s(e).expShow==!0]])]),t("dl",null,[t("dt",{onClick:o[2]||(o[2]=v=>s(e).helpShow=!s(e).helpShow)},[t("div",{class:m(["mypage-edu__title",{active:s(e).helpShow===!0}])},[t("a",H,[a("도움이 되는 정보 "),t("span",null,i(s(e).helpCnt),1)])],2)]),_(t("dd",null,[("isEmpty"in n?n.isEmpty:s(r.isEmpty))(s(e).helpContents)?u("",!0):(p(),d("div",I,[l(s(h),{dataList:s(e).helpContents},null,8,["dataList"])]))],512),[[c,s(e).helpShow==!0]])])]),t("div",J,[t("button",{class:"c-btn c-btn-lg c-btn-danger",onClick:o[3]||(o[3]=()=>{s(y).push("/interest")})}," 추천 받으러 바로가기 ")])])])])])])}}};export{Z as default};
