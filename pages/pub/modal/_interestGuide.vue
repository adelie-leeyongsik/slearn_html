<script>
export default {
  props: {
    show: Boolean,
  },
};
</script>

<template>
  <Transition name="c-modals">
    <div class="c-modals custom" v-if="show">
      <div class="c-modals__bg" @click="$emit('close')"></div>
      <div class="c-modals__inner">
        <div class="c-modals__head">
          <p>화면을 닫고 지금 추천 받아보세요!</p>
          <button
            class="c-modals__head-close"
            type="submit"
            @click="$emit('close')"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <div class="c-modals__contents-box">
            <div class="c-modals__contents-box--head">
              <img src="@img/ic-interestGuide_img01.png" alt="" />
            </div>
            <div class="c-modals__contents-box--cont">
              <strong>Step 1</strong>
              <p>관심 추천 방식을 선택해주세요.</p>
            </div>
          </div>
          <div class="c-modals__contents-box">
            <div class="c-modals__contents-box--head">
              <img src="@img/ic-interestGuide_img02.png" alt="" />
            </div>
            <div class="c-modals__contents-box--cont">
              <strong>Step 2</strong>
              <p>다른 기능으로도 사용하실 수 있어요.</p>
            </div>
          </div>
          <div class="c-modals__contents-box">
            <div class="c-modals__contents-box--head">
              <img src="@img/ic-interestGuide_img03.png" alt="" />
            </div>
            <div class="c-modals__contents-box--cont">
              <strong>Step 3</strong>
              <p>추천 기능도 활용해보세요.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
