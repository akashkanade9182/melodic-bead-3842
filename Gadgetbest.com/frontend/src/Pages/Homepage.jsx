import React,{useState,useEffect} from 'react'
import Slide from '../Components/Homepage/Slide'
import Footer from "../Components/Footer/Footer"
import "./Homepage.css"
import { SimpleGrid,Box,Image } from '@chakra-ui/react'
import Productgrid from '../Components/Homepage/Productgrid'
import axios from 'axios'
import ProductCard from '../Components/Homepage/Productcard'


const getMobile=()=>{
    return axios.get(`https://odd-dog-pea-coat.cyclic.app/products?search=mobile&page=1&limit=8`)
}
const getLaptop=()=>{
    return axios.get(`https://odd-dog-pea-coat.cyclic.app/products?search=laptop&headpone&page=1&limit=8`)
}

const Homepage = () => {
    const[mobiles,setMobiles]=useState([]);
    const[laptop,setLaptop]=useState([]);

    useEffect(()=>{
     getMobile().then((r)=>{
        setMobiles(r.data)
     }).catch((e)=>{
        console.log(e)
     })

     getLaptop().then((r)=>{
        setLaptop(r.data)
     }).catch((e)=>{
        console.log(e)
     })




    },[])



  return (
    <div style={{marginTop:"50px"}}>
    
        <Slide/>
     
       <Box className="collectionbox"  display={"flex"} flexDirection="column"w={["90%","90%","90%","90%"]} m="auto" mt="20px">
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-briefcase" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#607d8b" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="7" width="18" height="13" rx="2" />
  <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
  <line x1="12" y1="12" x2="12" y2="12.01" />
  <path d="M3 13a20 20 0 0 0 18 0" />
</svg>
            <h1>COLLECTIONS</h1>
        </div>
        <SimpleGrid columns={[2,3,5,5]}  minChildWidth='200px' spacing='40px' marginTop="5px">
  <Box boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"  height='200PX'>
        <img src="https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16673/goods_thumb_220-v1/b2b8c48ff67a.jpg"  alt="" />
  </Box>
  
  <Box boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"  height='200PX'>
  <img src="https://gloimg.gbtcdn.com/soa/gb/item/6862458881155723264/16534/goods_thumb_220-v3/1519af3adbf9.jpg" alt="" />  </Box>
 
  <Box  boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"  height='200PX'>
  <img src="https://gloimg.gbtcdn.com/soa/gb/item/6507287161137004544/16384/goods_thumb_220-v1/c29e4f319b14.jpg" alt="" />  </Box>
  
  <Box  boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"  height='200PX'>
  <img src="https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16512/goods_thumb_220-v1/8d220616eed4.jpg" alt="" />  </Box>
  
  <Box  boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"  height='200PX'>
  <img src="https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16643/goods_thumb_220-v1/d7a90e41e9e6.jpg" alt="" />  </Box>
  
</SimpleGrid>
    </Box>
    <Box w={["90%","90%","90%","90%"]} h="auto" margin={"auto"}  mt="40px" display="flex" flexDirection={"column"} justifyContent="space-between" >
          <Box w={["90%,90%","90%","90%"]} textAlign="left" display={"flex"} alignItems="center">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-mobile-vibration" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#607d8b" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="10" height="16" rx="1" />
  <line x1="8" y1="5" x2="10" y2="5" />
  <line x1="9" y1="17" x2="9" y2="17.01" />
  <path d="M20 6l-2 3l2 3l-2 3l2 3" />
</svg>
           <h1 className='collection-name'>Phone and Accessories</h1> 
          </Box>
         <Box w={["100%","100%","100%","100%"]} display="flex" justifyContent="space-between" h="auto">
              <Box w={["0","0","0","25%"]}>
              <Image src='https://www.gearbest.com/u_file/2212/13/photo/105077334706199768-eba4.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_0,w_308' alt='Dan Abramov' />

              </Box>
              <SimpleGrid w={["100%","100%","100%","100%"]} ml={["0","0","0","40px"]} columns={[2,2,3,4]} spacing={30} margin="auto">
                {
                    mobiles && mobiles.map((ele,index)=><ProductCard key={ele._id} {...ele}/>)
                }
                
             </SimpleGrid>

         </Box>


    </Box>
    <Box w={["90%","90%","90%","90%"]} h="auto" margin={"auto"}  mt="40px" display="flex" flexDirection={"column"} justifyContent="space-between" >
          <Box w={["90%,90%","90%","90%"]} textAlign="left" display={"flex"} alignItems="center">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-headset" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#607d8b" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="13" rx="2" width="4" height="6" />
  <rect x="16" y="13" rx="2" width="4" height="6" />
  <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
  <path d="M18 19a6 3 0 0 1 -6 3" />
</svg>
           <h1 className='collection-name'>Laptops and Accessories</h1> 
          </Box>
         <Box w={["100%","100%","100%","100%"]} display="flex" justifyContent="space-between" h="auto">
              <Box w={["0","0","0","25%"]}>
              <Image src='https://www.gearbest.com/u_file/2212/13/photo/105254957748574607-7e64.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_0,w_308' alt='Dan Abramov' />

              </Box>
              <SimpleGrid w={["100%","100%","100%","100%"]} ml={["0","0","0","40px"]} columns={[2,2,3,4]} spacing={30} margin="auto">
                {
                    laptop && laptop.map((ele,index)=><ProductCard key={ele._id} {...ele}/>)
                }
                
             </SimpleGrid>

         </Box>


    </Box>
   
    <Productgrid/>
    <Footer/>

</div>      
           
   
  )
}

export default Homepage