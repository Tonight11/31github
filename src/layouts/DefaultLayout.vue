<template>
  <div class="wrapper">
    <FirstScreen />
    <slot class="content" />
    <TheFooter />
  </div>
</template>

<script setup>
  import FirstScreen from "@/landing/FirstScreen.vue";
  import TheFooter from "@/components/TheFooter.vue";
</script>

<style lang="scss" scoped></style>
