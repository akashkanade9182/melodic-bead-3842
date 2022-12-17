import React from "react"
import { useState } from "react"


const AddProducts = () => {
    
    const [title, setTitle] = useState("")
    const [image_url, setImage_url] = useState("")
    const [price, setPrice] = useState("")
    const [brand, setBrand] = useState("")
    const [quantity, setQuanity] = useState("")
    const [favorite, setFavorite] = useState("")
    const [rating, setRating] = useState("")
    const [category, setCategory] = useState("")
    const [subCategory, setSubCategory] = useState("")

    

    const handleSubmit = () => {
        const payload = {
          title,
          image_url,
          price,
          brand,
          quantity: 0,
          favorite: false,
          rating,
          category,
          subCategory
        }
       
        fetch("http://localhost:8080/products/add", {
            method : "POST",
            body : JSON.stringify(payload),
            headers : {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${localStorage.getItem("addedProduct")}`
            }
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
    return(
        <div>
            <h1>Add Product here</h1>
            <input type="text" placeholder="Product title" value={title} onChange={(e) => setTitle(e.target.value)}></input> <br />
            <input type="text" placeholder="Image URl" value={image_url} onChange={(e) => setImage_url(e.target.value)}></input> <br />
            <input type="number" placeholder="Product Price" value={price} onChange={(e) => setPrice(e.target.value)}></input><br />
            <input type="text" placeholder="Product Brand" value={brand} onChange={(e) => setBrand(e.target.value)}></input><br />
            <input type="number" placeholder="Product quantity" value={quantity} onChange={(e) => setQuanity(e.target.value)}></input><br />
            <input type="text" placeholder="Product Favorie" value={favorite} onChange={(e) => setFavorite(e.target.value)}></input><br />
            <input type="text" placeholder="Product Brand" value={brand} onChange={(e) => setBrand(e.target.value)}></input><br />
            <input type="number" placeholder="Product Rating" value={rating} onChange={(e) => setRating(e.target.value)}></input><br />
            <input type="text" placeholder="Product Category" value={category} onChange={(e) => setCategory(e.target.value)}></input><br />
            <input type="text" placeholder="Product Subcategory" value={subCategory} onChange={(e) => setSubCategory(e.target.value)}></input><br />
            <button onClick={handleSubmit}>Submit</button>
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