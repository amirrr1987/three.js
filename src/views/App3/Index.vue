<template>
  <div ref="canvas"></div>
</template>

<script setup lang="ts">
import { BoxGeometry, MeshBasicMaterial, Mesh, Scene, WebGLRenderer, PerspectiveCamera } from 'three';
import { onMounted, ref, onBeforeUnmount } from 'vue';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const canvas = ref<HTMLDivElement | null>(null);
const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1, 1000 // Adjusted near and far plane values
);
const renderer = new WebGLRenderer({
  antialias: true
});

const initControls = () => {
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  // controls.dampingFactor = true;
  // controls.enableZoom = true;

  return controls;
}

const initBox = () => {
  const boxGeometry = new BoxGeometry(2,2,2);
  const boxMaterial = new MeshBasicMaterial({ color: 'red' });
  const box = new Mesh(boxGeometry, boxMaterial);
  scene.add(box);
}

const animate = (controls: OrbitControls) => {
  requestAnimationFrame(() => animate(controls));
  controls.update(); // Only required if controls.enableDamping = true or controls.autoRotate = true
  renderer.render(scene, camera);
}

const initApp = () => {
  if (!canvas.value) return;

  camera.position.z = 5;
  renderer.setSize(window.innerWidth, window.innerHeight);
  canvas.value.appendChild(renderer.domElement);

  initBox();
  const controls = initControls();

  animate(controls);
}
const onResize = () => {
  if (!canvas.value) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
onMounted(() => {
  initApp();
  window.addEventListener('resize', onResize);

});
onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize);
});
</script>

<style>
/* Optional: Ensure the canvas container takes up the full viewport */
div {
  width: 100vw;
  height: 100vh;
  margin: 0;
  overflow: hidden;
}
</style>
