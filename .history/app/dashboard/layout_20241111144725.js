import React from "react";
import SideNav from "./_component/SideNav";

function layout({ children }) {
  return (
    <div>
      <div><SideNav/></div>
      <div>{children}</div>
    </div>
  );
}

export default layout;
