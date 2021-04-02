import React from 'react';
import { Link } from 'react-router-dom';
import './auth.css';
import { useAuth } from '../../contexts/AuthContext';



const ViewProfile = () => {

    const { currentUser  } = useAuth();
    const buttonStyle = {
        height: "70px",
        width: "950px",
        backgroundColor : "rgba(90,180,90,0.1)",
        textAlign: "center" 
    }


    return(
        <div>
            <h1 style={{color : "black",
                textAlign : "center"}}>
                { currentUser.email }'s profile
            </h1>

            <Link to={`/profiles/${currentUser.uid}/edit`}><button style={buttonStyle}>Edit Profile</button></Link>
        </div>
    )
}
export default ViewProfile;