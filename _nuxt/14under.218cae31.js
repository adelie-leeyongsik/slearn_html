import{_ as k}from"./Radio.ef28b89a.js";import{_ as y,f as V,k as R,O as I,r as N,g as v,h as H,l as t,c as g,a,i,b as L,v as f,E as D,D as Y,o as d,p as B,e as T,J as G}from"./entry.e1c54084.js";import O from"./siteSelect.3aa47d22.js";import"./Input.9ccbf189.js";import"./swiperItem.8d145322.js";import"./swiper-slide.b10528fd.js";import"./core.5e522b93.js";/* empty css                   *//* empty css                       *//* empty css                       */import"./navigation.87a869ac.js";import"./pagination.e64e0277.js";const p=u=>(B("data-v-6aa1189d"),u=u(),T(),u),U={class:"account"},w=p(()=>a("h1",null,"학습사이트 미리보기",-1)),M={class:"account__body"},z=p(()=>a("legend",null,[a("h2",{class:"account__title"},[a("h2",{class:"account__title"},"학습정보 확인")])],-1)),$={key:0,class:"c-form-group"},J=p(()=>a("label",{for:"name",class:"c-form-label"},"학교급",-1)),F={class:"account__site-sort"},K={key:0,class:"account__site-sort"},Q={class:"c-form-group"},W=p(()=>a("label",{for:"name",class:"c-form-label"},"학년",-1)),X={key:0,class:"c-form-group"},Z=p(()=>a("label",{for:"name",class:"c-form-label"},"학습목적",-1)),x={class:"account__site-select"},ee={class:"account__foot"},se={class:"c-btn-group"},oe={__name:"14under",props:{learnInfo:{type:Object,defualt:{}}},setup(u){const m=u;V(),R(),I();const e=N({school:"",schoolList:[],grade:"",gradeList:[],gRadioList:[],purpose:"",purposeList:[],pRadioList:[],subjectList:[],subjAgree:"",subjAgreeNm:"",subjAgreeYn:"",lectureAgree:"",lectureAgreeNm:"",bookAgree:"",bookAgreeNm:"",paramInfo:{}});v(()=>{S()});const S=()=>{H({method:"get",id:"회원가입 학습사이트 선택",endpoint:"/api/platform_chg/form",onResponse({data:s,status:o,message:c}){console.log("data ",s);let _=s.schLvlPcdList.filter(l=>t.isEqual(l.cd,"SCHLVL_P001")||t.isEqual(l.cd,"SCHLVL_P002")||t.isEqual(l.cd,"SCHLVL_P004"));_.forEach(l=>{l.text=l.cdnm,l.value=l.cd,l.column=!!t.isEqual(l.cd,"SCHLVL_P001")}),e.schoolList=_;let r=s.schGrdPcdList;r.forEach(l=>{l.text=l.cdnm,l.value=l.cd}),e.gradeList=r,e.purposeList=s.lrnObjList,e.subjectList=s.lrnPltTcdList.concat(s.subLrnPltTcdList);let n=m.learnInfo;console.log(" learn ",n),E(n.schl_level.cd),q(n.schl_grad.cd),C(n.cp.cd),e.purpose=n.lrnObjCode;let h=n.sub_cp.map(l=>l.cd).filter(l=>!t.isEqual(l,"SUB_LRNPLT_T002")),b=n.sub_cp.map(l=>l.cd).filter(l=>t.isEqual(l,"SUB_LRNPLT_T002"));h.length>0&&A(h[0]),b.length>0&&P(b[0]),e.paramInfo={change:!0,subjParam:n.cp.cd,lectureParam:h[0],bookParam:b[0]}}})},E=s=>{e.school=s,t.isEqual(s,"SCHLVL_P001")?e.gRadioList=e.gradeList:t.isEqual(s,"SCHLVL_P002")&&(e.gRadioList=e.gradeList.filter(o=>t.isEqual(o.cd,"SCHGRD_P001")||t.isEqual(o.cd,"SCHGRD_P002")||t.isEqual(o.cd,"SCHGRD_P003")||t.isEqual(o.cd,"SCHGRD_P007")),e.pRadioList=e.purposeList.filter(o=>t.isEqual(o.cd,"GE")||t.isEqual(o.cd,"SP")),e.pRadioList.forEach(o=>{o.text=o.cdnm,o.value=o.cd})),e.gRadioList.forEach(o=>{o.text=o.cdnm,o.value=o.cd}),e.subjAgree="",e.lectureAgree="",e.bookAgree=""},q=s=>{e.grade=s},C=s=>{t.isEmpty(s)||(e.subjAgreeYn=e.subjectList.filter(o=>o.cp_id===s)[0].agreeYn,t.isEqual(e.subjAgreeYn,"N")?(e.subjAgree=s,e.subjAgreeNm=e.subjectList.filter(o=>o.cp_id===e.subjAgree)[0].cp_name):e.subjAgree="")},A=s=>{let o="";t.isEmpty(s)||(o=e.subjectList.filter(c=>c.cp_id===s)[0].agreeYn),t.isEqual(o,"N")?(e.lectureAgree=s,e.lectureAgreeNm=e.subjectList.filter(c=>c.cp_id===e.lectureAgree)[0].cp_name):e.lectureAgree=""},P=s=>{let o="";t.isEmpty(s)||(o=e.subjectList.filter(c=>c.cp_id===s)[0].agreeYn),t.isEqual(o,"N")?(e.bookAgree=s,e.bookAgreeNm=e.subjectList.filter(c=>c.cp_id===e.bookAgree)[0].cp_name):e.bookAgree=""},j=()=>{self.close()};return(s,o)=>{const c=k,_=G;return d(),g("div",U,[w,a("form",{onSubmit:o[3]||(o[3]=Y(()=>{},["prevent"]))},[a("div",M,[z,("isEmpty"in s?s.isEmpty:i(t.isEmpty))(i(e).schoolList)?f("",!0):(d(),g("div",$,[J,L(c,{class:"c-form-check-group--col3",modelValue:i(e).school,"onUpdate:modelValue":[o[0]||(o[0]=r=>i(e).school=r),E],items:i(e).schoolList,isDisabled:!("isEqual"in s?s.isEqual:i(t.isEqual))(m.learnInfo.schChgAvailPreview,"Y")},null,8,["modelValue","items","isDisabled"])])),a("div",F,[("isEqual"in s?s.isEqual:i(t.isEqual))(i(e).school,"SCHLVL_P001")||("isEqual"in s?s.isEqual:i(t.isEqual))(i(e).school,"SCHLVL_P002")?(d(),g("div",K,[a("div",Q,[W,L(c,{class:"c-form-check-group--col4",modelValue:i(e).grade,"onUpdate:modelValue":[o[1]||(o[1]=r=>i(e).grade=r),q],items:i(e).gRadioList,isDisabled:!("isEqual"in s?s.isEqual:i(t.isEqual))(m.learnInfo.schChgAvailPreview,"Y")},null,8,["modelValue","items","isDisabled"])]),("isEqual"in s?s.isEqual:i(t.isEqual))(i(e).school,"SCHLVL_P002")?(d(),g("div",X,[Z,L(c,{modelValue:i(e).purpose,"onUpdate:modelValue":o[2]||(o[2]=r=>i(e).purpose=r),items:i(e).pRadioList,isDisabled:!("isEqual"in s?s.isEqual:i(t.isEqual))(m.learnInfo.schChgAvailPreview,"Y")},null,8,["modelValue","items","isDisabled"])])):f("",!0)])):f("",!0)]),a("div",x,[("isEmpty"in s?s.isEmpty:i(t.isEmpty))(i(e).school)?f("",!0):(d(),D(O,{key:0,typeInfo:{school:i(e).school,grade:i(e).grade},dataList:i(e).subjectList,onOnChangeSubj:C,onOnChangeLecture:A,onOnChangeBook:P,paramInfo:i(e).paramInfo},null,8,["typeInfo","dataList","paramInfo"]))])]),a("div",ee,[a("div",se,[L(_,{size:"auto",sizeType:"large",styleType:"danger",text:"확인",onClick:j})])])],32)])}}},ge=y(oe,[["__scopeId","data-v-6aa1189d"]]);export{ge as default};
