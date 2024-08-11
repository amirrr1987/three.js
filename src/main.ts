import { OrbitControls } from "three/examples/jsm/Addons.js";
import "./style.css";
import {
  AxesHelper,
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";

// Size
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Canvas
const canvas = document.querySelector("#app")!;

// Scene
const scene = new Scene();

// Controls
// new OrbitControls()

// Box
const boxGeometry = new BoxGeometry(1, 1, 1);
const boxMaterial = new MeshBasicMaterial({ color: 0xffffff });
const box = new Mesh(boxGeometry, boxMaterial);

// box.position.x = 1;
box.position.set(0, 0, 0);
scene.add(box);

// Scale
// box.scale.set(1,1,.1)
box.rotation.x = 1;
// box.quaternion.y = 2;

// box.position.normalize();


// Axes Helper 
const axesHelper = new AxesHelper(1);
scene.add(axesHelper)






// Camera
const camera = new PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.x = 1;
camera.position.y = 1;
scene.add(camera);

// Renderer
const renderer = new WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
