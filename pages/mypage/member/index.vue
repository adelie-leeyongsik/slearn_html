<script setup>
import Snb from "@pages/mypage/_snb.vue";
import SnbTablet from "@pages/mypage/_snbTablet.vue";

import { useModalStore, useLoginStore } from "@/store";
import { call } from "@/api";
import UpdateBody from "./_updateBody.vue";

definePageMeta({
  layout: "mypage",
});
const router = useRouter();
const modal = useModalStore();
const login = useLoginStore();

watch(
  () => login.snsId,
  (newVal) => {
    if (newVal != "") {
      connectSocialLoginInfo();
    }
  }
);

const d = reactive({
  isEdit: false,
  socialButtons: [
    {
      code: "JOIN_T003",
      name: "네이버",
      type: "naver",
      text: "네이버계정으로 연동",
      alt: "네이버 로고",
    },
    {
      code: "JOIN_T002",
      name: "카카오",
      type: "kakao",
      text: "카카오계정으로 연동",
      alt: "카카오톡 로고",
    },
    // {
    //   code: "JOIN_T004",
    //   name: "원패스",
    //   type: "onepass",
    //   text: "디지털원패스로 연동",
    //   alt: "디지털원패스 로고",
    // },
  ],
  socialLoginInfo: { name: "", code: "" },
  withdrawlsModal: {
    isShow: false,
    subTitle: `회원을 탈퇴할 경우
            <span class="c-text-primary">6개월간 재가입</span>이
            불가능합니다.<br />
            또한 6개월 이후에는 모든 이력이 삭제되며, 복구할 수 없습니다.`,
    title: "회원 탈퇴",
    reason: "",
    etcReason: "",
  },
  termsModal: {
    isShow: false,
    innerContents: "",
    title: "",
  },
  potalModal: {
    isShow: false,
    title: "서울시 평생학습포털 연동",
    subTitle:
      "서울런에서 서울시 평생학습 포털 <br /> 학습내용을 확인하실 수 있습니다.",
    id: "",
    isAgree: "",
  },
  data: {
    profile: "",
    userName: "",
    loginid: "",
    email: "",
    address1: "",
    address2: "",
    mobileno: "",
    zipcode: "",
    smsYn: "",
  },
});

onMounted(() => {
  getData();
});

const getData = async () => {
  await call({
    id: "마이페이지 회원 정보 조회",
    endpoint: "/api/member_info/get",
    data: {},
    onResponse({ data }) {
      console.log("login Data >>> ", data);
      d.data = data;

      const socialInfo = d.socialButtons.filter(
        (e) => e.code === d.data.snsConnects[0]
      )[0];
      if (socialInfo != null) {
        d.socialLoginInfo = socialInfo;
      }

      d.data.profile = isEmpty(data.profile) ? "1" : data.profile;
      return true;
    },
  });
};
const disconnectSocialLoginInfo = () => {
  modal.confirm(
    "알림",
    "간편 로그인 인증 해제시 아이디 패스워드로 로그인 가능합니다.",
    async () => {
      await call({
        id: "마이페이지 sns 연동 해지",
        endpoint: "/api/member_info/sns/disconnect",
        method: "post",
        data: {
          snsCd: d.socialLoginInfo.code,
        },
        onResponse({ data }) {
          modal.alert("알림", "SNS 연동이 해지되었습니다.");
          d.socialLoginInfo.code = "";
          getData();
          return true;
        },
      });
    }
  );
};
const connectSocialLoginInfo = async () => {
  await call({
    id: "마이페이지r sns 연동",
    endpoint: "/api/member_info/sns/connect",
    method: "post",
    data: {
      snsCd: login.snsCd,
      snsId: login.snsId,
      onepass_ci: login.snsCi,
    },
    onResponse({ data }) {
      modal.alert("알림", "SNS 연동이 완료되었습니다.");
      const socialInfo = d.socialButtons.filter(
        (e) => e.code === login.snsCd
      )[0];
      if (socialInfo != null) {
        d.socialLoginInfo = socialInfo;
      }
      return true;
    },
  });
};
const setWithdrawMember = async () => {
  if (
    d.withdrawlsModal.reason === "" ||
    (d.withdrawlsModal.reason === "기타" && d.withdrawlsModal.etcReason === "")
  ) {
    modal.alert("알림", "탈퇴 사유를 입력해주세요.");
    return false;
  }

  //Method Not Allowed
  await call({
    id: "마이페이지 회원 탈퇴",
    endpoint: "/api/member_info/withdraw",
    headers: "LOGIN",
    method: "post",
    data: {
      withdraw_reason:
        d.withdrawlsModal.reason === "기타"
          ? d.withdrawlsModal.etcReason
          : d.withdrawlsModal.reason,
    },
    onResponse({ data, status }) {
      console.log("탈퇴 >> ", data);
      if (status === 200) {
        modal.alert("알림", "탈퇴되었습니다.", () => {
          logout();
        });
      } else {
        modal.alert("알림", "실패하였습니다. 관리자에게 문의해주세요.");
      }

      return true;
    },
  });
};
const logout = () => {
  call({
    method: "post",
    id: "로그아웃",
    endpoint: "/api/login/logout",
    data: {},
    onResponse({ data, status, message }) {
      console.log("logoutstatus", status);
      if (status === 200) {
        login.userId = "";
        sessionStorage.clear();
        router.push("/");
        d.userId = "";
      }
    },
  });
};
const getTermData = async () => {
  await call({
    id: "마이페이지 약관 내용 보기",
    endpoint: "/api/member_info/terms",
    headers: "PUBLIC",
    data: {
      cp_id: "SEOULLEARN",
      term_div_code: "TEMPLATE_P010",
    },
    onResponse({ data }) {
      console.log("term >>> ", data);
      d.termsModal.innerContents = data.term_desc;
      d.termsModal.title = data.term_title;
      d.potalModal.isShow = false;
      d.termsModal.isShow = true;
      return true;
    },
  });
};

const onClickPotalConn = async () => {
  if (!d.potalModal.id) {
    modal.alert(
      "",
      "아이디를 입력하셔야 연동이 시작됩니다. 확인 후 다시 시도해주시길 바랍니다"
    );
  } else if (!d.potalModal.isAgree) {
    modal.alert(
      "",
      "약관에 동의를 하셔야 연동이 가능합니다. 확인 후 다시 시도해주시길 바랍니다"
    );
  }

  //미완성
  await call({
    id: "마이페이지 평생 교육 포털 아이디 조회",
    endpoint: "/api/member_info/sll/find_id",
    headers: "PUBLIC",
    data: {
      id: d.potalModal.id,
    },
    onResponse({ data, status }) {
      console.log("평생 교육 포털 아이디 조회 >>> " + data);
      if (status === 200) {
        modal.alert("알림", "평생교육 포털 학습연동이 완료되었습니다");
      } else {
        modal.alert(
          "",
          "평생교육 포털 연동에 실패했습니다. ID를 다시 한번 확인해주시거나, 관리자에게 문의해주시길 바랍니다"
        );
      }

      return true;
    },
  });
};

const onClickCancelUpdateForm = () => {
  getData();
  d.isEdit = false;
};

const onClickChangePw = () => {
  router.push("/reset-pw");
};
</script>
<template>
  <CommonContentsModal
    :data="d.withdrawlsModal"
    @close="d.withdrawlsModal.isShow = false"
  >
    <template v-slot:innerContents>
      <div class="c-form-group">
        <label for="reason" class="c-form-label">탈퇴사유</label>
        <select
          id="reason"
          class="c-form-control"
          v-model="d.withdrawlsModal.reason"
        >
          <option disabled selected hidden value="">
            탈퇴 사유를 선택해주세요.
          </option>
          <option value="서울런 이용이 필요 없어짐.(진학, 졸업 등)">
            서울런 이용이 필요 없어짐.(진학, 졸업 등)
          </option>
          <option value="서울런 이용할 시간이 부족 함">
            서울런 이용할 시간이 부족 함
          </option>
          <option value="학습사이트 강좌가 맞지 않음">
            학습사이트 강좌가 맞지 않음
          </option>
          <option value="서울런 홈페이지 사용이 불편 함">
            서울런 홈페이지 사용이 불편 함
          </option>
          <option value="기타">기타</option>
        </select>
        <input
          v-if="d.withdrawlsModal.reason === '기타'"
          class="c-form-control"
          type="text"
          v-model="d.withdrawlsModal.etcReason"
        />
      </div>
      <div class="c-modals__button">
        <div class="c-btn-group">
          <button
            type="submit"
            class="c-btn c-btn-primary"
            @click="d.withdrawlsModal.isShow = false"
          >
            취소
          </button>
          <button
            type="submit"
            class="c-btn c-btn-primary"
            @click="setWithdrawMember"
          >
            확인
          </button>
        </div>
      </div>
    </template>
  </CommonContentsModal>
  <CommonContentsModal
    :data="d.termsModal"
    @close="d.termsModal.isShow = false"
  >
    <template v-slot:innerContents>
      <div
        class="c-modals__contents-terms"
        v-html="d.termsModal.innerContents"
      ></div>
      <div class="c-modals__button">
        <div class="c-btn-group">
          <button
            type="submit"
            class="c-btn c-btn-danger"
            @click="
              d.termsModal.isShow = false;
              d.potalModal.isShow = true;
            "
          >
            확인
          </button>
        </div>
      </div>
    </template>
  </CommonContentsModal>
  <CommonContentsModal
    :data="d.potalModal"
    @close="d.potalModal.isShow = false"
  >
    <template v-slot:innerContents>
      <div class="c-form-group">
        <label for="title" class="c-form-label">평생교육 포털 아이디</label>
        <div class="c-input-group">
          <input
            id="title"
            class="c-form-control"
            type="text"
            placeholder="아이디를 입력해주세요"
            v-model="d.potalModal.id"
            required
          />
        </div>
      </div>
      <div class="c-form-group">
        <label for="agree" class="c-form-label">약관동의</label>
        <div class="c-form-check__box">
          <div class="c-form-check">
            <input
              class="c-form-check-input"
              type="checkbox"
              name="exampleCheckbox01"
              id="exampleCheckbox01-02"
              v-model="d.potalModal.isAgree"
              required
            />
            <label class="c-form-check-label" for="exampleCheckbox01-02">
              이용약관에 관한 동의 (필수)
            </label>
          </div>
          <button
            class="c-btn c-btn-text c-btn-text--line"
            @click="getTermData"
          >
            내용보기
          </button>
        </div>
      </div>
      <div class="c-modals__button">
        <div class="c-btn-group">
          <button
            type="submit"
            class="c-btn c-btn-danger"
            @click="onClickPotalConn"
          >
            네, 알겠어요
          </button>
        </div>
      </div>
    </template>
  </CommonContentsModal>

  <div class="mypage">
    <SnbTablet :currentUrl="`/mypage/pw-check`" />
    <PubBreadCrumbs />
    <div class="mypage-recommend">
      <div class="mypage__wrap">
        <Snb :currentUrl="`/mypage/pw-check`" />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <div class="c-text-title-lg">회원정보 변경</div>
            <div class="c-text-title-sub">
              <p>
                개인정보 보호를 위해 다시 한번<br class="c-mo" />
                비밀번호를 입력해주세요. <br />도움이 필요하실 땐 서울런
                고객센터
                <br class="c-mo" />
                (1533-0909)로 연락주세요!
              </p>
            </div>
          </div>
          <div class="mypage__contents-body" v-if="!d.isEdit">
            <div class="mypage__form-wrap">
              <div class="mypage__form">
                <form class="needs-validation" @submit.prevent novalidate>
                  <fieldset>
                    <div class="mypage__form-profile">
                      <a href="#" class="mypage__form-profile-img">
                        <img
                          :src="uImage(`@temp/${d.data.profile}.jpg`)"
                          alt="회원 프로필 이미지"
                        />
                      </a>
                    </div>
                    <dl>
                      <dt>이름</dt>
                      <dd>{{ d.data.userName }}</dd>
                    </dl>
                    <dl class="type02">
                      <dt>가입일</dt>
                      <dd>
                        {{ uConvertDate(d.data.regDtm, "YYYY.MM.DD") }}
                        <div class="mypage__form-profile-link">
                          <button
                            class="c-btn c-btn-sm c-btn-blue"
                            v-if="false"
                          >
                            연동 해지
                          </button>
                          <button
                            type="button"
                            @click="d.potalModal.isShow = true"
                            class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                          >
                            서울시평생학습포털 학습이력 연동
                          </button>
                        </div>
                      </dd>
                    </dl>

                    <dl class="type02">
                      <dt>아이디</dt>
                      <dd>
                        {{
                          isEmpty(d.data.sll_Id)
                            ? d.data.loginid
                            : d.data.sll_Id
                        }}
                        &nbsp&nbsp
                        <div class="mypage__form-profile-link">
                          <Button
                            v-if="d.socialLoginInfo.code === ''"
                            v-for="{ type, text, src, alt } in d.socialButtons"
                            :alt="alt"
                            :title="`새창으로 이동`"
                            class="c-btn c-btn-lg c-btn-outline-secondary"
                            sizeType="large"
                            :text="text"
                            @click="uSocialLogin(type)"
                          >
                            <template v-slot:before>
                              <img
                                :src="uImage(`logo-${type}.svg`)"
                                :alt="alt"
                              />
                            </template>
                          </Button>
                          <Button
                            v-else
                            class="c-btn c-btn-lg c-btn-outline-secondary"
                            sizeType="large"
                            :text="`${d.socialLoginInfo.text}해지`"
                            @click="disconnectSocialLoginInfo"
                          >
                            <template v-slot:before>
                              <img
                                :src="
                                  uImage(`logo-${d.socialLoginInfo.type}.svg`)
                                "
                                :alt="d.socialLoginInfo.alt"
                              />
                            </template>
                          </Button>
                        </div>
                      </dd>
                    </dl>
                    <dl>
                      <dt>비밀번호 변경</dt>
                      <dd>
                        <button
                          class="c-btn c-btn-sm c-btn-primary"
                          @click="onClickChangePw"
                        >
                          비밀번호 변경
                        </button>
                      </dd>
                    </dl>
                    <dl>
                      <dt>이메일 주소</dt>
                      <dd>{{ d.data.email }}</dd>
                    </dl>
                    <dl>
                      <dt>주소</dt>
                      <dd>
                        {{ d.data.address1 }} <br />
                        {{ d.data.address2 }}
                      </dd>
                    </dl>
                    <dl>
                      <dt>휴대폰 번호</dt>
                      <dd>{{ d.data.mobileno }}</dd>
                    </dl>
                    <dl>
                      <dt>이벤트 문자 수신 정보</dt>
                      <dd>{{ d.data.smsYn === "Y" ? "수신" : "미수신" }}</dd>
                    </dl>
                    <dl>
                      <dt>회원탈퇴</dt>
                      <dd>
                        <button
                          class="c-btn c-btn-sm c-btn-primary"
                          @click="d.withdrawlsModal.isShow = true"
                        >
                          탈퇴하기
                        </button>
                      </dd>
                    </dl>
                  </fieldset>
                  <div class="c-btn-group">
                    <button
                      type="button"
                      class="c-btn c-btn-lg c-btn-primary"
                      @click="d.isEdit = true"
                    >
                      회원정보 수정
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <UpdateBody
            v-else
            :data="d.data"
            @confirm="onClickCancelUpdateForm"
          />
        </div>
      </div>
    </div>
  </div>
</template>
