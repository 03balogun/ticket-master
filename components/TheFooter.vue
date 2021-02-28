<template>
  <footer class="footer">
    <span>Copyright 2019. Flutterwave inc</span>
    <ul>
      <li><a href="javascript:">Terms & Conditions</a></li>
      <li><a href="javascript:">Privacy Policy</a></li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>

<style lang="scss" scoped>
.footer {
  @include fs-14;
  max-width: 958px;
  margin: 100px auto 40px;
  display: flex;
  justify-content: space-between;

  ul {
    @include reset-list;
    display: flex;

    li {
      a {
        color: $gray-2;
      }
      &:not(:last-child) {
        margin-right: 48px;
      }
    }
  }
}
</style>
