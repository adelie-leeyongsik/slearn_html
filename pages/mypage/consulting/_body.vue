<script setup>
import { useUserCounselingStore } from "@/store";

const counseling = useUserCounselingStore();

const handleClickItem = (key) => {
  counseling.items[key].isActive =
    counseling.items[key].isActive === undefined
      ? true
      : !counseling.items[key].isActive;
};
</script>

<template>
  <div class="mypage-consulting__list">
    <template v-if="counseling.totalPage > 0">
      <dl v-for="key in counseling.keys">
        <dt @click="handleClickItem(key)">
          <div class="mypage-consulting__title" :class="{ active: false }">
            <div
              class="mypage-consulting__title-category"
              :class="{
                'c-text-danger': counseling.items[key].state === '승인 완료',
              }"
            >
              {{ counseling.items[key].state }}
            </div>
            <div class="mypage-consulting__title-text">
              <p>{{ counseling.items[key].title }}</p>
              <span>신청일 {{ counseling.items[key].applicationDate }}</span>
            </div>
            <div
              v-if="counseling.items[key].state === '승인 완료'"
              class="c-badge c-badge-blue"
            >
              상담중
            </div>
          </div>
        </dt>
        <dd v-if="counseling.items[key].isActive">
          <div class="mypage-consulting__contents">
            <div class="mypage-consulting__contents-box">
              <dl>
                <dt>상담 선생님</dt>
                <dd>{{ counseling.items[key].mentor }} 선생님</dd>
              </dl>
              <dl>
                <dt>상담 진행 회차</dt>
                <dd>
                  {{ counseling.items[key].currentSession }}회 완료 /
                  {{ counseling.items[key].maxSession }}회
                </dd>
              </dl>
              <dl>
                <dt>상담 자료</dt>
                <dd>
                  <a :href="counseling.items[key].attachment"
                    ><i class="ico ico-download">다운 이미지</i>
                    {{ counseling.items[key].attachmentName }}</a
                  >
                </dd>
              </dl>
            </div>
          </div>
        </dd>
      </dl>
      <PubPagination />
    </template>
    <div v-else class="c-notfound">
      <img
        src="@img/ch-table.svg"
        alt="참여한 이벤트가 없습니다. 다양한 이벤트에 참여해보세요!"
      />
      <p>
        아직 진로/진학 상담 내역이 없어요. <br />
        학습을 열심히, 성실히 하면 많은 상이 기다릴 거예요
      </p>
    </div>
  </div>
</template>
