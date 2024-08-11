import "./style.css";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { Scene } from "three";
import { camera } from "./objects/camera";
import { renderer } from "./objects/renderer";
import { home } from "./objects/home";
import { line } from "./objects/line";
import { axesHelper } from "./objects/axesHelper";

// Scene
const scene = new Scene();
scene.add(home);
scene.add(line)
scene.add(axesHelper);

renderer.render(scene, camera);

new OrbitControls(camera, renderer.domElement);

const animate = () => {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};
animate();
