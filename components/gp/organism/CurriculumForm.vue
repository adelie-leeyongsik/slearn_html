<script setup>
import * as yup from "yup";
import { useModalStore } from "@/store";
import { call } from "@/api";

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const bodyParams = inject("bodyParams");
const isReadOnly = inject("isReadOnly");

const { previewParams, isDefaultInputs, smtrIdx } = defineProps({
  previewParams: {
    Type: Array,
    required: true,
    default: () => [],
  },
  isDefaultInputs: {
    Type: Boolean,
    reuqired: true,
    default: () => false,
  },
  smtrIdx: {
    Type: Number,
    required: true,
  },
});

const { $dayjs } = useNuxtApp();
const modal = useModalStore();
const router = useRouter();
const emit = defineEmits(["close"]);

const {
  MESSAGE,
  MENTORING: { MENTORING_LECTURE_FORM_SUBMIT },
} = useAppConfig();

const initialData = {
  details: previewParams.map(({ detailSeq, ...props }, index) => ({
    ...props,
    detailSeq: index + 1,
  })),
};

const errors = ref([]);

const { handleSubmit } = useForm({
  initialValues: initialData,
  validationSchema: yup.object({
    details: yup.array(
      yup.object({
        detailSeq: yup.number(),
        detailStartDate: yup.string().required(),
        detailStartTime: yup.string(),
        detailCurriculum: yup.string().required(),
      })
    ),
  }),
});

onMounted(() => {
  document.getElementsByName("curriculumForm_datePicker").forEach((item, idx) => {
    item.setAttribute("title", "멘토링 일시를 입력하세요")
  });
});

const handleSetCurriculumEvent = handleSubmit(
  async (resData) => {
    errors.value = [];
    const details = resData.details
      .slice()
      .map(({ detailStartDate, detailStartTime, ...props }) => {
        const inst = $dayjs(detailStartDate);

        return {
          ...props,
          detailStartDate: inst.clone().format("YYYYMMDDHHmmss"),
          detailStartTime: inst.clone().format("HH:mm"),
        };
      });

    const data = { ...bodyParams };
    Object.assign(data, {
      details,
      smtrIdx,
    });

    await call({
      id: "멘토링 관리 - 모달 강의 계획서 등록",
      endpoint: MENTORING_LECTURE_FORM_SUBMIT,
      method: "post",
      data,
      onResponse: ({ status, message }) => {
        // * 기획 정의 없음 화면 전환
        if (status !== 200) {
          modal.alert("알림", message);
          return;
        }
        modal.alert("알림", MESSAGE.SUCCESS, () => router.go());
      },
    });
  },
  ({ values }) => {
    errors.value = [].concat(
      values.details.map(({ detailSeq, detailCurriculum }) => {
        if (isEmpty(detailCurriculum)) {
          return detailSeq;
        }
      })
    );
  }
);

const { value: details } = useField("details");
</script>

<template>
  <form @submit="handleSetCurriculumEvent">
    <div class="c-modals__ojt" v-if="!isEmpty(details)">
      <div
        class="c-modals__ojt-item"
        v-for="(field, previewIdx) in details"
        :key="`${field}-${previewIdx}`"
      >
        <div
          class="c-modals__title c-modals__title-sm c-modals__title-line"
          v-if="isReadOnly === false"
        >
          {{ previewIdx + 1 }}회차
        </div>
        <div
          class="c-modals__title c-modals__title-sm c-modals__title-line"
          v-else
        >
          {{ field.ordLabel }}
        </div>
        <div class="c-form-group">
          <div class="c-form-label">멘토링 일시</div>
          <div
            class="c-input-group c-input-group--time c-input-group--calendar"
            :style="{ overflow: 'unset' }"
          >
            <div>
              <VueDatePicker
                name="curriculumForm_datePicker"
                v-model="field.detailStartDate"
                format="yyyy.MM.dd HH:mm"
                locale="ko"
                class="date"
                :enable-time-picker="true"
                time-picker-inline
                minutes-grid-increment="1"
                :auto-apply="true"
                :clearable="false"
                hide-input-icon
                placeholder="멘토링 일시"
                :disabled="isReadOnly"
              />
            </div>
          </div>
        </div>
        <div class="c-form-group">
          <label :for="`preview-${previewIdx}`" class="c-form-label"
            >커리큘럼</label
          >
          <textarea
            :class="{
              'c-form-control': true,
              'c-form-control-error': !isUndefined(errors[previewIdx]),
            }"
            v-model="field.detailCurriculum"
            @input="
              ({ target: { value } }) =>
                isEmpty(value)
                  ? (errors[previewIdx] = field.detailSeq)
                  : (errors[previewIdx] = undefined)
            "
            :id="`preview-${previewIdx}`"
            :disabled="isReadOnly"
          ></textarea>
        </div>
      </div>
    </div>
    <template v-if="isReadOnly === false">
      <div class="c-modals__button" v-if="isDefaultInputs === true">
        <div class="c-btn-group">
          <button
            type="button"
            class="c-btn c-btn-primary"
            @click.prevent="emit('close')"
          >
            취소
          </button>
          <button type="submit" class="c-btn c-btn-primary">등록</button>
        </div>
      </div>
    </template>
  </form>
</template>
