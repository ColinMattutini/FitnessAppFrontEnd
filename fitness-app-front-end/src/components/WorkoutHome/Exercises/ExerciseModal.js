import React, { useContext, useEffect } from "react";
import AuthContext from "../../../context/user-auth";
import Modal from "../../UI/Modal";
import { useState } from "react";
import ExerciseList from "./ExerciseList";

const ExerciseModal = props => {

    const authCtx = useContext(AuthContext);
    const [exercises, setExercises] = useState([]);
    const [exerciseLength, setExerciseLength] = useState(0);
    const [exerciseIndex, setExerciseIndex] = useState(0);

    const fetchExercises = async () => {
        
        const response = await fetch(
            "http://localhost:8080/api/user/"+authCtx.UUID+"/workout/"+props.workoutId+"/exercise",
            //"http://localhost:8080/api/user/cmmatt14@gmail.com/workout/23/exercise",
            {
                methods: "GET"
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
            />
    )


    const testExercisesString = () => {
        console.log(exercises);
        console.log(exercises.toString());
        console.log(exerciseLength);
    }

    const exerciseListIndexer = () => {
        if(exerciseIndex < exerciseLength - 1){
           setExerciseIndex(exerciseIndex + 1);
        }
    }

    const exerciseListDecreaser = () => {
        if(exerciseIndex > 0){
        setExerciseIndex(exerciseIndex - 1);
        }
    }

    useEffect(() => {
        fetchExercises();
    }, [props.workoutId]);

   
    
    
    return(
        <Modal>
            
            {exerciseList[exerciseIndex]}
            
            <button onClick={props.hideExerciseModalHandler}>Close</button>
            <button onClick={fetchExercises}>Exercise Fetch Test</button>
            <button onClick={testExercisesString}>Print Exercises</button>
            <button onClick={exerciseListDecreaser}>Previous</button>
            <button onClick={exerciseListIndexer}>Next</button>
        </Modal>
    )
}

export default ExerciseModal;