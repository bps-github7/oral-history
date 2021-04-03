import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../services/firebase';

const authContext = React.createContext();

export function useAuth () {
    return useContext(authContext)
}

export function AuthProvider({ children }) {
    const [ currentUser, setCurrentUser ] = useState(null); 
    const [ loading, setLoading ] = useState(true);

    function signUp(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logout() {
        return auth.logout();
    }


    useEffect(() => {
        const unsub = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsub;
    }, []);


    const value = {
        currentUser,
        login,
        signUp,
        logout
    }

    return (
        <authContext.Provider value={value}>
            { !loading && children }
        </authContext.Provider>
    );
}