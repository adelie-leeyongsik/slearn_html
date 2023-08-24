import { defineStore } from "pinia";
import { ResizeObserver } from "@juggle/resize-observer";

export default defineStore("app", {
  state() {
    return {
      cw: 0,
      ch: 0,
      scrollY: 0,
      mobileSize: 768,
      isMobile: null,
      isPC: null,
      headerColor: null,
      savedScrollPos: 0,
    };
  },
  getters: {
    isSticky() {
      return this.scrollY > 0;
    },
    getResponsiveSrc() {
      return (base, ext) => {
        return `${base}${this.isPC ? "." + ext : "-mo." + ext}`;
      };
    },
  },
  actions: {
    init() {
      const RO = new ResizeObserver((targets, observer) => {
        const newCw = Math.floor(targets[0].contentBoxSize[0].inlineSize);
        const newCh = Math.floor(targets[0].contentBoxSize[0].blockSize);

        // 너비 업데이트
        if (this.cw !== newCw) {
          this.cw = newCw;
        }
        // 높이 업데이트
        if (this.ch !== newCh) {
          let vh = window.innerHeight * 0.01;
          document.documentElement.style.setProperty("--vh", `${vh}px`);
          this.ch = newCh;
        }

        document.documentElement.style.setProperty(
          "--ratio",
          1 / ((newCw / newCh) * 1.7786)
        );

        this.resize();
      });
      RO.observe(document.querySelector("html"));

      const that = this;
      window.addEventListener("scroll", (e) => {
        that.scrollY = window.scrollY;
      });
    },
    resize() {
      const breaks = [768, 900, 1140, 1024, 1920, 2560];
      const mobileSize = 768;
      const cls = document.querySelector("html").classList;
      breaks.forEach((size) => {
        // removeClass
        cls.remove(`__w${size}`, `w${size}__`);
        // addClass
        if (size >= this.cw) {
          cls.add(`__w${size}`);
        } else {
          cls.add(`w${size}__`);
        }
      });

      // 모바일 상태 체크
      this.isMobile = this.cw < mobileSize ? true : false;
      this.isPC = !this.isMobile;

      this.isMobile
        ? document.querySelector("html").classList.add("s-mo")
        : document.querySelector("html").classList.remove("s-mo");
    },
  },
});
