import React from 'react'
import AddNewStudent from './_components/AddNewStudent'

function Students() {
  return (
    <div className='p-7'>
      <h2 className='font-bold text-2xl flex justify-between items-center'>Students</h2>
      <AddNewStudent/>
    </div>
  )
}

export default Students