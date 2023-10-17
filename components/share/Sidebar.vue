<template>
    <div class="sidebar">
        <SearchNavButton/>
        <slot></slot>
    </div>
</template>

<script>
import SearchNavButton from "~/components/SearchNavButton.vue";
import Accordion from "~/components/Accordion.vue";
export default {
  components: {
    Accordion,
    SearchNavButton,
  },
  data () {
    return{

    }
  }
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/abstract/variables";
@use "~/assets/scss/abstract/mixins" as *;

.sidebar{
    position: fixed;
    top: 0;
    left: 0;
    width: 345px;
    height: 100vh;
    background-color: variables.$darkgrey;
    padding: 25px 20px;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
}
</style>