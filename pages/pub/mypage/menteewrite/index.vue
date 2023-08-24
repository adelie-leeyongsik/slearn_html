<script setup>
definePageMeta({
  layout: "mypage",
});
</script>
<template>
  <div class="mypage">
    <div class="mypage-write">
      <form>
        <fieldset>
          <div class="mypage__body">
            <legend>
              <h2 class="c-text-title-md">
                멘토들에게 공유하고 싶은<br />파일과 내용을 입력해주세요.
              </h2>
            </legend>
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
                <input
                  id="file"
                  class="c-form-control"
                  type="text"
                  placeholder="파일 첨부해주세요."
                /><button class="c-btn c-btn-sm c-btn-darkgray">
                  파일 찾기
                </button>
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
          <div class="mypage__foot">
            <div class="c-btn-group">
              <button class="c-btn c-btn-lg c-btn-darkgray">목록으로</button>
              <button class="c-btn c-btn-lg c-btn-inactive">등록하기</button>
            </div>
          </div>
          <div class="mypage__foot">
            <div class="c-btn-group">
              <button class="c-btn c-btn-lg c-btn-darkgray">목록으로</button>
              <button class="c-btn c-btn-lg c-btn-black">등록하기</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>
