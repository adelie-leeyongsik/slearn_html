<template>
  <div class="c-page--board">
    <Header />
    <div id="c-contents"><NuxtPage /></div>
    <Footer />
  </div>
</template>

<style lang="scss">
#__nuxt {
  min-height: 100%;
  background-color: $white;
}
.board {
  min-height: 100%;
  padding-bottom: 12rem;
  background-color: $white;
  h1 {
    margin: 4.2rem 0 1rem;
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 4rem;
    text-align: center;
    color: #000;
    @include mobile {
      margin-top: 0;
    }
  }
  &-list {
    width: 120rem;
    margin: 6rem auto 0;
    @include tablet {
      width: auto;
      padding: 4.8rem 2.4rem;
    }
    @include mobile {
      width: auto;
      padding: 0;
    }
    table {
      @include mobile {
        display: block;
        padding: 0 1.6rem;
      }
      colgroup {
        @include mobile {
          display: none;
        }
      }
      margin-bottom: 5.8rem;
      border-collapse: collapse;
      border-top: 0.2rem solid $black;
      caption {
        width: 0;
        height: 0;
        font-size: 0;
        line-height: 0;
      }
      tbody {
        @include mobile {
          display: block;
        }
      }
      thead {
        tr {
          border-bottom: 0.1rem solid $black;
          th {
            padding: 1.8rem 0;
            font-size: 1.6rem;
            font-weight: 700;
          }
        }
        @include mobile {
          display: none;
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
              padding-right: 0.4rem;
            }
            // p {
            //   display: flex;
            //   align-items: center;
            //   @include mobile {
            //     display: inline-block;
            //     vertical-align: top;
            //   }
            //   a {
            //     @include mobile {
            //       display: inline;
            //       overflow: auto;
            //       text-overflow: inherit;
            //       white-space: normal;
            //       vertical-align: top;
            //     }
            //     > div {
            //       @include text-clamp(1);
            //     }
            //   }
            // }
            .c-flex {
              @include mobile {
                display: block !important;
              }
            }
            a {
              display: flex;
              align-items: center;
              max-width: calc(100% - 4rem);
              @include mobile {
                display: inline;
                vertical-align: top;
                max-width: unset;
              }
              > div {
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
          &__hit {
            color: #535353;
            font-size: 1.4rem;
            margin-bottom: 1.8rem;
            @include mobile {
              margin-left: 1.6rem;
            }
          }
        }
      }
      .ico {
        position: relative;
        margin-left: 0.6rem;
        @include mobile {
          top: -0.2rem;
        }
        &.ico-down {
          @include mobile {
            top: 0.2rem;
          }
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
      border-bottom: 0.1rem solid #f1f1f1;
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
          & + .c-btn {
            margin-left: 1.6rem;
          }
          @include mobile {
            width: 100%;
          }
        }
      }
      &-head {
        padding: 2rem;
        border-bottom: 0.1rem solid #f1f1f1;
        @include mobile {
          margin: 0 -1.6rem;
          padding-top: 0;
        }
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
      &-body {
        padding: 2rem;
        @include mobile {
          padding: 1.6rem 0 0;
        }
      }
    }
  }

  &__btn {
    display: flex;
    justify-content: flex-end;
    gap: 0.8rem;
    border-top: 0.1rem solid $secondary;
    padding-top: 1.6rem;
    @include mobile {
      padding-right: 1.6rem;
    }
    .c-btn {
      width: 8rem;
      min-width: auto;
      background-color: #f1f1f1;
      color: $black;
      font-size: 1.3rem;
      font-weight: 700;
    }
  }
}

.event {
  &-view {
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
}
</style>
