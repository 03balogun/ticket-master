<template>
  <div class="guarantee">
    <verified-icon />
    <div>
      <strong>100% customer protection</strong>
      <span>Money back guarantee</span>
    </div>
  </div>
</template>

<script>
import VerifiedIcon from '~/assets/images/verified-icon.svg?inline'

export default {
  name: 'AppOrderGuarantee',
  components: {
    VerifiedIcon,
  },
}
</script>

<style lang="scss" scoped>
.guarantee {
  margin-top: 30px;
  display: flex;

  svg {
    margin-right: 10px;
  }
  strong {
    @include fs-14;
    display: block;
  }

  span {
    @include fs-13;
    color: #828282;
  }
}
</style>
