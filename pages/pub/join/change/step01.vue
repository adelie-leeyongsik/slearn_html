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
    <joinNav :active="1" />
    <form action="">
      <div class="account__body">
        <legend>
          <h2 class="account__title">
            서울런 회원 대상을 확인 하기 위하여 <br />
            온라인 자격 확인 서비스를 통해<br />
            실시간 검증을 진행하고 있습니다.
          </h2>
        </legend>
        <div class="account__title-sub">
          검증 결과에 따라 회원 가입이 제한될 수 있습니다.
        </div>

        <div class="c-form-group">
          <label for="name" class="c-form-label">이름</label>
          <div class="c-input-group">
            <!-- 웹접근성 id 추가 -->
            <input
              id="name"
              class="c-form-control"
              type="text"
              placeholder="이름을 입력해 주세요"
            />
            <!--// 웹접근성 id 추가 -->
          </div>
        </div>
        <div class="c-form-group">
          <label for="rrn" class="c-form-label">주민번호</label>
          <!-- 230620 주민번호 disabled시,  c-input-group--type03 클래스 추가-->
          <div class="c-input-group c-input-group--type03">
            <!-- // 230620 주민번호 disabled시,  c-input-group--type03 클래스 추가-->
            <!-- 웹접근성 title 추가 -->
            <input
              id="rrn"
              class="c-form-control"
              type="text"
              placeholder="주민번호 앞 6자리"
              title="주민번호 앞 6자리"
              maxlength="6"
              required
              disabled
            />
            -
            <input
              id="rrn02"
              class="c-form-control"
              type="password"
              placeholder="주민번호 뒤 7자리"
              title="주민번호 뒤 7자리"
              maxlength="7"
              required
            />
            <!--// 웹접근성 title 추가 -->
          </div>
        </div>
        <div class="c-text-caution">
          반드시 회원의 주민등록번호로 자격검증 확인해주세요.
        </div>
      </div>

      <div class="account__foot">
        <div class="c-btn-group">
          <button class="c-btn c-btn-lg c-btn-danger">
            <strong>자격조회</strong>
          </button>
        </div>
      </div>
    </form>
  </div>
  <Modal :show="showModal" @close="showModal = false" />
  <Alert :show="showAlert" @close="showAlert = false" />
</template>

<style lang="scss" scoped>
.join {
  &__benefit {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 64rem;
    margin: 0 auto 3rem;
    padding: 2.7rem 9rem 2.8rem 7.9rem;
    background-color: $white;
    border-radius: 1.6rem;
    p {
      display: flex;
      align-items: center;
      strong {
        margin-left: 1.6rem;
        font-size: 1.6rem;
        color: $black;
      }
    }
    @include mobile {
      display: block;
      width: 100%;
      margin: 0;
      padding: 2.7rem 1.6rem 2.8rem 1.6rem;
      border-bottom: 1.6rem solid $light;
      border-radius: 0;
      .c-btn {
        width: 100%;
        //margin-top: 2rem;
      }
    }
  }
}
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

.c-form-group-edu {
  margin-right: -9rem;
  overflow-x: auto;
  display: flex;
  gap: 0.8rem;
}
</style>
