export default () => {
  const { $dayjs } = useNuxtApp();
  const { DATE_3U } = useAppConfig();

  /* 기본 파라메터 */
  const startDate = ref();
  const endDate = ref();
  const pageSize = ref(10);
  const pageNumber = ref(0);

  /* 외에 요소 각 페이지 정의 사용 */
  const data = reactive({});
  const error = ref(null);

  const monthSelected = ref("all");

  /* 최소 파라메터 가공 -> 이외 추가 사용 */
  const params = reactive({
    pageSize,
    pageNumber,
  });

  watch(monthSelected, (value) => {
    setMonthDate();
  });

  const setMonthDate = () => {
    const value = monthSelected.value;
    if (value !== "all" && !endDate.value) {
      endDate.value = $dayjs().format(DATE_3U);
    }

    const targetDate = $dayjs(endDate.value);
    switch (value) {
      case "all": {
        startDate.value = null;
        endDate.value = null;
        break;
      }
      case "month": {
        startDate.value = targetDate.clone().subtract(1, "month").toDate();
        break;
      }
      case "three-month": {
        startDate.value = targetDate.clone().subtract(3, "month").toDate();
        break;
      }
      case "six-month": {
        startDate.value = targetDate.clone().subtract(6, "month").toDate();
        break;
      }
      case "year": {
        startDate.value = targetDate.clone().subtract(12, "month").toDate();
        break;
      }
    }
  };

  setMonthDate(); // 초기값 세팅

  return {
    monthSelected,
    startDate,
    endDate,
    params,
    data,
    error,
    onUpdateDateParams: async (callback = () => {}) => {
      [startDate, endDate].forEach(({ value }, index) => {
        const _key = index === 0 ? "startDate" : "endDate";
        params[_key] = value ? $dayjs(value).format(DATE_3U) : '';
      });
      callback();
    },
    onUpdateMonthSelected: (value) => {
      monthSelected.value = value;
    }
  };
};
