import React, { useState } from "react";
import "./Productcard.css"
import {Box,Flex,Image,Text,Button} from "@chakra-ui/react"

const ProductCard = ({ title,image_url, price,brand,_id}) => {
  const heartIcon1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6HeC2Y4ch1beUcQ68_zGrVfqlERPYJl4klmG3-XJQoEwQVVjV60rQDoxSRHQHpjNOHU&usqp=CAU";
  const heartIcon2 = "https://stceciliasinfants.org.uk/wp-content/uploads/2021/05/yellow-heart.png"
  // console.log(id)
  const [icon, setIcon] = useState(heartIcon1)

  const handleIcon=()=>{
    setIcon(icon => heartIcon2)
  }


  return (
    <Box lineHeight="20px" p={2}  textAlign="center" h={"auto"}  boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px">
    <Image
      src={image_url}
      alt={brand}
      cursor="pointer"
    />
    <Text fontSize={['xs','sm','sm','sm']} className="producttitle">
      {title}
    </Text>
    <Text mt="1rem" color="red" fontWeight="bold">
      Rs. {price}
    </Text>
    <Box fontSize="xl"  textAlign="right"  mt={3}>
     <Flex justifyContent='space-around' >
     <Button bg="#ffda00" color="black">More Detail</Button>
     <Box display="flex" alignItems={"center"}>
     <i class="bx bx-heart"></i>

     </Box>
     
     </Flex>
    </Box>
  </Box>
  );
};

export default ProductCard;