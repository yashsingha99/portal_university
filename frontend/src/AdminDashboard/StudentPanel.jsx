import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CryptoJS from 'crypto-js'
import img1 from './image/img1.jpg'


function StudentPanel() {
  const [students, setStudents] = useState([]);
  const location = useLocation();


  const courses = [
    "Btech",
    "MBA",
    "BBA",
    "Mtech",
    "BCA",
    "Polytechnic",
    "Biotech",
  ];
  const branchs = [
    "EE",
    "CSE",
    "MBA",
    "BBA",
    "EC",
    "MC",
    "Polytechnic",
    "Biotech",
  ];


  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(
        "http://localhost:1337/api/admission-panels?populate=*"
      );
      // const stu = await axios.get( `http://localhost:1337/api/students?populate=*`,)
      // console.log("stu", stu.data.data);
      setStudents(res.data.data);
    };
    fetch();
  }, []);


  const rejectUser = async (id) => {
    const deletedUser = await axios.delete(
      `http://localhost:1337/api/admission-panels/${id}`
    );
    console.log(deletedUser);
  };


  const acceptUser = async ({student, id}) => {
    try {
      const hash = CryptoJS.SHA256(student.attributes.email + student.attributes.username).toString(CryptoJS.enc.Hex);
      // const password = hash.substring(0, Math.floor(Math.random() * 5) + 6)
      const studentData = {
        username: student.attributes.username,
        FullName: student.attributes.username,
        email : student.attributes.email,
        password :  hash.substring(0, Math.floor(Math.random() * 5) + 6),
        phoneNo : student.attributes.phoneNo,
        highest_qual_marks : student.attributes.highest_qual_marks,
        branch : student.attributes.branch.data.id,
        course : student.attributes.course.data.id
      };
      console.log("studentData", studentData);

      const registerResponse = await axios.post(
        `http://localhost:1337/api/auth/local/register`,
        studentData
      );
      console.log("registerResponse", registerResponse);
      const createStudentResponse = await axios.post(
        `http://localhost:1337/api/students`,
        { data: {...studentData, user : registerResponse.data.user.id} }
      );

      console.log("createStudentResponse", createStudentResponse);
      const deletePanelResponse = await axios.delete(
        `http://localhost:1337/api/admission-panels/${id}`
      );

    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };
  if (students.length == 0) return  <div className="w-full flex justify-center items-center "> <img className="h-4/5" src={img1}/> </div> ;
  
  return (
    <div className="bg-gray-200 w-full min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Admission Panel</h1>
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-blue-300 p-4 rounded-lg flex justify-between items-center">
            <div className="flex items-center justify-between w-1/2">
              <h1 className="font-bold mr-2">Student Names</h1>
              <h1 className="font-bold">Program</h1>
            </div>
            <div className="flex items-center w-40 gap-9">
              <h1 className="font-bold mr-2">Reject</h1>
              <h1 className="font-bold">Accept</h1>
            </div>
          </div>
          {students &&
            students.map((student) => {
              return (
                <div
                  key={student.id}
                  className="bg-white p-4 rounded-lg flex justify-between items-center"
                >
                  <div className="flex items-center justify-between w-1/2">
                    <p className="font-bold mr-2">
                      {student.attributes.username}
                    </p>
                    <p className="text-gray-500">{student.attributes.Course}</p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => {
                        rejectUser(student.id);
                      }}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => {
                        acceptUser({student, id: student.id});
                      }}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                      Accept
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default StudentPanel;
