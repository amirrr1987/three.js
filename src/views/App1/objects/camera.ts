import { PerspectiveCamera } from "three";

export const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.5,100
);
camera.position.z = 3;
camera.position.y = 3;
camera.position.x = 3;
