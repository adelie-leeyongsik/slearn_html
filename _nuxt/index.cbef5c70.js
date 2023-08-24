import{_ as V}from"./Input.9ccbf189.js";import{_ as v}from"./validationPanel.12a23ba5.js";import{f as k,k as C,O as b,r as x,g as y,c as R,a as s,b as l,i as o,D as U,d as w,h as m,J as I,o as T,aq as _,T as M}from"./entry.e1c54084.js";const N={class:"account"},z=s("h1",null,"비밀번호 재설정",-1),B={class:"account__body"},L=s("legend",null,[s("h2",{class:"account__title"},[w(" 3개월동안 비밀번호를"),s("br"),w(" 변경하지 않으셨습니다. ")])],-1),S={class:"c-form-group"},W={class:"c-form-group"},$={class:"c-form-group"},q={class:"c-form-group"},A={class:"account__foot"},D={class:"c-btn-group"},F={__name:"index",setup(E){const r=k(),d=C(),u=b(),e=x({id:"",pw:"",newPw:"",newPw2:"",isCheckPw:!1,isCheckPw2:!1});y(()=>{e.id=u.userId});const P=n=>{e.isCheckPw=n},g=n=>{e.isCheckPw2=n},h=async()=>{console.log("onChangeLater"),await m({method:"post",id:"비밀번호 3개월 후 변경",endpoint:"/api/login/chg_passwd_nexttime",onResponse({data:n,status:t,message:a}){if(t===200)n.rememberId=u.rememberId,M(n),r.push("/");else{d.alert("알림",a);return}}})},f=async()=>{e.isCheckPw&&e.isCheckPw2&&await m({method:"post",id:"비밀번호 변경",endpoint:"/api/login/chg_passwd",data:{oldPasswd:e.pw,newPasswd:e.newPw},onResponse({data:n,status:t,message:a}){t===200?d.alert("알림","비밀번호가 변경 되었습니다.<br/> 로그인 후 서비스를 계속 이용하실 수 있습니다.",()=>{r.push("/login")}):t===400?d.alert("알림","아이디가 존재하지 않습니다."):t===401&&d.alert("알림","기존 비밀번호가 일치하지 않습니다.")}})};return(n,t)=>{const a=V,c=v,p=I;return T(),R("div",N,[z,s("form",{class:"needs-validation",novalidate:"",onSubmit:t[4]||(t[4]=U(()=>{},["prevent"]))},[s("fieldset",null,[s("div",B,[L,s("div",S,[l(a,{modelValue:o(e).id,"onUpdate:modelValue":t[0]||(t[0]=i=>o(e).id=i),label:"아이디",type:"text",placeholder:"아이디를 입력해 주세요",title:"아이디",disabled:!0},null,8,["modelValue"])]),s("div",W,[l(a,{modelValue:o(e).pw,"onUpdate:modelValue":t[1]||(t[1]=i=>o(e).pw=i),label:"비밀번호",type:"password",placeholder:"기존 비밀번호를 입력해주세요.",title:"비밀번호"},null,8,["modelValue"])]),s("div",$,[l(a,{modelValue:o(e).newPw,"onUpdate:modelValue":t[2]||(t[2]=i=>o(e).newPw=i),label:"새로운 비밀번호",type:"password",placeholder:"새로운 비밀번호를 입력해주세요."},null,8,["modelValue"]),l(c,{value:o(e).newPw,items:[{text:"대소문자 영문, 숫자, 특수문자 중 2종류 이상 조합해주세요.",tester:()=>("uRegexpr"in n?n.uRegexpr:o(_))("PW_MAIN",o(e).newPw)},{text:"10자리 ~ 12자리까지 입력해주세요.",tester:()=>o(e).newPw.length>9&&o(e).newPw.length<=12},{text:"연속적인 숫자나 생일, 전화번호가 포함된 정보는 입력할 수 없습니다.",tester:()=>("uRegexpr"in n?n.uRegexpr:o(_))("PW_NUM",o(e).newPw)}],"onUpdate:modelValue":P},null,8,["value","items"])]),s("div",q,[l(a,{modelValue:o(e).newPw2,"onUpdate:modelValue":t[3]||(t[3]=i=>o(e).newPw2=i),label:"비밀번호 확인",type:"password",placeholder:"비밀번호를 입력해주세요."},null,8,["modelValue"]),l(c,{value:o(e).newPw2,items:[{text:"위에 입력하신 비밀번호와 동일하게 입력해주세요.",tester:()=>o(e).newPw===o(e).newPw2}],"onUpdate:modelValue":g},null,8,["value","items"])])]),s("div",A,[s("div",D,[l(p,{size:"auto",sizeType:"large",styleType:"blue",text:"3개월 후 변경",onClick:h}),l(p,{size:"auto",sizeType:"large",styleType:"danger",text:"비밀번호 변경",onClick:f,validator:o(e).isCheckPw&&o(e).isCheckPw2},null,8,["validator"])])])])],32)])}}};export{F as default};
