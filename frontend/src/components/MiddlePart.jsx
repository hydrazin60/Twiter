 

import React from "react";
import PostCreate from "./PostCreate";
import Tweet from "./Tweet";

export default function MiddlePart() {
  return (
    <div className="w-[80%] border border-gray-400 border-opacity-40 ">
      <PostCreate />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
}
