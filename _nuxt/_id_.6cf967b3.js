import{_ as l}from"./breadCrumbs.ffbcaef2.js";import{k as u,j as p,f as m,r as b,g as v,h as g,c as h,b as o,a as e,t as f,i as a,o as y,J as k}from"./entry.e1c54084.js";const w={class:"board"},B={class:"board-view"},S={class:"board-view__title"},x={class:"board-view__contents"},C=["innerHTML"],L={class:"c-btn-group"},R={__name:"[id]",setup(M){u();const n=p(),c=m(),t=b({pageNumber:0,detail:{description:"",boardSeq:"",title:"",regDtm:""},commentList:{},newComment:""});v(async()=>{r()});const i=()=>{c.back()},r=async()=>{await g({id:"성공스토리 조회",endpoint:"/api/sq/intro/success/story/detail",data:{successStorySeq:n.params.id},onResponse({data:s}){return console.log("스토리>>>>>>",s),console.log(t.detail),t.detail=s,!0}})};return(s,q)=>{const d=l,_=k;return y(),h("div",w,[o(d),e("div",B,[e("div",S,[e("p",null,f(a(t).detail.title),1)]),e("div",x,[e("div",{class:"board-view__contents-body",innerHTML:a(t).detail.description},null,8,C)]),e("div",L,[o(_,{onClick:i,size:"auto",sizeType:"large",text:"목록으로"})])])])}}};export{R as default};
