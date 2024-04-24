import React from 'react'
import Menu from './Menu'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import Cookies from 'js-cookie'
function AdminDashboard() {
    const location = useLocation().pathname.split('/')
    const userData = Cookies.get('userData')
   
    return (
      <>
        <Header />
     <div className='flex h-screen'>
         {location[1] === '/adminDashboard' && <Header/>}
          <Menu />
          <Outlet />
      </div> 
      </>
    )
}

export default AdminDashboard