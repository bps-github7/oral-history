import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../contexts/AuthContext';


const LogoutButton = () => {

   
    const [ error, setError ] = useState("");
    const { logout } = useAuth();
    // const { history } = useHistory();
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
            // history.push("/login");
        } catch {
            setError("Error while tring to logout")
            window.alert(error);
        }

    }

    return (
        <div onClick={handleLogout}>
            Log Out
        </div>
    );
}

export default LogoutButton;
