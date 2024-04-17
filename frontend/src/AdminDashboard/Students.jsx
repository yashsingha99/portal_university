import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import "./student.css";
import img1 from './image/img1.jpg'
function Students() {
  const branchId =
    useLocation().pathname.split("/")[
      useLocation().pathname.split("/").length - 1
    ];
  const courseId =
    useLocation().pathname.split("/")[
      useLocation().pathname.split("/").length - 2
    ];
  const [allStudents, setAllStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resData = await axios.get(
        `http://localhost:1337/api/students?populate=*`
      );
      const students = resData.data.data;
      const filteredStudents = students.filter((student) => {
        return (
          student.attributes.section.data == null &&
          Number(student.attributes.branch.data.id) === Number(branchId)
        );
      });
      const sortedStudents = [...filteredStudents].sort((b, a) => {
        return (
          parseInt(a.attributes.highest_qual_marks) -
          parseInt(b.attributes.highest_qual_marks)
        );
      });
      setAllStudents(sortedStudents);
    };

    fetchData();
  }, []); // Execute only when branchId changes

  console.log(allStudents);
  const divide = async () => {
    let name = "A";
    let code = 65;
    let data = [];
    let c = 0, t = 0;
    let studentArr = [];
    let studentId = [];
    let userId = [];
    let userData = [];
    for (let i = 0; i <= Math.ceil(allStudents.length / 4); i++) {
      let arr = [];
      for (let j = 0; j < 4; j++) {
        if (t == allStudents.length) break;
        arr[j] = allStudents[t].id;
        studentId[c] = arr[j];
        userId[c] = allStudents[t].attributes.user.data.id
        userData[c] = {username:generateAndSendRollNo(allStudents[t], name), password : allStudents[t].attributes.password}
        studentArr[c++] = {
          data: {
            RollNo: generateAndSendRollNo(allStudents[t], name),
            username: generateAndSendRollNo(allStudents[t], name),
            email: allStudents[t].attributes.email,
            highest_qual_marks: allStudents[t].attributes.highest_qual_marks,
            phoneNo: allStudents[t].attributes.phoneNo,
            branch: allStudents[t].attributes.branch.data.id,
            course: allStudents[t].attributes.course.data.id,
          },
        };
        t++;
      }
      data[i] = { data: { students: arr, name, code }  };
      code++;
      name = String.fromCharCode(code);
      if (t == allStudents.length) break;
    }

    console.log("studentArr", studentArr);
    for (let i = 0; i < data.length; i++) {
      const res = await axios.post(
        `http://localhost:1337/api/sections`,
        data[i]
      );
    }
    for (let i = 0; i < studentArr.length; i++) {
      if (Number(studentArr[i].data.branch) === Number(branchId)) {
        const res = await axios.put(
          `http://localhost:1337/api/students/${studentId[i]}`,
          studentArr[i]
        );
       const resData = await axios.put( `http://localhost:1337/api/users/${userId[i]}`, userData[i])
       console.log("resData", resData);
      }
    }
    setAllStudents([]);
  };

  const generateAndSendRollNo = (student, sec) => {
    const createdAt = student.attributes.createdAt + "";
    const utcTime = new Date(createdAt + "");
    const istTime =
      utcTime.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) + "";
    let startDate = istTime.substring(0, 9);
    let endDate = new Date()
      .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
      .substring(0, 9);
    const startmonthObj = (startDate + "").split("/")[1];
    const endmonthObj = (endDate + "").split("/")[1];
    const startyearObj = (startDate + "").split("/")[2];
    const endyearObj = (endDate + "").split("/")[2];
    const month =
      endmonthObj - startmonthObj + (endyearObj - startyearObj) * 12;
    let sem = Math.ceil(month / 5);
    // console.log("sem", sem, " :: month", month);
    let RollNo =
      sem +
      1 +
      "" +
      (10 + Number(courseId) + "") +
      (Number(branchId) + "") +
      (sec.charCodeAt(0) + "") +
      (1000 + Number(student.id));
    return RollNo;
  };

  //! ***
  //   useEffect(() => {
  //     if (allStudents) {
  //         const students = allStudents;

  //         const sortedStudents = [...students].sort((b, a) => {
  //             return parseInt(a.attributes.highest_qual_marks) - parseInt(b.attributes.highest_qual_marks);
  //         });

  //         setstudentArray(sortedStudents);
  //     }
  // }, [allStudents]); //* Runs whenever allStudents changes

  if (allStudents.length == 0) return  <div className="w-full flex justify-center items-center "> <img className="h-4/5" src={img1}/> </div> ;
  return (
    <div className=" pb-20 bg-gray-200 student w-full ">
      <div className="container mx-auto py-8">
        <div className="w-full p-4 flex justify-between">
          <h1 className="text-3xl  font-bold mb-4">Admission Panel</h1>
          <button
            onClick={divide}
            type="button"
            className="px-4 py-2 bg-blue-600 rounded-lg text-white"
          >
            {" "}
            Divide all students into sections
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-blue-300 p-4 rounded-lg flex justify-between items-center">
            <div className="flex items-center justify-between w-full">
              <h1 className="font-bold mr-2">Student Names</h1>
              <h1 className="font-bold">Email</h1>
              <h1 className="font-bold">12th percentage</h1>
            </div>
          </div>
          {allStudents &&
            allStudents.map((students) => {
              return (
                <Link
                  key={students.id}
                  to={`/adminDashboard/allStudents/${courseId}/${branchId}/${students.id}`}
                >
                  <div className=" grid w-full grid-cols-1 gap-4">
                    <div className=" p-8 w-full flex justify-between items-center text-xl flex justify-center items-center h-16 bg-sky-200 border border-gray-300 rounded-lg shadow-md">
                      <p>{students.attributes.username}</p>
                      <p>{students.attributes.email}</p>
                      <p>{students.attributes.highest_qual_marks}%</p>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Students;
