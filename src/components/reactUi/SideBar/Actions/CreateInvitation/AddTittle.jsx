import React from "react";
import InputText from "../../../InputText";
import NumberInput from "../../../NumberInput";
import InputColor from "../../../InputColor";

function AddTittle({ handleChange, inputsValue, errors }) {
  return (
    <div>
      <InputText
        handleChange={handleChange}
        inputValue={inputsValue.textHeader}
        inputName="textHeader"
        error={errors.textHeader}
        label={"Escribe un titulo"}
        placeholder={"Te invito a mi fiesta..."}
      />
      <div className="flex gap-3 justify-center items-center">
        <NumberInput
          inputName={"fontSizeHeader"}
          inputValue={inputsValue.fontSizeHeader}
          handleChange={handleChange}
          error={errors.fontSizeHeader}
          placeholder={"Define el tamaño..."}
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
