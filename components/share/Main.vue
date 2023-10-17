<script setup lang="ts">

</script>

<template>
  <main>
    <slot></slot>
  </main>
</template>

<style scoped lang="scss">
@use "~/assets/scss/abstract/variables";
@use "~/assets/scss/abstract/_mixins.scss" as *;
@use "~/assets/scss/main.scss";

.nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  position: absolute;
  top: 25px;
  right: 25px;

  @include media(tablet) {
    display: none;
  }

  &__button {
    margin-left: 10px;
    width: 14px;
    height: 24px;
    padding: 8px 13px;
    background: variables.$black;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:active {
      background: variables.$blue;
    }
  }
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
}

.Home {
  top: 40px;
  margin-left: 32px;
}

.card {
  width: 100px;
  height: 50px;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 20px;
  row-gap: 19px;
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


.active {
  font-weight: bold;
  color: white;
}


.input {
  box-sizing: border-box;
  width: 260px;
  height: 40px;
  background-color: variables.$classicgrey;
  border-radius: 10px;
  padding: 21px;
  color: white;
  border: 0.5px solid #EAEAEA;


  &::placeholder {
    color: white;
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
  align-items: center;
  justify-content: center;
  gap: 10px;
  transform: rotate(90deg);
  margin-top: -91px;
  margin-left: -100px;
  margin-right: -570px;
}

.blocks {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin: 35px auto 0;
  width: 330px;

  &__block {
    width: 330px;
    height: 60px;
    background-color: variables.$backgroung;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    text-decoration: none;
  }

  &__text {
    max-width: 270px;
    color: variables.$white;
    margin: 0 auto;
    text-align: center;
    line-height: 60px;
    font-weight: 500;
    font-size: 16px;
  }
}

.content {
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  width: 650px;
  margin: 135px auto 0;

  @include media(tablet) {
    margin: 0 auto 20px;
  }

  @include media(mobile) {
    display: none;
  }

  &__title {
    color: variables.$white;
    font-weight: 700;
    font-size: 32px;
    text-align: center;
  }

  &__text {
    color: variables.$white;
    font-weight: 500;
    font-size: 24px;
    text-align: center;
  }
}
</style>