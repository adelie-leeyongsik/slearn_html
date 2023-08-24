<script setup>
const router = useRouter();
const consultingData = reactive({
  currentTab2: 0,
  tabList2: ["도와줘요! 진로상담", "궁금해요! 진학상담"],
});
</script>
<template>
  <div class="main__contents-head">
    <div class="main__contents-title">
      꿈을 진단하고,<br class="c-mo" />
      설계해봐요!
    </div>
    <p class="main__contents-text">
      목표를 정할 때 학습이 더욱 즐거울 수 있습니다.<br />
      전문 상담선생님께 상담을 받을 수 있도록 준비했습니다.
    </p>
    <button
      class="c-btn c-btn-lg c-btn-radius c-btn-outline--danger"
      @click="router.push('/mypage/consulting')"
    >
      더보기<i class="ico ico-arrow">더보기 이미지</i>
    </button>
  </div>
  <!-- <div class="main__contents-body">
    <div class="c-tab-nav">
      <ul>
        <li
          v-for="(tab2, index) in consultingData.tabList2"
          :key="index"
          :class="{ active: consultingData.currentTab2 === index }"
        >
          <a href="#" @click.prevent="consultingData.currentTab2 = index">
            {{ tab2 }}
          </a>
        </li>
      </ul>
    </div>
    <div class="c-tab-contents__wrap">
      <div v-show="consultingData.currentTab2 == 0" class="c-tab-contents">
        <div class="main__consulting-wrap">
          <div class="main__consulting-chatting">
            <div class="c-chatting--manager">
              <div class="c-chatting manager">
                <p>📙서울런 진로상담📙을 이용해 보세요.</p>
              </div>
            </div>
            <div class="c-chatting--user">
              <div class="c-chatting user">
                <p>예비 중학생입니다.</p>
              </div>
              <div class="c-chatting user">
                <p>
                  진로에 따라 고등학교를 선택하려 하는데 아직 막막해서
                  힘들어요.😭<br />
                  도움을 받고 싶습니다.
                </p>
              </div>
            </div>
            <div class="c-chatting--manager">
              <div class="c-chatting manager">
                <p>
                  많이 고민이겠어요!<br />
                  서울런에서 정확한 상담을 통해 안내해 드릴게요, 시작해
                  볼까요?👉🏻
                </p>
              </div>
            </div>
          </div>
          <div class="c-tag--group">
            <strong class="c-tag c-tag--danger"># 고등</strong>
            <strong class="c-tag c-tag--danger"># 흥미</strong>
            <strong class="c-tag c-tag--danger"># 적성검사</strong>
            <strong class="c-tag c-tag--danger"># 1:1 분석</strong>
            <strong class="c-tag c-tag--danger"># 컨설팅</strong>
            <strong class="c-tag c-tag--danger"># MBT</strong>
          </div>
        </div>
      </div>
      <div v-show="consultingData.currentTab2 == 1" class="c-tab-contents">
        <div class="main__consulting-wrap">
          <div class="main__consulting-chatting">
            <div class="c-chatting--manager">
              <div class="c-chatting manager">
                <p>📘서울런 진학상담📘을 이용해 보세요.</p>
              </div>
            </div>
            <div class="c-chatting--user">
              <div class="c-chatting user">
                <p>서울 소재 고3 수험생입니다.</p>
              </div>
              <div class="c-chatting user">
                <p>
                  인문계열에서 공부 중인데 국어가 너무 어렵고 막막하네요.😭<br />
                  멘토링을 받으면 많이 도움이 될까요?
                </p>
              </div>
            </div>
            <div class="c-chatting--manager">
              <div class="c-chatting manager">
                <p>
                  많이 고민이겠어요!<br />
                  서울런에서 정확한 상담을 통해 안내해 드릴게요, 시작해
                  볼까요?👉🏻
                </p>
              </div>
            </div>
          </div>
          <div class="c-tag--group">
            <strong class="c-tag c-tag--sky"># 맞춤형</strong>
            <strong class="c-tag c-tag--sky"># 입시컨설팅</strong>
            <strong class="c-tag c-tag--sky"># 지원전략</strong>
            <strong class="c-tag c-tag--sky"># 수능</strong>
            <strong class="c-tag c-tag--sky"># 학부모</strong>
            <strong class="c-tag c-tag--sky"># 특별전형</strong>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>
