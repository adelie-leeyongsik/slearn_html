import{r as m,ab as p,o as t,c as a,a as c,i as r,v as f,E as h,w as y,d as n,t as l,Y as k,F as b,n as x}from"./entry.e1c54084.js";const g=["id","checked"],_=["for"],B=["src","alt"],V={__name:"Checkbox",props:{modelValue:{default:""},type:{type:String,default:null},thumb:{type:String,default:null},thumbAlt:{type:String,default:null},text:{type:String,default:null},required:{type:Boolean,default:!1},showRequiredText:{type:Boolean,default:!1},isBold:{type:Boolean,default:!1},textWrap:{default:!0}},setup(u){const e=u,o=m({key:p("cb")});return(d,s)=>(t(),a("div",{class:x(["c-form-check",[{"c-form-check--type02":e.thumb}]])},[c("input",{class:"c-form-check-input",type:"checkbox",title:"checkbox",id:r(o).key,checked:e.modelValue?!0:null,onChange:s[0]||(s[0]=i=>d.$emit("update:modelValue",i.target.checked))},null,40,g),c("label",{class:"c-form-check-label",for:r(o).key},[e.thumb?(t(),a("img",{key:0,src:e.thumb,alt:e.thumbAlt},null,8,B)):f("",!0),e.textWrap?(t(),h(k(e.isBold?"strong":"span"),{key:1},{default:y(()=>[n(l(e.text)+" "+l(e.showRequiredText?e.required?"(필수)":"(선택)":""),1)]),_:1})):(t(),a(b,{key:2},[n(l(e.text),1)],64))],8,_)],2))}};export{V as _};
