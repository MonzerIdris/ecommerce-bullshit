import React, { useState } from 'react'
import Header from '../header/Header'
import './Login.css'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => e.preventDefault() 

    const validateForm = () => email.length > 0 && password.length > 0
    return (            
        <div className="login">
            <h2>Log in</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Email</label>
                <input type="email" value={email} autoFocus onChange={(e) => setEmail(e.target.value)} /></div>
                <div>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
                <input type="submit" value="Log in" id="submit" disabled={validateForm()}></input>
                {/* <button value="login" type="submit" disabled={!validateForm()} /> */}
            </form>
        </div>
    )
}
