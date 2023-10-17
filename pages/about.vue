<template>
  <Sidebar></Sidebar>
  <Main>
    <div class="about">
      <h1 class="about__heading">Дополнительная информация</h1>
      <div class="about__small-section">
        <div class="about__text-block">
          <h2 class="about__title">Карта корпусов Московского политеха</h2>
          <p class="about__text">Добро пожаловать на сайт-путеводитель по корпусам Московского политеха!</p>
          <p class="about__text">Теперь вы точно не заблудитесь в корпусе🥳</p>
        </div>



        <img src="~/assets/images/polytech1.png" alt="" class="about__image">
      </div>
      <div class="about__big-section">
        <div class="about__text-block">
          <h3 class="about__subheading">О сайте</h3>
          <p class="about__text about__big-text">
            Здесь вы найдете полезную информацию о корпусах университета и расположении аудиторий. Мы надеемся, что этот
            сайт поможет вам быстро и легко ориентироваться на территории и сделает вашу жизнь в нем более комфортной.</p>
          <p class="about__text about__big-text">Не забудьте посоветовать наш сайт одногруппникам, так вы не только
            поддержите нашу работу, но и облегчите жизнь
            своим друзьям!</p>
          <p class="about__text about__big-text">
            Желаем вам приятного пользования💌</p>
        </div>
        <img src="~/assets/images/polytech2.png" alt="" class="about__image">
      </div>
    </div>
  </Main>
</template>

<script>
import Sidebar from "~/components/share/Sidebar.vue";
import Main from "~/components/share/Main.vue";
export default {
  components: {
    Sidebar,
    Main,
  },
  data() {
    return {}
  },
  methods: {
    goToPrev() {
      this.$router.go(-1);
    }
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/abstract/variables" as *;
@use "../assets/scss/abstract/mixins" as *;

.about {
  width: 960px;
  margin: 0 auto;

  &__heading {
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    color: $white;
    margin-top: 60px;
  }

  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    width: 355px;
    text-transform: uppercase;
    color: $IOS-theme;
  }

  &__text {
    color: $IOS-theme;
    font-weight: 400;
    font-size: 16px;
    margin-top: 15px;

    & li {
      list-style-type: disc;
    }
  }

  &__list {
    padding-left: 20px;
  }

  &__small-section {
    width: 890px;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
  }

  &__big-section {
    width: 960px;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
  }

  &__image {
    width: 300px;
    height: 200px;
    border-radius: 10px;
  }

  &__subheading {
    color: $IOS-theme;
    font-weight: 500;
    font-size: 24px;
  }

  &__big-text {
    width: 590px;
    line-height: 20px;
  }

  &__button {
    margin-top: 50px;
    padding: 10px 15px;
    max-width: fit-content;
    border: 2px solid $blue;
    border-radius: 10px;
    background-color: transparent;
    color: $IOS-theme;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    display: block;
    text-decoration: none;
  }
}
</style>  