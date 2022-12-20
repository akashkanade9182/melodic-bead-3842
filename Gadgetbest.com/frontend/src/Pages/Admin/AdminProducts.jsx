import React from "react"
import { useState } from "react"
import { useNavigate,Link } from "react-router-dom";
import styles from "../../Styles/AdminProducts.module.css";
import {Button} from "@chakra-ui/react"

const AddProducts = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("")
    const [image_url, setImage_url] = useState("")
    const [price, setPrice] = useState("")
    const [brand, setBrand] = useState("")
    const [quantity, setQuanity] = useState("")
    const [rating, setRating] = useState("")
    const [category, setCategory] = useState("")
    const [subCategory, setSubCategory] = useState("")

    

    const handleSubmit = (e) => {
      e.preventDefault();
        const payload = {
          title,
          image_url,
          price,
          brand,
          quantity: 0,
          rating,
          category,
          subCategory
        }

       
       
        fetch("https://odd-dog-pea-coat.cyclic.app/products/add", {
            method : "POST",
            body : JSON.stringify(payload),
            headers : {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${localStorage.getItem("addedProduct")}`
            }
        })
        .then((res) => res.json())
        .then((res) => {
           console.log(res);
           alert(res.Message);
            localStorage.setItem("addedProduct",res.token)
            if(res.Message === "Data Added Successfully"){
                navigate("/alladminproducts");
            }
        })
        .catch((err) => console.log(err))
    }
    return(
        <div>
          <div className={styles.main_div}>
          
          <h1 className={styles.admin_heading}>Admin Dashboard</h1>
           <Link to={"/"}> <Button  m="auto" ml='640px'> Log out</Button></Link>
             
                <form onSubmit={handleSubmit} className={styles.add_product_div}>
                
                 <h1 className={styles.heading}>Add Product here</h1>
                  <input type="text" placeholder="Product title" value={title} required onChange={(e) => setTitle(e.target.value)}></input> <br />
                  <input type="text" placeholder="Image URl" value={image_url} required onChange={(e) => setImage_url(e.target.value)}></input> <br />
                  <input type="number" placeholder="Product Price" value={price} required onChange={(e) => setPrice(e.target.value)}></input><br />
                  <input type="text" placeholder="Product Brand" value={brand} required onChange={(e) => setBrand(e.target.value)}></input><br />
                  <input type="number" placeholder="Product quantity" value={quantity} onChange={(e) => setQuanity(e.target.value)}></input><br />
                  <input type="number" placeholder="Product Rating" value={rating} required onChange={(e) => setRating(e.target.value)}></input><br />
                  <input type="text" placeholder="Product Category" value={category} required onChange={(e) => setCategory(e.target.value)}></input><br />
                  <input type="text" placeholder="Product Subcategory" value={subCategory} required onChange={(e) => setSubCategory(e.target.value)}></input><br />
                 <input type="submit" value="ADD PRODUCT" />
                </form>
                
         
          </div>
          
        </div>
    )
}


export default AddProducts;


// for login
// api/login

// for getting all products products 
// api/products

// for add products for seller
// api/products/add

// for patch request from seller
// api/products/edit/:productID

// for delete req
// api/products/delete/:ProductID

// 1)title
// 2)price
// 3)brand
// 4)rating
// 5)quantity
// 6)category
// 7)sub-category
// 8)status:admin or customer
// 9)brand