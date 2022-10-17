import Card from "../UI/Card";
import WorkoutList from "./WorkoutList";
import classes from './WorkoutPlanDisplay.module.css';
import { Fragment, useContext, useEffect, useState } from "react";
import AuthContext from "../../context/user-auth";

const WorkoutPlanDisplay = (props) => {

    const [workouts, setWorkouts] = useState([]);
    const authCtx = useContext(AuthContext);

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
            />
    );
    
    useEffect(() => {
        fetchWorkouts();
    }, []);

    return(
        <Fragment>
        
        <div className={classes.cardEdit}>
        <Card>
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