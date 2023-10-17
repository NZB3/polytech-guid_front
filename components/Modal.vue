<template>
    <div class="cover">
        <div class="container modal">
            <button class="modal__close"  @click="$emit('modal')">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.271767 10.3446C-0.0881408 10.7045 -0.0954859 11.3435 0.279112 11.7181C0.661056 12.0927 1.30008 12.0854 1.65264 11.7328L6.00092 7.38454L10.3419 11.7255C10.7091 12.0927 11.3408 12.0927 11.7154 11.7181C12.09 11.3362 12.09 10.7119 11.7227 10.3446L7.38179 6.00367L11.7227 1.6554C12.09 1.28815 12.0973 0.656471 11.7154 0.281873C11.3408 -0.0927245 10.7091 -0.0927245 10.3419 0.274528L6.00092 4.61546L1.65264 0.274528C1.30008 -0.0853795 0.653711 -0.10007 0.279112 0.281873C-0.0954859 0.656471 -0.0881408 1.30284 0.271767 1.6554L4.6127 6.00367L0.271767 10.3446Z" fill="#EAEAEA"/>
                </svg>
            </button>
            <div class="modal__main">
                <p class="modal__text_strong">КАРТА КОРПУСОВ</p>
                <p class="modal__text_medium">МОСКОВСКОГО ПОЛИТЕХА</p>
                <p class="modal__text">Разработано студентами с любовью и заботой о Вас </p>
                <ul class="modal__list">
                  <li class="modal__text">Еще какая-то важная или не очень инфа. </li>
                  <li class="modal__text">Возможно какие-то контактные данные</li>
                  <li class="modal__text">А может какая-то инфа о приложении</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/abstract/variables";
@use "~/assets/scss/abstract/mixins" as *;

.cover{

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: variables.$darkgrey;
    z-index: 10;
}

.modal{
    background-color: variables.$IOS-theme;
    width: 304px;
    height: 90vh;
    margin: 5vh auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 11px 12px 0 15px;
    border-radius: 12px;

    &__close{
        align-self: flex-end;
        width: 30px;
        height: 30px;
        border-radius: 100%;
        border: none;
        background: variables.$classicgrey;
        justify-content: center;
        padding: 2.1px 0 0;
        cursor: pointer;
        margin-bottom: 71px;
        &:active{
            background: variables.$backgroung;
        }
    }

    &__text{
        font-weight: 400;
        font-size: 14px;
        line-height: 17.07px;
        &_medium{
            font-weight: 700;
        }
        &_strong{
            font-weight: 700;
            font-size: 24px;
            line-height: 29.26px;
        }
    }

    &__main{
        display: flex;
        flex-direction: column;
        row-gap: 3px;
    }
}
</style>