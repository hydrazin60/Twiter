// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { BsTwitterX } from "react-icons/bs";
// import {
//   FaHome,
//   FaBell,
//   FaSearch,
//   FaEnvelope,
//   FaBookmark,
//   FaListAlt,
//   FaUserAlt,
//   FaEllipsisH,
// } from "react-icons/fa";
// export default function LeftSidebar() {
//   const navagite = useNavigate();
//   return (
//     <div className="w-[20%">
//       <div>
//         <div className="ml-4 mt-2 bg-black">
//           <BsTwitterX />
//         </div>
//         <div className="my-4">
//           <div
//             className="flex items-center my-3 px-4 py-2 hover:bg-gray-800 cursor-pointer rounded-full"
//             onClick={() => useNavigate("/")}
//           >
//             <FaHome className="text-2xl" />
//             <h1 className=" font-bold  text-lg ml-3">Home</h1>
//           </div>
//           <div className="flex items-center my-3 px-4 py-2 hover:bg-gray-800 cursor-pointer rounded-full">
//             <FaSearch className="text-2xl" />
//             <h1 className="  font-[600] text-lg ml-3">Explore</h1>
//           </div>
//           <div className="flex items-center my-3 px-4 py-2 hover:bg-gray-800 cursor-pointer rounded-full">
//             <FaBell className="text-2xl" />
//             <h1 className="  font-[600] text-lg ml-3">Notification</h1>
//           </div>
//           <div className="flex items-center my-3 px-4 py-2 hover:bg-gray-800 cursor-pointer rounded-full">
//             <FaEnvelope className="text-2xl" />
//             <h1 className="  font-[600] text-lg ml-3">Messages</h1>
//           </div>
//           <div className="flex items-center my-3 px-4 py-2 hover:bg-gray-800 cursor-pointer rounded-full">
//             <FaBookmark className="text-2xl" />
//             <h1 className="font-[600] text-lg ml-3">Bookmarks</h1>
//           </div>
//           <div
//             className="flex items-center my-3  px-4 py-2 hover:bg-gray-800 cursor-pointer rounded-full"
//             onClick={() => useNavigate("/profile")}
//           >
//             <FaUserAlt className="text-2xl" />
//             <h1 className=" font-[600] text-lg ml-3">Profile</h1>
//           </div>
//           <div className="flex items-center my-3 px-4 py-2 hover:bg-gray-800 cursor-pointer rounded-full">
//             <FaEllipsisH className="text-2xl" />
//             <h1 className=" font-[600] text-lg ml-3">More</h1>
//           </div>
//           <button className="px-5 py-2 text-white text-lg w-full bg-[#1DA1F2] rounded-full hover:bg-[#1a91da] focus:outline-none">
//             Post
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useNavigate } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import {
  FaHome,
  FaBell,
  FaSearch,
  FaEnvelope,
  FaBookmark,
  FaUserAlt,
  FaEllipsisH,
} from "react-icons/fa";

export default function LeftSidebar() {
  const navigate = useNavigate();
  
  return (
    <div className="w-[20%]">
      <div>
        <div className="ml-4 mt-2 bg-black">
          <BsTwitterX />
        </div>
        <div className="my-4">
          <div
            className="flex items-center my-3 px-4 py-2 hover:bg-gray-800 cursor-pointer rounded-full"
            onClick={() => navigate("/")}
          >
            <FaHome className="text-2xl" />
            <h1 className="font-bold text-lg ml-3">Home</h1>
          </div>
          <div className="flex items-center my-3 px-4 py-2 hover:bg-gray-800 cursor-pointer rounded-full">
            <FaSearch className="text-2xl" />
            <h1 className="font-[600] text-lg ml-3">Explore</h1>
          </div>
          <div className="flex items-center my-3 px-4 py-2 hover:bg-gray-800 cursor-pointer rounded-full">
            <FaBell className="text-2xl" />
            <h1 className="font-[600] text-lg ml-3">Notification</h1>
          </div>
          <div className="flex items-center my-3 px-4 py-2 hover:bg-gray-800 cursor-pointer rounded-full">
            <FaEnvelope className="text-2xl" />
            <h1 className="font-[600] text-lg ml-3">Messages</h1>
          </div>
          <div className="flex items-center my-3 px-4 py-2 hover:bg-gray-800 cursor-pointer rounded-full">
            <FaBookmark className="text-2xl" />
            <h1 className="font-[600] text-lg ml-3">Bookmarks</h1>
          </div>
          <div
            className="flex items-center my-3 px-4 py-2 hover:bg-gray-800 cursor-pointer rounded-full"
            onClick={() => navigate("/profile")}
          >
            <FaUserAlt className="text-2xl" />
            <h1 className="font-[600] text-lg ml-3">Profile</h1>
          </div>
          <div className="flex items-center my-3 px-4 py-2 hover:bg-gray-800 cursor-pointer rounded-full">
            <FaEllipsisH className="text-2xl" />
            <h1 className="font-[600] text-lg ml-3">More</h1>
          </div>
          <button className="px-5 py-2 text-white text-lg w-full bg-[#1DA1F2] rounded-full hover:bg-[#1a91da] focus:outline-none">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
