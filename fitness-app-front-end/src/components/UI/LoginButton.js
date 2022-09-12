import React from "react";
import classes from './LoginButton.module.css';

const LoginButton = props => {
    return(
       <div className={classes.button}>
            <button onClick={props.onClick}>{props.value}</button>
       </div> 
    );

}

export default LoginButton;