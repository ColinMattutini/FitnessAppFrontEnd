import React, { useState } from 'react';
import LoginButton from '../UI/LoginButton';
import Modal from '../UI/Modal';

const SignUpForm = (props) => {

    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [reenterPasswordInput, setReenterPasswordInput] = useState('');

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

    const submitSignUpHandler = (event) => {
        event.preventDefault();
        if(validPassword){
            console.log(emailInput, passwordInput);
            props.hideSignUpForm();
        } else{
            alert('Passwords Do Not Match!');
        };
    };

    return(
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

    );

}

export default SignUpForm;