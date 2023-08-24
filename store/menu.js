import { isAccssMentoringCase } from "@/utils/gp";

export default defineStore("menu", {
  state() {
    return {
      gnbList: [
        {
          menuName: "서울런 소개",
          subMenu: [
            { menuName: "서울런 이야기", url: "/introduction/seoulStory" },
            { menuName: "회원가입 안내", url: "/introduction?section=0" },
            { menuName: "온라인콘텐츠 안내", url: "/introduction?section=1" },
            { menuName: "멘토링서비스 안내", url: "/introduction?section=2" },
            { menuName: "진로진학상담 안내", url: "/introduction?section=3" },
            { menuName: "맞춤형추천 안내", url: "/introduction?section=4" },
          ],
        },
        {
          menuName: "멘토링 소개",
          subMenu: [
            { menuName: "멘토링 소개", url: "/mentorings?section=about" },
            { menuName: "우수 멘토링이야기", url: "/mentorings?section=story" },
            {
              menuName: "멘토 지원",
              url: "/mentorings?section=recruit",
            },
          ],
        },
        {
          menuName: "맞춤학습 추천",
          subMenu: [
            { menuName: "서울런AI추천", url: "/interest/ai" },
            { menuName: "관심 추천", url: "/interest" },
          ],
        },
        {
          menuName: "이벤트",
          subMenu: [
            { menuName: "전체 이벤트", url: "/event?section=ALL" },
            { menuName: "진행중 이벤트", url: "/event?section=OPEN" },
            { menuName: "마감된 이벤트", url: "/event?section=END" },
          ],
        },
        {
          menuName: "고객센터",
          subMenu: [
            { menuName: "공지사항", url: "/notice" },
            { menuName: "학습지원센터", url: "/support" },
            { menuName: "자주하는 질문", url: "/faq" },
            { menuName: "1:1 문의", url: "/mypage/inquiry/write" },
          ],
        },
        {
          menuName: "나의 학습코치",
          subMenu: [
            { menuName: "마이페이지" },
            { menuName: "회원정보변경", url: "/mypage/pw-check" },
          ],
        },
      ],
      lnbList: [
        { menuName: "수강 관리", isActive: false, url: "/mypage/lecture" },
        { menuName: "학습 대시보드", isActive: false, url: "/mypage/report" },
        {
          menuName: "맞춤추천",
          isActive: false,
          subMenu: [
            {
              menuName: "AI추천 내역",
              isActive: false,
              url: "/mypage/lecture-pick",
            },
            {
              menuName: "관심추천 내역",
              isActive: false,
              url: "/mypage/interest",
            },
            {
              menuName: "나의 관심사 설정",
              isActive: false,
              url: "/mypage/interest-settings",
            },
          ],
        },
        ...isAccssMentoringCase(),
        {
          menuName: "나의서비스",
          isActive: false,
          subMenu: [
            {
              menuName: "진로진학상담내역",
              isActive: false,
              url: "/mypage/consulting",
            },
            { menuName: "이벤트", isActive: false, url: "/mypage/event" },
            { menuName: "내드라이브", isActive: false, url: "/mypage/drive" },
            {
              menuName: "내가 추천한 강의",
              isActive: false,
              url: "/mypage/lecture-suggestion",
            },
            {
              menuName: "1:1문의 내역",
              isActive: false,
              url: "/mypage/inquiry",
            },
          ],
        },
        {
          menuName: "쿠폰",
          isActive: false,
          url: "/mypage/coupon",
        },
        {
          menuName: "회원정보 변경",
          isActive: false,
          url: "/mypage/pw-check",
        },
      ],
      alarmCheck: false,
    };
  },
  actions: {},
});
