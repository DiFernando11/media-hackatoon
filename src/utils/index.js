import { bgColorPumpkin, bgColorSkeleton, MODEL_TOPIC } from "./constants";

export const hasTouchSupport = () => {
    return (navigator.maxTouchPoints > 0 || 'ontouchstart' in window);
}

export const modelByTopic = (topic) => {
    const configTopic = {
        [MODEL_TOPIC.skeleton]: {
            modelPath: '/public/skullModel/scene.gltf',
            scale: 1.4,
            width: 150,
            height: 150,
            fontFamily: "font-skeleton",
            fontSize: "text-skeleton",
            animationTitle: "animate-title-skeleton",
            bgImage: "/public/skeleton.webp",
            bgColor: bgColorSkeleton
        },
        [MODEL_TOPIC.zombies]: {
            modelPath:'../../public/zombieVerdeModel/scene.gltf',
            scale: 0.8,
            width: 300,
            height: 300,
            fontFamily: "font-zombie",
            fontSize: "text-zombie",
            animationTitle: "animate-title-zombie"
        },
        [MODEL_TOPIC.ghost]: {
            modelPath:'../../public/ghostModel/scene.gltf',
            scale: 0.2,
            width: 250,
            height: 250,
            fontFamily: "font-ghost",
            fontSize: "text-ghost",
            animationTitle: "animate-title-ghost"
        },
        [MODEL_TOPIC.vampire]: {
            modelPath:'../../public/vampireModel/scene.gltf',
            scale: 1.6,
            width: 150,
            height: 150,
            fontFamily: "font-vampire",
            fontSize: "text-vampire",
            animationTitle: "animate-title-vampire"
        },
        [MODEL_TOPIC.witch]: {
            modelPath:'../../public/witchModel/scene.gltf',
            scale: 0.4,
            width: 200,
            height: 200,
            fontFamily: "font-witch",
            fontSize: "text-witch",
            animationTitle: "animate-title-witch"
        },
        [MODEL_TOPIC.werewolf]: {
            modelPath:'../../public/werewolfModel/scene.gltf',
            scale: 1.6,
            width: 180,
            height: 180,
            fontFamily: "font-werewolf",
            fontSize: "text-werewolf",
            animationTitle: "animate-title-werewolf"
        },
        [MODEL_TOPIC.mummy]: {
            modelPath:'../../public/mummyModel/scene.gltf',
            scale: 3,
            width: 200,
            height: 200,
            fontFamily: "font-mummy",
            fontSize: "text-mummy",
            animationTitle: "animate-title-mummy"
        },
        [MODEL_TOPIC.pumpkin]: {
            modelPath:'../../public/pumpkinModel/scene.gltf',
            scale: 1.2,
            width: 250,
            height: 250,
            fontFamily: "font-pumpkin",
            fontSize: "text-pumpkin",
            animationTitle: "animate-title-pumpkin",
            bgImage: "/public/pumpkin.png",
            bgColor: bgColorPumpkin
        },
        [MODEL_TOPIC.spider]: {
            modelPath:'../../public/spiderModel/scene.gltf',
            scale: 0.6,
            width: 150,
            height: 150,
            fontFamily: "font-spider",
            fontSize: "text-spider",
            animationTitle: "animate-title-spider"
        }
    }
    return configTopic[topic] || configTopic.skeleton
}