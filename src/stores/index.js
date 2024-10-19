import { atom, map } from 'nanostores';
import { MODEL_TOPIC } from '../utils/constants';

export const openActionStore = atom(false);

export const topicHalloweenStore = atom(MODEL_TOPIC.skeleton);

export const isMouseFollowEnabledStore = atom(true);

export const isLoadingImageUploadStore = atom(false);

export const imagesEditArrayStore = atom([
  {
    id: 1,
    url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1666206428/samples/ecommerce/analog-classic.jpg",
    publicId: "difer-images",
    isGalery: true
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1666206429/samples/food/dessert.jpg",
    publicId: "difer-images",
    isGalery: true
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1666481128/Images/fiuxieared0jls6jl3gw.png",
    publicId: "difer-images",
    isGalery: true
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1666206428/samples/animals/cat.jpg",
    publicId: "difer-images",
    isGalery: true
  },
]);

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
