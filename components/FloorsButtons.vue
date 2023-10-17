<template>
    <Button class="btn" :ref="'button' + n" v-for="n in numberOfFloors" :key="n"
      @click="$emit('change', { update: n }); activeFloor = n;">
      <p class="number">{{ n }}</p>
    </Button>
</template>

<script>
export default {
  props: {
    numberOfFloors: Number,
  },
  data() {
    return {
      activeFloor: 1,
    };
  },
  mounted() {
    this.$refs[`button${this.activeFloor}`][0].classList.toggle("btn_active");
  },
  methods: {},
  watch: {
    activeFloor(newVal, oldVal) {
      this.$refs[`button${oldVal}`][0].classList.toggle("btn_active");
      this.$refs[`button${newVal}`][0].classList.toggle("btn_active");
    },
  }
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/abstract/variables";
@use "~/assets/scss/abstract/mixins" as *;

.wrapper {
  display: flex;
  flex-direction: column-reverse;
  row-gap: 14px;
}

.btn {
  width: 40px;
  height: 40px;
  background-color: #2e2e2e;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;

  &:active {
    background-color: variables.$blue;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  &_active {
    background-color: variables.$blue;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
}

.number {
  color: variables.$IOS-theme;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  user-select: none;
}
</style>