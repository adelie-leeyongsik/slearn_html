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
    <div class="mypage-share__view">
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

          <div class="mypage__contents-body">
            <div class="mypage__board">
              <div class="mypage__board-title">
                <p>
                  <span>[멘티가입]</span>멘티신청 오류멘티신청 오류멘티신청
                  오류멘티신청 오류멘티신청 오류멘티신청 오류멘티신청
                  오류멘티신청 오류멘티신청 오류멘티신청 오류멘티신청
                  오류멘티신청 오류멘티신청 오류멘티신청 오류멘티신청
                  오류멘티신청 오류멘티신청 오류멘티신청 오류멘티신청
                  오류멘티신청 오류멘티신청 오류멘티신청 오류멘티신청
                  오류멘티신청 오류멘티신청 오류멘티신청 오류멘티신청
                  오류멘티신청 오류멘티신청 오류멘티신청 오류멘티신청
                  오류멘티신청 오류멘티신청 오류멘티신청 오류멘티신청
                  오류멘티신청 오류멘티신청 오류멘티신청 오류멘티신청 오류
                </p>
                <div class="mypage__board-title-writer">
                  <p>홍길동</p>
                  <span>2023.03.01</span>
                </div>
              </div>
              <div class="mypage__board-contents">
                <div class="mypage__board-contents-head">
                  <div class="c-form-group">
                    <div class="c-form-label">첨부파일</div>
                    <ul>
                      <li>
                        <a href="" class="c-badge c-badge-lg c-badge-light"
                          ><p>
                            서울런 학습수기 및 이미지 공모전
                            공고문(기간연장).hwp
                          </p></a
                        >
                      </li>
                      <li>
                        <a href="" class="c-badge c-badge-lg c-badge-light"
                          ><p>
                            서울런 학습수기 및 이미지 공모전
                            공고문(기간연장).hwp
                          </p></a
                        >
                      </li>
                      <li>
                        <a href="" class="c-badge c-badge-lg c-badge-light"
                          ><p>
                            서울런 학습수기 및 이미지 공모전
                            공고문(기간연장).hwp
                          </p></a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- temp -->
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 380px;
                    background-color: #f1f1f1;
                    font-size: 20px;
                    color: #535353;
                  "
                >
                  상세내용
                </div>
                <!-- temp -->
              </div>
            </div>
            <div class="c-btn-group">
              <button class="c-btn c-btn-lg c-btn-danger">
                <strong>목록으로</strong>
              </button>
            </div>
            <PubComments />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
