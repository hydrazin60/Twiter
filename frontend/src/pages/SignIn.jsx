import React, { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
export default function SignIn() {
   
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex items-center">
        <div>
          <BsTwitterX className="text-[500%] mr-32" />
        </div>
        <div>
          <div className="mb-16">
            <h1 className="font-bold text-6xl">Happening now.</h1>
          </div>
          <h1 className="mt-4 mb-2 text-2xl font-bold" id="form-title">
            {isLogin ? "Login" : "Signup"}
          </h1>
          <form id="auth-form" className="flex text-xl flex-col w-[75%]">
            {!isLogin && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  className="outline-blue-500 border pl-8 bg-zinc-900 text-white border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
                  id="name-field"
                />
                <input
                  type="text"
                  placeholder="Username"
                  className="outline-blue-500 border  pl-8 bg-zinc-900 text-white border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
                  id="username-field"
                />
              </>
            )}
            <input
              type="email"
              placeholder="Email"
              className="outline-blue-500 border  pl-8 bg-zinc-900 text-white border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
              id="email-field"
            />
            <input
              type="password"
              placeholder="Password"
              className="outline-blue-500 border  pl-8 bg-zinc-900 text-white border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
              id="password-field"
            />

            <button className="bg-[#1D9BF0] border-none py-2 my-4 w-[50%] rounded-full text-lg text-white">
              Submit
            </button>
            <div className="flex  flex-wrap">
              <button
                className="bg-white text-black font-bold border-none py-2 my-4 w-[50%] rounded-full text-lg "
                id="submit-btn"
              >
                Google
              </button>
              <button
                className=" bg-white font-bold  border-none py-2 my-4 w-[50%] rounded-full text-lg text-black"
                id="submit-btn"
              >
                AppleId
              </button>
            </div>
            <h1 id="switch-auth">
              {isLogin ? "Do not have an account?" : "Already have an account?"}
              <span
                className="font-bold text-blue-600 cursor-pointer ml-2"
                id="toggle-auth"
                onClick={toggleForm}
              >
                {isLogin ? "Signup" : "Login"}
              </span>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
}


{/* <button
className="bg-[#1D9BF0] border-none py-2 my-4 w-[50%] rounded-full text-lg text-white"
id="submit-btn"
>
{isLogin ? "Login" : "Create Account"}
</button> */}