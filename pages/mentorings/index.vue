<script setup>
import { uGetLoginInfo } from "@/utils";
import { call } from "@/api";

const {
  MENTORING: { MENTORING_OFFLINE_LOCATION_SEARCH, MENTORING_ABOUT_INTRO },
} = useAppConfig();

const FILENAME = "서울런 활동가이드.pdf";

const route = useRoute();
const { push, replace } = useRouter();
const { data, params } = useReadParams();
const locationParams = { ...params };
const map = ref(null);
const marker = ref(null);
let isInintMap = false;

const initialize = ref(true);
let currentLocationList = ref([]);
let distList = reactive([]);

const currentTab = computed(() => route.query.section);
const { tabList, mapOptions } = reactive({
  tabList: [
    {
      label: "멘토링 소개",
      name: "about",
    },
    {
      label: "우수 멘토링 이야기",
      name: "story",
    },
    {
      label: "멘토링 모집",
      name: "recruit",
    },
  ],
  mapOptions: {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 15,
    maxZoom: 17,
    minZoom: 12,
  },
});

onMounted(async () => {
  await onLoadEvent(currentTab.value);
});

watch (currentTab, async () => {
  const section = currentTab.value;
  if (section !== "recruit") {
    // if (section === "about") {
    //   initialize.value = true;
    // }
    await onLoadEvent(section);
  }
})

const onLoadEvent = async (section = "about") => {
  try {
    if (section === "about") {
      nextTick(() => {
        if (!isInintMap) {
          initOfflineMap();
        }
      });
    }

    await getBoardList();
  } catch (err) {
    console.error(err);
  }
};

const initOfflineMap = () => {
  map.value = new naver.maps.Map("map", mapOptions);
  naver.maps.Event.addListener(map.value, "init", () => {
    // TabIndex 삭제
    document.getElementById("map")?.removeAttribute("tabindex");  // 웹접근성 탭인덱스 제거(37 page)
    isInintMap = true;
  });
};

// 공지사항, 우수멘토링 이야기 목록 조회
const getBoardList = async () => {
  const {
    data: { excellentBoards, noticeBoards, mentorDistCodeName },
  } = await handleFetchEvent();
  Object.assign(data, {
    excellentBoards,
    noticeBoards,
  });
  distList = reactive(mentorDistCodeName.slice());
};

const handleFetchEvent = async (isDefaultPage = 0) => {
  params.pageNumber = isDefaultPage;

  return await call({
    id: "멘토링 소개",
    endpoint: MENTORING_ABOUT_INTRO,
    data: params,
    onResponse: (resData) => resData,
  });
};

const handleSearchDistLocationEvent = ({ target: { value } }) => {
  const params = {
    countryStat: "서울",
    townCity: value,
  };

  call({
    id: "멘토링 소개 - 위도/경도 위치 찾기",
    endpoint: MENTORING_OFFLINE_LOCATION_SEARCH,
    data: params,
    onResponse: ({ data }) => {
      initialize.value = false;
      currentLocationList.value = data;
    },
  });
};

const handleMakerActionEvent = (currList) => {
  const { latitude, longitude, name } = currList;
  const position = new naver.maps.LatLng(longitude, latitude);
  map.value.setCenter(position);
  if (isNull(marker.value)) {
    marker.value = new naver.maps.Marker({
      position,
      map: map.value,
      title: name,
    });
  } else {
    marker.value.setPosition(position);
  }
};

const handleTabChangeEvent = async (name, isBookMark = false) => {
  try {
    const navigationParams = { path: "/mentorings", query: { section: name } };
    if (isBookMark !== false) {
      Object.assign(navigationParams, {
        hash: isBookMark,
      });
    }
    navigateTo(navigationParams);
  } catch (err) {
    console.error(err);
  }
};

const handleStoryPaginationEvent = async (currentPage) => {
  try {
    const {
      data: { excellentBoards },
    } = await handleFetchEvent(currentPage);
    Object.assign(data, {
      excellentBoards,
    });
  } catch (err) {
    console.error(err);
  }
};

const handleMentoringAreaEvent = async () => {
  const moveSectionName = "recruit";
  await handleTabChangeEvent(moveSectionName, "#mentoring-form-wrapper");
};

const isApply = computed(() => {
  const isMentee = uGetLoginInfo("menteeYn").toString().toLowerCase();
});

const isSubmit = computed(() => {
  const mentorYn = uGetLoginInfo("mentorYn");
  const menteeYn = uGetLoginInfo("menteeYn");
  const memberTypeCode = uGetLoginInfo("memberTypeCode");

  // * 비회원일 경우 무조건 가능
  if (isEmpty(mentorYn) || isEmpty(menteeYn)) {
    return true;
  } else {
    // * 일반 회원만 가능 (차상위/멘토/멘티 모두 불가)
    return (
      memberTypeCode === "JOINKND_001" &&
      mentorYn.toLowerCase() === "n" &&
      menteeYn.toLowerCase() === "n"
    );
  }
});

definePageMeta({
  layout: "mentoring",
  middleware: [mentoringAuth],
});
</script>

<template>
  <div class="mentoring">
    <PageTitle
      title="멘토링 소개"
      desc="멘토와 멘티의 즐거운 성장과 꿈을 향한
여정을 함께하세요!"
    >
    </PageTitle>
    <div class="mentoring__wrap">
      <div class="mentoring__body">
        <div class="c-tab-nav">
          <ul>
            <li
              v-for="({ label, name }, index) in tabList"
              :key="index"
              :class="{ active: currentTab === name }"
            >
              <a href="#" @click.prevent="() => handleTabChangeEvent(name)" :title="currentTab === name ? '선택됨' : ''">{{
                label
              }}</a>
            </li>
          </ul>
        </div>
        <div class="c-tab-contents__wrap">
          <div v-show="currentTab === 'about'" class="c-tab-contents">
            <div class="mentoring__title">
              <div class="mentoring__title-lg">
                서울런 온·오프라인<br class="c-mo" />
                멘토링으로 <br />
                학습관리부터<br class="c-mo" />
                진로상담까지!
              </div>
              <div class="mentoring__title-img">
                <img src="@img/ch-mentoring1.svg" alt="" />
              </div>
              <div class="mentoring__title-sub">
                서울런을 이용중인 청소년이라면 누구나 서울런 멘토링을 통해
                <br class="c-pc c-tablet" />
                맞춤형 학습관리 및 진로상담 등의 도움을 받을 수 있습니다.<br
                  class="c-pc c-tablet"
                />
                서울런 멘토는 멘티와 1:1로 매칭되어 함께 학습 목표를 선정하고
                학습진도 및 커리큘럼을 관리하는 등<br class="c-pc c-tablet" />
                멘티가 올바른 학습 습관을 형성할 수 있도록 도움을 주고 있습니다.
              </div>
              <button
                class="c-btn c-btn-lg c-btn-primary"
                v-if="isSubmit"
                type="button"
                @click.prevent="handleMentoringAreaEvent"
              >
                멘토 지원하기
              </button>
            </div>
            <div class="mentoring__title">
              <div class="mentoring__title-lg">
                멘토 / 멘티<br class="c-mo" />
                활동 가이드
              </div>
            </div>
            <div class="mentoring__banner mentoring__banner--type02">
              <div class="mentoring__banner-title">
                멘토도 멘티도 따라만 오세요!
              </div>
              <p class="mentoring__banner-text">
                멘토링 활동 가이드를 받고 언제든지 참고해 보세요
              </p>
              <a
                class="c-btn c-btn-sm c-btn-primary"
                target="_blank"
                :download="FILENAME"
                href="/slearn_activity_guide.pdf"
              >
                멘토링 활동가이드 다운로드
              </a>
            </div>
            <div class="mentoring__title">
              <div class="mentoring__title-lg">우수 멘토링 이야기</div>
              <div class="mentoring__title-sub">
                멘토/멘티?? 이게 다 무슨 말이지?<br class="c-mo" />
                이제는 멘토링이 대세다!<br />
                서울형 교육플랫폼 멘토링을 알려드릴게요~
              </div>
            </div>
            <LazyMentoringsLatestStory v-bind="{ ...data.excellentBoards }" />
            <div class="mentoring__banner">
              <nuxt-link to="/mypage/inquiry/write">
                <div class="mentoring__banner-title">
                  멘토링에 관한 궁금한 사항은<br class="c-mo" />
                  1:1 문의로 바로 해결하세요!
                </div>
                <p class="mentoring__banner-text">
                  문의를 남겨 주시면 빠르게 답변드릴게요.
                </p>
                <div class="mentoring__banner-img">
                  <img src="@img/ch-mentoring2.svg" alt="" />
                </div>
              </nuxt-link>
            </div>
            <div class="mentoring__title">
              <div class="mentoring__title-lg">
                멘토링 오프라인<br class="c-mo" />
                장소 찾기
              </div>
              <div class="mentoring__title-sub">
                멘토링 오프라인 장소 찾기 상세 설명 영역입니다.<br />
                멘토링 오프라인 장소 찾기 상세 설명 영역입니다.
              </div>
            </div>
            <div class="mentoring__map">
              <div class="mentoring__map-img" :style="{ height: '41rem' }">
                <div id="map" :style="{ width: '100%', height: '100%' }"></div>
                <div
                  class="mentoring__map-img-nodata"
                  v-show="initialize === true"
                >
                  우측 목록에서 지역을 선택해주세요
                </div>
              </div>
              <div class="mentoring__map-text">
                <div class="mentoring__map-text-head">
                  <div class="c-form-group">
                    <label for="area-select" class="c-form-label"
                      >지역선택</label
                    >
                    <select
                      class="c-form-control"
                      @change.stop="handleSearchDistLocationEvent"
                      id="area-select"
                    >
                      <option selected disabled>선택</option>
                      <option
                        v-for="(strDistName, strIdx) in distList"
                        :value="strDistName"
                        :key="`str-dist-${strIdx}`"
                      >
                        {{ strDistName }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="mentoring__map-text-list">
                  <ul :class="{ nodata: isEmpty(currentLocationList) }">
                    <li
                      v-for="(currList, currListIdx) in currentLocationList"
                      :key="`location-${currList.distCode}-${currListIdx}`"
                    >
                      <a
                        href="#"
                        @click.prevent="() => handleMakerActionEvent(currList)"
                      >
                        <strong>{{ currList.name }}</strong>
                        <p>
                          {{ currList.addr1 }} {{ currList.addr2 }}
                          <i class="ico ico-marker">지역 이미지</i>
                        </p>
                      </a>
                    </li>
                    <li v-if="isEmpty(currentLocationList)">
                      해당하는 지역이 없습니다
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="mentoring__title">
              <div class="mentoring__title-lg">공지사항</div>
              <div class="mentoring__title-sub">
                공지사항 상세 설명 영역입니다.
              </div>
            </div>
            <LazyMentoringsLatestBoard :data="data.noticeBoards" />
            <div class="c-btn-box c-text-center">
              <button
                class="c-btn c-btn-primary"
                type="button"
                @click.prevent="() => push('/notice')"
              >
                더보기
              </button>
            </div>
          </div>
          <div v-show="currentTab === 'story'" class="c-tab-contents">
            <LazyMentoringsSectionStory v-bind="{ ...data.excellentBoards }" />
          </div>
          <div v-show="currentTab === 'recruit'" class="c-tab-contents">
            <div class="mentoring__title">
              <!-- 230616 텍스트 수정 -->
              <div class="mentoring__title-lg">
                멘토단을 소개합니다. <br />
                서울런에서 멘토단을 모집합니다.
              </div>
              <div class="mentoring__title-sub">
                대학생이라면 누구나 지역 구분없이 모집시기에 맞춰 지원할 수
                있습니다. <br />
                *단,오프라인 멘토는 서울 및 경기, 인천 지역 활동 가능자로 한정함
              </div>
              <!-- // 230616 텍스트 수정 -->
            </div>
            <div class="mentoring__recruit-step">
              <div class="mentoring__recruit-step--bg">
                <img src="@img/pic-mentoring-bg2.svg" alt="" />
              </div>
              <div class="mentoring__recruit-step--img">
                <img src="@img/ch-mentoring3.svg" alt="" />
              </div>
              <div class="mentoring__recruit-step--group">
                <div class="mentoring__recruit-step--box">
                  <span>Step 1</span>
                  <p><strong>접수 및 지원</strong></p>
                </div>
                <div class="mentoring__recruit-step--box">
                  <span>Step 2</span>
                  <p><strong>서류심사 </strong></p>
                </div>
                <div class="mentoring__recruit-step--box">
                  <span>Step 3</span>
                  <p><strong>필수교육</strong></p>
                </div>
                <div class="mentoring__recruit-step--box">
                  <span>Step 4</span>
                  <p><strong>멘토링 활동</strong></p>
                </div>
              </div>
            </div>
            <div class="mentoring__title">
              <div class="mentoring__title-lg">
                서울런 멘토링은 멘토와 멘티의 <br />
                성장과 발전을 응원합니다!
              </div>
            </div>
            <div class="mentoring__recruit-benefits">
              <div class="mentoring__recruit-benefits--box">
                <div class="mentoring__recruit-benefits--title">활동 수당</div>
                <div class="mentoring__recruit-benefits--text">
                  나의 멘티가 성장할 수 있도록 <br />
                  도와주고 활동시 소정의<br />
                  활동비를 지원합니다
                </div>
              </div>
              <div class="mentoring__recruit-benefits--box">
                <div class="mentoring__recruit-benefits--title">정기 교육</div>
                <div class="mentoring__recruit-benefits--text">
                  멘토의 성장을 돕기 위한 교육을 <br />
                  제공하고, 교육 수료시 소정의<br />
                  교육비를 지원합니다.
                </div>
              </div>
              <div class="mentoring__recruit-benefits--box">
                <div class="mentoring__recruit-benefits--title">친화 성장</div>
                <div class="mentoring__recruit-benefits--text">
                  멘토와 멘티가 <br />
                  함께 즐기며 성장할 수 있는<br />
                  다양한 활동을 지원합니다.
                </div>
              </div>
            </div>
            <div class="mentoring__title">
              <div class="mentoring__title-lg">
                멘토링 활동 경험·성과를 멘토 디지털 배지로 표현합니다!
              </div>
            </div>
            <div class="mentoring__recruit-badge">
              <div class="badge__box badge__record">
                <div class="badge__title-lg">멘토 이력 배지</div>
                <div class="badge__title-sub">
                  멘토 역량, 경력, 수강 3개 분야의 5개 단계별 배지 수여
                </div>
                <div class="badge__list">
                  <ul>
                    <li>
                      <img src="@img/ic-badge-green.svg" alt="그린" />
                      <strong>그린</strong>
                    </li>
                    <li>
                      <img src="@img/ic-badge-bronze.svg" alt="브론즈" />
                      <strong>브론즈</strong>
                    </li>
                    <li>
                      <img src="@img/ic-badge-silver.svg" alt="실버" />
                      <strong>실버</strong>
                    </li>
                    <li>
                      <img src="@img/ic-badge-gold.svg" alt="골드" />
                      <strong>골드</strong>
                    </li>
                    <li>
                      <img src="@img/ic-badge-dia.svg" alt="다이아" />
                      <strong>다이아</strong>
                    </li>
                  </ul>
                </div>
                <div class="badge__box-foot">
                  <ul>
                    <li>
                      활동기간 동안 멘토단 교육 참여, 멘토링 진행 횟수,
                      수상내역에 따라 측정·관리
                    </li>
                    <li>시스템 상 각 조건 충족시 자동 획득</li>
                  </ul>
                </div>
              </div>
              <div class="badge__box badge__special">
                <div class="badge__title-lg">멘토 특별 배지</div>
                <div class="badge__title-sub">
                  성실·우수한 멘토(멘토링팀)를 평가·선정하여 배지 수여
                </div>
                <div class="badge__list">
                  <ul>
                    <li>
                      <img src="@img/ic-badge-mentor.svg" alt="우수 멘토" />
                      <strong>우수 멘토</strong>
                      <p>Valuable Mento</p>
                    </li>
                    <li>
                      <img src="@img/ic-badge-mentor2.svg" alt="최우수 멘토" />
                      <strong>최우수 멘토</strong>
                      <p>Most Valuable Mento</p>
                    </li>
                    <li>
                      <img src="@img/ic-badge-mentor3.svg" alt="명예 멘토" />
                      <strong>명예 멘토</strong>
                      <p>Honor Mento</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <template v-if="currentTab === 'recruit'">
              <MentoringsForm v-if="isSubmit" />
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
