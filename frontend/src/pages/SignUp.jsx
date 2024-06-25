 

import React, { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
   
  const navigate = useNavigate();
 
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex items-center">
        <div className="text-white">
          <BsTwitterX className="text-[10%] mr-32" />
        </div>
        <div>
          <div className="my-5">
            <h1 className="font-bold text-6xl">Happening now.</h1>
          </div>
          <h1 className="mt-4 mb-2 text-2xl font-bold" id="form-title">
            Login
          </h1>
          <form id="auth-form" className="flex flex-col w-[75%]">
          <input
              type="text"
              placeholder="Name"
              className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
              id="Name"
            />
            <input
              type="email"
              placeholder="Email"
              className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
              id="email-field"
            />
            <input
              type="password"
              placeholder="Password"
              className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
              id="password-field"
            />
            <button
              className="bg-[#1D9BF0] border-none py-2 my-4 rounded-full text-lg w-[50%] text-white"
              id="submit-btn"
            >
              Create Account
            </button>
            <h1 id="switch-auth">
              Already have an account? 
              <span
                className="font-bold text-blue-600 cursor-pointer ml-2"
                id="toggle-auth"
                onClick={() => navigate("/signin")}
              >
                 Login
              </span>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
}
