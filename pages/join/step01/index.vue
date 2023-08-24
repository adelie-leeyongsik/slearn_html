<script setup>
import joinNav from "../_nav.vue";
import DownButton from "./downBtn.vue";
import { call } from "@/api";
import { useLoginStore, useModalStore } from "@/store";

definePageMeta({
  layout: "account",
});

const router = useRouter();

const modal = useModalStore();
const login = useLoginStore();

const d = reactive({
  memberType: "JOIN_P003",
  memberList: [
    {
      text: "다문화 가족 청소년",
      value: "JOIN_P003",
      column: false,
    },
    {
      text: "북한 이탈 청소년",
      value: "JOIN_P004",
      column: false,
    },
    {
      text: "학교 밖 청소년",
      value: "JOIN_P002",
      column: false,
    },
    {
      text: "소득 85% 이하 청소년",
      value: "JOIN_P009",
      column: false,
    },
    {
      text: "기타유공자 청소년",
      value: "JOIN_P010",
      column: false,
    },
    {
      text: "다자녀 가족 청소년<span>(세자녀 이상 둘째 자녀부터 자격대상)</span>",
      value: "JOIN_P007",
      column: true,
    },
  ],
  fileInfoList: [],
  agree: true,
  name: "",
  jumin1: "",
  jumin2: "",
  isParent: false,
  isNotParent: false,
});

const onChangeRadio = (val) => {
  d.isParent = false;
  d.isNotParent = false;
  d.memberType = val;
};

const getFileInfo = (val) => {
  d.fileInfoList = val;
};

const onCheckParent = () => {
  d.isParent = false;
  d.isNotParent = false;

  call({
    method: "post",
    id: "회원가입 다자녀 자격검증",
    endpoint: "/api/join/from_3_or_more_family",
    data: {
      usernm: d.name,
      juminNum: d.jumin1 + d.jumin2,
      birthdayOfChild: login.joinChildNo,
    },
    onResponse({ data, status, message }) {
      if (status === 200) {
        login.bigFamily = data;

        if (isEqual(data.yn, "Y")) {
          d.isParent = true;
        } else {
          d.isNotParent = true;
        }
      } else {
        modal.alert("알림", message);
      }
    },
  });
};

const onClickPrev = () => {
  router.push("/join/qualification");
};

const onClickNext = () => {
  if (isEqual(d.memberType, "JOIN_P002") && !d.agree) {
    modal.alert("알림", "서약서를 서약해야합니다.");
    return;
  }

  login.joinMemberType = d.memberType;
  login.joinFileList = d.fileInfoList;

  router.push("/join/step02");
};

const updateAgree = (val) => {
  d.agree = val;
};
</script>

<template>
  <div class="account">
    <h1>회원가입</h1>
    <joinNav :active="1" />
    <div class="account__body">
      <h2 class="account__title">
        별도 증빙자료 제출 및 승인 절차를 통해 <br />
        회원가입을 안내해드릴게요.
      </h2>
      <div class="c-form-group">
        <Radio
          v-model="d.memberType"
          :items="d.memberList"
          @update:modelValue="onChangeRadio"
        />
      </div>

      <section v-if="d.memberType === 'JOIN_P003'">
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
                      <span class="c-text-danger">추가제출</span>
                    </li>
                    <li>
                      <strong
                        >1-2) 기본증명서에도 귀화 사실이 확인 안될 경우</strong
                      >
                      - 귀화를 확인할수 있는 증빙서류
                      <span class="c-text-danger">추가제출</span>
                    </li>
                  </ol>
                </li>
                <li>
                  <h6>2. 기관장 확인서</h6>
                  다문화가족지원센터 등 다문화가족 지원기관
                </li>
              </ul>
              <DownButton :memberType="`JOIN_P003`" />
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
                  카톡 ID : seoullearn
                </li>
              </ul>
            </dd>
          </dl>
        </div>
        <AttachFile
          :attachType="true"
          labelTitle="증빙자료 첨부"
          :dataList="d.fileInfoList"
          boardName="join"
          @onFileInfo="getFileInfo"
        ></AttachFile>
      </section>

      <section v-if="d.memberType === 'JOIN_P004'">
        <div class="account__info">
          <dl>
            <dt>※ 북한이탈주민확인서 또는 기관장 확인서</dt>
            <dd>
              <ul>
                <li>
                  <h6>1. 북한이탈주민등록(본인 또는 부모)</h6>
                  정부24에서 발급 가능
                  <ol>
                    <li>
                      <strong
                        >1-1) 부모의 북한이탈주민등록확인서 제출 시</strong
                      >
                      - 가족관계 증명서 추가제출
                    </li>
                  </ol>
                </li>
                <li>
                  <h6>2. 기관장 확인서</h6>
                  북한이탈주민지원센터
                </li>
              </ul>
              <DownButton :memberType="`JOIN_P004`" />
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
                  카톡 ID : seoullearn
                </li>
              </ul>
            </dd>
          </dl>
        </div>
        <AttachFile
          :attachType="true"
          labelTitle="증빙자료 첨부"
          :dataList="d.fileInfoList"
          boardName="join"
          @onFileInfo="getFileInfo"
        ></AttachFile>
      </section>

      <section v-if="d.memberType === 'JOIN_P002'">
        <div class="account__info">
          <dl>
            <dt>※ 최종학력증명서 또는 검정고시관련서류 또는 기관장 확인서</dt>
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
                      - 정부24에서 발급 가능 <br />
                      - 제출 서류에 입학 유예 표시가 기재되어 있는 경우
                      승인불가<br />
                      ※ 일시적 입학유예 학생은 자격대상 아님
                    </li>
                    <li>
                      <strong
                        >1-2) 증명서에 상급학교 진학사실이 기재되어 있는
                        경우</strong
                      >
                      - 미진학 사실확인서
                      <span class="c-text-danger">추가제출</span> <br />
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
              <DownButton :memberType="`JOIN_P002`" />
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
                  문자 : 010-9712-9049
                </li>
              </ul>
            </dd>
          </dl>
        </div>

        <div class="c-text-caution">
          대학교에 진학한 경우 일반 회원유형으로 가입이 진행됩니다.
        </div>
        <AttachFile
          :attachType="true"
          labelTitle="증빙자료 첨부"
          :dataList="d.fileInfoList"
          boardName="join"
          @onFileInfo="getFileInfo"
        ></AttachFile>

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
                title="pledge1"
                checked
                @change="updateAgree(true)"
              />
              <label for="pledge1">동의</label>
            </div>
            <div class="c-form-check c-form-check--type03">
              <input
                class="c-form-check-input"
                type="radio"
                name="pledge"
                id="pledge2"
                title="pledge2"
                @change="updateAgree(false)"
              />
              <label for="pledge2">미동의</label>
            </div>
          </div>
        </div>
      </section>

      <section v-if="d.memberType === 'JOIN_P009'">
        <div class="account__info">
          <dl>
            <dt>※ 증빙자료 확인 필요</dt>
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
                  카톡 ID : seoullearn
                </li>
              </ul>
            </dd>
          </dl>
        </div>
        <AttachFile
          :attachType="true"
          labelTitle="증빙자료 첨부"
          :dataList="d.fileInfoList"
          boardName="join"
          @onFileInfo="getFileInfo"
        ></AttachFile>
      </section>

      <section v-if="d.memberType === 'JOIN_P010'">
        <div class="account__info">
          <dl>
            <dt>※ 기타유공자(유족) 증명서류</dt>
            <dd>
              <ul>
                <li>
                  <h6>1. 기타유공자(유족) 증명서류 (회원본인)</h6>
                  - 유공자는 비대면 자격검증을 통하여 자동 확인됩니다. <br />
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
                  카톡 ID : seoullearn
                </li>
              </ul>
            </dd>
          </dl>
        </div>
        <AttachFile
          :attachType="true"
          labelTitle="증빙자료 첨부"
          :dataList="d.fileInfoList"
          boardName="join"
          @onFileInfo="getFileInfo"
        ></AttachFile>
      </section>

      <section v-if="d.memberType === 'JOIN_P007'">
        <div class="c-form-group">
          <label class="c-form-label">부모님 주민번호 확인</label>
          <div class="c-input-group">
            <Input
              v-model="d.name"
              id="name"
              type="text"
              placeholder="이름을 입력해 주세요"
              title="이름 입력"
            />
          </div>
          <div class="c-input-group">
            <Input
              v-model="d.jumin1"
              id="rrn"
              type="text"
              placeholder="주민번호 앞 6자리"
              maxlength="6"
              title="주민번호 앞 6자리"
              :onlyNumber="true"
            />
            -
            <Input
              v-model="d.jumin2"
              id="rrn02"
              type="password"
              placeholder="주민번호 뒤 7자리"
              maxlength="7"
              title="주민번호 뒤 7자리"
              :onlyNumber="true"
            />
            <Button
              size="auto"
              sizeType="small"
              styleType="light"
              text="주민번호 인증"
              @click="onCheckParent"
            />
          </div>
          <div
            class="c-text-caution c-text-caution--type02 c-text-danger"
            v-if="d.isNotParent"
          >
            혜택 대상이 아닙니다. 추가 서류 검토를 통해 관리자 승인이
            필요합니다.
          </div>
          <div
            class="c-text-caution c-text-caution--type02 c-text-blue"
            v-if="d.isParent"
          >
            인증 되었습니다. 다음으로 진행해주세요.
          </div>
        </div>
        <div class="account__info" v-if="d.isNotParent">
          <dl>
            <dt>※ 가족관계증명서</dt>
            <dd>
              <ul>
                <li>
                  <h6>1. 가족관계 증명서</h6>
                  - 다자녀는 비대면 자격검증을 통하여 자동 확인됩니다. <br />
                  단, 시스템을 통해 확인이 안 되는 경우 다자녀를 증명할 수 있는
                  서류
                </li>
              </ul>
            </dd>
          </dl>
        </div>
        <div class="account__info" v-if="d.isNotParent">
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
                  카톡 ID : seoullearn
                </li>
              </ul>
            </dd>
          </dl>
        </div>
        <AttachFile
          v-if="d.isNotParent"
          :attachType="true"
          labelTitle="증빙자료 첨부"
          :dataList="d.fileInfoList"
          boardName="join"
          @onFileInfo="getFileInfo"
        ></AttachFile>
      </section>
    </div>
    <div class="account__foot">
      <div class="c-btn-group">
        <Button
          size="auto"
          sizeType="large"
          styleType="blue"
          text="취소"
          @click="onClickPrev"
        />
        <Button
          size="auto"
          sizeType="large"
          styleType="danger"
          text="다음"
          :onConfirm="onClickNext"
          :validator="
            d.fileInfoList.length > 0 ||
            (!isEqual(d.memberType, 'JOIN_P002') &&
              isEqual(login.joinAttachType, 'ATTACH_P002')) ||
            d.isParent ||
            (isEqual(login.joinAttachType, 'ATTACH_P002') && d.agree)
          "
        />
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
