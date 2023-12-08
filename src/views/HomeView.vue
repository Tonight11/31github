<template>
  <main class="content">
    <ProjectScreen />
    <AboutScreen />
  </main>
</template>

<script setup>
  import ProjectScreen from "@/landing/ProjectScreen.vue";
  import AboutScreen from "@/landing/AboutScreen.vue";
</script>

<style lang="scss">
  .content {
    margin-top: 100px;
  }
</style>
