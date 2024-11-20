"use client"
import React, { useEffect, useState } from "react";
import AddNewStudent from "./_components/AddNewStudent";
import GloableApi from "@/app/_services/GloableApi";





function Students() {

  const [studentList, setStudentsList] = useState
  useEffect(()=>{
    GetAllStudents();
  })

  const GetAllStudents = ()=>{
    GloableApi.GetAllStudents().then(resp=>{
      console.log(resp.data);
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
