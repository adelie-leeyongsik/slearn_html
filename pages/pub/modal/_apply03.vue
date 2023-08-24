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
          진로진학 보고서
          <button
            class="c-modals__head-close"
            type="submit"
            @click="$emit('close')"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <div class="c-modals__title">보고서 양식을 작성해 주세요</div>

          <div class="c-form-group">
            <label for="name" class="c-form-label">교사명</label>
            <div class="c-input-group c-input-group--type04">
              <input
                id="name"
                class="c-form-control"
                type="text"
                placeholder="이름을 입력해주세요"
                required
              />
              <select class="c-form-control" title="성별">
                <option value="">성별</option>
                <option value="">남</option>
                <option value="">여</option>
              </select>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <label for="birth" class="c-form-label">출생년도</label>
                <select id="birth" class="c-form-control">
                  <option value="">선택</option>
                </select>
              </div>
            </div>

            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <label for="phone" class="c-form-label">전화번호 뒷자리</label>
                <input
                  id="phone"
                  type="text"
                  class="c-form-control"
                  placeholder="전화번호 뒷자리를 입력해주세요"
                />
              </div>
            </div>
          </div>

          <div class="c-modals__survey-col">
            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <label for="time" class="c-form-label">누적 상담시간</label>
                <input
                  id="time"
                  type="text"
                  class="c-form-control"
                  placeholder="누적 상담시간을 입력해주세요"
                />
              </div>
            </div>

            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <label for="student" class="c-form-label">담당학생</label>
                <input
                  id="student"
                  type="text"
                  class="c-form-control"
                  placeholder="담당학생 이름을 입력해주세요"
                />
              </div>
            </div>
          </div>

          <div class="c-modals__title">학생정보</div>
          <div class="c-form-group">
            <label for="name2" class="c-form-label">학생명</label>
            <div class="c-input-group c-input-group--type04">
              <input
                id="name2"
                class="c-form-control"
                type="text"
                placeholder="이름을 입력해주세요"
                required
              />
              <select class="c-form-control" title="성별">
                <option value="">성별</option>
                <option value="">남</option>
                <option value="">여</option>
              </select>
            </div>
          </div>
          <div class="c-modals__survey-col">
            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <label for="birth" class="c-form-label">생년월일</label>
                <div class="c-input-group c-input-group--calendar">
                  <DatePicker v-model="date">
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

            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <label for="sort" class="c-form-label">서울런 가입구분</label>
                <select name="" id="sort" class="c-form-control">
                  <option value="">가입</option>
                </select>
              </div>
            </div>
          </div>
          <div class="c-form-group">
            <label class="c-form-label">주소</label>
            <div class="c-input-group">
              <input
                class="c-form-control"
                type="text"
                placeholder="04515 / 서울시 용산구"
                title="우편번호 / 주소"
                disabled
              />
            </div>
            <div class="c-input-group">
              <input
                class="c-form-control"
                type="text"
                placeholder="이촌동 고구마멘션 5"
                title="상세주소"
              />
            </div>
          </div>
          <div class="c-form-group">
            <label class="c-form-label" for="phone2">휴대폰 번호</label>
            <input id="phone2" class="c-form-control" value="010-1234-5678" />
          </div>
          <div class="c-modals__survey-col">
            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <label for="school" class="c-form-label">소속(학교급)</label>
                <input type="text" class="c-form-control" value="중학생" />
              </div>
            </div>

            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <label for="grade" class="c-form-label">학년(나이)</label>
                <input type="text" class="c-form-control" value="1학년" />
              </div>
            </div>
          </div>
          <!-- 230613 id="textarea~" -> id="textarea~" 로 변경 -->
          <div class="c-modals__title">진로진학 상담내용</div>
          <div class="c-form-group">
            <label for="textarea01" class="c-form-label">1. 학습</label>
            <textarea
              id="textarea01"
              class="c-form-control c-form-control-sm"
            ></textarea>
          </div>
          <div class="c-form-group">
            <label for="textarea02" class="c-form-label">2. 진학</label>
            <textarea
              id="textarea02"
              class="c-form-control c-form-control-sm"
            ></textarea>
          </div>
          <div class="c-form-group">
            <label for="textarea03" class="c-form-label">3. 진로</label>
            <textarea
              id="textarea03"
              class="c-form-control c-form-control-sm"
            ></textarea>
          </div>
          <div class="c-form-group">
            <label for="textarea04" class="c-form-label">4. 생활</label>
            <textarea
              id="textarea04"
              class="c-form-control c-form-control-sm"
            ></textarea>
          </div>
          <div class="c-form-group">
            <label for="textarea05" class="c-form-label">5. 기타</label>
            <textarea
              id="textarea05"
              class="c-form-control c-form-control-sm"
            ></textarea>
          </div>
          <div class="c-form-group">
            <label for="textarea06" class="c-form-label"
              >주요 상담 희망사항</label
            >
            <textarea
              id="textarea06"
              class="c-form-control c-form-control-sm"
            ></textarea>
          </div>
          <div class="c-form-group">
            <label for="textarea07" class="c-form-label"
              >사전검사 결과내용</label
            >
            <textarea
              id="textarea07"
              class="c-form-control c-form-control-sm"
            ></textarea>
          </div>
          <!-- 230613 id="textarea~" -> id="textarea~" 로 변경 -->
          <div class="c-modals__title">상담시간</div>
          <div class="c-modals__survey-col">
            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <label for="number" class="c-form-label">상담회차</label>
                <select id="number" class="c-form-control">
                  <option value="">선택</option>
                </select>
              </div>
            </div>
            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <div class="c-form-label">상담 날짜</div>
                <div
                  class="c-input-group c-input-group--calendar c-input-group--calendar--type02"
                >
                  <DatePicker v-model="date" trim-weeks>
                    <template v-slot="{ inputValue, togglePopover }">
                      <input
                        class="c-input-calendar"
                        :value="inputValue"
                        readonly
                        @click="togglePopover()"
                        title="시작 시간"
                        placeholder="시작 시간"
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
                <div class="c-form-label">상담 희망 시간</div>
                <div
                  class="c-input-group c-input-group--calendar c-input-group--calendar--type02"
                >
                  <DatePicker
                    v-model="date"
                    mode="time"
                    :timezone="timezone"
                    :rules="rules"
                  >
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
                </div>
              </div>
            </div>
            <div class="c-modals__survey-col-item">
              <div class="c-form-group">
                <label for="year" class="c-form-label">상담시간</label>
                <select id="year" class="c-form-control">
                  <option value="">선택</option>
                </select>
              </div>
            </div>
          </div>
          <div class="c-form-group">
            <label for="location" class="c-form-label"
              >상담 장소 (주소, 기관이름 등)</label
            >
            <div class="c-input-group c-input-group--type04">
              <select class="c-form-control" title="종류">
                <option>대면</option>
              </select>
              <input
                id="location"
                class="c-form-control"
                type="text"
                placeholder="상담 장소를 입력해주세요"
                required
              />
            </div>
          </div>
          <div class="c-form-group">
            <label for="teacher" class="c-form-label">상담교사</label>
            <input type="text" class="c-form-control" id="teacher" />
          </div>
          <div class="c-form-group">
            <label for="textarea08" class="c-form-label">상담 내용</label>
            <textarea
              id="textarea08"
              class="c-form-control c-form-control-sm"
            ></textarea>
          </div>
          <div class="c-form-group">
            <label for="etc" class="c-form-label"
              >서울 상담 준비 요청사항 등</label
            >
            <input type="text" class="c-form-control" id="etc" />
          </div>
          <div class="c-form-group">
            <label for="file" class="c-form-label">증빙자료 첨부</label>
            <div class="c-input-group">
              <!-- 230725 웹접근성 수정 title 추가 -->
              <input
                id="file"
                class="c-form-control"
                type="text"
                placeholder="파일 첨부해주세요."
                title="파일 첨부"
              />
              <button class="c-btn c-btn-sm c-btn-blue">파일 찾기</button>
            </div>
            <div class="c-form-file">
              <a href="">김철수_첨부파일 01.pdf</a>
              <button>
                <i class="ico ico-delete">삭제</i>
              </button>
            </div>
            <div class="c-form-file">
              <a href=""
                >김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일
                01.pdf</a
              >
              <button>
                <i class="ico ico-delete">삭제</i>
              </button>
            </div>
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
