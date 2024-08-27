<template>
  <div ref="canvas"></div>
</template>

<script setup lang="ts">
import {
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  BufferAttribute,
  BufferGeometry,
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  Clock
} from 'three'
import { onMounted, ref, onBeforeUnmount, computed, reactive } from 'vue'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const sizes = reactive({ width: window.innerWidth, height: innerHeight })
const aspect = computed(() => window.innerWidth / window.innerHeight)
const canvas = ref<HTMLDivElement | null>(null)
const scene = new Scene()
const camera = new PerspectiveCamera(75, aspect.value, 0.1, 1000)
camera.position.set(0, 0, 10)
const renderer = new WebGLRenderer({
  antialias: true
})

const initControls = () => {
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true

  return controls
}

const x = new Clock()
const initBox = () => {
  const geometry = new BufferGeometry()
  const count = 10_000

  const positionArray = new Float32Array(count * 3 * 3)
  for (let i = 0; i < count; i++) {
    positionArray[i] = 0.5 * Math.random()
  }
  const posAttrs = new BufferAttribute(positionArray, 3)

  geometry.setAttribute('position', posAttrs)

  const material = new MeshBasicMaterial({ color: 0xfff111, wireframe: true })
  const obj = new Mesh(geometry, material)
  return obj
}

const animate = (controls: OrbitControls) => {
  requestAnimationFrame(() => animate(controls))
  controls.update()
  renderer.render(scene, camera)
}

const initApp = () => {
  if (!canvas.value) return
  camera.position.z = 5
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  canvas.value.appendChild(renderer.domElement)
  scene.add(initBox())
  const controls = initControls()
  animate(controls)
}
const onResize = () => {
  if (!canvas.value) return
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  camera.aspect = window.innerWidth / window.innerHeight

  camera.updateProjectionMatrix()
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}

onMounted(() => {
  initApp()
  window.addEventListener('resize', onResize)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
})
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
