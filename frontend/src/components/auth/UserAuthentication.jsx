import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FaGoogle } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";

export default function UserAuthentication() {
  return (
    <div className=" h-[100vh] flex items-center justify-center p-10 ">
      <div>
        <img src="twiterlogo.webp" alt="logo" className="w-[50%]" />
      </div>
      <div className="flex flex-col w-[30%] gap-10">
        <div>
          <h1 className="text-6xl font-bold ">Happening now</h1>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-zinc-200 text-2xl font-bold">join today .</p>
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-col gap-4">
              <Button className=" bg-white text-black hover:bg-white hover:text-zinc-700 font-bold w-72 rounded-full">
                <FaGoogle className="text-red-500 " /> Sign Up with Google
              </Button>
              <Button className=" bg-white text-black hover:bg-white hover:text-zinc-700 font-bold w-72 rounded-full">
                <FaApple className="text-black text-2xl " /> Sign up with Apple
              </Button>
              <hr />
            </div>
            <div className="flex flex-col gap-4">
              <Button className=" bg-white text-black hover:bg-white hover:text-zinc-700 font-bold w-72 rounded-full">
                Create account
              </Button>
              <p>
                By signing up, you agree to the
                <span className="text-blue-600">Terms of Service</span> and
                <span className="text-blue-600"> Privacy Policy</span>,
                including <span className="text-blue-600">Cookie Use. </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
