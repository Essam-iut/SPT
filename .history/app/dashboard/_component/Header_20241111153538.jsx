"use client"
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'

function Header() {
  const {user} = useKindeBrowserClient();
  return (
    <div>
      <div>
        
      </div>
      <div>
        <Image src={user?.picture}
        width={35}
        height={35}
        
        }
      </div>
    </div>
  )
}

export default Header