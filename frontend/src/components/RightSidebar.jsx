// import React from "react";
// import { IoSearch } from "react-icons/io5";
// import Avatar from "react-avatar";

// export default function RightSidebar() {
//   return (
//     <div className="  mr-16 ">
//       <div className=" ml-2  mt-1 flex items-center p-2 bg-gray-700 rounded-full outline-none">
//         <IoSearch className="text-zinc-400 text-lg ml-3" />
//         <input
//           type="text"
//           placeholder="Search.."
//           className="bg-transparent outline-none text-lg"
//         />
//       </div>
//       <div className="p-4 rounded-2xl my-4 mx-3 border border-gray-500 w-full">
//         <h1 className="font-bold my-3 text-2xl">Who to follow</h1>
//         <div className="flex flex-col space-y-4">
//           <div className="flex items-center">
//             <Avatar
//               size="50"
//               round={true}
//               src="https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/360085714_1616525928846282_1033599316022958055_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Fx9XXv7oMmgQ7kNvgGOcNFQ&_nc_ht=scontent.fktm21-1.fna&oh=00_AYDSrhoiTEkJgj4AG2HQY1u_XYNmqNaTEYGb-3-dZ7Em7Q&oe=667E50BD"
//             />
//             <div className="ml-2 cursor-pointer">
//               <h1 className="font-bold text-xl  ">Karuna</h1>
//               <p className="text-base text-gray-500  hover:border-b border-white ">
//                 @karunaKarki
//               </p>
//             </div>
//             <div className="ml-auto">
//               <button className="bg-white text-black font-bold px-4 py-1 text-lg rounded-full hover:bg-zinc-300 ">
//                 Follow
//               </button>
//             </div>
//           </div>
//           {/*  */}
//           <div className="flex items-center">
//             <Avatar
//               size="50"
//               round={true}
//               src="https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/376797734_1711802035993704_3287408525267191471_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rayHBQqbP-YQ7kNvgEG-2uj&_nc_ht=scontent.fktm21-1.fna&oh=00_AYBr67SZapR4EuLZdohRGw28mTMhhaLZ55KwGE6KejhqFQ&oe=667F35F2"
//             />
//             <div className="ml-2 cursor-pointer">
//               <h1 className="font-bold text-xl  ">Khemraj</h1>
//               <p className="text-base text-gray-500  hover:border-b border-white ">
//                 @khemrajrokya
//               </p>
//             </div>
//             <div className="ml-auto">
//               <button className="bg-white text-black font-bold px-4 py-1 text-lg rounded-full hover:bg-zinc-300 ">
//                 Follow
//               </button>
//             </div>
//           </div>
//           {/*  */}
//           <div className="flex items-center">
//             <Avatar
//               size="50"
//               round={true}
//               src="https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/438231194_965838711578485_6863020670451271623_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=phqf_ZiLL7IQ7kNvgFpyeL4&_nc_ht=scontent.fktm21-1.fna&oh=00_AYBJdoPqxRnA3xHxS96cZLKjr599iQszeKGcBJNYeCaZkg&oe=667F3AA4"
//             />
//             <div className="ml-2 cursor-pointer">
//               <h1 className="font-bold text-xl  ">Nisan</h1>
//               <p className="text-base text-gray-500  hover:border-b border-white ">
//                 @khadkanisan
//               </p>
//             </div>
//             <div className="ml-auto">
//               <button className="bg-white text-black font-bold px-4 py-1 text-lg rounded-full hover:bg-zinc-300 ">
//                 Follow
//               </button>
//             </div>
//           </div>
//           {/*  */}
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { IoSearch } from "react-icons/io5";
import Avatar from "react-avatar";

export default function RightSidebar() {
  return (
    <div className="flex-shrink-0 mr-16 w-full md:w-[30%] lg:w-[25%]">
      <div className="ml-2 mt-1 flex items-center p-2 bg-gray-700 rounded-full">
        <IoSearch className="text-zinc-400 text-lg ml-3" />
        <input
          type="text"
          placeholder="Search.."
          className="bg-transparent outline-none text-lg ml-2"
        />
      </div>
      <div className="p-4 rounded-2xl my-4 mx-3 border border-gray-500 w-full">
        <h1 className="font-bold my-3 text-2xl">Who to follow</h1>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <Avatar
              size="50"
              round={true}
              src="https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/360085714_1616525928846282_1033599316022958055_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Fx9XXv7oMmgQ7kNvgGOcNFQ&_nc_ht=scontent.fktm21-1.fna&oh=00_AYDSrhoiTEkJgj4AG2HQY1u_XYNmqNaTEYGb-3-dZ7Em7Q&oe=667E50BD"
            />
            <div className="ml-2 cursor-pointer">
              <h1 className="font-bold text-xl">Samir</h1>
              <p className="text-base text-gray-500 hover:border-b border-white">
                @samirgiri23
              </p>
            </div>
            <div className="ml-auto">
              <button className="bg-white text-black font-bold px-4 py-1 text-lg rounded-full hover:bg-zinc-300">
                Follow
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <Avatar
              size="50"
              round={true}
              src="https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/376797734_1711802035993704_3287408525267191471_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rayHBQqbP-YQ7kNvgEG-2uj&_nc_ht=scontent.fktm21-1.fna&oh=00_AYBr67SZapR4EuLZdohRGw28mTMhhaLZ55KwGE6KejhqFQ&oe=667F35F2"
            />
            <div className="ml-2 cursor-pointer">
              <h1 className="font-bold text-xl">Khemraj</h1>
              <p className="text-base text-gray-500 hover:border-b border-white">
                @khemrajrokya
              </p>
            </div>
            <div className="ml-auto">
              <button className="bg-white text-black font-bold px-4 py-1 text-lg rounded-full hover:bg-zinc-300">
                Follow
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <Avatar
              size="50"
              round={true}
              src="https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/438231194_965838711578485_6863020670451271623_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=phqf_ZiLL7IQ7kNvgFpyeL4&_nc_ht=scontent.fktm21-1.fna&oh=00_AYBJdoPqxRnA3xHxS96cZLKjr599iQszeKGcBJNYeCaZkg&oe=667F3AA4"
            />
            <div className="ml-2 cursor-pointer">
              <h1 className="font-bold text-xl">Nisan</h1>
              <p className="text-base text-gray-500 hover:border-b border-white">
                @khadkanisan
              </p>
            </div>
            <div className="ml-auto">
              <button className="bg-white text-black font-bold px-4 py-1 text-lg rounded-full hover:bg-zinc-300">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

 