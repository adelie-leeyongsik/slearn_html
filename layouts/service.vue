<template>
  <div class="c-page--service">
    <Header />
    <div id="c-contents"><NuxtPage /></div>
    <Footer />
  </div>
</template>

<style lang="scss">
.service {
  display: block;
  background-color: $white;
  padding-bottom: 6rem;
  min-height: calc(100% - 10.1rem);
  @include mobile {
    padding: 6rem 1.6rem;
  }
  &-write {
    background-color: $white;
  }
  .c-text-title-lg {
    margin: 4.2rem 0 1rem;
    @include mobile {
      margin-top: 0;
    }
  }
  &__body {
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
  textarea.c-form-control {
    margin-top: 0;
  }
  &-complete {
    .c-text-title-lg {
      margin-top: 14.4rem;
    }
  }
}
</style>
