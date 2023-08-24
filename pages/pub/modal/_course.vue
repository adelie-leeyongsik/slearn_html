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
          진로 상담 신청서
          <button
            class="c-modals__head-close"
            type="submit"
            @click="$emit('close')"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <div class="c-modals__title">상담 정보를 입력해주세요.</div>
          <div class="c-modals__survey-col">
            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <label for="name" class="c-form-label">신청자명</label>
                <input
                  type="text"
                  id="name"
                  class="c-form-control"
                  placeholder="김철수"
                  disabled
                />
              </div>
            </div>

            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <label for="identity" class="c-form-label">서울런ID</label>
                <input
                  type="text"
                  id="identity"
                  class="c-form-control"
                  placeholder="asd1234"
                  disabled
                />
              </div>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <label for="identity" class="c-form-label"
                  >상담 희망일
                  <span>(신청일로부터 4주안의 일자를 선택해주세요)</span></label
                >
                <div class="c-input-group c-input-group--calendar">
                  <DatePicker v-model="startDate" :maxDate="endDate">
                    <template v-slot="{ inputValue, togglePopover }">
                      <input
                        class="c-input-calendar"
                        :value="inputValue"
                        readonly
                        @click="togglePopover()"
                        title="기간별 조회 시작"
                      />
                    </template>
                  </DatePicker>
                </div>
              </div>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <label for="address01" class="c-form-label"
                  >군/구<strong class="c-essential">(필수)</strong></label
                >
                <input type="text" id="address01" class="c-form-control" />
              </div>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <label for="address02" class="c-form-label"
                  >세부주소<strong class="c-essential">(필수)</strong></label
                >
                <input type="text" id="address02" class="c-form-control" />
              </div>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <label for="subway" class="c-form-label">인근 지하철역</label>
                <input type="text" id="subway" class="c-form-control" />
              </div>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div
              class="c-modals__survey-col-item c-modals__survey-col-item--type02"
            >
              <div class="c-form-group">
                <label for="name" class="c-form-label">학습요일</label>
                <div class="c-form-check-group c-form-check-group--col4">
                  <div class="c-form-check">
                    <input
                      class="c-btn-check"
                      type="checkbox"
                      name="day"
                      id="day00"
                    />
                    <label
                      class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                      for="day00"
                      >일요일</label
                    >
                  </div>
                  <div class="c-form-check">
                    <input
                      class="c-btn-check"
                      type="checkbox"
                      name="day"
                      id="day01"
                    />
                    <label
                      class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                      for="day01"
                      >월요일</label
                    >
                  </div>
                  <div class="c-form-check">
                    <input
                      class="c-btn-check"
                      type="checkbox"
                      name="day"
                      id="day02"
                    />
                    <label
                      class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                      for="day02"
                      >화요일</label
                    >
                  </div>
                  <div class="c-form-check">
                    <input
                      class="c-btn-check"
                      type="checkbox"
                      name="day"
                      id="day03"
                    />
                    <label
                      class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                      for="day03"
                      >수요일</label
                    >
                  </div>
                  <div class="c-form-check">
                    <input
                      class="c-btn-check"
                      type="checkbox"
                      name="day"
                      id="day04"
                    />
                    <label
                      class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                      for="day04"
                      >목요일</label
                    >
                  </div>
                  <div class="c-form-check">
                    <input
                      class="c-btn-check"
                      type="checkbox"
                      name="day"
                      id="day05"
                    />
                    <label
                      class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                      for="day05"
                      >금요일</label
                    >
                  </div>
                  <div class="c-form-check">
                    <input
                      class="c-btn-check"
                      type="checkbox"
                      name="day"
                      id="day06"
                    />
                    <label
                      class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                      for="day06"
                      >토요일</label
                    >
                  </div>
                  <div class="c-form-check">
                    <input
                      class="c-btn-check"
                      type="checkbox"
                      name="day"
                      id="day07"
                    />
                    <label
                      class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                      for="day07"
                      >상관없음</label
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
                <label for="name" class="c-form-label"
                  >상담 희망 시간<span
                    >(선택하신 상담은 확정 시간이 아닙니다. 희망 시간 확인 후
                    상담센터에서 연락드립니다)</span
                  ></label
                >
                <div class="c-form-check-group">
                  <div class="c-form-check">
                    <input
                      class="c-btn-check"
                      type="checkbox"
                      name="time"
                      id="time00"
                    />
                    <label
                      class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary c-text-left"
                      for="time00"
                      >09:00 ~ 12:00</label
                    >
                  </div>
                  <div class="c-form-check">
                    <input
                      class="c-btn-check"
                      type="checkbox"
                      name="time"
                      id="time01"
                    />
                    <label
                      class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary c-text-left"
                      for="time01"
                      >12:00 ~ 15:00</label
                    >
                  </div>
                  <div class="c-form-check">
                    <input
                      class="c-btn-check"
                      type="checkbox"
                      name="time"
                      id="time02"
                    />
                    <label
                      class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary c-text-left"
                      for="time02"
                      >15:00 ~ 18:00</label
                    >
                  </div>
                  <div class="c-form-check">
                    <input
                      class="c-btn-check"
                      type="checkbox"
                      name="time"
                      id="time03"
                    />
                    <label
                      class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary c-text-left"
                      for="time03"
                      >18:00 ~ 20:00</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <label for="number" class="c-form-label">학부모 번호</label>
                <input
                  type="text"
                  id="number"
                  class="c-form-control"
                  placeholder=""
                />
              </div>
            </div>

            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <label for="number2" class="c-form-label">학생 번호</label>
                <input
                  type="text"
                  id="number2"
                  class="c-form-control"
                  placeholder=""
                />
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
            </div>
          </div>
          <div class="c-modals__title">상담 내용을 작성해 주세요</div>
          <div class="c-modals__survey-col">
            <div
              class="c-modals__survey-col-item c-modals__survey-col-item--type02"
            >
              <div class="c-form-group">
                <label for="textarea01" class="c-form-label"
                  >Q. 학습에 있어서 어떠한 도움을 받고 싶은가요?</label
                >
                <textarea
                  id="textarea01"
                  class="c-form-control c-form-control-sm"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div
              class="c-modals__survey-col-item c-modals__survey-col-item--type02"
            >
              <div class="c-form-group">
                <label for="textarea02" class="c-form-label"
                  >Q. 진학 방면에서 가장 고민이 되거나 궁금한 부분을 적어주세요.
                  받고 싶은가요?</label
                >
                <textarea
                  id="textarea02"
                  class="c-form-control c-form-control-sm"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div
              class="c-modals__survey-col-item c-modals__survey-col-item--type02"
            >
              <div class="c-form-group">
                <label for="textarea03" class="c-form-label"
                  >Q. 진로 방면에서 가장 고민이 되거나 궁금한 부분을 적어주세요
                  받고 싶은가요?</label
                >
                <textarea
                  id="textarea03"
                  class="c-form-control c-form-control-sm"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div
              class="c-modals__survey-col-item c-modals__survey-col-item--type02"
            >
              <div class="c-form-group">
                <label for="textarea04" class="c-form-label"
                  >Q. 생활 방면에서 가장 고민이 되거나 궁금한 부분을 적어주세요
                  받고 싶은가요?</label
                >
                <textarea
                  id="textarea04"
                  class="c-form-control c-form-control-sm"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div
              class="c-modals__survey-col-item c-modals__survey-col-item--type02"
            >
              <div class="c-form-group">
                <label for="textarea05" class="c-form-label"
                  >Q. 기타 고민이 되거나 궁금한 부분을 적어주세요 받고
                  싶은가요?</label
                >
                <textarea
                  id="textarea05"
                  class="c-form-control c-form-control-sm"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div
              class="c-modals__survey-col-item c-modals__survey-col-item--type04"
            >
              <div class="c-form-group">
                <label for="name" class="c-form-label">
                  Q. 가장 관심 분야를 체크해주세요 <span>(중복 3개 가능)</span>
                </label>
                <div class="c-form-check-group">
                  <div class="c-form-check">
                    <input
                      class="c-btn-check"
                      type="checkbox"
                      name="interest"
                      id="interest00"
                    />
                    <label
                      class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary c-text-left"
                      for="interest00"
                      >성적고민</label
                    >
                  </div>
                  <div class="c-form-check">
                    <input
                      class="c-btn-check"
                      type="checkbox"
                      name="interest"
                      id="interest01"
                    />
                    <label
                      class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary c-text-left"
                      for="interest01"
                      >학교생활(친구관계 등)</label
                    >
                  </div>
                  <div class="c-form-check">
                    <input
                      class="c-btn-check"
                      type="checkbox"
                      name="interest"
                      id="interest02"
                    />
                    <label
                      class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary c-text-left"
                      for="interest02"
                      >생기부활동</label
                    >
                  </div>
                  <div class="c-form-check">
                    <input
                      class="c-btn-check"
                      type="checkbox"
                      name="interest"
                      id="interest03"
                    />
                    <label
                      class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary c-text-left"
                      for="interest03"
                      >대입관련(구체적인 전공학과 및 방법)</label
                    >
                  </div>
                  <div class="c-form-check">
                    <input
                      class="c-btn-check"
                      type="checkbox"
                      name="interest"
                      id="interest04"
                    />
                    <label
                      class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary c-text-left"
                      for="interest04"
                      >진학목표(중등,고등)</label
                    >
                  </div>
                  <div class="c-form-check">
                    <input
                      class="c-btn-check"
                      type="checkbox"
                      name="interest"
                      id="interest05"
                    />
                    <label
                      class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary c-text-left"
                      for="interest05"
                      >가정환경 등 환경문제</label
                    >
                  </div>
                  <div class="c-form-check">
                    <input
                      class="c-btn-check"
                      type="checkbox"
                      name="interest"
                      id="interest06"
                    />
                    <label
                      class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary c-text-left"
                      for="interest06"
                      >본인의 관심사(진로.직업) 찾기</label
                    >
                  </div>
                  <div class="c-form-check">
                    <input
                      class="c-btn-check"
                      type="checkbox"
                      name="interest"
                      id="interest07"
                    />
                    <label
                      class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary c-text-left"
                      for="interest07"
                      >기타</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--  -->
          <div class="c-modals__title">
            본인이 희망하는 수시 지원 희망 대학을 적어주세요
          </div>
          <div class="c-modals__survey-col">
            <div
              class="c-modals__survey-col-item c-modals__survey-col-item--type04"
            >
              <div class="c-form-group">
                <div class="c-form-label">1지망</div>
                <div class="c-input-group c-input-group--type04">
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
                </div>
              </div>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div
              class="c-modals__survey-col-item c-modals__survey-col-item--type04"
            >
              <div class="c-form-group">
                <div class="c-form-label">2지망</div>
                <div class="c-input-group c-input-group--type04">
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
                </div>
              </div>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div
              class="c-modals__survey-col-item c-modals__survey-col-item--type04"
            >
              <div class="c-form-group">
                <div class="c-form-label">3지망</div>
                <div class="c-input-group c-input-group--type04">
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
                </div>
              </div>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div
              class="c-modals__survey-col-item c-modals__survey-col-item--type04"
            >
              <div class="c-form-group">
                <div class="c-form-label">4지망</div>
                <div class="c-input-group c-input-group--type04">
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
                </div>
              </div>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div
              class="c-modals__survey-col-item c-modals__survey-col-item--type04"
            >
              <div class="c-form-group">
                <div class="c-form-label">5지망</div>
                <div class="c-input-group c-input-group--type04">
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
                </div>
              </div>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <div class="c-form-label">6지망</div>
                <div class="c-input-group c-input-group--type04">
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
                </div>
              </div>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <label for="textarea01" class="c-form-label"
                  >그 외 상담 요청 내용</label
                >
                <textarea
                  id="textarea01"
                  class="c-form-control c-form-control-sm"
                ></textarea>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="c-modals__title">
            학교에서 권유하는 수시 지원 대학을 적어주세요
            <p>(학교 권유 해당없을 시 작성X)</p>
          </div>
          <div class="c-modals__survey-col">
            <div
              class="c-modals__survey-col-item c-modals__survey-col-item--type04"
            >
              <div class="c-form-group">
                <div class="c-form-label">1지망</div>
                <div class="c-input-group c-input-group--type04">
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
                </div>
              </div>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div
              class="c-modals__survey-col-item c-modals__survey-col-item--type04"
            >
              <div class="c-form-group">
                <div class="c-form-label">2지망</div>
                <div class="c-input-group c-input-group--type04">
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
                </div>
              </div>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div
              class="c-modals__survey-col-item c-modals__survey-col-item--type04"
            >
              <div class="c-form-group">
                <div class="c-form-label">3지망</div>
                <div class="c-input-group c-input-group--type04">
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
                </div>
              </div>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div
              class="c-modals__survey-col-item c-modals__survey-col-item--type04"
            >
              <div class="c-form-group">
                <div class="c-form-label">4지망</div>
                <div class="c-input-group c-input-group--type04">
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
                </div>
              </div>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div
              class="c-modals__survey-col-item c-modals__survey-col-item--type04"
            >
              <div class="c-form-group">
                <div class="c-form-label">5지망</div>
                <div class="c-input-group c-input-group--type04">
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
                </div>
              </div>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <div class="c-form-label">6지망</div>
                <div class="c-input-group c-input-group--type04">
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
                </div>
              </div>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <label for="textarea01" class="c-form-label"
                  >그 외 상담 요청 내용</label
                >
                <textarea
                  id="textarea01"
                  class="c-form-control c-form-control-sm"
                ></textarea>
              </div>
            </div>
          </div>
          <!--  -->

          <div class="c-modals__title">
            수시 지원 사항을 작성해주세요
            <p>(수시 지원했던 대학, 해당없을 경우 작성X)</p>
          </div>
          <div class="c-modals__survey-col">
            <div
              class="c-modals__survey-col-item c-modals__survey-col-item--type04"
            >
              <div class="c-form-group">
                <div class="c-form-label">1지망</div>
                <div class="c-input-group c-input-group--type04">
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
                </div>
              </div>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div
              class="c-modals__survey-col-item c-modals__survey-col-item--type04"
            >
              <div class="c-form-group">
                <div class="c-form-label">2지망</div>
                <div class="c-input-group c-input-group--type04">
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
                </div>
              </div>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div
              class="c-modals__survey-col-item c-modals__survey-col-item--type04"
            >
              <div class="c-form-group">
                <div class="c-form-label">3지망</div>
                <div class="c-input-group c-input-group--type04">
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
                </div>
              </div>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div
              class="c-modals__survey-col-item c-modals__survey-col-item--type04"
            >
              <div class="c-form-group">
                <div class="c-form-label">4지망</div>
                <div class="c-input-group c-input-group--type04">
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
                </div>
              </div>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div
              class="c-modals__survey-col-item c-modals__survey-col-item--type04"
            >
              <div class="c-form-group">
                <div class="c-form-label">5지망</div>
                <div class="c-input-group c-input-group--type04">
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
                </div>
              </div>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <div class="c-form-label">6지망</div>
                <div class="c-input-group c-input-group--type04">
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
                </div>
              </div>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <label for="textarea01" class="c-form-label"
                  >그 외 상담 요청 내용</label
                >
                <textarea
                  id="textarea01"
                  class="c-form-control c-form-control-sm"
                ></textarea>
              </div>
            </div>
          </div>

          <!--  -->
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
                class="c-btn c-btn-primary"
                @click="$emit('close')"
              >
                작성완료
              </button>
            </div>
          </div>
          <!--  -->
        </div>
      </div>
    </div>
  </Transition>
</template>
