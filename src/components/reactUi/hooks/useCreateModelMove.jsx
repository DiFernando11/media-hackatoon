import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { modelByTopic } from "../../../utils";

const useCreateModelMove = (topic) => {
  const { modelPath, scale,  width, height} = modelByTopic(topic);
  const canvasRef = useRef(null);
  const threeJSInstance = useRef({
    scene: null,
    camera: null,
    renderer: null,
    base: null,
    loader: new GLTFLoader(),
    isMouseDown: false,
    lastMouseX: 0,
    lastMouseY: 0,
    onMouseMove: null,
  });

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const { current: instance } = threeJSInstance;

console.log('UPDATE', width, height)

    // Establecer el tamaño del canvas
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // Inicialización de escena, cámara y renderer
    instance.scene = new THREE.Scene();
    instance.camera = new THREE.PerspectiveCamera(
      35,
      canvas.clientWidth / canvas.clientHeight
    );
    instance.camera.position.z = 6;

    instance.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    instance.renderer.setSize(width, height); // Establecer el tamaño del renderer
    instance.renderer.setPixelRatio(window.devicePixelRatio);

    // Iluminación
    const pointLight = new THREE.PointLight(0xffffff, 10);
    pointLight.position.set(0, 1, 2);
    instance.scene.add(pointLight);

    // Modelo base
    instance.base = new THREE.Object3D();
    instance.scene.add(instance.base);

    // Carga del modelo GLTF
    const loadModel = (path) => {
      instance.loader.load(path, (gltf) => {
        gltf.scene.scale.set(scale, scale, scale);
        instance.base.clear(); // Limpiar cualquier modelo anterior
        instance.base.add(gltf.scene);
      });
    };

    loadModel(modelPath); // Cargar el modelo al iniciar

    // Manejo de mouse y toque
    const isTouchDevice = () =>
      navigator.maxTouchPoints > 0 || "ontouchstart" in window;
    let isMouseFollowEnabled = !isTouchDevice();
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -2);
    const pointOfIntersection = new THREE.Vector3();

    instance.onMouseMove = (e) => {
      if (isMouseFollowEnabled) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(mouse, instance.camera);
        raycaster.ray.intersectPlane(plane, pointOfIntersection);
        instance.base.lookAt(pointOfIntersection);
      }
    };

    const handleTouchStart = (e) => {
      if (!isMouseFollowEnabled) {
        instance.isMouseDown = true;
        const touch = e.touches[0];
        instance.lastMouseX = touch.clientX;
        instance.lastMouseY = touch.clientY;
        canvas.style.cursor = "grabbing";
      }
    };

    const handleTouchMove = (e) => {
      if (instance.isMouseDown && !isMouseFollowEnabled) {
        const touch = e.touches[0];
        const deltaX = touch.clientX - instance.lastMouseX;
        const deltaY = touch.clientY - instance.lastMouseY;
        const rotationSpeed = 0.01;

        instance.base.rotation.y += deltaX * rotationSpeed;
        instance.base.rotation.x += deltaY * rotationSpeed;

        instance.lastMouseX = touch.clientX;
        instance.lastMouseY = touch.clientY;
      }
    };

    const handleTouchEnd = () => {
      if (!isMouseFollowEnabled) {
        instance.isMouseDown = false;
        canvas.style.cursor = "grab";
        resetRotation();
      }
    };

    // Event listeners para el mouse
    window.addEventListener("mousemove", instance.onMouseMove);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    // Toggle para la rotación y control del mouse
    const toggleButton = document.getElementById("toggle-rotation");
    if (toggleButton) {
      toggleButton.addEventListener("click", (e) => {
        isMouseFollowEnabled = !isMouseFollowEnabled;
        canvas.style.cursor = isMouseFollowEnabled ? "default" : "grab";
        resetRotation();
        e.preventDefault();
      });
    }

    window.addEventListener("mousedown", (e) => {
      if (!isMouseFollowEnabled) {
        instance.isMouseDown = true;
        instance.lastMouseX = e.clientX;
        instance.lastMouseY = e.clientY;
        canvas.style.cursor = "grabbing";
      }
    });

    window.addEventListener("mousemove", (e) => {
      if (instance.isMouseDown && !isMouseFollowEnabled) {
        const deltaX = e.clientX - instance.lastMouseX;
        const deltaY = e.clientY - instance.lastMouseY;
        const rotationSpeed = 0.01;

        instance.base.rotation.y += deltaX * rotationSpeed;
        instance.base.rotation.x += deltaY * rotationSpeed;

        instance.lastMouseX = e.clientX;
        instance.lastMouseY = e.clientY;
      }
    });

    window.addEventListener("mouseup", () => {
      if (!isMouseFollowEnabled) {
        instance.isMouseDown = false;
        canvas.style.cursor = "grab";
        resetRotation();
      }
    });

    const animate = () => {
      instance.renderer.render(instance.scene, instance.camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", instance.onMouseMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      instance.renderer.dispose();
    };
  }, [topic]); // Dependencias para actualizar el modelo

  const resetRotation = () => {
    const targetRotation = new THREE.Euler(0, 0, 0);
    const currentRotation = threeJSInstance.current.base.rotation.clone();
    const duration = 1000;
    const frames = 60;
    const stepTime = duration / frames;

    let currentFrame = 0;

    const animateReset = () => {
      if (currentFrame <= frames) {
        const t = currentFrame / frames;
        const smoothRotation = new THREE.Euler(
          THREE.MathUtils.lerp(currentRotation.x, targetRotation.x, t),
          THREE.MathUtils.lerp(currentRotation.y, targetRotation.y, t),
          THREE.MathUtils.lerp(currentRotation.z, targetRotation.z, t)
        );
        threeJSInstance.current.base.rotation.copy(smoothRotation);
        currentFrame++;
        requestAnimationFrame(animateReset);
      } else {
        threeJSInstance.current.base.rotation.copy(targetRotation);
      }
    };

    animateReset();
  };

  return { canvasRef };
};

export default useCreateModelMove;
