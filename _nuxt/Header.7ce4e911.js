import{_ as i}from"./title.fb65f11f.js";import{f as p,j as u,L as t,o as l,E as _,aI as b,i as s,w as d,a as f,D as g,aA as h,aC as y}from"./entry.e1c54084.js";const C={__name:"Header",setup(k){const{push:r}=p(),{params:{segment:e},name:o}=u(),n=t(()=>({title:e==="share"?"멘토 공유방":"멘토 공지사항",desc:e==="share"?`
        서울런에서 제공하는 쿠폰 사용방법을<br class='c-mo' />
        자세히 알아보고 혜택을 누려보세요!
        <br />
        도움이 필요하실 땐 서울런 고객센터<br class='c-mo' />
        (1533-0909)로 연락주세요!"
    `:`
        멘토분들이 확인해야 할 필독 공지! <br />
        도움이 필요하실 땐 서울런 고객센터<br class='c-mo' />(1533-0909)로
        연락주세요!"
    `})),c=t(()=>e==="share"&&o==="mypage-community-board-list-segment");return(w,a)=>{const m=i;return l(),_(m,h(y({...s(n)})),b({_:2},[s(c)?{name:"tail",fn:d(()=>[f("button",{type:"button",class:"c-btn c-btn-sm c-btn-danger",onClick:a[0]||(a[0]=g(v=>s(r)({path:"/mypage/community/board/write/share"}),["prevent"]))}," 글쓰기 ")]),key:"0"}:void 0]),1040)}}};export{C as _};
