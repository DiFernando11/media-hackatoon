import React, { useEffect, useState } from "react";
import ButtonAction from "../../../ButtonAction";
import useTransformImage from "../../../hooks/useTransformImage";
import useStoreApp from "../../../hooks/useStoreApp";
import InputText from "../../../InputText";
import NumberInput from "../../../NumberInput";
import InputColor from "../../../InputColor";
import { PlusIcon } from "@heroicons/react/24/solid";
import AddBody from "./AddBody";
import AddTittle from "./AddTittle";
import AddFooter from "./AddFooter";

function ActionCreateInvitation() {
  const { handleSetTextImage, handleUploadImage } = useTransformImage();
  const { getSelectedTopic } = useStoreApp();
  const currentTopic = getSelectedTopic();
  const initialOpen = {
    body: false,
    footer: false,
  };
  const [openSection, setOpenSection] = useState(initialOpen);
  const initialValue = {
    textHeader: "Invitacion a mi fiesta de halloween",
    fontSizeHeader: "80",
    textBody: "Obligatorio traer disfraz",
    fontSizeBody: "40",
    textFooter: "Dia 31 de Octubre, no faltes",
    fontSizeFooter: "80",
    colorHeader: currentTopic.bgColor.secondary,
    colorBody: currentTopic.bgColor.secondary,
    colorFooter: currentTopic.bgColor.secondary,
  };
  const [inputsValue, setInputsValue] = useState(initialValue);
  const [errors, setErrors] = useState({
    textHeader: "",
    fontSizeHeader: "",
    textBody: "",
    fontSizeBody: "",
    textFooter: "",
    fontSizeFooter: "",
  });

  const handleAddSection = (section) => {
    const switchOpen = !openSection[section];
    setOpenSection({
      ...openSection,
      [section]: switchOpen,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputsValue((prevState) => ({
      ...prevState,
      ...{ [name]: value },
    }));

    let errorMessage = "";
    if (name === "textHeader" && (value.length > 40 || value.length < 8)) {
      errorMessage =
        "El título no puede tener menos de 8 ni más de 40 caracteres.";
    } else if (
      name === "textBody" &&
      (value.length > 120 || value.length < 8)
    ) {
      errorMessage =
        "El cuerpo no puede tener menos de 8 ni más de 120 caracteres.";
    } else if (
      name === "textFooter" &&
      (value.length > 60 || value.length < 8)
    ) {
      errorMessage =
        "La información adicional no puede tener menos de 8 ni más de 60 caracteres.";
    }

    if (
      name === "fontSizeHeader" ||
      name === "fontSizeBody" ||
      name === "fontSizeFooter"
    ) {
      const fontSizeValue = Number(value);
      if (fontSizeValue > 400 || fontSizeValue < 8) {
        errorMessage =
          "El tamaño de la fuente no puede ser menor de 8px ni mayor a 400px.";
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const hasErrors = Object.values(errors).some((error) => error !== "");

  const handleAction = () => {
    if (!hasErrors) {
      handleSetTextImage(inputsValue, openSection);
      setInputsValue(initialValue);
      setOpenSection(initialOpen);
    }
  };

  return (
    <>
      <p className="text-white font-general-md -text-xs-1 leading-5">
        Invita a tus amigos a tu fiesta de halloween.
      </p>
      <div>
        <ButtonAction
          handleAction={handleAction}
          name={"Crear invitacion"}
          isClickPass
        />
        {hasErrors && (
          <p className="text-red-500 font-general-md text-end">
            Tienes errores en tu formulario
          </p>
        )}
      </div>
      <AddTittle
        inputsValue={inputsValue}
        errors={errors}
        handleChange={handleChange}
      />
      <AddBody
        openSection={openSection}
        setIsOpen={handleAddSection}
        inputsValue={inputsValue}
        errors={errors}
        setErrors={setErrors}
        handleChange={handleChange}
      />
      <AddFooter
        openSection={openSection}
        setIsOpen={handleAddSection}
        inputsValue={inputsValue}
        errors={errors}
        setErrors={setErrors}
        handleChange={handleChange}
      />
    </>
  );
}

export default ActionCreateInvitation;
