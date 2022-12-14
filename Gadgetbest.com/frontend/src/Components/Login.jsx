import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            email,
            password
        }
       
        fetch("http://localhost:8080/login", {
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
        })
        .catch((err) => console.log(err))
    }
    return(       
        <div>
            <h1>Login here</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="email" value={email} required onChange={(e) => setEmail(e.target.value)}></input>
                <input type='password' placeholder="password" value={password} required onChange={(e) => setPassword(e.target.value)}></input>
                <input type="submit"value="Login" />
            </form>
            <div><Link to='/'><button>BACK</button></Link></div>
        </div>
    )
}


export {Login}