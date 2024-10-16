import { useStore } from "@nanostores/react";
import {
  openActionStore,
  topicHalloweenStore,
  isMouseFollowEnabledStore,
  initTopicConfigStore,
} from "../../../stores";
import { bgColorWitch } from "../../../utils/constants";
import { modelByTopic } from "../../../utils";

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

  const getSelectedTopic = () => {
    const currenTopic = modelByTopic(getTopicHalloween);
    return currenTopic;
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

  const setDurationAnimationClose = (duration) => {
    initTopicConfigStore.setKey("durationCloseAnimation", duration);
  };

  const setBackgroundCurtain = (bg) => {
    initTopicConfigStore.setKey("backgroundCurtain", bgColorWitch);
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
    setTextInitTopic,
    setDurationAnimation,
    setBackgroundCurtain,
    setDurationAnimationClose,
  };
}

export default useStoreApp;
