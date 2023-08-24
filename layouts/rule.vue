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
html,
body {
  background-color: $white;
}
.rule {
  &-wrap {
    width: 120rem;
    margin: 0 auto;
    padding: 4rem 0 12rem;
    @include tablet {
      width: auto;
    }
  }
  &__nav {
    display: flex;
    gap: 0.8rem;
    &-item {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      height: 5.6rem;
      margin-bottom: 3.2rem;
      border: 0.1rem solid $secondary;
      font-size: 1.6rem;
      color: $black;
      font-weight: 700;

      span {
        font-size: 1.3rem;
        font-weight: 400;
      }

      &-prev {
        &::before {
          content: "";
          position: absolute;
          display: block;
          top: 50%;
          left: 2rem;
          transform: translateY(-50%) rotate(180deg);
          width: 0.9rem;
          height: 1.4rem;
          background: url(@img/ic-arrow-right.svg) center no-repeat;
        }
      }
      &-next {
        &::before {
          content: "";
          position: absolute;
          display: block;
          top: 50%;
          right: 2rem;
          transform: translateY(-50%);
          width: 0.9rem;
          height: 1.4rem;
          background: url(@img/ic-arrow-right.svg) center no-repeat;
        }
      }
      &--disabled {
        background-color: $secondary;
        border-color: #f5f5f5;
        color: #535353;
        font-weight: 400;
        pointer-events: none;
        &::before {
          background: url(@img/ic-arrow-right-sm.svg) center no-repeat;
        }
      }
    }
  }
  &__title {
    font-size: 2rem;
    color: $black;
    font-weight: 700;
    &--sm {
      display: block;
      font-size: 1.5rem;
    }
  }
  &__section {
    p {
      font-size: 1.5rem;
      .rule__title {
        display: inline;
      }
    }
  }
  .c-btn-group {
    margin-top: 8rem;
  }
}
</style>
