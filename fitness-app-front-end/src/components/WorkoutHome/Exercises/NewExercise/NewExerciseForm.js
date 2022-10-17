import React, { Fragment, useState } from "react";
import classes from './NewExerciseForm.module.css'

const NewExerciseForm = (props) => {

    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState(0);

    const setsIncreaser = (event) => {
        event.preventDefault();
        setSets(sets + 1);
    }

    const setsDecreaser = (event) => {
        event.preventDefault();
        setSets(sets - 1);
    }

    const repsIncreaser = (event) => {
        event.preventDefault();
        setReps(reps + 1);
    }

    const repsDecreaser = (event) => {
        event.preventDefault();
        setReps(reps - 1);
    }

    const formSubmitter = (event) => {
        event.preventDefault();
        console.log(props.workoutId, sets, reps);
        props.hideNewExerciseFormHandler();
    }

    return(     
            <form onSubmit={formSubmitter}>
            <div className={classes.display}>
                    <div>
                        <h1>Exercise Name</h1>
                        <input placeholder="Exercise Name"></input>
                    </div>
                    <div  className={classes.entries}>
                        <div className={classes.button_left}>
                            <button onClick={setsDecreaser}>-</button>
                        </div>
                        <div className={classes.holder}>
                            <h2>Sets</h2>
                            <h1>{sets}</h1>
                            
                        </div>
                        <div className={classes.button_right}>
                            <button onClick={setsIncreaser}>+</button>
                        </div>
                    </div>  
                    <div  className={classes.entries}>
                        <div className={classes.button_left}>
                            <button onClick={repsDecreaser}>-</button>
                        </div>
                        <div className={classes.holder}>
                            <h2>Reps</h2>
                            <h1>{reps}</h1>
                        </div>
                        <div className={classes.button_right}>
                            <button onClick={repsIncreaser}>+</button>
                        </div>
                    </div> 
                    <p></p> 
                    <button>Save Workout</button>
                         
            </div>
            </form>      
    )

}

export default NewExerciseForm;