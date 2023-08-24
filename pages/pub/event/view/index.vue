<script>
definePageMeta({
  layout: "event",
});
export default {
  data() {
    return {
      myReply: false,
    };
  },

  methods: {
    resize() {
      this.$refs.textArea.style.height = "1px";
      this.$refs.textArea.style.height =
        this.$refs.textArea.scrollHeight + 2 + "px";
    },
  },
};
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
      <div class="event-view__contents">
        <!-- 230307 추가 -->
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
        <!-- // 230307 추가 -->
        <div class="event-view__contents-img">
          <img src="@img/@temp/board_view_temp.png" alt="" />
        </div>
        <div class="event-view__contents-img event-view__contents-img--end">
          <img src="@img/@temp/board_view_temp.png" alt="" />
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
      </div>
      <div class="c-btn-group">
        <button class="c-btn c-btn-lg c-btn-danger">
          <strong>목록으로</strong>
        </button>
      </div>

      <PubComments />
      <PubPagination />
    </div>
  </div>
</template>
