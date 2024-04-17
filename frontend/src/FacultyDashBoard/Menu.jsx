import React from 'react'
import { Link } from 'react-router-dom';

function Menu() {
  const navItems = [
    {
      name: "Dashboard",
      path: "/facultyDashboard",
    },
    {
      name: "Student Panel",
      path: "#",
    },
    {
      name: "TimeTable",
      path: "#",
    },
    {
      name: "Main Account",
      path: "#",
    },
    {
      name: "Policies",
      path: "#",
    },
    {
      name: "My Advisor",
      path: "#",
    },
    {
      name: "Fee details",
      path: "#",
    },
    {
      name: "Notification",
      path: "#",
    },
    {
      name: "Placements",
      path: "#",
    },
    {
      name: "Service Request",
      path: "#",
    },
    {
      name: "Help Desk",
      path: "#",
    },
    //............
    {
      name: "Dashboard",
      path: "#",
    },
    {
      name: "Registration",
      path: "#",
    },
    {
      name: "Main Account",
      path: "#",
    },
    {
      name: "Policies",
      path: "#",
    },
    {
      name: "My Advisor",
      path: "#",
    },
    {
      name: "Fee details",
      path: "#",
    },
    {
      name: "Notification",
      path: "#",
    },
    {
      name: "Placements",
      path: "#",
    },
    {
      name: "Service Request",
      path: "#",
    },
    {
      name: "Help Desk",
      path: "#",
    },
  ];
  return (
    <div className="h-50 w-1/4 border-4 rounded-md shadow-lg z-10">
      <div className="py-1 navItems rounded-md bg-white">
        {navItems.map((items, i) => (
          <div key={i}>
            <Link to={items.path}
              className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-colors"
            >
              {items.name}
            </Link>
            <hr className="my-1 border-gray-200" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu