import React, { useState } from "react";
import ButtonAction from "../../../ButtonAction";
import useTransformImage from "../../../hooks/useTransformImage";
import InputText from "../../../InputText";

function GenerateBgPersonalizate() {
  const { handleGetCdlImage } = useTransformImage();
  const [inputValue, setInputValue] = useState("");
  const [isGenerate, setIsGenerate] = useState(false);
  const textAlert =
    "Actualmente, nuestra IA solo puede procesar texto en ingles.";

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
    setError(
      value.length > 100
        ? "Haz alcanzado el limite de caracteres posibles para enviar a nuestra IA."
        : ""
    );
  };

  const [error, setError] = useState(textAlert);
  return (
    <div className="flex flex-col gap-1">
      <ButtonAction
        name={"Generar fondo personalizado"}
        handleAction={() => setIsGenerate(true)}
        isClickPass
        removeButton={isGenerate}
      />
      {isGenerate && (
        <>
          <InputText
            label={
              "Escribe el tipo de fondo que deseas y nuestra IA lo hara para ti."
            }
            error={error}
            handleChange={handleChange}
            inputValue={inputValue}
            placeholder={"Describe claramente lo que necesitas."}
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
