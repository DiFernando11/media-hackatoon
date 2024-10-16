import { atom, map } from 'nanostores';
import { MODEL_TOPIC } from '../utils/constants';

export const openActionStore = atom(false);

export const topicHalloweenStore = atom(MODEL_TOPIC.skeleton);

export const isMouseFollowEnabledStore = atom(true);

export const initTopicConfigStore = map({
    isOpen: true,
    text: "Miduhallowcloud",
    durationAnimation: "duration-[2000ms]",
    backgroundCurtain: "bg-red-500",
    durationCloseAnimation: 2000
  });
  
