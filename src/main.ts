import { OrbitControls } from "three/examples/jsm/Addons.js";
import "./style.css";
import {
  AxesHelper,
  BoxGeometry,
  ConeGeometry,
  CylinderGeometry,
  EdgesGeometry,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
  PerspectiveCamera,
  Scene,
  SphereGeometry,
  Texture,
  Vector3,
  WebGLRenderer,
} from "three";
import { ball } from "./objects/ball";
import { box, boxLine } from "./objects/box";
import { camera } from "./objects/camera";
import { renderer } from "./objects/renderer";
import { line } from "./objects/line";
import { axesHelper } from "./objects/axesHelper";

// Scene
const scene = new Scene();
scene.add(ball);
scene.add(boxLine);
scene.add(box);
scene.add(camera);
scene.add(line);
scene.add(axesHelper);

camera.lookAt(box.position);

renderer.render(scene, camera);

new OrbitControls(camera, renderer.domElement);
const animate = () => {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};
animate();
