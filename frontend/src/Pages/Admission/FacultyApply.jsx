import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Toaster from "../../Toaster/Toaster";

const FacultyApply = () => {
  let { register, handleSubmit, reset } = useForm();
  const [subjects, setSubjects] = useState([]);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("")

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(
        "http://localhost:1337/api/subjects?populate=*"
      );
      setSubjects(res.data.data);
    };
    fetch();
  }, []);

  const submit = async (data) => {
    data = { ...data, isFaculty: true };
    try {
      const res = await axios.post(
        "http://localhost:1337/api/admission-panels",
        { data }
      );
      setMsg("register succesfully");
      reset();
    } catch (error) {
      setError(error.response.data.error.message);
      reset();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {error && <Toaster msg = {error} beauty = {"bg-red-400"}/>     } 
     {msg && <Toaster msg = {msg} beauty = {"bg-green-400"}/>     } 
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

            <div>
              <label htmlFor="Course" className="sr-only">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                {...register("subjects", {
                  required: true,
                })}
              >
                <option value="">Select Subject</option>
                {subjects &&
                  subjects.map((subject) => {
                    return (
                      <option key={subject.id} value={subject.id}>
                        {subject.attributes.subjectName}
                      </option>
                    );
                  })}
              </select>
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
