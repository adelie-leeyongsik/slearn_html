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
            <div class="c-text-title-lg">멘토링 관리</div>
            <div class="c-text-title-sub">
              <p>
                <!-- 230727 텍스트 수정 -->
                서울런은 멘토링이 필수!<br />
                나만의 학습을 도와줄 특별한 친구가 필요하세요?
              </p>
            </div>
          </div>
          <div class="mypage__contents-body">
            <div class="mypage-management__schedule">
              <div class="mypage__schedule">
                <div class="mypage__schedule-profile">
                  <div class="mypage__schedule-profile-body">
                    <div class="mypage__schedule-profile-img">
                      <div class="mypage__schedule-profile-img-mask">
                        <img src="@img/@temp/1.jpg" alt="프로필 이미지" />
                      </div>
                    </div>
                    <div class="mypage__schedule-profile-text">
                      <div class="mypage__schedule-profile-text-name">
                        <p class="c-flex">
                          <i class="ico ico-medal ico-medal--silver">11</i>
                          나의 멘토,<br class="c-mo" />
                          둥근해가떴습니다호이 님
                        </p>
                        <!-- <div class="c-badge c-badge-yellow">매칭율 100%</div> -->
                      </div>
                      <div class="mypage__schedule-profile-text-info">
                        온라인· 중등 · 국어 · 학습 코칭형
                      </div>
                    </div>
                    <div class="mypage__schedule-profile-btn">
                      <button class="c-btn c-btn-letter">문자 보내기</button>
                    </div>
                  </div>
                  <div class="mypage__schedule-profile-foot">
                    <!-- 리스트 없을시 ul 삭제 -->
                    <ul>
                      <li>2023 명예 멘토</li>
                      <li>2023.01 우수 멘토링팀</li>
                    </ul>
                    <!--  -->
                  </div>
                </div>

                <a
                  href=""
                  class="mypage__schedule-item mypage__schedule-item--type02"
                >
                  <div class="c-badge c-badge-blue">멘토 추천</div>
                  <p>
                    둥근해가떴습니다호이 멘토님이 추천한 강의가 있어요! 지금
                    확인하러 가보실까요?
                  </p>
                </a>
                <a
                  href=""
                  class="mypage__schedule-item mypage__schedule-item--type02"
                >
                  <div class="c-badge c-badge-blue">결석 신고</div>
                  <p>3회차 멘토가 결석하였습니다. 사유를 입력해주세요.</p>
                </a>

                <div class="mypage__schedule-list">
                  <div class="mypage__schedule-list-head-wrap">
                    <div class="mypage__schedule-list-head">
                      <div class="mypage__schedule-list-text">
                        <div class="mypage__schedule-list-text-title">
                          <p>[온라인] 멘토링 4회차</p>
                        </div>
                        <div class="mypage__schedule-list-text-info">
                          온라인· 중등 · 국어 · 학습 코칭형
                        </div>
                      </div>
                      <div class="mypage__schedule-list-btn">
                        <button class="c-btn c-btn-sm c-btn-blue">
                          일정/장소 변경 요청
                        </button>
                        <!-- 230718 c-btn-primary 클래스로 변경 -->
                        <button class="c-btn c-btn-sm c-btn-primary">
                          강의실 입장
                        </button>
                      </div>
                    </div>
                    <div class="mypage__schedule-list-foot">
                      <a class="mypage__schedule-list-foot-link" href=""
                        ><i class="ico ico-file"></i>
                        <p>4회차 계획서 보기</p></a
                      >
                    </div>
                  </div>
                  <div class="mypage__schedule-list-body">
                    <div class="mypage__schedule-list-body-title">
                      전체 일정
                    </div>
                    <div class="mypage__schedule-list-body-progress">
                      <div
                        class="mypage__schedule-list-body-progress-text"
                        style="width: 16%"
                      >
                        <p>4회차 진행 예정</p>
                      </div>
                      <div class="c-progress">
                        <span class="c-progress-bar" style="width: 16%"></span>
                      </div>
                      <ul>
                        <li>첫 만남</li>
                        <li>목표 달성</li>
                      </ul>
                    </div>
                    <div class="c-table__wrap">
                      <table
                        class="c-table c-table-center mypage__schedule-table"
                      >
                        <caption>
                          강의 일정 테이블로 회차, 강의계획, 상태를 알 수
                          있습니다.
                        </caption>
                        <colgroup>
                          <col width="15%" />
                          <col width="" />
                          <col width="15%" />
                        </colgroup>
                        <thead>
                          <tr>
                            <th scope="col">회차</th>
                            <th scope="col">강의계획</th>
                            <th scope="col">상태</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="mypage__schedule-table-num">1회차</td>
                            <td class="mypage__schedule-table-title">
                              <p>
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                              </p>
                            </td>
                            <td class="mypage__schedule-table-status">
                              <!-- 230718 c-text-sky 로 클래스 변경 -->
                              <span class="c-text-sky">완료</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="mypage__schedule-table-num">2회차</td>
                            <td class="mypage__schedule-table-title">
                              <p>
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                              </p>
                            </td>
                            <td class="mypage__schedule-table-status">
                              <!-- 230718 c-text-sky 로 클래스 변경 -->
                              <span class="c-text-sky">완료</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="mypage__schedule-table-num">3회차</td>
                            <td class="mypage__schedule-table-title">
                              <p>
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                              </p>
                            </td>
                            <td class="mypage__schedule-table-status">
                              <!-- 230718 c-text-dnger 로 클래스 변경 -->
                              <span class="c-text-danger">결석</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="mypage__schedule-table-num">4회차</td>
                            <td class="mypage__schedule-table-title">
                              <p>
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                              </p>
                            </td>
                            <td class="mypage__schedule-table-status">
                              <span class="c-text-black">예정</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="mypage__schedule-table-num">5회차</td>
                            <td class="mypage__schedule-table-title">
                              <p>
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                              </p>
                            </td>
                            <td class="mypage__schedule-table-status">
                              <span class="c-text-black">예정</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="mypage__schedule-table-num">6회차</td>
                            <td class="mypage__schedule-table-title">
                              <p>
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                              </p>
                            </td>
                            <td class="mypage__schedule-table-status">
                              <span class="c-text-black">예정</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="mypage__schedule-table-num">7회차</td>
                            <td class="mypage__schedule-table-title">
                              <p>
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                              </p>
                            </td>
                            <td class="mypage__schedule-table-status">
                              <span class="c-text-black">예정</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="mypage__schedule-table-num">8회차</td>
                            <td class="mypage__schedule-table-title">
                              <p>
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                              </p>
                            </td>
                            <td class="mypage__schedule-table-status">
                              <span class="c-text-black">예정</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="mypage__schedule-table-num">9회차</td>
                            <td class="mypage__schedule-table-title">
                              <p>
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                              </p>
                            </td>
                            <td class="mypage__schedule-table-status">
                              <span class="c-text-black">예정</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="mypage__schedule-table-num">10회차</td>
                            <td class="mypage__schedule-table-title">
                              <p>
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                              </p>
                            </td>
                            <td class="mypage__schedule-table-status">
                              <span class="c-text-black">예정</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <PubPagination />
                    </div>
                    <div class="c-btn-group">
                      <button class="c-btn c-btn-blue">재매칭 신청</button>
                    </div>
                  </div>
                </div>
                <div class="mypage-management__item-cancel">
                  <button class="c-btn c-btn-text c-btn-text--line">
                    재매칭 취소
                  </button>
                </div>
                <div class="mypage__schedule-list">
                  <div class="mypage__schedule-list-head-wrap">
                    <div class="mypage__schedule-list-head">
                      <div class="mypage__schedule-list-text">
                        <div class="mypage__schedule-list-text-title">
                          <p>축하합니다. 멘토링이 모두 완료되었습니다.</p>
                        </div>
                        <div class="mypage__schedule-list-text-info">
                          멘토링은 어떠셨나요? 멘토링 서비스 향상을 위해 만족도
                          조사를 부탁드립니다.
                        </div>
                      </div>
                      <div class="mypage__schedule-list-btn">
                        <button class="c-btn c-btn-sm c-btn-blue">
                          만족도 조사
                        </button>
                        <button class="c-btn c-btn-sm c-btn-danger">
                          멘토링 연장 신청
                        </button>
                      </div>
                    </div>
                    <div class="mypage__schedule-list-foot"></div>
                  </div>
                  <div class="mypage__schedule-list-body">
                    <div class="mypage__schedule-list-body-title">
                      전체 일정
                    </div>
                    <div class="mypage__schedule-list-body-progress">
                      <div
                        class="mypage__schedule-list-body-progress-text"
                        style="width: 100%"
                      >
                        <p>완료</p>
                      </div>
                      <div class="c-progress">
                        <span class="c-progress-bar" style="width: 100%"></span>
                      </div>
                      <ul>
                        <li>첫 만남</li>
                        <li>목표 달성</li>
                      </ul>
                    </div>
                    <div class="c-table__wrap">
                      <table
                        class="c-table c-table-center mypage__schedule-table"
                      >
                        <caption>
                          강의 일정 테이블로 회차, 강의계획, 상태를 알 수
                          있습니다.
                        </caption>
                        <colgroup>
                          <col width="15%" />
                          <col width="" />
                          <col width="15%" />
                        </colgroup>
                        <thead>
                          <tr>
                            <th scope="col">회차</th>
                            <th scope="col">강의계획</th>
                            <th scope="col">상태</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="mypage__schedule-table-num">1회차</td>
                            <td class="mypage__schedule-table-title">
                              <p>
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                              </p>
                            </td>
                            <td class="mypage__schedule-table-status">
                              <span class="c-text-danger">완료</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="mypage__schedule-table-num">2회차</td>
                            <td class="mypage__schedule-table-title">
                              <p>
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                              </p>
                            </td>
                            <td class="mypage__schedule-table-status">
                              <span class="c-text-danger">완료</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="mypage__schedule-table-num">3회차</td>
                            <td class="mypage__schedule-table-title">
                              <p>
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                              </p>
                            </td>
                            <td class="mypage__schedule-table-status">
                              <span class="c-text-yellow">결석</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="mypage__schedule-table-num">4회차</td>
                            <td class="mypage__schedule-table-title">
                              <p>
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                              </p>
                            </td>
                            <td class="mypage__schedule-table-status">
                              <span class="c-text-black">예정</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="mypage__schedule-table-num">5회차</td>
                            <td class="mypage__schedule-table-title">
                              <p>
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                              </p>
                            </td>
                            <td class="mypage__schedule-table-status">
                              <span class="c-text-black">예정</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="mypage__schedule-table-num">6회차</td>
                            <td class="mypage__schedule-table-title">
                              <p>
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                              </p>
                            </td>
                            <td class="mypage__schedule-table-status">
                              <span class="c-text-black">예정</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="mypage__schedule-table-num">7회차</td>
                            <td class="mypage__schedule-table-title">
                              <p>
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                              </p>
                            </td>
                            <td class="mypage__schedule-table-status">
                              <span class="c-text-black">예정</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="mypage__schedule-table-num">8회차</td>
                            <td class="mypage__schedule-table-title">
                              <p>
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                              </p>
                            </td>
                            <td class="mypage__schedule-table-status">
                              <span class="c-text-black">예정</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="mypage__schedule-table-num">9회차</td>
                            <td class="mypage__schedule-table-title">
                              <p>
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                              </p>
                            </td>
                            <td class="mypage__schedule-table-status">
                              <span class="c-text-black">예정</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="mypage__schedule-table-num">10회차</td>
                            <td class="mypage__schedule-table-title">
                              <p>
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                                강의 계획은 첫 미팅으로 앞으로 진행할 강의에
                                대한 논의를 진행합니다. 강의 계획은 첫 미팅으로
                                앞으로 진행할 강의에 대한 논의를 진행합니다.
                              </p>
                            </td>
                            <td class="mypage__schedule-table-status">
                              <span class="c-text-black">예정</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <PubPagination />
                    </div>
                    <div class="c-btn-group">
                      <button class="c-btn c-btn-blue">재매칭 신청</button>
                    </div>
                  </div>
                </div>
                <div class="mypage-management__item-cancel">
                  <button class="c-btn c-btn-text c-btn-text--line">
                    재매칭 취소
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
