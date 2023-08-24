<script setup>
import SnbPc from "../_snbpc.vue";
import SnbTablet from "../_snbtablet.vue";
definePageMeta({
  layout: "mypage",
});
</script>
<script>
export default {
  name: "Calendar",
  data() {
    return {
      consult01: false,
      consult02: false,
      consult03: false,
    };
  },
};
</script>
<template>
  <div class="mypage">
    <SnbTablet />
    <PubBreadCrumbs />
    <div class="mypage-consulting">
      <div class="mypage__wrap">
        <SnbPc />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <div class="c-text-title-lg">진로/진학 상담 내역</div>
            <div class="c-text-title-sub">
              <p>
                사전 교육을 필수로 완료해주시길 바랍니다. <br />
                도움이 필요하실 땐 서울런 고객센터<br
                  class="c-mo"
                />(1533-0909)로 연락주세요!
              </p>
            </div>
          </div>
          <div class="mypage__contents-body">
            <div class="mypage-consulting__box-wrap">
              <a
                href=""
                class="mypage-consulting__box mypage-consulting__box-career"
              >
                <div class="mypage-consulting__box-head">
                  진로 상담 신청
                  <div class="c-badge c-badge-blue">OPEN</div>
                </div>
                <div class="mypage-consulting__box-body">
                  <p>
                    2023.01.02 ~ 2023.05.30<br />
                    100명 선착 순 지원
                  </p>
                </div>
              </a>
              <a href="" class="mypage-consulting__box">
                <div class="mypage-consulting__box-head">
                  진학 상담 신청
                  <div class="c-badge c-badge-blue">OPEN</div>
                </div>
                <div class="mypage-consulting__box-body">
                  <p>
                    2023.01.02 ~ 2023.05.30<br />
                    100명 선착 순 지원
                  </p>
                </div>
              </a>
            </div>
            <div class="mypage-consulting__list">컨텐츠</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
