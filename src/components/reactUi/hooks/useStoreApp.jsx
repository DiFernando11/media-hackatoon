import { useStore } from "@nanostores/react";
import {
  openActionStore,
  topicHalloweenStore,
  isMouseFollowEnabledStore,
} from "../../../stores";

function useStoreApp() {
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

  return {
    openActionMedia,
    setOpenActionMedia,
    getTopicHalloween,
    setTopicHalloween,
    getModeMoveModel,
    setModeMoveModel
  };
}

export default useStoreApp;
