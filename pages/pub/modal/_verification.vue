<script>
export default {
  props: {
    show: Boolean,
  },
};
</script>

<template>
  <Transition name="c-modals">
    <div class="c-modals" v-if="show">
      <div class="c-modals__bg" @click="$emit('close')"></div>
      <div class="c-modals__inner">
        <div class="c-modals__head">
          검증 결과
          <button
            class="c-modals__head-close"
            type="submit"
            @click="$emit('close')"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <div class="c-modals__title">
            김서울님은 서울런 자동 검증가입대상이 아닙니다.
          </div>
          <p>서류 검증 대상이라면 서류 준비 후 회원가입을 진행해주세요</p>
          <div class="c-table__wrap">
            <table class="c-table c-table-center">
              <caption>
                혜택 검증 결과로 상태, 항목, 결과 를 알수 있습니다.
              </caption>
              <thead>
                <tr>
                  <!-- 웹접근성 scope="col" 로 변경 -->
                  <th scope="col">상태</th>
                  <th scope="col">항목</th>
                  <th scope="col">결과</th>
                  <!-- //웹접근성 scope="col" 로 변경 -->
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowspan="3">필수</td>
                  <td class="c-text-left">서울시 거주</td>
                  <!-- 230710 확인됨 -> c-text-sky 클래스 / 확인안됨 c-text-danger 클래스로 수정 -->
                  <td><strong class="c-text-sky">확인됨</strong></td>
                </tr>
                <tr>
                  <td class="c-text-left">나이 (만6세 ~ 24세)</td>
                  <td>
                    <strong class="c-text-danger">확인불가</strong>
                  </td>
                </tr>
                <tr>
                  <td class="c-text-left">소득 50%</td>
                  <td><strong class="c-text-sky">확인됨</strong></td>
                </tr>
                <tr>
                  <td rowspan="2">1개 이상 적용</td>
                  <td class="c-text-left">유공자 자녀</td>
                  <td>
                    <strong class="c-text-danger">확인불가</strong>
                  </td>
                </tr>
                <tr>
                  <td class="c-text-left">법정 한부모</td>
                  <td><strong class="c-text-sky">확인됨</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="c-modals__button">
            <div class="c-btn-group">
              <button
                type="submit"
                class="c-btn c-btn-danger"
                @click="$emit('close')"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.c-table {
  margin-top: 3rem;
  thead {
    tr {
      border: 0;
      border-radius: 0.8rem;
      th {
        color: #535353;
        background-color: #f4f5f9;
      }
    }
  }
  tbody {
    color: $black;
    strong {
      color: #ccc;
    }
  }
}
</style>
