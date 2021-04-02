import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../services/firebase';

const authContext = React.createContext();

export function useAuth () {
    return useContext(authContext)
}

const AuthProvider = ({ children }) => {
    const [ currentUser, setCurrentUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);


    const signUp = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const logout = () => {
        return auth.logout();
    }


    useEffect(() => {
        const unsub = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsub
    }, [])


    const value = {
        currentUser,
        signUp,
        login,
        logout
    }

    return (
        <authContext.Provider value={value}>
            { !loading && children }
        </authContext.Provider>
    );
}

export default AuthProvider