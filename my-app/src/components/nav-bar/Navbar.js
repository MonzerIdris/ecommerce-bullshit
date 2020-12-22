import React, { useState } from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './Navbar.css'
import Login from '../LoginForm/Login'
import Signup from '../SignupForm/Signup'

export default function Navbar() {
    const [active0, setactive0] = useState("active")
    const [active1, setactive1] = useState("")
    const [active2, setactive2] = useState("")
    
    
    return (
        <div className="navbar">
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li id={0} className={active0} onClick={() => {
                                setactive0("active")
                                setactive1("")
                                setactive2("")}}>
                                <Link to="/">Home</Link>
                            </li>
                            <li id={1} className={active1}  onClick={() => {
                                setactive0("")
                                setactive1("active")
                                setactive2("")}}>
                                <Link to="/login">Login</Link>
                            </li>
                            <li id={2} className={active2} onClick={() => {
                                setactive0("")
                                setactive1("")
                                setactive2("active")}}>
                                <Link to="/signup">Sign Up</Link>
                            </li>
                        </ul>
                    </nav>
                    
                    <Switch>
                        
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/signup">
                            <Signup />
                        </Route>
                        <Route path="/">
                        
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
