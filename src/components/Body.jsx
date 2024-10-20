import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='w-full  h-screen mt-20 2xl:mt-40'>
      <SideBar />
      <Outlet />
    </div>
  )
}

export default Body
