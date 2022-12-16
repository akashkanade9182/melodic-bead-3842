import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slide.css"
import { Image, Box, Text, Flex, UnorderedList, ListItem, List } from "@chakra-ui/react";

import { Link } from 'react-router-dom';
const Slide = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear"

    };
    return (
        <div style={{marginBottom:'20px',display:"flex",flexDirection:"row" ,width:"90%",margin:"auto",position:"relative"}}>
            <div className="sliderow">
                <img src="https://uidesign.gbtcdn.com/GB/image/7049/en-230x420.jpg" alt="" />
            </div>
            <Slider {...settings} style={{ width: "75%", margin: 'auto' ,position:"absolute",left:"25%"}}>

                <Box h={{base:'400px',sm:"250px",md:'250px',lg:'400px'}}>
                    <Image objectFit="cover" w="full" h="full" src="https://uidesign.gbtcdn.com/GB/image/8823/PPC+1190X420+EN.jpg" alt="Image 1" />
                </Box>

                <Box h={{base:'400px',sm:"250px",md:'250px',lg:'400px'}}>
                    <Image w="full" h="full" src="https://uidesign.gbtcdn.com/GB/image/8823/1190X420.jpg" alt="Image 2" />
                </Box>

                <Box h={{base:'400px',sm:"250px",md:'250px',lg:'400px'}}>
                    <Image w="full" h="full" src="https://uidesign.gbtcdn.com/GB/image/8823/tools_1190X420_en.jpg" alt="Image 2" />
                </Box>

                <Box h={{base:'400px',sm:"250px",md:'250px',lg:'400px'}}>
                    <Image w="full" h="full" src="https://uidesign.gbtcdn.com/GB/image/8823/en_1190x420.jpg?imbypass=true" alt="Image 2" />
                </Box>

                <Box h={{base:'400px',sm:"250px",md:'250px',lg:'400px'}}>
                    <Image w="full" h="full" src="https://uidesign.gbtcdn.com/GB/image/8823/security_1190%C3%97420_en.jpg" alt="Image 2" />
                </Box>

                <Box h={{base:'400px',sm:"250px",md:'250px',lg:'400px'}}>
                    <Image w="full" h="full" src="https://uidesign.gbtcdn.com/GB/image/5502/1190x420.jpg?imbypass=true" alt="Image 2" />
                </Box>
            </Slider>
        </div>
    );
}
export default Slide