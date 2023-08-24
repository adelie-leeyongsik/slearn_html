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
          신청 정보 입력
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
            본 행사에는 동반자 1인 추가 신청 가능합니다.
          </div>
          <p>동반 참여자 미 입력시 본인만 신청됩니다.</p>
          <div class="c-modals__form">
            <div class="c-form-group">
              <label for="name02" class="c-form-label">신청자 본인 성명</label>
              <input
                type="text"
                id="name02"
                class="c-form-control"
                value="홍길동"
              />
            </div>
          </div>

          <div class="c-modals__form">
            <div class="c-form-group">
              <div class="c-form-label">신청자 본인 생년월일</div>
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
              <label for="number02" class="c-form-label"
                >신청자 본인 휴대폰 번호</label
              >
              <input type="text" class="c-form-control" value="01012345678" />
            </div>
          </div>

          <div class="c-modals__form">
            <div class="c-form-group">
              <label for="name01" class="c-form-label">동반 참여자 성명</label>
              <input
                type="text"
                id="name01"
                class="c-form-control"
                placeholder="이름을 입력해주세요"
              />
            </div>
          </div>

          <div class="c-modals__form">
            <div class="c-form-group">
              <div class="c-form-label">동반 참여자 생년월일</div>
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
              <label for="number01" class="c-form-label"
                >동반 참여자 휴대폰 번호</label
              >
              <input
                id="number01"
                type="text"
                class="c-form-control"
                value="01012345678"
              />
            </div>
          </div>

          <div class="c-modals__form">
            <div class="c-form-group">
              <label for="agree" class="c-form-label"
                >개인정보처리방침
                <strong class="c-text-primary"
                  >(반드시 약관의 내용을 확인해주세요)</strong
                ></label
              >
              <div class="c-form-check__box">
                <div class="c-form-check">
                  <input
                    class="c-form-check-input"
                    type="checkbox"
                    name="exampleCheckbox01"
                    id="exampleCheckbox01-02"
                  />
                  <label class="c-form-check-label" for="exampleCheckbox01-02">
                    개인정보 수집/이용에 관한 동의 (필수)
                  </label>
                </div>
                <button class="c-btn c-btn-text c-btn-text--line">
                  내용보기
                </button>
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
                취소
              </button>
              <button
                type="submit"
                class="c-btn c-btn-danger"
                @click="$emit('close')"
              >
                신청완료
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
