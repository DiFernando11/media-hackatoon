import classNames from "classnames";
import React from "react";
import useStoreApp from "../hooks/useStoreApp";

function ButtonAction({
  name,
  isActive,
  handleAction,
  isLoading,
  removeButton,
}) {
  const { getSelectedTopic } = useStoreApp();
  const bgColor = getSelectedTopic().bgColor.secondary;

  return (
    <li
      onClick={!isLoading || removeButton ? handleAction : undefined}
      className={classNames(
        "w-full font-general text-white border-t pt-1 mb-2 flex justify-between items-center px-1",
        { "cursor-pointer": !isLoading, "pointer-events-none": isLoading }
      )}
    >
      <p>{name}</p>
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
          className={classNames("w-5 h-5 rounded-full border", {
            "bg-black": !isActive,
          })}
          style={{
            transition: "background-color 0.5s ease",
            border: isActive ? "2px solid" : "1px solid",
            borderColor: isActive ? "white" : bgColor,
            backgroundColor: isActive ? bgColor : "black",
          }}
        />
      )}
    </li>
  );
}

export default ButtonAction;
