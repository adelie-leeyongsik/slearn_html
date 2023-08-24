<script setup>
const { rows, totalPages, pageNumber, totalRecords } = defineProps({
  pageNumber: {
    type: Number,
  },
  totalPages: {
    type: Number,
  },
  totalRecords: {
    type: Number,
  },
  rows: {
    type: Array,
    default: () => [],
  },
});

const removeTag = (str = "") => {
  return str.replace(/<(?!br\s*\/?>)[^>]*>/gi, "");
};
</script>

<template>
  <CommonNodata
    :nodata="'등록된 이야기가 없습니다'"
    v-if="isEmpty(rows)"
  ></CommonNodata>
  <template v-else>
    <div class="c-card--inline">
      <nuxt-link
        :to="`/mentorings/detail?seq=${item.boardSeq}`"
        class="c-card c-card--border"
        v-for="(item, itemIdx) in rows"
        :key="`section-story-slide-${itemIdx}`"
      >
        <div class="c-card-img">
          <p>
            <img :src="item.imagePath" :alt="item.title" />
          </p>
        </div>
        <div class="c-card-body">
          <div class="c-card-title">
            <p>
              <strong> {{ item.title }} </strong>
            </p>
          </div>
          <div class="c-card-subtitle">
            <p
              v-html="
                removeTag(
                  isEmpty(item.blockquote) ? item.description : item.blockquote
                )
              "
            ></p>
          </div>
        </div>
      </nuxt-link>
    </div>
    <Pagination v-bind="{ totalPages, pageNumber, totalRecords }" />
  </template>
</template>
