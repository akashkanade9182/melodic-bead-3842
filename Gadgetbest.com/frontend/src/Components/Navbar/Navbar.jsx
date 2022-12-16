import React from 'react'
import "./Navbar.css"
import {ChevronDownIcon ,Search2Icon} from '@chakra-ui/icons'
import { BiGroup} from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { Flex, Spacer,Box,Heading,ButtonGroup,Button, } from '@chakra-ui/react'
import MenuButtons from './MenuButton';
import Searchbar from './Searchbar';



const Navbar = () => {
  return (
    <Flex width={"90%"} minWidth='max-content'margin={"auto"} alignItems={"right"}  direction={"column"}  gap='2'>
        <Flex h={"2rem"} display="flex" justifyContent={"flex-end"} w='100%' bg="white">
            
            <div>   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone-flip" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11 1H5a1 1 0 0 0-1 1v6a.5.5 0 0 1-1 0V2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a.5.5 0 0 1-1 0V2a1 1 0 0 0-1-1Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a.5.5 0 0 0-1 0v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2a.5.5 0 0 0-1 0v2ZM1.713 7.954a.5.5 0 1 0-.419-.908c-.347.16-.654.348-.882.57C.184 7.842 0 8.139 0 8.5c0 .546.408.94.823 1.201.44.278 1.043.51 1.745.696C3.978 10.773 5.898 11 8 11c.099 0 .197 0 .294-.002l-1.148 1.148a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708l1.145 1.144L8 10c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575C1.012 8.639 1 8.506 1 8.5c0-.003 0-.059.112-.17.115-.112.31-.242.6-.376Zm12.993-.908a.5.5 0 0 0-.419.908c.292.134.486.264.6.377.113.11.113.166.113.169 0 .003 0 .065-.13.187-.132.122-.352.26-.677.4-.645.28-1.596.523-2.763.687a.5.5 0 0 0 .14.99c1.212-.17 2.26-.43 3.02-.758.38-.164.713-.357.96-.587.246-.229.45-.537.45-.919 0-.362-.184-.66-.412-.883-.228-.223-.535-.411-.882-.571ZM7.5 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z"/>
                    </svg>save 3$ with app <ChevronDownIcon/>
             </div>
            
            <div class>
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

        <Flex h={"4rem"} display="flex" w='100%' justifyContent={"space-between"} direction="row" >
            <div className='logobox'>
                 <img src="https://iili.io/HoY8CYb.md.jpg" alt="HoY8CYb.md.jpg"/>
            </div>
            <div className='featuresbox'>
                   <div className='navinputbox'>
                   <Searchbar/>
                   <button><Search2Icon  boxSize={"2em"}/></button>

                   </div>
                  
                  
                    <div>
                   <BiGroup size={"2em"} color="grey"/>
                        Sign In
                    </div>
                    <div>
                        <CiHeart size={"2em"} color="black"/>
                        Favorites
                    </div>
                    <div><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffda00" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="6" cy="19" r="2" />
                            <circle cx="17" cy="19" r="2" />
                            <path d="M17 17h-11v-14h-2" />
                            <path d="M6 5l14 1l-1 7h-13" />
                        </svg>
                        cart
                    </div>
            </div>
            
        </Flex>

    <Spacer />

        <Flex className='categorynav' w='100%' bg="#ffda00" justifyContent={"space-between"} alignItems="center">
         <MenuButtons/>
       <h1>SUPER DEALS</h1>
       <h1>APP ONLY</h1>
       <h1>NEW ARRIVALS</h1>
        </Flex>

   
   
  </Flex>
    
  )
}

export default Navbar