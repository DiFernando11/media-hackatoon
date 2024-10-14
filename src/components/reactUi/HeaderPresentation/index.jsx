import React from "react";
import { Cog8ToothIcon } from "@heroicons/react/24/solid";
import useStoreApp from "../hooks/useStoreApp";
import classNames from "classnames";
import { modelByTopic } from "../../../utils";
import "./index.css";

function HeaderPresentation() {
  const { setOpenActionMedia, getTopicHalloween } = useStoreApp();
  const currentTopic = modelByTopic(getTopicHalloween);
  console.log({ currentTopic });
  return (
    <div
      className={classNames(
        "h-[100px] relative",
        "flex flex-col justify-center",
        "text-center",
      )}
    >
      <h1
        className={`${currentTopic.animationTitle} ${currentTopic.fontFamily}`}
        style={{ fontSize: "4vw" }}
      >
        Miduhallowcloud
      </h1>
      <Cog8ToothIcon
        onClick={() => setOpenActionMedia(true)}
        className={classNames(
          "size-8 block cursor-pointer",
          "text-red-200",
          "absolute top-2 right-2",
          "animate-spin",
          "sm:hidden"
        )}
      />
    </div>
  );
}

export default HeaderPresentation;
