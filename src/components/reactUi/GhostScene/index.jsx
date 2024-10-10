import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useThree, extend, Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// Extender para usar orbit controls en react-three-fiber
extend({ OrbitControls });

const GhostCanva = () => {
  const ghostRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    // Crear la figura del fantasma
    const group = new THREE.Group();

    // Cabeza del fantasma
    const headGeometry = new THREE.SphereGeometry(1.8, 32, 32);
    headGeometry.scale(0.84, 1, 1);
    const headMaterial = new THREE.MeshStandardMaterial({
      color: "white",
      transparent: true,
      opacity: 1,
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.set(0, 1, 0.5);
    head.castShadow = true;
    group.add(head);

    // Cuerpo del fantasma
    const ghostShape = new THREE.Shape();
    ghostShape.moveTo(-1.5, 0);
    ghostShape.quadraticCurveTo(-1.2, 1.5, -0.9, 1.8);
    ghostShape.quadraticCurveTo(-0.8, 2.1, -0.3, 1.8);
    ghostShape.quadraticCurveTo(0, 2.4, 0.3, 1.8);
    ghostShape.quadraticCurveTo(0.6, 2.1, 0.9, 1.8);
    ghostShape.quadraticCurveTo(1.2, 1.5, 1.5, 0);
    ghostShape.quadraticCurveTo(1.2, -0.5, 0.9, -0.7);
    ghostShape.quadraticCurveTo(0.6, -1.0, 0.3, -0.7);
    ghostShape.quadraticCurveTo(0, -1.4, -0.3, -0.7);
    ghostShape.quadraticCurveTo(-0.6, -1.0, -0.9, -0.7);
    ghostShape.quadraticCurveTo(-1.2, -0.5, -1.5, 0);

    const extrudeSettings = {
      depth: 3.5,
      bevelEnabled: false,
      steps: 1,
    };
    const ghostGeometry = new THREE.ExtrudeGeometry(
      ghostShape,
      extrudeSettings
    );
    const ghostMaterial = new THREE.MeshStandardMaterial({
      color: "white",
      transparent: true,
      opacity: 1,
    });
    const ghost = new THREE.Mesh(ghostGeometry, ghostMaterial);
    ghost.rotation.x = Math.PI / 2;
    ghost.position.y = 1.5;
    ghost.castShadow = true;
    group.add(ghost);

    // Ojos
    const eyeGeometry = new THREE.SphereGeometry(0.3, 16, 16);
    const eyeMaterial = new THREE.MeshStandardMaterial({ color: "black" });
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.5, 0.8, 2);
    rightEye.position.set(0.5, 0.8, 2);
    group.add(leftEye);
    group.add(rightEye);

    // Boca
    const mouthShape = new THREE.Shape();
    mouthShape.moveTo(-0.5, 0);
    mouthShape.bezierCurveTo(-0.3, -0.5, 0.3, -0.5, 0.5, 0);
    const mouthGeometry = new THREE.ExtrudeGeometry(mouthShape, {
      depth: 0.2,
      bevelEnabled: false,
    });
    const mouthMaterial = new THREE.MeshStandardMaterial({ color: "black" });
    const mouth = new THREE.Mesh(mouthGeometry, mouthMaterial);
    mouth.position.set(0, 0.1, 2);
    group.add(mouth);

    // Manos del fantasma
    const armMaterial = new THREE.MeshStandardMaterial({
      color: "white",
      transparent: true,
      opacity: 1,
    });
    const handGeometry = new THREE.SphereGeometry(0.4, 16, 16);
    const leftHand = new THREE.Mesh(handGeometry, armMaterial);
    const rightHand = new THREE.Mesh(handGeometry, armMaterial);
    leftHand.position.set(-1.2, -1, 1.8);
    rightHand.position.set(1.2, -1, 1.8);
    leftHand.castShadow = true;
    rightHand.castShadow = true;
    group.add(leftHand);
    group.add(rightHand);

    ghostRef.current = group;
    camera.position.z = 7;
  }, [camera]);

  return ghostRef.current ? <primitive object={ghostRef.current} /> : null;
};

const GhostScene = () => {
  return (
    <Canvas shadows>
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        intensity={1}
        color={"red"} // Color de la sombra roja
      />
      <GhostCanva />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default GhostScene;
