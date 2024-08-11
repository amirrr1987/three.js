import { PerspectiveCamera } from "three";

export const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight
);
camera.position.z = 3;
