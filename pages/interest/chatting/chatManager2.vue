<script setup>
import swiperItem from "./swiperItem";
import { call } from "@/api";

definePageMeta({
  layout: "interest",
});

const emit = defineEmits(["getResult", "setPrefer", "getPreferData"]);

const p = defineProps({
  isNext01: { type: Boolean, default: false },
  isNext02: { type: Boolean, default: false },
  preferValue: { type: String, default: "" },
  searchText: { type: String, default: "" },
  preferList: { type: Array, default: [] },
});

const d = reactive({
  resultList: [],
  resultText1: "",
  resultText2: "",
  recomList: [],
  recomArrList: [],
});

onMounted(() => {
  let list = p.preferList.slice(0, 2);

  d.resultText1 = list.map((m) => m.preferTitle)[0];
  d.resultText2 = list.map((m) => m.preferTitle)[1];

  d.resultList = p.preferList;

  setTimeout(() => {
    getRecommend({
      parentCateCode: list.map((m) => m.preferCode)[0],
      parentCateCode: list.map((m) => m.preferCode)[1],
    });
  }, 2000);
});

watch(
  () => p.isNext01,
  (newVal) => {
    if (newVal === true) {
      d.recomList.push(d.recomArrList[1]);
    }
  }
);

watch(
  () => p.isNext02,
  (newVal) => {
    if (newVal === true) {
      d.recomList.push(d.recomArrList[2]);
    }
  }
);

const getRecommend = async (param) => {
  await call({
    method: "get",
    id: "선호도별 추천",
    endpoint: "/api/sq/recommend/course/parentcate",
    data: param,
    onResponse({ data, status, message }) {
      d.recomList = [];

      d.recomArrList = makeList(data);

      d.recomList.push(d.recomArrList[0]);

      getResult(d.recomArrList.length);
    },
  });
};
const makeList = (data) => {
  let list = [];

  for (let i = 0; i < data.length; i += 8) {
    list.push(data.slice(i, i + 8));
  }

  return list;
};

const getResult = (val) => {
  console.log("getResult ", val);
  d.isShow = val > 0 ? true : false;
  emit("getResult", d.isShow);
};
</script>
<template>
  <!--선호도별 추천 -->
  <div class="interest__chatting-item c-flex manager">
    <div class="interest__chatting-profile">
      <img src="@img/@temp/1.jpg" alt="AI 프로필" />
    </div>
    <div class="interest__chatting-message">
      <ul>
        <li>
          <div class="c-message c-message--manager">
            <div class="c-message--cont">
              <p>
                관심사는[{{ d.resultText1 }}]과 [{{ d.resultText2 }}]입니다.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div class="c-message c-message--manager">
            <div class="c-message--cont">
              <p>
                분야별 선택 횟수 통계 :
                <template v-for="(list, idx) in d.resultList"
                  >{{ list.preferTitle }} {{ list.count }}
                  <template v-if="idx != d.resultList.length - 1"
                    >,</template
                  ></template
                >
              </p>
            </div>
          </div>
        </li>
        <li>
          <div class="c-message c-message--manager">
            <div class="c-message--cont">
              <p>
                해당 관심사에 콘텐츠를 추천 중입니다. <br />
                잠시만 기다려 주세요.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="interest__chatting-slide">
    <template v-for="(list, idx) in d.recomList">
      <div class="c-slide-box">
        <swiperItem :dataList="list" />
      </div>
    </template>
    <dl class="c-form-group--like" v-show="d.isShow">
      <dt>추천 결과가 마음에 드시나요?</dt>
      <dd class="c-form-group">
        <label for="name" class="c-form-label"> 추천결과응답 </label>
        <div class="c-form-check">
          <input
            class="c-form-radio-input"
            type="radio"
            name="like"
            id="likeYes"
            title="likeYes"
            value="Yes"
          />
          <label class="c-btn c-btn-sm c-btn-sm--round" for="likeYes">예</label>
        </div>
        <div class="c-form-check">
          <input
            class="c-form-radio-input"
            type="radio"
            name="like"
            id="likeNo"
            title="likeNo"
            value="No"
            checked
          />
          <label class="c-btn c-btn-sm c-btn-sm--round" for="likeNo"
            >아니요</label
          >
        </div>
      </dd>
    </dl>
  </div>
  <!--선호도별 추천 -->
</template>
