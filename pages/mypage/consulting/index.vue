<script setup>
import { call } from "@/api";
import Snb from "@pages/mypage/_snb.vue";
import SnbTablet from "@pages/mypage/_snbTablet.vue";

definePageMeta({
  layout: "mypage",
});

onMounted(() => {
  getData();
  getBannerData();
});
const d = reactive({
  pageSize: 10,
  rdBanner: "",
  adBanner: "",
  data: {
    pageNumber: 0,
    rows: [],
    totalPages: 1,
    totalRecords: 0,
  },
});
// 페이징
const changedIndex = (index) => {
  d.index = index;
  getData();
};

const getData = async () => {
  await call({
    id: "진로 상담 신청 리스트 조회",
    endpoint: `/api/sq/counsel/apply/list`,
    headers: "PUBLIC",
    data: {
      pageSize: d.pageSize,
      pageNumber: d.index,
    },
    onResponse({ data }) {
      console.log(data);
      d.data = data;
      return true;
    },
  });
};
const getBannerData = async () => {
  await call({
    id: "진로 상담 신청 배너 조회",
    endpoint: `/api/sq/counsel/banner`,
    onResponse({ data }) {
      console.log("배너>>", data);
      d.rdBanner = data.filter((e) => e.code === "RD")[0];
      d.adBanner = data.filter((e) => e.code === "AD")[0];
      return true;
    },
  });
};
</script>

<template>
  <div class="mypage">
    <SnbTablet />
    <BreadCrumbs />
    <div class="mypage-consulting">
      <div class="mypage__wrap">
        <Snb />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <MypageTitle
              title="진로/진학 상담 내역"
              desc="사전 교육을 필수로 완료해주시길 바랍니다. <br />
                도움이 필요하실 땐 서울런 고객센터<br
                  class='c-mo'
                />(1533-0909)로 연락주세요!"
            />
          </div>
          <div class="mypage__contents-body">
            <div class="mypage-consulting__box-wrap">
              <!-- <a
              v-if="!d.rdBanner"
              href="javascript:void(0);"
                class="mypage-consulting__box mypage-consulting__box-career"
              >
                <div class="mypage-consulting__box-head">진로 상담 신청</div>
                <div class="mypage-consulting__box-body">
                  <p>
                    준비중입니다.<br />
                    오늘도 화이팅 하며 조금만 기다려주세요!
                  </p>
                </div>
              </a> -->
              <a
                :href="`/consulting/${d.rdBanner.counselSeq}`"
                class="mypage-consulting__box mypage-consulting__box-career"
              >
                <div class="mypage-consulting__box-head">
                  {{ d.rdBanner.title }}
                  <div class="c-badge c-badge-blue">OPEN</div>
                </div>
                <div class="mypage-consulting__box-body">
                  <p>
                    {{ uConvertDate(d.rdBanner.startDay,"YYYY.MM.DD") }} ~ {{ uConvertDate(d.rdBanner.endDay,"YYYY.MM.DD") }}<br />
                    <p v-html="d.rdBanner.description"></p>
                  </p>
                </div>
              </a>
              <a  v-if="!d.adBanner" href="javascript:void(0);" class="mypage-consulting__box">
                <div class="mypage-consulting__box-head">진학 상담 신청</div>
                <div class="mypage-consulting__box-body">
                  <p>
                    준비중입니다.<br />
                    조금만 기다려주세요!
                  </p>
                </div>
              </a>
              <a v-else :href="`/consulting/${d.adBanner.counselSeq}`" class="mypage-consulting__box">
                <div class="mypage-consulting__box-head">
                  {{ d.adBanner.title }}
                  <div class="c-badge c-badge-blue">OPEN</div>
                </div>
                <div class="mypage-consulting__box-body">
                  <p>
                    {{ uConvertDate(d.adBanner.startDay,"YYYY.MM.DD") }} ~ {{ uConvertDate(d.adBanner.endDay,"YYYY.MM.DD") }}<br />
                    <p v-html="d.adBanner.description"></p>
                  </p>
                </div>
              </a>
            </div>
            <div class="mypage-consulting__list">
              <dl v-if="d.data?.rows?.length > 0" v-for="item in d.data.rows">
                <dt @click="item.isShow = !item.isShow">
                  <a href="javascript:void(0)">
                  <div
                    class="mypage-consulting__title"
                    :class="{ active: item.isShow === true }"
                  >
                    <div class="mypage-consulting__title-category">
                      {{
                        item.counselStatus === "C"
                          ? "당첨 취소"
                          : item.counselStatus === "W"
                          ? "접수 대기"
                          : "승인 완료"
                      }}
                    </div>
                    <div class="mypage-consulting__title-text">
                      <p>진로 상담 신청</p>
                      <span
                        >신청일
                        {{ uConvertDate(item.applyDtm, "YYYY.MM.DD") }}</span
                      >
                    </div>
                  </div>
                  </a>
                </dt>
                <dd v-show="item.isShow == true">
                  <div class="mypage-consulting__contents">
                    <div class="mypage-consulting__contents-box">
                      <dl>
                        <dt>상담 선생님</dt>
                        <dd>{{ item.counselName }} 선생님</dd>
                      </dl>
                      <dl>
                        <dt>상담 진행 회차</dt>
                        <dd>{{ item.counselCnt }}회 완료</dd>
                      </dl>
                    </div>
                  </div>
                </dd>
              </dl>
              <div class="c-notfound" v-else>
                <img
                  src="@img/ch-table.svg"
                  alt="참여한 이벤트가 없습니다. 다양한 이벤트에 참여해보세요!"
                />
                <p>
                  아직 진로/진학 상담 내역이 없어요. <br />
                  학습을 열심히, 성실히 하면 많은 상이 기다릴 거예요
                </p>
              </div>
              <Pagination
                v-if="d.data?.rows?.length > 0"
                :pageNumber="d.data.pageNumber"
                :totalRecords="d.data.totalRecords"
                :totalPages="d.data.totalPages"
                :pageSize="d.pageSize"
                @changedPageIndex="changedIndex"
              />
            </div>

            <!-- temp -->
            <br /><br /><br />
            <!-- temp -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
