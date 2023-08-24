<script>
export default {
  props: {
    show: Boolean,
  },
};
</script>

<template>
  <Transition name="c-modals">
    <div class="c-modals c-modals--video" v-if="show">
      <div class="c-modals__bg" @click="$emit('close')"></div>
      <div class="c-modals__inner">
        <div class="c-modals__head">
          <button
            class="c-modals__head-close"
            type="submit"
            @click="$emit('close')"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__video-img">
          <!-- temp -->
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/dyzxL87I-5c"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <!-- //temp -->
        </div>
        <div class="c-modals__contents">
          <div class="c-form-label">강의 안내</div>
          <div class="c-modals__title c-text-left">
            김서울님은 서울런 자동 검증가입대상이 아닙니다.
          </div>

          <!-- 강의 목록 없을시 삭제 -->
          <div class="c-form-label title">강의 목록</div>
          <div class="c-modals__video-list">
            <div class="c-modals__video-list-item">
              <div class="c-modals__video-list-item-img">
                <!-- temp -->
                <!-- 230719 수정 이미지 추가 -->
                <img src="@img/@temp/1.jpg" alt="" />
                <!-- //temp -->
              </div>
              <div class="c-modals__video-list-item-text">
                <a href="">문선생의 강의 산책 이야기 - 행복한 생각하기</a>
                <span>07:28</span>
              </div>
            </div>
            <div class="c-modals__video-list-item">
              <div class="c-modals__video-list-item-img">
                <!-- temp -->
                <img src="@img/@temp/1.jpg" alt="" />
                <!-- //temp -->
              </div>
              <div class="c-modals__video-list-item-text">
                <a href="">문선생의 강의 산책 이야기 - 행복한 생각하기</a>
                <span>07:28</span>
              </div>
            </div>
            <div class="c-modals__video-list-item">
              <div class="c-modals__video-list-item-img">
                <!-- temp -->
                <img src="@img/@temp/1.jpg" alt="" />
                <!-- //temp -->
              </div>
              <div class="c-modals__video-list-item-text">
                <a href="">문선생의 강의 산책 이야기 - 행복한 생각하기</a>
                <span>07:28</span>
              </div>
            </div>
          </div>
          <!-- //강의 목록 없을시 삭제 -->
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.c-table {
  margin-top: 3rem;
  thead {
    tr {
      border: 0;
      border-radius: 0.8rem;
      th {
        color: #535353;
        background-color: #f4f5f9;
      }
    }
  }
  tbody {
    color: $black;
    strong {
      color: #ccc;
    }
  }
}
</style>
