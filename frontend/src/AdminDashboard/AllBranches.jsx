import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function AllBranches() {
    const location = useLocation().pathname.split('/')[useLocation().pathname.split('/').length-1]
    console.log(location);
    const[allBranches, setAllBranches] = useState([])
    useEffect(()=>{
        const fetch = async() => {
          const res = await axios.get(`http://localhost:1337/api/courses/${location}?populate=*`)
          console.log(res.data.data.attributes.branches.data)
          setAllBranches(res.data.data.attributes.branches.data)
        }
        fetch()
    },[])
  return (
    <div>
    <h1 className=" text-3xl m-8  text-center">All Branches</h1>
    <div className="flex allStudents w-full justify-center h-full m-20">
      <div className="grid grid-cols-3 gap-5 h-80">
        {allBranches &&
          allBranches.map((branch) => {
            return (
              <Link key={branch.id} to={`/adminDashboard/allStudents/${location}/${branch.id}`}>
              <div className="w-72 text-3xl flex justify-center items-center h-40 bg-sky-200 border border-gray-300 rounded-lg shadow-md">
                {branch.attributes.name}
              </div>
              </Link>
            );
          })}
      </div>
    </div>
  </div>
  )
}

export default AllBranches