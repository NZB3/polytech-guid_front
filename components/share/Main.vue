<script>
import Button from "~/components/ui/Button.vue";
export default {
  components: {
    Button,
  },
  data() {
    return {
      route: this.$route
    }
  },
  mounted() {
    console.log(this.route.path);
  }
}
</script>

<template>
  <main class="main">
    <nav class="nav">
    <Button class="nav__button-home" link="/" v-if="route.path !== '/'">
      <img src="~/assets/icons/home_icon.svg" alt="">
    </Button>
    <Button class="nav__button-about" link="/about" v-if="route.path !== '/about'">
      <img src="~/assets/icons/about_icon.svg" alt="">
    </Button>
    </nav>

    <slot></slot>
  </main>
</template>

<style scoped lang="scss">
.nav {
  display: flex;
  flex-direction: row;
  column-gap: 5px;
  position: absolute;
  z-index: 1;
  right: 15px;
  top: 15px;
}
</style>