import { bgColorGhost, bgColorMummy, bgColorPumpkin, bgColorSkeleton, bgColorSpider, bgColorVampire, bgColorWerewolf, bgColorWitch, bgColorZombie, MODEL_TOPIC } from "./constants";

export const hasTouchSupport = () => {
    return (navigator.maxTouchPoints > 0 || 'ontouchstart' in window);
}

export const modelByTopic = (topic) => {
    const configTopic = {
        [MODEL_TOPIC.skeleton]: {
            name: "Calavera",
            modelPath: '/public/skullModel/scene.gltf',
            scale: 1.4,
            width: 150,
            height: 150,
            fontFamily: "font-skeleton",
            fontSize: "text-skeleton",
            animationTitle: "animate-title-skeleton",
            bgImage: "/public/skeleton.png",
            bgColor: {
                primary: '#1c1c1c',
                secondary: "#b0b0b0"
            },
        },
        [MODEL_TOPIC.zombies]: {
            name: "Zombie",
            modelPath:'../../public/zombieVerdeModel/scene.gltf',
            scale: 0.8,
            width: 300,
            height: 300,
            fontFamily: "font-zombie",
            fontSize: "text-zombie",
            animationTitle: "animate-title-zombie",
            bgImage: "/public/zombie.png",
            bgColor: {
                primary: "#2f2f2f",
                secondary: "#a5d6a7"
            },
        },
        [MODEL_TOPIC.ghost]: {
            name: "Fantasma",
            modelPath:'/public/ghostModel/scene.gltf',
            scale: 0.2,
            width: 250,
            height: 250,
            fontFamily: "font-ghost",
            fontSize: "text-ghost",
            animationTitle: "animate-title-ghost",
            bgImage: "/public/ghost.png",
            bgColor: {
                primary: "#1c1c1c",
                secondary: "#9b59b6"
            },
        },
        [MODEL_TOPIC.vampire]: {
            name: "Vampiro",
            modelPath:'../../public/vampireModel/scene.gltf',
            scale: 1.6,
            width: 150,
            height: 150,
            fontFamily: "font-vampire",
            fontSize: "text-vampire",
            animationTitle: "animate-title-vampire",
            bgImage: "/public/vampire.webp",
            bgColor: {
                primary: "#333333",
                secondary: "#8b0000"
            },
        },
        [MODEL_TOPIC.witch]: {
            name: "Bruja",
            modelPath:'../../public/witchModel/scene.gltf',
            scale: 0.4,
            width: 200,
            height: 200,
            fontFamily: "font-witch",
            fontSize: "text-witch",
            animationTitle: "animate-title-witch",
            bgImage: "/public/witch.png",
            bgColor: {
                primary: "#333333",
                secondary: "#f2e68e"
            },
        },
        [MODEL_TOPIC.werewolf]: {
            name: "Lobo",
            modelPath:'../../public/werewolfModel/scene.gltf',
            scale: 1.6,
            width: 180,
            height: 180,
            fontFamily: "font-werewolf",
            fontSize: "text-werewolf",
            animationTitle: "animate-title-werewolf",
            bgImage: "/public/werewolf.png",
            bgColor: {
                primary: "#3b3b3b",
                secondary: "#9e6f4d"
            },
        },
        [MODEL_TOPIC.mummy]: {
            name: "Momia",
            modelPath:'../../public/mummyModel/scene.gltf',
            scale: 3,
            width: 200,
            height: 200,
            fontFamily: "font-mummy",
            fontSize: "text-mummy",
            animationTitle: "animate-title-mummy",
            bgImage: "/public/mummy.png",
            bgColor: {
                primary: "#444444",
                secondary: "#e6d1c4"
            },
        },
        [MODEL_TOPIC.pumpkin]: {
            name: "Calabaza",
            modelPath:'../../public/pumpkinModel/scene.gltf',
            scale: 0.2,
            width: 200,
            height: 200,
            fontFamily: "font-pumpkin",
            fontSize: "text-pumpkin",
            animationTitle: "animate-title-pumpkin",
            bgImage: "/public/pumpkin.png",
            bgColor: {
                primary: "#333333",
                secondary: "#ff8c00"
            },
        },
        [MODEL_TOPIC.spider]: {
            name: "Araña",
            modelPath:'../../public/spiderModel/scene.gltf',
            scale: 0.6,
            width: 150,
            height: 150,
            fontFamily: "font-spider",
            fontSize: "text-spider",
            animationTitle: "animate-title-spider",
            bgImage: "/public/spider.png",
            bgColor: {
                primary: "#333333",
                secondary: "#1c1c1c"
            },
        }
    }
    return configTopic[topic] || configTopic.skeleton
}