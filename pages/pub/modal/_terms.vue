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
          약관 제목<button
            class="c-modals__head-close"
            type="submit"
            @click="$emit('close')"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <div class="c-modals__contents-terms">
            약관약관약관약관약관약관약관약관약관약관약관약관약관약
            관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />
            <table style="width: 1000px; border: 1px solid red">
              <tbody>
                <th>222</th>
                <td>111</td>
              </tbody>
            </table>
          </div>
          <div class="c-modals__button">
            <div class="c-btn-group">
              <button
                type="submit"
                class="c-btn c-btn-danger"
                @click="$emit('close')"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
