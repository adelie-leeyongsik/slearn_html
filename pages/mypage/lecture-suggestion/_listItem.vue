<script setup>
import { useUserLectureSuggestionStore } from "@/store";

const ls = useUserLectureSuggestionStore();

const p = defineProps({
  id: { default: null },
});

const d = reactive(ls.items[p.id]);
</script>
<template>
  <tr>
    <td>{{ d.type }}</td>
    <td>{{ d.category }}</td>
    <td>{{ d.subCategory }}</td>
    <td class="c-table__title">
      <p>
        <router-link to="#">{{ d.title }}</router-link>
      </p>
      <div class="c-badge c-badge-lg c-badge-light">
        <p>
          https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8
        </p>
      </div>
    </td>
    <td>{{ d.date }}</td>
    <td>
      <strong
        :class="{
          'c-text-danger': d.state === '반려' || d.state === '승인 완료',
        }"
        >{{ d.state }}</strong
      >
    </td>
  </tr>
</template>

<style lang="scss" scoped>
.c-table__title .c-badge {
  margin-top: 0.7rem;
  p {
    font-size: 1.4rem;
    color: #535353;
  }
}
</style>
