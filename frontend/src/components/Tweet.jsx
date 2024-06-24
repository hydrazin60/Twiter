import React from "react";
import Avatar from "react-avatar";
import { FaRegComment, FaRegHeart, FaRegBookmark } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";

export default function Tweet() {
  return (
    <div className=" border-b border-gray-500 border-opacity-80">
      <div>
        <div>
          <div className="flex p-3 cursor-pointer ">
            <Avatar
              size="40"
              round={true}
              src="https://scontent.fktm21-1.fna.fbcdn.net/v/t1.6435-9/123201081_102426248343348_4913614110525775662_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KWl6ODUd8jwQ7kNvgHMI6Ou&_nc_ht=scontent.fktm21-1.fna&oh=00_AYBZAxnH2fDVH5TBAC11SWb50c36AsJ6SLTXPZ5sXo4OGQ&oe=66A09B6C"
            />
            <div className="flex items-center">
              <h1 className="font-bold text-lg">Jiban Pandey</h1>
              <p className="text-gray-500 text-sm ml-2">@jibanPandey</p>
            </div>
          </div>
          <div className=" border border-gray-500 border-opacity-30 p-3 ml-3 mr-3 mb-3 rounded-[20px] cursor-pointer ">
            <div>
              <p>
                Hello worl d Lorem ipsum, dolor sit amet consectetur adipisicing
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="pl-3 pr-3 pb-2">
            <ul className="flex justify-between text-gray-500   ">
              <li className="flex items-center cursor-pointer hover:text-[#1DA1F2]">
                <FaRegComment className="text-xl" />
                <p className="text-xs ml-0.5">9.9K</p>
              </li>
              <li className="flex items-center cursor-pointer hover:text-[#1DA1F2]">
                <BiRepost className="text-1xl" />
                <p className="text-xs">9.9K</p>
              </li>
              <li className="flex items-center cursor-pointer hover:text-[#1DA1F2]">
                <FaRegHeart className="text-xl" />
                <p className="text-xs ml-0.5">200K</p>
              </li>
              <li>
                <FaRegBookmark className="text-xl mt-1 mr-1 cursor-pointer hover:text-[#1DA1F2]" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
