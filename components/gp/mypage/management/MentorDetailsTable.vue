<script setup>
const emit = defineEmits(["reportHandler", "absentHandler"]);
const { details, index } = defineProps({
  details: {
    type: Array,
    default: () => [],
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const handleReportModalEvent = (detail) => {
  emit("reportHandler", {
    modalType: "templateReport",
    detail: {
      index,
      ...detail,
    },
  });
};

const handleAbsentEvent = (item) => {
  const cp = { ...item };

  Object.assign(cp, {
    actionRole: item.mentoringDtlCode === "ST03" ? "mentee" : "mentor",
    accessRole: "mentor",
    index,
  });

  emit("absentHandler", {
    modalType: "hooky",
    item: cp,
  });
};
</script>

<template>
  <div class="c-table__wrap">
    <table class="c-table c-table-center mypage__schedule-table">
      <caption>
        강의 일정 테이블로 회차, 강의계획, 상태를 알 수 있습니다.
      </caption>
      <colgroup>
        <col width="15%" />
        <col width="" />
        <col width="15%" />
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
        <tr v-for="(item, itemIndex) in details" :key="`${item}-${itemIndex}`">
          <td class="mypage__schedule-table-num">{{ item.ord }}회차</td>
          <td>
            <span>{{ item.mentoringDtm }}</span>
          </td>
          <template v-if="item.mentoringDtlCode === 'ST01'">
            <td class="mypage__schedule-table-status">
              <span>예정</span>
            </td>
            <td>
              <span>-</span>
            </td>
          </template>
          <template v-else-if="item.mentoringDtlCode === 'ST02'">
            <td class="mypage__schedule-table-status">
              <span>멘토결석</span>
            </td>
            <td>
              <button
                type="button"
                class="c-btn-text--line"
                @click.prevent="() => handleAbsentEvent(item)"
              >
                사유입력
              </button>
            </td>
          </template>
          <template v-else-if="item.mentoringDtlCode === 'ST03'">
            <td class="mypage__schedule-table-status">
              <span>멘티결석</span>
            </td>
            <td>
              <button
                type="button"
                class="c-btn-text--line"
                @click.prevent="() => handleAbsentEvent(item)"
              >
                결석신고
              </button>
            </td>
          </template>
          <template
            v-else-if="['ST04', 'ST05'].includes(item.mentoringDtlCode)"
          >
            <td class="mypage__schedule-table-status">
              <span>완료</span>
            </td>
            <td>
              <button
                type="button"
                class="c-btn-text--line"
                @click.prevent="() => handleReportModalEvent(item)"
              >
                보고서 작성
              </button>
            </td>
          </template>
          <template v-else-if="item.mentoringDtlCode === 'ST06'">
            <td class="mypage__schedule-table-status">
              <span>완료</span>
            </td>
            <td>
              <span>보고서 승인 대기</span>
            </td>
          </template>
          <template
            v-else-if="['ST07', 'ST08'].includes(item.mentoringDtlCode)"
          >
            <td class="mypage__schedule-table-status">
              <span class="c-text-danger">반려</span>
            </td>
            <td>
              <button
                type="button"
                class="c-btn-text--line"
                @click.prevent="() => handleReportModalEvent(item)"
              >
                보고서 작성
              </button>
            </td>
          </template>
          <template v-else-if="item.mentoringDtlCode === 'ST09'">
            <td class="mypage__schedule-table-status">
              <span>완료</span>
            </td>
            <td>
              <span>완료</span>
            </td>
          </template>
          <template v-else>
            <td class="mypage__schedule-table-status">
              <span>-</span>
            </td>
            <td>
              <span>-</span>
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>
