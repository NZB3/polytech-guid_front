<template>
  <Scale :map="map" :view-box="viewBox" :thin-border-on-zoom="true" :wrapper-styles="{
      position: 'relative',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    }" :mobilePreventScroll="true" @click="click">

    <img src="~/assets/maps/AV.svg" alt="">
  </Scale>
</template>

<script>
import regions from 'assets/dictionaries/map.js'
export default {
  data() {
    return {
      regions,
      viewBox: '0 0 1334 1404',
      selectedIds: [],
      selectedAudId: null,
      defaultColor: '#494949',
      secondColor: '#9C9C9F',
      successColor: '#5F6DEC'
    }
  },
  computed: {
    map() {
      let map = this.regions;

      map.forEach(region => {
        if (this.selectedIds.indexOf(region.id) !== -1) {
          region.fill = this.successColor;
        } else {
          region.fill = this.defaultColor;
        }
      });
      return map;
    },
    selectedRegions() {
      return this.map.filter(region => this.selectedIds.indexOf(region.id) !== -1);
    }
  },
  methods: {
    findRegionById(id) {
      return this.map.find(x => x.id === id)
    },
    click(payload) {
      if (this.selectedIds.indexOf(payload.id) === -1) {
        if (payload.id !== undefined) {

          if (this.selectedAudId !== null) {
            this.selectedIds.splice(this.selectedIds.indexOf(this.selectedAudId), 1)
          }

          this.selectedAudId = payload.id

          this.selectedIds.push(payload.id)

        }
      } else {
        this.selectedAudId = null
        this.selectedIds.splice(this.selectedIds.indexOf(payload.id), 1)
      }
      this.$emit('newSelected', {aud: this.selectedAudId})
    }
  }
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/abstract/variables";
@use "~/assets/scss/abstract/mixins" as *;

.map-container {
  height: 100vh;
  overflow: hidden;
}

.map {
  position: relative;
  text-align: center;
  transition: transform 0.5s linear;

  &__svg {
    position: absolute;
    top: -4px;
    left: 180px;
    height: 100%;
    width: 100%;
  }

  &__img {
    width: 903px;
    height: 794px;
  }
}

.card {
  position: absolute;
}

.auditory {
  fill-opacity: 0%;
  //fill: #494949;
  stroke-opacity: 0;
  //stroke: #9a9a9c;
  stroke-width: 4px;

  &:hover,
  &:active {
    transition: stroke-opacity 0.2s ease;
    fill: variables.$blue;
    stroke: variables.$blue;
    fill-opacity: 0.5;
    stroke-opacity: 1;
    cursor: pointer;
  }
}
</style>