import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import "./allStudent.css";
function AllStudents() {
  const [allStudents, setAllStudents] = useState([]);
  const [dividedStudent, setDividedStudent] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(
        "http://localhost:1337/api/students?populate=*"
      );
      const allCourse = await axios.get(
        "http://localhost:1337/api/courses?populate=*"
      );
      setAllCourses(allCourse.data.data);
       console.log(allCourse.data.data);
      setAllStudents(res.data.data);
    };
    fetch();
  }, []);
  return (
    <div>
      <h1 className=" text-3xl m-8  text-center">All Programms</h1>
      <div className="flex allStudents w-full justify-center h-full m-20">
        <div className="grid grid-cols-3 gap-5 h-80">
          {allCourses &&
            allCourses.map((course) => {
              return (
                <Link key={course.id} to={`/adminDashboard/allStudents/${course.id}`}>
                <div className="w-72 text-3xl flex justify-center items-center h-40 bg-sky-200 border border-gray-300 rounded-lg shadow-md">
                  {course.attributes.courseName}
                </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default AllStudents;
