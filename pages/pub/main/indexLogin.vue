<script setup>
definePageMeta({
  layout: "main",
});
</script>
<script>
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";

import swiperNav from "./swiperNav";
import swiperItem1 from "./swiperItem1";
import swiperItem2 from "./swiperItem2";
import swiperItem3 from "./swiperItem3";
import swiperItem4 from "./swiperItem4";
import swiperItem5 from "./swiperItem5";
import swiperItem6 from "./swiperItem6";

export default {
  name: "Main",
  props: {
    isMobile: {
      type: Boolean,
      required: !0,
    },
    openMenu: {
      type: Function,
      required: !0,
    },
    closeMenu: {
      type: Function,
      required: !0,
    },
  },
  data() {
    return {
      currentTab: 0,
      tabList: ["세대별 인기 콘텐츠", "체험형 콘텐츠", "도움이 되는 정보"],
      banner01: false,
      banner02: false,
      banner03: true,
      banner04: false,
    };
  },
  mounted() {
    //tab
    const tabs = document.querySelectorAll(".new-main-tab a");
    const tabContents = document.querySelectorAll(".tab-contents");
    const tabHeight = document.querySelector(".new-main-tab").clientHeight;

    // Function to add 'active' class to the clicked tab and scroll to the corresponding content
    function setActiveTab(event) {
      event.preventDefault();
      const targetTab = event.target;
      const targetContentId = targetTab.getAttribute("href");
      const targetContent = document.querySelector(targetContentId);
      const targetOffset = targetContent.getBoundingClientRect().top;

      // Remove 'active' class from all tabs
      tabs.forEach((tab) => tab.classList.remove("active"));

      // Add 'active' class to the clicked tab
      targetTab.classList.add("active");

      // Scroll to the content and subtract the tabHeight from the scroll position
      window.scrollBy({
        top: targetOffset - tabHeight,
        behavior: "smooth",
      });
    }

    // Attach click event listener to each tab
    tabs.forEach((tab) => tab.addEventListener("click", setActiveTab));

    // Function to set active tab when scrolling
    function setActiveTabOnScroll() {
      const scrollPosition = window.scrollY + tabHeight;

      tabContents.forEach((tabContent) => {
        const contentTop =
          tabContent.getBoundingClientRect().top + window.scrollY;

        if (contentTop <= scrollPosition + 5) {
          // Remove 'active' class from all tabs
          tabs.forEach((tab) => tab.classList.remove("active"));

          // Add 'active' class to the corresponding tab
          const targetTab = document.querySelector(
            `.new-main-tab a[href="#${tabContent.id}"]`
          );
          if (targetTab) {
            targetTab.classList.add("active");
          }
        }
      });
    }

    // Attach scroll event listener
    window.addEventListener("scroll", setActiveTabOnScroll);

    const htmlElement = document.querySelector("html");

    setTimeout(() => {
      if (htmlElement.classList.contains("__w1024")) {
      } else {
        //const locomotiveScroll = new LocomotiveScroll();
        console.log("pc");
        AOS.init();

        var listindex = 0;

        gsap.registerPlugin(ScrollTrigger);
        this.setList();
        ScrollTrigger.create({
          trigger: ".new-main-ls",
          start: "-45%",
          end: "+=80%",
          //markers: true,
          onEnter: () => {
            if (listindex === 0) {
              this.setList();
              listindex = 1;
              setTimeout(() => {
                gsap.to(".new-main-ls__list .new-main-ls__item .item", {
                  left: 0,
                  top: 0,
                  ease: "none",
                  delay: 0.2,
                });
              }, 2000);
            }
          },
        });
      }
    }, 100);
  },
  methods: {
    setList: function () {
      gsap.fromTo(
        ".new-main-ls__list .new-main-ls__item",
        {
          left: 0,
          top: -1500,
        },
        {
          left: 0,
          top: 0,
          ease: "Bounce.easeOut(0.1, 0.7)",
          duration: 2.5,
          stagger: 0.05,
          delay: 0.1,
        }
      ),
        gsap.set(
          ".new-main-ls__list .new-main-ls__item:nth-child(n+0):nth-child(-n+6) .item",
          {
            left: "random(-50, 80, true)",
            top: "random(-50, -100, true)",
          }
        ),
        gsap.set(
          ".new-main-ls__list .new-main-ls__item:nth-child(n+7):nth-child(-n+12) .item",
          {
            left: "random(-90, 110, true)",
            top: "random(-60, -120, true)",
          }
        ),
        gsap.set(
          ".new-main-ls__list .new-main-ls__item:nth-child(n+13):nth-child(-n+18) .item",
          {
            left: "random(-120, 160, true)",
            top: "random(-150, -50, true)",
          }
        );
    },
  },
};
</script>

<template>
  <div class="new-main">
    <div class="new-main-kv" id="Main">
      <div class="new-main__inner">
        <swiperItem1 />
      </div>
    </div>
    <div class="new-main-tab">
      <div class="new-main__inner">
        <swiperNav />
      </div>
    </div>
    <div class="tab-contents new-main-intro" id="intro">
      <div
        class="new-main__inner"
        data-scroll
        data-scroll-speed="0.1"
        data-aos="fade-up"
      >
        <div class="new-main-intro-swiper">
          <swiperItem2 />
        </div>
        <div
          class="new-main-intro-login"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="new-main-intro-myInfo">
            <div class="new-main-intro-myInfo__profile">
              <div class="c-profile">
                <img src="@img/@temp/1.jpg" alt="" />
              </div>
              <button class="c-btn c-btn-modify">
                <i class="ico ico-modify"></i>수정
              </button>
            </div>
            <div class="c-text-title-lg c-text-center">
              <strong>김서울</strong>님, 만나서 반가워요
            </div>
            <div class="new-main-intro-myInfo__info">
              <ul class="c-flex">
                <li>
                  <span>이벤트</span>
                  <a href=""><strong>9</strong></a>
                </li>
                <li>
                  <span>쿠폰</span>
                  <a href=""><strong>1</strong></a>
                </li>
                <li>
                  <span>알림</span>
                  <a href=""><strong>28</strong></a>
                </li>
              </ul>
            </div>
            <div class="new-main-intro-myInfo__link">
              <div class="c-text-title-md c-text-center">
                나의 학습 바로가기
              </div>
              <ul class="new-main-intro-myInfo__site">
                <li>
                  <p>
                    <img src="@img/logo-report-mega.png" alt="mega" />
                  </p>
                  <a href="#;" class="c-btn-link">
                    바로가기
                    <i class="ico ico-arrow"></i>
                  </a>
                </li>
                <li>
                  <p>
                    <img src="@img/logo-report-eduwill.png" alt="eduwill" />
                  </p>
                  <a href="#;" class="c-btn-link">
                    바로가기
                    <i class="ico ico-arrow"></i>
                  </a>
                </li>
                <li>
                  <p>
                    <img src="@img/logo-report-mbest.png" alt="mbest" />
                  </p>
                  <a href="#;" class="c-btn-link">
                    바로가기
                    <i class="ico ico-arrow"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="new-main-intro-myInfo">
            <div class="new-main-intro-myInfo__profile">
              <div class="c-profile">
                <img src="@img/@temp/1.jpg" alt="" />
              </div>
              <button class="c-btn c-btn-modify">
                <i class="ico ico-modify"></i>수정
              </button>
            </div>
            <div class="c-text-title-lg c-text-center">
              <strong>김서울</strong>님, 만나서 반가워요
            </div>
            <div class="new-main-intro-myInfo__info">
              <ul class="c-flex">
                <li>
                  <span>이벤트</span>
                  <a href=""><strong>9</strong></a>
                </li>
                <li>
                  <span>쿠폰</span>
                  <a href=""><strong>1</strong></a>
                </li>
                <li>
                  <span>알림</span>
                  <a href=""><strong>28</strong></a>
                </li>
              </ul>
            </div>
            <div class="new-main-intro-myInfo__link">
              <div class="c-text-title-md c-text-center">
                나의 학습 바로가기
              </div>
              <ul class="new-main-intro-myInfo__site">
                <li>
                  <p>
                    <img src="@img/logo-report-mega.png" alt="mega" />
                  </p>
                  <a href="#;" class="c-btn-link">
                    바로가기
                    <i class="ico ico-arrow"></i>
                  </a>
                </li>
                <li>
                  <p>
                    <img src="@img/logo-report-eduwill.png" alt="eduwill" />
                  </p>
                  <a href="#;" class="c-btn-link">
                    바로가기
                    <i class="ico ico-arrow"></i>
                  </a>
                </li>
                <li>
                  <div class="new-main-intro-myInfo__text">
                    <span>수강 중 학습</span>
                    <a href=""><strong>36</strong></a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="new-main-intro-myInfo">
            <div class="new-main-intro-myInfo__profile">
              <div class="c-profile">
                <img src="@img/@temp/1.jpg" alt="" />
              </div>
              <button class="c-btn c-btn-modify">
                <i class="ico ico-modify"></i>수정
              </button>
            </div>
            <div class="c-text-title-lg c-text-center">
              <strong>김서울</strong>님, 만나서 반가워요
            </div>
            <div class="new-main-intro-myInfo__info">
              <ul class="c-flex">
                <li>
                  <span>이벤트</span>
                  <a href=""><strong>9</strong></a>
                </li>
                <li>
                  <span>쿠폰</span>
                  <a href=""><strong>1</strong></a>
                </li>
                <li>
                  <span>알림</span>
                  <a href=""><strong>28</strong></a>
                </li>
              </ul>
            </div>
            <div class="new-main-intro-myInfo__link">
              <div class="c-text-title-md c-text-center">
                나의 학습 바로가기
              </div>
              <ul class="new-main-intro-myInfo__site">
                <li>
                  <p>
                    <img src="@img/logo-report-mega.png" alt="mega" />
                  </p>
                  <a href="#;" class="c-btn-link">
                    바로가기
                    <i class="ico ico-arrow"></i>
                  </a>
                </li>
                <li>
                  <div class="new-main-intro-myInfo__text c-flex">
                    <span>수강 중 학습</span>
                    <a href=""><strong>36</strong></a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="new-main-intro-myInfo">
            <div class="new-main-intro-myInfo__profile">
              <div class="c-profile">
                <img src="@img/@temp/1.jpg" alt="" />
              </div>
              <button class="c-btn c-btn-modify">
                <i class="ico ico-modify"></i>수정
              </button>
            </div>
            <div class="c-text-title-lg c-text-center">
              <strong>김서울</strong>님, 만나서 반가워요
            </div>
            <div class="new-main-intro-myInfo__info">
              <ul class="c-flex">
                <li>
                  <span>이벤트</span>
                  <a href=""><strong>9</strong></a>
                </li>
                <li>
                  <span>쿠폰</span>
                  <a href=""><strong>1</strong></a>
                </li>
                <li>
                  <span>알림</span>
                  <a href=""><strong>28</strong></a>
                </li>
              </ul>
            </div>
            <div class="new-main-intro-myInfo__link">
              <div class="c-text-title-md c-text-center">
                나의 학습 바로가기
              </div>
              <ul class="new-main-intro-myInfo__site">
                <li>
                  <div class="new-main-intro-myInfo__text">
                    <span>4주차 멘토링</span>
                    <strong>2023.06.28</strong>
                  </div>
                </li>
                <li>
                  <div class="new-main-intro-myInfo__text">
                    <span>멘토교육</span>
                    <a href=""><strong>6</strong></a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="new-main-intro-myInfo">
            <div class="new-main-intro-myInfo__profile">
              <div class="c-profile">
                <img src="@img/@temp/1.jpg" alt="" />
              </div>
              <button class="c-btn c-btn-modify">
                <i class="ico ico-modify"></i>수정
              </button>
            </div>
            <div class="c-text-title-lg c-text-center">
              <strong>김서울</strong>님, 만나서 반가워요
            </div>
            <div class="new-main-intro-myInfo__info">
              <ul class="c-flex">
                <li>
                  <span>이벤트</span>
                  <a href=""><strong>9</strong></a>
                </li>
                <li>
                  <span>쿠폰</span>
                  <a href=""><strong>1</strong></a>
                </li>
                <li>
                  <span>알림</span>
                  <a href=""><strong>28</strong></a>
                </li>
              </ul>
            </div>
            <div class="new-main-intro-myInfo__link">
              <div class="c-text-title-md c-text-center">
                나의 학습 바로가기
              </div>
              <ul class="new-main-intro-myInfo__site">
                <li>
                  <div class="new-main-intro-myInfo__text">
                    <span>멘토링 매칭 중 입니다</span>
                  </div>
                </li>
                <li>
                  <div class="new-main-intro-myInfo__text">
                    <span>멘토교육</span>
                    <a href=""><strong>6</strong></a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="new-main-intro-myInfo">
            <div class="new-main-intro-myInfo__profile">
              <div class="c-profile">
                <img src="@img/@temp/1.jpg" alt="" />
              </div>
              <button class="c-btn c-btn-modify">
                <i class="ico ico-modify"></i>수정
              </button>
            </div>
            <div class="c-text-title-lg c-text-center">
              <strong>김서울</strong>님, 만나서 반가워요
            </div>
            <div class="new-main-intro-myInfo__info">
              <ul class="c-flex">
                <li>
                  <span>이벤트</span>
                  <a href=""><strong>9</strong></a>
                </li>
                <li>
                  <span>쿠폰</span>
                  <a href=""><strong>1</strong></a>
                </li>
                <li>
                  <span>알림</span>
                  <a href=""><strong>28</strong></a>
                </li>
              </ul>
            </div>
            <div class="new-main-intro-myInfo__link">
              <ul class="new-main-intro-myInfo__link-list">
                <li>
                  <a href="">
                    수강 이력을 확인해보세요<i class="ico ico-arrow"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    멘토링 이력을 확인해보세요<i class="ico ico-arrow"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-contents new-main-story" id="Story">
      <div class="new-main__inner">
        <div
          class="new-main-title"
          data-scroll
          data-scroll-speed="0.1"
          data-aos="fade-up"
        >
          <h3>
            꿈이 현실이 된 이야기,<br />
            서울런 이야기를 들려드립니다!
          </h3>
          <p>서울런 선배들의 꿈을 이룬 이야기를 만나보세요!</p>
          <a href="" class="new-main-button">서울런이야기 더보기</a>
        </div>
        <div
          class="new-main-story__banner"
          data-scroll
          data-scroll-speed="0.2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div
            class="new-main-story__banner-item"
            tabindex="0"
            :class="{ active: banner01 === true }"
            @focus="
              (banner01 = true),
                (banner02 = false),
                (banner03 = false),
                (banner04 = false)
            "
            @mouseover="
              (banner01 = true),
                (banner02 = false),
                (banner03 = false),
                (banner04 = false)
            "
          >
            <div class="new-main-story__banner-video">
              <img src="@img/@temp/3.jpg" alt="비디오&유튜브" />
            </div>
            <div class="new-main-story__banner-cont">
              <a href="">
                <span class="c-badge c-badge-lg c-badge-danger">Shorts</span>
                <div class="c-text-title-lg">진로설계 상담 후기 영상</div>
                <p>
                  기말고사 D-30, 서울런 멘토와 함께 준비하는 시험기간 스터디
                  카페, 도서관, 고등학생, 스터디 브이로그, 학교, 일상
                </p>
              </a>
            </div>
          </div>
          <div
            class="new-main-story__banner-item"
            tabindex="0"
            :class="{ active: banner02 === true }"
            @focus="
              (banner02 = true),
                (banner01 = false),
                (banner03 = false),
                (banner04 = false)
            "
            @mouseover="
              (banner02 = true),
                (banner01 = false),
                (banner03 = false),
                (banner04 = false)
            "
          >
            <div class="new-main-story__banner-video">
              <img src="@img/@temp/3.jpg" alt="비디오&유튜브" />
            </div>
            <div class="new-main-story__banner-cont">
              <a href="">
                <span class="c-badge c-badge-lg c-badge-danger">Youtube</span>
                <div class="c-text-title-lg">전교 1등 플래너 쓰는 팁</div>
                <p>
                  기말고사 D-30, 서울런 멘토와 함께 준비하는 시험기간 스터디
                  카페, 도서관, 고등학생, 스터디 브이로그, 학교, 일상
                </p>
              </a>
            </div>
          </div>
          <div
            class="new-main-story__banner-item"
            tabindex="0"
            :class="{ active: banner03 === true }"
            @focus="
              (banner03 = true),
                (banner01 = false),
                (banner02 = false),
                (banner04 = false)
            "
            @mouseover="
              (banner03 = true),
                (banner01 = false),
                (banner02 = false),
                (banner04 = false)
            "
          >
            <div class="new-main-story__banner-video">
              <img src="@img/@temp/3.jpg" alt="비디오&유튜브" />
            </div>
            <div class="new-main-story__banner-cont">
              <a href="">
                <span class="c-badge c-badge-lg c-badge-danger">Youtube</span>
                <div class="c-text-title-lg">
                  고3 서울런으로 기말고사 준비하는 Vlog
                </div>
                <p>
                  기말고사 D-30, 서울런 멘토와 함께 준비하는 시험기간 스터디
                  카페, 도서관, 고등학생, 스터디 브이로그, 학교, 일상
                </p>
              </a>
            </div>
          </div>
          <div
            class="new-main-story__banner-item"
            tabindex="0"
            :class="{ active: banner04 === true }"
            @focus="
              (banner04 = true),
                (banner01 = false),
                (banner02 = false),
                (banner03 = false)
            "
            @mouseover="
              (banner04 = true),
                (banner01 = false),
                (banner02 = false),
                (banner03 = false)
            "
          >
            <div class="new-main-story__banner-video">
              <img src="@img/@temp/3.jpg" alt="비디오&유튜브" />
            </div>
            <div class="new-main-story__banner-cont">
              <a href="">
                <span class="c-badge c-badge-lg c-badge-danger">꿈이야기</span>
                <div class="c-text-title-lg">23학년 서울대 합격 스토리</div>
                <p>
                  기말고사 D-30, 서울런 멘토와 함께 준비하는 시험기간 스터디
                  카페, 도서관, 고등학생, 스터디 브이로그, 학교, 일상
                </p>
              </a>
            </div>
          </div>
        </div>
        <div
          class="new-main-story-swiper"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <swiperItem3 />
        </div>
      </div>
    </div>
    <div class="tab-contents new-main-ai" id="AI">
      <div class="new-main__inner">
        <div
          class="new-main-title"
          data-scroll
          data-scroll-speed="0.1"
          data-aos="fade-up"
        >
          <h3>
            똑똑하게 알려주는<br class="c-mo" />
            맞춤 학습 추천
          </h3>
          <p>
            관심사와 학습패턴을 고려한<br class="c-mo" />
            서울런 맞춤추천으로<br class="c-mo" />
            더욱 특별한 경험을 즐겨보세요.
          </p>
          <a href="" class="new-main-button">나에게 맞는 콘텐츠 추천</a>
        </div>
        <div
          data-scroll
          data-scroll-speed="0.2"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div class="new-main-ai__tab">
            <ul>
              <li
                v-for="(tab, index) in tabList"
                :key="index"
                :class="{ active: currentTab === index }"
              >
                <a href="" @click.prevent="currentTab = index">{{ tab }}</a>
              </li>
            </ul>
          </div>

          <div
            class="new-main-ai__tab-contents"
            :class="{ active: currentTab === 0 }"
          >
            <div class="new-main-ai-swiper">
              <swiperItem4 />
            </div>
          </div>
          <div
            class="new-main-ai__tab-contents"
            :class="{ active: currentTab === 1 }"
          >
            <div class="new-main-ai-swiper">
              <swiperItem4 />
            </div>
          </div>
          <div
            class="new-main-ai__tab-contents"
            :class="{ active: currentTab === 2 }"
          >
            <div class="new-main-ai-swiper">
              <swiperItem4 />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-contents new-main-mentoring" id="Mentoring">
      <div class="new-main__inner">
        <div
          class="new-main-title"
          data-scroll
          data-scroll-speed="0.1"
          data-aos="fade-up"
        >
          <h3>
            혼자하기 어려운 공부<br />
            멘토와 멘티가<br class="c-mo" />
            함께 만들어 갑니다
          </h3>
          <p>
            서울에 재학중인 멘토와 매칭되어<br class="c-mo" />
            학습계획부터 관리까지 모두 함께 합니다.
          </p>
          <a href="" class="new-main-button">멘토링 더보기</a>
        </div>
        <div
          class="c-card--inline c-card--inline-col2"
          data-scroll
          data-scroll-speed="0.2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="c-card c-card--border">
            <div class="c-text-title-md c-text-center">나의 멘티 현황</div>
            <div class="c-box-scroll" tabindex="0">
              <dl class="new-main-mentoring__info">
                <dt><strong>김태희님</strong></dt>
                <dd>15주차 멘토링</dd>
              </dl>
              <dl class="new-main-mentoring__info">
                <dt><strong>홍길동님</strong></dt>
                <dd>3주차 멘토링</dd>
              </dl>
              <dl class="new-main-mentoring__info">
                <dt><strong>나영희님</strong></dt>
                <dd>8주차 멘토링</dd>
              </dl>
              <dl class="new-main-mentoring__info">
                <dt><strong>김태희님</strong></dt>
                <dd>15주차 멘토링</dd>
              </dl>
            </div>
          </div>
          <div class="c-card c-card--blue">
            <span class="c-badge c-badge-lg c-badge-black">Today</span>
            <div class="c-text-title-md c-text-center">3주차 계획서</div>
            <div class="new-main-mentoring__plan">
              <dl>
                <dt>강의 예정시간</dt>
                <dd><strong>2023.06.26 09:30</strong></dd>
              </dl>
              <dl>
                <dt>남은 시간</dt>
                <dd><strong class="c-text-primary">1day</strong></dd>
              </dl>
            </div>
            <a href="" class="c-btn-link c-text-white">
              멘토링 관리 바로가기 >
            </a>
          </div>
        </div>
        <div
          class="c-card--inline c-card--inline-col2"
          data-scroll
          data-scroll-speed="0.2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="c-card c-card--border">
            <div class="c-card--title c-flex">
              <div class="c-text-title-sm">
                <span class="c-badge c-badge-primary">온라인</span>
                멘토링 4주차
              </div>
              <p>멘토님이 추천한 강의가 도착했어요!</p>
            </div>
            <div class="new-main-mentoring__swiper">
              <swiperItem5 />
            </div>
          </div>
          <div class="c-card c-card--blue">
            <span class="c-badge c-badge-lg c-badge-black">Today</span>
            <div class="c-text-title-md c-text-center">3주차 계획서</div>
            <div class="new-main-mentoring__plan">
              <dl>
                <dt>강의 예정시간</dt>
                <dd><strong>2023.06.26 09:30</strong></dd>
              </dl>
              <dl>
                <dt>남은 시간</dt>
                <dd><strong class="c-text-primary">1day</strong></dd>
              </dl>
            </div>
            <a href="" class="c-btn-link c-text-white">
              멘토링 관리 바로가기 >
            </a>
          </div>
        </div>
        <div
          class="c-card--inline c-card--inline-col2"
          data-scroll
          data-scroll-speed="0.2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="c-card c-card--border">
            <div class="c-card--title c-flex">
              <div class="c-text-title-sm">
                <span class="c-badge c-badge-primary">온라인</span>
                멘토링 4주차
              </div>
            </div>
            <div class="c-nodata">
              <p>강의 추천 대기중이예요.</p>
            </div>
          </div>
          <div class="c-card c-card--blue">
            <span class="c-badge c-badge-lg c-badge-black">Today</span>
            <div class="c-text-title-md c-text-center">3주차 계획서</div>
            <div class="new-main-mentoring__plan">
              <dl>
                <dt>강의 예정시간</dt>
                <dd><strong>2023.06.26 09:30</strong></dd>
              </dl>
              <dl>
                <dt>남은 시간</dt>
                <dd><strong class="c-text-primary">1day</strong></dd>
              </dl>
            </div>
            <a href="" class="c-btn-link c-text-white">
              멘토링 관리 바로가기 >
            </a>
          </div>
        </div>
        <div
          class="c-card--inline c-card--inline-col1"
          data-scroll
          data-scroll-speed="0.2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="c-card c-card--border">
            <div class="c-card--nodata">
              <img
                src="@img/main/pic-main-mentoring-no-data.svg"
                alt="이미지"
              />
              <div class="c-text-title-lg">
                나와 잘 맞는 멘토링<br class="c-mo" />
                자동 매칭 중입니다.
              </div>
              <p>
                조금만 기다려 주시면<br class="c-mo" />
                가장 잘 맞는 멘토, 멘티를<br class="c-mo" />
                매칭 시켜드릴게요.
              </p>
              <a href="" class="c-btn-link">멘토링 관리 바로가기 ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-contents new-main-consulting" id="Consulting">
      <div class="new-main__inner">
        <div
          class="new-main-title"
          data-scroll
          data-scroll-speed="0.1"
          data-aos="fade-up"
        >
          <h3>
            꿈을 진단하고<br class="c-mo" />
            설계해 보세요
          </h3>
          <p>
            목표를 정할 때 학습이 더욱 즐거울 수 있습니다.<br />
            전문 상담선생님께<br class="c-mo" />
            상담을 받을 수 있도록 준비했습니다.
          </p>
          <a href="" class="new-main-button">진로·진학 상담 신청</a>
        </div>
        <div
          class="new-main-consulting__tag"
          data-scroll
          data-scroll-speed="0.2"
        >
          <div class="new-main-consulting__img" data-aos="fade-up">
            <img src="@img/main/pic-main-consulting-img.svg" alt="이미지" />
          </div>
          <div class="new-main-consulting__tag-item" data-aos="fade-left">
            <span class="c-tag tag1"># MBTI</span>
            <span class="c-tag c-tag--blue tag2"># 1:1 분석</span>
            <span class="c-tag c-tag--blue tag3"># 흥미</span>
            <span class="c-tag c-tag--blue tag4"># 고등</span>
            <span class="c-tag tag5"># 적성검사</span>
            <span class="c-tag tag6"># 컨설팅</span>
          </div>
          <div
            class="new-main-consulting__tag-item"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <span class="c-tag c-tag--blue tag7"># 학부모</span>
            <span class="c-tag tag8">#맞춤형</span>
            <span class="c-tag c-tag--blue tag9">#지원전략</span>
            <span class="c-tag tag10"># 수능</span>
            <span class="c-tag c-tag--blue tag11"># 입시컨설팅</span>
            <span class="c-tag tag12"># 특별전형</span>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-contents new-main-ls" id="LearningSupport">
      <div class="new-main__inner">
        <div
          class="new-main-title"
          data-scroll
          data-scroll-speed="0.1"
          data-aos="fade-up"
        >
          <h3>
            유명 온라인 강의,<br class="c-mo" />
            모두 준비했어요
          </h3>
          <p>
            초등학습부터 고등 교육까지<br class="c-mo" />
            다양한 온라인 학습을 맞춤 제공합니다.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <div class="new-main-ls__list" data-scroll data-scroll-speed="0.2">
            <div class="new-main-ls__item">
              <div class="item">
                <img src="@img/main/cp/milkte.svg" alt="이미지" />
              </div>
            </div>
            <div class="new-main-ls__item">
              <div class="item">
                <img src="@img/main/cp/iscream.svg" alt="이미지" />
              </div>
            </div>
            <div class="new-main-ls__item">
              <div class="item">
                <img src="@img/main/cp/mbest.svg" alt="이미지" />
              </div>
            </div>
            <div class="new-main-ls__item">
              <div class="item">
                <img src="@img/main/cp/etoos.svg" alt="이미지" />
              </div>
            </div>
            <div class="new-main-ls__item">
              <div class="item">
                <img src="@img/main/cp/eduwill.svg" alt="이미지" />
              </div>
            </div>
            <div class="new-main-ls__item">
              <div class="item">
                <img src="@img/main/cp/mega.svg" alt="이미지" />
              </div>
            </div>
            <div class="new-main-ls__item">
              <div class="item">
                <img src="@img/main/cp/elihigh.svg" alt="이미지" />
              </div>
            </div>
            <div class="new-main-ls__item">
              <div class="item">
                <img src="@img/main/cp/mimacstudy.svg" alt="이미지" />
              </div>
            </div>
            <div class="new-main-ls__item">
              <div class="item">
                <img src="@img/main/cp/todoone.svg" alt="이미지" />
              </div>
            </div>
            <div class="new-main-ls__item">
              <div class="item">
                <img src="@img/main/cp/milktm.svg" alt="이미지" />
              </div>
            </div>
            <div class="new-main-ls__item">
              <div class="item">
                <img src="@img/main/cp/only.svg" alt="이미지" />
              </div>
            </div>
            <div class="new-main-ls__item">
              <div class="item">
                <img src="@img/main/cp/hackers.svg" alt="이미지" />
              </div>
            </div>
            <div class="new-main-ls__item">
              <div class="item">
                <img src="@img/main/cp/Welaaa.svg" alt="이미지" />
              </div>
            </div>
            <div class="new-main-ls__item">
              <div class="item">
                <img src="@img/main/cp/milkth.svg" alt="이미지" />
              </div>
            </div>
            <div class="new-main-ls__item">
              <div class="item">
                <img src="@img/main/cp/eduwill.svg" alt="이미지" />
                <strong>검정고시</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-contents new-main-join" id="Join">
      <div class="new-main__inner">
        <div
          class="new-main-title"
          data-scroll
          data-scroll-speed="0.1"
          data-aos="fade-up"
        >
          <h3>
            서울런을<br />
            이용하고 싶어요
          </h3>
          <p>
            지원 대상자인지 알아보세요.<br />
            제출 서류가 필요할 수도 있어요.
          </p>
          <a href="" class="new-main-button">회원가입 방법 알아보기</a>
        </div>
        <div
          class="new-main-join__swiper"
          data-scroll
          data-scroll-speed="0.2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <swiperItem6 />
          <div class="c-mo">
            <a href="" class="new-main-join__swiper-item">
              <div class="new-main-join__swiper-item--title">
                <div class="c-text-title-lg">
                  온라인으로<br />
                  확인해 보세요
                </div>
                <p>
                  학습지원 대상자 여부를<br />
                  확인하실 수 있어요.
                </p>
              </div>
              <div class="new-main-join__swiper-item--img">
                <img src="@img/main/pic-main-join-img01.svg" alt="이미지" />
              </div>
            </a>
            <a href="" class="new-main-join__swiper-item">
              <div class="new-main-join__swiper-item--title">
                <div class="c-text-title-lg">
                  서류 제출하여<br />
                  지원 받을 수도 있어요
                </div>
                <p>
                  특별 지원대상자에게 필요한<br />
                  대상별 증빙서류를 확인해 보세요.
                </p>
              </div>
              <div class="new-main-join__swiper-item--img">
                <img src="@img/main/pic-main-join-img02.svg" alt="이미지" />
              </div>
            </a>
            <a href="" class="new-main-join__swiper-item">
              <div class="new-main-join__swiper-item--title">
                <div class="c-text-title-lg">
                  회원가입 방법을<br />
                  자세히 알려 드려요
                </div>
                <p>
                  회원가입 방법이 궁금하세요?<br />
                  서울런이 쉽게 알려드릴게요.
                </p>
              </div>
              <div class="new-main-join__swiper-item--img">
                <img src="@img/main/pic-main-join-img03.svg" alt="이미지" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-contents new-main-sc" id="SupportCenter">
      <div class="new-main__inner">
        <a
          href=""
          class="new-main-sc__item"
          data-scroll
          data-scroll-speed="0.1"
          data-aos="fade-up"
        >
          <strong>멘토 회원가입</strong>
          <img src="@img/main/SupportCenter01.svg" alt="멘토 회원가입 이미지" />
          <p>
            멘토 합격자만<br class="c-pc" /><br class="c-mo" />
            가입 가능합니다
          </p>
        </a>
        <a
          href=""
          class="new-main-sc__item"
          data-scroll
          data-scroll-speed="0.12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <strong>서울런 프렌즈</strong>
          <img src="@img/main/SupportCenter02.svg" alt="서울런 프렌즈 이미지" />
          <p>
            우리는 서울런!<br class="c-pc" /><br class="c-mo" />
            서울런과 함께해요!
          </p>
        </a>
        <a
          href=""
          class="new-main-sc__item"
          data-scroll
          data-scroll-speed="0.14"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <strong>서울런 인스타</strong>
          <img src="@img/main/SupportCenter03.svg" alt="서울런 인스타 이미지" />
          <p>
            공부하고 싶은<br />
            학생들을 응원합니다
          </p>
        </a>
        <a
          href=""
          class="new-main-sc__item"
          data-scroll
          data-scroll-speed="0.16"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <strong>서울런 유튜브</strong>
          <img src="@img/main/SupportCenter04.svg" alt="서울런 유튜브 이미지" />
          <p>
            공부하고 싶은<br />
            학생들 모여라
          </p>
        </a>
        <a
          href=""
          class="new-main-sc__item"
          data-scroll
          data-scroll-speed="0.18"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <strong>메타버스</strong>
          <img src="@img/main/SupportCenter05.svg" alt="메타버스 이미지" />
          <p>
            3차원 가상세계<br />
            메타버스 플랫폼
          </p>
        </a>
      </div>
    </div>
    <div class="new-main-info">
      <div class="new-main__inner" data-scroll data-scroll-speed="0.1">
        <div class="new-main-info-customer" data-aos="fade-up">
          <dl>
            <dt>
              <strong>학습지원센터</strong>
              1533-0909
            </dt>
            <dd>
              <p>
                운영시간 (평일) 10:00 ~ 21:00
                <span>(점심시간 12:00 ~ 13:00, 공휴일/주말 제외)</span>
              </p>
              <a href="">카카오톡 채널</a>
              <a class="c-mo" href="tel:1533-0909">1533-0909</a>
            </dd>
          </dl>
        </div>
        <div class="new-main-info-menu">
          <a
            href=""
            class="new-main-info-menu__item new-main-info-menu__item--help"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <dl>
              <dt>1:1 문의</dt>
              <dd>문의사항이 있으신가요?</dd>
            </dl>
          </a>
          <a
            href=""
            class="new-main-info-menu__item new-main-info-menu__item--support"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <dl>
              <dt>원격지원</dt>
              <dd>원격지원이 필요하신가요?</dd>
            </dl>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
