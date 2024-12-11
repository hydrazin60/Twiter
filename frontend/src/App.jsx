import React from "react";
import { Button } from "./components/ui/button";
import UserAuthentication from "./components/auth/UserAuthentication";

export default function App() {
  return (
    <div className="text-white bg-black">
      <UserAuthentication />
    </div>
  );
}
