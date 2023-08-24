<script setup>
import SnbPc from "../_snbpc.vue";
import SnbTablet from "../_snbtablet.vue";
import { DatePicker } from "v-calendar";
import "v-calendar/dist/style.css";
definePageMeta({
  layout: "mypage",
});
</script>
<script>
export default {
  data() {
    return {
      date: new Date(),
      date2: new Date(),
    };
  },
};
</script>

<template>
  <div class="mypage">
    <SnbTablet />
    <PubBreadCrumbs />
    <div class="mypage-report">
      <div class="mypage__wrap">
        <SnbPc />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <div class="c-text-title-lg">수강관리</div>
            <div class="c-text-title-sub">
              <p>
                해당하는 사이트에서 강좌명을 복사한 후 해당 사이트에서
                검색하세요.<br />
                도움이 필요하실 땐 서울런 고객센터(1533-0909)로 연락주세요!
              </p>
              <div class="mypage__contents-head-btn-wrap">
                <div class="mypage__contents-head-btn-text">
                  평생학습 포털 인증하시면<br />
                  수강 이력을 한눈에 보실수 있어요
                </div>
                <button class="c-btn c-btn-danger c-btn-sm">
                  연동 바로가기
                </button>
              </div>
            </div>
          </div>
          <div class="mypage__contents-body">
            <!-- 230710 lecture-list--type02 클래스 추가 -->
            <div class="lecture-list lecture-list--type02">
              <div
                class="lecture-list__item"
                v-for="lecture in 4"
                :key="lecture"
              >
                <div class="lecture-list__item-thumb">
                  <img src="@img/logo-hackers.png" alt="해커스 로고" />
                </div>
                <div class="lecture-list__item-text">
                  <!-- 230710 strong 태그에 cp명 삭제, lecture-list__item-btn 추가(바로가기버튼) -->
                  <p>
                    시작일
                    <span>2023.01.03</span>
                  </p>
                </div>
                <div class="lecture-list__item-btn">
                  <button class="c-btn">바로가기</button>
                </div>
              </div>
            </div>
            <a href="" class="mypage__schedule-item"
              ><div class="c-badge c-badge-primary">알림</div>
              <p>3회차 멘토가 결석하였습니다. 사유를 입력해주세요.</p></a
            >
            <!-- 신청 강의 없을시 -->
            <div class="lecture-list">
              <div class="lecture-list__text">
                신청하신 전문강의가 없습니다. 다음 신청 기간에 꼭 신청하셔서
                다양한 학습 기회를 누리세요
              </div>
            </div>
            <!-- // 신청 강의 없을시 -->
            <div class="lecture__title lecture__title--type02">수강 이력</div>
            <div class="mypage__contents-search">
              <div class="c-form-group">
                <label for="status" class="c-form-label">과정 분류별</label>
                <!-- 웹접근성 id 추가 -->
                <select
                  class="c-form-control c-form-control-sm"
                  id="status"
                  title="과정 분류별 셀렉트 박스"
                >
                  <!--// 웹접근성 id 추가 -->
                  <option>전체</option>
                </select>
              </div>
              <div class="c-form-group">
                <form action="">
                  <fieldset>
                    <legend>
                      <div class="c-form-label">
                        기간별
                        <!-- 230630 버튼 추가 -->
                        <button class="c-btn c-btn-sm c-btn-reset">
                          <i class="ico ico-reset"><!--초기화--></i>
                        </button>
                        <!--// 230630 버튼 추가 -->
                      </div>
                    </legend>
                    <div class="c-form-group c-form-group--search">
                      <div
                        class="c-form-check-group c-form-check-group--col4 c-form-check-group-month"
                      >
                        <div class="c-form-check">
                          <input
                            class="c-btn-check"
                            type="radio"
                            name="searchMonth"
                            id="searchMonth01"
                            checked
                            title="1개월"
                          />
                          <label
                            class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                            for="searchMonth01"
                            >1개월</label
                          >
                        </div>
                        <div class="c-form-check">
                          <input
                            class="c-btn-check"
                            type="radio"
                            name="searchMonth"
                            id="searchMonth02"
                            title="3개월"
                          />
                          <label
                            class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                            for="searchMonth02"
                            >3개월</label
                          >
                        </div>
                        <div class="c-form-check">
                          <input
                            class="c-btn-check"
                            type="radio"
                            name="searchMonth"
                            id="searchMonth03"
                            title="6개월"
                          />
                          <label
                            class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                            for="searchMonth03"
                            >6개월</label
                          >
                        </div>
                        <div class="c-form-check">
                          <input
                            class="c-btn-check"
                            type="radio"
                            name="searchMonth"
                            id="searchMonth04"
                            title="1년"
                          />
                          <label
                            class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                            for="searchMonth04"
                            >1년</label
                          >
                        </div>
                      </div>
                      <div class="c-input-group c-input-group--calendar">
                        <DatePicker v-model="date">
                          <template v-slot="{ inputValue, togglePopover }">
                            <input
                              class="c-input-calendar"
                              :value="inputValue"
                              readonly
                              @click="togglePopover()"
                              title="기간별 조회 시작"
                            />
                          </template>
                        </DatePicker>
                        <span>~</span>
                        <DatePicker v-model="date2">
                          <template v-slot="{ inputValue, togglePopover }">
                            <input
                              class="c-input-calendar"
                              :value="inputValue"
                              readonly
                              @click="togglePopover()"
                              title="기간별 조회 끝"
                            />
                          </template>
                        </DatePicker>
                      </div>
                      <button class="c-btn c-btn-blue">조회</button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
            <div class="mypage__contents-body">
              <div class="c-table__wrap c-table__wrap-scroll">
                <div class="c-table__head">
                  <p>총 999개</p>
                  <div>
                    <button class="c-btn c-btn--excel">엑셀 다운로드</button>
                    <!-- 웹접근성 title 추가 -->
                    <select title="정렬 셀렉트 박스">
                      <option value="">최근 수강 순</option>
                      <option value="">진도율 순</option>
                      <option value="">신청 순</option>
                    </select>
                    <!--// 웹접근성 title 추가 -->
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
                    <tr>
                      <td>비교과 과정</td>
                      <td><span class="c-clamp">아이스크림아이스크림</span></td>
                      <td class="c-table__title">
                        <!-- 웹접근성 링크시 a태그 추가 -->
                        <p>
                          <a href="">
                            초등 _ 4학년_영어 강의명(강좌명) 노출영역 노출영역
                            노출영역
                          </a>
                        </p>
                      </td>
                      <td>2023.01.03</td>
                      <td>
                        <strong class="c-text-danger">90%</strong>
                        <div class="c-progress">
                          <span
                            class="c-progress-bar"
                            style="width: 50%"
                          ></span>
                        </div>
                      </td>
                      <td><strong>수강중</strong></td>
                    </tr>
                    <tr>
                      <td>비교과 과정</td>
                      <!-- 230725 <span class="c-clamp"> 추가 </span> (말줄임) -->
                      <td><span class="c-clamp">아이스크림아이스크림</span></td>
                      <td class="c-table__title">
                        <p>
                          초등 _ 4학년_영어 강의명(강좌명) 노출영역 노출영역
                          노출영역
                        </p>
                      </td>
                      <td>2023.01.03</td>
                      <td>
                        <strong class="c-text-danger">90%</strong>
                        <div class="c-progress">
                          <span
                            class="c-progress-bar"
                            style="width: 50%"
                          ></span>
                        </div>
                      </td>
                      <td><strong>수강중</strong></td>
                    </tr>
                    <tr>
                      <td>비교과 과정</td>
                      <td><span class="c-clamp">아이스크림아이스크림</span></td>
                      <td class="c-table__title">
                        <p>
                          초등 _ 4학년_영어 강의명(강좌명) 노출영역 노출영역
                          노출영역
                        </p>
                      </td>
                      <td>2023.01.03</td>
                      <td>
                        <strong class="c-text-danger">90%</strong>
                        <div class="c-progress">
                          <span
                            class="c-progress-bar"
                            style="width: 50%"
                          ></span>
                        </div>
                      </td>
                      <td><strong>수강중</strong></td>
                    </tr>
                    <tr>
                      <td>비교과 과정</td>
                      <td><span class="c-clamp">아이스크림아이스크림</span></td>
                      <td class="c-table__title">
                        <p>
                          초등 _ 4학년_영어 강의명(강좌명) 노출영역 노출영역
                          노출영역
                        </p>
                      </td>
                      <td>2023.01.03</td>
                      <td>
                        <strong class="c-text-danger">90%</strong>
                        <div class="c-progress">
                          <span
                            class="c-progress-bar"
                            style="width: 50%"
                          ></span>
                        </div>
                      </td>
                      <td><strong>수강중</strong></td>
                    </tr>
                    <tr>
                      <td>비교과 과정</td>
                      <td><span class="c-clamp">아이스크림아이스크림</span></td>
                      <td class="c-table__title">
                        <p>
                          초등 _ 4학년_영어 강의명(강좌명) 노출영역 노출영역
                          노출영역
                        </p>
                      </td>
                      <td>2023.01.03</td>
                      <td>
                        <strong class="c-text-danger">90%</strong>
                        <div class="c-progress">
                          <span
                            class="c-progress-bar"
                            style="width: 50%"
                          ></span>
                        </div>
                      </td>
                      <td><strong>수강중</strong></td>
                    </tr>
                    <tr>
                      <td>비교과 과정</td>
                      <td><span class="c-clamp">아이스크림아이스크림</span></td>
                      <td class="c-table__title">
                        <p>
                          초등 _ 4학년_영어 강의명(강좌명) 노출영역 노출영역
                          노출영역
                        </p>
                      </td>
                      <td>2023.01.03</td>
                      <td>
                        <strong class="c-text-danger">90%</strong>
                        <div class="c-progress">
                          <span
                            class="c-progress-bar"
                            style="width: 50%"
                          ></span>
                        </div>
                      </td>
                      <td><strong>수강중</strong></td>
                    </tr>
                    <tr>
                      <td>비교과 과정</td>
                      <td><span class="c-clamp">아이스크림아이스크림</span></td>
                      <td class="c-table__title">
                        <p>
                          초등 _ 4학년_영어 강의명(강좌명) 노출영역 노출영역
                          노출영역
                        </p>
                      </td>
                      <td>2023.01.03</td>
                      <td>
                        <strong class="c-text-danger">90%</strong>
                        <div class="c-progress">
                          <span
                            class="c-progress-bar"
                            style="width: 50%"
                          ></span>
                        </div>
                      </td>
                      <td><strong>수강중</strong></td>
                    </tr>
                    <tr>
                      <td>비교과 과정</td>
                      <td><span class="c-clamp">아이스크림아이스크림</span></td>
                      <td class="c-table__title">
                        <p>
                          초등 _ 4학년_영어 강의명(강좌명) 노출영역 노출영역
                          노출영역
                        </p>
                      </td>
                      <td>2023.01.03</td>
                      <td>
                        <strong class="c-text-danger">90%</strong>
                        <div class="c-progress">
                          <span
                            class="c-progress-bar"
                            style="width: 50%"
                          ></span>
                        </div>
                      </td>
                      <td><strong>수강중</strong></td>
                    </tr>
                    <tr>
                      <td>비교과 과정</td>
                      <td><span class="c-clamp">아이스크림아이스크림</span></td>
                      <td class="c-table__title">
                        <p>
                          초등 _ 4학년_영어 강의명(강좌명) 노출영역 노출영역
                          노출영역
                        </p>
                      </td>
                      <td>2023.01.03</td>
                      <td>
                        <strong class="c-text-danger">90%</strong>
                        <div class="c-progress">
                          <span
                            class="c-progress-bar"
                            style="width: 50%"
                          ></span>
                        </div>
                      </td>
                      <td><strong>수강중</strong></td>
                    </tr>
                    <tr>
                      <td>비교과 과정</td>
                      <td><span class="c-clamp">아이스크림아이스크림</span></td>
                      <td class="c-table__title">
                        <p>
                          초등 _ 4학년_영어 강의명(강좌명) 노출영역 노출영역
                          노출영역
                        </p>
                      </td>
                      <td>2023.01.03</td>
                      <td>
                        <strong class="c-text-danger">90%</strong>
                        <div class="c-progress">
                          <span
                            class="c-progress-bar"
                            style="width: 50%"
                          ></span>
                        </div>
                      </td>
                      <td><strong>수강중</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <PubPagination />

              <div class="c-table__wrap c-table__wrap-scroll">
                <div class="c-table__head">
                  <p>총 999개</p>
                </div>
                <table class="c-table c-table-center">
                  <caption>
                    수강이력 리스트로 과정분류, 업체명, 강좌명, 최종 수강일자,
                    진도율 을 볼수 있습니다.
                  </caption>
                  <colgroup>
                    <col width="140" />
                    <col width="160" />
                    <col width="" />
                    <col width="140" />
                    <col width="60" />
                    <col width="100" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">과정분류</th>
                      <th scope="col">업체명</th>
                      <th scope="col">강좌명</th>
                      <!-- 230621 수강기간 -> 최종 수강일자로 변경 -->
                      <th scope="col">최종 수강일자</th>
                      <!-- 230621 수강기간 -> 최종 수강일자로 변경 -->
                      <th scope="col">진도율</th>
                      <th scope="col">상태</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-0">
                      <td colspan="6">
                        <div class="c-table__nodata">
                          <img
                            src="@img/ch-table.svg"
                            alt="아직 완료한 강좌가 없어요! 신청방법을 따라 강좌를 신청해 보세요~"
                          />
                          <p>
                            아직 완료한 강좌가 없어요! <br />
                            신청방법을 따라 강좌를 신청해보세요~
                          </p>
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
