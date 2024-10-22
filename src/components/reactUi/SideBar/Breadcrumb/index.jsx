import React from "react";
import useStoreApp from "../../hooks/useStoreApp";
import { useTranslation } from "react-i18next";

function Breadcrumb() {
  const { getSelectedTopic } = useStoreApp();
  const { t } = useTranslation();
  const currentTopic = getSelectedTopic();
  const color = currentTopic.bgColor.secondary;
  return (
    <div className="flex items-center gap-2 uppercase">
      <div
        className="rounded-full p-1 border border-white"
        style={{
          backgroundColor: color,
        }}
      >
        <img className="w-6 h-6 rounded-full" src={currentTopic.bgImage} />
      </div>
      <h2 className="font-general text-white text-3xl">
        {t(currentTopic.name)}
      </h2>
    </div>
  );
}

export default Breadcrumb;
