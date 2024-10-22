import classNames from "classnames";
import React, { useState } from "react";
import useStoreApp from "../hooks/useStoreApp";

function ButtonAction({
  id,
  name,
  isActive,
  handleAction,
  isLoading,
  removeButton,
  isClickPass,
  isBorder = true,
}) {
  const { getSelectedTopic } = useStoreApp();
  const bgColor = getSelectedTopic().bgColor.secondary;
  const [activeButton, setActiveButton] = useState(isActive);

  const handleActiveAction = () => {
    if (isClickPass) {
      setActiveButton(true);
      setTimeout(() => {
        setActiveButton(false);
      }, 1000);
    }
    handleAction();
  };

  return (
    <button
      id={id}
      onClick={!isLoading || removeButton ? handleActiveAction : undefined}
      className={classNames(
        "w-full font-general text-white pt-1 flex justify-between items-center px-1",
        {
          "cursor-pointer": !isLoading,
          "pointer-events-none": isLoading,
          "border-t": isBorder,
        }
      )}
    >
      <p className="-text-xs-1">{name}</p>
      {isLoading && removeButton && (
        <div
          className={classNames(
            "animate-spin rounded-full w-4 h-4 border-t-2",
            "border-yellow-500"
          )}
        />
      )}
      {!isLoading && !removeButton && (
        <span
          className={classNames("w-5 h-5 min-h-5 min-w-5 rounded-full border", {
            "bg-black": !activeButton,
          })}
          style={{
            transition: "background-color 0.5s ease",
            border: activeButton ? "2px solid" : "1px solid",
            borderColor: activeButton ? "white" : bgColor,
            backgroundColor: activeButton ? bgColor : "black",
          }}
        />
      )}
    </button>
  );
}

export default ButtonAction;
