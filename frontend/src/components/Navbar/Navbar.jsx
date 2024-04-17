import React, { useState } from "react";
import { Link } from "react-router-dom";
import StudentLogin from "../../Pages/Login/StudentLogin";
const Navbar = () => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenApply, setIsOpenApply] = useState(false);

  return (
    <header className="text-gray-600 bg-blue-300 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
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
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-red-600">
            Home
          </Link>
          <div>
            <div
              onMouseOver={() => {
                setIsOpenLogin((p) => !p);
                setIsOpenApply((p) => false);
              }}
              className="mr-5 cursor-pointer relative hover:text-gray-900"
            >
              Login
              {isOpenLogin && (
                <div
                  onMouseOver={() => {
                    setIsOpenLogin((p) => !p);
                  }}
                  onMouseLeave={() => setIsOpenLogin((p) => !p)}
                  className="absolute right-0 mt-2 w-48 rounded-md shadow-lg z-10"
                >
                  <div className="py-1 rounded-md bg-gradient-to-br from-gray-800 to-gray-600">
                    <Link
                      to={"/studentLogin"}
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors"
                    >
                      Student
                    </Link>
                    <Link
                      to={"/facultyLogin"}
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors"
                    >
                      Faculty
                    </Link>
                    <Link
                      to={"/AdminLogin"}
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors"
                    >
                      Admin
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <div
              onMouseOver={() => {
                setIsOpenApply((p) => !p);
                setIsOpenLogin((p) => false);
              }}
              className="mr-5 cursor-pointer relative hover:text-gray-900"
            >
              Addmission
              {isOpenApply && (
                <div
                  onMouseLeave={() => setIsOpenApply((p) => !p)}
                  onMouseOver={() => {
                    setIsOpenApply((p) => !p);
                  }}
                  className="absolute right-0 mt-2 w-48 rounded-md shadow-lg z-10"
                >
                  <div className="py-1 rounded-md bg-gradient-to-br from-gray-800 to-gray-600">
                    <Link
                      to={"/studentsApply"}
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors"
                    >
                      Student
                    </Link>
                    <Link
                      to={"/facultyApply"}
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors"
                    >
                      Faculty
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          <Link to="/alumni" className="mr-5 hover:text-gray-900">
            Alumni
          </Link>
          <Link to="/contact" className="mr-5 hover:text-gray-900">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
