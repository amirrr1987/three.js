import {
  BoxGeometry,
  EdgesGeometry,
  Group,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
} from "three";

export const box = new Group();

const boxGeometry = new BoxGeometry(1, 1, 1);
const boxMaterial = new MeshBasicMaterial({ color: 0xffff00 });
const boxObj = new Mesh(boxGeometry, boxMaterial);
const boxEdges = new EdgesGeometry(boxGeometry);
const boxLine = new LineSegments(
  boxEdges,
  new LineBasicMaterial({ color: 0x000 })
);
box.add(boxObj);
box.add(boxLine);
// box.position.set(0, 0, 0);
