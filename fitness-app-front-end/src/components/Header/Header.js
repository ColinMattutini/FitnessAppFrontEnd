import React, { useEffect } from 'react';
import classes from './Header.module.css';
import LoginButton from '../UI/LoginButton';
import { useContext } from 'react';
import AuthContext from '../../context/user-auth';

const Header = (props) => {

    const authCtx = useContext(AuthContext);

    return(
        <div>
        <header className={classes.header}>
                <p>Hello</p>
                <div className={classes.button}>
                {!authCtx.isLoggedIn && <LoginButton onClick={props.showLoginForm} value='Login'/>}
                {!authCtx.isLoggedIn && <LoginButton value='Sign-Up' onClick={props.showSignUpForm}/>}
                {authCtx.isLoggedIn && <LoginButton value='Logout' onClick={authCtx.logout}/>}
                </div>
        </header>
        </div>

    );

};

export default Header;