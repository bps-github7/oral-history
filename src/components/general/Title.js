import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './general.css'

import About from '../general/About';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import BrowsePhotos from '../photo/BrowsePhotos';
import BrowseProfiles from '../auth/BrowseProfiles';

const Title = () => {
  return (
    <div className="title">
      <Router>
            <nav style={{padding: "5px"}}>
                <h1 className="title">Oral-History</h1>

                <h1> 
                    <Link to="/about">About</Link>
                </h1>

                <h1> 
                    <Link to="/sign-in">Sign In</Link>
                    {/* becomes sign-out when user is signed in */}
                </h1> 
                
                <h1>
                    <Link to="/sign-up">Sign Up</Link>
                    {/* sign-up becomes 'my profile' after sign in */}

                </h1>
                
                <h1> 
                    <Link to="/profiles">Profiles</Link>
                </h1>
                
                <h1> 
                    <Link to="/photos">All Photos</Link>
                </h1>
            </nav> 
            
            <Route exact path="/about" component={About}/>
            <Route exact path="/sign-in" component={SignIn}/>
            <Route exact path="/sign-up" component={SignUp}/>
            <Route exact path="/profiles" component={BrowseProfiles}/>
            <Route exact path="/photos" component={BrowsePhotos}/>

        </Router>

      
    </div>
  )
}

export default Title;