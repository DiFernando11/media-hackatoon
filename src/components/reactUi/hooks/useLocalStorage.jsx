import { useState } from "react";
import { modelByTopic } from "../../../utils";

const useLocalStorage = () => {
  const setCurrentTopicByLS = (value) => {
    localStorage.setItem("currentTopic", value);
  };
  const getCurrentTopicByLS = () => {
    const currentTopic = localStorage.getItem("currentTopic");
    return modelByTopic(currentTopic);
  };

  const getCurrentOlnyNameTopicByLS = () => localStorage.getItem("currentTopic");

  return {
    setCurrentTopicByLS,
    getCurrentTopicByLS,
    getCurrentOlnyNameTopicByLS,
  };
};

// Función para obtener el tema actual desde localStorage

export default useLocalStorage;
