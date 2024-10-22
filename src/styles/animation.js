const key_slide_in_left = {
  "0%": {
    opacity: "0",
    transform: "translateX(-100%)",
  },
  "100%": {
    opacity: "1",
    transform: "translateX(0)",
  },
};
const key_zoom_in = {
  "0%": {
    opacity: "0",
    transform: "scale(0.5)",
  },
  "100%": {
    opacity: "1",
    transform: "scale(1)",
  },
};

const key_destroy = {
  "0%": {
    opacity: "1",
    transform: "scale(1)",
  },
  "100%": {
    opacity: "0",
    transform: "scale(0)",
  },
};
const key_spider = {
  "0%, 6%, 12%": {
    "text-shadow": "none",
    color: "#1c1c1c", // Negro
  },
  "3%, 9%": {
    "text-shadow":
      "0 0 10px rgba(50, 50, 50, 0.8), 0 0 15px rgba(255, 255, 255, 0.3)", // Brillo oscuro
    color: "#3d3d3d", // Gris oscuro
  },
  "60%": {
    "text-shadow":
      "0 0 10px rgba(50, 50, 50, 0.6), 0 0 15px rgba(255, 255, 255, 0.4)", // Brillo más marcado
    color: "#666666", // Gris medio
  },
  "100%": {
    "text-shadow":
      "0 0 10px rgba(50, 50, 50, 0.4), 0 0 20px rgba(255, 255, 255, 0.2)", // Brillo suave
    color: "#bfbfbf", // Gris claro
  },
};

const key_pumpkin = {
  "0%, 6%, 12%": {
    "text-shadow": "none",
    color: "#ff8c00", // Naranja brillante
  },
  "3%, 9%": {
    "text-shadow":
      "0 0 10px rgba(255, 140, 0, 0.8), 0 0 15px rgba(255, 255, 255, 0.3)", // Brillo naranja y blanco
    color: "#ff6f00", // Naranja más oscuro
  },
  "60%": {
    "text-shadow":
      "0 0 10px rgba(255, 140, 0, 0.6), 0 0 15px rgba(255, 255, 255, 0.4)", // Brillo más marcado
    color: "#ffb74d", // Naranja más claro
  },
  "100%": {
    "text-shadow":
      "0 0 10px rgba(255, 140, 0, 0.4), 0 0 20px rgba(255, 255, 255, 0.2)", // Brillo suave
    color: "#ffe0b2", // Beige claro
  },
};

const key_mummy = {
  "0%, 6%, 12%": {
    "text-shadow": "none",
    color: "#d9d9d9", // Gris claro
  },
  "3%, 9%": {
    "text-shadow":
      "0 0 10px rgba(178, 144, 98, 0.8), 0 0 15px rgba(255, 255, 255, 0.3)", // Brillo marrón claro y blanco
    color: "#b39c84", // Marrón claro
  },
  "60%": {
    "text-shadow":
      "0 0 10px rgba(178, 144, 98, 0.6), 0 0 15px rgba(255, 255, 255, 0.4)", // Brillo más marcado
    color: "#e6d1c4", // Marrón más claro
  },
  "100%": {
    "text-shadow":
      "0 0 10px rgba(178, 144, 98, 0.4), 0 0 20px rgba(255, 255, 255, 0.2)", // Brillo suave
    color: "#f5f1e6", // Beige claro
  },
};

const key_witch = {
  "0%, 6%, 12%": {
    "text-shadow": "none",
    color: "#3b3b3b", // Gris oscuro
  },
  "3%, 9%": {
    "text-shadow":
      "0 0 10px rgba(255, 255, 0, 0.8), 0 0 15px rgba(128, 0, 128, 0.3)", // Brillo amarillo y morado
    color: "#b5a600", // Amarillo oscuro
  },
  "60%": {
    "text-shadow":
      "0 0 10px rgba(255, 255, 0, 0.6), 0 0 15px rgba(128, 0, 128, 0.4)", // Brillo amarillo y morado
    color: "#f2e68e", // Amarillo claro
  },
  "100%": {
    "text-shadow":
      "0 0 10px rgba(255, 255, 0, 0.4), 0 0 20px rgba(128, 0, 128, 0.2)", // Brillo suave amarillo y morado
    color: "#f9f58a", // Amarillo muy claro
  },
};

const key_ghost = {
  "0%, 6%, 12%": {
    "text-shadow": "none",
    color: "#e0e0e0", // Gris claro
  },
  "3%, 9%": {
    "text-shadow":
      "0 0 15px rgba(128, 0, 128, 0.8), 0 0 25px rgba(255, 255, 255, 0.4)", // Brillo morado
    color: "#d9d9d9", // Gris claro
  },
  "60%": {
    "text-shadow":
      "0 0 15px rgba(128, 0, 128, 0.6), 0 0 25px rgba(255, 255, 255, 0.5)", // Brillo morado
    color: "#9b59b6", // Morado
  },
  "100%": {
    "text-shadow":
      "0 0 15px rgba(128, 0, 128, 0.4), 0 0 30px rgba(0, 0, 0, 0.2)", // Brillo suave morado
    color: "#f0f0f0", // Blanco grisáceo
  },
};

const key_zombie = {
  "0%, 6%, 12%": {
    "text-shadow": "none",
    color: "#3a3a3a", // Gris oscuro para el zombie
  },
  "3%, 9%": {
    "text-shadow":
      "0 0 15px rgba(0, 255, 0, 0.8), 0 0 25px rgba(255, 255, 255, 0.4)", // Verde brillante
    color: "#7cfc00", // Verde más claro
  },
  "60%": {
    "text-shadow":
      "0 0 15px rgba(0, 255, 0, 0.6), 0 0 25px rgba(255, 255, 255, 0.5)", // Verde moderado
    color: "#98fb98", // Verde muy claro
  },
  "100%": {
    "text-shadow":
      "0 0 15px rgba(0, 255, 0, 0.4), 0 0 30px rgba(255, 255, 255, 0.2)", // Verde suave
    color: "#c0e0c0", // Verde pálido
  },
};

const key_skeleton = {
  "0%, 6%, 12%": {
    "text-shadow": "none",
    color: "#ffffff", // Blanco para la calavera
  },
  "3%, 9%": {
    "text-shadow":
      "0 0 10px rgba(255, 255, 255, 0.8), 0 0 15px rgba(101, 67, 33, 0.3)",
    color: "#e0e0e0", // Gris claro
  },
  "60%": {
    "text-shadow":
      "0 0 10px rgba(255, 255, 255, 0.6), 0 0 15px rgba(101, 67, 33, 0.4)",
    color: "#b0b0b0", // Gris más claro
  },
  "100%": {
    "text-shadow":
      "0 0 10px rgba(255, 255, 255, 0.4), 0 0 15px rgba(101, 67, 33, 0.2)",
    color: "#d0d0d0", // Gris muy claro
  },
};

const key_werewolf = {
  "0%, 6%, 12%": {
    "text-shadow": "none",
    color: "#3b3b3b",
  },
  "3%, 9%": {
    "text-shadow":
      "0 0 10px rgba(101, 67, 33, 0.8), 0 0 15px rgba(255, 255, 255, 0.3)",
    color: "#271b16",
  },
  "60%": {
    "text-shadow":
      "0 0 10px rgba(101, 67, 33, 0.6), 0 0 15px rgba(255, 255, 255, 0.4)",
    color: "#9e6f4d",
  },
  "100%": {
    "text-shadow":
      "0 0 10px rgba(101, 67, 33, 0.4), 0 0 15px rgba(255, 255, 255, 0.2)",
    color: "#493a31",
  },
};

const key_vampire = {
  "0%, 6%, 12%": {
    "text-shadow": "none",
    color: "#2c2c2c", // Gris oscuro
  },
  "3%, 9%": {
    "text-shadow":
      "0 0 10px rgba(200, 0, 0, 0.8), 0 0 15px rgba(255, 255, 255, 0.3)", // Brillo rojo
    color: "#8b0000", // Rojo oscuro
  },
  "60%": {
    "text-shadow":
      "0 0 10px rgba(200, 0, 0, 0.6), 0 0 15px rgba(255, 255, 255, 0.4)", // Brillo rojo
    color: "#a52a2a", // Rojo medio
  },
  "100%": {
    "text-shadow":
      "0 0 10px rgba(200, 0, 0, 0.4), 0 0 20px rgba(255, 255, 255, 0.2)", // Brillo suave rojo
    color: "#fffafa", // Blanco ahumado
  },
};

const key_shine = {
  "0%": { left: "-75%" },
  "100%": { left: "125%" },
};

const key_roll_and_stop = {
  "0%": {
    transform: "translateX(0) rotate(0deg)",
  },
  "50%": {
    transform: "translateX(50%) rotate(180deg)", // Rebote hacia arriba
  },
  "75%": {
    transform: "translateX(75%) rotate(270deg))", // Baja de nuevo
  },
  "100%": {
    transform: "translateX(100%) rotate(360deg)", // Llega a destino sin rebote
  },
};

const key_roll_reverse = {
    "0%": {
      transform: "translateX(-100%) rotate(0deg)", // Comienza desde la derecha
    },
    "50%": {
      transform: "translateX(-125%) rotate(180deg)", // Rebote hacia arriba
    },
    "75%": {
      transform: "translateX(-150%) rotate(270deg)", // Baja de nuevo
    },
    "100%": {
      transform: "translateX(-200%) rotate(360deg)", // Llega al centro
    },
  };
  


export const keyframes = {
  key_spider,
  key_pumpkin,
  key_mummy,
  key_witch,
  key_ghost,
  key_zombie,
  key_skeleton,
  key_werewolf,
  key_vampire,
  key_shine,
  key_slide_in_left,
  key_zoom_in,
  key_destroy,
  key_roll_and_stop,
  key_roll_reverse
};
export const animation = {
  "title-spider": "key_spider 4s infinite",
  "title-pumpkin": "key_pumpkin 4s infinite",
  "title-mummy": "key_mummy 4s infinite",
  "title-witch": "key_witch 4s infinite",
  "title-ghost": "key_ghost 4s infinite",
  "title-zombie": "key_zombie 4s infinite",
  "title-skeleton": "key_skeleton 4s infinite",
  "title-werewolf": "key_werewolf 4s infinite",
  "title-vampire": "key_vampire 4s infinite",
  shine: "key_shine 1s ease forwards",
  "slide-in-left": "key_slide_in_left 0.5s ease-out forwards",
  "zoom-in": "key_zoom_in 0.5s ease-out forwards",
  destroy: "destroy 0.5s ease-out forwards",
  rol_stop: 'key_roll_and_stop 1s ease-out forwards',
  rol_reverse: 'key_roll_reverse 1s ease-out forwards'
};
