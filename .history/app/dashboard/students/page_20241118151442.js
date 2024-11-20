"use client"
import React, { useEffect, useState } from "react";
import AddNewStudent from "./_components/AddNewStudent";
import GloableApi from "@/app/_services/GloableApi";
import StudentListTable from "./_components/StudentListTable";





function Students() {

  const [studentList, setStudentsList] = useState([]);
  useEffect(()=>{
    GetAllStudents();
  })

  const GetAllStudents = ()=>{
    GloableApi.GetAllStudents().then(resp=>{
      setStudentsList.log(resp.data);
    })
  }


  return (
    <div className="p-7">
      <h2 className="font-bold text-2xl flex justify-between items-center">
        Students
        <AddNewStudent />

        <StudentListTable studentList={stud}/>
      </h2>
    </div>
  );
}

export default Students;
