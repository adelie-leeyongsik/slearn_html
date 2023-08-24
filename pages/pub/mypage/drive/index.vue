<script setup>
import SnbPc from "../_snbpc.vue";
import SnbTablet from "../_snbtablet.vue";
import Modal from "../_modal.vue";
definePageMeta({
  layout: "mypage",
});
</script>

<script>
export default {
  data() {
    return {
      checkActive01: "",
      checkActive02: "",
      checkActive03: "",
      checkActive04: "",

      showModal: false,
    };
  },
};
</script>
<template>
  <div class="mypage">
    <SnbTablet />
    <PubBreadCrumbs />
    <div class="mypage-drive">
      <div class="mypage__wrap">
        <SnbPc />
        <div class="mypage__contents">
          <div class="mypage__contents-head">
            <div class="c-text-title-lg">내 드라이브 관리</div>
            <div class="c-text-title-sub">
              <p>
                필요한 파일은 언제 어디서나 올리고 다운받으세요. <br />
                도움이 필요하실 땐 서울런 고객센터<br
                  class="c-mo"
                />(1533-0909)로 연락주세요!
              </p>
              <button
                class="c-btn c-btn-sm c-btn-danger"
                @click="showModal = true"
              >
                파일 업로드
              </button>
            </div>
          </div>
          <div class="mypage__contents-progress">
            <div class="mypage__contents-progress-head">
              <p>1GB 중 920MB 사용 중</p>
              <span>여유 104MB</span>
            </div>
            <div class="c-progress">
              <span class="c-progress-bar" style="width: 50%"></span>
            </div>
          </div>

          <div class="mypage__contents-body">
            <div class="c-table__head c-table__head--type02">
              <div class="c-form-group c-form-group--inline">
                <div class="c-form-check">
                  <input
                    type="checkbox"
                    class="c-form-check-input"
                    id="replySecret"
                  /><label for="replySecret" class="c-form-check-label"
                    >전체 선택</label
                  >
                </div>

                <div class="c-table__head-select">
                  <span class="c-text-danger">3</span>개 선택
                </div>

                <ul>
                  <li><button>삭제하기</button></li>
                  <li><button>내려받기</button></li>
                </ul>
              </div>
            </div>
            <div class="c-table__wrap c-table__wrap-scroll">
              <table class="c-table c-table-center">
                <caption>
                  내 드라이브 목록으로 파일이름, 크기, 첨부일자 를 볼 수
                  있습니다.
                </caption>
                <colgroup>
                  <col width="52" />
                  <col />
                  <col width="100" />
                  <col width="140" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">파일 이름</th>
                    <th scope="col">크기</th>
                    <th scope="col">첨부 일자</th>
                  </tr>
                </thead>
                <tbody>
                  <tr :class="{ active: checkActive01 === true }">
                    <td>
                      <div class="c-form-check c-form-check--type04">
                        <input
                          class="c-form-check-input"
                          type="checkbox"
                          name="check01"
                          id="check01"
                          v-model="checkActive01"
                        /><label
                          class="c-form-check-label"
                          for="check01"
                        ></label>
                      </div>
                    </td>
                    <td class="c-table__title">
                      <p>
                        <a href="">
                          <i class="ico ico-vod">vod 이미지</i>
                          멘토링_1주차_숙제.mp4
                        </a>
                      </p>
                    </td>
                    <td>100 KB</td>
                    <td>2023.01.05</td>
                  </tr>
                  <tr :class="{ active: checkActive02 === true }">
                    <td>
                      <div class="c-form-check c-form-check--type04">
                        <input
                          class="c-form-check-input"
                          type="checkbox"
                          name="check02"
                          id="check02"
                          v-model="checkActive02"
                        /><label
                          class="c-form-check-label"
                          for="check02"
                        ></label>
                      </div>
                    </td>
                    <td class="c-table__title">
                      <p>
                        <a href="">
                          <i class="ico ico-doc">doc 이미지</i>
                          멘토링_1주차_숙제.mp4
                        </a>
                      </p>
                    </td>
                    <td>100 KB</td>
                    <td>2023.01.05</td>
                  </tr>
                  <tr :class="{ active: checkActive03 === true }">
                    <td>
                      <div class="c-form-check c-form-check--type04">
                        <input
                          class="c-form-check-input"
                          type="checkbox"
                          name="check03"
                          id="check03"
                          v-model="checkActive03"
                        /><label
                          class="c-form-check-label"
                          for="check03"
                        ></label>
                      </div>
                    </td>
                    <td class="c-table__title">
                      <p>
                        <a href="">
                          <i class="ico ico-pic">pic 이미지</i>
                          멘토링_1주차_숙제.mp4
                        </a>
                      </p>
                    </td>
                    <td>100 KB</td>
                    <td>2023.01.05</td>
                  </tr>
                  <tr :class="{ active: checkActive04 === true }">
                    <td>
                      <div class="c-form-check c-form-check--type04">
                        <input
                          class="c-form-check-input"
                          type="checkbox"
                          name="check04"
                          id="check04"
                          v-model="checkActive04"
                        /><label
                          class="c-form-check-label"
                          for="check04"
                        ></label>
                      </div>
                    </td>
                    <td class="c-table__title">
                      <p>
                        <a href="">
                          <i class="ico ico-zip">zip 이미지</i>
                          멘토링_1주차_숙제.mp4
                        </a>
                      </p>
                    </td>
                    <td>100 KB</td>
                    <td>2023.01.05</td>
                  </tr>
                  <tr :class="{ active: checkActive01 === true }">
                    <td>
                      <div class="c-form-check c-form-check--type04">
                        <input
                          class="c-form-check-input"
                          type="checkbox"
                          name="check01"
                          id="check01"
                          v-model="checkActive01"
                        /><label
                          class="c-form-check-label"
                          for="check01"
                        ></label>
                      </div>
                    </td>
                    <td class="c-table__title">
                      <p>
                        <a href="">
                          <i class="ico ico-etc"></i>
                          멘토링_1주차_숙제.mp4
                        </a>
                      </p>
                    </td>
                    <td>100 KB</td>
                    <td>2023.01.05</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Modal :show="showModal" @close="showModal = false" />
</template>

<style lang="scss" scoped>
.c-table__head {
  margin-top: 4rem;
}
.c-form-check--type04 label {
  margin: 0 auto;
}
</style>
