<template>
  <div ref="canvas"></div>
</template>

<script setup lang="ts">
import {
  BoxGeometry,
  PlaneGeometry,
  CircleGeometry,
  ConeGeometry,
  CylinderGeometry,
  RingGeometry,
  TorusGeometry,
  TorusKnotGeometry,
  DodecahedronGeometry,
  MeshBasicMaterial,
  Mesh,
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  DoubleSide,
  Vector3
} from 'three'
import { onMounted, ref, onBeforeUnmount, computed, reactive } from 'vue'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const sizes = reactive({ width: window.innerWidth, height: innerHeight })
const aspect = computed(() => window.innerWidth / window.innerHeight)
const canvas = ref<HTMLDivElement | null>(null)
const scene = new Scene()
const camera = new PerspectiveCamera(75, aspect.value, 1, 1000)
camera.position.set(0, 0, 10)
const renderer = new WebGLRenderer({
  antialias: true
})

const initControls = () => {
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true

  return controls
}

const initBox = () => {
  const geometry = new BoxGeometry(2, 2, 2)
  const material = new MeshBasicMaterial({ color: 'red' })
  const obj = new Mesh(geometry, material)
  return obj
}
const initPlane = () => {
  const geometry = new PlaneGeometry(2, 2, 2)
  const material = new MeshBasicMaterial({ color: 'yellow' })
  const obj = new Mesh(geometry, material)
  obj.position.set(1.5, 1.5, 1.1)
  return obj
}
const initCircle = () => {
  const geometry = new CircleGeometry(1, 200, 20)
  const material = new MeshBasicMaterial({ color: 'pink' })
  const obj = new Mesh(geometry, material)
  obj.position.set(-1, 1.5, 1.1)
  return obj
}
const initCylinder = () => {
  const geometry = new CylinderGeometry(1, 1, 2, 32)
  const material = new MeshBasicMaterial({ color: 0xffff00 })
  const obj = new Mesh(geometry, material)
  obj.position.set(4, 0, 0)
  return obj
}

const initCone = () => {
  const geometry = new ConeGeometry(1, 4, 3, 32)
  const material = new MeshBasicMaterial({ color: 0xf0bf00 })
  const obj = new Mesh(geometry, material)
  obj.position.set(-4, 0, 0)
  return obj
}
const initRing = () => {
  const geometry = new RingGeometry(1, 2, 6)
  const material = new MeshBasicMaterial({ color: 0xffff00, side: DoubleSide })
  const obj = new Mesh(geometry, material)
  obj.position.set(-4, 0, -4)
  return obj
}

const initTorus = () => {
  const geometry = new TorusGeometry(10, 1, 2, 10)
  const material = new MeshBasicMaterial({ color: 0xffff00, side: DoubleSide })
  const obj = new Mesh(geometry, material)
  obj.position.set(14, 3, 4)
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
  scene.add(initPlane())
  scene.add(initCircle())
  scene.add(initCylinder())
  scene.add(initCone())
  scene.add(initRing())
  scene.add(initTorus())
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

const fullScreen = window.document.fullscreenElement
onMounted(() => {
  initApp()
  window.addEventListener('resize', onResize)
  window.addEventListener('dblclick', () => {
    if (!fullScreen) {
      canvas.value?.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  })
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
