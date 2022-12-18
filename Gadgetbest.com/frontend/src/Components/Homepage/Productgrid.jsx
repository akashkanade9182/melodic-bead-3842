import React ,{useState,useEffect}from 'react'
import axios from "axios"
import { SimpleGrid,Box } from '@chakra-ui/react'
import ProductCard from './Productcard'
import "./Productgrid.css"

const getdata=(limit)=>{
    return axios.get(`https://odd-dog-pea-coat.cyclic.app/products?page=1&limit=${limit}`)
}

const Productgrid = () => {
    const [data,setData]=useState([]);
    const [limit,setLimit]=useState(10);
    const [loading,setLoading]=useState(false);
    const handleClick=()=>{
            setLoading((prev)=>!prev)
            setTimeout(()=>{
                setLoading((prev)=>!prev)
                setLimit((prev)=>prev+10);
            },2000)
       
    }

    useEffect(()=>{

        getdata(limit).then((r)=>{
            console.log(r.data)
            setData(r.data);

        }).catch((e)=>{
            console.log(e)
        })

    },[limit])





  return (
    <Box w={["100%","100%","100%","100%","100%",]} className="pgrid" mt={"30px"}>
        <h1 className="collection-heading">Recommanded Products</h1>
  <SimpleGrid w="90%" columns={[2,3,4,5]} spacing={10} margin="auto">
{
 data && data.map((ele,index)=><ProductCard key={index} {...ele}/>)
}
  </SimpleGrid>
  {
    loading ? <img className="loadingimage" src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="...Loading" /> :<button className="loadbutton" onClick={handleClick}>View More</button>
  }
         
   </Box>
  
  )
}

export default Productgrid