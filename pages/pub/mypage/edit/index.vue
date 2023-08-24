<script setup>
import SnbPc from "../_snbpc.vue";
import SnbTablet from "../_snbtablet.vue";
definePageMeta({
  layout: "mypage",
});
</script>
<template>
  <div class="mypage">
    <SnbTablet />
    <PubBreadCrumbs />
    <div class="mypage-recommend">
      <div class="mypage__wrap">
        <SnbPc />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <div class="c-text-title-lg">회원정보 변경</div>
            <div class="c-text-title-sub">
              <p>
                개인정보 보호를 위해 다시 한번<br class="c-mo" />
                비밀번호를 입력해주세요. <br />도움이 필요하실 땐 서울런
                고객센터
                <br class="c-mo" />
                (1533-0909)로 연락주세요!
              </p>
            </div>
          </div>
          <div class="mypage__contents-body">
            <div class="mypage__form-wrap">
              <div class="mypage__form">
                <form action="" class="needs-validation" novalidate>
                  <fieldset>
                    <div class="mypage__form-profile">
                      <a href="" class="mypage__form-profile-img">
                        <img src="@img/@temp/1.jpg" alt="프로필 이미지" />
                      </a>
                    </div>
                    <dl>
                      <dt>이름</dt>
                      <dd>김철수</dd>
                    </dl>
                    <dl class="type02">
                      <dt>가입일</dt>
                      <dd>
                        2023.01.02
                        <div class="mypage__form-profile-link">
                          <button
                            type="button"
                            class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                          >
                            서울시평생학습포털 학습이력 연동
                          </button>
                        </div>
                      </dd>
                    </dl>
                    <dl class="type02">
                      <dt>아이디</dt>
                      <dd>
                        test123132132
                        <!-- 230621 연동 추가 -->
                        <div class="mypage__form-profile-link">
                          <button
                            type="button"
                            class="c-btn c-btn-lg c-btn-outline-secondary"
                          >
                            <img src="@img/logo-naver.svg" alt="네이버 로고" />
                            네이버계정으로 연동
                          </button>
                          <button
                            type="button"
                            class="c-btn c-btn-lg c-btn-outline-secondary"
                          >
                            <img
                              src="@img/logo-kakao.svg"
                              alt="카카오톡 로고"
                            />
                            카카오계정으로 연동
                          </button>
                          <button
                            type="button"
                            class="c-btn c-btn-lg c-btn-outline-secondary"
                          >
                            <img
                              src="@img/logo-digital.svg"
                              alt="디지털원패스 로고"
                            />
                            디지털원패로 연동
                          </button>
                        </div>
                        <!-- 230621 연동 추가 -->
                      </dd>
                    </dl>
                    <dl>
                      <dt>비밀번호 변경</dt>
                      <dd>
                        <button
                          class="c-btn c-btn-primary c-btn-sm c-btn-primary"
                        >
                          비밀번호 변경
                        </button>
                      </dd>
                    </dl>
                    <dl>
                      <dt>주소</dt>
                      <dd>
                        22222<br />
                        서울특별시 강남구 강남구청 111로 1111<br />
                        3층 303호
                      </dd>
                    </dl>
                    <dl>
                      <dt>휴대폰 번호</dt>
                      <dd>010-8555-8989</dd>
                    </dl>
                    <dl>
                      <dt>이벤트 문자 수신 정보</dt>
                      <dd>수신</dd>
                    </dl>
                    <dl>
                      <dt>회원탈퇴</dt>
                      <dd>
                        <button
                          class="c-btn c-btn-primary c-btn-sm c-btn-primary"
                        >
                          탈퇴하기
                        </button>
                      </dd>
                    </dl>
                  </fieldset>
                  <div class="c-btn-group">
                    <button class="c-btn c-btn-lg c-btn-primary">
                      회원정보 수정
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="mypage__contents-body">
            <div class="mypage__form-wrap">
              <div class="mypage__form">
                <form action="" class="needs-validation" novalidate>
                  <fieldset>
                    <div class="mypage__form-profile">
                      <!-- 230621   mypage__form-profile-img--edit 클래스 추가-->
                      <a
                        href=""
                        class="mypage__form-profile-img mypage__form-profile-img--edit"
                      >
                        <!-- // 230621   mypage__form-profile-img--edit 클래스 추가-->
                        <img src="@img/@temp/1.jpg" alt="프로필 이미지" />
                      </a>
                    </div>
                    <div class="c-form-group">
                      <label for="name" class="c-form-label">이름</label>
                      <input
                        type="text"
                        id="name"
                        class="c-form-control"
                        value="김철수"
                        readonly
                      />
                    </div>
                    <div class="c-form-group">
                      <label for="joinDdate" class="c-form-label"
                        >가입일<span class="c-form-label__date"
                          >(2023-02-01 평생교육 포털 제공 동의)</span
                        ></label
                      >
                      <!-- 웹접근성 id 추가 -->
                      <input
                        type="text"
                        id="joinDdate"
                        class="c-form-control"
                        value="김철수"
                        readonly
                      />
                      <!--// 웹접근성 id 추가 -->
                    </div>
                    <div class="c-form-group">
                      <label for="identification" class="c-form-label"
                        >아이디</label
                      >
                      <input
                        type="text"
                        id="identification"
                        class="c-form-control"
                        value="김철수"
                        readonly
                      />
                    </div>
                    <div class="c-form-group">
                      <label for="emailAddress" class="c-form-label"
                        >이메일 주소</label
                      >
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
                        <button
                          class="c-btn c-btn-sm c-btn-sm--type02 c-btn-primary"
                        >
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
                        <p class="c-text-primary">05:00</p>
                        <button class="c-btn c-btn-sm c-btn-primary">
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
                        <p class="c-text-primary">
                          <img src="@img/ic-check.svg" alt="확인완료" />
                          확인완료
                        </p>
                        <button class="c-btn c-btn-sm c-btn-primary">
                          인증번호 확인
                        </button>
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
                          <button
                            class="c-btn c-btn-sm c-btn-sm--type02 c-btn-primary"
                          >
                            검색
                          </button>
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
                        <div class="c-form-label">휴대폰번호</div>
                        <div class="c-input-group">
                          <input
                            class="c-form-control"
                            type="text"
                            title="휴대폰 번호 국번"
                          />
                          -
                          <input
                            class="c-form-control"
                            type="text"
                            title="휴대폰 번호 앞자리"
                          />
                          -
                          <input
                            class="c-form-control"
                            type="text"
                            title="휴대폰 번호 뒷자리"
                          />
                          <button
                            class="c-btn c-btn-sm c-btn-sm--type02 c-btn-primary"
                          >
                            인증번호 발송
                          </button>
                        </div>
                        <p
                          class="c-text-caution c-text-caution--type02 c-text-primary"
                        >
                          인증번호 확인완료
                        </p>
                      </div>
                      <div class="c-form-group">
                        <div class="c-form-label">이벤트 문자 수신 정보</div>
                        <div class="c-form-check-group">
                          <div class="c-form-check">
                            <input
                              class="c-btn-check"
                              type="radio"
                              name="event"
                              id="eventYes"
                            />
                            <label
                              class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                              for="eventYes"
                              >수신</label
                            >
                          </div>
                          <div class="c-form-check">
                            <input
                              class="c-btn-check"
                              type="radio"
                              name="event"
                              id="eventNo"
                            />
                            <label
                              class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                              for="eventNo"
                              >미수신</label
                            >
                          </div>
                        </div>
                        <div class="c-text-caution">
                          서울형교육플랫폼서비스 이용회원은 학습정보, 운영에
                          대한 등의 정보는
                          <br />
                          문자/이메일 등으로 전송됩니다.
                        </div>
                      </div>
                    </div>
                    <div class="c-btn-group">
                      <button class="c-btn c-btn-lg c-btn-primary">취소</button>
                      <button class="c-btn c-btn-lg c-btn-primary">
                        수정 완료
                      </button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
