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
    <div class="mypage-inquiry">
      <div class="mypage__wrap">
        <SnbPc />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <div class="c-text-title-lg">1:1 문의 내역</div>
            <div class="c-text-title-sub">
              <p>
                사이트 이용 질문을 남겨주세요<br />
                도움이 필요하실 땐 서울런 고객센터<br
                  class="c-mo"
                />(1533-0909)로 연락주세요!
              </p>
              <button class="c-btn c-btn-sm c-btn-danger">문의하기</button>
            </div>
          </div>
          <div class="mypage__contents-search">
            <div class="c-form-group">
              <label for="status" class="c-form-label">상태별</label>
              <select
                name=""
                id="status"
                class="c-form-control c-form-control-sm"
              >
                <option value="">전체</option>
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
              </div>
              <table class="c-table c-table-center">
                <caption>
                  1:1 문의 내역 리스트로 카테고리, 내용, 작성일, 처리상태 를 볼
                  수 있습니다.
                </caption>
                <colgroup>
                  <col width="140" />
                  <col />
                  <col width="100" />
                  <col width="140" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">카테고리</th>
                    <th scope="col">내용</th>
                    <th scope="col">작성일</th>
                    <th scope="col">처리 상태</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>[회원가입]</td>
                    <td class="c-table__title">
                      <p>
                        <a href=""
                          >비밀번호를 분실했습니다. 빨리 찾고싶어요
                          알려주세요!</a
                        >
                      </p>
                    </td>
                    <td>2023.01.10</td>
                    <td><strong>답변 대기중</strong></td>
                  </tr>
                  <tr>
                    <td>[회원가입]</td>
                    <td class="c-table__title">
                      <p>
                        <a href=""
                          >비밀번호를 분실했습니다. 빨리 찾고싶어요
                          알려주세요!</a
                        >
                      </p>
                    </td>
                    <td>2023.01.10</td>
                    <td><strong class="c-text-danger">답변 완료</strong></td>
                  </tr>
                  <tr>
                    <td>[회원가입]</td>
                    <td class="c-table__title">
                      <p>
                        <a href=""
                          >비밀번호를 분실했습니다. 빨리 찾고싶어요
                          알려주세요!</a
                        >
                      </p>
                    </td>
                    <td>2023.01.10</td>
                    <td><strong class="c-text-danger">답변 완료</strong></td>
                  </tr>
                  <tr>
                    <td>[회원가입]</td>
                    <td class="c-table__title">
                      <p>
                        <a href=""
                          >비밀번호를 분실했습니다. 빨리 찾고싶어요
                          알려주세요!</a
                        >
                      </p>
                    </td>
                    <td>2023.01.10</td>
                    <td><strong class="c-text-danger">답변 완료</strong></td>
                  </tr>
                  <tr>
                    <td>[회원가입]</td>
                    <td class="c-table__title">
                      <p>
                        <a href=""
                          >비밀번호를 분실했습니다. 빨리 찾고싶어요
                          알려주세요!</a
                        >
                      </p>
                    </td>
                    <td>2023.01.10</td>
                    <td><strong class="c-text-danger">답변 완료</strong></td>
                  </tr>
                  <tr>
                    <td>[회원가입]</td>
                    <td class="c-table__title">
                      <p>
                        <a href=""
                          >비밀번호를 분실했습니다. 빨리 찾고싶어요
                          알려주세요!</a
                        >
                      </p>
                    </td>
                    <td>2023.01.10</td>
                    <td><strong class="c-text-danger">답변 완료</strong></td>
                  </tr>
                  <tr>
                    <td>[회원가입]</td>
                    <td class="c-table__title">
                      <p>
                        <a href=""
                          >비밀번호를 분실했습니다. 빨리 찾고싶어요
                          알려주세요!</a
                        >
                      </p>
                    </td>
                    <td>2023.01.10</td>
                    <td><strong class="c-text-danger">답변 완료</strong></td>
                  </tr>
                  <tr>
                    <td>[회원가입]</td>
                    <td class="c-table__title">
                      <p>
                        <a href=""
                          >비밀번호를 분실했습니다. 빨리 찾고싶어요
                          알려주세요!</a
                        >
                      </p>
                    </td>
                    <td>2023.01.10</td>
                    <td><strong class="c-text-danger">답변 완료</strong></td>
                  </tr>
                  <tr>
                    <td>[회원가입]</td>
                    <td class="c-table__title">
                      <p>
                        <a href=""
                          >비밀번호를 분실했습니다. 빨리 찾고싶어요
                          알려주세요!</a
                        >
                      </p>
                    </td>
                    <td>2023.01.10</td>
                    <td><strong class="c-text-danger">답변 완료</strong></td>
                  </tr>
                  <tr>
                    <td>[회원가입]</td>
                    <td class="c-table__title">
                      <p>
                        <a href=""
                          >비밀번호를 분실했습니다. 빨리 찾고싶어요
                          알려주세요!</a
                        >
                      </p>
                    </td>
                    <td>2023.01.10</td>
                    <td><strong class="c-text-danger">답변 완료</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <PubPagination />
          </div>

          <div class="mypage__contents-body">
            <div class="mypage__contents-head--sm">총 0개</div>
            <div class="c-notfound">
              <img
                src="@img/ch-table.svg"
                alt="참여한 이벤트가 없습니다. 다양한 이벤트에 참여해보세요!"
              />
              <p>
                등록된 질문이 없습니다. <br />
                자주하는 질문에서 먼저 확인해보는건 어떨까요?
              </p>
              <a href="">자주하는 질문 바로가기</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
