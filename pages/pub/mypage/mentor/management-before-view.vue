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
            </div>
          </div>
          <div class="mypage__contents-body">
            <div class="mypage-management__before">
              <div class="mypage__schedule-list">
                <div
                  class="mypage__schedule-list-head-wrap mypage__schedule-list-head-wrap-before"
                >
                  <div class="mypage__schedule-list-head">
                    <div class="mypage__schedule-list-text">
                      <div class="mypage__schedule-list-text-title">
                        <p>[온라인] 멘토링 4회차</p>
                      </div>
                      <div class="mypage__schedule-list-text-info">
                        2023.04.10
                      </div>
                    </div>
                  </div>
                  <div class="mypage__schedule-list-foot"></div>
                </div>
                <div class="mypage__schedule-list-body">
                  <div class="mypage__schedule-list-body-title">전체 일정</div>
                  <div class="c-table__wrap c-table__wrap-scroll">
                    <table
                      class="c-table c-table-center mypage__schedule-table"
                    >
                      <caption>
                        강의 일정 테이블로 회차, 강의계획, 상태를 알 수
                        있습니다.
                      </caption>
                      <colgroup>
                        <col width="120" />
                        <col width="" />
                        <col width="120" />
                        <col width="120" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th scope="col">회차</th>
                          <th scope="col">강의계획</th>
                          <th scope="col">시간</th>
                          <th scope="col">상태</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="mypage__schedule-table-num">1회차</td>
                          <td class="mypage__schedule-table-title">
                            <p>
                              강의 계획은 첫 미팅으로 앞으로 진행할 강의에 대한
                              논의를 진행합니다. 강의 계획은 첫 미팅으로 앞으로
                              진행할 강의에 대한 논의를 진행합니다. 강의 계획은
                              첫 미팅으로 앞으로 진행할 강의에 대한 논의를
                              진행합니다. 강의 계획은 첫 미팅으로 앞으로 진행할
                              강의에 대한 논의를 진행합니다.
                            </p>
                          </td>
                          <td><strong>1시간</strong></td>
                          <td class="mypage__schedule-table-status">
                            <span class="c-text-danger">완료</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="mypage__schedule-table-num">2회차</td>
                          <td class="mypage__schedule-table-title">
                            <p>
                              강의 계획은 첫 미팅으로 앞으로 진행할 강의에 대한
                              논의를 진행합니다. 강의 계획은 첫 미팅으로 앞으로
                              진행할 강의에 대한 논의를 진행합니다. 강의 계획은
                              첫 미팅으로 앞으로 진행할 강의에 대한 논의를
                              진행합니다. 강의 계획은 첫 미팅으로 앞으로 진행할
                              강의에 대한 논의를 진행합니다.
                            </p>
                          </td>
                          <td><strong>1시간</strong></td>
                          <td class="mypage__schedule-table-status">
                            <span class="c-text-danger">완료</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="mypage__schedule-table-num">3회차</td>
                          <td class="mypage__schedule-table-title">
                            <p>
                              강의 계획은 첫 미팅으로 앞으로 진행할 강의에 대한
                              논의를 진행합니다. 강의 계획은 첫 미팅으로 앞으로
                              진행할 강의에 대한 논의를 진행합니다. 강의 계획은
                              첫 미팅으로 앞으로 진행할 강의에 대한 논의를
                              진행합니다. 강의 계획은 첫 미팅으로 앞으로 진행할
                              강의에 대한 논의를 진행합니다.
                            </p>
                          </td>
                          <td><strong>1시간</strong></td>
                          <td class="mypage__schedule-table-status">
                            <span class="c-text-yellow">결석</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="mypage__schedule-table-num">4회차</td>
                          <td class="mypage__schedule-table-title">
                            <p>
                              강의 계획은 첫 미팅으로 앞으로 진행할 강의에 대한
                              논의를 진행합니다. 강의 계획은 첫 미팅으로 앞으로
                              진행할 강의에 대한 논의를 진행합니다. 강의 계획은
                              첫 미팅으로 앞으로 진행할 강의에 대한 논의를
                              진행합니다. 강의 계획은 첫 미팅으로 앞으로 진행할
                              강의에 대한 논의를 진행합니다.
                            </p>
                          </td>
                          <td><strong>1시간</strong></td>
                          <td class="mypage__schedule-table-status">
                            <span class="c-text-black">예정</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="mypage__schedule-table-num">5회차</td>
                          <td class="mypage__schedule-table-title">
                            <p>
                              강의 계획은 첫 미팅으로 앞으로 진행할 강의에 대한
                              논의를 진행합니다. 강의 계획은 첫 미팅으로 앞으로
                              진행할 강의에 대한 논의를 진행합니다. 강의 계획은
                              첫 미팅으로 앞으로 진행할 강의에 대한 논의를
                              진행합니다. 강의 계획은 첫 미팅으로 앞으로 진행할
                              강의에 대한 논의를 진행합니다.
                            </p>
                          </td>
                          <td><strong>1시간</strong></td>
                          <td class="mypage__schedule-table-status">
                            <span class="c-text-black">예정</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="mypage__schedule-table-num">6회차</td>
                          <td class="mypage__schedule-table-title">
                            <p>
                              강의 계획은 첫 미팅으로 앞으로 진행할 강의에 대한
                              논의를 진행합니다. 강의 계획은 첫 미팅으로 앞으로
                              진행할 강의에 대한 논의를 진행합니다. 강의 계획은
                              첫 미팅으로 앞으로 진행할 강의에 대한 논의를
                              진행합니다. 강의 계획은 첫 미팅으로 앞으로 진행할
                              강의에 대한 논의를 진행합니다.
                            </p>
                          </td>
                          <td><strong>1시간</strong></td>
                          <td class="mypage__schedule-table-status">
                            <span class="c-text-black">예정</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="mypage__schedule-table-num">7회차</td>
                          <td class="mypage__schedule-table-title">
                            <p>
                              강의 계획은 첫 미팅으로 앞으로 진행할 강의에 대한
                              논의를 진행합니다. 강의 계획은 첫 미팅으로 앞으로
                              진행할 강의에 대한 논의를 진행합니다. 강의 계획은
                              첫 미팅으로 앞으로 진행할 강의에 대한 논의를
                              진행합니다. 강의 계획은 첫 미팅으로 앞으로 진행할
                              강의에 대한 논의를 진행합니다.
                            </p>
                          </td>
                          <td><strong>1시간</strong></td>
                          <td class="mypage__schedule-table-status">
                            <span class="c-text-black">예정</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="mypage__schedule-table-num">8회차</td>
                          <td class="mypage__schedule-table-title">
                            <p>
                              강의 계획은 첫 미팅으로 앞으로 진행할 강의에 대한
                              논의를 진행합니다. 강의 계획은 첫 미팅으로 앞으로
                              진행할 강의에 대한 논의를 진행합니다. 강의 계획은
                              첫 미팅으로 앞으로 진행할 강의에 대한 논의를
                              진행합니다. 강의 계획은 첫 미팅으로 앞으로 진행할
                              강의에 대한 논의를 진행합니다.
                            </p>
                          </td>
                          <td><strong>1시간</strong></td>
                          <td class="mypage__schedule-table-status">
                            <span class="c-text-black">예정</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="mypage__schedule-table-num">9회차</td>
                          <td class="mypage__schedule-table-title">
                            <p>
                              강의 계획은 첫 미팅으로 앞으로 진행할 강의에 대한
                              논의를 진행합니다. 강의 계획은 첫 미팅으로 앞으로
                              진행할 강의에 대한 논의를 진행합니다. 강의 계획은
                              첫 미팅으로 앞으로 진행할 강의에 대한 논의를
                              진행합니다. 강의 계획은 첫 미팅으로 앞으로 진행할
                              강의에 대한 논의를 진행합니다.
                            </p>
                          </td>
                          <td><strong>1시간</strong></td>
                          <td class="mypage__schedule-table-status">
                            <span class="c-text-black">예정</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="mypage__schedule-table-num">10회차</td>
                          <td class="mypage__schedule-table-title">
                            <p>
                              강의 계획은 첫 미팅으로 앞으로 진행할 강의에 대한
                              논의를 진행합니다. 강의 계획은 첫 미팅으로 앞으로
                              진행할 강의에 대한 논의를 진행합니다. 강의 계획은
                              첫 미팅으로 앞으로 진행할 강의에 대한 논의를
                              진행합니다. 강의 계획은 첫 미팅으로 앞으로 진행할
                              강의에 대한 논의를 진행합니다.
                            </p>
                          </td>
                          <td><strong>1시간</strong></td>
                          <td class="mypage__schedule-table-status">
                            <span class="c-text-black">예정</span>
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
    </div>
  </div>
</template>
