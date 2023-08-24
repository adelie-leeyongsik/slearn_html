<script setup>
import { call } from "@/api";
import { useModalStore } from "@/store";

const emit = defineEmits(["close"]);

const modal = useModalStore();

const p = defineProps({
  isShow: { type: Boolean, default: false },
});

const d = reactive({
  onOff: "",
  onOffList: [],
  location1: "",
  location2: "",
  locationList: [],
  subj: "",
  subjList: [],
  etcText: "",
  week: "",
  weekList: [],
  time: "",
  timeList: [],
  grade: "",
  gradeList: [
    {
      text: "중학교",
      value: "MS",
    },
    {
      text: "고등 1학년",
      value: "H1",
    },
    {
      text: "고등 2학년",
      value: "H2",
    },
    {
      text: "고등 3학년",
      value: "H3",
    },
  ],
  learn: "",
  learnList: [],
  mob1: "",
  mob2: "",
  mob3: "",
});

onMounted(() => {
  getCodeInfo();
});

const getCodeInfo = () => {
  call({
    method: "get",
    id: "멘토링 신청하기 코드 정보",
    endpoint: "/api/sq/mentee/subject/code",
    data: {},
    onResponse({ data, status }) {
      if (status === 200) {
        d.onOffList = data.filter((f) => isEqual(f.cateId, "MENTEE_MTRTYPE"));

        d.onOffList.forEach((v) => {
          v.text = isEqual(v.codeId, "ON")
            ? "온라인으로 하고싶어요"
            : "만나서 하고싶어요";
          v.value = v.codeId;
        });

        d.locationList = data.filter((f) => isEqual(f.cateId, "MENTOR_DIST"));

        d.subjList = data.filter((f) => isEqual(f.cateId, "MENTOR_SBJT"));

        d.subjList.push({ codeId: "ET", codeName: "기타" });

        d.subjList.forEach((v) => {
          v.text = v.codeName;
          v.value = v.codeId;
        });

        d.weekList = data.filter((f) => isEqual(f.cateId, "MENTOR_AVWK"));

        d.timeList = data.filter((f) => isEqual(f.cateId, "MENTOR_AVTI"));

        d.learnList = data.filter((f) => isEqual(f.cateId, "MENTOR_CCTP"));

        d.learnList.forEach((v) => {
          v.text = "";

          if (isEqual(v.codeId, "LC")) {
            v.text = "혼자 공부하기 어려워요";
          } else if (isEqual(v.codeId, "PS")) {
            v.text = "문제를 잘 못풀어요";
          } else if (isEqual(v.codeId, "PD")) {
            v.text = "무엇을 잘하는지 알고싶어요";
          }

          v.value = v.codeId;
        });
      }
    },
  });
};

const onChageOnOff = () => {
  if (isEqual(d.onOff, "ON")) {
    d.location1 = "";
    d.location2 = "";
  }
};

const validation = () => {
  if (isEmpty(d.onOff)) {
    return false;
  }

  if (isEmpty(d.subj)) {
    return false;
  }

  if (isEmpty(d.week)) {
    return false;
  }

  if (isEmpty(d.time)) {
    return false;
  }

  if (isEmpty(d.grade)) {
    return false;
  }

  if (isEmpty(d.learn)) {
    return false;
  }

  // if(isEmpty(d.mob1)){
  //   return false
  // }

  // if(isEmpty(d.mob2)){
  //   return false
  // }

  // if(isEmpty(d.mob3)){
  //   return false
  // }

  return true;
};

const onApply = () => {
  console.log("onApply");

  if (!validation()) {
    modal.alert(
      "알림",
      "신청서의 일부가 미작성되었습니다. <br/> 확인 후 다시 시도해주십시오"
    );
    return;
  }

  let param = {
    mentoringType: d.onOff,
    requestArea1: d.location1,
    requestArea2: d.location2,
    subject: d.subj,
    subjectEtc: d.etcText,
    requestWeek: d.week,
    requestTime: d.time,
    menteeGrade: d.grade,
    coachType: d.learn,
    mobile: d.mob1 + "-" + d.mob2 + "-" + d.mob3,
  };

  console.log("param ", param);
  call({
    method: "post",
    id: "멘토링 신청하기",
    endpoint: "/api/sq/mentee/subject",
    data: param,
    onResponse({ status }) {
      if (status === 200) {
        emit("close");
      }
    },
  });
};
</script>

<template>
  <Transition name="c-modals">
    <div class="c-modals" v-if="p.isShow">
      <div class="c-modals__bg"></div>
      <div class="c-modals__inner scroll">
        <div class="c-modals__head">
          멘토링 신청하기
          <button
            class="c-modals__head-close"
            type="submit"
            @click="emit('close')"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <section>
            <h3 class="c-modals__title c-modals__title-sm">
              Q1. 어디에서 멘토링을 하고 싶으신가요?
            </h3>
            <Radio
              v-model="d.onOff"
              :items="d.onOffList"
              @change="onChageOnOff"
            />
          </section>
          <section>
            <h3 class="c-modals__title c-modals__title-sm">
              Q1-1. 어디에서 만나실수 있나요?
            </h3>
            <div class="c-form-check-group">
              <select
                v-model="d.location1"
                name="location1"
                id="location1"
                class="c-form-control"
                :disabled="isEqual(d.onOff, 'ON')"
              >
                <option value="" disabled>가능지역 1</option>
                <option
                  :value="`${list.codeId}`"
                  v-for="list in d.locationList"
                >
                  {{ list.codeName }}
                </option>
              </select>
              <select
                v-model="d.location2"
                name="location2"
                id="location2"
                class="c-form-control mt-0"
                :disabled="isEqual(d.onOff, 'ON')"
              >
                <option value="" disabled>가능지역 2</option>
                <option
                  :value="`${list.codeId}`"
                  v-for="list in d.locationList"
                >
                  {{ list.codeName }}
                </option>
              </select>
            </div>
          </section>
          <section>
            <h3 class="c-modals__title c-modals__title-sm">
              Q2. 어떤 과목을 멘토링 받고 싶으신가요?
            </h3>
            <Radio
              class="c-form-check-group c-form-check-group--col3"
              v-model="d.subj"
              :items="d.subjList"
            />
            <input
              v-if="isEqual(d.subj, 'ET')"
              v-model="d.etcText"
              type="text"
              class="c-form-control etc"
              title="기타 내용"
              placeholder="기타 내용을 입력해주세요."
            />
          </section>
          <section>
            <h3 class="c-modals__title c-modals__title-sm">
              Q3. 멘토링은 언제가 편하세요?
            </h3>
            <div class="c-form-check-group">
              <select
                v-model="d.week"
                name="week"
                id="week"
                class="c-form-control"
              >
                <option value="" disabled>주간 시간대</option>
                <option :value="`${list.codeId}`" v-for="list in d.weekList">
                  {{ list.codeName }}
                </option>
              </select>
              <select
                v-model="d.time"
                name="time"
                id="time"
                class="c-form-control mt-0"
              >
                <option value="" disabled>일간 시간대</option>
                <option :value="`${list.codeId}`" v-for="list in d.timeList">
                  {{ list.codeName }}
                </option>
              </select>
            </div>
          </section>
          <section>
            <h3 class="c-modals__title c-modals__title-sm">
              Q4. 교육 과정은 어느 과정을 듣고 싶으신가요??
            </h3>
            <Radio
              class="c-form-check-group c-form-check-group--col4"
              v-model="d.grade"
              :items="d.gradeList"
            />
          </section>
          <section>
            <h3 class="c-modals__title c-modals__title-sm">
              Q5. 학습하는데 어떤 점을 개선하고 싶으신가요?
            </h3>
            <Radio
              class="c-form-check-group c-form-check-group--col1"
              v-model="d.learn"
              :items="d.learnList"
            />
          </section>
          <!-- <section>
            <h3 class="c-modals__title c-modals__title-sm">
              Q6. 상담가능한 연락처를 입력해주세요.
            </h3>
            <div class="c-input-group">
              <input
                v-model="d.mob1"
                type="text"
                class="c-form-control"
                title="상담받을 연락처 국번"
              />
              -
              <input
                v-model="d.mob2"
                type="text"
                class="c-form-control"
                title="상담받을 연락처 앞자리"
              />
              -
              <input
                v-model="d.mob3"
                type="text"
                class="c-form-control"
                title="상담받을 연락처 뒷자리"
              />
            </div>
          </section> -->
          <div class="c-modals__button">
            <div class="c-btn-group">
              <button
                type="submit"
                class="c-btn c-btn-blue"
                @click="emit('close')"
              >
                닫기
              </button>

              <button type="submit" class="c-btn c-btn-danger" @click="onApply">
                신청
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.c-form-control.etc {
  margin-top: 0.8rem;
}
</style>
