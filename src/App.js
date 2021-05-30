import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/general/About';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import BrowsePhotos from './components/photo/BrowsePhotos';
import BrowseProfiles from './components/auth/BrowseProfiles';
import ViewProfile from './components/auth/ViewProfile';
import ProfileForm from './components/auth/ProfileForm';
import PrivateRoute from './components/auth/PrivateRoute';
import Navbar from './components/general/Navbar';
import { AuthProvider } from './contexts/AuthContext';

function App() {
    return (
      <div className="Container">
        <div>
          <Router>
            <AuthProvider>      
              <Navbar/>                    
              <Switch>              
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
    </div>
  );
}

export default App;