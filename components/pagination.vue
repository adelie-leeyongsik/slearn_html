<script setup>
const emit = defineEmits(["changedPageIndex"]);

const p = defineProps({
  pageNumber: { default: 0 },
  totalRecords: { default: 0 },
  totalPages: { default: 0 },
});

const d = reactive({
  pageIndex: 1,
  first: 0,
  last: 0,
});

onMounted(() => {
  getPageList();
});

const getPageList = (idx = 1) => {
  d.pageIndex = idx;

  let pageCount = 10; //페이징에 나타낼 페이지 수

  let totalPage = Math.ceil(p.totalRecords / 10);

  if (totalPage < pageCount) {
    pageCount = totalPage;
  }

  let pageGroup = Math.ceil(d.pageIndex / pageCount); // 페이지 그룹
  d.last = pageGroup * pageCount; //화면에 보여질 마지막 페이지 번호

  if (d.last > totalPage) {
    d.last = totalPage;
  }

  d.first = d.last - (pageCount - 1); //화면에 보여질 첫번째 페이지 번호
};

const onClickNextPage = () => {
  // d.pageIndex = d.last + 1;
  onClickPageIndex(d.pageIndex + 1);
};

const onClickPrevPage = () => {
  // d.pageIndex = d.first - 1;
  onClickPageIndex(d.pageIndex - 1);
};

const onClickFisrtPage = () => {
  onClickPageIndex(1);
};

const onClickLastPage = () => {
  onClickPageIndex(p.totalPages);
};

const onClickPageIndex = (item) => {
  d.pageIndex = item;
  getPageList(item);
  emit("changedPageIndex", item - 1);
};

// watch(
//   () => p.pageNumber,
//   (newVal) => {
//     if (newVal > 0) {
//       getPageList(newVal);
//     }
//   }
// );

watch(
  () => p,
  () => getPageList(p.pageNumber + 1),
  { deep: true }
);
</script>

<template>
  <div class="c-pagination">
    <ul>
      <li class="c-pagination__item" v-if="d.first > 10">
        <a
          href="#"
          class="c-pagination__item-link c-pagination__item-link--first"
          @click="onClickFisrtPage"
        >
          처음으로</a
        >
      </li>
      <li class="c-pagination__item" v-if="d.first > 10">
        <a
          href="#"
          class="c-pagination__item-link c-pagination__item-link--prev"
          @click="onClickPrevPage"
          >이전</a
        >
      </li>

      <li
        v-for="item in p.totalPages"
        class="c-pagination__item"
        :class="{ active: item === d.pageIndex }"
      >
        <a
          href="#"
          class="c-pagination__item-link"
          @click="onClickPageIndex(item)"
          >{{ item }}</a
        >
      </li>
      <li class="c-pagination__item" v-if="d.last < p.totalPages">
        <a
          href="#"
          class="c-pagination__item-link c-pagination__item-link--next"
          @click="onClickNextPage()"
          >다음</a
        >
      </li>
      <li class="c-pagination__item" v-if="d.last < p.totalPages">
        <a
          href="#"
          class="c-pagination__item-link c-pagination__item-link--last"
          @click="onClickLastPage"
          >마지막으로</a
        >
      </li>
    </ul>
  </div>
</template>
