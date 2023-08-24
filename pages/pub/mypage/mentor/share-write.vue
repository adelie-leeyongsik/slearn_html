<script setup>
import SnbPc from "../_snbpc.vue";
import SnbTablet from "../_snbtablet.vue";
import { DatePicker } from "v-calendar";
import "v-calendar/dist/style.css";
definePageMeta({
  layout: "mypage",
});
</script>
<script>
export default {
  data() {
    return {
      date: new Date(),
      date2: new Date(),
    };
  },
};
</script>

<template>
  <div class="mypage">
    <SnbTablet />
    <PubBreadCrumbs />
    <div class="mypage-share__write">
      <div class="mypage__wrap">
        <SnbPc />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <div class="c-text-title-lg">멘토 공유방</div>
            <div class="c-text-title-sub">
              <p>
                서울런에서 제공하는 쿠폰 사용방법을<br class="c-mo" />
                자세히 알아보고 혜택을 누려보세요!
                <br />
                도움이 필요하실 땐 서울런 고객센터<br class="c-mo" />
                (1533-0909)로 연락주세요!
              </p>
              <button class="c-btn c-btn-sm c-btn-danger">글쓰기</button>
            </div>
          </div>
          <div class="mypage__contents-body">
            <div class="mypage__contents-write">
              <div class="c-text-caution__wrap">
                <div class="c-text-caution c-text-caution--type02">
                  <span class="c-text-danger">*</span> 표시는 필수
                  입력사항입니다.
                </div>
              </div>
              <form>
                <fieldset>
                  <div class="c-form-group">
                    <label for="title" class="c-form-label"
                      >제목 <span class="c-essential">*</span></label
                    >
                    <input
                      type="text"
                      class="c-form-control"
                      placeholder="제목을 입력해주세요."
                      id="title"
                    />
                  </div>
                  <div class="c-form-group">
                    <label for="contents" class="c-form-label"
                      >내용 <span class="c-essential">*</span></label
                    >
                    <textarea
                      class="c-form-control"
                      placeholder="내용을 입력해주세요."
                      id="contents"
                    ></textarea>
                  </div>
                  <div class="c-form-group">
                    <label for="contents" class="c-form-label">파일 첨부</label>
                    <div class="c-input-group">
                      <!-- 웹접근성 title 추가 -->
                      <input
                        id="file"
                        class="c-form-control"
                        type="text"
                        placeholder="파일 첨부해주세요."
                        title="파일 첨부"
                      />
                      <!--// 웹접근성 title 추가 -->
                      <button class="c-btn c-btn-sm c-btn-blue">
                        파일 선택
                      </button>
                    </div>
                    <div class="c-text-caution">
                      doc, docx, ppt, pptx, xls, xlsx, fdp, gif, jpg, jpeg, png,
                      bmp, mov,
                      <br />
                      mp4, avi, zip 형식으로 최대 10MB 첨부 가능
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
                  <div class="c-btn-group">
                    <button class="c-btn c-btn-lg c-btn-blue">취소하기</button>
                    <button class="c-btn c-btn-lg c-btn-inactive">
                      등록하기
                    </button>
                  </div>
                  <div class="c-btn-group">
                    <button class="c-btn c-btn-lg c-btn-blue">취소하기</button>
                    <button class="c-btn c-btn-lg c-btn-danger">
                      등록하기
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
</template>
