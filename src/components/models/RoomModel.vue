<script setup>
  import { TresCanvas } from "@tresjs/core";
  import { useGLTF, OrbitControls } from "@tresjs/cientos";

  const path = "/src/assets/scene.gltf";
  const { scene } = await useGLTF(path, { draco: true });
  console.log(scene);
</script>

<template>
  <TresCanvas clear-color="#F78B3D">
    <TresPerspectiveCamera :position="[3, 2, 5]" />
    <OrbitControls />
    <TresMesh>
      <TresBoxGeometry :args="[1, 1, 1]" />
      <TresMeshNormalMaterial />
    </TresMesh>
    <Suspense>
      <primitive v-if="scene" :object="scene" />
    </Suspense>
    <TresDirectionalLight :intensity="2" :position="[3, 3, 3]" />
    <TresAmbientLight :intensity="1" />
  </TresCanvas>
</template>
