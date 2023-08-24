<script setup>
import { call } from "@/api";
import { useModalStore } from "@/store";
const modal = useModalStore();

definePageMeta({
  layout: "mypage",
});
const d = reactive({
  cp: JSON.parse(uGetLoginInfo("cp")),
  subCp: JSON.parse(uGetLoginInfo("sub_cp")),
  leaningList: [],
  cpList: [],
  subCpList: [],
});
onMounted(async () => {
  await getLeaning();
  await getCPSub();
  await getCPNonSub();
});
const getLeaning = async () => {
  await call({
    id: "서울런 AI 학습중인 수강내역",
    endpoint: "/api/sq/my/course/list",
    headers: "PUBLIC",
    data: {
      courseCate: "D",
      sortType: "N",
      pageSize: 4,
      pageNumber: 0,
      order: "DESC",
    },
    onResponse({ data }) {
      console.log("서울런 AI 학습중인 수강내역 >> ", data);

      d.leaningList = data.rows;
      return true;
    },
  });
};
const getCPSub = async () => {
  await call({
    id: "서울런 AI 교과 추천 목록",
    endpoint: "/api/sq/recommend/cp/subj",
    onResponse({ data }) {
      console.log("서울런 AI 교과 추천 목록 >> ", data);
      d.cpList = data.slice(0, 4);
      return true;
    },
  });
};
const getCPNonSub = async () => {
  await call({
    id: "서울런 AI 비교과 추천 목록",
    endpoint: "/api/sq/recommend/cp/nonsubj",
    onResponse({ data }) {
      d.subCpList = data;
      console.log("서울런 AI 비교과 추천 목록 >> ", data);
    },
  });
};
const copyToClipboard = async (data) => {
  await window.navigator.clipboard.writeText(data).then(() => {
    modal.alert("알림", "강의명이 복사되었습니다.");
  });
};
</script>

<template>
  <div class="mypage">
    <div class="mypage-report">
      <PageTitle
        title="서울런 AI 학습추천"
        desc="학습도, 자기개발도 이제 찾아보는 것은 그만! 선택한 방식에 따라
알아서 찾아주는 AI 서울런의 관심추천 서비스로 한번에 알아보세요!"
      />
      <div class="mypage__wrap">
        <div class="mypage__contents-body w-100">
          <div class="mypage__report">
            <div class="mypage__report-box--title">
              <div class="mypage__report-title--sub">
                현재 학습중인 수강<br class="c-mo" />
                내역이에요<br class="c-mo" />
                <span>(최근 4개까지 노출됩니다.)</span>
              </div>
              <a href="/mypage/lecture" class="mypage__report-link">
                전체 이력보기
                <i class="ico ico-arrow">화살표 이미지</i>
              </a>
            </div>
            <div class="mypage__report-list">
              <div class="c-card--inline" v-if="!isEmpty(d.leaningList)">
                <div
                  class="c-card c-card--border c-card--custom"
                  v-for="leaning in d.leaningList"
                >
                  <div class="c-card-logo">
                    <img
                      :src="leaning.nonActvLogoImgFilePath"
                      :alt="`${leaning.courseCateName} 로고`"
                    />

                    <div class="c-card-title c-card-title--sm">
                      <strong v-html="leaning.courseName"> </strong>
                    </div>
                  </div>
                  <div class="c-card-body">
                    <dl class="c-card-info">
                      <dt>최근 수강일</dt>
                      <dd v-if="leaning.lastStudyDtm !== '0'">
                        {{
                          `${uConvertDate(leaning.lastStudyDtm, "YYYY.MM.DD")}`
                        }}
                      </dd>
                      <dd v-else>-</dd>
                    </dl>
                    <dl class="c-card-info">
                      <dt>진도율</dt>
                      <dd class="c-card-foot-progress">
                        <div class="c-progress">
                          <div
                            class="c-progress-bar"
                            :style="`width: ${leaning.progRate}%`"
                          ></div>
                        </div>
                        <strong class="c-text-primary"
                          >{{ leaning.progRate }}%</strong
                        >
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <NoData
                :contents="'현재 학습중인 수강 내역이 없습니다.'"
                v-else
              />
            </div>

            <div class="mypage__report-box--title">
              <div class="mypage__report-title--sub">
                <strong class="c-text-blue">{{ d.cp.cdnm }}</strong>
                에서<br class="c-mo" />
                학습기반으로<br class="c-mo" />
                맞춤형 강좌를 찾았어요
              </div>
              <a href="/mypage/lecture-pick" class="mypage__report-link">
                더 알아보기
                <i class="ico ico-arrow">화살표 이미지</i>
              </a>
            </div>
            <div class="mypage__report-list">
              <div class="c-card--inline" v-if="!isEmpty(d.cpList)">
                <div class="c-card c-card--border" v-for="cp in d.cpList">
                  <div class="c-card-logo">
                    <a :href="`${cp.url}`" target="_blank">
                      <img
                        :src="cp.nonActvLogoImgFilePath"
                        :alt="`${cp.courseCateName} 로고`"
                      />
                    </a>
                  </div>
                  <div class="c-card-body">
                    <div class="c-card-title c-card-title--sm">
                      <a :href="`${cp.url}`" target="_blank">
                        <strong v-html="cp.courseName"> </strong>
                      </a>
                    </div>
                    <div class="c-card-subtitle">
                      {{ cp.grade }}과정
                      {{ cp.subject ? ` · ${cp.subject}` : "" }}
                      {{ cp.courseType ? ` · ${cp.courseType}` : "" }}
                    </div>
                    <div class="c-card-foot c-card-foot-time">
                      <p>
                        {{
                          cp.number_of_sessions
                            ? `총 ${cp.number_of_sessions}차시`
                            : ""
                        }}
                        {{
                          cp.number_of_sessions && cp.time_min
                            ? `, ${cp.number_of_sessions * cp.time_min}분`
                            : ""
                        }}
                        {{
                          !cp.number_of_sessions && cp.time_min
                            ? `${cp.time_min}분`
                            : ""
                        }}
                      </p>
                      <button
                        class="c-btn c-btn-sm c-btn-radius c-btn-outline"
                        @click="copyToClipboard(cp.courseName)"
                      >
                        <i class="ico ico-copy">화살표 이미지</i>강의명 복사
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <NoData
                :contents="'현재 학습중인 수강 내역이 없습니다.'"
                v-else
              />
            </div>

            <div class="mypage__report-box--title" v-if="!isEmpty(d.subCp)">
              <div class="mypage__report-title--sub">
                <strong class="c-text-blue" v-for="(subCp, index) in d.subCp">{{
                  index === 0 ? subCp.cdnm : ", " + subCp.cdnm
                }}</strong>
                에서 좋아할 만한<br class="c-mo" />
                콘텐츠를 찾았어요
              </div>
              <a href="/mypage/lecture-pick" class="mypage__report-link">
                더 알아보기
                <i class="ico ico-arrow">화살표 이미지</i>
              </a>
            </div>
            <div class="mypage__report-list" v-if="!isEmpty(d.subCp)">
              <div class="c-card--inline" v-if="!isEmpty(d.subCpList)">
                <div
                  class="c-card c-card--border"
                  v-for="subCpLecture in d.subCpList.slice(0, 4)"
                >
                  <div class="c-card-logo">
                    <a :href="`${subCpLecture.url}`" target="_blank">
                      <img
                        :src="subCpLecture.nonActvLogoImgFilePath"
                        :alt="`${subCpLecture.courseCateName} 로고`"
                      />
                    </a>
                  </div>
                  <div class="c-card-body">
                    <div class="c-card-title c-card-title--sm">
                      <a :href="`${subCpLecture.url}`" target="_blank">
                        <strong v-html="subCpLecture.courseName"> </strong>
                      </a>
                    </div>
                    <div class="c-card-subtitle">
                      <span>
                        {{ subCpLecture.grade }}과정
                        {{
                          subCpLecture.subject
                            ? ` · ${subCpLecture.subject}`
                            : ""
                        }}
                        {{
                          subCpLecture.courseType
                            ? ` · ${subCpLecture.courseType}`
                            : ""
                        }}
                      </span>
                    </div>
                    <div class="c-card-foot c-card-foot-time">
                      <p>
                        {{
                          subCpLecture.number_of_sessions
                            ? `총 ${subCpLecture.number_of_sessions}차시`
                            : ""
                        }}
                        {{
                          subCpLecture.number_of_sessions &&
                          subCpLecture.time_min
                            ? `, ${
                                subCpLecture.number_of_sessions *
                                subCpLecture.time_min
                              }분`
                            : ""
                        }}
                        {{
                          !subCpLecture.number_of_sessions &&
                          subCpLecture.time_min
                            ? `${subCpLecture.time_min}분`
                            : ""
                        }}
                      </p>
                      <button
                        class="c-btn c-btn-sm c-btn-radius c-btn-outline"
                        @click="copyToClipboard(subCpLecture.courseName)"
                      >
                        <i class="ico ico-copy">화살표 이미지</i>강의명 복사
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <NoData
                :contents="'현재 학습중인 수강 내역이 없습니다.'"
                v-else
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mypage__wrap {
  @include mobile {
    padding-top: 6rem;
  }
}
</style>
