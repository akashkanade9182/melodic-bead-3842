import React,{useState,useEffect, useRef} from 'react'
import styled from "styled-components"
import axios from "axios"
import {Box} from "@chakra-ui/react"
import "./Searchbar.css"


const getdata=(query)=>{
   return axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=c0a2ff01&s=${query}`)
}

const Searchbar = ()=> {
    const[inputText,setInputText]=useState("");
    const[suggestions,setSuggestions]=useState([])

    const[active,setActive]=useState(0);
    const scrollRef=useRef();


    const handleInputTextChange=(e)=>{
        setInputText(e.target.value)
        getdata(e.target.value).then((r)=>{
            setSuggestions(r.data.Search)
            console.log(r.data.Search)
        }).catch((e)=>{
            console.log(e)
        })

    }









  return (
    <>
    <Input onChange={handleInputTextChange}/>
    <div  className="SuggestionBox" len={5} active={active} ref={scrollRef} bg="white" >
    {
       suggestions && suggestions.map((item,index)=>(
            <Boxs className="element" key={index}>

              <img className="poster" src={item.Poster} alt="" />
              <div>{item.Title}</div>

            </Boxs>

        ))
    }
 </div>
 </>
  )
}


const SuggestionBox=styled.div`
border:1px solid black;
background-color:white;
position:absolute;
top:6rem;
width:400px;
display:flex;
flex-direction:column;
max-height:400px;
overflow:auto;

& *{
 
    flex:1;
    text-align:left;
    padding:10px;
   
}
& :nth-child(${({active})=>active}){
    background-color:rgba(0,0,0,0.09);
    cursor:pointer;
}
&::-webkit-scrollbar {
    display: none;
  }

`

const SearchbarWrapper=styled.div`
border:1px solid red;
display:flex;
padding:5px 10px;
aling-items:center;
`
const Input=styled.input`
border:none;
outline:none;
font-size:20px;
flex:1
`

const Wrapper=styled.div`
max-width:400px;
margin:auto;
`

const Boxs=styled.div`
display:flex;
width:100%;
border-top:1px solid black;
justify-content:space-between;
flex-direction:row;

& :hover{
    background-color:grey;
}

`
export default Searchbar