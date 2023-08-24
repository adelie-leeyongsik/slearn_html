<script>
export default {
  props: {
    show: Boolean,
  },
};
</script>

<template>
  <Transition name="c-modal">
    <div class="c-modal" v-if="show">
      <div class="c-modal__bg" @click="$emit('close')"></div>
      <div class="c-modal__inner c-modal__inner--lg">
        <div class="c-modal__title">게시글 등록하기</div>
        <div class="c-modal__contents">
          <div class="c-form-group">
            <label for="title" class="c-form-label">제목</label>
            <div class="c-input-group">
              <input
                id="title"
                class="c-form-control"
                type="text"
                placeholder="주민번호 앞 6자리"
                maxlength="6"
                required
              />
            </div>
          </div>
          <div class="c-form-group">
            <div class="c-form-file-title">
              <label for="file" class="c-form-label">파일 첨부</label>
              <span class="c-text-danger">2건 / 100MB</span>
            </div>
            <div class="c-input-group">
              <!-- 230725 웹접근성 수정 title 추가 -->
              <input
                id="file"
                class="c-form-control"
                type="text"
                placeholder="파일 첨부해주세요."
                title="파일 첨부"
              /><button class="c-btn c-btn-sm c-btn-darkgray">파일 찾기</button>
            </div>
            <div class="c-form-file">
              <a href="">1.pdf</a
              ><button>
                <i class="ico ico-delete">삭제</i>
              </button>
            </div>
            <div class="c-form-file">
              <a href=""
                >11111111111111111111111111111111111111111111111111111111111111111111111111111111.pdf</a
              ><button>
                <i class="ico ico-delete">삭제</i>
              </button>
            </div>
          </div>
          <div class="c-form-group">
            <label for="contents" class="c-form-label">내용</label>
            <textarea
              class="c-form-control"
              id="contents"
              placeholder="내용을 입력해주세요."
            ></textarea>
          </div>
        </div>
        <div class="c-modal__button">
          <div class="c-btn-group">
            <button
              type="submit"
              class="c-btn c-btn-darkgray"
              @click="$emit('close')"
            >
              닫기
            </button>
            <button type="submit" class="c-btn" @click="$emit('close')">
              등록하기
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
