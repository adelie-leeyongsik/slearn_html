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
      <div class="c-modals__inner c-modals__inner--lg">
        <div class="c-modals__head">
          심화활동 신청서<button
            class="c-modals__head-close"
            type="submit"
            @click="$emit('close')"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          심화활동 신청서 노출<br />
          심화활동 신청서 노출<br />
          심화활동 신청서 노출<br />
          심화활동 신청서 노출<br />
          심화활동 신청서 노출<br />
          심화활동 신청서 노출<br />
          심화활동 신청서 노출<br />
          심화활동 신청서 노출<br />
          심화활동 신청서 노출<br />

          <div class="c-modals__button">
            <div class="c-btn-group">
              <button
                type="submit"
                class="c-btn c-btn-blue"
                @click="$emit('close')"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
