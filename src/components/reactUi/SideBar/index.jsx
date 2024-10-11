import { useEffect } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { isSmMQ, SIDE_BAR_APP } from "../../../utils/constants";
import { XCircleIcon } from "@heroicons/react/24/solid";
import useStoreApp from "../hooks/useStoreApp";
import classNames from "classnames";
import DropDownActions from "../DropDownActions";
import ResizeBar from "./ResizeBar"; // Barra de redimensionamiento
import { initResize } from "../../../utils/resizeSideBar";

const Sidebar = () => {
  const width = useMediaQuery();
  const { openActionMedia, setOpenActionMedia } = useStoreApp();
  const idiomas = ["Español", "Ingles"].map((lng, index) => (
    <DropDownActions name={lng} key={index} />
  ));

  const actions = [
    {
      name: "Fantasma",
    },
    {
      name: "Zombie",
    },
    {
      name: "Idioma",
      options: <div>{idiomas}</div>,
      handleAction: () => console.log("IDIOMA"),
    },
    {
      name: "Otra cosa",
    },
  ];

  useEffect(() => {
    setOpenActionMedia(!isSmMQ(width));
  }, [width]);

  useEffect(() => {
    initResize();
  }, []); // Dependencias vacías para ejecutar una sola vez al montar

  return (
    <>
      <div
        onClick={() => setOpenActionMedia(false)}
        className={classNames(
          "fixed block sm:hidden inset-0 bg-gray-700 cursor-pointer z-10 transition-opacity duration-500 ease-in-out",
          {
            "opacity-50 pointer-events-auto": openActionMedia,
            "opacity-0 pointer-events-none": !openActionMedia,
          }
        )}
      />
      <div
        id={SIDE_BAR_APP}
        className={classNames(
          "bg-gray-300 h-full z-20 w-[80%] sm:w-[20%]",
          "fixed top-0 right-0 transform transition-transform duration-1000 ease-in-out sm:static",
          {
            "translate-x-0": openActionMedia,
            "translate-x-full": !openActionMedia,
          }
        )}
        // style={{ width: "20%" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Barra que permite arrastrar para redimensionar */}
        <ResizeBar />
        <aside className="p-5 h-full">
          <div>
            <XCircleIcon
              onClick={() => setOpenActionMedia(false)}
              className="absolute top-2 right-2 cursor-pointer block sm:hidden ml-auto size-6 text-blue-500"
            />
            <h2 className="text-xl font-bold mb-4">Sidebar</h2>
            <ul className="flex flex-col gap-3">
              {actions.map((act, index) => (
                <DropDownActions
                  name={act.name}
                  handleAction={act.handleAction}
                  options={act.options}
                  key={index}
                />
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
