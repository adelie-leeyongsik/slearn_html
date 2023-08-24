<script setup>
import { useModalStore, useLoginStore } from "@/store";

const modal = useModalStore();
const login = useLoginStore();

const fileUpload = ref();

const emit = defineEmits(["onFileInfo", "onDelFileInfo"]);

const p = defineProps({
  attachType: { type: Boolean, default: false },
  labelTitle: { type: String, default: "" },
  caution: { type: Boolean, default: false },
  dataList: { type: Array, default: [] },
  boardName: { type: String, default: "" },
});

const d = reactive({
  fileType: true,
  fileList: [],
  fileIndex: null,
  delFileSeq: null,
  delFileList: [],
  fileInfo: {},
  attachCode: "ATTACH_P001",
  attachCodeList: [
    { text: "파일 첨부", value: "ATTACH_P001", column: false },
    { text: "별도 송부", value: "ATTACH_P002", column: false },
  ],
});

onMounted(async () => {
  d.fileInfo = await uGetBoardInfo(p.boardName);
});

watch(
  () => p.dataList,
  (newData) => {
    if (!isEmpty(newData)) {
      d.fileList = newData;
    }
  },
  { immediate: true }
);
const checkFileValidation = (f) => {
  let fileSize = f.target.files[0].size;
  let maxSize = d.fileInfo.attaFileMaxSize * 1024 * 1024;

  if (fileSize > maxSize) {
    modal.alert(
      "알림",
      `첨부파일 사이즈는 ${d.fileInfo.attaFileMaxSize}MB 이내로 등록 가능합니다.`
    );
    return false;
  }

  let fileName = f.target.files[0].name;
  let extArr = d.fileInfo.attaFileUseExt.split(",");
  let fileExt = fileName.substr(fileName.lastIndexOf(".") + 1).toUpperCase();

  if (extArr.filter((f) => f === fileExt).length === 0) {
    modal.alert(
      "알림",
      "파일등록이 불가능한 확장자입니다. <br/> 파일을 확인 후 다시 시도해주시길 바랍니다."
    );
    return false;
  }

  if (d.fileList.length >= d.fileInfo.attaFileAllowCnt) {
    modal.alert(
      "알림",
      `파일은 ${d.fileInfo.attaFileAllowCnt}개 까지만 등록할 수 있습니다.`
    );
    return false;
  }
  return true;
};

const onChangeFile = (e) => {
  let result = checkFileValidation(e);

  if (result) {
    let file = e.target.files[0];

    if (d.fileList.length > 0) {
      let idx = d.fileList.map((m) => m.name).indexOf(file.name);

      if (idx != -1) {
        d.fileList.splice(idx, 1);
      }
    }

    d.fileList.push(file);
    emit("onFileInfo", d.fileList);
  } else {
    fileUpload.value.value = null;
  }
};

const onClickDelBtn = (idx, seq) => {
  d.fileIndex = idx;
  d.delFileSeq = seq;
  modal.confirm("알림", "파일을 삭제하시겠습니까?", fucConfirm);
};

const fucConfirm = () => {
  if (typeof d.delFileSeq != "undefined") {
    d.delFileList.push(d.delFileSeq);
    emit("onDelFileInfo", d.delFileList);
  }

  d.fileList.splice(d.fileIndex, 1);
};

const onChangeRadio = (val) => {
  d.fileType = isEqual(val, "ATTACH_P001") ? true : false;
  d.attachCode = val;
  login.joinAttachType = d.attachCode;
};

const onClickFile = () => {
  fileUpload.value.click();
};
</script>

<template>
  <div class="c-form-group" v-if="p.attachType">
    <div class="c-form-label">증빙자료 첨부유형</div>
    <Radio
      v-model="d.attachCode"
      :items="d.attachCodeList"
      @update:modelValue="onChangeRadio"
    />
  </div>
  <div class="c-form-group" v-if="d.fileType">
    <label for="file" class="c-form-label">{{ p.labelTitle }}</label>
    <div class="c-input-group" @click="onClickFile">
      <input
        class="c-form-control"
        type="text"
        placeholder="파일 첨부해주세요."
        id="file"
        title="파일 첨부"
        name="file"
        :readonly="true"
      />
      <input
        v-show="false"
        ref="fileUpload"
        id="fileUpload"
        title="파일 첨부"
        name="fileUpload"
        class="c-form-control"
        type="file"
        placeholder="파일 첨부해주세요."
        @change="onChangeFile"
      />
      <button class="c-btn c-btn-sm c-btn-blue">파일 찾기</button>
    </div>
    <div class="c-text-caution" v-if="p.caution">
      {{ d.fileInfo.attaFileUseExt }} 형식으로 최대
      {{ d.fileInfo.attaFileMaxSize }}MB 첨부 가능
    </div>
    <template v-if="d.fileList" v-for="(data, idx) in d.fileList">
      <div class="c-form-file">
        <a href="#">{{ data.name }}</a>
        <button @click="onClickDelBtn(idx, data.fileSeq)">
          <i class="ico ico-delete">삭제</i>
        </button>
      </div>
    </template>
  </div>
</template>
