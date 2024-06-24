// import React from "react";
// import Home from "./components/Home";
// import Body from "./components/Body";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Profile from "./pages/Profile";

// export default function App() {
//   return (
//     <div className="text-3xl  bg-black text-white w-full h-auto">
//        <BrowserRouter>
//        <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/profile" element={<Profile/>}/>
//        </Routes>
//        </BrowserRouter>
//     </div>
//   );
// }

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LeftSidebar from "./components/LeftSidebar";
import Home from "./components/Home"; // Update with your correct path
import Profile from "./pages/Profile";
import RightSidebar from "./components/RightSidebar";

export default function App() {
  return (
    <div className="text-3xl bg-black text-white w-full h-auto">
      <Router>
        <div className="flex justify-between">
          <LeftSidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            {/* Add more routes as needed */}
          </Routes>
          <RightSidebar />
        </div>
      </Router>
    </div>
  );
}

 