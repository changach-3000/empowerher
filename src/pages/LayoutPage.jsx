import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router'

function LayoutPage() {
  return (
    <div>
        <NavBar />
        <Outlet/>
    </div>
  )
}

export default LayoutPage