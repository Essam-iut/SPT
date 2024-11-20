import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { Search, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

const pagination = true;
const paginationPageSize = 10;
const paginationPageSizeSelector = [25, 50, 100];

const StudentListTable = ({ studentList }) => {
  const CustomButtons = (props) => {
    return (
      <Button variant="destructive">
        <Trash />
      </Button>
    );
  };
  const [colDefs, setColDefs] = useState([
    { field: "id", filter: true },
    { field: "name", filter: true },
    { field: "contact", filter: true },
    { field: "address", filter: true },
    { field: "action", cellRenderer: CustomButtons },
  ]);

  const [rowData, setRowData] = useState([]);
  const [searchInput, setSearchInput] = useState([]);


  useEffect(() => {
    studentList && setRowData(studentList);
  }, [studentList]);

  return (
    <div className="my-7">
      {" "}
      <div className="p-2 rounded-lg border show-sm flex gap-2 mb-4 max-w-sm">
          <Search />
          <input
            type="search"
            placeholder="Search"
            className='outline-none
            w-full bg-white'
          />
        </div>
      <div
        className="ag-theme-quartz" // applying the Data Grid theme
        style={{ height: 500 }} // the Data Grid will fill the size of the parent container
      >
       
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
        />
      </div>
    </div>
  );
};

export default StudentListTable;