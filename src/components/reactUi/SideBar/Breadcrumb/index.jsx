import React from "react";
import useStoreApp from "../../hooks/useStoreApp";
import { modelByTopic } from "../../../../utils";

function Breadcrumb() {
  const { getTopicHalloween } = useStoreApp();
  const currentTopic = modelByTopic(getTopicHalloween);
  const color = currentTopic.bgColor.secondary;
  return (
    <div className="flex items-center gap-2 uppercase">
      <div
        className="rounded-full p-1 border border-white"
        style={{
          backgroundColor: color,
        }}
      >
        <img className="w-6 h-6" src={currentTopic.bgImage} />
      </div>
      <h2
        className="font-general text-white text-3xl"
      >
        {currentTopic.name}
      </h2>
    </div>
  );
}

export default Breadcrumb;
