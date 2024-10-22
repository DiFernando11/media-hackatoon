import React, { useState } from "react";
import ButtonAction from "../../../ButtonAction";
import useTransformImage from "../../../hooks/useTransformImage";
import useStoreApp from "../../../hooks/useStoreApp";
import { useTranslation } from "react-i18next";

function ActionTransformeFace() {
  const { handleTransformFace } = useTransformImage();
  const { t } = useTranslation();
  const { getSelectedTopic } = useStoreApp();
  const currentTopic = getSelectedTopic();
  const [promptsActives, setPromptsActives] = useState({});

  const handleReplaceFace = () => {
    const existedTopic = promptsActives[currentTopic.name] || undefined;
    const cantPropmts = Object.keys(currentTopic.replaceFace).length;

    const countPropmt = cantPropmts === existedTopic ? 1 : existedTopic + 1;
    const currentPromt = existedTopic ? countPropmt : 1;

    setPromptsActives({
      ...promptsActives,
      [currentTopic.name]: existedTopic ? countPropmt : 1,
    });
    handleTransformFace(currentTopic.replaceFace[`prompt-${currentPromt}`]);
  };

  return (
    <>
      <p className="text-white font-general-md text-[18px]">
        {t("replaceFaceDescr")}
      </p>
      <ButtonAction
        name={t('createdMask')}
        handleAction={handleReplaceFace}
        isClickPass
      />
    </>
  );
}

export default ActionTransformeFace;
