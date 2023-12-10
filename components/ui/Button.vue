<script setup>
const props = defineProps({
  link: {
    type: String,
    required: false
  }
})
</script>

<template>
  <NuxtLink class="button" :to="link">
    <slot></slot>
  </NuxtLink>
</template>

<style scoped lang="scss">
@use "~/assets/scss/abstract/variables";
@use "~/assets/scss/abstract/_mixins.scss" as *;
@use "~/assets/scss/main.scss";

.button {
  width: 30px;
  height: 30px;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 5px 5px 5px 5px;
  background: variables.$darkgrey;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  &:active {
    background: variables.$blue;
  }
}
</style>