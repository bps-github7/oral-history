import {useAuth} from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom'

import React, { useState } from 'react';

const Navbar = () => {
    // const { error, setError } = useState()
    const { currentUser, logout } = useAuth()
    const history = useHistory()
  
    async function handleSignout() {
      // setError("")
  
      try {
        await logout()
        history.push("/login")
      } catch {
        console.log("Error while logging out. You should tell the user!")
      }
    }
    return (
      <nav>
          <div>
              <h1 className="title">Oral-History</h1>
          </div>
          <div><Link to="/about">About</Link></div>
          <div><Link to="/photos">All Photos</Link></div>
          <div>                   
            { currentUser ?
              <Link to={`/profiles/${currentUser.uid}`}>My Profile</Link>:
              <Link to="/sign-up">Sign Up</Link>   
            }
          </div>
          <div>
            {
              currentUser ?
              <button onClick={handleSignout}>Sign Out</button>:
              <Link to="/sign-in">Sign In</Link>
            }
          </div>

        {/* <ul>
          <li>
              <h1 className="title">Oral-History</h1>
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/photos">All Photos</Link></li>
          <li>                   
            { currentUser ?
              <Link to={`/profiles/${currentUser.uid}`}>My Profile</Link>:
              <Link to="/sign-up">Sign Up</Link>   
            }
          </li>
          <li>
            {
              currentUser ?
              <button onClick={handleSignout}>Sign Out</button>:
              <Link to="/sign-in">Sign In</Link>
            }
          </li>
        </ul> 


        <ul>
          <li>your rectum</li>
          <li>is a long,</li>
          <li>elusive, pink snake</li>
        </ul>

        <ul>
          <li>from which</li>
          <li>I fling</li>
          <li>da birdee</li>
        </ul>

        <ul>
          <li>MY ASS</li>
          <li>is wet</li>
          <li>SOOO stinky and wet</li>
        </ul> */}
      </nav> 
                    
    );
}
export default Navbar;
