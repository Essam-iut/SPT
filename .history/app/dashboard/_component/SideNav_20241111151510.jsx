import { GraduationCap, Hand, LayoutIcon, Settings, SettingsIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutIcon,
      Path: "/dashboard"
    },
    {
      id: 2,
      name: "Students",
      icon: GraduationCap,
      Path: "/dashboard/students"
    },
    {
      id: 3,
      name: "Attendance",
      icon: Hand,
      Path: "/dashboard/attendance"
    },
    {
      id: 4,
      name: "Setting",
      icon: Settings,
      Path: "/dashboard/settings"
    }
  ]
  
  return (
    <div className="border shadow-md h-screen p-5">
      <Image src={"/logo.svg"} 
      width={180} 
      height={50}
       alt="logo" />
       <hr className="my-5"></hr>
       {menuList.map((menu, index) => (
        <h2 className="flex items-center gap-3 text-md p-4
        text-slate-500 hover:bg-primary hover:text-white 
        cursor-pointer rounded-lg my-2">
          <menu.icon/>
          {menu.name}
        </h2>
       ))}


    </div>
  );
}

export default SideNav;
