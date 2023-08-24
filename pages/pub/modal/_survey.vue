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
          타이틀<button
            class="c-modals__head-close"
            type="submit"
            @click="$emit('close')"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <div class="c-modals__survey">
            <!-- 230615 3개일경우 추가 -->
            <div class="c-modals__survey-col">
              <div class="c-modals__survey-col-item">
                <div class="c-form-group">
                  <label for="name" class="c-form-label">col3</label>
                  <!-- c-form-check-group--col3~7 클래스를 한줄에 몇개가 올지 정할수 있음. -->
                  <div class="c-form-check-group c-form-check-group--col3">
                    <div class="c-form-check">
                      <input
                        class="c-btn-check"
                        type="radio"
                        name="magnitude"
                        id="magnitude01"
                      />
                      <label
                        class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                        for="magnitude01"
                        >매우 잘함</label
                      >
                    </div>
                    <div class="c-form-check">
                      <input
                        class="c-btn-check"
                        type="radio"
                        name="magnitude"
                        id="magnitude02"
                      />
                      <!-- 2줄로 하고싶을경우 <br /> 태그 추가로 2줄 적용 -->
                      <label
                        class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                        for="magnitude02"
                        >잘함<br />잘함</label
                      >
                      <!-- 2줄로 하고싶을경우 <br /> 태그 추가로 2줄 적용 -->
                    </div>
                    <div class="c-form-check">
                      <input
                        class="c-btn-check"
                        type="radio"
                        name="magnitude"
                        id="magnitude03"
                      />
                      <!-- <label>에 column 추가후, <span>태그에는 괄호로 작은글씨 넣는 케이스. -->
                      <label
                        class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary column"
                        for="magnitude03"
                        >보통<span>(괄호있으면)</span></label
                      >
                      <!-- // <label>에 column 추가후, <span>태그에는 괄호로 작은글씨 넣는 케이스. -->
                    </div>
                    <div class="c-form-check">
                      <input
                        class="c-btn-check"
                        type="radio"
                        name="magnitude"
                        id="magnitude04"
                      />
                      <label
                        class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                        for="magnitude04"
                        >노력필요</label
                      >
                    </div>
                    <div class="c-form-check">
                      <input
                        class="c-btn-check"
                        type="radio"
                        name="magnitude"
                        id="magnitude05"
                      />
                      <label
                        class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                        for="magnitude05"
                        >매우노력필요</label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- // 230615 3개일경우 추가 -->
            <div class="c-modals__survey-col">
              <div class="c-modals__survey-col-item">
                <div class="c-form-group">
                  <label for="name" class="c-form-label">멘티명</label>
                  <input
                    id="name"
                    class="c-form-control"
                    type="text"
                    placeholder="김철수"
                    required
                    disabled
                  />
                </div>
              </div>
              <div class="c-modals__survey-col-item">
                <div class="c-form-group">
                  <label for="name" class="c-form-label">신청 과목</label>
                  <input
                    id="name"
                    class="c-form-control"
                    type="text"
                    placeholder="text"
                    required
                    disabled
                  />
                </div>
              </div>
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
              <div class="c-modals__survey-col-item">
                <div class="c-form-group">
                  <label for="name" class="c-form-label"
                    >학습진도 (성실성)</label
                  >
                  <div class="c-form-check-group c-form-check-group--col5">
                    <div class="c-form-check">
                      <input
                        class="c-btn-check"
                        type="radio"
                        name="magnitude"
                        id="magnitude01"
                      />
                      <label
                        class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                        for="magnitude01"
                        >매우 잘함</label
                      >
                    </div>
                    <div class="c-form-check">
                      <input
                        class="c-btn-check"
                        type="radio"
                        name="magnitude"
                        id="magnitude02"
                      />
                      <label
                        class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                        for="magnitude02"
                        >잘함</label
                      >
                    </div>
                    <div class="c-form-check">
                      <input
                        class="c-btn-check"
                        type="radio"
                        name="magnitude"
                        id="magnitude03"
                      />
                      <label
                        class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                        for="magnitude03"
                        >보통</label
                      >
                    </div>
                    <div class="c-form-check">
                      <input
                        class="c-btn-check"
                        type="radio"
                        name="magnitude"
                        id="magnitude04"
                      />
                      <label
                        class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                        for="magnitude04"
                        >노력필요</label
                      >
                    </div>
                    <div class="c-form-check">
                      <input
                        class="c-btn-check"
                        type="radio"
                        name="magnitude"
                        id="magnitude05"
                      />
                      <label
                        class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                        for="magnitude05"
                        >매우노력필요</label
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
              <div
                class="c-modals__survey-col-item c-modals__survey-col-item--type02"
              >
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
                        disabled
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
                        disabled
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
                        disabled
                      />
                      <label
                        class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary column"
                        for="grade05"
                        >기타<span>(검정고시 준비 등)</span></label
                      >
                    </div>
                    <div class="c-form-check">
                      <input
                        class="c-btn-check"
                        type="radio"
                        name="grade"
                        id="grade06"
                        disabled
                      />
                      <label
                        class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                        for="grade06"
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
                  <div class="c-input-group c-input-group--calendar">
                    <div>
                      <input
                        class="c-input-calendar"
                        readonly
                        title="기간별 조회 시작"
                      />
                      <div
                        class="vc-popover-content-wrapper"
                        placement="bottom-start"
                      ></div>
                    </div>
                    <div>
                      <input type="text" class="c-form-control" title="시간" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="c-modals__survey-col">
              <div class="c-modals__survey-col-item">
                <div class="c-form-group">
                  <label for="purpose" class="c-form-label">학습목표</label>
                  <input
                    type="text"
                    class="c-form-control"
                    id="purpose"
                    placeholder="텍스트를 입력하세요"
                  />
                </div>
              </div>
            </div>
            <div class="c-modals__survey-col">
              <div class="c-modals__survey-col-item">
                <div class="c-form-group">
                  <label for="curriculum" class="c-form-label">커리큘럼</label>
                  <textarea
                    class="c-form-control"
                    placeholder="텍스트를 입력하세요"
                    id="curriculum"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="c-modals__survey-col">
              <div class="c-modals__survey-col-item">
                <div class="c-form-group">
                  <div class="c-form-label">멘토링 수행리스트</div>
                  <div class="c-box c-box--gray">
                    1회차 2023-03-30 (목) 18:00~20:00 <br />
                    2회차 2023-04-03 (월) 18:00~20:00<br />
                    3회차 2023-03-30 (목) 18:00~20:00<br />
                    4회차 2023-04-03 (월) 18:00~20:00
                  </div>
                </div>
              </div>
            </div>
            <div class="c-modals__survey-col">
              <!-- c-modals__survey-col-item--half 클래스는 컬럼 2칸중 한칸만 내용 있을때 추가 부탁 드립니다. -->
              <div
                class="c-modals__survey-col-item c-modals__survey-col-item--half"
              >
                <div class="c-form-group">
                  <label for="name" class="c-form-label"
                    >학부모 동의 여부</label
                  >
                  <div class="c-form-check-group">
                    <div class="c-form-check">
                      <input
                        class="c-btn-check"
                        type="radio"
                        name="agree"
                        id="agree01"
                      />
                      <label
                        class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                        for="agree01"
                        >동의</label
                      >
                    </div>
                    <div class="c-form-check">
                      <input
                        class="c-btn-check"
                        type="radio"
                        name="agree"
                        id="agree02"
                      />
                      <label
                        class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                        for="agree02"
                        >비동의</label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="c-modals__survey-col">
              <div
                class="c-modals__survey-col-item c-modals__survey-col-item--half"
              >
                <div class="c-form-group">
                  <label for="select" class="c-form-label">셀렉트</label>
                  <select name="" id="select" class="c-form-control">
                    <option value="">111</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="c-modals__survey-line">구분선</div>
            <div class="c-modals__survey-col">
              <div class="c-modals__survey-col-item">
                <div class="c-form-group w-100">
                  <div class="c-form-label">
                    원하는 상담을 선택한 후 간단한 내용을 적어주세요
                    (중복선택가능)
                  </div>
                  <div class="c-form-check__box w-100">
                    <div class="c-form-check">
                      <input
                        class="c-form-check-input"
                        type="checkbox"
                        name="exampleCheckbox01"
                        id="exampleCheckbox01-02"
                      />
                      <label
                        class="c-form-check-label"
                        for="exampleCheckbox01-02"
                      >
                        학습에 있어서 도움을 받고 싶습니다.
                      </label>
                    </div>
                  </div>
                  <textarea
                    class="c-form-control"
                    title="상담내용"
                    disabled
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="c-modals__survey-col">
              <div class="c-form-group w-100">
                <div class="c-form-label">
                  원하는 상담을 선택한 후 간단한 내용을 적어주세요
                  (중복선택가능)
                </div>
                <div class="c-form-check__box w-100">
                  <div class="c-form-check">
                    <input
                      class="c-form-check-input"
                      type="checkbox"
                      name="exampleCheckbox01"
                      id="exampleCheckbox01-02"
                    />
                    <label
                      class="c-form-check-label"
                      for="exampleCheckbox01-02"
                    >
                      학습에 있어서 도움을 받고 싶습니다.
                    </label>
                  </div>
                </div>
                <textarea class="c-form-control" title="상담내용"></textarea>
              </div>
            </div>
            <div class="c-modals__survey-col">
              <div class="c-form-group w-100">
                <div class="c-form-label">
                  수시 지원 희망 대학을 적어주세요<br class="mo" />
                  (학교권유 해당 없을 시 작성X)
                </div>
                <dl class="c-modals__survey-desire">
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
            </div>
            <div class="c-modals__survey-col">
              <div class="c-form-group w-100">
                <dl class="c-modals__survey-desire">
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
            </div>
          </div>

          <div class="c-modals__survey-col">
            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <label for="etc" class="c-form-label"
                  >그 외 상담하고 시은 내용을 적어주세요</label
                >
                <textarea
                  class="c-form-control"
                  placeholder="텍스트를 입력하세요"
                  id="etc"
                ></textarea>
              </div>
            </div>
          </div>

          <!-- 230731 추가 -->
          <div class="c-modals__survey-col">
            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <div class="c-form-label">추천할 강의</div>
                <div class="c-input-group c-input-group--type05">
                  <input
                    type="text"
                    class="c-form-control c-form-control--sm"
                    disabled
                    title="CP사 이름"
                    placeholder="CP사 이름"
                  />
                  <input
                    type="text"
                    class="c-form-control"
                    title="추천강의명"
                    placeholder="추천할 강의 명을 입력해주세요"
                  />
                </div>
              </div>
            </div>
          </div>
          <!--// 230731 추가 -->

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
                등록
              </button>
            </div>
          </div>
          <div class="c-modals__button">
            <div class="c-btn-group">
              <button type="submit" class="c-btn c-btn-danger c-btn-sm">
                커리큘럼 입력
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
