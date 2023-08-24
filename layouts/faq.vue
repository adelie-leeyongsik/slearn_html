<template>
  <div class="c-page--faq">
    <Header />
    <div id="c-contents"><NuxtPage /></div>
    <Footer />
  </div>
</template>

<style lang="scss">
.faq {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding-bottom: 6rem;
  background-color: $white;
  .c-tab-contents__wrap {
    flex-grow: 1;
  }
  .c-tab-contents {
    padding: 4rem 0;
  }
  h1 {
    margin: 4.2rem 0 1rem;
    font-size: 3.2rem;
    font-weight: 700;
    text-align: center;
    @include mobile {
      // margin-bottom: 0;
    }
  }
  &__header {
    width: 120rem;
    margin: 2rem auto 0;
    @include tablet {
      width: 100%;
      padding: 0 1.6rem;
    }
    @include mobile {
      margin-top: 0rem;
    }
    .c-tab-nav {
      overflow: auto;
      // -ms-overflow-style: none; /* IE and Edge */
      // scrollbar-width: none; /* Firefox */
      // &::-webkit-scrollbar {
      //   display: none; /* Chrome, Safari, Opera*/
      ul {
        min-width: 102.4rem;
        padding: 0;
        @include mobile {
          padding: 0;
        }
        li {
          white-space: nowrap;
          padding: 0 2rem;
          a {
            white-space: nowrap;
          }
        }
      }
    }
    .c-input-group {
      &--search {
        @include mobile {
          width: 100%;
        }
      }
    }
    .c-tab-nav {
      margin-top: 4rem;
    }
  }
  &-search__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5.8rem 0 1.6rem;
    font-size: 1.8rem;
    font-weight: 700;
    font-size: 1.6rem;
    color: #535353;
    a {
      font-weight: 400;
      text-decoration: underline;
      font-size: 1.3rem;
    }
    span {
      color: $danger;
    }
    &:first-child {
      margin-top: 3.8rem;
    }
    & + dl {
      border-top: 0.1rem solid #f1f1f1;
    }
    @include mobile {
      padding: 0 1.6rem;
    }
  }
  &-search__not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 6rem;
    text-align: center;
    font-size: 1.6rem;
    color: #535353;
    img {
      margin-bottom: 1.4rem;
    }
  }
  .accordions {
    width: 100%;
    margin-top: -4rem;
    dl {
      width: 100%;
      background-color: $white;
      font-size: 1.6rem;
      color: $black;
      border-bottom: 0.1rem solid #f1f1f1;
      dt {
        > a {
          display: flex;
          align-items: center;
          height: 8rem;
          padding: 0 4.8rem 0 2rem;
          background: url(@img/ic-accordion-arrow-off.svg) no-repeat center
            right 2rem;
          font-weight: 700;
          font-size: 1.8rem;
          @include mobile {
            height: auto;
            padding: 2.6rem 4.8rem 2.6rem 1.6rem;
            align-items: flex-start;
            background: url(@img/ic-accordion-arrow-off.svg) no-repeat top
              2.2rem right 0.8rem;
          }
        }
        span {
          margin-right: 1.6rem;
          font-weight: 700;
          @include mobile {
            margin-right: 0.8rem;
          }
        }
        &:hover {
          cursor: pointer;
        }
        &.active {
          a {
            background: url(@img/ic-accordion-arrow-on.svg) no-repeat center
              right 2rem;
            font-weight: 700;
            @include mobile {
              background: url(@img/ic-accordion-arrow-on.svg) no-repeat top
                2.2rem right 0.8rem;
            }
            color: $danger;
          }
        }
        strong {
          color: $danger;
        }
      }
      dd {
        display: flex;
        padding: 0 4.4rem 2rem;
        color: #535353;
        @include mobile {
          padding: 0 4.8rem 1.8rem 1.6rem;
        }
        span {
          margin-right: 1.6rem;
          font-weight: 700;
          color: $danger;
          @include mobile {
            margin-right: 0.8rem;
          }
        }
      }
    }
  }
}
</style>
