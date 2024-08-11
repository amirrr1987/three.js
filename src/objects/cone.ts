import {
  ConeGeometry,
  EdgesGeometry,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
} from "three";

const coneGeometry = new ConeGeometry(0.7, 1, 4);
const coneMaterial = new MeshBasicMaterial({ color: 0xffff00 });
export const cone = new Mesh(coneGeometry, coneMaterial);
const coneEdges = new EdgesGeometry(coneGeometry);
const coneLine = new LineSegments(
  coneEdges,
  new LineBasicMaterial({ color: 0x000 })
);
// scene.add(coneLine);
cone.rotation.y = 1;
cone.position.y = 1;
coneLine.position.y = 1;
coneLine.rotation.y = 1;
