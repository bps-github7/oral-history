import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../services/firebase';

const authContext = React.createContext();

export function useAuth () {
    return useContext(authContext)
}

export function AuthProvider({ children }) {
    const [ currentUser, setCurrentUser ] = useState() 
    const [ loading, setLoading ] = useState(true)

    function signUp(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        
        return unsubscribe
    }, [])


    const value = {
        currentUser,
        login,
        signUp,
        logout
    }

    return (
        <authContext.Provider value={value}>
            {!loading && children}
        </authContext.Provider>
    )
}