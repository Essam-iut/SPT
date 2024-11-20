import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
const StudentListTable = ({ studentList }) => {
    const CustomButtons = (props)=>{
        return <Button><Trash/></Button>
    }
  const [colDefs, setColDefs] = useState([
    { field: "id", filter: true },
    { field: "name", filter: true },
    { field: "contact", filter: true },
    { field: "address", filter: true },
    { field: "action", cellRender:CustomButtons},
  ]);

  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    studentList &&setRowData(studentList);
  }, [studentList]);

  return (
    <div>
      {" "}
      <div
        className="ag-theme-quartz" // applying the Data Grid theme
        style={{ height: 500 }} // the Data Grid will fill the size of the parent container
      >
        <AgGridReact rowData={rowData} columnDefs={colDefs} />
      </div>
    </div>
  );
};

export default StudentListTable;
