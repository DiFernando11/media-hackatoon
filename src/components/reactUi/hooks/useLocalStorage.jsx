import { useState } from "react";
import { modelByTopic } from "../../../utils";

const useLocalStorage = () => {
  const setCurrentTopicByLS = (value) =>
    localStorage.setItem("currentTopic", value);

  const getCurrentTopicByLS = () => {
    const currentTopic = localStorage.getItem("currentTopic");
    return modelByTopic(currentTopic);
  };

  const setCurrentImageUploadByLs = (value) =>
    localStorage.setItem("currentImageUpload", JSON.stringify(value));

  const setCurrentImageEditByLs = (value) =>
    localStorage.setItem("currentImageEdit", JSON.stringify(value));

  const getCurrentOlnyNameTopicByLS = () =>
    localStorage.getItem("currentTopic");

  const getCurrentImageUploadByLs = () => {
    const current = localStorage.getItem("currentImageUpload");
    if (current) return JSON.parse(current);
    return current;
  };
  const getCurrentImageEditByLs = () => {
    const current = localStorage.getItem("currentImageEdit");
    if (current) return JSON.parse(current);
    return current;
  };
  const deleteImageUploadByLs = () =>
    localStorage.removeItem("currentImageUpload");
  const deleteImageEditByLs = () =>
    localStorage.removeItem("currentImageEdit");

  return {
    setCurrentTopicByLS,
    getCurrentTopicByLS,
    getCurrentOlnyNameTopicByLS,
    setCurrentImageUploadByLs,
    getCurrentImageUploadByLs,
    deleteImageUploadByLs,
    setCurrentImageEditByLs,
    deleteImageEditByLs,
    getCurrentImageEditByLs
  };
};

// Función para obtener el tema actual desde localStorage

export default useLocalStorage;
