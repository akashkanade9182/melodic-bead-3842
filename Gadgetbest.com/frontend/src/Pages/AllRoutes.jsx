import React from "react";
import { Route, Routes } from "react-router-dom";
import Chek from "./Chek";
import Login from "./Login";
import Signup from "./Signup";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/chek" element={<Chek />} /> 

      </Routes>
    </div>
  );
};