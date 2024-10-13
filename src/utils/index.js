import { MODEL_TOPIC } from "./constants";

export const hasTouchSupport = () => {
    return (navigator.maxTouchPoints > 0 || 'ontouchstart' in window);
}

export const modelByTopic = (topic) => {
    const configTopic = {
        [MODEL_TOPIC.esqueleto]: {
            modelPath: '../../public/skullModel/scene.gltf',
            scale: 1.4,
            width: 150,
            height: 150,
        },
        [MODEL_TOPIC.zombies]: {
            modelPath:'../../public/zombieVerdeModel/scene.gltf',
            scale: 0.8,
            width: 300,
            height: 300,
        },
        [MODEL_TOPIC.ghost]: {
            modelPath:'../../public/ghostModel/scene.gltf',
            scale: 0.2,
            width: 250,
            height: 250,
        },
        [MODEL_TOPIC.vampire]: {
            modelPath:'../../public/vampireModel/scene.gltf',
            scale: 1.6,
            width: 150,
            height: 150,
        },
        [MODEL_TOPIC.witch]: {
            modelPath:'../../public/witchModel/scene.gltf',
            scale: 0.4,
            width: 200,
            height: 200,
        },
        [MODEL_TOPIC.werewolf]: {
            modelPath:'../../public/werewolfModel/scene.gltf',
            scale: 1.6,
            width: 180,
            height: 180,
        },
        [MODEL_TOPIC.mummy]: {
            modelPath:'../../public/mummyModel/scene.gltf',
            scale: 3,
            width: 200,
            height: 200,
        },
        [MODEL_TOPIC.pumpkin]: {
            modelPath:'../../public/pumpkinModel/scene.gltf',
            scale: 1.2,
            width: 250,
            height: 250,
        },
        [MODEL_TOPIC.spider]: {
            modelPath:'../../public/spiderModel/scene.gltf',
            scale: 0.6,
            width: 150,
            height: 150,
        }
    }
    return configTopic[topic] || configTopic.esqueleto
}