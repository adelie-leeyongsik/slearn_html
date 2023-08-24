<script setup>
import { DatePicker } from "v-calendar";
import "v-calendar/dist/style.css";
</script>

<script>
export default {
  props: {
    show: Boolean,
  },
  data() {
    return {
      date: new Date(),
      date2: new Date(),
    };
  },
};
</script>

<template>
  <Transition name="c-modals">
    <div class="c-modals" v-if="show">
      <div class="c-modals__bg" @click="$emit('close')"></div>
      <div class="c-modals__inner c-modals__inner--lg">
        <div class="c-modals__head">
          강의 계획서<button
            class="c-modals__head-close"
            type="submit"
            @click="$emit('close')"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <div class="c-modals__survey">
            <div class="c-modals__box">
              <dl>
                <dt>멘토</dt>
                <dd>토마토마토</dd>
              </dl>
              <dl>
                <dt>신청 과목</dt>
                <dd>박수정</dd>
              </dl>
              <dl>
                <dt>멘토링 총 회차</dt>
                <dd>16 회차</dd>
              </dl>
            </div>
            <div class="c-modals__survey-col">
              <div
                class="c-modals__survey-col-item c-modals__survey-col-item--half"
              >
                <div class="c-form-group">
                  <label for="name" class="c-form-label"
                    >멘토링 회당 학습시간</label
                  >
                  <div class="c-form-check-group c-form-check-group--col3">
                    <div class="c-form-check">
                      <input
                        class="c-btn-check"
                        type="radio"
                        name="time"
                        id="time01"
                      />
                      <label
                        class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                        for="time01"
                        >30분</label
                      >
                    </div>
                    <div class="c-form-check">
                      <input
                        class="c-btn-check"
                        type="radio"
                        name="time"
                        id="time02"
                      />
                      <label
                        class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                        for="time02"
                        >60분</label
                      >
                    </div>
                    <div class="c-form-check">
                      <input
                        class="c-btn-check"
                        type="radio"
                        name="time"
                        id="time03"
                        disabled
                      />
                      <label
                        class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                        for="time03"
                        >120분</label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="c-modals__survey-col">
              <div
                class="c-modals__survey-col-item c-modals__survey-col-item--type02"
              >
                <div class="c-form-group">
                  <label for="name" class="c-form-label">학습요일</label>
                  <div class="c-form-check-group c-form-check-group--col7">
                    <div class="c-form-check">
                      <input
                        class="c-btn-check"
                        type="checkbox"
                        name="time02"
                        id="time0200"
                      />
                      <label
                        class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                        for="time0200"
                        >일요일</label
                      >
                    </div>
                    <div class="c-form-check">
                      <input
                        class="c-btn-check"
                        type="checkbox"
                        name="time02"
                        id="time0201"
                      />
                      <label
                        class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                        for="time0201"
                        >월요일</label
                      >
                    </div>
                    <div class="c-form-check">
                      <input
                        class="c-btn-check"
                        type="checkbox"
                        name="time02"
                        id="time0202"
                      />
                      <label
                        class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                        for="time0202"
                        >화요일</label
                      >
                    </div>
                    <div class="c-form-check">
                      <input
                        class="c-btn-check"
                        type="checkbox"
                        name="time02"
                        id="time0203"
                        disabled
                      />
                      <label
                        class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                        for="time0203"
                        >수요일</label
                      >
                    </div>
                    <div class="c-form-check">
                      <input
                        class="c-btn-check"
                        type="checkbox"
                        name="time02"
                        id="time0204"
                        disabled
                      />
                      <label
                        class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                        for="time0204"
                        >목요일</label
                      >
                    </div>
                    <div class="c-form-check">
                      <input
                        class="c-btn-check"
                        type="checkbox"
                        name="time02"
                        id="time0205"
                        disabled
                      />
                      <label
                        class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                        for="time0205"
                        >금요일</label
                      >
                    </div>
                    <div class="c-form-check">
                      <input
                        class="c-btn-check"
                        type="checkbox"
                        name="time02"
                        id="time0206"
                        disabled
                      />
                      <label
                        class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                        for="time0206"
                        >토요일</label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="c-modals__survey-col">
              <div class="c-modals__survey-col-item">
                <div class="c-form-group">
                  <div class="c-form-label">
                    멘토링 시작일 및 멘토링 시작시간
                  </div>
                  <!-- 230710  c-input-group--calendar--type03 클래스 추가, -->
                  <div
                    class="c-input-group c-input-group--calendar c-input-group--calendar--type03"
                  >
                    <div>
                      <input
                        class="c-input-calendar"
                        readonly
                        title="기간별 조회 시작"
                      />
                    </div>
                    <!-- 230710 c-input-group--type02 클래스 추가 -->
                    <div class="c-input-group c-input-group--type02">
                      <select class="c-form-control">
                        <option value="">12시</option>
                      </select>
                      <select class="c-form-control">
                        <option value="">30분</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="c-form-group">
              <label for="purpose" class="c-form-label">학습목표</label>
              <input
                type="text"
                class="c-form-control"
                id="purpose"
                placeholder="텍스트를 입력하세요"
              />
            </div>
            <div class="c-form-group">
              <label for="diagnosis" class="c-form-label">학생진단</label>
              <input
                type="text"
                class="c-form-control"
                id="diagnosis"
                placeholder="텍스트를 입력하세요"
              />
            </div>
            <div class="c-form-group">
              <label for="composition" class="c-form-label">멘토링 구성</label>
              <input
                type="text"
                class="c-form-control"
                id="composition"
                placeholder="텍스트를 입력하세요"
              />
            </div>
            <div class="c-form-group">
              <label for="rule" class="c-form-label">활동 규칙</label>
              <input
                type="text"
                class="c-form-control"
                id="rule"
                placeholder="텍스트를 입력하세요"
              />
            </div>
            <div class="c-modals__button">
              <div class="c-btn-group">
                <button type="submit" class="c-btn c-btn-primary c-btn-sm">
                  커리큘럼 입력
                </button>
              </div>
            </div>
            <div class="c-modals__curriculum-title">1회차</div>
            <div class="c-modals__survey-col">
              <div class="c-modals__survey-col-item">
                <div class="c-form-group">
                  <div class="c-form-label">멘토링 일시</div>
                  <div class="c-input-group c-input-group--calendar">
                    <div>
                      <input
                        class="c-input-calendar"
                        readonly
                        title="멘토링 날짜"
                      />
                    </div>
                    <div>
                      <input
                        class="c-input-time"
                        readonly
                        title="멘토링 시간"
                      />
                    </div>
                  </div>
                </div>
                <div class="c-form-group">
                  <div class="c-form-label">커리큘럼</div>
                  <textarea class="c-form-control" title="커리큘럼"></textarea>
                </div>
              </div>
            </div>

            <div class="c-modals__curriculum-title">2회차</div>
            <div class="c-modals__survey-col">
              <div class="c-modals__survey-col-item">
                <div class="c-form-group">
                  <div class="c-form-label">멘토링 일시</div>
                  <div class="c-input-group c-input-group--calendar">
                    <div>
                      <input
                        class="c-input-calendar"
                        readonly
                        title="멘토링 날짜"
                      />
                    </div>
                    <div>
                      <input
                        class="c-input-time"
                        readonly
                        title="멘토링 시간"
                      />
                    </div>
                  </div>
                </div>
                <div class="c-form-group">
                  <div class="c-form-label">커리큘럼</div>
                  <textarea class="c-form-control" title="커리큘럼"></textarea>
                </div>
              </div>
            </div>

            <div class="c-modals__curriculum-title">16회차</div>
            <div class="c-modals__survey-col">
              <div class="c-modals__survey-col-item">
                <div class="c-form-group">
                  <div class="c-form-label">멘토링 일시</div>
                  <div class="c-input-group c-input-group--calendar">
                    <div>
                      <input
                        class="c-input-calendar"
                        readonly
                        title="멘토링 날짜"
                      />
                    </div>
                    <div>
                      <input
                        class="c-input-time"
                        readonly
                        title="멘토링 시간"
                      />
                    </div>
                  </div>
                </div>
                <div class="c-form-group">
                  <div class="c-form-label">커리큘럼</div>
                  <textarea class="c-form-control" title="커리큘럼"></textarea>
                </div>
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
                닫기
              </button>
              <button
                type="submit"
                class="c-btn c-btn-primary"
                @click="$emit('close')"
              >
                등록
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
