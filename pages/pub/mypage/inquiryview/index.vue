<script setup>
import SnbPc from "../_snbpc.vue";
import SnbTablet from "../_snbtablet.vue";
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
          <div class="mypage__contents-body">
            <div class="mypage__board">
              <div class="mypage__board-title">
                <p>
                  <span>[멘티가입]</span>
                  멘티신청 오류멘티신청 오류멘티신청 오류멘티신청 오류멘티신청
                  오류멘티신청 오류멘티신청 오류멘티신청 오류멘티신청
                  오류멘티신청 오류멘티신청 오류멘티신청 오류멘티신청
                  오류멘티신청 오류멘티신청 오류멘티신청 오류멘티신청
                  오류멘티신청 오류멘티신청 오류멘티신청 오류멘티신청
                  오류멘티신청 오류멘티신청 오류멘티신청 오류멘티신청
                  오류멘티신청 오류멘티신청 오류멘티신청 오류멘티신청
                  오류멘티신청 오류멘티신청 오류멘티신청 오류멘티신청
                  오류멘티신청 오류멘티신청 오류멘티신청 오류멘티신청
                  오류멘티신청 오류멘티신청 오류
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
                <div class="mypage__board-reply">
                  <!-- 230629 화면 수정 -->
                  <div class="mypage__board-title">
                    <p>
                      <span class="c-text-primary">[답변완료]</span>
                      안녕하세요. OO입니다.
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
                  <!--// 230629 화면 수정 -->
                </div>
              </div>
            </div>
            <div class="c-btn-group">
              <button class="c-btn c-btn-lg c-btn-blue">삭제하기</button>
              <button class="c-btn c-btn-lg c-btn-danger">수정하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
