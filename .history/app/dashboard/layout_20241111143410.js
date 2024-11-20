import React from 'react'
import { useEffect } from 'react/cjs/react.production.min'

function layout({children}) {
    const { setTheme } = useTheme()

    useEffect(() =>{
        setTheme('dark')
    },[])
  return (
    <div>{children}</div>
  )
}

export default layout