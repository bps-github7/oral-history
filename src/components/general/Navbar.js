import {useAuth} from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom'

import React, { useState } from 'react';

const Navbar = () => {
    const { error, setError } = useState()
    const { currentUser, logout } = useAuth()
    const history = useHistory()
  
    async function handleSignout() {
      setError("")
  
      try {
        await logout()
        history.push("/login")
      } catch {
        setError("Failed to log out")
      }
    }
    return (
            <nav style={{padding: "5px"}}>
            <h1 className="title">Oral-History</h1>

            <h1> 
                <Link to="/about">About</Link>
            </h1>
            
            <h1> 
                <Link to="/profiles">Profiles</Link>
            </h1>
            
            <h1> 
                <Link to="/photos">All Photos</Link>
            </h1>                
            <h1>
                { currentUser ?
                <Link to={`/profiles/${currentUser.uid}`}>My Profile</Link>:
                <Link to="/sign-up">Sign Up</Link>   
                }
            </h1>
            
            <h1> 
                { currentUser ?
                <button onClick={handleSignout}>Sign Out</button>
                :<Link to="/sign-in">Sign In</Link>
                }
            </h1> 
        </nav> 
                    
    );
}

export default Navbar;
