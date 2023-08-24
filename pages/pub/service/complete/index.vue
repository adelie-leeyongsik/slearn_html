<script setup>
definePageMeta({
  layout: "service",
});
</script>
<template>
  <div class="service">
    <PubBreadCrumbs />
    <div class="service-complete">
      <div class="c-text-title-lg c-text-center">1:1 문의 등록 완료</div>
      <p class="c-text-title-sub">
        등록이 완료되었습니다. <br />
        문의한 내용은 마이페이지 &gt; 1:1문의에서 확인 가능합니다.
      </p>
      <div class="service__body"></div>
      <div class="mypage__foot">
        <div class="c-btn-group">
          <button class="c-btn c-btn-lg c-btn-danger">바로가기</button>
        </div>
      </div>
    </div>
  </div>
</template>
