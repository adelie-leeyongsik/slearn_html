<script setup>
import Snb from "@pages/mypage/_snb.vue"; // myPage Left 메뉴
import SnbTablet from "@pages/mypage/_snbTablet.vue"; // myPage Left 메뉴 모바일
import { call } from "@/api";
import { useMentoringStore, useModalStore } from "@/store";

import Editor from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";

const modal = useModalStore();
const router = useRouter();
const route = useRoute();
const {
  MENTORING: { MENTORING_EDU_DETAIL_INFO, MENTORING_EDU_APPLY },
} = useAppConfig();


const { params: { id, segment }, } = useRoute();

const options = uEditorOptions();
const editorDiv = ref(null);

// 멘토교육 정보
const eduInfo = reactive({
  slcIdx: '', // 인덱스
  courseName: '', // 과정이름
  // 작성일
  requireYn: '',  // 필수여부
  // 교육형태
  recruitStart: '', // 시작일시
  recruitEnd: '', // 종료일시
  // 교육인원
  // 수료기준
  summary: '',  // 상세내용
});
let isCanApply = false; // 신청가능여부

onMounted(async() => {
  await getData();  // 상세정보 조회
});

// 멘토교육 상세 정보 조회
const getData = async () => {
  await call({
    id: "멘토교육 상세 정보 조회",
    endpoint: bindUrlVariable(MENTORING_EDU_DETAIL_INFO, { slcIdx: id }),
    headers: "PUBLIC",
    // data: { smIdx: '1191'}, // 임시
    onResponse({ data, status }) {
      if (status === 200) {
        Object.assign(eduInfo, data);
        isCanApply = (eduInfo.courseStatus !== 'Y' && eduInfo.courseAvailYn === 'Y'); // 신청 가능 여부 (신청하지 않고 수강 기간내 일때)
        
        // 토스트 editor 초기화
        options.el = editorDiv.value;
        options.viewer = true;
        options.initialValue = eduInfo.summary;
        Editor.factory(options);
      }
    },
  });
};


// 목록으로 이동
const goList = () => {
  router.push(`/mypage/edu/${segment}`);
};

// 신청하기
const applyEdu = async () => {
  modal.confirm("알림", "신청하시겠습니까?", async () => {
    await call({
      id: "멘토교육 신청",
      method: 'post',
      endpoint: MENTORING_EDU_APPLY,
      headers: "PUBLIC",
      data: {
        slcIdx: id,
      },
      onResponse({ data, status }) {
        if (status === 200) {
          isCanApply = false;
          modal.alert("알림", "신청이 완료되었습니다.<br/>수강중 교육 메뉴에서 수강을 진행해주세요.", () => {
            // 수강중 교육 메뉴로 이동
            router.push('/mypage/edu/ing');
          });
        }
      },
    });
  });
};

definePageMeta({
  layout: "mypage",
  middleware: [mentoringAuth],
});
</script>

<template>
  <div class="mypage">
    <SnbTablet :currentUrl="`/mypage/edu/${segment}`" />
    <PubBreadCrumbs />
    <div class="mypage-edu__list">
      <div class="mypage__wrap">
        <Snb :currentUrl="`/mypage/edu/${segment}`" />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <div class="c-text-title-lg">멘토 교육</div>
            <div class="c-text-title-sub">
              <p>
                사전 필수교육을 완료 하셔야 멘토링이 가능합니다. <br />
                도움이 필요하실 땐 서울런 고객센터<br
                  class="c-mo"
                />(1533-0909)로 연락주세요!
              </p>
            </div>
          </div>
          <div class="mypage__contents-body">
            <div class="mypage__board">
              <div class="mypage__board-title">
                <p>
                  <span>[온라인]</span>{{ eduInfo.courseName }}
                </p>
                <div class="mypage__board-title-writer">
                  <p>2023.03.01</p>
                </div>
              </div>
              <div class="mypage__board-contents">
                <div class="mypage__board-contents-head">
                  <div class="mypage__board-contents-head-list">
                    <dl>
                      <dt>필수 여부</dt>
                      <dd>{{ eduInfo.requireYn === "Y" ? "필수" : "선택" }}</dd>
                    </dl>
                    <dl>
                      <dt>교육 시간</dt>
                      <dd>{{ !eduInfo.eduTime || eduInfo.eduTime === '-' ? '-' : `${eduInfo.eduTime}분` }}</dd>
                    </dl>
                    <dl>
                      <dt>교육 형태</dt>
                      <dd>온라인</dd>
                    </dl>
                    <dl>
                      <dt>수강 기간</dt>
                      <dd v-if="!eduInfo.recruitEnd">제한없음</dd>
                      <dd v-else>{{ `${uConvertDateTime(eduInfo.recruitStart, 'YYYY.MM.DD')} ~ ${uConvertDateTime(eduInfo.recruitEnd, 'YYYY.MM.DD')}` }}</dd>
                    </dl>
                    <dl>
                      <dt>교육 인원</dt>
                      <!-- 온라인은 교육인원 없음 -->
                      <dd>-</dd>
                    </dl>
                    <dl>
                      <dt>수료 기준</dt>
                      <dd>{{ `진도율 ${eduInfo.completetionCriterion || ''}% 이상` }}</dd>
                    </dl>
                  </div>
                </div>
                <div ref="editorDiv"></div>
              </div>
              <div class="c-btn-group">
                <button
                  class="c-btn c-btn-lg c-btn-blue"
                  @click="goList">목록으로</button
                ><button 
                  class="c-btn c-btn-lg c-btn-danger"
                  :class="{  'c-btn-inactive': !isCanApply }"
                  :disabled="!isCanApply"
                  @click="applyEdu">신청하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
