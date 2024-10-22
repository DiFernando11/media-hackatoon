import { useEffect, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { isMdMQ, SIDE_BAR_APP } from "../../../utils/constants";
import { ArrowUturnLeftIcon, XCircleIcon } from "@heroicons/react/24/solid";
import useStoreApp from "../hooks/useStoreApp";
import classNames from "classnames";
import { initResize } from "../../../utils/resizeSideBar";
import ToggleList from "../ToogleTopic";
import Breadcrumb from "./Breadcrumb";
import RenderActionCondition from "../RenderActionCondition";
import MusicPlayer from "./MusicPlayer";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const width = useMediaQuery();
  const { t } = useTranslation();
  const [activeButton, setActiveButton] = useState(false);

  const {
    openActionMedia,
    setOpenActionMedia,
    setCurrentComponentKey,
    getCurrentComponentKey,
    getSelectedTopic
  } = useStoreApp();

  const bgColor = getSelectedTopic().bgColor.secondary;

  useEffect(() => {
    setOpenActionMedia(!isMdMQ(width));
  }, [width]);

  useEffect(() => {
    initResize();
  }, []);

  return (
    <>
      <div
        onClick={() => setOpenActionMedia(false)}
        className={classNames(
          "fixed bg-black block md:hidden inset-0 cursor-pointer z-10 transition-opacity duration-500 ease-in-out",
          {
            "opacity-95 pointer-events-auto": openActionMedia,
            "opacity-0 pointer-events-none": !openActionMedia,
          }
        )}
      />
      <div
        id={SIDE_BAR_APP}
        className={classNames(
          "bg-sidebar h-full z-20 max-w-[500px] min-w-[220px] sm:min-w-[300px] w-[80%] md:w-[30%]",
          "fixed top-0 right-0 transform transition-transform duration-1000 ease-in-out md:static",
          {
            "translate-x-0": openActionMedia,
            "translate-x-full": !openActionMedia,
          }
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src="/containerSideBar.png"
          className="opacity-80 top-0 left-0 h-full w-full absolute -z-10"
          alt="fondo del sideBar"
        />
        <aside className="px-3 py-5 h-full overflow-y-auto">
          <div>
            <MusicPlayer />
            <XCircleIcon
              onClick={() => setOpenActionMedia(false)}
              className="absolute top-2 right-2 cursor-pointer block md:hidden ml-auto size-6 text-white"
            />
            <ul className="flex flex-col gap-3">
              <Breadcrumb />
              <li className="my-2">
                <ToggleList />
              </li>
              {getCurrentComponentKey && (
                <div
                  onClick={() => setCurrentComponentKey(null)}
                  className="cursor-pointer flex justify-center items-center gap-2"
                >
                  <span className="font-general -text-xs-1 text-white">
                    {t("back")}
                  </span>
                  <ArrowUturnLeftIcon className="text-white size-4" />
                </div>
              )}
              <RenderActionCondition
                componenteKey={getCurrentComponentKey}
                setComponenteKey={setCurrentComponentKey}
              />
              <button
                onClick={() => setActiveButton(!activeButton)}
                className="w-full font-general text-white pt-1 flex justify-between items-center px-1 border-t"
                id="toggle-rotation"
              >
                <p className="-text-xs-1 text-start">
                  {!activeButton ? t("rotateModel") : t("followCursor")}
                </p>
                <span
                  className={classNames(
                    "w-5 h-5 min-h-5 min-w-5 rounded-full border",
                    {
                      "bg-black": !activeButton,
                    }
                  )}
                  style={{
                    transition: "background-color 0.5s ease",
                    border: activeButton ? "2px solid" : "1px solid",
                    borderColor: activeButton ? "white" : bgColor,
                    backgroundColor: activeButton ? bgColor : "black",
                  }}
                />
              </button>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
