// import React from "react";
// import { IoMdArrowBack } from "react-icons/io";
// import { Link, useParams } from "react-router-dom";
// import Avatar from "react-avatar";

// const Profile = () => {
//   const user = { following: ["123"], _id: "456" }; // Example user object
//   const profile = { name: "John Doe", username: "johndoe" }; // Example profile object
//   const { id } = useParams();

//   return (
//     <div className="w-[50%] border-l border-r border-gray-200">
//       <div>
//         <div className="flex items-center ml-4 py-2">
//           <Link
//             to="/"
//             className="p-2 rounded-full hover:bg-zinc-800 hover:cursor-pointer"
//           >
//             <IoMdArrowBack className="text-2xl " />
//           </Link>
//           <div className="ml-5 cursor-pointer">
//             <h1 className="font-bold text-lg">Hydrazen Dot</h1>
//             <p className="text-gray-500 text-sm">10 posts</p>
//           </div>
//         </div>
//         <img
//         className=" h-40  w-full overflow-hidden "
//           src="https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/293055002_717020842917993_6853115460034100621_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5AmcoEMK6aIQ7kNvgHRtyu8&_nc_ht=scontent.fktm21-1.fna&oh=00_AYB-wUA9eudG3z14NAwYhcDZJmLDkg29Pmg1uvlnDl6D8A&oe=667F6271"
//           alt="banner"
//         />
//         <div className="  absolute top-64 ml-4 border-4 border-zinc-900 rounded-full">
//           <Avatar src="logo.png" size="120" round={true} />
//         </div>
//         <div className="text-right m-4">
//           <button className="px-4 py-1 text-lg bg-black text-white rounded-full border border-gray-500 hover:bg-zinc-800">
//             Edit profile
//           </button>
//         </div>
//         <div className="m-4">
//           <h1 className="font-bold text-xl">{profile?.name}</h1>
//           <p>{`@${profile?.username}`}</p>
//         </div>
//         <div className="m-4 text-sm">
//           <p>
//             🌐 Exploring the web's endless possibilities with MERN Stack 🚀 |
//             Problem solver by day, coder by night 🌙 | Coffee lover ☕ | Join me
//             on this coding journey!
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";

import Avatar from "react-avatar";

const Profile = () => {
  // Mock data for user and profile
  const user = { following: ["123"], _id: "456" }; // Example user object
  const profile = { name: "Hydrazen Dot", username: "johndoe" }; // Example profile object
  const { id } = useParams();

  return (
    <div className="w-[50%] border-l border-r border-gray-500 ml-2">
      <div>
        <div className="flex items-center py-2">
          <Link
            to="/"
            className="p-2 rounded-full hover:bg-zinc-800 ml-3 hover:cursor-pointer"
          >
            <IoMdArrowBack size="24px" />
          </Link>
          <div className="ml-2 ">
            <h1 className="font-bold text-lg  cursor-pointer">{profile?.name}</h1>
            <p className="text-gray-500 text-sm">10 posts</p>
          </div>
        </div>
        <div className="relative">
          <img
            className="h-40 w-full object-cover object-top cursor-pointer "
            src="https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/293055002_717020842917993_6853115460034100621_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5AmcoEMK6aIQ7kNvgHRtyu8&_nc_ht=scontent.fktm21-1.fna&oh=00_AYB-wUA9eudG3z14NAwYhcDZJmLDkg29Pmg1uvlnDl6D8A&oe=667F6271"
            alt="banner"
          />
          <div className="absolute -bottom-12 left-4 border-4 border-black cursor-pointer rounded-full">
            <Avatar
              src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg"
              size="120"
              round={true}
            />
          </div>
        </div>
        <div className="text-right m-4 mt-3">
          <button className="px-4 py-1 bg-black text-lg text-white rounded-full border border-gray-600 hover:bg-zinc-800">
             Edit profile
          </button>
        </div>
        <div className="m-3 ml-5">
          <h1 className="font-bold text-xl">{profile?.name}</h1>
          <p className="text-base text-gray-400">{`@${profile?.username}`}</p>

          <span className="flex text-center  mt-4">
            <FaCalendarAlt className="text-base text-gray-400 mt-1" />
            <p className="text-base text-gray-400 ml-1 ">Joined June 2024</p>
          </span>
        </div>
        <div className="m-4 text-sm">
          <p>
            🌐 Exploring the web's endless possibilities with MERN Stack 🚀 |
            Problem solver by day, coder by night 🌙 | Coffee lover ☕ | Join me
            on this coding journey!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
