import React from 'react'

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