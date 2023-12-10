<template>
    <div class="sidebar">
        <Search/>
        <slot></slot>
    </div>
</template>

<script>
import Search from "~/components/Search.vue";
import Accordion from "~/components/Accordion.vue";
export default {
  components: {
    Accordion,
    Search,
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
    width: 345px;
    height: 100vh;
    background-color: variables.$darkgrey;
    padding: 25px 20px;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
}
</style>