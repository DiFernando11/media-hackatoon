import { MODEL_TOPIC } from "./constants";

export const hasTouchSupport = () => {
  return navigator.maxTouchPoints > 0 || "ontouchstart" in window;
};

export const modelByTopic = (topic) => {
  const configTopic = {
    [MODEL_TOPIC.skeleton]: {
      name: "Calavera",
      modelPath: "/skullModel/scene.gltf",
      scale: 1.4,
      width: 150,
      height: 150,
      fontFamily: "font-skeleton",
      fontSize: "text-skeleton",
      animationTitle: "animate-title-skeleton",
      bgImage: "/skeleton.png",
      bgColor: {
        primary: "#1c1c1c",
        secondary: "#b0b0b0",
      },
      replaceBackground: {
        "prompt-1":
          "Replaces the background with a mystical cave filled with glowing skulls",
        "prompt-2":
          "Replaces the background with a desert landscape dotted with ancient skulls",
        "prompt-3":
          "Replaces the background with a haunted mansion adorned with ornate skull decorations",
        "prompt-4":
          "Replaces the background with a pirate shipwreck scattered with skulls",
        "prompt-5":
          "Replaces the background with a dark forest clearing surrounded by skull-shaped rocks",
        "prompt-6":
          "Replaces the background with a gothic cathedral featuring skull motifs",
        "prompt-7":
          "Replaces the background with a carnival scene filled with skull-themed rides",
        "prompt-8":
          "Replaces the background with a fiery inferno of skulls and bones",
        "prompt-9":
          "Replaces the background with an eerie graveyard lined with skulls",
        "prompt-10":
          "Replaces the background with a vibrant festival celebrating skull art",
      },
      imageDefaultBg: [
        {
          url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729466458/difer-images/nxxnl1xgvoq5kcbbgaux.webp",
          publicId: "difer-images/nxxnl1xgvoq5kcbbgaux",
        },
        {
          url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729468097/difer-images/yiu7my2uzhe8vxhungiv.jpg",
          publicId: "difer-images/yiu7my2uzhe8vxhungiv",
        },
        {
          url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729468193/difer-images/biqykarsvthsxjhqd4qy.webp",
          publicId: "difer-images/biqykarsvthsxjhqd4qy",
        },
      ],
    },
    [MODEL_TOPIC.zombies]: {
      name: "Zombie",
      modelPath: "/zombieVerdeModel/scene.gltf",
      scale: 0.8,
      width: 300,
      height: 300,
      fontFamily: "font-zombie",
      fontSize: "text-zombie",
      animationTitle: "animate-title-zombie",
      bgImage: "/zombie.png",
      bgColor: {
        primary: "#2f2f2f",
        secondary: "#a5d6a7",
      },
      replaceBackground: {
        "prompt-1":
          "Replaces the background with a deserted street filled with zombies",
        "prompt-2":
          "Replaces the background with a dark forest crawling with zombies",
        "prompt-3":
          "Replaces the background with an abandoned mall overrun by zombies",
        "prompt-4":
          "Replaces the background with a ruined school infested with zombies",
        "prompt-5":
          "Replaces the background with a post-apocalyptic city skyline surrounded by zombies",
        "prompt-6":
          "Replaces the background with a dilapidated house swarming with zombies",
        "prompt-7":
          "Replaces the background with a zombie-infested subway station",
        "prompt-8":
          "Replaces the background with a creepy graveyard filled with rising zombies",
        "prompt-9":
          "Replaces the background with a fiery battlefield teeming with zombies",
        "prompt-10":
          "Replaces the background with a deserted amusement park filled with zombies",
      },
      imageDefaultBg: [
        {
          url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729472710/difer-images/p6orbdhduw8lx2fn2pe1.jpg",
          publicId: "difer-images/p6orbdhduw8lx2fn2pe1",
        },
        {
          url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729472727/difer-images/wa2phsap2jimcjq6riqo.jpg",
          publicId: "difer-images/wa2phsap2jimcjq6riqo",
        },
        {
          url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729472720/difer-images/bwpap9zupmbyqn0jzmez.webp",
          publicId: "difer-images/bwpap9zupmbyqn0jzmez",
        },
      ],
    },
    [MODEL_TOPIC.ghost]: {
      name: "Fantasma",
      modelPath: "/ghostModel/scene.gltf",
      scale: 0.2,
      width: 250,
      height: 250,
      fontFamily: "font-ghost",
      fontSize: "text-ghost",
      animationTitle: "animate-title-ghost",
      bgImage: "/ghost.png",
      bgColor: {
        primary: "#1c1c1c",
        secondary: "#9b59b6",
      },
      replaceBackground: {
        "prompt-1":
          "Replaces the background with a spooky abandoned house filled with floating ghosts",
        "prompt-2":
          "Replaces the background with a foggy graveyard haunted by ethereal spirits",
        "prompt-3":
          "Replaces the background with a dark forest illuminated by ghostly apparitions",
        "prompt-4":
          "Replaces the background with a haunted castle surrounded by wandering phantoms",
        "prompt-5":
          "Replaces the background with an old library filled with ghostly figures reading books",
        "prompt-6":
          "Replaces the background with a creepy carnival filled with ghostly clowns",
        "prompt-7":
          "Replaces the background with a misty lake where ghostly figures emerge from the water",
        "prompt-8":
          "Replaces the background with a haunted hotel with ghosts lurking in the halls",
        "prompt-9":
          "Replaces the background with a desolate battlefield haunted by the spirits of soldiers",
        "prompt-10":
          "Replaces the background with a ghostly train station filled with apparitions waiting for a train",
      },
      imageDefaultBg: [
        {
          url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729473373/difer-images/nrmiyaedss04rhdrbnjz.jpg",
          publicId: "difer-images/nrmiyaedss04rhdrbnjz",
        },
        {
          url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729473362/difer-images/ncsmaxhsjtanbmaqh6o1.jpg",
          publicId: "difer-images/ncsmaxhsjtanbmaqh6o1",
        },
        {
          url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729473355/difer-images/puxeclkq0ccra8df46jd.jpg",
          publicId: "difer-images/puxeclkq0ccra8df46jd",
        },
      ],
    },
    [MODEL_TOPIC.vampire]: {
      name: "Vampiro",
      modelPath: "/vampireModel/scene.gltf",
      scale: 1.6,
      width: 150,
      height: 150,
      fontFamily: "font-vampire",
      fontSize: "text-vampire",
      animationTitle: "animate-title-vampire",
      bgImage: "/vampire.webp",
      bgColor: {
        primary: "#333333",
        secondary: "#8b0000",
      },
      replaceBackground: {
        "prompt-1":
          "Replaces the background with a dark castle tower where bats flutter around in the moonlight",
        "prompt-2":
          "Replaces the background with a foggy graveyard where vampires lurk among the shadows of tombstones",
        "prompt-3":
          "Replaces the background with a sinister forest where bats hang from the branches and watch the night",
        "prompt-4":
          "Replaces the background with a creepy old mansion where a vampire gazes out from the balcony",
        "prompt-5":
          "Replaces the background with a moonlit cave where bats swarm around the entrance to a hidden lair",
        "prompt-6":
          "Replaces the background with an eerie village where vampires roam the streets under the cover of darkness",
        "prompt-7":
          "Replaces the background with a haunted ballroom filled with dancing vampires and fluttering bats",
        "prompt-8":
          "Replaces the background with a dark alley where a vampire waits with bats circling overhead",
        "prompt-9":
          "Replaces the background with a spooky library where bats roost among ancient tomes and vampire legends",
        "prompt-10":
          "Replaces the background with a moonlit path leading to a vampire castle surrounded by circling bats",
      },
      imageDefaultBg: [
        {
          url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729473855/difer-images/apweibqwtdrrzswcxbpw.avif",
          publicId: "difer-images/apweibqwtdrrzswcxbpw",
        },
        {
          url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729473848/difer-images/cymbwwinisx0akhdjkt8.png",
          publicId: "difer-images/cymbwwinisx0akhdjkt8",
        },
        {
          url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729473841/difer-images/cvombfm55ytvimkn9oxz.jpg",
          publicId: "difer-images/cvombfm55ytvimkn9oxz",
        },
      ],
    },
    [MODEL_TOPIC.witch]: {
      name: "Bruja",
      modelPath: "/witchModel/scene.gltf",
      scale: 0.4,
      width: 200,
      height: 200,
      fontFamily: "font-witch",
      fontSize: "text-witch",
      animationTitle: "animate-title-witch",
      bgImage: "/witch.png",
      bgColor: {
        primary: "#333333",
        secondary: "#f2e68e",
      },
      replaceBackground: {
        "prompt-1":
          "Replaces the background with a dark forest where a witch brews potions under the glow of the moon",
        "prompt-2":
          "Replaces the background with a mysterious old cabin filled with spell books and bubbling cauldrons",
        "prompt-3":
          "Replaces the background with a witchs garden where enchanted plants and magical creatures thrive",
        "prompt-4":
          "Replaces the background with a full moon night where silhouettes of flying witches on broomsticks fill the sky",
        "prompt-5":
          "Replaces the background with a spooky graveyard where a witch performs a ritual among the tombstones",
        "prompt-6":
          "Replaces the background with a haunted castle where a witch casts spells in the candle lit tower",
        "prompt-7":
          "Replaces the background with a foggy moor where a witch conjures storms with her wand",
        "prompt-8":
          "Replaces the background with an enchanted forest path leading to a coven of witches in a secret meeting",
        "prompt-9":
          "Replaces the background with a shadowy market where witches barter magical ingredients under flickering lights",
        "prompt-10":
          "Replaces the background with a bubbling cauldron in a mystical cave filled with glowing crystals and ancient artifacts",
      },
      imageDefaultBg: [
        {
          url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729474176/difer-images/o6shau6svqv0c8gryzh1.jpg",
          publicId: "difer-images/o6shau6svqv0c8gryzh1",
        },
        {
          url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729474164/difer-images/nv8agnpd9lrkrrictl13.webp",
          publicId: "difer-images/nv8agnpd9lrkrrictl13",
        },
        {
          url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729474154/difer-images/qmnxv5skfnxjr2wugv4r.webp",
          publicId: "difer-images/qmnxv5skfnxjr2wugv4r",
        },
      ],
    },
    [MODEL_TOPIC.werewolf]: {
      name: "Lobo",
      modelPath: "/werewolfModel/scene.gltf",
      scale: 1.6,
      width: 180,
      height: 180,
      fontFamily: "font-werewolf",
      fontSize: "text-werewolf",
      animationTitle: "animate-title-werewolf",
      bgImage: "/werewolf.png",
      bgColor: {
        primary: "#3b3b3b",
        secondary: "#9e6f4d",
      },
      replaceBackground: {
        "prompt-1":
          "Replaces the background with a full moon night in a dark forest where a werewolf howls at the sky",
        "prompt-2":
          "Replaces the background with a fog covered village where shadows of werewolves roam the streets",
        "prompt-3":
          "Replaces the background with a misty mountain peak where a werewolf stands silhouetted against the moon",
        "prompt-4":
          "Replaces the background with an eerie abandoned cabin surrounded by the growls of lurking werewolves",
        "prompt-5":
          "Replaces the background with a haunted forest clearing where werewolves gather under the moonlight",
        "prompt-6":
          "Replaces the background with a stormy night over a gothic castle where werewolves emerge from the shadows",
        "prompt-7":
          "Replaces the background with a dark alley in a city where werewolves are lurking in the corners",
        "prompt-8":
          "Replaces the background with a serene lakeside at night where a werewolf can be seen reflected in the water",
        "prompt-9":
          "Replaces the background with a crumbling stone wall where werewolf claw marks are etched into the surface",
        "prompt-10":
          "Replaces the background with a nighttime forest path lit by eerie glowing eyes of hidden werewolves",
      },
      imageDefaultBg: [
        {
          url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729474665/difer-images/cdwrqalbywmqmgydvx1i.avif",
          publicId: "difer-images/cdwrqalbywmqmgydvx1i",
        },
        {
          url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729474657/difer-images/u6iygvbafzbuj5nbgljj.jpg",
          publicId: "difer-images/u6iygvbafzbuj5nbgljj",
        },
        {
          url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729474651/difer-images/lidh1tqlt4mtcy2lauxg.webp",
          publicId: "difer-images/lidh1tqlt4mtcy2lauxg",
        },
      ],
    },
    [MODEL_TOPIC.mummy]: {
      name: "Momia",
      modelPath: "/mummyModel/scene.gltf",
      scale: 3,
      width: 200,
      height: 200,
      fontFamily: "font-mummy",
      fontSize: "text-mummy",
      animationTitle: "animate-title-mummy",
      bgImage: "/mummy.png",
      bgColor: {
        primary: "#444444",
        secondary: "#e6d1c4",
      },
      replaceBackground: {
        "prompt-1":
          "Replaces the background with an ancient Egyptian tomb filled with the dusty remnants of mummies",
        "prompt-2":
          "Replaces the background with a dark cursed pyramid where a mummy awakens in the shadows",
        "prompt-3":
          "Replaces the background with a forgotten crypt where mummies lie in eternal slumber",
        "prompt-4":
          "Replaces the background with a misty desert night where a mummy emerges from the sands under the moonlight",
        "prompt-5":
          "Replaces the background with an eerie museum exhibit where mummies seem to come to life at night",
        "prompt-6":
          "Replaces the background with a spooky burial ground surrounded by ancient curses and restless mummies",
        "prompt-7":
          "Replaces the background with a candle lit chamber in an ancient temple where mummies guard hidden treasures",
        "prompt-8":
          "Replaces the background with a dusty old library where ancient scrolls reveal the secrets of the mummies",
        "prompt-9":
          "Replaces the background with a haunted Egyptian marketplace where mummies wander in search of their lost treasures",
        "prompt-10":
          "Replaces the background with a dark alley in a city where mummies rise from the ground to haunt the living",
      },
      imageDefaultBg: [
        {
          url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729474922/difer-images/n18a6znvtcx7zsapujz0.jpg",
          publicId: "difer-images/n18a6znvtcx7zsapujz0",
        },
        {
          url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729474916/difer-images/eqkhrpx1isghre5ld5wb.jpg",
          publicId: "difer-images/eqkhrpx1isghre5ld5wb",
        },
        {
          url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729474910/difer-images/tsmb2xryqyl2f8lm2ave.jpg",
          publicId: "difer-images/tsmb2xryqyl2f8lm2ave",
        },
      ],
    },
    [MODEL_TOPIC.pumpkin]: {
      name: "Calabaza",
      modelPath: "/pumpkinModel/scene.gltf",
      scale: 0.2,
      width: 200,
      height: 200,
      fontFamily: "font-pumpkin",
      fontSize: "text-pumpkin",
      animationTitle: "animate-title-pumpkin",
      bgImage: "/pumpkin.png",
      bgColor: {
        primary: "#333333",
        secondary: "#ff8c00",
      },
      replaceBackground: {
        "prompt-1":
          "Replaces the background with a spooky pumpkin patch illuminated by the light of the full moon",
        "prompt-2":
          "Replaces the background with a haunted house surrounded by carved jack o lanterns",
        "prompt-3":
          "Replaces the background with a dark forest where glowing pumpkins light the path",
        "prompt-4":
          "Replaces the background with a whimsical Halloween festival filled with giant pumpkins and ghostly decorations",
        "prompt-5":
          "Replaces the background with a foggy graveyard where pumpkins grow among the tombstones",
        "prompt-6":
          "Replaces the background with a cozy autumn scene featuring pumpkins and falling leaves",
        "prompt-7":
          "Replaces the background with an eerie cornfield where pumpkins appear to watch from the shadows",
        "prompt-8":
          "Replaces the background with a traditional harvest celebration with pumpkins on display",
        "prompt-9":
          "Replaces the background with a witchs cottage surrounded by enchanted pumpkins and spooky vines",
        "prompt-10":
          "Replaces the background with a darkened kitchen where a witch carves mystical symbols into a pumpkin",
      },
      imageDefaultBg: [
        {
          url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729475223/difer-images/mibjxclcweflgu9ywifw.jpg",
          publicId: "difer-images/mibjxclcweflgu9ywifw",
        },
        {
          url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729475218/difer-images/pamvh5ecwvybyplvhfix.jpg",
          publicId: "difer-images/pamvh5ecwvybyplvhfix",
        },
        {
          url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729475212/difer-images/nsh99pbdgvgaenetxuje.jpg",
          publicId: "difer-images/nsh99pbdgvgaenetxuje",
        },
      ],
    },
    [MODEL_TOPIC.spider]: {
      name: "Araña",
      modelPath: "/spiderModel/scene.gltf",
      scale: 0.6,
      width: 150,
      height: 150,
      fontFamily: "font-spider",
      fontSize: "text-spider",
      animationTitle: "animate-title-spider",
      bgImage: "/spider.png",
      bgColor: {
        primary: "#333333",
        secondary: "#1c1c1c",
      },
      replaceBackground: {
        "prompt-1":
          "Replaces the background with a dark creepy basement filled with giant cobwebs and lurking spiders",
        "prompt-2":
          "Replaces the background with a haunted forest where enormous spiders weave shimmering webs between the trees",
        "prompt-3":
          "Replaces the background with an eerie attic where shadowy spiders scurry across dusty surfaces",
        "prompt-4":
          "Replaces the background with a moonlit graveyard where spiders spin webs between the tombstones",
        "prompt-5":
          "Replaces the background with a spooky abandoned house where spiders have taken over every corner",
        "prompt-6":
          "Replaces the background with a foggy marsh where ghostly spiders emerge from the mist",
        "prompt-7":
          "Replaces the background with a sinister garden filled with exotic spiders and their intricate webs",
        "prompt-8":
          "Replaces the background with a dark cave where glowing spiders hang from the ceilings",
        "prompt-9":
          "Replaces the background with a haunted circus tent where acrobatic spiders perform under the spotlight",
        "prompt-10":
          "Replaces the background with a creepy library where spiders crawl over ancient books and scrolls",
      },
      imageDefaultBg: [
        {
          url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729475560/difer-images/bjlnwolm0dmdplk20z8e.jpg",
          publicId: "difer-images/bjlnwolm0dmdplk20z8e",
        },
        {
          url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729475554/difer-images/rthg7mkregigsypqg8qy.avif",
          publicId: "difer-images/rthg7mkregigsypqg8qy",
        },
        {
          url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729475544/difer-images/y5kiwlibirhjpbb34q0g.jpg",
          publicId: "difer-images/y5kiwlibirhjpbb34q0g",
        },
      ],
    },
  };
  return configTopic[topic] || configTopic.skeleton;
};
