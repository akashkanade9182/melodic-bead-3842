import { Box, Button, Container, Flex, FormControl, Input, Text } from "@chakra-ui/react";
import React,{useEffect, useState} from "react";

function Checkout2 () {

    
    const [dataArr, setDataArr] = useState([]);
    let sumArr = [];
    let sum=0;


    const getPost = async() => {

        try {
    
            let res = await fetch (`https://odd-dog-pea-coat.cyclic.app/products`);
            let data = await res.json();
    
            setDataArr(data)
            console.log(data)
            
        } 
        
        catch (error) {
          console.log("error",error);  
        }
    }

    useEffect(() => {
        getPost()
    },[])


    dataArr.length>0 && dataArr.filter((elem) => {
        if(elem.quantity>0){
            sumArr.push({price:elem.price, quantity:elem.quantity})
        }
    })
    if(sumArr.length>0){
        console.log(sumArr)
    }

    sumArr.length>0 && sumArr.map((elem) => {
        sum+=(elem.price*elem.quantity)
    })

    if(sum>0){
        console.log(sum)
    }
    
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
                <Text fontWeight={"18px"}>Rs. {sum>0? `${sum}`: 0}</Text>
            </Flex>
        </Container>
    )
}

export default Checkout2;