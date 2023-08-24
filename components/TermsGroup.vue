<script setup>
const emit = defineEmits(["terms"]);

const p = defineProps({
  modelValue: { default: null },
});

const d = reactive({
  master: computed(() => {
    if (p.modelValue.some((item) => item.value === false)) {
      return false;
    } else {
      return true;
    }
  }),
});

const handleChangeMaster = (e) => {
  p.modelValue.forEach((item) => {
    item.value = e.target.checked;
  });
};

const handleUpdate = (val, index) => {
  p.modelValue[index].value = val;
};

const terms = (obj) => {
  emit("terms", obj);
};
</script>

<template>
  <dl>
    <dt>
      <Checkbox
        :modelValue="d.master"
        text="전체 동의"
        :isBold="true"
        @change="handleChangeMaster"
      />
    </dt>
    <dd>
      <ul>
        <li
          v-for="(
            { key, text, value, required, cpId, termCode, noCheck }, index
          ) in p.modelValue"
        >
          <template v-if="noCheck">
            <span>{{ text }}</span>
          </template>
          <template v-else>
            <Checkbox
              :modelValue="value"
              :text="text"
              :required="required"
              :showRequiredText="true"
              @update:modelValue="handleUpdate($event, index)"
            />
          </template>

          <button
            class="c-btn c-btn-text c-btn-text--line"
            @click="terms({ id: cpId, code: termCode })"
          >
            내용보기
          </button>
        </li>
      </ul>
    </dd>
  </dl>
</template>

<style lang="scss" scoped>
dl {
  border: 0.1rem solid $secondary;
  border-radius: 0.8rem;
  dt {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.9rem 2rem 2.1rem 2rem;
  }
  dd {
    border-top: 0.1rem solid $secondary;
    padding: 2rem;
    ul {
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 0.6rem;
        height: 4rem;
        a {
          font-weight: 400;
          font-size: 1.3rem;
          line-height: 1.6rem;
          text-align: right;
          text-decoration-line: underline;
          color: #535353;
          white-space: nowrap;
        }
        &:first-child {
          margin-top: 0;
        }
      }
    }
  }
}
</style>
