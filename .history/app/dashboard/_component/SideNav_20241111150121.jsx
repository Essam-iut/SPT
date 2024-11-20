import Image from "next/image";
import React from "react";

function SideNav() {
  return (
    <div className="border shadow-md h-screen p-5">
      <Image src={"/logo.svg"} 
      width={180} 
      height={50}
       alt="logo" />
    </div>
  );
}

export default SideNav;
