<template>
  <div class="c-page--support">
    <Header />
    <div id="c-contents"><NuxtPage /></div>
    <Footer />
  </div>
</template>

<style lang="scss">
html,
body {
  background-color: $white;
}
/* 공통 추가 2023.08.10 최종 - 이걸로 교체 부탁드립니다. */
.c {
  &-accordion {
    dl {
      & + dl {
        margin-top: 3.2rem;
      }
    }
    &-item {
      border: 0.1rem solid #dddddd;
      box-shadow: 0.4rem 0.8rem 1.6rem 0 rgba($black, 0.04);
      border-radius: 1.6rem;
      & + .c-accordion-item {
        margin-top: 3.2rem;
      }
      dt {
        position: relative;
        line-height: 1.4;
        font-size: 2.8rem;
        font-weight: bold;
        color: $black;
        cursor: pointer;
        &::before {
          content: "";
          position: absolute;
          width: 2rem;
          height: 2rem;
          top: 50%;
          right: 4.8rem;
          margin-top: -1.6rem;
          border: 0.4rem solid $black;
          border-width: 0 0.3rem 0.3rem 0;
          transform: rotate(45deg);
        }
        a {
          display: block;
          color: $black;
          padding: 4.8rem 9.6rem 4.8rem 4.8rem;
        }
      }
      dd {
        display: none;
        position: relative;
        padding: 4rem;
        border-radius: 1.6rem;
        background-color: #fafafa;
        font-size: 2rem;
        line-height: 1.6;
      }
      &.active {
        dt {
          &::before {
            transform: rotate(-135deg);
            margin-top: -0.4rem;
          }
          a {
            padding-bottom: 4rem;
          }
        }
        dd {
          display: block;
          margin: 0 4.8rem 4.8rem;
        }
      }
    }
    .c-btn {
      padding: 0 2.4rem;
    }
    @include mobile {
      dl {
        & + dl {
          margin-top: 3.2rem;
        }
      }
      &-item {
        & + .c-accordion-item {
          margin-top: 3.2rem;
        }
        dt {
          a {
            font-size: 2.8rem;
            padding: 2.8rem 7rem 2.8rem 3rem;
            letter-spacing: -0.5px;
          }
          &::before {
            margin-top: -0.9rem;
            right: 3rem;
            width: 1.6rem;
            height: 1.6rem;
            border-width: 0 0.3rem 0.3rem 0;
          }
        }
        dd {
          word-break: break-all;
          font-size: 2rem;
          padding: 3rem;
          a {
            word-break: break-all;
          }
        }
        &.active {
          dt {
            a {
              padding: 4.8rem 7rem 4.8rem 3rem;
            }
          }
          dd {
            margin: 0 3rem 3rem;
          }
        }
      }
    }
  }
}

.support {
  &-contents {
    position: relative;
  }
  &__inner {
    width: 120rem;
    margin: 0 auto;
    @include tablet {
      width: 100%;
      padding: 0 2.4rem;
    }
    @include mobile {
      padding: 0 1.6rem;
    }
  }
  &__info {
    background-color: #edf5ff;
    padding: 10rem 0;
    .c {
      &-text {
        &-title {
          &-lg {
            margin-bottom: 16rem;
            line-height: 1.25;
            font-size: 4.8rem;
            font-weight: 800;
            color: $black;
            text-align: center;
          }
          &-md {
            line-height: 1.28;
            font-size: 2.8rem;
            font-weight: 700;
            color: $black;
            & + .c-text-title-sub {
              margin: 1.6rem 0 0 0;
              & + p {
                padding-top: 0.4rem !important;
                color: #535353;
              }
            }
          }
          &-sub {
            line-height: 1.4;
            font-size: 2rem;
            font-weight: 500;
            color: $black;
            text-align: left;
          }
        }
      }
    }
    &-item {
      position: relative;
      width: 100%;
      border-radius: 1.6rem;
      box-shadow: 4px 8px 16px 0px rgba($black, 0.016);
      background-color: $white;
      &.bg1 {
        background-color: #2da860;
      }
      &.bg2 {
        background-color: #7d6bef;
      }
      &.bg1,
      &.bg2 {
        & * {
          color: $white;
        }
        a {
          &::after {
            background-image: url(@img/ico-arrow-lg-wh.svg);
          }
        }
      }
      &.custom {
        background-color: transparent;
        border-radius: 0;
        box-shadow: none;
        padding: 0 !important;
        .c {
          &-text {
            &-title {
              &-md {
                font-size: 3.6rem;
              }
            }
          }
        }
      }
      &-img {
        position: absolute;
        bottom: -2.4rem;
        right: 0;
      }
      &-link {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 4rem;
        text-align: right;
        p {
          padding: 0 1.6rem 0 0 !important;
          margin: 0;
          line-height: 1.5;
          font-size: 1.6rem;
          span {
            display: block;
            color: #0175da;
          }
        }
      }
      p {
        padding-top: 1.6rem;
        line-height: 1.56;
        font-size: 1.8rem;
      }
      &-foot {
        margin-top: auto;
        text-align: right;
      }
    }
    &-link {
      position: relative;
      display: flex;
      flex-direction: column;
      padding: 3rem;
      min-height: 24rem;
      &::after {
        content: "";
        position: absolute;
        left: 3rem;
        bottom: 3rem;
        width: 3.2rem;
        height: 3.2rem;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url(@img/ico-arrow-lg-bk.svg);
      }
      p {
        padding-top: 1.6rem;
        line-height: 1.2;
        font-size: 1.8rem;
      }
    }
    &-group {
      display: grid;
      gap: 2.4rem;
      grid-template-columns: 1fr 1fr 1fr;
      &.custom {
        grid-template-columns: 66% 1fr;
        .support__info-item {
          padding: 3rem;
          min-height: 26rem;
        }
      }
      & + .support__info-group {
        margin-top: 2.4rem;
      }
    }
    &-text {
      &-number {
        margin-top: 4rem;
        font-size: 6rem;
        font-weight: 800;
        color: $black;
        span {
          color: #0175da;
        }
      }
    }
    @include tablet {
      .c {
        &-text {
          &-title {
            &-lg {
              margin-bottom: 0;
            }
          }
        }
      }
      &-wrap {
        position: relative;
      }
      &-item {
        &:not(.custom) {
          min-height: 25.4rem !important;
        }
        &-link {
          margin-top: auto;
        }
        &-img {
          right: -2.4rem;
        }
      }
      &-link {
        justify-content: space-between;
        min-height: auto;
        height: 100%;
      }
      &-group {
        display: flex;
        flex-wrap: wrap;
        &.custom {
          padding-top: 12rem;
          .support__info-item {
            &.custom {
              padding-left: 3rem !important;
            }
            &:not(.custom) {
              position: absolute;
              bottom: 0;
              width: calc(50% - 1.2rem);
              display: flex;
              justify-content: space-between;
              flex-direction: column;
            }
          }
        }
        &:not(.custom) {
          justify-content: flex-end;
          gap: 2.4rem;
          .support__info-item {
            width: calc(50% - 1.2rem);
          }
        }
      }
      &-text {
        &-number {
          margin-bottom: 8.5rem;
          line-height: normal;
        }
      }
    }
    @include mobile {
      .c {
        &-text {
          &-title {
            &-lg {
              font-size: 3.6rem;
              margin-bottom: 8rem;
              br {
                display: none;
              }
            }
          }
        }
      }
      &-wrap {
        overflow: hidden;
      }
      &-item {
        width: 100% !important;
        min-height: auto !important;
        &:not(.custom) {
          min-height: auto !important;
        }
        &-img {
          position: static;
          margin-left: calc(100% - 23.1rem);
          width: 24.7rem;
          height: 23.4rem;
          margin-right: -1.6rem;
          margin-bottom: -2.4rem;
          img {
            width: 100%;
          }
        }
        &-link {
          margin-top: 3.5rem;
        }
        &-foot {
          margin-top: 3.5rem;
        }
        &.bg1 {
          .support__info-item-foot {
            img {
              margin-right: -1rem;
            }
          }
        }
      }
      &-group {
        &.custom {
          padding-top: 0;
          .support__info-item {
            &.custom {
              padding-left: 0 !important;
            }
            &:not(.custom) {
              bottom: 26.4rem;
            }
          }
        }
        &.custom,
        &:not(.custom) {
          justify-content: center;
        }
        &:not(.custom) {
          .support__info-item {
            &:last-child {
              margin-top: 28.7rem;
            }
          }
        }
      }
      &-text {
        &-number {
          margin-top: 2.2rem;
          margin-bottom: -5.5rem;
          font-size: 4rem;
          line-height: normal;
          letter-spacing: -0.5px;
        }
      }
      &-link {
        justify-content: normal;
      }
    }
  }
  &__qna {
    padding: 10rem 0;
    .c {
      &-accordion {
        width: 100%;
      }
    }
  }
}
.c-sub-header__wrap {
  @include mobile {
    padding: 0 3rem;
  }
}
</style>
