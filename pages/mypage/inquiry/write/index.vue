<script setup>
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import Editor from "@toast-ui/editor";

import Snb from "@pages/mypage/_snb.vue";
import SnbTablet from "@pages/mypage/_snbTablet.vue";
import { useModalStore } from "@/store";
import { call } from "@/api";

definePageMeta({
  layout: "mypage",
});

const r = useRoute();
const router = useRouter();

const editorContent = ref();

const modal = useModalStore();

const options = uEditorOptions();

const d = reactive({
  isEdit: !isEmpty(r.query.seq) ? true : false,
  boardSeq: "",
  title: "",
  inquiryType: "",
  inquiryTypeList: [],
  content: "",
  taKey: uGenKey("ta"),
  editor: null,
  fileInfoList: [],
  delFileInfoList: [],
});

onMounted(() => {
  options.el = editorContent.value;

  d.editor = new Editor(options);

  let textArea = document.getElementsByClassName(
    "toastui-editor-pseudo-clipboard"
  );

  let moreBtn = document.getElementsByClassName(
    "more toastui-editor-toolbar-icons"
  );

  if (!isEmpty(textArea)) {
    textArea[0].title = "글쓰기 텍스트박스";
  }

  if (!isEmpty(moreBtn)) {
    moreBtn[0].ariaLabel = "더보기";
  }

  boardQnaCategory();

  if (!isEmpty(r.query.seq)) {
    getDetail();
  }
});

const boardQnaCategory = () => {
  return call({
    method: "get",
    id: "1:1 문의 카테고리 조회",
    endpoint: "/api/sq/board/qna/category",
    headers: "PUBLIC",
    data: {},
    onResponse({ data, status }) {
      if (!isEmpty(data)) {
        d.inquiryTypeList = data.map((item) => ({
          text: item.codeName,
          value: item.codeId,
        }));
      }
    },
  });
};

const getDetail = async () => {
  await call({
    id: "마이페이지 > 1:1문의 수정상세",
    endpoint: "/api/sq/board/qna/detail",
    headers: "PUBLIC",
    data: {
      boardSeq: r.query.seq,
    },
    onResponse({ data }) {
      d.boardSeq = data.board.boardSeq;
      d.inquiryType = data.board.boardCateCode;
      d.title = data.board.title;
      d.content = data.board.description;
      d.fileInfoList = data.board.files;

      if (!isEmpty(d.fileInfoList)) {
        d.fileInfoList.forEach((f) => {
          f.name = f.origFileName;
        });
      }

      return true;
    },
  });
};

watch(
  () => d.content,
  (newVal) => {
    options.initialValue = newVal;

    d.editor = new Editor(options);
  }
);

const getFileInfo = (val) => {
  d.fileInfoList = val;
};

const getDelFileInfo = (val) => {
  d.delFileInfoList = val;
};

const validation = async () => {
  if (isEmpty(d.inquiryType)) {
    modal.alert("알림", "카테고리를 선택해야합니다.");
    return false;
  }

  if (isEmpty(d.title)) {
    modal.alert("알림", "제목을 입력해야합니다.");
    return false;
  } else if (d.title.length < 2) {
    modal.alert("알림", "제목은 2글자 이상 작성하셔야 합니다.");
    return false;
  }

  let content =
    d.editor.getHTML() === "<p><br></p>"
      ? ""
      : d.editor.getHTML().replace("<p>", "").replace("</p>", "");

  if (isEmpty(content)) {
    modal.alert("알림", "내용을 입력해야합니다.");
    return false;
  } else if (content.length < 10) {
    modal.alert("알림", "내용은 10글자 이상 작성하셔야 합니다.");
    return false;
  }

  const filter = await uFilteringPersonalInfo(d.title, content);

  if (!filter) {
    return false;
  }

  return true;
};

const onClickBtn = () => {
  validation().then((result) => {
    if (result) {
      let method = "post";
      let url = "/api/sq/board/qna/create";

      if (d.isEdit) {
        method = "put";
        url = "/api/sq/board/qna/update";
      }

      const fd = new FormData();

      fd.append("boardCateCode", d.inquiryType);
      fd.append("title", d.title);
      fd.append("description", d.editor.getHTML());

      if (d.isEdit) {
        fd.append("boardSeq", d.boardSeq);
        fd.append("delFileSeqList", d.delFileInfoList);
      }

      if (!isEmpty(d.fileInfoList)) {
        d.fileInfoList.forEach((v) => {
          if (isEmpty(v.fileSeq)) {
            fd.append("files", v);
          }
        });
      }

      call({
        method: method,
        id: "1:1 문의 등록/수정",
        endpoint: url,
        headers: "FILE_UPLOAD",
        data: fd,
        onResponse({ data, status, message }) {
          console.log("data", data);
          if (isEqual(status, 200)) {
            router.push("/mypage/inquiry");
          } else {
            console.log("message", message);
          }
        },
      });
    }
  });
};

const goCancel = () => {
  modal.alert(
    "알림",
    "이미 작성된 내용이 있습니다. <br/>확인 버튼을 누르시면, 작성내용이 사라지고 목록으로 이동합니다",
    () => {
      router.push("/mypage/inquiry");
    }
  );
};

const onKeyTab = () => {
  let active = document.activeElement;

  if (active.className.indexOf("toastui-editor-contents") != -1) {
    document.getElementById("file").focus();
  }
};
</script>

<template>
  <div class="mypage">
    <SnbTablet :currentUrl="`/mypage/inquiry`" />
    <BreadCrumbs />
    <div class="mypage-inquiry">
      <div class="mypage__wrap">
        <Snb :currentUrl="`/mypage/inquiry`" />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <MypageTitle
              title="1:1 문의 내역"
              desc="사이트 이용 질문을 남겨주세요<br />
                도움이 필요하실 땐 서울런 고객센터<br
                  class='c-mo'
                />(1533-0909)로 연락주세요!"
            >
            </MypageTitle>
          </div>
          <div class="mypage__contents-body">
            <div class="mypage__contents-write">
              <div class="c-text-caution__wrap">
                <div class="c-text-caution c-text-caution--type02">
                  <span class="c-text-danger">*</span> 표시는 필수
                  입력사항입니다.
                </div>
              </div>
              <form @submit.prevent>
                <fieldset>
                  <div class="c-form-group">
                    <Select
                      label="카테고리"
                      v-model="d.inquiryType"
                      :options="d.inquiryTypeList"
                      placeholder="선택하세요."
                      :isRequireMark="true"
                    />
                  </div>
                  <div class="c-form-group">
                    <Input
                      v-model="d.title"
                      label="제목"
                      placeholder="제목을 입력해주세요."
                      :isRequireMark="true"
                    />
                  </div>
                  <div class="c-form-group">
                    <label :for="d.taKey" class="c-form-label"
                      ><span class="c-text-danger">*</span> 내용</label
                    >
                    <div
                      id="editorContent"
                      ref="editorContent"
                      @keydown.tab="onKeyTab"
                    ></div>
                  </div>
                  <AttachFile
                    labelTitle="파일 첨부"
                    :caution="true"
                    :dataList="d.fileInfoList"
                    @onFileInfo="getFileInfo"
                    @onDelFileInfo.prevent="getDelFileInfo"
                    boardName="inquiry"
                  ></AttachFile>
                  <div class="c-btn-group" v-if="!d.isEdit">
                    <Button
                      size="auto"
                      sizeType="large"
                      styleType="inactive"
                      text="등록하기"
                      :onConfirm="onClickBtn"
                    />
                    <Button
                      sizeType="large"
                      styleType="blue"
                      size="auto"
                      text="취소하기"
                      @click="goCancel"
                    />
                  </div>
                  <div class="c-btn-group" v-else>
                    <Button
                      size="auto"
                      sizeType="large"
                      styleType="danger"
                      text="수정하기"
                      :onConfirm="onClickBtn"
                    />
                    <Button
                      sizeType="large"
                      styleType="blue"
                      size="auto"
                      text="취소하기"
                      @click="goCancel"
                    />
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
