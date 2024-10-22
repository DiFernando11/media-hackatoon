import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import InputText from "../../../InputText";
import NumberInput from "../../../NumberInput";
import InputColor from "../../../InputColor";
import { useTranslation } from "react-i18next";

function AddBody({
  openSection,
  setIsOpen,
  inputsValue,
  handleChange,
  errors,
  setErrors,
}) {
  const { t } = useTranslation();
  return (
    <div>
      {openSection.body && (
        <>
          <InputText
            handleChange={handleChange}
            inputValue={inputsValue.textBody}
            inputName="textBody"
            error={errors.textBody}
            label={t("labelBody")}
            placeholder={t("phBodyCreated")}
          />
          <div className="flex gap-3 justify-center items-center">
            <NumberInput
              inputName={"fontSizeBody"}
              inputValue={inputsValue.fontSizeBody}
              handleChange={handleChange}
              error={errors.fontSizeBody}
              placeholder={t("numberPh")}
            />
            <InputColor
              handleChange={handleChange}
              inputValue={inputsValue.colorBody}
              inputName="colorBody"
            />
          </div>
          {errors.fontSizeBody && (
            <p className="text-red-500 font-general-md">
              {errors.fontSizeBody}
            </p>
          )}
        </>
      )}
      <div
        className="flex justify-end items-center gap-1 cursor-pointer"
        onClick={() => {
          setErrors({ ...errors, fontSizeBody: "", textBody: "" });
          setIsOpen("body");
        }}
      >
        {openSection.body ? (
          <XMarkIcon className="size-3 text-white font-extrabold" />
        ) : (
          <PlusIcon className="size-3 text-white font-extrabold" />
        )}
        <span className="text-white font-general-md text-end">
          {openSection.body ? t("deletedBody") : t("addBody")}
        </span>
      </div>
    </div>
  );
}

export default AddBody;
