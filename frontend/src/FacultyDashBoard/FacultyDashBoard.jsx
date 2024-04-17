import React from 'react'
import Menu from './Menu'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import Cookies from 'js-cookie'
function FacultyDashBoard() {
    const location = useLocation().pathname.split('/')
    const userData = Cookies.get('userData')
   
    // console.log(JSON.parse(userData));
    return (
      <>
        <Header />
  
     <div className='flex h-screen'>
         {location[1] === '/facultyDashboard' && <Header/>}
          <Menu />
          <Outlet />
      </div> 
      </>
    )
}

export default FacultyDashBoard