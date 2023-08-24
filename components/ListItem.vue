<script setup>
const p = defineProps({
  // lecture, event
  type: { default: null },
  styleType: { default: null },
  item: {
    default: {
      state: null,
      tag: null,
      to: null,
      thumb: null,
      title: null,
      date: null,
    },
  },
});
</script>
<template>
  <div class="c-card" :class="{ 'c-card--border': p.type === 'event' }">
    <div class="c-card-img">
      <router-link :to="item.to">
        <img :src="uImage(item.thumb)" alt="썸네일 이미지" />
        <div v-if="item.tag" class="c-badge">{{ item.tag }}</div>
      </router-link>
    </div>
    <div class="c-card-body">
      <div
        class="c-card-title"
        :class="{ 'c-card-title--sm': p.type === 'lecture' }"
      >
        <router-link :to="item.to">
          <strong>{{ item.title }}</strong>
        </router-link>
      </div>
      <div v-if="p.type === 'lecture'" class="c-card-subtitle">
        <dl>
          <dt>카테고리</dt>
          <dd>문화예술</dd>
        </dl>
        <dl>
          <dt>제공처</dt>
          <dd>서울시</dd>
        </dl>
      </div>
      <div v-if="p.type === 'event'" class="c-card-foot">
        {{ item.date }}
      </div>
      <div v-else-if="p.type === 'lecture'" class="c-card-foot">
        <dl>
          <dt>마지막 조회일</dt>
          <dd>{{ item.lastView }}</dd>
        </dl>
      </div>
    </div>
  </div>
</template>
