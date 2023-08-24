<script setup>
import "v-calendar/dist/style.css";

import { ref } from "vue";

const date = ref(new Date());
const mode = ref("date");
// const mode = ref("date2");
const date2 = ref(new Date());
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
          입시상담 지원서
          <button
            class="c-modals__head-close"
            type="submit"
            @click="$emit('close')"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <div class="c-modals__title">지원서를 작성해 주세요</div>
          <div class="c-form-group">
            <label for="name" class="c-form-label">학생명</label>
            <div class="c-input-group">
              <input
                id="name"
                class="c-form-control"
                type="text"
                placeholder="이름을 입력해주세요"
                required
              />
            </div>
          </div>
          <div class="c-form-group">
            <label class="c-form-label">주소</label>
            <div class="c-input-group c-input-group--disabled">
              <input
                class="c-form-control"
                type="text"
                placeholder="우편번호"
                title="우편번호"
                disabled
              />
              <button class="c-btn c-btn-sm c-btn-blue">검색</button>
            </div>
            <div class="c-input-group">
              <input
                class="c-form-control"
                type="text"
                placeholder=""
                title="주소"
                disabled
              />
            </div>
            <div class="c-input-group">
              <input
                class="c-form-control"
                type="text"
                placeholder="상세 주소 입력해주세요"
                title="상세주소"
              />
            </div>
          </div>
          <div class="c-form-group">
            <label for="subway" class="c-form-label">인근 지하철역</label>
            <div class="c-input-group">
              <input
                id="subway"
                class="c-form-control"
                type="text"
                placeholder="이름을 입력해주세요"
                required
              />
            </div>
          </div>
          <div class="c-form-group">
            <label for="day1" class="c-form-label">학습요일</label>
            <div class="c-form-check-group c-form-check-group--col4">
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="day"
                  id="day1"
                  checked
                  title="일요일"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="day1"
                  >일요일</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="day"
                  id="day2"
                  title="월요일"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="day2"
                  >월요일</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="day"
                  id="day3"
                  title="화요일"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="day3"
                  >화요일</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="day"
                  id="day4"
                  title="수요일"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="day4"
                  >수요일</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="day"
                  id="day5"
                  title="목요일"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="day5"
                  >목요일</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="day"
                  id="day6"
                  title="금요일"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="day6"
                  >금요일</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="day"
                  id="day7"
                  title="토요일"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="day7"
                  >토요일</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="day"
                  id="day8"
                  title="상관없음"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="day8"
                  >상관없음</label
                >
              </div>
            </div>
          </div>
          <div class="c-form-group">
            <div class="c-form-label">상담 희망 시간</div>
            <div
              class="c-input-group c-input-group--calendar c-input-group--calendar--type02"
            >
              <DatePicker v-model="date" mode="time" :timezone="timezone">
                <template v-slot="{ inputValue, togglePopover }">
                  <input
                    class="c-input-time"
                    :value="inputValue"
                    readonly
                    @click="togglePopover()"
                    title="시작 시간"
                    placeholder="시작 시간"
                  />
                </template>
              </DatePicker>
              <DatePicker v-model="date2" mode="time" :timezone="timezone">
                <template v-slot="{ inputValue, togglePopover }">
                  <input
                    class="c-input-time"
                    :value="inputValue"
                    readonly
                    @click="togglePopover()"
                    title="종료 시간"
                    placeholder="종료 시간"
                  />
                </template>
              </DatePicker>
            </div>
          </div>
          <div class="c-form-group">
            <label class="c-form-label" for="phone">휴대폰 번호</label>
            <input
              id="phone"
              class="c-form-control"
              placeholder="휴대폰 번호를 입력해주세요"
            />
          </div>

          <div class="c-form-group">
            <label for="phone2" class="c-form-label">보호자 휴대폰 번호</label>
            <div class="c-input-group c-box--type02">
              <input
                id="phone2"
                class="c-form-control"
                placeholder="보호지 휴대폰 번호를 입력해주세요"
              />
            </div>
          </div>

          <div class="c-form-group">
            <label for="name" class="c-form-label">현재 학년</label>
            <div class="c-form-check-group c-form-check-group--col6">
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="grade"
                  id="grade00"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="grade00"
                  >초6</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="grade"
                  id="grade01"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="grade01"
                  >중 1~2</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="grade"
                  id="grade02"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="grade02"
                  >중3</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="grade"
                  id="grade03"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="grade03"
                  >고1</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="grade"
                  id="grade04"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="grade04"
                  >고2</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="grade"
                  id="grade05"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary column"
                  for="grade05"
                  >기타<span>(검정고시)</span></label
                >
              </div>
            </div>
          </div>

          <div class="c-modals__title">본인희망 지원 대학을 입력해주세요</div>
          <div class="c-form-group">
            <dl class="c-modals__survey-desire c-modals__survey-desire--type02">
              <dt>1지망</dt>
              <dd>
                <input
                  type="text"
                  class="c-form-control"
                  title="대학을 입력하세요"
                  placeholder="대학을 입력하세요"
                />
                <input
                  type="text"
                  class="c-form-control"
                  title="전형을 입력하세요"
                  placeholder="전형을 입력하세요"
                />
                <input
                  type="text"
                  class="c-form-control"
                  title="학과를 입력하세요"
                  placeholder="학과를 입력하세요"
                />
              </dd>
            </dl>
          </div>
          <div class="c-form-group">
            <dl class="c-modals__survey-desire c-modals__survey-desire--type02">
              <dt>2지망</dt>
              <dd>
                <input
                  type="text"
                  class="c-form-control"
                  title="대학을 입력하세요"
                  placeholder="대학을 입력하세요"
                />
                <input
                  type="text"
                  class="c-form-control"
                  title="전형을 입력하세요"
                  placeholder="전형을 입력하세요"
                />
                <input
                  type="text"
                  class="c-form-control"
                  title="학과를 입력하세요"
                  placeholder="학과를 입력하세요"
                />
              </dd>
            </dl>
          </div>
          <div class="c-form-group">
            <dl class="c-modals__survey-desire c-modals__survey-desire--type02">
              <dt>3지망</dt>
              <dd>
                <input
                  type="text"
                  class="c-form-control"
                  title="대학을 입력하세요"
                  placeholder="대학을 입력하세요"
                />
                <input
                  type="text"
                  class="c-form-control"
                  title="전형을 입력하세요"
                  placeholder="전형을 입력하세요"
                />
                <input
                  type="text"
                  class="c-form-control"
                  title="학과를 입력하세요"
                  placeholder="학과를 입력하세요"
                />
              </dd>
            </dl>
          </div>
          <div class="c-form-group">
            <dl class="c-modals__survey-desire c-modals__survey-desire--type02">
              <dt>4지망</dt>
              <dd>
                <input
                  type="text"
                  class="c-form-control"
                  title="대학을 입력하세요"
                  placeholder="대학을 입력하세요"
                />
                <input
                  type="text"
                  class="c-form-control"
                  title="전형을 입력하세요"
                  placeholder="전형을 입력하세요"
                />
                <input
                  type="text"
                  class="c-form-control"
                  title="학과를 입력하세요"
                  placeholder="학과를 입력하세요"
                />
              </dd>
            </dl>
          </div>
          <div class="c-form-group">
            <dl class="c-modals__survey-desire c-modals__survey-desire--type02">
              <dt>5지망</dt>
              <dd>
                <input
                  type="text"
                  class="c-form-control"
                  title="대학을 입력하세요"
                  placeholder="대학을 입력하세요"
                />
                <input
                  type="text"
                  class="c-form-control"
                  title="전형을 입력하세요"
                  placeholder="전형을 입력하세요"
                />
                <input
                  type="text"
                  class="c-form-control"
                  title="학과를 입력하세요"
                  placeholder="학과를 입력하세요"
                />
              </dd>
            </dl>
          </div>
          <div class="c-form-group">
            <dl class="c-modals__survey-desire c-modals__survey-desire--type02">
              <dt>6지망</dt>
              <dd>
                <input
                  type="text"
                  class="c-form-control"
                  title="대학을 입력하세요"
                  placeholder="대학을 입력하세요"
                />
                <input
                  type="text"
                  class="c-form-control"
                  title="전형을 입력하세요"
                  placeholder="전형을 입력하세요"
                />
                <input
                  type="text"
                  class="c-form-control"
                  title="학과를 입력하세요"
                  placeholder="학과를 입력하세요"
                />
              </dd>
            </dl>
          </div>
          <div class="c-form-group">
            <!-- 230613 name="textarea~" -> id="textarea~" 로 변경 -->
            <label for="textarea01" class="c-form-label"
              >그 외 상담 요청 내용</label
            >
            <textarea
              id="textarea01"
              class="c-form-control c-form-control-sm"
            ></textarea>
            <!-- 230613 name="textarea~" -> id="textarea~" 로 변경 -->
          </div>

          <div class="c-modals__button">
            <div class="c-btn-group">
              <button
                type="submit"
                class="c-btn c-btn-blue"
                @click="$emit('close')"
              >
                취소
              </button>
              <button
                type="submit"
                class="c-btn c-btn-danger"
                @click="$emit('close')"
              >
                작성완료
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
