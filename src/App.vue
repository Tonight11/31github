<script setup>
  import TheHeader from "./components/TheHeader.vue";
  import TheFooter from "./components/TheFooter.vue";
  // import DefaultLayout from "@/layouts/DefaultLayout.vue";
  // import WorksLayout from "@/layouts/WorksLayout.vue";
  // import { useRoute } from "vue-router";
  // import { computed } from "vue";

  // const route = useRoute();
  // const layouts = { DefaultLayout, WorksLayout };

  // const layout = computed(() => route.meta.layout);
</script>

<template>
  <TheHeader />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <TheFooter />
</template>

<style scoped>
  .route-enter-from {
    opacity: 0;
    transform: translateX(100px);
  }

  .route-enter-active {
    transition: all 0.5s ease-out;
  }
  .route-leave-to {
    opacity: 0;
    transform: translateX(-100px);
  }

  .route-leave-active {
    transition: all 0.5s ease-out;
  }
</style>
