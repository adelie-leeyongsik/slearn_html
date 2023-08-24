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
          SMS 발송
          <button
            class="c-modals__head-close"
            type="submit"
            @click="$emit('close')"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <textarea
            class="c-form-control"
            placeholder="자신의 의견을 간단히 적어주세요."
            title="SMS 발송"
          ></textarea>
          <div class="c-form-group">
            <label for="title" class="c-form-label">멘티 강의 추천</label>
            <div class="c-input-group">
              <input
                id="title"
                class="c-form-control"
                type="text"
                placeholder="추천할 강의 명을 입력해주세요."
                required
              />
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
                SMS 발송
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
