import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useHistory } from 'react-router-dom';
import About from './components/general/About';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import BrowsePhotos from './components/photo/BrowsePhotos';
import BrowseProfiles from './components/auth/BrowseProfiles';
import ViewProfile from './components/auth/ViewProfile';
import ProfileForm from './components/auth/ProfileForm';
import PrivateRoute from './components/auth/PrivateRoute';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function App() {
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
    <div className="Container">
        <div>
            <Router>
                <AuthProvider>      
                    <Switch>
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
                    
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/sign-in" component={SignIn}/>
                    <Route exact path="/sign-up" component={SignUp}/>
                    <PrivateRoute exact path="/profiles/:uid/edit" component={ProfileForm}/>
                    
                    <Route exact path="/profiles/:uid" component={ViewProfile}/>
                    
                    <Route exact path="/profiles" component={BrowseProfiles}/>
                    
                    <Route exact path="/photos" component={BrowsePhotos}/>
                    </Switch>
                </AuthProvider>
            </Router>
        </div>
    </div>);
}

export default App;