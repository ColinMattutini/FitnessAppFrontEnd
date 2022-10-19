import React from "react";
import Modal from "../../../UI/Modal";
import NewExerciseForm from "./NewExerciseForm";
import classes from './NewExerciseDisplay.module.css'

const NewExerciseDisplay = props => {

    return(
        <Modal>
            <button className={classes.button} onClick={props.hideNewExerciseFormHandler}>X</button>
            <NewExerciseForm 
                hideNewExerciseFormHandler={props.hideNewExerciseFormHandler}
                newExercisePostHandler={props.newExercisePostHandler}
                workoutId={props.workoutId}
            />
        </Modal>
    )

}

export default NewExerciseDisplay;