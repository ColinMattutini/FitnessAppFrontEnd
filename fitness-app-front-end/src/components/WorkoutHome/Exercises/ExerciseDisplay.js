import React, { useState } from "react"; 
import ExerciseModal from "./ExerciseModal";

const ExerciseDisplay = (props) => {

    

    return (
        <div>
            <ExerciseModal hideExerciseModalHandler={props.hideExerciseModalHandler} workoutId={props.workoutId}
            />
        </div>
    )
}

export default ExerciseDisplay;