import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "./Admin/AdminLogin";
import AdminProducts from "./Admin/AdminProducts";
import AllAdminProducts from "./Admin/AllAdminProducts";
import Login from "./Login";
import Signup from "./Signup";
import Homepage from "./Homepage"
import Productspage from "./Productspage";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart"
import CheckoutPage from "./CheckoutPage";
import AllProductPage from "./AllProductPage"
import PaymentPage from "./PaymentPage";


export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path='/watches' element={<Productspage/>}/>
        <Route path='/watches/:id' element={<SingleProduct/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/adminproducts' element={<AdminProducts/>}/>
        <Route path='/alladminproducts' element={<AllAdminProducts/>}/>
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/checkout" element={<CheckoutPage/>} /> 
        <Route path="/allproducts" element={<AllProductPage/>} /> 
        <Route path="/paymentpage" element={<PaymentPage/>} /> 


      </Routes>
    </div>
  );
};