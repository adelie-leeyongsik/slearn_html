<script setup>
import Snb from "@pages/mypage/_snb.vue"; // myPage Left 메뉴
import SnbTablet from "@pages/mypage/_snbTablet.vue"; // myPage Left 메뉴 모바일
import videoModal from "@pages/mypage/edu/videoModal.vue";
import { call } from "@/api";

const router = useRouter();
const { MENTORING: { MENTORING_EDU_ING_INFO }, } = useAppConfig();

const segment = 'ing';  // 멘토 수강 중 교육

// Video 변수
const compVideoModal = videoModal;
let isShowVideo = ref(false);

// 그리드 영역 Visible
const gridVisible = reactive({
  pre: false, // 사전교육
  ot: false,  // OT교육
  reg: false, // 정기교육
});

const eduData = reactive({
  preEdu: "0/0",      // 사전 필수 교육
  preEduAplcn: "0",      // 사전 필수 교육 신청수
  preEduAll: "0",      // 사전 필수 교육 전체수
  otherEdu: "0/0",    // 기타 필수 교육
  otherEduAplcn: "0",    // 기타 필수 교육 신청수
  otherEduAll: "0",    // 기타 필수 교육 전체수
  preEduDetailsCnt: 0,    // 사전교육 목록 총건수
  preEduDetails: [],      // 사전교육 목록
  otEduDetailsCnt: 0,     // OT교육 목록 총건수
  otEduDetails: [],       // OT교육 목록
  regularEduDetailsCnt: 0,  // 정기교육 목록 총건수
  regularEduDetails: [],  // 정기교육 목록
});  // 교육정보

const videoProps = reactive({
  slcIdx: "",
});

// 멘토교육 정보 조회
const getData = async () => {
  await call({
    id: "멘토 수강중교육 정보 조회",
    endpoint: MENTORING_EDU_ING_INFO,
    headers: "PUBLIC",
    onResponse({ data, status }) {
      if (status === 200) {
        Object.assign(eduData, data);
        
        if (eduData.preEdu && eduData.preEdu.indexOf('/') >= 0) {
          eduData.preEduAplcn = eduData.preEdu.split('/')[0]; // 사전 필수 교육 신청수
          eduData.preEduAll = eduData.preEdu.split('/')[1]; // 사전 필수 교육 전체수
        }
        
        if (eduData.otherEdu && eduData.otherEdu.indexOf('/') >= 0) {
          eduData.otherEduAplcn = eduData.otherEdu.split('/')[0]; // 기타 필수 교육 신청수
          eduData.otherEduAll = eduData.otherEdu.split('/')[1]; // 기타 필수 교육 전체수
        }

        eduData.preEduDetailsCnt = eduData.preEduDetails.length;  // 사전교육 목록 총건수
        eduData.otEduDetailsCnt = eduData.otEduDetails.length;  // OT교육 목록 총건수
        eduData.regularEduDetailsCnt = eduData.regularEduDetails.length;  // 정기교육 목록 총건수

        // 사전교육 펼칠지 여부
        gridVisible.pre = (eduData.preEduDetailsCnt > 0);

        return true;
      }
    },
  });
};

// Open VideoModel
const openViedeoModal = (item) => {
  videoProps.slcIdx = item.slcIdx;

  // 플레이어 모달 호출
  isShowVideo.value = true;
};

const videoModalClose = () => {
  isShowVideo.value = false;
};

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
            <div class="c-text-title-lg">수강 중 교육</div>
            <div class="c-text-title-sub">
              <p>
                수료가 완료된 강의는 수료한 교육에서 확인하실수있습니다. <br />
                도움이 필요하실 땐 서울런 고객센터<br
                  class="c-mo"
                />(1533-0909)로 연락주세요!
              </p>
            </div>
          </div>
          <div class="mypage__contents-body">
            <div class="mypage-edu__list-head">
              <dl>
                <dt>사전 필수 교육</dt>
                <dd><span>{{ eduData.preEduAplcn }}</span>/{{ eduData.preEduAll }}</dd>
              </dl>
              <dl>
                <dt>기타 필수 교육</dt>
                <dd><span>{{ eduData.otherEduAplcn }}</span>/{{ eduData.otherEduAll }}</dd>
              </dl>
            </div>
            <div class="mypage-edu__list-body">
              <dl>
                <dt @click="gridVisible.pre = !gridVisible.pre">
                  <div
                    class="mypage-edu__title"
                    :class="{ active: gridVisible.pre === true }"
                  >
                    <!-- 웹접근성 a태그 추가 -->
                    <a href="javascript:void(0)">사전 교육 <span>{{ eduData.preEduDetailsCnt }}</span> </a>
                    <!-- //웹접근성 a태그 추가 -->
                  </div>
                </dt>
                <dd v-show="gridVisible.pre == true">
                  <div class="mypage-edu__contents">
                    <EduLectureTable v-model="eduData.preEduDetails" :segment="segment" @showVideo="openViedeoModal" />
                  </div>
                </dd>
              </dl>
              <dl>
                <dt @click="gridVisible.ot = !gridVisible.ot">
                  <div
                    class="mypage-edu__title"
                    :class="{ active: gridVisible.ot === true }"
                  >
                    <!-- 웹접근성 a태그 추가 -->
                    <a href="javascript:void(0)"
                      >[OT] 오리엔테이션 <span>{{ eduData.otEduDetailsCnt }}</span></a
                    >
                    <!-- //웹접근성 a태그 추가 -->
                  </div>
                </dt>
                <dd v-show="gridVisible.ot == true">
                  <div class="mypage-edu__contents">
                    <EduLectureTable v-model="eduData.otEduDetails" :segment="segment" @showVideo="openViedeoModal" />
                  </div>
                </dd>
              </dl>
              <dl>
                <dt @click="gridVisible.reg = !gridVisible.reg">
                  <div
                    class="mypage-edu__title"
                    :class="{ active: gridVisible.reg === true }"
                  >
                    <!-- 웹접근성 a태그 추가 -->
                    <a href="javascript:void(0)">정기 교육 <span>{{ eduData.regularEduDetailsCnt }}</span> </a>
                  </div>
                </dt>
                <dd v-show="gridVisible.reg == true">
                  <div class="mypage-edu__contents">
                    <EduLectureTable v-model="eduData.regularEduDetails" :segment="segment" @showVideo="openViedeoModal" />
                  </div>
                </dd>
              </dl>
            </div>
            <div class="c-btn-group">
              <button class="c-btn c-btn-lg c-btn-danger" @click="router.push('/mypage/edu/compl')">
                수료강의 바로가기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <component :is="isShowVideo ? compVideoModal : null" :slcIdx="videoProps.slcIdx" @close="videoModalClose" ></component>
</template>
