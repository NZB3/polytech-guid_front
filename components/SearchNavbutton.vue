<template>
  <div class="nav">
    <Button class="nav__button nav__button_main" link="/">
      <img src="../assets/icons/home_icon.svg" alt="home icon">
    </Button>

    <div class="nav_search search">
      <img src="../assets/icons/search_icon.svg" alt="search icon">
      <input type="text" class="search__field" placeholder="Напишите номер аудитории">
    </div>

    <Button class="nav__button nav__button_about" link="/about">
      <img src="../assets/icons/about_icon.svg" alt="question symbol">
    </Button>
  </div>
</template>

<script>
import Button from './ui/Button.vue'; // adjust the path according to your project structure

export default {
  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/abstract/variables";
@use "~/assets/scss/abstract/mixins" as *;

.nav__button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 340px;

  @include media(smallest) {
    position: absolute;
    z-index: 100;
    margin: 15px 10px 0;
    width: calc(100vw - 20px);
  }

  &__button {
    width: 40px;
    height: 40px;
    background: variables.$black;
    border-radius: 6px;
    cursor: pointer;
    border: 0.5px solid variables.$classicgrey;

    &:active {
      background: variables.$blue;
    }
  }
}

.search {
  width: 250px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
  gap: 10px;
  background-color: variables.$black;
  border-radius: 10px;
  border: 0.5px solid variables.$classicgrey;

  &__field {
    width: 196px;
    border: 0;
    background: variables.$black;
    color: variables.$white;
    font-size: 12px;
    line-height: 14.63px;


    @include media(smallest) {
      width: calc(100vw - 90px - 20px - 54px);
    }

    &:focus {
      outline: none;
    }
  }

  @include media(smallest) {
    width: calc(100vw - 90px );
  }
}
</style>