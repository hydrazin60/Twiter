import React from "react";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";

export default function PostCreate() {
  return (
    <div className="mx-auto  ">
      <div>
        <div className="flex justify-evenly items-center ">
          <div className=" cursor-pointer text-xl   hover:bg-gray-900 w-full text-center px-4 py-3  border-b border-gray-300 border-opacity-40">
            <h1 className=" text-lg font-semibold text-zinc-500 ">For You</h1>
          </div>
          <div className=" cursor-pointer  hover:bg-gray-900 w-full text-center px-4 py-3  border-b border-gray-300 border-opacity-40 ">
            <h1 className=" text-lg font-semibold text-zinc-500 ">Following</h1>
          </div>
        </div>
        <div>
          <div className="flex items-center p-4 ">
            <div>
              <Avatar
                size="50"
                round={true}
                src="https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/360085714_1616525928846282_1033599316022958055_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Fx9XXv7oMmgQ7kNvgGOcNFQ&_nc_ht=scontent.fktm21-1.fna&oh=00_AYDSrhoiTEkJgj4AG2HQY1u_XYNmqNaTEYGb-3-dZ7Em7Q&oe=667E50BD"
              />
            </div>
            <input
              type="text"
              placeholder="What is happening?!"
              className="w-full outline-none border-none ml-2 bg-black  "
            />
          </div>
          <div className=" flex justify-between p-4 border-b border-gray-500 border-opacity-40">
            <div>
              <CiImageOn />
            </div>
            <button className="bg-[#1DA1F2] px-5 font-semibold text-lg py-1 border-none rounded-full opacity-70 hover:opacity-100">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
