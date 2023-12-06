<template>
  <div class="wrapper">
    <FirstScreen />
    <div class="content">
      <div class="projects">
        <ChessIcon class="projects__chess" />
        <div class="container">
          <div class="projects__inner">
            <div class="projects__title title">Проекты</div>
          </div>
        </div>
      </div>
    </div>

    <TheFooter />
  </div>
</template>

<script setup>
  import FirstScreen from "@/landing/FirstScreen.vue";
  import TheFooter from "@/components/TheFooter.vue";
  import ChessIcon from "@/components/icon/ChessIcon.vue";
</script>

<style lang="scss" scoped>
  .content {
    margin-top: 100px;
  }

  .projects {
    &__chess {
      margin: 0 auto;
      animation: rotate 3s infinite linear;
    }
    &__inner {
      padding-top: 100px;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(25deg);
    }
    25% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(-25deg);
    }
    75% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(25deg);
    }
  }
</style>
