<template>
  <div class="works">
    <div class="works__row">
      <div
        v-for="project in myProjects"
        :key="project.name"
        class="works__column"
      >
        <div class="works__item">
          <img :src="project.img[0]" :alt="project.name" />
          <div class="works__info">
            <div class="works__top">
              <div class="works__name">{{ project.name }}</div>
              <div class="works__date">{{ project.date }}</div>
            </div>
            <div class="works__bot">
              <div class="works__short_text">{{ project.short_text }}</div>
              <div class="works__btn">Подробнее</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import myProjects from "@/composables/projects.js";
</script>

<style lang="scss" scoped></style>
