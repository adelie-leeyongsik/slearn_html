<script setup>
definePageMeta({
  layout: "board",
});
</script>

<template>
  <div class="board">
    <!-- 230711 타이틀 sub 수정 -->
    <PubTitleSearch
      title="공지사항"
      sub="서울런의 최신 소식과 중요한 정보를 
빠르게 확인해보세요."
    >
    </PubTitleSearch>
    <div class="board-list">
      <table>
        <caption>
          <!-- 270727 captio 텍스트 수정 -->
          공지사항 리스트로 제목, 작성일자, 조회수를 제공 합니다.
        </caption>
        <colgroup>
          <!-- 270727 colgroup 수정 -->
          <col width="80" />
          <col />
          <col width="80" />
          <col width="80" />
        </colgroup>
        <thead>
          <tr>
            <!-- 270727 조회수 추가 -->
            <th scope="col">번호</th>
            <th scope="col">제목</th>
            <th scope="col">날짜</th>
            <th scope="col">조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="board-list__order">
              <i class="ico ico-pin">고정 아이콘</i>
            </td>
            <td class="board-list__title">
              <div class="c-flex c-align-center">
                <a href="">
                  <span>[행사모집]</span>
                  <!-- 230613 타이틀 수정-->
                  <div>
                    <strong class="c-text-primary">서울시</strong>와 함께하는
                    청소년 신나는 동행캠프 모집 2탄<strong
                      class="c-text-primary"
                      >서울시</strong
                    >와 함께하는 청소년 신나는 동행캠프 모집 2탄<strong
                      class="c-text-primary"
                      >서울시</strong
                    >와 함께하는 청소년 신나는 동행캠프 모집 2탄<strong
                      class="c-text-primary"
                      >서울시</strong
                    >와 함께하는 청소년 신나는 동행캠프 모집 2탄<strong
                      class="c-text-primary"
                      >서울시</strong
                    >와 함께하는 청소년 신나는 동행캠프 모집 2탄<strong
                      class="c-text-primary"
                      >서울시</strong
                    >와 함께하는 청소년 신나는 동행캠프 모집 2탄<strong
                      class="c-text-primary"
                      >서울시</strong
                    >와 함께하는 청소년 신나는 동행캠프 모집 2탄<strong
                      class="c-text-primary"
                      >서울시</strong
                    >와 함께하는 청소년 신나는 동행캠프 모집 2탄<strong
                      class="c-text-primary"
                      >서울시</strong
                    >와 함께하는 청소년 신나는 동행캠프 모집 2탄<strong
                      class="c-text-primary"
                      >서울시</strong
                    >와 함께하는 청소년 신나는 동행캠프 모집 2탄<strong
                      class="c-text-primary"
                      >서울시</strong
                    >와 함께하는 청소년 신나는 동행캠프 모집 2탄<strong
                      class="c-text-primary"
                      >서울시</strong
                    >와 함께하는 청소년 신나는 동행캠프 모집 2탄<strong
                      class="c-text-primary"
                      >서울시</strong
                    >와 함께하는 청소년 신나는 동행캠프 모집 2탄<strong
                      class="c-text-primary"
                      >서울시</strong
                    >와 함께하는 청소년 신나는 동행캠프 모집 2탄<strong
                      class="c-text-primary"
                      >서울시</strong
                    >와 함께하는 청소년 신나는 동행캠프 모집 2탄<strong
                      class="c-text-primary"
                      >서울시</strong
                    >와 함께하는 청소년 신나는 동행캠프 모집 2탄<strong
                      class="c-text-primary"
                      >서울시</strong
                    >와 함께하는 청소년 신나는 동행캠프 모집 2탄
                  </div>
                  <!-- // 230613 타이틀 수정-->
                </a>
                <!-- 230727 다운로드 버튼 추가 -->
                <i class="ico ico-down">다운로드</i>
                <i class="ico ico-new">N</i>
              </div>
            </td>
            <td class="board-list__date">2022.12.31</td>
            <!-- 230727 조회수 추가 -->
            <td class="board-list__hit">1111</td>
          </tr>
          <tr>
            <td class="board-list__order">
              <i class="ico ico-pin">고정 아이콘</i>
            </td>
            <td class="board-list__title">
              <div class="c-flex c-align-center">
                <a href="">
                  <!-- 230613 타이틀 수정-->
                  <div>
                    <strong class="c-text-primary">서울시</strong>와 함께하는
                    청소년 신나는 동행캠프 모집
                    <strong class="c-text-primary">서울시</strong>와 함께하는
                    청소년 신나는 동행캠프 모집
                  </div>
                  <!-- // 230613 타이틀 수정-->
                </a>
                <i class="ico ico-new">N</i>
              </div>
            </td>
            <td class="board-list__date">2022.12.31</td>
            <td class="board-list__hit">1111</td>
          </tr>
          <tr>
            <td class="board-list__order">
              <i class="ico ico-pin">고정 아이콘</i>
            </td>
            <td class="board-list__title">
              <div class="c-flex c-align-center">
                <!-- 230613 타이틀 수정-->
                <a href="">
                  <span>[행사모집]</span>
                  <div>
                    <strong class="c-text-primary">서울시</strong>와 함께하는
                    청소년 신나는 동행캠프 모집
                  </div>
                  <!-- // 230613 타이틀 수정-->
                </a>
                <i class="ico ico-new">N</i>
              </div>
            </td>
            <td class="board-list__date">2022.12.31</td>
            <td class="board-list__hit">1111</td>
          </tr>
          <tr>
            <td class="board-list__order">999</td>
            <td class="board-list__title">
              <div class="c-flex c-align-center">
                <!-- 230613 타이틀 수정-->
                <a href="">
                  <div>6월 신규가입 이벤트 당첨자 발표</div>
                  <!-- // 230613 타이틀 수정-->
                </a>
              </div>
            </td>
            <td class="board-list__date">2022.12.31</td>
            <td class="board-list__hit">1111</td>
          </tr>
          <tr>
            <td class="board-list__order">999</td>
            <td class="board-list__title">
              <div class="c-flex c-align-center">
                <!-- 230613 타이틀 수정-->
                <a href="">
                  <div><span>└</span> 6월 신규가입 이벤트 당첨자 발표</div>
                  <!-- // 230613 타이틀 수정-->
                </a>
              </div>
            </td>
            <td class="board-list__date">2022.12.31</td>
            <td class="board-list__hit">1111</td>
          </tr>
        </tbody>
      </table>
      <PubPagination />
    </div>
  </div>
</template>
