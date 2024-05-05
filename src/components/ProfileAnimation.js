import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { AsciiEffect } from "three/examples/jsm/effects/AsciiEffect.js";

import headModel from "../assets/SmilingHead.stl";

export default function ProfileAnimation() {
  const canvasRef = useRef(null);

  let camera, scene, renderer, effect;

  let sphere, plane;

  const start = Date.now();

  const sizes = {
    width: 400,
    height: 400,
  };

  function init() {

    camera = new THREE.PerspectiveCamera( 70, sizes.width / sizes.height, 1, 1000 );
    camera.position.y = 150;
    camera.position.z = 500;

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0, 0, 0 );

    const pointLight1 = new THREE.PointLight( 0xffffff, 3, 0, 0 );
    pointLight1.position.set( 500, 500, 500 );
    scene.add( pointLight1 );

    const pointLight2 = new THREE.PointLight( 0xffffff, 1, 0, 0 );
    pointLight2.position.set( - 500, - 500, - 500 );
    scene.add( pointLight2 );

    sphere = new THREE.Mesh( new THREE.SphereGeometry( 200, 20, 10 ), new THREE.MeshPhongMaterial( { flatShading: true } ) );
    scene.add( sphere );

    // Plane

    plane = new THREE.Mesh( new THREE.PlaneGeometry( 400, 400 ), new THREE.MeshBasicMaterial( { color: 0xe0e0e0 } ) );
    plane.position.y = - 200;
    plane.rotation.x = - Math.PI / 2;
    scene.add( plane );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( sizes.width, sizes.height );

    effect = new AsciiEffect( renderer, ' .:-+*=%@#', { invert: true } );
    effect.setSize( sizes.width, sizes.height );
    effect.domElement.style.color = 'white';
    effect.domElement.style.backgroundColor = 'transparent';

    // Special case: append effect.domElement, instead of renderer.domElement.
    // AsciiEffect creates a custom domElement (a div container) where the ASCII elements are placed.
    while (canvasRef.current.firstChild) {
      canvasRef.current.removeChild(canvasRef.current.firstChild);
    } 
    canvasRef.current.appendChild( effect.domElement );

    // controls = new TrackballControls( camera, effect.domElement );
  }

  function render() {
    const timer = Date.now() - start;

    sphere.position.y = Math.abs( Math.sin( timer * 0.002 ) ) * 150;
    sphere.rotation.x = timer * 0.0003;
    sphere.rotation.z = timer * 0.0002;
    effect.render(scene, camera);
  }

  function animate() {
    requestAnimationFrame(animate);
    render();
  }

  useEffect(() => {
    init();
    animate();
  }, []);

  return <div ref={canvasRef} />;
}
