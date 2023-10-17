<template>
  <div class="card">
    <button class="arrow" @click="arrow">
        <svg class="arrowsvg" width="26" height="11" viewBox="0 0 26 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="svg" d="M11.9964 9.25569L11.9933 9.25358L1.67942 2.23068C1.49961 2.10824 1.49983 2.04055 1.49999 1.99268L1.5 1.98855L1.49999 1.98442C1.49983 1.93655 1.49961 1.86886 1.67942 1.74642C1.88391 1.60718 2.19607 1.5 2.6861 1.5C3.17613 1.5 3.48829 1.60718 3.69278 1.74642L12.4372 7.70062L13 8.08386L13.5628 7.70062L22.3072 1.74642C22.5117 1.60718 22.8239 1.5 23.3139 1.5C23.8039 1.5 24.1161 1.60718 24.3206 1.74642C24.5004 1.86885 24.5002 1.93654 24.5 1.98442C24.5 1.98582 24.5 1.98719 24.5 1.98855C24.5 1.98991 24.5 1.99129 24.5 1.99268C24.5002 2.04056 24.5004 2.10825 24.3206 2.23068L14.0067 9.25358C13.8814 9.33888 13.7496 9.39714 13.6063 9.4317C13.4287 9.47455 13.2272 9.4991 12.9983 9.5C12.7862 9.49986 12.585 9.47284 12.3922 9.42047C12.1893 9.36535 12.0663 9.30369 11.9964 9.25569Z" stroke-width="2"/>
        </svg>
    </button>
    <div class="buttons">
        <button ref="male" class="button button--blue" @click="choose">Туалет М</button>
        <button ref="female" class="button button--orange" @click="choose">Туалет Ж</button>
        <button ref="coworking" class="button button--purple" @click="choose">Коворкинг</button>
        <button ref="aud" class="button button--lightred" @click="choose">Аудитории</button>
        <button ref="bufet" class="button button--orange" @click="choose">Буфет</button>
        <button ref="bibl" class="button button--blue" @click="choose">Библиотека</button>
        <button ref="exit" class="button button--green" @click="choose">Выход</button>
    </div>
    <div class="inputs">
        <input class="input" type="text" placeholder="Откуда" v-model="b1">
        <svg @click="swap" class="swap" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                    <path d="M32.2071 13.0401C32.5976 12.6496 32.5976 12.0164 32.2071 11.6259L25.8431 5.26194C25.4526 4.87142 24.8194 4.87142 24.4289 5.26194C24.0384 5.65246 24.0384 6.28563 24.4289 6.67615L30.0858 12.333L24.4289 17.9899C24.0384 18.3804 24.0384 19.0136 24.4289 19.4041C24.8194 19.7946 25.4526 19.7946 25.8431 19.4041L32.2071 13.0401ZM6.5 13.333H31.5V11.333H6.5V13.333Z" fill="white"/>
                    <path d="M5.7929 24.9589C5.40238 25.3494 5.40238 25.9826 5.7929 26.3731L12.1569 32.7371C12.5474 33.1276 13.1806 33.1276 13.5711 32.7371C13.9616 32.3466 13.9616 31.7134 13.5711 31.3229L7.91422 25.666L13.5711 20.0092C13.9616 19.6186 13.9616 18.9855 13.5711 18.5949C13.1806 18.2044 12.5474 18.2044 12.1569 18.5949L5.7929 24.9589ZM31.5 24.666L6.50001 24.666V26.666L31.5 26.666V24.666Z" fill="white"/>
        </svg>
        <input class="input" type="text" placeholder="Куда" v-model="b2">
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            b1: "",
            b2: "",
            activeButton: null,
        }
    },
    methods: {
        swap() {
            [this.b1,this.b2] = [this.b2,this.b1]
        },
        choose(event) {
            if (this.activeButton != null && this.activeButton !== event.currentTarget && this.activeButton.classList.contains('active')) {
              this.activeButton.classList.toggle("active");
            }
            this.activeButton = event.currentTarget;
            event.currentTarget.classList.toggle("active");
        },
        arrow(event) {
            event.currentTarget.classList.toggle("click");
            this.$emit('toggleCard');
        },
    },
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/abstract/variables";
@use "~/assets/scss/abstract/mixins" as *;

.card {
    //width: 360px;
    width: 100vw;
    height: 160px;
    border-radius: 20px 20px 0 0;
    background-color: variables.$black;
    display: flex;
    flex-direction: column;
}
.svg {
        fill: #797979;
        stroke:#797979;
        transition: all 0.25s ease-in-out;
}
.arrow {
    background-color: variables.$black;
    border-radius: 20px 20px 0 0;
    border-style: none;
    padding: 3px 0 2px;
    &.click {
        .svg{
        fill: white;
        stroke:white;
        transform-origin: 50% 50%;
        transform: scaleY(-1);
        }
    }
}

::-webkit-scrollbar { display: none; }

.buttons {
    display: flex;
    overflow-x: scroll;
    gap: 5px;
    padding: 0 10px 0 10px;
    margin: 10px 0 10px;
}
.button {
    min-width: 122px;
    min-height: 42px;
    border-radius: 10px;
    background-color: variables.$black;
    color: #EAEAEA;
    border: 2px solid;

    &--blue{
        border-color: variables.$blue;
        &.active{
            background-color: variables.$blue;
        }
    }
    &--orange{
        border-color: variables.$orange;
        &.active{
            background-color: variables.$orange;
        }
    }
    &--purple{
        border-color: variables.$purple;
        &.active{
            background-color: variables.$purple;
        }
    }
    &--lightred{
        border-color: variables.$lightred;
        &.active{
            background-color: variables.$lightred;
        }
    }
    &--orange{
        border-color: variables.$orange;
        &.active{
            background-color: variables.$orange;
        }
    }
    &--blue{
        border-color: variables.$blue;
        &.active{
            background-color: variables.$blue;
        }
    }
    &--green{
        border-color: variables.$green;
        &.active{
            background-color: variables.$green;
        }
    }
}

.active {
    font-weight: bold;
    color: white;
}

.inputs{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
.input {
    box-sizing: border-box;
    width: 140px;
    height: 60px;
    background-color: variables.$black;
    //border: 0.5px solid variables.$white;
  border: 0.5px solid variables.$classicgrey;
  border-radius: 10px;
    padding: 21px;
    //border-style: none;
    color: white;

    &::placeholder{
        color: white;
    }

    &:focus {
        outline:none ;
    }
}
</style>