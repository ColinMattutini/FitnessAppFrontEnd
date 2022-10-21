import React, { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/user-auth';
import classes from './NavBar.module.css';

const NavBar = () => {

    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();

    const workoutNavHandler = (event) => {
        event.preventDefault();
        authCtx.updatedStateHandler(200);
        navigate('/workoutpage');
    }

    const calorieTrackerNavHandler = (event) => {
        event.preventDefault();
        authCtx.updatedStateHandler(250);
        navigate('/calorietrackerpage');
    }
    return (
        <div className={classes.navbar}>
            <div className={classes.holder}>
            <button>Homepage</button>
            <button onClick = {calorieTrackerNavHandler}>Calorie Tracker</button>
            <button onClick = {workoutNavHandler}>Workouts</button>
            <button>Holder</button>
            <button>Settings</button>
            </div>
            
        </div>
    )
}

export default NavBar;
