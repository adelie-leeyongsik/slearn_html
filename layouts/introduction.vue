<template>
  <div class="c-page--introduction">
    <Header>
      <!-- <MypageLNB /> -->
    </Header>
    <div id="c-contents"><NuxtPage /></div>
    <Footer />
  </div>
</template>

<style lang="scss">
/* 공통 추가 */
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
        padding: 4.8rem 9.6rem 4.8rem 4.8rem;
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
          border-width: 0 0.4rem 0.4rem 0;
          transform: rotate(45deg);
        }
        a {
          color: $black;
        }
      }
      dd {
        display: none;
        position: relative;
        margin-top: 4rem;
        padding: 4rem;
        border-radius: 1.6rem;
        background-color: #fafafa;
        font-size: 2rem;
        line-height: 1.6;
      }
      &.active {
        dt {
          padding-bottom: 4rem;
          &::before {
            transform: rotate(-135deg);
            margin-top: -0.4rem;
          }
          a {
            color: $primary;
          }
        }
        dd {
          display: block;
          margin: 0 4.8rem 4.8rem;
        }
      }
    }
    @include mobile {
      dl {
        & + dl {
          margin-top: 2.4rem;
        }
      }
      &-item {
        & + .c-accordion-item {
          margin-top: 2.4rem;
        }
        dt {
          a {
            font-size: 2.4rem;
            padding: 2.4rem 8rem 2.4rem 2.4rem;

            &::before {
              right: 2.4rem;
            }
          }
        }
        dd {
          margin-top: 2rem;
          font-size: 1.8rem;
          padding: 2rem;
        }
        &.active {
          dt {
            a {
              padding-bottom: 2rem;
            }
          }
          dd {
            margin: 0 2.4rem 2.4rem;
          }
        }
      }
    }
  }
}

.introduction {
  padding-bottom: 12rem;
  background-color: $white;
  @include tablet {
    padding-bottom: 2.4rem;
  }
  @include mobile {
    padding-bottom: 1.6rem;
  }
  .c {
    &-pagination {
      margin-top: 4rem;
    }
    &-tab {
      &-nav {
        & > ul {
          li {
            a {
              text-align: center;
              padding-left: 1.6rem;
              padding-right: 1.6rem;
            }
          }
        }
      }
      &-contents {
        > .introduction__title-lg:first-child {
          padding-top: 2rem;
        }
      }
      @include mobile {
        &-nav {
          width: 100%;
          overflow: hidden;
          overflow-x: auto;
          border-bottom: 0.1rem solid #dedede;
          & > ul {
            border-bottom: none;
            & > li {
              & > a {
                white-space: nowrap;
              }
            }
          }
        }
      }
    }
    &-bg {
      &-gray {
        background-color: #f1f1f1;
      }
    }
  }
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
        @include tablet {
          display: none;
        }
        @include mobile {
          display: none;
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
  }
  &-join {
    margin-top: 2.4rem;
    .introduction {
      &__contents {
        @include mobile {
          border-top: 1.6rem solid $light;
        }
      }
      &__body {
        position: relative;
        border-radius: 1.6rem;
        border: 0.1rem solid $secondary;
        overflow: hidden;
        background-color: $white;
        @include mobile {
          border: 0;
          border-radius: 0;
        }
        &--type01 {
          padding: 4rem;
          .introduction {
            &__body {
              &-group {
                & + .introduction__body-item {
                  margin-top: 2rem;
                }
              }
              &-item {
                flex-direction: column;
                padding: 3rem;
                border-radius: 0.8rem;
                background-color: #fafafa;
                & + .introduction__body-item {
                  margin: 0;
                }
              }
            }
          }
          @include tablet {
            border: 0.1rem solid $secondary;
            border-radius: 0.8rem;
          }
          @include mobile {
            padding: 4rem 2rem;
            .introduction {
              &__body {
                &-item {
                  padding: 2rem;
                }
              }
            }
          }
        }
        &--type02 {
          display: flex;
          flex-wrap: wrap;
          padding: 4rem;
          @include mobile {
            margin-top: 3.8rem !important;
            flex-direction: column;
            padding: 0;
          }
          .introduction__body-text {
            margin-top: 0 !important;
            p {
              @include mobile {
                font-size: 1.6rem;
              }
            }
          }
          .introduction__body {
            &-item {
              width: 50%;
              flex-direction: column;
              padding-right: 2rem;
              @include mobile {
                width: 100%;
                padding-right: 0;
              }
              &:nth-child(2) {
                padding-left: 2rem;
                padding-right: 0;
                @include mobile {
                  padding-left: 0;
                }
              }
              &:nth-child(3) {
                padding-top: 4.8rem;
                margin-top: -13.2rem;
                @include tablet {
                  margin-top: 0;
                }
                @include mobile {
                  margin-top: 0;
                  padding-top: 4.6rem;
                }
              }
              &:nth-child(4) {
                padding-top: 4.8rem;
                padding-left: 2rem;
                padding-right: 0;
                @include mobile {
                  margin-top: 0;
                  padding-top: 4.6rem;
                  padding-left: 0;
                }
              }
            }
            &-text {
              width: 100%;
              min-width: auto;
              padding: 0;
              ul {
                color: $black;
                span {
                  background-color: $black;
                }
              }
            }
            &-img {
              margin-top: 1.6rem;
              border: 0;
            }
          }
        }
        &-item {
          display: flex;
          & + .introduction__body-item {
            @include mobile {
              margin-top: 4.6rem;
            }
            .introduction__body-img {
              border-top: 0.1rem solid $secondary;
            }
          }
          @include mobile {
            flex-direction: column-reverse;
          }
        }
        &-text {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 4rem;
          min-width: 41rem;
          &--group {
            padding: 1rem 0 0 0;
            flex-direction: revert;
            min-width: auto;
            li {
              & + li {
                margin-left: 2rem;
              }
              & > ul {
                margin-top: 1.6rem;
              }
              img {
                margin-top: 0;
              }
            }
          }
          @include tablet {
            min-width: 25rem;
          }
          @include mobile {
            min-width: auto;
            padding: 4rem 2rem;
            border: 0.1rem solid $secondary;
            border-top: none;
            border-radius: 0 0 0.8rem 0.8rem;
            &--group {
              padding: 0;
              border: none;
              flex-direction: column;
              li {
                & + li {
                  margin: 3rem 0 0 0;
                  padding-top: 2rem;
                  border-top: 0.1rem solid $secondary;
                }
              }
            }
          }
          p {
            font-size: 2rem;
            color: $black;
            font-weight: 700;
          }
          ul {
            margin-top: 2.4rem;
            font-size: 1.6rem;
            color: $primary;
            @include mobile {
              margin-top: 1.4rem;
            }
            li + li {
              margin-top: 1.6rem;
              @include mobile {
                margin-top: 1.4rem;
              }
            }
            span {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              width: 2rem;
              min-width: 2rem;
              height: 2rem;
              margin-right: 0.6rem;
              border-radius: 50%;
              color: $white;
              background-color: $primary;
              line-height: 1;
            }
          }
          img {
            margin-top: 1.6rem;
            max-width: 100%;
          }
          a {
            margin-top: auto;
            font-size: 1.4rem;
            text-decoration: underline;
            color: #535353;
            @include mobile {
              display: block;
              position: static;
              margin-top: 2.2rem;
            }
          }
        }
        &-title {
          margin-bottom: 3.6rem;
          font-size: 2rem;
          font-weight: bold;
          line-height: normal;
          color: $black;
          &--sub {
            padding: 1rem 0 3.2rem;
            line-height: normal;
            font-size: 2rem;
            font-weight: bold;
            color: $black;
            & + p {
              font-weight: bold;
              font-size: 1.4rem;
              & + .introduction__box-text {
                padding-top: 2.1rem;
              }
            }
          }
        }
        &-img {
          position: relative;
          flex-grow: 1;
          border-left: 0.1rem solid $secondary;
          object-fit: cover;
          img {
            max-width: calc(100% + 0.2rem);
            width: calc(100% + 0.2rem);
            height: calc(100% + 0.2rem);
            margin: -0.1rem;
          }
          @include tablet {
            overflow: hidden;
            img {
              position: relative;
              left: 50%;
              transform: translateX(-50%);
              max-width: calc(79.2rem + 0.2rem);
              max-width: calc(79.2rem + 0.2rem);
              width: calc(79.2rem + 0.2rem);
              z-index: 1;
            }
          }
          @include mobile {
            border-radius: 0.8rem 0.8rem 0 0;
            overflow: hidden;
            border: 0.1rem solid $secondary;
          }
        }
        &-group {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 2rem;
          @include tablet {
            grid-template-columns: 1fr 1fr;
          }
          @include mobile {
            grid-template-columns: 1fr;
          }
        }
        &-arrow {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 7.8rem;
          .ico-arrow {
            width: 3.2rem;
            height: 1.8rem;
            background: url(@img/ic-arrow-bottom.svg) no-repeat center;
          }
          @include mobile {
          }
        }
      }
    }
    .introduction__contents-title--type02 {
      margin-bottom: 1.4rem;
      @include mobile {
        margin: 4.6rem -1.6rem 0;
        padding: 3rem 1.6rem 0;
        border-top: 1.6rem solid $light;
      }
    }
    .c {
      &-bg {
        &-bule {
          border-color: #57b8ea;
          background-color: rgba(87, 184, 234, 0.12);
        }
        &-primary {
          border-color: $primary;
          background-color: rgba($primary, 0.12);
        }
      }
      &-btn {
        &-box {
          position: relative;
          padding-top: 6rem;
        }
        &-lg {
          font-size: 1.6rem;
          font-weight: 600;
        }
      }
      &-text {
        &-title {
          &-lg {
            margin: 0;
            padding: 0;
            line-height: 1.4;
            font-size: 3.2rem;
            font-weight: bold;
            color: $black;
            & + ul,
            & + .c-text-title-sub {
              margin-top: 2.4rem;
            }
          }
          &-sub {
            line-height: 1.5;
            text-align: left;
            font-size: 1.8rem;
            font-weight: bold;
            color: $black;
          }
        }
      }
    }
    &__wrap {
      display: grid;
      gap: 0 2.4rem;
      grid-template-columns: 1fr 1fr;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: space-between;
    }
    &__info {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      border-radius: 0.8rem;
      border-width: 0.1rem;
      border-style: solid;
      padding: 4.8rem;
      color: $black;
      ul {
        li {
          line-height: 1.5;
          text-align: left;
          font-size: 1.8rem;
          font-weight: bold;
          color: $black;
        }
      }
      p {
        margin-top: auto;
        line-height: 1.4;
        font-size: 1.4rem;
        font-weight: normal;
      }
    }
    &__img {
      position: absolute;
      right: 0.2rem;
      bottom: 5.2rem;
      img {
        max-width: 12.8rem;
      }
    }
    @include tablet {
      &__wrap {
        grid-template-columns: 1fr;
        gap: 1.6rem 0;
      }
      &__info {
        p {
          margin-top: 8rem;
        }
      }
    }
    @include mobile {
      &__info {
        p {
          margin-top: 3.2rem;
        }
      }
      .c {
        &-btn {
          &-box {
            padding-top: 8rem;
          }
        }
      }
      &__img {
        display: none;
      }
    }
  }
  &-service {
    column-count: 2;
    column-gap: 2.4rem;
    &__img {
      padding: 2rem 2.4rem 8.2rem;
      text-align: center;
      img {
        max-width: 100%;
      }
    }
    &__info {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-bottom: 2.4rem;
      border-radius: 1.6rem;
      padding: 4rem;
      overflow: hidden;
      //border: 0.1rem solid #ddd;
      box-shadow: 0.4rem 0.8rem 1.6rem 0 rgba($black, 0.04);
      a {
        color: $black;
      }
    }
    &__head {
      padding: 0;
      line-height: 1;
      font-size: 6rem;
      font-weight: bold;
    }
    &__body {
      padding-top: 2.9rem;
    }
    .c {
      &-text {
        &-title {
          &-lg {
            padding-bottom: 2.9rem;
            line-height: 1.4;
            font-size: 2.8rem;
            font-weight: bold;
            color: $black;
          }
          &-sub {
            padding: 0;
            margin: 0;
            text-align: left;
            line-height: 1.6;
            font-size: 2rem;
            color: #535353;
            letter-spacing: -0.3px;
            strong {
              font-weight: bold;
            }
          }
        }
        &-blue {
          color: #0c82e9;
        }
      }
    }
    @include mobile {
      column-count: auto;
      column-gap: normal;
    }
  }
  &-dream {
    &--bg {
      background: url(@img/bg-introduction.png) no-repeat top -60rem center / 100%;
    }
    &__inner {
      width: 120rem;
      margin: 0 auto;
      @include tablet {
        width: auto;
      }
    }
    &__story {
      display: flex;
      gap: 6rem;
      margin-top: 6rem;
      &-item {
        width: 36rem;
        min-width: 36rem;
        height: 64rem;
        border-radius: 2.4rem;
        overflow: hidden;
        &-img {
          height: 100%;
          img {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        }
        &:first-child {
          margin-top: -8rem;
        }
        &:last-child {
          margin-top: -16rem;
        }
      }
    }
    &__section {
      &:first-child {
        .introduction__title-lg {
          margin-top: 10rem;
          & + p {
            &.c-text-center {
              padding-top: 1.6rem;
            }
          }
        }
      }
      .introduction__title-lg {
        margin-top: 16rem;
        & + p {
          &.c-text-center {
            color: $black;
          }
        }
      }
    }
    &__example {
      margin-top: 6.4rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2.4rem;
      .c {
        &-btn {
          position: absolute;
          top: 2.4rem;
          right: 2.4rem;
          min-width: auto;
          width: 4.8rem;
          height: 4.8rem;
          border-radius: 50%;
          background: url(@img/ic-like.svg) no-repeat center;
          background-size: 108%;
          opacity: 1;
        }
      }
      &-item {
        overflow: hidden;
        border-radius: 1.2rem;
        box-shadow: 0 0.8rem 1.2rem 0 rgba(17, 17, 17, 0.04);
        border: 0.1rem solid #ddd;
        &-img {
          position: relative;
          height: 28.2rem;
          overflow: hidden;
          a {
            width: 100%;
            height: 100%;
            &:focus {
              outline-offset: -0.1rem;
            }
          }
          img {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        }
        &-body {
          display: flex;
          flex-direction: column;
          position: relative;
          height: 24.3rem;
          padding: 3.6rem 2.4rem 3.8rem;
        }
        &-title {
          line-height: 1.2;
          font-size: 2rem;
          font-weight: bold;
          & + p {
            padding-top: 1.4rem;
          }
        }
        p {
          font-size: 1.6rem;
          line-height: 1.88;
          @include text-clamp(3);
        }
        a {
          display: block;
          color: $black;
        }
        &-foot {
          margin-top: auto;
          font-size: 1.4rem;
          color: #535353;
        }
      }
      @include tablet {
        margin-top: 5rem;
        gap: 1.6rem;
        grid-template-columns: 1fr;
      }
      @include mobile {
        margin-top: 4.8rem;
        gap: 0.8rem;
        .c {
          &-btn {
            top: 1.6rem;
            right: 1.6rem;
          }
        }
        &-item {
          &-body {
            height: 35.7rem;
          }
          p {
            font-size: 1.6rem;
            @include text-clamp(6);
          }
        }
      }
    }
    &__step {
      position: relative;
      margin-top: 6.4rem;
      &-item {
        .c {
          &-btn {
            position: absolute;
            bottom: -3rem;
            right: 2.4rem;
            min-width: auto;
            width: 6rem;
            height: 6rem;
            border-radius: 50%;
            background-color: $primary;
            opacity: 0.92;
            box-shadow: 0 0.8rem 0 0 rgba($primary, 0.25);
            .ico {
              &-play {
                width: 0;
                height: 0;
                border-bottom: 1rem solid transparent;
                border-top: 1rem solid transparent;
                border-left: 1.4rem solid $white;
                border-right: 0 solid transparent;
              }
            }
          }
        }
        &-img {
          position: relative;
          box-shadow: 0 0.8rem 1.2rem 0 rgba(17, 17, 17, 0.04);
          img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          p {
            width: 100%;
            height: 21.8rem;
            border-radius: 1rem;
            overflow: hidden;
          }
        }
        a {
          display: block;
        }
        > p {
          margin-top: 2rem;
          padding-right: 11.4rem;
          font-size: 1.8rem;
          font-weight: bold;
          color: $black;
          span {
            @include text-clamp(1);
          }
        }
      }
    }
    &__review {
      padding-top: 6.4rem;
      &-item {
        border-radius: 1.2rem;
        box-shadow: 0 0.8rem 1.2rem 0 rgba(17, 17, 17, 0.04);
        border: 0.1rem solid #ddd;
        overflow: hidden;
        &-head {
          position: relative;
          display: flex;
          align-items: center;
          height: 7.8rem;
          padding: 0 2.4rem;
          font-size: 1.6rem;
          color: $white;
          i.ico {
            margin: 0 0.8rem;
            &-dot {
              &-arrow {
                width: 2.9rem;
                height: 1.3rem;
                background: url(@img/ico-dot-arrow.svg) no-repeat center;
              }
            }
          }
          strong {
            font-size: 2.4rem;
            font-weight: 600;
          }
          &.head1 {
            background-color: #1a3989;
          }
          &.head2 {
            background-color: #760023;
          }
          &.head3 {
            background-color: #77ad21;
          }
        }
        &-body {
          padding: 0 2.4rem;
        }
        &-title {
          padding: 2.4rem 0 1.6rem;
          font-size: 2rem;
          font-weight: bold;
          color: $black;
        }
        &-text {
          font-size: 1.6rem;
          line-height: 1.88;
          color: $black;
          @include text-clamp(4);
        }
        &-foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 2.4rem;
          padding: 2.4rem 0;
          border-top: 0.1rem solid #dddddd;
          p {
            padding: 0;
            font-size: 1.4rem;
            line-height: normal;
            color: #535353;
          }
        }
        &-icon {
          position: absolute;
          bottom: -4rem;
          right: 2.4rem;
          width: 8rem;
          height: 8rem;
          border-radius: 50%;
          box-shadow: 0 0.8rem 1.2rem 0 rgba(17, 17, 17, 0.04);
        }
      }
    }
    @include tablet {
      .c {
        &-tablet {
          display: block;
          padding-top: 6.4rem;
          .swiper {
            margin: 0 -2.4rem 0 0;
            width: calc(100% + 2.4rem);
            padding: 0 2.4rem 0 0;
            &-slide {
              width: 35.2rem;
              height: 62.6rem;
              border-radius: 2.4rem;
              overflow: hidden;
            }
          }
        }
      }
      &__step {
        .swiper {
          margin: 0 -2.4rem 0 0;
          width: calc(100% + 2.4rem);
          padding: 0 2.4rem 0 0;
          &-slide {
            width: 38.4rem;
          }
        }
      }
      &__review {
        .swiper {
          margin: 0 -1.6rem;
          width: calc(100% + 3.2rem);
          padding: 0 1.6rem;
          &-slide {
            width: 28.2rem;
          }
        }
      }
    }
    @include mobile {
      .c {
        &-tablet {
          display: block;
          padding-top: 3.2rem;
          .swiper {
            margin: 0 -1.6rem 0 0;
            width: calc(100% + 1.6rem);
            padding: 0 1.6rem 0 0;
            &-slide {
              width: 23.9rem;
              height: 42.6rem;
            }
          }
        }
      }
      br {
        &.c {
          &-tablet {
            display: none;
          }
        }
      }
      &__section {
        .introduction__title-lg {
          margin-top: 12rem;
        }
        &:first-child {
          .introduction {
            &__title {
              &-lg {
                margin-top: 8rem;
              }
            }
          }
        }
      }
      &__step {
        padding-top: 3.2rem;
        .swiper {
          margin: 0 -1.6rem 0 0;
          width: calc(100% + 1.6rem);
          padding: 0 1.6rem 0 0;
          &-slide {
            width: 26.4rem;
          }
        }
        &-item {
          p {
            margin-top: 1.6rem;
            a {
              white-space: normal;
              @include text-clamp(2);
            }
          }
        }
      }
      &__review {
        padding-top: 3.2rem;
      }
    }
  }
  &-consulting {
    &__head {
      margin: 0.5rem 0 6rem;
    }
    &__info {
      margin-top: 2.2rem;
      padding: 4.8rem;
      border-radius: 1.6rem;
      background-color: #fafafa;
      p {
        padding: 2.4rem 0 0 0;
        font-size: 2rem;
        line-height: 1.6;
        color: $black;
      }
    }
    .c {
      &-text {
        &-title {
          &-lg {
            line-height: 1.5;
            font-size: 3.2rem;
            font-weight: bold;
          }
          &-sub {
            line-height: 1.2;
            font-size: 2.4rem;
            font-weight: bold;
            text-align: left;
            color: $black;
            & + .c-text-title-sub {
              margin-top: 0.8rem;
            }
          }
        }
      }
    }
    @include mobile {
      &__head {
        margin: 0.5rem 0 4rem;
      }
      &__info {
        padding: 2.4rem;
        p {
          padding: 1.6rem 0 0 0;
          font-size: 1.8rem;
        }
      }
      .c {
        &-text {
          &-title {
            &-lg {
              font-size: 2.4rem;
            }
            &-sub {
              font-size: 2rem;
            }
          }
        }
      }
    }
  }
  &-online {
    display: grid;
    gap: 0 2.4rem;
    grid-template-columns: 28.2rem auto;
    &__head {
      .c {
        &-text {
          &-title {
            &-lg {
              position: relative;
              line-height: 1.3;
              font-size: 3.2rem;
              font-weight: bold;
              color: $black;
            }
          }
        }
      }
      p {
        padding-top: 2.4rem;
        font-size: 1.8rem;
        color: $black;
      }
    }
    &__body {
      padding-top: 0.4rem;
    }
    &__info {
      border-width: 0.1rem;
      border-style: solid;
      border-radius: 0.8rem;
      padding: 4.8rem;
      & + .introduction-online__info {
        margin-top: 2.4rem;
      }
      dl {
        &.c {
          &-align {
            &-center {
              align-items: center;
            }
          }
        }
        margin-top: 4rem;
        display: flex;
        align-items: flex-start;
        dt {
          padding-right: 1.6rem;
        }
        dd {
          line-height: 1.3;
          font-size: 1.8rem;
          font-weight: 500;
          color: $black;
          ul {
            li {
              padding: 0.6rem 0;
            }
          }
        }
      }
      .c {
        &-text {
          &-title {
            &-lg {
              position: relative;
              line-height: 1;
              font-size: 2.4rem;
              font-weight: bold;
              color: $black;
              .c-badge {
                position: absolute;
                top: -5.4rem;
                padding: 0 1.2rem;
                height: 3.2rem;
                border-radius: 1.2rem;
                font-size: 1.2rem;
                font-weight: normal;
                z-index: 6;
                &::after {
                  content: "";
                  position: absolute;
                  bottom: -0.4rem;
                  left: 2rem;
                  width: 1.8rem;
                  height: 1.8rem;
                  background-color: $black;
                  transform: rotate(45deg);
                  z-index: -1;
                }
              }
            }
          }
        }
      }
    }
    &__link {
      padding-top: 3.2rem;
      display: grid;
      gap: 1.6rem;
      grid-template-columns: 1fr 1fr;
    }
    .c {
      &-badge {
        &-lg {
          max-width: 7.6rem;
          height: 3.6rem;
          line-height: 3.6rem;
          font-size: 1.6rem;
        }
        &-blue {
          background-color: #0175da;
          font-weight: 600;
          color: $white;
        }
        &-green {
          background-color: #3ea668;
          font-weight: 600;
          color: $white;
        }
      }
      &-bg {
        &-blue {
          border-color: #0175da;
          background-color: rgba(1, 117, 218, 0.05);
        }
        &-green {
          border-color: #3ea668;
          background-color: rgba(62, 166, 104, 0.05);
        }
      }
      &-btn {
        .ico {
          &-arrow {
            background: none;
            min-width: 1rem;
            width: 1rem;
            height: 1rem;
            border: 0.2rem solid $black;
            border-width: 0.2rem 0.2rem 0 0;
            transform: rotate(45deg);
          }
        }
        &-green {
          padding: 0 2.4rem;
          height: 6rem;
          background-color: rgba(62, 166, 104, 0.12);
          font-size: 1.6rem;
          font-weight: bold;
          color: $black;
          justify-content: space-between;
        }
      }
    }
    @include tablet {
      display: block;
    }
    @include mobile {
      margin-top: 0;
      display: block;
      &__head {
        padding-bottom: 3rem;
        text-align: center;
      }
      &__info {
        padding: 2.4rem;
        dl {
          dd {
            font-size: 1.6rem;
            letter-spacing: -0.5px;
          }
        }
        .c {
          &-text {
            &-title {
              &-lg {
                line-height: 1.3;
                .c-badge {
                  top: -4.4rem;
                }
              }
            }
          }
        }
      }
      &__link {
        grid-template-columns: 1fr;
      }
    }
  }
  &-best {
    &__head {
      padding: 2rem 0 6rem;
    }
    &__body {
      text-align: center;
      & > p {
        text-align: center;
        margin: 0 auto;
        &:first-child {
          padding-bottom: 11.6rem;
        }
        & > img {
          max-width: 100%;
          margin: 0 auto;
          @include tablet {
            width: 100%;
            max-width: 67.2rem;
          }
          @include mobile {
            width: 100%;
            max-width: 32.8rem;
          }
        }
        & + div {
          padding-top: 10rem;
        }
      }
    }
    .c {
      &-text {
        &-title {
          &-lg {
            line-height: 1.5;
            font-size: 3.2rem;
            font-weight: bold;
          }
        }
        &-blue {
          color: #0175da;
        }
      }
    }
    @include tablet {
    }
    @include mobile {
      &__body {
        & > p {
          &:first-child {
            padding-bottom: 6rem;
          }
          & + div {
            padding-top: 6rem;
          }
        }
      }
    }
  }
  &__wrap {
    overflow: hidden;
    @include tablet {
      padding: 0 2.4rem;
    }
    @include mobile {
      padding: 0 1.6rem;
    }
  }
  &__head {
    margin-top: 3.8rem;
    text-align: center;
    .c-btn-lg {
      margin-top: 2.2rem;
    }
  }
  &__title {
    &-lg {
      font-size: 3.2rem;
      font-weight: 700;
      color: $black;
      line-height: 1.25;
      & + p {
        &.c-text-center {
          padding: 2.4rem 0 0 0;
          line-height: 1.5;
          font-size: 1.6rem;
          color: #535353;
        }
      }
      & + .introduction__title-sub {
        margin-top: 3.2rem;
      }
    }
    &-sub {
      font-size: 2rem;
      font-weight: 700;
      line-height: normal;
      color: $black;
    }
    &-text {
      margin-top: 1.2rem;
      font-size: 1.6rem;
      line-height: 1.5;
      color: $black;
    }
    &-img {
      margin-bottom: 0.8rem;
    }
    @include mobile {
      &-img {
        img {
          max-height: 7.2rem;
        }
      }
    }
  }
}
</style>
