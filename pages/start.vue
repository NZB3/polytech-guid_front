<template>
  <div class="container">
    <Sidebar>
        <AudInfo/>
    </Sidebar>
    <Main>
      <Map></Map>
    </Main>
  </div>
</template>

<script>
import Sidebar from "~/components/share/Sidebar.vue";

export default {
  components: {Sidebar},
  data() {
    return {
      scale: 1,
      zoomingSpeed: 0.05,
      numberOfFloors: 5,
    };
  },
  methods: {
    scroll(event) {
      if (event.deltaY > 0) {
        if (this.$refs.map.style.transform !== "scale(0.5)") {
          this.$refs.map.style.transform = `scale(${(this.scale -=
            this.zoomingSpeed)})`;
        }
      } else {
        if (this.$refs.map.style.transform !== "scale(1.5)") {
          this.$refs.map.style.transform = `scale(${(this.scale +=
            this.zoomingSpeed)})`;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/abstract/variables";
@use "../assets/scss/abstract/mixins" as *;

.container {
  height: 100vh;
  overflow: hidden;
  margin-left: 25vw;
}
.map {
  position: relative;
  text-align: center;
  //width: 100%;
  //height: 100%;
  //overflow-x: hidden;
  //overflow-y: hidden;
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

.auditory {
  fill-opacity: 0%;
  //fill: #494949;
  stroke-opacity: 0;
  stroke-width: 4px;
  &:hover,
  &:active {
    transition: fill-opacity 0.2s ease;
    transition: stroke-opacity 0.2s ease;
    fill: variables.$blue;
    stroke: variables.$blue;
    fill-opacity: 0.5;
    stroke-opacity: 1;
    cursor: pointer;
  }
}

.search {
  width: 310px;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
  gap: 10px;
  background-color: variables.$black;
  border-radius: 10px;
  margin-left: 0px;

  &__field {
    width: 196px;
    border: 0;
    background: variables.$black;
    color: variables.$white;
    font-size: 12px;
    line-height: 14.63px;

    &:focus {
      outline: none;
    }
  }
}

.nav {
  position: absolute;
  top: 25px;
  right: 25px;
}

.wrapper {
  display: flex;
  flex-direction: column-reverse;
  row-gap: 14px;
  position: absolute;
  top: 115px;
  right: 25px;
}

.paper {
  flex-direction: column;
  display: flex;
  row-gap: 14px;
  position: absolute;
  top: 420px;
  right: 25px;
}
</style>