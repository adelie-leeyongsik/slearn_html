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
    <div class="mypage-share__list">
      <div class="mypage__wrap">
        <SnbPc />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <div class="c-text-title-lg">멘토 공유방</div>
            <div class="c-text-title-sub">
              <p>
                서울런에서 제공하는 쿠폰 사용방법을<br class="c-mo" />
                자세히 알아보고 혜택을 누려보세요!
                <br />
                도움이 필요하실 땐 서울런 고객센터<br class="c-mo" />
                (1533-0909)로 연락주세요!
              </p>
              <button class="c-btn c-btn-sm c-btn-danger">글쓰기</button>
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
            <div class="c-table__head">
              <p>총 999개</p>
            </div>
            <div class="c-table__wrap c-table__wrap-scroll">
              <table class="c-table c-table-center">
                <caption>
                  멘토 공유방 리스트로 no, 내용, 작성자, 작성일, 첨부, 조회수 를
                  볼 수 있습니다.
                </caption>
                <colgroup>
                  <col width="80" />
                  <col />
                  <col width="80" />
                  <col width="100" />
                  <col width="60" />
                  <col width="80" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">내용</th>
                    <th scope="col">작성자</th>
                    <th scope="col">작성일</th>
                    <th scope="col">첨부</th>
                    <th scope="col">조회수</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>100</strong></td>
                    <td class="c-table__title">
                      <p>
                        <a href="">엘리하이 멘토링 참고 자료</a>
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>2023.01.30</td>
                    <td>
                      <!-- 웹접근성 i태그 부모로 a태그 추가 -->
                      <a href=""><i class="ico ico-file"></i></a>
                    </td>
                    <td>2,222</td>
                  </tr>
                  <tr>
                    <td><strong>100</strong></td>
                    <td class="c-table__title">
                      <p>
                        <a href="">엘리하이 멘토링 참고 자료</a>
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>2023.01.30</td>
                    <td>
                      <a href=""><i class="ico ico-file"></i></a>
                    </td>
                    <td>2,222</td>
                  </tr>
                  <tr>
                    <td><strong>100</strong></td>
                    <td class="c-table__title">
                      <p>
                        <a href="">엘리하이 멘토링 참고 자료</a>
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>2023.01.30</td>
                    <td>
                      <a href=""><i class="ico ico-file"></i></a>
                    </td>
                    <td>2,222</td>
                  </tr>
                  <tr>
                    <td><strong>100</strong></td>
                    <td class="c-table__title">
                      <p>
                        <a href="">엘리하이 멘토링 참고 자료</a>
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>2023.01.30</td>
                    <td>
                      <a href=""><i class="ico ico-file"></i></a>
                    </td>
                    <td>2,222</td>
                  </tr>
                  <tr>
                    <td><strong>100</strong></td>
                    <td class="c-table__title">
                      <p>
                        <a href="">엘리하이 멘토링 참고 자료</a>
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>2023.01.30</td>
                    <td>
                      <a href=""><i class="ico ico-file"></i></a>
                    </td>
                    <td>2,222</td>
                  </tr>
                  <tr>
                    <td><strong>100</strong></td>
                    <td class="c-table__title">
                      <p>
                        <a href="">엘리하이 멘토링 참고 자료</a>
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>2023.01.30</td>
                    <td>
                      <a href=""><i class="ico ico-file"></i></a>
                    </td>
                    <td>2,222</td>
                  </tr>
                  <tr>
                    <td><strong>100</strong></td>
                    <td class="c-table__title">
                      <p>
                        <a href="">엘리하이 멘토링 참고 자료</a>
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>2023.01.30</td>
                    <td>
                      <a href=""><i class="ico ico-file"></i></a>
                    </td>
                    <td>2,222</td>
                  </tr>
                  <tr>
                    <td><strong>100</strong></td>
                    <td class="c-table__title">
                      <p>
                        <a href="">엘리하이 멘토링 참고 자료</a>
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>2023.01.30</td>
                    <td>
                      <a href=""><i class="ico ico-file"></i></a>
                    </td>
                    <td>2,222</td>
                  </tr>
                  <tr>
                    <td><strong>100</strong></td>
                    <td class="c-table__title">
                      <p>
                        <a href="">엘리하이 멘토링 참고 자료</a>
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>2023.01.30</td>
                    <td>
                      <a href=""><i class="ico ico-file"></i></a>
                    </td>
                    <td>2,222</td>
                  </tr>
                  <tr>
                    <td><strong>100</strong></td>
                    <td class="c-table__title">
                      <p>
                        <a href="">엘리하이 멘토링 참고 자료</a>
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>2023.01.30</td>
                    <td>
                      <a href=""><i class="ico ico-file"></i></a>
                    </td>
                    <td>2,222</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <PubPagination />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-table__head {
  @include mobile {
    margin-top: 4rem;
  }
}
.c-table {
  tbody {
    strong {
      font-size: 1.6rem;
    }
  }
}
</style>
