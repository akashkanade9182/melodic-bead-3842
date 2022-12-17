import React from 'react'
import "./Popover.css"
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,ButtonGroup,Button,useDisclosure
  } from '@chakra-ui/react'

const PopoverBox = ({title,title1,title2,title3,title4,title5,title6,arr1,arr2,arr3,arr4,arr5,arr6}) => {
    const { isOpen, onToggle, onClose } = useDisclosure()
    
    
  return (
    <>
      <Button className='trigarbutton' h="30px" textAlign={"left"}  border={"none"} mr={5} onClick={onToggle} >
        {title}
      </Button>
      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={onClose}
        placement='right'
        closeOnBlur={false}
      >
       
        <PopoverContent className="popcontent"  w="60rem" h="500px" left="16rem" display={"flex"} justifyContent="space-between" flexDirection={"row"}>
            <div className='subcategorybox'>
                <div>
                    <h1>{title1}</h1>
                    {
                       arr1.map((ele)=><div onClick={onClose}>{ele}</div>)
                    }
                </div>
                <div>
                    <h1>{title2}</h1>
                    {
                       arr1.map((ele)=><div onClick={onClose}>{ele}</div>)
                    }
                </div>
                <div>
                    <h1>{title}</h1>
                    {
                       arr1.map((ele)=><div onClick={onClose}>{ele}</div>)
                    }
                </div>
                <div>
                    <h1>{title1}</h1>
                    {
                       arr1.map((ele)=><div onClick={onClose}>{ele}</div>)
                    }
                </div>
                <div>
                    <h1>{title1}</h1>
                    {
                       arr1.map((ele)=><div onClick={onClose}>{ele}</div>)
                    }
                </div>
                <div>
                    <h1>{title1}</h1>
                    {
                       arr1.map((ele)=><div onClick={onClose}>{ele}</div>)
                    }
                </div>
               
               

            </div>
            <div className='popcontent-image'>
              <img src="https://uidesign.gbtcdn.com/GB/image/9534/KOSPET+M1+230X420+EN.jpg" alt="" />
            </div>

        </PopoverContent>
      </Popover>
    </>
  )
}

export default PopoverBox