<script setup>
  import { useGLTF } from "@tresjs/cientos";
  import { useRenderLoop } from "@tresjs/core";

  const { nodes } = await useGLTF(
    "https://raw.githubusercontent.com/Tresjs/assets/main/models/gltf/low-poly/planet.gltf",
  );

  const planet = nodes.Planet;
  planet.traverse((child) => {
    if (child.isMesh) {
      child.receiveShadow = true;
    }
  });

  const { onLoop } = useRenderLoop();

  onLoop(({ delta }) => {
    if (!planet) return;
    planet.rotation.y += delta * 0.04;
    planet.rotation.z += delta * 0.02;
    planet.rotation.x += delta * 0.05;
    planet.updateMatrixWorld();
  });
</script>

<template>
  <primitive :object="planet" :scale="2.25" />
</template>
