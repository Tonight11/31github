<script setup>
  import { PCFSoftShadowMap, SRGBColorSpace } from "three";
  import { OrbitControls, Stars } from "@tresjs/cientos";
  import { TresCanvas } from "@tresjs/core";

  import Planet from "./PlanetModel.vue";

  const gl = {
    clearColor: "#0f0d0b",
    shadows: true,
    alpha: false,
    outputColorSpace: SRGBColorSpace,
    shadowMapType: PCFSoftShadowMap,
  };
</script>

<template>
  <TresCanvas class="planet-canvas" v-bind="gl">
    <TresPerspectiveCamera
      :position="[0, 1, 5]"
      :fov="75"
      :near="0.1"
      :far="1000"
    />
    <OrbitControls />

    <TresAmbientLight color="#484068" :intensity="1" />
    <Suspense>
      <Planet />
    </Suspense>
    <Stars />
    <TresPointLight
      color="#1BFFEF"
      :position="[0, 0, -8]"
      :intensity="80"
      cast-shadow
    />
    <TresDirectionalLight
      :position="[0, 2, 4]"
      :intensity="3"
      cast-shadow
      :shadow-mapSize-width="2048"
      :shadow-mapSize-height="2048"
    />
  </TresCanvas>
</template>

<style>
  .planet-canvas {
    position: absolute !important;
    left: auto !important;
    right: -25% !important;
  }
</style>
