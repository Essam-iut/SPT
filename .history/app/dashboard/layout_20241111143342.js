import React from 'react'

function layout({children}) {
    const { setTheme } = useTheme()
  return (
    <div>{children}</div>
  )
}

export default layout