import React from 'react';
import classes from './Header.module.css';
import LoginButton from '../UI/LoginButton';

const Header = (props) => {

    return(
        <div>
        <header className={classes.header}>
                <p>Hello</p>
                <LoginButton onClick={props.showLoginForm} />
        </header>
        </div>

    );

};

export default Header;