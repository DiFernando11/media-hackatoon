import React, { useState } from "react";
import ButtonAction from "../../../ButtonAction";
import { useTranslation } from "react-i18next";

function ChangeIdioma() {
  const { t, i18n } = useTranslation();
  const [lng, setLng] = useState("en");
  const changeLanguage = () => {
    const currentLng = lng === "es" ? "en" : "es";
    setLng(currentLng);
    i18n.changeLanguage(currentLng);
  };
  return (
    <ButtonAction
      name={`${t("changeLanguage")} ${lng  === "es" ? "(ENG)" : "(ESP)"}`}
      isClickPass
      handleAction={changeLanguage}
    />
  );
}

export default ChangeIdioma;
