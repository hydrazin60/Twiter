import React from "react";
import RightSidebar from "./RightSidebar";
import LeftSidebar from "./LeftSidebar";
import MiddlePart from "./MiddlePart";
export default function Home() {
  return (
    <div className="flex justify-between w-[80%] mx-auto  ">
      <MiddlePart />
    </div>
  );
}
//  <LeftSidebar />
// <RightSidebar />
