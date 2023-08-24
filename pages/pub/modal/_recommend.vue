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
          멘토 결석 신고
          <button
            class="c-modals__head-close"
            type="submit"
            @click="$emit('close')"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <div class="c-modals__title">추천해 주신 강의 내용입니다.</div>
          <section class="type02">
            <div class="c-modals__box">
              <dl class="type02">
                <dt>상태</dt>
                <dd><span class="c-text-danger">승인 완료</span></dd>
              </dl>
              <!-- 230710 추천경로 삭제 -->
              <dl class="type02">
                <dt>대분류</dt>
                <dd>인문</dd>
              </dl>
              <dl class="type02">
                <dt>중분류</dt>
                <dd>인문</dd>
              </dl>
              <dl class="type02">
                <dt>썸네일</dt>
                <dd>썸네일.jpg</dd>
              </dl>
              <dl class="type02">
                <dt>경로</dt>
                <dd>www.naver.com</dd>
              </dl>
              <dl class="type02">
                <dt>추천 사유</dt>
                <dd>
                  즐거운 강의 입니다. 괜찮아요~ 강추 너무 만족하고 좋아요. 믿고
                  보세요!
                </dd>
              </dl>
            </div>
          </section>
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
                수정
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
