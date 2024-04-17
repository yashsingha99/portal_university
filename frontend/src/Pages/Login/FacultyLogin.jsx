import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
const FacultyLogin = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const submit = async (data) => {
    try {
      const user = await axios.post(
        "http://localhost:1337/api/auth/local",
        data
      );
      if(user.data.user.isFaculty === true){
       console.log(user);
      // dispatch(loginUser(user));
       Cookies.set("userData", JSON.stringify(user), { expires: 1 });
       navigate("/facultyDashboard");
      }else {
        alert("you are not faculty");
        reset()
        navigate("/facultyLogin")
      }
    } catch (error) {
      console.error(error);
      navigate("/facultyLogin")
    }
  };
  
  return (
    // <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    //   <div className="max-w-md w-full space-y-8">
    //     <div>
    //       <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
    //         Login
    //       </h2>
    //     </div>
    //     <form onSubmit={handleSubmit(submit)} className="mt-8 space-y-6">
    //       <div className="rounded-md shadow-sm -space-y-px">
    //         <div>
    //           <label htmlFor="username" className="sr-only">
    //             Username
    //           </label>
    //           <input
    //             id="username"
    //             name="username"
    //             type="text"
    //             autoComplete="username"
    //             required
    //             className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
    //             placeholder="Username"
    //             {...register("identifier", {
    //               required: true,
    //             })}
    //           />
    //         </div>

    //         <div>
    //           <label htmlFor="password" className="sr-only">
    //             Password
    //           </label>
    //           <input
    //             id="password"
    //             name="password"
    //             type="password"
    //             autoComplete="new-password"
    //             required
    //             className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
    //             placeholder="Password"
    //             {...register("password", {
    //               required: true,
    //             })}
    //           />
    //         </div>

    //         <div>
    //           <label htmlFor="confirmPassword" className="sr-only">
    //             Confirm Password
    //           </label>
    //           <input
    //             id="confirmPassword"
    //             name="confirmPassword"
    //             type="password"
    //             autoComplete="new-password"
    //             required
    //             className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
    //             placeholder="Confirm Password"
    //           />
    //         </div>
    //       </div>

    //       <div>
    //         <button
    //           type="submit"
    //           className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //         >
    //           Login
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <div className="flex m-4 items-center justify-center w-full">
    <div
      className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
    >
      <h2 className="text-center text-2xl font-bold leading-tight">
        Sign in to your account
      </h2>
      <p className="mt-2 text-center text-base text-black/60">
        Don&apos;t have any account?&nbsp;
        <Link
          to="/facultyApply"
          className="font-medium text-primary transition-all duration-200 hover:underline"
        >
          Sign Up
        </Link>
      </p>
      <form onSubmit={handleSubmit(submit)} className="mt-8">
        <div className="space-y-5">
          <input
            type="username"
            className="px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
            placeholder="Enter your email"
            {...register("identifier", {
              required: true,
            })}
          />

          <input
            type="password"
            className="px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
            placeholder="Enter your password"
            {...register("password", {
              required: true,
            })}
          />
          <button
            className="px-4 py-2 w-full bg-blue-600 rounded-lg text-white"
            type="submit"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default FacultyLogin;
