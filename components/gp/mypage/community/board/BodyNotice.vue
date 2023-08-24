<template>
  <div class="mypage__contents-body">
    <div class="c-table__head">
      <p>총 {{ data?.totalRecords }}개</p>
    </div>
    <div class="c-table__wrap c-table__wrap-scroll">
      <table class="c-table c-table-center">
        <caption>
          멘토 공지사항으로 No, 내용, 첨부파일, 작성일을 볼 수 있습니다.
        </caption>
        <colgroup>
          <col width="80" />
          <col />
          <col width="60" />
          <col width="100" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">내용</th>
            <th scope="col">첨부</th>
            <th scope="col">작성일</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in data.rows"
            :key="`board-${segment}-${index}`"
          >
            <td>
              <i class="ico ico-pin" v-if="item.topFlag === 'Y'">고정 아이콘</i>
              <strong v-else>{{ item.rownum }}</strong>
            </td>
            <td class="c-table__title">
              <div>
                <nuxt-link :to="url + item.boardSeq" :text="item.title" />
                <i class="ico ico-new" v-show="item.newFlag">N</i>
              </div>
            </td>
            <td>
              <nuxt-link :to="url + item.boardSeq" v-if="item.fileExistFlag">
                <i class="ico ico-file" />
              </nuxt-link>
            </td>
            <td>{{ item.regDtm }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <Pagination
      v-bind="{ ...data }"
      @changedPageIndex="handlePagerClickEvent"
    />
  </div>
</template>

<script setup>
const {
  params: { segment },
} = useRoute();

const { data } = defineProps({
  data: {
    Type: Object,
    required: true,
  },
});

const params = inject("params");
const onPageAction = inject("onPageAction");

const url = ref(`/mypage/community/board/detail/${segment}/`);

const handlePagerClickEvent = (index) => onPageAction(index);
</script>
