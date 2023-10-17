<script setup>
const props = defineProps({
  link: {
    type: String,
    required: false
  }
})
</script>

<template>
  <NuxtLink :to="link">
    <slot></slot>
  </NuxtLink>
</template>

<style scoped lang="scss">

</style>