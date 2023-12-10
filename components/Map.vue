<script>
import FloorsButtons from "~/components/FloorsButtons.vue";
export default {
  components: { FloorsButtons },
  data() {
    return {
      navCardState: false,
      modalState: false,
      numberOfFloors: 5,
      isAudSelected: false,
      selectedAudNumber: '',
    };
  },
  methods: {
    getAudInfo(data) {
      this.isAudSelected = !!data.aud;
      this.selectedAudNumber = data.aud;
      this.$emit('audInfoChanged', {
        isAudSelected: this.isAudSelected,
        selectedAudNumber: this.selectedAudNumber
      });
    },
    updateFloor(floor) {
      this.$emit("floorChanged", floor);
    },
  },
};
</script>

<template>
    <div class="floor-buttons">
      <FloorsButtons :numberOfFloors="numberOfFloors" @change="updateFloor"/>
    </div>
    <ScaleFrame @newSelected="getAudInfo" />
</template>

<style scoped lang="scss">
  .floor-buttons {
    position: absolute;
    top: 40%;
    right: 15px;
    z-index: 1;
  }
  .map-frame {
    display: flex;
    height: 100%;
    width: 100%;
  }
</style>