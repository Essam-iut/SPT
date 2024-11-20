import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
const StudentListTable = ({StudentList}) => {
    const [colDefs, setColDefs] = useState([
        { field: "id" },
        { field: "model" },
        { field: "price" },
        { field: "electric" }
      ]);
    return (
    <div>StudentListTable</div>
  )
}

export default StudentListTable