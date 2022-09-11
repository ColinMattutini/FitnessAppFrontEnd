import React from "react";
import LoginButton from "../../UI/LoginButton";
import Modal from "../../UI/Modal";

const MoreInfoModal = (props) => {
    return(
        <Modal>
            <h1>{props.food}</h1>
            <label>{props.calories}</label>
            <input defaultValue={props.calories} />
            <label>{props.date}</label>
            <input 
                type='date'
                defaultValue={props.date}
            />
            <LoginButton 
                value='Close' 
                onClick={props.hideModalHandler}    
            />
        </Modal>

    );
};

export default MoreInfoModal;