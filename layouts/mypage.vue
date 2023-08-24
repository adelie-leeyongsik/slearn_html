<template>
  <div class="c-page--mypage">
    <Header>
      <!-- <MypageLNB /> -->
    </Header>
    <div id="c-contents"><NuxtPage /></div>
    <Footer />
  </div>
</template>

<style lang="scss">
.mypage {
  position: relative;
  background-color: $white;
  .c-btn-check:checked ~ .c-btn {
    border-color: $primary;
    color: $primary;
  }
  .c-form-check-group-month {
    .c-btn-check:checked ~ .c-btn {
      border-color: $black;
      color: $black;
    }
  }
  .c-breadcrumbs {
    @include tablet {
      position: absolute;
      top: 16.4rem;
      right: 0;
    }
    @include mobile {
      display: none;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &-awards {
    &__list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2.4rem;
      @include mobile {
        margin-top: 4rem;
        grid-template-columns: 1fr;
      }
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 29rem;
        border: 0.1rem solid $secondary;
        border-radius: 0.8rem;
        color: $black;
        span {
          font-size: 1.6rem;
        }
        p {
          font-family: "Jalnan";
          margin-top: 0.6rem;
          font-size: 2.4rem;
        }
      }
      &-img {
        margin-bottom: 3rem;
        img {
          width: 13.2rem;
        }
      }
    }
  }
  &-management {
    &__box {
      background-color: $white;
      border-radius: 0.8rem;
      .c-table__wrap-scroll + div.c-pagination {
        margin-top: 0;
        padding-bottom: 4rem;
        @include mobile {
          margin-top: 4rem;
        }
      }
      &-info {
        text-align: center;
        &--type02 {
          position: relative;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-direction: column;
          height: 17.2rem;
          padding-left: 3rem;
          @include mobile {
            display: block;
            text-align: center;
            height: auto;
            padding-left: 0;
          }
          .mypage-management__box-info {
            &-title {
              text-align: left;
              padding: 0;
              @include mobile {
                padding-top: 6.8rem;
                text-align: center;
              }
            }
            &-btn-box {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 0.8rem;
              position: absolute;
              top: 50%;
              right: 3rem;
              @include mobile {
                position: static;
                transform: translateY(0);
                margin: 3rem 0 7rem;
              }
              button.c-btn {
                position: unset;
              }
            }
          }
          button.c-btn {
            position: absolute;
            top: 50%;
            right: 3rem;
            transform: translateY(-50%);
            margin: 0;
            @include mobile {
              position: static;
              transform: translateY(0);
              margin: 3rem 0 7rem;
            }
          }
        }
        > ul {
          display: flex;
          align-items: center;
          padding: 3.5rem 0;
          li {
            width: 100%;
            text-align: center;
            font-size: 1.6rem;
            color: #535353;
            a {
              display: block;
            }
            span {
              margin-bottom: 1.6rem;
            }
            p {
              font-size: 3.6rem;
              font-weight: 700;
              color: $black;
            }
          }
        }
        &-title {
          padding-top: 6.8rem;
          font-size: 2rem;
          color: $black;
          font-weight: 700;
          text-align: center;
        }
        > p {
          margin-top: 1rem;
          font-size: 1.6rem;
          color: #535353;
          text-align: center;
        }
        > .c-btn {
          margin: 3rem 0 7rem;
          white-space: nowrap;
        }
      }
      & + & {
        margin-top: 1.6rem;
      }
    }
    &__info {
      text-align: center;
      border-top: 0.2rem solid $black;
      padding: 10rem 0 0;
      margin-top: 3.4rem;
      > p {
        margin-top: 1.8rem;
        font-size: 1.6rem;
        color: #535353;
        & + p {
          margin-top: 1rem;
        }
      }
      &-step {
        display: flex;
        justify-content: center;
        font-size: 1.6rem;
        color: $black;
        font-weight: 700;
        margin-top: 3rem;
        ul {
          display: flex;
          gap: 0 2.4rem;
          @include mobile {
            flex-wrap: wrap;
            gap: 1.6rem 0;
            padding: 0 2.4rem;
          }
          li {
            display: flex;
            &:nth-child(odd) {
              @include mobile {
                width: 60%;
              }
            }
            &:nth-child(even) {
              @include mobile {
                width: 40%;
              }
            }
            span {
              display: flex;
              align-items: center;
              justify-content: center;
              min-width: 2.4rem;
              width: 2.4rem;
              height: 2.4rem;
              background-color: $black;
              color: $white;
              border-radius: 50%;
              margin-right: 1rem;
            }
          }
        }
      }
      &-img {
        margin-top: 3.8rem;
      }
      > a {
        display: inline-flex;
        margin-top: 3rem;
        font-size: 1.4rem;
        text-decoration: underline;
        color: #535353;
      }
      div.c-btn-group {
        @include mobile {
          .c-btn {
            width: 22.2rem;
          }
        }
      }
    }
    &__schedule {
      margin-top: 4rem;
    }
    &__before {
      &-search {
        margin-bottom: 3.9rem;
        background-color: #f4f5f9;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 13.4rem;
        padding: 3rem 6rem;
        border-radius: 0.8rem;
        .c-form-group {
          margin-top: 0;
        }
        @include mobile {
          height: auto;
          padding: 3rem 1.6rem;
        }
      }
    }
    &__item {
      position: relative;
      border: 0.1rem solid $secondary;
      border-radius: 0.8rem;
      overflow: hidden;
      @include mobile {
        padding: 3rem 0 0;
      }
      & + & {
        margin-top: 1.6rem;
      }
      &-head {
        display: flex;
        align-items: center;
        padding: 4rem 3rem;
        cursor: pointer;
        @include mobile {
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: center;
          position: relative;
          padding: 0 2.4rem 11rem;
        }
      }
      &-body {
        background-color: #f4f5f9;
        padding: 4rem 3rem 6rem;
        .c-table__wrap {
          margin-top: 1.6rem;
          padding-bottom: 4rem;
          border-radius: 0.8rem;
          background-color: #fff;
          overflow: hidden;
          &-scroll {
            @include mobile {
              padding-bottom: 0rem;
              & + .c-pagination {
                margin-top: 4rem;
              }
            }
          }
          @include mobile {
            overflow-x: auto;
          }
        }
        section + section {
          margin-top: 3.8rem;
        }
      }
      &-img {
        margin-right: 2rem;
        @include mobile {
          margin: 1rem auto 0 auto;
          width: 100%;
        }
        &-mask {
          width: 6rem;
          min-width: 6rem;
          height: 6rem;
          overflow: hidden;
          border-radius: 50%;
          @include mobile {
            margin: 0 auto;
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
      &-text {
        flex-grow: 1;
        &-name {
          display: flex;
          align-items: center;
          @include mobile {
            white-space: nowrap;
            flex-direction: column;
            align-items: flex-start;
          }
          p {
            color: $black;
            font-size: 2rem;
            font-weight: 700;
            margin-right: 0.6rem;
          }
          .c-flex {
            display: block;
            @include mobile {
              text-align: center;
            }
            .ico-medal {
              margin-right: 0.8rem;
              @include mobile {
                display: block;
                margin: 1.2rem auto 0.8rem;
              }
            }
          }
          .c-badge {
            margin-top: 0.4rem;
            white-space: nowrap;
            @include mobile {
              margin: 0.4rem auto 0;
            }
          }
        }
        &-info {
          margin-top: 1rem;
          font-size: 1.4rem;
          color: $black;
          @include mobile {
            margin-top: 1.8rem;
          }
        }
        @include mobile {
          flex-grow: 0;
        }
      }
      &-btn {
        min-width: 26rem;
        margin-right: 5rem;
        display: flex;
        gap: 0 0.8rem;
        @include mobile {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      &-cancel {
        margin-top: 3rem;
        margin-bottom: 3rem;
      }
      &-more {
        position: absolute;
        width: 3.6rem;
        height: 3.6rem;
        top: 5.4rem;
        right: 3rem;
        text-indent: -999rem;
        background: url(@img/ic-accordion-arrow-off.svg) no-repeat center;
        &.active {
          background: url(@img/ic-accordion-arrow-on.svg) no-repeat top;
        }
      }
    }
  }
  &-list {
    width: 120rem;
    margin: 0 auto;
    padding: 6rem 0 12rem;
    @include tablet {
      width: auto;
      padding: 6rem 2.4rem;
    }
    @include mobile {
      padding: 0 1.6rem 3rem;
      background-color: $light;
    }
    &__title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.8rem;
      padding-top: 3.8rem;
      color: $black;
      font-size: 1.6rem;
      font-weight: 700;
      span {
        color: $danger;
      }
      &-category {
        ul {
          display: flex;
          color: #535353;
          font-weight: 400;
          li.active {
            button {
              color: $black;
              font-weight: 700;
            }
          }
          li + li {
            margin-left: 2rem;
          }
          @include mobile {
            display: none;
          }
        }
        select {
          display: none;
          -o-appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          border: 0;
          font-size: 1.6rem;
          font-weight: 700;
          color: $black;
          padding-right: 2.4rem;
          &::-ms-expand {
            display: none;
          }
          background: url(@img/ic-select-arrow-category.svg) no-repeat center
            right;
          @include mobile {
            display: block;
          }
        }
      }
    }
    &__contents {
      &-nodate {
        text-align: center;
        border-top: 0.1rem solid $secondary;
        img {
          margin-top: 12rem;
        }
        p {
          margin-top: 1.5rem;
          color: #535353;
          font-size: 1.6rem;
        }
      }
    }
    // &__table {
    //   border-top: 0.1rem solid $secondary;
    //   @include mobile {
    //     display: block;
    //     colgroup {
    //       display: none;
    //     }
    //     thead {
    //       display: none;
    //     }
    //   }

    //   tbody {
    //     @include mobile {
    //       display: block;
    //     }
    //   }
    //   tr {
    //     @include mobile {
    //       position: relative;
    //       display: flex;
    //       flex-wrap: wrap;
    //       width: 100%;
    //     }
    //   }
    //   tr.active {
    //     background-color: $light;
    //   }
    //   th {
    //     padding: 1.4rem 0;
    //     color: #535353;
    //     font-size: 1.4rem;
    //     border-bottom: 0.1rem solid $secondary;
    //   }
    //   td {
    //     padding: 1.75rem 0;
    //     text-align: center;
    //     font-size: 1.4rem;
    //     color: #535353;
    //     border-bottom: 0.1rem solid $secondary;
    //     @include mobile {
    //       display: block;
    //     }
    //   }
    //   td.mypage-list__table-check {
    //     @include mobile {
    //       width: 5.2rem;
    //       border-bottom: 0;
    //       padding-top: 2rem;
    //       padding-bottom: 0;
    //     }
    //   }
    //   td.mypage-list__table-title {
    //     @include mobile {
    //       width: calc(100% - 5.2rem);
    //       text-align: left;
    //       border-bottom: 0;
    //       padding-bottom: 0;
    //     }
    //     &--type02 {
    //       @include mobile {
    //         width: 100%;
    //         padding: 0 1.6rem;
    //       }
    //     }
    //   }
    //   td.mypage-list__table-size {
    //     color: #535353;
    //     @include mobile {
    //       position: absolute;
    //       bottom: 0;
    //       left: 14.6rem;
    //       &::before {
    //         content: "";
    //         position: absolute;
    //         top: 50%;
    //         left: -1.2rem;
    //         transform: translateY(-50%);
    //         display: block;
    //         width: 0.1rem;
    //         height: 0.8rem;
    //         background-color: #d9d9d9;
    //       }
    //     }
    //   }
    //   td.mypage-list__table-date {
    //     color: #535353;
    //     @include mobile {
    //       width: 100%;
    //       padding: 1.2rem 5.2rem 1.75rem;
    //       text-align: left;
    //     }
    //     &--type02 {
    //       @include mobile {
    //         padding-left: 1.6rem;
    //       }
    //     }
    //   }
    //   td.mypage-list__table-category {
    //     color: #535353;
    //     font-weight: 500;
    //     font-size: 1.6rem;
    //     @include mobile {
    //       width: 100%;
    //       text-align: left;
    //       padding: 1.6rem 1.75rem 0.7rem;
    //       border-bottom: 0;
    //     }
    //   }
    //   td.mypage-list__table-status {
    //     @include mobile {
    //       position: absolute;
    //       bottom: 0;
    //       left: 11rem;
    //       &::before {
    //         content: "";
    //         position: absolute;
    //         top: 50%;
    //         left: -1.2rem;
    //         transform: translateY(-50%);
    //         display: block;
    //         width: 0.1rem;
    //         height: 1.2rem;
    //         background-color: #d9d9d9;
    //       }
    //     }
    //   }
    //   td.mypage-list__table-nodata {
    //     border-bottom: 0;
    //     img {
    //       margin-top: 12rem;
    //     }
    //     p {
    //       margin: 1.4rem 0 9rem;
    //       color: #535353;
    //       font-size: 1.6rem;
    //     }
    //     @include mobile {
    //       width: 100%;
    //       justify-content: center;
    //     }
    //   }
    //   &-title {
    //     text-align: left;
    //     max-width: 1rem;
    //     &--type02 {
    //       text-align: center;
    //     }
    //     @include mobile {
    //       max-width: 100%;
    //     }
    //     p {
    //       display: flex;
    //       align-items: center;
    //       font-size: 1.6rem;
    //       color: $black;
    //       @include mobile {
    //         display: inline-block;
    //         vertical-align: top;
    //       }
    //       a {
    //         @include text-clamp(1);
    //         i {
    //           margin-right: 1.2rem;
    //           vertical-align: top;
    //         }
    //         @include mobile {
    //           display: inline;
    //           overflow: auto;
    //           text-overflow: inherit;
    //           white-space: normal;
    //           vertical-align: top;
    //         }
    //       }
    //     }
    //   }
    //   td.mypage-list__table-check {
    //     padding-left: 2rem;
    //   }
    // }
    &--type02 {
      @include mobile {
        padding: 0;
      }
      .mypage-list {
        &__contents {
          position: relative;
          @include mobile {
            background-color: $white;
            border-top: 1.6rem solid $light;
          }
        }
        &__title {
          @include mobile {
            position: absolute;
            top: 11.2rem;
            left: 0;
            width: 100%;
            padding: 0 1.6rem;
            z-index: 1;
          }
        }
      }
      .mypage__head {
        padding: 0 30rem;
        @include tablet {
          padding: 0 19rem;
        }
        @include mobile {
          margin: 0;
          padding: 2.7rem 1.6rem;
        }
      }
      .mypage__body {
        @include mobile {
          padding: 3.2rem 0;
          &-head {
            flex-direction: column-reverse;
            margin: 0;
            .c-btn {
              width: calc(100% - 3.2rem);
              margin-bottom: 7.2rem;
              height: 4.8rem;
              border-radius: 0.8rem;
              font-size: 1.4rem;
            }
            > ul {
              display: flex;
              flex-wrap: wrap;
              position: relative;
              width: 100%;
              margin: 0 -1.6rem;
              li {
                text-align: left;
                padding: 1.7rem 1.6rem;
                &.mypage__body-head-check {
                  width: 100%;
                  border-top: 0.1rem solid $secondary;
                  border-bottom: 0.1rem solid $secondary;
                }
                &.mypage__body-head-delete {
                  position: absolute;
                  right: 0;
                  bottom: 0;
                }
              }
              li + li {
                margin: 0;
                &::before {
                  display: none;
                }
              }
            }
          }
        }
      }
    }
  }
  &-view {
    width: 120rem;
    margin: 0 auto;
    padding: 6rem 0 12rem;
    @include tablet {
      width: auto;
      padding: 6rem 2.4rem;
    }
    @include mobile {
      min-height: 100%;
      padding: 0 0 6rem;
      border-radius: 0;
      background-color: $white;
    }
    .mypage__body {
      padding: 6rem 4rem 4rem;
      @include mobile {
        padding: 0;
        border-radius: 0;
      }
    }
    &__question {
      border-top: 0.2rem solid $black;
      @include mobile {
        border-top: 0;
      }
      &-head {
        display: flex;
        align-items: center;
        padding: 1.45rem 0;
        border-bottom: 0.1rem solid #f1f1f1;
        font-size: 1.4rem;
        text-align: center;
        @include mobile {
          flex-wrap: wrap;
          align-items: flex-start;
          padding: 2rem 1.6rem;
          text-align: left;
        }
        &-category {
          min-width: 14rem;
          font-size: 1.6rem;
          color: #535353;
          @include mobile {
            margin-bottom: 1rem;
            min-width: auto;
          }
        }
        &-title {
          flex-grow: 1;
          text-align: left;
          font-size: 2rem;
          color: $black;
          font-weight: 700;
          @include mobile {
            width: 100%;
            margin-bottom: 1rem;
          }
        }
        &-date {
          min-width: 10rem;
          color: #535353;
          @include mobile {
            min-width: auto;
            color: #535353;
          }
        }
        &-status {
          min-width: 14rem;
          font-weight: 700;
          @include mobile {
            position: relative;
            min-width: auto;
            margin-left: 2.5rem;
            &::before {
              content: "";
              position: absolute;
              display: block;
              top: 50%;
              left: -1.2rem;
              transform: translateY(-50%);
              width: 0.1rem;
              height: 1.2rem;
              background-color: #d9d9d9;
            }
          }
        }
      }
      &-contents {
        padding: 2rem 14rem;
        font-size: 1.6rem;
        color: $black;
        @include mobile {
          padding: 2rem 1.6rem 8rem;
          border-bottom: 0.1rem solid #f1f1f1;
        }
      }
    }
    &__answer {
      padding: 2rem 0;
      border-top: 0.1rem solid #f1f1f1;
      font-size: 1.6rem;
      dl {
        display: flex;
        @include mobile {
          flex-direction: column;
          align-items: flex-start;
          padding: 0 1.6rem;
        }
        dt {
          min-width: 14rem;
          color: #535353;
          text-align: center;
          @include mobile {
            min-width: auto;
          }
        }
        dd {
          flex-grow: 1;
          color: $black;
        }
      }
      @include mobile {
        border-top: 0;
        border-bottom: 0.1rem solid #f1f1f1;
        padding-bottom: 6rem;
      }
    }
    .mypage__foot {
      @include mobile {
        margin-top: 0;
        border-top: 1.6rem solid $light;
        padding-top: 4rem;
      }
    }
  }
  &-write {
    width: 64rem;
    margin: 0 auto;
    padding: 6rem 0 12rem;
    @include mobile {
      width: auto;
      min-height: 100%;
      padding: 0 0 6rem;
      border-radius: 0;
      background-color: $white;
    }

    .mypage__body {
      width: 64rem;
      padding: 7rem 9rem;
      @include mobile {
        padding: 6rem 1.6rem 0;
        width: auto;
      }
    }
    textarea.c-form-control {
      height: 24rem;
    }
    .mypage__banner {
      @include mobile {
        display: none;
      }
    }
  }
  &-pwcheck {
    width: 64rem;
    margin: 0 auto;
    padding: 6rem 0 12rem;
    @include tablet {
      padding: 9.2rem 0 12rem;
    }
    @include mobile {
      width: 100%;
      height: 100%;
      padding: 6rem 0 12rem;
      background-color: $white;
    }
    .c-text-title-md {
      padding-bottom: 1rem;
    }
    .mypage__body {
      padding: 7rem 9rem;
      @include tablet {
        padding: 7rem 9rem;
      }
      @include mobile {
        padding: 0 1.6rem;
      }
    }
  }
  &-edit {
    width: 64rem;
    margin: 0 auto;
    padding: 6rem 0 12rem;
    @include tablet {
      padding: 9.2rem 0 12rem;
    }
    @include mobile {
      width: 100%;
      height: 100%;
      padding: 6rem 0 12rem;
      background-color: $white;
    }
    .mypage__body {
      padding: 7rem 9rem;
      @include tablet {
        padding: 7rem 9rem;
      }
      @include mobile {
        padding: 0 1.6rem;
      }
      h2 {
        display: none;
      }
    }
    .mypage__body + .mypage__body {
      margin-top: 3rem;
    }
    .mypage__body + .mypage__banner {
      margin-top: 3rem;
    }
    &__profile {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-bottom: 4rem;
    }
    .c-form-group + .c-form-label {
      margin-top: 3rem;
    }
  }
  &-mentor {
    width: 120rem;
    margin: 0 auto;
    padding: 6rem 0 12rem;
    @include tablet {
      width: auto;
      padding: 6rem 2.4rem 12rem;
    }
    @include mobile {
      padding: 0;
      background-color: $white;
    }
    &__management {
      .mypage__body:last-child {
        @include mobile {
          border-bottom: 0.1rem solid #f1f1f1;
        }
      }
    }
    &__previous {
      @include mobile {
        padding-bottom: 6rem;
      }
      .mypage__body {
        @include mobile {
          padding: 3rem 1.6rem;
          border-radius: 0;
          border-bottom: 0.1rem solid #f1f1f1;
        }
      }
      .mypage__body + .mypage__body {
        margin-top: 1.6rem;
        @include mobile {
          margin-top: 0;
        }
      }
    }
    &__calculate {
      @include mobile {
        padding: 0 1.6rem;
      }
      .mypage__head {
        @include mobile {
          border-bottom: 1.6rem solid $light;
        }
      }
      .mypage__body {
        margin-top: 2.4rem;
        padding: 4rem;
        @include mobile {
          margin-top: 0;
          padding: 3.2rem 0;
          border-radius: 0;
        }
      }
      &-table {
        width: 100%;
        margin-top: 2.4rem;
        tbody,
        td,
        th {
          @include mobile {
            display: block;
          }
        }
        tbody {
          @include mobile {
            width: 100%;
          }
        }
        thead {
          @include mobile {
            display: none;
          }
        }
        tr {
          @include mobile {
            display: flex;
            flex-wrap: wrap;
            position: relative;
            border-bottom: 0.1rem solid $secondary;
            margin: 0 -1.6rem;
            padding: 2.4rem 1.6rem 4.8rem;
          }
        }
        colgroup {
          @include mobile {
            display: none;
          }
        }
        th,
        td {
          padding: 1.4rem;
          border-top: 0.1rem solid $secondary;
          border-bottom: 0.1rem solid $secondary;
          font-size: 1.4rem;
          text-align: center;
          color: #535353;
          @include mobile {
            border: 0;
          }
        }
        td {
          padding: 1.75rem;
          @include mobile {
            padding: 0;
          }
        }
        td.mypage-mentor__calculate-table {
          &-date {
            @include mobile {
              width: 100%;
              margin-bottom: 1.4rem;
              text-align: left;
            }
          }
          &-title {
            font-size: 1.6rem;
            color: $black;
            text-align: left;
            @include mobile {
              flex-grow: 1;
              text-align: left;
            }
          }
          &-sum {
            font-size: 1.6rem;
            color: $black;
            font-weight: 700;
          }
          &-incentive {
            @include mobile {
              position: absolute;
              right: 0;
              bottom: 2.5rem;
              right: 1.6rem;
            }
          }
          &-status {
            font-weight: 700;
            @include mobile {
              position: absolute;
              top: 2.4rem;
              left: 9rem;
              &::before {
                content: "";
                display: block;
                position: absolute;
                width: 0.1rem;
                height: 1.2rem;
                top: 50%;
                left: -1.2rem;
                transform: translateY(-50%);
                background-color: #d9d9d9;
              }
            }
          }
        }
        &-btn {
          text-decoration: underline;
          font-size: 1.3rem;
          @include mobile {
            display: none;
          }
        }
      }
    }
    &__complete {
      @include mobile {
        padding: 0 1.6rem 6rem;
      }
      .mypage__head {
        @include mobile {
          border-bottom: 1.6rem solid $light;
        }
      }
      .mypage__body {
        margin-top: 1.8rem;
        padding: 4rem;
        @include mobile {
          margin-top: 0;
          padding: 0;
          border-radius: 0;
        }
      }
      &-contents {
        margin-top: 4rem;
        @include mobile {
          margin-top: 1.8rem;
        }
        &-title {
          font-size: 1.6rem;
          color: $black;
          font-weight: 700;
          span {
            color: $danger;
          }
          @include mobile {
            margin: 0 -1.6rem;
            padding: 0 1.6rem 1.8rem;
            border-bottom: 0.1rem solid $secondary;
          }
        }
      }
      &-table {
        width: 100%;
        // margin-top: 2.4rem;
        @include mobile {
          margin-top: 0;
        }
        tbody,
        td,
        th {
          @include mobile {
            display: block;
          }
        }
        thead {
          @include mobile {
            display: none;
          }
        }
        tr {
          @include mobile {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            position: relative;
            border-bottom: 0.1rem solid $secondary;
            margin: 0 -1.6rem;
            padding: 2.4rem 1.6rem;
          }
        }
        colgroup {
          @include mobile {
            display: none;
          }
        }
        th,
        td {
          padding: 1.4rem;
          border-top: 0.1rem solid $secondary;
          border-bottom: 0.1rem solid $secondary;
          font-size: 1.4rem;
          text-align: center;
          color: #535353;
          @include mobile {
            border: 0;
          }
        }
        td {
          padding: 1.75rem;
          @include mobile {
            padding: 0;
          }
        }
        td.mypage-mentor__complete-table {
          &-category {
            font-size: 1.6rem;
            @include mobile {
              font-weight: 500;
              margin-right: 0.4rem;
            }
          }
          &-online {
            font-size: 1.6rem;
            @include mobile {
              font-weight: 500;
            }
          }
          &-title {
            font-size: 1.6rem;
            color: $black;
            text-align: left;
            @include mobile {
              width: 100%;
              margin: 0.7rem 0 1.4rem;
            }
          }
          &-certificates {
            @include mobile {
              position: relative;
              margin-left: 2.5rem;
              padding-bottom: 0.2rem;
              &::before {
                content: "";
                position: absolute;
                top: 50%;
                left: -1.2rem;
                transform: translateY(-50%);
                width: 0.1rem;
                height: 1.2rem;
                background-color: #d9d9d9;
              }
            }
          }
        }
        &-btn {
          font-size: 1.3rem;
          text-decoration: underline;
        }
      }
    }
    &__community {
      @include mobile {
        height: calc(100vh - 18.2rem);
        background-color: $white;
      }
      .mypage-mentor__tab-contents-sub {
        @include mobile {
          padding: 0;
        }
      }
      .mypage__body {
        padding: 0;
        @include tablet {
          padding: 0;
        }
        &:last-child:not(.active) {
          @include mobile {
            border-bottom: 1.6rem solid $light;
          }
        }
      }
      .mypage__body + .mypage__body {
        margin-top: 1.6rem;
        @include mobile {
          margin-top: 0;
          border-top: 1.6rem solid $light;
          border-radius: 0;
        }
      }
      &-title {
        padding: 2.5rem 4rem;
        font-size: 2rem;
        font-weight: 700;
        background: url(@img/ic-accordion-arrow-off.svg) no-repeat center right
          1.6rem;
        cursor: pointer;
        @include mobile {
          padding: 2.5rem 1.6rem;
        }
        span {
          color: $danger;
        }
      }
      &-contents {
        width: calc(100% - 8rem);
        margin: 0 auto;
        padding: 4rem 0;
        border-top: 1px solid $secondary;
        @include tablet {
          width: calc(100% - 4.8rem);
        }
        @include mobile {
          width: 100%;
          padding: 0;
          padding-bottom: 4rem;
          border-radius: 0;
        }
        .c-card {
          &--inline {
            width: auto;
          }
          &-img {
            height: 14.5rem;
            @include tablet {
              height: 14.4vw;
            }
          }
          &-body {
            margin-top: 1.4rem;
            padding: 0;
            @include mobile {
              margin-top: 0;
            }
          }
        }
      }
      &-view {
        @include mobile {
          padding-bottom: 6rem;
        }
        .mypage__body {
          padding: 4rem;
          @include mobile {
            border-radius: 0;
          }
        }
        .c-btn-group {
          margin-top: 4rem;
          gap: 1.6rem;
        }
        &-title {
          display: flex;
          align-items: center;
          padding: 1.6rem 2rem;
          border-top: 0.2rem solid #000;
          border-bottom: 0.1rem solid #f1f1f1;
          p {
            max-width: calc(100% - 6.1rem);
            font-size: 2rem;
            color: $black;
            font-weight: 700;
            padding-right: 1.2rem;
          }
        }
        &-contents {
          padding: 4rem 2rem;
          font-size: 1.6rem;
          img {
            max-width: 100%;
          }
          img + p {
            margin-top: 4rem;
          }
        }
        &-info {
          margin-top: 3rem;
          dt {
            margin-bottom: 1rem;
            font-weight: 700;
          }
        }
        &-lecture {
          padding-top: 6.6rem;
          @include mobile {
            background-color: $white;
            margin-top: 4rem;
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
          &-title {
            margin-bottom: 1.8rem;
            font-size: 2rem;
            font-weight: 700;
            @include mobile {
              padding-left: 1.6rem;
              margin-bottom: 0;
            }
          }
        }
      }
      &-share {
        .mypage__body {
          padding: 4rem 6rem;
          @include tablet {
            padding: 4rem;
          }
          @include mobile {
            padding: 3.2rem 0;
          }
        }
        .mypage__body-head {
          @include mobile {
            .c-btn {
              width: calc(100% - 3.2rem);
              margin: 0 auto;
              height: 4.8rem;
              border-radius: 0.8rem;
              font-size: 1.4rem;
            }
          }
        }
      }
      &-table {
        width: 100%;
        table-layout: fixed;
        @include mobile {
          padding: 0 1.6rem;
          display: block;
        }
        tbody,
        td,
        th {
          @include mobile {
            display: block;
          }
        }
        tbody {
          @include mobile {
            width: 100%;
          }
        }
        thead {
          @include mobile {
            display: none;
          }
        }
        tr {
          @include mobile {
            display: flex;
            flex-wrap: wrap;
            position: relative;
            border-bottom: 0.1rem solid $secondary;
            margin: 0 -1.6rem;
            padding: 2.4rem 1.6rem;
          }
        }
        colgroup {
          @include mobile {
            display: none;
          }
        }
        th,
        td {
          padding: 1.4rem;
          border-top: 0.1rem solid $secondary;
          border-bottom: 0.1rem solid $secondary;
          font-size: 1.4rem;
          text-align: center;
          color: #535353;
          @include mobile {
            border: 0;
          }
        }
        td {
          padding: 1.75rem;
          @include mobile {
            padding: 0;
          }
        }
        td.mypage-mentor__community-table {
          &-date {
            @include mobile {
              width: 100%;
              text-align: left;
              margin-top: 1.4rem;
            }
          }
          &-title {
            font-size: 1.6rem;
            color: $black;
            text-align: left;
            p {
              display: flex;
              align-items: center;
              font-size: 1.6rem;
              color: $black;
              @include mobile {
                display: inline-block;
                vertical-align: top;
              }
              a {
                @include text-clamp(1);
                i {
                  margin-right: 1.2rem;
                  vertical-align: top;
                }
                @include mobile {
                  display: inline;
                  overflow: auto;
                  text-overflow: inherit;
                  white-space: normal;
                  vertical-align: top;
                }
              }
            }
            @include mobile {
              width: 100%;
              margin-bottom: 1.4rem;
            }
          }
          &-name {
            @include mobile {
              margin-left: 2.4rem;
              position: relative;
              &::before {
                content: "";
                display: block;
                position: absolute;
                width: 0.1rem;
                height: 1.2rem;
                top: 50%;
                left: -1.2rem;
                transform: translateY(-50%);
                background-color: $secondary;
              }
            }
          }
          &-reply {
            p {
              display: flex;
              align-items: center;
              justify-content: center;
              i {
                margin-right: 0.4rem;
              }
            }
          }
        }
      }
    }
    &__write {
      @include mobile {
        padding-bottom: 6rem;
      }
      .mypage__body {
        width: 64rem;
        margin: 0 auto;
        padding: 7rem 9rem;
        @include tablet {
          padding: 7rem 9rem;
        }
        @include mobile {
          width: auto;
          padding: 6rem 1.6rem;
        }
        textarea {
          height: 24rem;
        }
      }
      .c-btn-group {
        margin-top: 4rem;
        gap: 1.6rem;
        @include mobile {
          margin-top: 1.6rem;
          padding-top: 4rem;
          border-top: 1.6rem solid $light;
        }
      }
    }
    .c-card {
      @include mobile {
        height: 22vw;
        &--inline {
          padding: 2rem 1.6rem 0;
          gap: 2rem;
        }
        flex-direction: row;
        &-img {
          min-width: 39vw;
          width: 39vw;
          height: 22vw;
          border-radius: 0.8rem;
        }
        &-subtitle {
          display: none;
        }
        &-body {
          padding: 0.2rem 1.2rem 0.6rem;
          height: 22vw;
        }
        &-foot {
          margin-top: auto;
        }
      }
    }
    &__tab {
      &-contents-wrap {
        margin-top: 4rem;
        @include mobile {
          margin-top: 0;
        }
      }
      &-contents-sub {
        padding: 2rem 0 4rem;
        @include mobile {
          padding-top: 1rem;
        }
      }
      &-menu {
        @include mobile {
          display: flex;
        }
        > nav {
          display: flex;
          background-color: #ebebeb;
          border-radius: 1.6rem 1.6rem 0 0;
          overflow: hidden;
          > a {
            flex-grow: 1;
            height: 6rem;
            border-bottom: 0.2rem solid $black;
            > span {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              height: 100%;
              text-align: center;
              color: #535353;
              font-size: 1.8rem;
              cursor: pointer;
            }
            &.active {
              border-radius: 1.6rem 1.6rem 0 0;
              background-color: $light;
              border: 0.2rem solid $black;
              border-bottom: 0;
              > span {
                font-weight: 700;
                color: $black;
              }
            }
          }
          &.c-pc.c-tablet {
            display: flex;
            @include mobile {
              display: none;
            }
          }
          &.c-mo {
            display: none;
            @include mobile {
              display: flex;
            }
          }
          @include mobile {
            width: 100%;
            border-radius: 0;
            height: 6rem;
            overflow: inherit;
            background-color: $white;
            border-top: 0.1rem solid $secondary;
            border-bottom: 0.1rem solid $secondary;
            & + nav {
              border-left: 1px solid $secondary;
            }
            select {
              width: 100%;
              height: 100%;
              border-radius: 0;
              border: 0;
            }
          }
        }
        &-sub {
          font-size: 1.8rem;
          color: #535353;
          nav {
            display: flex;
            &.c-pc.c-tablet {
              display: flex;
              @include mobile {
                display: none;
              }
            }
            &.c-mo {
              display: none;
              @include mobile {
                display: flex;
              }
            }
          }
          a {
            padding: 0 2rem;
            margin: -1rem 0 3rem;
            &.active {
              font-weight: 700;
              color: $black;
            }
          }
        }
      }
      &-contents {
      }
    }
    &__profile {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &-img {
        width: 9.6rem;
        height: 9.6rem;
        margin-top: 1.6rem;
        border-radius: 50%;
        overflow: hidden;
        @include mobile {
          margin-top: 5rem;
        }
        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
      .c-badge {
        margin: -2rem auto 0;
      }
      &-name {
        margin-top: 1.2rem;
        font-size: 2rem;
        font-weight: 700;
        color: $black;
      }
      p {
        margin-top: 0.4rem;
        font-size: 1.4rem;
        color: #535353;
        text-align: center;
        &.c-text-danger {
          color: $danger;
        }
      }
    }
    &__keyword {
      .c-badge {
        height: 3.6rem;
        padding: 0 2rem;
        font-size: 1.3rem;
        &.active {
          color: #000;
        }
      }
      ul {
        display: flex;
        justify-content: center;
        margin-top: 2.6rem;
        @include mobile {
          margin-top: 1.6rem;
        }
        li {
          width: 25%;
          padding-top: 2.6rem;
          background: url(@img/ic-keyword.svg) no-repeat top center;
          text-align: center;
          font-size: 1.3rem;
          color: #535353;
        }
      }
    }
    &__history {
      margin-top: 1.5rem;
      padding: 2.2rem 2rem;
      background-color: #f8f8f8;
      border-radius: 0.8rem;
      p {
        font-size: 1.3rem;
        font-weight: 700;
        color: #535353;
      }
      ul {
        margin-top: 0.8rem;
        li {
          padding: 0.2rem 0 0 2.8rem;
          font-size: 1.4rem;
          &.gold {
            background: url(@img/ic-history-gold.svg) no-repeat center left;
          }
          &.silver {
            background: url(@img/ic-history-silver.svg) no-repeat center left;
          }
        }
        li + li {
          margin-top: 0.5rem;
          @include mobile {
            margin-top: 0.2rem;
          }
        }
      }
    }
    &__site {
      margin-top: 1.5rem;
      padding: 2.2rem 2rem;
      background-color: #f8f8f8;
      border-radius: 0.8rem;
      p {
        font-size: 1.3rem;
        font-weight: 700;
        color: #535353;
      }
      ul {
        margin-top: 0.8rem;
        li {
          a {
            padding-right: 1.8rem;
            font-size: 1.4rem;
            background: url(@img/ic-link.svg) no-repeat center right;
          }
        }
        li + li {
          margin-top: 0.5rem;
          @include mobile {
            margin-top: 0.2rem;
          }
        }
      }
      & + .mypage-mentor__history {
        margin-top: 0.8rem;
      }
    }
    &__message {
      @include mobile {
        padding-bottom: 2.6rem;
      }
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2.2rem;
        i {
          margin-right: 0.8rem;
        }
        font-size: 1.6rem;
        font-weight: 700;
        color: #535353;
      }
    }
    &__link {
      font-size: 1.4rem;
      color: #535353;
      font-weight: 700;
      @include mobile {
        margin: 0 -1.6rem;
        border-bottom: 1.6rem solid $light;
      }
      li {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        a {
          @include mobile {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 7rem;
            text-align: center;
          }
        }
      }
      li + li {
        margin-top: 1.6rem;
        @include mobile {
          position: relative;
          margin-top: 0;
          &::before {
            content: "";
            display: block;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            width: 0.1rem;
            height: 2.4rem;
            background-color: #f1f1f1;
          }
        }
      }
      @include mobile {
        display: flex;
      }
    }
    &__head {
      display: flex;
      align-items: center;
      &-info {
        flex-grow: 1;
        color: $black;
        font-size: 1.6rem;
        &-title {
          display: flex;
          align-items: center;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.6rem;
          .c-badge {
            margin-left: 1rem;
          }
        }
        &-date {
          display: inline-flex;
        }
        &-location {
          display: inline-flex;
          position: relative;
          margin-left: 2.6rem;
          padding-right: 2.4rem;
          background: url(@img/ic-marker.svg) no-repeat right center;
          &::before {
            content: "";
            display: block;
            position: absolute;
            top: 50%;
            left: -1.4rem;
            width: 0.2rem;
            height: 0.2rem;
            border-radius: 50%;
            background-color: #888;
          }
        }
        &-weeks {
          display: inline-flex;
          position: relative;
          margin-left: 2.6rem;
          &::before {
            content: "";
            display: block;
            position: absolute;
            top: 50%;
            left: -1.4rem;
            width: 0.2rem;
            height: 0.2rem;
            border-radius: 50%;
            background-color: #888;
          }
        }
      }
      &-menu {
        display: flex;
        gap: 0.8rem;
        z-index: 1;
        .c-btn {
          min-width: auto;
          padding: 0 2rem;
          font-weight: 700;
          @include mobile {
            width: 100%;
          }
        }
        span {
          color: $danger;
          font-size: 1.4rem;
        }
        @include mobile {
          position: absolute;
          bottom: 3rem;
          left: 0;
          width: 100%;
          padding: 0 1.6rem;
        }
      }
    }
    &__foot {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 3rem;
      padding: 2rem 0 0;
      border-top: 0.1rem solid #f1f1f1;
      font-size: 1.4rem;
      color: #535353;
      @include mobile {
        align-items: flex-start;
      }
      &--type02 {
        padding-top: 1.7rem;
        @include mobile {
          padding-top: 1.7rem;
        }
      }
      &-file {
        background: url(@img/ic-clib.svg) no-repeat center left;
        padding-left: 2.2rem;
        span {
          text-decoration: underline;
        }
        &--type02 {
          background: url(@img/ic-clib-gray.svg) no-repeat center left;
        }
        &--type03 {
          background: none;
          padding-left: 0;
        }
      }
      &-name {
        font-weight: 700;
        @include mobile {
          display: flex;
          flex-direction: column;
        }
        span {
          font-weight: 400;
          color: $danger;
          margin-left: 2rem;
          @include mobile {
            margin-top: 0.6rem;
            margin-left: 0;
          }
        }
      }
      a.mypage-mentor__foot-detail {
        text-decoration: underline;
      }
      @include mobile {
        margin: 3rem -1.6rem 0;
        padding: 2rem 1.6rem 8rem;
      }
    }
  }
  &-coupon {
    &__list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.6rem 2.4rem;
      @include tablet {
        grid-template-columns: 1fr;
        gap: 1.6rem 0;
      }
      &-item {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 17rem;
        border: 0.1rem solid $secondary;
        border-radius: 0.8rem;
        padding: 0 3rem;
        font-size: 1.4rem;
        color: #535353;
        &::before {
          @include mobile {
            content: "";
            display: block;
            position: absolute;
            bottom: 6rem;
            left: -0.1rem;
            transform: translateY(50%);
            width: 0.8rem;
            height: 1.6rem;
            background: url(@img/line-coupon-left-mo.svg) no-repeat center /
              100%;
            z-index: 1;
          }
        }
        &::after {
          @include mobile {
            content: "";
            display: block;
            position: absolute;
            bottom: 6rem;
            right: -0.1rem;
            transform: translateY(50%);
            width: 0.8rem;
            height: 1.6rem;
            background: url(@img/line-coupon-right-mo.svg) no-repeat center /
              100%;
            z-index: 1;
          }
        }
        &-contents {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 2.4rem 6rem 2.4rem 0;
          @include mobile {
            display: flex;
            flex-direction: column;
            padding-top: 2.4rem;
            padding-right: 0;
            height: 44.17vw;
          }
        }
        @include mobile {
          justify-content: flex-start;
          height: 21.9rem;
        }
        &-head {
          color: $black;
          @include mobile {
            margin-bottom: 1.8rem;
          }
        }
        &-text {
          margin-top: 0.6rem;
          font-size: 1.8rem;
          font-weight: 700;
        }
        &-number {
          font-size: 1.8rem;
          font-weight: 700;
          color: $black;
          span {
            color: $primary;
          }
        }
        .c-badge {
          background-color: $blue;
        }
        .c-text-caution {
          margin-top: 0.2rem;
          font-size: 1.2rem;
          color: $danger;
        }
        &-date {
          margin-top: auto;
          line-height: 1;
        }
        &-copy {
          .ico {
            margin-bottom: 0.4rem;
            @include mobile {
              margin-bottom: 0;
            }
          }
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: absolute;
          padding-left: 1rem;
          top: -0.1rem;
          right: -0.1rem;
          width: 9.9rem;
          height: 17.2rem;
          text-align: center;
          background: $white url(@img/line-coupon.svg) no-repeat;
          font-weight: 700;
          @include mobile {
            flex-direction: row;
            top: unset;
            left: 0;
            right: unset;
            bottom: 0;
            width: 100%;
            height: 6rem;
            background: none;
          }
          &::before {
            @include mobile {
              content: "";
              display: block;
              position: absolute;
              top: -0.1rem;
              left: 0;
              width: 100%;
              height: 0.2rem;
              background: url(@img/line-coupon-top-mo.svg) center;
            }
          }
          .ico-copy {
            @include mobile {
              margin-right: 0.8rem;
            }
          }
          span {
            display: block;
            font-weight: 400;
          }
        }
        &--end {
          background-color: #f6f6f6;
          .c-badge {
            background-color: #959595;
          }
          .c-text-caution {
            color: #959595;
          }
          .mypage-coupon__list-item-number {
            span {
              color: #959595;
            }
          }
          &::before {
            @include mobile {
              background: url(@img/line-coupon-left-mo2.svg) no-repeat center /
                100%;
            }
          }
          &::after {
            @include mobile {
              background: url(@img/line-coupon-right-mo2.svg) no-repeat center /
                100%;
            }
          }
          .mypage-coupon__list-item {
            &-copy {
              background: $white url(@img/line-coupon2.svg) no-repeat;
              @include mobile {
                background: none;
              }
              &::before {
                @include mobile {
                  background: url(@img/line-coupon-top-mo2.svg) center;
                }
              }
            }
          }
        }
      }
    }
  }
  &-calculate {
    .c-tab-nav {
      width: auto;
      @include mobile {
        margin: 0 -1.6rem;
      }
    }
    .c-tab-contents {
      width: auto;
      padding-top: 4rem;
    }
    &__title {
      text-align: center;
      margin-bottom: 3.8rem;
      span {
        color: $danger;
        font-size: 1.6rem;
      }
      p {
        font-size: 4rem;
        font-weight: 700;
        color: $black;
      }
    }
  }
  &-share {
    &__view {
      .c-reply-group {
        padding: 0;
      }
    }
  }
  &-edu {
    &__list {
      &-head {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 20rem;
        border-top: 0.2rem solid $black;
        @include mobile {
          margin-top: 4rem;
          display: grid;
          height: auto;
          padding: 2.5rem 0;
          gap: 1.6rem;
          grid-template-columns: 1fr 1fr;
        }
        dl {
          width: 50%;
          text-align: center;
          @include mobile {
            width: 100%;
          }
          dt {
            font-size: 1.6rem;
            color: #535353;
            margin-bottom: 0.9rem;
          }
          dd {
            font-size: 4rem;
            span {
              font-weight: 700;
              color: $primary;
            }
          }
        }
      }
      &-body {
        border-bottom: 0.1rem solid #f1f1f1;
        dl + dl {
          dt {
            .mypage-edu__title {
              border-top: 0.1rem solid #f1f1f1;
            }
          }
        }
      }
    }
    &__title {
      padding: 2.5rem 2rem;
      font-size: 2rem;
      font-weight: 700;
      background: url(@img/ic-accordion-arrow-off.svg) no-repeat center right
        1.2rem;
      border-top: 0.1rem solid $secondary;
      cursor: pointer;
      &.active {
        background: url(@img/ic-accordion-arrow-on.svg) no-repeat center right
          1.2rem;
      }
      span {
        color: $danger;
      }
    }
    &__contents {
      margin-bottom: 6rem;
      .c-card--inline {
        width: auto;
      }
    }
  }
  &-consulting {
    &__box {
      position: relative;
      padding: 4rem 3rem;
      border: 0.1rem solid $secondary;
      border-radius: 0.8rem;
      @include mobile {
        width: 32.8rem;
        height: 11.5rem;
        padding: 2rem;
      }
      &-wrap {
        display: grid;
        gap: 0 2.4rem;
        grid-template-columns: auto 28.2rem;
        width: 100%;
        margin-top: 3.8rem;
        @include mobile {
          overflow-x: auto;
          width: calc(100% + 3.2rem);
          margin-top: 2.3rem;
          margin-left: -1.6rem;
          padding-left: 1.6rem;
          gap: 0 0.8rem;
          grid-template-columns: 1fr 1fr;
        }
      }
      &-head {
        font-size: 2rem;
        font-weight: 700;
        display: flex;
        align-items: center;
        .c-badge {
          margin-left: 0.8rem;
        }
      }
      &-body {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 1rem;
        font-size: 1.4rem;
        color: #535353;
        a {
          font-size: 1.3rem;
          text-decoration: underline;
          @include mobile {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            text-indent: -999rem;
            z-index: 1;
          }
        }
      }
      &-career {
        padding-left: 23rem;
        @include mobile {
          padding: 2rem;
        }
        &::before {
          content: "";
          display: block;
          position: absolute;
          left: 4.2rem;
          top: -2.8rem;
          width: 15rem;
          height: 14.5rem;
          background: url(@img/ic-consulting.svg) no-repeat center / 100%;
          @include mobile {
            display: none;
            width: 9.9rem;
            height: 8.273rem;
            top: 2.8rem;
            right: 2.4rem;
            left: unset;
          }
        }
      }
    }
    &__list {
      margin-top: 4rem;
      @include mobile {
        margin: 4rem -1.6rem 0;
      }
      .c-notfound {
        margin: 0;
      }
    }
    &__title {
      display: flex;
      align-items: center;
      position: relative;
      padding: 2.5rem 0;
      background: url(@img/ic-accordion-arrow-off.svg) no-repeat top 3.2rem
        right 1.2rem;
      cursor: pointer;
      border-top: 0.1rem solid #f1f1f1;
      @include mobile {
        flex-wrap: wrap;
        align-items: flex-start;
        padding: 1.6rem 1.6rem 1.7rem;
        background: url(@img/ic-accordion-arrow-off.svg) no-repeat top 4rem
          right 1.2rem;
      }
      &.active {
        background: url(@img/ic-accordion-arrow-on.svg) no-repeat top 3.2rem
          right 1.2rem;
        border-bottom: 0;
        @include mobile {
          background: url(@img/ic-accordion-arrow-on.svg) no-repeat top 4rem
            right 1.2rem;
        }
      }
      &-category {
        width: 14rem;
        min-width: 14rem;
        text-align: center;
        font-size: 1.6rem;
        font-weight: 700;
        @include mobile {
          width: 100%;
          min-width: auto;
          margin-bottom: 1.2rem;
          text-align: left;
        }
      }
      .c-badge {
        position: absolute;
        top: 50%;
        right: 6.6rem;
        transform: translateY(-50%);
      }
      &-text {
        flex-grow: 1;
        max-width: 100%;
        p {
          font-size: 1.6rem;
          color: $black;
          margin-bottom: 0.2rem;
          padding-right: 6rem;
          @include tablet {
            padding-right: 4rem;
          }
        }
        span {
          font-size: 1.4rem;
          color: #535353;
        }
      }
    }
    &__contents {
      margin-bottom: 6rem;
      padding: 0 2rem 0 14rem;
      @include mobile {
        margin-bottom: 1.6rem;
        padding: 0 1.6rem;
      }
      &-box {
        padding: 3rem 4rem;
        background-color: #f5f5f5;
        dl {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 1.6rem;
          dt {
            color: #535353;
          }
          dd {
            font-weight: 700;
            a {
              display: flex;
              align-items: center;
              font-weight: 400;
              font-size: 1.4rem;
              color: #535353;
              text-decoration: underline;
              i {
                margin-right: 0.3rem;
              }
            }
          }
          & + dl {
            margin-top: 1.4rem;
          }
        }
      }
    }
  }
  &__report {
    i {
      &.ico {
        &-coupon {
          background: url(@img/ic-coupon.svg) no-repeat center;
        }
        &-event {
          background: url(@img/ic-event.svg) no-repeat center;
        }
        &-alarm {
          background: url(@img/ic-alarm.svg) no-repeat center;
        }
        &-prev {
          width: 1.1rem;
          transform: rotate(180deg);
          background: url(@img/ic-arrow-right.svg) no-repeat center right /
            0.9rem;
        }
        &-next {
          width: 1.1rem;
          background: url(@img/ic-arrow-right.svg) no-repeat center right /
            0.9rem;
        }
        &-pencil {
          width: 3rem;
          min-width: 3rem;
          height: 3rem;
          background: url(@img/ic-title-pencil.svg) no-repeat center;
        }
        &-book {
          width: 3rem;
          min-width: 3rem;
          height: 3rem;
          background: url(@img/ic-title-book.svg) no-repeat center;
        }
        &-best {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.35rem;
          height: 2.35rem;
          border-radius: 50%;
          font-size: 1.3rem;
          color: $white;
          border: 0.1rem solid #cfad94;
          background-color: #cfad94;
          text-indent: 0;
          font-style: normal;
          &.no {
            &-1 {
              border: 0.1rem solid #ffb73e;
              background-color: #ffb73e;
            }
            &-2 {
              border: 0.1rem solid #c3c3c3;
              background-color: #c3c3c3;
            }
            &-3 {
              border: 0.1rem solid #cfad94;
              background-color: #cfad94;
            }
          }
        }
      }
    }
    .c {
      &-btn {
        &--prev,
        &--next {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: auto;
          max-width: 3.6rem;
          width: 3.6rem;
          height: 3.6rem;
          border-radius: 50%;
          padding: 0;
          border: 0.1rem solid #dddddd;
          background-color: $white;
          box-shadow: 0 0.8rem 1.2rem 0 rgba(17, 17, 17, 0.04);
          overflow: hidden;
        }
        &-outline {
          border-width: 0.1rem;
          border-color: #dedede;
          border-radius: 0.6rem;
        }
      }
      &-nodata {
        text-align: center;
        &-img {
          padding-bottom: 1rem;
        }
        .c {
          &-text {
            &-title {
              padding-bottom: 0.8rem;
              font-size: 2rem;
              font-weight: 800;
              line-height: normal;
              color: $black;
            }
          }
        }
        p {
          font-size: 1.4rem;
          line-height: normal;
          color: #535353;
        }
      }
      &-text {
        &-blue {
          color: #0175da;
        }
      }
      &-card {
        background-color: $white;
        &--inline {
          gap: 4rem 1.6rem;
          width: 100%;
          &-col3 {
            & > .c-card--nodata {
              &:first-of-type {
                min-height: 22.7rem;
              }
            }
            .c {
              &-card {
                &--nodata {
                  width: calc(300% + 3.2rem);
                }
                & + .c-card--nodata {
                  width: calc(200% + 1.6rem);
                }
                & + .c-card {
                  & + .c-card--nodata {
                    width: 100%;
                  }
                }
              }
            }
          }
        }
        &--custom {
          .c {
            &-card {
              &-logo {
                border: none;
              }
              &-title {
                margin-top: 1rem;
                margin-bottom: 1rem;
              }
              &-body {
                background-color: #fafafa;
              }
              &-info {
                width: 100%;
                & > * {
                  font-size: 1.4rem;
                  letter-spacing: -0.5px;
                }
                dt {
                  width: 8rem;
                  font-weight: bold;
                  color: $black;
                }
                dd {
                  width: calc(100% - 8rem);
                  color: #535353;
                }
              }
              &-foot {
                &-progress {
                  .c-text-primary {
                    color: #e42b01 !important;
                  }
                  .c {
                    &-progress {
                      margin: 0;
                      background-color: #e6e8f1;
                      height: 0.6rem;
                      &-bar {
                        background-color: #e42b01;
                      }
                    }
                  }
                  strong {
                    min-width: auto;
                    margin-left: 1.2rem;
                  }
                }
              }
            }
          }
          dl {
            & + dl {
              margin: 1rem 0 0 0;
              &::before {
                content: none;
              }
            }
          }
        }
        &--nodata {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
        }
        &-logo {
          margin: 0 2rem;
          padding: 1.6rem 0 1rem;
          border-bottom: 0.1rem solid #eeeeee;
          img {
            max-width: 100%;
          }
        }
        &-title {
          &--sm {
            min-height: auto;
            a {
              strong {
                @include text-clamp(1);
              }
              @include text-clamp(1);
            }
          }
          & + .c-card-subtitle {
            margin-top: 1rem;
            line-height: 1;
          }
        }
        &-subtitle {
          span {
            position: relative;
            display: inline-flex;
            color: #535353;
            & + span {
              margin-left: 1.4rem;
              &::before {
                content: "";
                display: block;
                top: 50%;
                left: -0.75rem;
                transform: translateY(-50%);
                position: absolute;
                width: 0.2rem;
                height: 0.2rem;
                background-color: #535353;
              }
            }
          }
        }
        &-foot {
          margin-top: 1.6rem;
          &-time {
            display: flex;
            align-items: center;
            justify-content: space-between;
            p {
              font-size: 1.6rem;
              font-weight: bold;
              color: #535353;
            }
            .c {
              &-btn {
                &-outline {
                  padding: 0 1.1rem;
                  font-size: 1.3rem;
                  font-weight: bold;
                  color: #535353;
                  .ico-copy {
                    margin-right: 0.6rem;
                  }
                }
              }
            }
          }
        }
      }
    }
    &-head {
      dl {
        display: flex;
        width: 100%;
        justify-content: space-between;
        dt {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 33.33%;
          background-color: $primary;
          border-radius: 0.8rem;
          padding: 2.2rem 2.4rem;
          & > * {
            color: $white;
          }
        }
        dd {
          width: calc(66.67% - 1rem);
          background-color: #f7f8f9;
          border-radius: 0.8rem;
          padding: 2.75rem 1rem;
        }
      }
      &--title {
        p {
          margin: 0;
          padding: 0;
          font-size: 1.3rem;
          line-height: 1.38;
        }
      }
      &--info {
        display: flex;
        align-items: center;
      }
      .c {
        &-text {
          &-title {
            &-lg {
              font-size: 2.8rem;
              font-weight: 600;
              line-height: 3.5rem;
              & + .c-text-title-sub {
                padding-top: 1.4rem;
                font-size: 1.6rem;
                & + p {
                  padding-top: 0.5rem;
                }
              }
            }
            &-sub {
              padding: 0;
              margin: 0 !important;
              font-size: 2.4rem;
              font-weight: 600;
              line-height: 1.25;
              & + p {
                padding-top: 0.8rem;
              }
            }
          }
        }
      }
      & + .mypage__report-box {
        margin-top: 1rem;
      }
    }
    &-box {
      background-color: #f7f8f9;
      border-radius: 0.8rem;
      padding: 3rem 2.4rem 2.4rem;
      & + .mypage__report-title--lg {
        padding-top: 6rem;
        text-align: center;
      }
      &--title {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        width: 100%;
        padding-top: 1rem;
        padding-bottom: 1.6rem;
        & + .mypage__report-box--title {
          padding-top: 4rem;
        }
        & > span {
          font-size: 1.4rem;
          color: #535353;
        }
        i {
          &.ico {
            margin-right: 1rem;
          }
        }
      }
      .c {
        &-nodata {
          background-color: $white;
          border-radius: 0.8rem;
        }
      }
    }
    &-banner {
      display: flex;
      align-items: center;
      background-color: $white;
      border-radius: 0.6rem;
      &--img {
        padding-left: 6rem;
        img {
          max-width: 16rem;
        }
      }
      &--cont {
        padding: 0 8.4rem 0 6rem;
        line-height: 1.5;
        font-size: 1.6rem;
        font-weight: 500;
        color: $black;
      }
      &--title {
        font-size: 2rem;
        font-weight: bold;
        line-height: 1.35;
        color: $black;
      }
      & + .mypage__report-calendar {
        margin-top: 2rem;
      }
    }
    &-badge {
      padding-top: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 7.7rem;
      & + .c {
        &-badge {
          margin-top: 2.4rem;
        }
      }
      li {
        & + li {
          margin-left: 0.5rem;
        }
        .c {
          &-badge {
            display: flex;
            width: 4rem;
            height: 4rem;
            border-radius: 0;
            background-color: transparent;
            &-stamp {
              background: url(@img/ic-badge-stamp0.svg) no-repeat;
              &--round {
                background: url(@img/ic-badge-stamp-round0.svg) no-repeat;
              }
            }
          }
        }
        span {
          margin-top: 1rem;
          display: block;
          line-height: 1.5rem;
          font-size: 1.2rem;
          font-weight: bold;
          color: $black;
        }
      }
    }
    &-calendar {
      &--title {
        padding: 6rem 0 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        .c {
          &-text {
            &-title {
              &-lg {
                padding: 0 1.9rem;
                font-weight: bold;
                color: $black;
              }
            }
          }
        }
      }
      &--haed {
        font-size: 2rem;
        text-align: center;
        font-weight: 700;
        span {
          color: $primary;
          &.type02 {
            color: #0175da;
          }
          &.type03 {
            color: #006d4c;
          }
        }
      }
      &--body {
        padding-top: 2rem;
        text-align: center;
        p {
          padding-top: 0.4rem;
          line-height: normal;
          font-size: 2rem;
          font-weight: bold;
          color: #0175da;
          strong {
            display: inline-flex;
            line-height: normal;
            font-size: 3rem;
            font-weight: bold;
          }
          & + .c-badge {
            margin-top: 1.4rem;
          }
        }
      }
      & + .mypage__report-info {
        margin-top: 2rem;
      }
      .c {
        &-card {
          padding: 2.4rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        &-calendar {
          .dp {
            &__menu_inner {
              font-size: 1.3rem;
              font-weight: 600;
            }
            &__main {
              height: auto;
              color: $black;
              div {
                max-width: 23.133rem;
              }
              & > div {
                height: auto;
              }
            }
            &__menu {
              background-color: transparent;
              border: 0;
            }
            &__menu_inner {
              padding: 0;
            }
            &__month_year_row {
              display: none;
            }
            &__pointer {
              max-width: 3.3rem !important;
              max-height: 3.3rem;
            }
            &__cell_inner {
              border: 0.4rem solid #fff0c9;
              &:hover {
                background-color: rgba(255, 92, 1, 0.2);
              }
            }
            &__today {
              background-color: $white;
              color: $black;
              border: 0.4rem solid #fff0c9;
            }
            &__cell_highlight {
              background-color: $primary;
              color: $white;
            }
            &__calendar_header {
              height: 2rem;
            }
            &__action_row {
              display: none;
            }
          }
          .vc {
            &-header {
              display: none !important;
            }
            &-pane {
              border: none !important;
              min-width: 20rem;
            }
            &-weeks {
              padding: 0;
              min-width: 20rem;
            }
            &-weekday {
              color: #535353;
              padding-bottom: 1rem;
            }
            &-day {
              &-content {
                color: $black;
                width: 2.4rem;
                height: 2.4rem;
                line-height: 2.4rem;
                &:hover {
                  background-color: rgba($primary, 0.2);
                }
                &.vc {
                  &-attr {
                    &.vc {
                      &-bg {
                        background-color: $primary;
                        &:hover {
                          background-color: $primary;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        &-badge {
          &-lg {
            min-width: 9.4rem;
            height: 2.4rem;
            font-size: 1.3rem;
            font-weight: normal;
          }
          &-blue {
            background-color: #0175da;
          }
          &-green {
            background-color: #25a67f;
          }
        }
      }
      .bg1 {
        background-color: #fff0c9;
      }
      .bg2 {
        background-color: #d6e9ff;
      }
      .bg3 {
        background-color: #a9fcce;
      }
    }
    &-chart {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1.6rem;
      & > li {
        width: 33.33%;
        height: 33.4rem;
        border-radius: 0.8rem;
        background-color: $white;
        padding: 3rem 2.4rem;
        &:last-child {
          flex-grow: 1;
        }
        .c {
          &-chart {
            margin-top: 3rem;
            height: calc(100% - 7.5rem);
            img {
              max-width: 100%;
            }
            .vch__legend {
              display: none;
            }
          }
        }
      }
      &--title {
        line-height: normal;
        font-size: 1.8rem;
        font-weight: bold;
        color: $black;
      }
      &--text {
        padding-top: 0.6rem;
        font-size: 1.3rem;
        font-weight: normal;
        line-height: normal;
        color: #535353;
      }
      & + .mypage__report-box--title {
        margin-top: 3rem;
      }
    }
    &-title {
      &--lg {
        padding: 0 0 3rem;
        line-height: normal;
        font-size: 3.2rem;
        font-weight: bold;
        color: $black;
      }
      &--sub {
        align-items: center;
        line-height: normal;
        font-size: 2rem;
        font-weight: bold;
        color: $black;
        span {
          line-height: normal;
          font-size: 1.4rem;
          font-weight: normal;
          color: #535353;
        }
      }
      &--sm {
        line-height: normal;
        font-size: 1.6rem;
        font-weight: bold;
        color: $black;
        i {
          &.ico {
            &-new {
              margin: 0.3rem 0 0 0.3rem;
              vertical-align: top;
            }
          }
        }
      }
    }
    &-tab {
      display: grid;
      gap: 0;
      grid-template-columns: 32.3% auto;
      width: 100%;
      align-items: flex-start;
      border-radius: 0.8rem;
      background-color: #5f626d;
      .c {
        &-tab {
          &-nav {
            padding: 1rem 1.2rem 1rem 3.2rem;
            width: 100%;
            & > ul {
              flex-direction: column;
              counter-reset: number 0;
              border-bottom: none;
              li {
                & + li {
                  border-top: 0.1rem solid rgba($white, 0.3);
                }
                a {
                  position: relative;
                  display: block;
                  height: auto;
                  padding: 2rem 0 2rem 3.8rem;
                  color: $white;
                  opacity: 0.5;
                  &::before {
                    position: absolute;
                    top: 2.2rem;
                    left: 0;
                    font-size: 2.4rem;
                    font-weight: bold;
                    counter-increment: number 1;
                    content: "0" counter(number);
                  }
                  display: block;
                  strong {
                    font-size: 2.4rem;
                    font-weight: 600;
                  }
                }
                p {
                  display: none;
                  line-height: 1.54;
                  font-size: 1.3rem;
                  font-weight: 500;
                }
                &.active {
                  border-bottom: none;
                  a {
                    opacity: 1;
                  }
                  p {
                    &.active {
                      display: block;
                    }
                  }
                }
              }
            }
          }
          &-contents {
            width: 100%;
            height: 100%;
            padding: 2rem;
            border-radius: 0.8rem;
            background-color: $white;
            & > p {
              display: flex;
              align-items: center;
              width: 100%;
              height: 100%;
              & > img {
                max-width: 100%;
              }
            }
            &__wrap {
              width: 100%;
              height: 100%;
              padding: 2rem;
            }
          }
        }
      }
      & + .c-card--inline {
        margin-top: 4rem;
      }
    }
    &-my {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      li {
        width: 33.333%;
        text-align: center;
        a {
          display: block;
          border-right: 0.1rem solid #f1f1f1;
          p {
            color: #535353;
          }
          strong {
            color: $black;
          }
        }
        p {
          font-size: 1.4rem;
          line-height: 1.7rem;
        }
        strong {
          line-height: 4rem;
          font-size: 3.2rem;
          font-weight: bold;
        }
        i {
          &.ico {
            width: 3.2rem;
            height: 3.2rem;
            margin-bottom: 1.2rem;
          }
        }
        &:last-child {
          a {
            border-right: 0;
          }
        }
      }
    }
    &-site {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      &--day,
      &--text {
        background-color: $white;
        display: flex;
        align-items: center;
        height: 8.8rem;
        padding: 0 1.6rem;
        line-height: 1.38;
        font-size: 1.3rem;
        font-weight: 500;
      }
      &--day {
        justify-content: center;
        height: 8.8rem;
        strong {
          font-size: 3.2rem;
          font-weight: bold;
        }
      }
      &--text {
        p {
          width: 100%;
          line-height: 1.57 !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        strong {
          font-weight: 800;
        }
      }
      &--logo {
        display: flex;
        align-items: center;
        justify-content: space-between;
        li {
          width: 100%;
          background-color: $white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          height: 8.8rem;
          border-radius: 0.8rem;
          & + li {
            margin-left: 1.2rem;
          }
          img {
            max-width: 14rem;
          }
          p {
            display: flex;
            align-items: center;
            margin: 0;
            padding: 0;
            height: calc(100% - 3rem);
          }
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 3rem;
            min-height: 3rem;
            margin: 0;
            border-top: 0.1rem solid #f1f1f1;
            font-size: 1.2rem;
            font-weight: 400;
          }
        }
      }
      dt {
        width: 32%;
      }
      dd {
        width: calc(68% - 2.4rem);
      }
      &.custom {
        dt {
          width: calc(68% - 2.4rem);
        }
        dd {
          width: 32%;
        }
      }
      p {
        margin-top: 1.6rem;
        font-size: 1.3rem;
        font-weight: 500;
        line-height: normal;
        color: $black;
        a {
          margin: 0 0 0 1rem;
          font-weight: 600;
        }
      }
      a {
        margin-top: 1.6rem;
        font-size: 1.3rem;
        font-weight: 600;
        i {
          &.ico {
            margin-top: 0;
          }
        }
      }
      .mypage {
        &__report {
          &-title {
            &--sm {
              margin-bottom: 1.4rem;
            }
          }
        }
      }
      .c {
        &-nodata {
          background-color: $white;
          min-height: 8.8rem;
          border-radius: 0.8rem;
          img {
            height: 3.2rem;
            & + p {
              margin-top: 1rem !important;
            }
          }
        }
      }
    }
    &-rank {
      padding: 2.4rem;
      margin-bottom: 3rem;
      background-color: $white;
      border-radius: 0.8rem;
      .c {
        &-card {
          background-color: #5f626d;
          padding: 0.8rem 0.8rem 0.8rem 1.2rem;
          &--inline {
            gap: 4rem 2.4rem;
          }
        }
        &-nodata {
          background-color: transparent;
          p {
            color: $white;
          }
        }
      }
      &--list {
        overflow: hidden;
        overflow-y: auto;
        padding-right: 0.4rem;
        height: 22rem;
        &::-webkit-scrollbar {
          width: 0.6rem;
        }
        &::-webkit-scrollbar-thumb {
          background-color: #868b9a;
          border-radius: 0.4rem;
          background-clip: padding-box;
          border: none;
        }
        &::-webkit-scrollbar-track {
          background-color: #3b3d45;
          border-radius: 0.4rem;
        }
        .c {
          &-table {
            thead {
              position: sticky;
              top: 0;
              left: 0;
              right: 0;
              background-color: #5f626d;
              tr {
                border: none;
                th {
                  padding-top: 0.8rem;
                  font-size: 1.3rem;
                  font-weight: normal;
                  color: $white;
                }
              }
            }
            tbody {
              tr {
                border: none;
                td {
                  padding: 0.6rem 0.5rem;
                  line-height: 2.35rem;
                  text-align: center;
                  font-size: 1.4rem;
                  font-weight: normal;
                  color: $white;
                }
                &:first-child {
                  td {
                    padding-top: 0;
                  }
                }
              }
            }
          }
        }
        & + .mypage__report-rank--foot {
          margin-top: 1.6rem;
        }
      }
      &--title {
        .c {
          &-card {
            background-color: transparent;
            padding: 4rem 0.5rem 1.6rem;
          }
          &-text {
            &-title {
              &-sm {
                font-size: 1.6rem;
                font-weight: normal;
                line-height: normal;
              }
              &-lg {
                padding-top: 0.3rem;
                font-size: 2.2rem;
                font-weight: bold;
                line-height: normal;
              }
            }
            &-blue {
              color: #0175da;
            }
          }
        }
      }
    }
    &-link {
      display: inline-flex;
      align-items: center;
      line-height: normal;
      font-size: 1.4rem;
      color: #535353;
      i {
        &.ico {
          &-arrow {
            background: none;
            min-width: auto;
            width: 0.7rem;
            height: 0.7rem;
            border: 0.1rem solid #535353;
            border-width: 0.1rem 0.1rem 0 0;
            transform: rotate(45deg);
            opacity: 0.8;
            margin: 0.1rem 0 0 0.3rem;
          }
        }
      }
    }
    &-list {
      margin-top: 0.4rem;
      margin-bottom: 1rem;
      & + .mypage__report-box--title {
        padding-top: 4rem;
      }
    }
    &-info {
      padding: 0 2.4rem;
      margin-bottom: 3rem;
      border-radius: 0.6rem;
      background-color: $white;
      &--head {
        display: flex;
        justify-content: center;
        padding: 2.4rem 0 1.9rem;
        dl {
          align-items: center;
        }
        dt {
          padding-right: 2.3rem;
        }
        p {
          padding-top: 0.6rem;
          line-height: normal;
          font-size: 1.3rem;
          color: #535353;
        }
      }
      &--body {
        display: flex;
        justify-content: center;
        padding: 2.4rem 0;
        border-top: 0.1rem solid #f1f1f1;
        text-align: center;
        ul {
          align-items: flex-end;
          li {
            padding: 0 3rem;
            span {
              margin-right: 1rem;
              line-height: 1.71;
              font-size: 1.4rem;
              font-size: 500;
              color: #535353;
              &.c-text-black {
                margin-right: 0;
                line-height: 1.2;
                font-size: 2rem;
                font-weight: bold;
                color: $black;
                strong {
                  font-size: 3.2rem;
                  line-height: 0.75;
                }
              }
            }
          }
        }
      }
      &--title {
        line-height: normal;
        font-size: 1.8rem;
        font-weight: bold;
        color: $black;
      }
    }
    @include tablet {
      .c {
        &-card {
          &--inline {
            width: 85rem;
            &-col3 {
              grid-template-columns: 1fr 1fr 1fr;
            }
          }
        }
      }
      &-calendar {
        width: calc(100% + 2.4rem);
        padding-right: 2.4rem;
        overflow: hidden;
        overflow-x: auto;
        .c {
          &-text {
            &-title {
              &-lg {
                margin-top: 0 !important;
              }
            }
          }
        }
        &--title {
          .c {
            &-text {
              &-title {
                &-lg {
                  margin-top: 0 !important;
                }
              }
            }
          }
        }
      }
      &-rank {
        &--wrap {
          width: calc(100% + 2.4rem);
          padding-right: 2.4rem;
          overflow: hidden;
          overflow-x: auto;
        }
        &--title {
          .c {
            &-text {
              &-title {
                &-lg {
                  margin-top: 0 !important ;
                }
              }
            }
          }
        }
      }
      &-title {
        &--lg {
          padding: 4rem 0;
        }
      }
      &-list {
        //width: calc(100% + 2.4rem);
        //padding-right: 2.4rem;
        width: 100%;
        padding-right: 0;
        .c {
          &-card {
            &--inline {
              width: auto;
              overflow: hidden;
              overflow-x: auto;
              .c {
                &-card {
                  width: 27rem;
                  &--nodata {
                    width: calc(300% + 3.2rem);
                  }
                  & + .c-card--nodata {
                    width: calc(200% + 1.6rem);
                  }
                  & + .c-card {
                    & + .c-card--nodata {
                      width: 27rem;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    @include mobile {
      .c {
        &-card {
          &--inline {
            width: 84rem;
          }
        }
        &-chart {
          &-img {
            margin: 0 0 2rem;
            padding: 1.6rem;
            border-radius: 0.8rem;
            background-color: $white;
            img {
              max-width: 100%;
            }
          }
        }
      }
      &-head {
        dl {
          flex-direction: column;
          dt {
            width: 100%;
          }
          dd {
            margin-top: 1rem;
            width: 100%;
          }
        }
        &--title {
          text-align: center;
        }
      }
      &-title {
        &--lg {
          padding: 3rem 0;
          text-align: center;
        }
        &--sub {
          &.c {
            &-flex {
              padding-left: 4rem;
              i {
                &.ico {
                  position: absolute;
                  top: 0;
                  left: 0;
                }
              }
            }
          }
        }
      }
      &-site {
        flex-direction: column;
        &--text {
          justify-content: center;
          text-align: center;
        }
        dt {
          width: 100%;
        }
        dd {
          margin-top: 3.2rem;
          width: 100%;
        }
        &.custom {
          dt {
            width: 100%;
          }
          dd {
            margin-top: 3.2rem;
            width: 100%;
          }
        }
        &--logo {
          width: calc(100% + 1.6rem);
          padding-right: 1.6rem;
          overflow: hidden;
          overflow-x: auto;
          li {
            min-width: 13rem;
          }
        }
      }
      &-rank {
        padding: 2.4rem 1.6rem;
        &--wrap {
          width: calc(100% + 1.6rem);
          padding-right: 1.6rem;
        }
        &--title {
          .c {
            &-text {
              &-title {
                &-lg {
                  text-align: left !important;
                }
              }
            }
          }
        }
      }
      &-banner {
        flex-direction: column;
        &--cont {
          padding: 2rem 1rem;
          text-align: center;
        }
      }
      &-box {
        padding: 2.4rem 1.6rem;
        &--title {
          position: relative;
          padding-top: 0;
          & > span {
            &:last-child {
              display: none;
            }
          }
          .mypage {
            &__report {
              &-link {
                position: absolute;
                right: 0;
                bottom: 1.6rem;
              }
            }
          }
        }
      }
      &-chart {
        flex-direction: column;
        text-align: center;
        li {
          width: 100%;
          padding: 2.4rem 1.6rem;
          &:last-child {
            margin-top: 1.6rem;
            width: 100%;
          }
        }
      }
      &-calendar {
        width: calc(100% + 1.6rem);
        padding-right: 1.6rem;
      }
      &-info {
        &--head {
          dl {
            flex-direction: column;
          }
        }
        &--body {
          ul {
            flex-direction: column;
            li {
              width: 100%;
              & + li {
                margin: 2rem 0 0 0;
              }
              span {
                &:first-child {
                  display: block;
                  padding-bottom: 0.8rem;
                }
              }
            }
          }
        }
      }
      &-list {
        //width: calc(100% + 1.6rem);
        //padding-right: 1.6rem;
        width: 100%;
        padding-right: 0;
        .c {
          &-card {
            &--inline {
              width: auto;
              .c {
                &-card {
                  width: 27rem;
                  &--nodata {
                    width: calc(300% + 3.2rem);
                  }
                  & + .c-card--nodata {
                    width: 36rem;
                  }
                  & + .c-card {
                    & + .c-card--nodata {
                      width: 27rem;
                    }
                  }
                }
              }
            }
          }
        }
      }
      &-tab {
        display: block;
        .c {
          &-tab {
            &-nav {
              width: 100%;
              padding: 0 1.6rem;
              & > ul {
                li {
                  &.active {
                    .c {
                      &-chart {
                        &-img {
                          display: block;
                          p {
                            display: block;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            &-contents {
              &__wrap {
                display: none !important;
              }
            }
          }
          &-chart {
            &-img {
              display: none;
            }
          }
        }
      }
    }
  }
  &__info {
    &-list {
      display: flex;
      align-items: center;
      padding: 3.5rem 0;
      margin-bottom: 1.6rem;
      border-radius: 0.8rem;
      border: 0.1rem solid $secondary;
      background-color: $white;
      li {
        width: 100%;
        text-align: center;
        font-size: 1.6rem;
        color: #535353;
        & + li {
          border-left: 0.1rem solid $secondary;
        }
        a {
          display: block;
        }
        span {
          margin-bottom: 1.6rem;
        }
        p {
          font-size: 3.6rem;
          font-weight: bold;
          color: $black;
        }
      }
      @include mobile {
        position: relative;
        flex-wrap: wrap;
        padding: 2.5rem 0;
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 3rem;
          right: 3rem;
          width: calc(100% - 6rem);
          height: 0.1rem;
          background-color: $secondary;
        }
        li {
          width: 50%;
          margin: 1rem 0;
          &:nth-child(3) {
            border: none;
          }
        }
      }
    }
  }
  &__table {
    border-top: 0.1rem solid $secondary;

    @include mobile {
      display: block;
      colgroup {
        display: none;
      }
      thead {
        display: none;
      }
    }
    &-wrap {
      &.scroll {
        overflow-x: auto;
      }
      @include mobile {
        margin: 0 -1.6rem;
      }
    }
    &-head {
      display: flex;
      justify-content: space-between;
      margin: 4rem 0 1.6rem;
      .c-form-group {
        margin-top: 0;
        padding: 0 2rem;
        label {
          font-weight: 700;
        }
      }
      select {
        -o-appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: 0;
        font-size: 1.6rem;
        color: $black;
        padding-right: 2.4rem;
        &::-ms-expand {
          display: none;
        }
        background: url(@img/ic-select-arrow-category.svg) no-repeat center
          right;
      }
    }
    tbody {
      @include mobile {
        display: block;
      }
    }
    tr {
      @include mobile {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
      }
    }
    tr.active {
      background-color: $light;
    }
    th {
      padding: 1.4rem 0;
      color: #535353;
      font-size: 1.4rem;
      border-bottom: 0.1rem solid $secondary;
    }
    th.mypage__table-title--type03 {
      text-align: center;
    }
    td {
      padding: 1.75rem 0;
      text-align: center;
      font-size: 1.4rem;
      color: #535353;
      border-bottom: 0.1rem solid #f1f1f1;
      @include mobile {
        display: block;
      }
    }
    td.mypage__table-check {
      @include mobile {
        width: 5.2rem;
        border-bottom: 0;
        padding-top: 2rem;
        padding-bottom: 0;
      }
    }
    td.mypage__table-title {
      @include mobile {
        width: calc(100% - 5.2rem);
        text-align: left;
        border-bottom: 0;
        padding-bottom: 0;
      }
      &--type02 {
        @include mobile {
          width: 100%;
          padding: 0 1.6rem;
        }
      }
      &--type03 {
        text-align: left;
        color: $black;
        font-size: 1.6rem;
        p {
          display: inline;
        }
        i {
          display: none;
          margin-left: 0.6rem;
          background: url(assets/images/ic-clib.svg) top 2px center no-repeat;
          @include mobile {
            display: inline-block;
          }
        }
        @include mobile {
          padding: 0;
          width: auto;
          a {
            align-items: center;
          }
        }
      }
      &--type04 {
        text-align: left;
        font-weight: 500;
        @include mobile {
          width: 100%;
          padding: 1.75rem 1.6rem 0;
        }
        > span {
          display: none;
          @include mobile {
            display: block;
            margin-bottom: 1rem;
            font-size: 1.6rem;
            color: #535353;
          }
        }
        p {
          display: flex;
          align-items: center;
          a {
            @include text-clamp(1);
            span {
              color: #535353;
            }
          }
          .ico-file {
            display: none;
            @include mobile {
              display: block;
            }
          }
          .ico + .ico {
            margin-left: 0.6rem;
          }
          .ico-new {
            @include mobile {
              width: 1.8rem;
              min-width: 1.8rem;
              height: 1.8rem;
            }
          }
        }
      }
    }
    td.mypage__table-file {
      vertical-align: middle;
      @include mobile {
        display: none;
      }
      .ico {
        display: inline-flex;
      }
    }
    td.mypage__table-order {
      font-weight: 700;
      @include mobile {
        display: none;
      }
    }
    td.mypage__table-writer {
      @include mobile {
        position: absolute;
        bottom: 0;
        left: 11rem;
        border-bottom: 0;
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: -1.2rem;
          transform: translateY(-50%);
          display: block;
          width: 0.1rem;
          height: 1.2rem;
          background-color: #d9d9d9;
        }
      }
    }
    td.mypage__table-hit {
      @include mobile {
        position: absolute;
        bottom: 0;
        left: 17rem;
        border-bottom: 0;
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: -1.2rem;
          transform: translateY(-50%);
          display: block;
          width: 0.1rem;
          height: 1.2rem;
          background-color: #d9d9d9;
        }
      }
    }
    td.mypage__table-size {
      color: #535353;
      @include mobile {
        position: absolute;
        bottom: 0;
        left: 14.6rem;
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: -1.2rem;
          transform: translateY(-50%);
          display: block;
          width: 0.1rem;
          height: 0.8rem;
          background-color: #d9d9d9;
        }
      }
    }
    td.mypage__table-date {
      color: #535353;
      @include mobile {
        width: 100%;
        padding: 1.2rem 5.2rem 1.75rem;
        text-align: left;
      }
      &--type02 {
        @include mobile {
          padding-left: 1.6rem;
        }
      }
      &--type03 {
        @include mobile {
          position: absolute;
          left: 0;
          bottom: 0;
          padding-left: 1.6rem;
        }
      }
    }
    td.mypage__table-category {
      color: #535353;
      font-weight: 500;
      font-size: 1.6rem;
      @include mobile {
        width: 100%;
        text-align: left;
        padding: 1.6rem 1.75rem 0.7rem;
        border-bottom: 0;
      }
    }
    td.mypage__table-status {
      @include mobile {
        position: absolute;
        bottom: 0;
        left: 11rem;
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: -1.2rem;
          transform: translateY(-50%);
          display: block;
          width: 0.1rem;
          height: 1.2rem;
          background-color: #d9d9d9;
        }
      }
    }
    td.mypage__table-type {
      @include mobile {
        padding-left: 1.6rem;
      }
    }
    td.mypage__table-category-md,
    td.mypage__table-category-lg {
      @include mobile {
        position: relative;
        padding-left: 2.5rem;
        &::before {
          content: "";
          display: block;
          position: absolute;
          top: 50%;
          left: 1.2rem;
          transform: translateY(-50%);
          width: 0.1rem;
          height: 1.2rem;
          background-color: #d9d9d9;
        }
      }
    }
    td.mypage__table-num {
      font-weight: 700;
      color: $black;
      font-size: 1.6rem;
      @include mobile {
        display: none;
      }
    }
    td.mypage__table-nodata {
      border-bottom: 0;
      img {
        margin-top: 12rem;
      }
      p {
        margin: 1.4rem 0 9rem;
        color: #535353;
        font-size: 1.6rem;
      }
      @include mobile {
        width: 100%;
        justify-content: center;
      }
    }
    &-title {
      text-align: left;
      max-width: 1rem;
      &--type02 {
        text-align: center;
      }
      @include mobile {
        max-width: 100%;
      }
      > p {
        display: flex;
        align-items: center;
        font-size: 1.6rem;
        color: $black;
        @include mobile {
          display: inline-block;
          vertical-align: top;
        }
        a {
          @include text-clamp(1);
          i {
            margin-right: 1rem;
            vertical-align: top;
          }
          @include mobile {
            display: inline;
            overflow: auto;
            text-overflow: inherit;
            white-space: normal;
            vertical-align: top;
          }
        }
      }
      .c-badge {
        margin-top: 0.7rem;
      }
    }
    td.mypage__table-check {
      padding-left: 2rem;
    }
    &-2row {
      p + p {
        margin-top: 1.2rem;
        padding-top: 1.3rem;
        border-top: 0.1rem solid #f1f1f1;
      }
    }
    &--type02 {
      width: 89.4rem;
      @include mobile {
        display: table;
      }
      colgroup {
        display: table-column-group;
      }
      thead {
        display: table-header-group;
      }
      tbody {
        display: table-row-group;
      }
      tr {
        display: table-row;
      }
      td {
        display: table-cell;
      }
    }
    &--type03 {
      tr {
        @include mobile {
          display: block;
          padding: 1.8rem 1.6rem 4.8rem;
        }
      }
    }
  }
  &__wrap {
    display: flex;
    justify-content: space-between;
    width: 120rem;
    margin: 0 auto;
    padding: 4.2rem 0 12rem;
    @include tablet {
      width: auto;
      padding: 0 2.4rem 6rem;
      flex-direction: column;
    }
    @include mobile {
      padding: 0 1.6rem 6rem;
    }
    &--type02 {
      margin-top: -1.3rem;
      padding-top: 0;
      .mypage__board-contents {
        border-bottom: 0.1rem solid #f1f1f1;
      }
    }
  }
  &__snb {
    width: 25.8rem;
    min-width: 25.8rem;
    @include tablet {
      display: block;
      width: calc(100% + 4.8rem);
      padding: 0 2.4rem;
      margin: 0 -2.4rem;
    }
    @include mobile {
      width: calc(100% + 3.2rem);
      margin: 0 -1.6rem;
      padding: 0 1.6rem;
    }
    &-wrap {
      width: 100%;
      padding: 4rem 3rem;
      border: 0.1rem solid $secondary;
      border-radius: 0.8rem;
      @include tablet {
        padding: 0;
        border: 0;
        border-radius: 0;
      }
    }
    &-head {
      @include tablet {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 10.8rem;
        padding: 0 2rem;
        border-bottom: 0.1rem solid $secondary;
        margin: 0 -2.4rem;
      }
      @include mobile {
        margin: 0 -1.6rem;
      }
      &-profile {
        display: flex;
        align-items: center;
        &-img {
          position: relative;
          width: 6rem;
          height: 6rem;
          border-radius: 50%;
          @include tablet {
            position: absolute;
            top: 5.4rem;
            transform: translateY(-50%);
          }
          img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        &-setting {
          overflow: hidden;
          position: absolute;
          left: 6rem;
          bottom: 0;
          transform: translateX(-100%);
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background: $black url(@img/ic-setting.svg) center left 0.35rem
            no-repeat;
          text-indent: -999rem;
          @include tablet {
            top: 4.3rem;
          }
        }
      }
      &-name {
        margin-left: 1.2rem;
        font-size: 2.8rem;
        font-weight: 700;
        color: $black;
        @include tablet {
          margin: 0;
          padding-left: 7.7rem;
          font-size: 1.6rem;
        }
      }
      &-status {
        margin-top: 0.8rem;
        @include tablet {
          margin-top: 0.2rem;
          padding-left: 7.7rem;
        }
        .c-badge {
          background-color: #0175da;
        }
      }
    }
    &-list {
      margin-top: 4rem;
      @include tablet {
        display: none;
      }
      > strong {
        display: block;
        font-size: 2.4rem;
        color: $black;
        margin: 0 -3rem;
        padding: 4rem 3rem;
        border-top: 0.1rem solid #f1f1f1;
        line-height: 1;
      }
      > ul > li {
        font-size: 1.6rem;
        font-weight: 700;
        color: $black;
        & + li {
          margin-top: 2.3rem;
        }
      }
      &-sub {
        &.active {
          > ul {
            display: block;
          }
          > a {
            background: url(@img/ic-snb-arrow-up.svg) no-repeat top right;
            &.router-link-active {
              color: $black;
            }
          }
        }
        > a {
          padding-right: 2.8rem;
          background: url(@img/ic-snb-arrow-down.svg) no-repeat top right;
        }
        > ul {
          display: none;
          margin: 1.8rem 0 2.8rem;
          padding-left: 1rem;
          > li {
            position: relative;
            font-size: 1.4rem;
            color: #535353;
            font-weight: 400;
            .router-link-active {
              text-decoration: underline;
              color: $primary;
              font-weight: 700;
            }
            & + li {
              margin-top: 1.4rem;
            }
            // &.new + li {
            //   margin-top: 1.3rem;
            // }
            a {
              vertical-align: middle;
              &:hover {
                text-decoration: underline;
                color: $primary;
                font-weight: 700;
              }
            }
            i {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              margin-left: 0.5rem;
            }
          }
        }
      }
    }
    &-tablet {
      display: none;
      @include tablet {
        position: absolute;
        top: 10.8rem;
        display: flex;
        width: 100%;
        &-item {
          flex-grow: 1;
          width: 100%;
          select {
          }
          .c-form-control {
            border-radius: 0;
            border-top: 0;
            border-left: 0;
            font-weight: 700;
          }
          &:last-child {
            .c-form-control {
              border-right: 0;
            }
          }
        }
      }
    }
  }
  &__contents {
    flex-grow: 1;
    max-width: calc(100% - 30.6rem);
    &--type02 {
      max-width: 100%;
    }
    @include tablet {
      max-width: 100%;
      padding-top: 6rem;
    }
    &--type02 {
      padding-top: 0;
    }
    &-head--sm {
      margin-bottom: 1.1rem;
      font-size: 1.6rem;
      color: $black;
      @include mobile {
        margin-top: 3rem;
      }
    }
    &-head-btn-wrap {
      position: relative;
      .mypage__contents-head-btn-text {
        position: absolute;
        padding: 0.8rem 1.2rem;
        background-color: $black;
        white-space: nowrap;
        color: $white;
        font-size: 1.2rem;
        top: 0;
        left: 50%;
        transform: translate(-50%, -130%);
        text-align: center;
        border-radius: 1.2rem;
        @include tablet {
          left: 20%;
        }
        @include mobile {
          top: unset;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 70%);
        }
        &::after {
          content: "";
          position: absolute;
          display: block;
          width: 1.4rem;
          height: 0.8rem;
          bottom: -0.8rem;
          left: 50%;
          transform: translateX(-50%);
          background: url(@img/ic-lecture-triangle.svg) center no-repeat;
          @include mobile {
            top: -0.8rem;
            bottom: unset;
            transform: translateX(-50%) rotate(180deg);
          }
        }
      }
      @include mobile {
        width: 100%;
      }
    }
    .c-text-title-lg {
      @include tablet {
        margin-top: 4rem;
      }
      @include mobile {
        text-align: center;
      }
    }
    .c-text-title-sub {
      display: flex;
      margin-top: 1.2rem;
      text-align: left;
      justify-content: space-between;
      align-items: center;
      @include mobile {
        flex-direction: column;
        text-align: center;
        margin-bottom: 0;
      }
      .c-btn {
        @include mobile {
          width: 100%;
          height: 4.8rem;
          margin-top: 2.2rem;
          margin-bottom: 3rem;
          white-space: nowrap;
          font-size: 1.4rem;
          font-weight: 700;
        }
      }
    }
    &-search {
      margin: 3.9rem 0;
      padding: 3rem;
      background-color: #fafafa;
      border-radius: 0.8rem;

      @include tablet {
        padding: 3rem 2.4rem;
      }
      @include mobile {
        margin: 4rem -1.6rem 0;
        padding: 3rem 1.6rem;
      }
      .c-form-group {
        margin-top: 0;

        @include tablet {
          flex-wrap: wrap;
        }
        legend {
          .c-form-label {
            margin-bottom: 0;
            padding-bottom: 1rem;
          }
        }
        select.c-form-control {
          width: 31.7rem;
          @include tablet {
            width: 100%;
          }
        }
        & + .c-form-group {
          margin-top: 2rem;
        }
        > .c-btn {
          @include tablet {
            margin-top: 0.8rem;
            width: 17rem;
          }
          @include mobile {
            margin-top: 0;
            width: 100%;
          }
        }
        &:first-child {
          .c-form-control {
            width: 35.4rem;
            @include tablet {
              width: 100%;
            }
          }
        }
      }
      .c-input-group--calendar {
        @include tablet {
          margin-left: 0;
          margin-right: 0;
        }
      }
      @include mobile {
        border-radius: 0;
      }
      .c-form-check {
        &-group {
          @include tablet {
            width: 100%;
          }
        }
        @include tablet {
          flex-grow: 1;
          width: 100%;
        }
      }
      .c-input-group--calendar {
        @include tablet {
          margin: 0.8rem 0 0;
          width: calc(100% - 17rem);
          padding-right: 0.8rem;
        }
        @include mobile {
          padding-right: 0;
          width: 100%;
          margin: 1.6rem 0;
        }
      }
      &-inline {
        display: flex;
        align-items: flex-end;
        width: 100%;
        padding: 3rem 4rem;
        @include mobile {
          display: block;
          width: calc(100% + 3.2rem);
          margin: 4rem -1.6rem 2rem;
          padding: 3rem 1.6rem;
        }
        .c-form-group {
          flex-grow: 1;
          width: 100%;
          select.c-form-control {
            width: 100%;
          }
        }
        .c-form-group:first-child {
          select.c-form-control {
            width: 100%;
          }
        }
        .c-form-group + .c-form-group {
          margin: 0 0 0 0.8rem;
          @include mobile {
            margin: 3rem 0 0 0;
          }
        }

        .c-btn {
          min-width: auto;
          width: 10rem;
          min-width: 10rem;
          margin-left: 2.4rem;
          @include mobile {
            width: 100%;
            margin: 1.6rem 0 0;
          }
        }
        .c-input-group--calendar {
          height: 4.8rem;
          width: 100%;
        }
      }
      &-awards {
        .c-form-group {
          width: 46.2rem;
          margin: 0 auto;
          &:first-child {
            select.c-form-control {
              @include tablet {
                width: 31.7rem;
              }
              @include mobile {
                width: 100%;
              }
            }
          }
          @include mobile {
            width: auto;
          }
          .c-btn {
            width: 10rem;
            min-width: 10rem;
            margin-left: 0.8rem;
            @include mobile {
              width: 100%;
              margin: 1.6rem 0 0;
            }
          }
        }
      }
      &-sort {
        display: flex;
        justify-content: space-between;
        width: calc(100% - 10.8rem);
        gap: 0.8rem;
        .c-form-group + .c-form-group {
          margin-top: 0;
          flex-grow: 1;
          .c-form-control {
            width: 100%;
          }
        }
        & + .c-form-group {
          margin-top: 2rem;
        }
      }
    }
    &-progress {
      padding: 4.2rem 14.7rem 4.6rem;
      @include mobile {
        margin: 4rem -1.6rem 0;
        padding: 2.6rem 1.6rem 3rem;
      }
      &-head {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        width: 100%;
        margin-bottom: 1.4rem;
        p {
          font-size: 1.8rem;
          font-weight: 700;
          color: $black;
        }
        span {
          font-size: 1.6rem;
          color: #535353;
        }
      }
      border-top: 0.2rem solid $black;
      border-bottom: 0.1rem solid $secondary;
    }
    &-write {
      margin-top: 3.6rem;
      padding: 3rem 0 6rem;
      border-top: 0.2rem solid black;
      textarea.c-form-control {
        height: 46rem;
      }
      .c-text-caution__wrap {
        width: 46rem;
        margin: 3rem auto 0;
        @include mobile {
          width: 100%;
        }
      }
      .c-form-group {
        width: 46rem;
        margin: 4rem auto 0;
        @include mobile {
          width: auto;
        }
      }
      .c-btn-group {
        margin-top: 4rem;
        gap: 1.6rem;
      }
    }
    .c-btn-group {
      margin-top: 4rem;
      gap: 1.6rem;
      @include mobile {
        padding: 0;
        .c-btn {
          min-width: auto;
          width: 100%;
        }
      }
    }
    &-body {
      &-event {
        margin-top: 4rem;
        div.event-view {
          width: auto;
          margin: 0 -1.6rem;
        }
      }
    }
  }
  &__board {
    margin: 2.5rem 0;
    & + .c-banner {
      margin: 1rem 2rem 0;
      @include tablet {
        margin-left: 0;
        margin-right: 0;
      }
    }
    &-title {
      display: flex;
      align-items: center;
      padding: 1.6rem 2rem;
      border-top: 0.2rem solid #111;
      border-bottom: 0.1rem solid #f1f1f1;
      @include mobile {
        flex-direction: column;
        align-items: flex-start;
        padding: 2.2rem 0;
      }
      > p {
        flex-grow: 1;
        display: flex;
        align-items: center;
        font-size: 2rem;
        font-weight: 700;
        color: #111;
        span {
          margin-right: 0.6rem;
          color: #535353;
          white-space: nowrap;
        }
      }
      &-writer {
        display: flex;
        align-items: center;
        margin-left: 2rem;
        font-size: 1.4rem;
        color: #535353;
        white-space: nowrap;
        p + span {
          position: relative;
          margin-left: 1.7rem;
          &::before {
            content: "";
            display: block;
            position: absolute;
            top: 50%;
            left: -0.9rem;
            transform: translateY(-50%);
            width: 0.1rem;
            height: 1rem;
            background-color: $secondary;
          }
          @include mobile {
            margin-left: 0;
          }
        }
        @include mobile {
          margin: 1rem 0 0 0;
        }
      }
      @include tablet {
      }
    }
    &-contents {
      padding: 2rem 2rem 3rem;
      border-bottom: 0.1rem solid #f1f1f1;
      &-head {
        margin: 0 -1.6rem 3rem;
        padding: 0 2rem 2rem;
        border-bottom: 0.1rem solid #f1f1f1;
        .c-form-group {
          margin-top: 0;
        }
        ul {
          li + li {
            margin-top: 0.8rem;
          }
        }
        .c-badge {
          font-weight: 400;
          background: #f5f5f5 url(@img/ic-down.svg) no-repeat center left 1.6rem;
          padding-left: 3.6rem;
        }
        @include mobile {
          margin: 0 0 2.4rem;
          padding: 0 0 2.4rem;
        }
        &-list {
          display: grid;
          grid-template-columns: 18rem 1fr;
          gap: 1.6rem 0;
          dl {
            display: flex;
            align-items: center;

            dt {
              font-size: 1.3rem;
              font-weight: 700;
            }
            dd {
              margin-left: 1.6rem;
              font-size: 1.4rem;
            }
          }
        }
      }
      @include mobile {
        padding: 2.2rem 0;
      }
    }
    &-reply {
      margin-top: 12rem;
      //padding: 2.6rem 2rem 2.8rem;
      //background-color: #fafafa;
      @include tablet {
        margin: 9rem 0 0;
      }
      @include mobile {
        margin: 6rem 0 0;
      }
      &-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        @include mobile {
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
        }
        > p {
          flex-grow: 1;
          display: flex;
          align-items: center;
          font-size: 1.6rem;
          font-weight: 700;
          color: #111;
          span {
            margin-right: 0.6rem;
            color: #535353;
            white-space: nowrap;
          }
        }
        &-writer {
          display: flex;
          align-items: center;
          margin-left: 2rem;
          font-size: 1.4rem;
          color: #535353;
          white-space: nowrap;
          span {
            position: relative;
            margin-left: 1.7rem;
            &::before {
              content: "";
              display: block;
              position: absolute;
              top: 50%;
              left: -0.9rem;
              transform: translateY(-50%);
              width: 0.1rem;
              height: 1rem;
              background-color: $secondary;
            }
          }
          @include mobile {
            margin: 1rem 0 0 0;
          }
        }
      }
      &-contents {
        margin-top: 2.2rem;
        font-size: 1.6rem;
        color: #535353;
      }
      .mypage__board-contents {
        padding-bottom: 0;
        border-bottom: none;
      }
    }
  }
  &__head {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 14rem;
    padding: 0 17.8rem;
    background-color: $white;
    border-radius: 1.6rem;
    @include tablet {
      padding: 0 6.6rem;
    }
    @include mobile {
      margin: 0 -1.6rem;
      padding: 3.2rem 1.6rem 3.2rem;
      height: auto;
      border-radius: 0;
    }
    .c-input-group {
      overflow: inherit;
      flex-wrap: nowrap;
    }
    &-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.6rem;
      @include mobile {
        margin-bottom: 1.4rem;
      }
      p {
        font-size: 2rem;
        color: $black;
        font-weight: 700;
        @include mobile {
          font-size: 1.6rem;
        }
      }
      span {
        font-size: 1.6rem;
        color: #535353;
        @include mobile {
          font-size: 1.6rem;
        }
      }
    }
  }
  &__body {
    position: relative;
    padding: 4rem 6rem;
    border-radius: 1.6rem;
    background-color: $white;
    &--complete {
      .mypage-mentor__foot {
        @include mobile {
          padding-bottom: 0;
        }
      }
      &--type02 {
        .mypage-mentor__foot {
          @include mobile {
            padding-bottom: 3rem;
          }
        }
        .mypage-mentor__head-menu {
          bottom: 2rem;
        }
      }
      &--type03 {
        .mypage-mentor__foot {
          @include mobile {
            padding-bottom: 8rem;
          }
        }
      }
    }
    @include tablet {
      padding: 4rem;
    }
    @include mobile {
    }
    &-wrap {
      display: flex;
      padding: 0;
      gap: 2.4rem;
      @include tablet {
        gap: 1.6rem;
      }
      @include mobile {
        flex-direction: column-reverse;
        gap: 0;
      }
      .mypage__body-item {
        flex-grow: 1;
        .mypage__body {
          padding: 3.2rem 4rem;
          &.active {
            padding: 3rem 3.8rem;
            border: 0.2rem solid #000;
            @include mobile {
              border-right: 0;
              border-left: 0;
              border-top: 0.2rem solid #000;
              border-bottom: 0.2rem solid #000;
            }
          }
          @include mobile {
            padding: 3rem 1.6rem;
            border-radius: 0;
          }
        }
        &:nth-child(2) {
          flex-grow: inherit;
          width: 28.2rem;
          min-width: 28.2rem;
          @include mobile {
            width: 100%;
          }
          .mypage__body {
            padding: 2.4rem;
            @include mobile {
              padding: 0 1.6rem;
              & + .mypage__body {
                border-top: 1.6rem solid $light;
              }
            }
          }
        }
      }
      .mypage__body + .mypage__body {
        margin-top: 1.6rem;
        @include mobile {
          border-top: 0.1rem solid $light;
          margin-top: 0;
        }
      }
    }
    &-head {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2rem;
      min-height: 3.6rem;
      > ul {
        display: flex;
        align-items: center;
        font-size: 1.6rem;
        font-weight: 700;
        color: $black;
        padding-left: 2rem;
        @include mobile {
          padding-left: 0;
        }
        button {
          font-size: 1.6rem;
          font-weight: 700;
          color: $black;
          vertical-align: top;
          line-height: 1.5;
        }
        li {
          position: relative;
          span {
            color: $danger;
          }
        }
        li + li {
          margin-left: 6rem;
          &::before {
            content: "";
            position: absolute;
            left: -3rem;
            top: 50%;
            transform: translateY(-50%);
            display: block;
            width: 0.1rem;
            height: 1.2rem;
            background-color: #d9d9d9;
          }
        }
        .c-form-check {
          width: auto;
          label {
            font-weight: 700;
            font-size: 1.6rem;
          }
        }
      }
      .c-btn {
        position: absolute;
        top: 0;
        right: 0;
        @include mobile {
          position: static;
        }
      }
    }
  }
  &__foot {
    margin-top: 4rem;
    .c-btn-group {
      display: flex;
      justify-content: center;
      gap: 0 1.6rem;
      .c-btn {
        @include mobile {
          min-width: auto;
          width: 100%;
        }
      }
    }
  }
  &__banner {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
    padding: 2.8rem 9rem 2.8rem 8rem;
    background-color: $white;
    border-radius: 1.6rem;
    img {
      display: block;
    }
    p {
      flex-grow: 1;
      display: flex;
      align-items: center;
      font-size: 1.6rem;
      img {
        margin-right: 1.6rem;
      }
    }
    @include mobile {
      padding: 4rem 1.6rem;
      border-top: 1.6rem solid $light;
      border-bottom: 1.6rem solid $light;
      border-radius: 0;
      img {
        display: none;
      }
    }
  }
  &__box {
    padding: 3rem 0;
    border-radius: 0.8rem;
    background-color: $light;
    text-align: center;
    p {
      font-size: 1.8rem;
      text-align: center;
      color: #535353;
    }
    strong {
      display: block;
      text-align: center;
      font-size: 3.2rem;
      color: $black;
    }
  }
  &__form {
    width: 46rem;
    margin: 0 auto;
    @include mobile {
      width: auto;
    }
    &-wrap {
      border-top: 0.2rem solid $black;
      margin-top: 3rem;
      padding: 3rem 0;
    }
    &-profile {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin: 2rem 0 4rem;
      p {
        margin-top: 1.4rem;
        font-size: 1.3rem;
        color: #535353;
      }
      & + dl {
        border-top: 0.1rem solid #f1f1f1;
      }
      &-link {
        margin-top: 2.2rem;
        padding-bottom: 2.3rem;
        button {
          padding: 0 3rem;
          min-width: 26rem !important;
          justify-content: center;
          img {
            margin-right: 0.5rem;
          }
          & + button {
            margin-top: 0.8rem;
          }
        }
      }
      &-img {
        position: relative;
        width: 12rem;
        height: 12rem;
        border-radius: 50%;
        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
        &--edit {
          &::after {
            content: "";
            position: absolute;
            display: block;
            width: 4rem;
            height: 4rem;
            right: 0;
            bottom: 0;
            background: url(@img/ic-profile-edit.svg) no-repeat center / 100%;
          }
        }
      }
    }
    dl {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 7rem;
      padding: 1.7rem 0;
      border-bottom: 0.1rem solid #f1f1f1;
      font-size: 1.6rem;
      dt {
        color: #535353;
        font-weight: 700;
      }
      dd {
        color: $black;
        text-align: right;
        .c-btn {
          min-width: 10.8rem;
        }
        .c-btn-sm {
          @include mobile {
            height: 3.6rem;
          }
        }
      }
      &.type02 {
        align-items: flex-start;
      }
    }
  }
  &__schedule {
    &-item {
      display: flex;
      align-items: center;
      margin: 0.8rem 0 4rem;
      padding: 2rem 3rem;
      border: 0.1rem solid $secondary;
      border-radius: 0.8rem;
      .c-badge {
        margin-right: 1.6rem;
        white-space: nowrap;
      }
      p {
        font-size: 1.4rem;
        color: #535353;
        padding-right: 2.4rem;
      }
      background: url(@img/ic-arrow-right.svg) no-repeat center right 3rem;
      &--type02 {
        margin-bottom: 0;
      }
    }
    &-profile {
      position: relative;
      padding: 4rem 3rem;
      border: 0.1rem solid $secondary;
      border-radius: 0.8rem;
      @include mobile {
        padding: 3rem 2.4rem;
      }
      &-body {
        display: flex;
        @include mobile {
          flex-wrap: wrap;
          justify-content: center;
        }
      }
      &-img {
        margin-right: 2rem;
        @include mobile {
          width: 100%;
          margin-top: 1rem;
          margin-right: 0;
          text-align: center;
        }
        &-mask {
          width: 6rem;
          min-width: 6rem;
          height: 6rem;
          overflow: hidden;
          border-radius: 50%;
          @include mobile {
            margin: 0 auto;
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
      &-text {
        flex-grow: 1;
        @include mobile {
          flex-grow: 0;
        }
        &-name {
          display: flex;
          align-items: center;
          @include mobile {
            white-space: nowrap;
            flex-direction: column;
            align-items: flex-start;
          }
          p {
            color: $black;
            font-size: 2rem;
            font-weight: 700;
            margin-right: 0.6rem;
            @include mobile {
              margin-right: 0;
            }
          }
          .c-badge {
            margin-top: 0.4rem;
            white-space: nowrap;
            @include mobile {
              margin: 0.4rem auto 0;
            }
          }
          .c-flex {
            display: block;
            text-align: center;
          }
        }
        &-info {
          margin-top: 1rem;
          font-size: 1.4rem;
          color: #535353;
          @include mobile {
            margin-top: 1.8rem;
          }
        }
        .ico-medal {
          margin-right: 0.8rem;
          @include mobile {
            display: block;
            margin: 1.2rem auto 0.8rem;
          }
        }
      }
      &-btn {
        min-width: 12rem;
        @include mobile {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      &-foot {
        @include mobile {
          padding-bottom: 7rem;
        }
        ul {
          display: flex;
          margin-top: 3.6rem;
          padding-top: 2rem;
          border-top: 0.1rem solid #f1f1f1;
          @include mobile {
            justify-content: center;
            margin-top: 2.8rem;
          }
          li {
            padding-left: 2rem;
            font-size: 1.4rem;
            color: #535353;
            background: url(@img/ic-star.svg) no-repeat center left;
          }
          li + li {
            margin-left: 2rem;
          }
        }
      }
    }
    &-list {
      margin-top: 2.4rem;
      border: 0.1rem solid $secondary;
      border-radius: 0.8rem;
      &-head {
        display: flex;
        align-items: flex-end;
        padding: 4rem 3rem 0;
        &-wrap {
          position: relative;
          &-before {
            .mypage__schedule-list-foot {
              padding-bottom: 3.6rem;
            }
          }
        }
      }
      &-text {
        flex-grow: 1;
        &-title {
          display: flex;
          p {
            color: $black;
            font-size: 2rem;
            font-weight: 700;
            margin-right: 0.6rem;
          }
        }
        &-info {
          margin-top: 1rem;
          font-size: 1.4rem;
          color: #535353;
        }
      }
      &-btn {
        display: flex;
        gap: 0 0.8rem;
        @include mobile {
          width: 100%;
          padding: 0 3.2rem;
          position: absolute;
          bottom: 4rem;
          left: 50%;
          transform: translateX(-50%);
        }
        .c-btn {
          white-space: nowrap;
          @include mobile {
            flex-grow: 1;
          }
        }
      }
      &-foot {
        display: flex;
        padding: 0 3rem 3.6rem;
        @include mobile {
          padding-bottom: 12.8rem;
        }
        &-link {
          display: flex;
          align-items: center;
          margin-top: 2rem;
          p {
            margin-left: 0.6rem;
            text-decoration: underline;
            color: #535353;
            font-size: 1.4rem;
          }
          & + & {
            margin-left: 1.6rem;
          }
        }
      }
      &-body {
        background-color: #f4f5f9;
        padding: 4rem 3rem 6rem;
        &-title {
          margin-bottom: 1.4rem;
          font-size: 1.6rem;
          color: #535353;
          font-weight: 700;
        }
        &-progress {
          height: 12rem;
          padding: 5.9rem 3rem 0;
          border-radius: 0.8rem;
          background-color: $white;
          ul {
            display: flex;
            justify-content: space-between;
            margin-top: 1rem;
            font-size: 1.3rem;
            color: #535353;
            font-weight: 700;
          }
          &-text {
            position: relative;
            max-width: calc(100% - 2.2rem);
            p {
              position: absolute;
              display: flex;
              align-items: center;
              top: -3.2rem;
              right: 0;
              height: 2rem;
              padding: 0 1rem;
              border-radius: 1rem;
              background-color: $danger;
              color: $white;
              transform: translateX(50%);
              white-space: nowrap;
              &::after {
                content: "";
                position: absolute;
                display: block;
                left: 50%;
                bottom: -3px;
                width: 6px;
                height: 6px;
                transform: translateX(-50%) rotate(45deg);
                border-radius: 1px;
                background-color: #f8485e;
                z-index: -1;
              }
            }
          }
        }
        .c-table__wrap {
          margin-top: 1.6rem;
          padding-bottom: 4rem;
          border-radius: 0.8rem;
          // overflow: hidden;
          background-color: $white;
        }
        &-lecture {
          ul {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.6rem;
            @include mobile {
              grid-template-columns: 1fr;
            }
            li {
              display: flex;
              align-items: center;
              height: 10rem;
              padding: 0 2.4rem;
              background-color: $white;
              border-radius: 0.8rem;
              p {
                margin-left: 2.4rem;
                flex-grow: 1;
                font-size: 1.6rem;
                color: $black;
                font-weight: 700;
              }
            }
          }
          &-img {
            img {
              width: 14rem;
            }
          }
        }
      }
    }
  }
  .mypage__schedule-table {
    th {
      background-color: #e6e8f1;
      padding: 1.4rem 0 1.5rem;
      font-size: 1.4rem;
      color: #535353;
    }
    tbody {
      tr {
        border-bottom: 0.1rem solid #f1f1f1;
      }
    }
    td {
      padding: 1.75rem 0;
      font-size: 1.4rem;
      &.mypage__schedule-table-num {
        font-size: 1.6rem;
      }
      &.mypage__schedule-table-status {
        font-weight: 700;
      }
      &.mypage__schedule-table-title {
        font-size: 1.6rem;
        text-align: left;
        p {
          max-width: 100%;
          @include text-clamp(1);
        }
      }
    }
  }
  &-calendar {
    padding: 6rem 0 12rem;
    @include tablet {
      width: auto;
      padding: 2.4rem;
    }
    @include mobile {
      padding: 0 0 6rem;
      background-color: $white;
    }
    &__body {
      width: 120rem;
      margin: 0 auto;
      background-color: $white;
      border-radius: 1.6rem;
      padding: 6rem 4rem;
      @include tablet {
        width: auto;
        padding: 6rem 2.4rem;
      }
      @include mobile {
        padding: 4.4rem 1.6rem;
        border-radius: 0;
      }
    }
    &__text {
      margin: 4rem 6rem;
      text-align: center;
      @include tablet {
        margin: 4rem 0;
      }
      @include mobile {
        margin: 3rem 0;
      }
      &-title {
        align-items: center;
        flex-direction: column;
        font-size: 6.4rem;
        line-height: 1.2;
        font-weight: 900;
        @include tablet {
          white-space: nowrap;
          text-align: center;
        }
        @include mobile {
          font-size: 3.6rem;
        }
        span {
          vertical-align: top;
          display: inline-flex;
          align-items: center;
          height: 7.6rem;
          margin-top: 0.4rem;
          padding: 0 3.5rem;
          border-radius: 10rem;
          background-color: $black;
          color: #fff;
          font-size: 3.4rem;
          @include mobile {
            height: 3.6rem;
            padding: 0 1.8rem;
            font-size: 2.4rem;
          }
        }
        img {
          padding-bottom: 1rem;
          @include mobile {
            width: 3.5rem;
          }
        }
      }
      p {
        margin-top: 2rem;
        font-size: 2rem;
        color: #535353;
        @include mobile {
          margin-top: 3.2rem;
        }
      }
    }
    &__nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 55rem;
      margin: 0 auto;
      @include mobile {
        width: 100%;
      }
      &-date {
        display: flex;
        p {
          margin-right: 1.6rem;
          line-height: 1;
          border-bottom: 0.2rem solid $black;
          color: $black;
          font-size: 3.6rem;
          @include mobile {
            font-size: 2rem;
            border-bottom: 0.1rem solid $black;
          }
        }
        span {
          display: inline-block;
          padding: 0.9rem 2.2rem;
          border-radius: 0.4rem;
          background-color: $darkgray;
          color: #fff;
          font-size: 1.3rem;
          @include mobile {
            padding: 0.4rem 1rem;
          }
        }
      }
      &-prev {
        overflow: hidden;
        width: 6rem;
        min-width: 6rem;
        height: 6rem;
        background: url(@img/ic-calendar-prev.svg) no-repeat center / 100%;
        text-indent: -999rem;
        @include mobile {
          min-width: 3.2rem;
          width: 3.2rem;
          height: 3.2rem;
        }
      }
      &-next {
        overflow: hidden;
        width: 6rem;
        min-width: 6rem;
        height: 6rem;
        background: url(@img/ic-calendar-next.svg) no-repeat center / 100%;
        text-indent: -999rem;
        @include mobile {
          min-width: 3.2rem;
          width: 3.2rem;
          height: 3.2rem;
        }
      }
    }
    thead {
      tr {
        border-top: 0.1rem solid $secondary;
        border-bottom: 0.1rem solid $secondary;
      }
    }
    &__weeks {
      padding: 1.25rem;
      font-size: 1.6rem;
      color: #535353;
      font-weight: 700;
    }
    &__days {
      height: 16rem;
      border-bottom: 0.1rem solid $secondary;
      border-top: 0.1rem solid $secondary;
      color: $black;
      font-size: 2.4rem;
      text-align: center;
      font-weight: 700;
      vertical-align: top;
      @include mobile {
        height: 9rem;
      }
      > div {
        position: relative;
        width: 100%;
        height: 100%;
      }
      &.active {
        & > div::after {
          content: "";
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 6.4rem;
          height: 6.4rem;
          bottom: 2.4rem;
          background: url(@img/ic-calendar-check.svg) no-repeat center / 100%;
          @include mobile {
            bottom: 1.6rem;
            width: 2.4rem;
            height: 2.4rem;
            background: url(@img/ic-calendar-check-mo.svg) no-repeat center /
              100%;
          }
        }
      }
      &-prev,
      &-next {
        color: $light;
        opacity: 0;
        border-bottom: 0;
      }
      p {
        position: absolute;
        top: 2.4rem;
        left: 50%;
        transform: translateX(-50%);
        line-height: 1;
        @include mobile {
          top: 1.6rem;
        }
      }
    }
  }
  .c-pagination {
    margin-top: 4rem;
  }
  .board {
    min-height: 100%;
    padding: 4rem 2.4rem 6rem;
    border-radius: 1.6rem;
    background-color: $white;
    @include mobile {
      padding: 0 1.6rem 6rem;
    }
    &-list {
      table {
        @include mobile {
          display: block;
        }
        colgroup {
          @include mobile {
            display: none;
          }
        }
        margin-bottom: 5.8rem;
        border-collapse: collapse;
        tbody,
        thead {
          @include mobile {
            display: block;
          }
        }
        tr {
          border-bottom: 0.1rem solid #f1f1f1;
          @include mobile {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
          }
        }
        td {
          padding: 1.725rem 2rem;
          font-size: 1.6rem;
          color: $black;
          text-align: center;
          @include mobile {
            padding: 0;
          }
          &.board-list {
            &__order {
              font-weight: 700;
              @include mobile {
                display: none;
              }
            }
            &__title {
              align-items: center;
              padding: 1.725rem 0;
              text-align: left;
              font-weight: 500;
              max-width: 1rem;
              @include mobile {
                width: 100%;
                max-width: unset;
                flex-grow: 1;
                padding-bottom: 1.2rem;
              }
              span {
                color: #535353;
              }
              p {
                display: flex;
                align-items: center;
                @include mobile {
                  display: inline-block;
                  vertical-align: top;
                }
                a {
                  @include text-clamp(1);
                  @include mobile {
                    display: inline;
                    overflow: auto;
                    text-overflow: inherit;
                    white-space: normal;
                    vertical-align: top;
                  }
                }
              }
            }

            &__date {
              color: #535353;
              font-size: 1.4rem;
              margin-bottom: 1.8rem;
            }
          }
        }
        .ico {
          position: relative;
          margin-left: 0.6rem;
          @include mobile {
            top: -0.2rem;
          }
        }
      }
      &__new {
        display: inline;
        align-items: center;
        height: 2.4rem;
        // background-color: blue;
        @include mobile {
          // align-items: flex-start;
        }
      }
    }
    &-view {
      margin: 0 auto;
      @include tablet {
        width: auto;
        padding: 0 0 4rem;
      }
      @include mobile {
        width: auto;
        padding: 0 0 4rem;
        margin: 0 -1.6rem;
      }
      &__title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.6rem 2rem;
        border-top: 0.2rem solid #111;
        border-bottom: 0.1rem solid #f1f1f1;
        @include tablet {
          display: block;
          padding: 1.6rem 0;
        }
        @include mobile {
          padding: 1.6rem;
        }
        p {
          font-size: 2rem;
          font-weight: 700;
          color: #111;
        }
        span {
          min-width: 15rem;
          margin-left: 2rem;
          font-size: 1.4rem;
          color: #535353;
          @include tablet {
            display: block;
            margin: 1.2rem 0 0;
          }
        }
      }
      &__contents {
        padding: 2rem;
        border-bottom: 0.1rem solid #f1f1f1;
        @include tablet {
          padding: 2rem 0;
        }
        @include mobile {
          padding: 1.6rem;
        }
        & + .c-btn-group {
          margin-top: 4rem;
        }
        & + .c-btn-group {
          margin: 4rem 0 6rem;
          @include mobile {
            margin: 3.2rem 0 5rem;
            padding: 0 1.6rem;
          }
          .c-btn {
            @include mobile {
              width: 100%;
            }
          }
        }
        &-head {
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 0.1rem solid #f1f1f1;
          .c-form-group {
            margin-top: 0;
          }
          .c-badge {
            font-weight: 400;
            background: $light url(@img/ic-down.svg) no-repeat center left
              1.6rem;
            padding-left: 3.6rem;
          }
          li + li {
            margin-top: 0.8rem;
          }
        }
      }
    }
  }
  .event-view {
    width: 120rem;
    margin: 2.5rem auto 0;
    padding-bottom: 6rem;
    @include tablet {
      width: auto;
      padding: 0 2.4rem 4.8rem;
    }
    @include mobile {
      width: auto;
      padding: 0 0 4rem;
      margin-top: 0;
    }
    &__title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.6rem 2rem;
      border-top: 0.2rem solid $black;
      border-bottom: 0.1rem solid #f1f1f1;
      @include tablet {
        display: block;
      }
      @include mobile {
        padding: 1.6rem;
      }
      p {
        font-size: 2rem;
        font-weight: 700;
        color: $black;
      }
      span {
        min-width: 15rem;
        margin-left: 2rem;
        font-size: 1.4rem;
        color: #535353;
        @include tablet {
          display: block;
          margin: 1.2rem 0 0;
        }
      }
    }
    &__contents {
      padding: 2rem;
      border-bottom: 0.1rem solid #f1f1f1;
      @include mobile {
        padding: 1.6rem;
      }
      &-img {
        position: relative;
        img {
          max-width: 100%;
        }
        &--end {
          &::after {
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: rgba(17, 17, 17, 0.7);
          }
        }
      }
      &-banner {
        display: flex;
        align-items: center;
        height: 12rem;
        margin: 4rem 0 2rem;
        padding: 0 8rem;
        border: 0.1rem solid $secondary;
        border-radius: 1.6rem;
        @include mobile {
          position: relative;
          height: 6rem;
          padding: 0;
          border-radius: 0.8rem;
        }
        &-text {
          flex-grow: 1;
          margin-left: 2rem;
          p {
            margin-bottom: 0.4rem;
            font-size: 1.8rem;
            color: $black;
            font-weight: 700;
          }
          span {
            font-size: 1.3rem;
            color: #535353;
            @include mobile {
              display: none;
            }
          }
          @include mobile {
            font-weight: 400;
          }
        }
        img {
          margin-bottom: 4rem;
          @include mobile {
            display: none;
          }
        }
        .c-btn {
          @include mobile {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 0.8rem;
            background: transparent url(@img/ic-arrow-right.svg) no-repeat
              center right 2rem;
            text-indent: -999rem;
          }
        }
      }
      &-win {
        padding-top: 9.8rem;
        border-bottom: 0;
        text-align: center;
        h3 {
          margin-bottom: 5.8rem;
          text-align: center;
          color: $black;
          font-size: 3.2rem;
          font-weight: 700;
          span {
            color: $danger;
          }
        }
        &-confirm {
          margin-bottom: 5.8rem;
          .c-badge {
            background-color: $blue;
          }
        }
        h4 {
          font-size: 1.6rem;
          color: #535353;
          font-weight: 400;
          text-align: center;
        }
        &-confirm {
          ul {
            display: flex;
            justify-content: space-between;
            @include mobile {
              flex-wrap: wrap;
              width: 100%;
            }
            li {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 50%;
              & + li {
                @include mobile {
                  margin-top: 4rem;
                }
              }
              @include mobile {
                width: 100%;
              }
              .c-badge {
                width: 8.3rem;
              }
              strong {
                margin: 1.8rem 0 0.8rem;
                font-size: 1.8rem;
                color: $black;
              }
              span {
                font-size: 1.6rem;
                color: #535353;
              }
              a {
                margin-top: 1rem;
                font-size: 1.3rem;
                color: #535353;
                text-decoration: underline;
              }
            }
          }
        }
        .c-form-group {
          .c-form-check {
            label {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 1.9rem 2rem 2.1rem 6rem;
              height: 10rem;
              strong {
                display: flex;
                align-items: center;
                position: relative;
                font-weight: 700;
                font-size: 1.8rem;
                color: #111;
              }
              &::before {
                content: "";
                display: block;
                position: absolute;
                left: 2rem;
                width: 2rem;
                height: 2rem;
                border: 0.1rem solid #dedede;
                border-radius: 0.3rem;
              }
            }
            .c-btn-check:checked + label:before {
              border: 0;
              background: $danger url(@img/ic-checkbox.svg) no-repeat center;
            }
            .c-btn-check[type="radio"] + label {
              &::before {
                border-radius: 50%;
              }
            }
            &-group {
              gap: 2.4rem 1.6rem;
              @include mobile {
                gap: 0.8rem;
              }
              &-1st {
                display: flex;
                justify-content: center;
                align-items: center;
                .c-form-check {
                  width: calc(50% - 1.2rem);
                  @include mobile {
                    width: 100%;
                  }
                }
                label {
                  justify-content: center;
                  padding: 0;
                  &::before {
                    display: none;
                  }
                }
              }
            }
          }
        }
        .c-btn-check:checked ~ .c-btn {
          border-color: $primary;
        }
      }
      &-head {
        margin-bottom: 2rem;
        padding-bottom: 2rem;
        border-bottom: 0.1rem solid #f1f1f1;
        .c-form-group {
          margin-top: 0;
        }
        .c-badge {
          font-weight: 400;
          background: $light url(@img/ic-down.svg) no-repeat center left 1.6rem;
          padding-left: 3.6rem;
        }
        li + li {
          margin-top: 0.8rem;
        }
      }
    }
    > .c-btn-group {
      margin: 4rem 0 6rem;
      @include mobile {
        margin: 3.2rem 0 5rem;
        padding: 0 1.6rem;
      }
      .c-btn {
        @include mobile {
          width: 100%;
        }
      }
    }
  }
  .lecture {
    &__title {
      margin-bottom: 1.4rem;
      font-size: 1.6rem;
      font-weight: bold;
      color: #f8485e;
      &--type02 {
        font-size: 1.8rem;
        color: $black;
        & + .mypage__contents-search {
          margin-top: 1.8rem;
        }
      }
    }
    &-list {
      margin: -16px 0 0 -16px;
      padding-top: 3rem;
      @include mobile {
        margin: 0 0 4rem 0;
      }
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
        align-items: center;
        float: left;
        width: calc(50% - 16px);
        margin: 16px 0 0 16px;
        padding: 2.4rem;
        border-radius: 0.8rem;
        border: solid 0.1rem #dedede;
        @include mobile {
          margin: 0 0 1.6rem;
          width: 100%;
        }
        &:nth-child(2n-1) {
          // margin-left: 0;
          // border: 1px solid #f60;
        }
        &-thumb {
          width: 100%;
          height: 50px;
          margin-right: 24px;
          text-align: center;
          img {
            max-width: 100%;
            max-height: 100%;
          }
          .c-btn {
            min-width: 14rem;
            font-size: 1.6rem;
            font-weight: 700;
          }
        }
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
            font-size: 1.4rem;
            color: #535353;
          }
        }
        &-title {
          display: flex;
          align-items: center;
          p {
            display: flex;
            align-items: center;
            width: 100%;
            a {
              font-size: 18px;
              font-weight: bold;
              color: #111;
              @include text-clamp(1);
            }
            button {
              overflow: hidden;
              display: block;
              min-width: 18px;
              width: 18px;
              height: 19px;
              margin-left: 10px;
              background: url(@img/copy-right.svg) no-repeat center;
              text-indent: -999rem;
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
          margin-top: 11px;
          font-size: 16px;
          font-weight: bold;
          color: #535353;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
      &__text {
        margin-left: 1.6rem;
        padding: 4rem;
        border-radius: 0.8rem;
        border: 0.1rem solid $secondary;
        text-align: center;
        font-size: 1.6rem;
        color: $black;
        @include mobile {
          margin-left: 0;
        }
      }
      & + .mypage__schedule-item {
        margin-top: 1.6rem;
      }
      & + .lecture__title {
        margin-top: 4rem;
      }
      &--type02 {
        .lecture-list__item {
          width: calc(25% - 1.6rem);
          min-height: 21.6rem;
          flex-direction: column;
          &-thumb {
            margin-right: 0;
          }
          &-text {
            margin-top: auto;
            flex-direction: row;
            p {
              span {
                color: $primary;
              }
            }
          }
          &-btn {
            margin-top: 2.6rem;
            .c-btn {
              background-color: #f5f5f5;
              color: $black;
              font-weight: 700;
            }
          }
          @include tablet {
            width: calc(50% - 1.6rem);
          }
          @include mobile {
            width: 100%;
          }
        }
      }
      &--type03 {
        display: flex;
        flex-wrap: wrap;
        padding-top: 0;
        .lecture-list__item {
          display: flex;
          align-items: flex-start;
          // float: none;
          width: calc(50% - 1.6rem);
          // margin: 0;
          padding: 1.8rem 2rem 2.9rem;
          border-radius: 0.8rem;
          border: solid 0.1rem #dedede;
          flex-direction: column;
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
          @include mobile {
            width: 100%;
          }
        }
      }
    }
  }
  .interest {
    padding: 80px 0 92px 0;
    border-top: 2px solid #111;
    border-bottom: 1px solid #dedede;
    &-item {
      margin-top: 102px;
      &:first-child {
        margin-top: 0;
      }
      &__image {
        margin-bottom: 22px;
        text-align: center;
      }
      &__title {
        margin-bottom: 28px;
        font-size: 20px;
        line-height: 1.5;
        letter-spacing: -0.6px;
        text-align: center;
        color: #111;
      }
      &__text {
        margin-bottom: 14px;
        font-size: 16px;
        letter-spacing: -0.48px;
        color: #535353;
        text-align: center;
      }
      &__button {
        margin-bottom: 32px;
        text-align: center;
      }
      &__chips {
        text-align: center;
        .c-chips {
          margin: 8px 4px;
        }
      }
    }
  }
}
</style>
