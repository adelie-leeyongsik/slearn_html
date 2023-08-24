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
          나의 관심사 찾기
          <button
            class="c-modals__head-close"
            type="submit"
            @click="$emit('close')"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <div class="c-modals__title">정책 정보에 관심이 있으신가요?</div>
          <p>
            평소에 궁금했던 지원사업이나 정책 정보와 관련된 키워드를 선택해
            주세요. (최대 2가지)
          </p>
          <div class="c-modals__interest-chips">
            <a href="" class="c-chips active"> # 공간 </a>
            <a href="" class="c-chips active"> # 주거 </a>
            <a href="" class="c-chips"> # 교육 </a> <br />
            <a href="" class="c-chips"> # 마음건강 </a>
            <a href="" class="c-chips"> # 신체건강 </a>
            <a href="" class="c-chips"> # 일자리 </a><br />
            <a href="" class="c-chips"> # 생활지원 </a>
            <a href="" class="c-chips"> # 진로 </a>
            <a href="" class="c-chips"> # 창업 </a>
            <a href="" class="c-chips"> # 문화/예술 </a><br />
            <a href="" class="c-chips"> # 커뮤니티 </a>
            <a href="" class="c-chips"> # 생활지원 </a>
            <a href="" class="c-chips"> # 대외활동 </a>
            <a href="" class="c-chips"> # 사회참여 </a>
          </div>

          <div class="c-modals__button">
            <div class="c-btn-group">
              <button
                type="submit"
                class="c-btn c-btn-blue"
                @click="$emit('close')"
              >
                이전
              </button>
              <button
                type="submit"
                class="c-btn c-btn-danger"
                @click="$emit('close')"
              >
                진단 시작
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
