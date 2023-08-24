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
        <div class="c-modals__head">멘토 추가 정보 입력</div>
        <div class="c-modals__contents">
          <div class="c-modals__title">
            멘토링 매칭을 위한 추가 정보를 입력해주세요.
          </div>
          <div class="c-modals__survey-col">
            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <div class="c-form-label">멘토링 가능 지역</div>
                <div class="c-input-group c-input-group--type03">
                  <select class="c-form-control" title="멘토링 가능 지역1">
                    <option value="">선택</option>
                  </select>
                  <select class="c-form-control">
                    <option value="">선택</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <div class="c-form-label">멘토링 코칭 유형</div>
                <select class="c-form-control" title="멘토링 가능 지역2">
                  <option value="">선택</option>
                </select>
              </div>
            </div>
          </div>
          <div class="c-modals__button">
            <div class="c-btn-group">
              <button
                type="submit"
                class="c-btn c-btn-primary"
                @click="$emit('close')"
              >
                저장
              </button>
            </div>
          </div>
        </div>
        <button
          class="c-modals__head-close"
          type="submit"
          @click="$emit('close')"
        >
          닫기
        </button>
      </div>
    </div>
  </Transition>
</template>
