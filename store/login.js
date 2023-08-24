export default defineStore("login", {
  state() {
    return {
      isAlert: false,
      userId: "", //비밀번호 재설정 활용
      findId: "", //아이디찾기 ID
      joinInfo: {}, //자격검증정보
      joinChildNo: "", //자녀생년월일
      passInfo: {}, //PASS 인증정보
      emailModalInfo: {}, //Email 인증정보
      joinMemberType: "", //회원가입 회원유형
      joinAttachType: "", //증빙자료 첨부유형
      joinFileList: [], //회원가입 증빙서류
      bigFamily: {}, //회원가입 다자녀 가족 청소년
      basicInfo: {}, //기본정보입력
      snsId: "", //회원가입 SNS 연동
      snsCd: "", //회원가입 SNS 연동
      snsCi: "", //회원가입 SNS 연동 (onepass ci)
      loginResult: {}, //로그인시 보완/반려 회원
      learnInfo: {}, //학습사이트 유지 및 변경
    };
  },
  actions: {},
});
