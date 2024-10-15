const SM = 480;
export const isSmMQ = (currentWidth) => currentWidth <= 480; 
export const SIDE_BAR_APP = "sideBarApp"
export const MAX_SIZE_SIDE_BAR = 0.6
export const MIN_SIZE_SIDE_BAR = 0.2
export const T_SKELETON = 'skeleton'
export const T_ZOMBIES = 'zombies'
export const T_GHOST = 'ghost'
export const T_VAMPIRE = 'vampire'
export const T_WITCH = 'witch'
export const T_WEREWOLF = 'werewolf'
export const T_MUMMY = 'mummy'
export const T_PUMPKIN = 'pumpkin'
export const T_SPIDER = 'spider'

  export const bgColorZombie = 
  "radial-gradient(circle at 10% 10%, rgba(58, 58, 58, 0.2), transparent 60%), " +
  "radial-gradient(circle at 90% 10%, rgba(124, 252, 0, 0.15), transparent 65%), " +
  "radial-gradient(circle at 90% 90%, rgba(152, 251, 152, 0.1), transparent 70%)";

  export const bgColorGhost = 
  "radial-gradient(circle at 10% 10%, rgba(144, 120, 200, 0.25), transparent 60%), " +
  "radial-gradient(circle at 90% 10%, rgba(128, 0, 128, 0.15), transparent 65%), " +
  "radial-gradient(circle at 90% 90%, rgba(255, 255, 255, 0.1), transparent 70%)";

  export const bgColorSkeleton = 
  "radial-gradient(circle at 10% 10%, rgba(255, 255, 255, 0.2), transparent 60%), " +
  "radial-gradient(circle at 90% 10%, rgba(224, 224, 224, 0.15), transparent 65%), " +
  "radial-gradient(circle at 90% 90%, rgba(176, 176, 176, 0.1), transparent 70%)";

  export const bgColorVampire = 
  "radial-gradient(circle at 10% 10%, rgba(44, 44, 44, 0.3), transparent 60%), " +
  "radial-gradient(circle at 90% 10%, rgba(139, 0, 0, 0.2), transparent 65%), " +
  "radial-gradient(circle at 90% 90%, rgba(165, 42, 42, 0.15), transparent 70%)";

  export const bgColorMummy = 
  "radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.6), transparent 70%), " + // Blanco suave
  "radial-gradient(circle at 90% 80%, rgba(200, 180, 160, 0.4), transparent 75%), " + // Marrón claro
  "radial-gradient(circle at 50% 50%, rgba(220, 200, 180, 0.2), transparent 80%)"; // Marrón beige suave

  export const bgColorPumpkin = 
  "radial-gradient(circle at 30% 20%, rgba(0, 0, 0, 0.6), transparent 70%), " + // Negro con un toque de opacidad
  "radial-gradient(circle at 70% 80%, rgba(255, 140, 0, 0.4), transparent 75%), " + // Naranja más sutil
  "radial-gradient(circle at 50% 50%, rgba(50, 50, 50, 0.5), transparent 80%)"; // Gris oscuro

  export const bgColorSpider = 
  "radial-gradient(circle at 30% 20%, rgba(0, 0, 0, 0.6), transparent 70%), " + // Negro con un toque de opacidad
  "radial-gradient(circle at 70% 80%, rgba(50, 50, 50, 0.4), transparent 75%), " + // Gris oscuro más sutil
  "radial-gradient(circle at 50% 50%, rgba(100, 100, 100, 0.3), transparent 80%)"; // Gris más claro

  export const bgColorWerewolf = 
  "radial-gradient(circle at 30% 20%, rgba(0, 0, 0, 0.7), transparent 70%), " + // Negro con más opacidad
  "radial-gradient(circle at 70% 80%, rgba(39, 27, 22, 0.5), transparent 75%), " + // Marrón oscuro sutil
  "radial-gradient(circle at 50% 50%, rgba(158, 111, 77, 0.4), transparent 80%)"; // Marrón más claro

  export const bgColorWitch = 
  "radial-gradient(circle at 30% 20%, rgba(0, 0, 0, 0.8), transparent 70%), " + // Negro con opacidad
  "radial-gradient(circle at 70% 80%, rgba(255, 255, 0, 0.2), transparent 75%), " + // Amarillo suave
  "radial-gradient(circle at 50% 50%, rgba(128, 0, 128, 0.2), transparent 80%)"; // Morado suave




export const MODEL_TOPIC = {
    [T_SKELETON]: 'skeleton',
    [T_ZOMBIES]: 'zombies',
    [T_GHOST]: 'ghost',
    [T_VAMPIRE]: 'vampire',
    [T_WITCH]: 'witch',
    [T_WEREWOLF]: 'werewolf',
    [T_MUMMY]: 'mummy',
    [T_PUMPKIN]: 'pumpkin',
    [T_SPIDER]: 'spider'
}
