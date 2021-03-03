<template>
  <nuxt-child />
</template>

<script>
export default {
  validate({ query }) {
    return query.id
  },
}
</script>
