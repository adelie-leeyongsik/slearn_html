<script setup>
const p = defineProps({
  contents: "",
});
</script>
<template>
  <div class="c-nodata">
    <img src="@img/ch-nodata.svg" alt="데이터 없음" />
    <p>{{ p.contents }}</p>
  </div>
</template>

<style lang="scss" scoped>
.c-nodata {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 28rem;
  background-color: #fafafa;
  font-size: 1.4rem;
  color: #535353;
  border-radius: 0.8rem;
  p {
    margin-top: 1.6rem;
  }
  &.type02 {
    min-height: 17.6rem;
    background-color: $white;
  }
}
</style>
