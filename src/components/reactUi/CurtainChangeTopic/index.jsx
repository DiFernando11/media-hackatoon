import React, { useEffect, useState } from "react";
import useStoreApp from "../hooks/useStoreApp";
import classNames from "classnames";

const CurtainChangeTopic = () => {
  const { getSelectedTopic } = useStoreApp();
  const [isOpen, setIsOpen] = useState(true);
  const currentTopic = getSelectedTopic();

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[999] flex ${
        isOpen ? "" : "pointer-events-none"
      }`}
    >
      <div
        className={classNames(
          "absolute top-0 left-0 h-full w-1/2 transition-transform ease-in-out",
          "duration-[2000ms]",
          {
            "translate-x-0": isOpen,
            "-translate-x-full": !isOpen,
          }
        )}
        style={{
          background: "linear-gradient(135deg, #2c2c2c, #4b0f0f)",
        }}
      >
        <div className="absolute top-10 justify-center flex items-center w-16 h-16 text-white bg-black rounded-full animate-rol_stop">
          <img src="/cloudinary.jpg" className="w-16 h-16 rounded-full" />
        </div>
        <div
          className="background-image-initial absolute flex justify-center items-center right-0 top-1/2 transform -translate-y-1/2"
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            backgroundColor: "red",
            clipPath: "inset(0 50% 0 0)",
            marginRight: "-125px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
          }}
        >
          <span
            className={classNames(
              currentTopic.animationTitle,
              "-ml-[96px] font-general text-white text-[32px]  font-bold"
            )}
          >
            Miduhal
          </span>
        </div>
      </div>

      <div
        className={classNames(
          "absolute top-0 right-0 h-full w-1/2 transition-transform  ease-in-out",
          "duration-[2000ms]",
          {
            "translate-x-0": isOpen,
            "translate-x-full": !isOpen,
          }
        )}
        style={{
          background: "linear-gradient(135deg, #2c2c2c, #4b0f0f)",
        }}
      >
        <div
          style={{
            left: "100%",
          }}
          className="absolute top-10 justify-center flex items-center w-16 h-16 text-white bg-black rounded-full animate-rol_reverse"
        >
          <img src="/midudev.jfif" className="w-16 h-16 rounded-full" />
        </div>
        <div
          className="background-image-initial absolute flex justify-center items-center left-0 top-1/2 transform -translate-y-1/2"
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            clipPath: "inset(0 0 0 50%)",
            marginLeft: "-126px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
          }}
        >
          <span
            className={classNames(
              currentTopic.animationTitle,
              "-mr-[116px] font-general text-white text-[32px] font-bold"
            )}
          >
            lowcloud
          </span>
        </div>
      </div>
    </div>
  );
};

export default CurtainChangeTopic;
