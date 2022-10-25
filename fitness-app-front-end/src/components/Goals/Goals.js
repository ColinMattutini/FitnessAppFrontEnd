import React, { Fragment, useContext, useEffect, useState } from "react";
import AuthContext from "../../context/user-auth";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import classes from "./Goals.module.css";
import SleepGoal from "./GoalType/SleepGoal";
import StepsGoal from "./GoalType/StepsGoal";
import WaterGoal from "./GoalType/WaterGoal";

const Goals = () => {

    const authCtx = useContext(AuthContext);
    const [sleepGoal, setSleepGoal] = useState(0);

    const fetchGoals =  async () => {
        const response = await fetch(
            "http://localhost:8080/api/goal/"+authCtx.UUID,

        )
        const data = await response.json();
        console.log(data);
        var sleepGoal = data.filter(e => e.goalType === 'SLEEP');
        var waterGoal = data.filter(e => e.goalType === 'WATER');
        var stepsGoal = data.filter(e => e.goalType === 'STEPS');

        var sleepNum = sleepGoal[0].goalNumber;
        var waterNum = waterGoal[0].goalNumber;
        var stepsNum = stepsGoal[0].goalNumber;
        
        localStorage.setItem("SLEEPGOAL", sleepNum);
        setSleepGoal(sleepNum);
        localStorage.setItem("WATERGOAL", waterNum);
        localStorage.setItem("STEPSGOAL", stepsNum);
        console.log("Goal fetch ran!");
    }

    useEffect(() => {
        if(localStorage.getItem("SLEEPGOAL") === null){
            fetchGoals();
            
        }
    })

    return(
        <Fragment>
            <Header />
            <NavBar />
            <div className={classes.fillheight}>
                <SleepGoal sleepGoal = {sleepGoal} />
                <StepsGoal />
                <WaterGoal />
               
           </div>
        </Fragment>
    )
}

export default Goals;