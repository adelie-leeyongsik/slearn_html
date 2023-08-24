<script setup>
import { ref, reactive, onMounted, onActivated, onDeactivated } from "vue";
import db from "@/dev/dashboard/dashboard.js";

const emit = defineEmits(["close"]);

const self = ref();

const d = reactive({
  currentIndex: null,
  savedScroll: 0,
  copyAnimator: false,
  newTabOption: false,
  hideNoteOption: false,
  hideCompleteOption: false,
});

// 완료된 항목 뒤로 보내기, 마운트 되기 전에 바꿔줘야 함.
// 반응형 데이터가 아니기 때문에 onMounted 안에서 할 경우 바뀌지 않음.
// reactive로 맵핑할 경우는 가능.
db.forEach((item) => {
  item?.note?.sort((_, b) => {
    return b.complete ? -1 : 0;
  });
});

onMounted(() => {
  // d.newTabOption = localStorage.getItem("db--newtab") === "1" ? true : false;
  // d.hideCompleteOption =
  //   localStorage.getItem("db--complete") === "1" ? true : false;
  // d.hideNoteOption = localStorage.getItem("db--note") === "1" ? true : false;

  self.value.addEventListener("scroll", (e) => {
    d.savedScroll = self.value.scrollTop;
  });
});

onActivated(() => {
  self.value.scrollTop = d.savedScroll;
});

let timerId = null;
const handleClickCopy = (text) => {
  clearTimeout(timerId);
  d.copyAnimator = false;
  setTimeout(() => {
    window.navigator.clipboard.writeText(text);
    d.copyAnimator = true;
    timerId = setTimeout(() => {
      d.copyAnimator = false;
    }, 600);
  });
};

const handleClickRouter = (index) => {
  d.currentIndex = index;
  !d.newTabOption && emit("close");
};

const handleClickNewTabOption = () => {
  // d.newTabOption
  //   ? localStorage.setItem("db--newtab", 0)
  //   : localStorage.setItem("db--newtab", 1);
  d.newTabOption = !d.newTabOption;
};

const handleClickCompleteOption = () => {
  // d.hideCompleteOption
  //   ? localStorage.setItem("db--complete", 0)
  //   : localStorage.setItem("db--complete", 1);
  d.hideCompleteOption = !d.hideCompleteOption;
};

const handleClickNoteOption = () => {
  // d.hideNoteOption
  //   ? localStorage.setItem("db--note", 0)
  //   : localStorage.setItem("db--note", 1);
  d.hideNoteOption = !d.hideNoteOption;
};
</script>

<template>
  <div ref="self" class="db">
    <div class="db__header">
      <div class="db__header-inner">
        <div class="db__option-wrap">
          <button
            class="db__option"
            :class="[{ 'db__option--on': d.newTabOption }]"
            @click="handleClickNewTabOption"
          >
            항상 새창으로 열기
          </button>
          <button
            class="db__option"
            :class="[{ 'db__option--on': d.hideCompleteOption }]"
            @click="handleClickCompleteOption"
          >
            완료된 항목 가리기
          </button>
          <button
            class="db__option"
            :class="[{ 'db__option--on': d.hideNoteOption }]"
            @click="handleClickNoteOption"
          >
            노트 가리기
          </button>
        </div>
      </div>
    </div>
    <div class="db__inner">
      <div class="db__items">
        <div
          v-for="({ id, title, to, note, file }, index) in db"
          class="dbi"
          :class="[
            {
              'dbi--current': d.newTabOption
                ? index === d.currentIndex
                : $route.fullPath === to,
            },
          ]"
        >
          <div class="f-row--v-center dbi__title-wrap">
            <router-link
              class="f-col--fit dbi__title"
              :to="to"
              @click="handleClickRouter(index)"
              :target="d.newTabOption ? '_blank' : null"
            >
              {{ title }}
            </router-link>
            <div class="f-col dbi__title-bar" />
            <div class="f-col--fit f-row--v-center dbi__tail">
              <button class="f-col--fit dbi__id" @click="handleClickCopy(id)">
                {{ id }}
              </button>
              <template v-if="file">
                <span class="dbi__dot" />
                <button
                  class="f-col--fit dbi__file"
                  @click="handleClickCopy(file)"
                >
                  FILE
                </button>
              </template>
            </div>
          </div>
          <div v-if="note && !d.hideNoteOption" class="note">
            <template v-for="({ tag, desc, complete }, index) in note">
              <div
                v-if="!complete || (complete && !d.hideCompleteOption)"
                class="note__item"
                :class="[
                  {
                    'note__item--complete': complete,
                  },
                ]"
              >
                <span :class="`note__tag note__tag--${tag}`" />
                {{ desc }}
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div v-if="d.copyAnimator" class="db__copy">Copied!</div>
  </div>
</template>

<style lang="scss" scoped>
.f-row {
  @at-root [class*="f-row"] {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    justify-content: center;
    align-items: flex-start;
  }
  &--v-center {
    align-items: center;
  }
  &--h-between {
    justify-content: space-between;
  }
}

.f-col {
  @at-root [class*="f-col"] {
    flex: 1 1 0;
  }
  &--fit {
    flex: 0 0 auto;
    width: auto;
  }
}

.db {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  background-color: #fff;
  word-break: keep-all;
  word-wrap: break-word;
  z-index: 999999;
  &::-webkit-scrollbar {
    display: none;
  }
  &__header {
    position: fixed;
    display: flex;
    align-items: flex-end;
    left: 0;
    right: 0;
    height: 50px;
    background-color: #fff;
    z-index: 1;
  }
  &__header-inner {
    text-align: right;
    width: 100%;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  &__option-wrap {
    margin-bottom: 10px;
  }
  &__option {
    margin-left: 10px;
    font-size: 14px;
    color: #535353;
    &:before {
      content: "☑️";
      margin-right: 2px;
      opacity: 0.3;
      font-size: 12px;
    }
    &--on {
      color: #000;
      &:before {
        content: "✅";
        opacity: 1;
      }
    }
  }
  &__inner {
    margin-top: 80px;
    margin-bottom: 50px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  &__copy {
    position: fixed;
    left: 50%;
    top: 35%;
    transform: translate3d(-50%, -50%, 0);
    font-size: 30px;
    padding: 20px 36px;
    border-radius: 16px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.85);
    animation: 0.24s pop;
    @keyframes pop {
      0% {
        transform: translate3d(-50%, -50%, 0) scale3d(0.3, 0.3, 1);
        opacity: 0;
      }
      24% {
        transform: translate3d(-50%, -50%, 0) scale3d(1.3, 1.3, 1);
      }
      65% {
        opacity: 1;
      }
      100% {
        transform: translate3d(-50%, -50%, 0) scale3d(1, 1, 1);
      }
    }
  }
}

.dbi {
  margin-top: 15px;
  padding-top: 15px;
  &:first-child {
    margin-top: 0;
    padding-top: 0;
    border-top: none;
  }
  &__title {
    font-size: 19px;
  }
  &__title-bar {
    border-top: solid 1px #aaa;
    margin-left: 10px;
    margin-right: 10px;
  }
  &__id {
    font-size: 13px;
    text-transform: uppercase;
  }
  &__file {
    font-size: 13px;
  }
  &__dot {
    display: inline-block;
    width: 3px;
    height: 3px;
    margin-left: 8px;
    margin-right: 8px;
    border-radius: 50%;
    background-color: #ccc;
  }
  &--current & {
    &__title-bar {
      border-color: #3bab64;
      border-width: 2px;
    }
    &__title {
      font-weight: 700;
      color: #3bab64;
    }
    &__file {
      color: #3bab64;
    }
    &__id {
      color: #3bab64;
    }
    &__dot {
      background-color: #3bab64;
    }
  }
}

.note {
  margin-top: 13px;
  padding-left: 13px;
  padding-right: 13px;
  &__item {
    position: relative;
    font-size: 14px;
    padding-left: 55px;
    margin-top: 14px;
    color: #555;
    text-decoration-color: #555;
    &:first-child {
      margin-top: 0;
    }
    &--complete {
      opacity: 0.4;
      text-decoration: line-through;
    }
  }
  &__tag {
    position: absolute;
    left: 0;
    top: 1px;
    display: inline-block;
    width: 45px;
    line-height: 20px;
    font-size: 11px;
    text-align: center;
    border-radius: 4px;
    &:before {
      display: inline-block;
    }
    &--memo {
      background-color: #f9f9f9;
      &:before {
        content: "메모";
      }
    }
    &--todo {
      background-color: #eff8e8;
      &:before {
        content: "TODO";
      }
    }
    &--issue {
      background-color: #fff2f2;
      &:before {
        content: "이슈";
      }
    }
  }
}
</style>
