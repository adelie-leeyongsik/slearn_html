import{_ as u}from"./breadCrumbs.86a21415.js";import{r as _,o as c,c as i,a as e,b as p,t as h,aa as m,y as v,z as y,i as o,X as f,v as w}from"./entry.e1c54084.js";const b={class:"c-sub-header__wrap"},K={class:"c-sub-header"},S={class:"c-text-title-lg"},g={class:"c-text-title-sub"},$=["innerHTML"],k=e("br",null,null,-1),x={key:0,class:"c-input-group c-input-group--search"},B=e("i",{class:"ico ico-search"},"검색",-1),T=[B],M={__name:"pageTitle",props:{title:{default:null},desc:{default:null},isSearch:{default:!1}},setup(l){const r=l,s=_({searchKeyword:""});return(a,t)=>{const d=u;return c(),i("div",b,[e("div",K,[p(d),e("div",S,h(r.title),1),e("div",g,[e("p",{innerHTML:r.desc},null,8,$)]),k,r.isSearch?(c(),i("div",x,[m(a.$slots,"select"),v(e("input",{id:"file",class:"c-form-control",type:"text",placeholder:"무엇을 도와드릴까요?",title:"자주하는 질문 검색","onUpdate:modelValue":t[0]||(t[0]=n=>o(s).searchKeyword=n),onKeyup:t[1]||(t[1]=f(n=>a.$emit("onSearch",o(s).searchKeyword),["enter"]))},null,544),[[y,o(s).searchKeyword]]),e("button",{onClick:t[2]||(t[2]=n=>a.$emit("onSearch",o(s).searchKeyword))},T)])):w("",!0)])])}}};export{M as _};
