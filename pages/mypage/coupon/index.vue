<script setup>
import Snb from "@pages/mypage/_snb.vue";
import SnbTablet from "@pages/mypage/_snbTablet.vue";
import moment from "moment";

import { call } from "@/api";
import "v-calendar/dist/style.css";
import { useModalStore } from "@/store";
const modal = useModalStore();

const vm = getCurrentInstance();
definePageMeta({
  layout: "mypage",
});

const d = reactive({
  pageSize: 10,
  pageNumber: 0,
  searchOption: "all",
  startDate: uConvertDate(moment().add(-1, "months"), "YYYY.MM.DD"),
  endDate: uConvertDate(moment(), "YYYY.MM.DD"),
  data: {
    rows: {
      validStartDt: "",
      validEndDt: "",
    },
  },
});
onMounted(() => {
  getData();
});

const changedIndex = (index) => {
  d.pageNumber = index;
  getData();
};

const handleChangedFilter = (val1, val2) => {
  console.log(`${val1} ~ ${val2}`);
  d.startDate = val1;
  d.endDate = val2;

  getData();
};

const copyToClipboard = (couponNum) => {
  const textarea = document.createElement("textarea");
  textarea.value = couponNum;
  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand("copy");

  document.body.removeChild(textarea);

  modal.alert("알림", "복사되었습니다.");
};

const getData = async () => {
  await call({
    id: "마이페이지 내 쿠폰 조회",
    endpoint: `/api/sq/coupon/list`, // ${uGetLoginInfo("loginid")}
    headers: "PUBLIC",
    data: {
      pageSize: d.pageSize,
      pageNumber: d.pageNumber,
      startDate: uConvertDate(d.startDate, "YYYY.MM.DD"),
      endDate: uConvertDate(d.endDate, "YYYY.MM.DD"),
      useYn: d.searchOption,
    },
    onResponse({ data }) {
      console.log("조회데이터 >>", data);
      d.data = data;

      return true;
    },
  });
};
</script>

<template>
  <div class="mypage">
    <SnbTablet />
    <BreadCrumbs />
    <div class="mypage-coupon">
      <div class="mypage__wrap">
        <Snb />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <div class="c-text-title-lg">내 쿠폰 관리</div>
            <div class="c-text-title-sub">
              <p>
                서울런에서 제공하는 쿠폰 사용방법을<br class="c-mo" />
                자세히 알아보고 혜택을 누려보세요!
                <br />
                도움이 필요하실 땐 서울런 고객센터<br class="c-mo" />
                (1533-0909)로 연락주세요!
              </p>
              <button class="c-btn c-btn-sm c-btn-danger">
                메뉴얼 다운로드
              </button>
            </div>
          </div>
          <div class="mypage__contents-search">
            <div class="c-form-group">
              <label for="status" class="c-form-label">상태별</label>
              <select
                name=""
                id="status"
                class="c-form-control c-form-control-sm"
                v-model="d.searchOption"
              >
                <option value="all">전체</option>
                <option value="N">미사용</option>
                <option value="Y">사용완료</option>
              </select>
            </div>
            <div class="c-form-group">
              <CalendarFilter @changed="handleChangedFilter" />
            </div>
          </div>
          <div class="mypage__contents-body">
            <div class="mypage__contents-head--sm">
              총 {{ d.data.rows.length }}개
            </div>
            <CommonNodata
              :nodata="'등록된 쿠폰이 없습니다'"
              v-if="isEmpty(d.data.rows)"
            ></CommonNodata>
            <div class="mypage-coupon__list">
              <div
                class="mypage-coupon__list-item"
                v-for="(item, idx) in d.data.rows"
                :class="
                  item.useYn === 'Y' ? 'mypage-coupon__list-item--end' : ''
                "
              >
                <div class="mypage-coupon__list-item-contents">
                  <div class="mypage-coupon__list-item-head">
                    <div class="c-badge">{{ item.couponTitle }}</div>
                  </div>
                  <div class="mypage-coupon__list-item-text">
                    2만원 상당 쿠폰 증정
                  </div>
                  <div class="mypage-coupon__list-item-number">
                    쿠폰번호 :
                    <span
                      v-if="
                        item.useYn === 'N' || moment().isAfter(item.validEndDt)
                      "
                      >{{ item.couponNo }}</span
                    >
                  </div>
                  <div class="c-text-caution c-text-caution--type02">
                    초등학습사이트와 윌라에서는 쿠폰을 사용하실 수 없습니다.
                  </div>
                  <div class="mypage-coupon__list-item-date">
                    {{
                      `${uConvertDate(
                        item.validStartDt,
                        "YYYY.MM.DD"
                      )}~${uConvertDate(item.validEndDt, "YYYY.MM.DD")}`
                    }}
                  </div>
                </div>
                <a
                  v-if="item.useYn === 'N' || moment().isAfter(item.validEndDt)"
                  href="javascript:void(0)"
                  @click="copyToClipboard(item.couponNo)"
                  class="mypage-coupon__list-item-copy"
                >
                  <i class="ico ico-copy">쿠폰번호 복사</i>
                  쿠폰번호<br class="c-pc c-tablet" />복사
                </a>
                <a
                  v-else
                  href="javascript:void(0)"
                  class="mypage-coupon__list-item-copy"
                >
                  사용완료 <br />
                  <span>{{ uConvertDate(item.useDtm, "YYYY.MM.DD") }}</span>
                  <span v-if="item.useYn === 'Y' && !isEmpty(item.cpName)"
                    >({{ item.cpName }})</span
                  >
                  <span v-else>
                    {{ moment().add(1, "day").format("YYYY.MM.DD") }}
                  </span>
                </a>
              </div>
            </div>
            <Pagination
              v-if="d.data?.rows?.length > 0"
              :pageNumber="d.data.pageNumber"
              :totalRecords="d.data.totalRecords"
              :totalPages="d.data.totalPages"
              @changedPageIndex="changedIndex"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
