import React, { useState } from 'react'
import './LoginSignup.css'
import email from '../Assets/email.png'
import password from '../Assets/password.png'
import person from '../Assets/person.png'

    const LoginSignup=()=>{
        const [action,setAction]=useState("Sign Up");
    
    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className={action==="Login"?"hide":"input"}>
                    <img src={person} alt="" />
                    <input type="text" placeholder='Name' />
                </div>
                <div className="input">
                    <img src={email} alt="" />
                    <input type="email" placeholder='Email id' />
                </div>
                <div className="input">
                    <img src={password} alt="" />
                    <input type="password"  placeholder='Password'/>
                </div>
            </div>
            <div className={action==="Sign Up"?"hide":"forgot-password"}>Forgot Password? <span>Click here</span></div>
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    )
}

export default LoginSignup
