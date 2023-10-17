<template>
    <div>
        <img v-for="i in numberOfFloors" :key="i" class="map" v-show="i === activeFloor" :src="'_nuxt/assets/images/karta' +((i%3)-1)+ '.jpg'"  alt=""/>
    </div>
</template>

<script>
export default {
  props: {
    numberOfFloors: Number,
    activeFloor: Number,
  },
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/abstract/variables";
@use "~/assets/scss/abstract/mixins" as *;
.map{
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  object-fit: none;
  object-position: center;
  height: 800px;
  width: 360px;
}
</style>