import React, { useContext, useState } from "react";
import AuthContext from "../../../../context/user-auth";
import classes from './NewExerciseForm.module.css'

const NewExerciseForm = (props) => {

    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState(0);
    const [exerciseName, setExerciseName] = useState('');

    const authCtx = useContext(AuthContext);

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

    const exerciseNameHandler = (event) => {
        setExerciseName(event.target.value);
    }

    const postNewExercise = async (workoutId, exerciseName, sets, reps) => {
        try{
        const response = await fetch(
            "https://fitness-go.herokuapp.com/api/user/"+authCtx.UUID+"/workout/"+props.workoutId+"/exercise",
            {
                method: "POST",
                body: JSON.stringify({
                    workoutId:  workoutId,
                    exerciseName: exerciseName,
                    sets, sets,
                    reps, reps
                }),
                headers: {
                    'Content-Type': 'application/json',
                    //'Authorization': 'Bearer ' + localStorage.getItem("token")
                },
            }

        )
        props.newExercisePostHandler();
        if(!response.ok){
            throw new Error('Request Failed');
        }
        
        
    // authCtx.updatedStateHandler(40);
    // const generatedId = data.name;
        } 
    catch (err) {
        
    };
    
}
            
      
    const formSubmitter = (event) => {
        event.preventDefault();
        console.log(props.workoutId, exerciseName, sets, reps);
        postNewExercise(props.workoutId, exerciseName, sets, reps);
        props.hideNewExerciseFormHandler();
        
        
    }

    return(     
            <form onSubmit={formSubmitter}>
            <div className={classes.display}>
                    <div>
                        <h1>Exercise Name</h1>
                        <input placeholder="Exercise Name"
                            onChange={exerciseNameHandler}
                        ></input>
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