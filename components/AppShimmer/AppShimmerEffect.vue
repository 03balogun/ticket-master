<template>
  <div :style="vStyle" class="shimmer"></div>
</template>

<script>
export default {
  name: 'AppShimmerEffect',
  props: {
    vStyle: {
      type: Object,
      required: false,
      default() {
        return { height: '10px', marginTop: '10px', width: '200px' }
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.shimmer {
  background: #f6f7f8
    linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    )
    no-repeat;
  background-size: 100% 100%;
  display: inline-block;
  position: relative;

  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: shimmer;
  -webkit-animation-timing-function: linear;
}

@-webkit-keyframes shimmer {
  0% {
    background-position: -468px 0;
  }

  100% {
    background-position: 468px 0;
  }
}
</style>
