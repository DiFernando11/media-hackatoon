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
import { useTranslation } from "react-i18next";

function ActionCreateInvitation() {
  const { handleSetTextImage, handleUploadImage } = useTransformImage();
  const { t } = useTranslation();
  const { getSelectedTopic } = useStoreApp();
  const currentTopic = getSelectedTopic();
  const initialOpen = {
    body: false,
    footer: false,
  };
  const [openSection, setOpenSection] = useState(initialOpen);
  const initialValue = {
    textHeader: t("textHeaderCreated"),
    fontSizeHeader: "80",
    textBody: t("textBodyCreated"),
    fontSizeBody: "40",
    textFooter: t("textFooterCreated"),
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
      errorMessage = t("validTittle");
    } else if (
      name === "textBody" &&
      (value.length > 120 || value.length < 8)
    ) {
      errorMessage = t("bodyValid");
    } else if (
      name === "textFooter" &&
      (value.length > 60 || value.length < 8)
    ) {
      errorMessage = t("validFooter");
    }

    if (
      name === "fontSizeHeader" ||
      name === "fontSizeBody" ||
      name === "fontSizeFooter"
    ) {
      const fontSizeValue = Number(value);
      if (fontSizeValue > 400 || fontSizeValue < 8) {
        errorMessage = t("validFontSize");
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
        {t("invitedFriends")}
      </p>
      <div>
        <ButtonAction
          handleAction={handleAction}
          name={t("createInvitation")}
          isClickPass
        />
        {hasErrors && (
          <p className="text-red-500 font-general-md text-end">
            {t("errorsValid")}
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
