import React from "react";
import NavBar from "./NavBar";
import LeftSidbar from "./LeftSidbar";
import RightSidbar from "./RightSidbar";
import ShowPost from "./ShowPost";

export default function Home() {
  return (
    <div className="max-w-[100vw] max-h-[100vh] flex flex-col">
      <div>
        <NavBar />
      </div>
      <div className="flex flex-row  ">
        <ShowPost />
        <LeftSidbar />
        <RightSidbar />
      </div>
    </div>
  );
}
