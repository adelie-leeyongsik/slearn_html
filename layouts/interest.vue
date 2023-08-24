<template>
  <div class="c-page--interest">
    <Header>
      <!-- <MypageLNB /> -->
    </Header>
    <div id="c-contents"><NuxtPage /></div>
    <Footer />
  </div>
</template>

<style lang="scss">
@mixin laptop {
  @media (max-height: 830px) {
    @content;
  }
}

i.ico {
  &-dot {
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background-color: $primary;
  }
}
.c {
  //message
  &-message {
    display: inline-block;
    vertical-align: top;
    padding: 1rem 2rem;
    color: $black;
    line-height: 1.5;
    font-size: 1.6rem;
    &--cont {
      &.c-text-center {
        padding: 1.9rem 1rem;
        font-size: 1.6rem;
        font-weight: 500;
      }
      &.c-text-left {
        padding: 1.9rem 1rem;
      }
      .c {
        &-btn {
          &-group {
            padding-top: 1.2rem;
          }
        }
        &-form {
          &-group {
            &.c-flex {
              margin: 0;
              padding: 1.9rem 1rem;
              display: flex;
              .c {
                &-btn {
                  min-width: 10rem;
                }
                &-form {
                  &-control {
                    margin: 0;
                    width: 25rem;
                    height: 4.8rem;
                    & + .c-form-control {
                      margin-left: 0.6rem;
                    }
                    & + .c-btn {
                      margin-left: 0.6rem;
                    }
                  }
                  &-group {
                    margin: 0;
                    & + .c-form-group {
                      margin-left: 0.6rem;
                    }
                    & + .c-btn {
                      margin-left: 0.6rem;
                    }
                  }
                }
              }
              @include mobile {
                display: block;
                text-align: center;
                .c {
                  &-btn {
                    min-width: 16rem;
                  }
                  &-form {
                    &-control {
                      margin: 0;
                      width: 100%;
                      & + .c-form-control {
                        margin: 0.6rem 0 0 0;
                      }
                      & + .c-btn {
                        margin: 0.6rem auto 0;
                      }
                    }
                    &-group {
                      margin: 0;
                      select {
                        min-width: 20rem;
                      }
                      & + .c-form-group {
                        margin: 0.6rem 0 0 0;
                      }
                      & + .c-btn {
                        margin: 0.6rem auto 0;
                        min-width: 100%;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        &-text {
          &-title {
            &-lg {
              padding: 2rem 0 0.8rem;
              font-size: 2.6rem;
              font-weight: bold;
              line-height: 0.92;
            }
          }
        }
      }
      & > p {
        & > span {
          display: block;
          font-size: 1.4rem;
          line-height: 1.5;
          color: #535353;
        }
      }
    }
    &--foot {
      padding: 2rem 0 0 0;
      a {
        display: inline-flex;
        vertical-align: top;
        img {
          display: block;
          width: 3.6rem;
        }
        & + a {
          margin-left: 0.8rem;
        }
      }
    }
    &--manager,
    &--query {
      border-radius: 0 2.2rem 2.2rem 2.2rem;
    }
    &--user {
      border-radius: 2.2rem 0 2.2rem 2.2rem;
    }
    &--manager {
      background-color: #e6e8f1;
    }
    &--user {
      background-color: $primary;
      color: $white;
    }
    @include mobile {
      &--cont {
        word-break: keep-all;
      }
    }
  }
  //chips
  &-chips {
    &--sm {
      &.active {
        background-color: $primary;
        border-color: $primary;
      }
    }
  }
  &-form {
    &-group {
      &--like {
        .c {
          &-form {
            &-radio {
              &-input {
                &:checked {
                  & + .c-btn-sm--round {
                    background-color: $primary;
                    border: none;
                    font-weight: 400;
                    color: $white;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  &-slide {
    &-box {
      position: relative;
    }
  }
  &-card {
    background-color: $white;
    &-body {
      background-color: transparent;
    }
  }
}

.interest {
  position: relative;
  /*
  @include tablet {
    height: calc(100vh - 6.1rem);
    overflow: hidden;
    overflow-y: auto;
  }*/
  .interest-haed {
    & + .interest-body {
      padding-bottom: 16rem;
      @include tablet {
        padding-bottom: 0;
      }
    }
  }
  &-item {
    &__message {
      position: relative;
      display: flex;
      align-items: center;
      margin: 0 0 0 1rem;
      border: 0.1rem solid #dedede;
      height: 6rem;
      border-radius: 0.8rem;
      background-color: $white;
      width: 100%;
      .c {
        &-form {
          &-control {
            border: none;
            border-radius: 0;
            height: 6rem;
            background-color: transparent;
            padding-right: 10rem;
          }
        }
        &-btn {
          position: absolute;
          top: 50%;
          right: 1.2rem;
          transform: translateY(-50%);
          &-radius {
            min-width: 7.3rem;
            height: 3.6rem;
            border-radius: 3.6rem;
          }
        }
      }
    }
  }
  &-haed {
    background-color: $white;
    overflow: hidden;
    padding: 10rem 0;
    &__title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 4rem;
      border-bottom: 0.1rem solid #eeeeee;
      .c {
        &-btn {
          & + .c-btn {
            margin-left: 0.8rem;
          }
        }
        &-badge {
          margin-right: 0.8rem;
          &-group {
            margin-top: 2rem;
          }
          &-lg {
            height: 4.8rem;
            font-size: 1.6rem;
            font-weight: 700;
            color: #ff5c01;
          }
          &-outline {
            border: 0.2rem solid #ff5c01;
          }
        }
        &-text {
          &-title {
            &-lg {
              line-height: 1.5;
              font-size: 2.4rem;
              font-weight: 700;
            }
          }
        }
      }
    }
    &__cont {
      .c {
        &-text {
          &-title {
            &-sm {
              display: flex;
              align-items: center;
              margin-top: 6rem;
              font-size: 2rem;
              font-weight: 700;
              color: $black;
              strong {
                margin-left: 0.8rem;
                font-size: 2.4rem;
                font-weight: 700;
                color: $primary;
              }
            }
          }
        }
        &-slide {
          &-box {
            margin-top: 2.4rem;
          }
        }
      }
      .swiper {
        position: static;
        &-slide {
          .c {
            &-card {
              width: 100%;
              &-title {
                min-height: 2.7rem;
                @include text-clamp(1);
                font-weight: bold;
              }
              &-img {
                height: 21.6rem;
                position: relative;
                width: 100%;
                > img {
                  position: absolute;
                  top: 0;
                  left: 0;
                  object-fit: cover;
                  width: 100%;
                  height: 100%;
                }
              }
              &-body {
                width: 100%;
              }
              &-foot {
                text-align: left;
              }
            }
          }
        }
        &-button {
          &-prev,
          &-next {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            background-color: $white;
            box-shadow: 0 0.8rem 1.2rem 0 rgba(17, 17, 17, 0.04);
            border: 0.1rem solid #dedede;
            &:after {
              color: #000;
              font-size: 1.5rem;
              font-weight: 900;
            }
          }
          &-disabled {
            opacity: 1;
            pointer-events: all !important;
            &:after {
              color: #959595;
            }
          }
          &-prev {
            left: -2rem;
          }
          &-next {
            right: -2rem;
          }
        }
      }
    }
    @include tablet {
      padding: 10rem 2.4rem;
      &__title {
        flex-direction: column;
        .c {
          &-btn {
            &-sm {
              height: 3.6rem;
            }
            &-group {
              margin: 2rem 0 0 0;
              padding: 0;
            }
          }
          &-text {
            &-title {
              &-lg {
                text-align: center;
              }
            }
          }
        }
      }
      &__cont {
        .c {
          &-slide {
            &-box {
              margin-top: 1rem;
            }
          }
        }
      }
    }
    @include mobile {
      padding: 4.5rem 1.6rem;
      &__cont {
        .swiper {
          &-button {
            &-prev {
              left: -1.2rem;
            }
            &-next {
              right: -1.2rem;
            }
          }
        }
      }
    }
  }
  &-body {
    background-color: #f2f3f8;
  }
  &__wrap {
    display: grid;
    grid-template-columns: 25.8rem 1fr;
    gap: 0 4.8rem;
    width: 100%;
    margin: 0 auto;
    padding: 8rem 0;
    @include tablet {
      display: flex;
      flex-direction: column;
      gap: unset;
      padding: 7.5rem 2.4rem 0;
    }
    @include mobile {
      padding: 7.5rem 1.6rem;
    }
  }
  &__inner {
    width: 120rem;
    margin: 0 auto;
    @include tablet {
      width: auto;
    }
  }
  &__snb {
    display: flex;
    flex-direction: column;
    width: 25.8rem;
    min-width: 25.8rem;
    &-box {
      position: relative;
      height: 58.4rem;
      padding: 3rem;
      border-radius: 1.6rem;
      border: 0.1rem solid #d5d8e5;
      background-color: $white;
      &::before {
        content: "";
        position: absolute;
        top: -1rem;
        right: -1rem;
        width: 4.8rem;
        height: 4.8rem;
        background: url(@img/ic-message-color.svg) no-repeat center;
      }
      &--title {
        padding: 0;
        line-height: 1.38;
        font-size: 2.6rem;
        font-family: "Jalnan";
        color: $black;
      }
      &--menu {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        li {
          padding: 4rem 0 0 0;
          a {
            display: flex;
            align-items: flex-start;
            line-height: 1.44;
            font-size: 1.8rem;
            font-weight: 700;
          }
        }
      }
    }
    &-banner {
      margin-top: 2.4rem;
    }
    &-link {
      li {
        border-radius: 1.6rem;
        overflow: hidden;
        a {
          position: relative;
          display: block;
          height: 100%;
          padding: 2.8rem 3rem;
          line-height: 1.25;
          font-size: 1.4rem;
          font-weight: 400;
          color: $black;
          &:focus {
            outline-offset: -0.1rem;
          }
        }
        & + li {
          margin-top: 2.4rem;
        }
        &.box1 {
          height: 14.6rem;
          background-color: #2da860;
          background-image: url(@img/pic-interest-sub-bg.svg);
          background-repeat: no-repeat;
          background-position: right bottom;
          a {
            background-image: url(@img/ic-interest-sub-my.svg);
            background-repeat: no-repeat;
            background-position: bottom 0.2rem right 3rem;
          }
        }
        &.box2 {
          border: 0.1rem solid #0175da;
          background-color: $white;
          a {
            &::after {
              content: "";
              position: absolute;
              top: 2.9rem;
              right: 2.9rem;
              width: 2rem;
              height: 2rem;
              background: url(@img/ic-arrow-diagonal.svg) no-repeat center;
            }
          }
          .c {
            &-text {
              &-title {
                &-md {
                  line-height: 1;
                }
              }
            }
          }
        }
        .c {
          &-text {
            &-white {
              color: $white;
            }
            &-blue {
              color: #0175da;
            }
            &-title {
              &-md {
                font-family: "Jalnan";
                & + p {
                  padding-top: 1.05rem;
                }
              }
            }
          }
        }
      }
    }
    @include tablet {
      width: 100%;
      padding: 2.5rem 0;
      border-radius: 0;
      position: sticky;
      top: 0;
      z-index: 60;
      background-color: #f2f3f8;
      &-box {
        padding: 0;
        height: auto;
        min-height: auto;
        border-radius: 1.6rem;
        border: 0.1rem solid $secondary;
        &::before {
          display: none;
        }
        &--title {
          position: relative;
          line-height: 2.4rem;
          padding: 2.1rem 2rem;
          font-size: 1.8rem;
          &::after {
            content: "";
            position: absolute;
            right: 2rem;
            top: 50%;
            margin-top: -0.8rem;
            display: block;
            width: 1.1rem;
            height: 1.1rem;
            border: 0.1rem solid #535353;
            border-width: 0 0.1rem 0.1rem 0;
            transform: rotate(45deg);
            transition: all 0.1s ease;
          }
        }
        &--menu {
          padding: 0 2rem 2rem 2rem;
          display: none;
          height: auto;
          li {
            padding: 2rem 0 0 0;
            display: inline-flex;
            width: 49%;
            vertical-align: top;
          }
        }
      }
      &-banner {
        display: none;
      }
      &-link {
        display: flex;
        gap: 2.4rem;
        li {
          height: auto !important;
          width: 100%;
          & + li {
            margin: 0;
          }
          &.box1 {
            a {
              background-position: bottom 3rem right 3rem;
            }
          }
        }
      }
      &.active {
        .interest {
          &__snb {
            &-box {
              &--title {
                border-bottom: 0.1rem solid $secondary;
                &::after {
                  right: 2rem;
                  margin-top: -0.3rem;
                  transform: rotate(225deg);
                  transition: all 0.3s ease;
                }
              }
              &--menu {
                display: block;
              }
            }
            &-banner {
              display: block;
            }
          }
        }
      }
    }
    @include mobile {
      width: 100%;
      padding: 1.5rem 0;
      &-box {
        border-radius: 1.4rem;
        padding: 0;
        &--title {
          padding: 1.5rem;
          &::after {
            right: 1.5rem;
          }
        }
        &--menu {
          padding: 1.5rem;
          li {
            display: flex;
            padding-top: 0;
            a {
              font-size: 1.6rem;
            }
            & + li {
              padding-top: 1.5rem;
              padding-left: 0;
            }
          }
          .ico {
            &-message {
              &--round {
                margin-right: 0.5rem;
              }
            }
          }
        }
      }
      &-banner {
        margin-top: 1.2rem;
      }
      &-link {
        flex-direction: column;
        gap: 0;
        li {
          & + li {
            margin: 0;
            margin-top: 1.2rem;
          }
        }
      }
      &.active {
        .interest {
          &__snb {
            &-box {
              &--title {
                &::after {
                  right: 1.5rem;
                }
              }
            }
          }
        }
      }
    }
  }
  &__contents {
    width: 100%;
    min-width: 100%;
    &-body {
      height: 100%;
      .c {
        &-card {
          overflow: visible;
          border-radius: 1.6rem;
          & > a {
            &:focus {
              outline-offset: -0.1rem;
            }
          }
          &--inline {
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            gap: 2.4rem;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    @include tablet {
      &-body {
        padding-bottom: 5.5rem;
      }
    }
    @include mobile {
      &-body {
        .c {
          &-card {
            min-height: 20rem;
            &--inline {
              height: auto;
              gap: 1.6rem;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr;
            }
          }
        }
      }
    }
  }
  &__box {
    width: 20rem;
    border-radius: 1.6rem;
    padding: 3rem 1.8rem;
    color: $white;
    text-align: center;
    &-link {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 3.2rem;
      width: 100%;
      height: 100%;
      border: 0.2rem solid $white;
      border-radius: 1.6rem;
      background-color: $white;
      box-shadow: 0rem 0.4rem 0.8rem 0rem rgba(17, 17, 17, 0.04);
      @media (hover: hover) {
        &:hover {
          border-color: #0175da;
          background-image: url(@img/ic-check-blue.svg);
          background-position: top 3rem right 3rem;
          background-repeat: no-repeat;
        }
      }
      &.bg1 {
        background-color: #0661f9;
        border-color: #0661f9;
        color: $white;
        @media (hover: hover) {
          &:hover {
            border-color: #0661f9;
            background-image: url(@img/ic-check-white.svg);
          }
        }
        & * {
          color: $white !important;
        }
        .interest__box-img {
          margin-bottom: -3.4rem;
        }
      }
      &.bg2 {
        background-color: #614ce5;
        border-color: #614ce5;
        color: $white;
        @media (hover: hover) {
          &:hover {
            border-color: #614ce5;
            background-image: url(@img/ic-check-white.svg);
          }
        }
        & * {
          color: $white !important;
        }
      }
    }
    &-cont {
      width: 100%;
      text-align: left;
      span {
        line-height: 1;
        font-size: 1.4rem;
        font-weight: 700;
        color: #0175da;
        & + .c-text-title-md {
          padding-top: 1.2rem;
        }
      }
      .c-text-title-md {
        line-height: 1.3;
        font-size: 2.4rem;
        font-weight: 700;
        color: $black;
      }
    }
    &-img {
      width: 100%;
      padding-top: auto;
      text-align: right;
      img {
        display: block;
        margin: 0 0 0 auto;
      }
    }
    @include mobile {
      &-link {
        border: none;
        position: relative;
        justify-content: space-between;
        flex-direction: initial;
        &:hover {
          background-image: none !important;
        }
        &.bg1 {
          .interest__box-img {
            bottom: 0;
            margin: 0;
          }
        }
      }
      &-cont {
        width: auto;
      }
      &-img {
        position: absolute;
        right: 3rem;
        bottom: 3rem;
        width: auto;
        padding-top: 0;
      }
    }
  }
  &__chatting {
    height: 100%;
    display: flex;
    flex-direction: column;
    &-list {
      height: 100%;
      padding-bottom: 3rem;
      overflow: hidden;
      overflow-y: auto;
      .interest-item__chips {
        margin: 1.6rem 1rem;
      }
    }
    &-item {
      &.manager {
        & + .manager {
          margin-top: 1rem;
        }
        & + .user {
          margin-top: 2rem;
        }
        & + .interest__chatting-slide {
          margin-left: 5.6rem;
          width: calc(100% - 5.6rem);
        }
      }
      &.user {
        justify-content: flex-end;
        & + .user {
          margin-top: 1rem;
        }
        & + .manager {
          margin-top: 2rem;
        }
      }
    }
    &-profile {
      width: 4.4rem;
      min-width: 4.4rem;
      height: 4.4rem;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      & + .interest__chatting-message {
        margin: 0 0 0 1.2rem;
      }
    }
    &-message {
      margin: 0 1.2rem 0 0;
      ul {
        display: flex;
        flex-direction: column;
        & + ul {
          margin-top: 4rem;
        }
      }
      li {
        & + li {
          margin-top: 1rem;
        }
      }
      .c {
        &-message {
          & + .c-message {
            margin-top: 1rem;
          }
        }
      }
    }
    &-foot {
      width: 100%;
      background-color: #f2f3f8;
      z-index: 90;
      &--box {
        padding: 1.4rem 0;
        text-align: center;
      }
      span {
        &.c-pc {
          display: block;
        }
      }
      .interest-item__chips {
        &.c-flex {
          justify-content: center;
          align-items: center;
          &.c-message {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
      .c {
        &-chips {
          &--sm {
            border-width: 0.2rem;
          }
        }
      }
    }
    &-slide {
      margin-top: 0;
      position: relative;
      width: 100%;
      padding-right: 1.2rem;
      .c-slide-box {
        margin-top: 1rem;
        margin-right: 1rem;
        padding-left: 0.1rem;
        & + .c-slide-box {
          margin-top: 2.4rem;
        }
      }
      .swiper {
        position: static;
        &-slide {
          .c {
            &-card {
              width: 100%;
              &-title {
                min-height: 2.7rem;
                @include text-clamp(1);
                font-weight: bold;
              }
              &-img {
                height: 16rem;
                position: relative;
                width: 100%;
                > img {
                  position: absolute;
                  top: 0;
                  left: 0;
                  object-fit: cover;
                  width: 100%;
                  height: 100%;
                }
              }
              &-body {
                width: 100%;
              }
              &-foot {
                text-align: left;
              }
            }
          }
        }
        &-button {
          &-prev,
          &-next {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            background-color: $white;
            box-shadow: 0 0.8rem 1.2rem 0 rgba(17, 17, 17, 0.04);
            border: 0.1rem solid #dedede;
            &:after {
              color: #000;
              font-size: 1.5rem;
              font-weight: 900;
            }
          }
          &-disabled {
            opacity: 1;
            pointer-events: all !important;
            &:after {
              color: #959595;
            }
          }
          &-prev {
            left: -2rem;
          }
          &-next {
            right: -2rem;
          }
        }
      }
      & + .user {
        margin-top: 1rem;
      }
      & + .manager {
        margin-top: 1rem;
      }
    }
    .c {
      &-chips {
        &--sm {
          margin: 0.4rem 0.6rem 0.4rem 0;
          &.c-btn-primary {
            border-color: $primary;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
      &-form {
        &-group {
          &--like {
            margin: 1rem 0;
            justify-content: flex-end;
          }
        }
      }
    }
    @include tablet {
      &-list {
        height: auto;
        overflow-y: visible;
      }
      &-foot {
        position: sticky;
        bottom: 0;
        left: auto;
        right: auto;
        margin: 0 auto;
        width: 100%;
        &--box {
          border-bottom: 0.1rem solid $secondary;
        }
        span {
          &.c-pc {
            display: inline-block;
            vertical-align: top;
            width: 0.6rem;
          }
        }
        .interest-item__chips {
          &.c-message {
            padding: 2rem 0;
          }
        }
      }
    }
    @include mobile {
      &-list {
        .interest-item__chips {
          margin: 0.5rem 0;
          &.c-flex {
            padding-right: 20%;
            display: flex;
            flex-wrap: wrap;
          }
        }
      }
      &-foot {
        width: 100%;
        &--box {
          overflow: hidden;
          overflow-x: auto;
        }
        .interest-item__chips {
          &.c-flex {
            justify-content: flex-start;
            &.c-message {
              flex-wrap: wrap;
              justify-content: flex-start;
              align-items: center;
              padding: 0 0 2rem;
              .interest-item__message {
                margin: 1rem 0 0 0;
              }
            }
          }
        }
      }
      &-slide {
        padding-right: 2rem;
        .c-slide-box {
          margin-right: 0;
        }
        .swiper {
          &-slide {
            width: 100%;
          }
          &-button {
            &-next {
              right: -2rem;
            }
          }
        }
      }
      .c {
        &-chips {
          &--sm {
            margin: 0.3rem 0.4rem 0.3rem 0;
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
  &__slide {
    position: relative;
  }
  .lecture {
    &-list {
      &:last-child {
        margin-bottom: 0;
      }
      &:after {
        content: "";
        display: block;
        clear: both;
      }
      &__item {
        display: flex;
        align-items: flex-start;
        // float: none;
        width: calc(50% - 1.6rem);
        // margin: 0;
        padding: 1.8rem 2rem 2.9rem;
        border-radius: 0.8rem;
        border: solid 0.1rem #dedede;
        background-color: $white;
        flex-direction: column;
        @include mobile {
          padding: 1.6rem;
        }
        &:nth-child(2n-1) {
          // margin-left: 0;
          // border: 1px solid #f60;
        }
        &-head {
          display: flex;
          justify-content: space-between;
          padding-bottom: 1.6rem;
          border-bottom: 0.1rem solid #eee;
          width: 100%;
          &-img {
            display: flex;
            align-items: center;
            width: 11.8rem;
            img {
              object-fit: cover;
              width: 100%;
              height: 100%;
              cursor: pointer;
            }
          }
        }
        &-title {
          display: flex;
          align-items: center;
          width: 100%;
          margin-top: 1.8rem;
          p {
            display: flex;
            align-items: center;
            width: 100%;
            a {
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              font-size: 1.8rem;
              font-weight: bold;
              color: #111;
            }
          }
        }
        &-type {
          margin-top: 10px;
          font-size: 14px;
          color: #535353;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        &-time {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-top: 11px;
          p {
            font-size: 16px;
            font-weight: bold;
            color: #535353;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          .c-btn {
            height: 3.3rem;
            padding: 0 1rem;
            border: 0.1rem solid $secondary;
            border-radius: 0.6rem;
            color: $black;
            font-size: 1.3rem;
            .ico {
              margin-right: 0.6rem;
            }
          }
        }
      }
    }
  }
}
.c-form {
  &-radio {
    &-input {
      width: 0;
      height: 0;
      opacity: 0;
      z-index: -1;
      position: absolute;
      &:focus {
        & + label::before {
          // box-shadow: ;
        }
      }
      + label {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        height: 6rem;
        font-weight: 500;
        font-size: 1.6rem;
        color: #535353;
        &.c-btn-sm--round {
          @include mobile {
            height: 3rem !important;
            padding: 0 1.5rem !important;
          }
        }
        &:before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 0.1rem solid $secondary;
          border-radius: 0.8rem;
          color: #535353;
        }
      }
      &:checked {
        + label {
          font-weight: 700;
          color: #0c82e9;
          &:before {
            border: 0.2rem solid #0c82e9;
          }
        }
      }
    }
    &--type02 {
      position: relative;
      height: 10rem;
      .c-form-radio {
        &-input {
          & + p + label {
            display: block;
            background: url(/assets/images/ic-age.svg) no-repeat bottom right
              1.4rem;
            height: 100%;
            &::before {
              content: "";
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              border: 0.1rem solid $secondary;
              border-radius: 0.8rem;
              color: #535353;
            }
          }
          &:checked + p {
            color: $black;
          }
          &:checked + p + label {
            display: block;
            background: url(/assets/images/ic-age-on.svg) no-repeat bottom right
              1.4rem;
            &::before {
              content: "";
              border: 0.2rem solid $black;
            }
          }
        }
      }
      p {
        position: absolute;
        top: 50%;
        left: 2.4rem;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        font-size: 1.6rem;
        color: #535353;
        font-weight: 700;
        span {
          font-size: 1.4rem;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
