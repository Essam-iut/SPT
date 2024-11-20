"use Client"
import React from "react";
import AddNewStudent from "./_components/AddNewStudent";
import GloableApi from "@/app/_services/GloableApi";





function Students() {

  useEf

  const GEtAllStudents = ()=>{
    GloableApi.GetAllStudents().then(resp=>{
      console.log(resp);
    })
  }


  return (
    <div className="p-7">
      <h2 className="font-bold text-2xl flex justify-between items-center">
        Students
        <AddNewStudent />
      </h2>
    </div>
  );
}

export default Students;
