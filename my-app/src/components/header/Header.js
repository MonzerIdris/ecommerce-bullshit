import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './Header.css'
import Login from '../LoginForm/Login'
import Signup from '../SignupForm/Signup'
import Navbar from '../nav-bar/Navbar'

export default function header() {
    return (
        <header>
            <h1 className="header-name">header</h1>
            
        </header>
    )
}
