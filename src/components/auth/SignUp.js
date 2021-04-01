import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext';
import './auth.css';


const SignUp = () => {
    
    const [ email, setEmail ] = useState(null);
    const [ emailError, setEmailError ] = useState(null);

    const [ password, setPassword ] = useState(null);
    const [ passwordError, setPasswordError ] = useState(null);
    
    const [ confirmPassword, setConfirmPassword ] = useState(null);
    const [ confirmPasswordError, setConfirmPasswordError ] = useState(null);

    const { signUp } = useAuth();

    
    const handleSubmit = event => {
        event.preventDefault();
        signUp(email, password);
    }



    const handleEmailChange = (event) => {
        if (event.target.value) {
            setEmail(event.target.value);
            setEmailError(null);
        } else {
            setEmailError("Email is required");
            setEmail(null);
        }
        console.log(email);
    }


    
    const handlePasswordChange = (event) => {
        if (event.target.value) {
            if (event.target.value.length < 8) {
                setPasswordError("password must be more than 8 characters long");
                setPassword(null);

            } else {
                setPassword(event.target.value);
                setPasswordError(null);
            }
        } else {
            setPasswordError("Password is required")
            setPassword(null);
        }
    }

    
    const handleConfirmPasswordChange = (event) => {
        if (event.target.value) {
            setConfirmPassword(event.target.value);
            // what if they dont match? set error here or elsewhere?
            setConfirmPasswordError(null);
        } else {
            setConfirmPasswordError("Confirm password is required")
            setConfirmPassword(null);
        }
    }


    return(
        <form style={{maxWidth: "400px"}} onSubmit={handleSubmit} className="App-sign-up">
            <h2>Sign up form:</h2>
            <p style={{border: "2px dotted green", margin: 20, padding: 10}}>After approval from the site admin, account holders will be able to post and comment on images</p>

            <div>Email:
                <input onChange={handleEmailChange} type="text"/>

                { !emailError && <div className="error">{emailError}</div>}
            </div>

            <div>Password: 
                <input onChange={handlePasswordChange} type="password"/>

                { !passwordError && <div className="error">{passwordError}</div>}
                {/* should also define errors for the other offenders- length, expected characters */}
            </div>


            <div>Password: 
                <input onChange={handleConfirmPasswordChange} type="password"/>

                { !passwordError && <div className="error">{passwordError}</div>}
                {/* should also define errors for the other offenders- length, expected characters */}
            </div>

            {/* { password && 
                <label className="auth-field"> Password:
                    <input onChange={handleConfirmPasswordChange} type="password"/>
                    { !confirmPasswordError && <div className="error">{confirmPasswordError}</div>}
                    { password !== confirmPassword && <div className="error">Password and Confirm Password must match</div>  }
                </label>
            } */}
            <button type="submit">Create Account</button>
            <div>Already have an account? Sign In!</div>
        </form>
    )

}
export default SignUp;