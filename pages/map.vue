<template>
  <div class="container">
    <Sidebar class="sidebar">
      <div class="nav-card" v-if="!isAudSelected">
        <div class="rout">
          <div class="inputs">
            <input class="input" type="text" placeholder="Откуда" v-model="b1" />
            <input class="input" type="text" placeholder="Куда" v-model="b2" />
          </div>
          <svg @click="swap" class="swap" width="38" height="38" viewBox="0 0 38 38" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M32.2071 13.0401C32.5976 12.6496 32.5976 12.0164 32.2071 11.6259L25.8431 5.26194C25.4526 4.87142 24.8194 4.87142 24.4289 5.26194C24.0384 5.65246 24.0384 6.28563 24.4289 6.67615L30.0858 12.333L24.4289 17.9899C24.0384 18.3804 24.0384 19.0136 24.4289 19.4041C24.8194 19.7946 25.4526 19.7946 25.8431 19.4041L32.2071 13.0401ZM6.5 13.333H31.5V11.333H6.5V13.333Z"
                fill="white" />
            <path
                d="M5.7929 24.9589C5.40238 25.3494 5.40238 25.9826 5.7929 26.3731L12.1569 32.7371C12.5474 33.1276 13.1806 33.1276 13.5711 32.7371C13.9616 32.3466 13.9616 31.7134 13.5711 31.3229L7.91422 25.666L13.5711 20.0092C13.9616 19.6186 13.9616 18.9855 13.5711 18.5949C13.1806 18.2044 12.5474 18.2044 12.1569 18.5949L5.7929 24.9589ZM31.5 24.666L6.50001 24.666V26.666L31.5 26.666V24.666Z"
                fill="white" />
          </svg>
        </div>
      </div>
      <div class="buttons" v-if="!isAudSelected">
        <button ref="male" class="button button--blue" @click="choose" style="width: 109px">
          Туалет М
        </button>
        <button ref="female" class="button button--blue" @click="choose" style="width: 109px">
          Туалет Ж
        </button>
        <button ref="bufet" class="button button--orange" @click="choose" style="width: 82px">
          Буфет
        </button>
        <button ref="coworking" class="button button--purple" @click="choose" style="width: 128px">
          Коворкинг
        </button>
        <button ref="aud" class="button button--lightred" @click="choose" style="width: 182px">
          Аудитории
        </button>
        <button ref="bibl" class="button button--blue" @click="choose" style="width: 182px">
          Библиотека
        </button>
        <button ref="exit" class="button button--green" @click="choose" style="width: 128px">
          Выход
        </button>
      </div>
      <AudInfo v-if="MapisAudSelected" :audNumber="selectedAudNumber" />
    </Sidebar>
    <Main>
      <Map @audInfoChanged="handleAudInfoChanged"/>
    </Main>
  </div>
</template>

<script>
import FloorsButtons from "~/components/FloorsButtons.vue";
import Sidebar from "~/components/share/Sidebar.vue";
import Map from "~/components/Map.vue"
export default {
  data() {
    return {
      MapisAudSelected: false,
      selectedAudNumber: '',
    };
  },
  components: {Sidebar, FloorsButtons, Map},
  methods: {
    handleAudInfoChanged({ isAudSelected, selectedAudNumber }) {
      this.MapisAudSelected = isAudSelected;
      this.selectedAudNumber = selectedAudNumber;
    },
  }
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/abstract/variables";
@use "~/assets/scss/abstract/_mixins.scss" as *;

.floor-buttons {
  align-items: center;
  justify-content: right;
}
.sidebar {
  @include media(tablet) {
    display: none;
  }
}

.nav-buttons {
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 1;

  @include media(smallest) {
    display: none;
  }
}

.mobile-nav {
  display: none;

  @include media(smallest) {
    display: flex;
  }
}

.mobile-card {
  display: none;
  position: absolute;
  bottom: 0;
  transition: bottom 0.5s ease;

  @include media(smallest) {
    display: flex;
  }

  &_active {
    bottom: -85px;
  }
}

.swap {
  transform: rotate(90deg);
  cursor: pointer;
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
  margin-left: 0;

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

.map-frame {
}

.wrapper {
  display: flex;
  flex-direction: column-reverse;
  row-gap: 14px;
  position: absolute;
  top: 115px;
  right: 25px;
  z-index: 1;

  @include media(smallest) {
    top: 100px;
    right: 10px;
  }
}

.paper {
  flex-direction: column;
  display: flex;
  row-gap: 14px;
  position: absolute;
  top: 420px;
  right: 25px;
  z-index: 1;
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
    box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
  }
}

.number {
  color: variables.$IOS-theme;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
}

.container {
  height: 100vh;
  overflow: hidden;
  margin-left: 360px;

  @include media(tablet) {
    margin-left: 0;
    overflow: scroll;
  }

  @include media(smallest) {
    overflow: hidden;
  }
}

.Home {
  top: 40px;
  margin-left: 32px;
}

.nav-card {
  width: 100%;
  height: 50px;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: column;
  row-gap: 19px;
}

.rout {
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
}

.svg {
  fill: #797979;
  stroke: #797979;
  transition: all 0.25s ease-in-out;
}

::-webkit-scrollbar {
  display: none;
}

.buttons {
  display: flex;
  gap: 10px;
  padding: 0 10px 0 10px;
  margin: 40px 0 10px -9px;
  flex-wrap: wrap;
  width: 320px;
}

.button {
  min-width: max-content;
  min-height: 42px;
  border-radius: 10px;
  background-color: variables.$black;
  color: #eaeaea;
  border: 2px solid;
  cursor: pointer;
  user-select: none;

  &:hover {
    box-shadow: 0 0 4px 0 rgba(255, 255, 255, 0.5);
  }

  &--blue {
    border-color: variables.$blue;

    &.active {
      background-color: variables.$blue;
    }
  }

  &--orange {
    border-color: variables.$orange;

    &.active {
      background-color: variables.$orange;
    }
  }

  &--purple {
    border-color: variables.$purple;

    &.active {
      background-color: variables.$purple;
    }
  }

  &--lightred {
    border-color: variables.$lightred;

    &.active {
      background-color: variables.$lightred;
    }
  }

  &--orange {
    border-color: variables.$orange;

    &.active {
      background-color: variables.$orange;
    }
  }

  &--blue {
    border-color: variables.$blue;

    &.active {
      background-color: variables.$blue;
    }
  }

  &--green {
    border-color: variables.$green;

    &.active {
      background-color: variables.$green;
    }
  }
}

.active {
  font-weight: bold;
  color: white;
}

.input {
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  background-color: variables.$black;
  border-radius: 10px;
  padding: 21px;
  color: variables.$white;
  border: 0.5px solid variables.$white;
  font-size: 14px;

  &::placeholder {
    color: variables.$classicgrey;
  }

  &:focus {
    outline: none;
  }
}

.arrow {
  background-color: variables.$black;
  border-radius: 20px 20px 0 0;
  border-style: none;
  padding: 3px 0 2px;

  &.click {
    .svg {
      fill: white;
      stroke: white;
      transform-origin: 50% 50%;
      transform: scaleY(-1);
    }
  }
}

.inputs {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}
</style>