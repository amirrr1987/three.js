import { SphereGeometry, MeshBasicMaterial, Mesh } from "three";

const ballGeo = new SphereGeometry(1, 100, 100);
const ballMaterial = new MeshBasicMaterial({
  color: 0xffff00,
});
export const ball = new Mesh(ballGeo, ballMaterial);
