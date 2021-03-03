<template>
  <div>
    <div class="container">
      <the-navbar />
      <main>
        <Nuxt />
      </main>
      <the-footer />
    </div>
    <app-modal />
    <app-toast-notification />
  </div>
</template>

<style lang="scss">
@import '../assets/scss/app.scss';
</style>
