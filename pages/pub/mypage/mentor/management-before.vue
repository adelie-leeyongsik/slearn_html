<script setup>
import SnbPc from "../_snbpc.vue";
import SnbTablet from "../_snbtablet.vue";
import { DatePicker } from "v-calendar";
import "v-calendar/dist/style.css";
definePageMeta({
  layout: "mypage",
});
</script>

<template>
  <div class="mypage">
    <SnbTablet />
    <PubBreadCrumbs />
    <div class="mypage-management">
      <div class="mypage__wrap">
        <SnbPc />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <div class="c-text-title-lg">이전 멘토링 보기</div>
            <div class="c-text-title-sub">
              <p>
                종료되거나 취소된 멘토링 내역을 확인하실 수 있습니다. <br />
                도움이 필요하실 땐 서울런 고객센터<br
                  class="c-mo"
                />(1533-0909)로 연락주세요!
              </p>
              <button class="c-btn c-btn-sm c-btn-danger">
                활동증명서 신청
              </button>
            </div>
          </div>
          <div class="mypage__contents-body">
            <div class="mypage-management__before">
              <div class="mypage__contents-search">
                <form action="">
                  <fieldset>
                    <div class="c-form-group">
                      <legend>
                        <label for="category" class="c-form-label"
                          >카테고리별</label
                        >
                      </legend>

                      <select
                        name=""
                        id="category"
                        class="c-form-control c-form-control-sm"
                      >
                        <option value="">전체</option>
                      </select>
                    </div>

                    <div class="c-form-group">
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
                    </div>
                  </fieldset>
                </form>
              </div>
              <div class="c-table__wrap c-table__wrap-scroll">
                <div class="c-table__head">
                  <p>총 999개</p>
                </div>
                <table class="c-table c-table-center">
                  <caption>
                    이전 멘토링 보기로 날짜, 사유, 상태, 상세보기를 볼 수
                    있습니다.
                  </caption>
                  <colgroup>
                    <col width="140" />
                    <col width="" />
                    <col width="100" />
                    <col width="140" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">날짜</th>
                      <th scope="col">사유</th>
                      <th scope="col">상태</th>
                      <th scope="col">상세보기</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2023.01.10</td>
                      <td class="c-table__title">
                        <p>
                          <!-- 웹접근성 a태그 추가 -->
                          <a href="">
                            멘토와 너무 맞지 않는 것 같아서 그만 취소하려고
                            합니다.
                          </a>
                          <!-- //웹접근성 a태그 추가 -->
                        </p>
                      </td>
                      <td><strong>완료</strong></td>
                      <td><a class="c-table__link" href="">상세보기</a></td>
                    </tr>
                    <tr>
                      <td>2023.01.10</td>
                      <td class="c-table__title">
                        <p>
                          <!-- 웹접근성 a태그 추가 -->
                          <a href="">
                            멘토와 너무 맞지 않는 것 같아서 그만 취소하려고
                            합니다.
                          </a>
                          <!-- //웹접근성 a태그 추가 -->
                        </p>
                      </td>
                      <td><strong>완료</strong></td>
                      <td><a class="c-table__link" href="">상세보기</a></td>
                    </tr>
                    <tr>
                      <td>2023.01.10</td>
                      <td class="c-table__title">
                        <p>
                          <!-- 웹접근성 a태그 추가 -->
                          <a href="">
                            멘토와 너무 맞지 않는 것 같아서 그만 취소하려고
                            합니다.
                          </a>
                          <!-- //웹접근성 a태그 추가 -->
                        </p>
                      </td>
                      <td><strong>취소</strong></td>
                      <td><a class="c-table__link" href="">상세보기</a></td>
                    </tr>
                    <tr>
                      <td>2023.01.10</td>
                      <td class="c-table__title">
                        <p>
                          <!-- 웹접근성 a태그 추가 -->
                          <a href="">
                            멘토와 너무 맞지 않는 것 같아서 그만 취소하려고
                            합니다.
                          </a>
                          <!-- //웹접근성 a태그 추가 -->
                        </p>
                      </td>
                      <td><strong>재매칭 취소</strong></td>
                      <td><a class="c-table__link" href="">상세보기</a></td>
                    </tr>
                    <tr>
                      <td>2023.01.10</td>
                      <td class="c-table__title">
                        <p>
                          <!-- 웹접근성 a태그 추가 -->
                          <a href="">
                            멘토와 너무 맞지 않는 것 같아서 그만 취소하려고
                            합니다.
                          </a>
                          <!-- //웹접근성 a태그 추가 -->
                        </p>
                      </td>
                      <td><strong>재매칭 취소</strong></td>
                      <td><a class="c-table__link" href="">상세보기</a></td>
                    </tr>
                    <tr>
                      <td>2023.01.10</td>
                      <td class="c-table__title">
                        <p>
                          <!-- 웹접근성 a태그 추가 -->
                          <a href="">
                            멘토와 너무 맞지 않는 것 같아서 그만 취소하려고
                            합니다.
                          </a>
                          <!-- //웹접근성 a태그 추가 -->
                        </p>
                      </td>
                      <td><strong>재매칭 취소</strong></td>
                      <td><a class="c-table__link" href="">상세보기</a></td>
                    </tr>
                    <tr>
                      <td>2023.01.10</td>
                      <td class="c-table__title">
                        <p>
                          <!-- 웹접근성 a태그 추가 -->
                          <a href="">
                            멘토와 너무 맞지 않는 것 같아서 그만 취소하려고
                            합니다.
                          </a>
                          <!-- //웹접근성 a태그 추가 -->
                        </p>
                      </td>
                      <td><strong>재매칭 취소</strong></td>
                      <td><a class="c-table__link" href="">상세보기</a></td>
                    </tr>
                    <tr>
                      <td>2023.01.10</td>
                      <td class="c-table__title">
                        <p>
                          <!-- 웹접근성 a태그 추가 -->
                          <a href="">
                            멘토와 너무 맞지 않는 것 같아서 그만 취소하려고
                            합니다.
                          </a>
                          <!-- //웹접근성 a태그 추가 -->
                        </p>
                      </td>
                      <td><strong>재매칭 취소</strong></td>
                      <td><a class="c-table__link" href="">상세보기</a></td>
                    </tr>
                    <tr>
                      <td>2023.01.10</td>
                      <td class="c-table__title">
                        <p>
                          <!-- 웹접근성 a태그 추가 -->
                          <a href="">
                            멘토와 너무 맞지 않는 것 같아서 그만 취소하려고
                            합니다.
                          </a>
                          <!-- //웹접근성 a태그 추가 -->
                        </p>
                      </td>
                      <td><strong>재매칭 취소</strong></td>
                      <td><a class="c-table__link" href="">상세보기</a></td>
                    </tr>
                    <tr>
                      <td>2023.01.10</td>
                      <td class="c-table__title">
                        <p>
                          <!-- 웹접근성 a태그 추가 -->
                          <a href="">
                            멘토와 너무 맞지 않는 것 같아서 그만 취소하려고
                            합니다.
                          </a>
                          <!-- //웹접근성 a태그 추가 -->
                        </p>
                      </td>
                      <td><strong>재매칭 취소</strong></td>
                      <td><a class="c-table__link" href="">상세보기</a></td>
                    </tr>
                    <tr>
                      <td colspan="4">
                        <div class="c-table__nodata">
                          <img
                            src="@img/ch-table.svg"
                            alt="멘토링 내역이 없습니다. "
                          />
                          멘토링 내역이 없습니다.
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="c-table__wrap c-table__wrap-scroll">
                <div class="c-table__head">
                  <p>총 999개</p>
                </div>
                <table class="c-table c-table-center">
                  <caption>
                    이전 멘토링 보기로 날짜, 사유, 상태, 상세보기를 볼 수
                    있습니다.
                  </caption>
                  <colgroup>
                    <col width="120" />
                    <col width="120" />
                    <col width="" />
                    <col width="120" />
                    <col width="120" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">날짜</th>
                      <th scope="col">카테고리</th>
                      <th scope="col">사유</th>
                      <th scope="col">상태</th>
                      <th scope="col">상세보기</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2023.01.10</td>
                      <td>멘토링</td>
                      <td class="c-table__title">
                        <p>
                          <a href="">
                            멘토와 너무 맞지 않는 것 같아서 그만 취소하려고
                            합니다.
                          </a>
                        </p>
                      </td>
                      <td><strong>완료</strong></td>
                      <td><a class="c-table__link" href="">상세보기</a></td>
                    </tr>
                    <tr>
                      <td>2023.01.10</td>
                      <td>멘토링</td>
                      <td class="c-table__title">
                        <p>
                          <!-- 웹접근성 a태그 추가 -->
                          <a href="">
                            멘토와 너무 맞지 않는 것 같아서 그만 취소하려고
                            합니다.
                          </a>
                          <!-- //웹접근성 a태그 추가 -->
                        </p>
                      </td>
                      <td><strong>완료</strong></td>
                      <td><a class="c-table__link" href="">상세보기</a></td>
                    </tr>
                    <tr>
                      <td>2023.01.10</td>
                      <td>멘토링</td>
                      <td class="c-table__title">
                        <p>
                          <!-- 웹접근성 a태그 추가 -->
                          <a href="">
                            멘토와 너무 맞지 않는 것 같아서 그만 취소하려고
                            합니다.
                          </a>
                          <!-- //웹접근성 a태그 추가 -->
                        </p>
                      </td>
                      <td><strong>취소</strong></td>
                      <td><a class="c-table__link" href="">상세보기</a></td>
                    </tr>
                    <tr>
                      <td>2023.01.10</td>
                      <td>멘토링</td>
                      <td class="c-table__title">
                        <p>
                          <!-- 웹접근성 a태그 추가 -->
                          <a href="">
                            멘토와 너무 맞지 않는 것 같아서 그만 취소하려고
                            합니다.
                          </a>
                          <!-- //웹접근성 a태그 추가 -->
                        </p>
                      </td>
                      <td><strong>재매칭 취소</strong></td>
                      <td><a class="c-table__link" href="">상세보기</a></td>
                    </tr>
                    <tr>
                      <td>2023.01.10</td>
                      <td>멘토링</td>
                      <td class="c-table__title">
                        <p>
                          <!-- 웹접근성 a태그 추가 -->
                          <a href="">
                            멘토와 너무 맞지 않는 것 같아서 그만 취소하려고
                            합니다.
                          </a>
                          <!-- //웹접근성 a태그 추가 -->
                        </p>
                      </td>
                      <td><strong>재매칭 취소</strong></td>
                      <td><a class="c-table__link" href="">상세보기</a></td>
                    </tr>
                    <tr>
                      <td>2023.01.10</td>
                      <td>멘토링</td>
                      <td class="c-table__title">
                        <p>
                          <!-- 웹접근성 a태그 추가 -->
                          <a href="">
                            멘토와 너무 맞지 않는 것 같아서 그만 취소하려고
                            합니다.
                          </a>
                          <!-- //웹접근성 a태그 추가 -->
                        </p>
                      </td>
                      <td><strong>재매칭 취소</strong></td>
                      <td><a class="c-table__link" href="">상세보기</a></td>
                    </tr>
                    <tr>
                      <td>2023.01.10</td>
                      <td>멘토링</td>
                      <td class="c-table__title">
                        <p>
                          <!-- 웹접근성 a태그 추가 -->
                          <a href="">
                            멘토와 너무 맞지 않는 것 같아서 그만 취소하려고
                            합니다.
                          </a>
                          <!-- //웹접근성 a태그 추가 -->
                        </p>
                      </td>
                      <td><strong>재매칭 취소</strong></td>
                      <td><a class="c-table__link" href="">상세보기</a></td>
                    </tr>
                    <tr>
                      <td>2023.01.10</td>
                      <td>멘토링</td>
                      <td class="c-table__title">
                        <p>
                          <!-- 웹접근성 a태그 추가 -->
                          <a href="">
                            멘토와 너무 맞지 않는 것 같아서 그만 취소하려고
                            합니다.
                          </a>
                          <!-- //웹접근성 a태그 추가 -->
                        </p>
                      </td>
                      <td><strong>재매칭 취소</strong></td>
                      <td><a class="c-table__link" href="">상세보기</a></td>
                    </tr>
                    <tr>
                      <td>2023.01.10</td>
                      <td>멘토링</td>
                      <td class="c-table__title">
                        <p>
                          <!-- 웹접근성 a태그 추가 -->
                          <a href="">
                            멘토와 너무 맞지 않는 것 같아서 그만 취소하려고
                            합니다.
                          </a>
                          <!-- //웹접근성 a태그 추가 -->
                        </p>
                      </td>
                      <td><strong>재매칭 취소</strong></td>
                      <td><a class="c-table__link" href="">상세보기</a></td>
                    </tr>
                    <tr>
                      <td>2023.01.10</td>
                      <td>멘토링</td>
                      <td class="c-table__title">
                        <p>
                          <!-- 웹접근성 a태그 추가 -->
                          <a href="">
                            멘토와 너무 맞지 않는 것 같아서 그만 취소하려고
                            합니다.
                          </a>
                          <!-- //웹접근성 a태그 추가 -->
                        </p>
                      </td>
                      <td><strong>재매칭 취소</strong></td>
                      <td><a class="c-table__link" href="">상세보기</a></td>
                    </tr>
                    <tr>
                      <td colspan="5">
                        <div class="c-table__nodata">
                          <img
                            src="@img/ch-table.svg"
                            alt="멘토링 내역이 없습니다. "
                          />
                          멘토링 내역이 없습니다.
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <PubPagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
