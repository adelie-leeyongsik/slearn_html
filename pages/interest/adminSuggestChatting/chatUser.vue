<script setup>
definePageMeta({
  layout: "interest",
});

const p = defineProps({
  isNext01: { type: Boolean, default: false },
  isNext02: { type: Boolean, default: false },
});
</script>
<template>
  <div class="interest__chatting-item c-flex user">
    <div class="interest__chatting-message">
      <div class="c-message c-message--user">
        <div class="c-message--cont">
          <!--  type : {{ $route.query.type }}-->
          <p v-if="$route.query.type == '03'">
            요즘 트랜드가 궁금해 트랜드로<br />
            추천 해줘.
          </p>
          <p v-if="$route.query.type == '04'">
            멘토들이 추천한 콘텐츠가 궁금해.
          </p>
          <p v-if="$route.query.type == '05'">
            선배들의 추천한 콘텐츠가 궁금해
          </p>
          <p v-if="$route.query.type == '06'">
            힐링이 필요해~ 내 마음에 위안이 될<br />
            콘텐츠 추천이 필요해.
          </p>
        </div>
      </div>
    </div>

    <div class="interest__chatting-profile">
      <img src="@img/@temp/2.jpg" alt="사용자 프로필" />
    </div>
  </div>
</template>
