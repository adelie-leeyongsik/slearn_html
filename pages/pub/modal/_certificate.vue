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
          활동 증명서 신청
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
            활동 증명서는 1년에 1회만 신청이 가능합니다.
          </div>
          <p>활동증명서를 신청하실 기간을선택해주세요.</p>
          <div class="c-modals__survey-col">
            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <div class="c-form-label">멘토링 일시</div>
                <div
                  class="c-input-group c-input-group--calendar c-input-group--calendar--type02"
                >
                  <div>
                    <input
                      class="c-input-calendar"
                      readonly
                      title="멘토링 날짜"
                    />
                  </div>
                  <div>
                    <input
                      class="c-input-calendar"
                      readonly
                      title="멘토링 날짜"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="c-modals__button">
            <div class="c-btn-group">
              <button
                type="submit"
                class="c-btn c-btn-blue"
                @click="$emit('close')"
              >
                닫기
              </button>
              <button
                type="submit"
                class="c-btn c-btn-danger"
                @click="$emit('close')"
              >
                신청
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
