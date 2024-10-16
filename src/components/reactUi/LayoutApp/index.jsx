import React from "react";
import Sidebar from "../SideBar";
import CurtainChangeTopic from "../CurtainChangeTopic";
import SmokeBackground from "../SmokeBackround";
import BackgroundByTopic from "../BackgroundByTopic";

const LayoutApp = ({ children }) => {
  return (
    <>
      <CurtainChangeTopic />
      {/* <BackgroundByTopic /> */}
      <SmokeBackground />
      <div className="w-[200px] h-full flex py-5 px-10 sm:px-16 flex-col flex-grow">
        {children}
      </div>
      <Sidebar />
    </>
  );
};

export default LayoutApp;
