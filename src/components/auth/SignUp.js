import React, { useState } from 'react'
import './auth.css';


const SignUp = () => {
    
    const [ email, setEmail ] = useState(null);
    const [ emailError, setEmailError ] = useState(null);

    const [ password, setPassword ] = useState(null);
    const [ passwordError, setPasswordError ] = useState(null);
    
    const [ confirmPassword, setConfirmPassword ] = useState(null);
    const [ confirmPasswordError, setConfirmPasswordError ] = useState(null);


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

    const handleSubmit = event => {
        event.preventDefault();
        console.log(event.target.value)
    }


    return(
        <form onSubmit={handleSubmit} className="App-sign-up">
            <label className="auth-field"> Email:
                <input onChange={handleEmailChange} type="text"/>

                { !emailError && <div className="error">{emailError}</div>}
            </label>

            <label className="auth-field"> Password:
                <input onChange={handlePasswordChange} type="password"/>

                { !passwordError && <div className="error">{passwordError}</div>}
                {/* should also define errors for the other offenders- length, expected characters */}
            </label>

            { password && 
                <label className="auth-field"> Password:
                    <input onChange={handleConfirmPasswordChange} type="password"/>
                    { !confirmPasswordError && <div className="error">{confirmPasswordError}</div>}
                    { password !== confirmPassword && <div className="error">Password and Confirm Password must match</div>  }
                </label>
            }
            <button type="submit">Create Account</button>
            <div>Already have an account? Sign In!</div>
        </form>
    )

}
export default SignUp;