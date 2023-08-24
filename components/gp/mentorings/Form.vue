<script setup>
import { useMentoringStore, useModalStore } from "@/store";
import * as yup from "yup";
import { isUserLogin, setReplacePattern } from "@/utils/gp";
import { call } from "@/api";

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const { $dayjs, vueApp } = useNuxtApp();
const datePicker = ref(null);

const {
  MENTORING: {
    MENTORING_FORM_CODE_DATA_LIST_GUEST,
    MENTORING_FORM_CODE_DATA_LIST,
    MENTORING_FORM_IS_EMAIL_DUPLICATE,
    MENTORING_FORM_SUBMIT_PATH,
    MENTORING_TERMS,
  },
} = useAppConfig();

const modal = useModalStore();
const { modalProps, setDispatchModalProps, setModalFields } =
  useMentoringStore();

const isComplete = ref(false);
const apply = ref(false);
const codeParams = reactive({});
const emailList = ref([]);
const emailPrefix = ref("");
const emailSuffix = ref("");
const emailManualSuffix = ref("");

const emailAddrssFirstRef = ref(null);
const emailAddrssRef = ref(null);
const masks = ref({
  input: "YYYY-MM-DD",
});
const initialValues = reactive({
  name: "",
  email: "",
  isEmailDuplicate: false,
  apply_type: "FT",
  attend_code1: "",
  pay_type: "",
  apply_cate: "", // 지원구분
  mentoring_type: "",
  handphone: [],
  subject: [],
  grade: [],
  grade_etc: "",
  availArea1: "",
  availArea2: "",
  coachingType: "",
  etc: "",
  apply_path: "",
  apply_path2: "",
  introduce1: "",
  introduce2: "",
  introduce3: "",
  introduce4: "",
  similarActivity: "", // 유사활동경력
  volunteerActivity: "", // 봉사활동경험
  certificate: "", // 자격증
  specialty: "", // 특기
  agreement: "",
});

const validationSchema = computed(() => {
  const resSchema = yup.object({
    name: yup.string().required(),
    sex: yup.string().required(),
    birthday: yup.string().required(),
    handphone: yup.array(
      yup.string().required(),
    ),
    zipcode: yup.string().required(),
    addr1: yup.string().required(),
    addr2: yup.string().required(),
    email: yup.string(),
    apply_type: yup.string(),
    school_code1: yup.string().required(),
    department_name1: yup.string().required(),
    attend_code1: yup.string().required(),
    pay_type: yup.string().required(),
    apply_cate: yup.string(),
    mentoring_type: yup.string().required(),
    subject: yup.array().min(1),
    etc: yup.string(),
    grade: yup.array().min(1),
    grade_etc: yup.string(),
    availArea1: yup.string().required(),
    availArea2: yup.string().required(),
    coachingType: yup.string().required(),
    apply_path: yup.string(),
    apply_path2: yup.string(),
    introduce1: yup.string(),
    introduce2: yup.string(),
    introduce3: yup.string(),
    introduce4: yup.string(),
    similarActivity: yup.string(), // 유사활동경력
    volunteerActivity: yup.string(), // 봉사활동경험
    certificate: yup.string(), // 자격증
    specialty: yup.string(), // 특기
    agreement: yup.boolean().required(),
  });

  return resSchema;
});

const {
  handleSubmit,
  handleReset,
  setValues,
  setFieldError,
  isSubmitting,
  useFieldModel,
  defineInputBinds,
  errors,
  meta,
} = useForm({
  initialValues: initialValues,
  validationSchema,
});

const [
  name,
  sex,
  birthday,
  zipcode,
  addr1,
  addr2,
  email,
  apply_type,
  isEmailDuplicate,
  subject,
  etc,
  grade,
  grade_etc,
  availArea1,
  availArea2,
  coachingType,
  apply_path,
  apply_path2,
  apply_cate,
  pay_type,
  mentoring_type,
  school_code1,
  department_name1,
  attend_code1,
  introduce1,
  introduce2,
  introduce3,
  introduce4,
  similarActivity, // 유사활동경력
  volunteerActivity, // 봉사활동경험
  certificate, // 자격증
  specialty, // 특기
  agreement,
] = useFieldModel([
  "name",
  "sex",
  "birthday",
  "zipcode",
  "addr1",
  "addr2",
  "email",
  "apply_type",
  "isEmailDuplicate",
  "subject",
  "etc",
  "grade",
  "grade_etc",
  "availArea1",
  "availArea2",
  "coachingType",
  "apply_path",
  "apply_path2",
  "apply_cate",
  "pay_type",
  "mentoring_type",
  "school_code1",
  "department_name1",
  "attend_code1",
  "introduce1",
  "introduce2",
  "introduce3",
  "introduce4",
  "similarActivity", // 유사활동경력
  "volunteerActivity", // 봉사활동경험
  "certificate", // 자격증
  "specialty", // 특기
  "agreement",
]);

const firstNumber = defineInputBinds("handphone[0]");
const middleNumber = defineInputBinds("handphone[1]");
const lastNumber = defineInputBinds("handphone[2]");

const isAvailable = ref(true);

const handleSubmitEvent = handleSubmit(
  async (resInputData) => {
    // console.log(">>>>> resInputData", resInputData);
    try {
      const data = {
        smrIdx: codeParams.smrIdx,
      };

      const { isEmailDuplicate, agreement, ...props } = resInputData;
      const cpData = { ...props };

      Object.assign(cpData, {
        birthday: $dayjs(resInputData.birthday).format("YYYY-MM-DD"),
        handphone: resInputData.handphone.join("-"),
      });

      Object.assign(data, {
        ...cpData,
      });

      const bodyData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        const target = value;
        if (Array.isArray(value)) {
          target.slice().forEach((str) => {
            bodyData.append(`${key}[]`, str);
          });
        } else {
          bodyData.append(key, value);
        }
      });

      // console.log('>>>>> data', data);
      await call({
        id: "멘토링 소개 - 멘토 지원 신청",
        endpoint: MENTORING_FORM_SUBMIT_PATH,
        method: "post",
        data: bodyData,
        onResponse: ({ status, message }) => {
          if (status === 200) {
            isComplete.value = true;
          } else {
            modal.alert("알림", message);
          }
        },
      });
    } catch (err) {
      console.error(err);
    }
  },
  ({ errors }) => {
    console.log(">>>>> errors", errors);
    if (!isUndefined(errors.agreement)) {
      modal.alert("알림", "개인정보수집이용 동의 해주세요");
      return;
    }
    modal.alert(
      "알림",
      "필수값이 입력되지 않았습니다,<br/> 확인 후 다시 시도해주시길 바랍니다"
    );
  }
);
const handleFetchEvent = async () => {
  try {
    const REST_PATH =
      isUserLogin() === true
        ? MENTORING_FORM_CODE_DATA_LIST
        : MENTORING_FORM_CODE_DATA_LIST_GUEST;

    await call({
      id: "멘토링 소개 - 멘토신청 공통 코드 노출",
      endpoint: REST_PATH,
      onResponse: ({ data, status, message }) => {
        isAvailable.value = status === 200;

        if (status !== 200) {
          return;
        }

        if (isUserLogin() === true) {
          const {
            name,
            sex,
            birthday,
            handphone,
            zipcode,
            addr1,
            addr2,
            email,
            ...props
          } = data;
          Object.entries(props).forEach(([key, value]) => {
            Object.assign(codeParams, {
              [key]: value,
            });
          });

          Object.entries({
            name,
            sex,
            birthday,
            handphone,
            zipcode,
            addr1,
            addr2,
            email,
          }).forEach(([key, value]) => {
            if (key === "handphone") {
              const convertValue = setReplacePattern(
                value,
                "mentoring-form-handphone"
              );
              convertValue
                .split(/(\d{3})(\d{4})(\d{4})/g)
                .filter((a) => a !== "")
                .forEach((str, index) => {
                  meta.value.initialValues[key][index] = str;
                });

              return;
            }
            meta.value.initialValues[key] = value;
          });

          if (!isEmpty(email)) {
            const [prefix, suffix] = email.split(/\@/g);

            emailPrefix.value = prefix;
            emailSuffix.value = suffix;
            emailManualSuffix.value = suffix;
          }

          return;
        }

        Object.entries(data).forEach(([key, value]) => {
          Object.assign(codeParams, {
            [key]: value,
          });
        });
      },
    });
  } catch (err) {
    console.error(err);
  }
};

const onLoadEvent = async () => {
  await handleFetchEvent();
  emailList.value = uEmailList();
  setModalFields(["terms"]);
};

onMounted(() => {
  document
    .getElementsByName("datePicker")[0]
    .setAttribute("title", "생년월일을 입력하세요");
});

const handleAddressEvent = () => {
  new daum.Postcode({
    oncomplete: ({ zonecode: zipcode, roadAddress: addr1, ...props }) => {
      setValues({
        zipcode,
        addr1,
      });
    },
  }).open();
};

const handleUpdateField = (
  { target: { value } },
  fieldName,
  callback = false
) => {
  switch (fieldName) {
    case "handphone":
      if (callback !== false) {
        callback(setReplacePattern(value, "mentoring-form-handphone"));
      }

      break;
    case "email-suffix":
      emailManualSuffix.value = setReplacePattern(
        value,
        "mentoring-form-email-suffix"
      );
  }
};
const handleFormToggleEvent = () => {
  if (isAvailable.value === false) {
    modal.alert("알림", "멘토지원 가능 기간이 아닙니다.");
    return;
  }

  if (apply.value === false) {
    handleReset();
  }
  apply.value = !apply.value;
};

const handleEmailCheckedEvent = async (isSubmitted = false) => {
  try {
    if (emailAddrssFirstRef.value.value === "") {
      emailAddrssFirstRef.value.focus();
      return;
    }
    if (emailAddrssRef.value.value === "") {
      emailAddrssRef.value.focus();
      return;
    }
    const email =
      emailAddrssFirstRef.value.value + "@" + emailAddrssRef.value.value;

    await call({
      id: "멘토링 소개 - 멘토 지원 이메일 중복 검사",
      endpoint: MENTORING_FORM_IS_EMAIL_DUPLICATE,
      method: "post",
      data: {
        email,
      },
      onResponse: ({ data: { dupYn } }) => {
        if (isSubmitted === true) {
          return dupYn.toString().toLowerCase();
        }

        if (dupYn.toString().toLowerCase() === "n") {
          modal.alert("알림", "사용가능한 메일입니다", () => {
            setFieldError("email", undefined);
            setValues({
              email,
              isEmailDuplicate: true,
            });
          });
        } else {
          setFieldError("email", "validation error");
          setValues({
            isEmailDuplicate: false,
          });
        }
      },
    });
  } catch (err) {
    console.error(err);
  }
};

const handleEmailCheckedDefaultEvent = () => {
  emailManualSuffix.value = "";
  emailPrefix.value = "";
  emailSuffix.value = "";

  setValues({
    isEmailDuplicate: false,
    email: "",
  });
};

const handleSelectEmailPrefixEvent = (e) => {
  emailManualSuffix.value = e.target.value;
  emailSuffix.value = e.target.value;
};

const handleAgreementDetailModalEvent = () => {
  call({
    id: "멘토링 소개 - 이용동의",
    endpoint: MENTORING_TERMS,
    method: "get",
    data: {
      cp_id: "SEOULLEARN",
      term_div_code: "TEMPLATE_P009",
    },
    onResponse: ({ data }) => {
      const { term_desc: desc, term_title: title } = data;
      setDispatchModalProps("terms", {
        title,
        desc: desc.replace(/\r\n/, "<br/>"),
      });
    },
  });
};

const isSubjectToETC = computed(() => subject.value.includes("ET"));

const isGradeToETC = computed(() => grade.value.includes("ET"));

const isLogin = computed(() => isUserLogin());

await onLoadEvent();
</script>

<template>
  <div id="mentoring-form-wrapper" class="mentoring__title" ref="formWrapper">
    <div class="mentoring__title-lg">멘토 지원서</div>
  </div>
  <div
    class="mentoring__form-wrap"
    :class="{ active: apply === true }"
    v-if="isComplete === false"
  >
    <button
      class="mentoring__form-head"
      type="button"
      @click.prevent="handleFormToggleEvent"
    >
      <p>멘토 지원서 작성하기</p>
    </button>
    <div class="mentoring__form" v-if="isAvailable">
      <form @submit.prevent="handleSubmitEvent">
        <div class="mentoring__form-box">
          <h2 class="c-text-title-md">기본정보를 입력해주세요.</h2>
          <div class="c-form-group">
            <label for="name" class="c-form-label"
              >이름<span class="c-essential">*</span></label
            >
            <input
              type="text"
              class="c-form-control"
              placeholder="이름을 입력해 주세요."
              :disabled="isLogin"
              v-model="name"
              id="name"
              @keydown.enter.prevent=""
            />
          </div>
          <div class="c-form-group">
            <label for="sex" class="c-form-label"
              >성별<span class="c-essential">*</span></label
            >
            <div class="c-form-check-group">
              <div
                class="c-form-check"
                v-for="(genderType, genderTypeIdx) in codeParams.sex_cd"
                :key="`genderType-${genderType.cd}`"
              >
                <input
                  class="c-btn-check"
                  type="radio"
                  v-model="sex"
                  :value="genderType.cd"
                  :id="`${genderType.cd}-${genderTypeIdx}`"
                  :disabled="isLogin"
                  @keydown.enter.prevent=""
                /><label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  :for="`${genderType.cd}-${genderTypeIdx}`"
                  >{{ genderType.cdnm }}</label
                >
              </div>
            </div>
          </div>
          <div class="c-form-group">
            <label for="birth" class="c-form-label"
              >생년월일 (연도.월.일)<span class="c-essential">*</span></label
            >
            <div class="c-input-group c-input-group--calendar">
              <div>
                <VueDatePicker
                  name="datePicker"
                  ref="datePicker"
                  v-model="birthday"
                  format="yyyy.MM.dd"
                  locale="ko"
                  class="date"
                  :disabled="isLogin"
                  :enable-time-picker="false"
                  auto-apply
                  :clearable="false"
                  hide-input-icon
                  placeholder="연도.월.일"
                />
              </div>
            </div>
          </div>
          <div class="c-form-group">
            <label for="cellphone" class="c-form-label"
              >휴대폰번호<span class="c-essential">*</span></label
            >
            <div class="c-input-group">
              <input
                class="c-form-control"
                type="text"
                v-bind="firstNumber"
                @input="
                  ($event) =>
                    handleUpdateField($event, 'handphone', firstNumber.onInput)
                "
                :disabled="isLogin"
                :maxlength="3"
                id="cellphone"
                title="휴대폰번호 통신사 번호 입력"
                @keydown.enter.prevent=""
              />
              -
              <input
                class="c-form-control"
                type="text"
                v-bind="middleNumber"
                @input="
                  ($event) =>
                    handleUpdateField($event, 'handphone', middleNumber.onInput)
                "
                :disabled="isLogin"
                :maxlength="4"
                title="휴대폰번호 국번 입력"
                @keydown.enter.prevent=""
              />
              -
              <input
                class="c-form-control"
                type="text"
                v-bind="lastNumber"
                @input="
                  ($event) =>
                    handleUpdateField($event, 'handphone', lastNumber.onInput)
                "
                :disabled="isLogin"
                :maxlength="4"
                title="휴대폰번호 사번 입력"
                @keydown.enter.prevent=""
              />
            </div>
          </div>
          <div class="c-form-group">
            <label class="c-form-label"
              >주소<span class="c-essential">*</span></label
            >
            <div class="c-input-group c-input-group--disabled">
              <input
                class="c-form-control"
                type="text"
                placeholder="우편번호"
                title="우편번호 검색"
                v-model="zipcode"
                disabled
              />
              <button
                class="c-btn c-btn-sm c-btn-primary"
                type="button"
                @click.prevent="handleAddressEvent"
                v-if="isLogin === false"
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
                v-model="addr1"
                disabled
              />
            </div>
            <div class="c-input-group">
              <input
                class="c-form-control"
                type="text"
                v-model="addr2"
                placeholder="상세 주소 입력해주세요"
                title="상세주소 입력"
                @keydown.enter.prevent=""
                :disabled="isLogin"
              />
            </div>
          </div>
          <div class="c-form-group">
            <label for="emailAddress" class="c-form-label">이메일 주소</label>
            <div class="c-input-group c-input-group--email">
              <input
                ref="emailAddrssFirstRef"
                id="emailAddress"
                class="c-form-control"
                type="text"
                placeholder="이메일 주소"
                title="이메일주소 입력"
                v-model="emailPrefix"
                @keydown.enter.prevent=""
                :disabled="isLogin || isEmailDuplicate"
              />
              <select
                title="이메일 도메인 입력"
                class="c-form-control"
                :disabled="isLogin || isEmailDuplicate"
                @change="handleSelectEmailPrefixEvent"
                v-model="emailSuffix"
              >
                <option
                  :value="value"
                  v-for="({ text, value }, emailIndex) in emailList"
                >
                  {{ text }}
                </option>
              </select>
            </div>
            <div
              :class="{
                'c-input-group': true,
                'c-input-group--disabled': isEmailDuplicate,
              }"
            >
              <input
                ref="emailAddrssRef"
                id="emailAddress"
                class="c-form-control"
                type="text"
                :disabled="!isEmpty(emailSuffix) || isEmailDuplicate"
                v-model="emailManualSuffix"
                @input="($event) => handleUpdateField($event, 'email-suffix')"
                @keydown.enter.prevent=""
                title="기타 입력 이메일 주소"
              />
              <template v-if="isLogin === false">
                <button
                  class="c-btn c-btn-sm c-btn-sm--type02 c-btn-primary"
                  type="button"
                  @click.prevent="handleEmailCheckedEvent"
                  v-if="!isEmailDuplicate"
                >
                  중복체크
                </button>
                <button
                  class="c-btn c-btn-sm c-btn-sm--type02 c-btn-inactive"
                  type="button"
                  @click.prevent="handleEmailCheckedDefaultEvent"
                  v-else
                >
                  체크해제
                </button>
              </template>
            </div>
            <p
              class="c-text-danger c-text-sm"
              v-if="!isUndefined(errors?.email)"
            >
              중복된 이메일 주소가 존재합니다.
            </p>
          </div>
          <div class="c-form-group">
            <label for="category" class="c-form-label"> 지원 구분 </label>
            <!-- 웹접근성 title 추가 -->
            <select class="c-form-control" id="category" v-model="apply_cate">
              <option selected value="">선택</option>
              <option
                v-for="(applyCate, applyCateIdx) in codeParams.apply_cate_cd"
                :value="applyCate.cd"
              >
                {{ applyCate.cdnm }}
              </option>
            </select>
          </div>
          <div class="c-form-group">
            <div class="c-form-label">
              대학교 정보<span class="c-essential">*</span>
            </div>
            <div class="c-input-group c-input-group--disabled">
              <input
                class="c-form-control"
                type="text"
                placeholder="대학교"
                title="대학교 정보"
                v-model="school_code1"
                @keydown.enter.prevent=""
              />
            </div>
            <div class="c-input-group">
              <input
                class="c-form-control"
                type="text"
                placeholder="전공을 입력하세요"
                title="전공"
                v-model="department_name1"
                @keydown.enter.prevent=""
              />
            </div>
          </div>
          <div class="c-form-group">
            <label for="status" class="c-form-label"
              >재학 상태<span class="c-essential">*</span></label
            >
            <select id="status" class="c-form-control" v-model="attend_code1">
              <option selected disabled value="">선택</option>
              <option
                :value="attend.cd"
                v-for="(attend, attendIdx) in codeParams.attend_cd"
                :key="`${attend}-${attendIdx}`"
              >
                {{ attend.cdnm }}
              </option>
            </select>
          </div>
          <div class="c-form-group">
            <label for="mentoring" class="c-form-label"
              >멘토링 유형<span class="c-essential">*</span></label
            >
            <select id="mentoring" class="c-form-control" v-model="pay_type">
              <option selected disabled value="">선택</option>
              <option
                :value="payType.cd"
                v-for="(payType, payTypeIdx) in codeParams.mentor_paytype_cd"
                :key="`${payType}-${payTypeIdx}`"
              >
                {{ payType.cdnm }}
              </option>
            </select>
            <select
              id="mentoring2"
              class="c-form-control"
              title="멘토링 유형2"
              v-model="mentoring_type"
            >
              <option selected disabled value="">선택</option>
              <option
                :value="mtrType.cd"
                v-for="(mtrType, mtrTypeIdx) in codeParams.mentor_mtrtype_cd"
                :key="`${mtrType}-${mtrTypeIdx}`"
              >
                {{ mtrType.cdnm }}
              </option>
            </select>
          </div>
          <div class="c-form-group">
            <label for="subject" class="c-form-label"
              >지원 가능 과목<span class="c-essential">*</span></label
            >
            <div class="c-form-check-group c-form-check-group--col3">
              <div
                class="c-form-check"
                v-for="(subjectObj, subjectIdx) in codeParams.mentor_sbjt_cd"
                :key="`${subjectObj}-${subjectIdx}`"
              >
                <input
                  class="c-btn-check"
                  type="checkbox"
                  name="subject"
                  :id="`subjectObj-${subjectIdx}`"
                  :value="subjectObj.cd"
                  v-model="subject"
                  @keydown.enter.prevent=""
                /><label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  :for="`subjectObj-${subjectIdx}`"
                  >{{ subjectObj.cdnm }}</label
                >
              </div>
            </div>
          </div>
          <div class="c-form-group" v-if="isSubjectToETC === true">
            <label for="subject-etc" class="c-form-label"
              >지도 가능 과목 기타</label
            >
            <input
              id="subject-etc"
              type="text"
              class="c-form-control"
              v-model="etc"
              @keydown.enter.prevent=""
            />
          </div>
          <div class="c-form-group">
            <label class="c-form-label"
              >지도 가능 학년<span class="c-essential">*</span></label
            >
            <div class="c-form-check-group c-form-check-group--col5">
              <div
                class="c-form-check"
                v-for="(gradeObj, gradeIdx) in codeParams.mentor_gdgrd_cd"
                :key="`${gradeObj}-${gradeIdx}`"
              >
                <input
                  class="c-btn-check"
                  type="checkbox"
                  name="grade"
                  :id="`grade-${gradeIdx}`"
                  :value="gradeObj.cd"
                  v-model="grade"
                  @keydown.enter.prevent=""
                /><label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  :for="`grade-${gradeIdx}`"
                  >{{ gradeObj.cdnm }}</label
                >
              </div>
            </div>
          </div>
          <div class="c-form-group" v-if="isGradeToETC === true">
            <label for="subject" class="c-form-label"
              >지도 가능 학년 기타</label
            >
            <input
              type="text"
              class="c-form-control"
              placeholder=""
              v-model="grade_etc"
              @keydown.enter.prevent=""
            />
          </div>
          <div class="c-form-group">
            <label for="location" class="c-form-label"
              >지도 가능 지역<span class="c-essential">*</span></label
            >
            <div class="c-input-group c-input-group--type04">
              <select
                id="location"
                v-model="availArea1"
                class="c-form-control"
                title="지도 가능 지역1"
              >
                <option selected disabled value="">선택</option>
                <option
                  v-for="(area1, area1Idx) in codeParams.mentor_dist_cd"
                  :value="area1.cd"
                >
                  {{ area1.cdnm }}
                </option>
              </select>
              <select
                v-model="availArea2"
                class="c-form-control"
                type="text"
                title="지도 가능 지역2"
              >
                <option selected disabled value="">선택</option>
                <option
                  v-for="(area1, area1Idx) in codeParams.mentor_dist_cd"
                  :value="area1.cd"
                >
                  {{ area1.cdnm }}
                </option>
              </select>
            </div>
          </div>
          <div class="c-form-group">
            <label for="coachingType" class="c-form-label"
              >코칭 유형<span class="c-essential">*</span></label
            >
            <select
              class="c-form-control"
              id="coachingType"
              v-model="coachingType"
            >
              <option selected disabled value="">선택</option>
              <option
                v-for="(
                  coachingTypeItem, coachingTypeIdx
                ) in codeParams.coaching_type_cd"
                :value="coachingTypeItem.cd"
              >
                {{ coachingTypeItem.cdnm }}
              </option>
            </select>
          </div>
          <div class="c-form-group">
            <label for="route" class="c-form-label">지원 경로</label>
            <div class="c-input-group c-input-group--type04">
              <select
                name="apply_path"
                id="route"
                title="지원경로 선택"
                class="c-form-control"
                v-model="apply_path"
              >
                <option selected disabled value="">선택</option>
                <option
                  :value="joinPathObj.cd"
                  v-for="(joinPathObj, joinPathIdx) in codeParams.joinpath_cd"
                >
                  {{ joinPathObj.cdnm }}
                </option>
              </select>
              <input
                class="c-form-control"
                type="text"
                placeholder="기타 경로 입력"
                title="지원경로 직접 입력"
                :disabled="apply_path !== 'PATH06'"
                v-model="apply_path2"
                @keydown.enter.prevent=""
              />
            </div>
          </div>
        </div>
        <div class="mentoring__form-box">
          <h2 class="c-text-title-md">이용 동의</h2>
          <div class="c-form-group">
            <div class="c-form-label-wrap custom">
              <label class="c-form-label c-text-black c-text-title-sub"
                >개인정보 수집 이용 동의</label
              >
              <button
                type="button"
                class="c-form-label-btn"
                @click.prevent="handleAgreementDetailModalEvent"
              >
                내용보기
              </button>
            </div>
            <div class="c-form-check-group">
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="agreement"
                  id="agree11"
                  v-model="agreement"
                  :value="true"
                  @keydown.enter.prevent=""
                /><label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="agree11"
                  >동의함</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="agreement"
                  id="agree12"
                  v-model="agreement"
                  :value="undefined"
                  @keydown.enter.prevent=""
                /><label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="agree12"
                  >동의안함</label
                >
              </div>
            </div>
          </div>
        </div>
        <div class="mentoring__form-box radius">
          <h2 class="c-text-title-md">자기소개서를 입력해 주세요.</h2>
          <div class="c-form-group">
            <label for="introduction5" class="c-form-label">
              1. 유사활동 경력을 작성해주세요.
            </label>
            <textarea
              class="c-form-control"
              id="introduction5"
              v-model="similarActivity"
            ></textarea>
          </div>
          <div class="c-form-group">
            <label for="introduction6" class="c-form-label">
              2. 봉사활동 경험을 작성해주세요.
            </label>
            <textarea
              class="c-form-control"
              id="introduction6"
              v-model="volunteerActivity"
            ></textarea>
          </div>
          <div class="c-form-group">
            <label for="introduction7" class="c-form-label">
              3. 자격증 정보를 입력해주세요.
            </label>
            <textarea
              class="c-form-control"
              id="introduction7"
              v-model="certificate"
            ></textarea>
          </div>
          <div class="c-form-group">
            <label for="introduction8" class="c-form-label">
              4. 특기 정보를 입력해주세요.
            </label>
            <textarea
              class="c-form-control"
              id="introduction8"
              v-model="specialty"
            ></textarea>
          </div>
          <div class="c-form-group">
            <label for="introduction1" class="c-form-label">
              5. 서울런 멘토단에 지원한 동기는 무엇인가요?
            </label>
            <textarea
              class="c-form-control"
              id="introduction1"
              v-model="introduce1"
            ></textarea>
          </div>
          <div class="c-form-group">
            <label for="introduction2" class="c-form-label">
              6. 효과적인 멘토링을 위한 노하우 또는 아이디어를 서술해 주세요.
            </label>
            <textarea
              class="c-form-control"
              id="introduction2"
              v-model="introduce2"
            ></textarea>
          </div>
          <div class="c-form-group">
            <label for="introduction3" class="c-form-label">
              7. 청소년 관련 봉사(기타 활동) 경험이 있다면 그 경험과 느낀점을
              적어주세요.
            </label>
            <textarea
              class="c-form-control"
              id="introduction3"
              v-model="introduce3"
            ></textarea>
          </div>
          <div class="c-form-group">
            <label for="introduction4" class="c-form-label">
              8. 서울런 멘토단이 되면 어떻게 활동하고 싶은지 계획과 각오를
              적어주세요.
            </label>
            <textarea
              class="c-form-control"
              id="introduction4"
              v-model="introduce4"
            ></textarea>
          </div>
        </div>
        <div class="c-btn-box">
          <div class="c-btn-group">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="c-btn c-btn-lg c-btn-inactive"
            >
              지원하기
            </button>
          </div>
        </div>
      </form>
    </div>
    <template v-if="modalProps.terms.show === true">
      <ModalAlertTermsForMentor v-bind="{ ...modalProps.terms }" />
    </template>
  </div>
  <div class="mentoring__complete" v-else>
    <div class="mentoring__complete-title">
      멘토 지원이 성공적으로<br class="c-mo" />
      <span>완료 되었습니다.</span>
    </div>
    <div class="mentoring__complete-text">
      멘토 지원은 순차적으로 관리자가 검토하고 있습니다.<br />
      검토 후 빠른 시간 안에 연락 드리도록 하겠습니다.
    </div>
    <div class="mentoring__complete-img">
      <img src="@img/ch-mentoring4.svg" alt="" />
    </div>
  </div>
</template>
