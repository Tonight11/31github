<template>
  <div class="about">
    <div class="container">
      <div class="about__inner">
        <div class="about__info">
          <div class="about__title title">Обо мне</div>
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

<script setup></script>

<style lang="scss" scoped>
  .about {
    padding-top: 100px;
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
</style>
