<script setup>
/*
DOM 조작이 필요한 경우 현재 컴포넌트 ROOT에 self를 연결하고 이를 이용해서 접근해주세요.
*/
const self = ref();

/*
현재 컴포넌트의 DOM이 준비되면 호출됨. 초기화, 이벤트 등록 등의 코드가 필요한 경우 여기에 작성
*/
onMounted(() => {
  self.value.querySelector("button").addEventListener("click", () => {
    alert("[onMounted 내부에서 등록한 이벤트]");
  });
});

const handleClickButton = (e) => {
  alert("[vue bind를 이용해서 등록한 이벤트]");
  console.log(e);
};
</script>

<template>
  <div ref="self">
    <button>Click me!</button>
  </div>
</template>
