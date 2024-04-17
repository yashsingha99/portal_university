import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const FacultyApply = () => {
  let { register, handleSubmit } = useForm();
  const [allCourses, setAllCourses] = useState([]);
  // const [Courses, setCourses] = useState();
  const [allBranches, setAllBranches] = useState([]);
  // let allBranches;
  useEffect(() => {
    const fetch = async () => {
      const courses = await axios.get(
        "http://localhost:1337/api/courses?populate=*"
      );
      const branches = await axios.get(
        "http://localhost:1337/api/branches?populate=*"
      );
      setAllBranches(branches.data.data)
      console.log("branches", branches.data.data);
      setAllCourses(courses.data.data);
    };
    fetch();
  }, []);
  // const handleCourseChange = (e) => {
  //   // setCourses(e.target.value)
  //   const courseName = e.target.value;
  //   const selectedCourseObj = allCourses.find(
  //     (course) => course.attributes.courseName === courseName
  //   );
  //   console.log("allBranches", selectedCourseObj);
  // };
  
  const submit = async (data) => {
    console.log(data);
    // const data = {data1}
    try {
      const res = await axios.post(
        "http://localhost:1337/api/admission-panels",
        { data }
      );
      alert("register succesfully");
      register = ""
    } catch (error) {
      console.log(error);
      alert("error");
      register = ""
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Faculty
          </h2>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Register yourself today
          </h2>
        </div>
        <form onSubmit={handleSubmit(submit)} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="FullName" className="sr-only">
                Full Name
              </label>
              <input
                id="FullName"
                name="username"
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
                {...register("FullName", {
                  required: true,
                })}
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                {...register("email", {
                  required: true,
                })}
              />
            </div>

            {/* <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                {...register("password", {
                  required: true,
                })}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
              />
            </div> */}

            <div>
              <label htmlFor="phoneNo" className="sr-only">
                Phone Number
              </label>
              <input
                id="phoneNo"
                name="phoneNo"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Phone Number"
                {...register("phoneNo", {
                  required: true,
                })}
              />
            </div>

            <div>
              <label htmlFor="highest_qual_marks" className="sr-only">
                Highest Qualification Percentage
              </label>
              <input
                id="highest_qual_marks"
                name="highest_qual_marks"
                type="text"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Highest Qualification Percentage"
                {...register("highest_qual_marks", {
                  required: true,
                })}
              />
            </div>            
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FacultyApply;
