import { Box, Button, Container, Flex, FormControl, Grid, HStack, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineCreditCard } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

function Payment () {

    const navigate = useNavigate()

    const handleClick = () => {

        alert("Order Placed Successfully")
        navigate("/")
    }

    return (
        <Container minW="100%">

            <Container minW="100%" boxShadow='md' pt="20px" rounded='md' bg='white'>
                <Flex p="12px" mb="8px" justifyContent={"space-between"}>
                   <HStack>
                   <Box mr="40px"><Text>Contact</Text></Box>
                    <Box>Email</Box>
                   </HStack>

                   <HStack>
                   <Box><Link>change</Link></Box>
                   </HStack>
                </Flex>

                <Box h="2px" borderTop="1px solid grey"></Box>

                <Flex p="12px" mb="8px" justifyContent={"space-between"}>
                   <HStack>
                   <Box mr="40px"><Text>Ship to</Text></Box>
                    <Box>Address</Box>
                   </HStack>

                   <HStack>
                   <Box><Link>change</Link></Box>
                   </HStack>
                </Flex>

                <Box h="2px" borderTop="1px solid grey"></Box>

                <Flex p="12px" mb="8px" justifyContent={"space-between"}>
                   <HStack>
                   <Box mr="40px"><Text>Method</Text></Box>
                    <Box>Shipping Carrier</Box>
                   </HStack>
                </Flex>
            </Container>

            <Flex  w={["70%", "70%", "40%", "40%"]} mt="30px" flexDirection={"row"} h="35px" bgColor={"#2C2E2F"} mb="20px" justifyContent={"center"}>
           <Box mr="12px" pt="1px"> <AiOutlineCreditCard fontSize={"30px"} color="white" /></Box>
           <Box><Text mt="3px" color="white">Debit or Credit Card</Text></Box>
           </Flex>

           <Stack flexDirection={"column"} alignItems={"start"} boxShadow='md' pt="20px" pb="25px" pl="30px" rounded='md' bg='white'>
           <Flex>
           <FormControl isRequired>
            <Input w="sm" placeholder='Card Number' />
            </FormControl>
           </Flex>
         
           <Flex mb="20px" flexDirection={"row"}>
           <FormControl  pr="26px"  isRequired>
            <Input w={"200px"} placeholder='Expires in MM/YY' />
            </FormControl>

            <FormControl isRequired>
            <Input w={"200px"} placeholder='CVV' />
            </FormControl>
           </Flex>

           <Flex pb="25px">
            <FormControl isRequired>
            <Input w="sm" placeholder='Name of Card Holder' />
            </FormControl>
           </Flex>

           <Flex ml="18px" mt="20px" w="full">
            <Button color="white" bgColor={'#1875B4'} borderRadius={"50px"} p="30px 20%" onClick={handleClick}>Pay Now</Button>
           </Flex>
           </Stack>
         
        </Container>
    )
}

export default Payment;