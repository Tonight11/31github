<template>
  <div class="projects">
    <ChessIcon class="projects__chess" />
    <div class="container">
      <div class="projects__inner">
        <div ref="projectTitle" class="projects__title title">Проекты</div>
        <div class="projects__main">
          <div class="projects__row">
            <div
              v-for="project in myProjects"
              :key="project.title"
              class="projects__item"
            >
              <div class="projects__info">
                <div class="projects__top">
                  <img
                    v-motion-slide-visible-once-top
                    :delay="200"
                    :src="project.icon"
                    class="projects__icon"
                  />
                  <div
                    v-motion-slide-visible-once-top
                    :delay="200"
                    class="projects__main-text"
                  >
                    {{ project.title }}
                  </div>
                </div>
                <div
                  v-motion-slide-visible-once-top
                  :delay="200"
                  class="projects__text"
                >
                  {{ project.text }}
                </div>
                <div class="projects__tags">
                  <div
                    v-for="tag in project.tags"
                    :key="tag"
                    v-motion-slide-visible-once-top
                    :delay="200"
                    class="projects__tag"
                    :style="{ borderColor: getRandomColor() }"
                  >
                    {{ tag }}
                  </div>
                </div>
                <router-link :to="project.link">Подробнее</router-link>
              </div>
              <div
                v-motion
                :initial="{ opacity: 0, x: 100 }"
                :visibleOnce="{ opacity: 1, x: 0, scale: 1 }"
                :delay="200"
                class="swiper"
              >
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
  import ChessIcon from "@/components/icon/ChessIcon.vue";
  import "vue3-carousel/dist/carousel.css";
  import { Carousel, Slide, Pagination } from "vue3-carousel";
  import myProjects from "@/composables/projects.js";
  import { useAnimationTitle } from "../composables/useAnimateTitle";
  import { ref } from "vue";

  const projectTitle = ref();
  useAnimationTitle(projectTitle);
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
    margin-top: 100px;
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
      font-size: 16px;
      font-weight: 700;
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
      font-size: 18px;
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
