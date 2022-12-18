import React from "react";
import { Box, Button, Center, Container, Flex, FormControl, Heading, Image, Input, Select, Stack, Text } from '@chakra-ui/react'
import { AiOutlineCreditCard } from "react-icons/ai";
import paypal from "../Assets/paypal.svg"
import { Link, useNavigate } from "react-router-dom";

function Checkout1 () {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/paymentpage")
    }

    return (
        <Container minW={"100%"}>

            <Stack align={"center"}  pb="80px" boxShadow='xl' rounded='md' bg='white' mb="50px">
                <Box mt="40px" mb="15px"><Heading fontSize={"18px"}>Express Checkout</Heading></Box>
            <Flex flexDirection={"row"} w={["70%", "70%", "40%", "30%"]} justifyContent={"center"}  bg="#FFC439" h="35px">
            <Box h="25px"><Center><Image mt="-17px" width={"70px"}  src={paypal} /></Center></Box>
            <Box><Text pt="3px">Checkout</Text></Box>
            </Flex>
           <Flex w={["70%", "70%", "40%", "30%"]} flexDirection={"row"} h="35px" bgColor={"#2C2E2F"} mb="10px" justifyContent={"center"}>
           <Box mr="12px" pt="1px"> <AiOutlineCreditCard fontSize={"30px"} color="white" /></Box>
           <Box><Text mt="3px" color="white">Debit or Credit Card</Text></Box>
           </Flex>
            </Stack>


            <Flex flexDirection={"row"} justifyContent={"space-between"} mb="40px">
                <Box w="44%" borderTop={"1px solid grey"} h="2px"></Box>
                <Text mt="-18px" fontSize={"18px"} color="gray">OR</Text>
                <Box mr="12px" w="44%" borderTop={"1px solid grey"} h="2px"></Box>
            </Flex>



            <Stack boxShadow='xl' rounded='md' bg='white' p="30px" alignItems={"start"} mb="16px">
                <Box><Text fontWeight={"500"} fontSize={"18px"}>Contact Information</Text></Box>
                <Box><Text fontSize={"16px"}>Contact Information</Text></Box>
            </Stack>

            <Stack boxShadow='xl' rounded='md' bg='white' p="30px" alignItems={"start"} pb="40px" mb="40px">
                <Box><Text fontWeight={"500"} fontSize={"18px"}>Shipping Address</Text></Box>
                <Flex>
                    <Container minW="388px">
                       <FormControl isRequired>
                       <Input placeholder='First name' />
                       </FormControl>
                    </Container>

                    <Container minW="389px">
                       <FormControl isRequired>
                       <Input placeholder='Last name' />
                       </FormControl>
                    </Container>
                </Flex>

                <Container minW="full" pt="8px">
                <FormControl isRequired>
                       <Input placeholder='Address' />
                       </FormControl>
                </Container>

                <Container minW="full" pt="8px">
                <FormControl isRequired>
                       <Input placeholder='Apartment,suite, etc' />
                       </FormControl>
                </Container>

                <Container minW="full" pt="8px">
                <FormControl isRequired>
                       <Input placeholder='Suburb' />
                       </FormControl>
                </Container>

                <Flex pl="16px" w="full" pt="8px">
                <Select placeholder='Select Country' mr="20px" maxW="235px">
                   <option value='india'>India</option>
                   <option value='india'>Nepal</option>
                   </Select>

                   <Select placeholder='Select States'  maxW="235px">
                   <option value='rajasthan'>Rajasthan</option>
                   <option value='delhi'>Delhi</option>
                   <option value='hariyana'>Hariyana</option>
                   </Select>

                       <FormControl isRequired  minW="225px">
                       <Input type={"number"} placeholder='Postcode'  w="235px" />
                       </FormControl>
                </Flex>

                <Container minW="full" pt="8px">
                <FormControl isRequired>
                       <Input placeholder='Phone' />
                       </FormControl>
                </Container>
            </Stack>

            <Flex justifyContent={"left"} mb="40px">
            <Button bg="#1875B4" color="white" p={"30px 30px"} onClick={handleClick}>Continue to paymnet page</Button>
            <Box  color="#1875B4" ml="20px" mt="20px"><Link to={"/cart"}>Return to Cart</Link></Box>
            </Flex>

            <Box mb="40px" h="2px" borderTop="1px solid grey"></Box>

            <Flex mb="40px">
                <Box _hover={"textDecoration"} color={"#1875B4"} mr="25px"><Link to={"#"}>Terms of service</Link></Box>
                <Box color={"#1875B4"} mr="25px"><Link to={"#"}>Refund policy</Link></Box>
                <Box color={"#1875B4"}><Link to={"#"}>Privacy policy</Link></Box>
            </Flex>

        </Container>

        
    )

}

export default Checkout1