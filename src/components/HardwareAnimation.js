// import React from "react";

// import * as THREE from 'three';
// import Shape from '../assets/shape.glb';


// export default function HardwareAnimation() {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);

//     // White background
//     scene.background = new THREE.Color(0xffffff);

//     // Add lighting
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
//     directionalLight.position.set(1, 1, 1).normalize();
//     scene.add(directionalLight);

//     // Load GLB model
//     const loader = new THREE.GLTFLoader();
//     loader.load(Shape, function (gltf) {
//         const model = gltf.scene;
//         scene.add(model);

//         // Scale and position the model
//         model.scale.set(0.01, 0.01, 0.01);
//         model.position.set(0, 0, 0);

//         // Animation loop
//         function animate() {
//             requestAnimationFrame(animate);
//             model.rotation.y += 0.01; // Rotate the model
//             renderer.render(scene, camera);
//         }
//         animate();
//     });

//     // Set camera position
//     camera.position.z = 5;
// }