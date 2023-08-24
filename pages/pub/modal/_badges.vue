<script>
export default {
  props: {
    show: Boolean,
  },
};
</script>

<template>
  <Transition name="c-modals">
    <div class="c-modals" v-if="show">
      <div class="c-modals__bg" @click="$emit('close')"></div>
      <div class="c-modals__inner">
        <div class="c-modals__head">
          멘토 결석 신고
          <button
            class="c-modals__head-close"
            type="submit"
            @click="$emit('close')"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <div class="c-modals__title">
            학습 달성도에 따라 뱃지가 수여됩니다.
          </div>
          <p>달성 뱃지는 매월 갱신됩니다.</p>
          <section>
            <h3 class="c-modals__title c-modals__title-sm">
              1. 출석일에 따른 성과 뱃지
            </h3>
            <div class="c-modals__box">
              <ul class="c-modals__step">
                수강 신청 시
                <span>&gt;</span>
                10회
                <span>&gt;</span>
                15회
                <span>&gt;</span>
                20회
              </ul>
            </div>
          </section>
          <section>
            <h3 class="c-modals__title c-modals__title-sm">
              1. 출석일에 따른 성과 뱃지
            </h3>
            <div class="c-modals__box">
              <ul class="c-modals__step">
                10%
                <span>&gt;</span>
                20%
                <span>&gt;</span>
                30%
                <span>&gt;</span>
                60%
                <span>&gt;</span>
                90%
              </ul>
            </div>
          </section>
          <div class="c-modals__button">
            <div class="c-btn-group">
              <button
                type="submit"
                class="c-btn c-btn-danger"
                @click="$emit('close')"
              >
                네, 알겠어요
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
