// Arun task - create the product page
import {
  Box,
  Container,
  Flex,
  Grid,
  Image,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineLeft, AiFillStar } from "react-icons/ai";
import { BiHomeSmile } from "react-icons/bi";
import "../Styles/productpage.css";

const Productspage = () => {
  return (
    <Box border="1px solid black" w="98%" m="auto">
      <Flex justifyContent="space-between" lineHeight="30px">
        <Box p={2} width="22%" h="100vh" overflow="scroll" overflowX="hidden">
          <Flex fontSize="l" alignItems="center">
            <AiOutlineLeft />
            <Text>Back</Text>
          </Flex>

          <Text textAlign="left" mt={1} fontSize="l" fontWeight="600">
            Smart Watches
          </Text>

          <br />
          <hr />

          <Text textAlign="left" fontWeight="600" fontSize="sm">
            NARROW SEARCH RESULTS
          </Text>
          <Box textAlign="left" fontSize="13px">
            <Text className="hover-text">ON SALE</Text>
            <Text className="hover-text"> IN STOCK</Text>
          </Box>

          <Text textAlign="left" fontWeight="600" fontSize="sm">
            Hot Search
          </Text>
          <Box textAlign="left" fontSize="13px">
            <Text>Wrist bracelet</Text>
            <Text> Smartwatch Strap</Text>
            <Text>Fashion Bracelet</Text>
            <Text>Outdoor Smartwatch</Text>
            <Text>Tracker Bracelet</Text>
            <Text>Bluetooth Smartwatch</Text>
            <Text>Sport Smartwatch</Text>
            <Text>Man Bracelet</Text>
            <Text>Smartwatch Sport</Text>
            <Text>Waterproof Smartwatch</Text>
            <Text>Fitness Bracelet</Text>
            <Text> Watch Bracelet</Text>
            <Text>Touch Bracelet</Text>
            <Text>Fitbit Smartwatch</Text>
            <Text>Leather Bracelet</Text>
            <Text>Smart Bracelet</Text>
            <Text>Xiomi Smartwatch</Text>
            <Text>Android Smartwatch</Text>
          </Box>
        </Box>
        {/* Right Top Section */}
        <Box width="75%" border="2px solid black">
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
            p={2}
            bg="yellow.50"
            borderBottom="2px solid red"
            w="100%"
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
                  <Box fontWeight="700" p="2px" pl={3} pr={3}>
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
          <Box h='auto' className="watch-brand" >
            <Flex alignItems="center">
              <Box>
                <Text>Brand : </Text>
              </Box>
              <Box p={1} border="2px solid black">
                <SimpleGrid
                  columns={[2, 4, 8]}
                  gap={2}
                  alignItems="center"
                  justifyContent="space-evenly"
                  flexWrap="wrap"
                >
                  <Box w="4rem" h="2rem" border="1px solid black">
                    <Image
                      p={0.5}
                      src="https://uidesign.gbtcdn.com/GB/image/brand/20181102_5779/amazfit.jpg?impolicy=hight"
                      w="100%"
                      h="100%"
                      alt="amazfit"
                    />
                  </Box>
                  <Box w="4rem" h="2rem" border="1px solid black">
                    <Image
                      p={0.5}
                      w="100%"
                      h="100%"
                      src="https://uidesign.gbtcdn.com/GB/image/brand/20190926_12969/150.73.jpg"
                      alt="kospet"
                    />
                  </Box>
                  <Box w="4rem" h="2rem" border="1px solid black">
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
                    border="1px solid black"
                  >
                    <Image
                      p={0.5}
                      w="100%"
                      h="100%"
                      src="https://uidesign.gbtcdn.com/GB/image/4188/Pic1.png"
                      alt="ticwris"
                    />
                  </Box>

                  <Box w="4rem" h="2rem" border="1px solid black">
                    <Image
                      p={0.5}
                      w="100%"
                      h="100%"
                      src="https://uidesign.gbtcdn.com/GB/image/4188/Pic2.png"
                      alt="Corn"
                    />
                  </Box>
                  <Box w="4rem" h="2rem" border="1px solid black">
                    <Image
                      p={0.5}
                      w="100%"
                      h="100%"
                      src="https://uidesign.gbtcdn.com/GB/image/6874/150x73.jpg"
                      alt="Mi"
                    />
                  </Box>

                  <Box w="4rem" h="2rem" border="1px solid black">
                    <Image
                      p={0.5}
                      w="100%"
                      h="100%"
                      src="https://uidesign.gbtcdn.com/GB/images/banner/others/gocomme.png"
                      alt="go comma"
                    />
                  </Box>

                  <Box w="4rem" h="2rem" border="1px solid black">
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

    <Box fontSize='xs'  h="auto" mt={2} >
            <Flex alignItems="center">
              <Box border='1px solid black' w='8%'>
                <Text>Price : </Text>
              </Box>
              <Box p={1} border="2px solid black">
                <SimpleGrid
                  columns={[2, 5, 6]}
                  gap={2}
                  alignItems="center"
                  justifyContent="space-evenly"
                  flexWrap="wrap"
                >
                  <Box  h="2rem" w='max-contnet' border="1px solid black">
                    <Text>$5.01 - $10.00</Text>
                  </Box>
                  <Box  h="2rem" border="1px solid black">
                  <Text>$10.01 - $20.00</Text>
                  </Box>
                  <Box  h="2rem" border="1px solid black">
                  <Text>$20.01 - $50.00</Text>
                  </Box>

                  <Box
                    
                    h="2rem"
                    border="1px solid black"
                  >
                    <Text>$50.01 - $100.00</Text>
                  </Box>

                  <Box  h="2rem" border="1px solid black">
                  <Text>$100.01 - $200.00</Text>
                  </Box>
                  <Box  h="2rem" border="1px solid black">
                  <Text>$200.01 - $500.00</Text>
                  </Box>

                  <Box  h="2rem" border="1px solid black">
                  <Text>$500.01 - over</Text>
                  </Box>

                  <Box  h="2rem" border="1px solid black">
                  <Text>$5.01-$10.00</Text>
                  </Box>
                </SimpleGrid>
              </Box>
            </Flex>
          </Box>
    




        {/* section 5 Sort by categories */}
        <Box fontSize='xs'  h="auto" mt={2} >
            <Flex alignItems="center">
              <Box border='1px solid black' w='8%'>
                <Text>Price : </Text>
              </Box>
              <Box p={1} border="2px solid black">
                <SimpleGrid
                columns={[3,6,7]}
                  gap={1}
                  alignItems="center"
                  justifyContent="space-evenly"
                  flexWrap="wrap"
                >
                  <Box  h="2rem" border="1px solid black">
                    <Text>Recommended</Text>
                  </Box>
                  <Box  h="2rem" border="1px solid black">
                  <Text>Hottest</Text>
                  </Box>
                  <Box  h="2rem" border="1px solid black">
                  <Text>Newest</Text>
                  </Box>
                  <Box  h="2rem" border="1px solid black">
                  <Text>Rating</Text>
                  </Box>
                  <Box  h="2rem" border="1px solid black">
                  <Text>Trending</Text>
                  </Box>
                  <Box  h="2rem" border="1px solid black">
                  <Text>Price Low</Text>
                  </Box>
                  <Box  h="2rem" border="1px solid black">
                  <Text>Price High</Text>
                  </Box>
                 
                </SimpleGrid>
              </Box>
            </Flex>
          </Box>
        
        </Box>
      </Flex>
    </Box>
  );
};

export default Productspage;
