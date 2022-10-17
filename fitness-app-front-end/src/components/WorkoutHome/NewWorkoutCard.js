import React from "react";
import NewWorkoutForm from './NewWorkoutForm';

const NewWorkoutCard = (props) => {
    return(
        <div>
        
            <NewWorkoutForm hideNewWorkoutCardHandler={props.hideNewWorkoutCardHandler}/>
        
        </div>
    );
}

export default NewWorkoutCard;