import{_ as k}from"./AttachFile.14cc9ce2.js";import{_ as L}from"./CommonContentsModal.1a643f7e.js";import{f as E,O as I,r as C,g as M,c as u,b as l,w as q,i as o,a as s,v as r,E as F,F as j,d as h,J as w,o as c,l as d,T as x,h as z}from"./entry.e1c54084.js";import"./Radio.ef28b89a.js";import"./Input.9ccbf189.js";const $={class:"c-modals__button"},B={class:"c-btn-group"},N={class:"account"},S=s("h1",null,"회원가입",-1),H={key:0,class:"account__body join__complete"},V=s("div",{class:"join__complete-title"},"가입 신청이 보류 되었습니다.",-1),A=s("p",null,[h(" 관리자의 서류심사 결과 다음과 같은 사유로 가입이 보류 되었습니다. "),s("br"),h(" 서류 보충 후 다시 한번 가입신청을 해주세요. ")],-1),D=["innerHTML"],O={class:"c-btn-group"},R=s("p",null," *궁금하신 사항은 고객센터(1533-0909)로 연락주시면 안내 드리겠습니다. ",-1),J={key:1,class:"account__body join__complete"},P=s("div",{class:"join__complete-title"},"가입 신청이 거절 되었습니다.",-1),U=s("p",null,"관리자의 서류심사 결과 다음과 같은 사유로 가입이 거절 되었습니다.",-1),G=["innerHTML"],K=s("p",null," *궁금하신 사항은 고객센터(1533-0909)로 연락주시면 안내 드리겠습니다. ",-1),Q={class:"account__foot"},W={class:"c-btn-group"},et={__name:"result",setup(X){const f=E(),b=I(),t=C({data:b.loginResult,modalInfo:{},fileInfoList:[],btnText:"추가 파일 등록",isCheck:!1});M(()=>{t.data.desc=t.data.rjctDesc.replace(/(?:\r\n|\r|\n)/g,"<br />")});const g=()=>{console.log("fileModal"),!t.isCheck&&(t.modalInfo.isShow=!0,t.modalInfo.title="증빙자료 첨부")},p=e=>{if(console.log("data ",t.data),x({accessToken:t.data.accessToken}),t.modalInfo.isShow=!1,e){const n=new FormData;d.isEmpty(t.fileInfoList)||t.fileInfoList.forEach(a=>{n.append("files",a)}),z({method:"post",id:"로그인 보완서류제출",endpoint:"/api/login/addAttach",headers:"FILE_UPLOAD",data:n,onResponse({data:a,status:_,message:i}){_===200&&(t.isCheck=!0,t.btnText="등록 완료")}})}},T=e=>{t.fileInfoList=e},v=()=>{f.push("/login")},y=()=>{f.push("/")};return(e,n)=>{const a=k,_=L,i=w;return c(),u(j,null,[l(_,{data:o(t).modalInfo,onClose:n[2]||(n[2]=m=>o(t).modalInfo.isShow=!1)},{innerContents:q(()=>[l(a,{labelTitle:"증빙자료 첨부",dataList:o(t).fileInfoList,boardName:"join",onOnFileInfo:T},null,8,["dataList"]),s("div",$,[s("div",B,[s("button",{type:"submit",class:"c-btn c-btn-blue",onClick:n[0]||(n[0]=m=>p(!1))}," 닫기 "),s("button",{type:"submit",class:"c-btn c-btn-danger",onClick:n[1]||(n[1]=m=>p(!0))}," 확인 ")])])]),_:1},8,["data"]),s("div",N,[S,("isEqual"in e?e.isEqual:o(d.isEqual))(o(t).data.status,403)?(c(),u("div",H,[V,A,s("div",{class:"account__info",innerHTML:o(t).data.desc},null,8,D),s("div",O,[l(i,{size:"auto",sizeType:"large",styleType:"blue",text:o(t).btnText,onClick:g},null,8,["text"])]),R])):r("",!0),("isEqual"in e?e.isEqual:o(d.isEqual))(o(t).data.status,402)?(c(),u("div",J,[P,U,s("div",{class:"account__info",innerHTML:o(t).data.desc},null,8,G),K])):r("",!0),s("div",Q,[s("div",W,[l(i,{size:"auto",sizeType:"large",styleType:"blue",text:"메인 화면으로 가기",onClick:y}),("isEqual"in e?e.isEqual:o(d.isEqual))(o(t).data.status,403)?(c(),F(i,{key:0,size:"auto",sizeType:"large",styleType:"danger",text:"로그인 하기",onClick:v})):r("",!0)])])])],64)}}};export{et as default};
