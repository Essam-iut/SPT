import React from 'react'
import AddNewStudent from './_components/AddNewStudent'

function Students() {
  return (
    <div className='p-7'>
      <h2 className='font-bold text-2xl flex just'>Students</h2>
      <AddNewStudent/>
    </div>
  )
}

export default Students