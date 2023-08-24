<script setup>
import { call } from "@/api";
import Snb from "@pages/mypage/_snb.vue";
import SnbTablet from "@pages/mypage/_snbTablet.vue";
import { useModalStore } from "@/store";
const modal = useModalStore();

definePageMeta({
  layout: "mypage",
});

const handleClickItem = (category) => {
  d.lp[category].isOpen = !d.lp[category].isOpen;
};

onMounted(async () => {
  await getMentorData();
  await getCPData();
});
const d = reactive({
  lp: {
    sub: {
      isOpen: false,
      sectionTitle: "교과 강좌 추천",
      items: [],
      count: 0,
    },
    nonSub: {
      isOpen: false,
      sectionTitle: "전문 강좌 추천",
      items: [],
      count: 0,
    },
    read: {
      isOpen: false,
      sectionTitle: "독서 추천",
      items: [],
      count: 0,
    },
    mentor: {
      isOpen: false,
      sectionTitle: "멘토 추천 강좌",
      items: [],
      count: 0,
    },
  },
  data: {
    items: [],
    count: 0,
  },
});

// cp사 별로 정렬 시키기위한 함수
const sort = (a, b) => {
  if (
    a.cpId.split("_")[a.cpId.split("_").length - 1] <
    b.cpId.split("_")[b.cpId.split("_").length - 1]
  ) {
    return -1;
  }
  if (
    a.cpId.split("_")[a.cpId.split("_").length - 1] >
    b.cpId.split("_")[b.cpId.split("_").length - 1]
  ) {
    return 1;
  }
  if (
    a.cpId.split("_")[a.cpId.split("_").length - 1] ===
    b.cpId.split("_")[b.cpId.split("_").length - 1]
  ) {
    return 0;
  }
  return -1;
};
const getMentorData = async () => {
  await call({
    id: "멘토 추천 강의 리스트 조회",
    endpoint: `/api/sq/my/rcmd/mentor/list`,
    headers: "PUBLIC",
    onResponse({ data }) {
      d.lp.mentor.items = data.mentor.sort((a, b) => sort(a, b));
      d.lp.mentor.count = data.mentorSize;
      return true;
    },
  });
};

const getCPData = async () => {
  await call({
    id: "cp 추천 강의 리스트 조회",
    endpoint: `/api/sq/my/rcmd/cp/list`,
    headers: "PUBLIC",
    onResponse({ data }) {
      d.lp.nonSub.items = data.nonSub.sort((a, b) => sort(a, b));
      d.lp.nonSub.count = data.nonSubSize;
      d.lp.read.items = data.read.sort((a, b) => sort(a, b));
      d.lp.read.count = data.readSize;
      d.lp.sub.items = data.sub.sort((a, b) => sort(a, b));
      d.lp.sub.count = data.subSize;
      return true;
    },
  });
};
const goUrl = (url) => {
  window.open(url);
};
const copyToClipboard = async (data) => {
  await window.navigator.clipboard.writeText(data).then(() => {
    modal.alert("알림", "복사되었습니다.");
  });
};
</script>

<template>
  <div class="mypage">
    <SnbTablet />
    <BreadCrumbs />
    <div class="mypage-report">
      <div class="mypage__wrap">
        <Snb />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <MypageTitle
              title="추천 강의"
              desc="나의 활동과 학습에 대한 분석을 통해 맞춤 강의를 AI가 분석 하여
                추천해 드립니다.<br />
                도움이 필요하실 땐 서울런 고객센터(1533-0909)로 연락주세요!"
            />
          </div>
          <div class="mypage__contents-body">
            <div class="mypage-edu__list-head">
              <dl v-for="category in Object.keys(d.lp)">
                <dt>{{ d.lp[category].sectionTitle }}</dt>
                <dd>
                  <span>{{ d.lp[category].count }}</span>
                </dd>
              </dl>
            </div>
            <div class="mypage-edu__list-body">
              <dl v-for="category in Object.keys(d.lp)">
                <dt @click="handleClickItem(category)">
                  <div
                    class="mypage-edu__title"
                    :class="{ active: d.lp[category].isOpen }"
                  >
                    <a href="javascript:void(0)">
                      {{ d.lp[category].sectionTitle }}
                      <span>{{ d.lp[category].count }}</span></a
                    >
                  </div>
                </dt>

                <dd
                  v-if="!isEmpty(d.lp[category].items) && d.lp[category].isOpen"
                >
                  <div class="mypage-edu__contents">
                    <div class="lecture">
                      <div class="lecture-list lecture-list--type03">
                        <div
                          class="lecture-list__item"
                          v-for="lecture in d.lp[category].items"
                          :key="lecture"
                        >
                          <div class="lecture-list__item-head">
                            <div class="lecture-list__item-head-img">
                              <img
                                :src="`${lecture.nonActvLogoImgFilePath}`"
                                alt="로고"
                                @click="goUrl(lecture.url)"
                              />
                            </div>
                          </div>
                          <div class="lecture-list__item-title">
                            <p>
                              <a :href="`${lecture.url}`" target="_blank">
                                {{ lecture.courseName }}
                              </a>
                            </p>
                          </div>
                          <div class="lecture-list__item-type">
                            {{ lecture.grade }}과정
                            {{ lecture.subject ? ` · ${lecture.subject}` : "" }}
                            {{
                              lecture.courseType
                                ? ` · ${lecture.courseType}`
                                : ""
                            }}
                          </div>
                          <div class="lecture-list__item-time">
                            <p>
                              {{
                                lecture.number_of_sessions
                                  ? `총 ${lecture.number_of_sessions}차시`
                                  : ""
                              }}
                              {{
                                lecture.number_of_sessions && lecture.time_min
                                  ? `, ${
                                      lecture.number_of_sessions *
                                      lecture.time_min
                                    }분`
                                  : ""
                              }}
                              {{
                                !lecture.number_of_sessions && lecture.time_min
                                  ? `${lecture.time_min}분`
                                  : ""
                              }}
                            </p>
                            <button
                              class="c-btn c-btn-sm c-btn-radius c-btn-outline"
                              @click="copyToClipboard(lecture.courseName)"
                            >
                              <i class="ico ico-copy">복사</i>강의명 복사
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
