<script setup>
import SnbPc from "../_snbpc.vue";
import SnbTablet from "../_snbtablet.vue";
import eduItem from "../mentor/_eduitem.vue";
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
    <div class="mypage-report">
      <div class="mypage__wrap">
        <SnbPc />
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
            <div class="board-view">
              <div class="board-view__contents">
                <!-- temp -->
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 380px;
                    background-color: #f1f1f1;
                    font-size: 20px;
                    color: #535353;
                  "
                >
                  상세내용
                </div>
                <!-- temp -->
              </div>
              <div class="c-btn-group">
                <button class="c-btn c-btn-lg c-btn-blue">
                  <strong>목록으로</strong>
                </button>
                <button class="c-btn c-btn-lg c-btn-danger">
                  <strong>바로가기</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mypage {
  .board-view {
    border-top: 0.2rem solid $black;
    @include mobile {
      margin-top: 4rem;
    }
    div.board-view__contents {
      padding: 4rem 0;
    }
  }
}
</style>
