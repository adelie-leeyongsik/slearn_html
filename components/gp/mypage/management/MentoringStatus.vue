<script setup>
const emit = defineEmits(["mentoringRequestHandler"]);

const { status } = defineProps({
  status: {
    type: String,
    required: true,
    validate: (v) =>
      ["AB", "RM", "AC", "MC"].includes(v.toString().toUpperCase()),
  },
});

const handleMentoringEvent = () => {
  emit("mentoringRequestHandler");
};
</script>

<template>
  <div class="mypage-management__info" v-if="status === 'AB'">
    <div class="c-text-title-lg">멘토링 신청 전이시네요?</div>
    <p>
      서울의 각 대학 멘토들이 대기하고 있어요.<br />간단한 설문 후 멘토링 신청이
      바로 가능하답니다.
    </p>
    <p>*궁금하신 사항은 고객센터(1533-0909)로 연락주시면 안내 드리겠습니다.</p>
    <div class="mypage-management__info-img">
      <img src="@img/ch-management.svg" alt="멘토링 신청 전 이미지" />
    </div>
    <div class="mypage-management__info-step">
      <ul>
        <li><span>1</span>멘토링신청 (설문)</li>
        <li><span>2</span>멘토 매칭</li>
        <li><span>3</span>멘토 확인</li>
        <li><span>4</span>멘토링 시작</li>
      </ul>
    </div>
    <div class="c-btn-group">
      <button
        type="button"
        class="c-btn c-btn-lg c-btn-danger"
        @click.prevent="handleMentoringEvent"
      >
        멘토링 신청
      </button>
    </div>
    <nuxt-link to="/mentorings" class="mypage-management__info-link"
      >멘토링 자세히 알아보기</nuxt-link
    >
  </div>

  <div class="mypage-management__info" v-else-if="status === 'AC'">
    <div class="c-text-title-lg">멘토링 신청완료!</div>
    <p>
      멘토링 신청이 완료 되어 매칭 중 입니다. <br />
      나와 가장 잘 맞는 멘토를 찾는 중입니다. <br />
      매칭이 완료되는대로 연락 드리겠습니다. 조금만 기다려주세요~
    </p>
    <p>*궁금하신 사항은 고객센터(1533-0909)로 연락주시면 안내 드리겠습니다.</p>
    <div class="mypage-management__info-img">
      <img src="@img/ch-management.svg" alt="멘토링 신청 전 이미지" />
    </div>
    <div class="c-btn-group">
      <nuxt-link to="/" class="c-btn c-btn-lg c-btn-danger">홈으로</nuxt-link>
    </div>
  </div>

  <div class="mypage-management__info" v-else-if="status === 'RM'">
    <div class="c-text-title-lg">멘토링 재매칭 중</div>
    <p>
      멘토링 신청이 완료 되어 매칭 중 입니다. <br />
      나와 가장 잘 맞는 멘토를 찾는 중입니다.<br />
      매칭이 완료되는대로 연락 드리겠습니다. 조금만 기다려주세요~
    </p>
    <p>*궁금하신 사항은 고객센터(1533-0909)로 연락주시면 안내 드리겠습니다.</p>
    <div class="mypage-management__info-img">
      <img src="@img/ch-management.svg" alt="멘토링 신청 전 이미지" />
    </div>
    <div class="c-btn-group">
      <nuxt-link to="/" class="c-btn c-btn-lg c-btn-danger">홈으로</nuxt-link>
    </div>
  </div>
</template>
