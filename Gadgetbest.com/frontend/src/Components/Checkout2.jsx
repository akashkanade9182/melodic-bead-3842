import { Box, Button, Container, Flex, FormControl, Input, Text } from "@chakra-ui/react";
import React from "react";

function Checkout2 () {
    
    return (
        <Container minW="100%"boxShadow='xl' pt="20px" rounded='md' bg='white' h="290px">
            <Flex mb="30px">
                       <FormControl isRequired mr="10px">
                       <Input placeholder='Enter coupon code'/>
                       </FormControl>
                       <Button color="white" bgColor="#74ACD2">Apply</Button>
            </Flex>

            <Flex mb="5px" justifyContent={"space-between"}>
                <Text>Subtotal:</Text>
                <Text>Price</Text>
            </Flex>

            <Flex mb="20px" justifyContent={"space-between"}>
                <Text>Shipping:</Text>
                <Text>Price</Text>
            </Flex>

            <Box mb="25px" h="2px" borderTop="1px solid grey"></Box>

            <Flex mb="20px" justifyContent={"space-between"}>
                <Text fontWeight={"500"}>Total:</Text>
                <Text fontWeight={"18px"}>Rs. 12999</Text>
            </Flex>
        </Container>
    )
}

export default Checkout2;