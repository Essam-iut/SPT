import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
const StudentListTable = ({StudentList}) => {
    const [colDefs, setColDefs] = useState([
        { field: "id",filter:true},
        { field: "name",filter:true},
        { field: "contact",filter:true},
        { field: "address",filter:true},
      ]);

      useEffect(())

    return (
    <div>StudentListTable</div>
  )
}

export default StudentListTable