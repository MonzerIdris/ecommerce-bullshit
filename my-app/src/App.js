import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import './App.css';
import Header from './components/header/Header'
import Navbar from './components/nav-bar/Navbar'
import Login from './components/LoginForm/Login'
import Signup from './components/SignupForm/Signup'

function App() {
  return (
    <div className="App">
      <Header className="header" />
      <Navbar className="navbar" />
      
      {/* <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                     
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
                  home
              </Route>
            </Switch>
        </div>
      </Router> */}
    </div>
  );
}

export default App;
