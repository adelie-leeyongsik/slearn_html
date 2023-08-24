<template>
  <div class="mypage__contents-body">
    <div class="c-table__head">
      <p>총 {{ data?.totalRecords }}개</p>
    </div>
    <div class="c-table__wrap c-table__wrap-scroll">
      <table class="c-table c-table-center">
        <caption>
          멘토 공유방 리스트로 no, 내용, 작성자, 작성일, 첨부, 조회수 를 볼 수
          있습니다.
        </caption>
        <colgroup>
          <col width="80" />
          <col />
          <col width="80" />
          <col width="100" />
          <col width="60" />
          <col width="80" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">내용</th>
            <th scope="col">작성자</th>
            <th scope="col">작성일</th>
            <th scope="col">첨부</th>
            <th scope="col">조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in data.rows"
            :key="`board-${segment}-${index}`"
          >
            <td>
              <i class="ico ico-pin" v-if="item.topYn === 'Y'">고정 아이콘</i>
              <strong v-else>{{ item.rownum }}</strong>
            </td>
            <td class="c-table__title">
              <div>
                <nuxt-link :to="url + item.boardSeq" :text="item.title" />
                <i class="ico ico-new" v-show="item.newFlag">N</i>
              </div>
            </td>
            <td>{{ item.userId }}</td>
            <td>{{ item.regDtm }}</td>
            <td>
              <nuxt-link :to="url + item.boardSeq" v-if="item.fileExistFlag">
                <i class="ico ico-file">파일 이미지</i>
              </nuxt-link>
            </td>
            <td>{{ item.hitCnt }}</td>
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
