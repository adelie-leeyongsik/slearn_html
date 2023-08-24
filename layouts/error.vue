<template>
  <div class="c-page--default">
    <Header />
    <div id="c-contents"><NuxtPage /></div>
    <Footer />
  </div>
</template>

<style lang="scss">
.error {
  padding: 17.5rem 0;
  text-align: center;
  p {
    margin-top: 3rem;
    font-size: 2rem;
    font-weight: 700;
    strong {
      margin-top: 3rem;
      display: block;
      font-size: 3.2rem;
      color: $primary;
      font-weight: 400;
      span {
        font-weight: 700;
      }
    }
  }
}
</style>
