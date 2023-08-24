<script setup>
import eventItem from "./_eventItem.vue";
definePageMeta({
  layout: "mentoring",
});
</script>
<template>
  <div class="mentoring c-bg-light">
    <div class="mentoring-event">
      <!-- 230206 mypage-list__title 이동 -->
      <div class="mentoring-event__list-title">
        <div class="mentoring-event__list-title-category">
          <!-- pc, tablet -->
          <ul>
            <li class="active">
              <button type="button">응모한 이벤트</button>
            </li>
            <li><button type="button">당첨된 이벤트</button></li>
          </ul>
          <!-- pc, tablet -->

          <!-- mo -->
          <!-- 웹접근성 title 추가 -->
          <select class="c-mo" title="셀렉트박스">
            <option>응모한 이벤트</option>
            <option>당첨된 이벤트</option>
          </select>
          <!--// 웹접근성 title 추가 -->
          <!-- mo -->
        </div>
      </div>
      <!-- // 230206 mypage-list__title 이동 -->
      <eventItem />
      <PubPagination />
    </div>
  </div>
</template>
