import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../services/firebase';

const authContext = React.createContext();

export function useAuth () {
    return useContext(authContext)
}

const AuthProvider = ({ children }) => {
    const [ currentUser, setCurrentUser ] = useState();

    const signUp = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }


    useEffect(() => {
        const unsub = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsub
    }, [])


    const value = {
        currentUser,
        signUp
    }

    return (
        <authContext.Provider value={value}>
            { children }
        </authContext.Provider>
    );
}

export default AuthProvider