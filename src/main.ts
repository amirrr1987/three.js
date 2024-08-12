import "./style.css";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { Clock, Scene } from "three";
import { camera } from "./objects/camera";
import { renderer } from "./objects/renderer";
import { home } from "./objects/home";
import { line } from "./objects/line";
import { axesHelper } from "./objects/axesHelper";
import gsap from "gsap";
// Scene
const scene = new Scene();
scene.add(home);
scene.add(line);
scene.add(axesHelper);

renderer.render(scene, camera);

new OrbitControls(camera, renderer.domElement);

gsap.to(home.position, { x: 3 });
gsap.to(home.position, { x: -3 });
const clock = new Clock();

const animate = () => {
  const elapsedTime = clock.getElapsedTime();
  console.log(elapsedTime);
  renderer.render(scene, camera);
  camera.position.y = Math.sin(elapsedTime) * 2;
  camera.position.x = Math.cos(elapsedTime);
  camera.position.z = Math.cos(elapsedTime) * Math.sin(elapsedTime) * 2;
  camera.lookAt(home.position);
  // home.position.z = Math.cos(elapsedTime);

  requestAnimationFrame(animate);
};
animate();
