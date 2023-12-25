<template>
  <div class="about">
    <BooksIcon class="about__books" />
    <div class="container">
      <div class="about__inner">
        <div class="about__info">
          <div ref="aboutTitle" class="about__title title">Обо мне</div>
          <div class="about__text">
            <span
              >На протяжении последних четырех лет занимаюсь разработкой
              IT-продуктов.
            </span>
            <span
              >Бесконечно люблю Frontend во всех направлениях, нравится
              воссоздавать наикрутещие дизайны, бизнес задачи и не только.
            </span>
            <span
              >Закончил Колледж им. Годовикова в Москве. Работал личным
              наставником в области Frontend.
            </span>
            <span>
              Ценю красоту во всем, катаюсь на скейте, играю в футбол, учусь
              дизайну, залипаю на небо и море.
            </span>
            Нравится Figma, VS Code, Vut, Nuxt, Notion.
          </div>
        </div>
        <div class="about__img">
          <img src="@/assets/me.png" alt="me" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import BooksIcon from "@/components/icon/BooksIcon.vue";
  import { useAnimationTitle } from "../composables/useAnimateTitle";
  import { ref } from "vue";

  const aboutTitle = ref();
  useAnimationTitle(aboutTitle);
</script>

<style lang="scss" scoped>
  .about {
    padding-top: 100px;

    &__books {
      margin: 0 auto;
      animation: move 3s infinite linear;
    }
    &__inner {
      display: flex;
    }

    &__info {
      padding-top: 50px;
    }

    &__title {
      margin-bottom: 20px;
    }

    &__text {
      font-size: 20px;

      & span {
        display: block;
        margin-bottom: 20px;
      }
    }

    &__img {
    }
  }

  @keyframes move {
    0% {
      transform: translate(20px, 0);
    }
    25% {
      transform: translate(20px, -20px);
    }
    50% {
      transform: translate(-20px, -20px);
    }
    75% {
      transform: translate(-20px, 0);
    }
    100% {
      transform: translate(20px, 0);
    }
  }
</style>
