<template>
  <div class="flex-col flex h100vh">
    <div class="container">
      <div class="first-screen">
        <div class="first-screen__info">
          <div class="first-screen__title animate">Привет, 👋</div>
          <div class="first-screen__subtitle animate">
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
  import RoomModel from "@/components/models/RoomModel.vue";
  import gsap from "gsap";
  import { onMounted } from "vue";

  const animateInfo = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".animate",
      {
        opacity: 0,
        y: 100,
        autoAlpha: 0,
        stagger: {
          each: 0.2,
          from: "top",
          ease: "power2.inOut",
        },
      },
      {
        opacity: 1,
        y: 0,
        autoAlpha: 1,
        delay: 1.5,
        duration: 1,
        ease: "power4.out",
        stagger: {
          each: 0.2,
          from: "top",
          ease: "power2.inOut",
        },
      },
    );
  };

  onMounted(() => {
    animateInfo();
  });
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
      font-size: 48px;
      margin-bottom: 20px;
    }

    &__subtitle {
      font-size: calc(48px / 1.618);

      & span {
        color: hsl(var(--a-primary));
      }
    }
  }
</style>
