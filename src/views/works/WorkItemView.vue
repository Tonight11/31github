<template>
  <div class="mx-auto w-full max-w-lg px-4">
    <div class="mb-4 flex items-center gap-2">
      <router-link
        to="/works"
        class="text-blue-400 underline-offset-4 hover:underline dark:text-pink-400"
        >Works</router-link
      >
      <span>></span>
      <h2 class="text-xl font-bold">
        {{ project.title }}
      </h2>
    </div>

    <p class="text-justify indent-4">
      {{ project.text }}
    </p>
    <ul class="m-4 flex flex-col gap-1">
      <li>
        <span
          class="mr-2 rounded bg-emerald-300/30 px-1 py-[2px] text-xs font-bold uppercase text-gray-600 dark:text-emerald-300"
          >Stack</span
        >
        <span>{{ project.stack.join(", ") }}</span>
      </li>
    </ul>
    <img v-for="img in project.img" :key="img" class="mb-2" :src="img" />
  </div>
</template>

<script setup>
  import myProjects from "@/composables/projects.js";
  import { computed } from "vue";

  const props = defineProps(["id"]);

  const project = computed(() =>
    myProjects.find((project) => project.id === +props.id),
  );
</script>

<style lang="scss" scoped></style>
