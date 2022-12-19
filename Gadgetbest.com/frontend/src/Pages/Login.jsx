import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

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
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            email,
            password
        }
       
        fetch("https://odd-dog-pea-coat.cyclic.app/login", {
            method : "POST",
            body : JSON.stringify(payload),
            headers : {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            alert(res.Message);
            localStorage.setItem("psctoken",res.token)
            if(res.Message === "Logged-In Successfully"){
                navigate("/")
            }
        })
        .catch((err) => {
            console.log(err)
        })
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
                <p>or connect via</p>
          <a href="/auth/google"> <div style={{margin:"auto",marginTop: "10px",width: "30px"}}> <img style={{width: "50px"}} src="https://www.transparentpng.com/thumb/google-logo/shady-google-logo-pictures-png-free-BjH4wQ.png" alt="" /> </div></a>
            </Container>
        </div>
    )
}


export default Login;