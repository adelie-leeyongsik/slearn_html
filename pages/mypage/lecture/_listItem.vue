<script setup>
import { useUserLectureStore } from "@/store";

const lecture = useUserLectureStore();

const p = defineProps({
  id: { default: null },
});

const d = reactive(lecture.items[p.id]);
</script>

<template>
  <tr>
    <td>{{ d.category }}</td>
    <td>{{ d.institution }}</td>
    <td class="c-table__title">
      <p>{{ d.title }}</p>
    </td>
    <td>{{ d.date }}</td>
    <td>
      <strong class="c-text-danger">{{ d.progress }}%</strong>
      <div class="c-progress">
        <span class="c-progress-bar" :style="{ width: `${d.progress}%` }" />
      </div>
    </td>
    <td>
      <strong>{{ d.state }}</strong>
    </td>
  </tr>
</template>
