import { topicHalloweenStore } from "../stores";
import {MODEL_TOPIC } from "../utils/constants";

const ModelPath = {
    [MODEL_TOPIC.esqueleto]: {
        modelPath: '../../public/skullModel/scene.gltf',
        scale: 1.4
    },
    [MODEL_TOPIC.zombies]: {
        modelPath:'../../public/zombieVerdeModel/scene.gltf',
        scale: 0.7
    },
    [MODEL_TOPIC.ghost]: {
        modelPath:'../../public/ghostModel/scene.gltf',
        scale: 0.2
    },
    [MODEL_TOPIC.vampire]: {
        modelPath:'../../public/vampireModel/scene.gltf',
        scale: 0.4
    },
    [MODEL_TOPIC.witch]: {
        modelPath:'../../public/witchModel/scene.gltf',
        scale: 0.4
    }
    
}
document.addEventListener("DOMContentLoaded", () => {
    const initialModel = T_WITCH;

    const checkCanvas = (canvasSelector, topic) => {
        console.log({topic})
        const canvas = document.getElementById(canvasSelector);
        if (canvas) {
            console.log(topic, 'store getTopicHalloween')

            initThreeJS(canvas,  ModelPath[topic] ?? ModelPath.esqueleto );
        } else {
            requestAnimationFrame(() => checkCanvas(canvasSelector, initialModel));
        }
    };

    topicHalloweenStore.subscribe((newTopic) => {
        console.log(newTopic, 'Nuevo tema de Halloween');
        checkCanvas('webgl', newTopic); 
        checkCanvas('webgl2', newTopic);
    });

    checkCanvas('webgl', initialModel); 
    checkCanvas('webgl2', initialModel);
});

const hasTouchSupport = () => {
    return (navigator.maxTouchPoints > 0 || 'ontouchstart' in window);
}

function initThreeJS(canvas, options = {}) {
    console.log(options, 'OTPION')
    const isTouchDevice = hasTouchSupport();
    let isMouseFollowEnabled = !isTouchDevice;
    const { width = 100, height = 150, scale= 1.4, modelPath = '../../public/skullModel/scene.gltf' } = options;

    // SCENE
    const scene = new THREE.Scene();

    // GLTF MODEL
    let base = new THREE.Object3D();
    scene.add(base);
    const gltfLoader = new THREE.GLTFLoader();
    gltfLoader.load(modelPath, (gltf) => {
        // Agregar el nuevo modelo
        gltf.scene.scale.set(scale, scale, scale);
        base.add(gltf.scene);
    }, undefined, (error) => {
        console.error("Error al cargar el modelo GLTF:", error);
    });
    // SIZE
    const sizes = { width, height };

    // CAMERA
    const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height);
    camera.position.z = 6;
    scene.add(camera);

    // Lights
    const pointLight = new THREE.PointLight(0xffffff, 3);
    pointLight.position.set(1.5, 1.5, 5);
    scene.add(pointLight);

    // MOUSE MOVE
    let plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -2);
    let raycaster = new THREE.Raycaster();
    let mouse = new THREE.Vector2();
    let pointOfIntersection = new THREE.Vector3();

    window.addEventListener("mousemove", onMouseMove, false);
    
    function onMouseMove(e) {
        if (isMouseFollowEnabled) {
            const rect = canvas.getBoundingClientRect();

            // Coordenadas relativas del ratón al canvas
            mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);
            raycaster.ray.intersectPlane(plane, pointOfIntersection);

            base.lookAt(pointOfIntersection);
        }
    }

    const toggleButton = document.getElementById('toggle-rotation');
    toggleButton.addEventListener('click', (e) => {
        isMouseFollowEnabled = !isMouseFollowEnabled;
        if (isMouseFollowEnabled) {
            base.rotation.set(0, 0, 0);
            canvas.style.cursor = 'default';
        } else {
            canvas.style.cursor = 'grab';
        }
    });

    let isMouseDown = false;
    let lastMouseX = 0;
    let lastMouseY = 0;

    window.addEventListener('mousedown', (e) => {
        if (!isMouseFollowEnabled) {
            isMouseDown = true;
            lastMouseX = e.clientX;
            lastMouseY = e.clientY;
            canvas.style.cursor = 'grabbing';
            e.preventDefault();
        }
    });

    window.addEventListener('mousemove', (e) => {
        if (isMouseDown) {
            const deltaX = e.clientX - lastMouseX;
            const deltaY = e.clientY - lastMouseY;
            const rotationSpeed = 0.01;

            base.rotation.y += deltaX * rotationSpeed;
            base.rotation.x += deltaY * rotationSpeed;

            lastMouseX = e.clientX;
            lastMouseY = e.clientY;
            e.preventDefault();
        }
    });

    window.addEventListener('mouseup', (e) => {
        if (!isMouseFollowEnabled) {
            if (isMouseDown) {
                isMouseDown = false;
                canvas.style.cursor = 'grab';
                e.pinte
                e.preventDefault();
                e.stopPropagation();
            }
        }
    });

    let isTouching = false;
    let lastTouchX = 0;
    let lastTouchY = 0;

    canvas.addEventListener('touchstart', (e) => {
        if (!isMouseFollowEnabled) {
            isTouching = true;
            lastTouchX = e.touches[0].clientX;
            lastTouchY = e.touches[0].clientY;
            canvas.style.cursor = 'grabbing';
            e.preventDefault();
        }
    });

    canvas.addEventListener('touchmove', (e) => {
        if (isTouching) {
            const deltaX = e.touches[0].clientX - lastTouchX;
            const deltaY = e.touches[0].clientY - lastTouchY;
            const rotationSpeed = 0.01;

            base.rotation.y += deltaX * rotationSpeed;
            base.rotation.x += deltaY * rotationSpeed;

            lastTouchX = e.touches[0].clientX;
            lastTouchY = e.touches[0].clientY;
            e.preventDefault();
        }
    });

    canvas.addEventListener('touchend', (e) => {
        if (!isMouseFollowEnabled) {
            isTouching = false;
            canvas.style.cursor = 'grab';
            e.preventDefault();
        }
    });

    // RENDERER
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true
    });

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Animación de renderizado
    renderer.setAnimationLoop(() => {
        if (!isMouseFollowEnabled && !isMouseDown && !isTouching) {
            base.rotation.x += (0 - base.rotation.x) * 0.05;
            base.rotation.y += (0 - base.rotation.y) * 0.05;
            base.rotation.z += (0 - base.rotation.z) * 0.05;
        }

        renderer.render(scene, camera);
    });
}
