<script setup>
import Snb from "@pages/mypage/_snb";
import SnbTablet from "@pages/mypage/_snbTablet";
import ItemList from "./itemList";
import { call } from "@/api";

definePageMeta({
  layout: "mypage",
});

const router = useRouter();

const d = reactive({
  immCnt: 0,
  immContents: [],
  immShow: false,
  expCnt: 0,
  expContents: [],
  expShow: false,
  helpCnt: 0,
  helpContents: [],
  helpShow: false,
});

onMounted(() => {
  getData();
});

const getData = async () => {
  await call({
    id: "마이페이지 관심추천 내역 조회",
    endpoint: "/api/sq/my/rcmd/course/list",
    data: {},
    onResponse({ data }) {
      console.log("data >> ", data);
      d.immCnt = data.onSize;
      d.immContents = data.on;

      d.expCnt = data.ofSize;
      d.expContents = data.of;

      d.helpCnt = data.suSize;
      d.helpContents = data.su;
    },
  });
};
</script>

<template>
  <div class="mypage">
    <SnbTablet />
    <BreadCrumbs />
    <div class="mypage-report">
      <div class="mypage__wrap">
        <Snb />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <div class="c-text-title-lg">관심추천 내역</div>
            <div class="c-text-title-sub">
              <p>
                내가 관심있는 컨텐츠를 확인한 내역입니다. 클릭하시면 다시 확인이
                가능합니다.<br />
                도움이 필요하실 땐 서울런 고객센터(1533-0909)로 연락주세요!
              </p>
            </div>
          </div>
          <div class="mypage__contents-body">
            <div class="mypage-edu__list-head">
              <dl>
                <dt>바로 만나는 컨텐츠</dt>
                <dd>
                  <span>{{ d.immCnt }}</span>
                </dd>
              </dl>
              <dl>
                <dt>체험형 컨텐츠</dt>
                <dd>
                  <span>{{ d.expCnt }}</span>
                </dd>
              </dl>
              <dl>
                <dt>도움이 되는 정보</dt>
                <dd>
                  <span>{{ d.helpCnt }}</span>
                </dd>
              </dl>
            </div>
            <div class="mypage-edu__list-body">
              <dl>
                <dt @click="d.immShow = !d.immShow">
                  <div
                    class="mypage-edu__title"
                    :class="{ active: d.immShow === true }"
                  >
                    <!-- 웹접근성 a태그 추가 -->
                    <a href="javascript:void(0)"
                      >바로 만나는 컨텐츠 <span>{{ d.immCnt }}</span></a
                    >
                    <!-- //웹접근성 a태그 추가 -->
                  </div>
                </dt>
                <dd v-show="d.immShow == true">
                  <div
                    class="mypage-edu__contents"
                    v-if="!isEmpty(d.immContents)"
                  >
                    <ItemList :dataList="d.immContents" />
                    <!-- <Pagination /> -->
                  </div>
                </dd>
              </dl>
              <dl>
                <dt @click="d.expShow = !d.expShow">
                  <div
                    class="mypage-edu__title"
                    :class="{ active: d.expShow === true }"
                  >
                    <!-- 웹접근성 a태그 추가 -->
                    <a href="javascript:void(0)"
                      >체험형 컨텐츠 <span>{{ d.expCnt }}</span></a
                    >
                    <!-- //웹접근성 a태그 추가 -->
                  </div>
                </dt>
                <dd v-show="d.expShow == true">
                  <div
                    class="mypage-edu__contents"
                    v-if="!isEmpty(d.expContents)"
                  >
                    <ItemList :dataList="d.expContents" />
                    <!-- <Pagination /> -->
                  </div>
                </dd>
              </dl>
              <dl>
                <dt @click="d.helpShow = !d.helpShow">
                  <div
                    class="mypage-edu__title"
                    :class="{ active: d.helpShow === true }"
                  >
                    <!-- 웹접근성 a태그 추가 -->
                    <a href="javascript:void(0)"
                      >도움이 되는 정보 <span>{{ d.helpCnt }}</span></a
                    >
                    <!-- //웹접근성 a태그 추가 -->
                  </div>
                </dt>
                <dd v-show="d.helpShow == true">
                  <div
                    class="mypage-edu__contents"
                    v-if="!isEmpty(d.helpContents)"
                  >
                    <ItemList :dataList="d.helpContents" />
                    <!-- <Pagination /> -->
                  </div>
                </dd>
              </dl>
            </div>
            <div class="c-btn-group">
              <button
                class="c-btn c-btn-lg c-btn-danger"
                @click="
                  () => {
                    router.push('/interest');
                  }
                "
              >
                추천 받으러 바로가기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
