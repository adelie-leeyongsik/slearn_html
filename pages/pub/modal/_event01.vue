<script setup>
import "v-calendar/dist/style.css";

import { ref } from "vue";

const date = ref(new Date());
const mode = ref("date");
// const mode = ref("date2");
const date2 = ref(new Date());
const rules = ref({
  hours: [12, 15, 18, 22],
});
</script>

<script>
export default {
  props: {
    show: Boolean,
    date: new Date(),
    date2: new Date(),
  },
};
</script>

<template>
  <Transition name="c-modals">
    <div class="c-modals" v-if="show">
      <div class="c-modals__bg" @click="$emit('close')"></div>
      <div class="c-modals__inner">
        <div class="c-modals__head">
          비회원 신청하기
          <button
            class="c-modals__head-close"
            type="submit"
            @click="$emit('close')"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <div class="c-modals__form">
            <div class="c-form-group">
              <label for="name" class="c-form-label">이름</label>
              <input
                type="text"
                id="name"
                class="c-form-control"
                placeholder="이름을 입력해주세요"
              />
            </div>
          </div>
          <div class="c-modals__form">
            <div class="c-form-group">
              <div class="c-form-label">생년월일</div>
              <div class="c-input-group c-input-group--birth">
                <select class="c-form-control" title="생년월일 - 연도">
                  <option>년도</option>
                </select>
                <select class="c-form-control" title="생년월일 - 월">
                  <option>월</option>
                </select>
                <select class="c-form-control" title="생년월일 - 일">
                  <option>일</option>
                </select>
              </div>
            </div>
          </div>
          <div class="c-modals__form">
            <div class="c-form-group">
              <label for="number" class="c-form-label">휴대폰번호</label>
              <input
                type="text"
                id="number"
                class="c-form-control"
                placeholder="휴대폰번호를 입력해주세요"
              />
            </div>
          </div>

          <div class="c-modals__button">
            <div class="c-btn-group">
              <button
                type="submit"
                class="c-btn c-btn-primary"
                @click="$emit('close')"
              >
                닫기
              </button>
              <button
                type="submit"
                class="c-btn c-btn-primary"
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

<style lang="scss" scoped>
// .c-
</style>
