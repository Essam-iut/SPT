import Image from "next/image";
import React from "react";

function SideNav() {
  const menuList = [
    {
      id: 1,
      
    }
  ]
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