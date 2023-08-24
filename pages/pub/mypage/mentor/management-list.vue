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
  name: "Calendar",
  data() {
    return {
      mentoring: false,
    };
  },
};
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
            <div class="c-text-title-lg">멘토링 관리 (10/10명)</div>
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
                <div class="mypage-management__item">
                  <div
                    class="mypage-management__item-head"
                    @click="mentoring = !mentoring"
                  >
                    <div class="mypage-management__item-img">
                      <div class="mypage-management__item-img-mask">
                        <img src="@img/@temp/1.jpg" alt="프로필 이미지" />
                      </div>
                    </div>
                    <div class="mypage-management__item-text">
                      <div class="mypage-management__item-text-name">
                        <p class="c-flex">
                          <i class="ico ico-medal ico-medal--silver">11</i>
                          나의 멘토,<br class="c-mo" />
                          둥근해가떴습니다호이 님
                        </p>
                        <div class="c-badge c-badge-yellow">매칭율 100%</div>
                      </div>
                      <div class="mypage-management__item-text-info">
                        다음 일정 2023.01.01 12:00
                      </div>
                    </div>
                    <div class="mypage-management__item-btn">
                      <button class="c-btn c-btn-study">학습 내역보기</button>
                      <button class="c-btn c-btn-letter">문자 보내기</button>
                    </div>
                    <!-- 웹접근성 button 추가 -->
                    <button class="mypage-management__item-more">
                      상세보기
                    </button>
                    <!-- //웹접근성 button 추가 -->
                  </div>
                  <div
                    class="mypage-management__item-body"
                    v-show="mentoring == true"
                  >
                    <section>
                      <h3 class="mypage__schedule-list-body-title">
                        이용중인 학습 강좌
                      </h3>
                      <div class="mypage__schedule-list-body-lecture">
                        <ul>
                          <li>
                            <div class="mypage__schedule-list-body-lecture-img">
                              <img
                                src="@img/logo-milkt-high.png"
                                alt="밀크T 고등 로고"
                              />
                            </div>
                            <p>밀크티 고등</p>
                          </li>
                          <li>
                            <div class="mypage__schedule-list-body-lecture-img">
                              <img
                                src="@img/logo-milkt-high.png"
                                alt="밀크T 고등 로고"
                              />
                            </div>
                            <p>밀크티 고등</p>
                          </li>
                          <li>
                            <div class="mypage__schedule-list-body-lecture-img">
                              <img
                                src="@img/logo-milkt-high.png"
                                alt="밀크T 고등 로고"
                              />
                            </div>
                            <p>밀크티 고등</p>
                          </li>
                          <li>
                            <div class="mypage__schedule-list-body-lecture-img">
                              <img
                                src="@img/logo-milkt-high.png"
                                alt="밀크T 고등 로고"
                              />
                            </div>
                            <p>밀크티 고등</p>
                          </li>
                        </ul>
                      </div>
                    </section>
                    <section>
                      <h3 class="mypage__schedule-list-body-title">
                        다음 일정
                      </h3>
                      <div class="mypage-management__box">
                        <div class="mypage__schedule-list-head-wrap">
                          <div class="mypage__schedule-list-head">
                            <div class="mypage__schedule-list-text">
                              <div class="mypage__schedule-list-text-title">
                                <p>[온라인] 멘토링 4회차</p>
                              </div>
                              <div class="mypage__schedule-list-text-info">
                                2023.04.10 15:00 · 온라인 화상
                              </div>
                            </div>
                            <div class="mypage__schedule-list-btn">
                              <button class="c-btn c-btn-sm c-btn-blue">
                                결석 신고 입력
                              </button>
                              <button class="c-btn c-btn-sm c-btn-blue">
                                일정/장소 변경 요청
                              </button>
                              <!-- 230718 c-btn-primary 클래스로 변경 -->
                              <button class="c-btn c-btn-sm c-btn-primary">
                                강의실 입장
                              </button>
                              <button class="c-btn c-btn-sm c-btn-inactive">
                                강의실 입장
                              </button>
                            </div>
                          </div>
                          <div class="mypage__schedule-list-foot">
                            <a class="mypage__schedule-list-foot-link" href=""
                              ><i class="ico ico-file"></i>
                              <p>보고서 작성하기</p></a
                            >
                            <a class="mypage__schedule-list-foot-link" href=""
                              ><i class="ico ico-file"></i>
                              <p>심화활동 보고서 작성</p></a
                            >
                          </div>
                        </div>
                      </div>
                    </section>
                    <section>
                      <h3 class="mypage__schedule-list-body-title">
                        다음 일정
                      </h3>
                      <div class="mypage-management__box">
                        <div class="mypage__schedule-list-head-wrap">
                          <div class="mypage__schedule-list-head">
                            <div class="mypage__schedule-list-text">
                              <div class="mypage__schedule-list-text-title">
                                <p>[온라인] 멘토링 4회차</p>
                              </div>
                              <div class="mypage__schedule-list-text-info">
                                2023.04.10 15:00 · 온라인 화상
                              </div>
                            </div>
                            <div class="mypage__schedule-list-btn">
                              <button class="c-btn c-btn-sm c-btn-blue">
                                심화활동 신청
                              </button>
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
                              <p>보고서 작성하기</p></a
                            >
                            <a class="mypage__schedule-list-foot-link" href=""
                              ><i class="ico ico-file"></i>
                              <p>심화활동 보고서 작성</p></a
                            >
                          </div>
                        </div>
                      </div>
                    </section>
                    <section>
                      <h3 class="mypage__schedule-list-body-title">
                        전체 일정
                      </h3>
                      <div class="mypage-management__box">
                        <div class="mypage-management__box-info">
                          <ul>
                            <li>
                              <a href=""
                                ><span>미작성 보고서</span>
                                <p>15</p></a
                              >
                            </li>
                            <li>
                              <a href=""
                                ><span>결석 사유 미작성</span>
                                <p>360</p></a
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="mypage-management__box">
                        <div class="mypage-management__box-info">
                          <div class="mypage-management__box-info-title">
                            축하드립니다.<br />소중한 인연 멘티가 매칭되었어요.
                          </div>
                          <p>OJT로 멘티와 약속을 정해봐요.</p>
                          <button class="c-btn c-btn-danger c-btn-sm">
                            OJT 강의 계획
                          </button>
                        </div>
                      </div>
                      <div class="mypage-management__box">
                        <div
                          class="mypage-management__box-info mypage-management__box-info--type02"
                        >
                          <div class="mypage-management__box-info-title">
                            고생하셨어요! 멘토링이 모두 완료되었습니다.
                          </div>
                          <p>
                            멘토링은 어떠셨나요?<br class="c-mo" />
                            필요하시면 멘토링 연장 신청을 신청하세요.
                          </p>
                          <!-- 230620 버튼에  <div class="mypage-management__box-info-btn-box">버튼</div> div 추가 -->
                          <div class="mypage-management__box-info-btn-box">
                            <button class="c-btn c-btn-blue c-btn-sm">
                              만족도 조사
                            </button>
                            <button class="c-btn c-btn-danger c-btn-sm">
                              멘토링 연장 신청
                            </button>
                          </div>
                          <!-- 230620 버튼에  <div class="mypage-management__box-info-btn-box">버튼</div> div 추가 -->
                        </div>
                      </div>
                      <div class="mypage-management__box">
                        <div class="mypage-management__box-info">
                          <div class="mypage-management__box-info-title">
                            멘티와의 첫 만남은 어떠셨나요?
                          </div>
                          <p>이후 활동 계획서를 작성해주세요~</p>
                          <button class="c-btn c-btn-danger c-btn-sm">
                            강의 계획서 작성
                          </button>
                        </div>
                      </div>
                      <div class="c-btn-group">
                        <button class="c-btn c-btn-blue">재매칭 신청</button>
                      </div>
                    </section>
                  </div>
                </div>
                <div
                  class="mypage-management__item-cancel"
                  v-if="mentoring == true"
                >
                  <button class="c-btn c-btn-text c-btn-text--line">
                    재매칭 취소
                  </button>
                </div>

                <div class="mypage-management__item">
                  <div
                    class="mypage-management__item-head"
                    @click="mentoring = !mentoring"
                  >
                    <div class="mypage-management__item-img">
                      <div class="mypage-management__item-img-mask">
                        <img src="@img/@temp/1.jpg" alt="프로필 이미지" />
                      </div>
                    </div>
                    <div class="mypage-management__item-text">
                      <div class="mypage-management__item-text-name">
                        <p class="c-flex">
                          <i class="ico ico-medal ico-medal--silver">11</i>
                          나의 멘토,<br class="c-mo" />
                          둥근해가떴습니다호이 님
                        </p>
                        <div class="c-badge c-badge-yellow">매칭율 100%</div>
                      </div>
                      <div class="mypage-management__item-text-info">
                        다음 일정 2023.01.01 12:00
                      </div>
                    </div>
                    <div class="mypage-management__item-btn">
                      <button class="c-btn c-btn-study">학습 내역보기</button>
                      <button class="c-btn c-btn-letter">문자 보내기</button>
                    </div>
                    <!-- 웹접근성 button 추가 -->
                    <button class="mypage-management__item-more">
                      상세보기
                    </button>
                    <!-- //웹접근성 button 추가 -->
                  </div>
                  <div
                    class="mypage-management__item-body"
                    v-if="mentoring == true"
                  >
                    <section>
                      <h3 class="mypage__schedule-list-body-title">
                        이용중인 학습 강좌
                      </h3>
                      <div class="mypage__schedule-list-body-lecture">
                        <ul>
                          <li>
                            <div class="mypage__schedule-list-body-lecture-img">
                              <img
                                src="@img/logo-milkt-high.png"
                                alt="밀크T 고등 로고"
                              />
                            </div>
                            <p>밀크티 고등</p>
                          </li>
                          <li>
                            <div class="mypage__schedule-list-body-lecture-img">
                              <img
                                src="@img/logo-milkt-high.png"
                                alt="밀크T 고등 로고"
                              />
                            </div>
                            <p>밀크티 고등</p>
                          </li>
                          <li>
                            <div class="mypage__schedule-list-body-lecture-img">
                              <img
                                src="@img/logo-milkt-high.png"
                                alt="밀크T 고등 로고"
                              />
                            </div>
                            <p>밀크티 고등</p>
                          </li>
                          <li>
                            <div class="mypage__schedule-list-body-lecture-img">
                              <img
                                src="@img/logo-milkt-high.png"
                                alt="밀크T 고등 로고"
                              />
                            </div>
                            <p>밀크티 고등</p>
                          </li>
                        </ul>
                      </div>
                    </section>
                    <section>
                      <h3 class="mypage__schedule-list-body-title">
                        다음 일정
                      </h3>
                      <div class="mypage-management__box">
                        <div class="mypage__schedule-list-head-wrap">
                          <div class="mypage__schedule-list-head">
                            <div class="mypage__schedule-list-text">
                              <div class="mypage__schedule-list-text-title">
                                <p>[온라인] 멘토링 4회차</p>
                              </div>
                              <div class="mypage__schedule-list-text-info">
                                2023.04.10 15:00 · 온라인 화상
                              </div>
                            </div>
                            <div class="mypage__schedule-list-btn">
                              <button class="c-btn c-btn-sm c-btn-blue">
                                결석 신고 입력
                              </button>
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
                              <p>보고서 작성하기</p></a
                            >
                            <a class="mypage__schedule-list-foot-link" href=""
                              ><i class="ico ico-file"></i>
                              <p>심화활동 보고서 작성</p></a
                            >
                          </div>
                        </div>
                      </div>
                    </section>
                    <section>
                      <h3 class="mypage__schedule-list-body-title">
                        전체 일정
                      </h3>
                      <div class="mypage-management__box">
                        <div class="mypage-management__box-info">
                          <ul class="">
                            <li>
                              <a href=""
                                ><span>미작성 보고서</span>
                                <p>15</p></a
                              >
                            </li>
                            <li>
                              <a href=""
                                ><span>결석 사유 미작성</span>
                                <p>360</p></a
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="mypage-management__box">
                        <div class="c-table__wrap c-table__wrap-scroll">
                          <table
                            class="c-table c-table-center mypage__schedule-table"
                          >
                            <caption>
                              강의 일정 테이블로 회차, 시간, 상태, 보고서 를 알
                              수 있습니다.
                            </caption>
                            <colgroup>
                              <col width="25%" />
                              <col width="25%" />
                              <col width="25%" />
                              <col width="25%" />
                            </colgroup>
                            <thead>
                              <tr>
                                <th scope="col">회차</th>
                                <th scope="col">시간</th>
                                <th scope="col">상태</th>
                                <th scope="col">보고서</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  1회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">완료</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-black">완료</span>
                                </td>
                              </tr>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  2회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">완료</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-black">완료</span>
                                </td>
                              </tr>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  3회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">멘티 결석</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-danger c-text-underline"
                                    >보고서 작성</span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  4회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">멘티 결석</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-danger c-text-underline"
                                    >사유 입력</span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  5회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">멘토 결석</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-danger c-text-underline"
                                    >결석 신고</span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  6회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">완료</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-black">예정</span>
                                </td>
                              </tr>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  7회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">완료</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-black">예정</span>
                                </td>
                              </tr>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  8회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">완료</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-black">예정</span>
                                </td>
                              </tr>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  9회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">완료</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-black">예정</span>
                                </td>
                              </tr>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  10회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">완료</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-black">예정</span>
                                </td>
                              </tr>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  1회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">완료</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-black">완료</span>
                                </td>
                              </tr>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  2회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">완료</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-black">완료</span>
                                </td>
                              </tr>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  3회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">멘티 결석</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-danger c-text-underline"
                                    >보고서 작성</span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  4회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">멘티 결석</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-danger c-text-underline"
                                    >사유 입력</span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  5회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">멘토 결석</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-danger c-text-underline"
                                    >결석 신고</span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  6회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">완료</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-black">예정</span>
                                </td>
                              </tr>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  7회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">완료</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-black">예정</span>
                                </td>
                              </tr>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  8회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">완료</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-black">예정</span>
                                </td>
                              </tr>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  9회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">완료</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-black">예정</span>
                                </td>
                              </tr>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  10회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">완료</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-black">예정</span>
                                </td>
                              </tr>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  1회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">완료</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-black">완료</span>
                                </td>
                              </tr>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  2회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">완료</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-black">완료</span>
                                </td>
                              </tr>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  3회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">멘티 결석</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-danger c-text-underline"
                                    >보고서 작성</span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  4회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">멘티 결석</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-danger c-text-underline"
                                    >사유 입력</span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  5회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">멘토 결석</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-danger c-text-underline"
                                    >결석 신고</span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  6회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">완료</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-black">예정</span>
                                </td>
                              </tr>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  7회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">완료</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-black">예정</span>
                                </td>
                              </tr>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  8회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">완료</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-black">예정</span>
                                </td>
                              </tr>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  9회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">완료</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-black">예정</span>
                                </td>
                              </tr>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  10회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">완료</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-black">예정</span>
                                </td>
                              </tr>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  9회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">완료</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-black">예정</span>
                                </td>
                              </tr>
                              <tr>
                                <td class="mypage__schedule-table-num">
                                  10회차
                                </td>
                                <td class="c-text-black">2023.01.01 15:00</td>
                                <td class="c-text-black">완료</td>
                                <td class="mypage__schedule-table-status">
                                  <span class="c-text-black">예정</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div class="c-btn-group">
                        <button class="c-btn c-btn-blue">재매칭 신청</button>
                      </div>
                    </section>
                  </div>
                </div>
                <div
                  class="mypage-management__item-cancel"
                  v-show="mentoring == true"
                >
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
