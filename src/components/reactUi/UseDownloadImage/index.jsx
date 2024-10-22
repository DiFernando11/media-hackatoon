import axios from "axios";
import { useCallback } from "react";
import useStoreApp from "../hooks/useStoreApp";

const useDownloadImage = (setLoadingDownload) => {
  const { setIsLoadingAllPage } = useStoreApp();
  const toDataURL = async (url) => {
    try {
      const response = await axios.get(url, { responseType: "blob" });
      const imageDataUrl = URL.createObjectURL(response.data);
      return imageDataUrl;
    } catch (error) {
      setLoadingDownload(false);
      return null;
    }
  };
  const handleDownload = useCallback(async (imageUrl, name, format) => {
    const a = document.createElement("a");
    const imageDataUrl = await toDataURL(imageUrl);
    if (imageDataUrl) {
      const nameDefault = "my-image";
      a.href = imageDataUrl;
      a.download = `${name ?? nameDefault}.${format}`;
      document.body.appendChild(a);
      a.click();
      setLoadingDownload && setLoadingDownload(false);
      document.body.removeChild(a);
      setIsLoadingAllPage(false);
    } else {
      setIsLoadingAllPage(false);
    }
  }, []);

  return handleDownload;
};

export default useDownloadImage;
