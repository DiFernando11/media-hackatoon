import React, { useState } from "react";
import ButtonAction from "../../../ButtonAction";
import useTransformImage from "../../../hooks/useTransformImage";
import InputText from "../../../InputText";
import { useTranslation } from "react-i18next";

function GenerateBgPersonalizate() {
  const { handleGetCdlImage } = useTransformImage();
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState("");
  const [isGenerate, setIsGenerate] = useState(false);
  const textAlert = t("alertOnlyIngles");

  const handleAction = () => {
    const sanitizedInput = inputValue
      .replace(/[^\w\s]/gi, "")
      .replace(/\s{2,}/g, " ")
      .trim();

    const body = {
      replaceBackground: sanitizedInput,
    };
    handleGetCdlImage(body);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setError(value.length > 100 ? t("validationMaxium") : "");
  };

  const [error, setError] = useState(textAlert);
  return (
    <div className="flex flex-col gap-1">
      <ButtonAction
        name={t("generateCustomBg")}
        handleAction={() => setIsGenerate(true)}
        isClickPass
        removeButton={isGenerate}
      />
      {isGenerate && (
        <>
          <InputText
            label={t("writeTypeBg")}
            error={error}
            handleChange={handleChange}
            inputValue={inputValue}
            placeholder={t('phWritBg')}
          />
          {!error && inputValue.length > 0 && (
            <ButtonAction
              name={"Generar"}
              handleAction={handleAction}
              isClickPass
              isBorder={false}
            />
          )}
        </>
      )}
    </div>
  );
}

export default GenerateBgPersonalizate;
