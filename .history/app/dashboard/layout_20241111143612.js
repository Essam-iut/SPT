import React from 'react'
import { useEffect } from 'react/cjs/react.production.min'
import { useTheme } from 'next-themes'

function layout({children}) {

  return (
    <div>{children}</div>
  )
}

export default layout