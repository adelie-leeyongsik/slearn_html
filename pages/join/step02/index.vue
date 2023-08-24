<script setup>
import joinNav from "../_nav.vue";
import { useModalStore, useLoginStore } from "@/store";
import { call } from "@/api";

definePageMeta({
  layout: "account",
});

const router = useRouter();

const modal = useModalStore();
const login = useLoginStore();

const d = reactive({
  age14: login.joinInfo.age,
  termsList: [
    {
      key: "term1-id-1",
      text: "이용약관에 관한 동의",
      value: false,
      required: true,
      cpId: "SEOULLEARN",
      termCode: "TEMPLATE_P002",
    },
    {
      key: "term1-id-2",
      text: "개인정보 수집/이용에 관한 동의",
      value: false,
      required: true,
      cpId: "SEOULLEARN",
      termCode: "TEMPLATE_P003",
    },
    {
      key: "term1-id-3",
      text: "제 3자 위탁 동의",
      value: false,
      required: true,
      cpId: "SEOULLEARN",
      termCode: "TEMPLATE_P005",
    },
    {
      key: "term1-id-4",
      text: "위탁업무 (필수)",
      value: null,
      cpId: "SEOULLEARN",
      termCode: "TEMPLATE_P006",
      noCheck: true,
    },
  ],
  termInfo: {},
  btnText: "인증하기",
  btnDisabled: false,
  checkMob: false,
  emailModalInfo: {},
  emailCode: "",
  emailList: uEmailList(),
  emailId: "",
  emailAddr: "",
  emailText: "인증번호 발송",
  emailSend: false,
  emailTimer: false,
  emailCheckNum: "", //인증번호입력
  emailConfirmNum: "", //발급된인증번호
  emailConfirm: false, //인증번호확인여부
  emailNumEqaul: false, //인증번호일치여부
  command: "start",
});

const joinTerms = async (data) => {
  await call({
    method: "get",
    id: "회원가입 약관 조회",
    endpoint: `/api/join/terms`,
    data: {
      cp_id: data.id,
      term_div_code: data.code,
    },
    onResponse({ data, status }) {
      d.termInfo.isShow = true;
      d.termInfo.title = data.term_title;
      d.termInfo.innerContents = data.term_desc;
    },
  });
};

const onClickPrev = () => {
  router.push("/join/qualification");
};

const onClickNext = () => {
  router.push("/join/step03");
};

const closeTermModal = () => {
  d.termInfo.isShow = false;
};

const checkMobile = () => {
  if (d.checkMob || d.btnDisabled) {
    return;
  }

  if (d.termsList.some((s) => s.value === false)) {
    modal.alert("알림", "약관동의가 필요합니다.");
    return;
  } else {
    uCheckWithPass();
  }
};

watch(
  () => login.passInfo,
  (newInfo) => {
    if (!isEmpty(newInfo)) {
      if (login.joinInfo.age > 13 && login.joinInfo.usernm != newInfo.NAME) {
        modal.alert(
          "알림",
          "자격검증시 입력한 명의의 휴대전화를 사용해야합니다."
        );
        login.passInfo = {};
        return;
      } else {
        modal.alert(
          "알림",
          "인증이 완료되었습니다.<br/> 다음으로 진행해주시길 바랍니다",
          () => {
            d.checkMob = true;
            d.btnText = "인증완료";
            d.btnDisabled = true;
          }
        );
      }
    }
  }
);

const checkEmail = () => {
  if (d.btnDisabled) {
    return;
  }

  if (d.termsList.some((s) => s.value === false)) {
    modal.alert("알림", "약관동의가 필요합니다.");
    return;
  } else {
    d.emailConfirm = false;
    d.emailNotConfirm = false;
    d.emailSend = false;
    d.emailConfirmNum = "";
    d.emailTimer = false;
    d.emailModalInfo.isShow = true;
    d.emailModalInfo.title = "이메일 인증";
    d.emailNumEqaul = false;
  }
};

const closeEmailModal = (arg) => {
  if (d.emailConfirm && arg) {
    d.btnText = "인증완료";
    d.btnDisabled = true;
    d.checkMob = arg;
  }
  d.emailModalInfo.isShow = false;
};

const onChangeEmail = (val) => {
  d.emailAddr = val;
};

const endTimer = () => {
  d.emailCheckNum = "";
  d.emailSend = false;
  d.emailTimer = true;
  d.emailNumEqaul = false;
  d.emailText = "인증번호 재발송";
};

const certiEmail = () => {
  console.log("certiEmail");
  d.emailTimer = false;
  d.command = "restart";

  if (isEmpty(d.emailId)) {
    modal.alert("알림", "이메일을 입력해주세요.");
    return;
  } else if (isEmpty(d.emailAddr)) {
    modal.alert("알림", "이메일을 입력해주세요.");
    return;
  }

  call({
    method: "post",
    id: "회원가입 이메일 인증",
    endpoint: "/api/ident_by_email",
    data: {
      email: d.emailId + "@" + d.emailAddr,
    },
    onResponse({ data, status }) {
      console.log("data ", data);
      d.command = "start";

      if (isEqual(data.dupYn, "Y")) {
        modal.alert("알림", "이메일이 중복되었습니다.");
        return;
      } else {
        login.emailModalInfo = data;
        d.emailSend = true;
        d.emailConfirmNum = data.crtfNumber;
      }
    },
  });
};

const onClickConfirm = () => {
  console.log("onClickConfirm");
  if (d.emailConfirmNum != d.emailCheckNum) {
    modal.alert("알림", "잘못된 인증번호입니다.");
    d.emailConfirm = false;
    d.emailNumEqaul = true;
    d.emailCheckNum = "";
  } else {
    d.emailConfirm = true;
    d.emailNumEqaul = false;
  }
};
</script>

<template>
  <!-- 약관 팝업 -->
  <CommonContentsModal :data="d.termInfo" @close="closeTermModal">
    <template v-slot:innerContents>
      <div
        class="c-modals__contents-terms"
        v-html="d.termInfo.innerContents"
      ></div>
      <div class="c-modals__button">
        <div class="c-btn-group">
          <button
            type="submit"
            class="c-btn c-btn-danger"
            @click="closeTermModal"
          >
            확인
          </button>
        </div>
      </div>
    </template>
  </CommonContentsModal>
  <!-- 약관 팝업 -->
  <!-- 이메일 인증 팝업 -->
  <CommonContentsModal :data="d.emailModalInfo" @close="closeEmailModal(false)">
    <template v-slot:innerContents>
      <div class="c-modals__form">
        <div class="c-form-group">
          <label for="emailAddress" class="c-form-label">이메일 주소</label>
          <div class="c-input-group c-input-group--email">
            <input
              id="emailId"
              class="c-form-control"
              type="text"
              placeholder="이메일 아이디"
              title="이메일주소 입력"
              v-model="d.emailId"
            />
            <Select
              v-model="d.emailCode"
              :options="d.emailList"
              @update:modelValue="onChangeEmail"
            ></Select>
          </div>
          <div class="c-input-group">
            <input
              id="emailAddress"
              class="c-form-control"
              type="text"
              placeholder="이메일 주소를 입력해주세요."
              title="이메일 입력"
              v-model="d.emailAddr"
            />
            <button
              class="c-btn c-btn-sm c-btn-sm--type02 c-btn-blue"
              @click="certiEmail"
            >
              {{ d.emailText }}
            </button>
          </div>

          <Input v-if="d.emailSend" v-model="d.emailCheckNum">
            <Countdown
              :command="d.command"
              :seconds="300"
              :onEnd="endTimer"
              v-if="!d.emailConfirm"
            >
              <p class="c-text-danger" counter></p>
            </Countdown>
            <p class="c-text-danger" v-if="d.emailConfirm">
              <img src="@img/ic-check.svg" alt="확인완료" /> 확인완료
            </p>
            <Button
              size="auto"
              sizeType="small"
              styleType="blue"
              text="인증번호확인"
              :validator="true"
              @click="onClickConfirm"
            />
          </Input>
        </div>

        <div
          class="c-text-caution c-text-caution--type02 c-text-danger"
          v-if="d.emailNumEqaul"
        >
          * 인증번호가 일치하지 않습니다.
        </div>
        <div
          class="c-text-caution c-text-caution--type02 c-text-danger"
          v-if="d.emailTimer && !d.emailConfirm"
        >
          * 입력시간이 초과하였습니다.
        </div>
        <div
          class="c-text-caution c-text-caution--type02 c-text-blue"
          v-if="d.emailConfirm"
        >
          * 인증 되었습니다.
        </div>
      </div>
      <div class="c-modals__button">
        <div class="c-btn-group">
          <button
            type="submit"
            class="c-btn c-btn-blue"
            @click="closeEmailModal(false)"
          >
            닫기
          </button>
          <button
            type="submit"
            class="c-btn c-btn-danger"
            @click="closeEmailModal(true)"
          >
            확인
          </button>
        </div>
      </div>
    </template>
  </CommonContentsModal>
  <!-- 이메일 인증 팝업 -->
  <div class="account">
    <h1>회원가입</h1>
    <joinNav :active="2" />
    <div class="account__body">
      <div class="join" v-if="d.age14 < 14">
        <h2 class="account__title">
          서울런 가입하여<br />
          다양한 활동을 할 수 있어요
        </h2>
        <div class="account__agree">
          <div class="account__agree-title">
            ‘서울런’ 약관 및 개인정보 수집/이용 동의
          </div>
          <TermsGroup v-model="d.termsList" @terms="joinTerms" />
        </div>
        <div class="c-form-group">
          <label for="phone" class="c-form-label"
            >법정대리인 인증(만 14세 미만)</label
          >
          <div class="account__info">
            <div class="account__info-title">
              만 14세 미만일 경우 법정대리인(보호자)의 인증을 통해 <br />
              회원가입이 가능합니다.
            </div>
            <div class="account__info-title c-text-danger">
              ※ 주의! 법정대리인 정보로만 인증해 주세요.<br />
              <span>
                만 14세 미만 아동의 개인 정보 보호를 위해 [개인정보 보호법]
                제22조에 따라 법정대리인(부모/법정후견인 등)의 동의를 받아야
                합니다.
              </span>
            </div>
          </div>
        </div>
        <Button
          class="c-btn-lg"
          sizeType="full"
          styleType="primary"
          :text="d.btnText"
          :onConfirm="checkMobile"
          :validator="!d.checkMob"
        />
      </div>
      <div class="join" v-else>
        <h2 class="account__title">
          반드시 약관의 내용을<br />
          확인해주세요!
        </h2>
        <div class="account__agree">
          <div class="account__agree-title">
            ‘서울런’ 약관 및 개인정보 수집/이용 동의
          </div>
          <TermsGroup v-model="d.termsList" @terms="joinTerms" />
        </div>
        <div class="c-form-group">
          <div class="c-form-group">
            <div class="c-form-label">본인인증</div>
            <div class="c-box">
              <div class="c-box__title">휴대폰 인증</div>
              <div class="c-box__title-sub">고객님 명의의 휴대폰으로 인증</div>

              <Button
                class="c-box-btn"
                size="auto"
                sizeType="small"
                :styleType="d.btnDisabled ? 'blue' : 'primary'"
                :text="d.btnText"
                @click="checkMobile"
              />
            </div>
            <div class="c-box">
              <div class="c-box__title">이메일 인증</div>
              <div class="c-box__title-sub">등록된 이메일로 인증</div>
              <Button
                class="c-box-btn"
                size="auto"
                sizeType="small"
                :styleType="d.btnDisabled ? 'blue' : 'primary'"
                :text="d.btnText"
                @click="checkEmail"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="account__foot">
      <div class="c-btn-group">
        <Button
          size="auto"
          sizeType="large"
          styleType="blue"
          text="취소"
          @click="onClickPrev"
        />
        <Button
          size="auto"
          sizeType="large"
          styleType="danger"
          text="다음"
          :onConfirm="onClickNext"
          :validator="d.checkMob"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.account {
  &__body {
    @include mobile {
      padding: 6rem 1.6rem 0;
    }
  }
}
.join {
  &__divider {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5.7rem 0 2rem;
    font-size: 1.3rem;
    @include mobile {
      margin: 2.3rem 0 2.3rem;
    }
    p {
      position: relative;
      width: 100%;
      text-align: center;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-0.2rem);
        display: block;
        width: 100%;
        height: 0.1rem;
        background-color: $secondary;
        z-index: 1;
      }
      span {
        position: relative;
        padding: 0 2.8rem;
        background-color: $white;
        color: #535353;
        z-index: 2;
      }
    }
  }
  &__list {
    .c-btn {
      margin-top: 1.6rem;
      &:first-child {
        margin-top: 0;
      }
      img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 2.6rem;
      }
    }
  }
}
</style>
