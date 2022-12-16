import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import {message} from "antd";

const Container = styled.div`
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    height: 400px;
    width: 400px;
    padding: 30px;
    margin: auto;
    margin-top: 50px;
`;
const Box = styled.div`
//  border: 1px solid blue;
 height: 50px;
 width: 60%;
 display: flex;
 padding: 0px 10px 0px 20px;
 justify-content: space-between;
`;
const Input = styled.input`
    margin: 10px;
    height: 35px;
    width: 90%;
    font-size: 14px;
    border: 1px solid #bababa;
    padding-left: 15px;
  `;
const Button = styled.input.attrs({ type: 'submit' })`
  font-size: 1em;
  margin: 1em;
  width: 90%;
  background-color: #ffda00;
  height: 46px;
  border: 0;
  font-weight: 800;
  font-family: OpenSans,Arial,Helvetica,sans-serif;
  &:hover {
     background-color: #e6c505;
     cursor: pointer;
  }`;


const Heading1 = styled.h1`
  font-size: 18px;
  text-decoration: none;
  font-weight: 700;
  font-family: OpenSans,Arial,Helvetica,sans-serif;
  &:hover{
    color: black;
  }
`;

const Heading2 = styled.h1`
  font-size: 18px;
  text-decoration: underline;
  text-decoration-color: #ffda00;
  text-decoration-thickness: 3px;
  font-weight: 700;
  font-family: OpenSans,Arial,Helvetica,sans-serif;
`;
const ForgotDiv = styled.div`
    // border: 1px solid red;
    justify-content: space-between;
    display: flex;
    margin-left: 10px;
    & > div{
        // border: 1px solid blue;
        width: 48%;
        font-size: 13px;
    }
 `;
const Forgot = styled.div`
text-decoration: underline;
cursor: pointer;
`;

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            email,
            password
        }
       
        fetch("http://localhost:8000/login", {
            method : "POST",
            body : JSON.stringify(payload),
            headers : {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            localStorage.setItem("psctoken",res.token)
            // message.success("Login Successfull");
            alert("Login Successfull");
            window.location.href("/");
        })
        .catch((err) => console.log(err))
    
    }
    
    return(       
        <div>
          <Container>
            <Box>
                <Heading2>SIGN IN</Heading2>
                <Link style={{textDecoration: "none", color: "#bababa"}} to='/signup'><Heading1>REGISTER</Heading1></Link> 
            </Box>
                <form onSubmit={handleSubmit}>
                    <Input type="text" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)}></Input><br />
                    <Input type='password' placeholder="Password" value={password} required onChange={(e) => setPassword(e.target.value)}></Input><br />
                    <ForgotDiv>
                        <input type="checkbox" /> <p>Keep me signed in</p> 
                        <div><Forgot>Forgot your password</Forgot></div>
                    </ForgotDiv>
                    <Button type="submit"value="Sign In" />
                </form>
            </Container>
            <div><Link to='/'><button>BACK</button></Link></div>
        </div>
    )
}


export default Login;