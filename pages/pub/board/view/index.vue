<script setup>
definePageMeta({
  layout: "board",
});
</script>
<template>
  <div class="board">
    <PubBreadCrumbs />
    <div class="board-view">
      <div class="board-view__title">
        <p>
          서울시와 함께하는 청소년 신나는 동행캠프 모집 2탄서울시와 함께하는
          청소년 신나는 동행캠프 모집 2탄서울시와 함께하는 청소년 신나는
          동행캠프 모집 2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
          2탄서울시와 함께하는 청소년 신나는 동행캠프 모집 2탄서울시와 함께하는
          청소년 신나는 동행캠프 모집 2탄서울시와 함께하는 청소년 신나는
          동행캠프 모집 2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
          2탄서울시와 함께하는 청소년 신나는 동행캠프 모집 2탄서울시와 함께하는
          청소년 신나는 동행캠프 모집 2탄서울시와 함께하는 청소년 신나는
          동행캠프 모집 2탄서울시와 함께하는 청소년 신나는 동행캠프 모집
          2탄서울시와 함께하는 청소년 신나는 동행캠프 모집 2탄서울시와 함께하는
          청소년 신나는 동행캠프 모집 2탄서울시와 함께하는 청소년 신나는
          동행캠프 모집 2탄
        </p>
        <span>2022.01.01 ~ 2022.12.31</span>
      </div>
      <div class="board-view__contents">
        <div class="board-view__contents-head">
          <div class="c-form-group">
            <div class="c-form-label">첨부파일</div>
            <ul>
              <li>
                <a href="" class="c-badge c-badge-lg c-badge-light">
                  <p>서울런 학습수기 및 이미지 공모전 공고문(기간연장).hwp</p>
                </a>
              </li>
              <li>
                <a href="" class="c-badge c-badge-lg c-badge-light">
                  <p>서울런 학습수기 및 이미지 공모전 공고문(기간연장).hwp</p>
                </a>
              </li>
              <li>
                <a href="" class="c-badge c-badge-lg c-badge-light">
                  <p>서울런 학습수기 및 이미지 공모전 공고문(기간연장).hwp</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- 230614 수정 - 게시판 내용에 <div class="board-view__contents-body"> 내용 </div> 추가-->
        <div class="board-view__contents-body">
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
        <!-- // 230614 수정 - 게시판 내용에 <div class="board-view__contents-body"> 내용 </div> 추가-->
      </div>
      <div class="c-btn-group">
        <button class="c-btn c-btn-lg c-btn-primary">
          <strong>목록으로</strong>
        </button>
        <button class="c-btn c-btn-lg c-btn-danger">
          <strong>행사모집</strong>
        </button>
        <!-- <button class="c-btn c-btn-lg c-btn-danger">
          <strong>화상 입장하기</strong>
        </button>
        <button class="c-btn c-btn-lg c-btn-danger">
          <strong>설문조사 시작하기</strong>
        </button> -->
      </div>
      <PubComments />
      <PubPagination />
      <div class="board__btn">
        <button class="c-btn">댓글</button>
        <button class="c-btn">답글</button>
        <button class="c-btn">수정</button>
      </div>
    </div>
  </div>
</template>
