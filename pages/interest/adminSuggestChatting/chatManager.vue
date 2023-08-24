<script setup>
import swiperItem from "./swiperItem";
import { call } from "@/api";

const emit = defineEmits(["rtnListSize"]);

definePageMeta({
  layout: "interest",
});

const p = defineProps({
  isNext01: { type: Boolean, default: false },
  isNext02: { type: Boolean, default: false },
});

const r = useRoute();

const d = reactive({
  type: r.query.type,
  userId: uGetLoginInfo("userid"),
  gender: "", // 성별(남,녀)
  generation: "high", // 연령대 디폴트 high(고등학생)
  isShow: false,
  tagList: [],
  preferCateCode: "",
  preferTagCode: "",
  rqType: "",
  suggestResultView: false, // 마지막 추천 결과 view 여부
  genderView: false, // 남녀 선택 view 여부
  recomArrList: [],
  recomList: [],
});

// undefined  onBeforeMount() => {
onMounted(() => {
  // 관리자 추천 태그 조회(PREFFR_C03:트랜드추천, PREFFR_C04:멘토추천, PREFFR_C05:선배추천, PREFFR_C06:힐링추천)
  if (r.query.type == "03") {
    getTag("PREFER_C03"); // 트렌드 추천 조회.
  } else if (r.query.type == "04") {
    getTag("PREFER_C04"); // 멘토 추천
  } else if (r.query.type == "05") {
    getTag("PREFER_C05"); // 선배 추천
  } else if (r.query.type == "06") {
    getTag("PREFER_C06"); // 힐링 추천
  }
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

const getRecommand = async (param) => {
  d.next01 = false;
  d.next02 = false;

  let id = "기본 트랜드 추천";
  let url = "/api/sq/recommend/course/trend";
  if (isEqual(d.type, "03")) {
    id = "트랜드 추천";
    url = "/api/sq/recommend/course/trend";
  } else if (isEqual(d.type, "04")) {
    id = "멘토추천 검색";
    url = "/api/sq/recommend/course/mentor";
  } else if (isEqual(d.type, "05")) {
    id = "선배추천 검색";
    url = "/api/sq/recommend/course/senior";
  } else if (isEqual(d.type, "06")) {
    id = "힐링추천 검색";
    url = "/api/sq/recommend/course/healing";
  }

  await call({
    method: "get",
    id: id,
    endpoint: url,
    data: param,
    onResponse({ data, status, message }) {
      d.recomList = [];
      d.isShowTxt = true;
      console.log("data ", data);
      console.log("status ", status);
      console.log("message ", message);

      data.forEach((f) => {
        f.sex = d.sex;
        f.grade = d.grade;
      });

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

const getTag = async (paramPreferCateCode) => {
  await call({
    method: "get",
    id: "관리자추천태그검색:" + paramPreferCateCode,
    endpoint: "/api/sq/recommend/course/tag",
    data: { preferCateCode: paramPreferCateCode }, // 관심분류코드(PREFFR_C03:트랜드추천, PREFFR_C04:멘토추천, PREFFR_C05:선배추천, PREFFR_C06:힐링추천)
    onResponse({ data, status, message }) {
      d.tagList = data;
      // data.forEach((f) => {
      //   f.text = f.stdClsTxt;
      //   f.value = f.stdClsCode;
      // });
      console.log(paramPreferCateCode + "추천 태그검색 status :", status);
      console.log(paramPreferCateCode + "추천 태그검색 message :", message);
      console.log(
        paramPreferCateCode + "추천 태그검색 data.length==>" + data.length
      );
      console.log(data);
    },
  });
};

// 연령대 선택 이벤트 [ 멘토추천 (비회원) || 서울런 선배추천(비회원)]
const onClickGrade = (pCateCode, pTagCode) => {
  //
  console.log(
    "선택 이벤트 pCateCode===>" + pCateCode + ", pTagCode===>" + pTagCode
  );
  d.preferCateCode = pCateCode;
  d.preferTagCode = pTagCode;

  if (pCateCode == "PREFER_C04" && pTagCode == "PREFER_T401") {
    d.generation = "elementry"; // 초등학생
  } else if (pCateCode == "PREFER_C04" && pTagCode == "PREFER_T402") {
    d.generation = "middle"; // 중학생
  } else if (pCateCode == "PREFER_C04" && pTagCode == "PREFER_T403") {
    d.generation = "high"; // 고등학생
  } else if (pCateCode == "PREFER_C04" && pTagCode == "PREFER_T404") {
    d.generation = "twenty"; // 20대
  } else if (pCateCode == "PREFER_C04" && pTagCode == "PREFER_T405") {
    d.generation = "thirty"; // 30대
  } else if (pCateCode == "PREFER_C04" && pTagCode == "PREFER_T406") {
    d.generation = "forty"; // 40대
  } else if (pCateCode == "PREFER_C04" && pTagCode == "PREFER_T407") {
    d.generation = "fifty"; // 50대
  }

  d.genderView = true;
};

// 조회 Tag를 선택 했을때
const onClickTag = (pCateCode, pTagCode) => {
  console.log(
    "선택 이벤트 pCateCode===>" + pCateCode + ", pTagCode===>" + pTagCode
  );
  d.preferCateCode = pCateCode;
  d.preferTagCode = pTagCode;
  d.suggestResultView = true; // 마지막 추천 결과 view 여부

  getRecommand({
    preferCateCode: d.preferCateCode,
    preferTagCode: d.preferTagCode,
    generation: d.generation,
  });

  // "더 보여줘" 초기화.
  this.$emit("getResult", true);
};

// 성별(남자,여자) 선택
const onClickGender = (val) => {
  d.gender = val;
  d.suggestResultView = true;
  getRecommand({
    preferCateCode: d.preferCateCode,
    preferTagCode: d.preferTagCode,
    generation: d.generation,
  });

  // "더 보여줘" 초기화.
  this.$emit("getResult", true);
};
</script>
<template>
  <div class="interest__chatting-item c-flex manager">
    <div class="interest__chatting-profile">
      <img src="@img/@temp/1.jpg" alt="AI 프로필" />
    </div>
    <div class="interest__chatting-message">
      <!--v-if="isEmpty(d.userId)"-->
      <ul>
        <li>
          <div class="c-message c-message--manager">
            <div class="c-message--cont">
              <p v-if="$route.query.type == '03'">
                안녕하세요~ 트랜드에 따라<br />
                추천을 드릴께요
              </p>
              <p v-if="$route.query.type == '04'">
                안녕하세요~ 서울런 멘토들이<br />
                추천한 턴텐츠를 보여 드릴께요
              </p>
              <p v-if="$route.query.type == '05'">
                안녕하세요~서울런 선배들이 추천한<br />
                콘텐츠를 보여드릴께요
              </p>
              <p v-if="$route.query.type == '06'">
                안녕하세요~마음을 살피는 콘텐츠를<br />
                추천해 드릴께요~
              </p>
            </div>
          </div>
        </li>

        <li>
          <div class="c-message c-message--manager">
            <div class="c-message--cont">
              <p v-if="$route.query.type == '03'">
                <!-- 트랜드추천(공통) -->
                현재 기준으로 트랜드 해시태그를<br />
                추출 중입니다.
              </p>

              <p v-if="$route.query.type == '04' && !isEmpty(d.userId)">
                <!-- 멘토추천(회원) -->
                최신 기준으로 멘토들이 추천한<br />
                목록을 호출합니다.
              </p>
              <p v-if="$route.query.type == '04' && isEmpty(d.userId)">
                <!-- 멘토추천 (비회원) -->
                먼저 연령대를 선택해 주세요
              </p>

              <p v-if="$route.query.type == '05' && !isEmpty(d.userId)">
                <!-- 서울런 선배추천(회원) -->
                최신 기준으로 선배들이 추천한<br />
                추천 목록을 호출합니다.
              </p>
              <p v-if="$route.query.type == '05' && isEmpty(d.userId)">
                <!-- 서울런 선배추천(비회원) -->
                먼저 연령대를 선택해 주세요
              </p>

              <p v-if="$route.query.type == '06'">
                <!-- 힐링추천(공통) -->
                최신 기준으로 마음의 양식이 되는<br />
                콘텐츠 분류를 추출 중입니다.
              </p>
            </div>
          </div>
        </li>

        <li v-if="$route.query.type == '03'">
          <!-- 트랜드추천(공통) -->
          <div class="c-message c-message--manager">
            <div class="c-message--cont">
              <p>
                요즘 뜨고 있는 트랜드입니다. <br />
                어떤 트랜드를 추천해 드릴까요.
              </p>
            </div>
          </div>
        </li>

        <!-- 트랜드 추천(회원/비회원 공통) || 멘토 추천(회원) || 서울런 선배 추천(회원) || 힐링추천(마음 가는대로)(회원/비회원 공통) -->
        <li
          v-if="
            $route.query.type == '03' ||
            ($route.query.type == '04' && !isEmpty(d.userId)) ||
            ($route.query.type == '05' && !isEmpty(d.userId)) ||
            $route.query.type == '06'
          "
        >
          <div class="c-message c-message--manager">
            <div class="c-message--cont">
              <div class="interest-item__chips">
                <!-- 추천Tag 조회값  -->
                <template v-for="(data, index) in d.tagList">
                  <button
                    class="c-chips--sm"
                    :class="{
                      active: isEqual(data.preferTagCode, d.preferTagCode),
                    }"
                    @click="onClickTag(data.preferCateCode, data.preferTagCode)"
                  >
                    #{{ data.preferTagName }}
                  </button>
                  <br v-if="(index + 1) % 4 == 0" class="c-pc" />
                  <!-- 계행 -->
                </template>
              </div>
            </div>
          </div>
        </li>

        <!-- 멘토추천 (비회원) || 서울런 선배추천(비회원) -->
        <li
          v-if="
            ($route.query.type == '04' && isEmpty(d.userId)) ||
            ($route.query.type == '05' && isEmpty(d.userId))
          "
        >
          <div class="c-message c-message--manager">
            <div class="c-message--cont">
              <div class="interest-item__chips">
                <!-- 추천Tag 조회값  -->
                <template v-for="(data, index) in d.tagList">
                  <button
                    class="c-chips--sm"
                    :class="{
                      active: isEqual(data.preferTagCode, d.preferTagCode),
                    }"
                    @click="
                      onClickGrade(data.preferCateCode, data.preferTagCode)
                    "
                  >
                    #{{ data.preferTagName }}
                  </button>
                  <br v-if="(index + 1) % 4 == 0" class="c-pc" />
                  <!-- 계행 -->
                </template>
              </div>
            </div>
          </div>
        </li>

        <template v-if="d.genderView">
          <!-- !isEmpty(d.grade) -->
          <li>
            <div class="c-message c-message--manager">
              <div class="c-message--cont">
                <p>성별을 선택해 주세요.</p>
              </div>
            </div>
          </li>
          <li>
            <div class="c-message c-message--manager">
              <div class="c-message--cont">
                <div class="interest-item__chips">
                  <button
                    class="c-chips--sm"
                    :class="{ active: isEqual(d.gender, 'W') }"
                    @click="onClickGender('W')"
                  >
                    # 여성
                  </button>
                  <button
                    class="c-chips--sm"
                    :class="{ active: isEqual(d.gender, 'M') }"
                    @click="onClickGender('M')"
                  >
                    # 남성
                  </button>
                </div>
              </div>
            </div>
          </li>
        </template>

        <template v-if="!isEmpty(d.grade) && !isEmpty(d.gender)">
          <li>
            <div class="c-message c-message--manager">
              <div class="c-message--cont">
                <p>
                  최신 기준으로 멘토들이 추천한<br />
                  목록을 호출합니다.
                </p>
              </div>
            </div>
          </li>
        </template>
      </ul>
    </div>
  </div>

  <div class="interest__chatting-slide" v-if="d.suggestResultView">
    <!-- v-if="!isEmpty(d.grade) && !isEmpty(d.gender)" PREFER_C04:맨토추천, PREFER_C05:선배들의추천 PREFER_C06:힐링추천 -->
    <!--    <swiperItem :param="{preferCateCode : d.preferCateCode , preferTagCode : d.preferTagCode, generation : d.generation}"-->
    <!--                :isNext01="p.isNext01"-->
    <!--                :isNext02="p.isNext02"-->
    <!--                @rtnResult="getResult" />-->

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
</template>
