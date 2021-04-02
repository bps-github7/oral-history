import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import './general.css'

import About from '../general/About';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import BrowsePhotos from '../photo/BrowsePhotos';
import BrowseProfiles from '../auth/BrowseProfiles';
import ViewProfile from '../auth/ViewProfile';
import ProfileForm from '../auth/ProfileForm';
import PrivateRoute from '../auth/PrivateRoute';


import { useAuth } from '../../contexts/AuthContext';

const Title = () => {

    const [ error, setError ] = useState("");
    const { currentUser, logout } = useAuth();
    const { history } = useHistory();
    //or here ^

/*  
    Tried importing useHistory differently , from 'react-router' not 'react-router-dom';
    Mah-aelesh fee hada laqan you may want to switch back to the first way you had it.

    link https://codesandbox.io/s/usehistory-type-issue-zkyny?file=/src/index.tsx
    says we need to use useHistory from within the router tree, this explanation makes a bit of sense
    but need to brainstorm about how to properly implment it here.
    
    I suggest you inspect the auth context, its a big file (could be messy) and the stack
    trace is pointing there after the above line 22 (top of stack). I would count on your own
    code being buggy rather than the popular JS framework used by everyone and their moms
*/


    //bug here v
    async function handleLogout() {
        setError("");
        try {
            await logout();
            history.push("/login");
        } catch {
            setError("Error while tring to logout")
            window.alert(error);
        }

    }

    return (
    <div className="title">
      <Router>
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
                    <Link onClick={handleLogout}>Sign Out</Link>
                    :<Link to="/sign-in">Sign In</Link>
                    }
                </h1> 
            </nav> 
            
            <Route exact path="/about" component={About}/>
            <Route exact path="/sign-in" component={SignIn}/>
            <Route exact path="/sign-up" component={SignUp}/>
            <PrivateRoute exact path="/profiles/:uid/edit" component={ProfileForm}/>
            
            <PrivateRoute exact path="/profiles/:uid" component={ViewProfile}/>
            
            <Route exact path="/profiles" component={BrowseProfiles}/>
            
            <Route exact path="/photos" component={BrowsePhotos}/>

        </Router>

      
    </div>
  )
}

export default Title;