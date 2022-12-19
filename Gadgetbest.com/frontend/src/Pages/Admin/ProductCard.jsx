import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css"

const ProductCard = ({ item }) => {
    
const d = useSelector((state)=>state.data)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // console.log(item)
   const handleDelete = (id)=>{
     
   }

    return (
        <>
       
            <td><img width="50px" src={item.image_url} alt="" /></td>
            <td>{item.title}</td>
            <td>{item.category}</td>
            <td>{item.brand}</td>
            <td>{item.price}</td>
            <td>{item.rating}</td>
            <td> <button  onClick={()=>handleDelete(item._id)} className="danger"> <img src='./delete.png' alt='delete' width='20px' />         </button></td>
          </>
     
    );
};

export default ProductCard;