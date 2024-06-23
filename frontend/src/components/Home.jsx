import React from "react";
import RightSidebar from "./RightSidebar";
import LeftSidebar from "./LeftSidebar";
import Feed from "./Feed";
export default function Home() {
  return (
    <div className="flex justify-between w-[80%] mx-auto  ">
      <LeftSidebar />
      <Feed />
      <RightSidebar />
    </div>
  );
}
