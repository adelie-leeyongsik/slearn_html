<script setup>
const { $dayjs } = useNuxtApp();
const { DATE_3U } = useAppConfig();
const emit = defineEmits(["changeTableHandler"]);

const props = defineProps({
  content: {
    Type: Array,
    default: () => [],
  },
  mentorType: {
    Type: String,
    required: true,
  },
  pageable: {
    Type: Object,
    required: true,
  },
  totalElements: {
    Type: Number,
    required: true,
  },
  totalPages: {
    Type: Number,
    required: true,
  },
  date: {
    TYpe: Object,
    required: true,
  },
  settleTotalSum: {
    Type: Number,
    required: true,
  },
});

const pagerble = computed(() => {
  const { pageNumber } = props.pageable;
  return {
    pageNumber,
    totalPages: props.totalPages,
    totalRecords: props.totalElements,
  };
});

const totalMessageLine = computed(() => {
  const { year, month } = props.date;
  const date = $dayjs()
    .set("year", year)
    .set("month", month - 1);
  const startDate = date.startOf("M");
  const endDate = date.endOf("M");
  return `정산 ${
    props.mentorType === "HW" ? "시간" : "총"
  } 합계 (${startDate.format(DATE_3U)} ~ ${endDate.format(DATE_3U)})`;
});

const timeMessageLine = computed(() => {
  if (props.mentorType === "HW") {
    return `${uNumberWithComma(props.settleTotalSum || 0)} 원`;
  }
  return `${props.settleTotalSum || 0} 시간`;
});
</script>

<template>
  <div class="mypage-calculate__title">
    <span>{{ totalMessageLine }}</span>
    <p>{{ timeMessageLine }}</p>
  </div>
  <div class="mypage__table-wrap scroll">
    <table
      class="mypage__table mypage__table--type02"
      v-if="mentorType === 'VL'"
    >
      <caption>
        활동 내역으로 멘토링 날짜, 보고서 제출일, 봉사시간, 정산일 (예정일) 을
        볼 수 있습니다.
      </caption>
      <colgroup>
        <col width="224" />
      </colgroup>
      <thead>
        <tr>
          <th scope="col">멘토링 날짜</th>
          <th scope="col">보고서 제출일</th>
          <th scope="col">봉사시간</th>
          <th scope="col">정산일 (예정일)</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in props.content"
          :key="`activity-row-${index}`"
        >
          <td>{{ item.mentoringDtm }}</td>
          <td>{{ item.submitDtm }}</td>
          <td>{{ item.volunteer }}</td>
          <td>{{ item.settleDate }}</td>
        </tr>
      </tbody>
    </table>
    <table class="mypage__table mypage__table--type02" v-else>
      <caption>
        활동비 정산 내역으로, 멘티명(회차), 멘토링 날짜, 보고서 제출일,
        활동비(기본시급), 준비수당(시급 30%), 장기활동, 가산금, 특별수당,
        정산일(예정일)을 알 수 있습니다.
      </caption>
      <colgroup>
        <col width="150" />
        <col width="120" />
        <col width="150" />
        <col width="140" />
        <col width="100" />
        <col width="140" />
        <col width="94" />
      </colgroup>
      <thead>
        <tr>
          <th scope="col">멘티명(회차)</th>
          <th scope="col" class="mypage__table-2row">
            <p><span>멘토링 날짜</span></p>
            <p><span>보고서 제출일</span></p>
          </th>
          <th scope="col">활동비<br />(기본시급)</th>
          <th scope="col">준비수당<br />(시급 30%)</th>
          <th scope="col">장기활동 가산금</th>
          <th scope="col">특별수당</th>
          <th scope="col">정산일<br />(예정일)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in content">
          <td>{{ item.menteeName }} ({{ item.ord }}회차)</td>
          <td class="mypage__table-2row">
            <p>
              <span>{{ item.mentoringDtm }}</span>
            </p>
            <p>
              <span>{{ item.submitDtm }}</span>
            </p>
          </td>
          <td>{{ item.basic }}</td>
          <td>{{ item.preparation }}</td>
          <td>{{ item.longTerm }}</td>
          <td>{{ item.extraCharge }}</td>
          <td>{{ item.settleDate }}</td>
        </tr>
      </tbody>
    </table>
    <Pagination
      v-bind="{ ...pagerble }"
      @changedPageIndex="(i) => $emit('changeTableHandler', i)"
    />
  </div>
</template>
