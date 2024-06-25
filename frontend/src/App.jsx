import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LeftSidebar from "./components/LeftSidebar";
import Home from "./components/Home"; // Update with your correct path
import Profile from "./pages/Profile";
import RightSidebar from "./components/RightSidebar";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

export default function App() {
  return (
    <div className="text-3xl bg-black text-white w-full h-[100%]">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex justify-between">
                <LeftSidebar />
                <Home />
                <RightSidebar />
              </div>
            }
          />
          <Route
            path="/profile"
            element={
              <div className="flex justify-between">
                <LeftSidebar />
                <Profile />
                <RightSidebar />
              </div>
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}
