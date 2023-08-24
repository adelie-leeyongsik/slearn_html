<script>
export default {
  data() {
    return {
      myReply: false,
      myReplyMore: false,
    };
  },

  methods: {
    resize() {
      // this.$refs.textArea.style.height = "1px";
      // this.$refs.textArea.style.height =
      //   this.$refs.textArea.scrollHeight + 2 + "px";
      let element = this.$refs["textarea"];
      element.style.height = "18px";
      element.style.height = element.scrollHeight + 2 + "px";
    },
    textareaFocus(target) {
      setTimeout(() => {
        var end = document.getElementById(target).value.length;
        document.getElementById(target).focus();
        document.getElementById(target).setSelectionRange(end, end);
      }, 100);
    },
  },
};
</script>
<template>
  <div class="c-reply-group">
    <form action="">
      <fieldset>
        <div class="c-form-group">
          <legend>
            <div class="c-reply__title">
              <div class="c-form-label c-form-label--lg">
                댓글<span>3</span>
              </div>
              <div class="c-form-check">
                <input
                  type="checkbox"
                  class="c-form-check-input"
                  id="replySecret"
                />
                <label for="replySecret" class="c-form-check-label"
                  >비밀글</label
                >
              </div>
            </div>
          </legend>
          <!-- 웹접근성 title 추가 -->
          <textarea
            class="c-form-control"
            placeholder="댓글을 남겨 볼까요? (최대 300글자)"
            title="댓글 텍스트 박스"
          ></textarea>
          <div class="c-form-label">URL 첨부 (최대3개)</div>
          <textarea
            class="c-form-control c-form-control-sm"
            placeholder="URL은 최대 3개까지 입력할 수 있습니다."
            title="첫번쨰 UR"
          ></textarea>
          <textarea
            class="c-form-control c-form-control-sm"
            placeholder="두번쨰 URL"
            title="두번쨰 UR"
          ></textarea>
          <textarea
            class="c-form-control c-form-control-sm"
            placeholder="세번쨰 URL"
            title="세번쨰 UR"
          ></textarea>
          <!--// 웹접근성 title 추가 -->
          <label class="c-form-label" for="file">파일첨부</label>
          <div class="c-input-group">
            <input
              id="file"
              class="c-form-control"
              type="text"
              placeholder="파일을 첨부해주세요."
            />
            <button class="c-btn c-btn-sm c-btn-blue">파일 찾기</button>
          </div>
          <div class="c-form-file">
            <a href="">김철수_첨부파일 01.pdf</a>
            <button>
              <i class="ico ico-delete">삭제</i>
            </button>
          </div>
          <div class="c-btn-group c-btn-group-right">
            <button class="c-btn c-btn-danger">
              <strong>등록하기</strong>
            </button>
          </div>
        </div>
      </fieldset>
    </form>
    <div class="c-reply">
      <ul>
        <li>
          <div class="c-reply__img">
            <img src="@img/@temp/2.jpg" alt="" />
            <div class="c-badge c-badge-danger">나</div>
          </div>
          <div class="c-reply__text" v-if="myReply === true">
            <div class="c-reply__text-head">
              <strong>고양이칭구칭구</strong> <span>2022.01.01</span>
            </div>
            <!-- <textarea
              class="c-form-control c-form-control-sm"
              @input="resize()"
              ref="textarea"
            >
이벤트에 참여하고싶어요~이벤트에 참여하고싶어요~이벤트에 참여하고싶어요~이벤트에 참여하고싶어요~이벤트에 참여하고싶어요~이벤트에 참여하고싶어요~이벤트에 참여하고싶어요~</textarea
            > -->
            <textarea
              class="c-form-control c-form-control-sm"
              ref="textarea"
              id="textarea01"
              name="textarea"
              @input="resize"
              @focus="resize()"
            >
이벤트에 참여하고싶어요~이벤트에이벤트에 참여하고싶어요~이벤트에이벤트에 참여하고싶어요~이벤트에이벤트에 참여하고싶어요~이벤트에 참 이벤트에 참여하고싶어요~이벤트에이벤트에 참여하고싶어요~이벤트에이벤트에 참여하고싶어요~이벤트에이벤트에 참여하고싶어요~이벤트에 참 이벤트에 참여하고싶어요~이벤트에이벤트에 참여하고싶어요~이벤트에이벤트에 참여하고싶어요~이벤트에이벤트에 참여하고싶어요~이벤트에 참 이벤트에 참여하고싶어요~이벤트에이벤트에 참여하고싶어요~이벤트에이벤트에 참여하고싶어요~이벤트에이벤트에 참여하고싶어요~이벤트에 참</textarea
            >
            <!-- 230724 웹접근성 textarea에 title 추가 -->
            <textarea
              class="c-form-control c-form-control-sm"
              placeholder="URL은 최대 3개까지 입력할 수 있습니다."
              title="첫번째 URL 입력창"
            ></textarea>
            <textarea
              class="c-form-control c-form-control-sm"
              placeholder="두번째 URL"
              title="두번쨰 URL 입력창"
            ></textarea>
            <textarea
              class="c-form-control c-form-control-sm"
              placeholder="세번쨰 URL"
              title="세번째 URL 입력창"
            ></textarea>
            <div class="c-btn-group c-btn-group-right">
              <button
                class="c-btn c-btn-sm c-btn-blue"
                @click="myReply = false"
              >
                취소하기
              </button>
              <button class="c-btn c-btn-sm c-btn-danger" v-bind:click="resize">
                수정하기
              </button>
            </div>
          </div>
          <div class="c-reply__text" v-if="myReply === false">
            <div class="c-reply__text-head">
              <strong>고양이칭구칭구</strong> <span>2022.01.01</span>
              <!-- 웹접근성 div -> a 태그로 변경 -->
              <a
                href="javascript:void(0)"
                class="c-reply__text-head-more"
                @click="myReplyMore = !myReplyMore"
              >
                <ul class="c-reply__text-edit" v-if="myReplyMore === true">
                  <li>
                    <button
                      class="c-btn c-btn-text"
                      @click="
                        myReply = true;
                        textareaFocus('textarea01');
                      "
                    >
                      수정하기
                    </button>
                  </li>
                  <li>
                    <button class="c-btn c-btn-text">삭제하기</button>
                  </li>
                </ul>
              </a>
            </div>
            <p>
              이벤트에 참여하고싶어요~이벤트에 참여하고싶어요~이벤트에
              참여하고싶어요~이벤트에 참여하고싶어요~이벤트에
              참여하고싶어요~이벤트에 참여하고싶어요~이벤트에
              참여하고싶어요~이벤트에 참여하고싶어요~이벤트에 참여하고싶어요~
            </p>
            <div class="c-reply__text-list">
              <ul>
                <li>
                  <div class="c-badge c-badge-lg c-badge-light">
                    <p>
                      https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8https://youtu.be/IuM_Va6DQL8
                    </p>
                  </div>
                </li>
                <li>
                  <div class="c-badge c-badge-lg c-badge-light">
                    <p>https://youtu.be/IuM_Va6DQL8</p>
                  </div>
                </li>
                <li>
                  <div class="c-badge c-badge-lg c-badge-light">
                    <p>https://youtu.be/IuM_Va6DQL8</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="c-reply__img">
            <img src="@img/@temp/2.jpg" alt="" />
            <div class="c-badge c-badge-danger">나</div>
          </div>
          <div class="c-reply__text" v-if="myReply === true">
            <div class="c-reply__text-head">
              <strong>고양이칭구칭구</strong> <span>2022.01.01</span>
            </div>
            <textarea class="c-form-control c-form-control-sm"></textarea>
            <div class="c-input-group">
              <input
                id="file"
                class="c-form-control"
                type="text"
                placeholder="파일을 첨부해주세요."
              />
              <button class="c-btn c-btn-sm c-btn-blue">파일 찾기</button>
            </div>
            <div class="c-form-file">
              <a href="">김철수_첨부파일 01.pdf</a>
              <button>
                <i class="ico ico-delete">삭제</i>
              </button>
            </div>
            <div class="c-btn-group c-btn-group-right">
              <button
                class="c-btn c-btn-sm c-btn-blue"
                @click="myReply = false"
              >
                취소하기
              </button>
              <button class="c-btn c-btn-sm c-btn-danger">수정하기</button>
            </div>
          </div>
          <div class="c-reply__text" v-if="myReply === false">
            <div class="c-reply__text-head">
              <strong>고양이칭구칭구</strong> <span>2022.01.01</span>
              <a
                href="javascript:void(0)"
                class="c-reply__text-head-more"
                @click="myReplyMore = !myReplyMore"
              >
                <ul class="c-reply__text-edit" v-if="myReplyMore === true">
                  <li>
                    <button
                      class="c-btn c-btn-text"
                      @click="
                        myReply = true;
                        textareaFocus('textarea01');
                      "
                    >
                      수정하기
                    </button>
                  </li>
                  <li>
                    <button class="c-btn c-btn-text">삭제하기</button>
                  </li>
                </ul>
              </a>
            </div>
            <p>
              이벤트에 참여하고싶어요~이벤트에 참여하고싶어요~이벤트에
              참여하고싶어요~이벤트에 참여하고싶어요~이벤트에
              참여하고싶어요~이벤트에 참여하고싶어요~이벤트에
              참여하고싶어요~이벤트에 참여하고싶어요~이벤트에 참여하고싶어요~
            </p>
            <ul class="c-reply__text-list">
              <li>
                <div class="c-badge c-badge-lg c-badge-light">
                  <p>대학합격증.png</p>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div class="c-reply__img">
            <img src="@img/ic-reply-noimg.svg" alt="" />
          </div>
          <div class="c-reply__text">
            <div class="c-reply__text-head">
              <strong>고민하는사람</strong> <span>2022.01.01</span>
            </div>
            <p>
              이벤트에 참여하고싶어요~이벤트에 참여하고싶어요~이벤트에
              참여하고싶어요~이벤트에 참여하고싶어요~이벤트에
              참여하고싶어요~이벤트에 참여하고싶어요~이벤트에
              참여하고싶어요~이벤트에 참여하고싶어요~이벤트에 참여하고싶어요~
            </p>
          </div>
        </li>
        <li>
          <div class="c-reply__img">
            <img src="@img/@temp/1.jpg" alt="" />
          </div>
          <div class="c-reply__text">
            <div class="c-reply__text-head">
              <strong>고양이칭구칭구</strong> <span>2022.01.01</span>
            </div>
            <p>
              이벤트에 참여하고싶어요~이벤트에 참여하고싶어요~이벤트에
              참여하고싶어요~이벤트에 참여하고싶어요~이벤트에
              참여하고싶어요~이벤트에 참여하고싶어요~이벤트에
              참여하고싶어요~이벤트에 참여하고싶어요~이벤트에 참여하고싶어요~
            </p>
          </div>
        </li>
        <li>
          <div class="c-reply__img">
            <img src="@img/ic-reply-noimg.svg" alt="" />
            <div class="c-badge c-badge-danger">나</div>
          </div>
          <div class="c-reply__text" v-if="myReply === false">
            <div class="c-reply__text-head">
              <strong>그렇게됐습니다</strong> <span>2022.01.01</span>
              <a
                href="javascript:void(0)"
                class="c-reply__text-head-more"
                @click="myReplyMore = !myReplyMore"
              >
                <ul class="c-reply__text-edit" v-if="myReplyMore === true">
                  <li>
                    <button
                      class="c-btn c-btn-text"
                      @click="
                        myReply = true;
                        textareaFocus('textarea01');
                      "
                    >
                      수정하기
                    </button>
                  </li>
                  <li>
                    <button class="c-btn c-btn-text">삭제하기</button>
                  </li>
                </ul>
              </a>
            </div>
            <p>
              <img src="@img/ic-lock.svg" alt="비밀글 이미지" />
              비밀글이에요~
            </p>
          </div>
          <div class="c-reply__text" v-if="myReply === true">
            <div class="c-reply__text-head">
              <strong>그렇게됐습니다</strong> <span>2022.01.01</span>
              <div class="c-form-check">
                <input
                  type="checkbox"
                  class="c-form-check-input"
                  id="replySecret2"
                />
                <label for="replySecret2" class="c-form-check-label"
                  >비밀글</label
                >
              </div>
            </div>
            <textarea class="c-form-control c-form-control-sm"></textarea>
            <div class="c-input-group">
              <input
                id="file"
                class="c-form-control"
                type="text"
                placeholder="파일을 첨부해주세요."
              />
              <button class="c-btn c-btn-sm c-btn-blue">파일 찾기</button>
            </div>
            <div class="c-form-file">
              <a href="">김철수_첨부파일 01.pdf</a>
              <button>
                <i class="ico ico-delete">삭제</i>
              </button>
            </div>
            <div class="c-btn-group c-btn-group-right">
              <button
                class="c-btn c-btn-sm c-btn-blue"
                @click="myReply = false"
              >
                취소하기
              </button>
              <button class="c-btn c-btn-sm c-btn-danger">수정하기</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-reply {
  .c-btn-group {
    gap: 1.2rem;
  }
  .c-badge {
    font-weight: 400;
  }
}
</style>
