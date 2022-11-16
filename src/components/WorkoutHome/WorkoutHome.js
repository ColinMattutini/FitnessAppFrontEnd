import WorkoutPlanDisplay from "./WorkoutPlanDisplay";
import classes from './WorkoutHome.module.css';


const WorkoutHome = () => {

    

    return (
        <div className={classes.fillheight}>
            <WorkoutPlanDisplay />
        </div>
    )
}

export default WorkoutHome;