import React, { useEffect, useRef } from "react";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import coolBeansModel from "../assets/CoolBeans.glb";
// import shapeModel from "../assets/shape.glb";

export default function HardwareAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {

    // Set up the scene and camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.5,
      500
    );
    camera.position.z = 2;

    // Set up the renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setClearColor(0x000000, 0);  // Make it transparent
    renderer.setSize(200, 200);

    // Add the model to the scene
    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);

    // Add custom model to the scene
    const loader = new GLTFLoader();
    loader.load(coolBeansModel, function (glb) {
      glb.scene.traverse(function (node) {
        if (node.isMesh) {
          node.material = new THREE.MeshBasicMaterial({ color: 0x7fff00, wireframe: false });
        }
      });

      scene.add(glb.scene);
    });

    // Enable orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;  // Disable zooming
    controls.autoRotate = true;  // Enable automatic rotation

    // Animate its rotation
    const animate = function () {
      controls.update();  // Update the controls before re-rendering the scene
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} />;
}
