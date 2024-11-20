"use client"
import React from 'react'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'
function dashboard() {
    const { setTheme } = useTheme()

    useEffect(() =>{
        setTheme('')
    },[])

  return (
    <div>page</div>
  )
}

export default dashboard 