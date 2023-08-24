<script setup>
import { useLoginStore } from "@/store";

const p = defineProps({
  active: { type: Number, default: 1 },
});

const login = useLoginStore();

const d = reactive({
  age14: isEmpty(login.joinInfo) ? uGetLoginInfo("age") : login.joinInfo.age,
  joinCode: isEmpty(login.joinInfo)
    ? uGetLoginInfo("memberJoinTypeCode")
    : login.joinInfo.join_pcd,
  isSchool: uGetLoginInfo("schChgAvail"),
  isLearn: uGetLoginInfo("lrnpltChgAvail"),
});
</script>

<template>
  <div v-if="isEqual(d.isSchool, 'Y') || isEqual(d.isLearn, 'Y')">
    <nav class="join__nav">
      <ul>
        <li :class="{ active: p.active === 1 }">
          <span>1</span>
          <p>{{ uGetSubtitle(1) }}</p>
        </li>
        <li :class="{ active: p.active === 2 }">
          <span>2</span>
          <p>{{ uGetSubtitle(2) }}</p>
        </li>
        <template v-if="d.age > 18 && isEqual(d.joinCode, 'JOIN_P002')">
          <li :class="{ active: p.active === 3 }">
            <span>3</span>
            <p>대학교 진학 여부</p>
          </li>
          <li :class="{ active: p.active === 4 }">
            <span>4</span>
            <p>학습사이트 변경</p>
          </li>
          <li :class="{ active: p.active === 5 }">
            <span>5</span>
            <p>학습정보 사이트 확인</p>
          </li>
        </template>
        <template v-else>
          <li :class="{ active: p.active === 3 }">
            <span>3</span>
            <p>{{ uGetSubtitle(3) }}</p>
          </li>
          <li :class="{ active: p.active === 4 }">
            <span>4</span>
            <p>{{ uGetSubtitle(4) }}</p>
          </li>
        </template>
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
