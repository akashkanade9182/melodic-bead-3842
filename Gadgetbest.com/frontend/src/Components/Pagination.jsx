import { Button } from '@chakra-ui/react'
import React from 'react'

const Pagination = ({page,setPage}) => {

    const handlePage=(value)=>
    {
        setPage(page+value)
    }
    
    
    
  return (
    <>
    <br />
    <Button size={['xs','sm','lg']} mr={2} disabled={page===1 } onClick={()=>handlePage(-1)}>Prev</Button>
    <Button size={['xs','sm','lg']}>{page}</Button>
    <Button size={['xs','sm','lg']} ml={2}  onClick={()=>handlePage(1)}>Next</Button>
    </>
  )
}

export default Pagination