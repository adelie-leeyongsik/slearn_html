<script setup>
import Snb from "@pages/mypage/_snb.vue"; // myPage Left 메뉴
import SnbTablet from "@pages/mypage/_snbTablet.vue"; // myPage Left 메뉴 모바일
// import videoModal from "@pages/mypage/edu/videoModal.vue";
import { call } from "@/api";

const router = useRouter();
const { MENTORING: { MENTORING_EDU_COMPL_INFO }, } = useAppConfig();

const segment = 'compl';  // 멘토 수강 중 교육

// Video 변수
// const compVideoModal = videoModal;
// let isShowVideo = ref(false);

// 그리드 영역 Visible
const gridVisible = reactive({
  compl: false, // 수료한 강의
  incompl: false,  // 미수료한 강의
});

const eduData = reactive({
  completeEdu: 0,       // 수료한 교육 건수
  incompleteEdu: 0,     // 미수료한 교육 건수
  completedEduDetailsCnt: 0,    // 수료한 강의 목록 총건수
  completedEduDetails: [],      // 수료한 강의 목록
  incompletedEduDetailsCnt: 0,    // 미수료한 강의 목록 총건수
  incompletedEduDetails: [],      // 미수료한 강의 목록
});  // 교육정보

// const videoProps = reactive({
//   slcIdx: "",
// });

// 멘토교육 정보 조회
const getData = async () => {
  await call({
    id: "멘토 수료한교육 정보 조회",
    endpoint: MENTORING_EDU_COMPL_INFO,
    headers: "PUBLIC",
    onResponse({ data, status }) {
      if (status === 200) {
        Object.assign(eduData, data);

        eduData.completedEduDetailsCnt = eduData.completedEduDetails.length;  // 수료한 강의 목록 총건수
        eduData.incompletedEduDetailsCnt = eduData.incompletedEduDetails.length;  // 미수료한 강의 목록 총건수

        // 수료한강의 펼칠지 여부
        gridVisible.compl = (eduData.completedEduDetailsCnt > 0);

        return true;
      }
    },
  });
};

// // Open VideoModel
// const openViedeoModal = (item) => {
//   videoProps.slcIdx = item.slcIdx;

//   // 플레이어 모달 호출
//   isShowVideo.value = true;
// };

// const videoModalClose = () => {
//   isShowVideo.value = false;
// };

await getData();  // 데이터 조회

definePageMeta({
  layout: "mypage",
  middleware: [mentoringAuth],
});
</script>

<template>
  <div class="mypage">
    <SnbTablet />
    <PubBreadCrumbs />
    <div class="mypage-edu__list">
      <div class="mypage__wrap">
        <Snb />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <div class="c-text-title-lg">수료한 교육</div>
            <div class="c-text-title-sub">
              <p>
                멘토님이 교육을 정상 수료한 내역입니다. <br />
                도움이 필요하실 땐 서울런 고객센터<br
                  class="c-mo"
                />(1533-0909)로 연락주세요!
              </p>
            </div>
          </div>
          <div class="mypage__contents-body">
            <div class="mypage-edu__list-head">
              <dl>
                <dt>수료 교육</dt>
                <dd><span>{{ eduData.completeEdu }}</span></dd>
              </dl>
              <dl>
                <dt>미수료 교육</dt>
                <dd><span>{{ eduData.incompleteEdu }}</span></dd>
              </dl>
            </div>
            <div class="mypage-edu__list-body">
              <dl>
                <dt @click="gridVisible.compl = !gridVisible.compl">
                  <div
                    class="mypage-edu__title"
                    :class="{ active: gridVisible.compl === true }"
                  >
                    <!-- 웹접근성 a태그 추가 -->
                    <a href="javascript:void(0)">수료한 강의 <span>{{ eduData.completedEduDetailsCnt }}</span> </a>
                    <!-- //웹접근성 a태그 추가 -->
                  </div>
                </dt>
                <dd v-show="gridVisible.compl == true">
                  <div class="mypage-edu__contents">
                    <EduLectureTable v-model="eduData.completedEduDetails" :segment="segment" segmentsub="compl" @showVideo="openViedeoModal" />
                  </div>
                </dd>
              </dl>
              <dl>
                <dt @click="gridVisible.incompl = !gridVisible.incompl">
                  <div
                    class="mypage-edu__title"
                    :class="{ active: gridVisible.incompl === true }"
                  >
                    <!-- 웹접근성 a태그 추가 -->
                    <a href="javascript:void(0)"
                      >미 수료한 강의 <span>{{ eduData.incompletedEduDetailsCnt }}</span></a
                    >
                    <!-- //웹접근성 a태그 추가 -->
                  </div>
                </dt>
                <dd v-show="gridVisible.incompl == true">
                  <div class="mypage-edu__contents">
                    <EduLectureTable v-model="eduData.incompletedEduDetails" :segment="segment" segmentsub="incompl" />
                  </div>
                </dd>
              </dl>
            </div>
            <div class="c-btn-group">
              <button class="c-btn c-btn-lg c-btn-danger" @click="router.push('/mypage/community/board/list/notice')">
                대체 교육 바로가기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <component :is="isShowVideo ? compVideoModal : null" :slcIdx="videoProps.slcIdx" @close="videoModalClose" ></component> -->
</template>
