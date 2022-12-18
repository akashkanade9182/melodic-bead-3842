import React from 'react'
import {Link} from "react-router-dom"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    IconButton
  } from '@chakra-ui/react'
  import {HamburgerIcon,EditIcon,AddIcon,ExternalLinkIcon,RepeatIcon} from '@chakra-ui/icons'
import Categories from "./Categorylist"
import PopoverBox from './PopoverBox'

const MenuButtons = () => {
    console.log(Categories)
  return (
    <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
    content="CATEGORY"
    bg="black"
    width={[ "100px","100px","150px","250px"]}

  >CATEGORY</MenuButton>
  <MenuList bg={"white"} textAlign="left" p={"5px 5px"} w={["80px","80px","200px","250px"]} display="flex" flexDirection={"column"}>
    {
        Categories.map((ele)=><PopoverBox {...ele}/>)
    }
   
  </MenuList>
</Menu>
  )
}

export default MenuButtons