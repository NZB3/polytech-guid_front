<script>
import infoData from '~/assets/dictionaries/aud_info.json';

export default {
  props: {
    audNumber: String,
  },
  data() {
    return {
      item: {
        id: 7,
        campus: "АВ",
        corpus: "5",
        floor: "1",
        number: "5105",
        type: "Проектное бюро",
        desc: "Компьютерный класс"
      },
      info: [],
    }
  },
  mounted() {
    this.info = infoData
  },
  watch: {
    audNumber(newVal) {
      this.item = this.info.filter(d => d.number === newVal)[0];
      console.log(this.item);
    }
  }
}
</script>

<template>
  <div class="info">
    <div class="info__item">
      <h2 class="info__heading">{{ item.campus }} {{ item.number }}</h2>
      <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="37" height="37" rx="6" fill="#5F6DEC" />
        <path
          d="M26.75 30.25C25.9375 30.25 25.2083 30.0154 24.5625 29.5462C23.9167 29.0771 23.4688 28.4783 23.2188 27.75H16.75C15.375 27.75 14.1979 27.2604 13.2188 26.2812C12.2396 25.3021 11.75 24.125 11.75 22.75C11.75 21.375 12.2396 20.1979 13.2188 19.2188C14.1979 18.2396 15.375 17.75 16.75 17.75H19.25C19.9375 17.75 20.5262 17.505 21.0163 17.015C21.5063 16.525 21.7508 15.9367 21.75 15.25C21.75 14.5625 21.505 13.9737 21.015 13.4837C20.525 12.9938 19.9367 12.7492 19.25 12.75H12.7812C12.5104 13.4792 12.0571 14.0783 11.4212 14.5475C10.7854 15.0167 10.0617 15.2508 9.25 15.25C8.20833 15.25 7.32292 14.8854 6.59375 14.1562C5.86458 13.4271 5.5 12.5417 5.5 11.5C5.5 10.4583 5.86458 9.57292 6.59375 8.84375C7.32292 8.11458 8.20833 7.75 9.25 7.75C10.0625 7.75 10.7867 7.98458 11.4225 8.45375C12.0583 8.92292 12.5108 9.52167 12.78 10.25H19.25C20.625 10.25 21.8021 10.7396 22.7812 11.7188C23.7604 12.6979 24.25 13.875 24.25 15.25C24.25 16.625 23.7604 17.8021 22.7812 18.7812C21.8021 19.7604 20.625 20.25 19.25 20.25H16.75C16.0625 20.25 15.4738 20.495 14.9837 20.985C14.4937 21.475 14.2492 22.0633 14.25 22.75C14.25 23.4375 14.495 24.0263 14.985 24.5163C15.475 25.0063 16.0633 25.2508 16.75 25.25H23.2188C23.4896 24.5208 23.9429 23.9217 24.5788 23.4525C25.2146 22.9833 25.9383 22.7492 26.75 22.75C27.7917 22.75 28.6771 23.1146 29.4062 23.8438C30.1354 24.5729 30.5 25.4583 30.5 26.5C30.5 27.5417 30.1354 28.4271 29.4062 29.1562C28.6771 29.8854 27.7917 30.25 26.75 30.25ZM9.25 12.75C9.60417 12.75 9.90125 12.63 10.1412 12.39C10.3812 12.15 10.5008 11.8533 10.5 11.5C10.5 11.1458 10.38 10.8488 10.14 10.6088C9.9 10.3688 9.60333 10.2492 9.25 10.25C8.89583 10.25 8.59875 10.37 8.35875 10.61C8.11875 10.85 7.99917 11.1467 8 11.5C8 11.8542 8.12 12.1512 8.36 12.3912C8.6 12.6312 8.89667 12.7508 9.25 12.75Z"
          fill="#EAEAEA" />
      </svg>
    </div>
    <div class="info__item" v-if="item.campus !== ''">
      <p class="info__key">Кампус</p>
      <p class="info__value">{{ item.campus }}</p>
    </div>
    <div class="info__item" v-if="item.corpus !== ''">
      <p class="info__key">Корпус</p>
      <p class="info__value">{{ item.corpus }}</p>
    </div>
    <div class="info__item" v-if="item.floor !== ''">
      <p class="info__key">Этаж</p>
      <p class="info__value">{{ item.floor }}</p>
    </div>
    <div class="info__item" v-if="item.number !== ''">
      <p class="info__key">Номер</p>
      <p class="info__value info__value_no_wrap">{{ item.number }}</p>
    </div>
    <div class="info__item" v-if="item.type !== ''">
      <p class="info__key">Назначение</p>
      <p class="info__value">{{ item.type }}</p>
    </div>
    <div class="info__item" v-if="item.desc !== ''">
      <p class="info__key">Описание</p>
      <p class="info__value">{{ item.desc }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/abstract/variables";
@use "~/assets/scss/abstract/mixins" as *;

.info {
  width:inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
  color: variables.$IOS-theme;

  &__item {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    &:first-child {
      margin-bottom: 5px;
    }
  }

  &__heading {
    font-size: 32px;
    line-height: 39px;
    font-weight: 500;
  }

  &__key {
    font-size: 16px;
    line-height: 19.5px;
  }

  &__value {
    font-size: 16px;
    line-height: 19.5px;
    text-align: right;
    padding: 10px 15px;
    border: 1px solid variables.$blue;
    border-radius: 10px;
    font-weight: 500;
    max-width: 185px;
    width: min-content;

    &_no_wrap {
      white-space: nowrap;
    }
  }

  &__image {
    border-radius: 11px;
  }
}
</style>