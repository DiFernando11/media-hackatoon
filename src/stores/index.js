import { atom, map } from 'nanostores';
import { MODEL_TOPIC } from '../utils/constants';

export const openActionStore = atom(false);

export const topicHalloweenStore = atom(MODEL_TOPIC.skeleton);

export const isMouseFollowEnabledStore = atom(true);

export const isLoadingImageUploadStore = atom(false);

export const imagesEditArrayStore = atom([]);

export const sliderPositionStore = atom(1);

export const initTopicConfigStore = map({
    isOpen: false,
    text: "Miduhallowcloud",
    durationAnimation: "duration-[2000ms]",
    backgroundCurtain: "bg-red-500",
    durationCloseAnimation: 2000
});

export const currentImageUploadStore = map({
   url: "",
   id: null,
   crop: {},
   name: "",
   body: null,
   publicId: null
});

export const currentImageEditStore = map({
  url: "",
  id: null,
  body: null,
  publicId: null
});


export const lastCurrentImageUploadStore = map({
  url: "",
  id: null,
  crop: {},
  name: "",
  body: null,
  publicId: null
});
