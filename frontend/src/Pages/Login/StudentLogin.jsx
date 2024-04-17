import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
const StudentLogin = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const submit = async (data) => {
    try {
      const user = await axios.post(
        "http://localhost:1337/api/auth/local",
        data
      );
      if (
        user.data.user.isFaculty !== true &&
        user.data.user.isAdmin !== true
      ) {
        console.log(user);
        // dispatch(loginUser(user));
        Cookies.set("userData", JSON.stringify(user), { expires: 1 });
        navigate("/dashboard");
      } else {
        alert("you are not student");
        reset();
        navigate("/studentLogin");
      }
    } catch (error) {
      // setError(error.message);
      console.error(error);
    }
  };

  return (
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
            to="/studentsApply"
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

export default StudentLogin;
