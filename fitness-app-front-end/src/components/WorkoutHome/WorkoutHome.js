import WorkoutPlanDisplay from "./WorkoutPlanDisplay";
import classes from './WorkoutHome.module.css';
import ExerciseDisplay from "./Exercises/ExerciseDisplay";
import ExerciseModal from "./Exercises/ExerciseModal";
import { useState } from "react";


const WorkoutHome = () => {

    

    return (
        <div className={classes.fillheight}>
            <WorkoutPlanDisplay />
            {/* {displayModal && <ExerciseDisplay hideExerciseModalHandler={hideExerciseModal}/>} */}
        </div>
    )
}

export default WorkoutHome;