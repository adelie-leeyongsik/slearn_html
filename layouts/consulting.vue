<template>
  <div class="c-page--consulting">
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
#c-contents {
  height: calc(100% - 10.1rem);
}
.consulting {
  padding-bottom: 12rem;
  &__foot {
    display: flex;
    gap: 2.4rem;
    margin-bottom: 4rem;
    @include tablet {
      gap: 1.6rem;
      padding: 0 1.6rem;
      flex-direction: column;
    }
    .c-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 12rem;
      p {
        font-size: 1.8rem;
        font-weight: 700;
        color: $black;
      }
      .c-btn {
        min-width: 10.3rem;
      }
    }
    .c-box + .c-box {
      margin-top: 0;
    }
  }
}
.board {
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
              max-width: calc(100% - 2rem);
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

          &__category {
            @include mobile {
              display: none;
            }
          }
          &__status {
            color: #535353;
            font-size: 1.4rem;
            margin-bottom: 1.8rem;
            @include mobile {
              padding-left: 1.6rem;
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
        text-align: right;
        @include tablet {
          display: block;
          margin: 1.2rem 0 0;
          text-align: left;
        }
      }
    }
    &__contents {
      margin-bottom: 4rem;
      // padding: 2rem;
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
        &-list {
          display: flex;
          margin: 0 -2rem 2rem;
          padding: 0 2rem 2rem;
          border-bottom: 0.1rem solid $light;
          @include mobile {
            margin: 0 -1.6rem 2rem;
            padding: 0 1.6rem 1.6rem;
          }
          dl {
            display: flex;
            align-items: center;
            width: 100%;
            font-size: 1.3rem;
            color: #535353;
            dt {
              font-weight: 700;
              color: $black;
              padding-right: 2rem;
            }
          }
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
}
</style>
