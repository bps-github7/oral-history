import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './auth.css';


const SignUp = () => {
    
    const [ email, setEmail ] = useState(null);
    const [ emailError, setEmailError ] = useState(null);

    const [ password, setPassword ] = useState(null);
    const [ passwordError, setPasswordError ] = useState(null);
    
    const [ confirmPassword, setConfirmPassword ] = useState(null);
    const [ confirmPasswordError, setConfirmPasswordError ] = useState(null);

    const [signUpError, setSignUpError ] = useState(null);
    const [loading, setLoading ] = useState(false);
    
    const { signUp, currentUser } = useAuth();
    const { history } = useHistory();

    
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            setSignUpError('');
            setLoading(true);
            await signUp(email, password);
            // what does this do again? causing a bug rn
            history.push(`/profiles/${currentUser.id}`);
        } catch {
            setSignUpError("Error while trying to create acccount!");
        }
        setLoading(false);
    }



    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        if (newEmail) {
            if (newEmail.includes("@") && newEmail.includes(".")) {
                setEmail(newEmail);
                setEmailError(null);
            } else {
                setEmailError("Incorrect email format- make sure you included @ and .");
                setEmail(null);
            }
        } else {
            setEmailError("Email is required");
            setEmail(null);
        }
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
        const confirm = event.target.value
        if (confirm) {
            if (confirm === password) {
                setConfirmPassword(confirm);
                setConfirmPasswordError(null);
            } else {
                setConfirmPasswordError("Confirm password does not match password provided")
                setConfirmPassword(null);
            }
        } else {
            setConfirmPasswordError("Confirm password is required")
            setConfirmPassword(null);
        }
    }


    return(
        <form style={{maxWidth: "400px"}} onSubmit={handleSubmit} className="App-sign-up">
            <h2>Sign up form:</h2>
            { currentUser && currentUser.uid }
            <p style={{border: "2px dotted green", margin: 20, padding: 10}}>After approval from the site admin, account holders will be able to post and comment on images</p>
            { signUpError && <div className="error">{signUpError}</div> }
            <div>Email:
                <input onChange={handleEmailChange} type="text"/>

                { emailError && <div className="error">{emailError}</div>}
            </div>

            <div>Password: 
                <input onChange={handlePasswordChange} type="password"/>

                { passwordError && <div className="error">{passwordError}</div>}
                {/* should also define errors for the other offenders- length, expected characters */}
            </div>


            <div>Password: 
                <input onChange={handleConfirmPasswordChange} type="password"/>

                { confirmPasswordError && <div className="error">{confirmPasswordError}</div>}
                {/* should also define errors for the other offenders- length, expected characters */}
            </div>

            {/* { password && 
                <label className="auth-field"> Password:
                    <input onChange={handleConfirmPasswordChange} type="password"/>
                    { !confirmPasswordError && <div className="error">{confirmPasswordError}</div>}
                    { password !== confirmPassword && <div className="error">Password and Confirm Password must match</div>  }
                </label>
            } */}
            
            {/* if there are no input errors, allow user to submit form, but only once, by binding disabled to loading state */}
            { email && password && confirmPassword ?
            <button disabled={loading} type="submit">Create Account</button> :
            <button disabled  type="submit">Create Account</button>}  

            <div>Already have an account? <Link to="/sign-in">Sign In!</Link></div>
        </form>
    )

}
export default SignUp;