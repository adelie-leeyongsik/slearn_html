<script setup>
import Snb from "@pages/mypage/_snb.vue";
import SnbTablet from "@pages/mypage/_snbTablet.vue";
import "@toast-ui/editor/dist/toastui-editor.css";
import Editor from "@toast-ui/editor";
import { useModalStore } from "@/store";
import { call } from "@/api";
import * as yup from "yup";

const {
  params: { mode, segment },
  query: { seq: boardSeq },
} = useRoute();

const {
  EDITOR_OPTIONS,
  MENTORING: {
    MENTORING_BOARD_WRITE,
    MENTORING_BOARD_MASTER_SPECS,
    MENTORING_BOARD_VIEW,
  },
} = useAppConfig();

const { push, go } = useRouter();
const modal = useModalStore();

const { maxFileSize, maxFileCount, setProps } = useCreateParams();
let { files, fileExt } = useCreateParams();

const { values, setFieldValue, handleSubmit, meta, setFieldTouched } = useForm({
  validationSchema: yup.object({
    title: yup.string().min(2).required(),
    content: yup.string().min(10).required(),
  }),
});

const isSuccessWrite = ref(false);

const titleRef = ref(null);
const inputRef = ref(null);
const displayInputRef = ref(null);
let editor = null;
const onChangeActionEvent = (e) => {
  try {
    const [file] = e.target.files;

    const { size, type } = file;

    if (!fileExt.value.includes(type.match(/(\w+$)/g)[0].toUpperCase())) {
      modal.open({
        key: uGenKey("alert"),
        type: "alert",
        title: "알림",
        message:
          "파일등록이 불가능한 확장자입니다. 파일을 <br/>확인 후 다시 시도해주시길 바랍니다",
        buttons: [{ text: "확인", styleType: "danger" }],
      });
      e.target.files = null;
      return;
    }

    if (size >= maxFileSize) {
      //* 임시 정의 안됨 */
      modal.open({
        key: uGenKey("alert"),
        type: "alert",
        title: "알림",
        message: "정의안됨: 파일용량 제어",
        buttons: [{ text: "확인", styleType: "danger" }],
      });
      e.target.files = null;
      return;
    }

    if (files.value.length === maxFileCount.value) {
      //* 임시 정의 안됨 */
      modal.alert("알림", "정의 안됨 : 파일허용개수 초과");
      e.target.files = null;
      return;
    }

    files.value.push(file);
    e.target.files = null;
  } catch (err) {}
};
const handleFileSelectEvent = () => {
  inputRef.value.click();
};

const handleDeleteEvent = (file) => {
  files.value = files.value.filter((f) => f !== file);
};

const onInvalidSubmit = ({ errors }) => {
  const [target] = Object.entries(errors);
  const [fieldName, errorValue] = target;

  switch (fieldName) {
    case "title": {
      modal.open({
        key: uGenKey("alert"),
        type: "alert",
        title: "알림",
        message: "제목은 2글자 이상 작성하셔야 합니다",
        onClose: () => titleRef.value.focus(),
        buttons: [{ text: "확인", styleType: "danger" }],
      });
      break;
    }
    case "content": {
      modal.open({
        key: uGenKey("alert"),
        type: "alert",
        title: "알림",
        message: "내용은 10글자 이상 작성하셔야 합니다",
        onClose: () => {
          const { wwEditor } = editor.getEditorElements();
          wwEditor.querySelector(".toastui-editor-contents").focus();
        },
        buttons: [{ text: "확인", styleType: "danger" }],
      });
      break;
    }
  }
};

const onSubmitEvent = handleSubmit(async (params) => {
  try {
    const { content, ...props } = params;
    const board = { ...props };
    Object.assign(board, {
      boardMastSeq: getMentoringBoardMasterKey(segment),
      secretYn: "Y",
      content: editor.getHTML(),
      boardSeq,
    });
    const body = new FormData();
    body.append("board", JSON.stringify(board));
    if (files.value.length >= 1) {
      files.value.forEach((obj) => body.append("files", obj));
    }

    await call({
      id: `멘토링 커뮤니티 - 게시판 글 작성 및 수정 ${mode}`,
      endpoint: MENTORING_BOARD_WRITE,
      method: mode === "modify" ? "put" : "post",
      data: body,
      headers: "FILE_UPLOAD",
      onResponse: () => {
        isSuccessWrite.value = true;
        push("/mypage/community/board/list/share");
      },
    });
  } catch (err) {
    console.error(err);
  }
}, onInvalidSubmit);
const onLoadEvent = () => {
  editor = new Editor({
    ...EDITOR_OPTIONS("#contents"),
    initialValue: values.content,
    events: {
      change(v) {
        setFieldValue("content", editor.getMarkdown());
      },
    },
  });

  titleRef.value.value = values.title || "";
};

const onCreateEvent = async () => {
  setFieldTouched({
    title: true,
    content: true,
  });
  if (mode !== "write") {
    await call({
      id: "멘토링 커뮤니티 - 게시판 데이터 읽어오기",
      endpoint: MENTORING_BOARD_VIEW.replace(/{boardSeq}/, boardSeq),
      onResponse: ({ data }) => {
        const { title, description, fileInfo, updatable } = data;

        if (updatable === false) {
          modal.alert("알림", "자신의 글 외에는 수정할 수 없습니다.", () =>
            go(-1)
          );
          return;
        }

        setFieldValue("title", title);
        setFieldValue("content", description);
        fileInfo.forEach(({ originFileName: name }) => {
          files.value.push({ name });
        });
      },
    });
  }
};

onBeforeMount(() => {
  call({
    id: "멘토링 커뮤니티 - 게시판 마스터 스펙 코드",
    endpoint: MENTORING_BOARD_MASTER_SPECS,
    data: {
      boardMastCate: getMentoringBoardMasterKey(segment),
    },
    onResponse: ({
      data: { attaFileAllowCnt, attaFileMaxSize, attaFileUseExt },
    }) => {
      setProps("maxFileSize", 1024 * 1024 * attaFileMaxSize);
      setProps("maxFileCount", attaFileAllowCnt);
      fileExt.value = [].concat(attaFileUseExt.split(","));
    },
  });
});

await onCreateEvent();

onMounted(() => onLoadEvent());

onBeforeRouteLeave(() => {
  if (isTouched.value === true) {
    if (isSuccessWrite.value === true) {
      return true;
    }
    return confirm(
      "이미 작성된 내용이 있습니다. 확인 버튼을 누르시면, 작성내용이 사라지고 목록으로 이동합니다"
    );
  }
  return true;
});

const fileMessage = computed(() => {
  const extList = fileExt.value.join(",").toLowerCase();
  return `${extList}<br />형식으로 최대 ${maxFileCount.value}개 첨부 가능`;
});

const submitLabel = computed(() =>
  mode === "modify" ? "수정하기" : "등록하기"
);

const isTouched = computed(() => meta.value.dirty);

definePageMeta({
  layout: "mypage",
  middleware: [mentoringAuth],
});
</script>

<template>
  <div class="mypage">
    <SnbTablet currentUrl="/mypage/community/board/list/share" />
    <PubBreadCrumbs />
    <div class="mypage-share__write">
      <div class="mypage__wrap">
        <Snb currentUrl="/mypage/community/board/list/share" />
        <div class="mypage__contents">
          <BoardHeader />
          <div class="mypage__contents-body">
            <div class="mypage__contents-wrigite">
              <form @submit="onSubmitEvent">
                <fieldset>
                  <div class="c-form-group">
                    <label for="title" class="c-form-label">제목</label>
                    <input
                      type="text"
                      class="c-form-control"
                      placeholder="제목을 입력해주세요."
                      ref="titleRef"
                      id="title"
                      name="title"
                      @change="
                        ($event) => setFieldValue('title', $event.target.value)
                      "
                    />
                  </div>
                  <div class="c-form-group">
                    <label for="contents" class="c-form-label">내용</label>
                    <div id="contents"></div>
                  </div>
                  <div class="c-form-group">
                    <label for="file" class="c-form-label">파일 첨부</label>
                    <div class="c-input-group">
                      <input
                        type="file"
                        id="file"
                        ref="inputRef"
                        style="display: none"
                        @change="onChangeActionEvent"
                      />
                      <input
                        class="c-form-control"
                        type="text"
                        placeholder="파일 첨부해주세요."
                        ref="displayInputRef"
                      />
                      <button
                        type="button"
                        class="c-btn c-btn-sm c-btn-blue"
                        @click.prevent="handleFileSelectEvent"
                      >
                        파일 선택
                      </button>
                    </div>
                    <div class="c-text-caution" v-html="fileMessage" />
                    <template v-if="files">
                      <div class="c-form-file" v-for="(file, index) in files">
                        <a href="#" @click.prevent>{{ file.name }}</a>
                        <button
                          type="button"
                          @click.prevent="() => handleDeleteEvent(file)"
                        >
                          <i class="ico ico-delete">삭제</i>
                        </button>
                      </div>
                    </template>
                  </div>
                  <div class="c-btn-group">
                    <button
                      type="button"
                      class="c-btn c-btn-lg c-btn-blue"
                      @click.prevent="
                        push({ path: '/mypage/community/board/list/share' })
                      "
                    >
                      취소하기
                    </button>
                    <button type="submit" class="c-btn c-btn-lg c-btn-danger">
                      {{ submitLabel }}
                    </button>
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
