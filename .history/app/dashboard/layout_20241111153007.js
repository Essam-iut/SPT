import React from "react";
import SideNav from "./_component/SideNav";

function layout({ children }) {
  return (
    <div>
      <div className="md:w-64 fixed hidden md:block"><SideNav/></div>
      <div className="md:ml-64"><header/>{children}</div>
    </div>
  );
}

export default layout;
