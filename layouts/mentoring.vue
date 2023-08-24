<template>
  <div class="c-page--mentoring">
    <Header />
    <div id="c-contents"><NuxtPage /></div>
    <Footer />
  </div>
</template>

<style lang="scss">
.mentoring {
  background-color: $white;
  .c {
    &-badge {
      &-lg {
        padding: 0 3rem;
        height: 5rem;
        font-size: 2rem;
        font-weight: 700;
        color: $white;
      }
      &-blue {
        background-color: #0c82e9;
      }
      &-green {
        background-color: #2da860;
      }
    }
    &-btn {
      &-box {
        margin-top: 2.4rem;
      }
      &-group {
        margin-top: 6.4rem;
        gap: 1.2rem;
      }
      &-outline {
        border-width: 0.1rem;
        background-color: transparent;
      }
      &-lg {
        padding: 0 3rem;
        height: 5.4rem;
        font-size: 1.8rem;
        font-weight: 700;
        border-color: #535353;
        i.ico {
          margin-left: 3rem;
        }
      }
      &-el {
        //엑스트라 라지 Extra Large
        width: 45.8rem;
        height: 10rem;
        justify-content: center;
        border-color: #535353;
        font-size: 2.8rem;
        font-weight: 700;
        i.ico {
          &-arrow {
            min-width: auto;
            width: 1.2rem;
            height: 1.2rem;
            border: 0.3rem solid $black;
            border-width: 0.3rem 0.3rem 0 0;
            transform: rotate(45deg);
            background: none;
            margin-left: 2.2rem;
          }
        }
      }
      &-inactive {
        background-color: #e6e8f1;
        font-weight: bold;
        color: #535353;
      }
    }
    &-card {
      border-radius: 1.6rem;
      &--inline {
        gap: 2.4rem;
        @include mobile {
          gap: 1.2rem;
        }
      }
      &-body {
        padding: 2.4rem;
      }
      &-title {
        min-height: auto;
        p {
          max-height: none;
          min-height: auto;
        }
        strong {
          font-size: 2rem;
          font-weight: 700;
          @include text-clamp(1);
          max-height: none;
          min-height: auto;
        }
        & + .c-card-subtitle {
          margin-top: 1rem;
        }
      }
      &-subtitle {
        white-space: normal;
        p {
          display: block;
          font-size: 1.6rem;
          color: $black;
          @include text-clamp(3);
        }
      }
    }
    &-tab {
      &-nav {
        ul {
          li {
            a {
              @include mobile {
                text-align: center;
                padding-left: 1rem;
                padding-right: 1rem;
              }
            }
          }
        }
      }
      &-contents {
        padding: 0;
        width: 100%;
        & > .mentoring__inner {
          padding-top: 8rem;
        }
        @include tablet {
          .mentoring__inner {
            padding-left: 2.4rem;
            padding-right: 2.4rem;
          }
        }
        @include mobile {
          .mentoring__inner {
            padding-left: 1.6rem;
            padding-right: 1.6rem;
          }
        }
      }
    }
    &-text {
      &-title {
        &-ve {
          line-height: 1;
          font-size: 16rem;
          font-weight: 700;
          letter-spacing: -5px;
          color: #eeeeee;
          & + .c-text-title-sub {
            margin-top: -3rem;
          }
        }
        &-sub {
          line-height: 1.58;
          font-size: 2.4rem;
          font-weight: 700;
          color: $black;
        }
      }
      &-primary {
        color: #f85851 !important;
      }
      &-blue {
        color: #0c82e9 !important;
      }
    }
    @include tablet {
      &-text {
        &-title {
          &-ve {
            font-size: 12rem;
          }
        }
      }
    }
    @include mobile {
      &-btn {
        &-group {
          margin-top: 8rem;
          flex-direction: column;
        }
        &-el {
          width: auto;
          min-width: 24rem;
          height: 5.4rem;
          font-size: 1.8rem;
        }
      }
      &-text {
        &-title {
          &-ve {
            font-size: 10rem;
          }
        }
      }
    }
  }
  i.ico {
    &-down {
      &-lg {
        width: 2.4rem;
        height: 2.4rem;
        background: url(@img/icon-download-lg-bk.svg) no-repeat center;
      }
    }
  }
  &__inner {
    position: relative;
    width: 120rem;
    margin: 0 auto;
    .c-pagination {
      padding-bottom: 8rem;
    }
    @include tablet {
      width: 100%;
    }
  }
  &-title {
    text-align: center;
    margin-bottom: 6rem;
    .c {
      &-text {
        &-title {
          &-lg {
            line-height: 1.25;
            font-size: 4.8rem;
            font-weight: 800;
          }
        }
      }
    }
    @include tablet {
    }
    @include mobile {
      .c {
        &-text {
          &-title {
            &-lg {
              font-size: 3.6rem;
            }
          }
        }
      }
    }
  }
  &-video {
    position: relative;
    width: 100%;
    height: 60rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .c {
      &-btn {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: 0;
        transform: translate(-50%, -50%);
        &-play {
          min-width: auto;
          width: 6rem;
          height: 6rem;
          border-radius: 50%;
          background-color: rgba($black, 0.3);
          justify-content: center;
          i.ico {
            &-play {
              border-bottom: 1.1rem solid transparent;
              border-top: 1.1rem solid transparent;
              border-left: 1.4rem solid $white;
              border-right: 1.4rem solid transparent;
              margin-left: 1.8rem;
            }
          }
        }
      }
    }
    @include tablet {
      height: 46rem;
    }
    @include mobile {
      height: 20rem;
    }
  }
  &-info {
    &__list {
      &-title {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 4rem;
        span {
          line-height: 1.2;
          font-size: 1.8rem;
          font-weight: 400;
        }
      }
      &-item {
        border-radius: 1.2rem;
        background-color: $white;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        & + .mentoring-info__list-item {
          margin-top: 2.4rem;
        }
        & > a {
          position: relative;
          display: block;
          width: 100%;
          &::after {
            content: "";
            position: absolute;
            top: 4rem;
            right: 4rem;
            width: 2.4rem;
            height: 2.4rem;
            background: url(@img/ic-arrow-lg-rotation.svg) no-repeat center;
          }
        }
        .c {
          &-text {
            &-title {
              &-md {
                line-height: 1.25;
                font-size: 3.2rem;
                font-weight: 700;
                color: $black;
                @include text-clamp(2);
              }
            }
          }
        }
      }
      &-contact {
        padding: 4rem;
        font-size: 4.8rem;
        font-weight: 800;
        span {
          color: #0175da;
        }
      }
    }
    &__item,
    &__map,
    &__faq {
      padding: 10rem 0;
    }
    &__item {
      &:first-of-type {
        padding-bottom: 0;
      }
      &.bgBU {
        background-color: #f4f8fd;
      }
      .mentoring-video {
        width: 80rem;
        height: 51.2rem;
        margin: 12rem auto 0;
        border-radius: 0.8rem;
        box-shadow: 0 0.8rem 1.6rem 0 rgba(17, 17, 17, 0.14);
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .c {
          &-btn {
            &-play {
              background-color: rgba($black, 0.5);
            }
          }
        }
      }
    }
    &__map {
      position: relative;
    }
    &__faq {
      background-color: #f7f8f9;
    }
    &__banner {
      display: flex;
      justify-content: space-between;
      &-cont {
        position: relative;
        width: 100%;
        text-align: left;
        z-index: 1;
        &:last-child {
          padding-top: 12rem;
          padding-bottom: 10rem;
          text-align: right;
          z-index: 2;
          .mentoring-info__banner-img {
            text-align: left;
            margin: -8.4rem 0 0 -1.4rem;
          }
        }
      }
      &-title {
        position: relative;
        padding-top: 3rem;
        line-height: 1.1;
        font-size: 14rem;
        font-weight: 800;
        letter-spacing: -5px;
        z-index: 3;
      }
      &-img {
        margin: -9.4rem -1.4rem 0 auto;
        text-align: right;
        width: 38rem;
        height: 36rem;
        border-radius: 1.6rem;
        overflow: hidden;
        box-shadow: 0.4rem 0.8rem 1.6rem 0rem rgba($black, 0.16);
        img {
          margin-top: -0.8rem;
          margin-left: -1.2rem;
        }
      }
    }
    &__copy {
      margin-top: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        display: inline-flex;
        align-items: center;
        vertical-align: top;
        font-size: 2.8rem;
        font-weight: 700;
        color: $black;
        &::before {
          content: "";
          display: block;
          width: 2.4rem;
          height: 2.4rem;
          margin-right: 1rem;
          background: url(@img/ic-check-sm.svg) no-repeat center;
        }
        & + span {
          margin-left: 6rem;
        }
      }
    }
    &__type {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: space-between;
      padding-top: 4rem;
      &-item {
        position: relative;
        width: 50%;
        text-align: center;
        .mentoring-info__type-cont {
          text-align: left;
          & * {
            text-align: left;
            color: $white;
          }
        }
        &:last-child {
          .mentoring-info__type-cont {
            text-align: right;
            border-radius: 22rem 2.4rem 2.4rem 22rem;
            margin-right: 0;
            margin-left: -3rem;
            background-color: #0c82e9;
            background-image: url(@img/pic-mentoring-img02.svg);
            background-position: left 6rem bottom;
            &::after {
              position: absolute;
              top: 0;
              right: calc(100% - 6rem);
              content: "";
              width: 63rem;
              height: 42rem;
              border-radius: 2.4rem 22rem 22rem 2.4rem;
              background-color: #586dd5;
            }
            & * {
              text-align: right;
              color: $white;
            }
          }
          .c {
            &-badge {
              &-lg {
                left: auto;
                right: 2rem;
                &::after {
                  left: auto;
                  right: 2.5rem;
                  background-image: url(@img/ic-message-right-tail.svg);
                }
              }
            }
          }
        }
      }
      &-cont {
        position: relative;
        padding: 5rem 4rem;
        height: 42rem;
        border-radius: 2.4rem 22rem 22rem 2.4rem;
        background-color: #f85851;
        background-position: right 6rem bottom;
        background-repeat: no-repeat;
        background-image: url(@img/pic-mentoring-img01.svg);
        margin-right: -3rem;
        box-shadow: 0.4rem 0.8rem 1.6rem 0 rgba($black, 0.16);
        margin-bottom: 6rem;
        overflow: hidden;
        &.bg2 {
          background-image: url(@img/pic-mentoring-img02.svg);
          background-position: left 6rem bottom;
        }
        .c {
          &-text {
            &-title {
              &-sub {
                margin-bottom: 1.8rem;
                line-height: 1.2;
                font-size: 1.8rem;
                font-weight: 400;
              }
              &-lg {
                line-height: 1.25;
                font-size: 3.2rem;
                font-weight: 700;
              }
            }
          }
        }
      }
      .c {
        &-badge {
          &-lg {
            position: absolute;
            top: -2rem;
            left: 2rem;
            padding: 0 2rem;
            height: 4rem;
            font-size: 1.6rem;
            font-weight: 400;
            z-index: 5;
            &::after {
              content: "";
              position: absolute;
              bottom: -1rem;
              left: 2.5rem;
              width: 1.5rem;
              height: 1rem;
              background-position: center;
              background-repeat: no-repeat;
              background-image: url(@img/ic-message-left-tail.svg);
            }
          }
        }
      }
    }
    @include tablet {
      &__list {
        &-item {
          flex-wrap: wrap;
          align-items: center;
          & > div {
            width: 50%;
          }
          & > .mentoring-info__list-contact {
            text-align: right;
          }
        }
      }
      &__item {
        .mentoring-video {
          width: 100%;
          height: 46rem;
        }
      }
      &__banner {
        &-title {
          font-size: 10rem;
        }
        &-img {
          margin: -4rem -0.9rem 0 auto;
          width: 28rem;
          height: 26.5rem;
          img {
            width: calc(100% + 3rem);
            height: calc(100% + 3rem);
          }
        }
        &-cont {
          &:last-child {
            padding-bottom: 2rem;
            .mentoring-info__banner-img {
              text-align: left;
              margin: -3rem 0 0 -0.9rem;
            }
          }
        }
      }
      &__type {
        position: relative;
        padding-bottom: 28rem;
        &-item {
          position: static;
          &:last-of-type {
            .mentoring-info__type-cont {
              &::after {
                right: calc(100% - 3rem);
                height: 35rem;
              }
            }
            .c {
              &-btn {
                bottom: 0;
              }
              &-badge {
                &-lg {
                  &::after {
                    right: 2rem;
                  }
                }
              }
            }
          }
        }
        &-cont {
          margin: 0;
          height: 35rem;
          padding: 3.6rem 2.7rem;
          background-size: auto 16.5rem;
        }
        .c {
          &-badge {
            &-lg {
              top: 2rem;
              &::after {
                width: 1rem;
                height: 0.6rem;
                background-size: auto 0.6rem;
                bottom: -0.6rem;
                left: 2rem;
              }
            }
          }
          &-btn {
            position: absolute;
            bottom: 12rem;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
    }
    @include mobile {
      &__list {
        &-item {
          flex-direction: column;
          & > div {
            width: 100%;
          }
          & > .mentoring-info__list-title {
            padding-bottom: 0;
          }
          & > .mentoring-info__list-contact {
            text-align: center;
          }
        }
        &-contact {
          padding-top: 2rem;
          font-size: 3.6rem;
        }
        .c {
          &-text {
            &-title {
              &-md {
                font-size: 2.4rem;
              }
            }
          }
        }
      }
      &__item {
        .mentoring-video {
          height: 20rem;
          margin-top: 3.4rem;
        }
      }
      &__type {
        padding-bottom: 17.6rem;
        &-item {
          width: 100%;
          &:last-child {
            margin-top: 5rem;
            .c-badge-lg {
              top: 42rem;
            }
            .mentoring-info__type-cont {
              margin-left: 0;
              &::after {
                display: none;
              }
            }
          }
        }
        .c {
          &-btn {
            bottom: 7.4rem;
            &-el {
              width: auto;
              min-width: auto;
              max-width: 100%;
              height: 5.4rem;
              padding: 0 3.2rem;
              font-size: 1.8rem;
              white-space: nowrap;
              i.ico-arrow {
                margin-left: 0.4rem;
                width: 0.8rem;
                height: 0.8rem;
                border-width: 0.2rem 0.2rem 0 0;
              }
            }
          }
        }
      }
      &__copy {
        flex-direction: column;
        align-items: flex-start;
        padding-left: 4rem;
        margin-top: 0;
        span {
          text-align: left;
          & + span {
            margin-left: 0;
          }
        }
      }
      &__banner {
        flex-direction: column;
        &-title {
          padding-top: 2rem;
          font-size: 8rem;
        }
        &-img {
          margin: -4rem 0 0 auto;
          width: 86%;
          height: auto;
          img {
            width: calc(100% + 5rem);
            height: calc(100% + 6.5rem);
            margin-left: -2.5rem;
            margin-right: -2.5rem;
            margin-top: -3rem;
            margin-bottom: -3.5rem;
          }
        }
        &-cont {
          &:last-child {
            padding-top: 7.2rem;
            .mentoring-info__banner-img {
              margin: -4rem auto 0 0;
            }
          }
        }
      }
    }
  }
  &-map {
    display: flex;
    width: 100%;
    height: 40rem;
    margin: 0 auto;
    gap: 2.4rem;
    &__img {
      position: relative;
      width: 50%;
      height: 100%;
      min-width: 50%;
      border-radius: 0.8rem;
      overflow: hidden;
      border: 0.1rem solid #dedede;
      img {
        object-fit: cover;
        width: calc(100% + 2px);
        height: calc(100% + 2px);
      }
      &-nodata {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: rgba(17, 17, 17, 0.64);
        font-size: 2.4rem;
        color: $white;
        font-weight: 700;
        z-index: 1;
      }
    }
    &__text {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 50%;
      height: 100%;
      gap: 3.9rem;
      &-head {
        display: flex;
        .c-form {
          &-group {
            width: 100%;
            margin-top: 0;
          }
          &-label {
            height: 0;
            margin: 0;
            padding: 0;
            overflow: hidden;
            visibility: hidden;
          }
        }
      }
      &-list {
        color: $black;
        height: 100%;
        overflow: hidden;
        overflow-y: auto;
        &::-webkit-scrollbar {
          width: 2.4rem;
        }
        &::-webkit-scrollbar-thumb {
          background-color: #dddddd;
          background-clip: padding-box;
          border: 1.8rem solid #fff;
          border-width: 0 0 0 1.8rem;
        }
        &::-webkit-scrollbar-track {
          background-color: #f7f8f9;
          border-radius: 0.4rem;
          border: 1.8rem solid #fff;
          border-width: 0 0 0 1.8rem;
        }
        ul.nodata {
          width: 100%;
          height: 100%;
          font-size: 1.6rem;
          font-weight: 300;
          color: $black;
          li {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            max-height: none;
          }
        }
        strong {
          font-size: 1.4rem;
          font-weight: 700;
          color: $black;
        }
        p {
          font-size: 1.6rem;
          font-weight: 300;
          color: #535353;
        }
        li {
          border-radius: 0.8rem;
          border: 0.1rem solid #dedede;
          max-height: 9.5rem;
          a {
            position: relative;
            display: block;
            width: 100%;
            padding: 2.4rem;
            &::after {
              position: absolute;
              top: 50%;
              right: 2.4rem;
              width: 2.4rem;
              height: 2.4rem;
              margin-top: -1.2rem;
              background: url(@img/ic-check-lg.svg) no-repeat center;
            }
          }
          &.active {
            border-width: 0.2rem;
            border-color: #535353;
            a {
              &::after {
                content: "";
              }
            }
          }
        }
        li + li {
          margin-top: 0.8rem;
        }
      }
    }
    @include tablet {
      flex-wrap: wrap;
      &__img {
        width: 29.4rem;
        min-width: 29.4rem;
        height: 20rem;
        &-nodata {
          text-align: center;
        }
      }
      &__text {
        width: calc(100% - 31.8rem);
        min-width: calc(100% - 31.8rem);
      }
    }
    @include mobile {
      flex-direction: column;
      height: auto;
      &__img {
        width: 100%;
        min-width: auto;
      }
      &__text {
        width: 100%;
        min-width: auto;
        &-list {
          ul {
            gap: 4rem;
            &.nodata {
              li {
                height: 20rem;
              }
            }
          }
        }
      }
    }
  }
  &-recruitment {
    &__title {
      .c {
        &-text {
          &-title {
            &-lg {
              line-height: 1;
              font-size: 12rem;
              font-weight: 800;
            }
            &-sm {
              padding-top: 4rem;
              line-height: 1.58;
              font-size: 2.4rem;
              font-weight: 700;
            }
          }
        }
      }
      p {
        padding-top: 3rem;
        line-height: 1.2;
        font-size: 2rem;
        font-weight: 400;
      }
    }
    &__banner {
      padding: 10rem 0;
      .mentoring__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
    &__item {
      padding: 10rem 0;
      &.bgbU {
        background-color: #f4f8fd;
      }
      &.bgGY {
        background-color: #f7f8f9;
      }
      .c {
        &-badge {
          &-lg {
            position: absolute;
            top: -2rem;
            left: 2rem;
            padding: 0 2rem;
            height: 4rem;
            font-size: 1.6rem;
            font-weight: 400;
            z-index: 5;
            &::after {
              content: "";
              position: absolute;
              bottom: -1rem;
              left: 2.5rem;
              width: 1.5rem;
              height: 1rem;
              background-position: center;
              background-repeat: no-repeat;
              background-image: url(@img/ic-message-left-tail.svg);
            }
          }
        }
        &-btn {
          &-lg {
            width: 37.8rem;
          }
        }
      }
    }
    @include tablet {
      &__title {
        width: 55%;
        .c {
          &-text {
            &-title {
              &-lg {
                font-size: 10rem;
              }
              &-sm {
                padding-top: 3rem;
                br {
                  display: none;
                }
              }
            }
          }
        }
        p {
          padding-top: 2.2rem;
        }
      }
      &__img {
        width: 45%;
        img {
          width: 100%;
        }
      }
    }
    @include mobile {
      &__banner {
        .mentoring__inner {
          flex-direction: column;
        }
      }
      &__title {
        width: 100%;
        .c {
          &-text {
            &-title {
              &-lg {
                font-size: 8rem;
              }
            }
          }
        }
        p {
          padding-top: 3rem;
        }
      }
      &__img {
        padding-top: 4.7rem;
        width: 100%;
      }
    }
  }
  &-complete {
    padding: 10rem 0;
    text-align: center;
    &__title {
      font-size: 4rem;
      font-weight: 700;
      line-height: normal;
      span {
        color: #0175da;
      }
      & + .mentoring-complete__img {
        margin-top: 4rem;
      }
    }
    &__text {
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 1.5;
      color: #535353;
    }
    &__img {
      & + .mentoring-complete__text {
        margin-top: 2rem;
      }
    }
    @include tablet {
      &__img {
        img {
          max-width: 21.6rem;
        }
      }
    }
    @include mobile {
    }
  }
  &-form {
    display: none;
    .c-btn-check:checked ~ .c-btn {
      border-color: $primary;
      color: $primary;
    }
    &__wrap {
      padding: 12.4rem 0;
      &.active {
        .mentoring-form__head {
          border-radius: 0.8rem 0.8rem 0 0;
          border-color: rgba($black, 0.12);
          @include mobile {
            border-radius: 0;
          }
          &::after {
            transform: translateY(-50%) rotate(180deg);
          }
        }
        .mentoring-form {
          display: block;
        }
      }
      @include mobile {
        margin: 0 -1.6rem;
        border-top: 0;
        padding-top: 0;
      }
    }
    &__head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      width: 64rem;
      height: 11.6rem;
      margin: 0 auto;
      padding: 0 9rem;
      border: 0.1px solid #535353;
      border-radius: 0.8rem;
      @include mobile {
        width: 100%;
        padding: 0 4rem;
        border-radius: 0;
        border-left: 0;
        border-right: 0;
      }
      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        right: 9rem;
        transform: translateY(-50%);
        width: 2rem;
        height: 2.5rem;
        background: url(@img/ic-select-arrow.svg) no-repeat center / 100%;
        transition: all 0.2s ease-in-out;
        @include mobile {
          right: 4rem;
        }
      }
      p {
        font-size: 2.4rem;
        color: $black;
        font-weight: 700;
      }
      .c-btn {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: none;
      }
    }
    &__box {
      width: 64rem;
      margin: 0 auto;
      padding: 7rem 9rem;
      border: 0.1rem solid rgba($black, 0.12);
      border-top: 0;
      &.radius {
        border-radius: 0 0 0.8rem 0.8rem;
        @include mobile {
          border-radius: 0;
        }
      }
      @include mobile {
        width: auto;
        padding: 7rem 1.6rem;
      }
    }
    .c {
      &-btn {
        &-box {
          margin-top: 0 !important;
          padding-top: 4rem;
          text-align: center;
        }
        &-group {
          margin-top: 0;
        }
      }
      &-form {
        &-group {
          margin-top: 4rem;
          @include mobile {
            margin-top: 3rem;
          }
        }
        &-label {
          &-wrap {
            &.custom {
              margin-bottom: 1.6rem;
              a {
                margin: 0;
              }
            }
          }
          &-btn {
            text-decoration: underline;
          }
          &.c-text-title-sub {
            margin: 0;
          }
          & + textarea.c-form-control {
            margin-top: 0;
          }
        }
        &-control + .c-form-check-group--col5 {
          margin-top: 0.8rem;
        }
      }
      &-text {
        &-sm {
          padding-top: 1.2rem;
          line-height: 1;
          font-size: 1.3rem;
        }
      }
    }
    @include tablet {
    }
    @include mobile {
    }
  }
  &-badge {
    &__item {
      display: flex;
      height: 22rem;
      padding: 4rem;
      border-radius: 1.6rem;
      border: 0.1rem solid #dedede;
      align-items: flex-start;
      justify-content: space-between;
      background: url(@img/ic-mentoring-pattern.svg) no-repeat center $white;
      & + .mentoring-badge__item {
        margin-top: 5.4rem;
      }
    }
    &__title {
      margin-bottom: 1rem;
      .c {
        &-text {
          &-title {
            &-md {
              line-height: 1.25;
              font-size: 3.2rem;
              font-weight: 700;
            }
          }
        }
      }
    }
    &__text {
      position: relative;
      line-height: 1.5;
      font-size: 1.8rem;
      font-weight: 400;
      color: $black;
    }
    @include tablet {
      &__item {
        flex-direction: column;
        align-items: center;
        height: auto;
        background-repeat: repeat;
        & + .mentoring-badge__item {
          margin-top: 2.4rem;
        }
        .badge__list {
          margin: 2.9rem auto 0;
        }
      }
      &__cont {
        width: 100%;
      }
    }
    @include mobile {
      &__item {
        padding: 4rem 2.4rem;
        .badge__list {
          margin: 3.2rem auto 0;
        }
      }
    }
  }
  &-step {
    margin-top: -2rem;
    & + .c-btn-group {
      margin-top: 8rem;
    }
    ul {
      width: 100%;
      display: grid;
      gap: 2.4rem;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      li {
        width: 100%;
        height: 40rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        text-align: center;
        &:nth-child(even) {
          justify-content: flex-start;
        }
      }
    }
    .c {
      &-text {
        &-title {
          &-sm {
            padding-top: 2rem;
            font-size: 2.4rem;
            font-weight: 700;
            span {
              font-family: Jalnan;
              margin-right: 0.8rem;
            }
          }
        }
      }
    }
    @include tablet {
      margin-top: -4rem;
      & + .c-btn-group {
        margin-top: 6.8rem;
      }
      ul {
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        li {
          justify-content: center;
          height: auto;
          &:first-child {
            padding-top: 6rem;
          }
          &:last-child {
            margin-top: -6rem;
          }
          &:nth-child(even) {
            justify-content: flex-start;
          }
        }
      }
    }
    @include mobile {
      margin-top: -1rem;
      & + .c-btn-group {
        margin-top: 5rem;
      }
      ul {
        grid-template-columns: 1fr;
        li {
          &:first-child,
          &:last-child {
            padding: 0;
            margin: 0;
          }
        }
      }
    }
  }
  &-support {
    padding-top: 4rem;
    &__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      & + .mentoring-support__item {
        margin-top: 2.4rem;
      }
      &.active {
        .mentoring-support {
          &__title {
            span {
              color: #0175da;
            }
            .c {
              &-text {
                &-title {
                  &-lg {
                    line-height: 1.24;
                    font-size: 10rem;
                    color: $black;
                  }
                }
              }
            }
          }
          &__text {
            display: block;
          }
        }
      }
    }
    &__title {
      display: flex;
      align-items: center;
      span {
        width: 11rem;
        font-size: 2.8rem;
        font-family: Jalnan;
        color: $black;
      }
      .c {
        &-text {
          &-title {
            &-lg {
              font-size: 8rem;
              font-weight: 800;
              color: #ddd;
              letter-spacing: -0.5rem;
            }
          }
        }
      }
    }
    &__text {
      display: none;
      padding-left: 4rem;
      line-height: 1.45;
      font-size: 2.2rem;
      font-weight: 700;
    }
    @include tablet {
      &__item {
        flex-direction: column;
        align-items: flex-start;
        & + .mentoring-support__item {
          margin-top: 4rem;
        }
      }
      &__title {
        width: 100%;
      }
      &__text {
        padding-left: 11rem;
        padding-top: 1.1rem;
      }
    }
    @include mobile {
      padding-top: 0;
      margin-top: -1rem;
      &__item {
        &.active {
          .mentoring-support {
            &__title {
              .c {
                &-text {
                  &-title {
                    &-lg {
                      font-size: 6rem;
                    }
                  }
                }
              }
            }
          }
        }
      }
      &__title {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .c {
          &-text {
            &-title {
              &-lg {
                padding-top: 2rem;
                font-size: 6rem;
              }
            }
          }
        }
      }
      &__text {
        padding: 2.4rem 0 0 0;
      }
    }
  }
  .badge {
    &__list {
      ul {
        display: flex;
        gap: 2rem;
        margin: 0 auto;
        li {
          text-align: center;
          span {
            line-height: 1.25;
            font-size: 1.8rem;
            font-weight: 700;
            color: $black;
          }
          img {
            display: block;
            margin: 0 auto 1.6rem;
            width: 10rem;
          }
        }
      }
      @include tablet {
        ul {
          li {
            img {
              width: 8rem;
            }
          }
        }
      }
      @include mobile {
        ul {
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          li {
            min-width: auto;
            span {
              font-size: 1.8rem;
            }
            img {
              width: 7rem;
            }
          }
        }
      }
    }
  }
}
</style>
