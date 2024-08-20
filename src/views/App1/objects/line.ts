import {
  BoxGeometry,
  EdgesGeometry,
  LineBasicMaterial,
  LineSegments,
} from "three";

const geometry = new BoxGeometry(100, 100, 100);
const edges = new EdgesGeometry(geometry);
export const line = new LineSegments(
  edges,
  new LineBasicMaterial({ color: 0xf00fff })
);
line.position.y = 0;
