import React from "react";

const LoginButton = props => {
    return(
       <div>
            <button onClick={props.onClick}>Login</button>
       </div> 
    )

}

export default LoginButton;