import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';
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