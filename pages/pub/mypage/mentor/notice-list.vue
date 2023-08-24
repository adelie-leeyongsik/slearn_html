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
    <div class="mypage-notice__list">
      <div class="mypage__wrap">
        <SnbPc />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <div class="c-text-title-lg">멘토 공지사항</div>
            <div class="c-text-title-sub">
              <p>
                멘토분들이 확인해야 할 필독 공지! <br />
                도움이 필요하실 땐 서울런 고객센터<br
                  class="c-mo"
                />(1533-0909)로 연락주세요!
              </p>
            </div>
          </div>
          <div class="mypage__contents-search">
            <div class="c-form-group">
              <label for="status" class="c-form-label">검색어</label>
              <!-- 웹접근성 title 추가 -->
              <input
                type="text"
                class="c-form-control c-form-control-sm"
                title="검색어"
              />
              <!--// 웹접근성 title 추가 -->
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
                    <button class="c-btn c-btn-danger">조회</button>
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
                  멘토 공지사항으로 No, 내용, 첨부파일, 작성일을 볼 수 있습니다.
                </caption>
                <colgroup>
                  <col width="80" />
                  <col />
                  <col width="60" />
                  <col width="100" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">내용</th>
                    <th scope="col">첨부</th>
                    <th scope="col">작성일</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <i class="ico ico-pin">고정 아이콘</i>
                    </td>
                    <td class="c-table__title">
                      <div>
                        <span>[행사모집]</span>
                        <a href="">
                          서울시와 함께하는 청소년 신나는 동행캠프 모집 2탄
                        </a>
                        <i class="ico ico-new">N</i>
                      </div>
                    </td>
                    <td>
                      <a href="">
                        <i class="ico ico-file"></i>
                      </a>
                    </td>
                    <td>2022.12.31</td>
                  </tr>
                  <tr>
                    <td>
                      <i class="ico ico-pin">고정 아이콘</i>
                    </td>
                    <td class="c-table__title">
                      <div>
                        <span>[행사모집]</span>
                        <a href="">
                          서울시와 함께하는 청소년 신나는 동행캠프 모집 2탄
                        </a>
                        <i class="ico ico-new">N</i>
                      </div>
                    </td>
                    <td>
                      <a href="">
                        <i class="ico ico-file"></i>
                      </a>
                    </td>
                    <td>2022.12.31</td>
                  </tr>
                  <tr>
                    <td><strong>999</strong></td>
                    <td class="c-table__title">
                      <div>
                        <span>[행사모집]</span>
                        <a href="">
                          서울시와 함께하는 청소년 신나는 동행캠프 모집 2탄
                        </a>
                        <i class="ico ico-new">N</i>
                      </div>
                    </td>
                    <td>
                      <a href="">
                        <i class="ico ico-file"></i>
                      </a>
                    </td>
                    <td>2022.12.31</td>
                  </tr>
                  <tr>
                    <td><strong>999</strong></td>
                    <td class="c-table__title">
                      <div>
                        <span>[행사모집]</span>
                        <a href="">
                          서울시와 함께하는 청소년 신나는 동행캠프 모집 2탄
                        </a>
                        <i class="ico ico-new">N</i>
                      </div>
                    </td>
                    <td>
                      <a href="">
                        <i class="ico ico-file"></i>
                      </a>
                    </td>
                    <td>2022.12.31</td>
                  </tr>
                  <tr>
                    <td><strong>999</strong></td>
                    <td class="c-table__title">
                      <div>
                        <span>[행사모집]</span>
                        <a href="">
                          서울시와 함께하는 청소년 신나는 동행캠프 모집 2탄
                        </a>
                        <i class="ico ico-new">N</i>
                      </div>
                    </td>
                    <td>
                      <a href="">
                        <i class="ico ico-file"></i>
                      </a>
                    </td>
                    <td>2022.12.31</td>
                  </tr>
                  <tr>
                    <td><strong>999</strong></td>
                    <td class="c-table__title">
                      <div>
                        <span>[행사모집]</span>
                        <a href="">
                          서울시와 함께하는 청소년 신나는 동행캠프 모집 2탄
                        </a>
                        <i class="ico ico-new">N</i>
                      </div>
                    </td>
                    <td>
                      <a href="">
                        <i class="ico ico-file"></i>
                      </a>
                    </td>
                    <td>2022.12.31</td>
                  </tr>
                  <tr>
                    <td><strong>999</strong></td>
                    <td class="c-table__title">
                      <div>
                        <span>[행사모집]</span>
                        <a href="">
                          서울시와 함께하는 청소년 신나는 동행캠프 모집 2탄
                        </a>
                        <i class="ico ico-new">N</i>
                      </div>
                    </td>
                    <td>
                      <a href="">
                        <i class="ico ico-file"></i>
                      </a>
                    </td>
                    <td>2022.12.31</td>
                  </tr>
                  <tr>
                    <td><strong>999</strong></td>
                    <td class="c-table__title">
                      <div>
                        <span>[행사모집]</span>
                        <a href="">
                          서울시와 함께하는 청소년 신나는 동행캠프 모집 2탄
                        </a>
                        <i class="ico ico-new">N</i>
                      </div>
                    </td>
                    <td>
                      <a href="">
                        <i class="ico ico-file"></i>
                      </a>
                    </td>
                    <td>2022.12.31</td>
                  </tr>
                  <tr>
                    <td><strong>999</strong></td>
                    <td class="c-table__title">
                      <div>
                        <span>[행사모집]</span>
                        <a href="">
                          서울시와 함께하는 청소년 신나는 동행캠프 모집 2탄
                        </a>
                        <i class="ico ico-new">N</i>
                      </div>
                    </td>
                    <td>
                      <a href="">
                        <i class="ico ico-file"></i>
                      </a>
                    </td>
                    <td>2022.12.31</td>
                  </tr>
                  <tr>
                    <td><strong>999</strong></td>
                    <td class="c-table__title">
                      <div>
                        <span>[행사모집]</span>
                        <a href="">
                          서울시와 함께하는 청소년 신나는 동행캠프 모집 2탄
                        </a>
                        <i class="ico ico-new">N</i>
                      </div>
                    </td>
                    <td>
                      <a href="">
                        <i class="ico ico-file"></i>
                      </a>
                    </td>
                    <td>2022.12.31</td>
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
</template>

<style lang="scss" scoped>
.c-table {
  &__head {
    @include mobile {
      margin-top: 4rem;
    }
  }
  td {
    strong {
      font-size: 1.6rem;
    }
  }
}
</style>
