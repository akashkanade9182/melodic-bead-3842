import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    height: 550px;
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
  height: 34px;
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


const Signup = () => {
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [number, setNumber] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            name,
            email,
            password,
            number,
            usertype: "customer",
        }
        console.log(payload);

        fetch("http://localhost:8000/signup", {
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
    
    // const alert = "Confirmed Password should match with password";
    // const checkValidation = (e)=>{
    //  const conPass = e.target.value;
    //  setConfirm(conPass);
    //   if(password !== conPass){
    //     setIsError(alert)
    //   }
    //   else setIsError("");
    // }

    return(
        <div>
           <Container>
           <Box>
           <Link style={{textDecoration: "none", color: "#bababa"}} to='/login'><Heading1>SIGN IN</Heading1></Link> 
            <Heading2>REGISTER</Heading2>
           </Box>
            <form onSubmit={handleSubmit}>
            <Input type="text"
                    placeholder="Name" 
                    value={name} 
                    required 
                    onChange={(e) => setName(e.target.value)}
                 ></Input><br />
                <Input type="email"
                    placeholder="Email" 
                    value={email} 
                    required 
                    // onChange={emailValidation}
                    onChange={(e) => setEmail(e.target.value)}
                 ></Input><br />
                   
                <Input type="number"
                    placeholder="Number" 
                    value={number} 
                    required 
                    onChange={(e) => setNumber(e.target.value)}
                ></Input><br />

                <Input type="password" 
                    placeholder="Password" 
                    value={password} 
                    required 
                    onChange={(e) => setPassword(e.target.value)}
                ></Input><br />
                  {/* <p style={{color: "red",fontWeight:"700", fontSize:"12px"}}>{isError}</p> */}
                  <div style={{display: "flex"}}>
              <input type="checkbox" style={{marginTop: "-17px"}} /> <p style={{fontSize:"12px"}}>I agree to Gearbest Terms and Conditions and Privacy Policies.</p>
            </div>
            <p style={{fontSize:"13px",color: "red"}}>Tip: To maximize online security, please do not reuse passwords or choose easy to guess ones on Gearbest.</p>
                <Button type="submit" value='Register' />
            </form>
           
            </Container>
        <div><Link to='/'><button>BACK</button></Link></div>
    </div>
    )
}


export default Signup;



