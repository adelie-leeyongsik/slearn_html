import{_ as n,E as i,w as d,a0 as r,o as a,c as m,a as s,d as o,v as _}from"./entry.e1c54084.js";const u={props:{show:Boolean}},p={key:0,class:"c-modals"},b={class:"c-modals__inner"},v={class:"c-modals__head"},f={class:"c-modals__contents"},h=s("div",{class:"c-modals__title c-modals__title-sm"},[o(" 매년 첫 로그인 시 모든 회원에게 자격 재검증을 실시하고 있습니다. "),s("br"),o(" 주민번호를 입력하여 서울런 이용 자격을 확인해 주세요."),s("br"),o(" 멘토링과 학습사이트 정보를 입력하여 혜택을 누려보세요. ")],-1),$=s("p",{class:"c-text-left"}," * 자격 미달의 경우 일반회원으로 변경되며, 교육 사이트에 대한 혜택은 종료됩니다. ",-1),g=s("div",{class:"c-modals__form"},[s("div",{class:"c-form-group"},[s("label",{class:"c-form-label"},"주민번호 확인"),s("div",{class:"c-input-group"},[s("input",{id:"rrn",class:"c-form-control",type:"text",placeholder:"주민번호 앞 6자리",maxlength:"6",required:""}),o(" - "),s("input",{id:"rrn02",class:"c-form-control",type:"password",placeholder:"주민번호 뒤 7자리",maxlength:"7",required:""}),s("button",{class:"c-btn c-btn-sm c-btn-light"}," 주민번호 인증 ")]),s("div",{class:"c-text-caution c-text-caution--type02 c-text-danger"}," 혜택 대상이 아닙니다. 추가 서류 검토를 통해 관리자 승인이 필요합니다. ")])],-1),k={class:"c-modals__button"},x={class:"c-btn-group"};function y(e,t,l,C,w,B){return a(),i(r,{name:"c-modals"},{default:d(()=>[l.show?(a(),m("div",p,[s("div",{class:"c-modals__bg",onClick:t[0]||(t[0]=c=>e.$emit("close"))}),s("div",b,[s("div",v,[o(" 내 자격 검증하기 "),s("button",{class:"c-modals__head-close",type:"submit",onClick:t[1]||(t[1]=c=>e.$emit("close"))}," 닫기 ")]),s("div",f,[h,$,g,s("div",k,[s("div",x,[s("button",{type:"submit",class:"c-btn c-btn-blue",onClick:t[2]||(t[2]=c=>e.$emit("close"))}," 닫기 "),s("button",{type:"submit",class:"c-btn c-btn-danger",onClick:t[3]||(t[3]=c=>e.$emit("close"))}," 확인 ")])])])])])):_("",!0)]),_:1})}const V=n(u,[["render",y]]);export{V as default};
