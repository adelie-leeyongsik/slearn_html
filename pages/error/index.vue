<script setup>
definePageMeta({
  layout: "error",
});

const r = useRoute();

const d = reactive({
  systemError: r.query.system,
});
</script>
<template>
  <div class="error">
    <img src="@img/ic-error.svg" alt="에러 이미지" />
    <p v-if="d.systemError">
      페이지를 찾는데 오류가 발생했습니다. <br />
      현상이 지속될 경우 고객센터에 문의해주시길 바랍니다.
      <strong>고객센터 전화문의 <span>1533-0909</span></strong>
    </p>
    <p v-else>
      페이지를 찾을수가 없습니다. <br />
      요청하신 페이지가 사라졌거나, 잘못된 경로입니다.
    </p>
  </div>
</template>
