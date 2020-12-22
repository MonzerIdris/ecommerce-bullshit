import React, { useState } from 'react'
import './Signup.css'

export default function Signup() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")

    const handleSubmit = (e) => e.preventDefault() 

    const validateForm = () => email.length > 0 && email.includes("@")

    const passwordLength = password.length > 0 && password.length <8
    const passwordMatch = cpassword >= 1 && cpassword == password

    return (
        <div className="signup">
            <h2>Sign Up</h2>
            <form method="POST" action="/signup" onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={email} autoFocus onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={(e) =>{ setPassword(e.target.value)
                    }}/>
                   {passwordLength && <span> your should be atleast 8 characters long</span>}
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" value={cpassword} onChange={ e => setCpassword(e.target.value)} />
                    {passwordMatch && <span>passwords don't match</span>}
                </div>
                <input type="submit" value="Create Account" id="submit"></input>
                {/* /<button value="login" type="submit" disabled={!validateForm()} /> */}
            </form>
        </div>
    )
}
