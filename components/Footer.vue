<script setup>
const router = useRouter();

const d = reactive({
  website: "",
});
const goAgree = () => {
  router.push("/agree");
};

const goPrivacy = () => {
  router.push("/agree/privacy");
};

const selectedWebsite = () => {
  const openWindow = window.open(d.website, "_blank");
  openWindow.document.title = "새창 열기";
};
</script>

<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-head">
        <ul>
          <li>
            <a href="#" @click="goAgree" title="이용약관으로 이동">이용약관</a>
          </li>
          <li>
            <a href="#" @click="goPrivacy" title="개인정보처리방침으로 이동"
              >개인정보처리방침</a
            >
          </li>
        </ul>
        <ul>
          <li>
            <button
              onclick="window.open('http://pf.kakao.com/_yHfexj', '_blank')"
              style="color: #fff"
              title="새창 열림"
            >
              <img src="@img/ic-footer-kakao.png" alt="카카오채널 추가" />
              카카오채널추가
            </button>
          </li>
          <li>
            <button
              onclick="window.open('https://www.youtube.com/@slearn_official', '_blank')"
              style="color: #fff"
              title="새창 열림"
            >
              <img src="@img/ic-footer-youtube.png" alt="유튜브" />
              유튜브
            </button>
          </li>
        </ul>
      </div>
      <div class="footer-address">
        <div>
          <p>
            서울특별시청 (04514) 서울특별시 중구 서소문로 124,
            시티스퀘어(서소문2청사) 4층
          </p>
          <p>
            고객센터 : <strong>1533-0909</strong> (평일) 10:00~21:00 공휴일,주말
            제외 <span>|</span> 점심시간 12:0 ~13:00
          </p>
        </div>
        <a href=""
          ><img
            src="@img/pic-footer-banner.png"
            alt="중장년 인턴십 참여자 모집"
        /></a>
      </div>
      <div class="footer-copy">
        <p>Copyright@ 2023/ All Rights reserved</p>
        <select
          class="c-form-control"
          v-model="d.website"
          @change="selectedWebsite"
          title="Family Site 바로가기"
        >
          <option value="">Family Site</option>
          <option value="https://todo-one.com/">토도원</option>
          <option value="https://www.home-learn.co.kr">아이스크림홈런</option>
          <option value="http://junior.mbest.co.kr">엘리하이</option>
          <option value="http://www.milkt.co.kr">밀크티(초등)</option>
          <option value="http://mid.milkt.co.kr">밀크티(중학)</option>
          <option value="https://high.milkt.co.kr">밀크티(고등)</option>
          <option value="https://www.only1.co.kr">온리원</option>
          <option value="http://www.mbest.co.kr">엠베스트</option>
          <option value="https://www.etoos.com">이투스</option>
          <option value="http://www.megastudy.net">메가스터디</option>
          <option value="http://www.mimacstudy.com">대성마이맥</option>
          <option value="https://www.eduwill.net">에듀윌</option>
          <option value="https://champ.hackers.com">해커스</option>
          <option value="https://www.welaaa.com">윌라</option>
          <option value="https://sll.seoul.go.kr">평생학습포털</option>
        </select>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
  background-color: #222;
  &-inner {
    width: 120rem;
    margin: 0 auto;
    padding: 4rem 0 3rem;
    color: #999;
    font-size: 1.6rem;
    @include tablet {
      width: auto;
      padding: 6rem 2.4rem;
    }
    @include mobile {
      padding: 6rem 1.6rem;
    }
  }
  &-head {
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
    font-size: 1.6rem;
    ul {
      display: flex;
      align-items: center;
      line-height: 1;
      li {
        display: flex;
        align-items: center;
        img {
          margin-right: 0.8rem;
        }
      }
      li + li {
        margin-left: 4rem;
      }
      &:first-child {
        font-size: 1.9rem;
      }
    }
    @include mobile {
      ul {
        li {
          font-size: 1.4rem;
          letter-spacing: -0.5px;
          img {
            max-width: 2rem;
            margin-right: 0.4rem;
          }
        }
        li + li {
          margin-left: 1rem;
        }
      }
    }
  }
  &-address {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3.8rem;
    span {
      padding: 0 1.2rem;
    }
    p + p {
      margin-top: 0.8rem;
    }
    @include mobile {
      margin-bottom: 3rem;
      font-size: 1.4rem;
      span {
        padding: 0 0.2rem;
      }
    }
    img {
      width: 32rem;
    }
  }
  &-copy {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 2rem;
    border-top: 0.1rem solid #474747;
    line-height: 1;
    p {
      white-space: nowrap;
    }
    select {
      &.c-form-control {
        width: 11.5rem;
        height: 3rem;
        border-radius: 0;
        flex-grow: unset;
        background-color: transparent;
        border: 0;
        padding: 0 3rem 0 0.5rem;
        font-size: 1.5rem;
        font-weight: 600;
        color: $white;
        background: url(@img/ic-footer-arrow.svg) no-repeat right center;
      }
      option {
        background-color: #222;
      }
    }
    @include mobile {
      padding-top: 3rem;
      align-items: flex-start;
      flex-direction: column;
      select.c-form-control {
        margin-top: 1.6rem;
      }
    }
  }
}
</style>
