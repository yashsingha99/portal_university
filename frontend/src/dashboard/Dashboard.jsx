import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Navbar from '../components/Navbar/Navbar'
import {useLocation} from 'react-router-dom'
import {Outlet} from 'react-router-dom'
import Cookies from 'js-cookie'
import TimeTable from './TimeTable'
import Menu from './Menu'
function Dashboard() {
  const location = useLocation().pathname.split('/')
  const userData = Cookies.get('userData')
 
  // console.log(JSON.parse(userData));
  return (
    <>
      <Header />

   <div className='flex h-screen'>
       {location[1] === '/dashboard' && <Header/>}
        <Menu />
        <Outlet />
    </div> 
    </>
  )
}

export default Dashboard