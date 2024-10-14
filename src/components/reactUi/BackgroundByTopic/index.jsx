import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import useStoreApp from "../hooks/useStoreApp";
import { modelByTopic } from "../../../utils";

const BackgroundByTopic = () => {
  const mountRef = useRef(null);
  const { getTopicHalloween } = useStoreApp();

  useEffect(() => {
    const existingRenderer = mountRef.current.children[0];
    if (existingRenderer) {
      mountRef.current.removeChild(existingRenderer);
    }
   const currentTopic = modelByTopic(getTopicHalloween)

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    camera.position.z = 5;

    const textureLoader = new THREE.TextureLoader();
    const texturePath = currentTopic.bgImage;
    const backgroundTexture = textureLoader.load(texturePath);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 250;

    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.5,
      map: backgroundTexture,
      transparent: true,
      alphaTest: 0.5,
      depthWrite: false,
    });

    const particles = new THREE.Points(particlesGeometry, particleMaterial);
    scene.add(particles);

    const animate = () => {
      requestAnimationFrame(animate);

      particles.rotation.y += 0.001;
      particles.rotation.z += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    const setBodyBackground = () => {
      document.body.style.backgroundImage = currentTopic.bgColor;
      document.body.style.backgroundSize = "cover";
    };

    setBodyBackground();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
      
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
    };
  }, [getTopicHalloween]);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default BackgroundByTopic;
