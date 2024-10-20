import {  MODEL_TOPIC } from "./constants";

export const hasTouchSupport = () => {
    return (navigator.maxTouchPoints > 0 || 'ontouchstart' in window);
}

export const modelByTopic = (topic) => {
    const configTopic = {
        [MODEL_TOPIC.skeleton]: {
            name: "Calavera",
            modelPath: '/skullModel/scene.gltf',
            scale: 1.4,
            width: 150,
            height: 150,
            fontFamily: "font-skeleton",
            fontSize: "text-skeleton",
            animationTitle: "animate-title-skeleton",
            bgImage: "/skeleton.png",
            bgColor: {
                primary: '#1c1c1c',
                secondary: "#b0b0b0"
            },
        "replaceBackground": {
            "prompt-1": "Replaces the background with a mystical cave filled with glowing skulls",
            "prompt-2": "Replaces the background with a desert landscape dotted with ancient skulls",
            "prompt-3": "Replaces the background with a haunted mansion adorned with ornate skull decorations",
            "prompt-4": "Replaces the background with a pirate shipwreck scattered with skulls",
            "prompt-5": "Replaces the background with a dark forest clearing surrounded by skull-shaped rocks",
            "prompt-6": "Replaces the background with a gothic cathedral featuring skull motifs",
            "prompt-7": "Replaces the background with a carnival scene filled with skull-themed rides",
            "prompt-8": "Replaces the background with a fiery inferno of skulls and bones",
            "prompt-9": "Replaces the background with an eerie graveyard lined with skulls",
            "prompt-10": "Replaces the background with a vibrant festival celebrating skull art"
        }
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
            bgImage: "/zombie.png",
            bgColor: {
                primary: "#2f2f2f",
                secondary: "#a5d6a7"
            },
          "replaceBackground": {
              "prompt-1": "Replaces the background with a deserted street filled with zombies",
              "prompt-2": "Replaces the background with a dark forest crawling with zombies",
              "prompt-3": "Replaces the background with an abandoned mall overrun by zombies",
              "prompt-4": "Replaces the background with a ruined school infested with zombies",
              "prompt-5": "Replaces the background with a post-apocalyptic city skyline surrounded by zombies",
              "prompt-6": "Replaces the background with a dilapidated house swarming with zombies",
              "prompt-7": "Replaces the background with a zombie-infested subway station",
              "prompt-8": "Replaces the background with a creepy graveyard filled with rising zombies",
              "prompt-9": "Replaces the background with a fiery battlefield teeming with zombies",
              "prompt-10": "Replaces the background with a deserted amusement park filled with zombies"
          }
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
            bgImage: "/ghost.png",
            bgColor: {
                primary: "#1c1c1c",
                secondary: "#9b59b6"
            },
             "replaceBackground": {
              "prompt-1": "Replaces the background with a spooky abandoned house filled with floating ghosts",
              "prompt-2": "Replaces the background with a foggy graveyard haunted by ethereal spirits",
              "prompt-3": "Replaces the background with a dark forest illuminated by ghostly apparitions",
              "prompt-4": "Replaces the background with a haunted castle surrounded by wandering phantoms",
              "prompt-5": "Replaces the background with an old library filled with ghostly figures reading books",
              "prompt-6": "Replaces the background with a creepy carnival filled with ghostly clowns",
              "prompt-7": "Replaces the background with a misty lake where ghostly figures emerge from the water",
              "prompt-8": "Replaces the background with a haunted hotel with ghosts lurking in the halls",
              "prompt-9": "Replaces the background with a desolate battlefield haunted by the spirits of soldiers",
              "prompt-10": "Replaces the background with a ghostly train station filled with apparitions waiting for a train"
            }
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
            bgImage: "/vampire.webp",
            bgColor: {
                primary: "#333333",
                secondary: "#8b0000"
            },
            replaceBackground: "Add vampires to the background"
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
            bgImage: "/witch.png",
            bgColor: {
                primary: "#333333",
                secondary: "#f2e68e"
            },
            replaceBackground: "Add witchs to the background"
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
            bgImage: "/werewolf.png",
            bgColor: {
                primary: "#3b3b3b",
                secondary: "#9e6f4d"
            },
            replaceBackground: "Add werewolfs to the background"
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
            bgImage: "/mummy.png",
            bgColor: {
                primary: "#444444",
                secondary: "#e6d1c4"
            },
            replaceBackground: "Add mummys to the background"
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
            bgImage: "/pumpkin.png",
            bgColor: {
                primary: "#333333",
                secondary: "#ff8c00"
            },
              replaceBackground: "Add pumpkins to the background"
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
            bgImage: "/spider.png",
            bgColor: {
                primary: "#333333",
                secondary: "#1c1c1c"
            },
            replaceBackground: "Add spiders to the background"
        }
    }
    return configTopic[topic] || configTopic.skeleton
}