<template>
  <section class="shimmer-container">
    <div id="article-section-placeholder">
      <!-- Amount -->
      <app-shimmer-effect :style="{ height: '14px', width: '123px' }" />

      <!-- Title -->
      <app-shimmer-effect
        :style="{ height: '40px', width: '250px', display: 'block' }"
      />

      <!-- Paragraph -->
      <app-shimmer-effect
        :style="{
          height: '10px',
          width: '90%',
          display: 'block',
          marginTop: '20px',
        }"
      />
      <app-shimmer-effect
        :style="{ height: '10px', width: '90%', display: 'block' }"
      />
      <app-shimmer-effect
        :style="{ height: '10px', width: '90%', display: 'block' }"
      />
      <app-shimmer-effect
        :style="{ height: '10px', width: '90%', display: 'block' }"
      />

      <!-- Amount -->
      <app-shimmer-effect
        :style="{
          height: '45px',
          width: '250px',
          display: 'block',
          marginTop: '35px',
        }"
      />
    </div>
    <!--  Cover Photo  -->
    <app-shimmer-effect class="" :style="{ height: '430px', width: '100%' }" />
  </section>
</template>

<script>
export default {
  name: 'AppEventDetailShimmer',
}
</script>

<style lang="scss" scoped>
.shimmer-container {
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  grid-column: span 2;

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-column: 1;

    &__photo {
      grid-row: 1;
    }
  }
}
</style>
