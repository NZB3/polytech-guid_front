<template>
  <div class="wrapper">
    <Button type="button" class="btn" @click="$emit('PlusScale')">
      <p class="number">+</p>
    </Button>
    <Button type="button" class="btn" @click="$emit('MinusScale')">
      <p class="number">-</p>
    </Button>
  </div>
</template>
<script>
import Button from "~/components/ui/Button.vue";

export default {
  components: {Button},
  data() {
    return {
      c: 0,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/abstract/variables";
@use "~/assets/scss/abstract/mixins" as *;

.wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 14px;
}

.btn {
  //margin-top: 30px;
  width: 40px;
  height: 40px;
  background-color: #2e2e2e;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  /*position: absolute;
    left: 0px;
    bottom: 0px;*/
  &:active {
    background-color: variables.$blue;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
}

.number {
  //font-family: "Montserrat", sans-serif;
  color: variables.$IOS-theme;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  user-select: none;
}

.img {
  display: block;
  max-width: 100px;
}
</style>