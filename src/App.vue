<script setup>
  import DefaultLayout from "@/layouts/DefaultLayout.vue";
  import { useRoute } from "vue-router";
  import { computed } from "vue";

  const route = useRoute();
  const layouts = { DefaultLayout };

  const layout = computed(() => route.meta.layout);
</script>

<template>
  <component :is="layouts[layout]">
    <router-view></router-view>
  </component>
</template>

<style scoped>
body {
  width: 100%;
  height: 100%;
} 
</style>
