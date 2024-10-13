import axios from "axios";
import { useCallback } from "react";

const useDownloadImage = () => {
  const toDataURL = async (url) => {
    try {
      // Usando Axios para obtener los datos de la imagen
      const response = await axios.get(url, { responseType: "blob" });
      const imageDataUrl = URL.createObjectURL(response.data);
      return imageDataUrl;
    } catch (error) {
      console.error("Error al obtener la imagen:", error);
      return null;
    }
  };
  const handleDownload = useCallback(async (imageUrl, name, format) => {
    const a = document.createElement("a");
    const imageDataUrl = await toDataURL(imageUrl);

    if (imageDataUrl) {
      const nameDefault = "my-image";
      a.href = imageDataUrl;
      a.download = `${name ?? nameDefault}.${format}`; // Nombre del archivo a descargar
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      console.error("No se pudo descargar la imagen");
    }
  }, []);

  return handleDownload;
};

export default useDownloadImage;
