import { WebGLRenderer } from 'three'

const canvas = document.querySelector('#app')!

export const renderer = new WebGLRenderer({
  antialias: true
})
renderer.setSize(window.innerWidth, window.innerHeight)