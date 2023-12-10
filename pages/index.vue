<script>
import Main from "~/components/share/Main.vue"
import Sidebar from "~/components/share/Sidebar.vue";
import Accordion from "~/components/Accordion.vue";
export default {
  components: {
    Sidebar,
    Main,
    Accordion,
  },
}
</script>

<template>
  <div class="container">
    <Sidebar class="sidebar">
      <Accordion/>
    </Sidebar>
    <Main>
      <div class="content">
        <p class="content__title">Приветствуем тебя!</p>
        <p class="content__text">Это сайт-помощник в навигации <br> по Московскому Политеху </p>
        <p class="content__text">Тут ты найдешь дорогу к любому месту <br> в университете</p>
        <p class="content__text">Чтобы открыть карту кампуса — выбери <br> его адрес слева или введи <br> номер аудитории в
          строке поиска</p>
        <p class="content__text">Мы, команда студентов, постараемся помочь тебе <br> не потеряться!</p>
      </div>
    </Main>
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/abstract/variables";
@use "~/assets/scss/abstract/_mixins.scss" as *;

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