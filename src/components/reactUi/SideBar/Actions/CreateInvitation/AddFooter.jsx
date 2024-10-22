import React from "react";
import InputText from "../../../InputText";
import NumberInput from "../../../NumberInput";
import InputColor from "../../../InputColor";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";

function AddFooter({
  handleChange,
  inputsValue,
  errors,
  openSection,
  setIsOpen,
  setErrors,
}) {
  const { t } = useTranslation();
  return (
    <div>
      {openSection.footer && (
        <>
          <InputText
            handleChange={handleChange}
            inputValue={inputsValue.textFooter}
            inputName="textFooter"
            label={t("moreInfoFooter")}
            error={errors.textFooter}
            placeholder={t('phFooter')}
          />
          <div className="flex gap-3 justify-center items-center">
            <NumberInput
              inputName={"fontSizeFooter"}
              inputValue={inputsValue.fontSizeFooter}
              handleChange={handleChange}
              error={errors.fontSizeFooter}
              placeholder={t('numberPh')}
            />
            <InputColor
              handleChange={handleChange}
              inputValue={inputsValue.colorFooter}
              inputName="colorFooter"
            />
          </div>
          {errors.fontSizeFooter && (
            <p className="text-red-500 font-general-md">
              {errors.fontSizeFooter}
            </p>
          )}
        </>
      )}

      {(openSection.body || openSection.footer) && (
        <div
          className="flex justify-end items-center gap-1 cursor-pointer"
          onClick={() => {
            setErrors({ ...errors, fontSizeFooter: "", textFooter: "" });
            setIsOpen("footer");
          }}
        >
          {openSection.footer ? (
            <XMarkIcon className="size-3 text-white font-extrabold" />
          ) : (
            <PlusIcon className="size-3 text-white font-extrabold" />
          )}
          <span className="text-white font-general-md text-end">
            {openSection.footer
              ? t('deletedFooter')
              : t('addFooter')}
          </span>
        </div>
      )}
    </div>
  );
}

export default AddFooter;
