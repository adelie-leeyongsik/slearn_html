export default [
  {
    id: "SC.UR.MS.018",
    title: "(GP) 이전멘토링보기 - 멘토",
    to: "/mypage/management/before",
    note: [
      {
        tag: "memo",
        desc: "활동증명서 신청 성공 리스폰즈 처리 필요",
      },
      {
        tag: "memo",
        desc: "접근권한 제어 필요 (정적데이터활용)",
      },
    ],
  },
  {
    id: "SC.UR.TS.016",
    title: "(GP) 이전멘토링보기 - 멘티",
    to: "/mypage/management/before?role=mentee",
    note: [
      {
        tag: "memo",
        desc: "접근권한 제어 필요 (정적데이터활용)",
      },
    ],
  },
  {
    id: "SC.UR.MS.016",
    title: "(GP) 수상내역 - 멘토",
    to: "/mypage/management/awards",
    note: [
      {
        tag: "memo",
        desc: "접근권한 제어 필요 (정적데이터활용)",
      },
    ],
  },
  {
    id: "SC.UR.TS.018",
    title: "(GP) 수상내역 - 멘티",
    to: "/mypage/management/awards?role=mentee",
    note: [
      {
        tag: "memo",
        desc: "접근권한 제어 필요 (정적데이터활용)",
      },
    ],
  },
  {
    id: "SC.UR.MN.001",
    title: "(GP) 멘토링 공지사항",
    to: "/mypage/community/board/list/notice",
    note: [
      {
        tag: "memo",
        desc: "접근권한 제어 필요 (정적데이터활용)",
      },
    ],
  },
  {
    id: "SC.UR.MN.003",
    title: "(GP) 멘토링 (공지사항) - 상세",
    to: "/mypage/community/board/detail/notice/17263",
    note: [
      {
        tag: "memo",
        desc: "접근권한 제어 필요 (정적데이터활용)",
      },
      {
        tag: "memo",
        desc: "댓글 공통 작업 후 추가 적용 (보류)",
      },
    ],
  },
  {
    id: "SC.UR.TS.018",
    title: "(GP) 멘토링 공유방",
    to: "/mypage/community/board/list/share",
    note: [
      {
        tag: "memo",
        desc: "접근권한 제어 필요 (정적데이터활용)",
      },
    ],
  },
  {
    id: "SC.UR.GS.002",
    title: "(GP) 멘토링 (공유방) - 상세",
    to: "/mypage/community/board/detail/share/17327",
    note: [
      {
        tag: "memo",
        desc: "접근권한 제어 필요 (정적데이터활용)",
      },
      {
        tag: "memo",
        desc: "댓글 공통 작업 후 추가 적용 (보류)",
      },
    ],
  },
  {
    id: "SC.UR.GS.003",
    title: "(GP) 멘토링 (공유방) - 글쓰기",
    to: "/mypage/community/board/write/share",
    note: [
      {
        tag: "memo",
        desc: "접근권한 제어 필요 (정적데이터활용)",
      },
      {
        tag: "memo",
        desc: "파일 검증관련 문구 정의 안됨 (파일개수, 용량)",
      },
      {
        tag: "memo",
        desc: "파일 업로드 더미 적용(파일형식)",
      },
    ],
  },
  {
    id: "SC.UR.TS.007",
    title: "(GP) 멘토링관리 - 멘티 (멘토링 진행중 케이스)",
    to: "/mypage/management/mentee?smtrIdx=130",
    note: [
      {
        tag: "todo",
        desc: "URI 세그먼츠 변경 예정, 책갈피에 넣기 위해 쿼리스트링 분기",
      },
      {
        tag: "memo",
        desc: "접근권한 제어 필요 (정적데이터활용)",
      },
      {
        tag: "memo",
        desc: "강의실 입장 액션 없음 (내용필요)",
      },
      {
        tag: "memo",
        desc: "회차별 계획서 보기 정의안됨 (기획없음/내용없음)",
      },
      {
        tag: "memo",
        desc: "추천? 결석 알고리즘? 관련 없음 (내용부족)",
      },
      {
        tag: "memo",
        desc: "문자 관련 확인 필요 (없음)",
      },
      {
        tag: "memo",
        desc: "만족도 조사 관련 렌더링 내용 확인 필요 (없음)",
      },
      {
        tag: "memo",
        desc: "결석에 대한 상태값 및 렌더링 부분 확인 필요 (없음)",
      },
      {
        tag: "todo",
        desc: "모달 정적 연동 및 API 연동",
      },
    ],
  },
  {
    id: "SC.UR.TS.007",
    title: "(GP) 멘토링관리 - 멘티 (멘토링 완료 케이스)",
    to: "/mypage/management/mentee?smtrIdx=131",
    note: [
      {
        tag: "memo",
        desc: "위 내용과 이하 상동",
      },
    ],
  },
  {
    id: "SC.UR.TS.002",
    title: "(GP) 멘토링관리 - 멘티 (멘토링 신청전 케이스)",
    to: "/mypage/management/blank",
    note: [
      {
        tag: "memo",
        desc: "접근권한 제어 필요 (정적데이터활용)",
      },
      {
        tag: "memo",
        desc: "진입시 상태 값 및 접근 권한 제어 부족으로 인한 임시 페이지로 신청서 신청만 확인",
      },
    ],
  },
];
