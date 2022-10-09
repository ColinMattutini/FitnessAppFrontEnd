import React, { Fragment, useContext, useState } from 'react';
import classes from './SignUpForm.module.css';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/user-auth';
import LoginButton from '../UI/LoginButton';
import Modal from '../UI/Modal';
import SuccessSignUpModal from './SuccessSignUpModal';

const SignUpForm = (props) => {

    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();

    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [reenterPasswordInput, setReenterPasswordInput] = useState('');
    const [successSignUp, setSuccessSignUp] = useState(false);

    let validPassword = (passwordInput === reenterPasswordInput);
    let validPasswordLength = (passwordInput.length > 7);

    const emailInputHandler = (event) => {
        setEmailInput(event.target.value);
    };

    const passwordInputHandler = (event) => {
        setPasswordInput(event.target.value);
    };

    const reenterPasswordInputHandler = event => {
        setReenterPasswordInput(event.target.value);
    };

    const successSignUpHandler = () => {
        setSuccessSignUp(true);
        setTimeout(() => {
            setSuccessSignUp(false)
            navigate('/authpage');
         }, 3000)
    };

    const signUpFetch = (emailInput, passwordInput) => {
        fetch(
            //'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDp4Tq7CcT5TUe1a5pPDBjUlly9zE-K6dM',
            'http://localhost:8080/api/user/save',
            {
                method: 'POST',
                body: JSON.stringify({
                    username: emailInput,
                    email: emailInput,
                    password: passwordInput,
                    //returnSecureToken: true

                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            
            ).then(res => {
                if (res.ok){
                    return res.json();
                  }
                  else{
                    return res.json().then(data => {
                      let errorMessage = 'Authentication Failed';
                      if(data && data.error && data.error.message){
                       errorMessage = data.error.message;
                    } 
                    alert(errorMessage);
                    throw new Error(errorMessage);
                    });
                  }
                }).then(data => {
                  authCtx.login(data.idToken);
                  successSignUpHandler();
                  //navigate('/authpage');
                  
                 
                })
                  .catch(error => {
                      alert('Something went wrong');
                });

            };
        

    const submitSignUpHandler = (event) => {
        event.preventDefault();
        if(validPassword){
            if(validPasswordLength){
            console.log(emailInput, passwordInput);
            signUpFetch(emailInput, passwordInput);
            } else{alert('Password Must Be A Minimum of 8 Characters!')}
            // props.hideSignUpForm();
        } else{
            alert('Passwords Do Not Match!');
        };
    };

    const cancelHandler = (event) => {
        event.preventDefault();
        navigate('/');
    }

    return(
        <Fragment>
        
        {/* <Modal> */}
        
        <form onSubmit={submitSignUpHandler} className={classes.login}>
            <div className={classes.signupControl}>
            <h1>Sign-Up</h1>
            {/* <label htmlFor='email'>E-mail</label> */}
            <input  placeholder="Email"
                onChange={emailInputHandler}
            />
            {/* <label htmlFor='password'>Password</label> */}
            <input type='password' placeholder="Password"
                onChange={passwordInputHandler}
            />
            {/* <label htmlFor='passwordCheck'>Re-Enter Password</label> */}
            <input type='password' placeholder="Re-Enter Password"
                onChange={reenterPasswordInputHandler}
            />
            <LoginButton 
                value={"Sign-Up"}
                
            />
            <LoginButton 
                value={"Close"} 
                onClick={cancelHandler} />
            <p>Already a Member? Click Here to Login</p>
            </div>
        </form>
        {/* </Modal> */}
        {successSignUp && <SuccessSignUpModal />}
        </Fragment>

    );

}

export default SignUpForm;