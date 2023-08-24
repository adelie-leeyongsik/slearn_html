<script setup>
import { reactive } from "vue";

const d = reactive({
  items: [
    "대시 보드",
    "출석 관리",
    "수강 관리",
    "멘토링 관리",
    "오픈강의 관리",
    "이벤트 관리",
    "드라이브 관리",
    "1:1 문의",
    "회원정보 변경",
  ],
});
</script>

<template>
  <div class="lnb">
    <nav>
      <a href="" v-for="item in d.items">
        {{ item }}
      </a>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.lnb {
  background-color: $white;
  border-top: 0.1rem solid #e1e1e1;
  @include tablet {
    overflow: auto;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 120rem;
    height: 8rem;
    margin: 0 auto;
    font-size: 1.8rem;
    color: #535353;
    @include mobile {
      height: 6rem;
    }
    a {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      text-align: center;
      &.active {
        border-bottom: 0.2rem solid $black;
        font-weight: 700;
        color: $black;
      }
    }
  }
}
</style>
