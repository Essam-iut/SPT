import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'

function Header() {
  const {user} = useKindeBrowserClient();
  return (
    <div>
      <div>
        
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Header