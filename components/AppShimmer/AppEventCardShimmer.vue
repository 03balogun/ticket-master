<template>
  <div>
    <app-shimmer-effect
      class="d-block"
      :v-style="{ height: '231px', width: '100%' }"
    />
    <app-shimmer-effect
      class="d-block"
      :v-style="{ height: '14px', width: '98px', marginTop: '20px' }"
    />
    <app-shimmer-effect
      class="d-block"
      :v-style="{
        height: '22px',
        width: '60%',
        marginTop: '5px',
        marginBottom: '5px',
      }"
    />
    <app-shimmer-effect
      class="d-block"
      :v-style="{ height: '18px', width: '120px' }"
    />
  </div>
</template>

<script>
export default {
  name: 'AppEventCardShimmer',
}
</script>

<style lang="scss" scoped>
.d-block {
  display: block !important;
}
</style>
