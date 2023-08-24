<script>
definePageMeta({
  layout: "account",
});
</script>
<template>
  <div class="account">
    <h1>회원가입</h1>
    <form action="" class="needs-validation" novalidate>
      <fieldset>
        <div class="account__body">
          <legend>
            <h2 class="account__title">
              서울런 회원 대상을 확인 하기 위하여 <br />
              온라인 자격 확인 서비스를 통해<br />
              실시간 검증을 진행하고 있습니다.
            </h2>
          </legend>
          <p class="account-qualification__text">
            검증 결과에 따라 회원 가입이 제한될 수 있습니다.
          </p>
          <div class="account__info">
            <div class="account__info-title c-text-danger">
              ※ 회원 가입 대상
            </div>
            <div class="account__info-title">
              1. 서울시에 거주하는 6세 ~ 24세의 회원이 가입 가능합니다.
            </div>
            <div class="account__info-title">
              2. 소득기준대상, 학교밖, 다문화가족, 법정한부모청소년,
              북한이탈주민 청소년, 다자녀가족, 유공자의 청소년이 가입
              대상입니다.
              <!-- 230615 기타유공자 -> 유공자 텍스트 변경 -->
            </div>
            <div class="c-table__wrap">
              <table class="c-table c-table-center">
                <caption>
                  회원가입 대상으로 구분, 대상자 를 알 수 있습니다.
                </caption>
                <colgroup>
                  <col width="150" />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="row">구분</th>
                    <th scope="row">대상자</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>자동 검증 대상자</td>
                    <td class="c-text-left">
                      서울시 거주자, 나이(6~24세)의 소득기준
                      (수급자)청소년,소득기준(차상위) 청소년,
                      소득기준(법정한부모) 청소년, 유공자 청소년
                    </td>
                  </tr>
                  <tr>
                    <td>
                      자동 검증 불가 대상자<br />
                      (자료제출 첨부)
                    </td>
                    <td class="c-text-left">
                      학교밖 청소년, 다문화 가족 청소년, 소득기준(85%) 청소년,
                      다자녀 가족 청소년, 북한이탈주민 청소년, 유공자 청소년<br /><br />
                      <!-- 230629  텍스트 변경 -->
                      <span class="c-text-danger c-text-12"
                        >※ 주민등록번호가 없는 다문화 가족 외국인 청소년은
                        상담센터로 문의 (☏1533-0909)</span
                      >
                      <!-- 230629  텍스트 변경 -->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="c-form-group">
            <label for="name" class="c-form-label">이름</label>
            <input
              id="name"
              class="c-form-control"
              type="text"
              placeholder="이름을 입력하세요."
              required
            />
          </div>
          <div class="c-form-group">
            <label class="c-form-label">주민번호</label>
            <div class="c-input-group">
              <!-- 웹접근성 title 추가 -->
              <input
                id="rrn"
                class="c-form-control"
                type="text"
                placeholder="주민번호 앞 6자리"
                maxlength="6"
                title="주민번호 앞 6자리"
                required
              />
              <!-- //웹접근성 title 추가 -->
              -
              <!-- 웹접근성 title 추가 -->
              <input
                id="rrn02"
                class="c-form-control"
                type="password"
                placeholder="주민번호 뒤 7자리"
                maxlength="7"
                title="주민번호 뒤 7자리"
                required
              />
              <!-- //웹접근성 title 추가 -->
            </div>
          </div>
        </div>
        <div class="account__foot">
          <div class="c-btn-group">
            <button type="submit" class="c-btn c-btn-lg c-btn-priamry">
              <strong>자격조회</strong>
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.account-qualification__text {
  margin-top: -2.6rem;
  font-size: 1.4rem;
  color: #535353;
}
// 230615 css 추가
.account__info .c-table__wrap td.c-text-left {
  padding-right: 1.2rem;
  font-size: 1.3rem;
}
// 230615 css 추가
</style>
