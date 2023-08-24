<script setup>
import joinNav from "../_navChange.vue";
import Modal from "../_modal.vue";
import Alert from "../_alert.vue";
definePageMeta({
  layout: "account",
});
</script>

<script>
export default {
  data() {
    return {
      school: "elementarySchool",
      showModal: false,
      showAlert: false,
    };
  },
};
</script>

<template>
  <div class="account">
    <h1>학습 사이트 변경</h1>
    <joinNav :active="2" />
    <form action="">
      <div class="account__body">
        <legend>
          <h2 class="account__title">회원님 학습 사이트 정보 입니다.</h2>
        </legend>

        <div class="account__info">
          <dl class="account__info-change">
            <dt>사용자 이름</dt>
            <dd>홍길동</dd>
          </dl>
          <dl class="account__info-change">
            <dt>학교급</dt>
            <dd>중학교</dd>
          </dl>
          <dl class="account__info-change">
            <dt>학년급</dt>
            <dd>해당없음</dd>
          </dl>
          <dl class="account__info-change">
            <dt>학습사이트(교과)</dt>
            <dd>에듀윌(검정고시)</dd>
          </dl>
          <dl class="account__info-change">
            <dt>학습사이트(교과)</dt>
            <dd>윌라, 해커스</dd>
          </dl>
        </div>
        <div class="c-text-caution">
          반드시 회원의 주민등록번호로 자격검증 확인해주세요.
        </div>
        <div class="c-form-group">
          <div class="c-form-group">
            <div class="c-form-label">학습 사이트 변경 선택</div>
            <div class="c-box">
              <div class="c-box__title">
                현재 학습 사이트에 만족하고 있어요.
              </div>
              <div class="c-box__title-sub">계속 이용할께요!</div>
              <!-- 230711 버튼 c-btn-blue -> c-btn-primary 변경,  -->
              <button class="c-btn c-btn-sm c-btn-primary c-box-btn">
                학습 유지하기
              </button>
            </div>
            <div class="c-box">
              <div class="c-box__title">다른 사이트도 한번 확인해보고</div>
              <div class="c-box__title-sub">변경할지 선택할래요!</div>
              <button class="c-btn c-btn-sm c-btn-primary c-box-btn">
                둘러보고 변경하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
  <Modal :show="showModal" @close="showModal = false" />
  <Alert :show="showAlert" @close="showAlert = false" />
</template>

<style lang="scss" scoped>
.account {
  &__info {
    margin: 0 0 1.6rem;
    &-change {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1.6rem;
      dt {
        margin: 0;
        color: #535353;
      }
      dd {
        color: $black;
        font-weight: 700;
      }
      & + dl {
        margin-top: 1.6rem;
      }
    }
  }
}
</style>
