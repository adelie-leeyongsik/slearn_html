<template>
  <div class="c-page--account">
    <Header />
    <div id="c-contents">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
.account {
  min-height: calc(100% - 6.1rem);
  padding: 6rem 0 12rem;
  .c-btn-check:checked ~ .c-btn {
    border: 0.2rem solid $primary;
    color: $primary;
  }
  @include mobile {
    background: $white;
  }
  .c-form-group + .c-btn-block {
    margin-top: 2rem;
  }
  h1 {
    margin-bottom: 4rem;
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 4rem;
    text-align: center;
    color: #000000;
  }
  @include tablet {
    padding: 9.2rem 0 12rem;
  }
  @include mobile {
    padding: 6rem 0 12rem;
    h1 {
      margin-bottom: 3rem;
    }
  }
  &__body {
    width: 64rem;
    margin: 0 auto;
    padding: 7rem 9rem;
    background-color: $white;
    border-radius: 1.6rem;
    @include mobile {
      width: 100%;
      padding: 0 1.6rem 0;
      border-radius: 0;
    }
  }
  &__title {
    margin-bottom: 4rem;
    font-size: 2.4rem;
    font-weight: 700;
    &-sub {
      margin-top: -1.6rem;
      font-size: 1.4rem;
      color: #535353;
      & + & {
        margin-top: 0.4rem;
      }
      & + .login__form {
        margin-top: 2.8rem;
      }
    }
    &-sm {
      margin: 5.6rem 0 1.4rem;
      font-size: 1.6rem;
    }
    @include mobile {
      margin-top: 4rem;
    }
  }
  &__foot {
    margin-top: 4rem;
    .account__foot-link {
      margin-top: 3rem;
      text-align: center;
      a {
        font-size: 1.6rem;
        color: #535353;
        text-decoration: underline;
      }
    }
    .c-btn-group {
      gap: 1.6rem;
    }
    @include mobile {
      position: relative;
      padding-top: 4rem;
      background-color: $white;
      border-top: 1.6rem solid $light;
      .c-btn-group {
        padding: 0 1.6rem;
        .c-btn {
          min-width: auto;
          width: 100%;
        }
      }
    }
  }
  &__agree {
    margin-top: 3rem;
    &-wrap {
      padding-top: 3rem;
    }
    &-title {
      margin-bottom: 1.6rem;
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 2rem;
      color: #535353;
      span {
        padding-left: 0.4rem;
      }
    }
    dl {
      border: 0.1rem solid $secondary;
      border-radius: 0.8rem;
      dt {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.9rem 2rem 2.1rem 2rem;

        // label {
        //   font-weight: 700;
        //   font-size: 1.4rem;
        //   line-height: 1.7rem;
        //   color: $black;
        // }
      }
      dd {
        border-top: 0.1rem solid $secondary;
        padding: 2rem;
        ul {
          li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 0.6rem;
            height: 4rem;
            a {
              font-weight: 400;
              font-size: 1.3rem;
              line-height: 1.6rem;
              text-align: right;
              text-decoration-line: underline;
              color: #535353;
              white-space: nowrap;
            }
            &:first-child {
              margin-top: 0;
            }
            span {
              font-weight: 400;
              font-size: 1.4rem;
              color: #111;
            }
          }
        }
      }
    }
  }
  &__info {
    margin-top: 4rem;
    padding: 3rem;
    background: #f4f5f9;
    border-radius: 0.8rem;
    & + & {
      margin-top: 0.8rem;
    }
    @include mobile {
      padding: 3rem 2rem;
    }
    dl {
      dt {
        margin-bottom: 1.8rem;
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 1.7rem;
        color: $primary;
      }
      dd {
        h6 {
          margin-bottom: 0.6rem;
          font-size: 1.4rem;
          line-height: 1.7rem;
          font-weight: 700;
          color: #535353;
        }
        ul {
          li {
            margin-bottom: 1.6rem;
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 2rem;
            color: #535353;
            ol {
              margin-top: 1.1rem;
              padding: 2rem 1rem;
              border-top: 0.1rem solid #e1e1e1;
              border-bottom: 0.1rem solid #e1e1e1;
              li {
                strong {
                  display: block;
                  color: #535353;
                  padding-bottom: 0.4rem;
                }
                &:last-child {
                  margin-bottom: 0;
                }
              }
            }
          }
        }
      }
    }
    .c-btn-group {
      gap: 0.8rem;
      .c-btn {
        font-weight: 700;
        font-size: 1.3rem;
        line-height: 1.6rem;
        color: #535353;
        i {
          margin-right: 0.6rem;
        }
      }
      @include mobile {
        display: block;
        padding: 0;
        .c-btn {
          margin-top: 1rem;
          &:first-child {
            margin-top: 0;
          }
        }
      }
    }
    &-title {
      font-size: 1.4rem;
      color: #535353;
      font-weight: 700;
      & + & {
        margin-top: 1.4rem;
      }
      span {
        font-weight: 400;
      }
      & + p {
        margin-top: 1rem;
      }
    }
    p {
      color: #535353;
      font-size: 1.3rem;
    }
    & + .c-btn-group {
      margin-top: 0.8rem;
    }
    &-outline {
      margin-top: 1.2rem;
      padding: 2rem;
      background-color: $white;
      border: 0.1rem solid $secondary;
    }
    .c-table {
      margin-top: 1.8rem;
      th {
        background: transparent;
      }
      td {
        background-color: $white;
        &.c-text-left {
          padding-right: 1.6rem;
        }
      }
    }
    & + .c-input-group {
      margin-top: 1.6rem;
    }
  }
  &__message {
    transform: translateX(-50%);
    position: fixed;
    left: 50%;
    bottom: 2rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 56rem;
    height: 4.8rem;
    background-color: #494a4b;
    border-radius: 2.4rem;
    font-size: 1.4rem;
    color: $white;
  }
  .join {
    &__complete {
      text-align: center;
      padding: 5.5rem 0 6.5rem;
      &-title {
        font-size: 2rem;
        color: $black;
        font-weight: 700;
      }
      p {
        margin-top: 0.6rem;
        font-size: 1.4rem;
        color: #535353;
      }
      img {
        margin-top: 2.8rem;
      }
      .account__info {
        width: 46rem;
        margin: 2.8rem auto 2rem;
        text-align: left;
        max-height: 21.3rem;
        overflow-y: auto;
        font-size: 1.4rem;
      }
      .c-btn {
        color: $white;
        font-size: 1.4rem;
      }
      .c-btn-group + p {
        margin-top: 3rem;
      }
    }
  }
  .login {
    &__form {
      .c-form-check {
        margin-top: 1.6rem;
      }
      .c-btn {
        margin-top: 2.4rem;
      }
    }
    &__menu {
      ul {
        display: flex;
        align-content: center;
        justify-content: center;
        margin-top: 3rem;
        li {
          position: relative;
          text-align: center;
          a {
            color: #535353;
            font-size: 1.4rem;
          }
        }
        li + li {
          margin-left: 6rem;
          &::before {
            content: "";
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: -3rem;
            display: block;
            width: 0.1rem;
            height: 1.2rem;
            background-color: #d9d9d9;
          }
        }
      }
    }
    &__divider {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5.7rem 0 2rem;
      font-size: 1.3rem;
      @include mobile {
        margin: 2.3rem 0 2.3rem;
      }
      p {
        position: relative;
        width: 100%;
        text-align: center;
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-0.2rem);
          display: block;
          width: 100%;
          height: 0.1rem;
          background-color: $secondary;
          z-index: 1;
        }
        span {
          position: relative;
          padding: 0 2.8rem;
          background-color: $white;
          color: #535353;
          z-index: 2;
        }
      }
      &--type02 {
        margin-top: 2rem;
      }
    }
    &__list {
      .c-btn {
        img {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 2.4rem;
        }
        & + .c-btn {
          margin-top: 1.6rem;
        }
      }
    }
  }
  .c-form-group.c-form-group__swiper {
    margin-right: -9rem;
    overflow: hidden;
    @include mobile {
      margin-right: 0;
    }
  }
  .c-swiper {
    &__wrap {
      @include mobile {
        margin-right: 0;
      }
    }
    .swiper-button-prev {
      margin-right: 12rem;
      @include mobile {
        margin-right: 3rem;
      }
    }
    .swiper-button-next {
      margin-right: 9rem;
      @include mobile {
        margin-right: 0;
      }
    }
    .swiper-slide {
      width: 43.5rem;
    }
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
        padding: 2rem 2.4rem;
        border-radius: 0.8rem;
        border: solid 0.1rem #dedede;
        flex-direction: column;
        &-text {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          min-width: 0;
          > strong {
            display: block;
            margin-bottom: 4px;
            font-size: 1.6rem;
            color: #111;
          }
          > p {
            margin-top: 4px;
            font-size: 1.4rem;
            color: #535353;
          }
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
            background-color: $white;
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

  &__etc {
    &-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.8rem;
      margin-top: 1.6rem;
    }
    &-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 21.2rem;
      padding: 3rem 0;
      border: 0.1rem solid $secondary;
      border-radius: 0.8rem;
      &-head {
        font-size: 1.6rem;
        color: #535353;
        font-weight: 700;
      }
      &-btn {
        display: flex;
        flex-direction: column;
        margin-top: auto;
        box-sizing: border-box;
        text-align: center;
        .c-btn + .c-btn {
          margin-top: 0.8rem;
        }
      }
    }
  }
  &__btn {
    &-recommend-wrap {
      margin: 2.4rem 0 4rem;
      text-align: center;
      .c-btn {
        background-color: #f1f1f1;
        color: #535353;
      }
    }
  }
}
</style>
