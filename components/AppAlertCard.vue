<template>
  <div class="alert">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppAlertCard',
}
</script>

<style lang="scss" scoped>
.alert {
  background: #fff1f2;
  color: $red;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.306764));
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 200px;
  border-radius: 6px;
  grid-column: span 3;
  flex-direction: column;

  h1 {
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    grid-column: 1;
  }
}
</style>
