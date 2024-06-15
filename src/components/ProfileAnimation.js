import React, { useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { AsciiEffect } from "three/examples/jsm/effects/AsciiEffect.js";

import headModel from "../content/stl/SmilingHead.stl";

export default function ProfileAnimation() {
  const divRef = useRef(null);
  const [sizes, setSizes] = useState({ width: 400, height: 400 });

  let camera, scene, renderer, effect, controls, loader;

  const headMesh = new THREE.Mesh();

  const start = Date.now();

  function init() {
    camera = new THREE.PerspectiveCamera(
      70,
      sizes.width / sizes.height,
      1,
      1000
    );
    camera.position.set(0, 0, 400);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0, 0, 0);

    const pointLight1 = new THREE.PointLight(0xffffff, 1, 0, 0);
    pointLight1.position.set(200, 300, 800);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 1, 0, 0);
    pointLight2.position.set(100, 0, -500);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xffffff, 1, 0, 0);
    pointLight3.position.set(-200, 0, -200);
    scene.add(pointLight3);

    // Load STL model
    loader = new STLLoader();
    loader.load(headModel, function (geometry) {
      headMesh.geometry = geometry;
      headMesh.material = new THREE.MeshPhongMaterial({ flatShading: true });

      headMesh.geometry.center();
      headMesh.rotation.set(-Math.PI / 2, 0, Math.PI);
      headMesh.scale.set(20, 20, 20);

      // Bounding box
      headMesh.geometry.computeBoundingBox();
      var bbox = headMesh.geometry.boundingBox;

      scene.add(headMesh);
    });

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(sizes.width * 4, sizes.height * 4);

    effect = new AsciiEffect(renderer, " .:-+*=%@#", { invert: true });
    effect.setSize(sizes.width, sizes.height);
    effect.domElement.style.color = "white";
    effect.domElement.style.backgroundColor = "transparent";

    while (divRef.current.firstChild) {
      divRef.current.removeChild(divRef.current.firstChild);
    }

    divRef.current.appendChild(effect.domElement);

    controls = new OrbitControls(camera, effect.domElement);
  }

  function render() {
    const timer = Date.now() - start;

    headMesh.rotateZ(0.01);

    controls.update();

    effect.render(scene, camera);
  }

  function animate() {
    requestAnimationFrame(animate);
    render();
  }

  useLayoutEffect(() => {
    const parentDiv = document.getElementById("profile-animation-canvas");
    if (parentDiv) {
      setSizes({
        width: parentDiv.offsetWidth,
        height: parentDiv.offsetHeight,
      });
    }

    init();

    animate();
  }, []);

  return <div id="profile-animation-canvas" ref={divRef} />;
}
