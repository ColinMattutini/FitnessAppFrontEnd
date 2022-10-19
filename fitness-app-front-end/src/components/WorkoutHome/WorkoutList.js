import React, { Fragment } from "react";
import Card from "../UI/Card";
import { useState } from "react";
import ExerciseDisplay from "./Exercises/ExerciseDisplay";
import ConfirmDeleteModal from "./DeleteWorkout/ConfirmDeleteModal";
import classes from './WorkoutList.module.css';

const WorkoutList = (props) => {

    const [displayModal, setDisplayModal] = useState(false);
    const [displayDeletionModal, setDisplayDeletionModal] = useState(false);
    
    const deleteState = props.deleteState;
    

    const showExerciseModalHandler = (event) => {
        event.preventDefault();
        setDisplayModal(true);
    }

    const hideExerciseModal = (event) => {
        event.preventDefault();
        setDisplayModal(false);
    } 

    const showDisplayDeletionModal = () => {
        setDisplayDeletionModal(true);
    }

    const hideDisplayDeletionModal = () => {
        setDisplayDeletionModal(false);
    }

    return(
        <Fragment>
        {displayModal && <ExerciseDisplay hideExerciseModalHandler={hideExerciseModal} workoutId={props.workoutId}/>}
        {displayDeletionModal && <ConfirmDeleteModal hideDisplayDeletionModal={hideDisplayDeletionModal}/>}
        <div className={classes.inLineCards}>
        <div className={classes.button}>
            {deleteState && <button onClick={showDisplayDeletionModal} >X</button>}
        </div>
        <div className={classes.fullCard}>
        <Card onClick={showExerciseModalHandler}>
            <li>
            <div>
                <h3>
                    {props.workoutName}
                </h3>
                
            </div>
            
        </li>
        </Card>
        </div>
        </div>
        </Fragment>

        
    )

}

export default WorkoutList;