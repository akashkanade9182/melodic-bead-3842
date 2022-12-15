// Arun task - create the product page
import {
  Alert,
  AlertIcon,
  Box,
  Flex,
  GridItem,
  Image,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { BiHomeSmile } from "react-icons/bi";
import "../Styles/productpage.css";

const Productspage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = () => {
    setLoading(true);
    fetch("https://netmeddata.onrender.com/products")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleAddToCart = () => {
    
      <Alert >
      <AlertIcon />
      Data uploaded to the server. Fire on!
    </Alert>
    
  };

  if (loading) {
    return <h1>.....Loading</h1>;
  }

  if (error) {
    return <h1>....Something went wrong</h1>;
  }

  return (
    <Box w="98%" m="auto">
      <Flex justifyContent="space-between" lineHeight="30px">
        <Box
          p={2}
          width="22%"
          h="100vh"
          className="watch-left-container"
          overflow="scroll"
          overflowX="hidden"
        >
          <Flex fontSize="l" alignItems="center">
            <AiOutlineLeft />
            <Text cursor="pointer">Back</Text>
          </Flex>

          <Text textAlign="left" mt={1} fontSize="l" fontWeight="700">
            Smart Watches
          </Text>

          <br />
          <hr />

          <Text textAlign="left" fontWeight="700" fontSize="sm">
            NARROW SEARCH RESULTS
          </Text>
          <Box textAlign="left" fontSize="13px">
            <Text className="section-left-hover-bold"> IN STOCK</Text>
            <Text className="section-left-hover-bold">ON SALE</Text>
          </Box>

          <Text textAlign="left" fontWeight="700" fontSize="sm">
            Hot Search
          </Text>
          <Box textAlign="left" fontSize="13px">
            <Text className="section-left-hover-bold">Wrist bracelet</Text>
            <Text className="section-left-hover-bold"> Smartwatch Strap</Text>
            <Text className="section-left-hover-bold">Fashion Bracelet</Text>
            <Text className="section-left-hover-bold">Outdoor Smartwatch</Text>
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
            <Text className="section-left-hover-bold">Android Smartwatch</Text>
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
            <Flex alignItems="center">
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
                <Text>Brand : </Text>
              </Box>
              <Box p={1}>
                <SimpleGrid
                  columns={8}
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

          <Box fontSize="xs" h="auto" mt={2}>
            <Flex alignItems="center" mt="1rem">
              <Box w="8%">
                <Text>Price : </Text>
              </Box>
              <Box p={1}>
                <SimpleGrid
                  columns={[2, 5, 6]}
                  gap={2}
                  alignItems="center"
                  justifyContent="space-evenly"
                  flexWrap="wrap"
                >
                  <Box className="section-price-filter" h="2rem">
                    <Text>$5.01 - $10.00</Text>
                  </Box>
                  <Box className="section-price-filter" h="2rem">
                    <Text>$10.01 - $20.00</Text>
                  </Box>
                  <Box className="section-price-filter" h="2rem">
                    <Text>$20.01 - $50.00</Text>
                  </Box>

                  <Box className="section-price-filter" h="2rem">
                    <Text>$50.01 - $100.00</Text>
                  </Box>

                  <Box className="section-price-filter" h="2rem">
                    <Text>$100.01 - $200.00</Text>
                  </Box>
                  <Box className="section-price-filter" h="2rem">
                    <Text>$200.01 - $500.00</Text>
                  </Box>

                  <Box className="section-price-filter" h="2rem">
                    <Text>$500.01 - over</Text>
                  </Box>
                </SimpleGrid>
              </Box>
            </Flex>
          </Box>

          {/* section 5 Sort by categories */}
          <Box fontSize="xs" h="auto" mt={2}>
            <Flex alignItems="center">
              <Box w="8%">
                <Text>Sort By : </Text>
              </Box>
              <Box p={1}>
                <SimpleGrid
                  columns={[3, 6, 7]}
                  gap={1}
                  alignItems="center"
                  justifyContent="space-evenly"
                  flexWrap="wrap"
                >
                  <Box className="sort-hover-yellow" h="2rem">
                    <Text pl="1" pr="1">
                      Recommended
                    </Text>
                  </Box>
                  <Box className="sort-hover-yellow" h="2rem">
                    <Text>Hottest</Text>
                  </Box>
                  <Box className="sort-hover-yellow" h="2rem">
                    <Text>Newest</Text>
                  </Box>
                  <Box className="sort-hover-yellow" h="2rem">
                    <Text>Rating</Text>
                  </Box>
                  <Box className="sort-hover-yellow" h="2rem">
                    <Text>Trending</Text>
                  </Box>
                  <Box className="sort-hover-yellow" h="2rem">
                    <Text>Price Low</Text>
                  </Box>
                  <Box className="sort-hover-yellow" h="2rem">
                    <Text>Price High</Text>
                  </Box>
                </SimpleGrid>
              </Box>
            </Flex>
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
              <SimpleGrid columns={4} gap={4}>
                {data.length > 0 &&
                  data?.map((item) => {
                    return (
                      <GridItem className="watch-container">
                        <Box lineHeight="20px" textAlign="left" p={2}>
                          <Image
                            src={item.image}
                            alt={item.brand}
                            cursor="pointer"
                          />
                          <Text fontSize="sm" className="watch-container-title">
                            {item.title}
                          </Text>
                          <Text mt="1rem" color="red" fontWeight="bold">
                            Rs. {item.price}
                          </Text>
                          <Box fontSize="xl" color="red" textAlign="right">
                            <i
                              onClick={handleAddToCart}
                              class="bx bx-heart"
                            ></i>
                          </Box>
                        </Box>
                      </GridItem>
                    );
                  })}
              </SimpleGrid>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Productspage;
