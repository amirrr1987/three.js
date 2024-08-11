import {
  BoxGeometry,
  EdgesGeometry,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
} from "three";

const boxGeometry = new BoxGeometry(1, 1, 1);
const boxMaterial = new MeshBasicMaterial({ color: 0xffff00 });
export const box = new Mesh(boxGeometry, boxMaterial);
const boxEdges = new EdgesGeometry(boxGeometry);
export const boxLine = new LineSegments(
  boxEdges,
  new LineBasicMaterial({ color: 0x000 })
);

box.position.set(0, 0, 0);
