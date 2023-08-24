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
            다음 중 선호하는 이미지를 선택해주세요(<span class="c-text-danger"
              >1</span
            >/5)
          </div>
          <p>제시된 이미지 중 선호하는 이미지를 3개 선택해주세요</p>
          <div class="c-modals__interest-select">
            <ul class="c-modals__interest-select-img">
              <li><img src="@img/@temp/3.jpg" alt="" /></li>
              <li class="active">
                <img src="@img/@temp/3.jpg" alt="" />
              </li>
              <li><img src="@img/@temp/3.jpg" alt="" /></li>
              <li><img src="@img/@temp/3.jpg" alt="" /></li>
              <li><img src="@img/@temp/3.jpg" alt="" /></li>
              <li><img src="@img/@temp/3.jpg" alt="" /></li>
              <li><img src="@img/@temp/3.jpg" alt="" /></li>
              <li><img src="@img/@temp/3.jpg" alt="" /></li>
              <li><img src="@img/@temp/3.jpg" alt="" /></li>
              <li><img src="@img/@temp/3.jpg" alt="" /></li>
              <li><img src="@img/@temp/3.jpg" alt="" /></li>
            </ul>
          </div>

          <div class="c-modals__button">
            <!--  -->
            <div class="c-btn-group">
              <button
                type="submit"
                class="c-btn c-btn-danger"
                @click="$emit('close')"
              >
                다음
              </button>
            </div>
            <!--  -->
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
                다음
              </button>
            </div>
            <!--  -->
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
                제출
              </button>
            </div>
            <!--  -->
            <!--  -->
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
                완료
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
