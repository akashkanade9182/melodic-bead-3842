import { Container, Flex, Image } from '@chakra-ui/react';
import Logo from "../Assets/Logo.jpeg"
import React from 'react'
import Payment from '../Components/Payment';
import Checkout2 from '../Components/Checkout2';

const PaymentPage = () => {
  return (

    <>
        <Flex minW="100%" h="85px" p="0px 9.1%" boxShadow='xl' rounded='md' bg='white'>
            <Image mt="14px" h="50px" src={Logo} alt="logo" />
        </Flex>
      

        <Flex minW="100%" mt="50px">
        <Flex minW="83%"  m="auto" justifyContent={"space-around"}>

        <Flex minW="70%">
                <Payment />
        </Flex>
        
            <Flex minW="27%">
                <Checkout2 />
            </Flex>
        </Flex>
    </Flex>
    

    </>
  )
}

export default PaymentPage;
