<script setup>
import { useModalStore } from "@/store";
import { call } from "@/api";

const modal = useModalStore();
const fileUpload = ref();

const emit = defineEmits(["close"]);

const p = defineProps({
  isShow: { type: Boolean, default: false },
});

const d = reactive({
  userId: uGetLoginInfo("userid"),
  bigCategory: "",
  bigCategoryList: [],
  midCategory: "",
  midCategoryList: [],
  fileList: [],
  fileIndex: "",
  delFileSeq: "",
  recommUrl: "",
  recommText: "",
  recommTitle: "",
});

onMounted(() => {
  if (!isEmpty(d.userId)) {
    getCategory();
  }
});

const getCategory = async () => {
  console.log("getCategory");

  await call({
    method: "get",
    id: "관심추천 대분류검색",
    endpoint: "/api/sq/prefer/list",
    data: {
      preferCode: "PREFER_P01",
    },
    onResponse({ data, status, message }) {
      console.log("data ", data);
      console.log("status ", status);
      console.log("message ", message);

      data.forEach((f) => {
        f.text = f.stdClsTxt;
        f.value = f.stdClsCode;
      });

      d.bigCategoryList = data;
      d.bigCategoryList.unshift({ text: "대분류 선택해 주세요.", value: "" });
      d.midCategoryList.unshift({ text: "중분류 선택해 주세요.", value: "" });
    },
  });
};

const onChangeBigCate = async (val) => {
  d.bigCategory = val;
  d.midCategory = "";

  await call({
    method: "get",
    id: "관심추천 중분류검색",
    endpoint: "/api/sq/course/category",
    data: {
      parentCateCode: val,
    },
    onResponse({ data, status, message }) {
      console.log("data ", data);
      console.log("status ", status);
      console.log("message ", message);

      data.forEach((f) => {
        f.text = f.courseCateName;
        f.value = f.courseCateCode;
      });

      d.midCategoryList = data;
      d.midCategoryList.unshift({ text: "중분류 선택해 주세요.", value: "" });
    },
  });
};

const onChangeMidCate = async (val) => {
  d.midCategory = val;
};

const checkFileValidation = (f) => {
  let fileSize = f.target.files[0].size;
  let maxSize = 1 * 1024 * 1024;

  if (fileSize > maxSize) {
    modal.alert("알림", `첨부파일 사이즈는 1MB 이내로 등록 가능합니다.`);
    return false;
  }

  let fileName = f.target.files[0].name;
  let extArr = ["JPG", "JPEG", "PNG"];
  let fileExt = fileName.substr(fileName.lastIndexOf(".") + 1).toUpperCase();

  if (extArr.filter((f) => f === fileExt).length === 0) {
    modal.alert(
      "알림",
      "파일등록이 불가능한 확장자입니다. <br/> 파일을 확인 후 다시 시도해주시길 바랍니다."
    );
    return false;
  }

  if (d.fileList.length >= 1) {
    modal.alert("알림", `파일은 1개 까지만 등록할 수 있습니다.`);
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
  }

  d.fileList.splice(d.fileIndex, 1);
};

const onSave = () => {
  if (isEmpty(d.recommTitle)) {
    modal.alert("알림", "제목을 입력해주세요.");
    return;
  }

  if (isEmpty(d.bigCategory)) {
    modal.alert("알림", "대분류를 선택해주세요.");
    return;
  }

  if (isEmpty(d.midCategory)) {
    modal.alert("알림", "중분류를 선택해주세요.");
    return;
  }

  if (isEmpty(d.fileList)) {
    modal.alert("알림", "썸네일을 첨부해주세요.");
    return;
  }

  if (isEmpty(d.recommUrl)) {
    modal.alert("알림", "경로를 입력해주세요.");
    return;
  }

  if (isEmpty(d.recommText)) {
    modal.alert("알림", "추천사유를 입력해주세요.");
    return;
  }

  modal.confirm(
    "알림",
    "입력한 내용으로 강의 추천을 진행합니다. <br/> 관리자가 확인 후 수정하실 수 없습니다. <br/> 등록하시겠습니까?",
    () => {
      const fd = new FormData();

      fd.append("title", d.recommTitle);
      fd.append("parentCateCode", d.bigCategory);
      fd.append("cateCode", d.midCategory);
      fd.append("url", d.recommUrl);
      fd.append("applyDesc", d.recommText);

      d.fileList.forEach((v) => {
        fd.append("file", v);
      });

      call({
        method: "post",
        id: "강의추천",
        endpoint: "/api/sq/my/course/rcmd",
        headers: "FILE_UPLOAD",
        data: fd,
        onResponse({ data, status, message }) {
          if (status === 200) {
            emit("close");
          }
        },
      });
    }
  );
};

const onClickFile = () => {
  fileUpload.value.click();
};
</script>

<template>
  <Transition name="c-modals" v-if="p.isShow">
    <div class="c-modals">
      <div class="c-modals__bg"></div>
      <div class="c-modals__inner scroll">
        <div class="c-modals__head">
          강의 추천
          <button
            class="c-modals__head-close"
            type="submit"
            @click="$emit('close')"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <div class="c-modals__title">
            좋은 강의를 다른 사람에게 추천해보세요.
          </div>
          <p>(추천하신 내용은 관리자 검토 후 게재됩니다)</p>
          <div class="c-form-group">
            <label for="route02" class="c-form-label"
              ><span class="c-essential">*</span> 제목</label
            >
            <input
              v-model="d.recommTitle"
              type="text"
              class="c-form-control"
              id="route02"
              title="route02"
              placeholder="제목을 입력해주세요"
            />
          </div>
          <div class="c-form-group">
            <div class="c-form-label">
              <span class="c-essential">*</span> 대분류/소분류
            </div>
            <div class="c-input-group c-input-group--type02">
              <Select
                v-model="d.bigCategory"
                :options="d.bigCategoryList"
                @update:modelValue="onChangeBigCate"
                title="콘텐츠 목록 대분류"
              ></Select>
              <Select
                v-model="d.midCategory"
                :options="d.midCategoryList"
                @update:modelValue="onChangeMidCate"
                title="콘텐츠 목록 중분류"
              ></Select>
            </div>
          </div>
          <div class="c-form-group">
            <label for="file" class="c-form-label">
              <span class="c-essential">*</span> 썸네일</label
            >
            <div class="c-input-group" @click="onClickFile">
              <input
                class="c-form-control"
                type="text"
                title="파일 첨부"
                placeholder="파일 첨부해주세요."
                :readonly="true"
              />
              <input
                v-show="false"
                ref="fileUpload"
                id="fileUpload"
                class="c-form-control"
                type="file"
                title="파일 첨부"
                placeholder="파일 첨부해주세요."
                @change="onChangeFile"
              />
              <button class="c-btn c-btn-sm c-btn-blue">파일 첨부</button>
            </div>
            <template v-if="d.fileList" v-for="(data, idx) in d.fileList">
              <div class="c-form-file">
                <a href="#">{{ data.name }}</a>
                <button @click="onClickDelBtn(idx, data.fileSeq)">
                  <i class="ico ico-delete">삭제</i>
                </button>
              </div>
            </template>
            <div class="c-text-caution">
              jpg, jpeg, png 형식의 1MB이하 파일 (추천size : 300*300)
            </div>
          </div>
          <div class="c-form-group">
            <label for="route02" class="c-form-label"
              ><span class="c-essential">*</span> 경로</label
            >
            <input
              v-model="d.recommUrl"
              type="text"
              class="c-form-control"
              id="route02"
              title="route02"
              placeholder="추천하실 강좌의 URL"
            />
            <div class="c-text-caution">
              추천하실 강좌의 URL(예시 :
              https://www.youtube.com/watch?v=D0oipIheaUM)을 입력해주세요
            </div>
          </div>
          <div class="c-form-group">
            <label for="route03" class="c-form-label"
              ><span class="c-essential">*</span> 추천사유</label
            >
            <textarea
              v-model="d.recommText"
              id="route03"
              class="c-form-control c-form-control-sm"
              placeholder="추천사유 입력"
            ></textarea>
          </div>
          <div class="c-modals__button">
            <div class="c-btn-group">
              <button
                type="submit"
                class="c-btn c-btn-blue"
                @click="$emit('close')"
              >
                취소
              </button>

              <button type="submit" class="c-btn c-btn-danger" @click="onSave">
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.c-form-control.etc {
  margin-top: 0.8rem;
}
</style>
