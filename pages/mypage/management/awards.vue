<script setup>
import Snb from "@pages/mypage/_snb.vue";
import SnbTablet from "@pages/mypage/_snbTablet.vue";

import green from "@img/ic-badge-green.svg";
import bronze from "@img/ic-badge-bronze.svg";
import silver from "@img/ic-badge-silver.svg";
import gold from "@img/ic-badge-gold.svg";
import diamond from "@img/ic-badge-dia.svg";

import hono from "@img/ic-badge-mentor2.svg";
import excellent from "@img/ic-badge-excellent.svg";
import grand from "@img/ic-badge-mentor.svg";
import { call } from "@/api";

let {
  MENTORING: { MENTORING_COMMON_AWARD_LIST },
} = useAppConfig();

const { $dayjs } = useNuxtApp();
const { params, data } = useReadParams();
const minYear = 2021;
const { role } = getUserRole();
const handleFetchEvent = async () => {
  MENTORING_COMMON_AWARD_LIST = MENTORING_COMMON_AWARD_LIST.replace(
    /{role}/,
    role
  );
  const { year } = params;

  await call({
    id: "멘토링 관리 - 내 배지 내역 리스트",
    endpoint: MENTORING_COMMON_AWARD_LIST,
    data: { year },
    onResponse: ({ data: resData }) => {
      const { rows } = { ...resData };
      resData.rows = rows.map(({ awardCode, ...props }) => {
        const awardType = ["AB", "CA", "AW"].includes(awardCode)
          ? "BADGE"
          : "AWARD";

        let src = "";

        if (awardType === "BADGE") {
          switch (props.grade.toUpperCase()) {
            case "G":
              src = green;
              break;
            case "B":
              src = bronze;
              break;
            case "S":
              src = silver;
              break;
            case "G":
              src = gold;
              break;
            case "D":
              src = diamond;
              break;
          }
        } else {
          switch (awardCode) {
            case "HONO":
              src = hono;
              break;
            case "GRAN":
              src = grand;
              break;
            case "EXCE":
              src = excellent;
              break;
          }
        }

        return {
          src,
          awardType,
          awardCode,
          ...props,
        };
      });
      Object.assign(data, { ...resData });
    },
  });
};
const onLoadEvent = async () => {
  Object.assign(params, {
    year: $dayjs().format("YYYY"),
  });
  await handleFetchEvent();
};

await onLoadEvent();

definePageMeta({
  layout: "mypage",
  middleware: [mentoringAuth],
});
</script>
<template>
  <div class="mypage">
    <SnbTablet />
    <PubBreadCrumbs />
    <div class="mypage-awards">
      <div class="mypage__wrap">
        <Snb />
        <div class="mypage__contents">
          <MypageTitle
            title="내 배지 내역"
            desc="
            제공되는 배지 내역은 멘토링을 독려하기 위해 제공되는 마크입니다.
            <br />
            도움이 필요하실 땐<br class='c-mo' />
            서울런 고객센터(1533-0909)로 연락주세요!"
          />
          <div class="mypage__contents-search mypage__contents-search-awards">
            <div class="c-form-group">
              <label for="year-select" class="c-form-label">연도</label>
              <select
                id="year-select"
                class="c-form-control c-form-control-sm"
                v-model.number="params.year"
              >
                <!-- 날짜 최소/최대값 정책 필요 -->
                <template v-for="(strYear, index) in 8">
                  <option :value="minYear + index">
                    {{ minYear + index }}
                  </option>
                </template>
              </select>
              <button
                class="c-btn c-btn-blue"
                @click.prevent="handleFetchEvent"
              >
                조회
              </button>
            </div>
          </div>
          <div class="mypage__contents-body">
            <ul class="mypage-awards__list" v-if="!isEmpty(data.rows)">
              <li
                v-for="(item, index) in data.rows"
                :key="`list-${params.year}-${index}`"
              >
                <div class="mypage-awards__list-img">
                  <img :src="item.src" :alt="item.awardCode" />
                </div>
                <span>{{ item.awardDtm }}</span>
                <p v-if="item.awardType === 'BADGE'">
                  {{ item.testimonialSubject }}
                </p>
                <p v-else>{{ item.awardCodeName }}</p>
              </li>
            </ul>
            <CommonNotFound v-else>
              <p>
                내 배지 내역이 없습니다.<br />
                학습을 열심히, 성실히 하면 많은 배지를 받을수 있어요
              </p>
            </CommonNotFound>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
