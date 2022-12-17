import { Button } from '@chakra-ui/react'
import React from 'react'

const Pagination = ({page,handlePage}) => {
    
    
    
  return (
    <>
    <Button disabled={page===1 } onClick={()=>handlePage(page-1)}>Prev</Button>
    <Button>{page}</Button>
    <Button  onClick={()=>handlePage(page+1)}>Next</Button>
    </>
  )
}

export default Pagination