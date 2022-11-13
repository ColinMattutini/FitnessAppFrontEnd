import React from "react";
import NewWorkoutForm from './NewWorkoutForm';

const NewWorkoutCard = (props) => {
    return(
        <div>
        
            <NewWorkoutForm 
                hideNewWorkoutCardHandler={props.hideNewWorkoutCardHandler}
                workoutstateUpdaterHandler={props.workoutstateUpdaterHandler}
            />
        
        </div>
    );
}

export default NewWorkoutCard;