import React from "react";

const LoginButton = props => {
    return(
       <div>
            <button onClick={props.onClick}>{props.value}</button>
       </div> 
    )

}

export default LoginButton;