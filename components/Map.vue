<script>
export default {
  data() {
    return {
      navCardState: false,
      modalState: false,
      numberOfFloors: 5,
      b1: '',
      b2: '',
      isAudSelected: false,
      selectedAudNumber: '',
    };
  },
  methods: {
    getAudInfo(data) {
      if (data.aud) {
        this.isAudSelected = true;
      } else {
        this.isAudSelected = false;
      }
      this.selectedAudNumber = data.aud;
      this.$emit('audInfoChanged', {
        isAudSelected: this.isAudSelected,
        selectedAudNumber: this.selectedAudNumber
      });
    },
    swap() {
      [this.b1, this.b2] = [this.b2, this.b1];
    },
    choose(event) {
      if (
          this.activeButton != null &&
          this.activeButton !== event.currentTarget &&
          this.activeButton.classList.contains("active")
      ) {
        this.activeButton.classList.toggle("active");
      }
      this.activeButton = event.currentTarget;
      event.currentTarget.classList.toggle("active");
    },
    arrow(event) {
      event.currentTarget.classList.toggle("click");
      this.$emit("toggleCard");
    },
    toggleNavCard() {
      this.navCardState = !this.navCardState;
    },
  },
};
</script>

<template>
  <FloorsButtons class="floor-buttons" :numberOfFloors="numberOfFloors"/>
  <ScaleFrame class="map-frame" @newSelected="getAudInfo" />
</template>

<style scoped lang="scss">

</style>