import React from 'react'
import {set}
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