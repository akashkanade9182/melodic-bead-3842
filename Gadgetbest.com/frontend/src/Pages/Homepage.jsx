import React from 'react'
import Slide from '../Components/Homepage/Slide'
import Navbar from '../Components/Navbar/Navbar'
import "./Homepage.css"
import { SimpleGrid,Box } from '@chakra-ui/react'

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Slide/>
       <div className="gridbox">
       <SimpleGrid minChildWidth='110px' spacing='30px' alignItems="center">
           
            <Box height='200PX'>
                `<img src="https://uidesign.gbtcdn.com/GB/image/7257/230_120_en.jpg" alt="" />`
            </Box>
            <Box height='200PX'>
            `<img src="https://uidesign.gbtcdn.com/GB/image/6874/230x120b_en.jpg" alt="" />`
            </Box>
            <Box  height='200PX'>
            `<img src="https://uidesign.gbtcdn.com/GB/image/6080/230x120.jpg?imbypass=true" alt="" />`
            </Box>
            <Box height='200PX'>
            `<img src="https://uidesign.gbtcdn.com/GB/image/8823/ortur_master3_230%C3%97120_en.jpg" alt="" />`
            </Box>
        </SimpleGrid>
       </div>
       <div className="collectionbox">
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
        <SimpleGrid columns={5}  minChildWidth='200px' spacing='40px' marginTop="5px">
  <Box  boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px" bg='tomato' height='200PX'>
        <img src="https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16673/goods_thumb_220-v1/b2b8c48ff67a.jpg" alt="" />
  </Box>
  
  <Box boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px" bg='tomato' height='200PX'>
  <img src="https://gloimg.gbtcdn.com/soa/gb/item/6862458881155723264/16534/goods_thumb_220-v3/1519af3adbf9.jpg" alt="" />  </Box>
 
  <Box  boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px" bg='tomato' height='200PX'>
  <img src="https://gloimg.gbtcdn.com/soa/gb/item/6507287161137004544/16384/goods_thumb_220-v1/c29e4f319b14.jpg" alt="" />  </Box>
  
  <Box  boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px" bg='tomato' height='200PX'>
  <img src="https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16512/goods_thumb_220-v1/8d220616eed4.jpg" alt="" />  </Box>
  
  <Box  boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px" bg='tomato' height='200PX'>
  <img src="https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16643/goods_thumb_220-v1/d7a90e41e9e6.jpg" alt="" />  </Box>
  
</SimpleGrid>
    </div>

</div>      
           
   
  )
}

export default Homepage