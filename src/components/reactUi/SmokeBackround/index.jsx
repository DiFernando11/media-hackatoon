import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import useStoreApp from "../hooks/useStoreApp";
import { modelByTopic } from "../../../utils";

function SmokeBackground({ backgroundColor }) {
  const mountRef = useRef(null);
  const requestRef = useRef(null);
  const smokeParticles = useRef([]);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const isMounted = useRef(false);

  const { getTopicHalloween } = useStoreApp();

  useEffect(() => {
    let clock = new THREE.Clock();
    const currentTopic = modelByTopic(getTopicHalloween);
    function init() {
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      rendererRef.current = renderer;
      mountRef.current.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      sceneRef.current = scene;

      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        10000
      );
      camera.position.z = 1000;
      cameraRef.current = camera;

      let light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(-1, 0, 1);
      scene.add(light);

      let smokeTexture = new THREE.TextureLoader().load(
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png"
      );
      let smokeMaterial = new THREE.MeshLambertMaterial({
        color: new THREE.Color(currentTopic.bgColor.secondary),
        map: smokeTexture,
        transparent: true,
      });
      let smokeGeo = new THREE.PlaneGeometry(300, 300);

      for (let p = 0; p < 150; p++) {
        let particle = new THREE.Mesh(smokeGeo, smokeMaterial);
        particle.position.set(
          Math.random() * 500 - 250,
          Math.random() * 500 - 250,
          Math.random() * 1000 - 100
        );
        particle.rotation.z = Math.random() * 360;
        scene.add(particle);
        smokeParticles.current.push(particle);
      }
    }

    function animate() {
      if (!isMounted.current) return;

      requestRef.current = requestAnimationFrame(animate);
      let delta = clock.getDelta();
      evolveSmoke(delta);
      render();
    }

    function evolveSmoke(delta) {
      smokeParticles.current.forEach((particle) => {
        particle.rotation.z += delta * 0.2;
      });
    }

    function render() {
      const scene = sceneRef.current;
      const camera = cameraRef.current;
      const renderer = rendererRef.current;

      if (!scene || !camera || !renderer) return;

      if (!scene.background || scene.background.getStyle() !== backgroundColor) {
        scene.background = new THREE.Color(currentTopic.bgColor.primary);
      }
      renderer.render(scene, camera);
    }

    init();
    isMounted.current = true;
    animate();

    const handleResize = () => {
      const camera = cameraRef.current;
      const renderer = rendererRef.current;

      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      isMounted.current = false;
      window.removeEventListener("resize", handleResize);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      if (rendererRef.current && mountRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
      smokeParticles.current.forEach((particle) => {
        particle.geometry.dispose();
        particle.material.dispose();
      });
      smokeParticles.current = [];
    };
  }, [getTopicHalloween]);

  return <div ref={mountRef} className="fixed inset-0 pointer-events-none -z-10" />;
}

export default SmokeBackground;