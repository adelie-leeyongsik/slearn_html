<script setup>
import moment from "moment";
import { useModalStore } from "@/store";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const modal = useModalStore();
const emit = defineEmits(["changed"]);

const self = ref();

const d = reactive({
  monthFilter: -1,
  pickerStart: moment().add(-1, "months"),
  pickerEnd: moment(),
  dateFormat: "yyyy.MM.dd",
});

onMounted(() => {
  let stDt = document.getElementsByName("startDatePicker");
  let enDt = document.getElementsByName("endDatePicker");

  if (!isEmpty(stDt)) {
    stDt[0].title = "시작날짜";
  }

  if (!isEmpty(enDt)) {
    enDt[0].title = "종료날짜";
  }
});

const getDateForCompare = (date) => moment(date).format("YYYYMMDD");

const handleChangeMonthFilter = (value) => {
  d.monthFilter = value;
  d.pickerStart = moment(d.pickerEnd).add(d.monthFilter, "months").toDate();
  d.pickerEnd = moment(d.pickerEnd).toDate();
};

const handleClickSubmit = () => {
  const yearDate = moment(d.pickerEnd).subtract(1, "year").toDate();
  if (getDateForCompare(d.pickerStart) < getDateForCompare(yearDate)) {
    modal.alert("알림", "현재 기준으로 1년까지만 조회가 가능합니다.");

    d.pickerStart = yearDate;
    return;
  }

  if (getDateForCompare(d.pickerEnd) < getDateForCompare(d.pickerStart)) {
    modal.alert("알림", "종료일자가 시작일자보다 작을 수 없습니다.");

    d.pickerEnd = moment().toDate();
    return;
  }

  emit(
    "changed",
    moment(d.pickerStart).format("YYYYMMDD"),
    moment(d.pickerEnd).format("YYYYMMDD")
  );
};

const reset = () => {
  d.monthFilter = -1;
  handleChangeMonthFilter(d.monthFilter);
};
</script>

<template>
  <form @submit.prevent ref="self">
    <fieldset>
      <legend>
        <div class="c-form-label">
          기간별
          <button class="c-btn c-btn-sm c-btn-reset" @click="reset">
            <i class="ico ico-reset">초기화</i>
          </button>
        </div>
      </legend>
      <div class="c-form-group c-form-group--search">
        <Radio
          v-model="d.monthFilter"
          class="month-preset"
          type="month"
          :items="[
            { text: '1개월', value: -1 },
            { text: '3개월', value: -3 },
            { text: '6개월', value: -6 },
            { text: '1년', value: -12 },
          ]"
          @update:modelValue="handleChangeMonthFilter"
        />
        <div class="c-input-group c-input-group--calendar">
          <div>
            <VueDatePicker
              name="startDatePicker"
              v-model="d.pickerStart"
              :format="d.dateFormat"
              :maxDate="new Date()"
              locale="ko"
              class="date"
              :enable-time-picker="false"
              auto-apply
              :clearable="false"
              hide-input-icon
              placeholder=""
            />
          </div>
          <span>~</span>
          <div>
            <VueDatePicker
              name="endDatePicker"
              v-model="d.pickerEnd"
              :format="d.dateFormat"
              :maxDate="new Date()"
              locale="ko"
              class="date"
              :enable-time-picker="false"
              auto-apply
              :clearable="false"
              hide-input-icon
              placeholder=""
            />
          </div>
        </div>
        <button class="c-btn c-btn-blue" @click="handleClickSubmit">
          조회
        </button>
      </div>
    </fieldset>
  </form>
</template>
