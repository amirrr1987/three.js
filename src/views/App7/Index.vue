<template>
  <div id="canvasContainer" ref="canvasContainer"></div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import GUI from 'lil-gui'
import gsap from 'gsap'

const gui = new GUI({
  title: 'Amir debug UI',
  autoPlace: true,
  closeFolders: true,
  width: 400,
})
const boxTweak = gui.addFolder('Box')
boxTweak.close()
const debugObj = {
  color: '#ffffff',
  spin: () => {
    gsap.to(box.rotation, {
      y: box.rotation.y + Math.PI * 100,
      x: box.rotation.y + Math.PI * 100,
      duration: 1,
      animation: 'zoomIn'
    })
  },
  subDivision: 2
}
onMounted(() => {
  boxTweak.add(box.position, 'y').min(-5).max(5).step(0.1).name('amir')
  boxTweak.add(box.material, 'wireframe')
  gui.addColor(debugObj, 'color').onChange(() => {
    box.material.color.set(debugObj.color)
  })
  gui.add(debugObj, 'spin')
  gui
    .add(debugObj, 'subDivision')
    .min(1)
    .max(20)
    .step(1)
    .name('sss')
    .onFinishChange(() => {
      box.geometry.dispose()
      box.geometry = new THREE.BoxGeometry(
        1,
        1,
        1,
        debugObj.subDivision,
        debugObj.subDivision,
        debugObj.subDivision
      )
    })
})

const canvasContainer = ref<HTMLDivElement | null>(null)

/**
 * Base
 */
// Scene
const scene = new THREE.Scene()

/**
 * Object
 */

const geometry = new THREE.BoxGeometry(10, 10, 10, 2, 2, 2)
const material = new THREE.MeshBasicMaterial({ color: debugObj.color, wireframe: true })
const box = new THREE.Mesh(geometry, material)
scene.add(box)

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// camera.lookAt(sphere.position);
camera.position.set(0, 0, 20)
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
  antialias: true
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Controls
 */
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true

/**
 * Resize event
 */
const initApp = () => {
  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}

/**
 * Animate
 */
const clock = new THREE.Clock()

const animate = () => {
  const elapsedTime = clock.getElapsedTime()
  // sphere.rotation.y = Math.sin(elapsedTime)
  // sphere.rotation.x = Math.cos(elapsedTime)
  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(animate)
}

onMounted(() => {
  if (canvasContainer.value) {
    canvasContainer.value.appendChild(renderer.domElement)
  }
  animate()
  initApp()
  window.addEventListener('resize', initApp)
})

// Cleanup on component unmount
onBeforeUnmount(() => {
  controls.dispose()
  renderer.dispose()
  window.removeEventListener('resize', initApp)
})
</script>

<style>
/* Optional: Ensure the canvas container takes up the full viewport */
#canvasContainer {
  width: 100vw;
  height: 100vh;
  margin: 0;
  overflow: hidden;
}
</style>
