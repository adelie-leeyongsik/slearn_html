<script>
definePageMeta({
  layout: "introduction",
});
export default {
  data() {
    return {
      currentTab: 0,
      tabList: ["초등학교", "중학교", "고등학교"],
    };
  },
};
</script>

<template>
  <div class="introduction">
    <div class="introduction-online">
      <div class="introduction__head">
        <div class="c-text-title c-text-title-lg c-text-center">
          온라인 컨텐츠 소개
        </div>
        <div class="introduction__title">
          인기 학습 사이트들을 자유롭게 둘러보고 <br class="c-pc c-tablet" />
          나에게 딱 맞는 사이트를 골라 학습 할 수 있어요.
        </div>
      </div>
      <div class="introduction__contents">
        <div class="introduction__body-wrap">
          <div class="introduction__body">
            <div class="introduction__body-title">Q. 멘토는 누구?</div>
            <p>
              서울시 거주 만6세~ 만24세이고, 소득기준대상, 학교밖, 다문화가족,
              <br class="c-pc c-tablet" />
              법정한부모가족, 북한이탈 청소년
            </p>
            <ul>
              <li>· 소득기준대상 : 수급권자,차상위계층(중위소득 50% 이하 )</li>
              <li>
                · 법정한부모 : 중위소득 60% 이하(단, 청소년한부모가정은 중위소득
                72% 이하)
              </li>
            </ul>
          </div>
          <div class="introduction__body">
            <div class="introduction__body-title">
              Q. 멘토는 어떻게<br class="c-mo" />
              지정되나요?
            </div>
            <p>
              자격확인 후 대상별 가입절차에 따라 자격 검증서비스 또는 증빙자료
              제출을 통해 신청 가능
            </p>
            <ul>
              <li>
                회원가입 시 학습사이트도 통합 가입되며, 다만 대성마이맥은 별도
                간편가입해야 합니다
              </li>
            </ul>
          </div>
        </div>
        <nav class="introduction-online__tab-menu">
          <a
            href=""
            v-for="(tab, index) in tabList"
            :key="index"
            :class="{ active: currentTab === index }"
            @click.prevent="currentTab = index"
          >
            <span>{{ tab }}</span>
          </a>
        </nav>
        <div v-show="currentTab == 0" class="introduction-online__tab-contents">
          <div class="introduction__contents-title">교과 학습사이트</div>
          <div class="introduction-online__list">
            <ul>
              <li>
                <div class="introduction-online__list-item">
                  <div class="introduction-online__list-item-img">
                    <img src="@img/logo-onlyone.png" alt="온니원 로고" />
                  </div>
                  <div class="introduction-online__list-item-text">
                    <div class="introduction-online__list-item-text-head">
                      <p>온니원</p>
                      <div class="c-badge c-badge-sm">기기지원</div>
                      <a href="">바로가기</a>
                    </div>
                    <p>
                      메가스터디는 고등에서 가장 압도적인 인기를 차지하고있는
                      학습사이트입니다. 학습사이트입니다. 학습사이트입니다.
                      학습사이트입니다.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="introduction-online__list-item">
                  <div class="introduction-online__list-item-img">
                    <img src="@img/logo-onlyone.png" alt="온니원 로고" />
                  </div>
                  <div class="introduction-online__list-item-text">
                    <div class="introduction-online__list-item-text-head">
                      <p>온니원</p>
                      <div class="c-badge c-badge-sm">기기지원</div>
                      <a href="">바로가기</a>
                    </div>
                    <p>
                      메가스터디는 고등에서 가장 압도적인 인기를 차지하고있는
                      학습사이트입니다. 학습사이트입니다. 학습사이트입니다.
                      학습사이트입니다.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="introduction-online__list-item">
                  <div class="introduction-online__list-item-img">
                    <img src="@img/logo-onlyone.png" alt="온니원 로고" />
                  </div>
                  <div class="introduction-online__list-item-text">
                    <div class="introduction-online__list-item-text-head">
                      <p>온니원</p>
                      <div class="c-badge c-badge-sm">기기지원</div>
                      <a href="">바로가기</a>
                    </div>
                    <p>
                      메가스터디는 고등에서 가장 압도적인 인기를 차지하고있는
                      학습사이트입니다. 학습사이트입니다. 학습사이트입니다.
                      학습사이트입니다.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="introduction-online__list-item">
                  <div class="introduction-online__list-item-img">
                    <img src="@img/logo-onlyone.png" alt="온니원 로고" />
                  </div>
                  <div class="introduction-online__list-item-text">
                    <div class="introduction-online__list-item-text-head">
                      <p>온니원</p>
                      <div class="c-badge c-badge-sm">기기지원</div>
                      <a href="">바로가기</a>
                    </div>
                    <p>
                      메가스터디는 고등에서 가장 압도적인 인기를 차지하고있는
                      학습사이트입니다. 학습사이트입니다. 학습사이트입니다.
                      학습사이트입니다.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="introduction__contents-title">비교과 학습사이트</div>
          <div class="introduction-online__list">
            <ul>
              <li>
                <div class="introduction-online__list-item">
                  <div class="introduction-online__list-item-img">
                    <img src="@img/logo-onlyone.png" alt="온니원 로고" />
                  </div>
                  <div class="introduction-online__list-item-text">
                    <div class="introduction-online__list-item-text-head">
                      <p>온니원</p>
                      <div class="c-badge c-badge-sm">기기지원</div>
                      <a href="">바로가기</a>
                    </div>
                    <p>
                      메가스터디는 고등에서 가장 압도적인 인기를 차지하고있는
                      학습사이트입니다. 학습사이트입니다. 학습사이트입니다.
                      학습사이트입니다.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="introduction-online__list-item">
                  <div class="introduction-online__list-item-img">
                    <img src="@img/logo-onlyone.png" alt="온니원 로고" />
                  </div>
                  <div class="introduction-online__list-item-text">
                    <div class="introduction-online__list-item-text-head">
                      <p>온니원</p>
                      <div class="c-badge c-badge-sm">기기지원</div>
                      <a href="">바로가기</a>
                    </div>
                    <p>
                      메가스터디는 고등에서 가장 압도적인 인기를 차지하고있는
                      학습사이트입니다. 학습사이트입니다. 학습사이트입니다.
                      학습사이트입니다.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="introduction-online__list-item">
                  <div class="introduction-online__list-item-img">
                    <img src="@img/logo-onlyone.png" alt="온니원 로고" />
                  </div>
                  <div class="introduction-online__list-item-text">
                    <div class="introduction-online__list-item-text-head">
                      <p>온니원</p>
                      <div class="c-badge c-badge-sm">기기지원</div>
                      <a href="">바로가기</a>
                    </div>
                    <p>
                      메가스터디는 고등에서 가장 압도적인 인기를 차지하고있는
                      학습사이트입니다. 학습사이트입니다. 학습사이트입니다.
                      학습사이트입니다.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="introduction-online__list-item">
                  <div class="introduction-online__list-item-img">
                    <img src="@img/logo-onlyone.png" alt="온니원 로고" />
                  </div>
                  <div class="introduction-online__list-item-text">
                    <div class="introduction-online__list-item-text-head">
                      <p>온니원</p>
                      <div class="c-badge c-badge-sm">기기지원</div>
                      <a href="">바로가기</a>
                    </div>
                    <p>
                      메가스터디는 고등에서 가장 압도적인 인기를 차지하고있는
                      학습사이트입니다. 학습사이트입니다. 학습사이트입니다.
                      학습사이트입니다.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div v-show="currentTab == 1" class="introduction-online__tab-contents">
          2
        </div>
        <div v-show="currentTab == 2" class="introduction-online__tab-contents">
          3
        </div>
      </div>
    </div>
  </div>
</template>
