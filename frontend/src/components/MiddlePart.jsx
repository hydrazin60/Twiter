import React from "react";
import PostCreate from "./PostCreate";
import Tweet from "./Tweet";

export default function MiddlePart() {
  return (
    <div className="w-[80%] border border-gray-400 border-opacity-40 ml-6">
      <PostCreate />
      <Tweet />
      <Tweet />
      <Tweet />
      
    </div>
  );
}
