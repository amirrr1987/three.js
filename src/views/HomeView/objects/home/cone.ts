import {
  ConeGeometry,
  EdgesGeometry,
  Group,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
} from "three";

export const cone = new Group();

cone.rotation.y = 0;
cone.position.y = .75;

const coneGeometry = new ConeGeometry(1, 0.5, 8);
const coneMaterial = new MeshBasicMaterial({ color: 0xffff00 });
const coneObj = new Mesh(coneGeometry, coneMaterial);
cone.add(coneObj);

const coneEdges = new EdgesGeometry(coneGeometry);
const coneLine = new LineSegments(
  coneEdges,
  new LineBasicMaterial({ color: 0x000 })
);
cone.add(coneLine);
