<script setup>
import joinNav from "../_nav.vue";
definePageMeta({
  layout: "account",
});
</script>

<script>
export default {
  data() {
    return {
      filetype: true,
    };
  },
};
</script>
<template>
  <div class="account">
    <h1>회원가입</h1>
    <joinNav :active="1" />
    <div class="account__body">
      <div class="join">
        <h2 class="account__title">
          반드시 약관의 내용을<br />
          확인해주세요!
        </h2>
        <section>
          <div class="account__info">
            <dl>
              <dt>※ 소득 85% 이하 증명서류</dt>
              <dd>
                <ul>
                  <li>
                    <h6>1. 내용</h6>
                    내용
                  </li>
                  <li>
                    <h6>2. 내용</h6>
                    내용
                  </li>
                </ul>
                <div class="c-btn-group">
                  <button
                    class="c-btn c-btn-sm c-btn-block c-btn-outline-secondary"
                  >
                    <i class="ico ico-download"></i>
                    샘플 다운로드 (PDF)
                  </button>
                  <button
                    class="c-btn c-btn-sm c-btn-block c-btn-outline-secondary"
                  >
                    <i class="ico ico-download"></i>
                    샘플 다운로드 (한글)
                  </button>
                </div>
              </dd>
            </dl>
          </div>
          <div class="account__info">
            <dl>
              <dt>※ 증빙자료 제출 방법 안내</dt>
              <dd>
                <ul>
                  <li>
                    <h6>1. 파일 첨부</h6>
                    증빙자료 업로드
                  </li>
                  <li class="mb-0">
                    <h6>2. 별도 송부</h6>
                    문자 : 010-9712-9049 <br />
                    카톡 ID : seoullearn <br />
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
          <div class="c-form-group">
            <div class="c-form-label">증빙자료 첨부유형</div>
            <div class="c-form-check-group">
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="filetype"
                  id="filetype01"
                  checked
                  @click="filetype = true"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="filetype01"
                  >파일 첨부</label
                >
              </div>
              <div class="c-form-check">
                <input
                  class="c-btn-check"
                  type="radio"
                  name="filetype"
                  id="filetype02"
                />
                <label
                  class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                  for="filetype02"
                  @click="filetype = false"
                  >별도 송부</label
                >
              </div>
            </div>
          </div>
          <div class="c-form-group" v-if="filetype === true">
            <label for="file" class="c-form-label">증빙자료 첨부</label>
            <div class="c-input-group">
              <input
                id="file"
                class="c-form-control"
                type="text"
                placeholder="파일 첨부해주세요."
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
        </section>
      </div>
    </div>
    <div class="account__foot">
      <div class="c-btn-group">
        <!-- 웹접근성 div -> button 으로 변경 -->
        <button class="c-btn c-btn-primary c-btn-lg">이전</button>
        <button class="c-btn c-btn-inactive c-btn-lg">다음</button>
      </div>
      <div class="c-btn-group">
        <button class="c-btn c-btn-primary c-btn-lg">이전</button>
        <button class="c-btn c-btn-primary c-btn-lg">다음</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-input-group {
  .c-form-control::placeholder {
    font-weight: 700;
  }
}
.account__info {
  margin-top: 0;
}
</style>
