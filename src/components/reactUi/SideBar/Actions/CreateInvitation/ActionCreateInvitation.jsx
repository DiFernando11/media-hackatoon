import React, { useState } from "react";
import ButtonAction from "../../../ButtonAction";
import useTransformImage from "../../../hooks/useTransformImage";
import useStoreApp from "../../../hooks/useStoreApp";
import InputText from "../../../InputText";
import NumberInput from "../../../NumberInput";
import InputColor from "../../../InputColor";

function ActionCreateInvitation() {
  const { handleSetTextImage, handleUploadImage } = useTransformImage();
  const [inputsValue, setInputsValue] = useState({
    textHeader: "",
    fontSizeHeader: "200",
    textBody: "",
    fontSizeBody: "50",
    textFooter: "",
    fontSizeFooter: "150",
    colorHeader: "",
    colorBody: "",
    colorFooter: "",
  });
  console.log(inputsValue);

  const [errors, setErrors] = useState({
    textHeader: "",
    fontSizeHeader: "",
    textBody: "",
    fontSizeBody: "",
    textFooter: "",
    fontSizeFooter: "",
  });

  const { getSelectedTopic } = useStoreApp();
  const currentTopic = getSelectedTopic();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputsValue((prevState) => ({
      ...prevState,
      ...{ [name]: value },
    }));

    let errorMessage = "";
    if (name === "textHeader" && value.length > 40) {
      errorMessage = "El título no puede tener más de 40 caracteres.";
    } else if (name === "textBody" && value.length > 60) {
      errorMessage = "El cuerpo no puede tener más de 60 caracteres.";
    } else if (name === "textFooter" && value.length > 40) {
      errorMessage =
        "La información adicional no puede tener más de 40 caracteres.";
    }

    if (
      name === "fontSizeHeader" ||
      name === "fontSizeBody" ||
      name === "fontSizeFooter"
    ) {
      const fontSizeValue = Number(value);
      if (fontSizeValue > 500) {
        errorMessage = "El tamaño de la fuente no puede ser mayor de 500.";
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const handleAction = () => {
    handleSetTextImage();
  };

  return (
    <>
      <p className="text-white font-general-md -text-xs-1 leading-5">
        Invita a tus amigos a tu fiesta de halloween.
      </p>
      <ButtonAction
        handleAction={handleAction}
        name={"Crear invitacion"}
        isClickPass
      />
      <InputText
        handleChange={handleChange}
        inputValue={inputsValue.textHeader}
        inputName="textHeader"
        error={errors.textHeader}
        label={"Escribe un titulo"}
        placeholder={"Te invito a mi fiesta..."}
      />
      <p className="font-general-md -text-xs-1 leading-5 mt-4 text-white">
        Personaliza tu texto
      </p>
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
      <InputText
        handleChange={handleChange}
        inputValue={inputsValue.textBody}
        inputName="textBody"
        error={errors.textBody}
        label={"Cuentales tu asunto"}
        placeholder={"Obligatorio traer disfraz..."}
      />
      <div className="flex gap-3 justify-center items-center">
        <NumberInput
          inputName={"fontSizeBody"}
          inputValue={inputsValue.fontSizeBody}
          handleChange={handleChange}
          error={errors.fontSizeBody}
          placeholder={"Define el tamaño..."}
        />
        <InputColor
          handleChange={handleChange}
          inputValue={inputsValue.colorBody}
          inputName="colorBody"
        />
      </div>
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
    </>
  );
}

export default ActionCreateInvitation;
