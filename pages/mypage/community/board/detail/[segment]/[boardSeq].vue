<script setup>
import Snb from "@pages/mypage/_snb.vue";
import SnbTablet from "@pages/mypage/_snbTablet.vue";
import { call } from "@/api";
import { useModalStore } from "@/store";

import Editor from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";

const { $dayjs } = useNuxtApp();

let {
  MENTORING: { MENTORING_BOARD_VIEW, MENTORING_BOARD_DELETE, },
  DATE_3U,
} = useAppConfig();

const {
  params: { boardSeq, segment },
} = useRoute();

const modal = useModalStore();
const { push, go } = useRouter();
const { data } = useReadParams();

const options = uEditorOptions();
const editorDiv = ref(null);

const onLoadEvent = async () => {
  // await handleFetchEvent();
};

onMounted(async () => {
  await handleFetchEvent();
});

const handleFetchEvent = async (pageNumber = 0) => {
  await call({
    id: "멘토링 커뮤니티 - 게시판 상세",
    endpoint: MENTORING_BOARD_VIEW.replace(/{boardSeq}/, boardSeq),
    data: {
      pageNumber,
    },
    onResponse: ({ data: resData }) => {
      const { comments, ...board } = resData;
      const cpBoard = { ...board };
      
      Object.assign(cpBoard, {
        dtm: $dayjs(board.regDtm).format(DATE_3U),
      });

      if (comments?.rows.length > 0) {
        comments.rows = comments.rows.map((row) => {
          return {
            ...{
              useYn: row.comtUseYn,
              userId: row.comtUserId,
              regDtm: row.comtRegDtm,
            }, 
            ...row
          };
        });
      }

      Object.assign(data, {
        ...cpBoard,
        comments,
      });
      
      // 토스트 editor 초기화
      options.el = editorDiv.value;
      options.viewer = true;
      options.initialValue = data.description;
      Editor.factory(options);
    },
  });
};

// 페이지 변경 이벤트
const handleCommentPaginationEvent = (pageNumber) => {
  console.log('>>>>> handleCommentPaginationEvent', pageNumber);
  // data.comment.pageNumber = index;
  handleFetchEvent(pageNumber);
};


const deleteBoard = () => {
  if (data.updatable) {
    modal.confirm("알림", "삭제하시겠습니까?", () => {
      call({
        id: `멘토링 커뮤니티 - 게시판 글 삭제`,
        endpoint: bindUrlVariable(MENTORING_BOARD_DELETE, { boardSeq }),
        method: "delete",
        onResponse: () => {
          modal.alert("알림", "삭제되었습니다.", () => {
            push(`/mypage/community/board/list/${segment}`);
          });
        },
      });
    });
  }
};

await onLoadEvent();

const boardMastCate = computed(() => (segment === "share" ? 7 : 10) || false);

definePageMeta({
  layout: "mypage",
  middleware: [mentoringAuth],
});
</script>

<template>
  <div class="mypage">
    <SnbTablet :currentUrl="`/mypage/community/board/list/${segment}`" />
    <PubBreadCrumbs />
    <div class="mypage-notice__view">
      <div class="mypage__wrap">
        <Snb :currentUrl="`/mypage/community/board/list/${segment}`" />
        <div class="mypage__contents">
          <BoardHeader />
          <div class="mypage__contents-body">
            <div class="mypage__board">
              <div class="mypage__board-title">
                <p v-text="data.title"></p>
                <div class="mypage__board-title-writer">
                  <p>{{ data.userId }}</p>
                  <span>{{ data.dtm }}</span>
                </div>
              </div>
              <div class="mypage__board-contents">
                <div class="mypage__board-contents-head">
                  <div class="c-form-group">
                    <div class="c-form-label">첨부파일</div>
                    <ul>
                      <li v-for="(file, index) in data.fileInfo">
                        <a
                          href="#"
                          @click.prevent="uFileDownload(file.fileSeq)"
                          class="c-badge c-badge-lg c-badge-light"
                          download
                          ><p>
                            {{ file.originFileName }}
                          </p></a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <div ref="editorDiv"></div>
              </div>
            </div>
            <div class="c-btn-group">
              <button
                type="button"
                class="c-btn c-btn-lg c-btn-danger"
                @click.prevent="
                  push({
                    path: `/mypage/community/board/modify/${segment}`,
                    query: { seq: boardSeq },
                  })
                "
                v-if="data.updatable === true"
              >
                <strong>수정하기</strong>
              </button>
              <button
                type="button"
                class="c-btn c-btn-lg c-btn-danger"
                @click.prevent="deleteBoard"
                v-if="data.updatable === true"
              >
                <strong>삭제하기</strong>
              </button>
              <button
                type="button"
                class="c-btn c-btn-lg c-btn-danger"
                @click.prevent="
                  push({ path: `/mypage/community/board/list/${segment}` })
                "
              >
                <strong>목록으로</strong>
              </button>
            </div>
            <Comments
              v-if="data?.comments"
              :board-seq="boardSeq"
              :data="data.comments"
              :is-file="false"
              :is-url="false"
              :is-secret="false"
              @changedPageIndex="handleCommentPaginationEvent"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
