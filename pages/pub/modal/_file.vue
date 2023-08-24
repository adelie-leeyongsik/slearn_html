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
          증빙자료 첨부
          <button
            class="c-modals__head-close"
            type="submit"
            @click="$emit('close')"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <div class="c-modals__form">
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
          </div>
          <div class="c-modals__button">
            <div class="c-btn-group">
              <button
                type="submit"
                class="c-btn c-btn-blue"
                @click="$emit('close')"
              >
                닫기
              </button>
              <button
                type="submit"
                class="c-btn c-btn-danger"
                @click="$emit('close')"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
