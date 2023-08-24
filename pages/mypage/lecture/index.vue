<script setup>
import Snb from "@pages/mypage/_snb.vue";
import SnbTablet from "@pages/mypage/_snbTablet.vue";
import { call } from "@/api";
import moment from "moment";
import { useModalStore } from "@/store";

definePageMeta({
  layout: "mypage",
});
const modal = useModalStore();
const router = useRouter();
const d = reactive({
  searchType: "ALL",
  isAlert: false,
  sortType: "N",
  startDate: uConvertDate(moment().add(-1, "months"), "YYYYMMDD"),
  endDate: uConvertDate(moment(), "YYYYMMDD"),
  data: {
    course: {
      rows: [],
      totalRecords: "",
    },
    cp: [],
  },
});

onMounted(() => {
  getCourseData();
  getCpData();

  if (
    uGetLoginInfo("mentorYn") === "N" &&
    uGetLoginInfo("memberJoinTypeCode") !== "JOINKND_001"
  ) {
    getCourseModifyData();
  }
});

const getCpData = async () => {
  await call({
    id: "마이페이지 내 수강 이력 조회",
    endpoint: "/api/sq/my/cp",
    headers: "PUBLIC",
    onResponse({ data }) {
      console.log("cp>>>", data);
      d.data.cp = data;

      return true;
    },
  });
};

const checkValidName = (name) => {
  const hangulRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  return hangulRegex.test(name);
};
const getCourseModifyData = async () => {
  await call({
    id: "cp 변경 기간 조회",
    endpoint: "/api/sq/my/course/modify",
    headers: "PUBLIC",
    onResponse({ data }) {
      console.log("cp 변경 기간 조회>>", data);
      if (data.dtm === "now") {
        d.isAlert = true;
      }
    },
  });
};

const getCourseData = async () => {
  await call({
    id: "마이페이지 내 수강 이력 조회",
    endpoint: "/api/sq/my/course/list",
    headers: "PUBLIC",
    data: {
      startDtm: d.startDate,
      endDtm: d.endDate,
      courseCate: d.searchType,
      sortType: d.sortType,
      pageSize: 10,
      pageNumber: d.data.course.pageNumber,
      order: "DESC",
    },
    onResponse({ data }) {
      console.log("수강 이력 조회 Course >> ", data);

      d.data.course = data;
      return true;
    },
  });
};
const changedIndex = (index) => {
  d.data.course.pageNumber = index;
  getCourseData();
};

const handleChangedFilter = (val1, val2) => {
  d.startDate = val1;
  d.endDate = val2;
  getCourseData();
};

const goMemberPage = () => {
  modal.alert(
    "알림",
    "회원정보 변경에 평생학습포털 이용동의를 진행해주세요.",
    () => {
      router.push("/mypage/pw-check");
    }
  );
};

const excelDownload = async () => {
  await call({
    id: "파일 다운로드 API",
    endpoint: "/api/sq/my/course/list/down",
    responseType: "blob",
    data: {
      courseCate: "ALL",
      sortType: d.sortType,
      pageSize: 10000000,
      pageNumber: 0,
      order: "DESC",
    },
    onResponse({ response, headers }) {
      const blob = new Blob([response]);

      const fileUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = fileUrl;
      link.style.display = "none";

      const injectFilename = () => {
        const fileName = `나의수강현황_${moment().format("YYYYMMDD")}.xlsx`;
        return fileName;
      };

      link.download = injectFilename();
      document.body.appendChild(link);
      link.click();
      link.remove();
      return true;
    },
  });
};

const goPreview = (url) => {
  window.open(url);
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
              title="수강관리"
              desc="해당하는 사이트에서 강좌명을 복사한 후 해당 사이트에서
                검색하세요.<br />
                도움이 필요하실 땐 서울런 고객센터(1533-0909)로 연락주세요!"
            >
              <template v-slot:tail>
                <div class="mypage__contents-head-btn-wrap">
                  <div class="mypage__contents-head-btn-text">
                    평생학습 포털 인증하시면<br />
                    수강 이력을 한눈에 보실수 있어요
                  </div>
                  <button
                    class="c-btn c-btn-danger c-btn-sm"
                    @click="goMemberPage()"
                  >
                    연동 바로가기
                  </button>
                </div>
              </template>
            </MypageTitle>
          </div>
          <div class="mypage__contents-body">
            <div
              class="lecture-list lecture-list--type02"
              v-if="d.data.cp.length > 0"
            >
              <div
                class="lecture-list__item"
                v-for="item in d.data.cp"
                :key="item"
              >
                <div class="lecture-list__item-thumb">
                  <img
                    :src="item.nonActvLogoImgFile"
                    :alt="`${item.cpName} 로고`"
                  />
                </div>
                <div class="lecture-list__item-text">
                  <p>
                    시작일
                    <span>{{ uConvertDate(item.connDtm, "YYYY.MM.DD") }}</span>
                  </p>
                </div>
                <div class="lecture-list__item-btn">
                  <button
                    class="c-btn"
                    @click="
                      uGoToLearnSite(
                        uIsMobileDevice() ? item.mobUrl : item.pcUrl,
                        item.cpId
                      )
                    "
                  >
                    바로가기
                  </button>
                </div>
              </div>
            </div>
            <div class="lecture-list" v-else>
              <div class="lecture-list__text">
                신청하신 전문강의가 없습니다. 다음 신청 기간에 꼭 신청하셔서
                다양한 학습 기회를 누리세요
              </div>
            </div>
            <a
              href="#"
              class="mypage__schedule-item"
              @click="goPreview('/preview')"
              v-if="d.isAlert"
              ><div class="c-badge c-badge-primary">알림</div>
              <p>
                현재 수강 사이트를 {{ moment().month() + 1 }}월 부터 변경하실 수
                있어요. 미리 확인해 보실래요?
              </p></a
            >
            <div class="lecture__title lecture__title--type02">수강 이력</div>
            <div class="mypage__contents-search">
              <div class="c-form-group">
                <label for="status" class="c-form-label">과정 분류별</label>
                <select
                  class="c-form-control c-form-control-sm"
                  id="status"
                  title="과정 분류별 셀렉트 박스"
                  v-model="d.searchType"
                >
                  <option value="ALL" selected>전체</option>
                  <option value="A">교과</option>
                  <option value="B">비교과</option>
                  <option value="C">오픈강좌</option>
                </select>
              </div>
              <div class="c-form-group">
                <CalendarFilter
                  :minDate="d.minDate"
                  @changed="handleChangedFilter"
                />
              </div>
            </div>
            <div class="mypage__contents-body">
              <div class="c-table__wrap c-table__wrap-scroll">
                <div class="c-table__head">
                  <p>총 {{ d.data.course.totalRecords }}개</p>
                  <div>
                    <button class="c-btn c-btn--excel" @click="excelDownload()">
                      엑셀 다운로드
                    </button>
                    <select
                      title="정렬 셀렉트 박스"
                      v-model="d.sortType"
                      @change="getCourseData()"
                    >
                      <option value="N">최근 수강 순</option>
                      <option value="C">진도율 순</option>
                    </select>
                  </div>
                </div>
                <table class="c-table c-table-center">
                  <caption>
                    수강이력 리스트로 과정분류, 업체명, 강좌명, 최종 수강일자,
                    진도율 을 볼수 있습니다.
                  </caption>
                  <colgroup>
                    <col width="110" />
                    <col width="130" />
                    <col width="" />
                    <col width="150" />
                    <col width="100" />
                    <col width="90" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">과정분류</th>
                      <th scope="col">업체명</th>
                      <th scope="col">강좌명</th>
                      <th scope="col">최종 수강일자</th>
                      <th scope="col">진도율</th>
                      <th scope="col">상태</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in d.data.course.rows"
                      v-if="d.data.course.rows.length > 0"
                    >
                      <td>{{ item.courseCateName }}</td>
                      <td>
                        <span class="c-clamp">{{
                          checkValidName(item.origin) ? item.origin : "-"
                        }}</span>
                      </td>
                      <td class="c-table__title">
                        <p>
                          <a href="javascript:void(0)">
                            {{ item.courseName }}</a
                          >
                        </p>
                      </td>
                      <td v-if="item.eduEndDt">
                        {{ `${uConvertDate(item.eduEndDt, "YYYY.MM.DD")}` }}
                      </td>
                      <td v-else>-</td>
                      <template v-if="item.courseCateName == '오픈강좌'">
                        <td>-</td>
                        <td>-</td>
                      </template>
                      <template v-else>
                        <td>
                          <strong class="c-text-danger"
                            >{{ item.progRate ? item.progRate : 0 }}%</strong
                          >
                          <div class="c-progress">
                            <span
                              class="c-progress-bar"
                              :style="`width: ${
                                item.progRate ? item.progRate : 0
                              }%`"
                            ></span>
                          </div>
                        </td>
                        <td>
                          <strong>{{ item.studyCmptYn }}</strong>
                        </td>
                      </template>
                    </tr>
                    <tr v-else class="border-0">
                      <td colspan="6">
                        <div class="c-table__nodata">
                          <img
                            src="@img/ch-table.svg"
                            alt="조회 기간내 수강이력이 없습니다"
                          />
                          <p>조회 기간내 수강이력이 없습니다</p>
                          <ul>
                            <li><strong>1. 사이트 바로가기 클릭</strong></li>
                            <li>
                              <strong
                                >2. 해당 사이트에서 듣고자 하는 강좌
                                신청</strong
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Pagination
                v-if="d.data?.course?.rows?.length > 0"
                :pageNumber="d.data.course.pageNumber"
                :totalRecords="d.data.course.totalRecords"
                :totalPages="d.data.course.totalPages"
                @changedPageIndex="changedIndex"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-table {
  color: $black;
  tbody {
    tr {
      td {
        color: $black;
        font-size: 1.6rem;
        &:first-child {
          color: #535353;
        }
        &:last-child,
        &:nth-last-child(2) {
          font-size: 1.4rem;
        }
        &:nth-last-child(2) {
          .c-progress {
            margin-top: 0.4rem;
          }
        }
      }
    }
  }
  &__head {
    margin-top: 3rem;
  }
}
.mypage {
  .lecture-list {
    @include mobile {
      margin-top: 4rem;
    }
  }
}
</style>
