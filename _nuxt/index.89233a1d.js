import{_ as D}from"./breadCrumbs.ffbcaef2.js";import{_ as N}from"./CalendarFilter.b1877e2c.js";import{_ as k}from"./pagination.86fa1564.js";import{_ as w}from"./NoData.3efb81a9.js";import{f as S,aW as x,r as P,g as $,h as R,c as i,b as r,a as e,y as B,S as F,i as s,t as _,F as M,s as T,E as V,v as E,d,o as n,C as Y}from"./entry.e1c54084.js";import q from"./_snb.5c7ca73e.js";import I from"./_snbTablet.5be258ab.js";import"./Radio.ef28b89a.js";import"./Input.9ccbf189.js";import"./main.2d4970b0.js";import"./ch-nodata.e12229c9.js";import"./1.5c1c421a.js";const j={class:"mypage"},A={class:"mypage-event"},L={class:"mypage__wrap"},U={class:"mypage__contents"},W=e("div",{class:"mypage__contents-head"},[e("div",{class:"c-text-title-lg"},"내 이벤트 관리"),e("div",{class:"c-text-title-sub"},[e("p",null,[d(" 내가 응모한 이벤트를 확인하세요. "),e("br"),d(" 도움이 필요하실 땐 서울런 고객센터"),e("br",{class:"c-mo"}),d("(1533-0909)로 연락주세요! ")])])],-1),z={class:"mypage__contents-search"},G={class:"c-form-group"},H=e("label",{for:"status",class:"c-form-label"},"상태별",-1),J=e("option",{value:"A"},"전체",-1),K=e("option",{value:"N"},"진행중",-1),O=e("option",{value:"E"},"마감",-1),Q=e("option",{value:"W"},"당첨",-1),X=[J,K,O,Q],Z={class:"c-form-group"},ee={key:0,class:"mypage__contents-body"},te={class:"mypage__contents-head--sm"},se={class:"c-board__list"},oe={class:"c-board__item"},ae={class:"c-board__item-img"},ne=["onClick"],ce=["src"],ie={class:"c-board__item-body"},re={class:"c-board__item-title"},_e=["onClick"],de={class:"c-badge c-badge-blue"},le={class:"c-board__item-title-sub"},me={class:"c-board__item-foot"},pe={key:1,class:"mypage__contents-body"},xe={__name:"index",setup(he){const m=S();x();const t=P({pageNumber:"",searchType:"A",state:"",startDate:"",endDate:"",data:{rows:[]}});$(()=>{l()});const u=(a,c)=>{console.log(`${a} ~ ${c}`),t.startDate=a,t.endDate=c},l=async()=>{await R({id:"마이페이지 이벤트 조회",endpoint:"/api/sq/myevents",headers:"PUBLIC",data:{pageSize:10,pageNumber:t.pageNumber,order:"DESC",sort:"openStartDt",selecter:t.searchType},onResponse({data:a}){return console.log("이벤트 조회 >> ",a),t.data=a,!0}})},g=a=>{t.pageNumber=a,l()};return(a,c)=>{var p,h;const v=D,b=N,f=k,y=w;return n(),i("div",j,[r(I),r(v),e("div",A,[e("div",L,[r(q),e("div",U,[W,e("div",z,[e("div",G,[H,B(e("select",{title:"셀렉트박스",id:"status",class:"c-form-control c-form-control-sm","onUpdate:modelValue":c[0]||(c[0]=o=>s(t).searchType=o),onChange:l},X,544),[[F,s(t).searchType]])]),e("div",Z,[r(b,{onChanged:u})])]),s(t).data.rows.length>0?(n(),i("div",ee,[e("div",te," 총 "+_(s(t).data.rows.length)+"개 ",1),e("div",se,[(n(!0),i(M,null,T(s(t).data.rows,o=>(n(),i("div",oe,[e("div",ae,[e("a",{href:"javascript:void(0);",onClick:C=>s(m).push(`/event/${o.eventSeq}`)},[e("img",{src:o.image.fileRepo.webPath+o.image.fileRepo.linuxFileRepoPath+o.image.saveFileName,alt:"이벤트페이지 썸네일"},null,8,ce)],8,ne)]),e("div",ie,[e("div",re,[e("a",{href:"javascript:void(0);",onClick:C=>s(m).push(`/event/${o.eventSeq}`)},[d(_(o.title)+" ",1),e("div",de,_(o.winner),1)],8,_e)]),e("div",le," 응모일 : "+_(("uConvertDate"in a?a.uConvertDate:s(Y))(o.regDtm,"YYYY.MM.DD")),1),e("div",me,[e("ul",null,[e("li",null,_(o.status),1)])])])]))),256))]),((h=(p=s(t).data)==null?void 0:p.rows)==null?void 0:h.length)>0?(n(),V(f,{key:0,pageNumber:s(t).data.pageNumber,totalRecords:s(t).data.totalRecords,totalPages:s(t).data.totalPages,onChangedPageIndex:g},null,8,["pageNumber","totalRecords","totalPages"])):E("",!0)])):(n(),i("div",pe,[r(y,{contents:"참여한 이벤트가 없습니다. 다양한 이벤트에 참여해보세요!"})]))])])])])}}};export{xe as default};
