<script setup>
definePageMeta({
  layout: "interest",
});

const p = defineProps({
  isShow: { type: Boolean, default: false },
});
</script>
<template>
  <dl class="c-form-group--like" v-show="p.isShow">
    <dt>추천 결과가 마음에 드시나요?</dt>
    <dd class="c-form-group">
      <label for="name" class="c-form-label"> 추천결과응답 </label>
      <div class="c-form-check">
        <input
          class="c-form-radio-input"
          type="radio"
          name="like"
          id="likeYes"
          title="likeYes"
          value="Yes"
        />
        <label class="c-btn c-btn-sm c-btn-sm--round" for="likeYes">예</label>
      </div>
      <div class="c-form-check">
        <input
          class="c-form-radio-input"
          type="radio"
          name="like"
          id="likeNo"
          title="likeNo"
          value="No"
        />
        <label class="c-btn c-btn-sm c-btn-sm--round" for="likeNo"
          >아니요</label
        >
      </div>
    </dd>
  </dl>
</template>
