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
          <div class="c-modals__title">
            이미지로 나도 몰랐던 선호 주제를 찾아봅니다.
          </div>
          <p>
            이미지 선택 선호 주제 설문이란?<br />
            사용자의 관심사를 선호하는 이미지와 매칭하여 추천을 위해 진행되는
            약식 설문입니다.
          </p>
          <div class="c-modals__interest">
            <div class="c-modals__interest-img">
              <img src="@img/ch-management.svg" alt="나의 관심사 찾기" />
            </div>
            <div class="c-modals__interest-text">
              <ul>
                <li>
                  <span>1</span>
                  <p>하단 시작 버튼을 눌러주세요.</p>
                </li>
                <li>
                  <span>2</span>
                  <p>선호하는 이미지를 선택해주세요.</p>
                </li>
                <li>
                  <span>3</span>
                  <p>AI 서울런에서 추천된 컨텐츠를 확인하세요</p>
                </li>
              </ul>
            </div>
          </div>

          <div class="c-modals__button">
            <div class="c-btn-group">
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
