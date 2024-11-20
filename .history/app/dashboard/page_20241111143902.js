"use client"
import React from 'react'
import { useTheme } from 'next-themes'
import { useEffect } from 'react/cjs/react.production.min'
function dashboard() {
    const { setTheme } = useTheme()

    useEffect(() =>{
        setTheme('dark')
    },[])

  return (
    <div>page</div>
  )
}

export default dashboard 