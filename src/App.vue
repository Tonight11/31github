<script setup>
  import TheHeader from "./components/TheHeader.vue";
  import TheFooter from "./components/TheFooter.vue";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);

  import { onMounted } from "vue";

  const animateTitle = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".title",
      {
        scrollTrigger: {
          trigger: ".title",
          scrub: true,
          start: "50% top",
          markers: true,
          invalidateOnResize: true,
        },
        opacity: 0,
        y: -250,
        autoAlpha: 0,
      },
      {
        opacity: 1,
        y: 0,
        autoAlpha: 1,
        delay: 1,
        duration: 1,
        ease: "bounce.out",
      },
    );
  };

  onMounted(() => {
    animateTitle();
  });
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
