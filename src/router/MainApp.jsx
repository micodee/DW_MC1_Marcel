import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProfileDetail, ProfileList } from "../pages/Pages";

const MainApp = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ProfileList />} />
          <Route path="/detail/:id" element={<ProfileDetail />} />
        </Routes>
      </Router>
    </>
  );
};

export default MainApp;
