"use client"
import React, { useEffect, useState } from "react";
import AddNewStudent from "./_components/AddNewStudent";
import GloableApi from "@/app/_services/GloableApi";
import StudentListTable from "./_components/StudentListTable";
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid




function Students() {

  const [studentList, setStudentsList] = useState([]);
  useEffect(()=>{
    // GetAllStudents();
  })

  const GetAllStudents = ()=>{
    GloableApi.GetAllStudents().then(resp=>{
      setStudentsList(resp.data);
    })
  }


  return (
    <div className="p-7">
      <h2 className="font-bold text-2xl flex justify-between items-center">
        Students
        <AddNewStudent />
      </h2>
        <StudentListTable studentList={studentList}/>
    </div>
  );
}

export default Students;
