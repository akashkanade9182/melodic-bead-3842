import { Box, Button, Center, Container, Flex, GridItem, Image, Select, SimpleGrid, SkeletonCircle, SkeletonText, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Components/Pagination";
import store from "../Redux/store";
import axios from 'axios'
import {
    getDataFailure,
    getDataRequest,
    getDataSuccess,
   
  } from "../Redux/AppReducer/action";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const AllProductPage = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery]= useState('')
  const dispatch = useDispatch();
  const [sortby , setSortby]=useState('asc')


  const { data,cart, isLoading, isError } = useSelector((state) => {
    return {
      data: state.AppReducer.data,
      isLoading: state.AppReducer.isLoading,
      isError: state.AppReducer.isError,
    };
  }, shallowEqual);
  
  
  
  
  const getData = () => {
      dispatch(getDataRequest())
    
    // fetch("https://netmeddata.onrender.com/products")
     return axios.get(`https://odd-dog-pea-coat.cyclic.app/products?search=${query}&sortby=${sortby}&page=${page}&limit=${20}`)
      .then((res) => {
          console.log(res)
          dispatch(getDataSuccess(res.data))
        })
        .catch((err) => {
            dispatch(getDataFailure())
        });
    };
    
    
    const handleCart=(item)=>
    {
        
    }
    
    useEffect(() => {
        getData()
        .then(res=>res.json())
        .then(res=>res.data)
        
  }, [query,sortby,page]);


    
  
  if (isError) {
    return (
      <Box>
        <Center>
        <Image h='100vh' w='100wh' src="https://img.freepik.com/free-vector/glitch-error-404-page-background_23-2148090410.jpg?w=2000" alt='error image'/>
        </Center>
      </Box>
    );
  }




  return (
    <>
      <Container maxW="90%" >
        <br />
        <br />

         <Box width='90%' p='2' m='auto'>
            <Flex justifyContent='space-between'>
                <Button size={['xs','sm','lg']} onClick={()=>setQuery(' ')}>All Products</Button>
                <Button size={['xs','sm','lg']} onClick={()=>setQuery('Watches')}>Watches</Button>
                <Button size={['xs','sm','lg']} onClick={()=>setQuery('Fitness Equipment')}>Fitness Equipment</Button>
                <Button size={['xs','sm','lg']} onClick={()=>setQuery('Mobile')}>Mobile</Button>
                <Button size={['xs','sm','lg']} onClick={()=>setQuery('Electronic')}>Electronic</Button>
            </Flex>
        </Box> 
        <br />
        <hr />

        <Box p='3'>
          <Flex alignItems='center' justifyContent="space-between">
            <Box>
              <Text fontWeight="700" fontSize={['lg','2xl','4xl']}>
                {query}
              </Text>
            </Box>
            <Box>
              <Select borderColor='gray.300' onChange={(e)=>setSortby(e.target.value)} placeholder="Sort By: " size={['xs','lg','lg']}>
                <option value="asc">All</option>
                <option  value="desc">Price low to high</option>
                <option  value="asc">Price high to low</option>
              </Select>
            </Box>
          </Flex>
        </Box>

<br />
       <Box w='90%' m='auto'>
        <SimpleGrid  columns={[1,2,3,4]} gap={10}>
                {data.length > 0 &&
                  data?.map((item) => {
                    return isLoading ? (
                        <>
                        <Box  padding="3" boxShadow="lg" bg="gray.50">
                          <SkeletonCircle m='auto' size="20" />
                          < SkeletonText
                            mt="4"
                            noOfLines={6}
                            spacing="4"
                            skeletonHeight="5"
                          />
                        </Box>
                      </>
                    ) : (
                      <GridItem className="watch-container">
                        <Box lineHeight="20px" textAlign="left" p={2}>
                         
                         <Link to={`/Watches/${item._id}`}>
                         <Image
                            src={item.image_url}
                            alt={item.brand}
                            cursor="pointer"
                          /></Link> 
                          <Text fontSize={['xs','sm','sm','sm']} className="watch-container-title">
                            {item.title}
                          </Text>
                          <Text mt="1rem" color="red" fontWeight="bold">
                            Rs. {item.price}
                          </Text>
                          <Box fontSize="xl"  textAlign="right"  mt={3}>
                           <Flex color="gray.400" justifyContent='space-between' alignItems='center' >
                           <Link to={`/Watches/${item._id}`}><Button>More Detail</Button></Link>
                           <Button onClick={handleCart(item)}><i  class='bx bx-cart-alt'></i>Cart</Button>
                           </Flex>
                          </Box>
                        </Box>
                      </GridItem>
                    );
                  })}
              </SimpleGrid>
              <Pagination page={page} setPage={setPage}/>
              <br />
              <hr />
            </Box>
      </Container>
    </>
  );
};

export default AllProductPage;
