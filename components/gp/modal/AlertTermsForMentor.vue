<script setup>
import { useModalStore } from "@/store";

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

const router = useRouter();
const modal = useModalStore();
</script>

<template>
  <Transition name="c-modals">
    <div class="c-modals" v-if="show">
      <div class="c-modals__bg" @click.stop="$attrs.onClose()"></div>
      <div class="c-modals__inner">
        <div class="c-modals__head">
          {{ props.title }}
          <button
            class="c-modals__head-close"
            type="submit"
            @click.prevent="$attrs.onClose()"
          >
            닫기
          </button>
        </div>
        <form>
          <div class="c-modals__contents">
            <div class="c-modals__contents-terms">
              <p v-html="props.desc" class="left"></p>
            </div>
            <div class="c-modals__button">
              <div class="c-btn-group">
                <button
                  type="button"
                  class="c-btn c-btn-primary"
                  @click.prevent="$attrs.onClose()"
                >
                  확인
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>
