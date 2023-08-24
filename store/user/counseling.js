export default defineStore("user.counseling", {
  state() {
    return {
      isOpen: true,
      career: {
        startDate: "2023.01.03",
        endDate: "2023.05.30",
        limitAdmission: 50,
      },
      academic: {
        startDate: "2023.01.03",
        endDate: "2023.05.30",
        limitAdmission: 130,
      },
      totalPage: 10,
      items: {
        0: {
          id: 0,
          state: "접수 대기",
          title: "진로 상담 신청",
          applicationDate: "2023.02.04",
          maxSession: 6,
          currentSession: 3,
          mentor: "홍길동",
          attachment: "/asdf/asdf.pdf",
          attachmentName: "성향 분석 자료 리포트.pdf",
        },
        1: {
          id: 1,
          state: "승인 완료",
          title: "진로 상담 신청",
          applicationDate: "2023.02.04",
          maxSession: 30,
          currentSession: 19,
          mentor: "김수정",
          attachment: "/asdf/asdf.pdf",
          attachmentName: "성향 분석 자료 리포트.pdf",
        },
        2: {
          id: 2,
          state: "접수 대기",
          title: "진로 상담 신청",
          applicationDate: "2023.02.04",
          maxSession: 20,
          currentSession: 2,
          mentor: "김수정",
          attachment: "/asdf/asdf.pdf",
          attachmentName: "성향 분석 자료 리포트.pdf",
        },
        3: {
          id: 3,
          state: "접수 대기",
          title: "진로 상담 신청",
          applicationDate: "2023.02.04",
          maxSession: 9,
          currentSession: 0,
          mentor: "김수정",
          attachment: "/asdf/asdf.pdf",
          attachmentName: "성향 분석 자료 리포트.pdf",
        },
      },
      keys: [0, 1, 2, 3],
    };
  },
});
