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
    return `${props.settleTotalSum || 0} 원`;
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
    <table class="mypage__table mypage__table--type02">
      <caption>
        교육비 정산 내역으로 교육 분류, 멘토링 날짜, 교육 형태, 교육 날짜, 출석
        인정, 교육비, 정산일 를 볼 수 있습니다.
      </caption>
      <colgroup>
        <col width="120" />
        <col width="120" />
        <col width="120" />
        <col width="160" />
        <col width="100" />
        <col width="160" />
        <col width="114" />
      </colgroup>
      <thead>
        <tr>
          <th scope="col">교육 분류</th>
          <th scope="col">교육명</th>
          <th scope="col">교육 형태</th>
          <th scope="col">교육 날짜</th>
          <th scope="col">출석 인정</th>
          <th scope="col">
            {{ props.mentorType === "HW" ? "교육비" : "봉사시간" }}
          </th>
          <th scope="col">정산일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in content" :key="`education-row-${index}`">
          <td>{{ item.cateCodeName }}</td>
          <td>{{ item.courseName }}</td>
          <td>{{ item.courseType }}</td>
          <td>{{ item.startDate }}</td>
          <td>{{ item.attandFlag }}</td>
          <td>{{ item.eduFee }}</td>
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
