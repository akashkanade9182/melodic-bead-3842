import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "./Admin/AdminLogin";
import AdminProducts from "./Admin/AdminProducts";
import AllAdminProducts from "./Admin/AllAdminProducts";
import Login from "./Login";
import Signup from "./Signup";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path='/watches' element={<Productspage/>}/>
        <Route path='/watches/:id' element={<SingleProduct/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/adminproducts' element={<AdminProducts/>}/>
        <Route path='/alladminproducts' element={<AllAdminProducts/>}/>
      </Routes>
    </div>
  );
};