// Arun task - create the product page
import {
  Box,
  Center,
  Flex,
  GridItem,
  Image,
  Select,
  SimpleGrid,
  Text,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import {  Button } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { BiHomeSmile } from "react-icons/bi";
import { Link } from "react-router-dom";
import Pagination from "../Components/Pagination";
import "../Styles/productpage.css";
import axios from "axios";
import {
  getDataFailure,
  getDataRequest,
  getDataSuccess,
} from "../Redux/AppReducer/action";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import CartAlert from "../Components/CartAlert";
import Navbar from "../Components/Navbar/Navbar";
import Footers from "../Components/Footer/Footer";

const Productspage = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const [sortby, setSortby] = useState("asc");

  const { data,  isLoading, isError } = useSelector((state) => {
    return {
      data: state.AppReducer.data,
      isLoading: state.AppReducer.isLoading,
      isError: state.AppReducer.isError,
    };
  }, shallowEqual);

  // console.log(addCart)

  const getData = () => {
    dispatch(getDataRequest());

    // fetch("https://netmeddata.onrender.com/products")
    return axios
      .get(
        `https://odd-dog-pea-coat.cyclic.app/products?search=Watches&sortby=${sortby}&page=${page}&limit='5'`
      )
      .then((res) => {
        console.log(res);
        dispatch(getDataSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getDataFailure());
      });
  };


  useEffect(() => {
    getData()
      .then((res) => res.json())
      .then((res) => res.data);
  }, [ sortby, page]);


  const handleQuantity=(id)=>
{
  const payload={
    quantity:1
    
  }
  console.log(payload)

  fetch(`https://odd-dog-pea-coat.cyclic.app/products/edit/${id}`,{
    method:'PATCH',
    body:JSON.stringify(payload),
    headers:{'Content-Type': 'application/json'}
  })
  .then(res=>res.json())
  .then(res=>console.log(res),
  <CartAlert/>
  )
  .catch(err=>console.log(err))

}





  if (isError) {
    return (
      <Box mt="100px">
        <Center>
          <Image
            h="100vh"
            w="100wh"
            src="https://img.freepik.com/free-vector/glitch-error-404-page-background_23-2148090410.jpg?w=2000"
            alt="error image"
          />
        </Center>
      </Box>
    );
  } else {
    return (
      <>
      <Navbar/>
      
      <Box w="98%" m="auto" mt="150px">
        <Box h="50px" bg="white" width={"100%"}></Box>

        <br />
        <Flex justifyContent="space-between" lineHeight="25px">
          <Box
            p={2}
            width={["40%", "25%", "20%", "20%"]}
            h="100vh"
            className="watch-left-container"
            overflow="scroll"
            overflowX="hidden"
            fontSize={["xs", "sm", "lg"]}
          >
            <Flex fontSize="l" alignItems="center" w="fit-content">
              <AiOutlineLeft />
              <Link to="/">
                <Text cursor="pointer">Back</Text>
              </Link>
            </Flex>

            <Text
              textAlign="left"
              mt={1}
              fontSize={["xs", "sm", "lg"]}
              fontWeight="700"
            >
              Smart Watches
            </Text>

            <br />
            <hr />

            <Text
              textAlign="left"
              fontWeight="700"
              fontSize={["xs", "sm", "lg"]}
            >
              NARROW SEARCH RESULTS
            </Text>
            <Box textAlign="left" fontSize="13px">
              <Text className="section-left-hover-bold"> IN STOCK</Text>
              <Text className="section-left-hover-bold">ON SALE</Text>
            </Box>

            <Text
              textAlign="left"
              fontWeight="700"
              fontSize={["xs", "sm", "lg"]}
            >
              Hot Search
            </Text>
            <Box textAlign="left" fontSize={["xs", "xs", "sm"]}>
              <Text className="section-left-hover-bold">Wrist bracelet</Text>
              <Text className="section-left-hover-bold"> Smartwatch Strap</Text>
              <Text className="section-left-hover-bold">Fashion Bracelet</Text>
              <Text className="section-left-hover-bold">
                Outdoor Smartwatch
              </Text>
              <Text className="section-left-hover-bold">Tracker Bracelet</Text>
              <Text className="section-left-hover-bold">
                Bluetooth Smartwatch
              </Text>
              <Text className="section-left-hover-bold">Sport Smartwatch</Text>
              <Text className="section-left-hover-bold">Man Bracelet</Text>
              <Text className="section-left-hover-bold">Smartwatch Sport</Text>
              <Text className="section-left-hover-bold">
                Waterproof Smartwatch
              </Text>
              <Text className="section-left-hover-bold">Fitness Bracelet</Text>
              <Text className="section-left-hover-bold"> Watch Bracelet</Text>
              <Text className="section-left-hover-bold">Touch Bracelet</Text>
              <Text className="section-left-hover-bold">Fitbit Smartwatch</Text>
              <Text className="section-left-hover-bold">Leather Bracelet</Text>
              <Text className="section-left-hover-bold">Smart Bracelet</Text>
              <Text className="section-left-hover-bold">Xiomi Smartwatch</Text>
              <Text className="section-left-hover-bold">
                Android Smartwatch
              </Text>
            </Box>
          </Box>

          {/* Right Top Section */}
          <Box
            width="75%"
            h="300vh"
            className="watch-main-container"
            overflow="scroll"
          >
            <Box width="100%" h="fit-content">
              <Flex flexWrap="wrap" p="5px" alignItems="center">
                <Box
                  p="3px"
                  borderRadius="2px"
                  h="fit-content"
                  border="1px solid lightgray"
                >
                  <BiHomeSmile />
                </Box>
                <Box>
                  <Select
                    borderRadius="2px"
                    w="210px"
                    size="md"
                    h="100%"
                    placeholder="Consumer Electronics"
                  >
                    <option value="option1">Video Game</option>
                    <option value="option1">Other Consumer Electronics</option>
                    <option value="option2">Security & Protection</option>
                    <option value="option3">Headphone & Earphone</option>
                    <option value="option3">Camera & Photo</option>
                    <option value="option3">Portable Audio & Video</option>
                    <option value="option3">Hifi Devices</option>
                  </Select>
                </Box>
                <Box>
                  <Select
                    size="md"
                    w="210px"
                    borderRadius="2px"
                    h="100%"
                    placeholder="Smart Electronics"
                  >
                    <option value="option1">Smart Home</option>
                    <option value="option1">Smart Wristband</option>
                    <option value="option2">Smart Watch Phone</option>
                    <option value="option3">Smart Watch Accessories</option>
                    <option value="option3">Weather Station</option>
                    <option value="option3">Translator </option>
                  </Select>
                </Box>
                <Box>
                  <Select
                    size="md"
                    w="210px"
                    borderRadius="2px"
                    h="100%"
                    placeholder="Smart Watches"
                  ></Select>
                </Box>
              </Flex>
            </Box>

            {/* Section 2 */}
            <Box
              fontSize="13px"
              mt={5}
              p="0.5rem"
              bg="yellow.50"
              borderBottom="2px solid orange"
              w="95%"
            >
              <Flex alignItems="center" flexWrap="wrap">
                <Box width="fit-content" bgColor="yellow" borderRadius="50px">
                  <Flex>
                    <Box
                      p="2px"
                      w="30px"
                      bgColor="yellow.500"
                      color="white"
                      borderRadius="50%"
                    >
                      <i class="bx bxs-star"></i>
                    </Box>
                    <Box fontWeight="700" h="50%" p="2px" pl={3} pr={3}>
                      Buying Guide
                    </Box>
                  </Flex>
                </Box>
                <Box p="2px" width="fit-content">
                  <Text>Smart Watches Buying Guide</Text>
                </Box>
              </Flex>
            </Box>

            {/* Section 3 Brand */}
            <Box h="auto" className="watch-brand">
              <Flex alignItems="center" ml="1rem" mt="3rem">
                <Box>
                  <Text w="fit-content">Brand : </Text>
                </Box>
                <Box p={1}>
                  <SimpleGrid
                    columns={[2, 4, 6, 8]}
                    gap={2}
                    alignItems="center"
                    justifyContent="space-evenly"
                    flexWrap="wrap"
                  >
                    <Box w="4rem" h="2rem" className="section-price-filter">
                      <Image
                        p={0.5}
                        src="https://uidesign.gbtcdn.com/GB/image/brand/20181102_5779/amazfit.jpg?impolicy=hight"
                        w="100%"
                        h="100%"
                        alt="amazfit"
                      />
                    </Box>
                    <Box w="4rem" h="2rem" className="section-price-filter">
                      <Image
                        p={0.5}
                        w="100%"
                        h="100%"
                        src="https://uidesign.gbtcdn.com/GB/image/brand/20190926_12969/150.73.jpg"
                        alt="kospet"
                      />
                    </Box>
                    <Box w="4rem" h="2rem" className="section-price-filter">
                      <Image
                        p={0.5}
                        w="100%"
                        h="100%"
                        src="https://uidesign.gbtcdn.com/GB/images/others/top_brands/ACARA.png"
                        alt="acara"
                      />
                    </Box>

                    <Box
                      alignItems="center"
                      w="4rem"
                      h="2rem"
                      className="section-price-filter"
                    >
                      <Image
                        p={0.5}
                        w="100%"
                        h="100%"
                        src="https://uidesign.gbtcdn.com/GB/image/4188/Pic1.png"
                        alt="ticwris"
                      />
                    </Box>

                    <Box w="4rem" h="2rem" className="section-price-filter">
                      <Image
                        p={0.5}
                        w="100%"
                        h="100%"
                        src="https://uidesign.gbtcdn.com/GB/image/4188/Pic2.png"
                        alt="Corn"
                      />
                    </Box>
                    <Box w="4rem" h="2rem" className="section-price-filter">
                      <Image
                        p={0.5}
                        w="100%"
                        h="100%"
                        src="https://uidesign.gbtcdn.com/GB/image/6874/150x73.jpg"
                        alt="Mi"
                      />
                    </Box>

                    <Box w="4rem" h="2rem" className="section-price-filter">
                      <Image
                        p={0.5}
                        w="100%"
                        h="100%"
                        src="https://uidesign.gbtcdn.com/GB/images/banner/others/gocomme.png"
                        alt="go comma"
                      />
                    </Box>

                    <Box w="4rem" h="2rem" className="section-price-filter">
                      <Image
                        p={0.5}
                        w="100%"
                        h="100%"
                        src="https://uidesign.gbtcdn.com/GB/image/4188/Pic3.png"
                        alt="haylou"
                      />
                    </Box>
                  </SimpleGrid>
                </Box>
              </Flex>
            </Box>

            {/* Section 4 Price filter */}

            <Box fontSize="xs" h="auto" mt={2} ml={3}>
              <Flex alignItems="center" mt="1rem">
                <Box w="fit-content">
                  <Text>Price : </Text>
                </Box>
                <Box p={1}>
                  <SimpleGrid
                    columns={[3, 4, 6, 8]}
                    gap={2}
                    alignItems="center"
                    justifyContent="space-evenly"
                    flexWrap="wrap"
                  >
                    <Box
                      className="section-price-filter"
                      pl="1"
                      pr="1"
                      h="fit-content"
                    >
                      <Text>Rs 999</Text>
                    </Box>
                    <Box
                      className="section-price-filter"
                      pl="1"
                      pr="1"
                      h="fit-content"
                    >
                      <Text>Rs 1999</Text>
                    </Box>
                    <Box
                      className="section-price-filter"
                      pl="1"
                      pr="1"
                      h="fit-content"
                    >
                      <Text>Rs 3999</Text>
                    </Box>

                    <Box
                      className="section-price-filter"
                      pl="1"
                      pr="1"
                      h="fit-content"
                    >
                      <Text>Rs 7999</Text>
                    </Box>

                    <Box
                      className="section-price-filter"
                      pl="1"
                      pr="1"
                      h="fit-content"
                    >
                      <Text>Rs 9999</Text>
                    </Box>
                    <Box
                      className="section-price-filter"
                      pl="1"
                      pr="1"
                      h="fit-content"
                    >
                      <Text>All</Text>
                    </Box>
                  </SimpleGrid>
                </Box>
              </Flex>
            </Box>

            {/* section 5 Sort by categories */}
            <Box fontSize="xs" h="auto" mt={2} ml={3}>
              <Box>
                <Select
                  w="fit-content"
                  borderColor="gray.300"
                  onChange={(e) => setSortby(e.target.value)}
                  placeholder="Sort By: "
                  size={["xs", "sm", "sm"]}
                >
                  <option value=" ">All</option>
                  <option value="asc">Price low to high</option>
                  <option value="desc">Price high to low</option>
                </Select>
              </Box>
            </Box>
            <br />
            <hr />

            {/* Watch Main Container */}

            <Box m="auto" mt="1rem" w="90%">
              <Box mt="0.5rem">
                <Text
                  fontSize="xl"
                  ml={2}
                  mb="2rem"
                  fontWeight="700"
                  textAlign="Left"
                >
                  Smart Watches
                </Text>
              </Box>

              <Box>
                <SimpleGrid columns={[1, 2, 3, 4]} gap={4}>
                  {data.length > 0 &&
                    data?.map((item) => {
                      return isLoading ? (
                        <>
                          <Box  padding="3" boxShadow="lg" bg="gray.50">
                            <SkeletonCircle m='auto' size="20" />
                            <SkeletonText
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
                              />
                            </Link>
                            <Text
                              fontSize={["xs", "sm", "sm", "sm"]}
                              className="watch-container-title"
                            >
                              {item.title}
                            </Text>
                            <Text mt="1rem" color="red" fontWeight="bold">
                              Rs. {item.price}
                            </Text>
                            <Box fontSize="xl" textAlign="right" mt={3}>
                              <Flex
                                color="gray.400"
                                justifyContent="space-between"
                                alignItems="center"
                              >
                                <Link to={`/Watches/${item._id}`}>
                                  <Button>More Detail</Button>
                                </Link>
                                <Button
                                  onClick={() => handleQuantity(item._id)}
                                >
                                  <i class="bx bx-cart-alt"></i>Cart
                                </Button>
                              </Flex>
                            </Box>
                          </Box>
                        </GridItem>
                      );
                    })}
                </SimpleGrid>
                <Pagination page={page} setPage={setPage} />
                <br />
                <hr />
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Footers/>
      </>
    );
  }
};

export default Productspage;
