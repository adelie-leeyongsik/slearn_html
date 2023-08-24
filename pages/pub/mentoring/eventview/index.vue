<script setup>
definePageMeta({
  layout: "mentoring",
});
</script>

<script>
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
  <div class="mentoring">
    <div class="mentoring-event__view">
      <div class="mentoring-event__view-title">
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
      <div class="mentoring-event__view-contents">
        <div class="mentoring-event__view-contents-img">
          <img src="@img/@temp/board_view_temp.png" alt="" />
        </div>
        <div
          class="mentoring-event__view-contents-img mentoring-event__view-contents-img--end"
        >
          <img src="@img/@temp/board_view_temp.png" alt="" />
        </div>
        <div class="mentoring-event__view-contents-banner">
          <img src="@img/ic-age-on.svg" alt="1:1 문의하기 이미지" />
          <p>이벤트에 대해 궁금하신게 있으신가요?</p>
          <button class="c-btn c-btn-sm c-btn-darkgray">1:1 문의하기</button>
        </div>
      </div>
      <div class="c-btn-group">
        <button class="c-btn c-btn-lg"><strong>목록으로</strong></button>
      </div>

      <PubComments />
    </div>
  </div>
</template>
