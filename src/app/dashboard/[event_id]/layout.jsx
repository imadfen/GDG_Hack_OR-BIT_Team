import Menu from '@/components/Menu'
import React from 'react'

export default function Layout({children}) {
  return (
    <div className="w-full h-full flex">
        <Menu />
        <div className="flex-grow">
            {children}
        </div>
    </div>
  )
}
