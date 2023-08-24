<script setup>
import { useModalStore, useLoginStore } from "@/store";
import { call } from "@/api";
import { VueDaumPostcode } from "vue-daum-postcode";

const modal = useModalStore();
const vm = getCurrentInstance();
const login = useLoginStore();
const p = defineProps({
  data: {
    profile: "",
    userName: "",
    loginid: "",
    zipcode: "",
    email: "",
    address1: "",
    address2: "",
    mobileno: "",
    smsYn: "",
  },
});

const d = reactive({
  data: {
    profile: isEmpty(p.data.profile) ? "1" : p.data.profile,
    address1: p.data.address1,
    address2: p.data.address2,
    mobileno: p.data.mobileno,
    zipcode: p.data.zipcode,
    smsYn: p.data.smsYn,
  },
  addressModal: {
    isShow: false,
    title: "주소 찾기",
    id: "",
    isAgree: "",
  },
  email: {
    value: isEmpty(p.data.email) ? "" : p.data.email.split("@")[0],
    isConfirm: true,
    isNew: false,
    domain: isEmpty(p.data.email) ? "" : p.data.email.split("@")[1],
    timeStatus: "start",
    isEnd: false,
    remainingTime: "",
    domainArr: uEmailList(),
    authNum: "",
    authInputNum: "",
    checkDup: false,
  },
  mobileno: {
    value: p.data.mobileno,
    value1: p.data.mobileno.split("-")[0],
    value2: p.data.mobileno.split("-")[1],
    value3: p.data.mobileno.split("-")[2],
    isConfirm: true,
    isNew: false,
    remainingTime: "",
    timer: "",
  },
  confirmValidator: computed(() => {
    return d.email.isConfirm && d.mobileno.isConfirm;
  }),
});

watch(
  () => login.passInfo,
  (newInfo) => {
    if (isEmpty(newInfo)) return;

    if (newInfo.MOBILE_NO === d.mobileno.value) {
      if (
        Number(uGetLoginInfo("age")) >= 14 &&
        newInfo.NAME != p.data.userName
      ) {
        // 만14세 이상은 이름이 같아야한다. 14세 미만은 이름이 달라도 됨.
        modal.alert(
          "",
          "가입하신 회원의 휴대폰 번호로 인증하여 주시기 바랍니다."
        );
      } else {
        modal.alert("알림", "인증이 완료되었습니다.");
        d.mobileno.isConfirm = true;
        d.mobileno.isNew = false;
      }
    } else {
      modal.alert(
        "알림",
        "입력하신 휴대폰 번호와 인증받은 휴대폰 번호가 일치하지 않습니다. 확인 후 다시 시도해주시길 바랍니다."
      );
    }
  }
);
watch(
  () => ({
    email: `${d.email.value}@${d.email.domain}`,
  }),
  (newEmail) => {
    setFieldStatus(newEmail.email, p.data.email, d.email);
  }
);

watch(
  () => d.mobileno.value1 + d.mobileno.value2 + d.mobileno.value3,
  (newMobileno) => {
    d.mobileno.value = `${d.mobileno.value1}-${d.mobileno.value2}-${d.mobileno.value3}`;
    setFieldStatus(
      newMobileno,
      p.data.mobileno.replaceAll("-", ""),
      d.mobileno
    );
  }
);

const setFieldStatus = (newValue, oldValue, obj) => {
  if (newValue !== oldValue) {
    obj.isNew = true;
    obj.isConfirm = false;
    obj.checkDup = false;
    d.email.remainingTime = "";
  } else {
    obj.isNew = false;
    obj.isConfirm = true;
    obj.checkDup = true;
  }
};

const sendAuthNum = async (type, obj) => {
  let url;
  let sendData;

  if (type === "email") {
    url = "/api/ident_by_email";
    sendData = { email: d.email.value + "@" + d.email.domain };
  } else {
    url = "/api/ident_by_mobileno";
    sendData = { mobileno: d.mobileno.value.replaceAll("-", "") };
  }

  console.log(">>>>>>>>>>>", sendData);

  await call({
    id: "회원정보 변경 인증번호 발송",
    endpoint: url,
    headers: "PUBLIC",
    method: "post",
    data: sendData,
    onResponse({ data }) {
      console.log("인증번호 발송 >>>", data);
      obj.isConfirm = false;
      obj.authNum = data.crtfNumber;

      obj.timeStatus = obj.timeStatus === "start" ? "restart" : "start";
      obj.remainingTime = 180;
    },
  });
};

const checkEmailValidation = async () => {
  await call({
    id: "회원정보변경 이메일 중복 검사",
    endpoint: "/api/member_info/email_dup_check",
    headers: "PUBLIC",
    method: "post",
    data: {
      email: `${d.email.value}@${d.email.domain}`,
    },
    onResponse({ data }) {
      console.log(data);
      if (data.dupYn === "Y") {
        modal.alert(
          "알림",
          "이메일이 중복됩니다. 확인 후 다시 시도해주시길 바랍니다."
        );
        d.email.checkDup = false;
        return;
      }
      d.email.checkDup = true;
    },
  });
};

const onClickUpdateMemberInfo = async (e) => {
  if (e.target.value === "cancel") {
    modal.confirm(
      "취소",
      "취소하실 경우 수정한 내역이 사라집니다.<br/> 취소하시겠습니까?",
      () => {
        vm.emit("confirm");
      }
    );
  } else {
    console.log(d.confirmValidator);
    if (d.confirmValidator) {
      setMemberInfo();
    } else {
      modal.alert(
        "",
        "휴대폰 번호 또는 이메일은 변경 후 인증이 필요합니다.<br/>인증 후 다시 시도해주시길 바랍니다."
      );
    }
  }
};

const setMemberInfo = async () => {
  await call({
    id: "회원정보 수정",
    endpoint: "/api/member_info/post",
    headers: "LOGIN",
    method: "post",
    data: {
      profile: d.data.profile,
      email: `${d.email.value}@${d.email.domain}`,
      address1: d.data.address1,
      address2: d.data.address2,
      mobileno: d.mobileno.value,
      smsYn: d.data.smsYn,
      zipcode: d.data.zipcode,
    },
    onResponse({ data }) {
      modal.alert("알림", "회원정보 수정이 완료되었습니다", () => {
        vm.emit("confirm");
      });
      return true;
    },
  });
};

const onClickCheckAuth = (type) => {
  switch (type) {
    case "email":
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(`${d.email.value}@${d.email.domain}`)) {
        modal.alert(
          "",
          "이메일 형식이 아닙니다. 확인 후 다시 시도해주시길 바랍니다."
        );
        return;
      } else if (checkEmailValidation() === "Y") {
        modal.alert(
          "",
          "이메일이 중복됩니다. 확인 후 다시 시도해주시길 바랍니다."
        );
        return;
      }
      d.email.isEnd = false;
      sendAuthNum(type, d.email);
      break;
    case "mobileno":
      var phonePattern = /^010-\d{3,4}-\d{4}$/;
      if (!phonePattern.test(d.mobileno.value)) {
        modal.alert(
          "",
          "핸드폰 번호가 유효하지 않습니다. 확인 후 다시 시도해주시길 바랍니다."
        );
        return;
      }
      uCheckWithPass();
      break;
    default:
      break;
  }
};

const onClickAddress = (data) => {
  d.data.address1 =
    data.userSelectedType === "R" ? data.roadAddress : data.jibunAddress;
  d.data.zonecode = data.zonecode;
  d.addressModal.isShow = false;
};

const changeProfile = () => {
  d.data.profile = Math.floor(Math.random() * 19) + 1;
};

const onClickConfirmAuthNum = () => {
  if (d.email.authNum === d.email.authInputNum) {
    modal.alert("알림", "인증이 완료되었습니다.", () => {
      d.email.isConfirm = true;
      d.email.timeStatus = "stop";
      d.email.isNew = false;
    });
  } else {
    modal.alert("알림", "인증번호가 틀렸습니다. 다시 입력해주십시오.");
  }
  return;
};
</script>

<template>
  <div>
    <CommonContentsModal
      :data="d.addressModal"
      @close="d.addressModal.isShow = false"
    >
      <template v-slot:innerContents>
        <VueDaumPostcode @complete="onClickAddress" />
      </template>
    </CommonContentsModal>

    <div class="mypage__contents-body">
      <div class="mypage__form-wrap">
        <div class="mypage__form">
          <form class="needs-validation" @submit.prevent>
            <fieldset>
              <div class="mypage__form-profile">
                <a
                  href="javascript:void(0);"
                  @click="changeProfile"
                  class="mypage__form-profile-img mypage__form-profile-img--edit"
                >
                  <img
                    ref="myImage"
                    :src="uImage(`@temp/${d.data.profile}.jpg`)"
                    alt="회원 프로필 이미지"
                  />
                </a>
              </div>
              <div class="c-form-group">
                <label for="name" class="c-form-label">이름</label>
                <input
                  type="text"
                  id="name"
                  class="c-form-control"
                  :value="p.data.userName"
                  readonly
                />
              </div>
              <div class="c-form-group">
                <label for="joinDate" class="c-form-label"
                  >가입일<span class="c-form-label__date"
                    >({{ p.data.regDtm }} 평생교육 포털 제공 동의)</span
                  ></label
                >
                <input
                  type="text"
                  id="joinDate"
                  class="c-form-control"
                  :value="p.data.regDtm"
                  readonly
                />
              </div>
              <div class="c-form-group">
                <label for="identification" class="c-form-label">아이디</label>
                <input
                  id="identification"
                  type="text"
                  class="c-form-control"
                  :value="
                    isEmpty(p.data.sll_Id) ? p.data.loginid : p.data.sll_Id
                  "
                  readonly
                />
              </div>
              <div class="c-form-group">
                <label class="c-form-label">이메일 주소</label>
                <div class="c-input-group c-input-group--email">
                  <input
                    id="emailAddress"
                    class="c-form-control"
                    type="text"
                    placeholder="이메일 주소"
                    title="이메일주소 입력"
                    v-model="d.email.value"
                  />
                  <select
                    title="이메일 도메인 입력"
                    class="c-form-control"
                    v-model="d.email.domain"
                  >
                    <option
                      v-for="item in d.email.domainArr"
                      :value="item.value"
                    >
                      {{ item.text }}
                    </option>
                  </select>
                </div>
                <Input
                  v-model="d.email.domain"
                  title="이메일 도메인"
                  placeholder="이메일 도메인 입력"
                  :readonly="d.email.domainArr.indexOf(d.email.domain) >= 0"
                >
                  <Button
                    v-if="d.email.checkDup == false"
                    size="auto"
                    sizeType="small"
                    text="이메일 중복 확인"
                    :validator="d.email.isNew"
                    :disabled="d.email.isConfirm"
                    styleType="primary"
                    @click="checkEmailValidation()"
                  />

                  <Button
                    v-else
                    size="auto"
                    sizeType="small"
                    :text="
                      d.email.remainingTime !== ''
                        ? '인증번호 재발송'
                        : '인증번호 발송'
                    "
                    :validator="d.email.isNew"
                    :disabled="d.email.isConfirm"
                    styleType="primary"
                    @click="onClickCheckAuth('email')"
                  />
                </Input>
                <div
                  class="c-text-caution c-text-caution--type02 c-text-danger"
                  v-if="d.email.isEnd && !d.email.isConfirm"
                >
                  * 입력시간이 초과하였습니다.
                </div>
                <Input
                  v-else-if="d.email.remainingTime !== ''"
                  v-model="d.email.authInputNum"
                  title="인증번호"
                  placeholder="인증번호를 입력해주세요."
                >
                  <Countdown
                    :command="d.email.timeStatus"
                    :seconds="d.email.remainingTime"
                    :onEnd="
                      () => {
                        d.email.isEnd = true;
                      }
                    "
                  >
                    <p v-if="!d.email.isConfirm" class="c-text-primary">
                      <span counter>00:00</span>
                    </p>
                    <p v-else class="c-text-primary">
                      <img src="@img/ic-check.svg" alt="확인완료" />
                      확인완료
                    </p>
                  </Countdown>
                  <Button
                    size="auto"
                    styleType="primary"
                    sizeType="small"
                    text="인증번호 확인"
                    @click="onClickConfirmAuthNum()"
                    :validator="!d.email.isConfirm"
                    :disabled="d.email.isConfirm"
                  />
                </Input>
                <div class="c-form-group">
                  <label class="c-form-label">주소</label>
                  <div class="c-input-group c-input-group--disabled">
                    <input
                      class="c-form-control"
                      type="text"
                      placeholder="우편번호"
                      title="우편번호"
                      v-model="d.data.zipcode"
                      disabled
                    />
                    <button
                      type="submit"
                      class="c-btn c-btn-sm c-btn-sm--type02 c-btn-primary"
                      @click="d.addressModal.isShow = true"
                    >
                      검색
                    </button>
                  </div>
                  <div class="c-input-group">
                    <input
                      class="c-form-control"
                      type="text"
                      placeholder=""
                      title="주소"
                      v-model="d.data.address1"
                      disabled
                    />
                  </div>
                  <div class="c-input-group">
                    <input
                      class="c-form-control"
                      type="text"
                      placeholder="상세 주소 입력해주세요"
                      title="상세주소"
                      v-model="d.data.address2"
                    />
                  </div>
                </div>
                <div class="c-form-group">
                  <label for="cellmobileno" class="c-form-label"
                    >휴대폰번호</label
                  >
                  <div class="c-input-group">
                    <Input
                      v-model="d.mobileno.value1"
                      :onlyNumber="true"
                      maxlength="3"
                      title="휴대폰 앞번호"
                    />-
                    <Input
                      v-model="d.mobileno.value2"
                      :onlyNumber="true"
                      maxlength="4"
                      title="휴대폰 중간번호"
                    />-
                    <Input
                      v-model="d.mobileno.value3"
                      :onlyNumber="true"
                      maxlength="4"
                      title="휴대폰 끝번호"
                    />
                    <Button
                      size="auto"
                      sizeType="small"
                      text="휴대폰으로 인증"
                      :validator="d.mobileno.isNew"
                      styleType="primary"
                      @click="onClickCheckAuth('mobileno')"
                      :disabled="d.mobileno.isConfirm"
                    />
                  </div>
                </div>
                <div class="c-form-group">
                  <div class="c-form-label">이벤트 문자 수신 정보</div>
                  <div class="c-form-check-group">
                    <div class="c-form-check">
                      <input
                        class="c-btn-check"
                        type="radio"
                        name="event"
                        id="eventYes"
                        value="Y"
                        v-model="d.data.smsYn"
                        :checked="p.data.smsYn === 'Y'"
                      />
                      <label
                        class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                        for="eventYes"
                        >수신</label
                      >
                    </div>
                    <div class="c-form-check">
                      <input
                        class="c-btn-check"
                        type="radio"
                        name="event"
                        id="eventNo"
                        value="N"
                        v-model="d.data.smsYn"
                        :checked="p.data.smsYn === 'N'"
                      />
                      <label
                        class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                        for="eventNo"
                        >미수신</label
                      >
                    </div>
                  </div>
                  <div class="c-text-caution">
                    서울형교육플랫폼서비스 이용회원은 학습정보, 운영에 대한 등의
                    정보는
                    <br />
                    문자/이메일 등으로 전송됩니다.
                  </div>
                </div>
              </div>
              <div class="c-btn-group">
                <button
                  type="submit"
                  class="c-btn c-btn-lg c-btn-primary"
                  value="cancel"
                  @click="onClickUpdateMemberInfo"
                >
                  취소
                </button>
                <button
                  type="submit"
                  class="c-btn c-btn-lg c-btn-primary"
                  value="confirm"
                  @click="onClickUpdateMemberInfo"
                >
                  수정 완료
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
