<script setup>
import { useLoginStore } from "@/store";

const router = useRouter();
const login = useLoginStore();
const loginModalRef = ref(null);

const d = reactive({
  lastOpenedButton: null,
});

watch(
  () => login.isAlert,
  (newInfo) => {
    if (newInfo) {
      d.lastOpenedButton = document.activeElement;
      setFocusOnModal();
    } else {
      if (
        d.lastOpenedButton &&
        typeof d.lastOpenedButton.focus === "function"
      ) {
        d.lastOpenedButton.focus();
      }
    }
  }
);

const onClickConfirm = () => {
  console.log("onClickConfirm");
  login.isAlert = false;
  router.push("/login");
};

const onClickCancel = () => {
  console.log("onClickCancel");
  login.isAlert = false;
};
const setFocusOnModal = async () => {
  await nextTick();
  loginModalRef.value.focus();
};
</script>

<template>
  <Transition name="c-alert">
    <div class="c-alert" v-if="login.isAlert">
      <div class="c-alert__bg"></div>
      <div class="c-alert__inner" ref="loginModalRef" tabindex="0">
        <div class="c-alert__title">알림</div>
        <div class="c-alert__contents">
          <p>
            로그인이 필요한 서비스입니다.<br />
            로그인을 하시겠습니까?
          </p>
        </div>
        <div class="c-alert__button">
          <div class="c-btn-group">
            <Button
              size="auto"
              styleType="blue"
              text="취소"
              @click="onClickCancel"
            />
            <Button
              size="auto"
              styleType="danger"
              text="확인"
              @click="onClickConfirm"
            />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
