import { useStore } from "@nanostores/react";
import {
  openActionStore,
  topicHalloweenStore,
  isMouseFollowEnabledStore,
  initTopicConfigStore,
  currentImageUploadStore,
  isLoadingImageUploadStore,
  currentImageEditStore,
  imagesEditArrayStore,
  sliderPositionStore,
  lastCurrentImageUploadStore,
  isLoadingAllPageStore,
  currentComponentKeyStore,
} from "../../../stores";
import { modelByTopic } from "../../../utils";
import useLocalStorage from "./useLocalStorage";

function useStoreApp() {
  const { setCurrentImageUploadByLs, setCurrentImageEditByLs } =
    useLocalStorage();
  const getInitTopicConfig = useStore(initTopicConfigStore);
  const openActionMedia = useStore(openActionStore);
  const getTopicHalloween = useStore(topicHalloweenStore);
  const getModeMoveModel = useStore(isMouseFollowEnabledStore);
  const getCurrentImageUpload = useStore(currentImageUploadStore);
  const getLoadingImageUpload = useStore(isLoadingImageUploadStore);
  const getCurrentImageEdit = useStore(currentImageEditStore);
  const getImagesEditArray = useStore(imagesEditArrayStore);
  const getSliderPosition = useStore(sliderPositionStore);
  const getLastCurrentImageUpload = useStore(lastCurrentImageUploadStore);
  const getIsLoadingAllPage = useStore(isLoadingAllPageStore);
  const getCurrentComponentKey = useStore(currentComponentKeyStore);

  const setOpenActionMedia = (isOpen) => {
    openActionStore.set(isOpen);
  };

  const setTopicHalloween = (topic) => {
    topicHalloweenStore.set(topic);
  };

  const getSelectedTopic = () => {
    const currenTopic = modelByTopic(getTopicHalloween);
    return currenTopic;
  };

  const setModeMoveModel = (typeModel) => {
    isMouseFollowEnabledStore.set(typeModel);
  };

  const setOpenInitTopic = (isOpen) => {
    initTopicConfigStore.set(isOpen);
  };

  const setCurrentImageUpload = ({
    id = null,
    url = "",
    name = "",
    crop = {},
    isGalery = false,
    body = null,
    publicId = null,
  }) => {
    const currentData = {
      id,
      url,
      name,
      crop,
      isGalery,
      body,
      publicId,
    };
    const saveLastImage = getLastCurrentImageUpload?.id
      ? getLastCurrentImageUpload
      : getCurrentImageUpload;
    const saveUploadImage = isGalery ? saveLastImage : currentData;

    setCurrentImageUploadByLs(saveUploadImage);

    currentImageUploadStore.setKey("url", url);
    currentImageUploadStore.setKey("id", id);
    currentImageUploadStore.setKey("crop", crop);
    currentImageUploadStore.setKey("name", name);
    currentImageUploadStore.setKey("body", body);
    currentImageUploadStore.setKey("isGalery", isGalery);
    currentImageUploadStore.setKey("publicId", publicId);
  };
  const setLastCurrentImageUpload = ({
    id = null,
    url = "",
    name = "",
    crop = {},
    body = null,
    publicId = null,
  }) => {
    lastCurrentImageUploadStore.setKey("url", url);
    lastCurrentImageUploadStore.setKey("id", id);
    lastCurrentImageUploadStore.setKey("crop", crop);
    lastCurrentImageUploadStore.setKey("name", name);
    lastCurrentImageUploadStore.setKey("body", body);
    lastCurrentImageUploadStore.setKey("publicId", publicId);
  };

  const setIsLoadingImageUpload = (loading) => {
    isLoadingImageUploadStore.set(loading);
  };

  const setCurrentImageEdit = ({
    url = "",
    id = null,
    body = null,
    publicId = null,
    name = "",
    crop = {},
  }) => {
    const currentData = {
      id,
      url,
      name,
      crop,
      body,
      publicId,
    };
    setCurrentImageEditByLs(currentData);
    currentImageEditStore.setKey("url", url);
    currentImageEditStore.setKey("id", id);
    currentImageEditStore.setKey("body", body);
    currentImageEditStore.setKey("publicId", publicId);
    currentImageEditStore.setKey("name", name);
    currentImageEditStore.setKey("crop", crop);
  };

  const addImagesEditArray = (newItem) => {
    const updatedArray = [newItem, ...getImagesEditArray];
    imagesEditArrayStore.set(updatedArray);
  };
  const deleteImagesEditArray = (id) => {
    const updatedArray = getImagesEditArray.filter((image) => image.id !== id);
    imagesEditArrayStore.set(updatedArray);
    return updatedArray;
  };

  const deleteAllImagesEditArray = () => {
    imagesEditArrayStore.set([]);
  };

  const setSliderPosition = (position) => {
    sliderPositionStore.set(position);
  };

  const setIsLoadingAllPage = (loading) => {
    isLoadingAllPageStore.set(loading);
  };

  const setCurrentComponentKey = (current) => {
    currentComponentKeyStore.set(current);
  };

  return {
    openActionMedia,
    getSelectedTopic,
    setOpenActionMedia,
    getTopicHalloween,
    setTopicHalloween,
    getModeMoveModel,
    setModeMoveModel,
    getInitTopicConfig,
    setOpenInitTopic,
    getCurrentImageUpload,
    setCurrentImageUpload,
    getLoadingImageUpload,
    setIsLoadingImageUpload,
    getCurrentImageEdit,
    setCurrentImageEdit,
    getImagesEditArray,
    addImagesEditArray,
    setSliderPosition,
    getSliderPosition,
    getLastCurrentImageUpload,
    setLastCurrentImageUpload,
    deleteImagesEditArray,
    deleteAllImagesEditArray,
    getIsLoadingAllPage,
    setIsLoadingAllPage,
    setCurrentComponentKey,
    getCurrentComponentKey,
  };
}

export default useStoreApp;
