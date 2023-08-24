<script setup>
import { useModalStore } from "@/store";
import { call } from "@/api";
const modal = useModalStore();

const textarea = ref();
const commentRef = ref(null);
const fileUpload = ref();
const replyFileUpload = ref();

const p = defineProps({
  data: { default: null },
  urlCnt: { type: Number, default: 0 },
  isUrl: {
    type: Boolean,
    default: () => false,
  },
  isFile: {
    type: Boolean,
    default: () => false,
  },
  isSecret: {
    type: Boolean,
    default: () => true,
  },
  isWrite: {
    type: Boolean,
    default: () => true,
  },
  boardSeq: { type: Number, default: 0 },
  boardType: { default: null },
});

const d = reactive({
  loginUserId: uGetLoginInfo("userid"),
  isCommon: window.location.href.indexOf("event") < 0 ? true : false,
  myReply: false,
  myReplyMore: false,
  myReplyIdx: 0,
  secretYn: false,
  url1: "",
  url2: "",
  url3: "",
  fileInfo: null,
  fileList: [],
  fileIndex: "",
  delFileSeq: "",
  seqInfo: {},
  urlTxt: [],
});

onMounted(async () => {
  if (!isEmpty(p.boardType)) {
    d.fileInfo = await uGetBoardInfo(p.boardType);
  }
});

const emit = defineEmits([
  "changedPageIndex",
  "handleSubmit",
  "handleModifySubmit",
  "handleDeleteSubmit",
]);

const resize = () => {
  let element = textarea.value[0];
  element.style.height = "18px";
  element.style.height = element.scrollHeight + 2 + "px";
};

const textareaFocus = (target) => {
  setTimeout(() => {
    var end = document.getElementById(target).value.length;
    document.getElementById(target).focus();
    document.getElementById(target).setSelectionRange(end, end);
  }, 100);
};

const onClickEditComment = (data) => {
  d.url1 = data.shareUrl1;
  d.url2 = data.shareUrl2;
  d.url3 = data.shareUrl3;

  d.myReply = true;
  textareaFocus("textarea");
};

const checkFileValidation = (f) => {
  console.log("fileInfo", d.fileInfo);
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
  } else {
    fileUpload.value.value = null;
    replyFileUpload.value.value = null;
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

const changedIndex = (index) => {
  emit("changedPageIndex", index);
};

const onClickCommtEditBtn = (value) => {
  if (!d.isCommon) {
    const data = {
      eventSeq: value.eventSeq,
      comtSeq: value.comtSeq,
      description: textarea.value[0].value,
      secretYn: d.secretYn ? "Y" : "N",
      shareUrl1: !isEmpty(d.url1) ? d.url1 : "",
      shareUrl2: !isEmpty(d.url2) ? d.url2 : "",
      shareUrl3: !isEmpty(d.url3) ? d.url3 : "",
      file: d.fileList,
    };
    emit("handleModifySubmit", data);
    d.myReply = false;
    return;
  }
  setComment("put", value.comtSeq);
};

const onClickCommtDelBtn = async (value) => {
  if (!d.isCommon) {
    emit("handleDeleteSubmit", value);
    return;
  }
  setComment("delete", value.comtSeq);
};

const setComment = (type, commentSeq = 0) => {
  console.log(type, commentSeq);
  let params = "";
  let data = {};
  let ment = "";

  switch (type) {
    case "post":
      data = {
        boardSeq: p.boardSeq,
        comtDesc: commentRef.value.value,
      };
      ment = "등록";
      if (isEmpty(commentRef.value.value)) {
        modal.alert("알림", "댓글을 입력해주세요.");
        return;
      }
      break;
    case "put":
      data = {
        comtSeq: commentSeq,
        comtDesc: textarea.value[0].value,
      };
      if (isEmpty(textarea.value[0].value)) {
        modal.alert("알림", "댓글을 입력해주세요.");
        return;
      }
      ment = "수정";
      break;
    case "delete":
      params = `/${commentSeq}`;
      ment = "삭제";
      break;
  }

  modal.confirm("알림", `${ment}하시겠습니까?`, async () => {
    let isValid = true;
    if (type == "put" || type == "post") {
      isValid = await uFilteringPersonalInfo("", data.comtDesc);
    }
    if (!isValid) return;

    await call({
      method: type,
      id: "게시판 정보 API",
      endpoint: `/api/sq/comment${params}`,
      data: data,
      onResponse({ data, status }) {
        console.log(data, status);
        if (status === 200) {
          modal.alert("알림", `${ment}되었습니다.`);
          if (type != "put") {
            changedIndex(0);
          } else {
            changedIndex(p.data.pageNumber);
          }
          d.myReply = false;
        }
      },
    });
  });
};

const handleSubmit = () => {
  if (!d.isCommon) {
    const data = {
      description: commentRef.value.value,
      secretYn: d.secretYn ? "Y" : "N",
      shareUrl1: !isEmpty(d.urlTxt[1]) ? d.urlTxt[1] : "",
      shareUrl2: !isEmpty(d.urlTxt[2]) ? d.urlTxt[2] : "",
      shareUrl3: !isEmpty(d.urlTxt[3]) ? d.urlTxt[3] : "",
      file: d.fileList,
    };

    emit("handleSubmit", data);
    //commentRef.value.value = "";
    return;
  }

  setComment("post");
};

const onClickFileDownload = (data) => {
  console.log("onClickFileDownload", data);
  uFileDownload(data.fileSeq);
};

const onClickFile = () => {
  fileUpload.value.click();
};

const onClickReplyFile = () => {
  replyFileUpload.value.click();
};
</script>
<template>
  <div class="c-reply-group">
    <form action="" @submit.prevent>
      <fieldset>
        <div class="c-form-group">
          <legend>
            <div class="c-reply__title">
              <div class="c-form-label c-form-label--lg">
                댓글<span>{{ p.data.totalRecords }}</span>
              </div>
              <div class="c-form-check" v-if="p.isSecret === true && p.isWrite">
                <input
                  v-model="d.secretYn"
                  type="checkbox"
                  class="c-form-check-input"
                  id="replySecret"
                />
                <label for="replySecret" class="c-form-check-label"
                  >비밀글</label
                >
              </div>
            </div>
          </legend>
          <textarea
            ref="commentRef"
            class="c-form-control"
            placeholder="댓글을 남겨 볼까요? (최대 300글자)"
            title="댓글 입력"
            v-if="p.isWrite"
          ></textarea>
          <template v-if="p.isWrite && p.urlCnt > 0 && p.isUrl">
            <div class="c-form-label">URL 첨부 (최대3개)</div>
            <template v-for="cnt in p.urlCnt">
              <textarea
                v-model="d.urlTxt[cnt]"
                class="c-form-control c-form-control-sm"
                placeholder="주소를 입력해주세요."
                title="댓글 url 입력"
              ></textarea>
            </template>
          </template>
          <template v-if="p.isFile === true && p.isWrite">
            <label class="c-form-label" for="file">파일첨부</label>
            <div class="c-input-group" @click="onClickFile">
              <input
                class="c-form-control"
                type="text"
                id="file"
                placeholder="파일 첨부해주세요."
                :readonly="true"
              />
              <input
                v-show="false"
                class="c-form-control"
                type="file"
                ref="fileUpload"
                title="파일 첨부"
                @change="onChangeFile"
              />
              <button class="c-btn c-btn-sm c-btn-blue">파일 찾기</button>
            </div>
          </template>
          <template v-if="d.fileList" v-for="(data, idx) in d.fileList">
            <div class="c-form-file">
              <a href="#">{{ data.name }}</a>
              <button @click="onClickDelBtn(idx)">
                <i class="ico ico-delete">삭제</i>
              </button>
            </div>
          </template>
          <div class="c-btn-group c-btn-group-right">
            <button
              class="c-btn c-btn-danger"
              type="button"
              @click.prevent="handleSubmit"
              v-if="p.isWrite === true"
            >
              <strong>등록하기</strong>
            </button>
          </div>
        </div>
      </fieldset>
    </form>
    <div class="c-reply" v-if="p.data">
      <ul>
        <li
          v-for="(data, index) in p.data.rows?.filter((e) => e.useYn === 'Y')"
        >
          <!-- 본인의 댓글 -->
          <template v-if="d.loginUserId === data.userId">
            <div class="c-reply__img">
              <img src="@img/@temp/2.jpg" alt="내 댓글 프로필" />
              <div class="c-badge c-badge-danger">나</div>
            </div>
            <div
              class="c-reply__text"
              v-if="d.myReply === true && d.myReplyIdx === data.comtSeq"
            >
              <div class="c-reply__text-head">
                <strong>{{ data.userId }}</strong>
                <span>{{
                  uConvertDateTime(data.regDtm, "YYYY.MM.DD HH:mm:SS")
                }}</span>
              </div>
              <textarea
                class="c-form-control c-form-control-sm"
                ref="textarea"
                id="textarea"
                name="textarea"
                title="댓글 내용"
                @input="resize"
                @focus="resize()"
                >{{ data.description }}</textarea
              >
              <template v-if="p.isUrl === true">
                <textarea
                  v-model="d.url1"
                  title="댓글 url 첫번째"
                  class="c-form-control c-form-control-sm"
                  placeholder="주소를 입력해주세요."
                ></textarea>
                <textarea
                  v-model="d.url2"
                  title="댓글 url 두번째"
                  class="c-form-control c-form-control-sm"
                  placeholder="주소를 입력해주세요."
                ></textarea>
                <textarea
                  v-model="d.url3"
                  title="댓글 url 세번째"
                  class="c-form-control c-form-control-sm"
                  placeholder="주소를 입력해주세요."
                ></textarea>
              </template>
              <template v-if="p.isFile === true">
                <label class="c-form-label" for="replyfile">파일첨부</label>
                <div class="c-input-group" @click="onClickReplyFile">
                  <input
                    class="c-form-control"
                    type="text"
                    placeholder="파일 첨부해주세요."
                    :readonly="true"
                    id="replyfile"
                  />
                  <input
                    v-show="false"
                    class="c-form-control"
                    type="file"
                    title="파일 첨부"
                    ref="replyFileUpload"
                    @change="onChangeFile"
                  />
                  <button
                    class="c-btn c-btn-sm c-btn-blue"
                    @click="onClickReplyFile"
                  >
                    파일 찾기
                  </button>
                </div>
                <br />
              </template>
              <div class="c-btn-group c-btn-group-right">
                <button
                  class="c-btn c-btn-sm c-btn-blue"
                  @click="d.myReply = false"
                >
                  취소하기
                </button>
                <button
                  class="c-btn c-btn-sm c-btn-danger"
                  @click="onClickCommtEditBtn(data)"
                >
                  수정하기
                </button>
              </div>
            </div>
            <div class="c-reply__text" v-else>
              <div class="c-reply__text-head">
                <strong>{{ data.userId }}</strong>
                <span>{{
                  uConvertDateTime(data.regDtm, "YYYY.MM.DD HH:mm:SS")
                }}</span>
                <div
                  class="c-reply__text-head-more"
                  @click="
                    () => {
                      d.myReplyMore = !d.myReplyMore;
                      d.myReplyIdx = data.comtSeq;
                    }
                  "
                  v-if="d.loginUserId === data.userId"
                >
                  <ul
                    class="c-reply__text-edit"
                    v-if="
                      d.myReplyMore === true && d.myReplyIdx === data.comtSeq
                    "
                  >
                    <li>
                      <button
                        class="c-btn c-btn-text"
                        @click="onClickEditComment(data)"
                      >
                        수정하기
                      </button>
                    </li>
                    <li>
                      <button
                        class="c-btn c-btn-text"
                        @click="onClickCommtDelBtn(data)"
                      >
                        삭제하기
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                {{ data.description }}
              </p>
              <div class="c-reply__text-list">
                <ul>
                  <li
                    v-for="url in [
                      data.shareUrl1,
                      data.shareUrl2,
                      data.shareUrl3,
                    ]"
                  >
                    <div
                      class="c-badge c-badge-lg c-badge-light"
                      v-if="!isEmpty(url)"
                    >
                      <p>
                        {{ url }}
                      </p>
                    </div>
                  </li>
                  <li v-if="!isEmpty(data.file)">
                    <button
                      class="c-badge c-badge-lg c-badge-light"
                      @click="onClickFileDownload(data.file)"
                    >
                      <p>{{ data.file.origFileName }}</p>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </template>
          <!-- 본인이 아닌 댓글 -->
          <template v-else>
            <div class="c-reply__img">
              <img
                src="@img/ic-reply-noimg.svg"
                :alt="`${data.userId} 프로필 이미지`"
              />
            </div>
            <div class="c-reply__text">
              <div class="c-reply__text-head">
                <strong>{{ data.userId }}</strong>
                <span>{{
                  uConvertDateTime(data.regDtm, "YYYY.MM.DD HH:mm")
                }}</span>
              </div>
              <p>
                {{ data.description }}
              </p>
              <div class="c-reply__text-list">
                <ul>
                  <li
                    v-for="url in [
                      data.shareUrl1,
                      data.shareUrl2,
                      data.shareUrl3,
                    ]"
                  >
                    <div
                      class="c-badge c-badge-lg c-badge-light"
                      v-if="!isEmpty(url)"
                    >
                      <p>
                        {{ url }}
                      </p>
                    </div>
                  </li>
                  <li v-if="!isEmpty(data.file)">
                    <button
                      class="c-badge c-badge-lg c-badge-light"
                      @click="onClickFileDownload(data.file)"
                    >
                      <p>{{ data.file.origFileName }}</p>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </template>
        </li>
      </ul>
    </div>
  </div>
  <Pagination
    v-if="p.data?.rows?.length > 0"
    :pageNumber="p.data.pageNumber"
    :totalRecords="p.data.totalRecords"
    :totalPages="p.data.totalPages"
    @changedPageIndex="changedIndex"
  />
</template>

<style lang="scss" scoped>
.c-reply {
  .c-btn-group {
    gap: 1.2rem;
  }
  .c-badge {
    font-weight: 400;
  }
}
</style>
