import React from 'react'
import {Link} from "react-router-dom"

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,Button,
    PopoverCloseButton,ButtonGroup,Box,Image,Heading,Text,Flex,
  useDisclosure
  } from '@chakra-ui/react'
  import { BiGroup} from "react-icons/bi";

  import {ChevronDownIcon ,Search2Icon} from '@chakra-ui/icons'

const Sign = () => {
    const { isOpen, onToggle, onClose } = useDisclosure()
  return (
    <>
    <Button mr={5} onClick={onToggle} >
    <BiGroup size={"2em"} color="grey"/>
                        Sign In
    </Button>
    <Popover
      returnFocusOnClose={false}
      isOpen={isOpen}
      onClose={onClose}
      placement='right'
      closeOnBlur={false}
    >
     
      <PopoverContent  w="264px" h="86px" left="51rem" top="103px" display="flex" alignItems={"center"}>
   
              <Flex w="100%" justifyContent={"space-around"}>
         <Link to="/admin"  ><Button bg="#1565c0" color="white" mt="20px">Admin</Button></Link>
           <Link to ="/login"  > <Button bg="#1565c0" color="white" mt="20px">User</Button></Link>

              </Flex>
       
      </PopoverContent>
    </Popover>
  </>
  )
}

export default Sign