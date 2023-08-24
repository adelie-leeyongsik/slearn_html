export default defineStore("user.coupon", {
  state() {
    return {
      page: 1,
      pageSize: 10,
      totalCount: 63,
      // state: available(사용가능), expired(만료), redeemed(사용완료)
      items: {
        0: {
          state: "expired",
          tag: "테스트 태그",
          title: "2만원 상당 쿠폰 증정",
          number: "SEOUL123302323232300",
          date: "2023.02.15~2023.02.30",
        },
        1: {
          state: "redeemed",
          tag: "상반기 정기 쿠폰",
          title: "2만원 상당 쿠폰 증정",
          number: "SEOUL123302323232300",
          date: "2023.02.15~2023.02.30",
          usageDate: "2023.04.18",
        },
        2: {
          state: "redeemed",
          tag: "상반기 정기 쿠폰",
          title: "2만원 상당 쿠폰 증정",
          number: "SEOUL123302323232300",
          date: "2023.02.15~2023.02.30",
          usageDate: "2023.04.18",
        },
        3: {
          state: "available",
          tag: "상반기 정기 쿠폰",
          title: "2만원 상당 쿠폰 증정",
          number: "SEOUL123302323232300",
          date: "2023.02.15~2023.02.30",
        },
        4: {
          state: "available",
          tag: "상반기 정기 쿠폰",
          title: "2만원 상당 쿠폰 증정",
          number: "SEOUL123302323232300",
          date: "2023.02.15~2023.02.30",
        },
        5: {
          state: "available",
          tag: "상반기 정기 쿠폰",
          title: "2만원 상당 쿠폰 증정",
          number: "SEOUL123302323232300",
          date: "2023.02.15~2023.02.30",
        },
        6: {
          state: "available",
          tag: "상반기 정기 쿠폰",
          title: "2만원 상당 쿠폰 증정",
          number: "SEOUL123302323232300",
          date: "2023.02.15~2023.02.30",
        },
        7: {
          state: "available",
          tag: "상반기 정기 쿠폰",
          title: "2만원 상당 쿠폰 증정",
          number: "SEOUL123302323232300",
          date: "2023.02.15~2023.02.30",
        },
        8: {
          state: "available",
          tag: "상반기 정기 쿠폰",
          title: "2만원 상당 쿠폰 증정",
          number: "SEOUL123302323232300",
          date: "2023.02.15~2023.02.30",
        },
        9: {
          state: "available",
          tag: "상반기 정기 쿠폰",
          title: "2만원 상당 쿠폰 증정",
          number: "SEOUL123302323232300",
          date: "2023.02.15~2023.02.30",
        },
      },
      keys: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  },
});
