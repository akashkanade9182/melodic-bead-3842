import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import Checkout1 from "../Components/Checkout1";
import Checkout2 from "../Components/Checkout2";
import Logo from "../Assets/Logo.jpeg"

function CheckoutPage () {

    return (
        <>
        <Flex minW="100%" h="77px" p="0px 9.1%" boxShadow='xl' rounded='md' bg='white'>
            <Image mt="14px" h="50px" src={Logo} alt="logo" />
        </Flex>
    
        
        <Flex minW="100%" mt="40px" >
           <Flex minW="83%"  m="auto" justifyContent={"space-around"}>
           <Flex minW="70%" >
                <Checkout1 />
            </Flex>
            <Flex minW="27%">
                <Checkout2 />
            </Flex>
           </Flex>
        </Flex>
        </>
    )
}

export default CheckoutPage;