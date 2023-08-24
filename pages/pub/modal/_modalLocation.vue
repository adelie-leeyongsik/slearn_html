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
      <div class="c-modal__inner">
        <div class="c-modal__title">일정/장소 변경 요청하기</div>
        <div class="c-modal__contents">
          <div class="c-modal__box">
            <dl>
              <dt>멘토</dt>
              <dd>토마토마토</dd>
            </dl>
            <dl>
              <dt>멘티</dt>
              <dd>박수정</dd>
            </dl>
            <dl>
              <dt>멘토링 예정일</dt>
              <dd>2023.1.15 12:00</dd>
            </dl>
            <dl>
              <dt>멘토링 주차</dt>
              <dd>3주차</dd>
            </dl>
          </div>
          <div class="c-form-group">
            <label for="title" class="c-form-label">신고사유</label>
            <div class="c-input-group">
              <input
                id="title"
                class="c-form-control"
                type="text"
                placeholder="재매칭 사유를 입력해주세요."
                required
              />
            </div>
          </div>
          <div class="c-form-group">
            <label for="title" class="c-form-label">멘토링 변경 일시</label>
            <div class="c-input-group c-input-group--date" data-v-1d1f2e92="">
              <input
                class="c-input-calendar"
                readonly=""
                title="기간별 조회 시작"
                data-v-1d1f2e92=""
              />
              <select
                name=""
                id=""
                title="이메일 도메인 입력"
                class="c-form-control"
                data-v-1d1f2e92=""
              >
                <option value="" data-v-1d1f2e92="">직접입력</option>
              </select>
            </div>
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
              등록
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
