import React, { useEffect } from "react";
import useStoreApp from "../hooks/useStoreApp";
import classNames from "classnames";

const PresentationChangeTopic = () => {
  const { setOpenInitTopic, getInitTopicConfig, getSelectedTopic } =
    useStoreApp();
  const currentTopic = getSelectedTopic();

  const closeLoader = () => {
    setOpenInitTopic(false);
  };

  useEffect(() => {
    if (getInitTopicConfig.isOpen) {
      const timer = setTimeout(() => {
        closeLoader();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [getInitTopicConfig.isOpen]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 bg-black ${
        getInitTopicConfig.isOpen ? "opacity-100" : "opacity-0 pointer-events-none transition-opacity duration-500"
      }`}
    >
      <h1
        style={{ fontSize: "clamp(2rem, 10vw, 6rem)" }}
        className={classNames(currentTopic.animationTitle, "font-zombie")}
      >
        Miduhallowcloud
      </h1>
    </div>
  );
};

export default PresentationChangeTopic;
