<script setup>
import joinNav from "../_nav.vue";
definePageMeta({
  layout: "account",
});
</script>

<script>
export default {
  data() {
    return {
      memberType: "memberType1",
      school: "elementarySchool",
      showModal: false,
      showAlert: false,
      filetype: true,
    };
  },
};
</script>

<template>
  <div class="account">
    <h1>회원가입</h1>
    <joinNav :active="1" />
    <div class="account__body">
      <h2 class="account__title">
        해당되는 유형을 선택하시고 별도 증빙자료 제출 <br />
        및 승인 절차를 통해 회원가입이 진행됩니다.
      </h2>
      <div class="c-form-group">
        <div class="c-form-check-group">
          <div class="c-form-check">
            <input
              class="c-btn-check"
              type="radio"
              name="memberType"
              id="memberType1"
              value="memberType1"
              v-model="memberType"
              checked
            />
            <label
              class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
              for="memberType1"
              >다문화 가족 청소년</label
            >
          </div>
          <div class="c-form-check">
            <input
              class="c-btn-check"
              type="radio"
              name="memberType"
              id="memberType2"
              value="memberType2"
              v-model="memberType"
            />
            <label
              class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
              for="memberType2"
              >북한 이탈 청소년</label
            >
          </div>
          <div class="c-form-check">
            <input
              class="c-btn-check"
              type="radio"
              name="memberType"
              id="memberType3"
              value="memberType3"
              v-model="memberType"
            />
            <label
              class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
              for="memberType3"
              >학교 밖 청소년</label
            >
          </div>
          <div class="c-form-check">
            <input
              class="c-btn-check"
              type="radio"
              name="memberType"
              id="memberType4"
              value="memberType4"
              v-model="memberType"
            />
            <label
              class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
              for="memberType4"
              >소득기준(85%) 이하 청소년</label
            >
          </div>
          <div class="c-form-check">
            <input
              class="c-btn-check"
              type="radio"
              name="memberType"
              id="memberType5"
              value="memberType5"
              v-model="memberType"
            />
            <label
              class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
              for="memberType5"
              >유공자 청소년</label
            >
            <!-- 230615 기타유공자 -> 유공자 로 변경 -->
          </div>
          <div class="c-form-check">
            <input
              class="c-btn-check"
              type="radio"
              name="memberType"
              id="memberType6"
              value="memberType6"
              v-model="memberType"
            />
            <label
              class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary column"
              for="memberType6"
              >다자녀 청소년<span
                >(세자녀 이상 둘째 자녀부터 자격대상)</span
              ></label
            >
          </div>
        </div>
      </div>

      <section v-if="memberType === 'memberType1'">
        <div class="account__info">
          <dl>
            <dt>※ 가족관계 증명서 또는 기관장 확인서</dt>
            <dd>
              <ul>
                <li>
                  <h6>1. 가족관계 증명서(상세)</h6>
                  정부24에서 발급 가능
                  <ol>
                    <li>
                      <strong
                        >1-1) 증명서에 외국인 부모가 귀화하여 확인 불가한
                        경우</strong
                      >
                      - 귀화한 부모의 기본증명서(상세)
                      <!-- 230630 텍스트 컬러 수정 -->
                      <span class="c-text-danger">추가제출</span>
                      <!--// 230630 텍스트 컬러 수정 -->
                    </li>
                    <li>
                      <strong
                        >1-2) 기본증명서에도 귀화 사실이 확인 안될 경우</strong
                      >
                      - 귀화를 확인할수 있는 증빙서류
                      <!-- 230630 텍스트 컬러 수정 -->
                      <span class="c-text-danger">추가제출</span>
                      <!--// 230630 텍스트 컬러 수정 -->
                    </li>
                  </ol>
                </li>
                <li>
                  <h6>2. 기관장 확인서</h6>
                  다문화가족지원센터 등 다문화가족 지원기관
                </li>
              </ul>
              <div class="c-btn-group">
                <button
                  class="c-btn c-btn-sm c-btn-block c-btn-outline-secondary"
                >
                  <i class="ico ico-download"></i>
                  샘플 다운로드 (PDF)
                </button>
                <button
                  class="c-btn c-btn-sm c-btn-block c-btn-outline-secondary"
                >
                  <i class="ico ico-download"></i>
                  샘플 다운로드 (한글)
                </button>
              </div>
            </dd>
          </dl>
        </div>
        <div class="account__info">
          <dl>
            <dt>※ 증빙자료 제출 방법 안내</dt>
            <dd>
              <ul>
                <li>
                  <h6>1. 파일 첨부</h6>
                  증빙자료 업로드
                </li>
                <li class="mb-0">
                  <h6>2. 별도 송부</h6>
                  문자 : 010-9712-9049 <br />
                  카톡 ID : seoullearn <br />
                </li>
              </ul>
            </dd>
          </dl>
        </div>
        <div class="c-form-group">
          <div class="c-form-label">증빙자료 첨부유형</div>
          <div class="c-form-check-group">
            <div class="c-form-check">
              <input
                class="c-btn-check"
                type="radio"
                name="filetype"
                id="filetype01"
                checked
                @click="filetype = true"
              />
              <label
                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                for="filetype01"
                >파일 첨부</label
              >
            </div>
            <div class="c-form-check">
              <input
                class="c-btn-check"
                type="radio"
                name="filetype"
                id="filetype02"
              />
              <label
                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                for="filetype02"
                @click="filetype = false"
                >별도 송부</label
              >
            </div>
          </div>
        </div>
        <div class="c-form-group" v-if="filetype === true">
          <label for="file" class="c-form-label">증빙자료 첨부</label>
          <div class="c-input-group">
            <input
              id="file"
              class="c-form-control"
              type="text"
              placeholder="파일 첨부해주세요."
            />
            <!-- 230630 텍스트 컬러 수정 -->
            <button class="c-btn c-btn-sm c-btn-primary">파일 찾기</button>
            <!--// 230630 텍스트 컬러 수정 -->
          </div>
          <div class="c-form-file">
            <a href="">김철수_첨부파일 01.pdf</a>
            <button>
              <i class="ico ico-delete">삭제</i>
            </button>
          </div>
          <div class="c-form-file">
            <a href=""
              >김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일
              01.pdf</a
            >
            <button>
              <i class="ico ico-delete">삭제</i>
            </button>
          </div>
        </div>
      </section>

      <section v-if="memberType === 'memberType2'">
        <div class="account__info">
          <dl>
            <dt>※ 북한이탈주민확인서 또는 기관장 확인서</dt>
            <dd>
              <ul>
                <li>
                  <h6>1. 북한 이탈 주민등록 확인서(본인 또는 부모)</h6>
                  가족관계 증명서 추가제출, 정부24에서 발급 가능
                </li>
                <li>
                  <h6>2. 기관장 확인서</h6>
                  북한 이탈 주민지원센터
                </li>
              </ul>
              <div class="c-btn-group">
                <button
                  class="c-btn c-btn-sm c-btn-block c-btn-outline-secondary"
                >
                  <i class="ico ico-download"></i>
                  샘플 다운로드 (PDF)
                </button>
                <button
                  class="c-btn c-btn-sm c-btn-block c-btn-outline-secondary"
                >
                  <i class="ico ico-download"></i>
                  샘플 다운로드 (한글)
                </button>
              </div>
            </dd>
          </dl>
        </div>
        <div class="account__info">
          <dl>
            <dt>※ 증빙자료 제출 방법 안내</dt>
            <dd>
              <ul>
                <li>
                  <h6>1. 파일 첨부</h6>
                  증빙자료 업로드
                </li>
                <li class="mb-0">
                  <h6>2. 별도 첨부</h6>
                  문자 : 010-9712-9049 <br />
                  카톡 ID : seoullearn <br />
                </li>
              </ul>
            </dd>
          </dl>
        </div>
        <div class="c-form-group">
          <div class="c-form-label">증빙자료 첨부유형</div>
          <div class="c-form-check-group">
            <div class="c-form-check">
              <input
                class="c-btn-check"
                type="radio"
                name="filetype"
                id="filetype01"
                checked
                @click="filetype = true"
              />
              <label
                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                for="filetype01"
                >파일 첨부</label
              >
            </div>
            <div class="c-form-check">
              <input
                class="c-btn-check"
                type="radio"
                name="filetype"
                id="filetype02"
              />
              <label
                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                for="filetype02"
                @click="filetype = false"
                >별도 송부</label
              >
            </div>
          </div>
        </div>
        <div class="c-form-group" v-if="filetype === true">
          <label for="file" class="c-form-label">증빙자료 첨부</label>
          <div class="c-input-group">
            <input
              id="file"
              class="c-form-control"
              type="text"
              placeholder="파일 첨부해주세요."
            />
            <!-- 230630 텍스트 컬러 수정 -->
            <button class="c-btn c-btn-sm c-btn-primary">파일 찾기</button>
            <!--// 230630 텍스트 컬러 수정 -->
          </div>
          <div class="c-form-file">
            <a href="">김철수_첨부파일 01.pdf</a>
            <button>
              <i class="ico ico-delete">삭제</i>
            </button>
          </div>
          <div class="c-form-file">
            <a href=""
              >김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일
              01.pdf</a
            >
            <button>
              <i class="ico ico-delete">삭제</i>
            </button>
          </div>
        </div>
      </section>

      <section v-if="memberType === 'memberType3'">
        <div class="account__info">
          <dl>
            <dt>※ 최종학력증명서 또는 기관장 확인서</dt>
            <dd>
              <ul>
                <li>
                  <h6>
                    1. 최종학력증명서(초중고 졸업증명서 및 취학통지서 불가)
                  </h6>
                  아래 최종학력증명서 제출
                  <ol>
                    <li>
                      <strong
                        >1-1) 초,중등학교 제적(정원외관리) 증명서 (대학교
                        제적증명서 불가)</strong
                      >
                      - 정부24에서 발급 가능<br />
                      - 제출 서류에 입학 유예 표시가 기재되어 있는 경우
                      승인불가<br />
                      ※ 일시적 입학유예 학생은 자격대상 아님
                    </li>
                    <li>
                      <strong
                        >1-2) 증명서에 상급학교 진학사실이 기재되어 있는
                        경우</strong
                      >
                      - 미진학 사실확인서 추가제출<br />
                      ※ 기재된 상급학교에서 발급
                    </li>
                  </ol>
                </li>
                <li>
                  <h6>2. 검정고시관련서류</h6>
                  합격증명서, 성적증명서, 수험표 중에 선택
                </li>
                <li>
                  <h6>3. 기관장 확인서</h6>
                  대안교육기관(비인가 등록), 학교 밖 청소년지원센터 등 학교
                  밖청소년 지원기관
                </li>
              </ul>
              <div class="c-btn-group">
                <button
                  class="c-btn c-btn-sm c-btn-block c-btn-outline-secondary"
                >
                  <i class="ico ico-download"></i>
                  샘플 다운로드 (PDF)
                </button>
                <button
                  class="c-btn c-btn-sm c-btn-block c-btn-outline-secondary"
                >
                  <i class="ico ico-download"></i>
                  샘플 다운로드 (한글)
                </button>
              </div>
            </dd>
          </dl>
        </div>
        <div class="account__info">
          <dl>
            <dt>※ 증빙자료 제출 방법 안내</dt>
            <dd>
              <ul>
                <li>
                  <h6>1. 파일 첨부</h6>
                  증빙자료 업로드
                </li>
                <li class="mb-0">
                  <h6>2. 별도 송부</h6>
                  문자 : 010-9712-9049 <br />
                  카톡 ID : seoullearn <br />
                </li>
              </ul>
            </dd>
          </dl>
        </div>
        <div class="c-form-group">
          <label for="name" class="c-form-label">대학교 진학 여부</label>
          <div class="c-form-check-group">
            <div class="c-form-check">
              <input
                class="c-btn-check"
                type="radio"
                name="authentication"
                id="phone"
              />
              <label
                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                for="phone"
                >진학함</label
              >
            </div>
            <div class="c-form-check">
              <input
                class="c-btn-check"
                type="radio"
                name="authentication"
                id="email"
              />
              <label
                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                for="email"
                >진학하지 않음</label
              >
            </div>
          </div>
        </div>
        <div class="c-text-caution">
          대학교에 진학한 경우 일반 회원유형으로 가입이 진행됩니다.
        </div>
        <div class="c-form-group">
          <div class="c-form-label">증빙자료 첨부유형</div>
          <div class="c-form-check-group">
            <div class="c-form-check">
              <input
                class="c-btn-check"
                type="radio"
                name="filetype"
                id="filetype01"
                checked
                @click="filetype = true"
              />
              <label
                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                for="filetype01"
                >파일 첨부</label
              >
            </div>
            <div class="c-form-check">
              <input
                class="c-btn-check"
                type="radio"
                name="filetype"
                id="filetype02"
              />
              <label
                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                for="filetype02"
                @click="filetype = false"
                >별도 송부</label
              >
            </div>
          </div>
        </div>
        <div class="c-form-group" v-if="filetype === true">
          <label for="file" class="c-form-label">증빙자료 첨부</label>
          <div class="c-input-group">
            <input
              id="file"
              class="c-form-control"
              type="text"
              placeholder="파일 첨부해주세요."
            />
            <!-- 230630 텍스트 컬러 수정 -->
            <button class="c-btn c-btn-sm c-btn-primary">파일 찾기</button>
            <!--// 230630 텍스트 컬러 수정 -->
          </div>
          <div class="c-form-file">
            <a href="">김철수_첨부파일 01.pdf</a>
            <button>
              <i class="ico ico-delete">삭제</i>
            </button>
          </div>
          <div class="c-form-file">
            <a href=""
              >김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일
              01.pdf</a
            >
            <button>
              <i class="ico ico-delete">삭제</i>
            </button>
          </div>
        </div>
        <div class="account__title account__title-sm">서약서</div>
        <div class="account__info account__info-outline">
          학교 밖 자격으로 가입하여도 학교로 복학하거나,<br />
          대학을 진학한 경우 학교 밖 자격으로 이용불가 함을 알려드리며,<br />
          자격이 변경되었을 경우 학습상담센터(1533-0909) 또는<br />
          1:1문의게시판을 통해 자격 변경내용을 서울시에 통보하여 이용중지를<br />
          요청하여야 합니다. 회원의 자격 변경내용 미통지로 발생되는 불이익과<br />
          책임은 회원에게 있습니다.
        </div>
        <div class="c-form-group">
          <div class="c-form-check-group">
            <div class="c-form-check c-form-check--type03">
              <input
                class="c-form-check-input"
                type="radio"
                name="pledge"
                id="pledge1"
                checked
              />
              <label for="pledge1">동의</label>
            </div>
            <div class="c-form-check c-form-check--type03">
              <input
                class="c-form-check-input"
                type="radio"
                name="pledge"
                id="pledge2"
              />
              <label for="pledge2">미동의</label>
            </div>
          </div>
        </div>
      </section>

      <section v-if="memberType === 'memberType4'">
        <div class="account__info">
          <dl>
            <dt>※ 소득 85% 이하 증명서류</dt>
            <dd>
              <ul>
                <li>
                  <h6>1. 내용</h6>
                  내용
                </li>
                <li>
                  <h6>2. 내용</h6>
                  내용
                </li>
              </ul>
              <div class="c-btn-group">
                <button
                  class="c-btn c-btn-sm c-btn-block c-btn-outline-secondary"
                >
                  <i class="ico ico-download"></i>
                  샘플 다운로드 (PDF)
                </button>
                <button
                  class="c-btn c-btn-sm c-btn-block c-btn-outline-secondary"
                >
                  <i class="ico ico-download"></i>
                  샘플 다운로드 (한글)
                </button>
              </div>
            </dd>
          </dl>
        </div>
        <div class="account__info">
          <dl>
            <dt>※ 증빙자료 제출 방법 안내</dt>
            <dd>
              <ul>
                <li>
                  <h6>1. 파일 첨부</h6>
                  증빙자료 업로드
                </li>
                <li class="mb-0">
                  <h6>2. 별도 송부</h6>
                  문자 : 010-9712-9049 <br />
                  카톡 ID : seoullearn <br />
                </li>
              </ul>
            </dd>
          </dl>
        </div>
        <div class="c-form-group">
          <div class="c-form-label">증빙자료 첨부유형</div>
          <div class="c-form-check-group">
            <div class="c-form-check">
              <input
                class="c-btn-check"
                type="radio"
                name="filetype"
                id="filetype01"
                checked
                @click="filetype = true"
              />
              <label
                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                for="filetype01"
                >파일 첨부</label
              >
            </div>
            <div class="c-form-check">
              <input
                class="c-btn-check"
                type="radio"
                name="filetype"
                id="filetype02"
              />
              <label
                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                for="filetype02"
                @click="filetype = false"
                >별도 송부</label
              >
            </div>
          </div>
        </div>
        <div class="c-form-group" v-if="filetype === true">
          <label for="file" class="c-form-label">증빙자료 첨부</label>
          <div class="c-input-group">
            <input
              id="file"
              class="c-form-control"
              type="text"
              placeholder="파일 첨부해주세요."
            />
            <!-- 230630 텍스트 컬러 수정 -->
            <button class="c-btn c-btn-sm c-btn-primary">파일 찾기</button>
            <!--// 230630 텍스트 컬러 수정 -->
          </div>
          <div class="c-form-file">
            <a href="">김철수_첨부파일 01.pdf</a>
            <button>
              <i class="ico ico-delete">삭제</i>
            </button>
          </div>
          <div class="c-form-file">
            <a href=""
              >김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일
              01.pdf</a
            >
            <button>
              <i class="ico ico-delete">삭제</i>
            </button>
          </div>
        </div>
      </section>

      <section v-if="memberType === 'memberType5'">
        <div class="account__info">
          <dl>
            <dt>※ 유공자(유족) 증명서류</dt>
            <dd>
              <ul>
                <li class="mb-0">
                  <h6>1. 유공자(유족) 증명서류</h6>
                  유공자는 비대면 자격검증을 통하여 자동 확인됩니다. <br />
                  단, 시스템을 통해 확인이 안 되는 경우 유공자를 증명할 수 있는
                  서류
                </li>
              </ul>
            </dd>
          </dl>
        </div>
        <div class="account__info">
          <dl>
            <dt>※ 증빙자료 제출 방법 안내</dt>
            <dd>
              <ul>
                <li>
                  <h6>1. 파일 첨부</h6>
                  증빙자료 업로드
                </li>
                <li class="mb-0">
                  <h6>2. 별도 송부</h6>
                  문자 : 010-9712-9049 <br />
                  카톡 ID : seoullearn <br />
                </li>
              </ul>
            </dd>
          </dl>
        </div>
        <div class="c-form-group">
          <div class="c-form-label">증빙자료 첨부유형</div>
          <div class="c-form-check-group">
            <div class="c-form-check">
              <input
                class="c-btn-check"
                type="radio"
                name="filetype"
                id="filetype01"
                checked
                @click="filetype = true"
              />
              <label
                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                for="filetype01"
                >파일 첨부</label
              >
            </div>
            <div class="c-form-check">
              <input
                class="c-btn-check"
                type="radio"
                name="filetype"
                id="filetype02"
              />
              <label
                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                for="filetype02"
                @click="filetype = false"
                >별도 송부</label
              >
            </div>
          </div>
        </div>
        <div class="c-form-group" v-if="filetype === true">
          <label for="file" class="c-form-label">증빙자료 첨부</label>
          <div class="c-input-group">
            <input
              id="file"
              class="c-form-control"
              type="text"
              placeholder="파일 첨부해주세요."
            />
            <!-- 230630 텍스트 컬러 수정 -->
            <button class="c-btn c-btn-sm c-btn-primary">파일 찾기</button>
            <!--// 230630 텍스트 컬러 수정 -->
          </div>
          <div class="c-form-file">
            <a href="">김철수_첨부파일 01.pdf</a>
            <button>
              <i class="ico ico-delete">삭제</i>
            </button>
          </div>
          <div class="c-form-file">
            <a href=""
              >김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일
              01.pdf</a
            >
            <button>
              <i class="ico ico-delete">삭제</i>
            </button>
          </div>
        </div>
      </section>

      <section v-if="memberType === 'memberType6'">
        <div class="c-form-group">
          <label class="c-form-label">부모님 주민번호 확인</label>
          <!-- 230707 이름 input 추가 -->
          <input type="text" class="c-form-control mb-10" title="부모님 이름" />
          <div class="c-input-group">
            <!-- 웹접근성 title 추가 -->
            <input
              id="rrn"
              class="c-form-control"
              type="text"
              placeholder="주민번호 앞 6자리"
              maxlength="6"
              title="주민번호 앞 6자리"
              required
            />
            <!-- //웹접근성 title 추가 -->
            -
            <!-- 웹접근성 title 추가 -->
            <input
              id="rrn02"
              class="c-form-control"
              type="password"
              placeholder="주민번호 뒤 7자리"
              maxlength="7"
              title="주민번호 뒤 7자리"
              required
            /><button class="c-btn c-btn-sm c-btn-light">주민번호 인증</button>
            <!-- //웹접근성 title 추가 -->
          </div>
          <div class="c-text-caution c-text-caution--type02 c-text-primary">
            혜택 대상이 아닙니다. 추가 서류 검토를 통해 관리자 승인이
            필요합니다.
          </div>
          <div class="c-text-caution c-text-caution--type02 c-text-primary">
            인증 되었습니다. 다음으로 진행해주세요.
          </div>
        </div>
        <div class="account__info">
          <dl>
            <dt>※ 가족관계증명서</dt>
            <dd>
              <ul>
                <li class="mb-0">
                  <h6>1. 가족관계 증명서</h6>
                  다자녀는 비대면 자격검증을 통하여 자동 확인됩니다.<br />
                  단, 시스템을 통해 확인이 안 되는 경우 유공자를 증명할 수 있는
                  서류
                </li>
              </ul>
            </dd>
          </dl>
        </div>
        <div class="account__info">
          <dl>
            <dt>※ 증빙자료 제출 방법 안내</dt>
            <dd>
              <ul>
                <li>
                  <h6>1. 파일 첨부</h6>
                  증빙자료 업로드
                </li>
                <li class="mb-0">
                  <h6>2. 별도 송부</h6>
                  문자 : 010-9712-9049 <br />
                  카톡 ID : seoullearn <br />
                </li>
              </ul>
            </dd>
          </dl>
        </div>
        <div class="c-form-group">
          <div class="c-form-label">증빙자료 첨부유형</div>
          <div class="c-form-check-group">
            <div class="c-form-check">
              <input
                class="c-btn-check"
                type="radio"
                name="filetype"
                id="filetype01"
                checked
                @click="filetype = true"
              />
              <label
                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                for="filetype01"
                >파일 첨부</label
              >
            </div>
            <div class="c-form-check">
              <input
                class="c-btn-check"
                type="radio"
                name="filetype"
                id="filetype02"
              />
              <label
                class="c-btn c-btn-lg c-btn-block c-btn-outline-secondary"
                for="filetype02"
                @click="filetype = false"
                >별도 송부</label
              >
            </div>
          </div>
        </div>
        <div class="c-form-group" v-if="filetype === true">
          <label for="file" class="c-form-label">증빙자료 첨부</label>
          <div class="c-input-group">
            <input
              id="file"
              class="c-form-control"
              type="text"
              placeholder="파일 첨부해주세요."
            />
            <!-- 230630 텍스트 컬러 수정 -->
            <button class="c-btn c-btn-sm c-btn-primary">파일 찾기</button>
            <!--// 230630 텍스트 컬러 수정 -->
          </div>
          <div class="c-form-file">
            <a href="">김철수_첨부파일 01.pdf</a>
            <button>
              <i class="ico ico-delete">삭제</i>
            </button>
          </div>
          <div class="c-form-file">
            <a href=""
              >김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일김철수_첨부파일
              01.pdf</a
            >
            <button>
              <i class="ico ico-delete">삭제</i>
            </button>
          </div>
        </div>
      </section>
    </div>
    <div class="account__foot">
      <div class="c-btn-group">
        <!-- 230630 텍스트 컬러 수정 -->
        <button class="c-btn c-btn-lg c-btn-primary">이전</button>
        <!--// 230630 텍스트 컬러 수정 -->
        <button class="c-btn c-btn-lg c-btn-inactive">다음</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.account {
  &__body {
    @include mobile {
      padding: 6rem 1.6rem 0;
    }
  }
  .c-form-check--type03 + .c-form-check--type03 {
    margin-top: 0;
  }
  &__info {
    font-size: 1.4rem;
  }
}
.join {
  &__list {
    font-size: 1.6rem;
    li + li {
      margin-top: 1.6rem;
    }
    a {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 6rem;
      border: 0.1rem solid rgba(17, 17, 17, 0.12);
      border-radius: 0.8rem;
      color: $black;
      img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 2.6rem;
      }
    }
  }
}
</style>
