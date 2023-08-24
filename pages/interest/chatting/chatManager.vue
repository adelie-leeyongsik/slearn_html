<script setup>
import modalPopup from "../interestModal";
import swiperItem from "./swiperItem";
import swiperItem2 from "./swiperItem2";
import Result from "./recommResult";
import { call } from "@/api";

definePageMeta({
  layout: "interest",
});

const scrollContainer = ref();
const chatSlide = ref();
const emit = defineEmits(["getResult", "setPrefer", "getPreferData"]);

const p = defineProps({
  isNext01: { type: Boolean, default: false },
  isNext02: { type: Boolean, default: false },
  preferValue: { type: String, default: "" },
  searchText: { type: String, default: "" },
  preferList: { type: Array, default: [] },
});

const r = useRoute();

const d = reactive({
  type: r.query.type,
  userId: uGetLoginInfo("userid"),
  recomArrList: [],
  recomList: [],
  grade: "",
  sex: "",
  prefer: "",
  isShow: false,
  schOrder: "hit",
  isShowCate: false,
  bigCate: "",
  bigCateTxt: "",
  bigCateList: [],
  midCate: "",
  midCateTxt: "",
  midCateList: [],
  isShowTxt: false,
  contents: "",
  locationList: [],
  location: "",
  isPopup: false,
  preferList: [],
  preferInfo: null,
  preferText1: "",
  preferText2: "",
  recomm: "",
  isCP: false,
  step01: false,
  step02: false,
});

onMounted(() => {
  setTimeout(() => {
    d.step01 = true;
  }, 1000);

  if (isEqual(d.type, "02") && !isEmpty(d.userId)) {
    getPreferInfo();
  } else if (isEqual(d.type, "08")) {
    getCategory();
  } else if (
    isEqual(d.type, "10") ||
    isEqual(d.type, "13") ||
    isEqual(d.type, "14")
  ) {
    getRecommend({});
  } else if (isEqual(d.type, "11")) {
    getLocation();
  }
});

watch(
  () => p.searchText,
  (newText) => {
    if (!isEmpty(newText)) {
      getRecommend({ search: newText, order: d.schOrder });
    }
  }
);

watch(
  () => p.isNext01,
  (newVal) => {
    if (newVal === true) {
      d.recomList.push(d.recomArrList[1]);

      scrollToBottom(1);
    }
  }
);

watch(
  () => p.isNext02,
  (newVal) => {
    if (newVal === true) {
      d.recomList.push(d.recomArrList[2]);

      scrollToBottom(2);
    }
  }
);

const scrollToBottom = (val) => {
  if (isEqual(val, 1)) {
    setTimeout(() => {
      chatSlide.value.scrollTo({
        top: chatSlide.value.scrollHeight + 500,
      });
      chatSlide.value.scrollIntoView({ behavior: "smooth" });
    }, 1500);
  } else if (isEqual(val, 2)) {
    setTimeout(() => {
      window.scrollTo({
        top: chatSlide.value.scrollHeight + 500,
      });
    }, 1500);
  } else {
    setTimeout(() => {
      scrollContainer.value.scrollTo({
        top: scrollContainer.value.scrollHeight,
      });
      scrollContainer.value.scrollIntoView({ behavior: "smooth" });
    }, 1500);
  }
};

const getRecommend = async (param) => {
  d.next01 = false;
  d.next02 = false;
  d.isCP = false;
  let id = "세대별 추천";
  let url = "/api/sq/recommend/course/gen";

  if (isEqual(d.type, "02")) {
    id = "선호도별 추천 (회원)";
    url = "/api/sq/recommend/course/parentcate";
  } else if (isEqual(d.type, "07")) {
    id = "직접 검색";
    url = "/api/sq/recommend/course/search";
  } else if (isEqual(d.type, "08")) {
    id = "선택 검색";
    url = "/api/sq/recommend/course/cate";
  } else if (isEqual(d.type, "09")) {
    id = "통계 검색";
    url = "/api/sq/recommend/course/stat";
  } else if (isEqual(d.type, "10")) {
    id = "인기 검색";
    url = "/api/sq/recommend/course/top";
  } else if (isEqual(d.type, "11")) {
    id = "공연 검색";
    url = "/api/sq/recommend/course/culture";
  } else if (isEqual(d.type, "13")) {
    id = "교과 추천";
    url = "/api/sq/recommend/cp/subj ";
    d.isCP = true;
  } else if (isEqual(d.type, "14")) {
    id = "비교과 추천";
    url = " /api/sq/recommend/cp/nonsubj";
    d.isCP = true;
  }

  await call({
    method: "get",
    id: id,
    endpoint: url,
    data: param,
    onResponse({ data, status, message }) {
      d.recomList = [];
      d.isShowTxt = true;
      d.isShow = true;
      console.log("data ", data);
      console.log("status ", status);
      console.log("message ", message);

      if (d.type !== "13" && d.type !== "14")
        data.forEach((f) => {
          f.sex = d.sex;
          f.grade = d.grade;
        });

      d.recomArrList = makeList(data);

      d.recomList.push(d.recomArrList[0]);

      getResult(d.recomArrList.length);

      scrollToBottom();
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

const onClickGrade = (val) => {
  d.grade = val;
  d.step02 = false;
  d.sex = "";
  d.recomList = [];
  d.isShow = false;

  setTimeout(() => {
    d.step02 = true;
  }, 1000);

  scrollToBottom();
};

const onClickSex = (val) => {
  d.sex = val;
  getRecommend({ sex: d.sex, generation: d.grade });
};

const txtCombi = () => {
  let age = {
    elementry: "초등",
    middle: "중등",
    high: "고등",
    twenty: "20대",
    thirty: "30대",
    forty: "40대",
    fifty: "50대",
  };

  let sex = {
    W: "여성",
    M: "남성",
  };

  if (isEmpty(d.userId)) {
    return age[d.grade] + " " + sex[d.sex];
  } else {
    let age = uGetLoginInfo("age");
    let gen = age.substring(0, 1);
    let ageTxt = "";

    if (age < 14) {
      ageTxt = "초등";
      d.grade = "elementry";
    } else if (age < 17) {
      ageTxt = "중등";
      d.grade = "middle";
    } else if (age < 20) {
      ageTxt = "고등";
      d.grade = "high";
    } else if (isEqual(gen, "2")) {
      ageTxt = "20대";
      d.grade = "twenty";
    } else if (isEqual(gen, "3")) {
      ageTxt = "30대";
      d.grade = "thirty";
    } else if (isEqual(gen, "4")) {
      ageTxt = "40대";
      d.grade = "forty";
    } else if (isEqual(gen, "5")) {
      ageTxt = "50대";
      d.grade = "fifty";
    }

    d.sex = uGetLoginInfo("sex");

    if (isEmpty(d.recomArrList)) {
      getRecommend({ sex: d.sex, generation: d.grade });
    }

    return ageTxt + " " + sex[d.sex];
  }
};

const getPreferInfo = () => {
  console.log("getPreferInfo");
  call({
    id: "내 관심사 조회",
    endpoint: "/api/sq/my/prefer",
    onResponse({ data, status, message }) {
      d.preferInfo = data;

      d.preferText1 = data
        .filter((f) => f.preferCode === "PREFER_P01")
        .map((m) => m.stdClsTxt)[0];
      d.preferText2 = data
        .filter((f) => f.preferCode === "PREFER_P01")
        .map((m) => m.stdClsTxt)[1];

      console.log("data ", data);
      console.log("status ", status);
      console.log("message ", message);
    },
  });
};

const onClickPrefer = (val) => {
  d.prefer = val;
  setTimeout(() => {
    d.isPopup = true;
  }, 1000);
  emit("setPrefer", val);
};

const confirmPop = (value) => {
  console.log(" confirmPop  ", value);
  d.isPopup = false;
  if (!isEmpty(value)) {
    if (!isEmpty(d.userId)) {
      let list = value.splice(0, 2);

      call({
        method: "post",
        id: "내 관심사 조회",
        endpoint: "/api/sq/my/prefer",
        data: {
          preferList: list.map((m) => m.preferCode),
        },
        onResponse({ data, status, message }) {
          console.log("data ", data);
          console.log("status ", status);
          console.log("message ", message);
        },
      });
    }
    d.preferList = value;
    emit("getPreferData", value);
  }
};

const onClickRecomm = (val) => {
  d.recomm = val;
  getRecommend({
    parentCateCode: d.preferInfo
      .filter((f) => f.preferCode === "PREFER_P01")
      .map((m) => m.stdClsCode)[0],
    parentCateCode: d.preferInfo
      .filter((f) => f.preferCode === "PREFER_P01")
      .map((m) => m.stdClsCode)[1],
  });
};

const getResult = (val) => {
  console.log("getResult ", val);
  d.isShow = val > 0 ? true : false;
  emit("getResult", d.isShow);
};

const getCategory = async () => {
  await call({
    method: "get",
    id: "관심추천 대분류검색",
    endpoint: "/api/sq/prefer/list",
    data: {
      preferCode: "PREFER_P01",
    },
    onResponse({ data, status, message }) {
      d.isShowCate = true;

      data.forEach((f) => {
        f.text = f.stdClsTxt;
        f.value = f.stdClsCode;
      });

      d.bigCateList = data;
      d.bigCateList.unshift({ text: "대분류 선택해 주세요.", value: "" });
      d.midCateList.unshift({ text: "중분류 선택해 주세요.", value: "" });
    },
  });
};

const onChangeBigCate = async (val) => {
  d.isShowTxt = false;
  d.bigCate = val;
  d.midCate = "";
  d.bigCateTxt = d.bigCateList.filter((v) => v.value === val)[0].text;
  await call({
    method: "get",
    id: "관심추천 중분류검색",
    endpoint: "/api/sq/course/category",
    data: {
      parentCateCode: val,
    },
    onResponse({ data, status, message }) {
      console.log("data ", data);
      console.log("status ", status);
      console.log("message ", message);

      data.forEach((f) => {
        f.text = f.courseCateName;
        f.value = f.courseCateCode;
      });

      d.midCateList = data;
      d.midCateList.unshift({ text: "중분류 선택해 주세요.", value: "" });
    },
  });
};

const onChangeMidCate = async (val) => {
  d.isShowTxt = false;
  d.midCate = val;
  d.midCateTxt = d.midCateList.filter((v) => v.value === val)[0].text;
};

const onClickConfirm = () => {
  if (isEmpty(d.midCate)) return;
  getRecommend({ parentCateCode: d.bigCate, cateCode: d.midCate });
};

const onClickContents = (val) => {
  d.contents = val;
  getRecommend({ lectureType: d.contents });
};

const getLocation = async () => {
  await call({
    method: "get",
    id: "공연 추천 검색",
    endpoint: "/api/sq/common/code",
    data: {
      cateId: "MENTOR_DIST",
    },
    onResponse({ data, status, message }) {
      console.log("getLocation data ", data.rows);
      d.locationList = data.rows;

      d.locationList.unshift({ codeName: "전체", codeId: "ALL" });
      d.locationList.push({ codeName: "서울외", codeId: "ETC" });
    },
  });
};

const onClickLocation = (val) => {
  d.location = val;
  getRecommend({ location: d.location });
};

const goKakao = () => {
  window.open("http://pf.kakao.com/_GAIxjb", "_blank");
};

const goYoutube = () => {
  window.open("https://www.youtube.com/@slearn_official", "_blank");
};

const goSupport = () => {
  window.open("https://988.co.kr/", "_blank");
};
</script>
<template>
  <modalPopup :isShow="d.isPopup" @confirm="confirmPop" v-if="d.isPopup" />
  <div ref="scrollContainer">
    <!--세대별 추천 -->
    <template v-if="isEqual(d.type, '01')">
      <div class="interest__chatting-item c-flex manager">
        <div class="interest__chatting-profile">
          <img src="@img/@temp/1.jpg" alt="AI 프로필" />
        </div>
        <div class="interest__chatting-message" v-if="isEmpty(d.userId)">
          <ul>
            <li>
              <div class="c-message c-message--manager">
                <div class="c-message--cont">
                  <p>
                    안녕하세요 서울런 입니다.<br />
                    관심사에 맞는 컨텐츠를 추천해 드릴께요.
                  </p>
                </div>
              </div>
            </li>
            <li v-if="d.step01">
              <div class="c-message c-message--manager">
                <div class="c-message--cont">
                  <p>먼저 연령대를 선택해주세요.</p>
                </div>
              </div>
            </li>
            <li v-if="d.step01">
              <div class="c-message c-message--manager">
                <div class="c-message--cont">
                  <div class="interest-item__chips">
                    <button
                      class="c-chips--sm"
                      :class="{ active: isEqual(d.grade, 'elementry') }"
                      @click="onClickGrade('elementry')"
                    >
                      # 초등
                    </button>
                    <button
                      class="c-chips--sm"
                      :class="{ active: isEqual(d.grade, 'middle') }"
                      @click="onClickGrade('middle')"
                    >
                      # 중등
                    </button>
                    <button
                      class="c-chips--sm"
                      :class="{ active: isEqual(d.grade, 'high') }"
                      @click="onClickGrade('high')"
                    >
                      # 고등
                    </button>
                    <br class="c-pc" />
                    <button
                      class="c-chips--sm"
                      :class="{ active: isEqual(d.grade, 'twenty') }"
                      @click="onClickGrade('twenty')"
                    >
                      # 20대
                    </button>
                    <button
                      class="c-chips--sm"
                      :class="{ active: isEqual(d.grade, 'thirty') }"
                      @click="onClickGrade('thirty')"
                    >
                      # 30대
                    </button>
                    <button
                      class="c-chips--sm"
                      :class="{ active: isEqual(d.grade, 'forty') }"
                      @click="onClickGrade('forty')"
                    >
                      # 40대
                    </button>
                    <button
                      class="c-chips--sm"
                      :class="{ active: isEqual(d.grade, 'fifty') }"
                      @click="onClickGrade('fifty')"
                    >
                      # 50대
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <template v-if="!isEmpty(d.grade)">
              <li v-if="d.step02">
                <div class="c-message c-message--manager">
                  <div class="c-message--cont">
                    <p>성별을 선택해 주세요.</p>
                  </div>
                </div>
              </li>
              <li v-if="d.step02">
                <div class="c-message c-message--manager">
                  <div class="c-message--cont">
                    <div class="interest-item__chips">
                      <button
                        class="c-chips--sm"
                        :class="{ active: isEqual(d.sex, 'W') }"
                        @click="onClickSex('W')"
                      >
                        # 여성
                      </button>
                      <button
                        class="c-chips--sm"
                        :class="{ active: isEqual(d.sex, 'M') }"
                        @click="onClickSex('M')"
                      >
                        # 남성
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </template>
            <template v-if="!isEmpty(d.grade) && !isEmpty(d.sex)">
              <li>
                <div class="c-message c-message--manager">
                  <div class="c-message--cont">
                    <p>{{ txtCombi() }}이 가장 좋아하는 강좌를 추천 드려요</p>
                  </div>
                </div>
              </li>
            </template>
          </ul>
        </div>
        <div class="interest__chatting-message" v-else>
          <ul>
            <li>
              <div class="c-message c-message--manager">
                <div class="c-message--cont">
                  <p>
                    안녕하세요~ 또래 세대가 좋아하는<br />
                    관심 콘텐츠를 추천해 드릴께요
                  </p>
                </div>
              </div>
            </li>
            <li v-if="d.step01">
              <div class="c-message c-message--manager">
                <div class="c-message--cont">
                  <p>{{ txtCombi() }}이 가장 좋아하는 강좌를 추천 드려요</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="interest__chatting-slide" ref="chatSlide">
        <template v-for="(list, idx) in d.recomList">
          <div class="c-slide-box">
            <swiperItem :dataList="list" />
          </div>
        </template>
        <Result :isShow="d.isShow" />
      </div>
    </template>
    <!--세대별 추천 -->
    <!--선호도별 추천 -->
    <template v-if="isEqual(d.type, '02')">
      <div
        class="interest__chatting-item c-flex manager"
        v-if="isEmpty(d.preferInfo)"
      >
        <div class="interest__chatting-profile">
          <img src="@img/@temp/1.jpg" alt="AI 프로필" />
        </div>
        <div class="interest__chatting-message">
          <ul>
            <li>
              <div class="c-message c-message--manager">
                <div class="c-message--cont">
                  <p>먼저 관심 분야를 선택해 볼까요?</p>
                </div>
              </div>
            </li>
            <li>
              <div class="c-message c-message--manager">
                <div class="c-message--cont">
                  <p>
                    선호 분야를 찾기 위해 두가지 방식 중 하나를 선택해 주세요
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="c-message c-message--manager">
                <div class="c-message--cont">
                  <div class="c-form-group c-flex">
                    <button
                      class="c-chips--sm"
                      :class="{ active: isEqual(d.prefer, 'img') }"
                      @click="onClickPrefer('img')"
                    >
                      # 이미지로 찾기
                    </button>
                    <button
                      class="c-chips--sm"
                      :class="{ active: isEqual(d.prefer, 'cate') }"
                      @click="onClickPrefer('cate')"
                    >
                      # 카테고리 선택하기
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="interest__chatting-item c-flex manager" v-else>
        <div class="interest__chatting-profile">
          <img src="@img/@temp/1.jpg" alt="AI 프로필" />
        </div>
        <div class="interest__chatting-message">
          <ul>
            <li>
              <div class="c-message c-message--manager">
                <div class="c-message--cont">
                  <p>안녕하세요~ 선호도에 따라 추천을 드릴께요</p>
                </div>
              </div>
            </li>
            <li>
              <div class="c-message c-message--manager">
                <div class="c-message--cont">
                  <p>
                    현재 관심있으신 분야는 [{{ d.preferText1 }}]과[{{
                      d.preferText2
                    }}]입니다.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="c-message c-message--manager">
                <div class="c-message--cont">
                  <p>관심 분야로 추천 드릴까요?</p>
                </div>
              </div>
            </li>
            <li>
              <div class="c-message c-message--manager">
                <div class="c-message--cont">
                  <div class="c-form-group c-flex">
                    <button
                      class="c-chips--sm"
                      :class="{ active: isEqual(d.recomm, 'recomm') }"
                      @click="onClickRecomm('recomm')"
                    >
                      # 추천 받기
                    </button>
                    <button
                      class="c-chips--sm"
                      :class="{ active: isEqual(d.recomm, 'other') }"
                      @click="onClickRecomm('other')"
                    >
                      # 다른 관심사 선택
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="interest__chatting-item c-flex manager"
        v-if="isEqual(d.recomm, 'other')"
      >
        <div class="interest__chatting-profile">
          <img src="@img/@temp/1.jpg" alt="AI 프로필" />
        </div>
        <div class="interest__chatting-message">
          <ul>
            <li>
              <div class="c-message c-message--manager">
                <div class="c-message--cont">
                  <p>먼저 관심 분야를 선택해 볼까요?</p>
                </div>
              </div>
            </li>
            <li>
              <div class="c-message c-message--manager">
                <div class="c-message--cont">
                  <p>
                    선호 분야를 찾기 위해 두가지 방식 중 하나를 선택해 주세요
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="c-message c-message--manager">
                <div class="c-message--cont">
                  <div class="c-form-group c-flex">
                    <button
                      class="c-chips--sm"
                      :class="{ active: isEqual(d.prefer, 'img') }"
                      @click="onClickPrefer('img')"
                    >
                      # 이미지로 찾기
                    </button>
                    <button
                      class="c-chips--sm"
                      :class="{ active: isEqual(d.prefer, 'cate') }"
                      @click="onClickPrefer('cate')"
                    >
                      # 카테고리 선택하기
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="interest__chatting-item c-flex user"
        v-if="isEqual(d.recomm, 'recomm')"
      >
        <div class="interest__chatting-message">
          <div class="c-message c-message--user">
            <div class="c-message--cont">
              <p>응 내 관심 분야가 맞아 추천해줘</p>
            </div>
          </div>
        </div>
        <div class="interest__chatting-profile">
          <img src="@img/@temp/2.jpg" alt="관심분야 추천 프로필 이미지" />
        </div>
      </div>
      <div class="interest__chatting-slide" v-if="isEqual(d.recomm, 'recomm')">
        <template v-for="(list, idx) in d.recomList">
          <div class="c-slide-box">
            <swiperItem :dataList="list" />
          </div>
        </template>
        <Result :isShow="d.isShow" />
      </div>
    </template>
    <!--선호도별 추천 -->
    <!--직접 검색 -->
    <template v-if="isEqual(d.type, '07')">
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
                    안녕하세요~ 직접 찾을 수 있도록 하단 검색바를 변경해
                    드렸습니다.<br />
                    서울런 콘텐츠를 검색해 보세요
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
        <Result :isShow="d.isShow" />
      </div>
    </template>
    <!--직접 검색 -->
    <!--선택 검색 -->
    <template v-if="isEqual(d.type, '08')">
      <div class="interest__chatting-item c-flex manager">
        <div class="interest__chatting-profile">
          <img src="@img/@temp/1.jpg" alt="AI 프로필" />
        </div>
        <div class="interest__chatting-message">
          <ul>
            <li>
              <div class="c-message c-message--manager">
                <div class="c-message--cont">
                  <p>콘텐츠 분류 목록을 불러오고 있습니다</p>
                </div>
              </div>
            </li>
            <li v-if="!d.isShowCate">
              <div class="c-message c-message--manager">
                <div class="c-message--cont">
                  <p>
                    <span class="c-loading">
                      <i class="ico ico-dot">로딩 이미지</i>
                      <i class="ico ico-dot">로딩 이미지</i>
                      <i class="ico ico-dot">로딩 이미지</i>
                    </span>
                  </p>
                </div>
              </div>
            </li>
            <li v-if="d.isShowCate">
              <div class="c-message c-message--manager">
                <div class="c-message--cont">
                  <div class="c-form-group c-flex">
                    <Select
                      v-model="d.bigCate"
                      :options="d.bigCateList"
                      @update:modelValue="onChangeBigCate"
                      title="콘텐츠 목록 대분류"
                    ></Select>
                    <Select
                      v-model="d.midCate"
                      :options="d.midCateList"
                      @update:modelValue="onChangeMidCate"
                      title="콘텐츠 목록 중분류"
                    ></Select>
                    <button class="c-btn c-btn-primary" @click="onClickConfirm">
                      선택완료
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <template v-if="d.isShow && d.isShowTxt">
              <li>
                <div class="c-message c-message--manager">
                  <div class="c-message--cont c-text-center">
                    <p>
                      [{{ d.bigCateTxt }}] 와 [{{ d.midCateTxt }}] 를 선택
                      하셨습니다.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="c-message c-message--manager">
                  <div class="c-message--cont c-text-center">
                    <p>
                      해당 관심사에 따라 콘텐츠를 추천 중입니다. 잠시만 기다려
                      주세요.
                    </p>
                  </div>
                </div>
              </li>
            </template>
            <template v-if="!d.isShow && d.isShowTxt">
              <li>
                <div class="c-message c-message--manager">
                  <div class="c-message--cont">
                    <p>아쉽게도 해당 하는 컨텐츠가 없습니다.</p>
                  </div>
                </div>
              </li>
            </template>
          </ul>
        </div>
      </div>
      <div class="interest__chatting-slide" v-if="d.isShow && d.isShowTxt">
        <template v-for="(list, idx) in d.recomList">
          <div class="c-slide-box">
            <swiperItem :dataList="list" />
          </div>
        </template>
        <Result :isShow="d.isShow" />
      </div>
    </template>
    <!--선택 검색 -->
    <!--통계 검색 -->
    <template v-if="isEqual(d.type, '09')">
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
                    안녕하세요 가장 인기 있는 콘텐츠 분류별로 나누고 있습니다.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="c-message c-message--manager">
                <div class="c-message--cont">
                  <div class="interest-item__chips">
                    <button
                      class="c-chips--sm"
                      :class="{ active: isEqual(d.contents, 'ON') }"
                      @click="onClickContents('ON')"
                    >
                      # 바로보는 콘텐츠
                    </button>
                    <button
                      class="c-chips--sm"
                      :class="{ active: isEqual(d.contents, 'OF') }"
                      @click="onClickContents('OF')"
                    >
                      # 문화 공연 콘텐츠
                    </button>
                    <button
                      class="c-chips--sm"
                      :class="{ active: isEqual(d.contents, 'PO') }"
                      @click="onClickContents('PO')"
                    >
                      # 도움이 되는 콘텐츠
                    </button>
                  </div>
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
        <Result :isShow="d.isShow" />
      </div>
    </template>
    <!--통계 검색 -->
    <!--인기강좌 -->
    <template v-if="isEqual(d.type, '10')">
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
                    안녕하세요 서울런 입니다~ <br />
                    인기강좌를 소개 시켜 드리겠습니다.
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
        <Result :isShow="d.isShow" />
      </div>
    </template>
    <!--인기강좌 -->
    <!--공연보여줘 -->
    <template v-if="isEqual(d.type, '11')">
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
                    안녕하세요 서울런 입니다 <br />
                    관심이 높은 공연을 소개 시켜 드리겠습니다.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="c-message c-message--manager">
                <div class="c-message--cont">
                  <p>먼저 지역을 선택해 주세요</p>
                </div>
              </div>
            </li>
            <li>
              <div class="c-message c-message--manager">
                <div class="c-message--cont">
                  <div class="interest-item__chips">
                    <template v-for="(data, idx) in d.locationList">
                      <button
                        class="c-chips--sm"
                        :class="{ active: isEqual(d.location, data.codeId) }"
                        @click="onClickLocation(data.codeId)"
                      >
                        # {{ data.codeName }}
                      </button>
                    </template>
                  </div>
                </div>
              </div>
            </li>
            <template v-if="!d.isShow && !isEmpty(d.location)">
              <li>
                <div class="c-message c-message--manager">
                  <div class="c-message--cont">
                    <p>아쉽게도 검색하신 지역에 해당 하는 컨텐츠가 없습니다.</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="c-message c-message--manager">
                  <div class="c-message--cont c-text-center">
                    <p>다시 원하는 지역으로 검색할 수 있습니다.</p>
                    <!-- <div class="c-btn-group">
                    <button class="c-btn c-btn-sm c-btn-primary">
                      지역 선택 하기
                    </button>
                  </div> -->
                  </div>
                </div>
              </li>
            </template>
          </ul>
        </div>
      </div>
      <div class="interest__chatting-slide">
        <template v-for="(list, idx) in d.recomList">
          <div class="c-slide-box">
            <swiperItem :dataList="list" />
          </div>
        </template>
        <Result :isShow="d.isShow" />
      </div>
    </template>
    <!--공연보여줘 -->
    <!--고객센터문의 -->
    <template v-if="isEqual(d.type, '12')">
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
                    궁금하신 내용은 언제든지<br />
                    고객센터를 이용해 주세요
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="c-message c-message--manager">
                <div class="c-message--cont">
                  <p>서울런 고객 센터 안내</p>
                </div>
              </div>
            </li>
            <li>
              <div class="c-message c-message--manager">
                <div class="c-message--cont c-text-left">
                  <p>고객센터 전화 문의 가능해요!</p>
                  <div class="c-text-title-lg">1533-0909</div>
                  <p>
                    <span>평 일 10:00 ~ 21:00</span>
                    <span>(공휴일, 주말 제외, 점심시간 12:00 ~ 13:00)</span>
                  </p>
                  <div class="c-message--foot">
                    <a
                      href="javascript:void(0)"
                      @click="goKakao"
                      title="새창 열림"
                    >
                      <img src="@img/ic-kakao-talk.png" alt="카카오톡 로고" />
                    </a>
                    <a
                      href="javascript:void(0)"
                      @click="goYoutube"
                      title="새창 열림"
                    >
                      <img src="@img/ic-youtube.png" alt="유투브 로고" />
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="c-message c-message--manager">
                <div class="c-message--cont c-text-center">
                  <p>시스템 사용이 어려울 때</p>
                  <div class="c-btn-group">
                    <button
                      class="c-btn c-btn-sm c-btn-primary"
                      @click="goSupport"
                      title="새창 열림"
                    >
                      원격지원 신청
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </template>
    <!--고객센터문의 -->
    <!-- {교과}강의 -->
    <template v-if="isEqual(d.type, '13')">
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
                    현재 학습중인 과목의 강좌를<br />
                    추천해 드립니다.
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
            <swiperItem2 :dataList="list" />
          </div>
        </template>
        <Result :isShow="d.isShow" />
      </div>
      <div class="interest__chatting-item c-flex manager" v-if="!d.isShow">
        <div class="interest__chatting-profile">
          <img src="@img/@temp/1.jpg" alt="AI 프로필" />
        </div>
        <div class="interest__chatting-message">
          <ul>
            <li>
              <div class="c-message c-message--manager">
                <div class="c-message--cont">
                  <p>조회된 강의가 없습니다.</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </template>
    <!-- {교과}강의 -->
    <!-- 전문 강좌 -->
    <template v-if="isEqual(d.type, '14')">
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
                    현재 학습중인 전문 강좌 과목의<br />
                    강좌를 추천해 드립니다.
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
            <swiperItem2 :dataList="list" />
          </div>
        </template>
        <Result :isShow="d.isShow" />
      </div>
      <div class="interest__chatting-item c-flex manager" v-if="!d.isShow">
        <div class="interest__chatting-profile">
          <img src="@img/@temp/1.jpg" alt="AI 프로필" />
        </div>
        <div class="interest__chatting-message">
          <ul>
            <li>
              <div class="c-message c-message--manager">
                <div class="c-message--cont">
                  <p>조회된 강의가 없습니다.</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </template>
    <!-- 전문 강좌 -->
  </div>
</template>
