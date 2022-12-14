import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    height: 500px;
    width: 400px;
    padding: 30px;
    margin: auto;
    margin-top: 50px;
`;
const Box = styled.div`
//  border: 1px solid blue;
 height: 50px;
 width: 45%;
 display: flex;
 padding: 0px 10px 0px 20px;
 justify-content: space-between;
`;
const Input = styled.input`
    margin: 10px;
    height: 35px;
    width: 90%;
    font-size: 14px;
  `;
  const CaptchaInput = styled.input`
  height: 107%;
  width: 90%;
  font-size: 14px;
`;

//   background: ${props => props.primary ? "palevioletred" : "white"};
//   color: ${props => props.primary ? "white" : "palevioletred"};
const Button = styled.input.attrs({ type: 'submit' })`
  font-size: 1em;
  margin: 1em;
  width: 90%;
  background-color: #ffda00;
  height: 46px;
  border: 0;
  font-weight:600;
  &:hover {
     background-color: #e6c505;
     cursor: pointer;
  }`;


const Heading1 = styled.h1`
  font-size: 18px;
  text-decoration: none;
  &:hover{
    color: black;
  }
`;

const Heading2 = styled.h1`
  font-size: 18px;
  text-decoration: underline;
  text-decoration-color: #ffda00;
  text-decoration-thickness: 3px;
`;
const CaptchaImg = styled.img`
  // border: 1px solid red;
  height: 125%;
  margin-bottom: -12px;
  width: 130px;
`;
const CaptchCodeDiv = styled.div`
  // border: 2px solid blue;
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  & > div {
    // border: 1px solid teal;
    margin-left: -10px;
  }
`;



const Signup = () => {
    const [email, setEmail] = useState("");
    const [isError, setIsError] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [captcha, setCaptcha] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            email,
            password,
            confirm,
            captcha,
        }
        fetch("http://localhost:8080/signup", {
            method : "POST",
            body : JSON.stringify(payload),
            headers : {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
    const alert = "Confirmed Password should match with password";
    const checkValidation = (e)=>{
     const conPass = e.target.value;
     setConfirm(conPass);
      if(password !== conPass){
        setIsError(alert)
      }
      else setIsError("");
    }

    return(
        <div>
           <Container>
           <Box>
           <Link style={{textDecoration: "none", color: "#bababa"}} to='/login'><Heading1>SIGN IN</Heading1></Link> 
            <Heading2>REGISTER</Heading2>
           </Box>
            <form onSubmit={handleSubmit}>
                <Input type="email"
                    placeholder="Email" 
                    value={email} 
                    required 
                    // onChange={emailValidation}
                    onChange={(e) => setEmail(e.target.value)}
                 ></Input><br />
                   
                <Input type="password"
                    placeholder="Create Password" 
                    value={password} 
                    required 
                    onChange={(e) => setPassword(e.target.value)}
                ></Input><br />

                <Input type="password" 
                    placeholder="Re-type Password" 
                    value={confirm} 
                    required 
                    onChange={(e) => checkValidation(e)}
                ></Input><br />

               <CaptchCodeDiv>
                    <div style={{width: "72%"}}> 
                        <CaptchaInput type="text"
                            placeholder="Enter the code" 
                            required 
                            value={captcha}
                            onChange={(e) => setCaptcha(e.target.value)}
                      ></CaptchaInput> 
                    </div>
                    <div>
                      <CaptchaImg src="https://login.gearbest.com/captcha/default?0.210031129778516" alt="" />
                    </div>
               </CaptchCodeDiv>
                  <p style={{color: "red",fontWeight:"700", fontSize:"12px"}}>{isError}</p>
                  <div style={{display: "flex"}}>
              <input type="checkbox" /> <p style={{fontSize:"13.5px"}}>I agree to Gearbest Terms and Conditions and Privacy Policies.</p>
            </div>
            <p style={{fontSize:"13.5px",color: "red"}}>Tip: To maximize online security, please do not reuse passwords or choose easy to guess ones on Gearbest.</p>
                <Button type="submit" value='Register' />
            </form>
           
            </Container>
        <div><Link to='/'><button>BACK</button></Link></div>
    </div>
    )
}


export {Signup}



