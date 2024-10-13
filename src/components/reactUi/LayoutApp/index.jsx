import React from "react";
import Sidebar from "../SideBar";

const LayoutApp = ({ children }) => {
  return (
    <>
      <div className="flex py-5 px-10 sm:px-16 flex-col flex-grow">{children}</div>
      <Sidebar />
    </>
  );
};

export default LayoutApp;
