import React from 'react';
import classes from './Header.module.css';
import LoginButton from '../UI/LoginButton';
import { useContext } from 'react';
import AuthContext from '../../context/user-auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);

    const loginPageNavigate = (event) => {
        event.preventDefault();
        navigate('/authpage');
    };

    const signupPageNavigate = (event) => {
        event.preventDefault();
        navigate('/signuppage')
    };

    const logoutPageNavigate = (event) => {
        event.preventDefault();
        authCtx.logout();
        navigate('/');
    };


    return(
        <div>
        <header className={classes.header}>
                <h1>Fitness App</h1>
                <div className={classes.button}>
                    <div className={classes.holder}>
                        {!authCtx.isLoggedIn && <LoginButton onClick={loginPageNavigate} value='Login'/>}
                        {!authCtx.isLoggedIn && <LoginButton onClick={signupPageNavigate} value='Sign-Up' />}
                        {authCtx.isLoggedIn && <LoginButton value='Logout' onClick={logoutPageNavigate}/>}
                    </div>
                </div>
        </header>
        </div>

    );

};

export default Header;