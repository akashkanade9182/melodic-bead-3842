import { Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
// import styles from "../../Styles/AdminProducts.module.css";
// import axios from 'axios';

const AllAdminProducts = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [products, setProducts] = useState("")

    useEffect(() => {
        setLoading(true)
        fetch("https://odd-dog-pea-coat.cyclic.app/products", {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("addedProduct")}`
            }
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setProducts(res)
                // setLoading(false)
            })
            .catch((err) => {
                setError(true)
                setLoading(false)
            })
    }, [])


    const deleteProduct = (ProductID) => {
        console.log("This is the Product Id", ProductID);
        fetch(`https://odd-dog-pea-coat.cyclic.app/products/delete/${ProductID}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("addedProduct")}`
            }
        }).then(() => {
            fetch("https://odd-dog-pea-coat.cyclic.app/products", {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("addedProduct")}`
                }
            })
                .then((res) => res.json())
                .then((res) => {
                    console.log(res)
                    setProducts(res)
                    setLoading(false)
                })
                .catch((err) => {
                    setError(true)
                    setLoading(false)
                })
        })
    }


    return (
        <div>
        {
            loading && <h1 style={{color: "blue", fontSize:"30px", margin:"auto",width:"300px",fontWeight:"bold"}}>ALL THE PRODUCTS</h1>
        }
        {
            error && "something went wrong...."
        }
       <TableContainer>
               <Table variant="striped" size="md" colorScheme='teal'>
                   <Thead >
                       <Tr whiteSpace="normal" border="1 px solid blue">
                          <Th>Product title</Th>
                           <Th>Image URl</Th>
                           <Th >Product Price</Th>
                           <Th >Product Brand</Th>
                           <Th>Product Quantity</Th>
                           <Th >Product Rating</Th>
                           <Th>Product Category</Th>
                           <Th>sub category</Th>
                           <Th>Delete Product</Th>
                           <Th>Edit Product</Th>
                       </Tr>
                   </Thead>
                   <Tbody whiteSpace="normal">
                       {
                           products && products.length > 0 && products.reverse().map((product) => {
                               return (
                                   <Tr key={product._id} whiteSpace="normal">
                                       <Td>{product.title}</Td>
                                       <Td><img src={product.image_url} alt="img" /></Td>
                                       <Td>{product.price}</Td>
                                       <Td>{product.brand}</Td>
                                       <Td >{product.quantity}</Td>
                                       <Td>{product.rating}</Td>
                                       <Td>{product.category}</Td>
                                       <Td>{product.subCategory}</Td>
                                       <Td><Button colorScheme='red' onClick={() => deleteProduct(product._id)}>DELETE</Button></Td>
                                       <Td><Button colorScheme='blue' >EDIT</Button></Td>
                                   </Tr>
                               )
                           })
                       }
                   </Tbody>
               </Table>
               
              
           </TableContainer>

        
    </div> 
    )
}

export default AllAdminProducts;

  




