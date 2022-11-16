import React, { Fragment, useContext, useEffect } from "react";
import AuthContext from "../../../context/user-auth";
import Modal from "../../UI/Modal";
import { useState } from "react";
import ExerciseList from "./ExerciseList";
import classes from './ExerciseModal.module.css'
import NewExerciseDisplay from "./NewExercise/NewExerciseDisplay";

const ExerciseModal = props => {

    const authCtx = useContext(AuthContext);
    const [exercises, setExercises] = useState([]);
    const [exerciseLength, setExerciseLength] = useState(0);
    const [exerciseIndex, setExerciseIndex] = useState(0);
    const [showNewExerciseForm, setShowNewExerciseForm] = useState(false);
    const [newExercisePost, setNewExercisePost] = useState(0);

    const showNewExerciseFormHandler = () => {
        setShowNewExerciseForm(true)
    }

    const hideNewExerciseFormHandler = () => {
        setShowNewExerciseForm(false);
    }

    const newExercisePostHandler = () => {
        setNewExercisePost(newExercisePost + 1);
    }

    const exerciseListIncreaser = () => {
        if(exerciseIndex < exerciseLength - 1){
           setExerciseIndex(exerciseIndex + 1);
        }
    }

    const exerciseListDecreaser = () => {
        if(exerciseIndex > 0){
        setExerciseIndex(exerciseIndex - 1);
        }
    }

    const fetchExercises = async () => {
        
        const response = await fetch(
            "https://fitness-go.herokuapp.com/api/user/"+authCtx.UUID+"/workout/"+props.workoutId+"/exercise",
            {
                methods: "GET",
                headers: {'Authorization': 'Bearer ' + localStorage.getItem("token")}
            }
        
        )
        if(!response.ok){
            throw new Error("Unable to Retrieve Exercises");   
        }

        const data = await response.json();

        const loadedExercises = [];

        for(const exerciseKey in data){
            loadedExercises.push({
                key: data[exerciseKey].exerciseId,
                exerciseId: data[exerciseKey].exerciseId,
                exerciseName: data[exerciseKey].exerciseName,
                exerciseSets: data[exerciseKey].sets,
                exerciseReps: data[exerciseKey].reps
            });
        }
        setExercises(loadedExercises);
        setExerciseLength(loadedExercises.length);
        console.log("Exercise Fetch Request Worked!");
        console.log(exercises.toString());

}

    const exerciseList = exercises.map((exerciseKey) => 
        <ExerciseList 
            key = {exerciseKey.key}
            exerciseId = {exerciseKey.exerciseId}
            exerciseName = {exerciseKey.exerciseName}
            sets = {exerciseKey.exerciseSets}
            reps = {exerciseKey.exerciseReps}
            exerciseListDecreaser = {exerciseListDecreaser}
            exerciseListIncreaser = {exerciseListIncreaser}
            />
    )


    const testExercisesString = () => {
        console.log(exercises);
        console.log(exercises.toString());
        console.log(exerciseLength);
    }

    

    useEffect(() => {
        
            fetchExercises();
            
    }, [props.workoutId, newExercisePost]);

   
    
    
    return(
        <Fragment>
        {showNewExerciseForm && 
            <NewExerciseDisplay 
            hideNewExerciseFormHandler={hideNewExerciseFormHandler}
            newExercisePostHandler={newExercisePostHandler}
            workoutId={props.workoutId}
        />
        }
        <Modal className={classes.display}>
            
            <div className={classes.display}>
                <button onClick={showNewExerciseFormHandler}>Add New Exercise</button>
                {exerciseList[exerciseIndex]}
                
            </div>
            <button onClick={props.hideExerciseModalHandler}>Close</button>
            <button onClick={fetchExercises}>Exercise Fetch Test</button>
            <button onClick={testExercisesString}>Print Exercises</button>
            <button onClick={exerciseListDecreaser}>Previous</button>
            <button onClick={exerciseListIncreaser}>Next</button>
            
            
        </Modal>
        </Fragment>
        
    )
}

export default ExerciseModal;