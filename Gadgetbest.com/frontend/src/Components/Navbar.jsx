import React from 'react'
import "./Navbar.css"
import {ChevronDownIcon ,Search2Icon} from '@chakra-ui/icons'
import { BiGroup} from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { Flex, Spacer,Box,Heading,ButtonGroup,Button,SimpleGrid } from '@chakra-ui/react'
import MenuButtons from './MenuButton';
import Searchbar from './Searchbar';
import Qrcode from './Qrcode';
import Sign from "../Navbar/Sign"
import {Link,useNavigate} from "react-router-dom"



const Navbar = () => {

    const navigate=useNavigate()

    const handleNavigate=()=>{
        navigate("/")
    }


  return (
    <>
    <Flex width={["90%","90%","90%","90%"]} position="fix" display={["none","none","none","flex"]} h="150px" margin={"auto"} alignItems={"right"}  direction={"column"}  gap='2' m="auto">
        <Flex className='topnav'  h={"2rem"} display={["none","none","none","flex"]} justifyContent={"space-around"} flexDirection="row" alignItems={"center"}  w='60%' bg="white" marginLeft={"40%"}>
            
     
             <Qrcode/>
            
            <div >
                Supper Center
                
            </div>
           
            <div>
                ship to <div className='flag'></div> USD
            </div>
            
            <div>
                Language<ChevronDownIcon/>
            </div>
            
            <div>
                Country Website<ChevronDownIcon/>
            </div>
             
        
        </Flex>
     <Spacer />

        <Flex h={"4rem"} display="flex" flexDirection={["column","column","row","row"]} width={["100%","100%","100%","100%"]} justifyContent={"space-between"} direction="row" >
            
            <div className='logobox' >
                 <img onClick={handleNavigate} src="https://iili.io/HoY8CYb.md.jpg" alt="HoY8CYb.md.jpg"/>
            </div>
            
            
            
            <Box className='featuresbox' display={["flex","flex","flex","flex"]} flexDirection={["column","column","row","row"]}>
                   <div className='navinputbox'>
                   <Searchbar/>
                   <button><Search2Icon  boxSize={"2em"}/></button>

                   </div>
                  
                  
                   <Sign/>
                 <Link to="/favirate" > <Button>
                        <CiHeart size={"2em"} color="black"/>
                        Favorites
                    </Button>
                    </Link>
                    <Link to="/cart" ><Button><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#607d8b" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="6" cy="19" r="2" />
  <circle cx="17" cy="19" r="2" />
  <path d="M17 17h-11v-14h-2" />
  <path d="M6 5l14 1l-1 7h-13" />
</svg>
                        cart
                    </Button>
                    </Link>
            </Box>
            
        </Flex>

    <Spacer />

        <Flex   className='categorynav' width={["100%","100%","100%"]} bg="#ffda00" justifyContent={"space-between"} alignItems="center">
         <MenuButtons display={["none",]}/>
       <h1>SUPER DEALS</h1>
       <h1>APP ONLY</h1>
       <h1>NEW ARRIVALS</h1>
        </Flex>

   
   
  </Flex>
  <Flex width={["90%","90%","90%","90%"]} position="fix" display={["flex","flex","flex","none"]} h={["auto","100px","100px","100px"]} margin={"auto"} alignItems={"right"}  direction={"column"}  gap='2' m="auto">
        <Flex className='topnav'  h={"2rem"} minWidth="80px" justifyContent={"space-around"} display={["none","flex","flex","none"]} flexDirection="row" alignItems={"center"}  w='100%' bg="white" >
            
     
             <Qrcode/>
            
            <Button fontSize={["sm","sm","md","md"]} >
                Supper Center
                
            </Button>
           
            <Button>
                ship to <div className='flag'></div> USD
            </Button>
            
            <Button>
                Language<ChevronDownIcon/>
            </Button>
            
            <Button>
                Country Website<ChevronDownIcon/>
            </Button>
             
        
        </Flex>
     <Spacer />
    

    <Spacer />

        <Flex   className='categorynav' width={["100%","100%","100%"]} bg="#ffda00" justifyContent={"space-between"} alignItems="center">
         <MenuButtons />
       <Heading fontSize={["md","md","lg","lg"]}>SUPER DEALS</Heading>
       <Heading fontSize={["md","md","lg","lg"]}>APP ONLY</Heading>
       <Heading fontSize={["md","md","lg","lg"]}>NEW ARRIVALS</Heading>
        </Flex>

   
   
  </Flex>
  </>
    
  )
}

export default Navbar