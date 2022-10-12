import React from "react";

import { Routes, Route } from "react-router-dom";

// components
import Header from "./Header";
import Sidebar from "./Sidebar";

// pages
import Home from "../page/Home";
import Room from "../page/Room";
import Join from "../page/Join.jsx";
import NotFound from "../page/NotFound";
import Scanqr from "../page/Scanqr.jsx";
import NewRoom from "../page/NewRoom";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="max-h-screen overflow-auto w-full">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/room/:roomID" element={<NewRoom />} /> */}
          <Route path="/room/:roomID" element={<Room />} />
          <Route path="/join" element={<Join />} />
          <Route path="/scanqr" element={<Scanqr />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
