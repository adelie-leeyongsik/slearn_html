export default defineStore("user.lecturePickInterest", {
  state() {
    return {
      items: {
        now: {
          isOpen: false,
          sectionTitle: "바로 만나는 컨텐츠",
          count: 243,
        },
        activity: {
          isOpen: false,
          sectionTitle: "체험형 컨텐츠",
          count: 56,
        },
        help: {
          isOpen: false,
          sectionTitle: "도움이 되는 정보",
          count: 43,
        },
      },
      keys: ["now", "activity", "help"],
    };
  },
});
