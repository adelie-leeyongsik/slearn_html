<script>
export default {
  data() {
    return {
      interestSub: false,
    };
  },
};
</script>
<template>
  <div class="interest__snb" :class="{ active: interestSub === true }">
    <div class="interest__snb-box">
      <div class="interest__snb-box--title" @click="interestSub = !interestSub">
        추가 질문도<br class="c-pc" />
        가능해요!
      </div>
      <ul class="interest__snb-box--menu">
        <li>
          <a href="#"> 사용방법 알려줘 </a>
        </li>
        <li>
          <a href="#">
            요즘 뜨고 있는<br class="c-pc" />
            인기 강좌
          </a>
        </li>
        <li>
          <a href="#">
            사람들이 많이 보는<br class="c-pc" />
            공연 보여줘
          </a>
        </li>
        <li>
          <a href="#">
            따근 따끈한 서울런<br class="c-pc" />
            최신 강좌
          </a>
        </li>
      </ul>
    </div>
    <div class="interest__snb-banner">
      <ul class="interest__snb-link">
        <li class="box1">
          <a href="#">
            <div class="c-text-title-md c-text-white">
              나의 관심사<br />설정
            </div>
          </a>
        </li>
        <li class="box2">
          <a href="#">
            <div class="c-text-title-md c-text-blue">디지털 집현전</div>
            <p>전 국민 지식 플랫폼</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
