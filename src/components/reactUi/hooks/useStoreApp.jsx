import { useStore } from "@nanostores/react";
import { openActionStore } from "../../../stores";

function useStoreApp() {
  const openActionMedia = useStore(openActionStore);

  const setOpenActionMedia = (isOpen) => {
    openActionStore.set(isOpen);
  };

  return {
    openActionMedia,
    setOpenActionMedia,
  };
}

export default useStoreApp;
