import GpDashBoard from "./gp/index";

const dashboard = [
  {
    id: "SEP_us_intd_0005",
    title: "소개/연계사이트",
    to: "/info/site",
    file: "pages/info/site/index.js.vue",
  },
  {
    id: "SEP_us_intd_0002",
    title: "소개/회원가입",
    to: "/info/join",
    file: "pages/info/join/index.js.vue",
  },
  {
    id: "SEP_us_intd_0003",
    title: "소개/멘토링",
    to: "/info/mentoring",
    file: "pages/info/mentoring/index.js.vue",
  },
  {
    id: "SEP_us_intd_0004",
    title: "소개/온라인 컨텐츠",
    to: "/info/online-contents",
    file: "pages/info/online-contents/index.js.vue",
  },
  {
    id: "SC.UR.CP.001",
    title: "마이/내 쿠폰 관리",
    to: "/mypage/coupon",
    file: "pages/mypage/coupon/index.js.vue",
  },
  {
    id: "SC.UR.JJ.001",
    title: "마이/진로진학 상담(리스트)",
    to: "/mypage/consulting",
    file: "pages/mypage/consulting/index.js.vue",
  },
  {
    id: "SC.UR.JJ.002",
    title: "마이/진로진학 상담(상세)",
    to: "/mypage/consulting-detail",
    file: "pages/mypage/consulting-detail/index.js.vue",
  },
  {
    id: "SC.UR.CR.001",
    title: "마이/강의 추천(리스트)",
    to: "/mypage/lecture-suggestion",
    file: "pages/mypage/lecture-suggestion/index.js.vue",
  },
  {
    id: "SC.UR.MR.001",
    title: "마이/나의 관심사 설정",
    to: "/mypage/interest-settings",
    file: "pages/mypage/interest-settings/index.js.vue",
    note: [
      {
        tag: "todo",
        desc: "기획서 정의된 버튼 선택 룰 확인 필요, 마크업 태그 변경 요청",
      },
    ],
  },
  {
    id: "SC.UR.MR.001",
    title: "마이/관심추천 내역",
    to: "/mypage/lecture-pick-interest",
    file: "pages/mypage/lecture-pick-interest/index.js.vue",
    note: [
      {
        tag: "todo",
        desc: "API 데이터 확인 후 서브 아이템 동적 생성",
      },
      {
        tag: "todo",
        desc: "<ListItem/> 디자인 변경됨. 추후 .c-card 마크업 확정되면 ListItem 분기 추가 필요.",
      },
    ],
  },
  {
    id: "SC.UR.MR.001",
    title: "마이/관심추천 내역(상세)",
    to: "/mypage/lecture-pick-interest/?id=123",
    file: "pages/mypage/lecture-pick-interest/_detailBody.vue",
  },
  {
    id: "SC.UR.RL.001",
    title: "마이/추천강의",
    to: "/mypage/lecture-pick",
    file: "pages/mypage/lecture-pick/index.js.vue",
    note: [
      {
        tag: "todo",
        desc: "API 데이터 확인 후 서브 아이템 동적 생성",
      },
    ],
  },
  {
    id: "SC.UR.CP.001",
    title: "마이/쿠폰(리스트)",
    to: "/mypage/coupon",
    file: "pages/mypage/coupon/index.js.vue",
  },
  {
    id: "SEP_us_mpdr_0001",
    title: "마이/드라이브",
    to: "/mypage/drive",
    file: "pages/mypage/drive/index.js.vue",
    note: [
      {
        tag: "memo",
        desc: "정렬 필터, API 호출 형식 확인 후 작업 필요.",
      },
    ],
  },
  {
    id: "SEP_us_mpfa_0002",
    title: "마이/1:1문의(리스트)",
    to: "/mypage/inquiry",
    file: "pages/mypage/inquiry/index.js.vue",
    note: [
      {
        tag: "memo",
        desc: "디자인 변경 확인 후 작업(body)",
      },
    ],
  },
  {
    id: "SC.UR.MQ.006",
    title: "마이/1:1문의(상세)",
    to: "/mypage/inquiry/1",
    file: "pages/mypage/inquiry/[id].vue",
  },
  {
    id: "SEP_us_mpfa_0002",
    title: "마이/1:1문의(작성하기)",
    to: "/mypage/inquiry/write",
    file: "pages/mypage/inquiry/write/index.js.vue",
    note: [{ tag: "todo", desc: "파일업로드 공통 컴포넌트 제작" }],
  },
  {
    id: "SC.UR.SM.001",
    title: "마이/비밀번호 확인",
    to: "/mypage/pw-check",
    file: "pages/mypage/pw-check/index.js.vue",
  },
  {
    id: "SEP_us_mpev_0001_T1",
    title: "마이/이벤트(리스트)",
    to: "/mypage/event",
    file: "pages/mypage/event/index.js.vue",
  },
  {
    id: "SEP_us_mpop_0001",
    title: "마이/수강관리(리스트)",
    to: "/mypage/lecture",
    file: "pages/mypage/lecture/index.js.vue",
    note: [
      {
        tag: "memo",
        desc: "오픈강의 -> 수강관리로 변경(4.18)",
      },
      {
        tag: "todo",
        desc: "<NoItem/> 컴포넌트 정의, 노출되는 부분들 모두 확인 후 공통으로 개발",
      },
    ],
  },
  {
    id: "SEP_us_boev_0001",
    title: "이벤트(리스트)",
    to: "/event",
    file: "pages/event/index.js.vue",
    note: [
      {
        tag: "memo",
        desc: "자주 묻는 질문 -> 파라미터에 따른 API 호출 구성할 때 함께 참고해서 형식 통일할것.",
      },
    ],
  },
  {
    id: "SEP_us_boev_0002",
    title: "이벤트(상세)",
    to: "/event/1",
    file: "pages/event/[id].vue",
  },
  {
    id: "SEP_us_bont_0001",
    title: "공지사항(리스트)",
    to: "/notice",
    file: "pages/notice/index.js.vue",
  },
  {
    id: "SEP_us_bont_0002",
    title: "공지사항(상세)",
    to: "/notice/1",
    file: "pages/notice/[id].vue",
  },
  {
    id: "SEP_us_lfaq_0001",
    title: "자주 묻는 질문",
    to: "/faq",
    file: "pages/faq/index.js.vue",
    note: [
      {
        tag: "todo",
        desc: "API 응답 대기를 위한 스피너 가이드 요청",
      },
      {
        tag: "memo",
        desc: "API 호출할 때 마다 파라미터를 기억하고 동일한 파라미터로 호출하는 경우 beforeRequest에서 return(페이지를 떠나기 전까지는 유효)",
      },
      {
        tag: "memo",
        desc: "항목 상세는 API 확인 후 작업",
      },
    ],
  },
  {
    id: "SEP_us_lgin_0001",
    title: "로그인",
    to: "/login",
    file: "pages/login/index.js.vue",
  },
  {
    id: "SC.UR.SU.007",
    title: "회원가입(STEP1)",
    to: "/join/step01",
    file: "pages/join/step01/index.js.vue",
  },
  {
    id: "SC.UR.SU.008",
    title: "회원가입(STEP2)",
    to: "/join/step02",
    file: "pages/join/step02/index.js.vue",
  },
  {
    id: "SC.UR.SU.016",
    title: "회원가입(STEP3)",
    to: "/join/step03",
    file: "pages/join/step03/index.js.vue",
  },
  {
    id: "SC.UR.SU.017",
    title: "회원가입(STEP4)",
    to: "/join/step04",
    file: "pages/join/step04/index.js.vue",
  },
  {
    id: "SC.UR.SU.018",
    title: "회원가입(완료)",
    to: "/join/complete",
    file: "pages/join/complete/index.js.vue",
  },
  {
    id: "SEP_us_lgsc_0001_T1",
    title: "로그인 본인인증",
    to: "/authentication",
    file: "pages/authentication/index.js.vue",
  },
  {
    id: "SEP_us_lgfi_0001",
    title: "아이디 찾기",
    to: "/find-id",
    file: "pages/findId/index.js.vue",
  },
  {
    id: "SEP_us_lgfi_0010",
    title: "아이디 찾기(결과)",
    to: "/find-id-result",
    file: "pages/findIdResult/index.js.vue",
  },
  {
    id: "SEP_us_lgrp_0001",
    title: "비밀번호 변경(인증)",
    to: "/find-pw",
    file: "pages/findPw/index.js.vue",
  },
  {
    id: "SEP_us_rspw_0001",
    title: "비밀번호 변경(설정)",
    to: "/reset-pw",
    file: "pages/resetPw/index.js.vue",
  },
  {
    id: "SEP_us_lgqv_0001_P",
    title: "로그인 자격검증",
    to: "/qualification",
    file: "pages/qualification/index.js.vue",
    note: [
      {
        tag: "todo",
        desc: "readonly가 아닌 경우 없을듯. 확인 필요",
      },
    ],
  },
  {
    id: "SEP_us_lgqv_0001_2P",
    title: "로그인 자격검증(완료)",
    to: "/qualification-result",
    file: "pages/qualificationResult/index.js.vue",
  },
];

export default dashboard.concat(GpDashBoard);
