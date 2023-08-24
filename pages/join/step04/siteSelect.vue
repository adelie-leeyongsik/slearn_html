<script setup>
import swiperItem from "./swiperItem";
import { useLoginStore, useModalStore } from "@/store";
import { call } from "@/api";

const emit = defineEmits(["onChangeSubj", "onChangeLecture", "onChangeBook"]);

definePageMeta({
  layout: "account",
});

const lecturCheck = ref();

const modal = useModalStore();
const login = useLoginStore();

const p = defineProps({
  typeInfo: { type: Object, default: {} },
  dataList: { type: Array, default: [] },
  paramInfo: { type: Object, default: {} },
});

const d = reactive({
  subj: "",
  subjList: [], //교과학습
  selList: [
    //과목
    {
      text: "국어",
      value: "01",
    },
    {
      text: "영어",
      value: "02",
    },
    {
      text: "수학",
      value: "03",
    },
    {
      text: "사회",
      value: "04",
    },
    {
      text: "과학",
      value: "05",
    },
  ],
  recommendList: null, //추천강의
  recomSelList: [], //과목별 추천강의
  noSubj: "",
  noSubjList: [], //비교과학습
  lectureList: [], //전문강좌
  lectureShow: false, //전문강좌 추천
  lecRecomList: [], //전문강좌 추천목록
  checkLecture: [], //전문강좌 체크박스
  bookList: [], //독서
  bookShow: false, //독서 추천
  bookRecomList: [], //독서 추천목록
  checkBook: [], //독서 체크박스
});

watch(
  () => p.typeInfo.school,
  (val) => {
    console.log("typeInfo", val);

    if (!isEmpty(val)) {
      d.subj = "";
      d.subjList = [];
      d.checkLecture = [];
      d.subjSel = "";
      d.recomSelList = [];
      d.lectureShow = false;
      d.lecRecomList = [];
      d.checkBook = [];
      d.bookShow = false;
      d.bookRecomList = [];

      d.noSubjList = p.dataList.filter((f) =>
        isEqual(f.subj_div_code, "SUBJECT_P002")
      );

      d.lectureList = d.noSubjList.filter((v) =>
        isEqual(v.non_subj_grp_code, "1")
      );
      d.bookList = d.noSubjList.filter((v) =>
        isEqual(v.non_subj_grp_code, "2")
      );

      if (isEqual(val, "SCHLVL_P001")) {
        //초등
        d.subjList = p.dataList.filter(
          (f) =>
            isEqual(f.svc_div_code, "SVCTYP_T001") &&
            isEqual(f.subj_div_code, "SUBJECT_P001")
        );
      } else if (isEqual(val, "SCHLVL_P002")) {
        //중등
        d.subjList = p.dataList.filter(
          (f) =>
            isEqual(f.svc_div_code, "SVCTYP_T002") &&
            isEqual(f.subj_div_code, "SUBJECT_P001")
        );

        d.subjList.push(
          p.dataList.filter((v) => isEqual(v.svc_div_code, "SVCTYP_T006"))[0]
        );
      } else if (isEqual(val, "SCHLVL_P003")) {
        //고등
        d.subjList = p.dataList.filter(
          (f) =>
            isEqual(f.svc_div_code, "SVCTYP_T003") &&
            isEqual(f.subj_div_code, "SUBJECT_P001")
        );

        d.subjList.push(
          p.dataList.filter((v) => isEqual(v.svc_div_code, "SVCTYP_T006"))[0]
        );
      }
    }
  },
  { immediate: true }
);

watch(
  () => p.paramInfo,
  (val) => {
    console.log("paramInfo", val);

    if (!isEmpty(val.subjParam)) {
      d.subj = val.subjParam;
    }

    if (!val.change) {
      d.subjList = d.subjList.filter((f) => isEqual(f.cp_id, d.subj));
    }

    if (!isEmpty(val.lectureParam)) {
      d.checkLecture[0] = val.lectureParam;
    }

    if (!isEmpty(val.bookParam)) {
      d.checkBook[0] = val.bookParam;
    }
  },
  { immediate: true }
);

//교과학습 선택시
const onChangeSubj = (val) => {
  if (isEmpty(p.typeInfo.school)) {
    modal.alert("알림", "학교급을 선택해주세요.");
    d.subj = "";
    return;
  } else if (isEmpty(p.typeInfo.grade)) {
    modal.alert("알림", "학년을 선택해주세요.");
    d.subj = "";
    return;
  }

  d.subj = val.target.value;
  d.subjSel = "";
  d.recomSelList = [];

  call({
    method: "post",
    id: "추천강좌 조회",
    endpoint: "/api/course_recommend/query",
    data: {
      sch_level: p.typeInfo.school,
      school_grd: p.typeInfo.grade,
      cp_id: d.subj,
      sex: login.joinInfo.sex,
      address1: login.basicInfo.addr,
    },
    onResponse({ data, status, message }) {
      console.log("data ", data);
      console.log("status ", status);
      console.log("message ", message);

      d.recommendList = data.courseRecommendationMap;

      if (!isEmpty(d.recommendList)) {
        d.recommendList.logo_img = d.subjList.filter((f) =>
          isEqual(f.cp_id, d.subj)
        )[0].sub_log_img;

        d.recommendList.cp_name = d.subjList.filter((f) =>
          isEqual(f.cp_id, d.subj)
        )[0].cp_name;
      }

      emit("onChangeSubj", d.subj);
    },
  });
};

//교과학습 과목선택시
const onChangeSelect = (data) => {
  d.subjSel = data.target.value;

  if (!isEmpty(d.recommendList[d.subjSel])) {
    d.recomSelList = d.recommendList[d.subjSel];

    d.recomSelList.forEach((v) => {
      v.logo_img = d.recommendList.logo_img;
      v.cp_name = d.recommendList.cp_name;
    });
  } else {
    d.recomSelList = [];
  }
};

//둘러보기 링크
const goLink = (url) => {
  window.open(url);
};

//비교과학습 전문강좌
const onChangeCheckLecture = (val) => {
  let checked = lecturCheck.value.map((m) => m.checked);

  d.lecRecomList = [];
  d.lectureShow = false;

  d.checkLecture = [];
  d.checkLecture[0] = val;

  if (checked.every((v) => v === false)) {
    d.checkLecture = [];
    emit("onChangeLecture", null);
  } else if (d.checkLecture.length === 1) {
    let list = d.lectureList.filter((f) =>
      isEqual(f.cp_id, d.checkLecture[0])
    )[0];

    call({
      method: "post",
      id: "추천강좌 조회",
      endpoint: "/api/course_recommend/query",
      data: {
        sch_level: p.typeInfo.school,
        school_grd: p.typeInfo.grade,
        cp_id: d.checkLecture[0],
        sex: login.joinInfo.sex,
        address1: login.basicInfo.addr,
      },
      onResponse({ data, status, message }) {
        console.log("data ", data);
        console.log("status ", status);
        console.log("message ", message);

        d.lecRecomList = data.courseRecommendationList;

        if (!isEmpty(d.lecRecomList)) {
          d.lecRecomList.forEach((v) => {
            v.logo_img = list.sub_log_img;
            v.cp_name = list.cp_name;
          });
        }

        emit("onChangeLecture", d.checkLecture[0]);
      },
    });
  } else {
    emit("onChangeLecture", null);
  }
};

//비교과학습 독서
const onChangeCheckBook = () => {
  d.bookRecomList = [];
  d.bookShow = false;

  if (d.checkBook.length === 1) {
    let list = d.bookList.filter((f) => isEqual(f.cp_id, d.checkBook[0]))[0];

    call({
      method: "post",
      id: "추천강좌 조회",
      endpoint: "/api/course_recommend/query",
      data: {
        sch_level: p.typeInfo.school,
        school_grd: p.typeInfo.grade,
        cp_id: d.checkBook[0],
        sex: login.joinInfo.sex,
        address1: login.basicInfo.addr,
      },
      onResponse({ data, status, message }) {
        console.log("data ", data);
        console.log("status ", status);
        console.log("message ", message);

        d.bookRecomList = data.courseRecommendationList;

        if (!isEmpty(d.bookRecomList)) {
          d.bookRecomList.forEach((v) => {
            v.logo_img = list.sub_log_img;
            v.cp_name = list.cp_name;
          });
        }

        emit("onChangeBook", d.checkBook[0]);
      },
    });
  } else {
    emit("onChangeBook", null);
  }
};
</script>

<template>
  <div class="account__site-select-item">
    <div class="c-form-group" v-if="!isEmpty(d.subjList)">
      <div class="c-form-label__wrap">
        <label class="c-form-label"
          >교과 학습사이트 신청<span class="c-essential">(필수)</span></label
        >
      </div>
      <div class="account__info">
        <div class="account__info-title">
          ※ 다양한 교과 학습사이트를 선택하여 주시기 바랍니다.
          <!-- <span class="c-text-primary"
            >※ 다양한 교과 학습사이트를 선택하여 주시기 바랍니다.</span
          > -->
        </div>
      </div>
      <template v-for="(list, idx) in d.subjList">
        <div
          class="c-form-radio"
          :class="{
            'c-form-radio--lg': isEqual(p.typeInfo.school, 'SCHLVL_P001'),
            'c-form-radio--md': !isEqual(p.typeInfo.school, 'SCHLVL_P001'),
          }"
        >
          <input
            type="radio"
            class="c-form-radio__input"
            :id="`subj${list.cp_id}`"
            :title="`${list.cp_name}`"
            :name="`${list.cp_id}`"
            :value="`${list.cp_id}`"
            v-model="d.subj"
            :disabled="!p.paramInfo.change"
            @change="onChangeSubj"
          />
          <label :for="`subj${list.cp_id}`" class="c-form-radio__label"></label>
          <div class="c-form-radio__contents">
            <img :src="`${list.non_actv_log_img}`" :alt="`${list.cp_name}`" />
            <div class="c-form-radio__contents-title">{{ list.cp_name }}</div>
            <template v-if="isEqual(p.typeInfo.school, 'SCHLVL_P001')">
              <dl>
                <dt>별도기기:</dt>
                <dd>
                  {{ isEqual(list.device_prvd_yn, "Y") ? "지원" : "미지원" }}
                </dd>
              </dl>
              <dl>
                <dt>학습관리교사:</dt>
                <dd>
                  {{ isEqual(list.mentoringYn, "Y") ? "지원" : "미지원" }}
                </dd>
              </dl>
            </template>
            <div class="c-form-radio__contents-link">
              <button
                style="z-index: 1"
                class="c-btn c-btn-text c-btn-text--line"
                @click="
                  goLink(
                    uIsMobileDevice() ? list.mob_conn_url : list.pc_conn_url
                  )
                "
              >
                둘러보기 &gt;
              </button>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div
      class="c-form-group"
      v-if="!isEmpty(d.subj) && !isEqual(p.typeInfo.school, 'SCHLVL_P001')"
    >
      <div class="c-form-label">과목 선택</div>
      <div class="c-form-check-group c-form-check-group--col3">
        <template v-for="(item, idx) in d.selList">
          <div class="c-form-check">
            <input
              class="c-btn-check"
              type="radio"
              name="subject"
              :id="`S${item.value}`"
              :title="`S${item.value}`"
              :value="`${item.text}`"
              v-model="d.subjSel"
              :disabled="!p.paramInfo.change"
              @change="onChangeSelect"
            />
            <label
              class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
              :for="`S${item.value}`"
              >{{ item.text }}</label
            >
          </div>
        </template>
      </div>
    </div>
    <div
      class="c-form-group c-form-group__swiper"
      v-if="!isEmpty(d.recomSelList)"
    >
      <div class="c-swiper__wrap">
        <div class="c-swiper">
          <div class="c-swiper__title">단짝님에게 꼭 맞는 강좌를 추천!</div>
          <swiperItem :dataList="d.recomSelList" />
        </div>
      </div>
    </div>
    <div
      class="c-form-group"
      v-if="!isEmpty(d.subjSel) && isEmpty(d.recomSelList)"
    >
      <div class="c-form-label">조회된 추천강좌가 없습니다.</div>
    </div>

    <div class="c-form-group">
      <label class="c-form-label"
        >비교과 학습사이트 신청
        <span class="c-text-primary">(선택)</span></label
      >
      <div class="account__info">
        <div class="account__info-title">
          ※ 비교과는 자격증 등 진로취업을 위한 강의입니다.
        </div>
      </div>
      <div class="c-form-group">
        <label class="c-form-label c-form-label--sm"> 전문강좌 </label>
        <template v-for="(list, idx) in d.lectureList">
          <div class="c-form-check c-form-check--site">
            <input
              v-model="d.checkLecture"
              type="checkbox"
              class="c-form-check-input"
              ref="lecturCheck"
              :id="`nosubj${list.cp_id}`"
              :title="`${list.cp_name}`"
              :value="`${list.cp_id}`"
              :disabled="!p.paramInfo.change"
              @change="onChangeCheckLecture(`${list.cp_id}`)"
            />
            <label :for="`nosubj${list.cp_id}`" class="c-form-checkbox-label">
            </label>
            <div class="c-form-checkbox__contents">
              <img
                :src="`${list.non_actv_log_img}`"
                :alt="`${list.cp_name}로고`"
              />
              <div class="c-form-checkbox__contents-title">
                {{ list.cp_name }}
              </div>
              <div class="c-form-checkbox__contents-link">
                <button
                  style="z-index: 1"
                  class="c-btn c-btn-text c-btn-text--line"
                  @click="
                    goLink(
                      uIsMobileDevice() ? list.mob_conn_url : list.pc_conn_url
                    )
                  "
                >
                  둘러보기 &gt;
                </button>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div
        class="account__btn-recommend-wrap"
        v-if="!isEmpty(d.lecRecomList) && !d.lectureShow"
      >
        <button
          class="c-btn c-btn-radius c-btn-sm"
          @click="d.lectureShow = true"
        >
          강좌 추천 받기
        </button>
      </div>
      <div class="c-form-group c-form-group__swiper" v-if="d.lectureShow">
        <div class="c-swiper__wrap">
          <div class="c-swiper">
            <div class="c-swiper__title">단짝님에게 꼭 맞는 강좌를 추천!</div>
            <swiperItem :dataList="d.lecRecomList" />
          </div>
        </div>
      </div>
      <div class="c-form-group">
        <label class="c-form-label c-form-label--sm"> 독서 </label>
        <template v-for="(list, idx) in d.bookList">
          <div class="c-form-check c-form-check--site">
            <input
              v-model="d.checkBook"
              type="checkbox"
              class="c-form-check-input"
              :id="`${list.cp_id}`"
              :title="`${list.cp_name}`"
              :value="`${list.cp_id}`"
              :disabled="!p.paramInfo.change"
              @change="onChangeCheckBook"
            />
            <label :for="`${list.cp_id}`" class="c-form-checkbox-label">
            </label>
            <div class="c-form-checkbox__contents">
              <img
                :src="`${list.non_actv_log_img}`"
                :alt="`${list.cp_name}로고`"
              />
              <div class="c-form-checkbox__contents-title">
                {{ list.cp_name }}
              </div>
              <div class="c-form-checkbox__contents-link">
                <button
                  style="z-index: 1"
                  class="c-btn c-btn-text c-btn-text--line"
                  @click="
                    goLink(
                      uIsMobileDevice() ? list.mob_conn_url : list.pc_conn_url
                    )
                  "
                >
                  둘러보기 &gt;
                </button>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div
        class="account__btn-recommend-wrap"
        v-if="!isEmpty(d.bookRecomList) && d.bookShow === false"
      >
        <button class="c-btn c-btn-radius c-btn-sm" @click="d.bookShow = true">
          강좌 추천 받기
        </button>
      </div>
      <div class="c-form-group c-form-group__swiper" v-if="d.bookShow">
        <div class="c-swiper__wrap">
          <div class="c-swiper">
            <div class="c-swiper__title">단짝님에게 꼭 맞는 강좌를 추천!</div>
            <swiperItem :dataList="d.bookRecomList" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
  &__info {
    margin: 0 0 1.6rem;
    span {
      font-weight: 700;
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
