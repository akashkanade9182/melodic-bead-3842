import React from "react";
import { Link ,useNavigate} from "react-router-dom";
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
 margin: auto;
 margin-bottom: 30px;
`;
const Input = styled.input`
    margin: 10px;
    height: 42px;
    width: 97%;
    font-size: 20px;
    border: 1px solid blue;
    padding-left: 15px;
  `;
const Button = styled.input.attrs({ type: 'submit' })`
  font-size: 1em;
  width: 97%;
  background-color: blue;
  height: 46px;
  border: 0;
  color: white;
  font-weight: 800;
  margin-left: 10px;
  margin-top: 30px;
  font-family: OpenSans,Arial,Helvetica,sans-serif;
  &:hover {
     background-color: white;
     cursor: pointer;
     color: blue;
     border:1px solid blue;
  }`;

const Heading2 = styled.h1`
  font-size: 35px;
  text-decoration-color: #ffda00;
  font-weight: 700;
  color: blue;
  font-family: OpenSans,Arial,Helvetica,sans-serif;
`;
;

const AdminLogin = () => {
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
            localStorage.setItem("psctoken",res.token)
            alert("Login Successfull")
            navigate("/adminproducts")
        })
        .catch((err) => console.log(err))
    }
    
    return(       
        <div>
          <Container>
            <Box>
                <Heading2>Admin Login Page</Heading2>
            </Box>
                <form onSubmit={handleSubmit}>
                    <Input type="text" placeholder="Admin Email" value={email} required onChange={(e) => setEmail(e.target.value)}></Input><br />
                    <Input type='password' placeholder="Admin Password" value={password} required onChange={(e) => setPassword(e.target.value)}></Input><br />
                   
                    <Button type="submit"value="Sign In" />
                </form>
            </Container>
            <div><Link to='/'><button>BACK</button></Link></div>
        </div>
    )
}


export default AdminLogin;