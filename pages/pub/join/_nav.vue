<script>
export default {
  props: {
    active: Object,
  },
};
</script>

<template>
  <div>
    <nav class="join__nav">
      <ul>
        <li :class="{ active: active === 1 }">
          <span>1</span>
          <p>회원 유형 선택</p>
        </li>
        <li :class="{ active: active === 2 }">
          <span>2</span>
          <p>약관동의 및 본인인증</p>
        </li>
        <li :class="{ active: active === 3 }">
          <span>3</span>
          <p>추가 정보 입력</p>
        </li>
        <li :class="{ active: active === 4 }">
          <span>4</span>
          <p>학습사이트 선택</p>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.join {
  &__nav {
    width: 64rem;
    margin: 0 auto 3rem;
    padding: 3.2rem 6.3rem;
    background-color: $white;
    border-radius: 1.6rem;
    @include mobile {
      width: 100%;
      margin: 0;
      padding: 0rem 1.6rem 4rem;
      border-bottom: 1.6rem solid $light;
      border-radius: 0;
    }
    ul {
      display: flex;
      justify-content: center;
      width: 100%;
      text-align: center;
      span {
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        width: 2.4rem;
        height: 2.4rem;
        margin: 0 auto;
        border-radius: 2.4rem;
        background: $black url("@img/ic-step-active.svg") no-repeat 50% 50%;
        color: $white;
        font-size: 1.6rem;
        font-weight: 700;
        font-size: 0;
      }
      p {
        margin-top: 0.8rem;
        line-height: 1;
        color: #535353;
        font-size: 1.4rem;
        line-height: 1.7rem;
        font-weight: 700;
        word-break: keep-all;
      }
      li {
        position: relative;
      }
      li + li {
        margin-left: 5rem;
        &::before {
          content: "";
          display: block;
          position: absolute;
          top: 50%;
          left: -3rem;
          transform: translateY(-50%);
          width: 1rem;
          height: 1.7rem;
          background: url("@img/ic-step-arrow.svg") no-repeat center;
        }
        @include mobile {
          margin-left: 3.6rem;
          &::before {
            left: -2rem;
          }
        }
      }
      li.active {
        span {
          background: $primary;
          color: $white;
          font-size: 1.6rem;
        }
        p {
          color: $primary;
        }
      }
      li.active ~ li {
        span {
          background: #535353;
          font-size: 1.6rem;
        }
      }
    }
  }
}
</style>
