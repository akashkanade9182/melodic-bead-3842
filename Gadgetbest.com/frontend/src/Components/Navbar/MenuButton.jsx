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
  />
  <MenuList bg={"white"} textAlign="left" p={"5px 5px"} po display="flex" flexDirection={"column"}>
    {
        Categories.map((ele)=><PopoverBox {...ele}/>)
    }
   
  </MenuList>
</Menu>
  )
}

export default MenuButtons