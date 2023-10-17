<template>
  <div>
    <SearchNavbutton class="navbar" @modal="toggleModal" />
    <Modal v-if="modalState === true" @modal="toggleModal"/>

    <FloorsButtons class="floors-buttons" :numberOfFloors="numberOfFloors" @change="updateFloor"/>
    <ScaleButtons class="scale-buttons" />

    <Maps :numberOfFloors="numberOfFloors" :activeFloor="activeFloor"/>

    <NavigationCard
      class="navigation-card"
      :class="{ 'navigation-card_active': navCardState }"
      @toggleCard="toggleNavCard"
    />
  </div>
</template>

<script>
import FloorsButtons from '~/components/FloorsButtons.vue';
export default {
  components: { FloorsButtons },
  data() {
    return {
      navCardState: false,
      modalState: false,
      numberOfFloors:5,
      activeFloor: 1
    };
  },
  methods: {
    toggleNavCard() {
      this.navCardState = !this.navCardState;
    },
    toggleModal() {
      this.modalState = !this.modalState;
    },
    updateFloor(data) {
      this.activeFloor = data.update
    }
  },
};
</script>

<style lang="scss" scoped>
body {
  overflow: hidden;
}

.navbar {
  margin: 20px auto 0;
}

.floors-buttons {
  margin-top: 30px;
  margin-left: 10px;
}

.scale-buttons {
  position: absolute;
  top: 90px;
  right: 10px;
}

.navigation-card {
  position: absolute;
  bottom: 0px;
  transition: bottom 0.5s ease;
  &_active {
    bottom: -85px;
  }
}
</style>