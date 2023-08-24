<template>
  <div class="c-page--main" id="main">
    <Header />
    <div id="c-contents"><NuxtPage /></div>
    <Footer />
  </div>
</template>

<style>
@import "node_modules/locomotive-scroll/dist/locomotive-scroll.css";
</style>
<style lang="scss">
$primary: #e42b01;
$danger: #ff5c01;
html {
  scroll-behavior: smooth;
}
@mixin laptop {
  @media (max-width: 1400px) {
    @content;
  }
}
@mixin Nohover {
  @media (hover: hover) {
    @content;
  }
}
.c {
  &-tab {
    &-nav {
      &--btn {
        ul {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          li {
            position: relative;
            width: 100%;
            a {
              display: flex;
              width: 100%;
              height: 5.4rem;
              border-radius: 2.7rem;
              align-items: center;
              justify-content: center;
              background-color: $white;
              border: 0.1rem solid #dddddd;
              color: $black;
              font-size: 1.6rem;
              font-weight: bold;
              &.active {
                background-color: $danger;
                border-color: $danger;
                font-weight: 400;
                color: $white;
                &::after {
                  content: "";
                  position: absolute;
                  left: 50%;
                  bottom: -0.3rem;
                  margin-left: -0.4rem;
                  width: 0.8rem;
                  height: 0.8rem;
                  transform: rotate(45deg);
                  background-color: $danger;
                }
              }
            }
            &.active {
              a {
                background-color: $danger;
                border-color: $danger;
                font-weight: 400;
                color: $white;
                &::after {
                  content: "";
                  position: absolute;
                  left: 50%;
                  bottom: -0.3rem;
                  margin-left: -0.4rem;
                  width: 0.8rem;
                  height: 0.8rem;
                  transform: rotate(45deg);
                  background-color: $danger;
                }
              }
            }
            & + li {
              margin-left: 0.8rem;
            }
          }
        }
      }
      &--btn2 {
        ul {
          display: flex;
          align-items: center;
          justify-content: center;
          li {
            position: relative;
            height: 4.8rem;
            border-radius: 0.8rem;
            background-color: $white;
            border: 0.1rem solid #dddddd;
            &.active {
              border-color: $danger;
              a {
                color: $danger;
              }
            }
            a {
              display: flex;
              padding: 0 2.4rem;
              height: 100%;
              align-items: center;
              justify-content: center;
              color: #535353;
              font-size: 1.6rem;
              font-weight: bold;
            }
            & + li {
              margin-left: 0.8rem;
            }
          }
        }
        @include mobile {
          width: calc(100% + 3.2rem);
          margin: 0 -1.6rem;
          overflow: hidden;
          ul {
            padding: 0 1.6rem;
            justify-content: flex-start;
            overflow: hidden;
            overflow-x: auto;
            li {
              a {
                white-space: nowrap;
              }
            }
          }
        }
      }
    }
  }
}

.main {
  position: relative;
  background-color: $white;
  .c {
    &-badge {
      &-danger {
        background-color: $danger;
        font-weight: 400;
      }
    }
    &-btn {
      &-group {
        width: 100%;
        li {
          & + li {
            margin-left: 1.2rem;
          }
          a {
            position: relative;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            width: 7rem;
            height: 7rem;
            padding-bottom: 1.5rem;
            border-radius: 0.6rem;
            border: 0.1rem solid #ddd;
            font-size: 0;
            background-color: $white;
            &::after {
              content: "";
              position: absolute;
              top: 1rem;
              right: 1rem;
              width: 0.9rem;
              height: 0.9rem;
              background: url(@img/ic-link-arrow.svg) no-repeat center;
              background-size: cover;
            }
          }
          img {
            max-width: 5.6rem;
          }
        }
      }
      &-danger {
        background-color: $danger;
        font-weight: 600 !important;
      }
      &-lg {
        min-width: 18rem;
        height: 5.4rem;
        padding-left: 4.5rem;
        padding-right: 4.5rem;
        font-size: 1.8rem;
        font-weight: bold;
        text-align: center;
        @include mobile {
          min-width: calc(50% - 0.5rem);
          padding-left: 3rem;
          padding-right: 3rem;
        }
      }
      &-radius {
        &.c-btn-lg {
          border-radius: 5rem;
        }
        .ico {
          &-arrow {
            position: absolute;
            top: 50%;
            right: 2.4rem;
            width: 1.4rem;
            height: 1rem;
            border: none;
            margin: 0;
            transform: translateY(-50%);
            background: none;
            @include mobile {
              right: 1.8rem;
            }
            &::before {
              content: "";
              position: absolute;
              width: 0.8rem;
              height: 0.8rem;
              top: 50%;
              right: 0;
              margin-top: -0.4rem;
              border: 0.2rem solid $danger;
              border-width: 0.2rem 0.2rem 0 0;
              transform: rotate(45deg);
            }
            &::after {
              content: "";
              position: absolute;
              top: 50%;
              right: 0;
              margin-top: -0.1rem;
              width: 1.8rem;
              height: 0.2rem;
              background-color: $danger;
            }
          }
        }
      }
      &-outline {
        font-weight: 800 !important;
        border: 0.1rem solid #dddddd;
        &--danger {
          border-color: $danger;
          color: $danger;
          .ico {
            &-arrow {
              transition: all 0.1s ease-in-out;
              &::before {
                border-color: $danger;
              }
              &::after {
                background-color: $danger;
              }
            }
          }
          @include Nohover {
            &:hover {
              .ico {
                &-arrow {
                  margin-right: 0.5rem;
                  transition: all 0.3s ease-in-out;
                }
              }
            }
          }
        }
        &--sky {
          .ico {
            &-arrow {
              background: none;
              &::before {
                border-color: $sky;
              }
              &::after {
                background-color: $sky;
              }
            }
          }
          @include Nohover {
            &:hover {
              .ico {
                &-arrow {
                  margin-right: 0.5rem;
                  transition: all 0.3s ease-in-out;
                }
              }
            }
          }
        }
      }
    }
    &-box {
      padding: 2.3rem 4rem;
      border: 0.1rem solid #ddd;
      border-radius: 1rem;
      color: $black;
      box-shadow: 0 0.8rem 1.2rem 0 rgba(17, 17, 17, 0.04);
      &--title {
        font-size: 2.4rem;
        font-weight: 400;
        line-height: 1.53;
        color: $black;
        span {
          color: $danger;
        }
      }
      @include tablet {
        &--title {
          font-size: 2.4rem;
          line-height: 1.58;
        }
      }
      @include mobile {
        padding: 2.4rem;
        &--title {
          font-size: 2rem;
          line-height: 1.5;
        }
      }
    }
    &-flex {
      display: flex;
      @include tablet {
        width: 100% !important ;
        .main {
          &__contents {
            &-head,
            &-body {
              padding-left: 0;
              padding-right: 0;
            }
          }
        }
      }
      @include mobile {
        flex-direction: column;
      }
    }
    &-masonry {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(28.2rem, 1fr));
      grid-template-rows: repeat(auto-fit, minmax(2.6rem, 1fr));
      grid-auto-rows: 2.6rem;
      grid-auto-flow: row dense;
      grid-gap: 2.4rem;
      box-sizing: border-box;
      &__item {
        border-radius: 2rem;
        padding: 15px;
        visibility: hidden;
        box-shadow: 0 18px 38px 0 rgba(17, 17, 17, 0.14);
        border: 0.1rem solid #ddd;
        &.bg {
          background-color: $white;
          font-size: 28px;
          font-weight: 600;
          color: white;
          visibility: visible;
        }
        &.col1 {
          grid-column: span 1;
        }
        &.col2 {
          grid-column: span 2;
        }
        &.small {
          grid-row: span 4;
        }
        &.normal {
          grid-row: span 6;
        }
        &.medium {
          grid-row: span 7;
        }
        &.large {
          grid-row: span 11;
        }
      }
      @include tablet {
        &__item {
          &:not(.bg) {
            display: none;
          }
          &.col2 {
            grid-column: span 1;
            &.medium {
              grid-row: span 4;
            }
          }
        }
      }
      @include mobile {
        grid-gap: 1.2rem;
      }
    }
    &-list {
      &--simple {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 5.3rem;
        padding: 0 4rem;
        background-color: #fafafa;
        font-size: 1.4rem;
        color: $black;
        dt {
          font-weight: bold;
        }
        & + .c-list--simple {
          margin-top: 0.6rem;
        }
      }
    }
    &-tab {
      &-nav {
        width: auto;
        text-align: center;
        & > ul {
          display: inline-flex;
          border: none;
          li {
            margin: 0 1.2rem;
            a {
              height: 4.2rem;
              white-space: nowrap;
              font-size: 1.6rem;
              font-weight: bold;
              color: #999;
            }
            &.active {
              a {
                color: $black;
                font-weight: 800;
              }
            }
          }
        }
        @include mobile {
          width: calc(100% + 3.2rem);
          margin: 0 -1.6rem;
          overflow: hidden;
          overflow-x: auto;
          ul {
            padding: 0 1rem;
            justify-content: flex-start;
            li {
              margin: 0 0.8rem;
              a {
                white-space: nowrap;
                font-size: 1.4rem;
              }
            }
          }
        }
      }
    }
    &-tag {
      &--danger {
        color: $danger;
      }
    }
  }
  .swiper {
    &-pagination {
      &-bullet {
        vertical-align: top;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        border: 0.2rem solid $black;
        background-color: transparent;
        opacity: 1;
        margin: 0 0.5rem;
        font-size: 0;
        &-active {
          background-color: $black;
          border-color: $black;
        }
        @include tablet {
          width: 0.8rem;
          height: 0.8rem;
          border-radius: 50%;
          border-color: #cccccc;
          margin: 0 0.3rem !important;
          &-active {
            background-color: $danger;
            border-color: $danger;
          }
        }
      }
    }
  }
  &__wrap {
    width: 100%;
  }
  &__contents {
    width: 100%;
    display: flex;
    flex-direction: column;
    &-head {
      text-align: center;
      .c-btn {
        & + .c-btn {
          margin-top: 1.6rem;
        }
        &-group {
          align-items: flex-start;
          flex-direction: column;
        }
        @include tablet {
          & + .c-btn {
            margin: 0 0 0 1rem;
          }
          &-group {
            padding: 0;
            flex-direction: initial;
            justify-content: center;
          }
        }
        @include mobile {
          & + .c-btn {
            margin: 1rem 0 0 0;
          }
          &-group {
            padding: 0;
            align-items: center;
            flex-direction: column;
          }
        }
      }
    }
    &-body {
      position: relative;
      width: 120rem;
      margin: 0 auto;
      @include tablet {
        width: auto;
        padding: 0 2.4rem;
        //overflow-x: hidden;
      }
      @include mobile {
        padding: 0 1.6rem;
      }
    }
    &-title {
      font-size: 3.6rem;
      font-weight: bold;
      color: $black;
      line-height: 1.25;
      @include mobile {
        font-size: 2.6rem;
      }
      & + .main__contents-text {
        padding-top: 2rem;
      }
    }
    &-subTitle {
      font-size: 2.4rem;
      line-height: 1.25;
      font-weight: bold;
      color: $black;
      & + .main__contents-text {
        padding-top: 2.2rem;
        font-size: 1.4rem;
      }
    }
    &-text {
      font-size: 2rem;
      line-height: 1.4;
      color: $black;
      @include mobile {
        font-size: 1.6rem;
      }
      & + .c-btn {
        margin-top: 2.4rem;
      }
      & + .c-btn-group {
        margin-top: 4.4rem;
        @include tablet {
          margin-top: 2.4rem;
          padding-bottom: 2.6rem;
        }
        @include mobile {
          padding-bottom: 1.6rem;
        }
      }
    }
    &-visual {
      position: relative;
      height: calc(100vh - 10.1rem);
      background-color: $light;
      @include tablet {
        height: calc(100vh - 6rem);
        margin-bottom: 2.2rem;
      }
      &--text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        @include mobile {
          img {
            width: 18rem;
          }
        }
      }
      &--img {
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &--message {
        position: absolute;
        display: inline-flex;
        align-items: center;
        flex-direction: column;
        min-width: 20rem;
        padding: 2.5rem;
        border-radius: 1rem;
        text-align: center;
        color: $white;
        white-space: nowrap;
        line-height: normal;
        cursor: pointer;
        transition: all 0.1s ease-in-out;
        &:hover {
          margin-top: 1rem;
          transition: all 0.3s ease-in-out;
        }
        @include tablet {
          display: none;
        }
        &::before {
          content: "";
          position: absolute;
          top: 1rem;
          left: 1rem;
          width: 100%;
          height: 100%;
          border-radius: 1rem;
          background-color: rgba(0, 0, 0, 0.1);
          z-index: -1;
        }
        &::after {
          content: "";
          position: absolute;
          bottom: -6rem;
          left: 50%;
          width: 0.2rem;
          height: 6rem;
          margin-left: -0.1rem;
        }
        span {
          font-size: 1.8rem;
          font-weight: bold;
          &::before {
            content: "";
            position: absolute;
            left: 50%;
            bottom: -6.8rem;
            width: 0.8rem;
            height: 0.8rem;
            margin-left: 0.7rem;
            border-radius: 50%;
            background-color: rgba(0, 0, 0, 0.1);
          }
        }
        p {
          padding-top: 0.5rem;
          font-size: 3.2rem;
          font-weight: bold;
          &::before {
            content: "";
            position: absolute;
            left: 50%;
            bottom: -6.4rem;
            width: 0.8rem;
            height: 0.8rem;
            margin-left: -0.4rem;
            border-radius: 50%;
          }
          &::after {
            content: "";
            position: absolute;
            bottom: -6rem;
            left: 50%;
            width: 0.2rem;
            height: 5rem;
            margin-left: 1rem;
            background-color: rgba(0, 0, 0, 0.1);
            z-index: -1;
          }
        }
        &.message1 {
          top: -16rem;
          left: 50%;
          transform: translateX(-50%);
          background-color: $blue;
          &::after {
            background-color: $blue;
          }
          p {
            &::before {
              background-color: $blue;
            }
          }
        }
        &.message2 {
          top: -6rem;
          left: -36rem;
          background-color: $primary;
          &:hover {
            margin-left: 1rem;
          }
          &::after {
            bottom: -6rem;
            left: 60%;
            height: 8rem;
            transform: rotate(-45deg);
            background-color: $primary;
          }
          p {
            &::before {
              left: 71%;
              bottom: -5rem;
              margin-left: 0;
              background-color: $primary;
            }
            &::after {
              bottom: -7rem;
              left: 54%;
              height: 11rem;
              transform: rotate(-45deg);
            }
          }
          span {
            &::before {
              left: 78%;
              bottom: -6.1rem;
              margin-left: 0;
            }
          }
        }
        &.message3 {
          top: 2rem;
          right: -42rem;
          background-color: $yellow;
          &::after {
            background-color: $yellow;
          }
          p {
            &::before {
              background-color: $yellow;
            }
          }
        }
      }
    }
    &-nav {
      position: sticky;
      top: 0;
      left: 0;
      right: 0;
      z-index: 99;
      background-color: $white;
      .c {
        &-tab {
          &-nav {
            &--btn {
              width: 120rem;
              margin: 0 auto;
              padding: 1.2rem 0;
              @include tablet {
                padding: 1rem 2.4rem;
              }
              @include mobile {
                padding: 1rem 1.6rem;
              }
            }
          }
        }
      }
      & + .main__contents-section {
        margin-top: 0 !important;
        padding-top: 0 !important;
      }
    }
    &-section {
      position: relative;
      margin-top: 12rem;
      padding-top: 12rem;
      &:last-of-type {
        padding-bottom: 12rem;
      }
      @include tablet {
        margin-top: 9rem;
        padding-top: 9rem;
        &:last-of-type {
          padding-bottom: 9rem;
        }
      }
      @include mobile {
        margin-top: 0;
        padding-top: 12rem;
        &:last-of-type {
          padding-bottom: 6rem;
        }
      }
      &#Story {
        .swiper {
          margin-top: 5.6rem;
          @include tablet {
            width: calc(100% + 4.8rem);
            margin-top: 4.2rem;
            margin-left: -2.4rem;
            margin-right: -2.4rem;
            padding: 0 2.4rem;
            &-slide {
              width: 53.6rem;
              height: 36.7rem;
            }
          }
          @include mobile {
            width: calc(100% + 3.2rem);
            margin-top: 4.8rem;
            margin-left: -1.6rem;
            margin-right: -1.6rem;
            padding: 0 1.6rem;
            &-slide {
              width: 28rem;
            }
          }
          &-pagination {
            &-bullets,
            &-horizontal {
              position: static;
              margin: 1.2rem auto;
              vertical-align: top;
              height: 1.2rem;
              width: auto;
            }
          }
        }
      }
      &#AI {
        .c {
          &-tab {
            &-nav {
              margin-top: 4.4rem;
              &--btn2 {
                margin-top: 5.6rem;
              }
            }
            &-contents {
              padding: 2.4rem 0 0;
            }
          }
        }
      }
      &#Mentoring {
        .c {
          &-flex {
            width: 120rem;
            margin: 0 auto;
            justify-content: space-between;
            @include tablet {
              width: auto;
              flex-direction: column;
              padding: 0 2.4rem;
            }
            @include mobile {
              padding: 0 1.6rem;
            }
          }
        }
        .main {
          &__contents {
            &-head {
              min-width: calc(100% - 79.2rem);
              padding-right: 3rem;
              text-align: left;
              @include tablet {
                padding: 0;
                text-align: center;
              }
            }
            &-title {
              line-height: 1.2;
              @include mobile {
                line-height: 1.25;
              }
              & + .main__contents-text {
                padding-top: 1.2rem;
              }
            }
            &-body {
              width: 100%;
              margin: 0;
              @include tablet {
                padding-top: 3rem;
              }
            }
          }
        }
      }
      &#Consulting {
        .c {
          &-tab {
            &-nav {
              margin-top: 4.4rem;
              &--btn2 {
                margin-top: 5.6rem;
                li {
                  &:last-child {
                    &.active {
                      border-color: $sky;
                      a {
                        color: $sky;
                      }
                    }
                  }
                }
                @include mobile {
                  width: auto;
                  margin: 5.6rem auto 0;
                  overflow: hidden;
                  ul {
                    padding: 0;
                    justify-content: center;
                    overflow-x: hidden;
                    li {
                      width: 100%;
                      a {
                        padding: 0 1rem;
                      }
                    }
                  }
                }
              }
            }
            &-contents {
              padding: 3.7rem 0 0;
            }
          }
        }
      }
      &#SupportCenter {
        .c {
          &-flex {
            flex-direction: column;
          }
        }
      }
    }
    &-SeoulLearn {
      display: flex;
      width: 100%;
      padding: 4.2rem 0 0;
      align-items: flex-start;
      text-align: center;
      & > div {
        width: 100%;
        & + div {
          margin-left: 2.6rem;
        }
      }
    }
    &-service {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
    &-support {
      width: 100%;
      display: flex;
      justify-content: flex-start;
    }
  }
  &__slide {
    width: 100%;
    overflow: hidden;
    &-banner {
      position: relative;
      width: 100%;
      height: 38rem;
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0 0.8rem 1.2rem 0 rgba(17, 17, 17, 0.04);
      @include tablet {
        height: 33.7rem;
        overflow: visible;
        box-shadow: none;
      }
      @include mobile {
        height: 32.8rem;
      }
      .swiper {
        @include tablet {
          position: static;
          margin-bottom: 2.4rem;
          border-radius: 1rem;
          box-shadow: 0 0.8rem 1.2rem 0 rgba(17, 17, 17, 0.04);
        }
        &-horizontal {
          & > .swiper {
            &-pagination {
              &-bullets,
              &-horizontal {
                position: relative;
                display: inline-block;
                vertical-align: top;
                margin: -3rem auto 0;
                height: 1.2rem;
                width: auto;
                top: auto;
                left: auto;
                right: auto;
                bottom: auto;
                z-index: 10;
                @include tablet {
                  position: absolute;
                  bottom: -2.4rem;
                  margin: 0 auto;
                  transform: none;
                  display: flex;
                  width: 100%;
                  justify-content: center;
                }
              }
            }
          }
        }
      }
      .main {
        &__slide {
          &-control {
            position: relative;
            display: inline-block;
            vertical-align: top;
            margin: -3rem 0.5rem;
            z-index: 10;
            @include tablet {
              display: none;
            }
            .c {
              &-btn {
                &-stop {
                  display: block;
                }
                &-play {
                  display: none;
                }
              }
            }
            &.active {
              .c {
                &-btn {
                  &-stop {
                    display: none;
                  }
                  &-play {
                    display: block;
                  }
                }
              }
            }
            &--box {
              position: absolute;
              bottom: 2rem;
              left: 50%;
              transform: translateX(-50%);
              display: inline-flex;
              align-items: center;
              justify-content: center;
              padding: 1rem 1.6rem;
              z-index: 90;
              .swiper {
                &-pagination {
                  position: static;
                  width: auto;
                  height: 1.2rem;
                }
              }
            }
          }
        }
      }
    }
    &-box {
      position: relative;
      margin: 0 -1.2rem;
      width: calc(100% + 2.4rem);
      .swiper {
        &-button {
          &-prev,
          &-next {
            width: 6rem;
            height: 6rem;
            border-radius: 50%;
            background-color: $white;
            box-shadow: 0 0.8rem 1.2rem 0 rgba(17, 17, 17, 0.04);
            border: 0.1rem solid #ddd;
            &:after {
              color: #000;
              font-size: 2.5rem;
              font-weight: bold;
            }
          }
          &-disabled {
            opacity: 0.8;
            &:after {
              color: $gray;
            }
          }
          &-prev {
            left: -8.4rem;
          }
          &-next {
            right: -8.4rem;
          }
        }
        &-pagination {
          &-bullets,
          &-horizontal {
            position: static;
            display: none;
            vertical-align: top;
            margin: 0 auto;
            height: 1.2rem;
            width: auto;
          }
        }
      }
      .c {
        &-card {
          &--border {
            margin: 0 1.2rem 1.5rem;
            box-shadow: 0 0.8rem 1.2rem 0 rgba(17, 17, 17, 0.04);
            border: solid 0.1rem #ddd;
            @include mobile {
              text-align: left !important;
              margin-bottom: 5.6rem;
            }
          }
          &-img {
            height: 21.8rem;
            @include tablet {
              height: 30rem;
            }
          }
          &-title {
            min-height: auto;
            a {
              font-size: 1.8rem;
              strong {
                @include text-clamp(1);
              }
            }
          }
          &-foot {
            margin-top: 1.2rem;
            font-size: 1.6rem;
            color: #535353;
          }
        }
      }
      @include laptop {
        .swiper {
          &-button {
            &-prev {
              left: -1.5rem;
            }
            &-next {
              right: -1.5rem;
            }
          }
        }
      }
      @include tablet {
        padding: 0 11.6rem;
        .swiper {
          &-button {
            &-prev {
              left: 2.8rem;
            }
            &-next {
              right: 2.8rem;
            }
          }
          &-pagination {
            display: none;
          }
        }
      }
      @include mobile {
        padding: 0;
        text-align: center;
        .swiper {
          &-button {
            &-prev,
            &-next {
              position: relative;
              left: auto;
              right: auto;
              top: auto;
              bottom: auto;
              margin: -3.2rem auto 0;
              transform: none;
              display: inline-flex;
              vertical-align: top;
              width: 3.2rem;
              height: 3.2rem;
              &::after {
                font-size: 1.4rem;
              }
            }
            &-next {
              margin-left: 5rem;
            }
          }
          &-pagination {
            position: absolute;
            height: 3.2rem;
            min-height: 3.2rem;
            line-height: 3.2rem;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            display: block;
            font-size: 1.4rem;
            font-weight: bold;
            color: #555;
            span {
              color: #555;
            }
          }
        }
      }
    }
    &-img {
      height: 38rem;
      overflow: hidden;
      background-color: #fdd3be;
      @include tablet {
        height: 33.7rem;
      }
      @include mobile {
        height: 32.8rem;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &-detail {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0 5rem;
      height: 38rem;
      background-color: #fdd3be;
      dt {
        padding-right: 3rem;
        text-align: left;
        p {
          padding-top: 0.9rem;
          font-family: Jalnan;
          font-size: 4.4rem;
          line-height: 1.32;
          color: #723c2e;
          text-shadow: -0.3rem 0.1rem $white, 0.1rem 0.3rem $white,
            0.3rem 0.1rem $white, 0.1rem -0.3rem $white;
        }
      }
      dd {
        width: 26rem;
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
      @include tablet {
        height: 33.7rem;
        padding: 0 4rem;
        dt {
          p {
            word-break: keep-all;
          }
        }
      }
      @include mobile {
        padding: 2rem 3rem;
        flex-direction: column;
        height: 32.8rem;
        dt {
          width: 100%;
          p {
            font-size: 3.6rem;
            word-break: keep-all;
          }
        }
        dd {
          width: 100%;
          padding-top: 1rem;
          text-align: right;
          img {
            margin: 0 0 0 auto;
            display: block;
            max-width: 12rem;
            height: auto;
          }
        }
      }
    }
  }
  &__login {
    &-wrap {
      width: auto !important;
      min-width: 36.5rem;
    }
    &-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-height: 38rem;
      border-radius: 1rem;
      border: 0.1rem solid #ddd;
      overflow: hidden;
      box-shadow: 0 0.8rem 1.2rem 0 rgba(17, 17, 17, 0.04);
      & > div {
        width: 100%;
        text-align: center;
      }
    }
    &-item {
      height: 100%;
      padding: 2rem 4rem 2.4rem;
      & + .main__login-item {
        border-top: 0.1rem solid #eee;
      }
      .c {
        &-btn {
          font-size: 1.6rem;
          font-weight: 400;
        }
      }
      i.ico {
        margin: 0.8rem auto 1.3rem;
      }
    }
    &-title {
      line-height: 1.56;
      font-size: 1.8rem;
      font-weight: bold;
      color: $black;
      & + .c-btn-group {
        padding-top: 1.2rem;
      }
      & + .c-btn {
        margin-top: 2rem;
      }
    }
    &-link {
      padding: 2rem 2.3rem 2.4rem;
      background-color: #fafafa;
    }
    &-info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      li {
        position: relative;
        width: 100%;
        text-align: center;
        & + li {
          &::before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 0.1rem;
            height: 100%;
            background-color: #ddd;
          }
        }
        span {
          font-size: 1.6rem;
          line-height: 1;
          color: #535353;
          & + p {
            padding-top: 0.6rem;
          }
        }
        p {
          display: block;
          line-height: 1;
          font-size: 2.4rem;
          font-weight: bold;
          color: $black;
        }
      }
    }
    &-profile {
      padding: 2.8rem 2.2rem 2.2rem;
      &--title {
        padding-top: 1.2rem;
        font-size: 1.8rem;
        line-height: 2.2rem;
        color: $black;
        font-weight: bold;
        span {
          color: $danger;
        }
        & + .main__login-info {
          margin-top: 2.1rem;
        }
      }
    }
  }
  &__mentoring {
    &-wrap {
      height: 36.8rem;
      padding: 4rem;
      border: 0.1rem solid #ddd;
      border-radius: 1rem;
      color: $black;
      box-shadow: 0 0.8rem 1.2rem 0 rgba(17, 17, 17, 0.04);
      @include mobile {
        padding: 3rem;
        height: auto;
      }
    }
    &-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 3.6rem;
      a {
        line-height: 2rem;
        font-size: 1.6rem;
        font-weight: bold;
        color: $black;
        .ico {
          &-circle {
            &--arrow {
              vertical-align: top;
              margin-right: 0.6rem;
            }
          }
        }
      }
      @include mobile {
        padding-bottom: 3rem;
        a {
          font-size: 0;
        }
      }
    }
    &-body {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0 2.4rem;
      @include mobile {
        display: flex;
        flex-direction: column;
        gap: 1.6rem 0;
      }
    }
    &-box {
      &:last-child {
        background-color: #fafafa;
        text-align: center;
      }
      &--title {
        padding: 2.6rem 0 2.3rem;
        p {
          padding-top: 0.6rem;
          line-height: 2rem;
          font-size: 1.6rem;
          font-weight: bold;
          color: $black;
        }
      }
      &--cont {
        padding: 0 2.4rem 2.4rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0 0.6rem;
        li {
          background-color: $white;
          padding: 2rem 0;
          span {
            line-height: 1.7rem;
            font-size: 1.4rem;
            color: #535353;
            & + p {
              margin-top: 1.2rem;
            }
          }
          p {
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 2rem;
            height: 4rem;
            font-size: 1.6rem;
            font-weight: bold;
            color: $danger;
          }
        }
      }
    }
    &-title {
      font-size: 1.8rem;
      font-weight: bold;
      color: $black;
      span {
        color: $danger;
      }
    }
    &-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0 2.4rem;
      @include mobile {
        display: flex;
        flex-direction: column;
        gap: 1.6rem 0;
      }
    }
    &-item {
      width: 100%;
      position: relative;
      .c {
        &-box {
          margin-top: 1.2rem;
          border-radius: 0.8rem 4.8rem 4.8rem 4.8rem;
          @include mobile {
            display: inline-flex;
            width: 85%;
            vertical-align: top;
          }
        }
      }
      &:last-child {
        padding-top: 3.9rem;
        text-align: right;
        .main {
          &__mentoring {
            &-profile {
              padding-top: 1.2rem;
              display: block;
              &::after {
                content: "";
                display: block;
                clear: both;
                overflow: hidden;
              }
              dt {
                float: right;
              }
              dd {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                justify-content: center;
                height: 8rem;
                float: left;
                width: calc(100% - 8rem);
                padding: 0 1.2rem 0 0;
                text-align: right;
              }
              @include mobile {
              }
            }
          }
        }
        .c {
          &-box {
            margin-top: 0;
            border-radius: 4.8rem 4.8rem 0.8rem 4.8rem;
            text-align: right;
            span {
              color: $sky;
            }
          }
        }
      }
      @include tablet {
        padding-top: 1.6rem;
        &:last-child {
          padding-top: 0;
          .main {
            &__mentoring {
              &-profile {
                bottom: 1.6rem;
              }
            }
          }
          .c {
            &-box {
              margin-top: 0;
              border-radius: 4.8rem 4.8rem 0.8rem 4.8rem;
              text-align: right;
            }
          }
        }
      }
      @include mobile {
      }
    }
    &-profile {
      display: flex;
      width: 100%;
      align-items: center;
      dt {
        width: 8rem;
        height: 8rem;
        a {
          width: 100%;
          height: 100%;
          display: block;
          border-radius: 50%;
          overflow: hidden;
        }
        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      dd {
        padding-left: 1.2rem;
        line-height: 1.7rem;
        font-size: 1.4rem;
        font-weight: normal;
        color: rgba(17, 17, 17, 0.7);
      }
      .c-badge {
        height: 3.4rem;
        padding: 0 1.2rem;
        font-size: 1.8rem;
        font-weight: 400;
        white-space: nowrap;
        & + strong {
          margin-top: 0.4rem;
        }
      }
      strong {
        display: block;
        line-height: 2rem;
        font-size: 1.8rem;
        color: $black;
        & + p {
          padding-top: 0.3rem;
        }
      }
    }
  }
  &__consulting {
    &-wrap {
      position: relative;
      .c {
        &-tag {
          position: absolute;
          display: inline-flex;
          &:nth-child(odd) {
            right: 50%;
            margin-right: 17.4rem;
          }
          &:nth-child(even) {
            left: 50%;
            margin-left: 17.4rem;
          }
          &:nth-child(1),
          &:nth-child(2) {
            top: 1.7rem;
          }
          &:nth-child(3),
          &:nth-child(4) {
            top: 50%;
            transform: translateY(-50%);
          }
          &:nth-child(5),
          &:nth-child(6) {
            bottom: 1.7rem;
          }
          &:nth-child(1) {
            padding-right: 15.3rem;
          }
          &:nth-child(2) {
            padding-left: 12.7rem;
          }
          &:nth-child(3) {
            padding-right: 25rem;
          }
          &:nth-child(4) {
            padding-left: 20.3rem;
          }
          &:nth-child(5) {
            padding-right: 18.7rem;
          }
          &:nth-child(6) {
            padding-left: 16.4rem;
          }
          @include tablet {
            font-size: 2.4rem;
            position: relative;
            padding: 0 1.2rem !important;
            top: auto !important;
            left: auto !important;
            right: auto !important;
            bottom: auto !important;
            z-index: 9;
            opacity: 0.6;
            &:nth-child(odd),
            &:nth-child(even) {
              margin: 0;
            }
            &:nth-child(3),
            &:nth-child(4) {
              transform: none;
            }
          }
          @include mobile {
            font-size: 1.6rem;
            padding: 0 0.8rem !important;
          }
        }
      }
      @include tablet {
        text-align: center;
        .c {
          &-chatting {
            text-align: left;
            &.user {
              text-align: right;
            }
          }
        }
      }
    }
    &-chatting {
      position: relative;
      margin: 0 auto;
      width: 34.8rem;
      border-radius: 4rem 4rem 0 0;
      padding: 3.4rem 2.4rem 9rem;
      box-shadow: 0 -0.5rem 3.4rem 0 rgba(0, 0, 0, 0.1);
      background-color: $white;
      &::after {
        content: "";
        position: absolute;
        left: -3.4rem;
        bottom: -7rem;
        width: calc(100% + 7.8rem);
        height: 8rem;
        background-color: $white;
      }
      @include tablet {
        &::after {
          width: calc(100% + 4.8rem);
          left: -2.4rem;
        }
      }
      @include mobile {
        width: auto;
        padding-bottom: 6rem;
        &::after {
          width: calc(100% + 3.2rem);
          left: -1.6rem;
        }
      }
    }
  }
  &__learningsupport {
    &-wrap {
      margin-top: 5.6rem;
      .c {
        &-box {
          padding: 0;
        }
      }
    }
    &-head {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 48.5rem;
      border-right: 0.1rem solid #ddd;
      &--copy {
        position: absolute;
        bottom: 4.8rem;
        margin: 0 auto;
        font-size: 1.4rem;
        color: #535353;
        line-height: normal;
      }
    }
    &-body {
      width: calc(100% - 48.5rem);
      padding: 4rem 4rem 4.8rem;
    }
    &-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 3.6rem;
      a {
        line-height: 2rem;
        font-size: 1.6rem;
        font-weight: bold;
        color: $black;
        .ico {
          &-circle {
            &--arrow {
              vertical-align: top;
              margin-right: 0.6rem;
            }
          }
        }
      }
      @include mobile {
        padding-bottom: 3rem;
        a {
          font-size: 0;
        }
      }
      &--lg {
        font-size: 2.4rem;
        font-weight: bold;
        color: $black;
        span {
          font-size: 1.3rem;
          font-weight: normal;
          color: #535353;
        }
      }
    }
    &-box {
      background-color: #fafafa;
      padding: 4rem;
      dl {
        display: flex;
        align-items: flex-start;
        font-size: 1.6rem;
        dt {
          width: 11.4rem;
          font-weight: normal;
          color: #535353;
        }
        dd {
          position: relative;
          width: calc(100% - 11.4rem);
          font-weight: bold;
          color: $black;
          & > span {
            position: absolute;
            right: 0;
            top: 0;
            font-weight: 400;
            strong {
              font-weight: bold;
              color: $danger;
            }
          }
        }
        & + dl {
          margin-top: 2.8rem;
        }
      }
      .c {
        &-progress {
          margin-top: 1.2rem;
          height: 1.6rem;
          border-radius: 0.8rem;
          border: 0.1rem solid #cccccc;
          background-color: #f1f1f1;
          padding: 0.1rem;
          &-bar {
            background-color: $danger;
            border-radius: 0.6rem;
          }
        }
      }
    }
    @include tablet {
      &-head {
        width: 30%;
        padding-left: 4rem;
        padding-right: 4rem;
        img {
          max-width: 100%;
        }
      }
      &-body {
        width: 70%;
      }
      &-title {
        &--lg {
          span {
            display: block;
          }
        }
      }
    }
    @include mobile {
      &-head {
        width: 100%;
        border-right: none;
        padding: 4rem 2rem;
        border-bottom: 0.1rem solid #ddd;
        &--copy {
          position: static;
          margin-top: 3rem;
        }
      }
      &-body {
        padding: 2rem;
        width: 100%;
      }
      &-box {
        padding: 2rem;
        dl {
          font-size: 1.4rem;
          dt,
          dd {
            letter-spacing: -0.5px;
          }
          dt {
            width: 7rem;
          }
          dd {
            width: calc(100% - 7rem);
          }
          & + dl {
            margin-top: 1.5rem;
          }
        }
      }
      &-title {
        &--lg {
          span {
            display: block;
          }
        }
      }
    }
  }
  &__join {
    &-wrap {
      margin-top: 3.2rem;
      .c {
        &-box {
          position: relative;
          width: 100%;
          padding: 5.6rem 6rem;
          border-color: #dedede;
          box-shadow: none;
          @include tablet {
            padding-left: 12rem;
            padding-right: 12rem;
          }
          @include mobile {
            padding: 3.2rem;
          }
          & + .c-box {
            margin-left: 2.4rem;
            margin-top: 0;
            @include tablet {
              margin-left: 0;
              margin-top: 0.8rem;
            }
            @include mobile {
              .main {
                &__join {
                  &-img {
                    margin-bottom: -0.2rem;
                  }
                }
              }
            }
          }
        }
        &-flex {
          @include tablet {
            flex-direction: column;
          }
        }
      }
    }
    &-title {
      padding: 3.2rem 0 6.8rem;
      font-size: 2.8rem;
      font-weight: bold;
      color: $black;
      line-height: normal;
      @include mobile {
        padding-bottom: 2.2rem;
        font-size: 2.4rem;
      }
    }
    &-img {
      position: absolute;
      top: 4.2rem;
      right: 6rem;
      text-align: center;
      z-index: 1;
      p {
        position: relative;
        background-color: $black;
        padding: 1.2rem;
        border-radius: 1.2rem;
        font-size: 1.4rem;
        color: $white;
        &::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -0.4rem;
          margin-left: -0.7rem;
          width: 1.4rem;
          height: 1.4rem;
          border-radius: 0.2rem;
          background-color: $black;
          transform: rotate(45deg);
        }
        @include mobile {
          position: absolute;
          top: 2.2rem;
          left: 2rem;
          display: inline-flex;
          padding: 0.8rem;
          border-radius: 0.8rem;
          text-align: left !important;
          font-size: 1.2rem;
          &::after {
            left: auto;
            bottom: auto;
            top: 50%;
            right: -0.4rem;
            margin-top: -0.7rem;
          }
        }
      }
      img {
        margin-top: 1.6rem;
        display: block;
      }
      @include tablet {
        right: 12rem;
      }
      @include mobile {
        position: relative;
        top: auto;
        bottom: auto;
        left: auto;
        right: auto;
        text-align: right;
        margin-bottom: -1.6rem;
        img {
          margin: 0 3rem 0 auto;
          width: 10.4rem;
        }
      }
    }
    &-btn {
      position: relative;
      z-index: 5;
      .c {
        &-btn {
          width: 100%;
          &-lg {
            padding-left: 3rem;
            padding-right: 3rem;
            height: 6.6rem;
            font-size: 1.7rem;
          }
          & + .c-btn {
            margin-left: 1.2rem;
          }
        }
      }
      @include mobile {
        flex-direction: column;
        padding: 0;
        .c {
          &-btn {
            & + .c-btn {
              margin: 1rem 0 0 0;
            }
          }
        }
      }
    }
    &-search {
      position: relative;
      width: 100%;
      height: 6.6rem;
      display: flex;
      align-items: center;
      z-index: 5;
      &--text {
        display: flex;
        align-items: center;
        width: calc(100% - 15rem);
        height: 6.6rem;
        border-radius: 5rem 0 0 5rem;
        border: 0.1rem solid $danger;
        padding: 0 0 0 3rem;
        font-size: 1.7rem;
        font-weight: bold;
        color: $danger;
      }
      .c {
        &-btn {
          min-width: 15rem;
          width: 15rem;
          height: 6.6rem;
          border-radius: 0 5rem 5rem 0;
          padding: 0 3rem;
          text-align: left;
          justify-content: flex-start;
        }
      }
      i.ico {
        &-hand {
          position: absolute;
          right: -0.8rem;
          bottom: -0.8rem;
        }
        @include mobile {
          display: none;
        }
      }
      @include mobile {
        &--text {
          display: none;
        }
        .c {
          &-btn {
            width: 100%;
            border-radius: 5rem;
            padding: 0 5rem;
            justify-content: center;
          }
        }
      }
    }
  }
  &__story {
    &-banner {
      margin-top: 5.6rem;
      display: flex;
      justify-content: space-between;
    }
    &-item {
      position: relative;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      min-width: 12.9rem;
      width: 12.9rem;
      height: 36.7rem;
      border-radius: 1.2rem;
      text-align: center;
      overflow: hidden;
      background-color: $darkgray;
      box-shadow: 0 0.8rem 1.2rem 0 rgba(17, 17, 17, 0.04);
      cursor: pointer;
      transition: all 0.7s ease-in-out;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        background: linear-gradient(
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.04) 50%,
          rgba(0, 0, 0, 0.4)
        );
        z-index: 2;
      }
      & > a {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 5;
        &:focus {
          outline-offset: -0.1rem;
        }
      }
      &.active {
        width: 100%;
        text-align: left;
        justify-content: flex-start;
        transition: all 0.6s ease-in-out;
        .main {
          &__story {
            &-title {
              font-size: 2.8rem;
              line-height: normal;
              width: 100%;
              @include mobile {
                font-size: 2.4rem;
              }
            }
            &-box {
              opacity: 0;
              padding: 0 4rem;
              margin-top: -1rem;
              animation: storyTxT 0.6s forwards ease-in-out;
              animation-delay: 0.4s;
              @include mobile {
                padding: 0 2.4rem 2.4rem;
              }
              p {
                display: block;
                @include tablet {
                  @include text-clamp(2);
                }
              }
              a {
                display: inline-flex;
              }
            }
            &-img {
              img {
                width: 66rem;
                transition: all 0.3s ease-in-out;
                @include mobile {
                  width: 100%;
                }
              }
            }
          }
        }
      }
      & + .main__story-item {
        margin-left: 0.8rem;
      }
    }
    &-box {
      position: absolute;
      opacity: 0;
      left: 0;
      right: 0;
      bottom: 4rem;
      color: white;
      z-index: 5;
      animation: storyTxT2 0.1s forwards ease-in-out;
      p {
        display: none;
        font-size: 1.6rem;
        line-height: 1.5;
        word-break: keep-all;
        @include tablet {
          @include text-clamp(2);
        }
        & + a {
          margin-top: 1.6rem;
        }
      }
      a {
        position: relative;
        display: none;
        font-size: 1.6rem;
        font-weight: bold;
        line-height: 2rem;
        z-index: 6;
        .ico {
          margin-right: 0.6rem;
        }
      }
    }
    &-img {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 1;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.2s ease-in-out;
      }
      a {
        font-size: 0;
        line-height: 0;
        &:focus {
          outline-offset: -0.1rem;
        }
      }
    }
    &-title {
      padding-top: 1.2rem;
      font-size: 1.6rem;
      font-weight: bold;
      & + p {
        padding-top: 1.2rem;
      }
    }
    @keyframes storyTxT {
      from {
        opacity: 0;
        margin-bottom: -1rem;
      }
      to {
        opacity: 1;
        margin-bottom: 0;
      }
    }
    @keyframes storyTxT1 {
      from {
        opacity: 0;
        font-size: 1.6rem;
      }
      to {
        opacity: 1;
        font-size: 2.8rem;
      }
    }
    @keyframes storyTxT2 {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
  &-link {
    width: calc(16.66666666666667% - 2rem);
    border: 0.1rem solid #ddd;
    border-radius: 1rem;
    color: $black;
    box-shadow: 0 8px 12px 0 rgba(17, 17, 17, 0.04);
    & > a {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      padding: 2.5rem 2rem;
      img {
        width: 14rem;
      }
    }
    @include tablet {
      width: calc(33.333% - 1.6rem);
      & > a {
        align-items: center;
      }
    }
    @include mobile {
      width: calc(50% - 0.8rem);
      & > a {
        img {
          width: auto;
          max-width: 12rem;
        }
      }
    }
    &__wrap {
      margin-top: 6rem;
      display: flex;
      flex-wrap: wrap;
      //display: grid;
      //grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      gap: 2.4rem;
      &--type02 {
        //grid-template-columns: 1fr 1fr 1fr 1fr;
        display: flex;
        flex-wrap: wrap;
        margin-right: -2.4rem;
      }
      @include tablet {
        margin-top: 5.6rem;
        gap: 1.6rem;
        &--type02 {
          margin-right: 0;
        }
      }
      @include mobile {
        gap: 1.6rem;
        &--type02 {
          margin-right: 0;
        }
      }
    }
    &--lg {
      position: relative;
      width: calc(25% - 2.4rem);
      border-radius: 3.2rem 5.6rem;
      height: 22.4rem;
      &:first-of-type {
        width: calc(50% - 2.4rem);
      }
      & > a,
      dl {
        padding: 3.6rem;
      }
      @include tablet {
        border-radius: 2.4rem;
        width: calc(50% - 1.2rem);
        height: auto;
        &:first-of-type {
          width: 100%;
        }
        & > a {
          padding: 3.6rem;
          min-height: 15rem;
          align-items: flex-start;
        }
      }
      @include mobile {
        &:first-of-type {
          width: 100%;
        }
        & > a {
          padding: 2rem 0 7rem 2.4rem;
          justify-content: center;
          align-items: flex-start;
          img {
            max-width: 3.8rem !important;
          }
        }
      }
    }
    dl {
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: space-between;
      dt {
        display: flex;
        height: 100%;
        flex-direction: column;
      }
      dd {
        display: flex;
        height: 100%;
        flex-direction: column;
        text-align: right;
      }
      @include tablet {
      }
      @include mobile {
        flex-direction: column;
        align-items: center;
        dt,
        dd {
          width: 100%;
          text-align: center;
        }
        dd {
          padding-top: 1rem;
        }
      }
    }
    &__title {
      font-size: 2.4rem;
      color: $black;
      font-weight: 700;
      @include tablet {
        font-size: 2.4rem;
      }
      @include mobile {
        font-size: 2rem;
        letter-spacing: -0.5px;
      }
      &-lg {
        font-size: 4.8rem;
        font-weight: bold;
        color: $black;
        @include mobile {
          font-size: 3.2rem;
        }
        & + .main-link__img {
          margin-top: auto;
          position: static;
          transform: none;
          img {
            max-width: none;
          }
          @include mobile {
            margin-top: 1rem;
          }
        }
      }
    }
    &__text {
      margin-top: 0.8rem;
      font-size: 1.6rem;
      strong {
        font-weight: bold;
        @include mobile {
          font-size: 1.6rem;
        }
      }
      &-sm {
        font-size: 1.4rem;
      }
      @include mobile {
        font-size: 1.4rem;
      }
    }
    &__img {
      position: absolute;
      right: 3.6rem;
      bottom: 3rem;
      img {
        width: auto !important;
        max-width: 8rem;
      }
      @include mobile {
        right: 2rem;
        bottom: 2rem;
      }
    }
    p {
      margin-top: auto;
      font-size: 1.2rem;
      color: #535353;
      @include mobile {
        display: none;
      }
    }
  }
  &-consulting {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 50%;
    height: 45rem;
    text-align: center;
    color: $black;
    padding: 0 5.2rem 2.6rem;
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 26.4rem;
      border-radius: 1rem;
      background-color: #f7f5f6;
      bottom: 0;
    }
    &__wrap {
      display: flex;
      gap: 2.4rem;
      margin-top: 5.6rem;
    }
    &__img {
      position: relative;
      width: 100%;
      margin-bottom: 2.2rem;
      background-color: red;
      border-radius: 1rem;
      overflow: hidden;
      z-index: 1;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
    &__title {
      position: relative;
      font-size: 2rem;
      margin-top: auto;
      font-weight: 700;
      z-index: 1;
    }
    &__text {
      position: relative;
      font-size: 1.6rem;
      z-index: 1;
    }
  }
  @include tablet {
    &__contents {
      &-head {
        padding-left: 2.4rem;
        padding-right: 2.4rem;
      }
      &-nav {
        .c {
          &-tab {
            &-nav {
              &--btn {
                width: 100%;
                overflow: hidden;
                padding: 1rem 2.4rem 0;
                ul {
                  width: calc(100% + 4.8rem);
                  margin: 0 -2.4rem;
                  padding-left: 2.4rem;
                  padding-bottom: 1.5rem;
                  overflow: hidden;
                  overflow-x: auto;
                  li {
                    a {
                      white-space: nowrap;
                      padding: 0 2rem;
                      &.active {
                        &::after {
                          display: none;
                        }
                      }
                    }
                    &:last-child {
                      margin-right: 2.4rem;
                    }
                  }
                }
              }
            }
          }
        }
      }
      &-SeoulLearn {
        padding-top: 2.2rem;
      }
    }
  }
  @include mobile {
    &__contents {
      &-head {
        padding-left: 1.6rem;
        padding-right: 1.6rem;
      }
      &-nav {
        overflow: hidden;
        .c {
          &-tab {
            &-nav {
              &--btn {
                padding: 1rem 1.6rem 0;
                ul {
                  li {
                    &:last-child {
                      margin-right: 1.6rem;
                    }
                  }
                }
              }
            }
          }
        }
      }
      &-SeoulLearn {
        flex-direction: column;
        & > div {
          & + div {
            margin-left: 0;
            margin-top: 1rem;
          }
        }
      }
      &-service,
      &-support {
        flex-direction: column;
      }
      #SupportCenter {
        .c {
          &-flex {
            display: block;
          }
        }
      }
    }
    &__login {
      &-wrap {
        min-width: auto;
        width: 100% !important;
      }
      &-box {
        max-height: none;
      }
    }
    .c {
      &-btn {
        &-group {
          li {
            a {
              width: 5.5rem;
              height: 5.5rem;
            }
          }
        }
      }
      &-halfW {
        width: auto;
      }
    }
  }
}

html {
  &.s-mo {
    [data-aos^="fade"][data-aos^="fade"] {
      opacity: 1 !important;
      transform: none !important;
      transition: none !important;
    }
  }
  @include tablet {
    &:not(.no-js) {
      [data-aos^="fade"][data-aos^="fade"] {
        opacity: 1 !important;
        transform: none !important;
        transition: none !important;
      }
    }
    [data-aos] {
      pointer-events: auto;
    }
  }
}

.new-main {
  background: #fff;
  min-width: 124rem;
  .swiper {
    &-pagination {
      &-bullet {
        vertical-align: top;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        border: 0.2rem solid $black;
        background-color: transparent;
        opacity: 1;
        margin: 0 0.5rem;
        font-size: 0;
        &-active {
          background-color: $black;
          border-color: $black;
        }
        @include tablet {
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          border-color: $black;
          margin: 0 0.3rem !important;
          &-active {
            background-color: $black;
            border-color: $black;
          }
        }
      }
    }
  }
  @include tablet {
    min-width: auto;
  }
  @include mobile {
  }
  &__inner {
    width: 124rem;
    margin: 0 auto;
    padding: 0 2rem;
    @include tablet {
      width: 100%;
      padding: 0 2.4rem;
    }
    @include mobile {
      padding: 0 1.6rem;
    }
  }
  &-kv {
    height: calc(100vh - 14.9rem);
    & > .new-main__inner {
      width: 100%;
      height: 100%;
      padding: 0;
      .swiper {
        height: 100%;
        &-pagination {
          position: absolute;
          top: 50%;
          left: 50%;
          margin-left: -60rem;
          margin-top: -25.4rem;
          width: auto;
          height: auto;
          padding-top: 8rem;
          background: url(@img/main/pic-main-logo-seoul.svg) no-repeat top left;
          &-bullet {
            position: relative;
            width: auto;
            height: auto;
            line-height: 1;
            border: none;
            border-radius: 0;
            background-color: transparent;
            font-size: 2.4rem;
            font-weight: 700;
            color: $white;
            opacity: 0.5;
            margin: 0;
            & + .swiper-pagination-bullet {
              margin-left: 8rem;
              &::before {
                content: "";
                position: absolute;
                bottom: 0;
                left: -7rem;
                width: 6rem;
                height: 0.1rem;
                background-color: $white;
                opacity: 0.5;
              }
            }
            &-active {
              background-color: transparent;
              width: auto;
              opacity: 1;
            }
          }
        }
      }
    }
    @include tablet {
      & > .new-main__inner {
        .swiper {
          &-pagination {
            left: 4.4rem;
            margin-left: 0;
            margin-top: -21.5rem;
            min-width: 20rem;
            text-align: left;
            padding-top: 7.2rem;
            &-bullet {
              font-size: 2rem;
              & + .swiper-pagination-bullet {
                margin-left: 6rem !important;
                &::before {
                  left: -5.25rem;
                  width: 4.5rem;
                }
              }
            }
          }
        }
      }
    }
    @include mobile {
      & > .new-main__inner {
        .swiper {
          &-pagination {
            left: 2.4rem;
            margin-left: 0;
            margin-top: -17rem;
            padding-top: 5.4rem;
            background-size: auto 3rem;
            &-bullet {
              font-size: 1.6rem;
              & + .swiper-pagination-bullet {
                margin-left: 4rem !important;
                &::before {
                  left: -3.5rem;
                  width: 3rem;
                }
              }
            }
          }
        }
      }
    }
  }
  &-tab {
    position: sticky;
    top: 0;
    background: #111;
    z-index: 30;
    .new-main__inner {
      display: flex;
      padding: 0;
      .swiper {
        width: 100%;
        &-slide {
          width: 15rem !important;
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 6rem;
            color: #fff;
            text-align: center;
            font-size: 1.8rem;
            font-style: normal;
            font-weight: 700;
            line-height: 1.3;
            &.active {
              background: #ff5c01;
              color: #fff;
            }
          }
        }
      }
    }
    @include tablet {
      .new-main__inner {
        padding: 0;
        .swiper {
          &-slide {
            a {
              height: 5.2rem;
              font-size: 1.6rem;
            }
          }
        }
      }
    }
    @include mobile {
      .new-main__inner {
        padding: 0;
        .swiper {
          &-slide {
            width: 14rem !important;
            a {
              height: 4.8rem;
              font-size: 1.4rem;
            }
          }
        }
      }
    }
  }
  &-title {
    text-align: center;
    h3 {
      font-size: 6rem;
      font-style: normal;
      font-weight: 800;
      line-height: 1.2;
      color: $black;
    }
    p {
      margin-top: 2rem;
      font-size: 2.2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.4;
      letter-spacing: -0.44px;
      color: $black;
    }
    .new-main-button {
      margin-top: 4.8rem;
    }
    @include tablet {
      h3 {
        font-size: 4.2rem;
        line-height: 1.3;
      }
      p {
        margin-top: 1.6rem;
        font-size: 1.8rem;
        line-height: 1.3;
      }
      .new-main-button {
        margin-top: 4rem;
      }
    }
    @include mobile {
      h3 {
        font-size: 3.2rem;
        line-height: 1.3;
      }
      p {
        margin-top: 1rem;
        font-size: 1.6rem;
        line-height: 1.5;
      }
      .new-main-button {
        margin-top: 3.2rem;
      }
    }
  }
  &-intro {
    padding: 12rem 0;
    background: #f8f8f8;
    .new-main__inner {
      display: flex;
      justify-content: space-between;
    }
    &-swiper {
      width: calc(100% - 42rem);
      max-height: 46rem;
      &__image {
        width: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .swiper {
        &-slide {
          background: linear-gradient(180deg, #7073ef 0%, #57c9c9 100%);
          overflow: hidden;
          border-radius: 1.6rem;
          box-shadow: 0.4rem 0.8rem 1.6rem 0rem rgba(17, 17, 17, 0.04);
          margin-bottom: 2rem;
        }
        &-pagination {
          top: auto;
          bottom: 6rem;
          left: 6rem;
          width: auto;
          text-align: left;
          &-bullet {
            border-color: $white;
            &-active {
              background-color: $white;
              border-color: $white;
            }
          }
        }
      }
    }
    &-login {
      &-form {
        width: 39.6rem;
        min-height: 46rem;
        padding: 4rem;
        background: #fff;
        border: 0.1rem solid #dedede;
        border-radius: 1.6rem;
        box-shadow: 0.4rem 0.8rem 1.6rem 0rem rgba(17, 17, 17, 0.04);
        &__form {
          .c {
            &-form {
              &-group {
                margin: 0;
                & + .c-form-group {
                  margin: 0;
                  & + button {
                    margin-top: 1.2rem;
                  }
                }
              }
            }
          }
        }
        &__title {
          margin-bottom: 3.2rem;
          color: #111;
          font-size: 2.2rem;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          text-align: center;
        }
        input {
          width: 100%;
          height: 4.8rem;
          margin-bottom: 1.2rem;
          padding: 0 2rem;
          border-radius: 0.8rem;
          border: 0.1rem solid #dedede;
          background: #fff;
          color: #000;
          font-size: 1.6rem;
          font-style: normal;
          font-weight: 300;
          line-height: normal;
          &:placeholder {
            color: #535353;
          }
        }
        button {
          width: 100%;
          height: 4.8rem;
          border: none;
          border-radius: 0.8rem;
          background: #ff5c01;
          color: #fff;
          text-align: center;
          font-size: 1.6rem;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
        &__link {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2.4rem;
          ul {
            display: flex;
            align-items: center;
            li {
              display: flex;
              align-items: center;
              a {
                color: #111;
                font-size: 1.6rem;
                font-style: normal;
                font-weight: 300;
                line-height: 2.4rem; /* 150% */
              }
              &:after {
                content: "";
                display: block;
                width: 0.3rem;
                height: 0.3rem;
                margin: 0 1rem;
                border-radius: 0.3rem;
                background: #999;
              }
              &:last-child {
                &::after {
                  display: none;
                }
              }
            }
          }
        }
        &__sns {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 4.5rem;
          strong {
            color: #111;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 700;
            line-height: 2.4rem;
            white-space: nowrap;
          }
          p {
            display: flex;
            align-items: center;
            a {
              display: block;
              width: 4.8rem;
              height: 4.8rem;
              border-radius: 2.4rem;
              margin-left: 1.2rem;
              font-size: 0;
              &:first-child {
                margin-left: 0;
              }
            }
          }
          &-naver {
            background: url(@img/main/sns-naver.svg) no-repeat 50% 50%;
          }
          &-kakao {
            background: url(@img/main/sns-kakao.svg) no-repeat 50% 50%;
          }
          &-onepass {
            background: url(@img/main/sns-one.svg) no-repeat 50% 50%;
          }
        }
      }
    }
    &-myInfo {
      width: 39.6rem;
      min-height: 46rem;
      padding-top: 4rem;
      background: #fff;
      border: 0.1rem solid #dedede;
      border-radius: 1.6rem;
      box-shadow: 0.4rem 0.8rem 1.6rem 0rem rgba(17, 17, 17, 0.04);
      overflow: hidden;
      &__profile {
        position: relative;
        button {
          position: absolute;
          top: 0;
          left: 50%;
          width: 8rem;
          min-width: auto;
          height: 8rem;
          transform: translateX(-50%);
          font-size: 0;
          background-color: transparent;
          border-radius: 0;
          justify-content: flex-end;
          align-items: flex-end;
          .ico {
            &-modify {
              width: 2.4rem;
              height: 2.4rem;
              border-radius: 50%;
              background-color: $black;
              background-image: url(@img/main/ic-profile-modify.svg);
              background-position: center;
              background-repeat: no-repeat;
            }
          }
        }
      }
      &__info {
        padding: 3rem 4rem;
        min-height: 11.9rem;
        ul {
          width: 100%;
          display: grid;
          gap: 2.4rem;
          grid-template-columns: 1fr 1fr 1fr;
          li {
            position: relative;
            width: 100%;
            text-align: center;
            span {
              display: block;
              line-height: 1.25;
              font-size: 1.6rem;
              color: #535353;
            }
            a {
              display: block;
              padding-top: 0.4rem;
              line-height: 1.25;
              font-size: 2.8rem;
              font-weight: 700;
              color: $black;
            }
            & + li {
              &::before {
                content: "";
                position: absolute;
                top: 0;
                left: -1.2rem;
                width: 0.1rem;
                height: 100%;
                background-color: #f1f1f1;
              }
            }
          }
        }
      }
      &__link {
        padding: 3rem;
        min-height: 18rem;
        background-color: #f7f8f9;
        &-list {
          display: flex;
          flex-direction: column;
          height: 100%;
          li {
            height: 5.4rem;
            background-color: $white;
            border-radius: 0.8rem;
            a {
              display: flex;
              height: 100%;
              padding: 0 2rem;
              align-items: center;
              justify-content: space-between;
              font-size: 1.6rem;
              color: $black;
            }
            & + li {
              margin-top: 1.2rem;
            }
          }
          i.ico {
            background: none;
            min-width: auto;
            width: 0.6rem;
            height: 0.6rem;
            border: 0.1rem solid #535353;
            border-width: 0.1rem 0.1rem 0 0;
            transform: rotate(45deg);
            opacity: 0.8;
            margin: 0 0 0 0.3rem;
          }
        }
      }
      &__text {
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 1.6rem 0 1.2rem;
        &.c-flex {
          padding: 0 3rem;
          width: 21.867rem;
          flex-direction: initial;
          justify-content: space-between;
          span {
            & + a,
            & + strong {
              padding-top: 0;
            }
          }
        }
        span {
          display: block;
          line-height: 1.2;
          font-size: 1.4rem;
          color: #535353;
          & + a,
          & + strong {
            padding-top: 0.3rem;
            display: block;
          }
        }
        & > a {
          line-height: 1.2;
          font-size: 2.4rem;
          font-weight: 700;
          color: #ff5c01;
        }
        strong {
          font-size: 2.4rem;
          font-weight: 700;
          color: #ff5c01;
        }
      }
      &__site {
        padding-top: 1.6rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        li {
          min-width: calc(33.333% - 0.8rem);
          background-color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          height: 7.8rem;
          border-radius: 0.8rem;
          &:first-child {
            .new-main-intro-myInfo__text {
              width: 21.867rem;
            }
          }
          p {
            display: flex;
            align-items: center;
            margin: 0;
            padding: 0;
            height: calc(100% - 3rem);
            img {
              max-height: 3rem;
            }
          }
          a.c-btn-link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 3rem;
            min-height: 3rem;
            margin: 0;
            border-top: 0.1rem solid #f1f1f1;
            font-size: 1.2rem;
            font-weight: 300;
            i.ico {
              background: none;
              min-width: auto;
              width: 0.6rem;
              height: 0.6rem;
              border: 0.1rem solid #535353;
              border-width: 0.1rem 0.1rem 0 0;
              transform: rotate(45deg);
              opacity: 0.8;
              margin: 0 0 0 0.3rem;
            }
          }
        }
      }
      .c {
        &-profile {
          width: 8rem;
          height: 8rem;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        &-text {
          &-title {
            &-lg {
              padding-top: 1.6rem;
              line-height: 1.2;
              font-size: 2rem;
              font-weight: 700;
              strong {
                font-weight: 700;
                color: #0175da;
              }
            }
            &-md {
              line-height: 1.2;
              font-size: 1.8rem;
            }
          }
        }
      }
    }
    @include tablet {
      padding: 8rem 0;
      .new-main__inner {
        flex-direction: column;
      }
      &-swiper {
        position: relative;
        width: 100%;
        max-height: none;
        .swiper {
          position: static;
          padding-bottom: 2rem;
          &-pagination {
            left: 0;
            bottom: 0;
            width: 100%;
            min-height: auto;
            text-align: center;
            &-bullet {
              border-color: $black;
              &-active {
                background-color: $black;
                border-color: $black;
              }
            }
          }
        }
        &__image {
          &.c-pc {
            display: block !important;
          }
        }
      }
      &-login {
        display: none;
      }
    }
    @include mobile {
      padding: 6rem 0;
      &-swiper {
        &__image {
          &.c-mo {
            display: block !important;
          }
          &.c-pc {
            display: none !important;
          }
        }
      }
    }
  }
  &-story {
    padding: 12rem 0;
    &__banner {
      padding-top: 8rem;
      //display: flex;
      //@at-rootjustify-content: space-between;
      display: grid;
      gap: 2.4rem;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      &-item {
        position: relative;
        display: block;
        border-radius: 1.6rem;
        width: 18rem;
        height: 38rem;
        overflow: hidden;
        transition: all 0.5s ease-in-out;
        & * {
          transition: all 0.3s ease-in-out;
        }
        &.active {
          width: 58.8rem;
          transition: all 0.4s ease-in-out;
          & * {
            transition: all 0.2s ease-in-out;
          }
          .new-main-story__banner {
            &-cont {
              padding: 0 5rem 4rem;
              margin-top: -1rem;
              animation: storyTxT 0.6s forwards ease-in-out;
              animation-delay: 0.4s;
              background: linear-gradient(
                360deg,
                rgba(0, 0, 0, 0.7) 0%,
                rgba(0, 0, 0, 0) 72.5%
              );
              .c {
                &-badge {
                  &-lg {
                    background-color: #ff0000;
                  }
                }
                &-text {
                  &-title {
                    &-lg {
                      padding-top: 1.7rem;
                      font-size: 2.8rem;
                    }
                  }
                }
              }
              p {
                display: block !important;
                font-weight: 300;
              }
            }
          }
        }
      }
      &-video {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.2s ease-in-out;
        }
      }
      &-cont {
        opacity: 0;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 0 3rem 3.5rem;
        color: $white;
        background: linear-gradient(
          360deg,
          rgba(0, 0, 0, 0.5) 0%,
          rgba(0, 0, 0, 0) 72.5%
        );
        animation: storyTxT2 0.2s forwards ease-in-out;
        .c {
          &-text {
            &-title {
              &-lg {
                padding-top: 1.2rem;
                line-height: 1.5;
                font-size: 2rem;
                letter-spacing: -0.5px;
              }
            }
          }
        }
        p {
          display: none !important;
          padding-top: 0.8rem;
          line-height: 1.4;
          font-size: 1.6rem;
          @include text-clamp(2);
        }
      }
      .c {
        &-badge {
          &-lg {
            padding: 0 1rem;
            height: 2.4rem;
            font-size: 1.3rem;
            font-weight: 800;
            //font-family: "Jalnan";
            background-color: rgba($black, 0.5);
          }
        }
      }
    }
    &-swiper {
      visibility: hidden;
      height: 0;
      overflow: hidden;
      .swiper {
        width: 100%;
        &-slide {
          width: 60rem;
          margin: 0 1.6rem;
        }
      }
      &-item {
        display: block;
        position: relative;
      }
      &__video,
      &__img {
        border-radius: 1.2rem;
        height: 30rem;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &__text {
        padding-top: 2rem;
        text-align: left;
        font-size: 1.6rem;
        color: #535353;
        p {
          margin-top: 0.8rem;
          @include text-clamp(1);
        }
        .c {
          &-badge {
            &-lg {
              padding: 0 1rem;
              height: 2.4rem;
              font-size: 1.3rem;
            }
          }
          &-text {
            &-title {
              &-md {
                padding-top: 1.2rem;
                line-height: 1.4;
                font-size: 2.2rem;
                font-weight: 800;
                color: $black;
              }
            }
          }
        }
      }
    }
    @include tablet {
      padding: 8rem 0;
      &__banner {
        display: none;
      }
      &-swiper {
        height: auto;
        margin: 4.8rem -2.4rem 0;
        width: calc(100% + 4.8rem);
        visibility: visible;
        &__video,
        &__img {
          position: relative;
          height: auto;
          padding-top: calc(100% / 16 * 9);
          img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
        .swiper {
          padding: 0 2.4rem;
          &-slide {
            width: 48rem;
            margin: 0 0.8rem;
          }
        }
      }
    }
    @include mobile {
      padding: 6rem 0;
      &-swiper {
        margin: 4rem -1.6rem 0;
        width: calc(100% + 3.2rem);
        &__text {
          padding: 2rem 0.8rem 0;
        }
        .swiper {
          padding: 0 1.6rem;
          &-slide {
            width: 29.6rem;
          }
        }
      }
    }
  }
  &-ai {
    padding: 12rem 0;
    background: #2d93ec;
    .new-main-title {
      text-align: center;
      h3,
      p {
        color: $white;
      }
      .new-main-button {
        color: $white;
        border-color: $white;
        &:after {
          background: url(@img/main/button-arrow-white.svg) no-repeat 50% 50%;
        }
      }
    }
    &__tab {
      margin: 8rem 0;
      ul {
        display: flex;
        justify-content: center;
        li {
          margin: 0 0.8rem;
          a {
            display: flex;
            align-items: center;
            height: 4.6rem;
            padding: 0 4rem;
            border-radius: 4.6rem;
            background-color: $white;
            color: $black;
            text-align: center;
            font-size: 1.8rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
          &.active {
            a {
              background-color: $black;
              font-weight: 700;
              color: $white;
            }
          }
        }
      }
      &-contents {
        height: 0;
        visibility: hidden;
        opacity: 0;
        &:not(.active) {
          overflow: hidden;
        }
        &.active {
          height: auto;
          opacity: 1;
          visibility: visible;
        }
      }
    }
    &-swiper {
      overflow: hidden;
      .swiper {
        &-pagination {
          display: none;
        }
      }
      &-item {
        display: block;
        background: #fff;
        border-radius: 1.6rem;
        overflow: hidden;
        img {
          width: 100%;
          height: 21.6rem;
          object-fit: cover;
        }
        p {
          padding: 2.4rem;
          strong {
            display: block;
            margin-bottom: 0.8rem;
            color: #111;
            text-overflow: ellipsis;

            font-size: 2rem;
            font-style: normal;
            font-weight: 700;
            line-height: 2.8rem;
          }
          span {
            color: #999;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
        }
      }
    }
    @include tablet {
      padding: 8rem 0;
      &-swiper {
        margin: 0 -2.4rem;
        width: calc(100% + 4.8rem);
        .swiper {
          padding: 0 2.4rem;
          &-slide {
            width: 38.4rem;
          }
        }
      }
    }
    @include mobile {
      padding: 6rem 0;
      &__tab {
        margin: 4rem 0;
        ul {
          li {
            margin: 0 0.4rem;
            a {
              display: flex;
              align-items: center;
              height: auto;
              padding: 0.8rem 2rem;
              border-radius: 5rem;
              font-size: 1.4rem;
              line-height: normal;
            }
          }
        }
      }
      &-swiper {
        margin: 0 -1.6rem;
        width: calc(100% + 3.2rem);
        .swiper {
          padding: 0 1.6rem;
          &-slide {
            margin-bottom: 2.8rem;
          }
          &-pagination {
            bottom: 0;
            display: block;
            &-bullet {
              border-color: $white;
              &-active {
                border-color: $white;
                background-color: $white;
              }
            }
          }
        }
      }
    }
  }
  &-mentoring {
    position: relative;
    z-index: 20;
    padding: 12rem 0;
    &__group {
      position: relative;
      margin-top: 8rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
    }
    &__img {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
      img {
        display: block;
        margin: 0 auto;
      }
    }
    &__item {
      position: relative;
      z-index: 5;
      padding-top: 6.4rem;
      min-height: 41rem;
      .c {
        &-message {
          position: relative;
          width: 36rem;
          min-height: 23rem;
          padding: 4rem 3.2rem;
          border-radius: 4rem;
          line-height: 1.4;
          font-size: 2.4rem;
          color: $white;
          text-align: center;
          background-color: #0661f9;
          &-left {
            &::after {
              content: "";
              position: absolute;
              bottom: -1.5rem;
              left: 0;
              width: 100%;
              height: 1.5rem;
              background: url(@img/main/pic-main-mentoring-left.svg) no-repeat 0
                100%;
            }
          }
          &-right {
            &::after {
              content: "";
              position: absolute;
              bottom: -1.5rem;
              right: 0;
              width: 100%;
              height: 1.5rem;
              background: url(@img/main/pic-main-mentoring-right.svg) no-repeat
                100% 100%;
            }
          }
          p {
            font-weight: 600;
          }
        }
      }
    }
    &__info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #f7f8f9;
      padding: 0 3rem;
      height: 7rem;
      line-height: 1.3;
      border-radius: 0.8rem;
      & + .new-main-mentoring__info {
        margin-top: 0.8rem;
      }
      dt {
        font-size: 1.6rem;
        color: $black;
        strong {
          font-weight: 700;
        }
      }
      dd {
        font-size: 1.6rem;
        color: #535353;
      }
    }
    &__plan {
      background-color: $white;
      padding: 1.5rem 3rem 1.4rem 3rem;
      border-radius: 0.8rem;
      dl {
        padding: 2.4rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1.6rem;
        line-height: 1.3;
        color: #535353;
        & + dl {
          border-top: 0.1rem solid #f1f1f1;
        }
        strong {
          font-size: 2rem;
          font-weight: 800;
          &:not(.c-text-primary) {
            color: $black;
          }
        }
      }
    }
    &__swiper {
      .swiper {
        &-slide {
          margin-bottom: 2.4rem;
        }
        &-pagination {
          bottom: -0.5rem;
          &-bullet {
            width: 0.8rem;
            height: 0.8rem;
            margin: 0 0.3rem !important;
            border-width: 0.1rem;
          }
        }
      }
    }
    .c {
      &-card {
        position: relative;
        padding: 4rem;
        border-radius: 1.6rem;
        box-shadow: 0rem 0.8rem 1.2rem 0rem rgba(17, 17, 17, 0.04);
        &--border {
          border: 0.1rem solid #dedede;
        }
        &--blue {
          background-color: #0661f9;
          .c {
            &-text {
              &-title {
                &-md {
                  font-weight: 600;
                  color: $white;
                }
              }
            }
          }
        }
        &--inline {
          margin-top: 8rem;
          gap: 2.4rem;
          &-col1 {
            grid-template-columns: 1fr;
          }
          &-col2 {
            grid-template-columns: 1fr 1fr;
          }
        }
        &--title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 3rem;
          p {
            margin: 0;
            padding: 0;
            font-size: 1.4rem;
            color: #535353;
          }
          .c {
            &-text {
              &-title {
                &-sm {
                  padding: 0;
                  display: flex;
                  align-items: center;
                  font-size: 2rem;
                  font-weight: 700;
                }
              }
            }
            &-badge {
              height: 2.6rem;
              margin-right: 1rem;
              padding: 0 1.2rem;
              font-size: 1.3rem;
              font-weight: 700;
            }
          }
        }
        &--swiper {
          padding: 0;
          border-radius: 0;
          dt {
            border-radius: 0.8rem 0.8rem 0 0;
            height: 13.8rem;
            overflow: hidden;
            margin-right: 0;
            a {
              display: block;
              width: 100%;
              height: 100%;
            }
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          dd {
            border: 0.1rem solid #dedede;
            border-top: none;
            border-radius: 0 0 0.8rem 0.8rem;
            font-size: 1.4rem;
            line-height: 1.3;
            a {
              display: block;
              width: 100%;
              padding: 1.6rem;
              color: $black;
              p {
                color: #535353;
              }
            }
            .c-text-title-md {
              margin: 0;
              padding: 0;
              font-size: 1.6rem;
              @include text-clamp(1);
            }
            p {
              margin: 0;
              padding: 0.8rem 0 0 0;
              @include text-clamp(1);
              color: #535353;
            }
          }
        }
        &--nodata {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          line-height: 1.3;
          color: #535353;
          .c {
            &-text {
              &-title {
                &-lg {
                  margin-bottom: 1.2rem;
                  font-size: 2.4rem;
                  color: $black;
                }
              }
            }
          }
          img {
            margin-bottom: 3rem;
          }
          p {
            margin-bottom: 4rem;
            font-size: 1.6rem;
            & + a {
              margin-top: 0 !important;
            }
          }
        }
        & > .c {
          &-badge {
            position: absolute;
            top: 0;
            left: 4rem;
            height: 3.2rem;
            padding-bottom: 0.2rem;
            border-radius: 0 0 1.6rem 1.6rem;
            font-size: 1.4rem;
            font-weight: 600;
          }
        }
        .c {
          &-box {
            &-scroll {
              width: calc(100% + 4.2rem);
              margin-right: -4.2rem;
              height: 22.6rem;
              overflow: hidden;
              overflow-y: auto;
              &::-webkit-scrollbar {
                width: 4.2rem;
              }
              &::-webkit-scrollbar-thumb {
                background-color: #dddddd;
                background-clip: padding-box;
                border: 1.8rem solid #fff;
                border-width: 0 1.8rem 0 1.8rem;
              }
              &::-webkit-scrollbar-track {
                background-color: #f7f8f9;
                border-radius: 0.4rem;
                border: 1.8rem solid #fff;
                border-width: 0 1.8rem 0 1.8rem;
              }
            }
          }
          &-btn {
            &-link {
              margin-top: 3rem;
            }
          }
        }
        dl {
          display: flex;
          & + dl {
            margin-left: 0;
            &::before {
              display: none;
            }
          }
        }
      }
      &-text {
        &-title {
          &-md {
            position: relative;
            padding-bottom: 3rem;
            line-height: normal;
            font-size: 2.6rem;
          }
        }
      }
      &-btn {
        &-link {
          margin: 0 auto;
          display: inline-flex;
          vertical-align: top;
          font-size: 1.6rem;
          color: $black;
          &.c-text-white {
            color: $white;
          }
        }
      }
      &-nodata {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.8rem;
        height: 100%;
        background-color: #f7f8f9;
        font-size: 1.6rem;
        color: #535353;
      }
    }
    @include tablet {
      padding: 8rem 0;
      &__group {
        margin-top: 4.8rem;
      }
      &__item {
        width: calc(50% - 1rem);
        padding-top: 0;
        .c {
          &-message {
            width: 100%;
            padding: 4rem 1rem;
          }
        }
      }
      &__img {
        display: none;
      }
      .c {
        &-card {
          &--inline {
            margin-top: 4.8rem;
            grid-template-columns: 1fr;
            gap: 2.4rem;
          }
        }
        &-nodata {
          min-height: 20rem;
        }
      }
    }
    @include mobile {
      padding: 6rem 0;
      &__group {
        margin-top: 4rem;
        flex-direction: column;
      }
      &__item {
        width: 100%;
        min-height: auto;
        & + .new-main-mentoring__item {
          margin-top: 4rem;
        }
        .c {
          &-message {
            width: 100%;
            min-height: 20rem;
            border-radius: 2.4rem;
            font-size: 2rem;
            &-left {
              &::after {
                width: 80%;
                left: 0;
                background-position-x: left;
              }
            }
          }
        }
      }
      &__info {
        height: 6rem;
        padding: 0 2rem;
        border-radius: 0.8rem;
        dd,
        dt {
          font-size: 1.4rem;
        }
      }
      &__swiper {
        margin: 0 -2rem;
        width: calc(100% + 4rem);
        .swiper {
          padding: 0 2rem;
        }
      }
      .c {
        &-card {
          padding: 2rem;
          border-radius: 0.8rem;
          &--inline {
            margin-top: 4rem;
            gap: 2rem;
          }
          &--title {
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            margin-bottom: 1.6rem;
            p {
              padding-top: 1rem;
            }
          }
          &--swiper {
            padding: 0;
            dt {
              border-radius: 0.8rem 0.8rem 0 0;
            }
            dd {
              border-radius: 0 0 0.8rem 0.8rem;
            }
          }
          &--nodata {
            text-align: center;
          }
          .c {
            &-badge {
              left: 2rem;
              height: 2.8rem;
              padding-bottom: 0.2rem;
              border-radius: 0 0 0.8rem 0.8rem;
              font-size: 1.3rem;
            }
            &-box {
              &-scroll {
                width: calc(100% + 2rem);
                height: 19.6rem;
                margin-right: -2rem;
                &::-webkit-scrollbar {
                  width: 2rem;
                }
                &::-webkit-scrollbar-thumb {
                  border: 0.7rem solid #fff;
                  border-width: 0 0.7rem 0 0.7rem;
                }
                &::-webkit-scrollbar-track {
                  border: 0.7rem solid #fff;
                  border-width: 0 0.7rem 0 0.7rem;
                }
              }
            }
          }
        }
        &-text {
          &-title {
            &-md {
              padding-bottom: 1.6rem;
              font-size: 2rem;
            }
          }
        }
      }
    }
  }
  &-consulting {
    position: relative;
    z-index: 20;
    padding: 12rem 0;
    background: #edf5ff;
    &__tag {
      position: relative;
      z-index: 1;
      margin-top: 8rem;
      text-align: center;
      &-item {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        text-align: left;
        &.aos-animate {
          .c {
            &-tag {
              transform: none;
              top: auto;
              left: auto;
              opacity: 1;
              transition: all 0.8s ease-in-out;
              transition-delay: 0.4s;
              animation-delay: 0.3s;
              animation-duration: 1.5s;
              animation-iteration-count: infinite;
              animation-timing-function: ease-in-out;
              &.tag {
                &1 {
                  top: 5.5rem;
                  left: 13.9rem;
                  animation-name: textAim5;
                }
                &2 {
                  top: 11rem;
                  left: -1.3rem;
                  animation-name: textAim2;
                }
                &3 {
                  top: 16rem;
                  left: 15.7rem;
                  animation-name: textAim1;
                }
                &4 {
                  top: 21.7rem;
                  left: 7.7rem;
                  animation-name: textAim2;
                }
                &5 {
                  bottom: 11.9rem;
                  left: -4rem;
                  animation-name: textAim7;
                }
                &6 {
                  bottom: 5.5rem;
                  left: 13.1rem;
                  animation-name: textAim8;
                }
                &7 {
                  top: 5.6rem;
                  right: 13.9rem;
                  animation-name: textAim2;
                }
                &8 {
                  top: 11.3rem;
                  right: 10.2rem;
                  animation-name: textAim5;
                }
                &9 {
                  top: 15.7rem;
                  right: -4rem;
                  animation-name: textAim2;
                }
                &10 {
                  top: 22rem;
                  right: 14.1rem;
                  animation-name: textAim5;
                }
                &11 {
                  bottom: 11.6rem;
                  right: -4rem;
                  animation-name: textAim3;
                }
                &12 {
                  bottom: 5.5rem;
                  right: 11.7rem;
                  animation-name: textAim8;
                }
              }
            }
          }
        }
      }
    }
    &__img {
      display: inline-flex;
      vertical-align: top;
      position: relative;
      text-align: center;
      z-index: 5;
      background-color: #edf5ff;
      img {
        margin: 0 auto;
        display: block;
      }
    }
    .c {
      &-tag {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        line-height: normal;
        font-family: "Jalnan";
        font-weight: 700;
        color: $black;
        opacity: 0;
        transition: all 0.6s ease-in-out;
        color: $black !important;
        &--blue {
          color: #0175da !important;
        }
        &.tag {
          &1 {
            font-size: 2.4rem;
            opacity: 0.6;
          }
          &2 {
            font-size: 2.4rem;
            opacity: 0.6;
          }
          &3 {
            font-size: 2rem;
            opacity: 0.2;
          }
          &4 {
            font-size: 3.2rem;
            opacity: 1 !important;
          }
          &5 {
            font-size: 2.8rem;
            opacity: 0.6;
          }
          &6 {
            font-size: 2.4rem;
            opacity: 0.4;
          }
          &7 {
            font-size: 2.2rem;
            opacity: 0.4;
          }
          &8 {
            font-size: 2rem;
            opacity: 0.2;
          }
          &9 {
            font-size: 2.6rem;
            opacity: 0.6;
          }
          &10 {
            font-size: 2.8rem;
            opacity: 0.8;
          }
          &11 {
            font-size: 3.2rem;
            opacity: 1 !important;
          }
          &12 {
            font-size: 2.2rem;
            opacity: 0.4;
          }
        }
      }
    }
    @include tablet {
      padding: 8rem 0;
      &__tag {
        margin-top: 4.8rem;
        &-item {
          display: none;
        }
      }
      &__img {
        img {
          max-width: 100%;
        }
      }
    }
    @include mobile {
      padding: 6rem 0;
      &__tag {
        margin-top: 4rem;
      }
    }
  }
  &-ls {
    position: relative;
    z-index: 10;
    padding: 12rem 0;
    background: #7d6bef;
    overflow: hidden;
    .new-main-title {
      h3,
      p {
        color: $white;
      }
    }
    &__list {
      display: flex;
      flex-wrap: wrap;
      gap: 3rem;
      width: 111rem;
      margin: 0 auto;
      margin-top: 8rem;
    }
    &__item {
      position: relative;
      width: 16rem;
      height: 16rem;
      top: -150rem;
      will-change: left, top;
      // opacity: 0;
      transform: perspective(50rem) rotate(0.001deg);
      .item {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
        width: 16rem;
        height: 16rem;
        background: #fff;
        will-change: left, top;
        transform: perspective(50rem) rotate(0.001deg);
        border-radius: 16rem;
        overflow: hidden;
        strong {
          margin-top: -0.8rem;
          display: block;
          font-size: 1.4rem;
          font-weight: 800;
        }
      }
    }
    &__info {
      margin-top: 8rem;
      border-radius: 1.6rem;
      background-color: $white;
      .c-flex {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
      }
      &-head {
        width: 43rem;
        height: 100%;
        text-align: center;
        img {
          max-height: 5.833rem;
        }
      }
      &-body {
        width: calc(100% - 43rem);
        padding: 4rem;
        border-left: 0.1rem solid #f1f1f1;
        text-align: center;
        .c-text-title-sm {
          margin-bottom: 3rem;
          line-height: normal;
          font-size: 2.6rem;
          font-weight: 700;
          color: $black;
        }
      }
      &-list {
        padding: 3rem;
        border-radius: 0.8rem;
        background-color: #fafafa;
        dl {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 1.6rem;
          line-height: 1.25;
          dt {
            color: #535353;
          }
          dd {
            strong {
              font-weight: 700;
              color: $black;
            }
          }
          & + dl {
            margin-top: 2.4rem;
          }
        }
        .c {
          &-progress {
            width: 40rem;
            height: 1rem;
            border-radius: 0.6rem;
            &--blue {
              background-color: #dedede;
              .c-progress-bar {
                background-color: #0175da;
              }
            }
          }
        }
      }
      &-link {
        margin-top: 3rem;
        display: inline-flex;
        vertical-align: top;
        font-size: 1.6rem;
        line-height: 1.25;
        color: #535353;
      }
    }
    @include tablet {
      padding: 8rem 0;
      overflow: hidden;
      &__list {
        width: 100%;
        margin-top: 4.8rem;
        justify-content: center;
      }
      &__info {
        margin-top: 4.8rem;
        border-radius: 1.2rem;
        .c-flex {
          flex-direction: column;
        }
        &-head {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 20.5rem;
        }
        &-body {
          width: 100%;
          border-left: none;
          border-top: 0.1rem solid #f1f1f1;
        }
      }
    }
    @include mobile {
      padding: 6rem 0;
      &__list {
        margin-top: 4rem;
        gap: 2rem;
        justify-content: center;
      }
      &__item {
        position: static;
        width: 9rem;
        height: 9rem;
        border-radius: 50%;
        .item {
          width: 9rem;
          height: 9rem;
          img {
            max-width: 100%;
            max-height: 3rem;
          }
          strong {
            margin-top: -0.5rem;
            font-size: 1.2rem;
          }
        }
      }
      &__info {
        margin-top: 4rem;
        border-radius: 0.8rem;
        &-head {
          height: 10.4rem;
          img {
            max-height: 2.987rem;
          }
        }
        &-body {
          padding: 2rem;
          .c-text-title-sm {
            font-size: 2rem;
            margin-bottom: 1.6rem;
          }
        }
        &-list {
          padding: 2rem;
          dl {
            font-size: 1.4rem;
            letter-spacing: -0.8px;
            dd {
              width: 40%;
            }
            dd {
              width: 60%;
              text-align: right;
            }
            & + dl {
              margin-top: 1.6rem;
            }
            &:last-child {
              flex-direction: column;
              dt,
              dd {
                width: 100%;
                text-align: left;
              }
              dd {
                padding-top: 1.2rem;
              }
            }
          }
          .c {
            &-progress {
              width: 100%;
            }
          }
        }
        &-link {
          margin-top: 1.6rem;
          font-size: 1.4rem;
        }
      }
    }
  }
  &-join {
    padding: 12rem 0;
    overflow: hidden;
    .new-main__inner {
      display: flex;
      justify-content: space-between;
    }
    .new-main-title {
      text-align: left;
      h3,
      p {
        color: $black;
      }
      .new-main-button {
        margin-top: 13.8rem;
      }
    }
    &__swiper {
      position: relative;
      width: 72rem;
      text-align: right;
      .swiper {
        &-button {
          &-prev,
          &-next {
            position: absolute;
            width: 4.8rem;
            height: 4.8rem;
            border-radius: 50%;
            background-color: $white;
            border: 0.1rem solid rgba(0, 0, 0, 0.03);
            box-shadow: 0.2rem 0.6rem 1rem 0rem rgba(17, 17, 17, 0.04);
            z-index: 10;
            transition: all 0.3s ease-in-out;
            &.swiper-button-disabled {
              opacity: 1;
              &::after {
                opacity: 0.5;
              }
            }
            &::after {
              font-size: 1.5rem;
              font-weight: 900;
              color: $black;
            }
          }
          &-prev {
            left: 1.8rem;
          }
          &-next {
            right: 1.8rem;
          }
        }
        &-slide {
          width: 64rem;
          border-radius: 1.6rem;
          box-shadow: 0.4rem 0.8rem 1.6rem 0rem rgba(17, 17, 17, 0.04);
          opacity: 0;
          text-align: left;
          &-prev,
          &-active,
          &-next {
            opacity: 1;
          }
          &.bg1 {
            background-color: #f85851;
          }
          &.bg2 {
            background-color: #0c82e9;
          }
          &.bg3 {
            background-color: #2da860;
          }
        }
      }
      &-item {
        position: relative;
        width: 100%;
        height: 42rem;
        padding: 6rem;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 1.8rem;
        line-height: 1.5;
        color: $white;
        &:focus {
          outline-offset: -0.1rem;
        }
        &--title {
          .c {
            &-text {
              &-title {
                &-lg {
                  padding-bottom: 1.4rem;
                  line-height: 1.3;
                  font-size: 3.2rem;
                  font-weight: 700;
                  & + p {
                    font-weight: 300;
                  }
                }
              }
            }
          }
        }
        &--link {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          p {
            width: calc(100% - 14rem);
            height: 5.4rem;
            padding: 0 2.4rem;
            display: flex;
            align-items: center;
            border-radius: 2.7rem 0 0 2.7rem;
            background-color: $white;
            color: #767676;
          }
          img {
            position: absolute;
            bottom: 5.4rem;
            right: 0;
          }
          .c {
            &-btn {
              min-width: 14rem;
              width: auto;
              height: 5.4rem;
              border-radius: 0 2.7rem 2.7rem 0;
              background-color: #d24640;
            }
          }
        }
        &--img {
          position: absolute;
          bottom: 0;
          right: 6rem;
        }
      }
    }
    @include tablet {
      padding: 8rem 0;
      .new-main__inner {
        flex-direction: column;
      }
      .new-main-title {
        text-align: center;
        h3,
        p {
          br {
            display: none;
          }
        }
        .new-main-button {
          margin-top: 4rem;
        }
      }
      &__swiper {
        margin-top: 4.8rem;
        padding-right: 0;
        text-align: center;
        width: 100%;
        .swiper {
          margin: 0 auto;
          border-radius: 1.2rem;
          &-button {
            &-prev {
              left: 50%;
              margin-left: -34.2rem;
            }
            &-next {
              right: 50%;
              margin-right: -34.2rem;
            }
          }
        }
        &-item {
          text-align: left;
        }
      }
    }
    @include mobile {
      padding: 6rem 0;
      .new-main-title {
        h3,
        p {
          br {
            display: block;
          }
        }
        .new-main-button {
          margin-top: 3.2rem;
        }
      }
      &__swiper {
        width: 100%;
        .swiper {
          height: 0;
          overflow: hidden;
          opacity: 0;
          width: 100%;
          &-button {
            &-prev,
            &-next {
              display: none;
            }
          }
        }
        .c-mo {
          display: block !important;
        }
        &-item {
          padding: 2rem 2rem 0 2rem;
          display: block;
          width: 100%;
          height: auto;
          min-height: auto;
          border-radius: 0.8rem;
          box-shadow: 0.4rem 0.8rem 1.6rem 0rem rgba(17, 17, 17, 0.04);
          text-align: left;
          font-size: 1.4rem;
          & + .new-main-join__swiper-item {
            margin-top: 1.6rem;
          }
          &:nth-child(1n) {
            background-color: #f85851;
          }
          &:nth-child(2n) {
            background-color: #0c82e9;
          }
          &:nth-child(3n) {
            background-color: #2da860;
          }
          &--title {
            .c {
              &-text {
                &-title {
                  &-lg {
                    padding-bottom: 1rem;
                    font-size: 2.4rem;
                  }
                }
              }
            }
          }
          &--img {
            position: static;
            padding-top: 2rem;
            text-align: right;
            img {
              max-height: 12rem;
            }
          }
          &--link {
            display: none;
          }
        }
      }
    }
  }
  &-sc {
    padding: 12rem 0;
    background: #f7f8f9;
    .new-main__inner {
      display: grid;
      gap: 2rem;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    &__item {
      width: 100%;
      min-height: 29.6rem;
      border-radius: 1.6rem;
      padding: 3rem 0;
      background: #fff;
      box-shadow: 0.4rem 0.8rem 1.6rem 0rem rgba(17, 17, 17, 0.04);
      text-align: center;
      strong {
        display: block;
        margin-bottom: 2rem;
        color: #111;
        text-align: center;
        font-size: 2.6rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.2; /* 128.571% */
      }
      p {
        margin-top: 1.6rem;
        color: #535353;
        text-align: center;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 300;
        line-height: 1.5; /* 150% */
      }
    }
    @include tablet {
      padding: 8rem 0;
      .new-main__inner {
        display: flex;
        flex-wrap: wrap;
        gap: 0;
      }
      &__item {
        border-radius: 1.2rem;
        width: calc(33.333% - 1.6rem);
        margin-left: 2.4rem;
        margin-top: 2.4rem;
        &:nth-child(1) {
          width: calc(50% - 1.2rem);
          margin-left: 0;
        }
        &:nth-child(2) {
          width: calc(50% - 1.2rem);
          margin-left: 2.4rem;
        }
        &:nth-child(3) {
          margin-left: 0;
        }
      }
    }
    @include mobile {
      padding: 6rem 0;
      .new-main__inner {
        display: grid;
        gap: 0.8rem;
        grid-template-columns: 1fr;
      }
      &__item {
        position: relative;
        width: 100% !important;
        height: auto;
        min-height: 14rem;
        border-radius: 0.8rem;
        padding: 2.4rem;
        margin: 0 !important;
        border-radius: 0.8rem;
        strong {
          margin: 0;
          text-align: left;
          font-size: 2rem;
          line-height: normal;
        }
        p {
          margin-top: 1.6rem;
          text-align: left;
          font-size: 1.4rem;
          line-height: 1.4;
        }
        img {
          position: absolute;
          top: 50%;
          right: 2rem;
          width: 10rem;
          height: 10rem;
          transform: translateY(-50%);
        }
      }
      .new-main__inner {
        flex-direction: column;
      }
    }
  }
  &-info {
    padding: 12rem 0;
    .new-main__inner {
      display: flex;
    }
    &-customer {
      width: calc(50% - 1.2rem);
      height: 24rem;
      margin-right: 2.4rem;
      padding: 3rem;
      border-radius: 1.6rem;
      border: 0.1rem solid #dedede;
      background: #fff;
      box-shadow: 0rem 0.8rem 1.2rem 0rem rgba(17, 17, 17, 0.04);
      dl {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        dt {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #111;
          font-size: 4.4rem;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          strong {
            color: #111;
            font-size: 3.6rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
          }
        }
        dd {
          display: flex;
          align-items: center;
          justify-content: space-between;
          p {
            color: #111;
            font-size: 2.2rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            span {
              display: block;
              margin-top: 1rem;
              color: #767676;
              font-family: SUIT;
              font-size: 1.4rem;
              font-style: normal;
              font-weight: 300;
              line-height: normal;
            }
          }
          a:not(.c-mo) {
            display: block;
            width: 4.8rem;
            height: 4.8rem;
            background: url(@img/main/customer-kakao.svg) no-repeat 50% 50%;
            font-size: 0;
          }
        }
      }
    }
    &-menu {
      display: grid;
      width: calc(50% - 1.2rem);
      grid-template-columns: 1fr 1fr;
      gap: 2.4rem;
      &__item {
        position: relative;
        display: block;
        width: 100%;
        height: 24rem;
        padding: 3rem;
        border-radius: 1.6rem;
        border: 0.1rem solid #dedede;
        background: #fff;
        box-shadow: 0rem 0.8rem 1.2rem 0rem rgba(17, 17, 17, 0.04);
        dl {
          dt {
            color: #111;
            font-size: 2.6rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
          }
          dd {
            margin-top: 1rem;
            color: #767676;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
          }
        }
        &--help {
          &:after {
            content: "";
            display: block;
            position: absolute;
            bottom: 3rem;
            right: 3rem;
            width: 7.2rem;
            height: 7.2rem;
            background: url(@img/main/customer-help.svg) no-repeat 50% 50%;
          }
        }
        &--support {
          &:after {
            content: "";
            display: block;
            position: absolute;
            bottom: 3rem;
            right: 3rem;
            width: 7.2rem;
            height: 7.2rem;
            background: url(@img/main/customer-support.svg) no-repeat 50% 50%;
          }
        }
      }
    }
    @include tablet {
      padding: 6rem 0 8rem;
      .new-main__inner {
        flex-direction: column;
      }
      &-customer {
        width: 100%;
        height: 22rem;
        margin-right: 0;
        margin-bottom: 2.4rem;
        border-radius: 1.2rem;
      }
      &-menu {
        width: 100%;
        &__item {
          width: 100%;
          height: 20rem;
          border-radius: 1.2rem;
          dl {
            dd {
              margin-top: 0.8rem;
            }
          }
        }
      }
    }
    @include mobile {
      padding: 6rem 0;
      &-customer {
        position: relative;
        height: 20rem;
        padding: 2rem;
        margin-bottom: 0.8rem;
        border-radius: 0.8rem;
        dl {
          justify-content: flex-start;
          dt {
            font-size: 0;
            strong {
              font-size: 2.4rem;
            }
          }
          dd {
            padding-top: 1.2rem;
            flex-direction: column;
            align-items: flex-start;
            p {
              font-size: 1.8rem;
              span {
                font-size: 1.2rem;
              }
            }
            a.c-mo {
              display: block;
              padding-top: 1.2rem;
              font-size: 3.2rem;
              font-weight: 700;
            }
            a:not(.c-mo) {
              position: absolute;
              right: 3.6rem;
              bottom: 2rem;
              width: 6rem;
              height: 6rem;
              background-size: 3.2rem;
              background-position: right bottom;
            }
          }
        }
      }
      &-menu {
        gap: 0.8rem;
        &__item {
          height: 16rem;
          padding: 2rem;
          border-radius: 0.8rem;
          dl {
            dt {
              font-size: 1.8rem;
              font-weight: 800;
            }
            dd {
              margin-top: 0.6rem;
              font-size: 1.4rem;
            }
          }
          &--help {
            &:after {
              bottom: 2rem;
              right: 2rem;
              width: 4rem;
              height: 4rem;
              background-size: 4rem;
            }
          }
          &--support {
            &:after {
              bottom: 2rem;
              right: 2rem;
              width: 4rem;
              height: 4rem;
              background-size: 4rem;
            }
          }
        }
      }
    }
  }
  &-button {
    display: inline-flex;
    align-items: center;
    height: 5.4rem;
    padding: 0 3rem;
    border: 0.1rem solid #535353;
    border-radius: 5.4rem;
    color: #111;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.4;
    &:after {
      content: "";
      display: block;
      width: 0.7rem;
      height: 1.2rem;
      margin-left: 3rem;
      background: url(@img/main/button-arrow.svg) no-repeat 50% 50%;
    }
    @include mobile {
      height: 4rem;
      padding: 0 2rem;
      font-size: 1.4rem;
      border-radius: 4rem;
      &:after {
        content: "";
        display: block;
        width: 0.6rem;
        height: 1rem;
        margin-left: 2rem;
        background-size: 0.6rem 1rem;
      }
    }
  }
  &-user {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -4.5rem;
    z-index: 2;
    dt {
      width: 9rem;
      height: 9rem;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    dd {
      padding-top: 2rem;
      line-height: normal;
      font-size: 2rem;
      font-weight: 600;
      color: $black;
      text-align: center;
      p {
        padding-top: 1.1rem;
      }
    }
    .c-badge-lg {
      height: 2.5rem;
    }
  }
  &-visual {
    position: relative;
    height: 100%;
    &__control {
      position: absolute;
      left: 50%;
      bottom: 50%;
      margin-left: -60rem;
      margin-bottom: -18rem;
      z-index: 10;
      .c {
        &-btn {
          width: 3.6rem;
          height: 3.6rem;
          border-radius: 50%;
          border: 0.2rem solid $white;
          &-stop {
            display: block;
          }
          &-play {
            display: none;
          }
          i.ico {
            &-stop {
              margin: 0 auto;
              border-width: 0 0.2rem;
              border-color: $white;
              color: $white;
            }
            &-play {
              margin-left: 0.95rem;
              border-left-color: $white;
              color: $white;
            }
          }
        }
      }
      &.active {
        .c {
          &-btn {
            &-stop {
              display: none;
            }
            &-play {
              display: block;
            }
          }
        }
      }
    }
    &__title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 30;
      .c {
        &-text {
          &-title {
            &-lg {
              line-height: 1.2;
              font-size: 6.4rem;
              font-weight: bold;
              color: $white;
            }
          }
        }
      }
    }
    &__bg {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba($black, 0.3);
      z-index: 20;
    }
    &__img,
    &__video {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 10;
      img,
      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    @include tablet {
      &__title {
        &.new-main__inner {
          padding: 0 4.4rem;
        }
        .c {
          &-text {
            &-title {
              &-lg {
                font-size: 5.2rem;
              }
            }
          }
        }
      }
      &__control {
        margin-bottom: -15rem;
        left: 4.4rem;
        margin-left: 0;
        .c {
          &-btn {
            width: 3rem;
            height: 3rem;
          }
        }
      }
    }
    @include mobile {
      &__title {
        &.new-main__inner {
          padding: 0 2.4rem;
        }
        .c {
          &-text {
            &-title {
              &-lg {
                font-size: 4rem;
              }
            }
          }
        }
      }
      &__control {
        margin-bottom: -12rem;
        left: 2.4rem;
        margin-left: 0;
        .c {
          &-btn {
            width: 2.7rem;
            height: 2.7rem;
            i.ico {
              &-stop {
                width: 0.8rem;
                height: 1rem;
              }
              &-play {
                margin-left: 0.8rem;
              }
            }
          }
        }
      }
    }
  }
  @keyframes storyTxT {
    from {
      opacity: 0;
      margin-bottom: -1rem;
    }
    to {
      opacity: 1;
      margin-bottom: 0;
    }
  }
  @keyframes storyTxT1 {
    from {
      opacity: 0;
      font-size: 1.6rem;
    }
    to {
      opacity: 1;
      font-size: 2.8rem;
    }
  }
  @keyframes storyTxT2 {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes textAim1 {
    0% {
      margin-top: -0.5rem;
      transform: scale(1);
    }
    50% {
      margin-top: 0;
      transform: scale(1.05);
      opacity: 0.85;
    }
    100% {
      margin-top: -0.5rem;
      transform: scale(1);
    }
  }
  @keyframes textAim2 {
    0% {
      margin-top: 0;
      transform: scale(1.05);
      opacity: 0.9;
    }
    50% {
      margin-top: -0.5rem;
      transform: scale(1);
    }
    100% {
      margin-top: 0;
      transform: scale(1.05);
      opacity: 0.9;
    }
  }
  @keyframes textAim3 {
    0% {
      margin-bottom: -0.5rem;
      transform: scale(1);
    }
    50% {
      margin-bottom: 0;
      transform: scale(1.05);
      opacity: 0.85;
    }
    100% {
      margin-bottom: -0.5rem;
      transform: scale(1);
    }
  }
  @keyframes textAim4 {
    0% {
      margin-bottom: 0;
      transform: scale(1.05);
      opacity: 0.85;
    }
    50% {
      margin-bottom: -0.5rem;
      transform: scale(1);
    }
    100% {
      margin-bottom: 0;
      transform: scale(1.05);
      opacity: 0.85;
    }
  }
  @keyframes textAim5 {
    0% {
      margin-top: -0.5rem;
      transform: scale(1);
    }
    50% {
      margin-top: 0;
      transform: scale(1.05);
      opacity: 0.75;
    }
    100% {
      margin-top: -0.5rem;
      transform: scale(1);
    }
  }
  @keyframes textAim6 {
    0% {
      margin-top: 0;
      transform: scale(1.05);
      opacity: 0.75;
    }
    50% {
      margin-top: -0.5rem;
      transform: scale(1);
    }
    100% {
      margin-top: 0;
      transform: scale(1.05);
      opacity: 0.75;
    }
  }
  @keyframes textAim7 {
    0% {
      margin-bottom: -0.5rem;
      transform: scale(1);
    }
    50% {
      margin-bottom: 0;
      transform: scale(1.05);
      opacity: 0.75;
    }
    100% {
      margin-bottom: -0.5rem;
      transform: scale(1);
    }
  }
  @keyframes textAim8 {
    0% {
      margin-bottom: 0;
      transform: scale(1.05);
      opacity: 0.75;
    }
    50% {
      margin-bottom: -0.5rem;
      transform: scale(1);
    }
    100% {
      margin-bottom: 0;
      transform: scale(1.05);
      opacity: 0.75;
    }
  }
}
</style>
