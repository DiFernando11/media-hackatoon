import React from "react";
import InputText from "../../../InputText";
import NumberInput from "../../../NumberInput";
import InputColor from "../../../InputColor";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";

function AddFooter({
  handleChange,
  inputsValue,
  errors,
  openSection,
  setIsOpen,
  setErrors,
}) {
  return (
    <div>
      {openSection.footer && (
        <>
          <InputText
            handleChange={handleChange}
            inputValue={inputsValue.textFooter}
            inputName="textFooter"
            label={"Dales mas informacion"}
            error={errors.textFooter}
            placeholder={"Dia: 31 de Octubre..."}
          />
          <div className="flex gap-3 justify-center items-center">
            <NumberInput
              inputName={"fontSizeFooter"}
              inputValue={inputsValue.fontSizeFooter}
              handleChange={handleChange}
              error={errors.fontSizeFooter}
              placeholder={"Define el tamaño..."}
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
              ? "Eliminar asunto adicional"
              : "Agregar asunto adicional"}
          </span>
        </div>
      )}
    </div>
  );
}

export default AddFooter;
