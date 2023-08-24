<script setup>
import { useModalStore } from "@/store";

const modal = useModalStore();
const router = useRouter();

// props 선언
const p = defineProps({
  modelValue: { type: Array, default: [], },
  segment: { type: String, default: "apply", }, // 멘토교육유형 구분 (apply: 멘토교육(신청), ing: 수강중교육, compl: 수료한 교육)
  segmentsub: { type: String, default: "", }, // 멘토교육유형SUB 구분 (compl: 수료한강의, incompl: 미수료한강의)
});

const emit = defineEmits([
  "showVideo",
]);

const goDetail = (item) => {
  if (p.segment === 'apply') {
    router.push(`/mypage/edu/${p.segment}/${item.slcIdx}`);
  } else if (p.segment === 'ing') {
    // 플레이어 모달 호출
    emit("showVideo", item);
  } else if (p.segment === 'compl') {
    if (p.segmentsub === 'incompl') {
      modal.alert('알림', '기간이 만료되었습니다.');
      return;
    }
  }
};

</script>

<template>
  <div class="c-card--inline c-card--inline-col3">
    <a 
      v-for="item in p.modelValue"
      :style="{ cursor: (p.segment === 'compl' ? 'default' : 'pointer') }"
      class="c-card c-card--border"
      href="javascript:void(0)"
      @click="goDetail(item)"
    >
      <div class="c-card-img">
        <p><img :src="item.filePath || item.imageUrl" alt="멘토교육 이미지" />
          <div
            class="c-badge c-badge-primary">{{ item.requireYn === 'Y' ? "필수" : "선택" }}</div>
          <div class="c-badge c-badge-yellow">{{ item.courseType === 'ON' ? '온라인' : (item.courseType === 'OFF' ? '오프라인' : '') }}</div>
        </p>
      </div>
      <div class="c-card-body">
        <div class="c-card-title c-card-title--sm">
          <p><strong
              >{{ item.courseName }}</strong
            ></p
          >
        </div>
        <div class="c-card-subtitle">
          <dl>
            <dd v-if="!item.recruitEnd">제한없음</dd>
            <dd v-else>{{ `${uConvertDateTime(item.recruitStart, 'YYYY.MM.DD')} ~ ${uConvertDateTime(item.recruitEnd, 'YYYY.MM.DD')}` }}</dd>
          </dl>
        </div>
        <div v-if="p.segment === 'ing'" class="c-card-foot c-card-foot-progress">
          <!-- 230621 진도율 변경 -->
          [차후연동]<strong><span class="c-text-danger">12분</span> / 60분</strong>
          <!-- // 230621 진도율 변경 -->
          <div class="c-progress">
            <div class="c-progress-bar" :style="{ width: `${item.completePercent || '0'}%` }"></div>
          </div>
        </div>
        <div v-else-if="p.segment === 'compl'" class="c-card-foot c-card-foot-progress">
          <strong v-if="p.segmentsub === 'compl'">수강 완료</strong>
          <strong v-else class="c-text-danger">미수료</strong>
        </div>
        <div v-else class="c-card-foot">
          <strong v-if="item.courseStatus === 'Y'" class="c-text-danger">신청 완료</strong>
          <strong v-else>수강 전</strong>
        </div>
      </div>
    </a>
  </div>
</template>
