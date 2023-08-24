<script setup>
import Snb from "/pages/pub/temp/my/_snb.vue";
</script>

<template>
  <div class="c-page--account">
    <Header />
    <div id="c-contents">
      <div class="temp2">
        <div class="temp2-left">
          <Snb />
        </div>
        <div class="temp2-right">
          <NuxtPage />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
html,
body {
  background-color: $white;
}
.temp {
  max-width: 1600px;
  margin: 0 auto;
  img {
    width: 100%;
  }
}

.temp2 {
  display: flex;
  width: 120rem;
  margin: 0 auto;
  &-left {
    margin-top: 8rem;
    margin-right: 4.8rem;
  }
  &-right {
    flex-grow: 1;
  }
  img {
    width: 100%;
  }
}
.mypage__snb {
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
</style>
