import React from "react";
import SideNav from "./_component/SideNav";

function layout({ children }) {
  return (
    <div>
      <div className="md:w-64 fixed hidden md:block"><SideNav/></div>
      <div className="md:l-64">{children}</div>
    </div>
  );
}

export default layout;
