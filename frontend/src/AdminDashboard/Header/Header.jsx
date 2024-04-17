import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
// import "./Header.css";
import axios from "axios";
function Header() {
  let userData = Cookies.get("userData");
  userData = userData ? JSON.parse(userData).data.user : userData;
  const [isOpen, setIsOpen] = useState(false);
  const [student, setstudent] = useState([]);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  let teacher;
  useEffect(() => {
    const fetch = async () => {
      // const res = await axios.get('http://localhost:1337/api/students?populate=*')
      const res = await axios.get(
        "http://localhost:1337/api/teachers?populate=*"
      );
      const data = res.data.data;
      setstudent(res.data);
      // console.log("student", res.data);
       teacher = data.find((val) => val.users_permissions_user.data.id === userData.id);
      // console.log(teacher);
    };
    fetch();
    // console.log(userData);
  }, []);
  return (
    <header className="text-gray-600 w-full z-1 bg-blue-300 body-font">
      <div className="container  flex flex-wrap py-5 flex-col md:flex-row items-center">
        <div className="flex w-80 justify-around ">
          {/* <div className="relative">
            <button
              className="focus:outline-none absolute top-2"
              onClick={toggleDropdown}
              aria-label="Open Menu"
            >
              <svg
                className="chrome-menu-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>


          </div> */}
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Portal University</span>
          </Link>
        </div>
        {/* <Offcanvas show={true}>
             <Offcanvas.Header closeButton={true}>
                <Offcanvas.Title> Menu</Offcanvas.Title>
             </Offcanvas.Header>
             <Offcanvas.Body>
               <div>hello</div>
               <div>hello</div>
             </Offcanvas.Body>
          </Offcanvas> */}
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <div className="relative">
            <button
              className="flex items-center text-sm font-medium text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              onClick={toggleMenu}
            >
              <div className="rounded-full overflow-hidden border-2 border-gray-600">
                <img
                  className="w-8 h-8 object-cover"
                  src="https://via.placeholder.com/150"
                  alt="User Avatar"
                />
              </div>
              <span className="ml-2">{userData.username}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 ml-1 transition-transform transform ${
                  isOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414zM10 4a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg z-10">
                <div className="py-1 rounded-md bg-gradient-to-br from-gray-800 to-gray-600">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors"
                  >
                    Settings
                  </a>
                  <div
                    onClick={() => {
                      Cookies.remove("userData");
                      navigate("/");
                    }}
                    className="block cursor-pointer px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors"
                  >
                    Logout
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
