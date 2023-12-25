<template>
  <div class="works">
    <div class="works__row">
      <div
        v-for="project in myProjects"
        :key="project.title"
        class="works__column"
      >
        <div class="works__item">
          <img :src="project.img[0]" :alt="project.title" />
          <div class="works__top">
            <div class="works__name">{{ project.title }}</div>
          </div>
          <div class="works__short_text">{{ project.short_text }}</div>
          <router-link :to="`works/${project.id}`" class="works__btn">
            Подробнее
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import myProjects from "@/composables/projects.js";
</script>

<style lang="scss" scoped>
  .works {
    max-width: 520px;
    margin: 0 auto;
    &__row {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -10px;
      row-gap: 20px;
    }

    &__column {
      flex: 0 1 50%;
      padding: 0 10px;
    }

    &__item {
      display: flex;
      flex-direction: column;
      height: 100%;

      text-align: center;
      & img {
        width: 100%;
        height: 150px;
        object-fit: cover;

        border-radius: 11px;
        margin-bottom: 10px;
      }
    }

    &__info {
    }

    &__top {
    }

    &__name {
      font-size: 18px;
      font-weight: 700;
      text-transform: uppercase;
    }

    &__date {
    }

    &__bot {
    }

    &__short_text {
      flex: 1;
      margin-bottom: 10px;
    }

    &__btn {
      text-align: right;
      color: hsla(var(--a-primary));
    }
  }
</style>
