import React from "react";


const ExerciseList = (props) => {
    return(
            <div>
                
                    <h1>{props.exerciseName}</h1>
                    <h1>{props.sets}</h1>
                    <h2>{props.reps}</h2>
                
            </div>
    )

}

export default ExerciseList;