<script setup>
import { VueDaumPostcode } from "vue-daum-postcode";
import joinNav from "../_nav.vue";
import Result from "../step04/result";
import { call } from "@/api";
import { useModalStore, useLoginStore } from "@/store";
import ValidationPanel from "@/components/validationPanel.vue";

const modal = useModalStore();
const login = useLoginStore();

definePageMeta({
  layout: "account",
});

const router = useRouter();

const d = reactive({
  name: "",
  id: "",
  pw: "",
  pw2: "",
  email: "",
  isUseId: false,
  isNotUseId: false,
  isCheckId: false,
  isCheckPw: false,
  isCheckPw2: false,
  isUseEmail: false,
  isCheckEmail: false,
  mob1: "",
  mob2: "",
  mob3: "",
  isDisabledMob: false,
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
  isDisabledEmail: false,
  command: "start",
  addressModal: {
    isShow: false,
    title: "주소 찾기",
    id: "",
    isAgree: "",
  },
  postCode: "",
  addr: "",
  addrDtl: "",
  smsType: "Y",
  smsList: [
    {
      text: "수신",
      value: "Y",
    },
    {
      text: "미수신",
      value: "N",
    },
  ],
  parentName: "",
  parentSex: "",
  parentMob1: "",
  parentMob2: "",
  parentMob3: "",
  isNext: false,
  nextBtn: "다음",

  snsInfo: {},
  socialButtons: [
    {
      type: "naver",
      text: "네이버계정으로 로그인",
      alt: "네이버 로고",
    },
    {
      type: "kakao",
      text: "카카오계정으로 로그인",
      alt: "카카오톡 로고",
    },
    // {
    //   type: "onepass",
    //   text: "디지털원패스로 로그인",
    //   alt: "디지털원패스 로고",
    // },
  ],

  resultCode: null,
});

onMounted(() => {
  let name = login.passInfo.NAME;
  let mob = login.passInfo.MOBILE_NO;
  let sex = login.passInfo.GENDER;
  let mail = login.emailModalInfo.email;
  let age = login.joinInfo.age;
  let number = mob
    ?.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)
    ?.split("-");

  if (!isEmpty(mob) && age < 14) {
    d.parentName = name;
    d.parentSex = isEqual(sex, "1") ? "남성" : "여성";

    d.parentMob1 = number[0];
    d.parentMob2 = number[1];
    d.parentMob3 = number[2];
  }

  if (!isEmpty(name) && age > 13) {
    d.name = name;
  } else {
    d.name = login.joinInfo.usernm;
  }

  if (!isEmpty(mob) && (age > 13 || isEqual(login.joinInfo.type, "mentor"))) {
    d.mob1 = number[0];
    d.mob2 = number[1];
    d.mob3 = number[2];

    d.isDisabledMob = true;
  }

  if (!isEmpty(mail)) {
    let arr = mail.split("@");

    d.emailId = arr[0];
    d.emailAddr = arr[1].toLowerCase();
    d.emailCode = d.emailAddr;
    d.isDisabledEmail = true;
    d.isUseEmail = true;
    d.emailConfirm = true;
  }
});

const onCheckIdValidation = (val) => {
  d.isUseId = null;
  d.isNotUseId = null;
  d.isCheckId = val;
};

const onClickIdDupCheck = () => {
  d.isUseId = false;
  d.isNotUseId = false;

  if (isEmpty(d.id)) {
    modal.alert("알림", "아이디를 입력하세요.");
    return;
  } else if (!d.isCheckId) {
    modal.alert("알림", "정확한 아이디를 입력하세요.");
    return;
  }

  call({
    method: "post",
    id: "회원가입 아이디 중복확인",
    endpoint: "/api/join/id_dup_check",
    data: {
      id: d.id,
    },
    onResponse({ data, status, message }) {
      console.log("data ", data);
      if (isEqual(data.dupYn, "N")) {
        d.isUseId = true;
      } else {
        d.isNotUseId = true;
      }
    },
  });
};

const onCheckPwValidation = (val) => {
  d.isCheckPw = val;
};

const onCheckPw2Validation = (val) => {
  d.isCheckPw2 = val;
};

const onChangeEmail = (val) => {
  d.emailAddr = val;
};

const onClickEmailDupCheck = () => {
  d.isUseEmail = false;
  d.isCheckEmail = false;

  if (isEmpty(d.emailId) || isEmpty(d.emailAddr)) {
    modal.alert("알림", "이메일을 입력하세요.");
    return;
  }

  call({
    method: "post",
    id: "회원가입 이메일 중복확인",
    endpoint: "/api/join/email_dup_check",
    data: {
      email: d.emailId + "@" + d.emailAddr,
    },
    onResponse({ data, status, message }) {
      console.log("data ", data);
      if (isEqual(data.dupYn, "N")) {
        d.isUseEmail = true;
      } else {
        d.isCheckEmail = true;
      }
    },
  });
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
        d.emailSend = true;
        d.emailConfirmNum = data.crtfNumber;
      }
    },
  });
};

watch(
  () => d.emailId,
  (newVal) => {
    if (isEmpty(newVal)) {
      d.isUseEmail = false;
    }
  }
);

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
    d.isDisabledEmail = true;
  }
};

const onClickAddress = (data) => {
  d.addr = data.userSelectedType === "R" ? data.roadAddress : data.jibunAddress;
  d.postCode = data.zonecode;
  d.addressModal.isShow = false;
};

const onChangeRadio = (val) => {
  d.smsType = val;
};

const onClickPrev = () => {
  router.push("/join/qualification");
};

const checkText = () => {
  if (isEmpty(d.name)) {
    d.isNext = false;
    return;
  }

  if (isEmpty(d.id)) {
    d.isNext = false;
    return;
  }

  if (isEmpty(d.pw)) {
    d.isNext = false;
    return;
  }

  if (isEmpty(d.pw2)) {
    d.isNext = false;
    return;
  }

  if (isEmpty(d.mob1)) {
    d.isNext = false;
    return;
  }

  if (isEmpty(d.mob2)) {
    d.isNext = false;
    return;
  }

  if (isEmpty(d.mob3)) {
    d.isNext = false;
    return;
  }

  if (isEmpty(d.emailId) || isEmpty(d.emailAddr)) {
    d.isNext = false;
    return;
  }

  if (isEmpty(d.addr) || isEmpty(d.addrDtl)) {
    d.isNext = false;
    return;
  }

  if (!isEmpty(login.joinInfo.type)) {
    d.nextBtn = "완료";
  }

  d.isNext = true;
};

const validationNext = () => {
  if (isEmpty(d.name)) {
    modal.alert("알림", "이름을 입력해주세요.");
    return false;
  }

  if (isEmpty(d.id)) {
    modal.alert("알림", "아이디를 입력해주세요.");
    return false;
  }

  if (!d.isUseId) {
    modal.alert("알림", "아이디 중복확인 해주세요.");
    return false;
  }

  if (isEmpty(d.pw)) {
    modal.alert("알림", "비밀번호를 입력해주세요.");
    return false;
  }

  if (isEmpty(d.pw2)) {
    modal.alert("알림", "비밀번호를 확인해주세요.");
    return false;
  }

  if (!d.isCheckPw) {
    modal.alert("알림", "비밀번호를 확인해주세요.");
    return false;
  }

  if (isEmpty(d.mob1)) {
    modal.alert("알림", "휴대전화를 입력해주세요.");
    return false;
  }

  if (isEmpty(d.mob2)) {
    modal.alert("알림", "휴대전화를 입력해주세요.");
    return false;
  }

  if (isEmpty(d.mob3)) {
    modal.alert("알림", "휴대전화를 입력해주세요.");
    return false;
  }

  if (isEmpty(d.emailId) || isEmpty(d.emailAddr)) {
    modal.alert("알림", "이메일을 입력해주세요.");
    return false;
  }

  if (!d.isUseEmail) {
    modal.alert("알림", "이메일을 중복확인해주세요.");
    return false;
  }

  if (!d.emailConfirm) {
    modal.alert("알림", "이메일을 인증해주세요.");
    return false;
  }

  if (isEmpty(d.addr) || isEmpty(d.addrDtl)) {
    modal.alert("알림", "주소를 입력해주세요.");

    return false;
  }

  return true;
};

const makeParam = () => {
  let params = {
    //자격검증 결과
    qlfc_enc_dat: login.joinInfo.qlfc_enc_dat,
    //NICE 본인인증 결과 (PASS)
    nice_enc_dat: login.passInfo.nice_enc_dat,
    //다자녀 가족 청소년 검증 결과
    ge3family_enc_dat: login.bigFamily.ge3family_enc_dat,
    //가입구분
    join_pcd: "JOIN_P011",
    //생년월일
    birthday: login.joinInfo.birthday,
    //아이디
    loginid: login.basicInfo.id,
    //비밀번호
    passwd: login.basicInfo.pw,
    //이름
    userName: login.basicInfo.name,
    //이메일
    email: login.basicInfo.email,
    //우편번호
    zipcode: login.basicInfo.postCode,
    //주소
    address1: login.basicInfo.addr,
    //주소 상세
    address2: login.basicInfo.addrDtl,
    //이벤트 정보수신 동의
    evtInfoRcvYn: login.basicInfo.smsType,
    //증빙자료 별도첨부 여부
    attachType: login.joinAttachType,
    //SNS연동
    snsConnects: [{ snsCode: login.snsCd, id: login.snsId }],
    //멘토지원자 아이디
    smaIdx: login.joinInfo.smaIdx,
  };

  //휴대폰 번호
  params.mobileno = !isEmpty(login.passInfo)
    ? login.passInfo.MOBILE_NO
    : login.basicInfo.mobile;

  return params;
};

const onClickNext = () => {
  if (!validationNext()) return;

  let info = {
    name: d.name,
    id: d.id,
    pw: d.pw,
    email: d.emailId + "@" + d.emailAddr,
    mobile: d.mob1 + "-" + d.mob2 + "-" + d.mob3,
    postCode: d.postCode,
    addr: d.addr,
    addrDtl: d.addrDtl,
    smsType: d.smsType,
  };

  login.basicInfo = info;

  if (isEmpty(login.joinInfo.type)) {
    router.push("/join/step04");
  } else {
    login.snsId = "";
    d.snsInfo.isShow = true;
    d.snsInfo.title = "SNS 계정 연동";
    d.snsInfo.subTitle = "SNS 계정과 연동할 수 있어요";
  }
};

watch(
  () => login.snsId,
  (newVal) => {
    if (!isEmpty(newVal)) {
      closeSnsModal();
    }
  }
);

const closeSnsModal = () => {
  d.snsInfo.isShow = false;
  goJoin();
};

const onClickNoSns = () => {
  d.snsInfo.isShow = false;
  goJoin();
};

const goJoin = () => {
  const fd = new FormData();

  let param = makeParam();

  fd.append(
    "data",
    new Blob([JSON.stringify(param)], {
      type: "application/json",
    })
  );

  call({
    method: "post",
    id: "회원가입 등록",
    endpoint: "/api/join/signup",
    headers: "FILE_UPLOAD",
    data: fd,

    onResponse({ data, status, message }) {
      console.log("goJoin data", data);
      console.log("goJoin status", status);
      console.log("goJoin message", message);
      if (status === 200) {
        d.resultCode = data.confirmStatCode;
      } else {
        modal.alert("알림", message);
      }
    },
  });
};
</script>

<template>
  <!-- 주소 팝업 -->
  <CommonContentsModal
    :data="d.addressModal"
    @close="d.addressModal.isShow = false"
  >
    <template v-slot:innerContents>
      <VueDaumPostcode @complete="onClickAddress" />
    </template>
  </CommonContentsModal>
  <!-- 주소 팝업 -->
  <!-- SNS연동 팝업 -->
  <CommonContentsModal :data="d.snsInfo" @close="closeSnsModal">
    <template v-slot:innerContents>
      <div class="login__list">
        <Button
          v-for="{ type, text, src, alt } in d.socialButtons"
          :title="`새창으로 이동`"
          class="c-btn-outline-secondary"
          sizeType="large"
          :text="text"
          @click="uSocialLogin(type)"
        >
          <template v-slot:before>
            <img :src="uImage(`logo-${type}.svg`)" :alt="alt" />
          </template>
        </Button>
        <button
          type="button"
          class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
          @click="onClickNoSns"
        >
          SNS 연동하지않고 가입하기
        </button>
      </div>
    </template>
  </CommonContentsModal>
  <!-- SNS연동 팝업 -->
  <div class="account" v-if="isEmpty(d.resultCode)">
    <h1>회원가입</h1>
    <joinNav :active="3" />
    <form @submit.prevent>
      <div class="account__body">
        <h2 class="account__title">기본정보를 입력해주세요.</h2>
        <div class="c-form-group">
          <Input
            v-model="d.name"
            id="이름"
            label="이름"
            type="text"
            placeholder="이름을 입력해 주세요"
            title="이름"
            :isRequireMark="true"
            :disabled="true"
            @keyup="checkText"
          />
        </div>
        <div class="c-form-group">
          <Input
            v-model="d.id"
            label="아이디"
            placeholder="아이디를 입력하세요."
            :isRequireMark="true"
            @keyup="checkText"
          >
            <Button
              size="auto"
              sizeType="small"
              styleType="blue"
              text="중복확인"
              @click="onClickIdDupCheck"
            />
          </Input>

          <ValidationPanel
            :value="d.id"
            :items="[
              {
                text: '영문 또는 영문과 숫자를 조합해주세요.',
                tester: () => uRegexpr('ID', d.id),
              },
              {
                text: '5글자 이상 입력해주세요.',
                tester: () => (d.id.length > 4 ? true : false),
              },
            ]"
            @update:modelValue="onCheckIdValidation"
          />
          <div
            v-if="d.isUseId"
            class="c-text-caution c-text-caution--type02 c-text-danger"
          >
            사용 가능 합니다.
          </div>
          <div
            v-if="d.isNotUseId"
            class="c-text-caution c-text-caution--type02 c-text-danger"
          >
            등록된 아이디가 존재합니다.
          </div>
        </div>
        <div class="c-form-group">
          <Input
            v-model="d.pw"
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            :isRequireMark="true"
            @keyup="checkText"
          />
          <ValidationPanel
            :value="d.pw"
            :items="[
              {
                text: '대소문자 영문, 숫자, 특수문자 중 2종류 이상 조합해주세요.',
                tester: () => uRegexpr('PW_MAIN', d.pw),
              },
              {
                text: '10자리 ~ 12자리까지 입력해주세요.',
                tester: () =>
                  d.pw.length > 9 && d.pw.length <= 12 ? true : false,
              },
              {
                text: '연속적인 숫자나 생일, 전화번호가 포함된 정보는 입력할 수 없습니다.',
                tester: () => uRegexpr('PW_NUM', d.pw),
              },
            ]"
            @update:modelValue="onCheckPwValidation"
          />
        </div>
        <div class="c-form-group">
          <Input
            v-model="d.pw2"
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            :isRequireMark="true"
            @keyup="checkText"
          />
          <ValidationPanel
            :value="d.pw"
            :items="[
              {
                text: '위에 입력하신 비밀번호와 동일하게 입력해주세요.',
                tester: () => d.pw === d.pw2,
              },
            ]"
            @update:modelValue="onCheckPw2Validation"
          />
        </div>
        <div class="c-form-group">
          <label for="mail" class="c-form-label"
            ><span class="c-essential">*</span> 휴대전화</label
          >
          <div class="c-input-group">
            <Input
              v-model="d.mob1"
              type="text"
              placeholder=""
              id="mob1"
              title="휴대폰 번호 국번 입력"
              maxlength="3"
              :onlyNumber="true"
              :disabled="d.isDisabledMob"
              @keyup="checkText"
            />
            -
            <Input
              v-model="d.mob2"
              type="text"
              placeholder=""
              id="mob2"
              title="휴대폰 번호 앞자리 입력"
              maxlength="4"
              :onlyNumber="true"
              :disabled="d.isDisabledMob"
              @keyup="checkText"
            />
            -
            <Input
              v-model="d.mob3"
              type="text"
              placeholder=""
              id="mob3"
              title="휴대폰 번호 뒷자리 입력"
              maxlength="4"
              :onlyNumber="true"
              :disabled="d.isDisabledMob"
              @keyup="checkText"
            />
          </div>
        </div>
        <div class="c-form-group">
          <label for="mail" class="c-form-label"
            ><span class="c-essential">*</span> 이메일 주소</label
          >
          <div class="c-input-group c-input-group--email">
            <input
              v-model="d.emailId"
              id="emailId"
              class="c-form-control"
              type="text"
              placeholder="이메일 아이디"
              title="이메일 아이디 입력"
              :disabled="d.isDisabledEmail"
              @keyup="checkText"
            />
            <Select
              :title="`이메일 도메인 선택`"
              :isDisabled="d.isDisabledEmail"
              v-model="d.emailCode"
              :options="d.emailList"
              @update:modelValue="onChangeEmail"
            ></Select>
          </div>
          <Input
            v-model="d.emailAddr"
            type="text"
            id="emailAddr"
            placeholder="이메일 주소를 입력해주세요."
            title="이메일 입력"
            :disabled="d.isDisabledEmail"
            @keyup="checkText"
          >
            <template v-if="isEmpty(login.emailModalInfo.email)">
              <button
                class="c-btn c-btn-sm c-btn-sm--type02 c-btn-blue"
                @click="onClickEmailDupCheck"
                v-if="!d.isUseEmail"
              >
                이메일 중복확인
              </button>
              <button
                v-else
                class="c-btn c-btn-sm c-btn-sm--type02 c-btn-blue"
                @click="certiEmail"
              >
                {{ d.emailText }}
              </button>
            </template>
          </Input>
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
              text="인증번호 확인"
              :validator="true"
              @click="onClickConfirm"
            />
          </Input>
        </div>
        <div
          class="c-text-caution c-text-caution--type02 c-text-danger"
          v-if="d.isCheckEmail"
        >
          중복된 이메일 주소가 존재합니다.
        </div>
        <div
          class="c-text-caution c-text-caution--type02 c-text-danger"
          v-if="d.isUseEmail && !d.emailSend"
        >
          사용 가능 합니다
        </div>
        <div class="c-form-group">
          <Input
            v-model="d.postCode"
            label="주소"
            type="text"
            placeholder="우편번호"
            title="우편번호"
            :disabled="true"
            :isRequireMark="true"
          >
            <button
              class="c-btn c-btn-sm c-btn-blue"
              @click="d.addressModal.isShow = true"
            >
              검색
            </button>
          </Input>

          <div class="c-input-group">
            <Input
              v-model="d.addr"
              type="text"
              placeholder=""
              title="주소"
              :disabled="true"
            />
          </div>
          <div class="c-input-group">
            <Input
              v-model="d.addrDtl"
              type="text"
              placeholder="상세 주소 입력해주세요"
              title="상세주소"
              @keyup="checkText"
            />
          </div>
        </div>
      </div>

      <div class="account__body" v-if="login.joinInfo.age < 14">
        <h2 class="account__title">법정대리인 정보 확인하세요.</h2>
        <div class="c-form-group">
          <Input
            v-model="d.parentName"
            label="이름"
            type="text"
            :disabled="true"
          />
        </div>
        <div class="c-form-group">
          <Input
            v-model="d.parentSex"
            label="성별"
            type="text"
            :disabled="true"
          />
        </div>
        <div class="c-form-group">
          <label for="mail" class="c-form-label"> 휴대폰 번호</label>
          <div class="c-input-group">
            <Input
              v-model="d.parentMob1"
              type="text"
              placeholder=""
              title="휴대폰 번호 입력"
              maxlength="3"
              :onlyNumber="true"
              :disabled="true"
            />
            -
            <Input
              v-model="d.parentMob2"
              type="text"
              placeholder=""
              title="휴대폰 번호 입력"
              maxlength="4"
              :onlyNumber="true"
              :disabled="true"
            />
            -
            <Input
              v-model="d.parentMob3"
              type="text"
              placeholder=""
              title="휴대폰 번호 입력"
              maxlength="4"
              :onlyNumber="true"
              :disabled="true"
            />
          </div>
        </div>
      </div>

      <div class="account__body">
        <h2 class="account__title">이벤트 정보 수신(SMS/알림톡) 동의</h2>
        <div class="c-form-group">
          <Radio
            v-model="d.smsType"
            :items="d.smsList"
            @update:modelValue="onChangeRadio"
          />
        </div>
        <div class="c-text-caution">
          서울런 서비스 이용회원은 학습정보, 운영 등에 대한 정보는
          <br />
          동의여부와 관계없이 문자/알림톡 등으로 제공됩니다.
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
            v-if="!d.isNext"
            class="c-btn-inactive"
            size="auto"
            sizeType="large"
            text="다음"
          />
          <Button
            v-else
            size="auto"
            sizeType="large"
            styleType="danger"
            :text="d.nextBtn"
            @click="onClickNext"
          />
        </div>
      </div>
    </form>
  </div>
  <Result :data="d.resultCode" v-else />
</template>

<style lang="scss" scoped>
.join {
  &__benefit {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 64rem;
    margin: 0 auto 3rem;
    padding: 2.7rem 9rem 2.8rem 7.9rem;
    background-color: $white;
    border-radius: 1.6rem;
    p {
      display: flex;
      align-items: center;
      strong {
        margin-left: 1.6rem;
        font-size: 1.6rem;
        color: $black;
      }
    }
    @include mobile {
      display: block;
      width: 100%;
      margin: 0;
      padding: 2.7rem 1.6rem 2.8rem 1.6rem;
      border-bottom: 1.6rem solid $light;
      border-radius: 0;
      .c-btn {
        width: 100%;
        //margin-top: 2rem;
      }
    }
  }
}
.account {
  &__body {
    margin-top: 3rem;
    .c-form-group {
      margin-top: 4rem;
    }
    @include mobile {
      margin-top: 0;
      padding: 6rem 1.6rem;
    }
    & + & {
      // 230203 수정
      @include mobile {
        border-top: 1.6rem solid $light;
      }
      // 230203 수정
    }
  }
  form {
    fieldset {
      &:first-child {
        .account__body {
          margin-top: 0;
        }
      }
    }
  }
  .c-form-label--lg {
    margin-bottom: 1.6rem;
  }
  .c-form-check--type03 {
    margin-top: 0;
  }
}
</style>
