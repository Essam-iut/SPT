"use client"
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { Image } from 'lucide-react';
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
        alt = 'user'
        className = "roudned-full"
        />
      </div>
    </div>
  )
}

export default Header