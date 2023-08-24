<script setup>
import { useModalStore } from "@/store";
import { uGetLoginInfo } from "@/utils";
import { call } from "@/api";

const { show, props } = defineProps({
  show: {
    Type: Boolean,
    default: () => false,
  },
  props: {
    Type: Object,
    required: true,
  },
});

const modal = useModalStore();

const inputRef = ref(null);

const attrs = useAttrs();
const router = useRouter();

const {
  MENTORING: { MENTORING_HOOKY_SUBMIT, MENTORING_HOOKY_SUBMIT_REASON },
} = useAppConfig();

const reason = ref("");

const handleSubmitEvent = async () => {
  try {
    if (reason.length <= 2) {
      modal.open({
        key: uGenKey("alert"),
        type: "alert",
        title: "알림",
        message: "결석 신고 내용 입력 후 다시 시도해주시길 바랍니다",
        onClose: () => inputRef.value.focus(),
        buttons: [{ text: "확인", styleType: "danger" }],
      });
      return;
    }

    let restPath = null;
    let data = {};
    const { accessRole, actionRole } = props;
    if (accessRole === "mentee") {
      // * 멘역할이 멘티 이고, 티가 본인 신고 및 멘토 신고 할 경우 또는
      restPath = MENTORING_HOOKY_SUBMIT;
      Object.assign(data, {
        smtdIdx: props.smtdIdx,
        reportAbsentType: "MTR",
        reportReason: reason.value,
      });
    } else {
      if (actionRole === "mentor") {
        // * 역할이 멘토 이고, 멘토 본인이 결석 사유를 입력할 경우
        restPath = MENTORING_HOOKY_SUBMIT_REASON;
        Object.assign(data, {
          smtdIdx: props.smtdIdx,
          mentorAbsentreason: reason.value,
        });
      } else {
        // * 역할이 멘토 이고, 멘토가 멘티를 신고할 경우
        restPath = MENTORING_HOOKY_SUBMIT;
        Object.assign(data, {
          smtdIdx: props.smtdIdx,
          reportAbsentType: "MTE",
          reportReason: reason.value,
        });
      }
    }

    await call({
      id: "멘토링 관리 - 모달 결석 사유 입력",
      endpoint: restPath,
      method: "post",
      data,
      onResponse: ({ status, message }) => {
        if (status === 200) {
          modal.alert("알림", "결석신고가 정상적으로 등록되었습니다.", () =>
            router.go()
          );
          return;
        }
        modal.alert("알림", message);
      },
    });
  } catch (err) {
    console.error(err);
  }
};

const staticData = computed(() => {
  try {
    const { actionRole, ...keys } = props;

    const userName = uGetLoginInfo("usernm");
    switch (actionRole) {
      case "mentor":
        return {
          mentorName: userName,
          menteeName: keys.userName,
          mentoringDtm: keys.mentoringDtm,
          mentoringOrd: `${keys.ord} 회차`,
        };

      case "mentee":
        const {
          currentMentoring: { currentMentoringDtm, currentMentoringSeq },
          detailSeq,
        } = keys;
        return {
          mentorName: keys.mentorName,
          menteeName: userName,
          mentoringDtm: currentMentoringDtm,
          mentoringOrd: `${
            !isUndefined(detailSeq) ? detailSeq : currentMentoringSeq
          } 회차`,
        };
    }
  } catch (err) {
    return {};
  }
});

const title = computed(() => {
  try {
    const { actionRole, accessRole } = props;
    if (accessRole === "mentor") {
      if (actionRole === "mentor") {
        return `멘토 결석 신고`;
      } else {
        return `멘티 결석 신고`;
      }
    }
    // 멘티 결석 신고(멘티는 멘토 신고Only)
    return `멘토 결석 신고`;
  } catch (err) {
    return ``;
  }
});
</script>

<template>
  <Transition name="c-modals">
    <div class="c-modals" v-if="show">
      <div class="c-modals__bg" @click.stop="$attrs.onClose()"></div>
      <div class="c-modals__inner">
        <div class="c-modals__head">
          {{ title
          }}<button
            class="c-modals__head-close"
            type="submit"
            @click.prevent="$attrs.onClose()"
          >
            닫기
          </button>
        </div>
        <div class="c-modals__contents">
          <div class="c-modals__box">
            <dl>
              <dt>멘토</dt>
              <dd>{{ staticData?.mentorName }}</dd>
            </dl>
            <dl>
              <dt>멘티</dt>
              <dd>{{ staticData?.menteeName }}</dd>
            </dl>
            <dl>
              <dt>멘토링 예정일</dt>
              <dd>{{ staticData?.mentoringDtm }}</dd>
            </dl>
            <dl>
              <dt>멘토링 주차</dt>
              <dd>{{ staticData?.mentoringOrd }}</dd>
            </dl>
          </div>
          <div class="c-form-group">
            <label for="reason" class="c-form-label">결석 사유</label>
            <div class="c-input-group">
              <input
                id="reason"
                class="c-form-control"
                type="text"
                placeholder="결석 사유를 입력해주세요."
                ref="inputRef"
                v-model="reason"
                required
              />
            </div>
          </div>
          <div class="c-modals__button">
            <div class="c-btn-group">
              <button
                type="submit"
                class="c-btn c-btn-primary"
                @click.prevent="$attrs.onClose()"
              >
                닫기
              </button>
              <button
                type="submit"
                class="c-btn c-btn-primary"
                @click.prevent="handleSubmitEvent"
              >
                등록
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
