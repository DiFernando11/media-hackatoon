import React from "react";
import { Cog8ToothIcon } from "@heroicons/react/24/solid";
import useStoreApp from "../hooks/useStoreApp";
import classNames from "classnames";
import useAutoFontSize from "../hooks/useAutoFontSize";

function HeaderPresentation() {
  const { setOpenActionMedia, getSelectedTopic } = useStoreApp();
  const containerRef = useAutoFontSize({
    text: "Miduhallowcloud",
    minFontSizeRem: 1,
  });
  const currentTopic = getSelectedTopic();
  return (
    <div
      className={classNames(
        "relative mb-5",
        "flex flex-col justify-center",
        "text-center"
      )}
    >
      <div ref={containerRef}>
        <h1 className={classNames(currentTopic.animationTitle, "font-zombie")}>
          Miduhallowcloud
        </h1>
      </div>
    </div>
  );
}

export default HeaderPresentation;
