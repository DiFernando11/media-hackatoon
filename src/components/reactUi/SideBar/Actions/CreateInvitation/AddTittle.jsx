import React from "react";
import InputText from "../../../InputText";
import NumberInput from "../../../NumberInput";
import InputColor from "../../../InputColor";
import { T } from "../../../../../../dist/_astro/three.module.CIpW9_cp";
import { useTranslation } from "react-i18next";

function AddTittle({ handleChange, inputsValue, errors }) {
  const { t } = useTranslation();
  return (
    <div>
      <InputText
        handleChange={handleChange}
        inputValue={inputsValue.textHeader}
        inputName="textHeader"
        error={errors.textHeader}
        label={t("labelTittle")}
        placeholder={t("phTittle")}
      />
      <div className="flex gap-3 justify-center items-center">
        <NumberInput
          inputName={"fontSizeHeader"}
          inputValue={inputsValue.fontSizeHeader}
          handleChange={handleChange}
          error={errors.fontSizeHeader}
          placeholder={t('numberPh')}
        />
        <InputColor
          handleChange={handleChange}
          inputValue={inputsValue.colorHeader}
          inputName="colorHeader"
        />
      </div>
      {errors.fontSizeHeader && (
        <p className="text-red-500 font-general-md">{errors.fontSizeHeader}</p>
      )}
    </div>
  );
}

export default AddTittle;
