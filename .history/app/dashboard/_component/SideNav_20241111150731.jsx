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

       {menuList.map(item => (
         <a href={item.Path} key={item.id} className="text-sm py-2 hover:text-gray-900">
           <item.icon className="mr-3" /> {item.name}
         </a>
       ))}
       <hr className="my-5"></hr>
       <div className="flex items-center justify-between">
         <div className="text-sm text-gray-600">Logged in as John Doe</div>
         <SettingsIcon className="ml-3" />
       </div>

       <div className="flex items-center justify-between">
         <div className="text-sm text-gray-600">Version 1.0.0</div>
         <SettingsIcon className="ml-3" />
       </div>

       <hr className="my-5"></hr>


    </div>
  );
}

export default SideNav;
