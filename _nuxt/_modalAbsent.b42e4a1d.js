import{_ as d,E as a,w as c,a0 as i,o as e,c as r,a as l,v as u}from"./entry.e1c54084.js";const _={props:{show:Boolean}},m={key:0,class:"c-modal"},p={class:"c-modal__inner"},b=l("div",{class:"c-modal__title"},"멘토 결석 신고",-1),v=l("div",{class:"c-modal__contents"},[l("div",{class:"c-modal__box"},[l("dl",null,[l("dt",null,"멘토"),l("dd",null,"토마토마토")]),l("dl",null,[l("dt",null,"멘티"),l("dd",null,"박수정")]),l("dl",null,[l("dt",null,"멘토링 예정일"),l("dd",null,"2023.1.15 12:00")]),l("dl",null,[l("dt",null,"멘토링 주차"),l("dd",null,"3주차")])]),l("div",{class:"c-form-group"},[l("label",{for:"title",class:"c-form-label"},"신고사유"),l("div",{class:"c-input-group"},[l("input",{id:"title",class:"c-form-control",type:"text",placeholder:"신고 사유를 입력해주세요.",required:""})])])],-1),f={class:"c-modal__button"},$={class:"c-btn-group"};function k(s,t,n,g,h,y){return e(),a(i,{name:"c-modal"},{default:c(()=>[n.show?(e(),r("div",m,[l("div",{class:"c-modal__bg",onClick:t[0]||(t[0]=o=>s.$emit("close"))}),l("div",p,[b,v,l("div",f,[l("div",$,[l("button",{type:"submit",class:"c-btn c-btn-darkgray",onClick:t[1]||(t[1]=o=>s.$emit("close"))}," 닫기 "),l("button",{type:"submit",class:"c-btn",onClick:t[2]||(t[2]=o=>s.$emit("close"))}," 등록 ")])])])])):u("",!0)]),_:1})}const C=d(_,[["render",k]]);export{C as default};
