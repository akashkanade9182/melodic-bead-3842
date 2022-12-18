import React from "react";
import { Route, Routes } from "react-router-dom";
import Chek from "./Chek";
import Login from "./Login";
import Signup from "./Signup";
import Homepage from "./Homepage";
import SingalProduct from "./SingleProduct"

 const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/chek" element={<Chek />} /> 

      </Routes>
    </div>
  );
};
export default AllRoutes;