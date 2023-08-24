<script setup>
const router = useRouter();
</script>
<template>
  <div class="main__contents-head">
    <div class="main__contents-title">
      서울런을<br class="c-pc" /><br class="c-mo" />
      이용하고 싶어요!
    </div>
    <p class="main__contents-text">유명 온라인강의를 무료로 만나보세요</p>
  </div>
  <div class="main__contents-body">
    <div class="main__join-wrap">
      <div class="c-flex">
        <div class="c-box">
          <div class="main__join-title">
            온라인으로<br />
            자격대상 바로 확인하세요
          </div>
          <div class="main__join-img">
            <p>
              간편하게<br class="c-mo" />
              확인해보세요
            </p>
            <img
              src="@img/ch-main-join-img1.png"
              alt="자격대상 간편확인 인물 이미지"
            />
          </div>
          <div class="main__join-search">
            <div class="main__join-search--text">
              이름과 주민등록 번호 입력 후 확인!
            </div>
            <button
              class="c-btn c-btn-lg c-btn-danger"
              @click="router.push('/introduction?section=0')"
            >
              바로가기
              <i class="ico ico-hand">바로가기 이미지</i>
            </button>
          </div>
        </div>
        <div class="c-box">
          <div class="main__join-title">
            서류 제출로도<br />
            추가대상 확인 가능해요
          </div>
          <div class="main__join-img">
            <p>
              특별 지원대상도<br class="c-mo" />
              있어요
            </p>
            <img src="@img/ch-main-join-img2.png" alt="서류 제출 인물 이미지" />
          </div>
          <div class="main__join-btn c-btn-group">
            <button
              class="c-btn c-btn-lg c-btn-radius c-btn-outline--sky"
              @click="router.push('/introduction?section=0')"
            >
              대상별 증빙서류 확인
            </button>
            <button
              class="c-btn c-btn-lg c-btn-radius c-btn-outline--sky"
              @click="router.push('/introduction?section=0')"
            >
              회원가입 방법 알아보기
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
