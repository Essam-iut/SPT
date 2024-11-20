import React from "react";
import SideNav from "./_component/SideNav";

function layout({ children }) {
  return (
    <div>
      <div className="md:w-64 fixed"><SideNav/></div>
      <div>{children}</div>
    </div>
  );
}

export default layout;
