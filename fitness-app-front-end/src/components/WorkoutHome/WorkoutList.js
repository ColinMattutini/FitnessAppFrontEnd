import React, { Fragment } from "react";
import Card from "../UI/Card";
import { useState } from "react";
import ExerciseDisplay from "./Exercises/ExerciseDisplay";

const WorkoutList = (props) => {

    const [displayModal, setDisplayModal] = useState(false);

    const showExerciseModalHandler = (event) => {
        event.preventDefault();
        setDisplayModal(true);
    }

    const hideExerciseModal = (event) => {
        event.preventDefault();
        setDisplayModal(false);
    } 

    return(
        <Fragment>
        {displayModal && <ExerciseDisplay hideExerciseModalHandler={hideExerciseModal} workoutId={props.workoutId}/>}
        <Card onClick={showExerciseModalHandler}>
            <li>
            <div>
                <h3>
                    {props.workoutName}
                </h3>
                
            </div>
            
        </li>
        </Card>
        </Fragment>

        
    )

}

export default WorkoutList;