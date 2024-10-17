import { useEffect, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { isSmMQ, SIDE_BAR_APP } from "../../../utils/constants";
import { XCircleIcon } from "@heroicons/react/24/solid";
import useStoreApp from "../hooks/useStoreApp";
import classNames from "classnames";
import DropDownActions from "../DropDownActions";
import { initResize } from "../../../utils/resizeSideBar";
import ToggleList from "../ToogleTopic";
import Breadcrumb from "./Breadcrumb";

const Sidebar = () => {
  const width = useMediaQuery();

  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(index);
  };
  const {
    openActionMedia,
    setOpenActionMedia,
    setModeMoveModel,
    getModeMoveModel,
  } = useStoreApp();
  const idiomas = ["Español", "Ingles"].map((lng, index) => (
    <DropDownActions name={lng} key={index} />
  ));

  const actions = [
    {
      name: "Renueva tu fondo",
    },
    {
      name: "Zombie",
    },
    {
      name: "Intesection",
      options: (
        <div>
          <button
            id="toggle-rotation"
            onClick={() => setModeMoveModel(!getModeMoveModel)}
            className="text-white"
          >
            Toggle Mouse Rotation
          </button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    setOpenActionMedia(!isSmMQ(width));
  }, [width]);

  useEffect(() => {
    initResize();
  }, []);

  console.log({ activeIndex });

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
          "bg-sidebar h-full z-20 min-w-[210px] w-[80%] sm:w-[25%]",
          "fixed top-0 right-0 transform transition-transform duration-1000 ease-in-out sm:static",
          {
            "translate-x-0": openActionMedia,
            "translate-x-full": !openActionMedia,
          }
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <img src="/public/containerSideBar.png" className="opacity-80 top-0 left-0 h-full w-full absolute -z-10" alt="fondo del sideBar" />
        <aside className="p-5 h-full">
          <div>
            <XCircleIcon
              onClick={() => setOpenActionMedia(false)}
              className="absolute top-2 right-2 cursor-pointer block sm:hidden ml-auto size-6 text-blue-500"
            />
            <ul className="flex flex-col gap-3">
              <Breadcrumb />
              <li className="my-2">
                <ToggleList />
              </li>
              {actions.map((act, index) => (
                <DropDownActions
                  isActive={activeIndex === index}
                  name={act.name}
                  handleAction={() => {
                    handleToggle(index);
                  }}
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
