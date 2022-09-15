import React, { Fragment, useContext, useState } from 'react';
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
            navigate('/homepage');
         }, 3000)
    };

    const signUpFetch = (emailInput, passwordInput) => {
        fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDp4Tq7CcT5TUe1a5pPDBjUlly9zE-K6dM',
            {
                method: 'POST',
                body: JSON.stringify({
                    email: emailInput,
                    password: passwordInput,
                    returnSecureToken: true

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
                  
                 
                })
                  .catch(error => {
                      alert('Something went wrong');
                });

            };
        

    const submitSignUpHandler = (event) => {
        event.preventDefault();
        if(validPassword){
            console.log(emailInput, passwordInput);
            signUpFetch(emailInput, passwordInput);
            // props.hideSignUpForm();
        } else{
            alert('Passwords Do Not Match!');
        };
    };

    return(
        <Fragment>
        <Modal>
        <form onSubmit={submitSignUpHandler}>
            <h1>Sign-Up With Email and Password</h1>
            <label htmlFor='email'>E-mail</label>
            <input 
                onChange={emailInputHandler}
            />
            <label htmlFor='password'>Password</label>
            <input type='password' 
                onChange={passwordInputHandler}
            />
            <label htmlFor='passwordCheck'>Re-Enter Password</label>
            <input type='password' 
                onChange={reenterPasswordInputHandler}
            />
            <LoginButton 
                value={"close"} 
                onClick={props.hideSignUpForm} />
            <LoginButton 
                value={"Sign-Up"}
                
            />
        </form>
        </Modal>
        {successSignUp && <SuccessSignUpModal />}
        </Fragment>

    );

}

export default SignUpForm;