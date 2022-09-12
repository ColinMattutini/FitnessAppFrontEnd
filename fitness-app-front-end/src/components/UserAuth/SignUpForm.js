import React from 'react';
import LoginButton from '../UI/LoginButton';
import Modal from '../UI/Modal';

const SignUpForm = (props) => {

    return(
        <Modal>
        <form>
            <h1>Sign-Up With Email and Password</h1>
            <label htmlFor='firstName'>First Name</label>
            <input />
            <label htmlFor='lastName'>Last Name</label>
            <input />
            <label htmlFor='email'>E-mail</label>
            <input />
            <label htmlFor='password'>Password</label>
            <input type='password' />
            <label htmlFor='passwordCheck'>Re-Enter Password</label>
            <input type='password' />
            <LoginButton 
                value={"close"} 
                onClick={props.hideSignUpForm} />
        </form>
        </Modal>

    );

}

export default SignUpForm;