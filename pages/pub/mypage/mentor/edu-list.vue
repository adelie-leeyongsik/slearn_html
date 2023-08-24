<script setup>
import SnbPc from "../_snbpc.vue";
import SnbTablet from "../_snbtablet.vue";
import eduItem from "./_eduitem.vue";
definePageMeta({
  layout: "mypage",
});
</script>
<script>
export default {
  name: "Calendar",
  data() {
    return {
      edu01: false,
      edu02: false,
      edu03: false,
    };
  },
};
</script>

<template>
  <div class="mypage">
    <SnbTablet />
    <PubBreadCrumbs />
    <div class="mypage-edu__list">
      <div class="mypage__wrap">
        <SnbPc />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <div class="c-text-title-lg">멘토 교육</div>
            <div class="c-text-title-sub">
              <p>
                사전 필수교육을 완료 하셔야 멘토링이 가능합니다. <br />
                도움이 필요하실 땐 서울런 고객센터<br
                  class="c-mo"
                />(1533-0909)로 연락주세요!
              </p>
            </div>
          </div>
          <div class="mypage__contents-body">
            <div class="mypage-edu__list-head">
              <dl>
                <dt>사전 필수 교육</dt>
                <dd><span>20</span>/100</dd>
              </dl>
              <dl>
                <dt>기타 필수 교육</dt>
                <dd><span>15</span>/100</dd>
              </dl>
            </div>
            <div class="mypage-edu__list-body">
              <dl>
                <dt @click="edu01 = !edu01">
                  <div
                    class="mypage-edu__title"
                    :class="{ active: edu01 === true }"
                  >
                    <!-- 웹접근성 a태그 추가 -->
                    <a href="javascript:void(0)">사전 교육 <span>100</span> </a>
                    <!-- //웹접근성 a태그 추가 -->
                  </div>
                </dt>
                <dd v-show="edu01 == true">
                  <div class="mypage-edu__contents">
                    <eduItem />
                    <PubPagination />
                  </div>
                </dd>
              </dl>
              <dl>
                <dt @click="edu02 = !edu02">
                  <div
                    class="mypage-edu__title"
                    :class="{ active: edu02 === true }"
                  >
                    <!-- 웹접근성 a태그 추가 -->
                    <a href="javascript:void(0)"
                      >[OT] 오리엔테이션 <span>100</span></a
                    >
                    <!-- //웹접근성 a태그 추가 -->
                  </div>
                </dt>
                <dd v-show="edu02 == true">
                  <div class="mypage-edu__contents">
                    <eduItem />
                    <PubPagination />
                  </div>
                </dd>
              </dl>
              <dl>
                <dt @click="edu03 = !edu03">
                  <div
                    class="mypage-edu__title"
                    :class="{ active: edu03 === true }"
                  >
                    <!-- 웹접근성 a태그 추가 -->
                    <a href="javascript:void(0)">정기 교육 <span>100</span> </a>
                  </div>
                </dt>
                <dd v-show="edu03 == true">
                  <div class="mypage-edu__contents">
                    <eduItem />
                    <PubPagination />
                  </div>
                </dd>
              </dl>
            </div>
            <div class="c-btn-group">
              <button class="c-btn c-btn-lg c-btn-danger">
                수강 중 교육 바로가기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
