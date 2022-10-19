import Card from "../UI/Card";
import WorkoutList from "./WorkoutList";
import classes from './WorkoutPlanDisplay.module.css';
import { Fragment, useContext, useEffect, useState } from "react";
import AuthContext from "../../context/user-auth";
import NewWorkoutCard from "./NewWorkoutForm";

const WorkoutPlanDisplay = (props) => {

    const [workouts, setWorkouts] = useState([]);
    const [showNewWorkoutCard, setShowNewWorkoutCard] = useState(false);
    const [workoutStateUpdater, setWorkoutStateupdater] = useState(0);
    const [deleteState, setDeleteState] = useState(false);

    const authCtx = useContext(AuthContext);

    const deleteStateHandler = () => {
        setDeleteState(true);
    }

    const endDeleteStateHandler = () => {
        setDeleteState(false);
    }

    const showNewWorkoutCardHandler = (event) => {
        event.preventDefault();
        setShowNewWorkoutCard(true);
    }

    const hideNewWorkoutCardHandler = () => {
        setShowNewWorkoutCard(false);
    }

    const workoutstateUpdaterHandler = () => {
        setWorkoutStateupdater(workoutStateUpdater + 1);
    }


    const fetchWorkouts = async () => {
        try{
        const response = await fetch(
            "http://localhost:8080/api/user/"+authCtx.UUID+"/workout",
            {
                method: "GET",
                headers: {
                    
                    // 'Authorization': 'Bearer ' + localStorage.getItem("token")
                }, 
            }
        )
            if(!response.ok){
                throw new Error("Unable to Retrieve Workouts");   
            }

            const data = await response.json();

            const loadedWorkouts = [];

            for(const workoutKey in data){
                loadedWorkouts.push({
                    key: data[workoutKey].workoutId,
                    workoutId: data[workoutKey].workoutId,
                    workoutName: data[workoutKey].workoutName
                });
            }
            setWorkouts(loadedWorkouts);
            console.log("Workout Fetch Request Worked!");
        }catch{

        }
    }

    const workoutList = workouts.map((workoutKey) => 
        <WorkoutList 
            key = {workoutKey.key}
            workoutId = {workoutKey.workoutId}
            workoutName = {workoutKey.workoutName}
            showExerciseModalHandler={props.showExerciseModalHandler}
            deleteState={deleteState}
            />
    );
    
    useEffect(() => {
        fetchWorkouts();
    }, [workoutStateUpdater]);

    return(
        <Fragment>
        {showNewWorkoutCard && 
            <NewWorkoutCard 
                hideNewWorkoutCardHandler={hideNewWorkoutCardHandler}
                workoutstateUpdaterHandler={workoutstateUpdaterHandler}
            />}
        <div className={classes.cardEdit}>
        <Card>
            
            <button onClick={showNewWorkoutCardHandler}>Create Workout</button>
            {!deleteState && <button onClick={deleteStateHandler}>Delete</button>}
            {deleteState && <button onClick={endDeleteStateHandler}>Cancel</button>}
            <section className={classes.workouts}>
                <ul >
                    {workoutList}
                </ul>
            </section>
            
            
        </Card>
        </div>
        </Fragment>
    )

}

export default WorkoutPlanDisplay;