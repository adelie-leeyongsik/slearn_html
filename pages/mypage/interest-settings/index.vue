<script setup>
import Snb from "@pages/mypage/_snb.vue";
import SnbTablet from "@pages/mypage/_snbTablet.vue";
import { useModalStore } from "@/store";
import interestModal from "@/pages/interest/interestModal.vue";
import { call } from "@/api";
import moment from "moment";

definePageMeta({
  layout: "mypage",
});

const modal = useModalStore();

const d = reactive({
  isShowBtn: false,
  isShowPolicy: true,
  isShowModal: false,
  selectTags: {},
  cultureTags: [],
  policyTags: [],
});

onMounted(() => {
  const age = sessionStorage.getItem("age");
  d.isShowPolicy = age >= 19 && age <= 39 ? true : false;
  d.isShowPolicy = true;
  fetchData();
});
const fetchData = async () => {
  await getData().then(function () {
    getInterestData();
    getPolicyData();
  });
};

const getInterestData = async () => {
  await call({
    id: "관심사 리스트 조회",
    endpoint: "/api/sq/prefer/list",
    data: { preferCode: "PREFER_P01" },
    onResponse({ data }) {
      d.cultureTags = data;
      return true;
    },
  });
};

const getPolicyData = async () => {
  await call({
    id: "정책정보 리스트 조회",
    endpoint: "/api/sq/prefer/list",
    data: { preferCode: "PREFER_P02" },
    onResponse({ data }) {
      console.log("정책정보>>", data);
      d.policyTags = data;
      return true;
    },
  });
};
const getData = () => {
  return new Promise(function (resolve, reject) {
    call({
      id: "내 관심 정책 정보 조회",
      endpoint: "/api/sq/my/prefer",
      onResponse({ data }) {
        console.log("내관심>", data);
        d.selectTags.PREFER_P02 = data.filter(
          (e) => e.preferCode === "PREFER_P02"
        );
        d.selectTags.PREFER_P01 = data.filter(
          (e) => e.preferCode === "PREFER_P01"
        );
        resolve();

        return true;
      },
    });
  });
};

const handleClickTag = (type, item) => {
  d.isShowBtn = true;
  const arr = d.selectTags[type];
  const foundIndex = arr.findIndex((e) => e.stdClsCode === item.stdClsCode);
  if (foundIndex !== -1) {
    arr.splice(foundIndex, 1);
    return;
  }

  if (arr.length >= 2) {
    arr.shift();
  }
  arr.push(item);
};

const handleClickConfirm = async () => {
  const culture = d.selectTags.PREFER_P01.map((obj) => obj.stdClsCode);
  const policy = d.selectTags.PREFER_P02.map((obj) => obj.stdClsCode);

  console.log(culture, policy);

  await call({
    id: "정책정보 저장",
    endpoint: `/api/sq/my/prefer`,
    method: "post",
    data: {
      preferList: culture,
      policyList: policy,
    },
    onResponse() {
      modal.alert("알림", "저장되었습니다.");
      d.isShowBtn = false;
      return true;
    },
  });
};

const setInterestInfo = (data) => {
  if (!isEmpty(data)) {
    d.selectTags["PREFER_P01"] = [];
    data
      .filter((e) => e.preferCode.charAt(0) === "S")
      .sort((a, b) => b.count - a.count)
      .slice(0, 2)
      .forEach((e) => {
        d.selectTags["PREFER_P01"].push({
          preferCode: "PREFER_P01",
          stdClsCode: e.preferCode,
          stdClsTxt: e.preferTitle,
        });
      });
    d.isShowBtn = true;
  }
  d.isShowModal = false;
};
</script>
<script>
export default {
  name: "Calendar",
  data() {
    return {
      edu01: false,
      edu02: false,
      edu03: false,
      edu04: false,
    };
  },
};
</script>

<template>
  <interestModal :isShow="d.isShowModal" @confirm="setInterestInfo" />
  <div class="mypage">
    <SnbTablet :currentUrl="`/mypage/interest-settings`" />
    <BreadCrumbs />
    <div class="mypage-report">
      <div class="mypage__wrap">
        <Snb :currentUrl="`/mypage/interest-settings`" />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <MypageTitle
              title="나의 관심사 설정"
              desc="설정한 관심사에 따라 유튜브, 테드, 공연, 정책 정보 등의 추천
                내역이 달라져요, 관심있는 분야를 관리해보세요.<br />
                도움이 필요하실 땐 서울런 고객센터(1533-0909)로 연락주세요!"
            />
          </div>
          <div class="mypage__contents-body">
            <div class="interest">
              <div class="interest-item">
                <div class="interest-item__image">
                  <img
                    src="@img/interest01.png"
                    alt="관심사 설정 이미지"
                    style="width: 98px"
                  />
                </div>
                <div class="interest-item__title">
                  <strong
                    >서울런에서 추천 받고 싶은 강좌나<br />
                    문화, 전시, 공연 주제를 선택해 주세요.</strong
                  >(최대 2가지)
                </div>
                <div class="interest-item__text">
                  나의 관심사를 잘 모르겠다면 이미지로 골라보세요!
                </div>
                <div class="interest-item__button">
                  <Button
                    size="auto"
                    styleType="blue"
                    text="관심사 선택 Start!"
                    @click="d.isShowModal = true"
                  />
                </div>
                <div class="interest-item__chips">
                  <template v-for="(item, index) in d.cultureTags">
                    <br v-if="!item.preferTitle" />
                    <button
                      v-else
                      class="c-chips"
                      :class="{
                        active: d.selectTags.PREFER_P01.find(
                          (e) => e.stdClsCode === item.stdClsCode
                        ),
                      }"
                      @click="handleClickTag('PREFER_P01', item)"
                    >
                      # {{ item.stdClsTxt }}
                    </button>
                  </template>
                </div>
              </div>
              <div class="interest-item" v-if="d.isShowPolicy">
                <div class="interest-item__image">
                  <img
                    src="@img/interest02.png"
                    alt="흥미 키워드 이미지"
                    style="width: 99px"
                  />
                </div>
                <div class="interest-item__title">
                  <strong
                    >평소에 궁금했던 지원사업이나<br />
                    정책 정보와 관련된 키워드를 선택해 주세요.</strong
                  >(최대 2가지)
                </div>

                <div class="interest-item__chips">
                  <template v-for="(item, index) in d.policyTags">
                    <br v-if="!item.preferTitle" />
                    <button
                      v-else
                      class="c-chips"
                      :class="{
                        active: d.selectTags.PREFER_P02.find(
                          (e) => e.stdClsCode === item.stdClsCode
                        ),
                      }"
                      @click="handleClickTag('PREFER_P02', item)"
                    >
                      # {{ item.stdClsTxt }}
                    </button>
                  </template>
                </div>
              </div>
            </div>
            <div class="c-btn-group">
              <Button
                :disabled="!d.isShowBtn"
                size="auto"
                sizeType="large"
                :styleType="!d.isShowBtn ? 'darkgray' : 'danger'"
                :isBold="true"
                text="저장하기"
                :onClick="handleClickConfirm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
