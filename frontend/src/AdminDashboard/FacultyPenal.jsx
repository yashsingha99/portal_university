// {student.attributes.isFaculty === true ? (
//     <p className="text-gray-500">
//       {
//         student.attributes.subjects.data[0].attributes.subjectName
//       }
//     </p>
//   ) : (

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CryptoJS from "crypto-js";
import img1 from "./image/img1.jpg";

function FacultyPenal() {
  const [faculty, setfaculty] = useState([]);
  const location = useLocation();
  const rejectUser = async (id) => {
    const deletedUser = await axios.delete(
      `http://localhost:1337/api/admission-panels/${id}`
    );
    console.log(deletedUser);
  };

  const acceptUser = async ({ faculte, id }) => {
    try {
      const hash = CryptoJS.SHA256(
        faculte.attributes.email + faculte.attributes.username
      ).toString(CryptoJS.enc.Hex);
      const facultyData = {
        username: faculte.attributes.FullName,
        FullName: faculte.attributes.FullName,
        email: faculte.attributes.email,
        password: hash.substring(0, Math.floor(Math.random() * 5) + 6),
        phoneNo: faculte.attributes.phoneNo,
        highest_qual_marks: faculte.attributes.highest_qual_marks,
        isFaculty: true,
        subject: faculte.attributes.subjects.data[0].id,
      };

      const registerResponse = await axios.post(
        `http://localhost:1337/api/auth/local/register`,
        facultyData
      );
      const createFaculty = await axios.post(
        `http://localhost:1337/api/teachers`,
        { data: { ...facultyData, user: registerResponse.data.user.id } }
      );

      const updateSub = await axios.put(
        `http://localhost:1337/api/subjects/${faculte.attributes.subjects.data[0].id}`,
        { data: { teachers: createFaculty.data.data.id } }
      );
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
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(
        "http://localhost:1337/api/admission-panels?populate=*"
      );
      setfaculty(res.data.data);
    };
    fetch();
  }, []);

  if (faculty.length == 0)
    return (
      <div className="w-full flex justify-center items-center ">
        {" "}
        <img className="h-4/5" src={img1} />{" "}
      </div>
    );

  return (
    <div className="bg-gray-200 w-full min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Faculty Panel</h1>
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-blue-300 p-4 rounded-lg flex justify-between items-center">
            <div className="flex items-center justify-between w-1/2">
              <h1 className="font-bold mr-2">Faculty Name</h1>
              <h1 className="font-bold">Expert</h1>
            </div>
            <div className="flex items-center w-40 gap-9">
              <h1 className="font-bold mr-2">Reject</h1>
              <h1 className="font-bold">Accept</h1>
            </div>
          </div>
          {faculty &&
            faculty.map((faculte) => {
              if (faculte.attributes.isFaculty === true)
                return (
                  <div
                    key={faculte.id}
                    className="bg-white p-4 rounded-lg flex justify-between items-center"
                  >
                    <div className="flex items-center justify-between w-1/2">
                      <p className="font-bold mr-2">
                        {faculte.attributes.FullName}
                      </p>

                      <p className="text-gray-500">
                        {
                          faculte.attributes.subjects.data[0].attributes
                            .subjectName
                        }
                      </p>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() => {
                          rejectUser(faculte.id);
                        }}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
                      >
                        Reject
                      </button>
                      <button
                        onClick={() => {
                          acceptUser({ faculte, id: faculte.id });
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

export default FacultyPenal;
