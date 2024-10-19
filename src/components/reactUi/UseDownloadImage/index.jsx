import axios from "axios";
import { useCallback } from "react";

const useDownloadImage = (setLoadingDownload) => {
  const toDataURL = async (url) => {
    try {
      const response = await axios.get(url, { responseType: "blob" });
      const imageDataUrl = URL.createObjectURL(response.data);
      return imageDataUrl;
    } catch (error) {
      setLoadingDownload(false);
      console.error("Error al obtener la imagen:", error);
      return null;
    }
  };
  const handleDownload = useCallback(async (imageUrl, name, format) => {
    const a = document.createElement("a");
    const imageDataUrl = await toDataURL(imageUrl);
    if (imageDataUrl) {
      const nameDefault = "my-image";
      console.log(`${name?.length > 0 ? name : nameDefault}.${format}`);
      a.href = imageDataUrl;
      a.download = `${name ?? nameDefault}.${format}`;
      document.body.appendChild(a);
      a.click();
      setLoadingDownload && setLoadingDownload(false);
      document.body.removeChild(a);
    } else {
      console.error("No se pudo descargar la imagen");
    }
  }, []);

  return handleDownload;
};

export default useDownloadImage;
