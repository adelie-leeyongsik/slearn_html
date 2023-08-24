<script setup>
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import Editor from "@toast-ui/editor";

import Snb from "@pages/mypage/_snb.vue";
import SnbTablet from "@pages/mypage/_snbTablet.vue";
import { call } from "@/api";
import { useModalStore } from "@/store";

definePageMeta({
  layout: "mypage",
});

const r = useRoute();
const router = useRouter();
const modal = useModalStore();

const options = uEditorOptions();

const d = reactive({
  boardSeq: "",
  detail: null,
  categoryName: "",
  title: "",
  userId: "",
  userName: "",
  regDtm: "",
  editor: null,
  fileList: [],
});

onMounted(async () => {
  await getDetail().then(() => {
    options.el = document.getElementById("editorDiv");
    options.viewer = true;
    options.initialValue = d.detail.board.description;

    d.editor = new Editor.factory(options);
  });
});

const getDetail = () => {
  return call({
    id: "마이페이지 > 1:1문의 상세",
    endpoint: "/api/sq/board/qna/detail",
    headers: "PUBLIC",
    data: {
      boardSeq: r.params.seq,
    },
    onResponse({ data }) {
      console.log("getDetail data ", data);
      d.detail = data;
      d.boardSeq = data.board.boardSeq;
      d.categoryName = data.categoryName;
      d.title = data.board.title;
      d.userId = data.board.userId;
      d.userName = data.board.userName;
      d.regDtm = data.board.regDtm;
      d.fileList = data.board.files;
    },
  });
};

const onClickDelBtn = () => {
  console.log("boardSeq", d.boardSeq);
  modal.confirm(
    "알림",
    "삭제시 작성 내용과 답변 내용이 모두 삭제됩니다<br/> 삭제하시겠습니까?",
    deleteBoard
  );
};

const deleteBoard = () => {
  return call({
    method: "delete",
    id: "마이페이지 > 1:1문의 삭제",
    endpoint: "/api/sq/board/qna/delete",
    headers: "PUBLIC",
    data: {
      boardSeq: d.boardSeq,
    },
    onResponse({ data, status, message }) {
      if (isEqual(status, 200)) {
        router.push("/mypage/inquiry");
      } else {
        console.error(message);
      }
    },
  });
};

const onClickEditBtn = () => {
  router.push({
    path: "/mypage/inquiry/write",
    query: { seq: r.params.seq },
  });
};
</script>
<template>
  <div class="mypage">
    <SnbTablet :currentUrl="`/mypage/inquiry`" />
    <PubBreadCrumbs />
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
              <template v-slot:tail>
                <router-link to="/mypage/inquiry/write">
                  <Button
                    size="auto"
                    sizeType="small"
                    styleType="danger"
                    text="문의하기"
                  />
                </router-link>
              </template>
            </MypageTitle>
          </div>
          <div class="mypage__contents-body">
            <div class="mypage__board">
              <div class="mypage__board-title">
                <p>
                  <span ref="category">[{{ d.categoryName }}]</span>
                  {{ d.title }}
                </p>
                <div class="mypage__board-title-writer">
                  <p>{{ d.userName }}</p>
                  <span>{{ uConvertDate(d.regDtm, "YYYY.MM.DD") }}</span>
                </div>
              </div>
              <div class="mypage__board-contents">
                <div
                  class="mypage__board-contents-head"
                  v-if="d.fileList?.length > 0"
                >
                  <div class="c-form-group">
                    <div class="c-form-label">첨부파일</div>
                    <ul>
                      <li v-for="file in d.fileList">
                        <a
                          href="javascript:void(0);"
                          @click="uFileDownload(file.fileSeq)"
                          class="c-badge c-badge-lg c-badge-light"
                          ><p>
                            {{ file.origFileName }}
                          </p></a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="editorDiv" ref="editorDiv"></div>
                <div
                  class="mypage__board-reply"
                  v-if="d.detail?.replBoards?.length > 0"
                  v-for="reply in d.detail.replBoards"
                >
                  <div class="mypage__board-reply-title">
                    <p>
                      {{ reply.title }}
                    </p>
                    <div class="mypage__board-reply-title-writer">
                      <p>{{ reply.userName }}</p>
                      <span>{{
                        uConvertDate(reply.updDtm, "YYYY.MM.DD")
                      }}</span>
                    </div>
                  </div>
                  <div class="mypage__board-reply-contents">
                    <div class="mypage__board-contents-head">
                      <div class="c-form-group">
                        <div class="c-form-label">첨부파일</div>
                        <ul>
                          <li v-for="item in reply.files">
                            <a
                              href="javascript:void(0);"
                              class="c-badge c-badge-lg c-badge-light"
                              @click="uFileDownload(item.fileSeq)"
                              ><p>
                                {{ item.origFileName }}
                              </p></a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div v-html="reply.description"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="c-btn-group">
              <Button
                to="/mypage/inquiry"
                sizeType="large"
                size="auto"
                text="목록"
                v-if="d.detail?.replBoards?.length > 0"
              />
              <Button
                sizeType="large"
                styleType="danger"
                size="auto"
                text="수정하기"
                @click="onClickEditBtn"
                v-else
              />
              <Button
                sizeType="large"
                styleType="blue"
                size="auto"
                text="삭제하기"
                @click="onClickDelBtn"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
