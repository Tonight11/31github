<template>
  <div class="projects">
    <ChessIcon class="projects__chess" />
    <div class="container">
      <div class="projects__inner">
        <div class="projects__title title">Проекты</div>
        <div class="projects__main">
          <div class="projects__row">
            <div
              v-for="project in myProjects"
              :key="project.title"
              class="projects__item"
            >
              <div class="projects__info">
                <div class="projects__top">
                  <img :src="project.icon" class="projects__icon" />
                  <div class="projects__main-text">{{ project.title }}</div>
                </div>
                <div class="projects__text">
                  {{ project.text }}
                </div>
                <div class="projects__tags">
                  <div
                    v-for="tag in project.tags"
                    :key="tag"
                    class="projects__tag"
                    :style="{ borderColor: getRandomColor() }"
                  >
                    {{ tag }}
                  </div>
                </div>
                <router-link :to="project.link">Подробнее</router-link>
              </div>
              <div class="swiper">
                <Carousel :autoplay="2000" :wrap-around="true">
                  <Slide v-for="slide in project.img" :key="slide">
                    <img class="carousel__item" :src="slide" alt="" />
                  </Slide>

                  <template #addons>
                    <Pagination />
                  </template>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import ChessIcon from "@/components/icon/ChessIcon.vue";
  import "vue3-carousel/dist/carousel.css";
  import { Carousel, Slide, Pagination } from "vue3-carousel";

  const myProjects = ref([
    {
      icon: "src/assets/project/bimlib-logo.svg",
      title: "BimLib",
      date: "2023-настоящее время",
      text: "Профессиональная площадка для производителей, заказчиков, инженеров-проектировщиков, сметчиков и иных профессионалов стройиндустрии. Цифровые каталоги, AR- и BIM-модели, сервис мониторинга проектных потребностей, отраслевые новости, статьи и обсуждения.",
      tags: ["Frontend", "Middle"],
      link: "/project/1",
      img: [
        "src/assets/project/bm-1.png",
        "src/assets/project/bm-2.png",
        "src/assets/project/bm-3.png",
      ],
    },
    {
      icon: "src/assets/project/market-logo.svg",
      title: "Market-Data",
      date: "2021-2022",
      text: "Высокоточный сервис внутренней аналитики, который поможет вам продавать на Wildberries. С помощью этого сервиса вы можете отслеживать важные показатели, такие как продажи, выручка, коэффициент конверсии и поведение клиентов, чтобы принимать обоснованные решения относительно списка ваших товаров и маркетинговых стратегий.",
      tags: ["Frontend", "Junior", "Co-Designer"],
      link: "/project/2",
      img: [
        "src/assets/project/md3.png",
        "src/assets/project/md-1.jpg",
        "src/assets/project/md-2.jpg",
      ],
    },

    {
      icon: "src/assets/project/msk-logo.png",
      title: "MskVolley",
      date: "2021-2022",
      text: "Платформа принимает заявки от команд на старт чемпионата, координирует проведение матчей и вводит результаты игр.  Это исключает рутину и делает процесс простым и быстрым.  А команды и организаторы находят время, чтобы насладиться игрой!",
      tags: ["Frontend", "Junior"],
      link: "/project/3",
      img: [
        "src/assets/project/msk-1.png",
        "src/assets/project/msk-2.png",
        "src/assets/project/msk-3.png",
      ],
    },
  ]);

  const getRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };
</script>

<style lang="scss">
  .swiper {
    width: 50%;
  }
  .carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 11px;
    border: 3px solid hsla(var(--a-primary));
    object-fit: cover;
  }

  .carousel__slide {
    padding: 10px;
  }

  .carousel__pagination-button {
    &::after {
      background-color: hsla(var(--a-success));
    }
    &:hover {
      &::after {
        background-color: hsla(var(--a-info));
      }
    }
  }

  .carousel__pagination-button--active {
    &::after {
      background-color: hsla(var(--a-primary));
    }
  }

  .projects {
    &__chess {
      margin: 0 auto;
      animation: rotate 3s infinite linear;
    }
    &__inner {
      padding-top: 100px;
    }

    &__title {
    }

    &__main {
    }

    &__row {
      display: flex;
      flex-direction: column;
      gap: 75px;
    }

    &__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 50px;

      &:nth-child(2n) {
        flex-direction: row-reverse;
      }
    }

    &__info {
      width: 50%;
      flex: 0 1 50%;
    }

    &__main-text {
      font-size: 18px;
    }

    &__top {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 20px;
    }

    &__icon {
    }

    &__text {
      // max-width: 400px;
      margin-bottom: 20px;
      font-size: 22px;
    }

    &__tags {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 20px;
    }

    &__tag {
      border: 1px solid #ccc;
      border-radius: 11px;
      padding: 11px;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(25deg);
    }
    25% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(-25deg);
    }
    75% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(25deg);
    }
  }
</style>
