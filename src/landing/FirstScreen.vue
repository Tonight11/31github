<template>
  <div>
    <TheHeader />
    <div class="first-screen">
      <Suspense>
        <RoomModel />
      </Suspense>
    </div>
  </div>
</template>

<script setup>
  import TheHeader from "@/components/TheHeader.vue";
  import RoomModel from "@/components/models/RoomModel.vue";
</script>

<style lang="scss" scoped>
  .first-screen {
    height: 600px;
    width: 600px;
  }
</style>
