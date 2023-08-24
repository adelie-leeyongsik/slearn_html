<script setup>
import { useModalStore } from "@/store";

const modal = useModalStore();
const fileUpload = ref();

const p = defineProps({
  modalKey: { type: String, default: null },
});

const d = reactive({
  fileList: [],
  title: "",
  content: "",
});

const handleClose = () => {
  modal.close(p.modalKey);
};

const handleConfirm = () => {
  modal.alert("@TEMP", "등록 API 호출", () => {
    handleClose();
  });
};

const onClickFileBtn = () => {
  fileUpload.value.click();
};

const onChangeFile = (e) => {
  d.fileList.push(e.target.files[0]);
  console.log(d.fileList[0]);
};

const onClickDelBtn = (idx) => {
  console.log("idx  ", idx);
  d.fileList.splice(idx, 1);
};
</script>

<template>
  <ModalContent :modalKey="p.modalKey">
    <div class="c-modal__title">파일 업로드</div>
    <div class="c-modal__contents">
      <div class="c-form-group">
        <Input
          v-model="d.title"
          label="제목"
          placeholder="제목을 입력해주세요."
        />
      </div>
      <div class="c-form-group">
        <div class="c-form-file-title">
          <label for="file" class="c-form-label">파일 첨부</label>
          <span class="c-text-danger">{{ d.fileList.length }}건 / 100MB</span>
        </div>
        <div class="c-input-group">
          <input
            ref="fileUpload"
            id="fileUpload"
            class="c-form-control"
            type="file"
            style="visibility: hidden"
            @change="onChangeFile"
          /><button
            class="c-btn c-btn-sm c-btn-darkgray"
            @click="onClickFileBtn"
          >
            파일 찾기
          </button>
        </div>
        <div v-for="(item, index) in d.fileList" class="c-form-file">
          <a href="#">{{ item.name }}</a
          ><button @click="onClickDelBtn(index)">
            <i class="ico ico-delete">삭제</i>
          </button>
        </div>
      </div>
      <div class="c-form-group">
        <textarea
          class="c-form-control"
          v-model="d.content"
          label="내용"
          placeholder="내용을 입력해주세요."
        ></textarea>
      </div>
    </div>
    <div class="c-modal__button">
      <div class="c-btn-group">
        <Button
          size="auto"
          styleType="darkgray"
          text="닫기"
          :onClick="handleClose"
        />
        <Button size="auto" text="등록하기" :onConfirm="handleConfirm" />
      </div>
    </div>
  </ModalContent>
</template>
