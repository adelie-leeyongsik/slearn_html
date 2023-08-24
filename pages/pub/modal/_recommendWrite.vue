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
      <div class="c-modals__inner scroll">
        <div class="c-modals__head">
          멘토링 신청하기
          <button
            class="c-modals__head-close"
            type="submit"
            @click="$emit('close')"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <div class="c-modals__title">
            학습 달성도에 따라 뱃지가 수여됩니다.
          </div>
          <p>달성 뱃지는 매월 갱신됩니다.</p>
          <!-- 230710 추천경로 삭제 -->
          <div class="c-form-group">
            <div class="c-form-label">대분류/소분류</div>
            <div class="c-input-group c-input-group--type02">
              <select class="c-form-control c-form-control-sm" title="대분류">
                <option value="">유튜브</option>
              </select>
              <select class="c-form-control c-form-control-sm" title="소분류">
                <option value="">유튜브</option>
              </select>
            </div>
          </div>
          <div class="c-form-group">
            <label for="file" class="c-form-label">썸네일</label>
            <div class="c-input-group">
              <input
                id="file"
                class="c-form-control"
                type="text"
                placeholder="썸네일을 등록해주세요."
              />
              <button class="c-btn c-btn-sm c-btn-blue">파일첨부</button>
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
            <div class="c-text-caution">jpg, jpeg, png 형식의 1mb이하 파일</div>
          </div>
          <div class="c-form-group">
            <label for="route02" class="c-form-label">경로</label>
            <input
              type="text"
              class="c-form-control"
              id="route02"
              placeholder="추천하실 강좌의 URL"
            />
            <div class="c-text-caution">추천하실 강좌의 URL을 입력해주세요</div>
          </div>
          <div class="c-form-group">
            <label for="route03" class="c-form-label">추천경로</label>
            <textarea
              id="route03"
              class="c-form-control c-form-control-sm"
              placeholder="추천사유 입력"
            ></textarea>
          </div>
          <div class="c-modals__button">
            <div class="c-btn-group">
              <button
                type="submit"
                class="c-btn c-btn-blue"
                @click="$emit('close')"
              >
                취소
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

<style lang="scss" scoped>
.c-form-control.etc {
  margin-top: 0.8rem;
}
</style>
