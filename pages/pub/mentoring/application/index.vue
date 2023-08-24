<script setup>
definePageMeta({
  layout: "mentoring",
});
</script>
<template>
  <div class="mentoring mentoring--type02">
    <div class="mentoring-application">
      <div class="c-text-title-lg c-text-center">멘토 지원서</div>
      <form action="">
        <div class="mentoring-application__body">
          <h2 class="c-text-title-md">회원유형을 선택해주세요.</h2>
          <div class="c-form-group">
            <label for="name" class="c-form-label">이름</label>
            <!-- 웹접근성 title 추가 -->
            <input
              type="text"
              class="c-form-control"
              placeholder="이름을 입력해 주세요."
              title="이름"
            />
            <!--// 웹접근성 title 추가 -->
          </div>
          <div class="c-form-group">
            <label for="sex" class="c-form-label">학교급</label>
            <div class="c-form-check-group">
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="sex"
                  id="sex1"
                /><label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="sex1"
                  >남성</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="sex"
                  id="sex2"
                /><label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="sex2"
                  >여성</label
                >
              </div>
            </div>
          </div>
          <div class="c-form-group">
            <label for="birth" class="c-form-label">생년월일</label>
            <input
              class="c-input-calendar c-form-control w-100"
              id="birth"
              placeholder="연도-월-일"
            />
          </div>
          <div class="c-form-group">
            <label for="cellphone" class="c-form-label">휴대폰번호</label>
            <div class="c-input-group">
              <input
                id="cellphone"
                class="c-form-control"
                type="text"
                placeholder="'-'를 제외하고 입력해주세요."
              /><button class="c-btn c-btn-sm c-btn-sm--type02 c-btn-darkgray">
                인증번호 발송
              </button>
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
              <button class="c-btn c-btn-sm c-btn-darkgray">검색</button>
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
            <label for="emailAddress" class="c-form-label">이메일 주소</label>
            <div class="c-input-group c-input-group--email">
              <input
                id="emailAddress"
                class="c-form-control"
                type="text"
                placeholder="이메일 주소"
                title="이메일주소 입력"
              />
              <select
                name=""
                id=""
                title="이메일 도메인 입력"
                class="c-form-control"
              >
                <option value="">직접입력</option>
              </select>
            </div>
            <div class="c-input-group">
              <input
                id="emailAddress"
                class="c-form-control"
                type="text"
                placeholder="'-'를 제외하고 입력해주세요."
                value="naver.com"
                title="인증번호 입력"
              />
              <button class="c-btn c-btn-sm c-btn-sm--type02 c-btn-darkgray">
                인증번호 재발송
              </button>
            </div>
            <div class="c-input-group">
              <input
                id="emailAddress"
                class="c-form-control"
                type="text"
                placeholder="인증번호 6숫자를 입력해주세요."
                value="123456"
                maxlength="6"
                title="인증번호 입력"
              />
              <p class="c-text-danger">05:00</p>
              <button class="c-btn c-btn-sm c-btn-darkgray">
                인증번호 확인
              </button>
            </div>
            <div class="c-input-group">
              <input
                id="emailAddress"
                class="c-form-control"
                type="text"
                placeholder="인증번호 6숫자를 입력해주세요."
                value="123456"
                maxlength="6"
                title="인증번호 입력"
              />
              <p class="c-text-danger">
                <img src="@img/ic-check.svg" alt="확인완료" />
                확인완료
              </p>
              <button class="c-btn c-btn-sm c-btn-darkgray">
                인증번호 확인
              </button>
            </div>
          </div>
          <div class="c-form-group">
            <label for="category" class="c-form-label">지원 유형</label>
            <select id="category" class="c-form-control">
              <option value="">-</option>
            </select>
          </div>
          <div class="c-form-group">
            <div class="c-form-label">대학교 정보</div>
            <div class="c-input-group c-input-group--disabled">
              <input
                class="c-form-control"
                type="text"
                placeholder="대학교"
                title="대학교 정보"
                readonly
              />
              <button class="c-btn c-btn-sm c-btn-sm--type02 c-btn-darkgray">
                검색
              </button>
            </div>
            <div class="c-input-group">
              <input
                class="c-form-control"
                type="text"
                placeholder="전공을 입력하세요"
                title="인증번호 입력"
              />
            </div>
          </div>
          <div class="c-form-group">
            <label for="status" class="c-form-label">졸업 상태</label>
            <select id="status" class="c-form-control">
              <option value="">-</option>
            </select>
          </div>
          <div class="c-form-group">
            <label for="mentoring" class="c-form-label">멘토링 유형</label>
            <select id="mentoring" class="c-form-control">
              <option value="">-</option>
            </select>
            <select id="mentoring2" class="c-form-control" title="멘토링 유형2">
              <option value="">-</option>
            </select>
          </div>
          <div class="c-form-group">
            <label for="subject" class="c-form-label">지도 가능 과목</label>
            <div class="c-form-check-group c-form-check-group--col5">
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="subject"
                  id="subject01"
                  checked
                /><label
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
                /><label
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
                /><label
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
                /><label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="subject04"
                  >논술</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="subject"
                  id="subject05"
                /><label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="subject05"
                  >기타</label
                >
              </div>
            </div>
            <!-- 웹접근성 title 추가 -->
            <input
              type="text"
              class="c-form-control"
              placeholder="지도 가능한 과목 기타"
              title="지도 가능 과목 기타"
              readonly
            />
            <!--// 웹접근성 title 추가 -->
          </div>
          <div class="c-form-group">
            <label for="grade" class="c-form-label">지도 가능 학년</label>
            <div class="c-form-check-group c-form-check-group--col5">
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="grade"
                  id="grade01"
                  checked
                /><label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="grade01"
                  >초등</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="grade"
                  id="grade02"
                /><label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="grade02"
                  >중등</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="grade"
                  id="grade03"
                /><label
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
                /><label
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
                /><label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="grade05"
                  >고3</label
                >
              </div>
            </div>
          </div>
          <div class="c-form-group">
            <label for="Route" class="c-form-label">지원 경로</label>
            <div class="c-input-group c-input-group--email">
              <select
                name=""
                id="Route"
                title="지원경로 선택"
                class="c-form-control"
              >
                <option value="">선택</option>
              </select>
              <input
                class="c-form-control"
                type="text"
                placeholder="기타 경로 입력"
                title="지원경로 직접 입력"
                readonly
              />
            </div>
          </div>
          <div class="c-form-group">
            <div class="c-form-label-wrap">
              <label for="sex" class="c-form-label"
                >개인정보 수집 이용 동의</label
              >
              <a href="" class="c-form-label-btn">자세히 보기</a>
            </div>
            <div class="c-form-check-group">
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="agree1"
                  id="agree11"
                /><label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="agree11"
                  >동의함</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="agree1"
                  id="agree12"
                /><label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="agree12"
                  >동의안함</label
                >
              </div>
            </div>
          </div>
          <div class="c-form-group">
            <div class="c-form-label-wrap">
              <label for="sex" class="c-form-label">개인정보 사용 동의</label>
              <a href="" class="c-form-label-btn">자세히 보기</a>
            </div>
            <div class="c-form-check-group">
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="agree2"
                  id="agree21"
                /><label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="agree21"
                  >동의함</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="agree2"
                  id="agree22"
                /><label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="agree22"
                  >동의안함</label
                >
              </div>
            </div>
          </div>
        </div>
        <div class="mentoring-application__body">
          <h2 class="c-text-title-md">자기소개서를 입력해 주세요.</h2>
          <div class="c-form-group">
            <label for="introduction1" class="c-form-label">
              1. 서울런 멘토단에 지원한 동기는 무엇인가요?
            </label>
            <textarea class="c-form-control" id="introduction1"></textarea>
          </div>
          <div class="c-form-group">
            <label for="introduction2" class="c-form-label">
              2. 효과적인 멘토링을 위한 노하우 또는 아이디어를 서술해 주세요.
            </label>
            <textarea class="c-form-control" id="introduction2"></textarea>
          </div>
          <div class="c-form-group">
            <label for="introduction3" class="c-form-label">
              3. 청소년 관련 봉사(기타 활동) 경험이 있다면 그 경험과 느낀점을
              적어주세요.
            </label>
            <textarea class="c-form-control" id="introduction3"></textarea>
          </div>
          <div class="c-form-group">
            <label for="introduction4" class="c-form-label">
              4. 서울런 멘토단이 되면 어떻게 활동하고 싶은지 계획과 각오를
              적어주세요.
            </label>
            <textarea class="c-form-control" id="introduction4"></textarea>
          </div>
        </div>
        <div class="mentoring-application__foot">
          <div class="c-btn-group">
            <button class="c-btn c-btn-lg c-btn-inactive">지원하기</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mentoring-application {
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
  form {
    fieldset {
      &:first-child {
        .mentoring-application__body {
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
  textarea.c-form-control {
    margin-top: 0;
    height: 16rem;
  }
}
</style>
