import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './auth.css';


const SignIn = () => {
    const [email, setEmail] = useState(null);
    const [emailError, setEmailError] = useState(null);

    const [password, setPassword] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    const [signInError, setSignInError] = useState(null);
    const [loading, setLoading] = useState(null);

    const { login, currentUser } = useAuth();
    const { history } = useHistory();


    const handleEmailChange = (event) => {
        if (event.target.value) {
            setEmail(event.target.value);
            setEmailError(null);
        } else {
            setEmail(null);
            setEmailError("Email is required for sign-in")
        }
    }


    
    const handlePasswordChange = (event) => {
        if (event.target.value) {
            setPassword(event.target.value);
            setPasswordError(null);
        } else {
            setPassword(null);
            setPasswordError("Password is required for sign-in")
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            setSignInError('');
            setLoading(true);
            await login(email, password);
            if (currentUser.id)
                history.push(`/profiles/${currentUser.id}`)
        } catch {
            setSignInError("error while signing in")
        }
        setLoading(false);       
    }

    return(
        <form onSubmit={handleSubmit} className="App-sign-in">
            <h2>Login:</h2>

            <div>Email:
                <input onChange={handleEmailChange} />    
                { emailError && <div className="error">{emailError}</div>}
            </div>

            <div>Password:
                <input onChange={handlePasswordChange} />
                { passwordError && <div className="error">{passwordError}</div>}
            </div>

            { email && password ?
            <button disabled={loading} type="submit">Log in</button> :
            <button disabled type="submit">Log in</button>}

            <div> Need an account ? <Link to="/sign-up">Sign Up</Link></div>
        </form>
    )
}
export default SignIn;