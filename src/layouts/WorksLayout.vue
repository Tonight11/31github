<template>
  <div class="wrapper">
    <TheHeader />
    <slot class="content" />
    <TheFooter />
  </div>
</template>

<script setup>
  import TheHeader from "@/components/TheHeader.vue";
  import TheFooter from "@/components/TheFooter.vue";
</script>

<style lang="scss" scoped></style>
