<script setup>
const { push } = useRouter();
const {
  params: { segment },
  name,
} = useRoute();

const titleProps = computed(() => {
  return {
    title: segment === "share" ? "멘토 공유방" : "멘토 공지사항",
    desc:
      segment === "share"
        ? `
        서울런에서 제공하는 쿠폰 사용방법을<br class='c-mo' />
        자세히 알아보고 혜택을 누려보세요!
        <br />
        도움이 필요하실 땐 서울런 고객센터<br class='c-mo' />
        (1533-0909)로 연락주세요!"
    `
        : `
        멘토분들이 확인해야 할 필독 공지! <br />
        도움이 필요하실 땐 서울런 고객센터<br class='c-mo' />(1533-0909)로
        연락주세요!"
    `,
  };
});

const isTail = computed(
  () => segment === "share" && name === "mypage-community-board-list-segment"
);
</script>

<template>
  <MypageTitle v-bind="{ ...titleProps }">
    <template #tail v-if="isTail">
      <button
        type="button"
        class="c-btn c-btn-sm c-btn-danger"
        @click.prevent="push({ path: '/mypage/community/board/write/share' })"
      >
        글쓰기
      </button>
    </template>
  </MypageTitle>
</template>
