import React from "react";
import Modal from "../../UI/Modal";
import CalorieTrackerForm from "./CalorieTrackerForm";

const CalorieTrackerModal = (props) => {

        return(
            <Modal>
                <CalorieTrackerForm hideModalHandler={props.hideModalHandler}/>
                <button onClick={props.hideModalHandler}>Close</button>
            </Modal>
        )

}

export default CalorieTrackerModal;