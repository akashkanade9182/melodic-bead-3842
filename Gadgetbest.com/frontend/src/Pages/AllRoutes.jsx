import React from "react";
import { Route, Routes } from "react-router-dom";
import Chek from "./Chek";
import Login from "./Login";
import Productspage from "./Productspage";
import Signup from "./Signup";
import Homepage from "./Homepage";
import SingalProduct from "./SingleProduct"
import SingleProduct from "./SingleProduct";

 const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        {/* <Route path="/" element={<HomePage/>}/> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/chek" element={<Chek />} /> 
        <Route path='/watches' element={<Productspage/>}/>
        <Route path='/watches/:id' element={<SingleProduct/>}/>
      </Routes>
    </div>
  );
};
export default AllRoutes;