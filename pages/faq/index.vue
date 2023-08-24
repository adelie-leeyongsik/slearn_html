<script setup>
import { reactive } from "vue";
import { call } from "@/api";
definePageMeta({
  layout: "faq",
});

const r = useRoute();

const d = reactive({
  searchKeyword: r.query.search || "",
  dataList: null,
  tabList: [],
  tabIndex: 0,
});

onMounted(() => {
  handleClickTab();
});

const changeSearchText = (text) => {
  if (isEmpty(text) || isEmpty(d.searchKeyword)) {
    return text;
  }

  const textOnly = text.replace(/<[^>]+>/g, "");
  const regex = new RegExp(d.searchKeyword, "gi");
  const replacedText = textOnly.replace(regex, (match) => {
    return `<strong class='c-text-primary'>${match}</strong>`;
  });

  if (replacedText === "") {
    return text;
  }
  text.replaceAll(textOnly, replacedText);

  return replacedText;
};

const handleClickTab = async (searchKeyword) => {
  d.searchKeyword = searchKeyword;
  await call({
    id: "FAQ 리스트",
    endpoint: "/api/sq/board/faqs",
    data: { desc: d.searchKeyword },
    onResponse({ code, data }) {
      console.log("FAQ 리스트", data);
      d.dataList = data.rows;
      d.dataList.forEach((f) => {
        f.boards.open = false;
      });

      let arrTab = [];

      data.rows
        .map((m) => m.categoryName)
        .forEach((f, i) => {
          arrTab.push({ text: f, value: i + 1 });
        });

      arrTab.unshift({ text: "전체", value: 0 });

      d.tabList = arrTab;

      return true;
    },
  });
};

// const handleSubmitSearch = async () => {
// await getFaqList({ search: d.searchKeyword, category: "ALL" });
// };

const onClickMore = (idx) => {
  d.tabIndex = idx;
};
</script>

<template>
  <div class="faq">
    <PageTitle
      title="자주하는 질문"
      desc="해당 메뉴에 대한 자세한 안내 문구 영역입니다.<br /> 확인 부탁드립니다.감사합니다."
      isSearch="true"
      @onSearch="handleClickTab"
    ></PageTitle>
    <div class="faq__header">
      <TabNav
        :modelValue="d.tabIndex"
        :items="d.tabList"
        @update:modelValue="onClickMore"
      />
    </div>
    <div class="c-tab-contents__wrap">
      <template v-for="(tabTxt, tabIdx) in d.tabList">
        <div v-show="d.tabIndex == tabIdx" class="c-tab-contents">
          <div class="accordions">
            <template v-for="(list, index) in d.dataList" v-if="tabIdx == 0">
              <div class="faq-search__title">
                <p>
                  {{ list.categoryName }} <span>{{ list.boards.length }}</span>
                </p>
                <a href="#" @click.prevent="onClickMore(index + 1)">더보기</a>
              </div>
              <dl v-for="qnData in list.boards">
                <dt
                  v-on:click="qnData.open = !qnData.open"
                  :class="{ active: qnData.open }"
                >
                  <a href="javascript:void(0)">
                    <span>Q.</span>
                    <p v-html="changeSearchText(qnData.title)"></p>
                  </a>
                </dt>
                <dd v-if="qnData.open">
                  <span>A.</span>
                  <p v-html="changeSearchText(qnData.description)"></p>
                </dd>
              </dl>
            </template>
            <template v-for="list in d.dataList" v-else>
              <template v-if="tabTxt.text === list.categoryName">
                <template v-if="list.boards.length > 0">
                  <dl
                    v-for="qnData in list.boards"
                    v-if="list.categoryName === tabTxt.text"
                  >
                    <dt
                      v-on:click="qnData.open = !qnData.open"
                      :class="{ active: qnData.open }"
                    >
                      <a href="javascript:void(0)">
                        <span>Q.</span>
                        <p v-html="changeSearchText(qnData.title)"></p>
                      </a>
                    </dt>
                    <dd v-if="qnData.open">
                      <span>A.</span>
                      <p v-html="changeSearchText(qnData.description)"></p>
                    </dd>
                  </dl>
                </template>
                <template v-else>
                  <div class="faq-search__not-found">
                    <img
                      src="@img/ic-not-found.svg"
                      alt="일치하는 내용이 없습니다."
                    />
                    일치하는 내용이 없습니다<br />검색어를 다시 확인해 보세요
                  </div>
                </template>
              </template>
            </template>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep .c-input-group--search {
  width: 43.2rem;
  margin: 0 auto;
}
.c-tab-nav {
  margin-top: 2.4rem;
}
</style>
