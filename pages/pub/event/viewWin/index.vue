<script setup>
definePageMeta({
  layout: "event",
});
</script>

<template>
  <div class="event">
    <!-- 20230307 추가 -->
    <PubBreadCrumbs />
    <!-- // 20230307 추가 -->
    <div class="event-view">
      <div class="event-view__title">
        <p>
          서울형교육플랫폼 연말 시상식 서울형교육플랫폼 연말
          시상식서울형교육플랫폼 연말 시상식 서울형교육플랫폼 연말
          시상식서울형교육플랫폼 연말 시상식 서울형교육플랫폼 연말
          시상식서울형교육플랫폼 연말 시상식 서울형교육플랫폼 연말
          시상식서울형교육플랫폼 연말 시상식 서울형교육플랫폼 연말
          시상식서울형교육플랫폼 연말 시상식 서울형교육플랫폼 연말
          시상식서울형교육플랫폼 연말 시상식 서울형교육플랫폼 연말
          시상식서울형교육플랫폼 연말 시상식 서울형교육플랫폼 연말
          시상식서울형교육플랫폼 연말 시상식 서울형교육플랫폼 연말
          시상식서울형교육플랫폼 연말 시상식 서울형교육플랫폼 연말
          시상식서울형교육플랫폼 연말 시상식 서울형교육플랫폼 연말
          시상식서울형교육플랫폼 연말 시상식 서울형교육플랫폼 연말
          시상식서울형교육플랫폼 연말 시상식 서울형교육플랫폼 연말
          시상식서울형교육플랫폼 연말 시상식 서울형교육플랫폼 연말
          시상식서울형교육플랫폼 연말 시상식 서울형교육플랫폼 연말
          시상식서울형교육플랫폼 연말 시상식 서울형교육플랫폼 연말
          시상식서울형교육플랫폼 연말 시상식 서울형교육플랫폼 연말 시상식
        </p>
        <span>2022.01.01 ~ 2022.12.31</span>
      </div>
      <!-- 20230308 수정. event-view__contents--win 클래스 삭제 -->
      <div class="event-view__contents">
        <div class="event-view__contents-head">
          <div class="c-form-group">
            <div class="c-form-label">첨부파일</div>
            <ul>
              <li>
                <a href="" class="c-badge c-badge-lg c-badge-light">
                  <p>서울런 학습수기 및 이미지 공모전 공고문(기간연장).hwp</p>
                </a>
              </li>
              <li>
                <a href="" class="c-badge c-badge-lg c-badge-light">
                  <p>서울런 학습수기 및 이미지 공모전 공고문(기간연장).hwp</p>
                </a>
              </li>
              <li>
                <a href="" class="c-badge c-badge-lg c-badge-light">
                  <p>서울런 학습수기 및 이미지 공모전 공고문(기간연장).hwp</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="event-view__contents-banner">
          <img src="@img/ch-event.svg" alt="1:1 문의하기 이미지" />
          <div class="event-view__contents-banner-text">
            <p>이벤트에 대해 궁금하신게 있으신가요?</p>
            <span
              >빠르고 정확하게 도움이 필요하실 땐 서울런 고객센터(1533-0909)로
              연락주세요!</span
            >
          </div>
          <button class="c-btn c-btn-sm c-btn-blue">1:1 문의하기</button>
        </div>

        <div class="event-view__contents-win">
          <h3>참여하고 싶은 <span>장소</span>를 선택해 주세요!</h3>
          <div class="c-form-group">
            <div class="c-form-check-group">
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="location"
                  id="location01"
                  checked
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="location01"
                  ><strong>서울시청 1층</strong></label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="location"
                  id="location02"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="location02"
                  ><strong>서울시청 서소문청사 3층 대강당</strong></label
                >
              </div>
            </div>
          </div>
          <!-- temp -->
          <br /><br /><br />
          <!-- temp -->
          <h3>
            축하드립니다!<br />
            <span>12월 신규가입 이벤트</span>에 당첨되셨습니다!
          </h3>
          <div class="c-form-group">
            <div class="event-view__contents-win-confirm">
              <ul>
                <li>
                  <div class="c-badge c-badge-lg">확인 01</div>
                  <strong>경품 선택 기한을 확인하세요.</strong>
                  <span>2023.01.15~2023.01.30</span>
                </li>
                <li>
                  <div class="c-badge c-badge-lg">확인 02</div>
                  <strong>경품 선택 기한을 확인하세요.</strong>
                  <span>2023.01.15~2023.01.30</span>
                  <a href="">회원정보 수정하기</a>
                </li>
                <li>
                  <div class="c-badge c-badge-lg">확인 03</div>
                  <strong>경품 선택 기한을 확인하세요.</strong>
                  <span
                    >회원정보에 있는 내용으로 경품이 발송됩니다.<br />
                    (실물 상품은 주소 / 기프티콘은 핸드폰 번호)</span
                  >
                  <a href="">1:1문의 바로가기</a>
                </li>
              </ul>
            </div>
            <div class="c-form-check-group">
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="eventWin"
                  id="eventWin01"
                  checked
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="eventWin01"
                  ><strong>뺴뺴로 세트</strong></label
                >
              </div>
              <!-- 230616 선택 완료 케이스 추가 label 안에 <span>선택 완료</span> -->
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="eventWin"
                  id="eventWin02"
                  disabled
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="eventWin02"
                  ><strong>이디야 상품권</strong> <span>선택 완료</span></label
                >
              </div>
              <!-- // 230616 선택 완료 케이스 추가 label 안에 <span>선택 완료</span> -->
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="eventWin"
                  id="eventWin03"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="eventWin03"
                  ><strong>유튜브 프리미엄</strong></label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="eventWin"
                  id="eventWin04"
                  disabled
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="eventWin04"
                  ><strong>백화점 상품권</strong></label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="eventWin"
                  id="eventWin05"
                  disabled
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="eventWin05"
                  ><strong>문화 상품권</strong></label
                >
              </div>
            </div>
          </div>
          <!-- 230616 경품선택기간 종료 텍스트 추가 -->
          <div class="event-view__text-end">
            경품 선택기한이 종료되었습니다. 고객센터에 문의해 주시길 바랍니다.
          </div>
          <!-- // 230616 경품선택기간 종료 텍스트 추가 -->

          <h3>
            축하드립니다!<br />
            <span>12월 신규가입 이벤트</span>에 당첨되셨습니다!
          </h3>
          <div class="c-form-group">
            <div class="event-view__contents-win-confirm">
              <ul>
                <li>
                  <div class="c-badge c-badge-lg">확인 01</div>
                  <strong>경품 선택 기한을 확인하세요.</strong>
                  <span>2023.01.15~2023.01.30</span>
                </li>
                <li>
                  <div class="c-badge c-badge-lg">확인 02</div>
                  <strong>경품 선택 기한을 확인하세요.</strong>
                  <span>2023.01.15~2023.01.30</span>
                  <a href="">회원정보 수정하기</a>
                </li>
              </ul>
            </div>
            <div class="c-form-check-group c-form-check-group-1st">
              <div class="c-form-check">
                <!-- 230616 1등 표시 추가 -->
                <div class="c-form-check-group-1st__text">1등</div>
                <!-- // 230616 1등 표시 추가 -->
                <input
                  class="c-btn-check"
                  type="radio"
                  name="eventWin"
                  id="eventWin01"
                  checked
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="eventWin01"
                  ><strong>뺴뺴로 세트</strong></label
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="c-btn-group">
        <button class="c-btn c-btn-lg c-btn-blue">
          <strong>목록으로</strong>
        </button>
      </div>

      <div class="c-btn-group">
        <button class="c-btn c-btn-lg c-btn-blue">
          <strong>목록으로</strong>
        </button>
        <button class="c-btn c-btn-lg c-btn-danger">
          <strong>선택하기</strong>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.event-view__contents {
  border: 0;
  padding-bottom: 0;
}

.c-btn-group {
  gap: 1.6rem;
}
</style>
