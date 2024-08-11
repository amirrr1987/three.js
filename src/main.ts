import { OrbitControls } from "three/examples/jsm/Addons.js";
import "./style.css";
import {
  AxesHelper,
  BoxGeometry,
  EdgesGeometry,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  Vector3,
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
const boxMaterial = new MeshBasicMaterial({ color: 0xffaa });
const box = new Mesh(boxGeometry, boxMaterial);
const boxEdges = new EdgesGeometry(boxGeometry);
const boxLine = new LineSegments(
  boxEdges,
  new LineBasicMaterial({ color: 0xf00fff })
);
scene.add(boxLine);


const geometry = new BoxGeometry(100, 100, 100);
const edges = new EdgesGeometry(geometry);
const line = new LineSegments(
  edges,
  new LineBasicMaterial({ color: 0xf00fff })
);
scene.add(line);


// box.position.x = 1;
box.position.set(0, 0, 0);
scene.add(box);

// Scale
// box.scale.set(1,1,.1)

// Rotation
// box.rotation.x = Math.PI * 0.25;
// box.rotation.y = Math.PI * 0.25;
// box.rotation.z = Math.PI * 2.25;
// box.rotation.reorder("YXZ");

// box.quaternion.y = -1;

// box.quaternion.y = 2;

// box.position.normalize();

// Axes Helper
const axesHelper = new AxesHelper(50);
scene.add(axesHelper);

// Camera
const camera = new PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// camera.position.x = 1;
// camera.position.y = 1;
scene.add(camera);

camera.lookAt(box.position);

// Renderer
const renderer = new WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

new OrbitControls(camera, renderer.domElement);
const animate = () => {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};
animate();
