import React from 'react'

const StudentListTable = ({StudentList}) => {
    const [colDefs, setColDefs] = useState([
        { field: "make" },
        { field: "model" },
        { field: "price" },
        { field: "electric" }
      ]);
    return (
    <div>StudentListTable</div>
  )
}

export default StudentListTable