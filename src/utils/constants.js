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

export const bgColorSkeleton = 
"radial-gradient(circle at 20% 40%, rgba(255, 255, 255, 0.1), transparent 80%), " +
"radial-gradient(circle at 70% 80%, rgba(240, 240, 240, 0.05), transparent 85%), " +
"radial-gradient(circle at 50% 30%, rgba(230, 230, 230, 0.03), transparent 90%)";

export const bgColorPumpkin = 
  "radial-gradient(circle at 20% 40%, rgba(255, 165, 0, 0.1), transparent 80%), " +
  "radial-gradient(circle at 70% 80%, rgba(255, 140, 0, 0.05), transparent 85%), " +
  "radial-gradient(circle at 50% 30%, rgba(255, 69, 0, 0.03), transparent 90%)";

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
