import { WebGLRenderer } from "three";

const canvas = document.querySelector("#app")!;

export const renderer = new WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight);
