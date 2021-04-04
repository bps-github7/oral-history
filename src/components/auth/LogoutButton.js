import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';


const LogoutButton = () => {

   
    const [ error, setError ] = useState("");
    const { logout } = useAuth();
    const { history } = useHistory();
 
    async function handleLogout() {
        setError("");
        try {
            await logout();
            history.push("/sign-in");
        } catch {
            setError("Error while tring to logout")
        }

    }

    return (
        <button onClick={handleLogout}>
            Log Out
        </button>
    );
}

export default LogoutButton;
