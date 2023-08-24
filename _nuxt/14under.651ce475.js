import{_ as G}from"./CommonContentsModal.1a643f7e.js";import{_ as Y}from"./Radio.ef28b89a.js";import{_ as B}from"./TermsGroup.575e6ec4.js";import{_ as U,f as O,k as w,O as D,r as $,g as z,h as T,l as r,c as p,b as u,w as F,i as o,a as l,t as h,D as J,v as _,E as K,d as b,F as Q,J as W,o as m,bf as X,p as Z,e as x}from"./entry.e1c54084.js";import ee from"./_nav.5a01d345.js";import se from"./siteSelect.3aa47d22.js";import"./Input.9ccbf189.js";import"./Checkbox.20dceeb0.js";import"./swiperItem.8d145322.js";import"./swiper-slide.b10528fd.js";import"./core.5e522b93.js";/* empty css                   *//* empty css                       *//* empty css                       */import"./navigation.87a869ac.js";import"./pagination.e64e0277.js";const g=E=>(Z("data-v-37c8a2d2"),E=E(),x(),E),te=["innerHTML"],oe={class:"account"},re={class:"account__body"},le=g(()=>l("legend",null,[l("h2",{class:"account__title"},[l("h2",{class:"account__title"},"학습정보 확인")])],-1)),ie={key:0,class:"c-form-group"},ae=g(()=>l("label",{for:"name",class:"c-form-label"},"학교급",-1)),ne={class:"account__site-sort"},ce={key:0,class:"account__site-sort"},ue={class:"c-form-group"},me=g(()=>l("label",{for:"name",class:"c-form-label"},"학년",-1)),de={key:0,class:"c-form-group"},pe=g(()=>l("label",{for:"name",class:"c-form-label"},"학습목적",-1)),_e={class:"account__site-select"},ge={key:0,class:"account__body"},fe=g(()=>l("h2",{class:"account__title"},[b(" 선택하신 학습사이트 "),l("br"),b(" 약관동의가 필요해요 ")],-1)),Le={key:0,class:"account__agree"},be={class:"account__agree-title"},Ee=g(()=>l("span",{class:"c-text-primary"},"(반드시 약관의 내용을 확인해주세요)",-1)),he={key:1,class:"account__agree"},ye={class:"account__agree-title"},Ae=g(()=>l("span",{class:"c-text-primary"},"(반드시 약관의 내용을 확인해주세요)",-1)),Te={key:2,class:"account__agree"},ke={class:"account__agree-title"},Ce=g(()=>l("span",{class:"c-text-primary"},"(반드시 약관의 내용을 확인해주세요)",-1)),je={class:"account__foot"},Pe={class:"c-btn-group"},ve={__name:"14under",setup(E){const k=O(),f=w(),C=D(),e=$({change:C.learnInfo.change,school:"",schoolList:[],grade:"",gradeList:[],gRadioList:[],purpose:"",purposeList:[],pRadioList:[],subjectList:[],subjAgree:"",subjAgreeNm:"",subjAgreeYn:"",lectureAgree:"",lectureAgreeNm:"",bookAgree:"",bookAgreeNm:"",subjTermsList:[{key:"subjTerm1",text:"이용약관에 관한 동의",value:!1,required:!0,cpId:"",termCode:"TEMPLATE_P002"},{key:"subjTerm2",text:"개인정보 수집/이용에 관한 동의",value:!1,required:!0,cpId:"",termCode:"TEMPLATE_P003"}],lectureTermsList:[{key:"lectureTerm1",text:"이용약관에 관한 동의",value:!1,required:!0,cpId:"",termCode:"TEMPLATE_P002"},{key:"lectureTerm2",text:"개인정보 수집/이용에 관한 동의",value:!1,required:!0,cpId:"",termCode:"TEMPLATE_P003"}],bookTermsList:[{key:"bookTerm1",text:"이용약관에 관한 동의",value:!1,required:!0,cpId:"",termCode:"TEMPLATE_P002"},{key:"bookTerm2",text:"개인정보 수집/이용에 관한 동의",value:!1,required:!0,cpId:"",termCode:"TEMPLATE_P003"}],termInfo:{}});z(()=>{N()});const N=()=>{T({method:"get",id:"회원가입 학습사이트 선택",endpoint:"/api/platform_chg/form",onResponse({data:s,status:t,message:a}){var I;console.log("data ",s);let d=s.schLvlPcdList.filter(i=>r.isEqual(i.cd,"SCHLVL_P001")||r.isEqual(i.cd,"SCHLVL_P002")||r.isEqual(i.cd,"SCHLVL_P004"));d.forEach(i=>{i.text=i.cdnm,i.value=i.cd,i.column=!!r.isEqual(i.cd,"SCHLVL_P001")}),e.schoolList=d;let L=s.schGrdPcdList;L.forEach(i=>{i.text=i.cdnm,i.value=i.cd}),e.gradeList=L,e.purposeList=s.lrnObjList,e.subjectList=s.lrnPltTcdList.concat(s.subLrnPltTcdList);let c=C.learnInfo;console.log(" learn ",c),j(c.schl_level.cd),P(c.schl_grad.cd),v(c.cp.cd),e.purpose=c.lrnObjCode;let n=c.sub_cp.map(i=>i.cd).filter(i=>!r.isEqual(i,"SUB_LRNPLT_T002")),A=c.sub_cp.map(i=>i.cd).filter(i=>r.isEqual(i,"SUB_LRNPLT_T002"));n.length>0&&q(n[0]),A.length>0&&S(A[0]),e.paramInfo={change:e.change,subjParam:(I=c.cp)==null?void 0:I.cd,lectureParam:n[0],bookParam:A[0]}}})},j=s=>{e.school=s,r.isEqual(s,"SCHLVL_P001")?e.gRadioList=e.gradeList:r.isEqual(s,"SCHLVL_P002")&&(e.gRadioList=e.gradeList.filter(t=>r.isEqual(t.cd,"SCHGRD_P001")||r.isEqual(t.cd,"SCHGRD_P002")||r.isEqual(t.cd,"SCHGRD_P003")||r.isEqual(t.cd,"SCHGRD_P007")),e.pRadioList=e.purposeList.filter(t=>r.isEqual(t.cd,"GE")||r.isEqual(t.cd,"SP")),e.pRadioList.forEach(t=>{t.text=t.cdnm,t.value=t.cd})),e.gRadioList.forEach(t=>{t.text=t.cdnm,t.value=t.cd}),e.subjAgree="",e.lectureAgree="",e.bookAgree=""},P=s=>{e.grade=s},v=s=>{r.isEmpty(s)||(e.subjAgreeYn=e.subjectList.filter(t=>t.cp_id===s)[0].agreeYn,r.isEqual(e.subjAgreeYn,"N")?(e.subjAgree=s,e.subjAgreeNm=e.subjectList.filter(t=>t.cp_id===e.subjAgree)[0].cp_name,e.subjTermsList.forEach(t=>{t.cpId=e.subjAgree,t.value=!1})):e.subjAgree="")},q=s=>{let t="";r.isEmpty(s)||(t=e.subjectList.filter(a=>a.cp_id===s)[0].agreeYn),r.isEqual(t,"N")?(e.lectureAgree=s,e.lectureAgreeNm=e.subjectList.filter(a=>a.cp_id===e.lectureAgree)[0].cp_name,e.lectureTermsList.forEach(a=>{a.cpId=e.lectureAgree,a.value=!1})):e.lectureAgree=""},S=s=>{let t="";r.isEmpty(s)||(t=e.subjectList.filter(a=>a.cp_id===s)[0].agreeYn),r.isEqual(t,"N")?(e.bookAgree=s,e.bookAgreeNm=e.subjectList.filter(a=>a.cp_id===e.bookAgree)[0].cp_name,e.bookTermsList.forEach(a=>{a.cpId=e.bookAgree,a.value=!1})):e.bookAgree=""},y=async s=>{await T({method:"get",id:"회원가입 학습사이트 약관 조회",endpoint:"/api/join/terms",data:{cp_id:s.id,term_div_code:s.code},onResponse({data:t,status:a}){e.termInfo.isShow=!0,e.termInfo.title=t.term_title,e.termInfo.innerContents=t.term_desc}})},V=()=>{e.termInfo.isShow=!1},R=()=>{k.go(-1)},H=()=>{if(!r.isEqual(e.school,"SCHLVL_P004")){if(r.isEmpty(e.school))return f.alert("알림","학교급을 선택해주세요."),!1;if(r.isEmpty(e.grade))return f.alert("알림","학년을 선택해주세요."),!1;if(r.isEqual(e.school,"SCHLVL_P002")&&r.isEmpty(e.purpose))return f.alert("알림","학습목적을 선택해주세요."),!1;if(!r.isEqual(e.subjAgreeYn,"Y")){if(r.isEmpty(e.subjAgree))return f.alert("알림","교과 학습사이트를 선택해주세요."),!1;if(e.subjTermsList.some(s=>s.value===!1))return f.alert("알림",`${e.subjAgreeNm} 약관동의가 필요합니다.`),!1}if(!r.isEmpty(e.lectureAgree)&&e.lectureTermsList.some(s=>s.value===!1))return f.alert("알림",`${e.lectureAgreeNm} 약관동의가 필요합니다.`),!1;if(!r.isEmpty(e.bookAgree)&&e.bookTermsList.some(s=>s.value===!1))return f.alert("알림",`${e.bookAgreeNm} 약관동의가 필요합니다.`),!1}return!0},M=()=>{if(!H())return;let s={};e.paramInfo.change?s={schlvl:e.school,schgrd:e.grade,lrnpltCd:e.subjAgree,subLrnpltCd:e.lectureAgree+","+e.bookAgree,lrnObj:e.purpose}:s={schlvl:e.school,schgrd:e.grade,lrnpltCd:e.paramInfo.subjParam,subLrnpltCd:e.paramInfo.lectureParam+","+e.paramInfo.bookParam,lrnObj:e.purpose},T({method:"post",id:"재검증 학습사이트 변경",endpoint:"/api/platform_chg/post",data:s,onResponse({data:t,status:a,message:d}){console.log("data ",t),console.log("status ",a),console.log("message ",d),a===200&&k.push("/")}})};return(s,t)=>{const a=G,d=Y,L=B,c=W;return m(),p(Q,null,[u(a,{data:o(e).termInfo,onClose:V},{innerContents:F(()=>[l("div",{class:"c-modals__contents-terms",innerHTML:o(e).termInfo.innerContents},null,8,te),l("div",{class:"c-modals__button"},[l("div",{class:"c-btn-group"},[l("button",{type:"submit",class:"c-btn c-btn-danger",onClick:V}," 확인 ")])])]),_:1},8,["data"]),l("div",oe,[l("h1",null,h(("uGetSubtitle"in s?s.uGetSubtitle:o(X))(o(e).isNavActive)),1),u(ee,{active:4}),l("form",{onSubmit:t[6]||(t[6]=J(()=>{},["prevent"]))},[l("div",re,[le,("isEmpty"in s?s.isEmpty:o(r.isEmpty))(o(e).schoolList)?_("",!0):(m(),p("div",ie,[ae,u(d,{class:"c-form-check-group--col3",modelValue:o(e).school,"onUpdate:modelValue":[t[0]||(t[0]=n=>o(e).school=n),j],items:o(e).schoolList},null,8,["modelValue","items"])])),l("div",ne,[("isEqual"in s?s.isEqual:o(r.isEqual))(o(e).school,"SCHLVL_P001")||("isEqual"in s?s.isEqual:o(r.isEqual))(o(e).school,"SCHLVL_P002")?(m(),p("div",ce,[l("div",ue,[me,u(d,{class:"c-form-check-group--col4",modelValue:o(e).grade,"onUpdate:modelValue":[t[1]||(t[1]=n=>o(e).grade=n),P],items:o(e).gRadioList},null,8,["modelValue","items"])]),("isEqual"in s?s.isEqual:o(r.isEqual))(o(e).school,"SCHLVL_P002")?(m(),p("div",de,[pe,u(d,{modelValue:o(e).purpose,"onUpdate:modelValue":t[2]||(t[2]=n=>o(e).purpose=n),items:o(e).pRadioList},null,8,["modelValue","items"])])):_("",!0)])):_("",!0)]),l("div",_e,[("isEmpty"in s?s.isEmpty:o(r.isEmpty))(o(e).school)?_("",!0):(m(),K(se,{key:0,typeInfo:{school:o(e).school,grade:o(e).grade},dataList:o(e).subjectList,onOnChangeSubj:v,onOnChangeLecture:q,onOnChangeBook:S,paramInfo:o(e).paramInfo},null,8,["typeInfo","dataList","paramInfo"]))])]),!("isEmpty"in s?s.isEmpty:o(r.isEmpty))(o(e).subjAgree)||!("isEmpty"in s?s.isEmpty:o(r.isEmpty))(o(e).lectureAgree)||!("isEmpty"in s?s.isEmpty:o(r.isEmpty))(o(e).bookAgree)?(m(),p("div",ge,[fe,("isEmpty"in s?s.isEmpty:o(r.isEmpty))(o(e).subjAgree)?_("",!0):(m(),p("div",Le,[l("div",be,[b(" ‘"+h(o(e).subjAgreeNm)+"’ 약관동의 ",1),Ee]),u(L,{modelValue:o(e).subjTermsList,"onUpdate:modelValue":t[3]||(t[3]=n=>o(e).subjTermsList=n),onTerms:y},null,8,["modelValue"])])),("isEmpty"in s?s.isEmpty:o(r.isEmpty))(o(e).lectureAgree)?_("",!0):(m(),p("div",he,[l("div",ye,[b(" ‘"+h(o(e).lectureAgreeNm)+"’ 약관동의 ",1),Ae]),u(L,{modelValue:o(e).lectureTermsList,"onUpdate:modelValue":t[4]||(t[4]=n=>o(e).lectureTermsList=n),onTerms:y},null,8,["modelValue"])])),("isEmpty"in s?s.isEmpty:o(r.isEmpty))(o(e).bookAgree)?_("",!0):(m(),p("div",Te,[l("div",ke,[b(" ‘"+h(o(e).bookAgreeNm)+"’ 약관동의 ",1),Ce]),u(L,{modelValue:o(e).bookTermsList,"onUpdate:modelValue":t[5]||(t[5]=n=>o(e).bookTermsList=n),onTerms:y},null,8,["modelValue"])]))])):_("",!0),l("div",je,[l("div",Pe,[u(c,{size:"auto",sizeType:"large",styleType:"blue",text:"이전",onClick:R}),u(c,{size:"auto",sizeType:"large",styleType:"danger",text:"완료",onClick:M,validator:o(e).isValidation},null,8,["validator"])])])],32)])],64)}}},ze=U(ve,[["__scopeId","data-v-37c8a2d2"]]);export{ze as default};
