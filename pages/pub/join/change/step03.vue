<script setup>
import joinNav from "../_navChange.vue";
import Modal from "../_modal.vue";
import Alert from "../_alert.vue";
import swiperItem from "../swiperItem";
definePageMeta({
  layout: "account",
});
</script>

<script>
export default {
  data() {
    return {
      school: "elementarySchool",
      showModal: false,
      showAlert: false,
    };
  },
};
</script>

<template>
  <div class="account">
    <h1>회원가입</h1>
    <joinNav :active="3" />
    <form action="">
      <div class="account__body">
        <legend>
          <h2 class="account__title">
            자격 검증 완료!<br />
            학습사이트를 신청해볼까요?
          </h2>
        </legend>
        <div class="c-form-group">
          <label for="name" class="c-form-label">학교급</label>
          <div class="c-form-check-group c-form-check-group--col3">
            <div class="c-form-check">
              <input
                class="c-btn-check"
                type="radio"
                name="school"
                id="elementarySchool"
                value="elementarySchool"
                v-model="school"
                checked
              />
              <!-- 230707 14세 미만 텍스트 삭제, column 클래스 삭제 -->
              <label
                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                for="elementarySchool"
                >초등학교</label
              >
            </div>
            <div class="c-form-check">
              <input
                class="c-btn-check"
                type="radio"
                name="school"
                id="middleSchool"
                value="middleSchool"
                v-model="school"
              />
              <label
                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                for="middleSchool"
                >중학교</label
              >
            </div>
            <div class="c-form-check">
              <input
                class="c-btn-check"
                type="radio"
                name="school"
                id="notCurriculum"
                value="notCurriculum"
                v-model="school"
              />
              <label
                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                for="notCurriculum"
                >비교과</label
              >
            </div>
          </div>
        </div>

        <section v-if="school === 'elementarySchool'">
          <div class="c-form-group">
            <label for="name" class="c-form-label">학년</label>
            <div class="c-form-check-group c-form-check-group--col4">
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="elementaryGrade"
                  id="elementaryGrade0"
                  checked
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="elementaryGrade0"
                  >예비초</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="elementaryGrade"
                  id="elementaryGrade1"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="elementaryGrade1"
                  >1학년</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="elementaryGrade"
                  id="elementaryGrade2"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="elementaryGrade2"
                  >2학년</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="elementaryGrade"
                  id="elementaryGrade3"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="elementaryGrade3"
                  >3학년</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="elementaryGrade"
                  id="elementaryGrade4"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="elementaryGrade4"
                  >4학년</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="elementaryGrade"
                  id="elementaryGrade5"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="elementaryGrade5"
                  >5학년</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="elementaryGrade"
                  id="elementaryGrade6"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="elementaryGrade6"
                  >6학년</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="elementaryGrade"
                  id="elementaryGradeEtc"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="elementaryGradeEtc"
                  >해당없음</label
                >
              </div>
            </div>
          </div>

          <div class="c-form-group">
            <div class="c-form-label__wrap">
              <label class="c-form-label">교과 학습사이트 신청</label>
              <div class="c-text-caution">
                <!-- 2307607 텍스트 수정 -->
                ※ 다양한 교과 학습사이트를 선택하여 주시기 바랍니다.
              </div>
            </div>
            <div class="c-form-radio c-form-radio--lg">
              <input
                type="radio"
                class="c-form-radio__input"
                id="onlyone"
                name="site"
                checked
              />
              <label for="onlyone" class="c-form-radio__label"></label>
              <div class="c-form-radio__contents">
                <img src="@img/logo-onlyone.png" alt="온니원 로고" />
                <div class="c-form-radio__contents-title">온리원</div>
                <dl>
                  <dt>별도기기:</dt>
                  <dd>지원</dd>
                </dl>
                <dl>
                  <dt>학습관리교사:</dt>
                  <dd>지원</dd>
                </dl>
                <div class="c-form-radio__contents-link">
                  <a href="">둘러보기 &gt;</a>
                </div>
              </div>
            </div>
            <div class="c-form-radio c-form-radio--lg">
              <input
                type="radio"
                class="c-form-radio__input"
                id="high"
                name="site"
                disabled
              />
              <label for="high" class="c-form-radio__label"></label>
              <div class="c-form-radio__contents">
                <img src="@img/logo-elihigh.png" alt="엘리하이 로고" />
                <div class="c-form-radio__contents-title">엘리하이</div>
                <dl>
                  <dt>별도기기:</dt>
                  <dd>지원</dd>
                </dl>
                <dl>
                  <dt>학습관리교사:</dt>
                  <dd>지원</dd>
                </dl>
                <div class="c-form-radio__contents-link">
                  <a href="">둘러보기 &gt;</a>
                </div>
              </div>
            </div>
            <div class="c-form-radio c-form-radio--lg">
              <input
                type="radio"
                class="c-form-radio__input"
                id="milkt"
                name="site"
              />
              <label for="milkt" class="c-form-radio__label"></label>
              <div class="c-form-radio__contents">
                <img
                  src="@img/logo-milkt-elementary.png"
                  alt="밀크T 초등 로고"
                />

                <div class="c-form-radio__contents-title">밀크T 초등</div>
                <dl>
                  <dt>별도기기:</dt>
                  <dd>지원</dd>
                </dl>
                <dl>
                  <dt>학습관리교사:</dt>
                  <dd>지원</dd>
                </dl>
                <div class="c-form-radio__contents-link">
                  <a href="">둘러보기 &gt;</a>
                </div>
              </div>
            </div>
          </div>

          <div class="c-form-group">
            <label class="c-form-label">(선택) 비교과 학습사이트 신청 </label>

            <label class="c-form-label c-form-label--sm">독서</label>
            <div class="c-form-check c-form-check--type02">
              <input
                type="checkbox"
                class="c-form-check-input"
                id="welaaa"
                checked
              />
              <label for="welaaa" class="c-form-checkbox-label">
                <img src="@img/logo-welaaa.png" alt="윌라 로고" />
                윌라</label
              >
            </div>
            <label class="c-form-label c-form-label--sm"> 전문강좌 </label>
            <div class="c-form-check c-form-check--type02">
              <input
                type="checkbox"
                class="c-form-check-input"
                id="eduwill"
                checked
              />
              <label for="eduwill" class="c-form-checkbox-label">
                <img src="@img/logo-eduwill.png" alt="에듀윌 로고" />
                에듀윌(자격증)</label
              >
            </div>
            <div class="c-form-check c-form-check--type02">
              <input
                type="checkbox"
                class="c-form-check-input"
                id="hackers"
                checked
              />
              <label for="hackers" class="c-form-checkbox-label">
                <img src="@img/logo-hackers.png" alt="해커스 로고" />
                해커스</label
              >
            </div>
            <div class="c-form-check c-form-check--type02">
              <input
                type="checkbox"
                class="c-form-check-input"
                id="enuma"
                checked
              />
              <label for="enuma" class="c-form-checkbox-label">
                <img src="@img/logo-enuma.png" alt="에누마 로고" />
                에누마</label
              >
            </div>
          </div>
        </section>

        <section v-if="school === 'middleSchool'">
          <div class="c-form-group">
            <label for="name" class="c-form-label">학년</label>
            <div class="c-form-check-group c-form-check-group--col4">
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="middleGrade"
                  id="middleGrade1"
                  checked
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="middleGrade1"
                  >1학년</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="middleGrade"
                  id="middleGrade2"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="middleGrade2"
                  >2학년</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="middleGrade"
                  id="middleGrade3"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="middleGrade3"
                  >3학년</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="middleGrade"
                  id="middleGradeEtc"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="middleGradeEtc"
                  >해당없음</label
                >
              </div>
            </div>
          </div>
          <div class="c-form-group">
            <div class="c-form-label__wrap">
              <label class="c-form-label">교과 학습사이트 신청</label>
              <div class="c-text-caution">
                ※ 다양한 교과 학습사이트를 선택하여 주시기 바랍니다.
              </div>
            </div>
            <div class="account__info">
              <div class="account__info-title">
                ※ 서울런 회원 가입 후
                <span class="c-text-danger"
                  >학습사이트 신청 시 쿠폰을 지급하여 무료로 수강 받으실 수
                  있습니다.</span
                >
              </div>
            </div>
            <div
              class="c-form-check c-form-check--type02 c-form-check--type02 c-form-check--type02-lg"
            >
              <input
                type="checkbox"
                class="c-form-check-input"
                id="onlyone"
                checked
              />
              <label for="onlyone" class="c-form-checkbox-label">
                <img src="@img/logo-onlyone.png" alt="온니원 로고" />
                <strong>온니원</strong>
                <a href="">바로가기 &gt;</a>
              </label>
            </div>
            <div
              class="c-form-check c-form-check--type02 c-form-check--type02-lg"
            >
              <input
                type="checkbox"
                class="c-form-check-input"
                id="mbest"
                checked
              />
              <label for="mbest" class="c-form-checkbox-label">
                <img src="@img/logo-mbest.png" alt="MBest 로고" />
                <strong>MBest</strong>
                <a href="">바로가기 &gt;</a></label
              >
            </div>
            <div
              class="c-form-check c-form-check--type02 c-form-check--type02-lg"
            >
              <input
                type="checkbox"
                class="c-form-check-input"
                id="mikt-middle"
              />
              <label for="mikt-middle" class="c-form-checkbox-label">
                <img src="@img/logo-mikt-middle.png" alt="밀크T 중학 로고" />
                <strong>밀크T 중등</strong>
                <a href="">바로가기 &gt;</a></label
              >
            </div>
            <div
              class="c-form-check c-form-check--type02 c-form-check--type02-lg"
            >
              <input type="checkbox" class="c-form-check-input" id="eduwill" />
              <label for="eduwill" class="c-form-checkbox-label">
                <img src="@img/logo-eduwill.png" alt="에듀윌 로고" />
                <strong>에듀윌 검정고시</strong>
                <a href="">바로가기 &gt;</a></label
              >
            </div>
            <div class="c-form-group">
              <div class="c-form-label">교과 학습사이트 신청(과목)</div>
              <div class="c-form-check-group c-form-check-group--col3">
                <div class="c-form-check">
                  <input
                    class="c-btn-check"
                    type="radio"
                    name="subject"
                    id="subject01"
                    value="subject01"
                    checked
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                    for="subject01"
                    >국어</label
                  >
                </div>
                <div class="c-form-check">
                  <input
                    class="c-btn-check"
                    type="radio"
                    name="subject"
                    id="subject02"
                    value="subject02"
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                    for="subject02"
                    >영어</label
                  >
                </div>
                <div class="c-form-check">
                  <input
                    class="c-btn-check"
                    type="radio"
                    name="subject"
                    id="subject03"
                    value="subject03"
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                    for="subject03"
                    >수학</label
                  >
                </div>
                <div class="c-form-check">
                  <input
                    class="c-btn-check"
                    type="radio"
                    name="subject"
                    id="subject04"
                    value="subject04"
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                    for="subject04"
                    >사회</label
                  >
                </div>
                <div class="c-form-check">
                  <input
                    class="c-btn-check"
                    type="radio"
                    name="subject"
                    id="subject05"
                    value="subject05"
                  />
                  <label
                    class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                    for="subject05"
                    >과학</label
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="c-form-group c-form-group__swiper">
            <div class="c-swiper__wrap">
              <div class="c-swiper">
                <div class="c-swiper__title">
                  단짝님에게 꼭 맞는 강좌를 추천!
                  <!-- 과목 선택시 -->
                  <!-- 단짝님에게 꼭 맞는 <span class="c-text-primary">온리원/국어</span> 강좌 추천! -->
                  <!-- // 과목 선택시 -->
                </div>
                <swiperItem />
              </div>
            </div>
          </div>
          <div class="c-form-group">
            <div class="c-form-label">비교과 학습사이트</div>
            <label class="c-form-label c-form-label--sm">독서</label>
            <div class="c-form-check c-form-check--type02">
              <input
                type="checkbox"
                class="c-form-check-input"
                id="welaaa"
                checked
              />
              <label for="welaaa" class="c-form-checkbox-label">
                <img src="@img/logo-welaaa.png" alt="윌라 로고" />
                윌라</label
              >
            </div>

            <label class="c-form-label c-form-label--sm"> 전문강좌 </label>
            <div class="c-form-check c-form-check--type02">
              <input
                type="checkbox"
                class="c-form-check-input"
                id="eduwill"
                checked
              />
              <label for="eduwill" class="c-form-checkbox-label">
                <img src="@img/logo-eduwill.png" alt="에듀윌 로고" />
                에듀윌
              </label>
            </div>
            <div class="c-form-check c-form-check--type02">
              <input
                type="checkbox"
                class="c-form-check-input"
                id="hackers"
                checked
              />
              <label for="hackers" class="c-form-checkbox-label">
                <img src="@img/logo-hackers.png" alt="해커스 로고" />
                해커스</label
              >
            </div>
          </div>
        </section>

        <section v-if="school === 'notCurriculum'">
          <div class="c-form-group">
            <label class="c-form-label">
              비교과 학습사이트 (최대 1개 선택가능)
            </label>
            <label class="c-form-label c-form-label--sm"> 전문강좌 </label>
            <div class="c-form-check c-form-check--type02">
              <input
                type="checkbox"
                class="c-form-check-input"
                id="eduwill"
                checked
              />
              <label for="eduwill" class="c-form-checkbox-label">
                <img src="@img/logo-eduwill.png" alt="에듀윌 로고" />
                에듀윌(자격증)</label
              >
            </div>
            <div class="c-form-check c-form-check--type02">
              <input
                type="checkbox"
                class="c-form-check-input"
                id="hackers"
                checked
              />
              <label for="hackers" class="c-form-checkbox-label">
                <img src="@img/logo-hackers.png" alt="해커스 로고" />
                해커스</label
              >
            </div>
            <label class="c-form-label c-form-label--sm">독서</label>
            <div class="c-form-check c-form-check--type02">
              <input
                type="checkbox"
                class="c-form-check-input"
                id="welaaa"
                checked
              />
              <label for="welaaa" class="c-form-checkbox-label">
                <img src="@img/logo-welaaa.png" alt="윌라 로고" />
                윌라</label
              >
            </div>
          </div>
          <div class="account__agree-wrap">
            <div class="account__agree">
              <div class="account__agree-title">‘에듀윌’ 약관동의</div>
              <dl>
                <dt>
                  <div class="c-form-check">
                    <input
                      class="c-form-check-input"
                      type="checkbox"
                      name="exampleCheckbox06"
                      id="exampleCheckbox06-01"
                      checked
                    />
                    <label
                      class="c-form-check-label"
                      for="exampleCheckbox06-01"
                    >
                      <strong>전체 동의</strong>
                    </label>
                  </div>
                </dt>
                <dd>
                  <ul>
                    <li>
                      <div class="c-form-check">
                        <input
                          class="c-form-check-input"
                          type="checkbox"
                          name="exampleCheckbox06"
                          id="exampleCheckbox06-02"
                        />
                        <label
                          class="c-form-check-label"
                          for="exampleCheckbox06-02"
                        >
                          이용약관에 관한 동의 (필수)
                        </label>
                      </div>
                      <a href="">내용보기</a>
                    </li>
                    <li>
                      <div class="c-form-check">
                        <input
                          class="c-form-check-input"
                          type="checkbox"
                          name="exampleCheckbox06"
                          id="exampleCheckbox06-03"
                        />
                        <label
                          class="c-form-check-label"
                          for="exampleCheckbox06-03"
                        >
                          개인정보 수집/이용에 관한 동의 (필수)
                        </label>
                      </div>
                      <a href="">내용보기</a>
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
          </div>
        </section>
      </div>

      <div class="account__foot">
        <div class="c-btn-group">
          <button class="c-btn c-btn-lg c-btn-blue">
            <strong>이전</strong>
          </button>
          <button class="c-btn c-btn-lg c-btn-inactive">
            <strong>회원가입 완료</strong>
          </button>
        </div>
      </div>
    </form>
  </div>
  <Modal :show="showModal" @close="showModal = false" />
  <Alert :show="showAlert" @close="showAlert = false" />
</template>

<style lang="scss" scoped>
.join {
  &__benefit {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 64rem;
    margin: 0 auto 3rem;
    padding: 2.7rem 9rem 2.8rem 7.9rem;
    background-color: $white;
    border-radius: 1.6rem;
    p {
      display: flex;
      align-items: center;
      strong {
        margin-left: 1.6rem;
        font-size: 1.6rem;
        color: $black;
      }
    }
    @include mobile {
      display: block;
      width: 100%;
      margin: 0;
      padding: 2.7rem 1.6rem 2.8rem 1.6rem;
      border-bottom: 1.6rem solid $light;
      border-radius: 0;
      .c-btn {
        width: 100%;
        //margin-top: 2rem;
      }
    }
  }
}
.account {
  &__body {
    margin-top: 3rem;
    .c-form-group {
      margin-top: 4rem;
    }
    @include mobile {
      margin-top: 0;
      padding: 6rem 1.6rem;
    }
    & + & {
      // 230203 수정
      @include mobile {
        border-top: 1.6rem solid $light;
      }
      // 230203 수정
    }
  }
  &__info {
    margin: 0 0 1.6rem;
  }
  form {
    fieldset {
      &:first-child {
        .account__body {
          margin-top: 0;
        }
      }
    }
  }
  .c-form-label--lg {
    margin-bottom: 1.6rem;
  }
  .c-form-check--type03 {
    margin-top: 0;
  }
}

.c-form-group-edu {
  margin-right: -9rem;
  overflow-x: auto;
  display: flex;
  gap: 0.8rem;
}
</style>
