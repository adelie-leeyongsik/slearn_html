<script setup>
import { call } from "@/api";
import { useModalStore } from "@/store";

definePageMeta({
  layout: "account",
});

const modal = useModalStore();

const p = defineProps({
  memberType: { type: String, default: "" },
});

const d = reactive({
  fileInfoList: [],
});

onMounted(() => {
  getFileInfo();
});

const getFileInfo = () => {
  call({
    method: "get",
    id: "회원가입 샘플파일 다운",
    endpoint: "/api/join/doc_template",
    data: {},
    onResponse({ data, status }) {
      d.fileInfoList = data;
    },
  });
};

const templeDownload = (txt) => {
  console.log("downloadPdf ", p.memberType);

  let seq = d.fileInfoList.filter(
    (f) => isEqual(f.memberJoinTypeCode, p.memberType) && isEqual(f.ext, txt)
  )[0].fdSeq;

  uFileDownload(seq);
};
</script>

<template>
  <div class="c-btn-group">
    <Button
      size="full"
      sizeType="small"
      class="c-btn-outline-secondary"
      @click="templeDownload('pdf')"
    >
      <template v-slot:before>
        <i class="ico ico-download">다운로드 이미지</i>
        샘플 다운로드 (PDF)
      </template>
    </Button>
    <Button
      size="full"
      sizeType="small"
      class="c-btn-outline-secondary"
      @click="templeDownload('hwp')"
    >
      <template v-slot:before>
        <i class="ico ico-download">다운로드 이미지</i>
        샘플 다운로드 (한글)
      </template>
    </Button>
  </div>
</template>
<style lang="scss" scoped></style>
