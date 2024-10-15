import { useStore } from "@nanostores/react";
import {
  openActionStore,
  topicHalloweenStore,
  isMouseFollowEnabledStore,
  initTopicConfigStore,
} from "../../../stores";
import { bgColorWitch } from "../../../utils/constants";

function useStoreApp() {
  const getInitTopicConfig = useStore(initTopicConfigStore);
  const openActionMedia = useStore(openActionStore);
  const getTopicHalloween = useStore(topicHalloweenStore);
  const getModeMoveModel = useStore(isMouseFollowEnabledStore);

  const setOpenActionMedia = (isOpen) => {
    openActionStore.set(isOpen);
  };

  const setTopicHalloween = (topic) => {
    topicHalloweenStore.set(topic);
  };

  const setModeMoveModel = (typeModel) => {
    isMouseFollowEnabledStore.set(typeModel);
  };

  const setOpenInitTopic = (isOpen) => {
    initTopicConfigStore.setKey("isOpen", isOpen);
  };

  const setTextInitTopic = (text) => {
    initTopicConfigStore.setKey("text", text);
  };

  const setDurationAnimation = (duration) => {
    initTopicConfigStore.setKey("durationAnimation", duration);
  };
  const setBackgroundCurtain = (bg) => {
    initTopicConfigStore.setKey("backgroundCurtain", bgColorWitch);
  };

  return {
    openActionMedia,
    setOpenActionMedia,
    getTopicHalloween,
    setTopicHalloween,
    getModeMoveModel,
    setModeMoveModel,
    getInitTopicConfig,
    setOpenInitTopic,
    setTextInitTopic,
    setDurationAnimation,
    setBackgroundCurtain
  };
}

export default useStoreApp;
