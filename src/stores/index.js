import { atom } from 'nanostores';
import { MODEL_TOPIC } from '../utils/constants';

export const openActionStore = atom(false);

export const topicHalloweenStore = atom(MODEL_TOPIC.skeleton);

export const isMouseFollowEnabledStore = atom(true);
