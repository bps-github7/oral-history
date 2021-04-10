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
                <ul style={{ display : "inline", listStyle: "none"}}>
                    <li>
                        <h1 className="title">Oral-History</h1>
                    </li>

                    <li>
                        <h1> 
                            <Link to="/about">About</Link>
                        </h1>    
                    </li>
                    
                    <li>
                        <h1> 
                            <Link to="/photos">All Photos</Link>
                        </h1>
                    </li>
                    
                    <li>                   
                        <h1>
                            { currentUser ?
                            <Link to={`/profiles/${currentUser.uid}`}>My Profile</Link>:
                            <Link to="/sign-up">Sign Up</Link>   
                            }
                        </h1>
                    </li>
                    
                    <li>
                        <h1> 
                            { currentUser ?
                            <button onClick={handleSignout}>Sign Out</button>:
                            <Link to="/sign-in">Sign In</Link>}
                        </h1> 
                    </li>
                </ul>            
        </nav> 
                    
    );
}

export default Navbar;
