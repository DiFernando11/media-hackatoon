import React, { useEffect } from "react";
import useStoreApp from "../hooks/useStoreApp";
import classNames from "classnames";

const CurtainChangeTopic = () => {
  const { getInitTopicConfig, setOpenInitTopic } = useStoreApp();

  // Cierra la cortina automáticamente después de 2 segundos cuando está abierta
  useEffect(() => {
    if (getInitTopicConfig.isOpen) {
      const timer = setTimeout(
        () => setOpenInitTopic(false),
        getInitTopicConfig.durationCloseAnimation
      ); // Cierra la cortina después de 2 segundos
      return () => clearTimeout(timer);
    }
  }, [getInitTopicConfig.isOpen, setOpenInitTopic]);

  return (
    <div
      className={`fixed inset-0 z-[999] flex ${
        getInitTopicConfig.isOpen ? "" : "pointer-events-none"
      }`}
    >
      <div
        className={classNames(
          "absolute top-0 left-0 h-full w-1/2 transition-transform ease-in-out",
          getInitTopicConfig.durationAnimation,
          getInitTopicConfig.backgroundCurtain,
          {
            "translate-x-0": getInitTopicConfig.isOpen,
            "-translate-x-full": !getInitTopicConfig.isOpen,
          }
        )}
      >
        <div
          className="absolute flex justify-center items-center right-0 top-1/2 transform -translate-y-1/2"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            backgroundColor: "red",
            clipPath: "inset(0 50% 0 0)",
            marginRight: "-100px",
          }}
        >
          <span className="-ml-[80px] text-white text-xl font-bold">
            Miduhal
          </span>
        </div>
      </div>

      <div
        className={classNames(
          "absolute top-0 right-0 h-full w-1/2 bg-black transition-transform  ease-in-out",
          getInitTopicConfig.durationAnimation,
          {
            "translate-x-0": getInitTopicConfig.isOpen,
            "translate-x-full": !getInitTopicConfig.isOpen,
          }
        )}
      >
        <div
          className="absolute flex justify-center items-center left-0 top-1/2 transform -translate-y-1/2"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            backgroundColor: "red",
            clipPath: "inset(0 0 0 50%)",
            marginLeft: "-100px",
          }}
        >
          <span className="-mr-[86px] text-white text-xl font-bold">
            lowcloud
          </span>
        </div>
      </div>
    </div>
  );
};

export default CurtainChangeTopic;
