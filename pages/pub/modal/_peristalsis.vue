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
          평생교육 포털 연동
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
            서울런에서 평생교육 포털 <br />
            학습내용을 확인하실 수 있습니다.
          </div>
          <p>달성 뱃지는 매월 갱신됩니다.</p>
          <div class="c-form-group">
            <label for="title" class="c-form-label">평생교육 포털 아이디</label>
            <div class="c-input-group">
              <input
                id="title"
                class="c-form-control"
                type="text"
                placeholder="아이디를 입력해주세요"
                required
              />
            </div>
          </div>
          <div class="c-form-group">
            <label for="agree" class="c-form-label"
              >약관동의
              <!-- 230621 추가 -->
              <strong class="c-text-primary"
                >(반드시 약관의 내용을 확인해주세요)</strong
              ></label
            >
            <!-- // 230621 추가 -->
            <div class="c-form-check__box">
              <div class="c-form-check">
                <input
                  class="c-form-check-input"
                  type="checkbox"
                  name="exampleCheckbox01"
                  id="exampleCheckbox01-02"
                />
                <label class="c-form-check-label" for="exampleCheckbox01-02">
                  <!-- 230621 텍스트 수정 -->
                  개인정보 수집/이용에 관한 동의 (필수)
                  <!-- 230621 텍스트 수정 -->
                </label>
              </div>
              <button class="c-btn c-btn-text c-btn-text--line">
                내용보기
              </button>
            </div>
          </div>
          <div class="c-modals__button">
            <div class="c-btn-group">
              <!-- 230621 버튼 변경 -->
              <button
                type="submit"
                class="c-btn c-btn-primary"
                @click="$emit('close')"
              >
                취소
              </button>
              <button
                type="submit"
                class="c-btn c-btn-primary"
                @click="$emit('close')"
              >
                확인
              </button>
              <!-- // 230621 버튼 변경 -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
