<script setup>
import { call } from "@/api";
import { useModalStore } from "@/store";

definePageMeta({
  layout: "board",
});

const modal = useModalStore();

const route = useRoute();
const router = useRouter();

const d = reactive({
  pageNumber: 0,
  detail: {
    description: "",
    boardSeq: "",
    title: "",
    regDtm: "",
  },
  commentList: {},
  newComment: "",
});

onMounted(async () => {
  getData();
});

const handleClickList = () => {
  router.back();
};
const getData = async () => {
  await call({
    id: "성공스토리 조회",
    endpoint: `/api/sq/intro/success/story/detail`,
    data: {
      successStorySeq: route.params.id,
    },
    onResponse({ data }) {
      console.log("스토리>>>>>>", data);
      console.log(d.detail);
      d.detail = data;
      return true;
    },
  });
};
</script>
<template>
  <div class="board">
    <PubBreadCrumbs />
    <div class="board-view">
      <div class="board-view__title">
        <p>{{ d.detail.title }}</p>
        <!-- <span>{{ uConvertDate(d.detail.regDtm, "YYYY.MM.DD") }}</span> -->
      </div>
      <div class="board-view__contents">
        <!-- <div
          v-if="d.detail?.fileGrp?.length > 0"
          class="board-view__contents-head"
        >
          <div class="c-form-group">
            <div class="c-form-label">첨부파일</div>
            <ul>
              <li v-for="file in d.detail.fileGrp">
                <a :href="file" class="c-badge c-badge-lg c-badge-light">
                  <p>{{ file }}</p>
                </a>
              </li>
            </ul>
          </div>
        </div> -->
        <!-- temp -->
        <div
          class="board-view__contents-body"
          v-html="d.detail.description"
        ></div>
      </div>

      <div class="c-btn-group">
        <Button
          :onClick="handleClickList"
          size="auto"
          sizeType="large"
          text="목록으로"
        />
      </div>
      <!-- <Comments
        :data="d.commentList"
        :isFile="false"
        :isUrl="false"
        :isSecret="false"
        :boardSeq="Number(r.params.id)"
        @changedPageIndex="changedIndex"
      /> -->
    </div>
  </div>
</template>
