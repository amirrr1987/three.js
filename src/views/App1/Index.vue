<template>
  <div ref="canvas"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from 'vue'
import { Scene, Clock } from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'
import gsap from 'gsap'
import { renderer } from './objects/renderer'
import { camera } from './objects/camera'
import { home } from './objects/home'
import { line } from './objects/line'
import { axesHelper } from './objects/axesHelper'

const canvas = ref<HTMLDivElement | null>(null)

const appInit = () => {
  const scene = new Scene()
  scene.add(home)
  scene.add(line)
  scene.add(axesHelper)

  // Attach the renderer to the canvas
  renderer.setSize(window.innerWidth, window.innerHeight)
  canvas.value?.appendChild(renderer.domElement)

  // Set up OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement)

  // GSAP animations
  gsap.to(home.position, { x: 3 })
  gsap.to(home.position, { x: -3 })

  // Animation loop
  const clock = new Clock()

  const animate = () => {
    const elapsedTime = clock.getElapsedTime()

    // Update camera position based on elapsed time
    camera.position.y = Math.sin(elapsedTime) * 2
    camera.position.x = Math.cos(elapsedTime)
    camera.position.z = Math.cos(elapsedTime) * Math.sin(elapsedTime) * 2
    camera.lookAt(home.position)

    // Render the scene
    renderer.render(scene, camera)

    requestAnimationFrame(animate)
  }
  animate()

  // Handle cleanup
  onBeforeUnmount(() => {
    controls.dispose()
    renderer.dispose()
  })
}
onMounted(() => appInit())
window.addEventListener('resize',()=> appInit())
</script>

<style scoped>
/* Add your styles if needed */
</style>
