<template>
  <div class="flex-col flex h100vh">
    <TheHeader />
    <div class="container">
      <div class="first-screen">
        <div class="first-screen__info">
          <div class="first-screen__title">Привет, 👋</div>
          <div class="first-screen__subtitle">
            Я <span>Баястан</span>, сын Баястана, <br />
            фронтенд-разработчик и simple guy
          </div>
        </div>
        <Suspense>
          <RoomModel />
        </Suspense>
      </div>
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
    position: relative;
    display: flex;
    align-items: center;

    &__info {
      position: relative;
      z-index: 1;
      color: white;
    }

    &__title {
      font-size: 64px;
      margin-bottom: 20px;
    }

    &__subtitle {
      font-size: 32px;

      & span {
        color: hsl(var(--a-primary));
      }
    }
  }
</style>
